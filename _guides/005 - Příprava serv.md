---
name: Příprava serv
---
### {{ page.name | escape }}
Nyní musíme všem servům nastavit správné ID a nastavit je do středové pozice (120°),
která se předpokládá pro správné namontování. Najděte si *stanici na přípravu serv*
(předem určená RBControl deska se správným SW), případně si na vlastní RBControl desku
[nastavovací program](https://github.com/RoboticsBrno/RB3201-RBControl-testing-software/tree/master/Servos_setup)
zkompilujte a nahrajte sami.

{% include image.html
    url="img/guides/servo_id_01.jpg"
    description=
        "Uveďtě nastavovací desku do výchozího stavu. Žlutá LED musí svítit a červená LED musí blikat. Pokud tomu tak není, zkuste resetovat ESP pomocí RST tlačítka."
    url2="img/guides/servo_id_02.jpg"
    description2=
        "Připojte první servo (id 0). Červená LED musí zhasnout, poté je ID nastaveno. Pokud se to nestane, na sériové lince ESP je výpis chyb."
%}

{% include image.html
    url="img/guides/servo_id_03.jpg"
    description=
        "Odpojte servo a stiskněte tlačítko SW1. Musí zhasnout žlutá LED, rosvítít se zelená a červená musí blikat."
    url2="img/guides/servo_id_04.jpg"
    description2=
        "Připojte druhé servo (id 1). Červená LED musí zhasnout, poté je ID nastaveno. Pokud se to nestane, na sériové lince ESP je výpis chyb."
%}

{% include image.html
    url="img/guides/servo_id_05.jpg"
    description=
        "Odpojte servo a stiskněte tlačítko SW1. Musí zhasnout zelená LED, rosvítít se modrá a červená musí blikat."
    url2="img/guides/servo_id_06.jpg"
    description2=
        "Připojte třetí servo (id 2). Červená LED musí zhasnout, poté je ID nastaveno. Pokud se to nestane, na sériové lince ESP je výpis chyb."
%}

{% include image.html
    url="img/guides/servo_id_07.jpg"
    description=
        "Odpojte servo a stiskněte tlačítko SW1. Musí se rozsvítit žlutá, zelená a modrá LED a červená musí blikat."
    url2="img/guides/servo_id_08.jpg"
    description2=
        "Připojte všechna serva za sebe do řetězu, na pořadí nezáleží. Červená LED musí zhasnout, tím je celé zapojení ověřeno. Pokud se to nestane, na sériové lince ESP je výpis chyb."
%}