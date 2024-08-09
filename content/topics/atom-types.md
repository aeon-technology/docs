# Atom types 

## Overview

Force field energy terms are described by atomic coordinates. Since atoms may be same or similar in a molecule, they are classified by atom types that represent not only different elements but also same elements in different environments. 

Definition of atom types depends on the acceptable assumption of transferability of chemical structure and properties. For example, oxygen atoms in phenol and alcohol may be treated differently depending on the level of acceptable transferability. Roughly we may assign both atoms the same atom type. Considering the O-C bond lengths are quite different (143 pm vs. 136 pm), we may use different atom types for higher level of accuracy. 

From the above example, we see two consequences: 
1. The atom type represents a subspace in the chemical space. The more specifically defined atom types, the smaller subspace they represents and the higher level of accuracy. In practice a tradeoff is always accepted.
2. There is no fixed rule for atom type definitions. They are often determined by force field developers subjectively. It is better to fix the rules so that the level of approximation and range of coverage is consistent.




[^1]: Hierarchical atom type definitions and extensible all-atom force fields
Jin, Zhao; Yang, Chunwei; Cao, Fenglei; Li, Feng; Jing, Zhifeng; Chen, Long; Shen, Zhe; Xin, Liang; Tong, Sijia; Sun, Huai.
J. Comput. Chem. 2016.