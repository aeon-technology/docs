# MODEL COMMANDS

Model commands are used for managing model files, including read, write, and modification, which are used in all programs except DFFLSV.

### OPEN (A) 
```
$MODEL=$OPEN
  <filepath 1>
  <filepath 2>
  ...
$End
```
This is an array command loads multiple models. Each line for a model file in formats of msd, pdb, mol2. 

### SAVE (A) 
```
$MODEL=$SAVE
  <filename 1>
  <filename 2>
  ...
$END
```
A command saves models in MSD format. The order of files is the same as loaded. The filenames can be different from the input. 

### SAVEALL (S)
```
$MODEL=$SAVEALL
```
This command saves all models to MSD files. The filenames are the same as loaded. Note that if the loaded files are in MSD format, they will be overwritten.

### CLOSE (S)
```
$MODEL=$CLOSE
```
Command closes all opened models, any changes made to the models will be lost unless saved.

### SETTYPE (D)
```
$MODEL=$SETTYPE
RULER=<typing rule>
$END
```
This command assigns atom types to opened models using a specified typing rule. The typing rule can be any typing script (such as TEAM.ext) save in the /typingScripts folder or "DEFAULT". 

### SETFC (D)
```
$MODEL=$SETFC
	REMOVE = FALSE | TRUE
	OVERWRITE = TRUE | FALSE
$END   
```
Sets the formal charges, two parameters are accepted: REMOVE and OVERWRITE.

- **REMOVE** will set all atoms to zero formal charges. This command will supersede other options. 

- **OVERWRITE** is used to treat existing values. If TRUE, all existing values will be erased and then recalculated. If FALSE, the existing values will not be changed, only atoms without formal charges will be calculated. The default is TRUE. 	

### GUESSBOND (S)
```
$MODEL=$GUESSBOND
```
A simple command that build connectivity and then calculate bond orders. The existing connectivity will be erased and recalculated using the atom-atom distances. 

### GUESSBONDORDER (S)
```
$MODEL=$GUESSBONDORDER
```
command calculates the bond orders, the existing connectivity is kept.

