# Introduction

## Overview

Direct Force field (DFF) is a software package for development and deployment of molecular force fields. It comes in two versions: Standard and Professional. The Standard version is for deployment, while the Professional version offers additional functionalities for development.

DFF provides multiple force fields in popular functional forms collectively called TEAM force fields (TEAMFF). TEAMFF is managed by using computer database technology to maximize coverage while maintain high accuracy. To use TEAMFF is straightforward: load a molecular model, set a few options, and run DFF to assign atom types and force field parameters. The results are saved in files that can be used for designated simulation software packages such as LAMMPS and  GROMACS. 

The professional version offers additional functionalities of making new force fields, either to augment the TEAMFF database or to make specific force fields for target systems. 

DFFWeb is a website providing online version of the standard version. To use DFF offline, download and install DFF software. Depending on license configuration, you may use the standard version or professional version. The offline version of DFF includes a graphic user interface.

## Feature List
(* indicates functions of the Professional version)

### Model Builder
- Sketch, edit and modify molecular structures. 
- Supports all elements on the periodic table. 
- Automatically edit molecular topologies.
- Group atoms by charges or by connectivity.
- Pack and unpack periodic simulation boxes.
- Edit simulation cell parameters.
- Build liquid and interface models.
- Reads popular molecular structure data files - MOL, MOL2, PDB, CAR
- Supports solid and surface structures.
- Build super cells from 3-D or 2-D structures.
Visualization  
- Project Navigator allows easy access.
- Portable, self-contained project files facilitate sharing of results with colleagues. 
- Mouse and short-cut key operations for convenience.
- Display atomic and molecular properties.
- Measure molecular properties. 
- Customize Look-and-Feel, including adjustable font sizes.

### TEAMFF Database 
-Integration of different independent force fields in one database
- Supports common force field types - TEAM, AMBER, CHARMM, CFF, DREIDING, provide parameters in each force field type as the base for continue development. 
- Provides high quality parameters with great coverage in common organic molecules, synthetic polymers, solid state materials, transition metal complexes and drug-like compounds in TEAM and AMBER force field types.
- Graphic interface for managing and using database, automatically assign atom types using multiple force fields, with options to handle missing parameters.

### Augment TEAMFF *
- Full functionality for managing the database contents.
- Create customized force fields to be used with the provided force fields. 
- Check out original atom types and parameters for examination and extended development.
- Check in new parameters, automatically set version numbers.
- Functionality for importing common force fields into database.
- Advanced handling of missing parameters, automatically build molecular fragments for parameterization.

### Force Field Development*
- Support popular force field types: TEAM, AMBER, CHARMM, CFF, DREIDING and customized force field types using common functional forms.
- Support preset (default) and customized atom-typing rules.
- Automatic generation of molecular fragments for parameterization.
- Automatic generation quantum mechanics data (QMD) by sampling potential energy surfaces.
- Automatic fit charge and valence parameters using QMD.
- Automatic optimizing the Lennard-Jones parameters by fitting molecular simulation data against experimental liquid data.

### Force Field Workflow*
- Database storage of QMD and parameterized force field files (QMDFF).
- Automatic workflow enables on-the-fly force field (OTF-FF) parameterization for target molecular systems, which can be drug molecules, liquids, and macromolecules, pure or mixed components.

### Simulations
- Energy calculation, normal mode analysis, structure optimization and molecular dynamics simulation for validation of force fields.
- Interface to quantum mechanics software, GAUSSIAN.
- Integrated with GROMACS and LAMMPS.

### User-Friendly Features 
- Toolbars for quick and easy access to common commands. 
- Project Navigator for convenient organization.
- Integrated project and disk file management. 
- Online documentation and tutorials.
- Supports Windows and Linux platforms. 
- Local and floating licensing.
- User guide document, on-line help and tutorials. 

## Common Use Cases
The functionality of DFF includes 
1) Use TEAMFF (Standard version)
2) Augment TEAMFF (Professional version)
3) Make specific force fields (Professional version) 


### Use TEAMFF
The most common use DFF is to assign force field parameters using TEAMFF database. The procedure is similar to using any other traditional force fields.
Prepare or import a molecular model for simulation, then select the force field 
type (e.g. AMBER, TEAM, CHARMM,...) to be used. The selection of force field type is often related to the simulation software intended to use. The difference between TEAMFF and tradition force fields is that several force fields can be used together in the order as given in TEAMFF. The parameters and atom types obtained are prepared as input files for designate simulation software. 

### Augment TEAMFF

The advantage of TEAMFF is its extensibility. To augment TEAMFF can be done in one of two ways, one is to add new parameters to existing force field, another is to add a new force field table. Both start with generate a training set for the new parameters. Given a force field in TEAMFF, if required parameters are missing, DFF will generate the required molecular fragments, which form the training set for new parameterization. Follow the procedure in this document to make a new force field. If the new parameters are added to existing force field, check-in the new force field to the existing force field table. If a new force field is added to augment the database, create a table and check-in the new force field, then the new force field can be used together with the existing one. 


### Make Customized Force Field Using MFDFF Method. 

Traditional force fields consistently face challenges in terms of coverage and accuracy. This stems from poorly defined transferability assumed in force field parametrization, which doesn't always yield optimal results. In essence, any data model derived from regressing a diverse and large dataset, regardless of the regression methodology employed, inherently involves a trade-off between coverage and accuracy.

From an individual user's perspective, this broad coverage may not always be the ideal solution. Given that it's possible to construct a force field directly from quantum mechanical data, a superior approach involves representing a smaller, specific subspace of interest. This approach ensures the most precise representation of the underlying quantum mechanical description. This is where DFF comes into play, offering the opportunity for such specialization. 

The solution includes a database (QMDFF) that stores QM data of fragments and developed force fields for molecular systems identified by constituent fragments. 

For any target system, DFF parses the structure data and search database for force field. If none exists, a new force field will be created using the fragments as training set. Since fragments often shared by different molecules and the QM data of fragments are saved in the database, the requirement of expensive QM computations is minimized. The fitting and validation of force field is the same as explained above. If successful, the result force field is saved in the database for reuse.
