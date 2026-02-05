# MFDFF Commands

## General Functions
### NEW (D) 
```
$MFDFF=$NEW
  FILENAME=<filepath>
$END
```
Setup a new database, requires the filepath of the database file.

### OPEN (D) 
```
$MFDFF=$OPEN
  FILENAME=<filepath>
$END
```
Open an existing database. The entry is the filepath of the database

### CLOSE (S)
```
$MFDFF=$CLOSE
```
Close the open database.

### FF_TYPE (A)
```
$MFDFF=$FF_TYPE
<force field type>
$END
```
This command sets the force field type (AMBER or TEAM) which is required for searching and downloading the database for force field. 

### SET_DIR (A)
```
$MFDFF=$SET_DIR
  <path>
$END
```
This command sets a directory for saving files. 

### ENQUIRY (A)
```
$MFDFF=$ENQUIRY
<filepath1.msd>
<filepath2.msd>
<filepath3.msd>
...
$END
```

### FRAGMENT (A)
```
$MFDFF=$FRAGMENT
<filepath1.msd>
<filepath2.msd>
<filepath3.msd>
...
$END
```

### SPLIT_MODEL (S)
```
$MFDFF=$SPLIT_MODEL
```
Make molecular type for currently loaded models. 

## FragMSD Functions

### DELETE_MSD (A)

### DUMP_MSD (S)

### UPDATE_MSD (A)
```
$MFDFF=$UPDATE_MSD
<filepath1.msd>
<filepath2.msd>
<filepath3.msd>
...
$END
```
Upload or overwrite fragment MSD files in the database. 

### DOWNLOAD_MSD (A)
```
$MFDFF=$DOWNLOAD_MSD
<SMILES1>
<SMILES2>
<SMILES3>
...
$END
```
Download fragment MSD files from FragMSD table by SMILES. The [save directory](#set_dir-a) must be given.

## FragQMD Functions

### DOWNLOAD_QMD (A)
```
$MFDFF=$DOWNLOAD_QMD
<index1>
<index2>
<index3>
...
```
Download fragment QMD files by indexes. The [save directory](#set_dir-a) must be set.

### DELETE_QMD (A)
```
$MFDFF=$DELETE_QMD
<index1>
<index2>
<index3>
...
```
DELETE fragment QMD files by indexes.

### GET_QMD (A)
```
$MFDFF=$GET_MSD
<filepath1.msd>
<filepath2.msd>
<filepath3.msd>
...
$END
```
Download fragment QMD files by MSD filepaths. The QMD will be saved in the same base filename of MSD. 

## MolPPF Functions

### UPDATE_PPF (A)

        REG_ARRAY_COMMAND("$UPDATE_PPF", QmdffUpdatePPFCommand);
        REG_ARRAY_COMMAND("$GET_PPF", QmdffGetPPFCommand);
        REG_ARRAY_COMMAND("$DELETE_PPF", QmdffDeletePPFCommand);
        REG_ARRAY_COMMAND("$OPEN_PPF", QmdffOpenPPFCommand);
        REG_ARRAY_COMMAND("$MERGE_PPF", QmdffMergePPFCommand);

### DOWNLOAD_PPF (A)
```
$MFDFF=$DOWNLOAD_PPF
<index1>
<index2>
<index3>
...
$END
```
Download molecule PPF files by indexes. The [save directory](#set_dir-a)  must be given.

### GET_PPF (A)
```
$MFDFF=$GET_MSD
<filepath1.msd>
<filepath2.msd>
<filepath3.msd>
...
$END
```
Download molecule PPF files for molecules by MSD files. The [force field type](#ff_type-a) must be set.












