---
title: Data Techniques
---

# {{ page.title}}

This page contains a catalogue of data techniques.

{% for t in site.techniques %}
* [{{ t.title }}]({{ t.url }})  
  {{ t.excerpt }}
{% endfor %}