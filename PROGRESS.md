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
- Redesign navigace: taby Live / Dnes / Tabulky v headeru
- Live tab: filtruje pouze IN_PLAY a PAUSED zápasy
- Tabulky tab: full-width grid se všemi 8 soutěžemi (5 lig + UCL + UEL + UECL)
- GF a GA sloupce ve všech tabulkách (sidebar: kompaktní Skóre, full/modal: separátní GF GA)
- Detail týmu: klik na tým → slide-in panel zprava
  - Forma: V/R/P kolečka (zelená/žlutá/červená) za posledních 5 zápasů
  - Poslední zápasy s barevným skóre (zelená=výhra, žlutá=remíza, červená=prohra)
  - Nejbližší zápasy (TIMED + SCHEDULED, přes dateFrom parametr)
- server.js: /team-matches podporuje dateFrom a dateTo parametry
- Mobilní optimalizace (spodní navigace, touch targets, bottom-sheet modal, padding)
- **Tabulky view redesign (2026-04-22):**
  - Accordion karty — klik na ligu otevře celou tabulku, jinak vidíš jen logo + název
  - Logo soutěže se načte z API při prvním otevření
  - UCL, UEL, UECL: přepínání mezi Ligová fáze a Pavouk
  - Pavouk: zápasy vyřazovací fáze seřazené podle kola
  - Klik na tým v tabulce → otevře panel s posledními 5 zápasy (V/R/P)
  - server.js: nový endpoint /competition-matches pro zápasy soutěže
- **Vizuální bracket UCL/UEL/UECL (2026-04-22):**
  - Pavouk přepracován na horizontální bracket s CSS linkami
  - Sloupce zleva doprava: KO Play-off → Osmifinále → Čtvrtfinále → Semifinále → Finále
  - Každý zápas jako karta: logo | název týmu, skóre uprostřed, winner tučně bíle
  - CSS border-based konektory (vertikální čára + horizontální rameno) mezi koly
  - Horizontální scroll na mobilech (overflow-x: auto)

## Aktuální stav
Projekt běží na Railway.app (online).
Pro lokální vývoj: `node server.js`, pak otevřít v prohlížeči.

## Technické poznámky
- CORS problém řeší server.js jako proxy — přímé volání API z prohlížeče nefunguje
- API klíč: uložen v .env jako API_KEY (football-data.org free tier)
- Liga ID: PL=2021, BL=2002, La Liga=2014, SA=2019, L1=2015, UCL=2001, UEL=2018, UECL=2017
- Barvy: zelená = pohárová Evropa/výhra, červená = sestup/prohra, žlutá = remíza

## Další kroky (nápady)
- Přidat stránku /program se zápasy na příštích 7 dní
- Přidat statistiky střelců
- Přidat českou ligu (pokud ji API podporuje)
- Tmavý/světlý režim
- Skeleton loading místo spinneru
