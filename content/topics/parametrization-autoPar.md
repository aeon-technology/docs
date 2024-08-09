# Automatic Parameters

DFF has the functionality to make automatic parameters for two purposes: to provide initial parameters for fitting and/or to provide default parameters used to approximate forcefields. Similar to the methods used in UFF forcefields46, automatic parameters are calculated based on a set of base parameters specified for default atom types. Forcefield parameters for bond stretches, bond angle and torsion angle distortions, out-of-plane angle distortions, and VDW parameters are calculated based on a set of rules. 
Base parameters are stored in the file AtomType.dat, which is located in the Data directory. You can modify parameters through the user interface or by directly editing the data files.
Bond Stretch
Two variables - reference bond length and force constant - are calculated:
                         
where ri is the bond radii of atom i and Z*i is the effective charge of atom i. Both are basic atomic parameters.
Bond Angle Distortion (i-j-k)
Three variables are calculated: reference equilibrium angle, force constant and multiplicity of energy minima. The force constants are: 
                         
where
                                                  
The multiplicity n and the reference equilibrium angle are fixed depending on the preferred geometry of the central atom type j:                                   
Pref. Geom.	n   	 
SQUARE  	2	90, 180
SQPYRAMIDAL	2 	90, 180
BIPYRAMIDAL         	6 	90, 120, 180
OCTAHEDRAL          	2	90, 180
OTHERS                    	1	various

Dihedral Angle Torsion (i-j-k-l)
Three variables are calculated: reference torsion angle, energy barrier height and multiplicity of energy minima. The torsion energy barrier height is derived by:
                         
where  ,   are intrinsic torsion barrier parameters for atoms j and k and  is the total number of torsion angles about bond (j-k).
The multiplicity n and the reference torsion angle are determined by the preferred geometries of center atoms j and k:
J	k	n	phi0
TETRAHEDRAL	TETRAHEDRAL	3	180.0
TETRAHEDRAL	PYRAMIDAL	6	0.0
TETRAHEDRAL	PLANAR	6	0.0
TETRAHEDRAL	BENT	3	180.0
PYRAMIDAL	PYRAMIDAL	6	180.0
PYRAMIDAL	PLANAR	6	180.0
PYRAMIDAL	BENT	6	180.0
PLANAR	PLANAR	2	0.0
PLANAR	BENT	6	0.0
BENT	BENT	3	180.0

Out-of-Plane Distortion (i-j-k-l, where j is the central atom)
Out-of-Plane distortion is defined only when the preferred geometry of atom j is PYRAMIDAL or PLANAR. The reference angle is always 0.0, and force constant is 5.0 or 0.0, respectively.
VDW Interactions 
Two parameters are provided: the VDW well depth and diameters in terms of the Lennard-Jones 12-6 function:   
               
               
Both  and   are basic atomic parameters. 
Atomic charge parameters are estimated using charges calculated with the QEQ47 method.
