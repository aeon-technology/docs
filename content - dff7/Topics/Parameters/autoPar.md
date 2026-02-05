# Automatic Parameters

DFF has the functionality to make automatic parameters for two purposes: a) to provide initial parameters for fitting, and b) to provide approximate force field. The automatic parameters are calculated using a set of rules similar to that used in UFF force field[^1] [^2], and atom type properties prepared for each atom type. The atom type properties are saved in a text file, `<dff root>\data\AtomType.dat`. If a new atom type is identified, DFF will make a best guess of the parameters by transferring data from similar atom types and update the file. You can then modify the parameters.

The automatic parameters of bond stretches, bond angle and torsion angle distortions, out-of-plane angle distortions, and VDW parameters are calculated as follows.

### Bond Stretch

Two variables - reference bond length and force constant are calculated:
                         
$$ r_{ij}^o=r_i^*+r_j^*                         $$
$$ f_b=700\frac{Z_i^*Z_j^*}{(r_{ij}^o)^3}         $$

where $r_i^*$ is the bond radii of atom i and $Z_i^*$is the effective charge of atom i, both are basic atomic parameters.

### Bond Angle Distortion (i-j-k)

Three variables are calculated: reference equilibrium angle, force constant and multiplicity of energy minima. The force constant is: 

$$ f_a=700\frac{Z_i^*Z_k^*}{(r_{ik}^o)^3}         $$
                         
where
$$ (r_{ik}^o)^2=(r_{ij}^o)^2 + (r_{jk}^o)^2 - 2r_{ij}^or_{jk}^ocos\theta_j^o $$
                                                  
The multiplicity n and the reference equilibrium angle $\theta_j^o$ are fixed depending on the preferred geometry of the central atom type j:                                   

|Pref. Geom.| n | $\theta_j^o$
|-----------|---|-------------
|SQUARE  	| 2	| 90, 180      
|SQPYRAMIDAL| 2 | 90, 180     
|BIPYRAMIDAL| 6 | 90, 120, 180
|OCTAHEDRAL | 2	| 90, 180
|OTHERS     | 1	| various

### Dihedral Angle Torsion (i-j-k-l)

Three variables are calculated: reference torsion angle, energy barrier height and multiplicity of energy minima. The torsion energy barrier height is:

$$f_t=\frac{\sqrt{\tau_j^*\tau_k^*}}{N_T}$$

where $\tau_j^*$, $\tau_k^*$  are intrinsic torsion barrier parameters for atoms j and k and $N_T$ is the total number of torsion angles about bond (j-k).
The multiplicity n and the reference torsion angle are determined by the preferred geometries of center atoms j and k:
|J	        |k	        |n	|phi0
|-----------|-----------|---|----
|TETRAHEDRAL|TETRAHEDRAL|3  |180.0
|TETRAHEDRAL|PYRAMIDAL	|6	|0.0
|TETRAHEDRAL|PLANAR	    |6	|0.0
|TETRAHEDRAL|BENT	    |3	|180.0
|PYRAMIDAL	|PYRAMIDAL	|6	|180.0
|PYRAMIDAL	|PLANAR	    |6	|180.0
|PYRAMIDAL	|BENT	    |6	|180.0
|PLANAR	    |PLANAR	    |2	|0.0
|PLANAR	    |BENT	    |6	|0.0
|BENT	    |BENT	    | 3	|180.0

### Out-of-Plane Distortion (i-j-k-l, where j is the central atom)

Out-of-Plane distortion is defined only when the preferred geometry of atom j is PYRAMIDAL or PLANAR. The reference angle is always 0.0, and force constant is 0.0 or 5.0, respectively.

### Lenard Jones Potential 

Two parameters: the VDW well depth $\varepsilon_i$ and diameter $d_i^*$ in term of the Lennard-Jones 12-6 function are provided as basic atomic parameters. The parameters are taken or transferred from literature or previous research work.  

### Atomic Charges

The atomic charges are estimated using the QEQ method.[^2]. The basic parameters used to calculate charge distribution are the ionization potentials (IP) and electron affinities (EA) of relevant atoms, which are collected from literature and saved in the Elements.dat file.


[^1] Rappe, A. K.; Casewit, C. J.; Colwell, K. S.; Goddard, W. A.; Skiff, W. M. UFF, a full periodic table forcefield for molecular mechanics and molecular dynamics simulations. Journal of the American Chemical Society 1992, 114, 10024-10035.
[^2] Rappe, A. K.; Goddard III, W. A. Charge equilibration for molecular dynamics simulations. The Journal of Physical Chemistry 1991, 95, 3358-3363.
