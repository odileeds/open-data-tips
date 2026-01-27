This folder contains detailed breakdowns of techniques that can be used when dealing with data.
Some are related to risk mitigation, others are more performance focussed.

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


