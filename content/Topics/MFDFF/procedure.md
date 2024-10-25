# How MFDFF works

## Molecular Type
A target molecular model may contain many molecules of the same or different types. For example, a simulation box of water and methanol molecules contains two molecule types, water and methanol. The molecule type can be large molecule such as a protein or a synthetic polymer. 

Each molecule type can be partitioned into fragments. Each fragment is a complete molecule, which can be described by a SMILES string. Therefor, a combination of SMILES (cSMILES) can be used to identify the molecule type. Note that for macromolecules or molecules that consists of the same fragments, the cSMILES is independent of the molecule sizes (weights). 

## Fragment Data

The fragments are made by cutting the original structures and the dangling bonds are saturated by adding hydrogen atoms. An objective cutting is crucial in this approach. In the perspective of force field method, a logical way to make the cuts is to increase the size of fragments so that the same functional terms of the original molecule are included in the fragments. Obviously, a force field obtained from the fragments is a superset of the force field required by the original molecule, the extra terms are from the edge of fragments, which are not needed anyway.

For each fragment, quantum mechanics data (QMD) required for parametrization is obtained by using quantum mechanics computations. The data are energy, energy derivatives and atomic charges, computed for the optimized structures and distorted structures so that the potential energy surfaces are sampled. 

## Molecular Type force Fields

Using the QMD of constituent fragments, molecular type force field (MT-FF) is made by least-squares fit the data. 

## Database
A database is used to store the QM Data of fragments and MT-FF so that the data can be reused. The database can be updated for new fragments and molecular types.  

## The Result Force Field
The force field for the target model is made by combining the MT-FFs. The result force field contains all force field energy terms, the valence terms are used inside of each molecular type, the nonbond interaction: electrostatic and Lennard-Johns terms, are used crossing different molecules by using well-established combination rules. 

