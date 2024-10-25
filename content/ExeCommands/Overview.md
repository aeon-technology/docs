# Executable Commands

DFF package includes eight (8) executable programs that perform various tasks. 
- DFFDB – database operations on force field database TEAMFF.
- DFFEXP – export force field and prepared models to external simulation engines
- DFFQMD – operations on QM computations.
- DFFFIT – fit engine for fit parameters of QM and liquid data.
- DFFMD – MD engine for validation.
- DFFMM – MM engine for validation.
- DFFJOB – background engine working with JAVA and Python interfaces.
- DFFLSV – License management

These programs are executed using three types of objected oriented commands: single [S], array [A] and dictionary [D].
 - Single [S] command requires no parameter.  
 - Array [A] command has a list of parameters, ended with `$END`. 
 - Dictionary [D] command has a list of parameters as `KEYWORD=VALUE`; ended with `$END`.

In the following text, we will explain the commands by objects: Model, ForceField, Database, Computations. 
We will use the following syntax in the content:
 - Brackets (<…>) indicates contents to be filled.
 - A vertical divider (|) indicates alternative values.
 - Bold face indicates mandatory entries. Normal face indicates optional entries. 
 
