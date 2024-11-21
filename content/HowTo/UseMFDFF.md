# Use and Extend MFDFF

MFDFF is a system that makes force fields on-the-fly using database of molecule type force fields and fragment QM data sets. The database has three tables: MolPPF, FragQMD and FragMSD for molecule type force fields, fragment QMD data set, and fragments to be calculated, respectively. To use MFDFF, follow the three steps below.   

## 1. Enquire Force Field

The first step is search database to see if required molecule type force fields are available in the database for the molecular model of interest. If yes, a force field will be constructed using the molecule type force field and assigned to the model, the task is done. If any molecule type force fields are missing, the molecule types and their constituent molecular fragments will saved for new force field developments. This step is done by using **MFDFF/Enquiry PPF** command.  

## 2. Update FragQMD

This step aims to collect QM datasets of identified fragments for parametrization. First, search the database for QMD files of the fragments. Fragments that do not have QMD saved in the database will be saved in FragMSD table. It is optional to submit QM computations from DFFWin or collect the tasks and submit the computations externally. The computations are done by using Gaussian program (separate license is required). The new QMD files will be uploaded to the FragQMD table when the jobs are done, and the corresponding fragments in FragMSD will be cleared. This step can be done by using **MFDFF/Collect Frag QMD** command. 

*If the QMD jobs are done externally, upload the new QMD files by using **MFDFF/Update Frag QMD** command.*


## 3. Update MolPPF
When the required QMD are complete, use DFF to fit new force fields for the identified molecule types. The force fields will be validated against the baseline QM data and tested for stability using a short-time molecular dynamics simulation. If everything looks good, the molecule type force fields will be uploaded to the MolPPF table. Then repeat the first step to get the force field for the target model.

The above tasks can be done by using **MFDFF/Workflow** command, which is a workflow that lunches background jobs to make and assign force fields for selected models automatically.
