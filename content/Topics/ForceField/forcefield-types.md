# Force Field Types

Force field type refers to a combination of functional forms and definitions of internal coordinates used with the functions. DFF supports several common force field types including AMBER [^1] [^2] [^3], CHARMM [^4] [^5] [^6], OPLS [^7] [^8], CFF [^9] [^10] [^11], COMPASS [^12], DREIDING [^13], and a native force field type, TEAM [^14] [^15].  

Use of force field type is usually decided based on intended applications and availability of simulation software. The following force field types are supported by different simulation engines.

 | Force Field Type | Software        |
 | ---------------- | ----------------|
 | AMBER	        | LAMMPS, GROMACS |
 | CHARMM           | LAMMPS, GROMACS |
 | DREIDING	        | LAMMPS |
 | TEAM	            | LAMMPS |
 | CFF	            | LAMMPS |



## AMBER Force Field Type

$$
E_{total} = \sum_{b} k_{b} (\gamma_b-\gamma_b^0)^2 
$$
$$
+ \sum_{a} k_{a} (\theta_a-\theta_a^0)^2 
$$
$$
+ \sum_{d} \sum_{n=1}^3 [1 + k_{d,n} cos(n\phi_d - \phi_d^0)]
$$
$$
+ \sum_{m} \sum_{n=1}^3 [1 + k_{m,n} cos(n\chi_m - \chi_m^0)]
$$

$$
+ \sum_{i<j}\frac{1}{4πε_0}\frac{q_i q_j}{r_{ij}} 
+ \epsilon_{ij}[(\frac{r_{ij}^o}{r_{ij}})^{12} - (\frac{r_{ij}^o}{r_{ij}})^{6}]  
$$

The internal coordinates are bond lengths ($\gamma_b$), bond angles ($\theta_a$), dihedral angles ($\phi_d$), improper dihedral angles ($\chi_m$), and nonbond distances between atoms i and j ($r_{ij}$). The nonbond atom pairs are atoms that are from different molecules or separated by at least three consecutively covalence bonds within one molecule.

In the functions, the force constants ($k_x$), reference coordinates ($\gamma_b^0, \theta_a^0, \phi_d^0, \chi_m^0, r_{ij}^0$), and atomic partial charges ($q_i$) are adjustable parameters that need to be determined.  


## TEAM force field Type:  

$$
E_{total} = \sum_{b} k_{b} [(\gamma_b-\gamma_b^0)^2 + 2(\gamma_b-\gamma_b^0)^3 + \frac{7}{3} (\gamma_b-\gamma_b^0)^4] 
$$
$$
+ \sum_{a} k_{a} [(\theta_a-\theta_a^0)^2 + A(\theta_a^0) (\theta_a-\theta_a^0)^3 + B(\theta_a^0) (\theta_a-\theta_a^0)^4]
$$
$$
+ \sum_{d}k_{d,1} (1+cos\phi_d) + k_{d,2} (1-cos2\phi_d) + k_{d,3} (1+cos3\phi_d)
$$
$$
+ \sum_{o} k_{o2} (\chi_o - \chi_o^0)^2
$$

$$
+ \sum_{i<j}\frac{1}{4πε_0}\frac{q_i q_j}{r_{ij}} 
+ \epsilon_{ij}[(\frac{r_{ij}^o}{r_{ij}})^{12} - (\frac{r_{ij}^o}{r_{ij}})^{6}]  
$$

The main differences between AMBER and TEAM force field types are the anharmonic terms in bond length and bond angle energy terms. The functions are inherited from CFF type force fields. However, the anharmonic parameters are fixed. The anharmonic angle parameters:

$$
A(\theta_a^o)=\frac{2(\pi-2\theta^o)}{3\theta^o(\pi-2\theta^o)};   
B(\theta_a^0)=-\frac{1}{2\theta^o(\pi-\theta^o)}
$$
when $\theta^o\neq0, \pi$, otherwise:
$$
A(\theta_a^o)=0; B(\theta_a^0)=0
$$

In addition, the CFF style cross-coupling terms are optionally used. In most case, only the bond-bond and bond-angle coupling terms are used:

$$
E_{bb}=\sum_{b1,b2} k_{b1b2} (\gamma_{b1} - \gamma_{b1}^o) (\gamma_{b2} - \gamma_{b2}^o)
$$

$$
E_{ba}=\sum_{b,a} k_{ba} (\gamma_{b} - \gamma_{b}^o) (\theta_a - \theta_b^o)
$$


The nonbond interactions are described by Columbic and Lennard-Jones 12-6 potential functions. Except CFF and COMPASS force field types, the LJ-12-6 function is used together with the combination rule:

$$
\epsilon_{ij} = \sqrt{\epsilon_i \epsilon_i}
$$

$$
r_{ij}^o = \frac{r_i^o + r_j^o}{2}
$$

CFF and COMPASS use LJ-9-6 function and the 6th-order combination rule [^9].


[^1]: Asensio, J. L.; Jimenez‐Barbero, J. The use of the AMBER force field in conformational analysis of carbohydrate molecules: Determination of the solution conformation of methyl α‐lactoside by NMR spectroscopy, assisted by molecular mechanics and dynamics calculations. Biopolymers 1995, 35, 55-73.

[^2]: Ponder, J.W. and Case, D.A. (2003) "Force fields for protein simulations." Adv. Prot. Chem. 66, 27-85. (PDF)

[^3]: Wang, J. M.; Wolf, R. M.; Caldwell, J. W.; Kollman, P. A.; Case, D. A. Development and testing of a general amber forcefield. Journal of Computational Chemistry 2004, 25, 1157-1174.

[^4]: B. R. Brooks, R. E. Bruccoleri, B. D. Olafson, D. J. States, S. Swaminathan, and M. Karplus: CHARMM: A Program for Macromolecular Energy, Minimization, and Dynamics Calculations, J. Comp. Chem. 4, 187-217 (1983)

[^5]: A. D. MacKerell, Jr., B. Brooks,C. L. Brooks, III, L. Nilsson, B. Roux, Y. Won, and M. Karplus: CHARMM: The Energy Function and Its Parameterization with an Overview of the Program, in The Encyclopedia of Computational Chemistry, 1, 271-277, P. v. R. Schleyer et al., editors (John Wiley & Sons: Chichester, 1998)

[^6]: Brooks, B. R.; Brooks, C. L.; Mackerell, A. D.; Nilsson, L.; Petrella, R. J.; Roux, B.; Won, Y.; Archontis, G.; Bartels, C.; Boresch, S.; Caflisch, A.; Caves, L.; Cui, Q.; Dinner, A. R.; Feig, M.; Fischer, S.; Gao, J.; Hodoscek, M.; Im, W.; Kuczera, K.; Lazaridis, T.; Ma, J.; Ovchinnikov, V.; Paci, E.; Pastor, R. W.; Post, C. B.; Pu, J. Z.; Schaefer, M.; Tidor, B.; Venable, R. M.; Woodcock, H. L.; Wu, X.; Yang, W.; York, D. M.; Karplus, M. CHARMM: The biomolecular simulation program. Journal of Computational Chemistry 2009, 30, 1545-1614.

[^7]: Jorgensen, W. L.; Tiradorives, J. THE OPLS POTENTIAL FUNCTIONS FOR PROTEINS - ENERGY MINIMIZATIONS FOR CRYSTALS OF CYCLIC-PEPTIDES AND CRAMBIN. Journal of the American Chemical Society 1988, 110, 1657-1666.

[^8]: Damm, W.; Frontera, A.; Tirado–Rives, J.; Jorgensen, W. L. OPLS all-atom forcefield for carbohydrates. Journal of Computational Chemistry 1997, 18, 1955-1970.

[^9]: Hwang, M. J.; Stockfisch, T. P.; Hagler, A. T. Derivation of Class II force fields. 2. Derivation and Characterization of a Class II Forcefield, CFF93, for the Alkyl Functional Group and Alkane Molecules. Journal of the American Chemical Society 1994, 116, 2515-2525.

[^10]: Maple, J. R.; Hwang, M. J.; Stockfisch, T. P.; Dinur, U.; Waldman, M.; Ewig, C. S.; Hagler, A. T. Derivation of class II force fields. I. Methodology and quantum forcefield for the alkyl functional group and alkane molecules. Journal of Computational Chemistry 1994, 15, 162-182.

[^11]: Sun, H.; Mumby, S. J.; Maple, J. R.; Hagler, A. T. An ab Initio CFF93 All-Atom Forcefield for Polycarbonates. Journal of the American Chemical Society 1994, 116, 2978-2987.

[^12]: Sun, H. COMPASS: An ab Initio Force-Field Optimized for Condensed-Phase ApplicationsOverview with Details on Alkane and Benzene Compounds. The Journal of Physical Chemistry B 1998, 102, 7338-7364.

[^13]: Mayo, S. L.; Olafson, B. D.; Goddard, W. A. DREIDING: a generic forcefield for molecular simulations. The Journal of Physical Chemistry 1990, 94, 8897-8909.

[^14]: Hierarchical atom type definitions and extensible all-atom force fields
Jin, Zhao; Yang, Chunwei; Cao, Fenglei; Li, Feng; Jing, Zhifeng; Chen, Long; Shen, Zhe; Xin, Liang; Tong, Sijia; Sun, Huai.
J. Comput. Chem. 2016.

[^15]: Gong, Z.; Sun, H.; Eichinger, B. E. On the Temperature Transferability of Forcefield Parameters for Dispersion Interactions. Journal of Chemical Theory and Computation 2018.

