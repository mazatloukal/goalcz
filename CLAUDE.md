# GoalCZ – Fotbalový zpravodajský web

## Co je tento projekt
Web s živými fotbalovými výsledky, tabulkami a zpravodajstvím.
Používá Node.js proxy server kvůli CORS a football-data.org API.

## Soubory
- `server.js` — Node.js proxy server, běží na localhost:3000
- `index.html` — frontend, volá server na localhost:3000

## API
- Poskytovatel: football-data.org
- Klíč je uložen v `.env` jako `API_KEY` (načítán přes process.env)
- Free tier: 10 requestů/minutu

## Jak spustit
1. `node server.js` — spustí server na portu 3000
2. Otevřít index.html přes Live Server ve VS Code

## Pravidla pro práci
- Po každé dokončené změně aktualizuj PROGRESS.md
- Vždy testuj že server.js jde spustit bez chyb
- Komentáře v kódu piš česky
- Neměň API klíč

## Stack
- Backend: Node.js (bez frameworků, čistý http modul)
- Frontend: Vanilla HTML + CSS + JS
- Fonty: Barlow Condensed + Barlow (Google Fonts)
- API: football-data.org v4
