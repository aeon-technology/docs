# Edit Menu

The Edit menu is for modifying molecular properties, such as atomic mass (isotope), connectivity, bond orders, formal charges, charge groups, etc., which are required for developing or using force fields. These tasks are often useful for imported models that may have topology data different from DFF.  

- **Isotope** sets atom masses of isotopes for currently selected model. This command can be applied to change a single atom or all atoms of the same element in a model. Click to open a dialog. In the dialog, get an atom to be modified by using mouse click, select the scope of application and atom mass, and then hit **Execute** to set.

- **Add Hydrogen** adds hydrogen atoms by using standard octet rule. This is often useful for imported models that do not have explicit hydrogen atoms.

- **Bond Order** sets the connectivity and bond orders of the selected models. It is optional to keep existing connectivity or rebuild connectivity before calculating the bond orders. 

- **Formal Charge** assigns or remove formal charges. The assignment can be done automatically or manually. To use the automatic assignment, existing values will be removed by default. Optionally the existing formal charges can be protected. The manual option is useful for assigning special formal charges, either by atom, or by atom types. 

- **Torsion Angle** sets or modifies torsion angles by opening a dialog. In the dialog, selecting four atoms consecutively that defines a dihedral angle. A new angle can then be set, or an existing one can be rotated by a specified value. Clicking Execute performs the specified function. If the option of **Make new model(s)** is selected, each Execute will generate a new model with the specified torsion angles. 

- **Improper Torsion Angle** is similar to the Torsion command, but set or modify improper torsion angles. In the popup dialog, selecting four atoms that defines an improper dihedral angle. Improper torsion can be defined for four atoms with one atom at the center bonded to other three. The definition of improper dihedral angles can be different, usually select one that is out-of-plane as the first atom, and the center atom is the second.

- **Reset COM** resets the center of mass for a model. Relative positions of atoms are not altered and energy calculations are not impacted. Reset COM is useful to obtain a better view of the model, especially when the model needs to be rotated on the screen.

- **Charge Group** defines charge groups in a molecule model as is often required by simulation engines. This method can be used only after a force field has been assigned. It works by querying the charge separation between any two bonded atoms. If the charge crossing a bond is smaller than a threshold that can be adjusted, then the bond is used as a division of two charge groups. Execute begins the calculation, and the results are displayed in the center panel. 
