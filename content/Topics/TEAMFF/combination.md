# Combination of force fields of TEAMFF

The valence parameters are usually correlated due to redundant coordinates used in classic force fields. Mixing valence parameters is problematic. However, the mixing of nonbond energy terms is well established. Columbic interactions are described by point charges, not atom types, and the Lennard-Jones (LJ) interaction has well-accepted combining rules such as the Lorentz-Berthelot[^2] and Waldman-Hagler[^3] rules. In TEAMFF, the combination of force fields is achieved by mixing the nonbond parameters while keeping all valence parameters intact.

Therefore, any force fields can be combined as long as the nonbond functions are the same. In practice, the combination is limited to the same force field type for avoiding using different functions in used simulation software.

When several force fields are used for a molecular model, the force fields are applied in the order of the list of force fields. DFF starts from the first, moves to to the next when required parameters for some molecules are incomplete, until parameters of all molecules are found or the end of the list is reached.

If all required parameters are found, a new set of atom types is created. The new atom types are made as`"force field ID + original atom types"`. The combined atom types are long strings. To meet the convention of atom types in simulation software, the combined atom types are 1-1 mapped to a new short strings, such as "C1", "C2", "O1", "Na1", etc.

The new atom types are assign to atoms of the molecular model. Together, the atomic charges are assigned using the combined atom types. The combined force field parameters are identified by the combined atom types. The valence parameters are the same as that in the original force fields, only the LJ parameters are calculated by using the combination rules. The result model data and force field parameters are ready for simulation jobs.
