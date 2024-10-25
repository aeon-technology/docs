# QMD Commands

The following example shows running Gaussian computations on 8 processes to generate a QND file for a molecule.

```
$MODEL
   INPUT = methanol.msd
   OUTPUT = methanol.msd
$END
$TOOL
   EXE = C:\G16W\g16.exe
   BASIS = 6-31G*
   METHOD = B3LYP
   NPROC = 8
   MEMORY = 800MB
   CHARGE = COMPUTE
   MULTIP = COMPUTE
$END
$OPT
   TASK = EXECUTE
   SAVE = methanol.qmd
$END
$SCAN
   TASK = EXECUTE
   LOAD = methanol.qmd
   SAVE = methanol.qmd
   STEPSIZE = 10.0
$END
$FREQ
   TASK = EXECUTE
   LOAD = methanol.qmd
   SAVE = methanol.qmd
$END
```

