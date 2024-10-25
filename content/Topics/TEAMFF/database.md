# TEAMFF

TEAMFF is a database to store and manage force fields and parameters. 
Each force field is a table in the database, completely defined with specific force field type (AMBER, CHARMM, CFF, etc.), atom typing rules, and parameters. The independence of force field in the TEAMFF database allows developments of high quality force field without being constrained by existing parameters. Multiple force field in the same force field type can be used together. This greatly enhances the extensibility of TEAMFF.

The relational database model is used to implement TEAMFF, the structure is illustrated as follows:

![TEAMFF structure](teamff-struct.png)

A force field table (upper block) lists the force fields in the database. The headings are identifiers (FF_1, FF_2, …), and the tuples include force field names, functional forms, typing rules, references and flags. 
Each force field is linked to a parameter table (lower block). The headings are identifiers for parameter entries (entry_1, entry_2, …); the tuples include version number, energy terms, atom types, parameters and parameterization notes. 

Using a database to manage force fields provides a standardized interface to add, delete, copy, and extract parameters. Operations can be automated, thereby avoiding unintentional human errors. Only new entries are accepted because each entry in the database is unique, and new entries are automatically assigned to a new version number. This version number can be used as a search criterion to recall a certain range of parameters upon retrieval, and is also useful when calculations are repeated using older version parameters.

There are three sets of force fields in TEAMFF, basic, general and specific. 