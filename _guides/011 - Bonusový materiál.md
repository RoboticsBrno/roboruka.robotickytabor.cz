---
name: Bonusový materiál
published: true
---
### {{ page.name | escape }}

Pokud jsi dostal nějaký bonusový materiál ke svému robotovi a váháš, jak jej připojit, přečti si následujících pár kroků k zprovoznění.

#### Driver pro motory

Driver [DRV8833](http://www.ti.com/lit/ds/symlink/drv8833.pdf) slouží k připojení dalších motorů k tvé desce RBControl. Pokud jsi skládal robota podle návodu, máš již jeden driver osazen.  
Pro správné fungování je třeba zapájet pinheady obsažené v balení s driverem jednak na samotný driver a druhak i na desku RBControl. Driver je třeba osadit vedle již stávajícího driveru.
Abychom mohli připojit motory k desce, je třeba připájet svorkovnice na desku do pozic M3 a M4.

{% include image.html
    url="img/guides/bonus_01.jpg"
    description=
        "Zde je potřeba připájet driver a svorkovnice."
%}

#### Inteligentní LED

Inteligentní LED [WS2812B](https://www.seeedstudio.com/document/pdf/WS2812B%20Datasheet.pdf) lze použít například pro designové nasvícení robota, nebo pro signalizační LED pro rychlý přehled o stavu robota.
Pro jejich fungování nelze použít napájení z již osazeného lineárního stabilizátoru na desce. Je proto nutné osadit spínaný zdroj do pozice IM3 a level shifter. LED diody se potom připojí na pinheady _iLEDA_.  
Pro ovládání lze použít knihovnu [SmartLeds](https://github.com/RoboticsBrno/SmartLeds)

{% include image.html
    url="img/guides/bonus_02.jpg"
    description=
        "LED pásek z WS2812"
    url2="img/guides/bonus_03.jpg"
    description2=
        "Zde je potřeba připájet level shifter, spínaný zdroj a pinhead pro LED diody."
%}

#### Gyroskop

3-osý gyroskop a akcelerometr [MPU6050](https://www.hwkitchen.cz/user/related_files/3osy-akcelerometr-a-gyroskop-mpu-6050-datasheet.pdf) slouží pro měření polohy vůči zemi a také gravitační zrychlení, čímž jsme schopni měřit náklon či vibrace.
Připojuje se přes rozhraní I2C k desce RBControl, které je vyvedeno nad místem pro LED a tlačítka.  
Pro programování nelze použít tradiční knihovnu [Wire.h](https://www.arduino.cc/en/reference/wire) pro Arduino, ale je nutné použít I2C driver z ESP-IDF.

{% include image.html
    url="img/guides/bonus_04.jpg"
    description=
        "Modul MPU6050"
    url2="img/guides/bonus_05.jpg"
    description2=
        "Zde jsou na desce RBControl vyvedeny piny na sběrnici I2C"
%}

#### Inteligentní servo

Aby servo správně fungovalo a nebyly kolize v komunikaci mezi ostatními servy, je třeba mu nastavit jeho unikátní ID. To lze provést speciálním nastavovacím programem, který lze nalézt [zde](https://github.com/RoboticsBrno/RB3201-RBControl-testing-software) ve složce `Servos_setup`. Serva lze libovolně řetězit za sebe, jelikož každému nastavíte unikátní ID. Nelze je ovšem zapojovat do "řetězu" donekonečna, jelikož je potřeba relativně velký proud pro jeho provoz a kabely by nezvládaly takovýto proud přenášet. Doporučujeme proto maximálně tři serva zapojit za sebe. Pro tyto účely jsou na desce RBControl další pozice pro servo konektory.

{% include image.html
    url="img/guides/bonus_06.jpg"
    description=
        "Inteligentní servo s příslušenstvím"
%}

#### Senzorická lišta

Senzorická lišta je ideálním pomocníkem pro jízdu po čáře. Slouží k detekování např. černé a bílé barvy na povrchu pod robotem. Obsahuje celkem osm senzorů, ze kterých jsou hodnoty vyčítány pomocí AD převodníku [MCP3008](https://cdn-shop.adafruit.com/datasheets/MCP3008.pdf), které s RBControlem komunikuje přes sběrnici SPI. Je možné ji připojit ke kterémukoliv volnému pinu, ale doporučujeme IO4, IO14, IO26 nebo IO27, které jsou vyvedeny u ostatních pinheadů.  
Pro ovládání lišty lze použít [tuto knihovnu](https://github.com/RoboticsBrno/Esp32-Mcp3008-LineSensor)

{% include image.html
    url="img/guides/bonus_07.jpg"
    description=
        "Senzorická lišta"
    url2="img/guides/bonus_08.jpg"
    description2=
        "Zde lze připojit senzorickou lištu. Tohle zapojení je pouze doporučené, ne jediné funkční."
%}
