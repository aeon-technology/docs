# Compute Quantum Mechanic Data

- Collect MSD to be calculated, which can be started by using Enquiry QMD or Compute QMD commands.
- The command dialog sets computational options. Pay attention to system platform and number of processes. 
- The default basis set is 6-31+G(d,p)/LanL2DZ, which covers most elements in the periodic table and DFF automatically set the basis sets. For light elements (<=36) uses 6-31+G(d,p), and heavy ones use LanL2DZ.
- The computation can be run directly on user's computer, or save as input files for batch jobs.
- The jobs are done by running executable program DFFQMD. This program automatically searches and optimizes the minimum energy structure and scans energy surfaces by rotating flexible bonds. It calculate energy derivatives and the results are saved in QMD files.
- The optimized structure is used to calculate a SMILES string, and this is compared against SMILES made by input MSD. If the SMILES strings are different, the program will be stopped. It is possible that the input structure is different from what QM computation predicted. 

