# Tic-Tac-Toe

Om de applicatie te kunnen runnen

- run npm install
- ng serve (Als de angular cli geinstaleerd is)



De applicatie is opgedeeld in twee componenten:

-Game

-Playfield

Wanneer de app start, worden in de gamecomponent eerst negen speelvelden aangemaakt. Deze velden worden in de array playfields gepushed zodat ik deze later kan vergelijken. Wanneer je op een veld drukt wordt in de gamecomponent gecontroleerd op speler en of het spel eindigt. Bij het controleren van de speler wordt er gecontroleerd of speler 1 of 2 aan de beurt is aan de hand van een boolean. Dit is gedaan omdat dit spel maar met maximaal 2 spelers te spelen is.

Vervolgens wordt er in de array van de speler het nummer van het aangeklikte veld opgeslagen. Op deze manier wordt later gecontroleerd of de speler gewonnen heeft. Ook wordt het nummer in de array opgeslagen van de gespeelde velden. Hierdoor kan gecontroleerd worden of het veld niet al eens is aangeklikt. Met de length van de array wordt gecontroleerd of deze net zo lang is als de playfield array.

De manier hoe gecontroleerd wordt welk veld ingedrukt is en welk nummer dit is, wordt verstuurt vanuit de child naar de parent. Dit wordt gedaan door middel van een event-emitter. Zo geeft de field waar je op klikt door welk nummer hij heeft in plaats van in de array kijken welk nummer het is.

In de functie checkGame wordt gecontroleerd of een speler gewonnen heeft. Hier is een array aangemaakt waarin alle oplossingen staan om te winnen in tic-tac-toe. Na iedere beurt wordt er gecontroleerd of een speler gewonnen heeft. Dit doe ik doormiddel van een foreach loop. In deze loop controleer ik of de winnende combinaties voorkomen bij de arrays van de spelers. Als dit zo is komt er een tekst in beeld met dat die speler gewonnen heeft. Zijn alle vakken gebruikt maar is er geen winnaar, dan komt er draw als tekst te staan.

Om ervoor te zorgen dat de data naar de database verstuurd wordt, heb ik een service gemaakt. Via deze service worden de gegevens van speler 1 en speler 2 opgestuurd en wordt er vermeld wie de winnaar is.