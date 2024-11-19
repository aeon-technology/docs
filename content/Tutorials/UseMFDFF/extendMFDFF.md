# Extend MFDFF using Workflow

*The workflow is written in python3, make sure python3 has been installed and configured before proceed.*

The MFDFF workflow is designed to build molecule type force fields automatically. In this lessen we use a few models to see how this work, which are included in subfolder "tutorialC4_workflow". We will use "demo.db" database which is also included in the folder. Since we will change the content of database, make a backup copy if you want ot repeat the lessen.

There are four models in this folder: two short-chain  polymers, one polymer in amorphous cell and one liquid model of water and phenol. To run the workflow quickly, QMD data of all except water are included in demo database.  

1. Open the subfolder "tutorialC4_workflow" of Tutorials project. Open and view the included models.
Select all *.msd nodes, and click **MFDFF/Workflow** to open a dialog:

![alt text](image-4.png)

2. The dialog is explained in [MFDFF Menu](../../WinCommands/MFDFF/MFDFF.md). Keep the default values as shown in the figure but may need to make adjustments according to your computer, such as the path to "Gaussian Program", and the "No. Process".

3. Click **OK** to run the computation in DFF environment. This should be done in one or two minutes. 

*For more demanding jobs, for example, add new molecules to the list, consider to select of "Make input only", whihc will save a shell script input file "Workflow.dfi", then run the workflow from command line, such as 
```
python3 E:\DFFX\trunk\python\WorkFlow.py WorkFlowTEAM.dfi
```

then use 


