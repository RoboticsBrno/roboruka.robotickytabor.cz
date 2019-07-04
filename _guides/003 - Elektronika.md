---
name: Elektronika
---
### {{ page.name | escape }}

#### RBControl

Řídicí elektronika je navržena jako univerzální deska pro řízení různých robotických platforem. Pro získání funkční elektroniky na provoz Roboruky stačí osadit jen některé součástky.

{% include image.html 
    url="img/guides/rbc_1.jpg" 
    description=
        "Přední strana ještě neosazené desky. Součástky se budou pájet pouze na tuto přední stranu." 
    url2="img/guides/rbc_2.jpg" 
    description2=
        "Zadní strana neosazené desky."
%}

{% include image.html
    url="img/guides/"
    description=
        "Dostatečně osazená deska pro základní funkcionalitu Roboruky."
 %}

 {% include image.html 
    url="img/guides/rbc_3.jpg" 
    description=
        "Spájíme zkratovací propojku (prostřední s 5V) dle obrázku." 
    url2="img/guides/rbc_4.jpg" 
    description2=
        "Osadíme 1ks čipu74HC595 (IC2). Dáváme si pozor na orientaci čipu. Tečka na čipu musí souhlasit s nakresleným zobáčkem na desce." 
%}

 {% include image.html 
    url="img/guides/rbc_5.jpg" 
    description=
        "Osadíme SMD 1206 kondenzátor C2 s kapacitou 100 nF. Na polaritě nezáleží." 
    url2="img/guides/rbc_6.jpg" 
    description2=
        "Osadíme SMD 1206 kondenzátory C3 a C4 s kapacitou 10 uF. Na polaritě nezáleží." 
%}

{% include image.html 
    url="img/guides/rbc_7.jpg" 
    description=
        "Osadíme diody D1 a D2. Bílý proužek na diodě musí v obou případech souhlasit s bílým proužkem nakresleným na desce." 
    url2="img/guides/rbc_8.jpg" 
    description2=
        "Osadíme rezistorové sítě RN1, RN2, RN3, RN4 a RN5. Na orientaci nezáleží." 
%}

{% include image.html 
    url="img/guides/rbc_9.jpg" 
    description=
        "Osadíme svíticí diodu POWER. Zploštělá strana diody musí souhlasit se zploštěním nakresleným na desce. Tato dioda bude svítit, právě když je Roboruka zapnutá. Doporučená barva je zelená." 
    url2="img/guides/rbc_10.jpg" 
    description2=
        "Osadíme ochranný rezistor k POWER svíticí diodě. Doporučená velikost ochranného odporu je 1,5 kOhm. Na polaritě nezáleží." 
%}

{% include image.html 
    url="img/guides/rbc_11.jpg" 
    description=
        "Osadíme rezistor R18 a R55. Jejich hodnota je 2 MOhm. Na polaritě nezáleží." 
    url2="img/guides/rbc_12.jpg" 
    description2=
        "Osadíme rezistor R5. Jeho hodnota je 100 kOhm. Na polaritě nezáleží." 
%}

{% include image.html 
    url="img/guides/rbc_13.jpg" 
    description=
        "Osadíme rezistor R2. Jeho hodnota je 82 kOhm. Na polaritě nezáleží." 
    url2="img/guides/rbc_14.jpg" 
    description2=
        "Osadíme rezistory R3, R8, R9, R10, R19 a R56. Jejich hodnota je 10 kOhm. Na polaritě nezáleží." 
%}

{% include image.html 
    url="img/guides/rbc_15.jpg" 
    description=
        "Osadíme tranzistory Q2 a Q4 BS170. Zploštělá strana tranzistoru musí souhlasit se zploštěním nakresleným na desce." 
    url2="img/guides/rbc_16.jpg" 
    description2=
        "Osadíme dutinkové lišty pro ESP32 mikrokontrolér. Tyto lišty nám umožní vyměňovat ESP32 DevKitC." 
%}

{% include image.html 
    url="img/guides/rbc_17.jpg" 
    description=
        "Osadíme stabilizátor 7805. Chadicí hliník na stabilizátoru musí být orientován směrem k popiskům. Stabilizátor připájíme k pinům OUT, GND a IN. Pin EN necháme volný." 
    url2="img/guides/rbc_18.jpg" 
    description2=
        "Připájíme výkonové tranzistory Q1 a Q3 IRF4905 (Q3 funguje jako ochrana proti přepolování). Chladicí hliník na tranzistoru musí souhlasit s bílým proužkem na desce." 
%}

{% include image.html 
    url="img/guides/rbc_19.jpg" 
    description=
        "Připájíme pinheady podle obrázku. Tyto pinheady slouží ke komunikaci přes I2C." 
    url2="img/guides/rbc_20.jpg" 
    description2=
        "Připájíme pinheady podle obrázku. Tyto pinheady slouží k připojení různých senzorů." 
%}

{% include image.html 
    url="img/guides/rbc_21.jpg" 
    description=
        "Na pinheady nasuňte jumper dle obrázku." 
    url2="img/guides/rbc_22.jpg" 
    description2=
        "Připájíme pinheady podle obrázku. Tyto pinheady slouží k připojení případných inteligentních LED." 
%}

{% include image.html 
    url="img/guides/rbc_23.jpg" 
    description=
        "Připájíme pinheady podle obrázku. Tyto pinheady slouží k zapínaní, vypínaní a resetování desky." 
    url2="img/guides/rbc_24.jpg" 
    description2=
        "Připájíme pinheady podle obrázku. Tyto pinheady slouží k připojení horní desky s tlačítky a LEDkami (UIBoard)." 
%}

{% include image.html 
    url="img/guides/rbc_25.jpg" 
    description=
        "Připájíme pinheady podle obrázku. Tyto pinheady slouží k připojení enkodérů." 
    url2="img/guides/rbc_26.jpg" 
    description2=
        "Připájíme pinheady podle obrázku. Tyto pinheady slouží pro připojení serv." 
%}

{% include image.html 
    url="img/guides/rbc_27.jpg" 
    description=
        "Ke spínanému zdroji připájíme pinheady dle obrázku." 
    url2="img/guides/rbc_28.jpg" 
    description2=
        "Připájíme spínaný zdroj IM2 do desky. Osazená část musí směřovat dovnitř desky." 
%}

{% include image.html 
    url="img/guides/rbc_29.jpg" 
    description=
        "Připájený spínaný zdroj." 
    url2="img/guides/rbc_30.jpg" 
    description2=
        "U spínacího zdroje ucvakneme přečnívající pinheady." 
%}

{% include image.html 
    url="img/guides/rbc_31.jpg" 
    description=
        "Vezmeme si velkou diodu a ucvakneme jí nožičky dle obrázku." 
    url2="img/guides/rbc_32.jpg" 
    description2=
        "Připájíme diodu D3 k desce. Bílý proužek na diodě musí souhlasit s bílým proužkem nakresleným na desce." 
%}


{% include image.html 
    url="img/guides/rbc_33.jpg" 
    description=
        "Správně připájená dioda k desce." 
    url2="img/guides/rbc_34.jpg" 
    description2=
        "Připájíme svorkovnice M1 a M2. Nejprve je zacvakneme vedle sebe a teprve potom spojené připájíme k desce otvory směrem ven z desky." 
%}

{% include image.html 
    url="img/guides/rbc_35.jpg" 
    description=
        "Připájíme svorkovnici IN otvory směrem ven z desky." 
    url2="img/guides/rbc_36.jpg" 
    description2=
        "Nachystáme si regulátor DRV8833 podle obrázku. Přiložené pinheady připájíme (delší částí nahoru) nejprve k regulátoru a teprve potom celou součástku s pinheady připájíme k desce." 
%}

{% include image.html 
    url="img/guides/rbc_37.jpg" 
    description=
        "Připájíme nachystaný regulátor DRV8833 k desce dle obrázku." 
    url2="img/guides/rbc_38.jpg" 
    description2=
        "Nachystáme si level shifter podle obrázku. Přiložené pinheady připájíme (delší částí nahoru) nejprve k level shifteru a teprve potom celou součástku s pinheady připájíme k desce." 
%}

{% include image.html 
    url="img/guides/rbc_39.jpg" 
    description=
        "Připájíme nachystaný level shifter k desce dle obrázku. Popisky na desce a na level shifteru musí odpovídat." 
    url2="img/guides/rbc_40.jpg" 
    description2=
        "Připájíme expandér do desky dle obrázku. Vykousnutí na expandéru musí souhlasit s nakresleným vykousnutím na desce." 
%}

{% include image.html 
    url="img/guides/rbc_41.jpg" 
    description=
        "Nakonec vložíme do připájených dutinek ESP32 DevKitC, který obsahuje procesor ESP32. Pomocí tohoto procesoru budeme celou Roboruku řídit. Pozorně se podívejte na nákres na desce a ESP32 DevKitC vložte podle obrázku." 
%}
----

#### Battery pack
{% include image.html
    url="img/guides/bat_01.jpg"
    description=
        "Všechny části battery packu."
    url2="img/guides/bat_02.jpg"
    description2=
        "Nabíječka pro battery pack."
%}

{% include image.html
    url="img/guides/bat_03.jpg"
    description=
        "Zadní strana nabíječky pro battery pack."
    url2="img/guides/bat_04.jpg"
    description2=
        "Vnitřní strana battery packu."
%}

{% include image.html
    url="img/guides/bat_05.jpg"
    description=
        "Vnější strana battery packu."
    url2="img/guides/bat_06.jpg"
    description2=
        "Boční stěny battery packu."
%}

{% include image.html
    url="img/guides/bat_07.jpg"
    description=
        "Kontakt pro baterie."
    url2="img/guides/bat_08.jpg"
    description2=
        "Ucvakněte část kontaktu dle obrázku."
%}

{% include image.html
    url="img/guides/bat_09.jpg"
    description=
        "Připájejte kontakty k boční stěně battery packu. Díl je nutné hodně prohřát, protože plochy jsou hodně velké. Naneste tavidlo a poté přiložte kontakt. Kontakt přidržte pinzetou a přiložte pájku s cínem."
    url2="img/guides/bat_10.jpg"
    description2=
        "Vložte držák pro dutinky do boční stěny battery packu."
%}

{% include image.html
    url="img/guides/bat_11.jpg"
    description=
        "Důkladně připájejte z obou stran."
    url2="img/guides/bat_12.jpg"
    description2=
        "Připájení z druhé strany."
%}

{% include image.html
    url="img/guides/bat_13.jpg"
    description=
        "Připájejte kontakty k boční stěně battery packu. Díl je nutné hodně prohřát, protože plochy jsou hodně velké. Naneste tavidlo a poté přiložte kontakt. Kontakt přidržte pinzetou a přiložte pájku s cínem."
    url2="img/guides/bat_14.jpg"
    description2=
        "Vložte držák pro dutinky do boční stěny battery packu."
%}

{% include image.html
    url="img/guides/bat_15.jpg"
    description=
        "Druhá strana vloženého držáku pro dutinky do boční stěny battery packu."
    url2="img/guides/bat_16.jpg"
    description2=
        "Držák na dutinky důkladně připájejte z obou stran."
%}

{% include image.html
    url="img/guides/bat_17.jpg"
    description=
        "Připájení z druhé strany."
    url2="img/guides/bat_18.jpg"
    description2=
        "Vložte boční stěnu do hlavního panelu dle obrázku. Dodržujte typ kontaktu na baterii v závislosti na vyznačené polaritě na hlavním panelu."
%}

{% include image.html
    url="img/guides/bat_19.jpg"
    description=
        "Vložte druhou boční stěnu do hlavního panelu dle obrázku. Dodržujte typ kontaktu na baterii v závislosti na vyznačené polaritě na hlavním panelu."
    url2="img/guides/bat_20.jpg"
    description2=
        "Důkladně zapájejte všechny 3 společné kontakty z obou stran."
%}

{% include image.html
    url="img/guides/bat_21.jpg"
    description=
        "Druhá strana k zapájení."
    url2="img/guides/bat_22.jpg"
    description2=
        "Vložte dutinky do otvorů dle obrázku. Dávejte pozor, aby hlubší otvory dutinek směřovaly ven z battery packu (dle obrázku dolů). Tento krok zopakujte 8x."
%}

{% include image.html
    url="img/guides/bat_23.jpg"
    description=
        "Dutinky nesmí mít přesah před battery pack. Tento krok zopakujte 8x."
    url2="img/guides/bat_24.jpg"
    description2=
        "Dutinky důkladně připájejte ke všem kontaktům, viz obrázek."
%}

{% include image.html
    url="img/guides/bat_25.jpg"
    description=
        "Vezměte si svůj battery pack a položte si jej před sebe dle obrázku."
    url2="img/guides/bat_26.jpg"
    description2=
        "Na battery pack položte dřevěný díl dle obrázku."
%}

{% include image.html
    url="img/guides/bat_27.jpg"
    description=
        "Na dřevěný díl položte nabíjecí desku dle obrázku."
    url2="img/guides/bat_28.jpg"
    description2=
        "Zasuňte banánek do dutinky dle obrázku."
%}

{% include image.html
    url="img/guides/bat_29.jpg"
    description=
        "Banánek nesmí přesahovat a zároveň se nesmí propadnout."
    url2="img/guides/bat_30.jpg"
    description2=
        "Banánky připájejte k desce."
%}

{% include image.html
    url="img/guides/bat_31.jpg"
    description=
        "Banánky připájejte i z druhé strany desky. Cínu nesmí být příliš mnoho, jinak nebude mít nabíječka dostatečný kontakt."
    url2="img/guides/bat_32.jpg"
    description2=
        "Zkratujte propojku dle obrázku."
%}

{% include image.html
    url="img/guides/bat_33.jpg"
    description=
        "Napájejte nabíjecí moduly k desce dle obrázku."
%}
