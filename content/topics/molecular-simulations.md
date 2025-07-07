# Simulations

A general procedure of using a force field made by DFF is as follows.

## Assigning a Force field
Prepare or import a simulation model. DFF can be used to build 3-dimensional cubic liquid boxes and liquid interfaces, but this functionality is intended primarily for parameterization and validations. For complex molecular systems, an external software package can be used to build the simulation models. DFF reads most popular file formats such as .pdb, .mol2, and .car files.

It is important to have a consistent assignment of topologies and formal charges in order to assign atom types. If the coordinates of atoms are given with reasonable precision, DFF can automatically assign topologies and formal charges. This method works well for common organic molecules.

With topologies and formal charges assigned, the next step is to assign atom types and force field parameters using TEAMFF. Multiple force fields in the same force field type can be used together. However, the multiple force fields are called in the order as specified. It is important to know that all valence parameters for one molecule must be taken from one force field, which means that there is no mixing of intra-molecular parameters from different force fields, only the inter-molecular parameters (the nonbond parameters) may be taken from different force field and used by the combination rule. In operation, DFF scan all molecules again the selected force field, if any parameters are missing for a molecule in the force field, the molecule is not assigned and passed to the next force field assignment. 

When all parameters are found, the atom types and parameters, which may be taken from different force field tables, are unified to one force field for the simulation model. A new set of atom types which corresponds to the unified force field table, is made automatically. The atom types are assigned to the simulation model. The model and the force field table can be used directly in simulations.

If any parameters are missing, TEAMFF will report the missing terms, which then need to be parameterized.

## Native Functions

DFF contains a built-in simulation engine that can be used to optimize and validate parameters. Simulation jobs can be run interactively so that structures and energies are dynamically updated on the screen. 

### Optimizers
Two different algorithms, the conjugate gradient and variable metric methods, are implemented in DFF for energy minimization. The conjugate gradient method is based on the Polak-Ribiere method, which is similar to the Fletcher-Reeve method. The variable metric method is also called the quasi-Newton method. Both methods involve calculating the derivatives of the potential energy. Both methods are iterative and make use of the previous history of minimization steps as well as the current gradient to determine the next step. For a quadratic functional form in N dimensions, these methods lead to the exact minimum in N steps. The two algorithms have computer memory different requirements. The conjugate gradient needs to store intermediate data on the order of N, while the variable metric method requires storage on the order of N x N.

Restrained energy minimization can be performed to explore energy profiles. This is done by adding energy terms to the total energy function on selected internal coordinates. The restraint function is a harmonic function in which reference values and force constants can be specified. The restraint energy value is subtracted from the total energy in reported results.

### Molecular Dynamics

The velocity verlet algorithm is implemented in DFF. The choice of integration step size is important. One must weigh the increased accuracy of using a small step size against the greater length of simulated real time per given execution time when using a larger step size. In most molecular systems, the highest vibrational frequency is that of X-H bond stretching, whose period is approximately 10-14 s. The integration time step should therefore be approximately 1 femtosecond (fs).

A dynamic run consists of three parts: initialization, equilibration, and simulation. Initialization provides an initial position and velocity for all atoms. This step can be skipped for a continuous simulation. Equilibration is used to attains the most probable configuration for a system consistent with a given target temperature and pressure. When equilibrium has been achieved, the average properties of the system (temperature, potential energies and kinetic energies) must be constant. After equilibration, a simulation can be conducted and collected data can be analyzed.

The available simulation types are:

- NVE (micro-canonical) Simulation. This ensemble is obtained by solving Newton's equation without temperature or pressure controls. Excepting rounding and truncation errors during the integration process, energy is conserved..
- NVT (canonical) Simulation. This ensemble is obtained by controlling temperature either through direct temperature scaling or via temperature-bath. The volume is kept constant throughout the run.
- NPT (isothermal-isobaric) Simulation. This ensemble (NPT) allows control over both temperature and pressure. Unit cell vectors are allowed to change, and pressure is adjusted by adjusting volume. This is the ensemble of choice when correct pressure, volume, and densities are important in the simulation. This ensemble can also be used during equilibration to achieve the desired temperature and pressure before changing to a constant-volume or constant-energy ensemble when data collection starts. 

Temperature can be modularized using two methods: 
- Direct Velocity Scaling. Temperature can be modified by scaling atom velocities so that the target temperature can is exactly matched. Velocities of all atoms are scaled uniformly. This is controlled by a quantity called a temperature window. When instantaneous temperature is outside of the window, scaling takes place.
- Andersen Stochastic Method. At intervals proportional to N2/3, where N is the number of atoms in the system, the velocity of each atom is set from the Maxwell-Boltzmann distribution. This corresponds to a collision with an imaginary heat-bath. The system moves through phase space on a constant energy surface until the velocities are changed. Between these “massive stochastic collisions,” time correlation functions may be calculated as usual.

Pressure is calculated using the virial theorem. Pressure changes can be accomplished by changing particle coordinates and unit cell size in the periodic boundary conditions. Berendsen's method couples the system to a pressure "bath" to maintain a target pressure. At each step, the x, y, and z coordinates of each atom and the cell edges are scaled by a scaling factor. Strength of the coupling is determined by normalized compressibility of the system (user-defined variable). Note that this method changes the cell uniformly so that the size but not the shape of the cell is changed.

DFF uses period boundary conditions in simulating of molecules in condensed phases. A minimum-image model is used. Atom-based or charge-group-based cutoffs can be used in evaluating nonbond interactions. Both methods can be supplemented with cutoff tail corrections. The charge-group based cutoff scheme works very well for organic molecules in which small neutral charge-groups can be defined. As illustrated in the following table, this method yields essentially same results as those obtained using Ewald summation with greatly reduced computational times:

|system	|cutoff	|energy	       |density	    |sec./step
|-------|-------|--------------|------------|---------
|Propane| 6.5	  | -292.5±19.5	 |0.567±0.008 |	0.13
|(N=1320)	|  8.5	| -296.4±19.9	 |0.572±0.009 |	0.20
|				|	10.5	| -298.4±19.2	 |0.572±0.008 |	0.33
|				|	12.5	| -302.2±22.8	 |0.574±0.009 |	0.50
|				|	14.5	| -301.6±20.6	 |0.573±0.009 |	0.75
|				|	Ewald	| -301.3±18.3	 |0.573±0.007 |	7.56
|
|Ethanol| 	6.5	| -1156.8±26.8 |0.734±0.015	| 0.088 
|(N=900)|		8.5	| -1214.0±26.0 |0.776±0.015	| 0.142 
|				|	10.5	| -1210.4±23.9 |0.785±0.014	| 0.229 
|				|	12.5	| -1215.6±23.6 |0.785±0.011	| 0.352 
|				|	14.5	| -1214.8±23.9 |0.782±0.013	| 0.524 
|				|	Ewald	| -1207.7±24.3 |0.780±0.013	| 4.379 


### Structure Relaxation

For models with high internal tension caused by distorted structures, the structures need to relaxed before simulations or processing. A typical example is tangled polymer chains, the structures are poorly constructed so that the internal energy is too high to be processed. To relax such system, a method uses molecular dynamics simulation is implemented.

In this method, a series short-time molecular dynamics simulations are conducted sequentially, in each of the simulations, the atom VDW radius and atom charges are scaled by a factor that ranging from 0 to 1. At beginning, the nonbonded interaction are completely removed, so the chain dynamics is controlled by valance interactions only, which restores the chain structures, as the strength of nonbond interactions increases gradually, the inter-molecular and intra-molecular packings are adjusted gradually.


## External Functions

Two simulation program packages, LAMMPS and GROMACS, are included in DFF release packages. The programs are Multi-Thread Parallel (MTP) enabled  late versions (after 2021). To validate force fields, GROMACS and LAMMPS simulation jobs can be launched directly from the DFF. Typical tasks include energy minimization, NVT, NPT and NVE molecular dynamics. 

### Conversions 

Because different conventions of atom types are used in different programs, DFF translates the atom types to those recognized by other software packages. It should be noted that this translation is simply a one-to-one mapping from the atom types used by DFF to a set of unique string symbols. 


Because potential functions implemented differently from published force field types, some parameters must be converted to the closest functional form for exporting parameters. 

#### Dihedral in DREIDING

$$ K_φ [1-cos⁡n(φ-φ_o)] $$ 

The closest function used in LAMMPS is the CHARMM dihedral_style:

$$ K_φ'[1+cos⁡(n'φ'-φ'_o )] $$

Therefore, parameters are converted as:
$$ K_φ' = K_φ $$
$$ n'=n  $$
$$ φ'_o=nφ_o + π  $$

#### Out-of-plane in DREIDING 
Two different functions are used. 
For non-planar structure ($χ_o ≠ 0$):
$$  
        E_χ(cosχ) = K_χ(cosχ - cosχ_o)^2
$$	 
Otherwise:
$$  
        E_χ(cosχ) = K_χ(1 - cosχ)
$$	 
	 
The harmonic function is used in LAMMPS (class2 improper style):
$  K'_χ(χ'-χ'_o)^2 $
Therefore, to get the same force constant, the following conversions are used:
$$
        χ'_o = χ_o
$$
if $(χ_0≠0)$:
$$      K'_χ = K_χsin^2⁡(χ_o)  
$$
if $(χ_0 = 0)$:
$$  
        K'_χ = K_χ/2
$$

