
# Molecular and Atomic Properties

## Molecular Structure  

Atom environments are determined by descriptions of molecular structures in terms of connectivity, which describes how each atom is bonded with others. 

### Hydrogen Atoms

The hydrogen atoms must be explicitly given in order to assign atom types. In some model files such as PDB the hydrogen atoms may be omitted (implicit). You may use DFF to add hydrogen atoms automatically. The algorithm uses the most common number of hydrogen atoms of an atom, minus the number of existing bonds and formal charge assigned to the atom. 


### Formal Charges

Formal charges are used for distinguishing ions from neutral molecules. An example is acetic acid and acetate ion: if the hydrogen atom is not explicitly given, DFF will treat it as acetic acid. In order to treat it as acetate ion, the formal charge must be assigned to the oxygen atom. 

In ring molecules, formal charges are counted towards calculating the aromaticity, the formal charges must be assigned correctly. The formal charges are also used to calculate distributed atomic charges. Typical examples are aromatic rings such as imidazolium (IM), pyridinium (Py), ammonium (NH4+), tetrafluoroborate (BF4+) hexafluorophosphate (PF6-). 


The formal charges can be assigned or edited by using DFF offline version. An automatic program is implemented to enable quick assignments. In this program, a hard-coded procedure is implemented to assign the formal charges using bonding information including number of bonds, ring sizes, atoms in the ring, directly attached elements and numbers to assign the formal charges for special cases. For atoms that are not defined by the program, the number of bond electrons (depending on bond orders) and valence electrons are used to calculate the formal charges. 

If a model has been assigned formal charges, the program can preserve the values unless instructed to reset all values. A command can be used to remove all formal charges. These functions provide convenience for editing the formal charges by users.


### Atomic Properties

Given all atom coordinates, the connectivity can be established automatically using atom-atom distances. The algorithm is straightforward: for any pair of atoms, if the distance between the two atoms is shorter than a threshold value defined as the sum of the tabulated valence radii39 saved in Element.dat file, and a tolerance value (fixed as ±0.2 Å), the atom pair is considered to be bonded. Clearly, reasonably accurate coordinates of atoms is prerequisites.

From the connectivity indexes, essential atom property such as coordination number and ring sizes are calculated via a complete search algorithm that finds neighboring atoms, rings and ring sizes of each atom. If an atom bridges two rings (e.g., in a fused ring), the smallest ring size is assigned to the atom. The bond orders are estimated based on the octet rule of classical valence bond theory. The algorithm uses the number of available valence electrons of each atom, which is calculated as the total number of valence electrons, including formal charge, minus the number of bonding electrons. Each bond is initially assigned as a single bond, if the number of available valence electrons is not zero, the atom is marked as a potential bonding acceptor. The bond order of two adjacent acceptors is then increased by one. This process is repeated until the above condition fails. Note that the octet rule may not be always valid, and the bond orders are calculated for the most common scenarios. With the ring sizes and bond orders, the aromaticity of atoms is calculated by the 4N+2 rule.

Note that the formal charge assignment is designed for the most probable (often the most stable) cases, which may not be appropriate for your purposes. Examine the formal charges carefully and edit the DefaultFormalCharge.dat file to customize the assignments. 

