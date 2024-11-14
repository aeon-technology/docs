# Use and Extend MFDFF

MFDFF is a system that makes force fields on-the-fly using a database of molecular type force fields and QMD data of molecular fragments. The database has three tables: MolPPF, FragQMD and FragMSD for molecule type force fields, fragment QMD data set, and fragments to be calculated, respectively. The contents of these tables are updated with new developments. To use MFDFF, follow the three steps below.   

## 1. Enquire Force Field

The first step is search database to see if sufficient molecule type force fields are available in MolPPF table for the molecular model of interest. If yes, a force will be constructed using the molecule type force field for the model field, the task is done. If any molecule type force fields are missing, the molecule types and their constituent molecular fragments will saved for new force field developments. All of the above is done by using **MFDFF/Enquiry PPF** command.  

## 2. Update FragQMD

This step aims to make the QMD complete for parametrization. We first search the database for QMD files of the identified fragments. If any missing QMD files, the corresponding fragments will be collected and saved in FragMSD table. It is optional to submit the computation internally in DFF or collect the tasks and submit the computations externally. The computations are done by using Gaussian program (separate license is required). The new QMD files will be uploaded to the FragQMD table when the jobs are done, and the corresponding fragments will be cleared with the update. This step can be done by using **MFDFF/Collect Frag QMD** command. 

If the QMD jobs are done externally, upload the new QMD files by using **MFDFF/Update Frag QMD** command.


## 3. Update MolPPF
When the required QMD are complete, use DFF to fit new force fields for the identified molecule types. The force fields will be validated against the baseline QM data and tested for stability using a short-time molecular dynamics simulation. If everything looks good, the molecule type force fields will be uploaded to the MolPPF table. Then repeat the first step to get the force field for the target model.

