# DFFQMD Commands

The following is an example that shows running Gaussian computations on 8 processes to generate a QND file for a molecule.

```
$MODEL
   INPUT = methanol.msd
   OUTPUT = methanol.msd
$END
$TOOL
   EXE = C:\G16W\g16.exe   ! set to the path to Gaussian
   BASIS = 6-31G*
   METHOD = B3LYP
   NPROC = 8         ! number of threads
   MEMORY = 800MB    
   CHARGE = COMPUTE  ! or specific value
   MULTIP = COMPUTE  ! or specific value
$END
$OPT
   TASK = EXECUTE    ! or "INP" to save the input only
   SAVE = methanol.qmd
$END
$SCAN
   TASK = EXECUTE 
   LOAD = methanol.qmd
   SAVE = methanol.qmd
   STEPSIZE = 10.0   ! in degree for dihedral angle   
$END
$FREQ
   TASK = EXECUTE
   LOAD = methanol.qmd
   SAVE = methanol.qmd
$END
```


