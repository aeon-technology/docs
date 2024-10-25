# Fit Charge and Valence Parameters

These parameters are short ranged, can be derived from QM dat of small (fragment) molecules. 

## Charge Parameters

QM data contains atomic charges, typically population analysis (Mulliken) and electrostatic potential parameter (ESP) charges. ESP charges are obtained by fitting to the electrostatic potentials measured outside of a molecule, for atoms in the center of a bulky molecule their charges may be poorly predicted.

In DFF, the QMD atomic partial charges are converted to charge parameters. There are two types of charge parameters: atom-type based charge (ATC) and bond-type based also called bond increment charge (BIC). A atom-type based parameter $q_i^o$ is defined for an atom type. A bond-type based parameter is specified by atom types of two bonded atoms. This parameter represents charge relocation from one atom to another. For example, BIC parameter $δ_(i,j)$ = 0.5 means atom i gains 0.5 electron and atom j loses 0.5 electron. For any atom i, the net charge is a sum of ATC plus all relevant BIC parameters:

$$q_i=q_i^o + ∑_jδ_{ij} $$ 								(1)

The BIC parameters maintain charge neutrality; the ATC parameters provides the flexibility to assign net charges. This charge scheme works for ionic and non-ionic molecules.

The charge parameters are obtained by fitting QM atomic partial charges using linear fit (SVD) method. Suppose a set of atomic partial charges are given in a vector Q for N atoms:

$$ Q = [w_1, q_2, ...q_N] $$             (2)

The charge parameters can then be calculated by solving:

$$ AP = Q $$	                           (3)

where $P$ is the charge parameter vector in the order of M (total number of parameters):

$$ P =[q_1^o, q_2^o,q_3^o,...δ_{12},δ_{13}...]_M $$	   (4)		

where $q_i^o$ is ATC parameter and $δ_{ij}$ is BIC parameter.$A$ is an NxM assign matrix:

$$ A=[a_{i,j} ]_{MN}			$$	(5)

For each atom i and nearest neighbor j:

$$ a_{i,i}=1, a_{i,j}=1, a_{j,i}=-1   $$	(6)

all other elements are zero. 

The number of atoms (N) is not equal to the number of charge parameters (M). Therefore, Eq. (3) does not have a precise solution. The singular value decomposition (SVD) method [^3] finds the optimal solution in least-squares sense. 


## Valence Parameters
 
Valence parameters refer to all parameters for bonded terms such as bond length, bond angle, dihedral angle, and out-of-plane angle or improper dihedral angle. These parameters are short-range interactions, can be obtained by fitting energetic QM data of molecular fragments. 

Although the nonbonded parameters of Columbic and LJ functions can be included in the fit, a better approach is to decouple the bonded and nonbonded interactions by freezing the nonbonded parameters. The charge parameters should be derived from QM data, the LJ parameters should be optimized using condense phase properties after the (initial) force field is made. At this point, using the default LJ parameters provided by DFF is a reasonable approach.

The valence parameters are the largest component of a force field, making up a majority of all parameters. For a force field with N atom types, the number of valence parameters are on the order of $O(N^2)$, $O(N^3)$ and $O(N^4)$
for bond length, bond angle and dihedral angle terms respectively. Consequently, optimization of the valence parameters can be tricky. The fit can be over-determined (more parameters than data) for some properties and under-determined (more data than parameters) for others. In addition, the correlations among parameters make the problem worse. 

An expert system is implemented to handle the fitting. It analyzes the data, decides an appropriate fitting procedure, monitors the fitting process and adjusts fitting options.
Despite, it could be necessary to adjust the fitting options or initial parameters in order to get a better fit for very complicated systems. Adding controls to the initial parameters is usually helpful, especially when the data is limited. 
