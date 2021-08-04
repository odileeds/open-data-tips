---
title: Aggregation
---

Combining data to reduce granularity of resolution, time, space or individuals

Aggregation refers to grouping of data. This could be the summing, or averaging data, or even clustering individuals. For the purposes of anonymising data, aggregation can be useful since general statistics can be generated which conceal the individuals or remove private features from the data. Aggregation can also refer to aggregating across spatial levels and/or temporal

To take smart meter data as an example again. In its raw half-hourly form, there may be many private features of a households day-to-day behaviour exposed. However, aggregating up to daily or weekly level, conceals all this behaviour. However, it may not conceal when a household is on holiday and the home is empty. In this case, aggregating across a street may be more advantageous for analysis. This both conceals the individual’s behaviour and makes it unlikely to identify individuals who have gone on holiday (unless many of the occupants go on holiday at the same time). 

## References

Python’s pandas package, <https://pandas.pydata.org/>, contains a wide range of aggregation functions including mean, median, max, min, etc. 

There is similar functionality which comes as standard in R. 

{% include ena-cc.md %}
