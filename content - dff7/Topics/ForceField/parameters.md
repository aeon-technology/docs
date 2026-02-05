# Parameters 

The force field parameters specifies how the energy changes with the internal coordinates expressed in atom types. Once the force field type and atom types are fixed, the focus of finishing a force field is to find the optimal set of parameters.

Essentially the procedure is: 1) identify a training set of molecules that share the same set fo atom types; 2) collect the training set data; 3) adjust the parameters to fit the training set data. 

The parameters are often classified as bonded parameters and nonbonded parameters because the training sets are different. Bonded parameters refer to parameters used in energy terms expressed in atoms connected with no more than three chemical bonds, including bond lengths, bond angles, dihedral angles, out-of-plane angles, etc. Nonbonded parameters refer to parameters in Columbic and Lennard Johns functions for all other atom pairs, either on the same molecule or on different molecules. The bonded parameters describe short-distance interactions, can be determined by quantum mechanical data. The nonbonded parameters describe long-range interactions, condense phase data is usually used to determine their optimal values. 

The parameters are saved in files with extension of “.ppf”, which stands for potential parameter file. 

