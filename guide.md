---
layout: guide
permalink: /guide/
title: Návod na složení
---

## {{ page.title | escape }}

{% for guide in site.guides %}
<div id="{{ guide.name }}" class="section">
    {{ guide.content | markdownify }}
</div>
----
{% endfor %}