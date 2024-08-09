
### Hyper-valence Modify

Hyper-valence means some atoms in the third and above period on the periodic table do not obey the octet rule, which is common in metal-ligand complexes and metal oxides. The hyper-valence structure imposes a difficulty for classic force field method. As shown in the following figure. 
 
![alt text](hyper-valence1-1.png)

A complex of an atom (M) bonded with a number of the same ligand atoms (L), the bond angles are different depending on the relative positions. The angles are 90, 180 degrees for T-shaped (not shown), Square-planar, Square-pyramidal and Octahedral structures, and 90, 120 and 180 degrees for the See-Saw (not shown) and Trigonal-bipyramidal structures. However, since the ligand atoms bear the same atom types, a normal bond angle function, either harmonic, cosine, or polynomial, cannot describe these bond angles well. 

In order to use common function forms of force field, an alternative solution is to modify the atom types using structural information. The modifier is a special character optionally plus a numerical index. Two special characters, “@” and “%”, are found to be sufficient for common uses. Each modifier represents a set of structural equivalent atoms. Therefore, combination of the same modifiers represents an angle near 180 or 120 degrees, combination of different modifiers represents an angle near 90 degrees, as shown by the examples below. 

![alt text](hyper-valence-2-1.png)