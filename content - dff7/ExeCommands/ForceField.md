# FORCEFILED COMMANDS

These commands are used in several programs: DFFDB, DFFJOB, DFFFIT, DFFMM and DFFMD.

### OPEN (A)
```
$FORCEFIELD=$OPEN
   <filepath to ppf>
$END
```
Loads a force field ppf file. Each line represents a force field file. Multiple force fields can be loaded.

### CLOSE (S)
```
$FORCEFIELD=$CLOSE
```
Closes the opened force fields.

### SETCHARGE (S)
```
$FORCEFIELD=$SETCHARGE
```
Using the loaded force field to set the partial charges of loaded models.

### TEMPADJ (D)
```
$FORCEFIEL=$TEMPADJ [D]
   TEMP=<K>
$END
```
Adjust the LJ-12-6 parameters using temperature. The only parameter is the temperature in Kelvin. 

