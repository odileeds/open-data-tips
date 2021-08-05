---
title: Redaction
---

Removing or overwriting selected features.

Redaction refers to editing data. Redaction often refers to documents which require sensitive data to be removed although a table or database could also be redacted. 

One of the simplest ways to remove sensitive data is to simply remove it from the dataset i.e., if one column of a data set has names of individuals then this field could be deleted. 

Alternatively, they could be replaced with other values. In the latter case this could be seen as similar to pseudonymisation as long as the replacement information uses a unique identifier to ensure that individuals are distinguishable. 

Redaction can be applied to several different types of data, i.e., pdf’s etc. In this case the personal identifiable information must be identified before it can be replaced. 

This can be impractical to do manually but there are packages which can be used to simplify the task. PII Analyzer searches 2 common regular expressions to identify certain types of PII such as email addresses, credit card numbers, phone numbers etc. There are also other open source tools such as pdf-redactor 3 which have been used to redact data from PDFs. 

Of course, a user could also write their own PII identifier by utilising regular expression datasets. Once the PII has been identified these can be replaced.

## Scenarios

TKTKTK EXAMPLE SCENARIOS

## References

<https://pypi.org/project/piianalyzer/> for identifying PII in datasets. 

Python script for redacting PDFs: <https://github.com/JoshData/pdf-redactor> 

<https://github.com/madisonmay/CommonRegex>

{% include ena-cc.md %}