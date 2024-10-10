## TEAMFF Menu 

TEAMFF is a database of force fields. These following commands are used to use and manage the database. 
 
- **Admin** opens a dialog of TEAMFF management. It lists all force fields available in a database. The force fields are grouped by force field types. You can select force fields, change the order of force fields, add or remove force fields. See details [here](./TEAMFF-Admin.md). 

- **Assign** is to the command to use the selected and ordered force fields. Given a molecular model, which may contain different molecules, DFF searches parameters following the order of force field selected. The search is based on molecules. For any molecule, if its parameters are not complete, DFF will move to the next force field table for searching, until all parameters are found or failed. If all parameters are found, a unified force field is assigned to the model. Details can be seen [here](./TEAMFF-Assign.md)

- **Check-in** is used to add parameters to an force field table. This is designed for developments, as the system force fields are protected, cannot be changed.   

- **Check-out** is used to get parameters for selected model in one force field. This is designed for developments for the purpose of revising parameters.    

- **Check-in** is used to add parameters to an force field table. This is designed for developments, as the system force fields are protected, cannot be changed. This should be called when a force field is made and tested. Select the force field from Project Navigator and click this command to open a [dialog](./TEAMFF-Check-in.md).   

- **New Database** creates a new database. In the dialog, browse to a folder and enter a file name for the new database. An empty database will be created.
