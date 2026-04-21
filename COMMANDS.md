# GoalCZ – Příkazy pro Claude Code

Tento soubor obsahuje předpřipravené příkazy. Při zadání příkazu
Claude Code ví přesně co má udělat bez dlouhého vysvětlování.

---

## LIGY A VÝSLEDKY

### /přidej-ligu [název] [id]
Přidej novou ligu do sidebaru.
- Vytvoř nový widget s mini tabulkou (top 5)
- Přidej tlačítko "Celá tabulka ↗" s modalem
- Přidej endpoint do server.js pokud chybí
- Použij stejný styl jako existující widgety
- Aktualizuj PROGRESS.md
- Příklad: `/přidej-ligu "Serie A" 2019`

### /přidej-soutěž [název] [id]
Přidej pohárovou soutěž (Liga mistrů, Liga Evropy...).
- Zobraz pouze výsledky, ne tabulku (poháry nemají klasickou tabulku)
- Přidej do sekce zápasů na hlavní stránce
- Aktualizuj PROGRESS.md

### /odeber-ligu [název]
Odeber ligu nebo soutěž ze sidebaru a ze server.js.

---

## STRÁNKY

### /přidej-stránku-program
Vytvoř stránku s programem zápasů na příštích 7 dní.
- Nový endpoint /schedule v server.js
- Nová sekce nebo stránka v index.html
- Filtrování podle ligy
- Zobraz datum, čas, týmy
- Přidej odkaz "Program" do navigace
- Aktualizuj PROGRESS.md

### /přidej-stránku-střelci [liga-id]
Vytvoř přehled nejlepších střelců dané ligy.
- Nový endpoint /scorers?id= v server.js
- Tabulka: jméno, tým, góly, asistence
- Přidej do navigace nebo jako záložku v tabulce ligy
- Aktualizuj PROGRESS.md

### /přidej-stránku-týmy [liga-id]
Vytvoř přehled týmů v lize s detailem.
- Seznam týmů s logem
- Kliknutím na tým zobraz detail: hráči, forma, pozice v tabulce
- Aktualizuj PROGRESS.md

---

## VYLEPŠENÍ UI

### /vylepši-mobile
Optimalizuj celý web pro mobilní zařízení.
- Zkontroluj všechny breakpointy
- Navigace na mobilu (hamburger menu nebo spodní lišta)
- Zápasy musí být čitelné na malém displeji
- Otestuj na šířce 375px
- Aktualizuj PROGRESS.md

### /přidej-skeleton-loading
Nahraď točící se spinner skeleton obrazovkami.
- Šedé placeholder bloky místo spinneru
- Plynulý přechod na skutečná data
- Použij stejné barvy jako design (--dark3)

### /přidej-animace
Přidej jemné animace pro lepší UX.
- Fade-in při načtení zápasů
- Pulse animace u živých výsledků
- Smooth scroll při navigaci
- Hover efekty na kartách

### /tmavý-světlý-režim
Přidej přepínač tmavého a světlého režimu.
- Tlačítko v headeru
- CSS variables pro oba režimy
- Ulož preference do localStorage

---

## SERVER A DATA

### /přidej-cache
Přidej cachování odpovědí v server.js.
- Tabulky cachuj na 5 minut (nemění se často)
- Živé výsledky cachuj na 30 sekund
- Sníží počet API requestů (limit je 10/minutu)
- Aktualizuj PROGRESS.md

### /přidej-env
Přesuň API klíč do environment variable.
- Vytvoř .env soubor
- Vytvoř .env.example (bez skutečného klíče)
- Přidej .env do .gitignore
- Aktualizuj CLAUDE.md
- Důležité před nahráním na GitHub!

### /připrav-na-railway
Připrav projekt na hosting na Railway.app.
- Přidej PORT z environment variable (Railway nastavuje PORT sám)
- Přidej start script do package.json
- Vytvoř .gitignore
- Přesuň API klíč do .env
- Zkontroluj že frontend volá správnou URL (ne localhost)
- Vytvoř README.md s instrukcemi
- Aktualizuj PROGRESS.md

### /zkontroluj-api-limity
Zkontroluj kolik API requestů děláme a optimalizuj.
- Spočítej requesty za minutu při normálním použití
- Porovnej s limitem (10/min free tier)
- Navrhni optimalizace pokud překračujeme limit

---

## KVALITA A TESTY

### /oprav-chyby
Projdi všechny soubory a najdi potenciální problémy.
- Zkontroluj chybějící error handling
- Najdi místa kde může být undefined nebo null
- Zkontroluj že všechny API endpointy mají try/catch
- Oprav vše co najdeš
- Aktualizuj PROGRESS.md

### /code-review
Udělej code review celého projektu.
- Zkontroluj kvalitu kódu
- Najdi opakující se kód který lze zjednodušit
- Zkontroluj naming conventions
- Napiš report do CODE_REVIEW.md

### /otestuj-vše
Otestuj všechny funkce projektu.
- Spusť server a zkontroluj všechny endpointy
- Zkontroluj že UI správně zobrazuje data
- Zkontroluj responzivitu
- Zkontroluj error stavy (co když API nefunguje)
- Napiš výsledky do TEST_REPORT.md

---

## RYCHLÉ PŘÍKAZY

### /stav
Přečti CLAUDE.md a PROGRESS.md a řekni mi:
- Co je hotovo
- Co se právě dělá
- Jaký je doporučený další krok

### /plán [co chci udělat]
Vytvoř detailní plán jak implementovat danou funkci.
- Rozděl na kroky
- Odhadni složitost
- Upozorni na možné problémy
- Neplni zatím, jen naplánuj

### /commit
Připrav git commit.
- Zkontroluj všechny změny
- Navrhni výstižnou commit zprávu v češtině
- Aktualizuj PROGRESS.md před commitem
