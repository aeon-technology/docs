# Implementation Notes
 
## Molecule Types

MFDFF force fields are identified by molecule types. A molecule type is identified by its constituent fragments. As a molecule can be uniquely partitioned into a small set of fragments, a combination of SMILES strings of the fragments can be used to label the molecular type.

A molecule type can be the same as a molecule or a part of a molecule, as long as its constituent fragments are the same. For example, for macromolecules the cSMILES is independent of the molecular weights. 

## Standard Fragment 

Since fragments are used to identify molecular types, the fragments must be standardized internally in MFDFF method. As the molecular topology can be written in different ways (such as resonance bonds), the fragments must be built consistently. 

To do this, first the structure of parent molecule is optimized using estimated force field so that the structure is reasonably close to reality. Secondly, the fragments are rebuilt using optimized structures. The optimizations are done by QM optimization. If a descendance is identified, the initial structure of the fragments need ot be examined.  

## About Formal Charge

Formal charges are useful for ionic species. Using formal charges helps to calculate the total molecule charge for QM computation, and to define atom types more effectively from otherwise charge-neutral species. Formal charges are not necessary for charge-neutral molecules. Since formal charge calculations are entangled with bond order calculations, formal charges should be fixed before the bond orders are calculated. 

## Quantum Mechanics Date of Fragment

Quantum mechanics methods are used to obtain the minimum energy structures, and to sample the potential energy surfaces in conformational spaces of fragments. The calculated data includes atomic charges, energies, and energy derivatives of optimized and conformationally distorted structures. The data are collected in QMD (with extension of “.qmd”) files. Although any level of theory can be used for the QM calculations, a standard QM calculation protocol is suggested and used to build up a default repository. The default repository contains QMD for common fragments. If a different protocol is used, the data can be saved in a new repository to keep the data consistency. 
To track the QM computation tasks, the fragments to be computed will be saved in the F-MSD repository as computational candidates, when their QMD files are uploaded, the candidates will be removed.  

## Parameterization

Using the QMD data of fragments, MT-FF can be parameterized using DFF. The parameterization is on the charge and valence parameters which are the most complicated terms in a force field. Since the QMD does not have sufficient description of intermolecular interactions, the parameterization does not include Lennard-Jones parameters, which are transferred from TEAMFF and fixed. The result force field can be saved in MFDFF database. 
