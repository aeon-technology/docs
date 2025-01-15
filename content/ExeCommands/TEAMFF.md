# DATABASE COMMANDS

### CREATE (D)
```
$DATABASE=$CREATE
   FILENAME=<database file>
   TABLE=<table name>
   TYPE =<force field type>
   TYPINGRULE=<typing rule>
   NOTE=<description>
$END
```
This command creates a new database with one table. Once the database is created, additional tables can be added. 
The parameters are:
FILENAME – the full path to which the database file is saved
TABLE – the name of the created table. You can add new tables after the database is created. 
TYPE – is the force field type, which can be AMBER, TEAM, CHARMM, CFF, DREIDING, etc.
TYPINGRULE – is the file of typing rules used for the force field table created.
NOTE – is appended to the table.

### OPEN (D)
```
$DATABASE=$OPEN
   FILENAME=<path to the database file>
   TABLE=<list of tables to be opened>
$END
```
Opens the database and one or multiple tables. 
FILENAME – is the full path to the database file. 
TABLE – a list of the tabled to be opened, separated by comma “,”. The order of the tables is used for Checkout and Assign commands.

### CLOSE (S)
```
$DATABASE=$CLOSE
```
Closes all tables.

### CHECKOUT (D)
```
$DATABASE=$CHECKOUT
   OUTPUT=<ppf file name>
   PAIRWISE=< FALSE|TRUE >
   TRANS=<FALSE|TRUE>
$END
```
This command checks out parameters from the tables opened for the model opened. 
All parameters are optional. 
•	OUTPUT – save the ppf file, if not given, the force field will not be saved, but kept in the memory.
•	TRANS – if parameters are not found, search similar parameters as transferred. The default is FALSE. 
•	PAIRWISE – use explicit pairwise parameters if exist. The default is FALSE.

### ASSIGN (D)
```
$DATABASE=$ASSIGN
   OUTPUT=<ppf file>
   TRANS=<FALSE|TRUE>
   AUTO=<FALSE|TRUE>
   PAIRWISE=< FALSE|TRUE >
   ATMAP=<atm file >
   FRAGMENT=<path to the folder of generated fragments>
$End
```
This command uses one or multiple forcefield tables to assign force field parameters for models opened. Note that the order of tables opened is sensitive, parameters will be taken from the tables as specified, only when the parameters are not complete the next table will be called. 
All parameters are optional. 
•	OUTPUT – save the ppf file, if not given, the force field will not be saved, but kept in the memory.
•	TRANS – if parameters are not found search and transfer similar parameters. The default is FALSE. 
•	AUTO – if parameters are missing, generate automatic parameters. The default is FALSE.
•	PAIRWISE – use explicit pairwise parameters if exist. The default is FALSE.
•	ATMAP – save the mapping scheme of atom types between the unified atom types and atom types used in each table. If not specified, the file will not be saved.
•	FRAGMENTS – the folder that saves the generated fragments which can be used to augment the parameters.
