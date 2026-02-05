# Atom types 

Force field energy terms are described by atomic coordinates. Since atoms may be same or similar in a molecule, they are classified by atom types that represent elements in different environments. 

Definition of atom types depends on the acceptable assumption of transferability of chemical structure and properties. For example, oxygen atoms in phenol and alcohol may be treated differently depending on the level of acceptable transferability. In certain circumstances we may consider both atoms are the same. Considering the O-C bond lengths are quite different (143 pm vs. 136 pm), a close representation using different atom types appears to be appropriate.

The atom type represents a subspace in the chemical space. The more specifically defined atom types, the smaller subspace they represents, the higher level of representing accuracy. In practice a tradeoff is always applied. 

There is no generally fixed rule to define atom types. In the literature, atom types are determined by force field developers. DFF use a set of typing rules to define atom types. Different typing rules assign atom types differently, so a specific set of typing rules must be associated with a force field. Three categories of typing rules are available in DFF – Default, Script Extended Default, and Script Defined. The Default typing rules are implemented using the atomic attributes and connectivity to nearest neighbor atoms, they are systematic and complete. The Script Extended Default are made on top of the Default typing rules using scripts to describe additional rules. The scripts are saved in a data file with extension “.ext”. Script Defined typing rules are written completely by scripts, they are saved in “.def” files.

Since different energy terms require different detail level of atom types, an equivalence table is used to a map between assigned atom types and atom types used in each energy terms. This can significantly reduce the number of adjustable parameters. The equivalence table is optional, if it not used, a one-to-one mapping is used. 


[^1]: Hierarchical atom type definitions and extensible all-atom force fields
Jin, Zhao; Yang, Chunwei; Cao, Fenglei; Li, Feng; Jing, Zhifeng; Chen, Long; Shen, Zhe; Xin, Liang; Tong, Sijia; Sun, Huai.
J. Comput. Chem. 2016.