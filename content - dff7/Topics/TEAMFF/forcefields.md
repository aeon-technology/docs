# Force Fields in TEAMFF

TEAMFF comes with multiple force fields in different force field types and coverages. These force fields are classified in three categories: basic, general and special. 

## Basic Force Fields

The purpose of basic force fields is for providing a starting point of further developments and optimizations. 

The basic force fields are listed in the following table. 

| Name           | Type         | Typing Rule |
| -----------    | -----------  | ----------- |
| TEAM-Basic     | TEAM	        | DFF2012.def |
| AMBER-Basic	 | AMBER		| DFF2012.def |
| CHARMM-Basic	 | CHARMM		| DFF2012.def |
| CFF-Basic	     | CFF(LJ9-6)   | DFF2012.def |
| CFF12-Basic	 | CFF(LJ12-6)  | DFF2012.def |
| DREIDING-Basic | DREIDING	    | DFF2012.def |

These force field were developed by fitting QM data of molecular fragments representing common organic molecules, drug-like molecules taken from MayBridge database and synthetic polymers taken from PolyInfo database. Quantum mechanics calculations were carried out at the level of B3LYP/6-31G(d,p). Atomic partial charges were derived by fitting the ESP charges. Parameterization was validated by comparing force field predicted data (e.g., vibrational frequencies; conformational energies; structural properties such as bond lengths, angles, dihedral angles, etc) against QM data. The LJ parameters are fixed to default values obtained by survey of literature.


## General Force Fields

The general force fields are derived by refining and extending the basic force fields. The refinements include valence, charge and LJ parameters, according to extensive research results. [^1] In addition to the molecules covered by the Basic version, the new coverage includes

There are two force fields in this category: TEAM-General and AMBER-General, which service material and life sciences:

| Name	        | Type   | Typing Rule | Industry  | 
| ------------  | ------ | ----------- | --------- |
| TEAM-General  | TEAM	 | General.ext | Materials |
| AMBER-General | AMBER	 | General.ext | Life      | 

Both force fields are developed using the same typing rules, same optimized LJ-12-6 parameters, and similar QM data set.


## Special Force Fields

The special force fields are developed to extend the coverage of general force fields, for specific application scopes, ionic liquids and zeolites. 

| Name	        | Type   | Typing Rule |
| ------------  | ------ | ----------- | 
| TEAM-IonLiq   | TEAM	 | IonLiq.ext  |
| TEAM-Zeolite  | TEAM	 | Zeolite.def |
| AMBER-IonLiq  | AMBER	 | IonLiq.ext  |

These force fields, works together with the general force fields to expand the coverage without compromising the quality of parameters. More detail is given in [extensibility of TEAMFF](./extensibility.md). Depending on the coverage scope, one or both types are developed. 
