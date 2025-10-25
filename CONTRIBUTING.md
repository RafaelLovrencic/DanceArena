# Bugovi, značajke, dokumentacija

Prije rada na bilo kojem značajnijem aspektu projekta potrebno je otvoriti issue s odgovarajućom kategorijom u naslovu i, ako zadatak obuhvaća više elemenata, ispuniti i sekciju za opis.
**Obavezno** je i dodijeliti issue sebi ili nekome iz tima.
**Poželjno** je, ali **neobavezno**, označiti issue tagom birajući iz padajućeg izbornika neke od dostupnih.

Kategorije koje prihvaćamo u naslovu su DOKUMENTACIJA, ZNAČAJKA i BUG što mora stajati unutar uglatih zagrada kao prefiks svakog naslova.

# Commit

Svakom pushu na repozitorij prethodi commit. Commit treba sadržavati dovoljno informacija da svima bude jasno koja je promjena uvedena u projekt.
Commit može biti napisan kao poruka ili kombinacija naslova i opisa.
Budući da se poruka i naslov vide pored imena svake datoteke i direktorija u repozitoriju, moraju biti kraći, ali dovoljno **deskriptivni** da već iz njih bude jasno na čemu se sve radilo.
Za kompleksnije i opsežnije promjene potrebno je napisati i opis proizvoljne duljine u kojem moraju biti navedene sve bitne promjene u commitu.

### Zatvaranje issue-a preko commita

Zadatke zadane putem issue-a moguće je označiti kao obavljene upisivanjem ključnih riječi u **poruku** ili **naslov** od kojih prihvaćamo:
- **Fixes**
- **Resolves**
Ove su riječi ekvivalentne, no poželjno ih je koristiti semantički smisleno.

Nije uvijek potrebno obaviti sve zadatke zadane issue-om. Ako je issue samo djelomično obavljen, i to je moguće dokumentirati korištenjem ključne riječi **Refs**.

Da bude jasno koji je issue u pitanju, uz ključnu riječ treba staviti i broj issue-a prefiksiran znakom #.

# Dokumentiranje rada

1. otvoriti [issue](https://github.com/RafaelLovrencic/DanceArena-DEVTRAK/issues) prema [gornjim uputama](#bugovi,-značajke,-dokumentacija) ako je posao prikladne veličine za to 
2. zatvoriti issue
3. promjene u dokumentaciji zabilježiti u [dnevniku promjena dokumentacije](https://github.com/RafaelLovrencic/DanceArena-DEVTRAK/wiki/B.-Dnevnik-promjena-dokumentacije)
4. dodati vrijeme rada u [tablicu aktivnosti](https://github.com/RafaelLovrencic/DanceArena-DEVTRAK/wiki/C.-Prikaz-aktivnosti-grupe#tablica-aktivnosti)

# Sažetak konvencija i stil kodiranja

## Konvencije

### Naslov issue-a
\[KATEGORIJA\] <naslov>  

### Zatvaranje issue-a commitom
<ključna riječ> #<broj issue-a>: <commit poruka/naslov>

## Stil kodiranja

- Imenovanje varijabli i funkcija: camel case
- Otvorena vitičasta zagrada u istom redu kao ime funkcije, odvojena jednim razmakom od parametara
- Indentacija: 4 razmaka
- 1 razmak između parametara i argumenata funkcije
- prazan red između logičkih cjelina
- razmak između operatora i operanada
