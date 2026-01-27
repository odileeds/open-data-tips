---
title: Pseudonymisation
---

Replacing identifying features with a unique identifier that retains the reference to an individual whilst breaking the link with the `real world’ identity

One of the simplest ways to remove personally identifiable information (PII) is to simply replace it with an artificial identifier e.g. a name can be replaced with an integer ID.

In the case of multiple fields with PII (e.g., a name and address) then the combination of these fields can be replaced with a unique identifier. The remaining data retains the features in the data without revealing the individuals.

Since unique identifiers are used, the original identity can then be easily found if this information is available. The ability to link back to the original data makes it useful but also carries risk if the data linking the identifiers to individuals is obtained. Hence sufficient measures are required to keep this data separate.

The main challenge for pseudonymisation now comes down to identifying what is PII. This is not always obvious since something that is not usually PII could be in different contexts. For example, depending on the size of the data, age may not be an identifying characteristic if there are sufficient entries to mask the individual. If not, then the data is susceptible to an inference attack, where an individual can be inferred by various data mining techniques.

There are many open source tools which can be used to perform pseudo-anonymisation. In python a popular package is the faker library1 . This tool can produce artificial names, addresses, email addresses and text, amongst other things, which can then be used to replace the PII information in the document of interest. Alternatively, creating “fake” versions of the data may not be desirable and instead the data can be replaced with random integers. Generating such random numbers is generally trivial in any open source programming language

Pseudonymisation is defined within the GDPR as “the processing of personal data in such a way
that the data can no longer be attributed to a specific data subject without the use of
additional information, as long as such additional information is kept separately and subject to
technical and organizational measures to ensure non-attribution to an identified or identifiable
individual”.

## Scenarios

TKTKTK EXAMPLE SCENARIOS

## References

<https://en.wikipedia.org/wiki/Pseudonymization>

Python: <https://github.com/fzaninotto/Faker> 

And see: <https://github.com/elastic/anonymize-it> which is built on Faker. 

The digest package in R creates hashes for IDs which must have identifiers modified: <https://cran.rproject.org/web/packages/digest/index.html>.

{% include ena-cc.md %}