# Extensibility of TEAMFF

The most important advantage of TEAMFF is that multiple force fields can be used together, which offers the possibility of high quality and extensibility.

## Combination of force fields

The valence parameters are usually correlated due to redundant coordinates used in classic force fields. Mixing valence parameters can be problematic. However, the mixing of nonbond energy terms is well established. Columbic interactions are described by point charges, not atom types, and the Lennard-Jones (LJ) interaction has well-accepted combining rules such as the Lorentz-Berthelot and Waldman-Hagler rules. In TEAMFF, the combination of force fields is achieved by mixing the nonbond parameters while keeping all valence parameters intact.

Therefore, any force fields can be combined, as long as the nonbond terms are the same. In practice, the combination is limited to the same force field type for avoiding using different functions in simulation software.

When several force fields are used for a molecular model, the force fields are applied in the order of the list of force fields. DFF starts from the first, moves to to the next when required parameters for some molecules are incomplete, until parameters of all molecules are found or the end of the list is reached.

If all required parameters are found, a new set of atom types is created. The new atom types are made by \
`force field ID + original atom types` \
The combined atom types are long strings. To meet the convention of atom types in simulation software, the combined atom types are 1-1 mapped to a new short strings, such as "C1", "C2", "O1", "Na1", etc.

The new atom types are assign to atoms of the molecular model. Together, the atomic charges are assigned using the combined atom types. The combined force field parameters are identified by the combined atom types. The valence parameters are the same as that in the original force fields, only the LJ parameters are calculated by using the combination rules. The result model data and force field parameters are ready for simulation jobs.


## Augment TEAMFF

To add parameters to a force field is generally error-pron, because of the overlap of atom type definitions and correlations among parameters. If new parameters are in need, the best practice is to take the advantage of TEAMFF architecture, adding a new force field to TEAMFF instead of adding new parameters to a force field. 

DFF can automatically generate required molecular fragments from missing parameters for parameterization. For example, a simulation model contains 10 kinds of molecules (e.g. water, methanol, protein), among them 8 are completely covered by TEAMFF, but 2 kinds of molecule show missing parameters. DFF will generate required fragments for the 2 kind of molecules. If a new force field is made by using these fragments and added to TEAMFF, the model is completely covered.

The identification of fragments depends on the atom types, so the typing rule must be the same to make sure the new force field includes all required parameters. As a general practice, the force field type should be the same. 

Given the training set, force field type and atom typing rules, a new force field can be made by using the [procedure](./parametrization.md) explained previously. 

