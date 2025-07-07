# MTFF Development

## Problem to Solve

Traditional force fields use atom types to identify parameters and to enable force field parameters transferrable. However, good transferability requires fine definition of atom types, which narrows coverage. Therefore, it is always a tradeoff between force field quality and coverage.

The chemical space is too large to be covered by a single force field. On the other hand, often only a small chemical subspace is interested by individual modelers. Therefore, trying to make a force field to cover everything is not only impractical, but also unnecessary from the perspective of end users of force field. A rational solution is to make customized force fields. The problem is, it is generally too complicated to make force field using the atom type definitions. 

As well known, a molecule can be partitioned to a set of fragments that the cores of the fragments represents local structures and interactions in the molecule. Consequently, the physical and chemical properties for the fragment cores are transferable. Therefore, a force field can be made by combining the force field parameters of constituent fragments. Come to this point, there is no difference between traditional force fields and MFDFF.

The problem is, to make a general force field requires to fit **all** data together, which is impractical for developing a broad coverage force field. A common practice is to divide the training set data into multiple (dozens) groups, fit the data one by one, and transfer determined parameters from one group to the next. This process will soon become unmanageable because of the vanish of adjustable parameters. Then the developer has to introduce new atom types to add new adjustable parameters. The process is tedious and error-prone.   


## Solution

A new approach is proposed and implemented in DFF based on a new concept of "molecule type". In this approach, force field parameters are identified by molecule types instead of atom types. For any simulation systems, its molecule types are identified first and a force field is made by integrating molecule type force fields. Therefore, the transferability is naturally persevered. 

### Molecule Type force fields 
A molecule type represent a group of molecules that share the same fragments. For convenience, the smallest molecule is used for construct a molecule type force field (MTFF). 

Since the number fragments are usually small, MTFF can be easily made using quantum mechanic data (QMD) of its fragments. How the force field is represented is a separate issue, it can be made using traditional force field method or machine learning force field method.

The MTFF is uniquely identified by a combined SMILES (cSMILES) string which is a combination of sorted SMILES strings of its fragments. The MTFF and QMD are stored in database for reuse. 

To use MTFF is similar to use a traditional force field. For any simulation systems, if its MTFF are complete, a integrated force field is assigned to the system. If any required MTFF is missing, a new one is made on-the-fly using fragment QMD. If any fragment QMD is missing, a new QMD is made on-the-fly. Therefore, MTFF is a self-learning force field.

## Advantage

The advantage of MFDFF can be summarized as follows. 

- By limiting a force field built on data of constituent fragments, MFDFF is more transferrable and accurate than traditional force fields. Underlying, the transferability is achieved by molecular fragments, not atom types. 

- Definition of fragments is reliable. Given certain simple conditions, fragments can be made easily by computer programming, without human interference. 

- Parametrization of a MFDFF is easier because each force field is made by a small number of fragments, the amount of data is small. It is also because each force field is made independently, the number of parameters can be minimized. 

- The fragment data and the result force fields are saved in database. Because the data and force fields can be re-used, to get force fields from MFDFF is fast.

- The process of build a force field library can be automated.  
