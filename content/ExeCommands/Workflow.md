# DFFWFC Commands

## Example:

```
#DFF:DFFWFC
$DFF_BIN
  E:\DFFX\trunk\bin64w
$END
$DATABASE
  E:\DFF8_Test\demo.db
$END
$FORCEFIELD
  TYPINGRULE = Default
  FUNCTIONS = TEAM
$END
$GAUSSIAN
  GAUEXE = C:\G16W\g16.exe
  METHOD = M062X
  BASIS_SET = 6-31+G(d,p)/DGDZVP
  MEMORY = 1600MB
  NUMPROC = 8
  QMTASK = EXE
$END
$FIT_SCRIPT
  E:\DFFX\trunk\data\Templates\FitQMD.tpl
$END
$MODEL
  E:\DFF8_Test\Tutorials\tutorialC4_workflowMFDFF\P030001.msd
  E:\DFF8_Test\Tutorials\tutorialC4_workflowMFDFF\P030006.msd
  E:\DFF8_Test\Tutorials\tutorialC4_workflowMFDFF\PFMO.msd
  E:\DFF8_Test\Tutorials\tutorialC4_workflowMFDFF\boxMix.msd
$END
#END:DFFWFC
```

## Explanation

**$DFF_BIN** sets the path to EFF executable. The workflow calls several executables to accomplish the tasks. 

**$Database** sets the database to be worked with. The database can be placed in any places. 

**$FORCEFIELD** sets the typing rule and function type. The options are:
```
    TYPINGRULE = Default | <typing rule file>
    FUNCTIONS = TEAM | AMBER
```
Default typing rule is recommended. 


**$GAUSSIAN** sets Gaussian job options. GAUEXE is the path to executable, which must be set if it is not defined in the PATH environment variable. METHOD and BASIS_SET can be set differently. For consistence, they should be consistent for a database. MEMORY and NUMPROC depends on hardware limit. QMTASK can be 'EXE' or 'INP'. If set to be 'INP' the gaussian input file is saved but not executed.  

```
  GAUEXE = C:\G16W\g16.exe
  METHOD = M062X
  BASIS_SET = 6-31+G(d,p)/DGDZVP
  MEMORY = 1600MB
  NUMPROC = 8
  QMTASK = EXE
```

**$FIT_SCRIPT** is a template used for fitting the force field. The default place is shown in the example. The template can be placed in other places and the content can edited. If make modification,  make sure the replacement '%...%' must be set. 

**$MODEL** list the models to be processed. There is no limit of the length.

