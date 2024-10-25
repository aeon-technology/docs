# MM Commands

### Optimization 
This example shows a optimization using estimated force field.
```
$MODEL
   E:\DFF_DEV\QMDFF_Methods\SnMcCl2\SnNcCl2\DFF.msd
$END
$FORCEFIELD
   TYPE = AMBER
   INPUT = none
   USE_CUTOFF = YES
   NBMETHOD = ATOM_BASED
   CUTOFF = 6.0
   BUFFER = 0.5
   TAIL_CORRECTION = NO
$END
$MMOPTIONS
   CONVERGENCE = 1.0E-10
   MAXSTEPS = 100
   METHOD = BFGS
$END
$PRINT
   CONSOLEXYZ = NO
$END
```

### MD Simulation 
This example show a MD simulation using estimated force field and growth VDW radii.

```
$MODEL
   P902993.msd
$END
$FORCEFIELD
   TYPE = AMBER
   INPUT = none
   EQUI = DEFAULT
   USE_CUTOFF = YES
   NBMETHOD = ATOM_BASED
   CUTOFF = 5.0
   BUFFER = 0.0
   TAIL_CORRECTION = NO
$END 
$MDJOB
   VRGSTEPS = 100
   ENSEMBLE = NVE
   TIMESTEP = 1.0
   RUNSTEPS = 100
   TEMPERATURE = 1.0
   TCONTROL = VELOCITY_SCALE
   TWINDOW = 10.0
   PEEK = 1000
$END
$PRINT
   COORDINATE = NO
   CONSOLEXYZ = NO
$END
```

### Restrained Optimization
This example shows restrained minimization in two dimensions. 

```
$MODEL
   diethanol.msd
$END
$FORCEFIELD
   TYPE = TEAM
   INPUT = diethanol.ppf
   USE_CUTOFF = NO
   EQUI = DEFAULT
$END
$MMOPTIONS
   CONVERGENCE = 1.0E-6
   MAXSTEPS = 200
   METHOD = BFGS
$END
$RESTRAINTS
TORS C1 C2 O3 H9 500 -66.6 15.0 12
TORS C2 C1 O4 H10 500 -66.6 15.0 12
$END
$PRINT
   CONSOLEXYZ = NO
$END
```


