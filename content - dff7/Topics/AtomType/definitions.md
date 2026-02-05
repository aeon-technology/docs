# Atom Type Definitions

Atom type represents a subspace in the chemical space. The more specific an atom type is defined, the smaller the subspace it represents. The applicable scope is related to the accuracy of the parameters. Generally speaking, broader coverage implies less accurate predictions, and vice versa. Therefore, an optimal balance between applicable scope and accuracy can be adjusted by defining atom types properly.  

Definition of atom types also impacts the extensibility of the force field. Traditionally, atom types are defined rather arbitrarily. Different developers may define atom types differently, and there is no global rule. This makes it very difficult to extend a force field, as adding a new atom type may jeopardize existing definitions. The most common problem is that a new atom type may conflict or overlap with existing ones, and parameters defined under previously atom type sets may be lost.




