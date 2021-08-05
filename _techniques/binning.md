---
title: Data Binning
---

Process the data into groups, rather than providing granular datapoints.

Certain information like ages and town of birth can be used as quasi-identifiers. By grouping data into particularly ‘buckets’ or ‘bins’ the risk of using this information for identifying individuals can be reduced. For example, ages can be put into specific age bands and town of birth could be grouped into regions or counties. 

A more advanced way to group individuals is to use supervised discrimination methods, also known as clustering methods, such as k-means and Gaussian mixture models. These methods are commonly included in most scientific programming languages. For example, Python can implement both k-means and Gaussian mixture models as part of its scikit-learn package: <https://scikit-learn.org/stable/>

## Scenarios

TKTKTK EXAMPLE SCENARIOS

## Reference

Most programming languages have methods for quantising data. 

In python for example there are the cut and qcut functions in the pandas package: <https://pandas.pydata.org/>

{% include ena-cc.md %}
