# Force Field

A force field is a set of analytic functions that represent Born-Oppenheimer potential energy surfaces for molecules. The complete definition of a force field includes three components: force field type, atom type, and parameter. 

Force field type refer to a set of fixed energy functions in internal coordinates. The common internal coordinates are: bond lengths, bond angles, dihedral angles, out-of-plane or improper dihedral angles, non-bonded atomic distances. Some of the internal coordinates are redundant. 

Atom types are used to distinguish atoms of the same element but in different environments. Such as a carbon in benzene is different from a carbon in alkane. Molecular topology data and atomic properties are used to distinguish different atomic environments.

Using atom types in the internal coordinates, the force field energy terms are completed with adjustable parameters. By fitting to certain baseline energy data, the parameters can be determined to reproduce the data. Because of using atom types in energy functions, the parameters are assumed to be "transferrable" among the atoms that have the same atom types. 
