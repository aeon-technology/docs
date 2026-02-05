# Fit Lennard Jones Parameters

The Lennard-Jones (LJ) parameters are critical for predicting condense phase properties.[^1][^2] The data must contain sufficient information in order to fit the parameters. DFF provides two functionalities to handle this problem: fit molecular clusters (dimers) and to fit liquid properties.   

Due to strong correlations among the charge, valence and LJ parameters, fitting LJ parameters should be decoupled from the fittings of charge and valence parameters. After the LJ parameters are changed, the fitting of valence parameters should be repeated, and the entire process should be done in multiple iterations. If, due to the strong polarizations in condense phase, the charge parameters obtained by fitting small molecule data need to be adjusted, which can be signaled when the LJ parameters in reasonable ranges cannot fit the targeted condense phase properties. The entire process should be repeated. The good thing is, the iteration converges quickly, based on multiple research results.

## Fit molecular clusters (dimer)

DFF can determine nonbond parameters by fitting molecular clusters (dimers). A number of configurations of the cluster should be generated and calculated with relatively high-level QM calculations. DFF automatically freezes all parameters except the LJ parameters to fit the potential energies using the Levenberg-Marquardt method.

It should be noted that this approach might not work well for predicting physical properties of molecules in condensed phases. Although in principle the VDW parameters can be derived by fitting to QM data calculated for molecular clusters, this approach has the following limitations. a) it is very difficult to accurately describe weak VDW interactions using QM method, high level of theory and an extensive basis set must be used. b) the dimer is too small to represent molecular interactions in condensed phases. The result energetic data only represents molecular interactions in gas phase, which in many cases can be significantly different from those found in the condensed phases. 

## Fit Liquid Data

DFF can be used to optimize VDW parameters by combining a molecular dynamics simulation with a least-squares fit procedure. 

The statistic mechanical perturbation theory is used to enable the automation. Assume a small change to the adjustable parameters:               

$$  a'_k = a + δa_k$$          						

The change to the potential energy can be regarded as a perturbation: 

$$  U = U_0 + δU $$                    	

According the perturbation theory, the configuration integral of canonical ensemble consisting of N particles can be written as: 

$$  Z_N=∫⋯∫exp⁡[-β(U_o+δU)]dq_1⋯dq_N $$ 
$$=Z_N^o⟨exp⁡[-β⋅δU] ⟩_o	$$					 

where the brackets indicate unperturbed (reference state) ensemble average. For any physical property A, we have: 

$$ ⟨A⟩=⟨A⟩_o+⟨δA⟩_o		$$						

For example, the internal energy and pressure of ensemble average are given by:

$$⟨E⟩=KT^2 (∂ln⁡Z_N/∂T)_{N,V} = ⟨E⟩_o + ⟨δU⟩_o	$$				   	
$$⟨P⟩=KT(∂ln⁡Z_N/∂V)_{N,T}=⟨P⟩_o + ⟨∑q_i∂δU/∂q_i⟩_o	$$		

The above equations indicate that the change in potential energy and pressure with the perturbation can be estimated by averaging the perturbation energy and virial in the reference state obtained by NVT simulation. The derivatives of an ensemble averaged property \<A\> (energy or pressure) with respect to the parameter $a_k$ 
is then:

$$\frac{\partial⟨A⟩}{\partial a_k}=⟨\frac{\partial A}{partial a_k }⟩_o $$  							

If the quantity $∂A/∂a_k$ can be analytically evaluated, such as the pressure and internal energy in canonic ensemble, the derivative can be obtained in one simulation. Subsequently, the parameters can be optimized by the least-square method automatically. 

In order to obtain transferable parameters, several molecules containing the same atom types should be parameterized simultaneously. For example, the following table shows molecular liquids that can be used to parameterize non-valence parameters for alkanes:

| Model	|T	|HOV	|Den
|-------|---|-------|---
|cyclohexane	    |293.2 |8.0	|0.779
|2_2_4_trimethylpentane	|303.2 |	8.4	|0.684
|isopentane	        |293.2 	|6.0	|0.620
|ethane	            |184.5 	|3.5	|0.546
|propane	        |231.1 	|4.5	|0.581
|2_2_dimethylhexane	|303.2 	|8.9	|0.687
|2_5_dimethylhexane	|303.2 	|8.9	|0.685
|pentane	        |293.2 	|6.4	|0.626
|2_methylheptane	|303.2 	|9.5	|0.690
|butane	            |298.2 	|5.3	|0.573
|octane	            |298.2 	|10.2	|0.699
|methane	        |111.1 	|2.0	|0.424

The table lists temperature, heat of vaporization and equilibrium density of the relevant molecular liquids.

The uncertainty in ensemble average has an impact to the fitting quality. Large uncertainties associated with short simulation time lead to oscillation in the fitting parameters. In such situations, extending the simulation time is necessary. 

For polar molecules with relatively large atomic partial charges, the electrostatic terms dominate the nonbond interactions. If the LJ parameters cannot be optimized to fit empirical data, the atomic charges may not be appropriate, even if the charges are derived by fitting QM electrostatic potentials. The reason is that the separation of electrostatic and VDW parameters is for convenience but not scientifically solid. As in principle, all intermolecular interactions are electrostatic in nature. Comparing the charge values with those in successful force fields might be helpful. If necessary, consider using restraints in the fit of the charge parameters.

Similarly, if the valence parameters are incorrect, it could be very difficult to optimize the LJ parameters. Even if a fit seems to be successful, the LJ parameters might not be physically meaningful. Careful examination of the intramolecular properties such as bond lengths, angles and dihedral angles is a key to solve this problem.

### Temperature Dependent Parameters

Strictly speaking, force field is not potential energy function because of the empirical (non-polarizable) functions deployed. The nonbond interaction is found to be dependent on temperature because of the polarization effects.[^3] One solution is to scale the dispersion coefficient C_6 using the following form of Lennard-Jones (LJ-12-6) function 

$$ V(r)=A/r^{12} -(C_6^*)/r^6 		$$		

$$	C_6^*=f_{disp}(T)C_6			$$					

where the scaling factor $f_{disp}(T)$  is temperature dependent, which can be written as a linear function,
 
$$	f_{disp}(T) = 1 + λ(T-T_{ref} ).		$$					
The reference temperature T_ref is conveniently fixed at 298K. 

Using the expression of Lennard-Jones (LJ-12-6) function, the well-depth and radius parameters are expressed as:

$$  ε_{ij}(T)=f_{disp}^2(T)ε_{ij}(298)			$$		
$$	r_{ij}^o(T)=f_{disp}^(-1/6)(T) r_{ij}^o(298) $$	  	

It is found that the scaling factor is rather generic, it takes only two values depending on the hybridization state of the atom type[^4][^5][^6]:

|Atom type	|λ (/K)	| Description
|-----------|-------|-------------------   
|c_3a		|5.0E-05	|C, aromatic        
|c_3ac	|5.0E-05	|C, aromatic, bond t
|c_3aco	|5.0E-05	|C, aromatic, with c
|c_3o		|5.0E-05	|C, sp2, in ketone  
|c_3oh	|5.0E-05	|C, sp2, in aldehyde
|c_3oh2	|5.0E-05	|C, sp2, in formalde
|c_4		|1.4E-04	|C, sp3             
|c_4h		|1.4E-04	|C, sp3, with 1 H   
|c_4h2	|1.4E-04	|C, sp3, with 2 H   
|c_4h3	|1.4E-04	|C, sp3, with 3 H   
|c_4o2	|1.4E-04	|C, sp3, bond to 2 O
|c_4oh2	|1.4E-04	|C, sp3, bond to O, 
|c_4oh3	|1.4E-04	|C, sp3, bond to O, 
|h_1		|1.4E-04	|H                  
|o_1		|5.0E-05	|O, sp2, in carbonyl

The scaling factors are specified by a global parameter file: <dff-root>/data TemperatureFactor.dat, which subject to further optimizations.

### References

[^1]: Jorgensen, W. L.; Tirado-Rives, J. The OPLS [optimized potentials for liquid simulations] potential functions for proteins, energy minimizations for crystals of cyclic peptides and crambin. Journal of the American Chemical Society 1988, 110, 1657-1666.
[^2]: Sun, H. Prediction of fluid densities using automatically derived VDW parameters. Fluid Phase Equilibria 2004, 217, 59-76.
[^3]: Gong, Z.; Sun, H.; Eichinger, B. E. On the Temperature Transferability of Force field Parameters for Dispersion Interactions. Journal of Chemical Theory and Computation 2018.
[^4]: Gong, Z.; Wu, Y.; Wu, L.; Sun, H. Predicting Thermodynamic Properties of Alkanes by High-Throughput Force field Simulation and Machine Learning. Journal of Chemical Information and Modeling 2018, 58, 2502-2516.
[^5]: Gong, Z.; Sun, H. Pressure-viscosity relation of 2,2,4-trimethylhexane predicted using all-atom TEAM force field. Fluid Phase Equilibria 2019, 497, 64-70.
[^6]: Gong, Z.; Sun, H. Extension of TEAM Force-Field Database to Ionic Liquids. Journal of Chemical & Engineering Data 2019.
