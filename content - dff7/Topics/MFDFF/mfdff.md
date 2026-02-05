# MTFF Method

MTFF stands for "Molecule Type Force Field". The key point of this method is to identify force fields by molecule types. This method overcomes the transferrable problems associated with the traditional, atom type based force fields.

Molecule types are small molecules representing real molecular systems such as small molecules, macromolecules, liquids, mixtures etc. A molecule type is identified by its constituent molecular fragments, which are the same in a set of different molecules regardless of their constitution.

A MTFF is made by fitting the quantum mechanics data (QMD) of its fragments. Each MTFF is made independently, even though some of the underlying QND of fragments are shared. 

A database is used to store MTFFs and QMD of fragments. To use MTFF database is similar to use of traditional force fields on the surface: For a molecule system, the software finds and assign parameters using the database, and then prepare input files for simulation. The mechanism, however, is fundamentally different: For the molecule system, the software identify its molecule types first, and then search the database for MTFFs and then construct a force field for the system, and then assign the force field to the system and prepare input files for simulation. 

When the parameters are insufficient, MTFF is superior to traditional force field. In traditional force field, if parameters are missing, developers (not user) has to repair the force field to include new atom types and parameters, this is usually tedious and difficult. However, for MTFF method, the software will build new MTFFs using stored fragment QMD, and new fragment QMD if necessary, all can be done automatically. The new development is triggered by application only, therefore, it is a self-leaning mechanism. The new developments can be carried out by users who have specific demands of force fields. This *distributed* approach is fundamentally different from the *centralized* force field development.




