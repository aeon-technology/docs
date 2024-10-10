# MFDFF Menu

Molecular Fragments Described Force Field

## Database
This command opens a dialog that shows then content of MFDFF database, and provides tools for managing the database. 

![alt text](image.png)

The top section is used to manage the database file. The button **Browse/New** is a command to create or open a database. The database is saved as a binary file in \<dff\>/database directory. **Refresh** updates the content of the tables, which is useful if the table has been changed.

*Note: The database can be put in any place that you have access right. If you are making any changes to a database, make a backup copy either from command line or Window explorer.*

The database has three tables, MolPPF, FragQMD, and FragMSD. MolPPF is a table of molecular type force fields (MT-FFs), FragQMD stores QMD files of fragments, and FragMSD is for MSD files to be calculated. Mouse click on the tab to see the corresponding table. 

The data can be sorted by mouse-clicking on the head of column. 

In each table, select rows and right-click mouse button will open a popup command, which contains **Download**, **Delete** for all three tables, and **Compute** for FragMSD. 

**Download** will download selected entries and save them in current directory. This is useful for examining the data, and possibly compute the data and update the entries.    

**Delete** is used for removing the selected entries. Note this operation is not reversible, make sure the database is backed up before deleting any entries.

**Compute** is only used on FragMSD table. the selected entries will be collected and open a dialog to perform the QM computations.

## Enquiry Force Field 

This command applies to any molecule models, large or small. One or multiple models can be handled at once. 

Select the model(s) from Project Navigator, click on this command to open a dialog. The dialog lists the selected files to confirm. Click **Cancel** to quit. **OK** to start the computation. A new Computation window appears to show the output of the background job.  

In the background, DFF analyzes each of the models, identify molecule types in the model, and search MolFF table for MT-FFs. If all required MT-FF are obtained, an integrated force field will be made for the model. If any MT-FF are missing, the relevant molecular types and fragments will be saved in MolType and Fragment subdirectories respectively. The Project Navigator will be updated for the new folders and files. 

## Collect Fragment QMD
Select fragments to be used for parametrization, click this command. DFF will search and download corresponding QMD files from the FragQMD table. Depending on the results of searching, several selection dialogs will appears. Respond to the questions to proceed. You can recompute all QMD, or skip existing ones. If new computations are requested, the corresponding MSD files will be collected, saved in the FragMSD table, and prompt in a QMD computation window.



## Compute QMD
This command works on fragment MSD files. Select MSD files and open this command to perform the QMD computations. The results QMD files will be saved in project tree for examination. 

## Update FragQMD
This command works on QMD files. It uploads the selected QMD files, this operation will overwrite existing entries. If successful, corresponding fragments saved in FragMSD table will be removed.  

## Parametrization
This command works on molecules types. open this command. For each molecule type, DFF will identify its constituent fragments, and download QMD from the database, and fit the QMD files to make a molecule type force field.

## Update MolPPF
Load PPF files for molecule types. Each molecule type is identified by combined smiles of the constituent fragments.

## WorkFlow
The entire procedure automated for working on molecule models. 




