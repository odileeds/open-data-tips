---
title: Data Techniques
permalink: /techniques/
---

This folder contains detailed breakdowns of techniques that can be used when dealing with data.
Some are related to risk mitigation, others are more performance focussed.

## Common Techniques

{% for file in ./ %}
* [file.title]({{ file.url }}) 
{% endfor %}


## Less Common Techniques

{% for t in uncommon %}
* [{{ t.title }}]({{ t.url | relative_url }})  
  {{ t.excerpt }}
{% endfor %}


