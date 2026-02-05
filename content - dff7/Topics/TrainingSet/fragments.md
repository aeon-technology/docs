# Fragment

Fragments are small molecules that represent target molecules in terms of force field. A fragment is not specific for one molecule, it may be found in different molecules. For a molecule, a collection of fragments should contain all required force field energy terms. The fragments should be defined as small as possible to avoid unnecessary computational expenses.

An algorithm is developed and implemented in DFF to automatically find the fragments for  molecules. Depending on the energy terms required for the target molecules, minimum fragments are cut from the target molecules by breaking single bonds and saturated by adding hydrogen atoms. The fragments are overlapped, which ensure the core of a fragment represent a pristine local structure of the target molecule. 

The fragmentation depends on force field types and typing rules. To standardize the fragments, the force field type is limited to common (AMBER or TEAM) force field types, and the typing rule to "Default". The standardization also includes recomputing bond orders and formal charges inherited from the target molecule, so that only the connectivity (how atoms are linked regardless of bond orders) of target molecules is preserved. 

Before a fragments is saved, the fragment structure is optimized using automatic parameters. Using the optimized structure, a more rigorous test is done by rebuild connectivity, bond order and formal charge, and comparing the SMILES strings. The same test is done after the QM optimization is done. If the SMILES strings are different after the optimization, the connectivity of fragment which is inherited from the target molecule need to be examined carefully.

The fragments are identified by SMILES strings and saved in database.



