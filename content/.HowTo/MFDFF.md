# How to Use MFDFF

Molecular Fragment Described Force Fields (MFDFFs) are made for molecular types . The molecule types are identified by their constituent fragments, which are used to parameterize the force fields. A database called MFDFF.db is an important component of this method. The database contains force fields of molecule types and quantum mechanics data of fragments. To use MFDFF, follow the following steps: 

## 1. Enquire Force Field

MFDFF can be applied to models of single molecules or collections of molecules. To use MFDFF, select the models and then use **MFDFF/Enquiry PPF** command to start. DFF will identify molecule types in the model, search the database for molecular type force fields (MT-FFs). If all required MT-FFs are found, an integrated force field is made and assigned to the model.  

If any required MT-FFs are missing, the corresponding molecule types and fragments will be saved for parameterization. 

## 2. Collect QMD

The first step to parameterize MT-FF is collecting fragment QMD files. Select the fragments, use **MFDFF/Enquire QMD** command to search QMD files in the database. If all required QMD are found, then go to [Fit force field](#fit-force-field). If any required QMD is missing, the corresponding fragments will be collected for computation. The computation can be run on the same computer or send to a remote computer as batch jobs. If it is running inside of DFF, the result QMD files will be uploaded to the database. If they are running outside of jobs are done, update the database with the QMD files.  

## 3. Make MolPPF
If the database Select the molecule types to be parameterized. For each molecule type, DFF will find required fragments, download QMD files, and fit force fields for the molecule type. Examine the validation report for each molecule. If everything looks good, upload the molecular force fields to the database, and then repeat the [first step](#enquiring-force-field). If any of the validation fails, analyze the problems and adjust parameterization options, or contact for technical support.
