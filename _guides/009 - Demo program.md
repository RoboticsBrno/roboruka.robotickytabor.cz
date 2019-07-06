---
name: Demo program
---

### {{ page.name | escape }}

V této sekci ukážeme, jak zprovoznit na Roboruce Demo program, který umožňuje ovládání celého robota z telefonu.

{% include image.html
    url="img/guides/demo_prog_00.png"
    description=
        "Stáhněte si [ZIP s programem](https://github.com/RoboticsBrno/roboruka-demo01/archive/master.zip)
        a někam ho rozbalte, aby jste ho zase našli.<br/><br/>
        _Pokud víte, co je to Git a umíte ho používat, můžete místo toho [naklonovat náš repozitář](https://github.com/RoboticsBrno/roboruka-demo01)._"
    url2="img/guides/demo_prog_01.png"
    description2=
        "Ve _File_ menu ve VSCode zvolte _Open Folder..._ a otevřte složku, kterou jste právě rozbalili."
 %}

{% include image.html
    url="img/guides/demo_prog_02.png"
    description=
        "Po otevření projektu bude VSCode chvíli pracovat, počkejte, dokud text na dolním baru nezmizí."
    url2="img/guides/demo_prog_03.png"
    description2=
        "Zkompilujte program kliknutím na fajfku na dolním baru. Kompilace selže, to je však v tomto případě správně."
 %}

 {% include image.html
    url="img/guides/demo_prog_04.png"
    description=
        "Díky kompilaci se vytvořil soubor _config.hpp_. Otevřte ho, a upravte dvě hodnoty v horní části, `OWNER` a `NAME`.<br/>
        První hodnota je vaše méno, druhá je jméno vašeho robota, nějaké vymyslete :)"
    url2="img/guides/demo_prog_05.png"
    description2=
        "Kliknutím na šipku na dolním baru program znova zkompilujte a nahrajte do robota. Tentokrát musí vše uspět bez chyby."
 %}

  {% include image.html
    url="img/guides/demo_prog_06.png"
    description=
        "Stiskněte ikonu zástrčky na dolním baru a otevřte zobrazovač sériové linky. Když restartujete robota (RST tlačítkem na UIBoardu či přímo na ESP32, vedle USB portu),
        musíte vidět řádek zvýrazněný na obrázku. **Zapište si naměřenou RAW hodnotu.**"
    url2="img/guides/demo_prog_07.jpg"
    description2=
        "Nyní musíme nakalibrovat měření napětí baterie. Multimetrem změřte napětí na konektoru od baterie, jako na obrázku. **Zapiště si naměřenou hodnotu v mV,** na obrázku jsme naměřili 7840mV."
 %}

 {% include image.html
    url="img/guides/demo_prog_08.png"
    description=
        "Vypočítejte výsledek rovnice: `napětí_mV / raw_hodnota`<br/>
        Pro příkladové hodnoty na naších obrázcích je to tedy:<br/>
        `7840 / 987 = 7.94`.<br/><br/>
        Výslednou hodnotu zapište do proměnné `BATTERY_COEFFICIENT` v souboru _config.hpp_."
    url2="img/guides/demo_prog_09.png"
    description2=
        "Prohlédněte si ostatní konfigurační hodnoty v souboru _config.hpp_ a změňte je, pokud chcete.<br/>
        Na obrázku je pro příklad označeno nastavení WiFi sítě."
 %}

 {% include image.html
    url="img/guides/demo_prog_05.png"
    description=
        "V tuto chvíli je program připraven, opět ho zkompilujte a nahrajte kliknutím na šipku."
    url2="img/guides/demo_prog_10.png"
    description2=
        "Na váš telefon s OS Android si [stáhněte aplikaci **RBController**](https://play.google.com/store/apps/details?id=com.tassadar.rbcontroller).<br/>
        Zadejte stejné jméno, jako jste psali do proměnné `NAME`. Aplikace by měla najít vaši Ruku a umožnit její ovládání."
 %}


##### Struktura kódu

Demo program je rozdělen do několika souborů.

* `src/config.hpp`: obsahuje konfigurační hodnoty. Verzi _config.hpp.default_ neupravujte, jedná se o výchozí hodnoty, nepoužívají se při kompilaci.
* `src/main.cpp`:
    * `loop()`, `setup()`: základní funkce Arduino framework, používáme pouze `setup()` pro inicializaci robota.
    * `handleCommand()`: tato funkce zpracovává příkazy poslané z aplikace RBController
    * `main_program()`: zde je hlavní funkční tělo programu, **tuto funkci bude nejspíše chtít upravovat jako první**. Ve výchozím stavu pouze vypíše info pro kalibraci a pak každou vteřinu posílá stav baterie do aplikace na telefonu.
* `src/roboruka.cpp`: obsahuje nastavení specifické pro RoboRuku - velikosti ramene ruky, robota a také inicializační volání pro všechny periferie.
* `src/motors.cpp`: algoritmus pro přepočítávání hodnot z joysticku na výkon motorů.
* `data/index.html`: tento soubor implementuje GUI vyditelné v Androidí aplikaci. Na ESP32 beží web server, který tuto stránku přeposílá do telefonu, který ji pouze zobrazuje.
* `data/arm.js`: implementace výpočtu pozic ramen ruky a jejich kreslení.
