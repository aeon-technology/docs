# Compute Quantum Mechanic Data

The computation of QMD is crucial for developing force fields. DFF has functionality to automatically sample the internal potential energy surfaces and prepare QMD files for each molecule model. 

## Collect Models

Collect molecular models (.msd files) to be calculated. The models should be molecular fragments that represent all force field energy terms required by the target model. 


## Run Gaussian Computations

An executable program DFFQMD.exe is developed to automatically searches and optimizes the minimum energy structure and scans energy surfaces by rotating flexible bonds. It saves the results in QMD files.

The default basis set is 6-31+G(d,p)/LanL2DZ, which covers most elements in the periodic table and DFF automatically set the basis sets. For light elements (<=36) uses 6-31+G(d,p), and heavy ones use LanL2DZ.

The computation can be run directly on user's computer, or save as input files for batch jobs.
Pay attention to system platform (Linux or Windows) and the number of processes.

## Validation of QMD

The optimized structure is used to calculate a SMILES string, which is compared against SMILES made by input MSD. If the SMILES strings are different, the program will stop. It is possible that the input structure is in high strain so that the result QM computation predict different molecule. 

In addition, the result QMD files are filtered to remove highly distorted structures. The filtering criterion is adjustable by user.
