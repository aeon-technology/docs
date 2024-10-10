# Fit Quantum Mechanics Data

Methods
Atomic charges must be calculated and assigned first. Atomic charges can be calculated using QM methods (ESP charges or Mulliken Charges) or using the charge equilibrium method. Direct Forcefield uses a charge equilibrium method similar to the published QEq method. The basic parameters used to calculate charge distribution are the ionization potentials (IP) and electron affinities (EA) of relevant atoms, which are collected from literature and included in the Elements.dat file.
Charge parameters are derived from QM atomic charges by solving a set of linear equations. Suppose a set of atomic charges are given in a vector Q for M atoms:
Q=[q_1,q_2,...q_M ]_M.								(1)
The charge parameters can then be calculated by:
AP=Q,							 		(2)
where P is the charge parameter vector in N order:
P=[q_1^o,q_2^o,q_3^o,...δ_12,δ_13...]_N					(3)		
and A is an assignment matrix:
A=[a_(i,j) ]_MxN								(4)
for each atom i and nearest neighbor j:
a_(i,i)=1,■(&)a_(i,j)=1,■(&)a_(j,i)=-1,				(5)
and where all of the other elements are zero. Assignment matrix elements are determined using ATC and BIC parameters as expressed in Eq. (1).
In general, the number of atoms (M) is greater than the number of charge parameters (N). Therefore, Eq. (3) does not have a precise solution. The singular value decomposition (SVD) method49 is used to find the best solution as determined by the least-squares approach. 
Nonlinear Terms
 
The Levenberg-Marquardt method49 with constrained minimization technique is used to fit QMD in order to derive valence terms. At this stage, charge and VDW parameters are frozen, as charge parameters should have already been derived from QMD, while VDW parameters are initialized using a set of default parameters provided by DFF. 

The least squares problem is written as: 
               χ^2=∑_(i=1)^N▒[(y_i-y_i (a ⃗))/σ_i ] ^2+∑_j^Na▒〖P_j (a_j-a_j^o ) 〗^2					(6)		
The first term is the normal least squares expression of input data and parameter-dependent calculated data. The weighting factor σi differs for different data and can be related to the Boltzmann factor for energy data.  The second term is a penalty term in which parameters are restrained to preferred values. The penalty factor Pj is an adjustable factor that controls the constraints. The above equation is reduced to the normal least-squares equation by setting all penalty factors to zero.

Linear Terms

In addition, the SVD method49 is used to reduce redundant problems for linear terms. By limiting variables to linear terms only, the least-squares equation is reduced to a linear equation:
               χ^2=∑_(i=1)^N▒[(y_i-∑_(k=1)^M▒〖a_k X_k 〗)/σ_i ] ^2=|A⋅a-B|						(7)
If some parameters are linear combinations of others, matrix A is singular or numerically very close to singular, and the SVD method is suitable for solving this problem.
  Charge Parameters 
A common way to derive charge parameters from QM data is to convert QM atomic partial charges to charge parameters. Atomic partial charges are calculated from QM wave functions. ESP charges are obtained by fitting to electrostatic potentials, and are thus dependent on how the fit was conducted. ESP charges for atoms in a bulky molecule are typically difficult to obtain as they may be insufficiently sampled. On the other hand, atomic partial charges determined using population analyses such as the Mulliken method are stable. Both types of atomic partial charges have been used in forcefield development.
There are three types of charge parameters: atom based, atom-type based and bond-type based. Atom based charge parameters are identified by atom names (usually element symbol plus sequence number) assigned by the program. Atom-type based parameters are defined by atom types.  Each atom type has a charge parameter, and all atoms that have the same atom type share one parameter. The bond-type based parameter is also called bond charge increment, which is specified by atom types of two bonded atoms (δt(i),at(j)). This parameter represents charge relocation from atom j to atom i. For example, if δat(i),at(j) = 0.5, that means atom i gains 0.5 electron, and atom j loses 0.5 electron. For any atom i, the net charge is a sum of all relevant bond charge increments.
q_i=q_i^o+∑_j▒δ_ij  								(8)
Atom based charge parameters are difficult to transfer; bond-type based charge parameters reflect the interactions of nearest neighbors and ensure charge neutrality of the entire molecule; and atom-type based charges provides the flexibility to assign net charges. DFF uses atom-type and bond-type based charge parameters in developed forcefields. This scheme is flexible to represent any molecules, ionic or non-ionic.
Valence Parameters
 
Valence parameters are the largest component of a forcefield, making up a majority of all parameters. For a forcefield with N atom types, the number of valence parameters are on the order of O(N2), O(N3) and O(N4) for bond, angle and dihedral angle terms respectively. Although using equivalence tables can reduce the number of atom types and parameters effectively, the number of valence parameters remains very large. 

Therefore, optimization of these parameters to fit QM data is a high-dimension optimization problem. In principle, optimization can be achieved using the least-square approach, but in practice it is usually a very difficult task. The fit can be both over-determined (more parameters than data) for some properties and under-determined (more data than parameters) for others.  In addition, the correlations and dependencies among parameters make the problem worse. 

DFF has been designed to solve these problems using various techniques. An expert system that examines the data, decides an appropriate fitting procedure, monitors the fitting process and adjusts fitting options has been implemented to guide the automated parameterization process. 

It may be necessary to adjust the fitting options or initial parameters in order to get a better fit for very complicated systems. Adding controls to the initial parameters is usually very helpful, especially when data is limited. For example, freezing some parameters to reduce the number of adjustable parameters is usually an effective approach to improving fit quality. 
