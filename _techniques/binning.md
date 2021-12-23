---
title: Data Binning
common: true 
---

Data Binning is a technique which can preserve the granularity of data — keeping individual-level
records — whilst reducing the ability to readily identify individuals. This recognises that certain
information like ages and town of birth can be used as quasi-identifiers. Implementing data-binning
replaces a specific field such as age with a reference to a 'bucket' or 'bin', such as age range.
This can reduce the risk of using this information for identifying individuals.

> Typically, the technique is focussed on reducing the **probability** of a risk occurring - assuming
> the risk is associated with reidentification. The **impact** of the risk if it occurs is unaffected.

## When might Data Binning be valuable? 

This is a useful technique if the value of the dataset resides in the ablility to analyse the features
of individual entries, rather than descriptive statitics that might be released in a
[summarised or aggregated]({{ "/technique/aggregation" | relative_url }}) data set. If the individual fields are otherwise too risky to
release, comprising personal or other sensitive data, a binned version can provide a means of reducing
the risk of identifying an individual.

## Key considerations and risks

Data binning is a relatively simple and understandable technique that retains much of the value in the
raw data. The following considerations will allow a safe release.

### Select an appropriate data bin

Examples of data binning methods might include:

Specific data | Data Bin | Example
--------------|----------|------------
Age | Age Range | 15-19, 20-24
Date of birth | Year or decade of birth | 1950s, 1960s
Full postcode | [Postcode outward code](https://en.wikipedia.org/wiki/Postcodes_in_the_United_Kingdom#Formatting) | HX7
Full postcode | [Administrative region](https://www.ons.gov.uk/methodology/geography/ukgeographies/administrativegeography) | Calderdale
Full postcode | [Census geography](https://www.ons.gov.uk/methodology/geography/ukgeographies/censusgeography) | MSOA

Be careful when selecting data bins that related datasets might have different bins, rendering it
tricky to compare between datasets. ONS data, for example, uses 5-year age bands (0-4, 5-9, etc).
Selecting incompatible age binning (16-21, 22-26, etc) will make the datasets less valuable.

### Residual reidentification risk

The threat of reidentification is significant where there are small populations that fit a given
categorisation. As an example people living in a sparsely populated rural geographic area (e.g.
postcode) might still be be identifiable if there are a small number of people in a given age band.
If there are other identifying characteristics, it can be possible to identify individuals in the
dataset. Under these circumstances, [redaction](./redaction) or [aggregation](./aggregation) might
also be required.

{% include ena-cc.md %}
