# Extend TEAMFF

Augment TEAMFF database could be done in one of two ways. One is to add new parameters to existing force field, another is to add a new force field table. It should be noted that to add new parameters to an existing force field is challenging and often error prone. To put the new parameters into a new force field table and then use the table together with existing ones is a better approach.

## Prepare Training Set and Data
Either way, the process starts from identifying a training set. Given a force field in TEAMFF, if any parameters are missing, DFF will identify molecular fragments that contains the absent parameters, which form the training set. Next, generate quantum mechanics data (QMD) for the training set. The computation is done by using quantum mechanics software (Gaussian). A sampling method is implemented in DFF for automatically sampling potential energy surfaces for parametrization.

## Parametrization
The parametrization is done by least-squares fitting the parameters to the training set QMD. The result parameters are validated by using the new parameters. Since QMD do not have sufficient information of inter-molecular interactions, default LJ-12-6 parameters, sourced from prior work, are used and fixed while other parameters are adjusted ot fit the data. In necessary, the default LJ-12-6 parameters can be optimized to fit experimental data of liquid using molecular dynamics simulations. 

## To Add new Parameters
To make new parameters for the existing force field, use the check-out (incomplete) method to collect existing parameters as input to proceed. The existing parameters should be fixed in order to protect the force field integrity, only new parameters are variable for parameterization, which may cause difficulties in parameterization, especially when the number of variable parameters is small. If the parametrization is successful, check-in the force field to the existing table. Only the new parameters will be added.  

## To Make a New Force Field
To make a new force field, create a new force field in the same force field type, select a typing rule which can be different from that in existing force field, and fit the QMD without any restrictions on parameters. When the development of force field is completed, create a new force field table in TEAMFF. The force field can be used with other force fields in the same force field type. 


