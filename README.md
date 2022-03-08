# Citevent

## Wat is Citevent

Citevent is een app die alle evenementen binnen een straal van een aan te duiden aantal km weergeeft.
Deze zijn te bezichtigen in een lijst- of kaartvorm.
Als gebruiker wordt het zo heel makkelijk om events in te plannen op locaties die je al dan niet goed kent.
Bij betalende evenementen wordt de mogelijkheid als organistator aangeboden om tickets via deze app aan te bieden.

## Waarom?

Het is mij al veel voorgevallen dat je logeert in een stad (ook buitenland) waar je niks of niemand kent. 
Dit maakt het moeilijker om iets te vinden om te doen of naar een feestje te gaan.
Natuurlijk heb je ook de evenementen sectie op Facebook maar die is vrij onoverzichtelijk en geeft vaak maar weinig events weer.
De evenementen worden hier ook enkel zichtbaar als een vriend je hiervoor uitnodigt.
Er is ook geen mogelijkheid om te filteren op soort want het minder interessant maakt om naar een specifieke categorie te zoeken.
Vaak worden daar ook externe links gebruikt om tickets te kopen waardoor de user steeds naar andere pagina's moet surfen.
Het lijkt me daarom handig om één platform te ontwikkelen waarbij alle geregistreerde events opgelijst terug te vinden zijn en waarbij je ook meteen tickets kunt kopen indien nodig.

## Technisch

Ik zou er voor kiezen om te werken met Firebase.
Deze heeft een vrij simpele implementatie en is heel overzichtelijk bij het maken van een geneste database.
Firebase heeft geïmplementeerde functies voor een authenticatiesysteem wat ik zeker nodig heb voor deze app.

De app zal bestaan uit verschillende tabs.

De hoofdtab zal een overzicht zijn van events in de buurt in een listview of een kaartview die de user zelf kan kiezen.
Voor de kaartview zal ik dus via coördinaten een pin moeten voorzien per event.
Hier zijn al verschillende API's beschikbaar om te implementeren in een React-Native project.
Bij de listview moet er duidelijk een afstand staan van het event tot je huidige locatie.
Het zou leuk zijn om een navigatie-app te triggeren vanuit de app om naar de locatie zelf te navigeren.

Er zal een tab zijn met alle events die je hebt gefavoriet of naar toe gaat.

Verder zal er ook een profieltab moeten zijn waarbij je je betalingsgegevens kunt toevoegen en een overzicht krijgt van je tickets.

Er zal ook een onderscheid moeten komen tussen organisator en bezoeker tenzij ik een manier vind om deze aan één zelfde account te koppelen.

Ik zal starten met enkel events via de app zelf toe te voegen als organisator. 
Het zou leuk zijn als ik bijvoorbeeld Facebook events kan inladen in de app zodat de organisator niet op verschillende platformen steeds een event moet toevoegen.


## UI

Ik wil een overzichtelijke UI die verschillende leeftijdsgroepen aanspreekt. 
Deze app is niet bedoeld om enkel 'feest events' weer te geven maar voor iedereen wat wils uitlopend van concerten tot wijkfeesten.

De kaart moet een weergave zijn met gepersonaliseerde pins die events voorstellen in hun eigen categorie.

De flow van de app moet vrij simpel zijn maar met een aantrekkelijk design om zo verschillende doelgroepen aan te kunnen spreken.


## Platform

Ik ga mij vooral focussen op IOS met eventuele uitbreiding op Android. 
