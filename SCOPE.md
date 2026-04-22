# GoalCZ – Scope projektu

Tento soubor definuje co projekt má umět, jak má vypadat
a jaké jsou priority. Claude Code se řídí tímto dokumentem
při každém rozhodování.

---

## Vize projektu
GoalCZ je moderní fotbalový zpravodajský web zaměřený na
živé výsledky, tabulky a program zápasů. Cílí na české
uživatele kteří chtějí rychlý přehled evropského fotbalu.

---

## Technický stack (neměnit bez domluvy)
- **Backend:** Node.js, čistý `http` modul (bez Express)
- **Frontend:** Vanilla HTML + CSS + JS (bez frameworků)
- **API:** football-data.org v4, free tier
- **Fonty:** Barlow Condensed + Barlow (Google Fonts)
- **Hosting:** Railway.app (plánováno)

---

## Design systém (vždy dodržovat)

### Barvy
```
--red:    #e63946   (akcenty, živé zápasy, červené karty)
--dark:   #0d0d14   (pozadí stránky)
--dark2:  #16161f   (pozadí karet a widgetů)
--dark3:  #1e1e2a   (pozadí tagů, placeholderů)
--border: rgba(255,255,255,0.07)
--text:   #f0f0f0
--muted:  rgba(255,255,255,0.45)
--green:  #4ade80   (pohárová Evropa v tabulkách)
```

### Typografie
- Nadpisy: Barlow Condensed, font-weight 700
- Tělo: Barlow, font-weight 400/500
- Minimální velikost písma: 11px

### Komponenty
- Border-radius karet: 10px
- Border karet: 1px solid var(--border)
- Hover efekt: border-color rgba(255,255,255,0.15)
- Živé zápasy: border-left: 3px solid var(--red)

---

## Funkce – prioritizovaný seznam

### P1 – Musí fungovat (hotovo ✓)
- [x] Živé výsledky dnešních zápasů
- [x] Automatický refresh každých 60 sekund
- [x] Tabulky Premier League, Bundesliga, La Liga
- [x] Modal s celou tabulkou (1.–20. místo)
- [x] Ticker s živými výsledky
- [x] Node.js proxy server (řeší CORS)

### P2 – Důležité (další sprint)
- [ ] Program zápasů na 7 dní dopředu
- [ ] Přidat Serie A a Ligue 1 do tabulek
- [ ] Mobilní optimalizace
- [ ] Cache v server.js (snížit API requesty)
- [ ] API klíč do .env souboru
- [ ] Hosting na Railway.app

### P3 – Vylepšení (až bude čas)
- [ ] Nejlepší střelci ligy
- [ ] Detail týmu (hráči, forma)
- [ ] Skeleton loading místo spinneru
- [ ] Tmavý/světlý režim
- [ ] Animace a micro-interactions
- [ ] PWA (installable web app)

### P4 – Nápady do budoucna
- [ ] Push notifikace na góly
- [ ] Oblíbené týmy (localStorage)
- [ ] Česká liga (pokud API podporuje)
- [ ] Historické výsledky
- [ ] Statistiky hráčů

---

## Co projekt NENÍ
- Není to sázková platforma
- Není to sociální síť
- Neobsahuje reklamy
- Nepracuje s uživatelskými účty

---

## Limity a omezení
- football-data.org free tier: max 10 requestů/minutu
- Free tier pokrývá: PL, Bundesliga, La Liga, Serie A, Ligue 1,
  Liga mistrů, Liga Evropy, Liga konferencí
- Česká liga (Fortuna liga) není ve free tieru
- Živé minuty zápasu nejsou dostupné ve free tieru API
  (pouze status IN_PLAY, ne přesná minuta)

---

## Pravidla pro Claude Code
1. Vždy dodržuj design systém definovaný výše
2. Nikdy nepřidávej npm závislosti bez schválení
3. Po každé změně aktualizuj PROGRESS.md
4. Pokud si nejsi jistý — napiš plán a počkej na schválení
5. Testuj že server.js jde spustit před dokončením úkolu
6. Komentáře v kódu piš česky
7. Neměň API klíč ani port serveru (3000)
