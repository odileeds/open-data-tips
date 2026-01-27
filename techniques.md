---
title: Data Techniques
---

# Data Techniques

This page contains a catalogue of data techniques.

## Common Techniques

{% for file in directory %}
* [file.title]({{ file.url }}) 
{% endfor %}


## Less Common Techniques

{% for t in uncommon %}
* [{{ t.title }}]({{ t.url | relative_url }})  
  {{ t.excerpt }}
{% endfor %}
