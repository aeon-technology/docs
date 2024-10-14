# TUTORIAL C2 - Extend TEAMFF 

In this lesson, we extend the TEAMFF by adding a new force field table. Let’s use the force field file we obtained in previous lesson, make a new force field table in TEAMFF, and upload the force field to the table.

The TEAMFF database is saved in \<dff\>/database folder. If this folder is protected, the database file may not be writable. You must get the write permission before running this tutorial. It is also a good practice to make a copy of the database. The database includes one binary file (TEAMFF.TEAMFF) and a folder in the same root-name (TEAMFF) in the database folder.

1.	We first created a new table in TEAMFF database. Click **TEAMFF/Admin** command to open “TEAMFF.TEAMFF” database. Select TEAM as the force field type as we have made a TEAM force field in previous lesson. If you have made a force field in other type, make sure it is consistent here. The dialog lists several force-field tables in selected force field type. Click **Add** button on the right panel to open a new dialog for adding a table. Enter MyFF as the force field name and select the same force field type. Select typing rules, which must be the same as those used for force field to be checked in. In the Description, enter a brief note for the force field. Clicking **OK** to close this dialog. A new force field table is listed in the TEAMFF Admin dialog.

2. Before checking in parameters, DFF prompts another test to make sure the parameters are ready for checking in. Only entries marked as “D” denoting “developed” can be checked in. If the parameters are obtained by fitting, the entries will be marked as “D”. Delete entries of “E0”, which are not energy parameters but the values to set relative energies, then select all entries, right-click mouse button to select “Label as “D”” command. Repeat the operation for the “Equivalence Table”. 

3. Now we proceed to check in the force field. Select the force field from the Project Navigator and click **TEAMFF/Check in** command. Make sure the force field table, “MyFF”, is selected. Enter a Description for this task, and then click OK. A pop-up window will display the number of parameters will be checked in. Click OK to continue.

4.	The parameters should be added successfully. To verify it, open TEAMFF Admin page again. Make sure the force field type is correct, you may need to Refresh the list. Select the “MyFF” table, we will test this force field.

5.	Select "PMOF.msd” in the Project Navigator and use **TEAMFF/Check out** command to check out the parameters. Make sure the force field is selected correctly, click **OK** to execute. The parameters checked out are associated with the molecule, which can be tested by running simulations.

The new force field can be used together with existing force fields in the same force field type in TEAMFF. 
