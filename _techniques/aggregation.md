---
title: Aggregation
---

Aggregation is one process of de-identification and refers to the process of grouping together raw data and providing this in a summarised form. Aggregation can take place in several ways including:

* Time e.g. 30-minute intervals, daily, or weekly;
* Geographic location e.g. by MSOA, LSOA, postcode or at a street levell
*	Characteristics of individuals e.g age-group, or family-size.

Datasets at the individual-level typically contain the greatest level of detail and are most valuable for analysis, but the goal of maximizing the value of the data must be balanced with the need for privacy and security.

# Underlying assumptions

Many datasets contain personal information or sensitive data that cannot be published or shared with others in a raw form. By aggregating data, you are reducing the risk of individuals, single organisations, or instances being identified. This creates some loss in accuracy, but the loss in accuracy is made up for by:

* Increasing privacy and security, 
* Reducing the volume of data hosted by a data publisher,
* Reducing the volume of data that data re-users will use, reducing time and computer power needed to query large datasets,
* Allowing data derived from personal or sensitive data to be openly or publicly published, allowing others the opportunity to reuse the data.

The goal is to reduce the risks for identification while still allowing overall patterns to be identified by data re-users.

# Key considerations and risks

## Reidentification

The primary concern is the risk of re-identification from an aggregated dataset. Even after a dataset has been aggregated and direct identifiers such as name or address removed, it may be possible to identify individuals and organisations. 

This could be through combining aggregated data with other datasets, or it could be that there are only a small number of individuals or organisations represented within categorisations of aggregated data. There are over [55,000 postcodes](https://www.ons.gov.uk/aboutus/transparencyandgovernance/freedomofinformationfoi/numberofukpostcodeswhichonlyhaveonehousehold?:uri=aboutus/transparencyandgovernance/freedomofinformationfoi/numberofukpostcodeswhichonlyhaveonehousehold) in England and Wales that contain only one household, and data released at the postcode level without considering these instances would inadvertently reveal information about those individual households. To mitigate this, it might be possible to publish data at a postcode level, and where there are single household postcodes, include data relating to these in neighbouring areas.

## Granularity and how the data is aggregated

Balanced against the risk of identification is the need to ensure that the data is of sufficient granularity to provide value for the data reuser. Data aggregation removes individual variation and loss of this may impact analysis undertaken. For instance, while there may be no correlation between family income and educational achievement when aggregated at a local authority or city level, there may be a strong relationship between these at an individual level. 

Smart meter data is a classic example of the tensions between granularity and re-identification risks. If shared with external parties on a half-hourly basis, there may be many household activities exposed; when adults are at work, when everyone goes to bed, or when an electric vehicle is being charged. These increase security risks to the household.  

Aggregating smart meter data conceals these patterns. However, it may not conceal when a household is on holiday and the home is empty. Furthermore, the specific value that a data re-user may be looking for might be in understanding how households are using data on an ongoing basis. A possible solution might be to aggregate energy use across a street, which conceals the behaviour of a single household, although it may make it easy to identify when a given street is mostly empty.

## Engage with communities

If the data you are aggregating is personal data, you need to consider whether there are any GDPR implications related to collecting, using, and sharing this data.

Considering how to be transparent with individuals about how you will share data, the codes of practice that will guide the ethical sharing of data, and how individuals might choose to have their data excluded. 













Combining data to reduce granularity of resolution, time, space or individuals

Aggregation refers to grouping of data. This could be the summing, or averaging data, or even clustering individuals. For the purposes of anonymising data, aggregation can be useful since general statistics can be generated which conceal the individuals or remove private features from the data. Aggregation can also refer to aggregating across spatial levels and/or temporal

To take smart meter data as an example again. In its raw half-hourly form, there may be many private features of a households day-to-day behaviour exposed. However, aggregating up to daily or weekly level, conceals all this behaviour. However, it may not conceal when a household is on holiday and the home is empty. In this case, aggregating across a street may be more advantageous for analysis. This both conceals the individual’s behaviour and makes it unlikely to identify individuals who have gone on holiday (unless many of the occupants go on holiday at the same time). 
