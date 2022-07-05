# TEAMFF

TEAM-FF stands for Transferable, Extensible, Accurate and Modular force field. Several novel and patent-pending techniques make TEAMFF outstanding from traditional force fields. It is not only a database that contains large number of high quality force field parameters, but also an open database that can be easily extended by adding force field parameters or force fields.

A key concept is that TEAMFF contains multiple force fields that can be used together. That means parameters can be taken from different tables even though the force fields are independently developed. The quality of mixing depends on how those force fields are developed. Since nonbond interaction (VDW and electrostatic) terms are generally transferable using the common (e.g. Lorentz-Berthelot) combining rules, the default is to mix nonbond terms only.

Two major families of force fields are fully supported and continually developed:
AMBER family:

- AMBER-General
- AMBER-IonLiq

TEAM family:

- TEAM-General
- TEAM-IonLiq
- TEAM-Zeolite

In addition, a set of basic force fields:

- TEAM-Basic
- AMBER-Basic
- CHARMM-Basic
- CFF-Basic
- DREIDING-Basic

## Coverage

At present, the native TEAM-FF force fields are developed based on the following functional groups: hydrocarbons (alkane, alkene, alkyne), aromatics, alcohols, phenols, ethers, aldehydes, ketons, acids, esters, amines, carbonates, carbamates, amides, anhydrides, halogen (F, Cl, Br, I) substitutes, sulfates, sulfonates, thiols, sulfides, silanes, alkyl-silanes, siloxians, heterocyclic (3, 4, 5, 6 member rings) compounds, fused rings, amine oxides, nitriles, nitros, common cations (Na+, Ca+2, Mg+2, Li+, H3O+, NH4+), phosphates, phosphoric acids, and phasphazenes.
The above functional groups represent common polymers including polyolefins, polyureas, polystyrenes, polyimides, polyvinyls, polyanhydrides, polyacrylics, polycarbonates, polyhalo-olefins, polyimines, polydienes, polysiloxanes, polyoxides, polyphosphazenes, polysulfides, polyketones, polyesters, polysulfones, polyamides, polyphenylenes, polyurethanes. 430 polymers representing common homo- and co-polymers taken from the PolyInfo database have been tested.

Surfactant molecules such as anion surfactants (RSO4-, RSO3-), cation surfactants (R4N+), non-ionic surfactants (-CCO-) have been tested.

The above functional groups also represent common drug-like compounds. A complete coverage of ~60,000 compounds of the Maybridge database has been tested.

The AMBER+ augmented from AMBER99 provides coverage for proteins. A similar CHARMM+ table will be provided in near future.

For native TEAM-FF force fields, the valence parameters are derived by fitting energy data generated using DFT B3LYP/6-31G(d,p) method which is known to yield good agreement with experimental data for molecular structures, conformational energies and vibration frequencies. The charge parameters are derived using ESP charges calculated at the same level of theory, subject to adjustments according to OPLS charge parameters. The VDW parameters are initially taken from OPLS and optimized whenever it is necessary. Because the VDW parameters are consistent with the charge parameters, and molecular structures are well represented, the native force fields are expected to yield good predictions for molecules in condensed phases. A few papers (see References) have been published in recent years, however, majority validation works are undertaking and the results will be published in near future.

## References

- Enthalpies of mixing predicted using molecular dynamics simulations and OPLS force field, Jianxing Dai, Xiaofeng Li, Lifeng Zhao, Huai Sun, **_Fluid Phase Equilibria (2010)_** 289, 156
- An Ab Initio Force Field for Predicting Hydrogen Storage in IRMOF Materials, Jia Fu and Huai Sun, **_J. Phys. Chem. C, (2009)_** 113 (52), pp 21815, C21824
- Prediction of partition coefficients and infinite dilution activity coefficients of 1-ethylpropylamine and 3-methyl-1-pentanol using force field methods, Yang Liu, Xiaofeng Li, Ling Wang, Huai Sun **_Fluid Phase Equilibria 285 (2009)_** 19, C23
- the accuracy of predicting shear viscosity of molecular liquids using the periodic perturbation method, Lifeng Zhao, Tao Cheng, and Huai Sun **_J. Chem. Phys. 2008_**, 129, 144501
- One force field for predicting multiple thermodynamic properties of liquid and vapor ethylene oxide, **_Fluid Phase Equilibria 2008_**, 274, 36 Lifeng Zhao, Lianchi Liu, Huai Sun. Semi-ionic Model for Metal Oxides and Their Interfaces with Organic Molecules. **_J. Phys. Chem. C 2007_**, 111, 10610.
- Prediction of fluid densities using automatically derived VDW parameters, H. Sun, **_Fluid Phase Equilibria 217 (2004)_** 59, C76
