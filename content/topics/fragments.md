# Fragment

Fragments of a molecule are used to parameterize force fields. The fragment molecules must satisfy two criterions: (a) contain all required energy terms, and (b) as small as possible to avoid unnecessary correlations and computational expenses. 

An algorithm is developed and implemented in DFF to automatically find all fragments according to the energy terms required. Given force field type and atom typing rules, the required energy terms are known for a target molecule. Using the energy terms, minimum fragments are cut from the target molecule. The cuts are made on single bonds and the fragments are saturated by adding hydrogen atoms. The fragments are overlapped, however, the core of a fragment represent the local structure and interactions of the target molecule. 

The fragments are identified by SMILES strings. Since the SMILES depends on how the molecules are drawn, the SMILES may be different for the same molecule if alternations of bond orders are possible, therefore, the fragments must be standardized by rebuild bonds and bond orders. 

To rebuild bonds requires that the structure of molecule is reasonably set.  Since the structures of fragments are taken from the target molecules, the structure of target molecule should be optimized before making the fragments. This is done by using default force field in DFF. In addition, the fragments are optimized when they are made. 

Since energy terms depends on force field type and atom typing rules, the fragmentation are related to the force field types and typing rules. A standard fragmentation is made by limiting the force field types to common force field types, and the typing rule to DEFAULT. The standard fragments are used in the MFDFF method.

Since fragments are shared by different molecules, a database is used to store identified fragments and their QM data in DFF8. Any new computation on fragments will be filtered to avoid any repeated computations.


