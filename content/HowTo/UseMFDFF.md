# Use and Extend MFDFF

MFDFF is a system that makes force fields on-the-fly using a library of fragments, which can be automatically extended. The made force fields are for molecular types, which are found in large molecular systems such as liquids and macromolecules. A database called MFDFF.db is used to store the fragment library (FragQMD) and made molecular type force fields (MolPPF). To use and expand MFDFF, follow the following steps: 

## 1. Enquire Force Field

MFDFF can be applied to models of single molecules or collections of molecules. To use MFDFF, select the models and then use **MFDFF/Enquiry PPF** command to start. DFF will identify molecule types in the model, search the database for molecular type force fields (MTFFs). If all required MTFFs are found, an integrated force field is made and assigned to the model.  

If a MTFF is missing, the corresponding fragments will be saved for parameterization. 

## 2. Collect and Update FragQMD

For the identified fragments, use **MFDFF/Enquire QMD** command to search QMD files in the database. If any required QMD is missing, the corresponding fragments will be collected for computation. The computation can be run on the same computer or send to a remote computer as batch jobs.   

## 3. Make and Update MolPPF
When the required QMD are complete, use DFF to fit force fields for the molecule type. Examine the validation report for each molecule. If everything looks good, upload the molecular force fields to the database, and then repeat the first step. If any of the validation fails, analyze the problems and adjust parameterization options or contact for technical support.
