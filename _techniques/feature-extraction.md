---
title: Feature Extraction
---

Extract or generate new features from the data which hide the private data and replace.

Instead of sharing the full dataset it may be worth only sharing particular features of the data set. These could be the aggregated statistics as mentioned in the Aggregation section or other user defined values. As an example, consider EV usage. Instead of sharing the entire charging data of a user, the data could be reduced to some useful attributes such as average daily charge, maximum/minimum charge, and variance of daily charge. To conceal the data even further, these features could be clustered into a finite number of groups and instead of sharing the reduced features, representatives from each cluster could be shared instead. See Data Binning below.