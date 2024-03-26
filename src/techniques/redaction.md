---
title: Redaction
common: true
---

Redaction is the technique where certain features of the dataset are removed or made otherwise unreadable
(replacing with inert dummy data). This could apply to a field or fields across all records, or
removal of complete records.

## When might Redaction be valuable?

This is a valuable technique when the data publication risks releasing sensitive data. It is relatively simple to
acheive and is a lower-risk technique than other approaches to masking or altering the data, as there is little
residual risk of re-identification if sensitive fields or records are removed.

## Key considerations and risks

### Field-level redaction

One of the simplest ways to handle sensitive data is to simply remove it from the dataset i.e. if one
column of a data set has names of individuals then this field could be deleted.

### Record-level redaction

There may be certain records within a dataset (e.g. vulnerable customers, secret/military establishments)
which are considered so sentitive, that removing the entire row is the only way to reduice the risk of publication.

### Relationship to other techniques

The sensitive data could be replaced with other values rather than being removed.
In this case it could be considered application of alternative techniques
[obfuscation]({{ "/technique/obfuscation" | relative_url }}), 
[pshudonymisation]({{ "/technique/pshudonymisation" | relative_url }}) or
[anonymisation]({{ "/technique/anonymisation" | relative_url }}), which replaces sensitive data with an identifier
or synthetic data which retains the statistical characteristics of the dataset.

True obfuscation would replace the data with an inert string such as `xxxx` removing the value of that field or record.
A reason for doing would be to completely remove the risk of publication, whilst showing the initial structure of
the source data.

### Redaction of unstructured data

Redaction often refers to documents which require sensitive data to be removed. Given the typically unstructured nature
of this type of document compared to a database or table, this is a potentially manually intensive task.

In this case the personal identifiable information must be identified before it can be replaced. 

This can be impractical to do manually but there are tools which can be used to simplify the task. These use pattern matching
approaches to to identify certain types of PII such as email addresses, credit card numbers, phone numbers etc.

<!--
<https://pypi.org/project/piianalyzer/>
<https://github.com/JoshData/pdf-redactor> 
<https://github.com/madisonmay/CommonRegex>
-->

{% include ena-cc.md %}