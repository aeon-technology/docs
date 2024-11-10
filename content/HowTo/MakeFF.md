# Make Force Field

To make a force field requires three steps: 1) decide force field type and typing rule, 2) collect training set and prepare data, 3) fit and validate the data.

## 1) Decide force field type and typing rule

This largely depends on the purpose of simulation and simulation package to use. DFF supports several popular force field types: AMBER, CHARMM, OPLS, GROMO, CFF, DREIDING, and TEAM. Each uses slightly different functional forms. Generally speaking, AMBER, CHARMM, OPLS, GROMO are popular in life sciences, while CFF, DREIDING, and TEAM are used for material sciences. As far as the simulation packages, DFF provides directly interfaces to GROMACS and LAMMPS, and support several popular simulation engines. 

Selection of typing rule depends on how broad the coverage of a force field is intended to be. To make a general force field needs to assign atom types more precisely to distinguish atoms in similar but different environments. DFF provide a mechanism to use scripts to describe different environments of atom. However, to make a narrowly targeted force field, the atom types can be more general, as long as atoms in different environments can be distinguished. DFF provide a default typing rule that services this purpose. 


## 2) Collect Training Set and Prepare Data

Training set is a collection of small molecules that represent the target molecular systems to be parameterized, and that can be easily calculated using QM method to derive force field parameters. 
DFF provides functionality to identify molecular fragments for target molecular system that form the training set. The identification of fragments depends on required parameters, which further depend on force field type and atom-typing rule. 

Another type of training set is collection of molecules for which quality experimental data are available for optimizing the LJ parameters. In most cases the molecules are small molecules in liquids or interfaces. DFF provides default LJ parameters taken from published and unpublished previous works.

For the first type of training set, quantum mechanics data (QMD) should be generated. The computation of QMD is crucial for developing force fields. DFF has functionality to automatically sample the internal potential energy surfaces and prepare QMD files using Gaussian. The computations can be done by using any other quantum mechanics software. DFF uses a standardized data file to import the computation data.  


## 3) Fit and Validate 

The parametrization is done by least-squares fitting the parameters to the training set QMD. The result parameters are validated by using the new parameters. Since QMD do not have sufficient information of inter-molecular interactions, default LJ-12-6 parameters, sourced from prior work, are used and fixed while other parameters are adjusted ot fit the data. In necessary, the default LJ-12-6 parameters can be optimized to fit experimental data of liquid using molecular dynamics simulations.

