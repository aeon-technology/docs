# Build a Liquid Model

Liquid models are useful for the purposes of parameterization and validation of nonbond parameters. In this lesson we show how to build pure liquid model.

Start DFF. If the project is not fully loaded, right-click on the “Tutorials” node in Project Navigator, right-click mouse to select **Refresh** to update the list. The command **Sort** can be used to arrange the sub-folders. 

In the Project Navigator, there is a “tutorialA2_liquid” subfolder. Several molecular models: “water”, “phenol”, “octane”, and “SOS” (Sodium octyl sulfate) can be used to build liquid models. 


## Build a Liquid Model

1. Let's make a mixture of water and phenol. Select water and phenol from the Project Navigator, and then open **Build/Bulk Liquid** command.  This brings up a dialog to build a liquid model. select “300” water molecules and “100” phenol molecules, set density to be “0.8”, and click Execute.

*DFF will now build a box with low density and then compress the box to the target density. The compression is a series of quick NPT simulation without sufficient relaxation. For bulky molecules, this could cause a very high energy configuration in the end. To avoid such problem, try to make an initial configuration with low density and gradually compress the box by using normal NPT MD simulations with high pressure.*

2. Select the newly built model, Click **TEAMFF/Admin** to make sure the database “TEAMFF.dffdb” is selected, set "Force Field Type" to “TEAM”, and select “TEAM-General” force field from the list. Click **OK** to close the dialog.

3. Select **TEAMFF/Assign** command to open a dialog. Rename the "Output" force field to “team.ppf”. The liquid model is listed under “Available Models”. Click **OK** to assign force field parameters for the model. 

4. When the job is complete, a force field table appears on the screen. Examine the parameters and close the force field table. Note that the models is associated with the newly obtained force field “team.ppf”, which can be verified by clicking on the model in the Project Navigator to open the Force Field Editor.  

5. The model is now ready for simulation. Open **Simulation/Molecular Dynamics** command. The options for nonbond computation can be selected by using the **Nonbond Energy** button. The group-based cutoff is recommended. If the energy of initial configuration is too high, MD simulation will stop and return an error message. Reduce the time step to smaller value (such as 0.1 - 0.001 fs) can quickly reduce the tensions in the system, then continue the simulation with normal time step.  

 