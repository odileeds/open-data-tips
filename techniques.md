---
title: Data Techniques
---

# {{ page.title}}

This page contains a catalogue of data techniques.

{% assign common = site.techniques | where: "common", true %}
{% assign uncommon = site.techniques | where_exp: "item", "item.common != true" %}

## Common Techniques

{% for t in common %}
* [{{ t.title }}]({{ t.url | relative_url }})  
  {{ t.excerpt }}
{% endfor %}

## Less Common Techniques

{% for t in uncommon %}
* [{{ t.title }}]({{ t.url | relative_url }})  
  {{ t.excerpt }}
{% endfor %}
