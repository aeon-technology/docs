
# Molecular and Atomic Attributes

Assigning atom types is critical for getting parameters consistently with a force field. In DFF we use molecular topology to calculate molecular and atomic attributes, and then use these attributes to define atom types. Understanding how the molecular and atomic attributes are calculated is beneficial for understanding how atom types are defined.

## Connectivity Index

Connectivity describes how each atom is bonded with others. Usually the connectivity of an atom is established by building or importing a model. The connectivity can also be established automatically by using atom-atom distances, provided that the atomic coordinates are given properly. The algorithm is straightforward: for any pair of atoms, if the distance between the two atoms is shorter than a threshold value defined as the sum of the tabulated valence radii39 saved in Element.dat file, and a tolerance value (fixed as ±0.2 Å), the atom pair is considered to be bonded. 

## Explicit Hydrogen Atoms

The hydrogen atoms must be explicitly given. In some model files such as PDB and MOL2 the hydrogen atoms may be omitted (implicit). You may use other modeling software or DFF to add hydrogen atoms. 
In DFF, hydrogen atoms are added to an atom using the most common number of hydrogen atoms of the atom, minus the number of bonds and formal charge assigned to the atom. 

## Essential Atomic Attributes

From the connectivity indexes, essential atomic attributes such as coordination numbers and ring sizes are calculated via a complete search algorithm that finds neighboring atoms, rings and ring sizes of each atom. If an atom bridges two rings (e.g., in a fused ring), the smallest ring size is assigned to the atom. 

## Preset Formal Charges

Formal charges are used for distinguishing ions from neutral molecules. An example is acetic acid and acetate ion: if the hydrogen atom is not explicitly given, DFF will treat it as acetic acid. In order to treat it as acetate ion, the formal charge must be assigned to the oxygen atom. In circumstances like this, the formal charges must be set prior to computing bond orders. 

## Bond Orders

Bond orders are estimated based on the octet rule of classical valence bond theory. The algorithm uses the number of available valence electrons, which is calculated as the total number of valence electrons, including preset formal charges, minus the number of bonding electrons. Each bond is initially assigned as a single bond, if the number of available valence electrons is not zero, the atom is marked as a potential bonding acceptor. The bond order of two adjacent acceptors is then increased by one. This process is repeated until the above condition fails. Note that the octet rule may not be always valid, and the bond orders are calculated for the most common scenarios. 


## Automatic Formal Charges

In some cases, particularly for ions, the formal charges are essential for calculating distributed atomic charges. Typical examples are aromatic rings such as imidazolium (IM), pyridinium (Py), ammonium (NH4+), tetrafluoroborate (BF4+) hexafluorophosphate (PF6-). In addition, in ring molecules the formal charges are counted towards calculating the aromaticity. 

Assume the connectivity and bond orders are correctly set, a program is implemented to calculate the formal charges automatically. The default is to use the number of bonding electrons and the valence electrons of an atom to calculate the formal charge of the atom. The default is overwritten for selected atoms using bonding information, ring sizes, atoms in the ring and directly attached elements .

Note that the formal charge assignment is designed for the most probable (often the most stable) cases, which may not be appropriate for your purposes. Examine the formal charges carefully and edit the DefaultFormalCharge.dat file to customize the assignments. 

In addition to the automatic computation of formal charges, manual assignment of formal charges are sometimes necessary. Also, the formal charges are not calculated by default, it must be executed separately, usually after the bond orders are calculated or built. 


## Aromaticity
With the ring sizes, bond orders, and formal charges, the aromaticity of atom is calculated by using the 4N+2 rule.

## Assumptions

As discussed above, the formal charges, bond orders, explicit hydrogen atoms are inter-dependent. There is no simple way to fix the order of procedure. Some recommendation is given as follows.

If a model is built from scratch by using DFF, the connectivity and bond orders can be drawn and edited first, and then the hydrogen atoms. With the molecular topology established, the formal charges can be assigned automatically.

For a model imported from other software, it is best to have explicit hydrogen atoms, connectivity indexes and preset formal charges assigned. If any of these data is incomplete, DFF can be used to compute the missing data using the imported coordinates. User should review the constructed connectivity, hydrogen and preset formal charges are acceptable. Modify the data manually if necessary. Given the explicit hydrogen atoms, connectivity indexes and preset formal charges, DFF will compute the bond orders because in some cases the bond orders can be assigned in different ways.  
