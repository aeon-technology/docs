# Tutorial of DFF Online Use
This tutorial covers the online use of DFF standard edition.  

## Prepare a model
To use DFF standard online, you need to prepare an molecular model file, which can be one of the following two formats.
 - MOL2
 - PDB

Preferably, the molecular model file is completely, which means hydrogen atoms are included, formal charges are set if necessary, and the structure is reasonably relaxed.

DFF will automatically complete required data. If the input model is not well prepared, it is recommended to examine the output structure file to make sure that meets your need.


## Upload and Run

1) In the **"Upload"** cell, browse your computer files and select the  molecular model file to upload.

2) Select one of the designated simulation software packages.
    - GROMACS
    - LAMMPS
This selection will determine available force fields in TEAMFF, and the format of output (input files for the simulation package).

3) Select **Force Field** in the pulldown cell. In most case, the general force field is sufficient. You may select other or multiple force fields. If multiple force fields are selected, adjust the order of usage is critical. For more details, refer to the document about [TEAMFF](../topics/teamff-database.md).  *The system will start from the top of the selection list, only when required parameters are incomplete the next will be called.* 

4) Optionally, set the **Temperature** of target application. A small correction will be made to the LJ-12-6 parameters so that the predicted thermodynamic properties are more accurate at elevated temperatures. *Note that at different temperature, the assigned parameters are different, which cannot be used on different temperatures.* 

5) Click **"Run"** button to start the background jobs. If the model file is large (>10K atoms) the system will take a few seconds to finish the  computation. The results will be shown on the screen. 

6) If everything looks good, the **"Download"** button is activated. Click the button to download result files which are the input files for the simulation packaged selected. *The computation results will be saved under your account for a period of time (~30 days) for late retrieving.* 
<br/>
If anything goes wrong, an error message will be prompted. Try to correct the errors according to the error message. If need an help, click **"Support** button to send messages.

