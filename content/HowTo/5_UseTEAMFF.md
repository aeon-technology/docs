# How to use TEAMFF

To use TEAMFF is similar to use traditional force field. However, TEAMFF is database containing multiple force fields, which can be mixed to expand the coverage.

## Prepare a Model
The first step is to prepare or import a molecular model for simulation, the acceptable file formats are MOL2 and PDB. The model must be "all atom" that means hydrogen atoms are included. The connectivity should be set, or the coordinates of all atoms are reasonably set so that DFF can build the connectivity. 

## Decide Force Field Type and Simulation Software 
Next is to decide which force field type (e.g. AMBER, TEAM, CHARMM,...) and simulation software to use. The selection of force field type is often related to the simulation software. DFD supports LAMMPS and GROMACS file formats. 

## Select Force Fields
Several force fields can be used for a force field type. In most case, the general force field is sufficient. You may select other or multiple force fields. If multiple force fields are selected, adjust the order of usage is important as DFF will search parameters in the order. For more details, refer to the document about [TEAMFF](../topics/teamff-database.md).

## Get the Result
If all required force field parameters are obtained, the atom types and parameters will be saved as input files for the designate simulation software. If some parameters are missing, consider to use transferred and automatic parameters. Alternatively, make a new force field to extend the coverage as explained in [Extend TEAMFF](./ExpandTEAMFF.md).
