# Make a Force Field

In this lesson, we learn how to make a force field for real simulation models, by using a polymer as example.

In Tutorial project, there is a "tutorialC1_makeFF" directory. A polymer model, `PFMO.msd` is saved for this lesson, this is called target model in this document.

## Training set
The first step of developing force field is to make a training set for parameterization. The training set must represent all force field terms required by the target model, we start with creating a new empty force field for the target model so that all required force field terms are known. 

1. Select PFMO.msd from the Project Navigator, then click **Forcefield/New Forcefield** command. The parameters impacting the force field terms can be adjusted. Select the "Force field type", leave "Atom typing rule" and "Atom type equivalence" as default, which is suitable for making a force field for normal molecules. Make sure do not select "Estimate parameters".  Click **OK** to make an empty force field. 

2. The new force field contains all required energy terms without  parameters, and it is associated with the PFMO.msd model. Click **QM Data/Fragments** command, three fragments will be obtained and saved in a subfolder "PFMO_Fragments".

3. Next step is to perform QM calculations for the fragments, which can be done by using **QM Data/Auto Compute QMD** command. This will takes a while to accomplish. When the job is done, three QMD files will be loaded to the Project.

*For convenience, these fragments have been calculated using the default parameters and saved in the MFDFF database. To download the QMD files, first open the database by using **MFDFF/Database** command. In this dialog, click **Browser/New** command, find and open the database file at `Tutorials/database/demo.db`. Then, close this dialog, and select the three fragments from Project Navigator, and click **MFDFF/Download Frag QMD** command to download the QMD files.*

## Make Fragment force field
Next, we will make a force field for the fragments using the prepared QMD files. 

1. Select the three QMD files from the Project Browser, and click  *Forcefield/New Forcefield" command to make a new force field for these fragments. Note that different force field types can be used, however, the atom typing rule and atom type equivalence should be the same as we have used for generating the fragments. 

2. Select the fragments QMD files, using the procedure explained earlier to make a force field. Examine the fitting results and the force field obtained. Note that this force field contains more energy terms than that required because of the overlaps among the fragments. 

## Assign the fragment force field to target model

The last step is to assign the obtained fragment force field to the target model, which requires less parameters than the fragments, and run a quick MD simulation to make sure the parameters are complete and stable.

1. Select the result fragment force field using the Project Navigator, and then click **Forcefield/Assign&Test** command, this will open a dialog letting you to select the target model. By default, the open directory is one level up, select and open `PFMO.msd` and then a new dialog show the paths to the force field and model files, as well as simple MD parameters. Ny default, the result force field will be named as `PFMO_TEAM.ppf` or `PFMO_AMBER.ppf`, depending on the force field type selected for the parameterization. The MD is running as NVT for condensed phase and NVE for isolated molecule, set temperature and time steps and start the run.

2. The force field will be assigned to the target model and the simulation will be played on screen. If nothing abnormal happens, the force field has complete coverage of parameters and stable for MD simulations. 

The result force field `PFMO_TEAM.ppf` or `PFMO_AMBER.ppf` is assigned to the target model `PFMO.msd`, and the model and force field can be used for simulations using LAMMPS or GROMACS.

There are two ways to save the result force field for future uses. One is to add it to TEAMFF database, another is to save the force field in MFDFF database. We will examine these two approaches in following sections. 


