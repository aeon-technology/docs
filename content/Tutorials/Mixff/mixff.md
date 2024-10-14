# Use Multiple Force Fields of TEAMFF

In this tutorial, we will practice how to use two force fields in one simulation. This example demonstrates one of the unique features of TEAMFF. Because each force field is independently developed, the force fields can be parameterized accurately. Upon use, different force fields can be applied to different molecules depending on which provides a better coverage. Interactions between the different molecules are described by nonbond energy terms only, for which the regular combination rules are applied.

In this lesson, we will use a model consisting of zeolite (MOR) interacting with two xylene molecules. For convenience, a sample file “MOR_2Xylene.msd” is provided in the Tutorial directory.

1. Start DFF and open the project "Tutorials.dpf" if it has been closed. Open “tutorials/tutorialA5_mixFF” folder, a unit cell containing two xylene molecules caged in zeolite is listed. Open the model.

The model contains two different kinds of materials, zeolite, and organic molecules, which are described using different force fields in TEAMFF. There are two ways to use these force fields, the simplest way is set the order of force field in TEAMFF so that the force fields are used in the order as specified. Another is to define subsets and use different force fields for different subsets. 
We will first use the order method, and then the subset method which gives us more specifically control.
USING THE ORDER OF TABLES

2. Click **TEAMFF/Admin**, load “TEAMFF.TEAMFF”, select TEAM as the force field type, and select two force fields, “TEAM-General” and “TEAM-Zeolite”, which is indicated by the check mark in the first column. Since we will use the order to get parameters, make sure the more specific force field, TEAM-Zeolite, is on top of TEAM-General. If the order is different, select a line and use the buttons Up and Down to adjust its position.

<img src="image-8.png" 
    alt="alt text" 
    width="400" height="150"
    style="display: block; margin: 0 auto" />

3. With the force fields are selected, click **TEAMFF/Assign**. Make sure the “Use the order of selected tables” is selected, leave other options as given, and then click OK to launch the job. A new force field will be generated and associated with the model. 
 
<img src="image-9.png" 
    alt="alt text" 
    width="300" height="200"
    style="display: block; margin: 0 auto" />

4. To verify the force field is set properly. Use **Simulation/LAMMPS** command to launch a short MD simulation. When the job is done, using **Simulation/Trajectory** to see the simulation trajectory or examining LAMMPS output file to verify the simulation is carried out successfully.
Note: DFF does not support simulations of crystals.  

## USING SUBSETS
To use subsets to assign force field for different part of model, we first set the subsets.

1. Click **Build/Subsets**. In the pop-up dialog, select the “automatic – to set subsets using connectivity” option and click Execute. This will create two subsets based on connectivity – one for the zeolite and another for the xylene molecules. 
 
<img src="image-10.png" 
    alt="alt text" 
    width="300" height="200"
    style="display: block; margin: 0 auto" />

2. Click Rename to rename the subsets as shown below. Click OK to close both dialogs. Click “Save” command to save the model.
 
<img src="image-11.png" 
    alt="alt text" 
    width="200" height="130"
    style="display: block; margin: 0 auto" />

3. Click **TEAMFF/Admin**, load “TEAMFF.TEAMFF”, select TEAM as the force field type, and select two force fields, “TEAM-General” and “TEAM-Zeolite”. Close the dialog.
Since we will use subsets to assign different force field, the order does not matter in this case. 

4. Click **TEAMFF/Assign**. In the “Assign force field parameters” dialog, select “Select table for subset” and click Mapping to open another dialog to choose force field table for each subset as shown below:

<img src="image-12.png" 
    alt="alt text" 
    width="250" height="180"
    style="display: block; margin: 0 auto" />


Click OK to close the dialogs. Leave other options in “Assign force field parameters” dialog unchanged, and then click Ok to begin the assignment process. When the job is completed, a force field will be loaded showing parameters taken from two tables.

5. To verify the force field has been set properly. Use **Simulation/LAMMPS** command to launch a short MD simulation. When the job is done, using **Simulation/Trajectory** to see the simulation trajectory or examining LAMMPS output file to verify the simulation is carried out successfully.
 
