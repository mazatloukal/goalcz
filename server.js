const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Načti .env soubor pokud existuje (pro lokální vývoj)
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  fs.readFileSync(envPath, 'utf8').split('\n').forEach(line => {
    const [key, val] = line.split('=');
    if (key && val) process.env[key.trim()] = val.trim();
  });
}

const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT || 3000;

if (!API_KEY) {
  console.error('Chyba: API_KEY není nastaven. Vytvoř .env soubor podle .env.example');
  process.exit(1);
}

// In-memory cache: klíč → { data, expiresAt }
const cache = {};

function getCache(key) {
  const entry = cache[key];
  if (entry && Date.now() < entry.expiresAt) return entry.data;
  return null;
}

function setCache(key, data, ttlMs) {
  cache[key] = { data, expiresAt: Date.now() + ttlMs };
}

function apiRequest(path) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.football-data.org',
      path: '/v4' + path,
      method: 'GET',
      headers: { 'X-Auth-Token': API_KEY }
    };
    https.get(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const url = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = url.pathname;

  // Servíruj index.html pro kořenový path
  if (pathname === '/' || pathname === '/index.html') {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, data) => {
      if (err) { res.statusCode = 404; res.end('Not found'); return; }
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end(data);
    });
    return;
  }

  res.setHeader('Content-Type', 'application/json');

  try {
    if (pathname === '/matches') {
      const date = url.searchParams.get('date') || new Date().toISOString().split('T')[0];
      const cacheKey = `matches_${date}`;
      let data = getCache(cacheKey);
      if (!data) {
        data = await apiRequest(`/matches?date=${date}`);
        setCache(cacheKey, data, 30 * 1000); // 30 sekund
      }
      res.end(JSON.stringify(data));

    } else if (pathname === '/standings') {
      const id = url.searchParams.get('id') || '2021';
      const cacheKey = `standings_${id}`;
      let data = getCache(cacheKey);
      if (!data) {
        data = await apiRequest(`/competitions/${id}/standings`);
        setCache(cacheKey, data, 5 * 60 * 1000); // 5 minut
      }
      res.end(JSON.stringify(data));

    } else if (pathname === '/team-matches') {
      const id = url.searchParams.get('id');
      const status = url.searchParams.get('status') || 'FINISHED';
      const limit = url.searchParams.get('limit') || '5';
      if (!id) { res.statusCode = 400; res.end(JSON.stringify({ error: 'Missing id' })); return; }
      const cacheKey = `team_matches_${id}_${status}_${limit}`;
      let data = getCache(cacheKey);
      if (!data) {
        data = await apiRequest(`/teams/${id}/matches?status=${status}&limit=${limit}`);
        const ttl = status === 'FINISHED' ? 2 * 60 * 1000 : 10 * 60 * 1000;
        setCache(cacheKey, data, ttl);
      }
      res.end(JSON.stringify(data));

    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: 'Not found' }));
    }
  } catch (e) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: e.message }));
  }
});

server.listen(PORT, () => {
  console.log(`✅ GoalCZ server běží na http://localhost:${PORT}`);
  console.log(`   Otevři index.html v prohlížeči nebo přes Live Server`);
});
