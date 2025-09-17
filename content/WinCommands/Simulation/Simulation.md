# Simulation Menu

- **Relaxation** opens a dialog to set up vdW-growth NVT molecular dynamics to relax high-tension structures. In the dialog, parameters are:
- 'Temperature (K)' button is used to set the temperature, the higher temperature, the more vigor dynamics. The default is room temperature (298K). 
- 'Nonbond Energy' button starts a new dialog for setting how the nonbond energy is calculated. If charge groups are defined, using 'Group cutoff' is more efficient, otherwise using 'Atom cutoff'. 'No cutoff' means calculate all pairs of nonbond interactions, which could be highly intensive computation. The cutoff (distance) with tail correction are sensitive parameters for efficiency, since the purpose of the simulation is to relax the system, a short cutoff with tail correction is recommended. 
- 'vdW Growth steps' is how many steps scaling from 0 to 1, which defines at each stage the scaling factor applied to vdW terms.
- 'MD time step (fs) is the step size of each MD run.
- 'MD steps' is number of steps of MD simulation at each vdW scaling stage. 
*If the system is difficult to relax, using longer steps and smaller time-step.*
- 'Save Intervals' set how frequent the structure is updated on the main screen. If turn off, the showing is disabled. 

- **Energy Calculation** opens an Energy dialog used to set up single-point energy calculations. 'Nonbond Energy' button opens a Nonbond Control dialog to set up options for nonbond calculations. Computation options include Gradient and Hessian. After the job finishes, the input, output file and result structure will be loaded into a new folder of the Project Navigator. The Nonbond Control dialog also allows the user to select a cutoff method. Three options can be selected: Atom Cutoff, Group Cutoff and No Cutoff. A Cutoff value and a Buffer value can then be set. The Buffer value is used to calculate the neighbor list efficiently. Both are specified in Angstroms. If using Group Cutoff, charge groups must be defined using Build → Group by Charge. If No Cutoff is selected, all nonbond interaction pairs are calculated. For systems with periodic boundary conditions, Tail Corrections can be added to compensate for energy and pressure loses due to cutoff.

- **Optimization** performs structure optimizations by minimizing energy. It opens an Optimization dialog that allows the user to set a Job Name, Number of Steps, and a Convergence criterion. Two optimization algorithms can be selected: Conjugate gradient and Variable metric. Options for nonbond energy calculations are accessible by clicking Nonbond Energy, as explained above. To add torsion restraints during optimization, click the checkbox to open a new Add Restraints dialog to set up the restraints. In the Add Restraints dialog, the top section displays input restraints. To add a restraint, click and highlight the first cell labeled a1. This allows you to select atoms from the display window by Left-Clicking. Click and select four atoms to fill the four atom cells (a1, a2, a3, a4). Enter a restraining force constant (100 is the default), a starting angle x1, increments dx, and a total number of points n. Clicking Add will add one restraint.  To add another, repeat the above procedure. Click OK to quit this dialog. To see your changes to the structure and energy of the molecule, select the Screen view option.  Clicking "Execute" launches the background optimization job. When the job finishes, the input, output file and resulting structure will be loaded into a new folder in the Project Navigator

- **Molecular Dynamics** performs molecular dynamics simulation. It opens a Molecular Dynamics dialog. In this dialog, a Job name must first be specified before a simulation ensemble can be chosen - "NVT", "NPT" or "NVE".  To use a temperature control method, click Temperature (K) and select either the "Stochastic (Anderson)" or the "Scale Velocity" method. To use a pressure control method, click Pressure (MPa). The Berensdsen method is implemented. Nonbond Energy can be used to set  up nonbond calculations as explained above. In the Run time section, Timestep (fs), Equilibrium Steps and Evaluation Steps are user-set parameters that control how the simulation is to be performed. The Intervals section is used to for control how frequently (in number of steps) the Trajectory will be saved and how frequently the Screen View, if selected, will be updated if Screen View is selected. Execute launches the background job. When the job finished, the input, output file and resultant structure will be loaded into a new folder in the Project Navigator.

# EXTERNAL SIMULATIONS

- **GROMACS** opens a [dialog](Simulation-GROMACS.md) that sets the simulation options and starts the background job.

- **LAMMPS** opens a [dialog](Simulation-LAMMPS.md) that sets the simulation options and starts the background job.
 
- **Trajectory View** displays the simulation trajectory on DFF screen. Paired topology (.msd) and trajectory (.dta) files must be selected before  clicking this command. A dialog will then show the selected files with options to either Save the last frame or Show the trajectory.
 
- **Export** allows the user to prepare input files for simulation engines. Exported files are saved in a folder with the default name of the force field type used. Resultant force field parameters and model structural data are written into output files with the following extension names:

|Program  | Files            |
|-------- |  ----------------|
|GROMACS  | mdp = input, gro = coordinate, top = topology, itp = parameters|
|LAMPPS	  | in = input, data = coordinates, topology and parameters| 
|AMBER	  | dat = parameters, prep = coordinates and topology|
|CHARMM	  | par = parameters, rtf = coordinates and topology|
|DREIDING | drg	= parameters |
