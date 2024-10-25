# MFDFF Development

## Problem to Solve

Traditional force fields use atom types to identify parameters and to enable force field parameters transferrable. However, the transferability requires fine definition of atom types, which leads to narrow coverage. Therefore, it is always a tradeoff between force field coverage and force field fidelity.

The chemical space is too large to be covered by a single force field. On the other hand, often only a small chemical subspace is interested by individual modelers. Therefore, trying to make a force field to cover everything is not only impractical, but also unnecessary from the perspective of many users of force field. A rational solution is to make customized force fields. The problem is, it is generally too complicated to make force field using the atom type definitions. 

## Solution

To enable customized force field developments, a new approach is proposed and implemented in DFF. The method uses molecular fragments as the basic units to build force fields on-the-fly.
Therefore, it is named as "Molecular Fragment Described Force Field (MFDFF)".

As well known, a molecule can be partitioned to a set of fragments that the cores of the fragments represents local structures and interactions in the molecule. Consequently, the physical and chemical properties for the fragment cores are transferable. Therefore, a force field can be made by combining the force field parameters of constituent fragments. Come to this point, there is no difference between traditional force fields and MFDFF.

The problem is, to make a general force field requires to fit **all** data together, which is impractical for developing a broad coverage force field. A common practice is to divide the training set data into multiple (dozens) groups, fit the data one by one, and transfer determined parameters from one group to the next. This process will soon become unmanageable because of the vanish of adjustable parameters. Then the developer has to introduce new atom types to add new adjustable parameters. The process is tedious and error-prone.   

The difference in MFDFF is: instead of trying to fit all data together, the data is saved, and force fields are made on-the-fly for target molecules. 

## Advantage

The advantage of MFDFF can be summarized as follows. 

- By limiting a force field built on data of constituent fragments, MFDFF is more transferrable and accurate than traditional force fields. Underlying, the transferability is achieved by molecular fragments, not atom types. 

- Definition of fragments is reliable. Given certain simple conditions, fragments can be made easily by computer programming, without human interference. 

- Parametrization of a MFDFF is easier because each force field is made by a small number of fragments, the amount of data is small. It is also because each force field is made independently, the number of parameters can be minimized. 

- The fragment data and the result force fields are saved in database. Because the data and force fields can be re-used, to get force fields from MFDFF is fast.

- The process of build a force field library can be automated.  

