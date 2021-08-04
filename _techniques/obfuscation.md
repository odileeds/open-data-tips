---
title: Obfuscation
---

Process for hiding original data with modified content.

Data obfuscation or masking is a way of hiding confidential data such as credit card numbers, names etc. by using modified content whilst trying to ensure the data remains useful/meaningful.

Some common techniques are: 

* Hashing;
* Substitute values; 
* Encrypting the data with a key; 
* Shuffling the data within the same field/column; 
* Partially deleting data;
* Scrambling the characters.

As with all anonymisation techniuques, care needs to be taken that the process is not reversible. For example, a simple rotation or
substitution of characters is vulnerable to codebreaking techniques to reverse the coding.

## References

PostgreSQL has a number of masking functions: https://postgresqlanonymizer.readthedocs.io/en/latest/masking_functions/ 
Faker in Python can also be used for data masking: https://github.com/fzaninotto/Faker

{% include ena-cc.md %}