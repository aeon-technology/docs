Fit Liquid Data

DFF can be used to optimize VDW parameters automatically. This is done by combining a molecular dynamics simulation with a least-squares fit procedure. 
Perturbation Theory
The statistic mechanical perturbation theory is used to enable the automation.36,38,50 Assume a small change to the adjustable parameters:               
	a'_k=a_k+δa_k                              						(1)
The resultant change to the potential energy can be regarded as a perturbation: 
           U=U_o+δU                                                                      			(2)	
Based on the perturbation theory, the configuration integral of canonical ensemble consisting of N particles can be written as: 
Z_N=∫▒〖⋯∫▒〖exp⁡[-β(U_o+δU)] dq_1⋯dq_N 〗〗
■(&)=Z_N^o ⟨exp⁡[-β⋅δU] ⟩_o					(3)	 
where the brackets indicate unperturbed (reference state) ensemble average. For any physical property A, we have: 
⟨A⟩=⟨A⟩_o+⟨δA⟩_o								(4)
For example, the internal energy and pressure of ensemble average are given by:
⟨E⟩=KT^2 ((∂ ln⁡〖Z_N 〗)/∂T)_(N,V)=⟨E⟩_o+⟨δU⟩_o					(5)   	
⟨P⟩=KT((∂ ln⁡〖Z_N 〗)/∂V)_(N,T)=⟨P⟩_o+⟨∑▒〖q_i  ∂δU/(∂q_i )〗⟩_o				(6)
The above equations indicate that the change in potential energy and pressure with the perturbation can be estimated by averaging the perturbation energy and virial in the reference state obtained by NVT simulation. The derivatives of an ensemble averaged property <A> (energy or pressure) with respect to the parameter ak is then:
∂⟨A⟩/(∂a_k )=⟨∂A/(∂a_k )⟩_o  								(7)
If the quantity ∂A/∂a_k can be analytically evaluated, such as the pressure and internal energy in canonic ensemble, the derivative can be obtained in one simulation. Subsequently, the parameters can be optimized by the least-square method automatically. Notice that in the fluctuation framework51, similar requirement is needed. 
In order to obtain transferable parameters, several molecules containing the same atom types should be parameterized simultaneously. For example, the following table shows molecular liquids that can be used to parameterize non-valence parameters for alkanes:
Model	T	HOV	Den
cyclohexane	293.2 	8.0	0.779
2_2_4_trimethylpentane	303.2 	8.4	0.684
isopentane	293.2 	6.0	0.620
ethane	184.5 	3.5	0.546
propane	231.1 	4.5	0.581
2_2_dimethylhexane	303.2 	8.9	0.687
2_5_dimethylhexane	303.2 	8.9	0.685
pentane	293.2 	6.4	0.626
2_methylheptane	303.2 	9.5	0.690
butane	298.2 	5.3	0.573
octane	298.2 	10.2	0.699
methane	111.1 	2.0	0.424
The table lists temperature, heat of vaporization and equilibrium density of the relevant molecular liquids. 
The uncertainty in ensemble average has a direct impact to the fitting quality. Large uncertainties associated with short simulation time lead to oscillation in the fitting parameters. In such situations, extending the simulation time is necessary. 
For polar molecules with relatively large atomic partial charges, the electrostatic terms dominate the nonbond interactions. If the VDW parameters cannot be optimized to fit empirical data, the atomic charges may not be appropriate, even if the charges are derived by fitting QM electrostatic potentials. The reason is that the separation of electrostatic and VDW parameters is for convenience but not scientifically solid. As in principle, all intermolecular interactions are electrostatic in nature. Comparing the charge values with those in successful forcefields might be helpful. If necessary, consider using restraints in the ESP fit and re-parameterizing the charge parameters.
Similarly, if the valence parameters are incorrect, it could be very difficult to optimize the VDW parameters. Even if a fit seems to be successful, the VDW parameters might not be physically meaningful. Careful examination of the intramolecular properties such as bond lengths, angles and dihedral angles is a key to solve this problem.
Temperature Dependent Parameters
Strictly speaking, forcefield is not potential energy function because of the empirical (non-polarizable) functions deployed. The nonbond interaction is found to be dependent on temperature because of the polarization effects.35 One solution is to scale the dispersion coefficient C_6 using the following form of Lennard-Jones (LJ-12-6) function 
V(r)=A/r^12 -(C_6^*)/r^6 									(8)
	C_6^*=f_disp (T)  C_6								(9)
where the scaling factor f_disp (T)  is temperature dependent, which can be written as a linear function, 
	f_disp (T)=1+λ(T-T_ref ).							(10)
The reference temperature T_ref is conveniently fixed at 298 K. 
Using the expression of Lennard-Jones (LJ-12-6) function used in DFF,  the well-depth and radius parameters are expressed as:
	ε_ij (T)=f_disp^2 (T) ε_ij (298)							(11)
	r_ij^o (T)=f_disp^(-1/6) (T) r_ij^o (298)							(12)	
It is found that the scaling factor is rather generic, it takes only two values depending on the hybridization state of the atom type:
Atom type	λ (/K)	Description
c_3a	5.0E-05	C, aromatic
c_3ac	5.0E-05	C, aromatic, bond to C
c_3aco	5.0E-05	C, aromatic, with carbonyl
c_3o	5.0E-05	C, sp2, in ketone
c_3oh	5.0E-05	C, sp2, in aldehyde
c_3oh2	5.0E-05	C, sp2, in formaldehyde
c_4	1.4E-04	C, sp3
c_4h	1.4E-04	C, sp3, with 1 H
c_4h2	1.4E-04	C, sp3, with 2 H
c_4h3	1.4E-04	C, sp3, with 3 H
c_4o2	1.4E-04	C, sp3, bond to 2 O
c_4oh2	1.4E-04	C, sp3, bond to O, with 2 H
c_4oh3	1.4E-04	C, sp3, bond to O, with 3 H
h_1	1.4E-04	H
o_1	5.0E-05	O, sp2, in carbonyl
o_2	1.4E-04	O, sp3, in ether
The scaling factors are specified by a global parameter file: <dff-root>/data TemperatureFactor.dat, which subject to further optimizations.

