# Use and Extend TEAMFF

To use TEAMFF is similar to use a traditional force field. However, since TEAMFF is database containing multiple force fields, TEAMFF has two distinguish features that traditional force fields do not have: 1) the force fields in TEAMFF can be mixed easily, and 2) the coverage of TEAMFF can be extended easily.

## 1) Use TEAMFF

### Prepare a Model
The first step is to prepare or import a molecular model for simulation, the acceptable file formats are MOL2 and PDB. The model must be "all atom" that means hydrogen atoms are included. The connectivity should be set, or the coordinates of all atoms are reasonably set so that DFF can build the connectivity. 

### Decide Force Field Type and Simulation Software 
Next is to decide which force field type (e.g. AMBER, TEAM, CHARMM,...) and simulation software to use. The selection of force field type is often related to the simulation software. DFD supports LAMMPS and GROMACS file formats. 

### Select Force Fields
Several force fields can be used for a force field type. In most case, the general force field is sufficient. You may select other or multiple force fields. If multiple force fields are selected, adjust the order of usage is important as DFF will search parameters in the order. For more details, refer to the document about [TEAMFF](../topics/teamff-database.md).

### Get the Result
If all required force field parameters are obtained, the atom types and parameters will be saved as input files for the designate simulation software. If some parameters are missing, consider to use transferred and automatic parameters. Alternatively, make a new force field to extend the coverage as explained in [Extend TEAMFF](./6_ExpandTEAMFF.md).


## 2) Extend TEAMFF

Augment TEAMFF database could be done in one of two ways. One is to add new parameters to existing force field, another is to add a new force field table. It should be noted that to add new parameters to an existing force field is challenging and error prone. To put the new parameters into a new force field table and then use the table together with existing ones is a better approach.


### To Add new Parameters
To make new parameters for the existing force field, use the check-out (incomplete) method to collect existing parameters as input to proceed. The existing parameters should be fixed in order to protect the force field integrity, only new parameters are variable for parameterization, which may cause difficulties in parameterization, especially when the number of variable parameters is small. If the parametrization is successful, check-in the force field to the existing table. Only the new parameters will be added.  

### To Make a New Force Field
To make a new force field, create a new force field in the same force field type, select a typing rule which can be different from that in existing force field, and fit the QMD without any restrictions on parameters. When the development of force field is completed, create a new force field table in TEAMFF. The force field can be used with other force fields in the same force field type. 
