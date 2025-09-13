## TEAMFF Menu 

TEAMFF is a database of force fields. These following commands are used to use and manage the database. 
 
- **Admin** opens a dialog of TEAMFF management. It lists all force fields available in a database. The force fields are grouped by force field types. You can select force fields, change the order of force fields, add or remove force fields. See details [here](./TEAMFF-Admin.md). 

- **Assign** is to the command to use the selected and ordered force fields. Given a molecular model, which may contain different molecules, DFF searches parameters following the order of force field selected. The order is specified as 'Priority'; default order is in the order of 'Ascending size', as smaller force field is more specific, which has higher priority. Alternatively, you can use the 'Specified' order as set in **TEAMFF/Admin** command. The default Options for parameter assignments are 'Transfer parameters', 'Automatic parameters'. The bond orders and formal charges should be set and examined before using this command, however, by selecting the options of 'Reset bond orders' and 'Reset formal charges', DFF will compute the bond orders and formal charges automatically. The parameters assignment is done by molecules not by model which may have multiple molecules. If a molecule's parameters are not complete in one force field, DFF will move to the next force field table, until all parameters are found or failed. If all parameters are found, a unified force field is assigned to the model. Details can be seen [here](./TEAMFF-Assign.md)

- **Check-in** is used to add parameters to an force field table. This is designed for developments, as the system force fields are protected, cannot be changed.   

- **Check-out** is used to get parameters for selected models. Since it is for parameterization, parameters can only be checked out from one force field. Other options are similar to **Assign** except it does not generate automatic parameters so that you can generate required fragments to accomplish the parameterization task. 

- **Check-in** is used to add parameters to an force field table. This is designed for developments, as the system force fields are protected, cannot be changed. This should be called when a force field is made and tested. Select the force field from Project Navigator and click this command to open a [dialog](./TEAMFF-Check-in.md).   

- **New Database** creates a new database. In the dialog, browse to a folder and enter a file name for the new database. An empty database will be created.
