# EXPORT COMMANDS

The following two commands are used for exporting models and force fields to external simulation engines. 

The models and force fields must be loaded before using these commands. In each command, only two input lines, TEMPLATE is the template file saved in the \<dff\>/data folder. These files can be customized by editing. BASENAME is the file base name (without the extension) for the output files.

### GROMACS (A)
```
$EXPORT=$GROMACS
   TEMPLATE = <template file>
   BASENAME = <file name>
$END
```

### LAMMPS (A) 
``` 
$EXPORT=$LAMMPS
   TEMPLATE = <template file>
   BASENAME = <file name>
$END
```

