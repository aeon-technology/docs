# Molecular Fragment Described Force Field (MFDFF)

## Introduction 

- Traditional force fields use atom types to identify parameters. The atom types represent atoms in different environments. The goal is to enable force field parameters transferrable. However, finer definition of atom types leads to narrow coverage in molecules, to make a general force field, there is always a compromise between the coverage and accuracy.
- The chemical space is too large to be covered by a single force field. On the other hand, often only a small chemical subspace is interested by individual modelers. Therefore, trying to make a force field to cover everything is not only impractical, but also unnecessary from the perspective of many users of force field. A rational solution is to make customized force fields. The problem is, however, it is generally too complicated to make force field using the atom type definitions. 
- To enable making customized force field easily and reliably, a new approach is proposed and implemented in DFF. The method uses molecular fragments as the basic units to build customized force fields, named as "Molecular Fragment Described Force Field (MFDFF)".
- As well known, a molecule can be partitioned to a set of fragments that the cores of the fragments represents local structures and interactions in the molecule. Consequently, the physical and chemical properties for the fragment cores are transferable. Therefore, a force field can be made by combining the force field parameters of constituent fragments. Come to this point, there is no difference between traditional force fields and MFDFF.
- The difference is, instead of storing the parameters obtained from a group of fragments and transferred to other moieties using atom types, fragments and their data are stored and the force fields are built on-demand for target molecules in MFDFF. As a fragment may exists in different molecules, the fragments instead of atom types are transferred.

