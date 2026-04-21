# GoalCZ

Živé fotbalové výsledky, tabulky a zpravodajství. Data z [football-data.org](https://www.football-data.org).

## Lokální spuštění

```bash
# 1. Vytvoř .env soubor
cp .env.example .env
# Doplň svůj API klíč z football-data.org

# 2. Spusť server
node server.js

# 3. Otevři prohlížeč
# http://localhost:3000
```

## Hosting na Railway.app

1. Nahraj projekt na GitHub
2. Na [railway.app](https://railway.app) vytvoř nový projekt → **Deploy from GitHub repo**
3. V nastavení projektu přidej environment variable:
   - `API_KEY` = tvůj klíč z football-data.org
4. Railway automaticky nastaví `PORT` a spustí `npm start`
5. Web bude dostupný na Railway URL

## Stack

- **Backend:** Node.js (čistý `http` modul, bez frameworků)
- **Frontend:** Vanilla HTML + CSS + JS
- **API:** football-data.org v4, free tier (10 req/min)
