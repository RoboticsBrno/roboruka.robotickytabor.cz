---
name: Montáž elektroniky do podvozku
---
### {{ page.name | escape }}

{% include image.html 
    url="img/guides/chasi+ele_01.jpg" 
    description=
        "Pro montáž elektroniky do podvozku potřebujete:

- podvozek s namontovanými motory a koly
- řídící desku pro robota - RBControl
- dokovací desku pro BatteryPack

Řídící desku RBControl připevníme 4 šrouby M3, které byste měli mít připraveny z předešlých kroků. Desku připevníme pomocí 4 matic M3."
    url2="img/guides/chasi+ele_02.jpg" 
    description2=
        "Připevni kabely od motorů do svorkovnic na RBControlu podle obrázku.

<div class=\"alert\">Kratší kabely patří do svorkovnice M1. Delší do M2.</div>"
%}

{% include image.html 
    url="img/guides/chasi+ele_01.jpg" 
    description=
        "Dokovací desku pro BatteryPack zasuňte do podvozku podle obrázku a napájecí kabely připevněte do svorkovnic.

Červený/fialový kabel patři na kladný pól (plus) a černý/modrý kabel patří na záporný pól (mínus). Na RBControlu je póly vyznačeny pomocí symbolů **+** a **-**.

<div class=\"alert\">Dokovací desku k podvozku NELEPTE.</div>"
%}
