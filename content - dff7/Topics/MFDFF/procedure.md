# How MFDFF works

MFDFF is designed to build and assign force fields of molecular models in an active learning scheme. The required force fields are constructed by using molecule type force fields (MTFFs) which are saved in a database. If any MTFFs are missing, new force field developments will be carried out and the results will be added to the database. The developments are done by using fragment QM datasets (FQMDs) which are also saved in the database. If any FQMDs are missing, new QM computations will be carried out and the result will be added the database. The database of MTFFs and FQMDs forms a knowledge base of MFDFF, and the knowledge base grows with applications.   

## Molecule Type
A target model may contain many molecules of the same or different molecule types. For example, a simulation box of water and methanol molecules contains two molecule types: water and methanol. A molecule type can be small or large molecule. 

Each molecule type can be partitioned into fragments. Each fragment is described by a SMILES string. Therefor, a combination of SMILES (cSMILES) can be used to identify the molecule type. Since only the fragments are used to identify a molecule type, molecule types are independent of the sizes (or weights) for macromolecules or condense matters. 

## Fragments

The fragments are made by cutting the original structures and the dangling bonds are saturated by adding hydrogen atoms. An objective cutting is crucial in this approach. In the perspective of force field method, a logical way to make the cuts is to increase the size of fragments so that the same functional terms of the original molecule are included in the fragments. Obviously, a force field obtained from the fragments is a superset of the force field required by the original molecule, the extra terms are from the edge of fragments, which are not needed anyway.

## Fragment QM dataset (FQMD)

For each fragment, quantum mechanics data (QMD) required for parametrization is obtained by using quantum mechanics computations. The data are energy, energy derivatives and atomic charges, computed for the optimized structures and distorted structures so that the potential energy surfaces are sampled. 

## Molecular Type force Field (MTFF)

Using FQMDs of constituent fragments, molecule type force field (MTFF) is made by least-squares fit the data. 

## Database
A database is used to store the FQMDs and MTFFs so that the data can be reused. The database contents grow with applications.

## The Result Force Field
The force field for the target model is made by combining the MTFFs. The result force field contains all force field energy terms, the valence terms are used inside of each molecular type, the nonbond interaction: electrostatic and Lennard-Johns terms, are used crossing different molecules by using well-established combination rules. 

