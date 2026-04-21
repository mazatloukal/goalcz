# Progress – GoalCZ

## Hotovo
- Základní struktura projektu (server.js + index.html)
- Node.js proxy server řeší CORS
- Živé výsledky dnešních zápasů
- Mini tabulky v sidebaru (Premier League, Bundesliga, La Liga, Serie A, Ligue 1)
- Modal s celou tabulkou (1.–20. místo) — otevře se kliknutím na "Celá tabulka ↗"
- Ticker s živými výsledky nahoře
- Auto-refresh každých 60 sekund
- Widgety v sidebaru lze sbalit/rozbalit kliknutím
- Cache v server.js (výsledky 30 s, tabulky 5 min)
- API klíč přesunut do .env (server.js čte z process.env)
- Projekt připraven na Railway.app (server servíruje i index.html, relativní API URL, package.json)

## Aktuální stav
Projekt funguje lokálně.
Server musí být spuštěn přes `node server.js` před otevřením index.html.
Frontend načítá data z localhost:3000.

## Technické poznámky
- CORS problém řeší server.js jako proxy — přímé volání API z prohlížeče nefunguje
- API klíč: uložen v server.js (football-data.org free tier)
- Tabulky: Premier League (id 2021), Bundesliga (id 2002), La Liga (id 2014)
- Barvy: zelená = pohárová Evropa, červená = sestup

## Další kroky (nápady)
- Hosting na Railway.app aby web běžel veřejně 24/7
- Přidat stránku /program se zápasy na příštích 7 dní
- Přidat statistiky střelců
- Přidat českou ligu (pokud ji API podporuje)
- Mobilní optimalizace
- Tmavý/světlý režim
