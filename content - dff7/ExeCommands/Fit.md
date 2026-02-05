# Fit Commands

The command group is illustrated by example as follows. Comments starts with "!".

```
$DATA               ! QMD for fit
   relaxed.qmd
$END 
$MODEL              ! MSD, must match the QMD, if omit, will make one
   relaxed.msd
$END 
$BUNDLES            ! Bundle data for fit 
   CONFORMER = QMD
$END 
$FORCEFIELD         ! set up force field
   TYPE = AMBER
   INPUT = none
   OUTPUT = relaxed.ppf
   SAVEALL = YES
   EQUI = DEFAULT
$END 
$FITCHARGE          ! fit charge
   QMCHARGE = ESP
   FORMALCHARGE = YES
   METHOD = BONDTYPE_BASED
   SCALEFATOR = 0.8
$END
$PARAMETERS         ! parameter options
   TORSION = DEFAULT 
   AUTOREDUCE = NO
   WILDCARD = NO 
   NONBOND = NO 
   OOPA = YES 
   UNHARMONIC = NO 
   ADD = 
$END 
$COMPUTE            ! method
   FIT = NONL        ! "LINEAR", "AUTO"
   SETCharge = YES
$END 
$FITOPTIONS         ! fit options
   WEIGHTS = 100.0 10.0 1.0
   ITERATION = 10
   CONVERGENCES = 0.001  0.00001
   LAEMethod = AUTO
   AUTOCORRECT = YES
   VARIANCES = 5.0
   PENALTY = 10000
   RANGE = 0.05
$END
$PRINT              ! what to print
   DETAIL = NO
   DEBUG = NO
   VARIANCE = NO
$END
```
