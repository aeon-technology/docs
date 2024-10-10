# Simulation Menu

## INTERNAL SIMULATIONS

- **Energy Calculation** opens an Energy dialog used to set up single-point energy calculations. Job Name identifies the running job and its output file. Nonbond Energy button opens a Nonbond Control dialog to set up options for nonbond calculations. Computation options include Gradient and Hessian. After the job finishes, the input, output file and result structure will be loaded into a new folder of the Project Navigator. The Nonbond Control dialog also allows the user to select a cutoff method. Three options can be selected: Atom Cutoff, Group Cutoff and No Cutoff. A Cutoff value and a Buffer value can then be set. The Buffer value is used to calculate the neighbor list efficiently. Both are specified in Angstroms. If using Group Cutoff, charge groups must be defined using Build → Group by Charge. If No Cutoff is selected, all nonbond interaction pairs are calculated. For systems with periodic boundary conditions, Tail Corrections can be added to compensate for energy and pressure loses due to cutoff.

- **Optimization** performs structure optimizations by minimizing energy. It opens an Optimization dialog that allows the user to set a Job Name, Number of Steps, and a Convergence criterion. Two optimization algorithms can be selected: Conjugate gradient and Variable metric. Options for nonbond energy calculations are accessible by clicking Nonbond Energy, as explained above. To add torsion restraints during optimization, click the checkbox to open a new Add Restraints dialog to set up the restraints. In the Add Restraints dialog, the top section displays input restraints. To add a restraint, click and highlight the first cell labeled a1. This allows you to select atoms from the display window by Left-Clicking. Click and select four atoms to fill the four atom cells (a1, a2, a3, a4). Enter a restraining force constant (100 is the default), a starting angle x1, increments dx, and a total number of points n. Clicking Add will add one restraint.  To add another, repeat the above procedure. Click OK to quit this dialog. To see your changes to the structure and energy of the molecule, select the Screen view option.  Clicking "Execute" launches the background optimization job. When the job finishes, the input, output file and resulting structure will be loaded into a new folder in the Project Navigator

- **Molecular Dynamics** performs molecular dynamics simulation. It opens a Molecular Dynamics dialog. In this dialog, a Job name must first be specified before a simulation ensemble can be chosen - "NVT", "NPT" or "NVE".  To use a temperature control method, click Temperature (K) and select either the "Stochastic (Anderson)" or the "Scale Velocity" method. To use a pressure control method, click Pressure (MPa). The Berensdsen method is implemented. Nonbond Energy can be used to set  up nonbond calculations as explained above. In the Run time section, Timestep (fs), Equilibrium Steps and Evaluation Steps are user-set parameters that control how the simulation is to be performed. The Intervals section is used to for control how frequently (in number of steps) the Trajectory will be saved and how frequently the Screen View, if selected, will be updated if Screen View is selected. Execute launches the background job. When the job finished, the input, output file and resultant structure will be loaded into a new folder in the Project Navigator.

# EXTERNAL SIMULATIONS

- **GROMACS** opens a [dialog](Simulation-GROMACS.md) that sets the simulation options and starts the background job.

- **LAMMPS** opens a [dialog](Simulation-LAMMPS.md) that sets the simulation options and starts the background job.

- **Job List** opens a Job Monitor dialog used to view external simulation jobs. Jobs that have been submitted are listed here. More information about each job can be viewed by double-clicking a record. Right-clicking on a record allows the user to perform four functions. Refresh rechecks the status of this job. If the job is finished, it will be marked as (   ). View Log displays a log file of the job. View Result displays simulation results and should only be used when the job has finished. Delete removes the job record from the list but preserves the saved files.
 
- **Trajectory View** displays the simulation trajectory on DFF screen. Paired topology (.msd) and trajectory (.dta) files must be selected before  clicking this command. A dialog will then show the selected files with options to either Save the last frame or Show the trajectory.
 
- **Export** allows the user to prepare input files for simulation engines. Exported files are saved in a folder with the default name of the force field type used. Resultant force field parameters and model structural data are written into output files with the following extension names:

|Program  | Files            |
|-------- |  ----------------|
|GROMACS  | mdp = input, gro = coordinate, top = topology, itp = parameters|
|LAMPPS	  | in = input, data = coordinates, topology and parameters| 
|AMBER	  | dat = parameters, prep = coordinates and topology|
|CHARMM	  | par = parameters, rtf = coordinates and topology|
|DREIDING | drg	= parameters |
