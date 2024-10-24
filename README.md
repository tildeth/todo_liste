Rapport på to-do liste

Introduktion 

"Dullens To-Do Liste" som jeg har navngivet den, er et site der er udviklet til at administrere daglige opgaver gennem en interaktiv tjek-af liste. Sitet er udviklet med HTML, CSS og JavaScript og anvender browserens localStorage til at håndtere lokalt datalagring. I denne rapport vil jeg primært fokusere på de JavaScript-teknikker og funktioner, der er implementeret i projektet.

HTML- struktur

For selve at kunne skabe layout’et og strukturen på mit site, har jeg benytte mig af et inputfelt til at indtaste nye opgaver, en "Tilføj opgave"-knap samt to sektioner til at vise henholdsvis aktive opgaver og færdige opgaver.

CSS-styling

Jeg har benytte mig af et ”barbie”/pink-tema at style sitet med. Jeg syntes det gjorde en henholdsvis basic liste lidt mere interessant at se på, derfor mine designvalg. CSS’en anvender variabler for farver, hvilket gør det let at vedligeholde og ændre site’s tema.  Derudover har jeg valgt at gøre ux-oplevelsen mere interaktiv ved at benytte mig af transform og transsition. Transform benytter jeg mig af at gøre mit element en lille smule støre og transition har jeg valgt animationens duration-time og hat også valgt at benytte ease-in-out, da jeg syntes det gør det mere behageligt at se på.
 ![image](https://github.com/user-attachments/assets/2c1b4427-f07e-4ebb-a378-8975ef84ad47)


JS

JavaScript er hjertet af sitet og styrer al interaktivitet og logik. Koden er opbygget omkring eventListeners, DOM-manipulation, og localStorage for at skabe en dynamisk og vedvarende oplevelse. I dette afsnit vil jeg gennemgå en dybere gennemgang af de mest vigtige funktioner og strukturer.

Tilføjelse af opgaver

Når siden er indlæst, bliver alle tidligere gemte opgaver hentet fra localStorage. Dette sker gennem DOMContentLoaded-begivenheden, som sikrer, at DOM'en er fuldt indlæst, inden JavaScript begynder at manipulere elementerne. Dog har jeg på mit site ikke kunne til at indlæse de gemte elementer før at jeg har tilføjet et nyt element, og har ikke kunne knække koden. 
 ![image](https://github.com/user-attachments/assets/1313a7cd-7a88-47fb-9b56-a520cef8ef67)


I denne blok initialiseres to arrays, todoList og doneList, fra localStorage. Hvis de ikke findes i localStorage, initialiseres de som tomme arrays. Denne tilgang burde sikre vedvarende data på tværs af sideindlæsninger, hvilket skaber en persistens i brugerens data. Dog har jeg på mit site ikke kunne til at indlæse de gemte elementer før at jeg har tilføjet et nyt element, før at de gamle vises.

Når brugeren indtaster en opgave og klikker på "Tilføj opgave", udløses en click-event på knappen, der tilføjer opgaven til todoList-arrayet og opdaterer både DOM og localStorage:  
![image](https://github.com/user-attachments/assets/3d71415c-be70-4333-aebc-16e055f86c86)

Her oprettes et nyt object task, der inkluderer et unikt ID, opgavetekst og en done-status, som i default er sat til false. Opgaven gemmes i todoList, og localStorage opdateres ved hjælp af updateLocalStorage()-funktionen. Efter opgaven er gemt, kaldes renderTask() for at vise opgaven i DOM'en.

DOM-manipulation og Opgavehåndtering

Funktionen renderTask() er ansvarlig for at skabe de visuelle repræsentationer af opgaverne i DOM'en. Den dynamisk genererede HTML for hver opgave indeholder knapper til at markere opgaver som færdige, fortryde færdiggørelse eller slette opgaver.
 ![image](https://github.com/user-attachments/assets/676f9801-2867-40db-a332-78f65e36187a)

Denne funktion bruger DOM-manipulation (document.createElement() og innerHTML) til at oprette nye listeelementer. isDone-parameteren bestemmer, om opgaven skal vises som en aktiv opgave eller som færdiggjort, og knapperne justeres i henhold til dette. Interaktiviteten i knapperne håndteres via click-event handlers, som gør det muligt at opdatere opgavens status i realtid.

LocalStorage

En af de vigtigste aspekter ved denne applikation er brugen af localStorage til at gemme opgaver lokalt i browseren. Dette gør, at brugeren kan forlade og genindlæse applikationen uden at miste data. 
![image](https://github.com/user-attachments/assets/2a2fb935-bce1-413b-afbd-c630e6e3e468)

Data bliver først serialiseret til JSON-format og derefter gemt i localStorage ved hjælp af setItem(). På denne måde sikres det, at opgavelisterne og den unikke taskId forbliver tilgængelige på tværs af sessioner. Dette giver en effektiv metode til at implementere persistens uden behov for en backend.

Opgaver som færdige eller u-færdige

For hver opgave kan brugeren markere den som færdig eller fortryde færdiggørelsen. Dette opnås gennem knapper, som håndterer opgavens status i begge lister (to-do og done). Funktionen completeTask() og undoTask() opdaterer opgavens status og flytter den mellem de to lister:  
![image](https://github.com/user-attachments/assets/a9607cc3-4c3e-4240-ae1a-a0c0ad46ff82)

Når en opgave markeres som færdig, bliver den fjernet fra todoList og tilføjet til doneList. Begge lister opdateres derefter, og ændringerne gemmes i localStorage. Fortryd-funktionen virker på samme måde, men omvendt, ved at flytte opgaven fra doneList til todoList.

Konklusion

Jeg er overordnet godt tilfreds med hvordan mit site har endt med at se ud. Jeg ville ønske at jeg fremtidigt ville kunne gøre at den lokale data ville blive indlæst fra start og ikke skulle tilføjes en handling før at de lokalt gemte elementer kom frem. 
Dog har denne opgave givet mig et langt bedre indblik i brugen af strings, arrays og hvordan man ved localStorage kan lave et en dynamisk vedvarende site. Derudover har jeg også fået et et bedre indblik af koncepter inden for JavaScript-programmering, såsom eventbaseret interaktion, datahåndtering og asynkron lagring af opgaver.
