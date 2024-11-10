# DFF User Guide 

Rev. 2024.10.28

This document contains eight sections.

[1. Introduction](./Introduction/introduction.md)

II. How To ...
 
III. Tutorials
- [Overview](./Tutorials/Overview.md)  
- [Project and Models](./Tutorials/Project/project.md)
- [Build Liquid Models](./Tutorials/Liquid/liquid.md)	
- [Use TEAMFF on Macromolecules](./Tutorials/Macromol/useTEAMFF.md)
- [Mix TEAMFF Force Fields](./Tutorials/Mixff/mixFF.md)	
- [Fit Simple Molecule](./Tutorials/FitRigid/fitKeton.md)
- [Fit Flexible Molecule](./Tutorials/FitFlexMol/fitAmnol.md)	
- [Fit Molecular Dimer](./Tutorials/FitDimer/ditDimer.md)	
- [Fit Liquid Date](./Tutorials/FitLiquid/fitLiquid.md)	
- [Make a Force Field](./Tutorials/MakeFF/makeFF.md)	
- [Extend TEAMFF](./Tutorials/ExtTEAM/extTEAMFF.md)	
- [Use MFDFF](./Tutorials/UseMFDFF/useMFDFF.md)	

IV. Concepts, Methods and Algorithms
  - [Project and File System](./Topics/ProjectFiles/project-files.md) 
  - [Force Field](./Topics/ForceField/forcefield.md)
    - [Force Field Types](./Topics/ForceField/forcefield-types.md)
    - [Atom Types](./Topics/ForceField/atom-types.md)
    - [Parameters](./Topics/ForceField/parameters.md) 
  - [Molecular Topology and Atomic Attributes](./Topics/Attributes/molecular-atomic-attributes.md) 
  - [Definition of Atom Types](./Topics/AtomTypedefinitions.md)
    - [Typing Rules](./Topics/AtomType/typingRules.md)
    - [Extending Definitions](./Topics/AtomType/extendDefinitions.md)
    - [Hyper-valence Atom Types](./Topics/AtomType/hypervalence.md)
    - [Equivalent and Integrated Atom Types](./Topics/AtomType/equivIntegAtomTypes.md)
  - [Training Set](./Topics/TrainingSet/introduction.md)
    - [Fragments](./Topics/TrainingSet/fragments.md)
    - [Training Set data](./Topics/TrainingSet/trainingData.md)
    - [Quantum Mechanics Data ](./Topics/TrainingSet/qmd.md)
  - [Parametrization](./Topics/Parameters/introduction.md)
    - [General Procedure](./Topics/parameters/general.md)
    - [Automatic Parameters](./Topics/parameters/autoPar.md)
    - [Fitting Methods](./Topics/parameters/fitMethods.md)
    - [Fit Charge and Valence Parameters](./Topics/parameters/fitChargeValencePar.md)
    - [Fit Lennard-Jones Parameters](./Topics/parameters/fitLennardJonesPar.md)
  - [TEAMFF Database](./Topics/TEAMFF/database.md)
    - [Force Fields of TEAMFF](./Topics/TEAMFF/forcefields.md)
    - [Combination of Force Fields of TEAMFF](./Topics/TEAMFF/combination.md)
    - [Extensibility of TEAMFF](./Topics/TEAMFF/extensibility.md)
  - [MFDFF](./Topics/MFDFF/mfdff.md)
    - [Overview](./Topics/MFDFF/motivation.md)
    - [How it works](./Topics/MFDFF/procedure.md)
    - [Implementation](./Topics/MFDFF/issues.md)
  - [Simulations](./Topics/molecular-simulations.md)
  
V. References of DFFWin Commands
  - [Project Navigator](./WinCommands/Project/ProjectNav.md)
  - [Toolbar and Mouse](./WinCommands/Toolbar/Toolbar.md)
  - [File Menu](./WinCommands/File/File.md)
  - [Edit Menu](./WinCommands/Edit/Edit.md)
  - [Build Menu](./WinCommands/Build/Build.md)
  - [View Menu](./WinCommands/View/View.md)
  - [TEAMFF Menu](./WinCommands/TEAMFF/TEAMFF.md)
  - [Simulation Menu](./WinCommands/Simulation/Simulation.md)
  - [ForceField Menu](./WinCommands/ForceField/Forcefield.md)
  - [Parameter Menu](./WinCommands/Parameter/Parameter.md)
  - [QMD Menu](./WinCommands/QMD/QMD.md)
  - [MFDFF Menu](./WinCommands/MFDFF/MFDFF.md)
  - [Help Menu](./WinCommands/Help/Help.md)

VI. References of Executable Commands
  - [Overview](./ExeCommands/Overview.md)
  - [Model Commands](./ExeCommands/Model.md)
  - [ForceField Commands](./ExeCommands/ForceField.md)
  - [Export Commands](./ExeCommands/Export.md)
  - [TEAMFF Database Commands](./ExeCommands/TEAMFF.md)
  - [Fit Commands](./ExeCommands/Fit.md)
  - [Molecular Mechanics Commands](./ExeCommands/MM.md)
  - [Quantum Mechanics Commands](./ExeCommands/QM.md)
  - [MFDFF commands](./ExeCommands/MFDFF.md)

VII. WebDFF
  - [Registration](./WebDFF/registration.md)
  - [Tutorial](./WebDFF/tutorial.md)
  - [Support](./WebDFF/support.md)

VIII. Appendix
  - [Force Field Functions](./Appendix/functions.md)
    - [Bonded Functions](./Appendix/functions.md#bonded-functions)
    - [Nonbonded Functions](./Appendix/functions.md#nonbonded-functions)
    - [Special Functions](./Appendix/functions.md#other-function)
    - [Function and Parameters](./Appendix/functions.md#functions-and-parameters)
  - [File Formats](./appendix/file-formats.md)
    - [MSD File](./appendix/file-formats.md#1-molecular-structure-data-msd-file)
    - [PPF File](./appendix/file-formats.md#2-potential-parameter-file-ppf)
    - [QMD File](./appendix/file-formats.md#3-quantum-mechanics-data-qmd-file)
    - [Typing File](./appendix/file-formats.md#4-atom-type-definition-def-ext-file)