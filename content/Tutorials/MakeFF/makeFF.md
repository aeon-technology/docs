# Make a Force Field

In this lesson, we practice how to make a force field from scratch,using a polymer as example.

In Tutorial project, there is a "tutorialC1_makeFF" directory. A polymer model, PFMO.msd is saved for this lesson, this is out target model for parameterization.

## Training set
The first step is to make a training set for parameterization. The training set represent all force field terms in the target, we start with create a new force field for the model so that all force field terms are known.

1. Select PFMO.msd from the Project Navigator, then click **Forcefield/New Forcefield** command to make a force field. Keep the default values or make your selections of the options in the dialog. Click **OK** to make an empty new force field. 

2. With the new (empty) force field is associated with PFMO.msd model, click **QM Data/Fragments** command, we will obtain three fragments in a subfolder "PFMO_Fragments".

3. Next step is to perform QM calculations for the fragments, which can be done by using **MFDFF/Compute Frag QMD** command. These fragments have been calculated and stored in the MFDFF database, we can download the QMD files by using **MFDFF/Download Frag QMD** command. 

## Fit QMD
Next we make force field using the QMD files. This force field is a superset of the force field of PFMO as the fragments edges contain extra terms.

1. Select three fragments and use *Forcefield/New Forcefield" command to make an empty force field for the fragments. Note the force field type, typing rule and equivalence level should be the same as we did earlier for PFMO.
2. Select the fragments QMD files, using the procedure explained earlier to make a force field, using commands in **Parameter** command.  
3. Examine the force field obtained.

## Test on target model

The last step is to associate the fragment force field to the target model. 
1. Select PFMO.msd node again, right-click mouse to select "Associate PPF ..." and the fragment force field we have just made made. 
2. Run **Simulation/Molecule Dynamics** to test the force field. 
