# $MFDFF Commands

## $NEW (D) 
Setup a new database. The entry is filepath of the database
```
$MFDFF=$NEW
  FILENAME=<filepath>
$END
```

## $OPEN (D) 
Open an existing database. The entry is the full filename of the database
```
$MFDFF=$OPEN
  FILENAME=<filepath>
$END
```

## $CLOSE (S)
Close the open database.
```
$MFDFF=$CLOSE
```

## $UPDATE_MSD (A)
Upload or overwrite fragment MSD files in the database. 
```
$MFDFF=$UPDATE_MSD
<filepath1.msd>
<filepath2.msd>
<filepath3.msd>
...
$END
```

## $DOWNLOAD_MSD (A)
Download fragment MSD files by SMILES. The SAVE_DIR must be given.
```
$MFDFF=$DOWNLOAD_MSD
<SMILES1>
<SMILES2>
<SMILES3>
...
$END

```

## $DOWNLOAD_QMD (A)
Download fragment QMD files by indexes. The [save directory](#set_dir-a) must be set.
```
$MFDFF=$DOWNLOAD_MSD
<index1>
<index2>
<index3>
...
```

## $GET_QMD (A)
Download fragment QMD files for fragments given by MSD filepaths. The QMD will be saved in the same base filename of MSD. 
```
$MFDFF=$GET_MSD
<filepath1.msd>
<filepath2.msd>
<filepath3.msd>
...
$END
```

## $DOWNLOAD_PPF (A)

Download molecule PPF files by indexes. The [save directory](#set_dir-a)  must be given.
```
$MFDFF=$DOWNLOAD_PPF
<index1>
<index2>
<index3>
...
$END
```

$GET_PPF (A)
Download molecule PPF files for molecules given by MSD file paths. The [force field type](#ff_type-a) must be set.
```
$MFDFF=$GET_MSD
<filepath1.msd>
<filepath2.msd>
<filepath3.msd>
...
$END
```

## $DELETE_MSD (A)

## $DUMP_MSD (S)

## $FF_TYPE (A)
Set the force field type (AMBER or TEAM) which is required for searching and downloading the database for force field. 
```
$MFDFF=$FF_TYPE
<force field type>
$END
```

## SET_DIR (A)
Set a directory for saving files. 
```
$MFDFF=$SET_DIR
  <path>
$END
```

        REG_ARRAY_COMMAND("$UPDATE_QMD", QmdffUpdateQMDCommand);
        REG_ARRAY_COMMAND("$GET_QMD", QmdffGetQMDCommand);
        REG_ARRAY_COMMAND("$DELETE_QMD", QmdffDeleteQMDCommand);

        REG_ARRAY_COMMAND("$UPDATE_PPF", QmdffUpdatePPFCommand);
        REG_ARRAY_COMMAND("$GET_PPF", QmdffGetPPFCommand);
        REG_ARRAY_COMMAND("$DELETE_PPF", QmdffDeletePPFCommand);

        REG_ARRAY_COMMAND("$OPEN_PPF", QmdffOpenPPFCommand);
        REG_ARRAY_COMMAND("$MERGE_PPF", QmdffMergePPFCommand);
        REG_ARRAY_COMMAND("$ENQUIRY", QmdffEnquiryCommand);
        REG_ARRAY_COMMAND("$FRAGMENT", QmdffFragmentCommand);
        REG_SINGLE_COMMAND("$SPLIT_MODEL", QmdffSplitModelCommand);

        REG_ARRAY_COMMAND("$SET_DIR", QmdffSaveDirCommand);








