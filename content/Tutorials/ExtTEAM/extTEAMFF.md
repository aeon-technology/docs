# TUTORIAL C2 - Extend TEAMFF 

In this lesson, we practice how to add new force field to TEAMFF. This is done by adding a new force field table, which is the most simple and straightforward method to extend the coverage of TEAMFF. 
We will use the force field file we have obtained in previous lesson, assume it is `PFMO_AMBER.ppf`.

The TEAMFF database is saved in \<dff\>/database folder. If this folder is protected, the database file may not be writable. You must get the write permission before running this tutorial. It is a good practice to make a copy of the database. The database includes one binary file (TEAMFF.TEAMFF) and a folder in the same root-name (TEAMFF) in the database folder.

1.	We first created a new table in TEAMFF database. Click **TEAMFF/Admin** command to open `TEAMFF.dffdb` database. Select "AMBER" as the force field type as we have an AMBER force field. If you have made a force field in other type, make sure it is consistent here. The dialog lists several force-field tables in selected force field type. Click **Add** button on the right panel to open a new dialog for adding a table. Enter MyFF as the force field name and select the same force field type. Select typing rules, which must be the same as those used for force field to be checked in. In the Description, enter a brief note for the force field. Clicking **OK** to close this dialog. A new force field table is listed in the TEAMFF Admin dialog.

2. Before checking in parameters, DFF prompts another test to make sure the parameters are ready for checking in. Only entries marked as “D” denoting “developed” can be checked in. If the parameters are obtained by fitting, the entries will be marked as “D”. Delete entries of “E0”, which are not energy parameters but the values to set relative energies, then select all entries, right-click mouse button to select “Label as “D”” command. Repeat the operation for the “Equivalence Table”. 

3. Now we proceed to check in the force field. Select the force field from the Project Navigator and click **TEAMFF/Check in** command. Make sure the force field table, “MyFF”, is selected. Enter a Description for this task, and then click OK. A pop-up window will display the number of parameters will be checked in. Click OK to continue.

4.	The parameters should be added successfully. To verify it, open TEAMFF Admin page again. Make sure the force field type is correct, you may need to Refresh the list. Select the “MyFF” table, we will test this force field.

5.	Select "PMOF.msd” in the Project Navigator and use **TEAMFF/Check out** command to check out the parameters. Make sure the force field is selected correctly, click **OK** to execute. The parameters checked out are associated with the molecule, which can be tested by running simulations.

The new force field can be used together with existing force fields in the same force field type in TEAMFF. Therefore, this is ideal approach to get better coverage of molecules of interest.

However, this force field is good for the target molecule. Since the parameters are identified by atom types (together with typing rule) in the database, the parameters may be suitable for similar molecules that share the same atom types, but the quality is uncertain and the coverage is likely incomplete. The problems are general for the force field identified by atom types. To add new coverage, a reasonable approach is to refit all parameters with additional fragments. Apparently this approach will soon become unmanageable. 

MFDFF provides a new approach: instead of saving parameters by atom types, parameters are saved by molecule types, which makes extension of the coverage much more easier, we will examine how to use MFDFF and then see how to expand it coverage. 
