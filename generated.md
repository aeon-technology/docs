|

#

**## Direct Force Field** (Version 7.12)

# **User Guide**

Rev. 2022.03.20

Copyright 2000-2022 © Aeon Technology, Inc. Usage of the _Direct Force Field_ software including this documentation is restricted to purposes in accordance with the Direct Force Field license agreement. _Direct Force Field_ is a trademark of Aeon Technology, Inc._GROMACS_ is software licensed under the GNU General Public License. The main distribution site is at [www.gromacs.org](http://www.gromacs.org/).
_LAMMPS_ is distributed as an open source code under the terms of the GPL. _LAMMPS_ is distributed by Sandia National Laboratories, a US Department of Energy laboratory, at [http://lammps.sandia.gov](http://lammps.sandia.gov/).

|  |
|  |

# Contents

[CHAPTER 1 - INTRODUCTION 8](#_Toc93223315)

[1-1. Overview 8](#_Toc93223316)

[1-2. Feature List 9](#_Toc93223317)

[1-3. Typical Use Cases 11](#_Toc93223318)

[Using force fields 11](#_Toc93223319)

[Making force fields 12](#_Toc93223320)

[1-4. Getting Start 13](#_Toc93223321)

[System Requirements 13](#_Toc93223322)

[Installation 13](#_Toc93223323)

[Uninstalling 14](#_Toc93223324)

[Starting 14](#_Toc93223325)

[Licensing 14](#_Toc93223326)

[Install External Software 17](#_Toc93223327)

[CHAPTER 2 – TUTORIALS 18](#_Toc93223328)

[2-1. Section A - Essential Functionality 18](#_Toc93223329)

[Tutorial A1 - Building a Model of Molecule 18](#_Toc93223330)

[Tutorial A2 - Working With a Liquid Model 24](#_Toc93223331)

[Tutorial A3 - Working with Polymers 28](#_Toc93223332)

[Tutorial A4 - Working with Proteins 32](#_Toc93223333)

[Tutorial A5 - Mixing Two Force Fields 34](#_Toc93223334)

[2-2. Section B - Parameterization 37](#_Toc93223335)

[Tutorial B1 - Fitting Parameters for a Small Molecule 37](#_Toc93223336)

[Tutorial B2 - Fitting Parameters Of A FLexible Molecule 41](#_Toc93223337)

[Tutorial B3 - Fitting a Molecular Dimer 45](#_Toc93223338)

[Tutorial B4 - Fitting Liquid Data 48](#_Toc93223339)

[2-3. Section C - Developing Force Fileds 51](#_Toc93223340)

[Tutorial C1 - Make A Training Set 51](#_Toc93223341)

[Tutorial C2 - Make a New Force Field 52](#_Toc93223342)

[Tutorial C3 - Import A Force Field 54](#_Toc93223343)

[Tutorial C4 - Hypervalence Molecules 60](#_Toc93223344)

[CHAPTER 3 – CONCEPTS, METHODS AND ALGORITHMS 61](#_Toc93223345)

[3-1. Project and Files 61](#_Toc93223346)

[Project 61](#_Toc93223347)

[Project Navigator 62](#_Toc93223348)

[File Types 62](#_Toc93223349)

[3-2. Force Fields 63](#_Toc93223350)

[Force field functional 63](#_Toc93223351)

[Typing Rule 64](#_Toc93223352)

[Parameters 65](#_Toc93223353)

[3-3. Molecular Topologies and Formal Charges 65](#_Toc93223354)

[Topologies 65](#_Toc93223355)

[Formal Charges 66](#_Toc93223356)

[Aromaticity 66](#_Toc93223357)

[3-4. Atom Type Definitions 66](#_Toc93223358)

[Hierarchical Atom Type (HAT) Scheme 67](#_Toc93223359)

[Default Definition 67](#_Toc93223360)

[Extended Default Definition 68](#_Toc93223361)

[Complet Scripting Definition 69](#_Toc93223362)

[Atom types of hypervalence molecules 69](#_Toc93223363)

[Apparent and Equivalent Atom Types 70](#_Toc93223364)

[3-5. TEAMFF Database 71](#_Toc93223365)

[Direct Force Field Database 71](#_Toc93223366)

[Customized Force Field Tables 74](#_Toc93223367)

[3-6. Force Field Extensibility 75](#_Toc93223368)

[Internal Extensibility of Atom Types 75](#_Toc93223369)

[External Extensibility using DFFDB 76](#_Toc93223370)

[3-7. Overview of Parameterization 77](#_Toc93223371)

[Force field functional and Atom Tying Rules 77](#_Toc93223372)

[Training Set and Data 77](#_Toc93223373)

[Parameterization Methods 78](#_Toc93223374)

[Systematic Procedure 79](#_Toc93223375)

[3-8. Automatic Parameters 79](#_Toc93223376)

[3-9. Quantum Mechanics Data 81](#_Toc93223377)

[Sampling Conformational Energy Space 82](#_Toc93223378)

[Sampling Intermolecualr Energy Curve 83](#_Toc93223379)

[QMD File 83](#_Toc93223380)

[3-10. Fit QM Data 84](#_Toc93223381)

[Methods 84](#_Toc93223382)

[Charge Parameters 86](#_Toc93223383)

[Valence Parameters 86](#_Toc93223384)

[Molecular Dimers 87](#_Toc93223385)

[Specific Properties 87](#_Toc93223386)

[3-11. Fit Properties of Liquid 88](#_Toc93223387)

[Perturbation Theory 89](#_Toc93223388)

[Temperature Dependent Parameters 91](#_Toc93223389)

[3-12. Simulations 92](#_Toc93223390)

[Assigning a Force Field 92](#_Toc93223391)

[Internal Simulation Engines 93](#_Toc93223392)

[External Simulation Engines 95](#_Toc93223393)

[CHAPTER 4 – REFERENCE OF COMMANDS 97](#_Toc93223394)

[4-1. File Menu - Manage Project and Files 97](#_Toc93223395)

[Commands for Projects 97](#_Toc93223396)

[Commands for Files 97](#_Toc93223397)

[Toolbar Commands 98](#_Toc93223398)

[Mouse Commands on Project Navigator 98](#_Toc93223399)

[4-2. Edit Menu – Sketching, Editing and Modifying Models 100](#_Toc93223400)

[Menu Commands 100](#_Toc93223401)

[Toolbar Sketching Commands 101](#_Toc93223402)

[Additional Shor-cut Keys on Atoms 103](#_Toc93223403)

[4-3. Build Menu - Building More Complicated Models 104](#_Toc93223404)

[Group and Subset 104](#_Toc93223405)

[Bulk Models 104](#_Toc93223406)

[Interphase Models 105](#_Toc93223407)

[Super Cells 106](#_Toc93223408)

[Fragments and Sampling 106](#_Toc93223409)

[4-4. View menu - Managing How Models Are Displayed 108](#_Toc93223410)

[View Commands 108](#_Toc93223411)

[Toolbar Commands 109](#_Toc93223412)

[4-5. DFFDB menu – the Direct Force Field Database 110](#_Toc93223413)

[Managing the Database 110](#_Toc93223414)

[Use the Database 111](#_Toc93223415)

[Expand the Database 112](#_Toc93223416)

[Make a New Database 113](#_Toc93223417)

[4-6. Simulation Menu - Internal and External Simulation Methods 113](#_Toc93223418)

[Internal Simulations 113](#_Toc93223419)

[External Simulations 114](#_Toc93223420)

[4-7. QMD Menu - Compute and Organize Quantum Mechanics Data 116](#_Toc93223421)

[QM Calculations 116](#_Toc93223422)

[Quantum Mechanics Data (QMD) 117](#_Toc93223423)

[Workflows Making QMD 118](#_Toc93223424)

[4-8. Force Fields menu - Managing Force Field 118](#_Toc93223425)

[Managing Force Field 118](#_Toc93223426)

[Force Field Editor 119](#_Toc93223427)

[Using a Force Field 120](#_Toc93223428)

[Advanced Topics on Force Field 120](#_Toc93223429)

[4-9. Parameters Menu - Fit and validate force field parameters 122](#_Toc93223430)

[Fit QM Data 122](#_Toc93223431)

[Fit Liquid Properties 124](#_Toc93223432)

[Fit Molecular Properties 125](#_Toc93223433)

[Additional Tools 126](#_Toc93223434)

[4-10. Help Menu – Information, License, and Document 127](#_Toc93223435)

[CHAPTER 5 – EXECUTABLE COMMANDS 128](#_Toc93223436)

[5-1. DFFEXP.exe 128](#_Toc93223437)

[5-2. DFFFIT.exe 129](#_Toc93223438)

[5-3. DFFdb.exe 134](#_Toc93223439)

[CHAPTER 6 – FUNCTIONAL FORMS AND FILE FORMATS 139](#_Toc93223440)

[6.1 Force field functionals 139](#_Toc93223441)

[TEAM 140](#_Toc93223442)

[CHARMM 143](#_Toc93223443)

[AMBER 144](#_Toc93223444)

[CFF 144](#_Toc93223445)

[DREIDING 145](#_Toc93223446)

[GROMACS 146](#_Toc93223447)

[6.2 Functions 148](#_Toc93223448)

[A) Valence Functions 148](#_Toc93223449)

[B) The Nonbond Functions 152](#_Toc93223450)

[C) The Cross Coupling Terms 154](#_Toc93223451)

[6.3 Functions and Parameters 154](#_Toc93223452)

[6.4 Potential Parameter File (PPF) Format 160](#_Toc93223453)

[6.5 Molecular Structural Data (MSD) File Format 161](#_Toc93223454)

[6.6 Atom Type DEFinition (DEF, EXT) File Format 163](#_Toc93223455)

[6.7 Quantum Mechanics Data (QMD) File Format 165](#_Toc93223456)

[REFERENCES 169](#_Toc93223457)

# CHAPTER 1 - INTRODUCTION

## 1-1. Overview

Direct Force Field (DFF) is a software designed for development and deployment of force fields. DFF is offered in two versions, _Standard_ and _Professional_. The _Standard_ version is designed for deployment of force fields, and the _Professional_ version has additional functions for the development of force fields.

Computer database technology is used to manage force fields in DFF environment. Direct Force Field Database (DFFDB) is a software that support multiple database tables, each is an independent force field that has force field functional, typing rule and parameters. Since each force field can be developed independently and multiple force fields in the same force field functional can be used together, DFFDB enables extensibility without compromise of accuracy.

Using DFFDB, a force field database titled as TEAMFF is developed and included in DFF package. TEAMFF contains multiple force fields in common force field functionals including AMBER, CHARMM, CFF, DREDING, and TEAM. Among these force field functionals TEAM and AMBER are continually updated. These force fields provide a broad coverage of common organic molecules, polymers, drug-like molecules, zeolites, ionic liquids, and metal oxides. TEAMFF can be used with molecular dynamics packages, _GROMACS_ and _LAMMPS,_ directly from DFF.

The central feature of DFF is to develop new parameters or new force fields. A set of parameterization tools, which are designed for the tasks of making the training set, generating quantum mechanics data (QMD), deriving force field parameters by fitting QMD and physical data of liquids data, and validating the derived force field parameters, has been implemented.

DFFis delivered with a window-based graphical user interface, enabling easy access of the functionality provided. It runs on various _Windows_ and _Linux_ operating systems. Most functions can be executed from command line without the interface, enable integration of the software with other simulation environments.

## 1-2. Feature List

**(**_ **\* indicates functions of the Professional version** _**)**

Model Builder

- Sketch, edit and modify molecular structures
- Supports all elements on the periodic table
- Automatically edit molecular topologies
- Group atoms by charges or by connectivity
- Pack and unpack periodic simulation boxes
- Edit simulation cell parameters
- Build liquid and interface models
- Reads popular molecular structure data files - MOL, MOL2, PDB, CAR
- Supports solid and surface structures
- Build super cells from 3-D or 2-D structures

Visualization

- Project Navigator allows easy access
- Portable, self-contained project files facilitates sharing of results with colleagues
- Mouse and short-cut key operations for convenience.
- Display atomic and molecular properties
- Measure molecular properties
- Customize Look-and-Feel, including adjustable font sizes.

Direct Force Field Database (A)

- Integration of different independent force fields in one database
- Supports common force field functionals - TEAM, AMBER, CHARMM, CFF, DREIDING, provide parameters in each force field functional as the base for continue development
- Provides high quality parameters with great coverage in common organic molecules, synthetic polymers, solid state materials, transition metal complexes and drug-like compounds in TEAM and AMBER force field functionals
- Graphic interface for managing and using database, automatically assign atom types using multiple force fields, with options to handle missing parameters.

Force Field Database (B)\*

- Full functionality for managing the database contents
- Create customized force fields to be used with the provided force fields
- Check out original atom types and parameters for examination and extended development
- Check in new parameters, automatically set version numbers
- Functionality for importing common force fields in to database
- Advanced handling of missing parameters, automatically build molecular fragments for parameterization

Simulation

- Energy calculation, normal mode analysis, structure optimization and molecular dynamics simulation for validation of force fields
- Export force field files to external simulation engines: _GROMACS, LAMMPS, AMBER_, _CHARMM_, _DISCOVER_ and _MOE_
- Integrated simulation environments with _GROMACS_ and LAMMPS

Force Field Development\*

1. Preset force field functionals TEAM, AMBER, CHARMM, CFF, DREIDING
2. Customized force field functional using common functional forms
3. Spreadsheet force field editor
4. Support preset and customized atom-typing rules
5. Automated (default) typing rules for most general purposes
6. Interactive editor of making customized atom-typing rules
7. Automatic valence and nonbond parameters derived using atomic properties
8. Automatic charge parameters using the charge equilibrium (QEQ) method
9. Automatic generation of fragment molecules suitable for parameterization from target molecules.
10. Automatic generation of conformers or cluster configurations for sampling potential energy surfaces
11. Integration with Gaussian® for generating quantum mechanics (QM) data for parameterization.
12. Making equivalent table to adjust the number of adjustable parameters
13. Fit valence and charge parameters against QM data
14. Fit nonbond parameters against simulation data of molecular liquids
15. Fit bonbon parameters against QM data of molecular cluster
16. Artificial intelligence implemented in parameterization workflow.
17. Customized options to tune fitting quality

User-Friendly Features

- Toolbars for quick and easy access to common commands
- Project Navigator for convenient organization
- Integrated project and disk file management
- Online documentation and tutorials
- Supports _Windows_ and _Linux_ platforms
- Local and floating licensing
- &quot;Instant Help&quot; for guidance of software usage.
- User guide document, tutorials and test cases for quick start.

## 1-3. Typical Use Cases

### Using force fields

TEAMFF is a collection of developed force fields covering organic molecules, polymers, solid materials, transition metal complexes and drug-like molecules. Among the force fields, two families of force fields in _TEAM_ and _AMBER_ force field functionals are continually updated based on user feedbacks and advances in simulation technology.

TEAMFF can be used in a way like traditional force fields. However, the most important advantage of TEAMFF is that multiple force fields in the same force field functional can be mixed, which greatly enhances the coverage while maintaining high accuracy of the force field. A general procedure of using TEAMFF force fields is as follows:

1. Build or import a molecular model. It is straightforward to create simple models such as an isolated molecule or a box representing a molecular liquid using functions provided by DFF. More complicated systems can be imported in several popular file formats. When the molecular models are imported or created, DFF automatically checks or rebuilds molecular topologies to prepare for atom type and parameter assignments.
2. Select a force field functional to be used. A force field functional is a collection of functional forms. DFF supports several force field functionals such as _TEAM, AMBER, CHARMM, CFF, DREIDING_, etc. The selection of force field functional is mainly determined by applications and simulation engines. TEAMFF force fields have been mostly developed for _TEAM_ and _AMBER_ force field functionals.
3. Select one or more force fields to be used in the selected force field functional. If multiple force fields are used, they are either used in the order specified or assigned to different subsets. For a model that contains multiple molecules, the parameters for different molecules may be taken from different force fields and the interactions between different molecules are described by the nonbond parameters only. Using subsets to assign force fields is more flexible and precise, but requires a pre-definition of the subsets. By default, the force fields are used in the order selected, a force field must contain all parameters for a molecule; otherwise, the molecule is passed to next force field. A typical guidance is to set the order by generality, where the most specific and accurate force field is called first, and the most generic one is called last.
4. If all required parameters are found, the model is assigned atom types and charges and saved as a molecular structural data (.msd) file. In addition, a force field file (.ppf) that contains all required parameters with correct atom types is generated. These two files must be used together. There is an option to combine these two files into one (.spf).
5. If some parameters are missing, the option is to transfer parameters or make automatic parameters together with the parameters obtained from the database. A more rigorous solution is to develop new parameters (see below).

### Making force fields

New force fields can be made from scratch or based on the existing parameters. Either way, the new force field can be used alone with existing force fields in the same force field functional. A general procedure of making a new force field is as follows:

1. Select a force field functional and a typing rule. Because each force field is independent, the typing rule can be defined independently. The selection of typing rule depends on the complexity of the parameterization scope. A general guidance is to keep the typing rules as simple as possible. Very flexible typing rules can be made by writing scripts. The recommended set of typing rules is the programmed \_Default_typing rules.
2. Once the force field functional and the typing rule are set, a new force field table can be created. The new table can be added to TEAMFF database, or a newly created database. In most cases, adding a new table to TEAMFF is the choice, because the new force field can be used together with other force fields in the database.
3. Select molecule(s) to be parameterized. Initialize a new force field (._ppf_) file using the same typing rule as that used in creating the force field, otherwise the new force field cannot be checked in. Using the empty force field, you can use the fragmentation tool to make fragment molecules which are suitable for parametrization.
4. Run Gaussian calculations for the training set to prepare quantum mechanics data (QMD) files. For each molecule, not only the global minimum energy but also the potential energy surface in conformation space should be sampled. DFF provides several tools to help this task. Each molecule is saved in one _QMD_ file.
5. Unless you have too many molecules in the training set, you should fit all _QMD_ files together to count for correlations. If you have molecules more than the capacity of DFF can take, divide the training set to several subsets and make sure the order of parameterization staring from the common functional groups so that the parameters obtained can be transferred to more complex subsets.
6. Fit the _QMD_ files to obtain atomic partial charges and valence parameters in the ppf file. At this stage, Lennard-Jones (L-J) parameters suggested by DFF should be fixed. Validate the fit results and make sure the fit is successful. The default L-J parameters are taken from previous work, which are reasonable but may not be optimal for your system. If you have experimental data of liquid density and heat of vaporization, you may optimize the nonbond parameters which include L-J and charge parameters. As the charge parameters are derived from _QMD_ of isolated molecules, which may not be suitable for (high polarizable) molecules in condense phases. If any nonbond parameters are changed, the fit of valence parameters need to repeat because of the coupling between nonbond and torsional parameters.
7. When the parameterization is completed, check in the _ppf_ file to the force field table you have created. This force field now can be used either alone or together with other force fields in the same force field functional.

If you only need to optimize a few parameters in an existing force file, the option is to check out relevant parameters to a _ppf_ file from TEAMFF, work on the _ppf_ file until all parameters are satisfactory, and then make a new table to check in the _ppf_ file.

## 1-4. Getting Start

### System Requirements

_Linux_ or _Windows_ operating systems with at least 1 GB of free disk space and 2 GB of _memory_ are required.

1. _Windows_ – versions after XP are supported.
2. _Linux_ - kernel version 2.6.9 and above are supported.

### Installation

DFF requires _Java Runtime Environment (JRE)_. The DFF installation package for _Windows_ includes _JRE_, which will not replace any _JRE_ installed on your computer. On _Linux_ platform, ensure that _JRE_ has been installed. This can be verified by using _&quot;java -version&quot;_ in command line. For example:

_$ java -version_

_openjdk version &quot;1.8.0_201&quot;_

_OpenJDK Runtime Environment (build 1.8.0_201-b09)_

_OpenJDK 64-Bit Server VM (build 25.201-b09, mixed mode)_

On Windows, run the installer executable such as &quot;dff7205-WinJre.exe&quot; to start the installation process and follow the instructions of the installer. You must have a written permission to the installation directory, which is referred as _ **\&lt;dff root\&gt;** _ in this document.

On _Linux_, unzip the release package:

_$tar zxvf dff7.tar.gz_

A subdirectory named &quot;_DFF7&quot;_ should be placed in current directory. It contains several subdirectories such as:
_ bin64x, data, database, forcefields, images, jar_
and a shell script:
_ \_\_dff7.sh_
_Linux_ may not support all languages. Restricting the language to English for any non-English versions of _Linux_ is recommended. From the command shell running DFF, execute the following command to set the language to English only.
_If you are using B shell:_
_$export LC_ALL =_
If you are using C shell:
_$setenv LC_

### Uninstalling

To uninstall DFFfrom Windows systems*,* run _Unistall.exe_ which is located in the _ **\&lt;dff root\&gt;** _ directory. On Linux platform, delete the DFF installation directory.

### Starting

To start the software, double click on the DFF icon on Windows. On _Linux_, DFF can be started by running the shell script _dff7.sh_:

        _$sh dff7.sh_

The DFF user interface is divided into three areas. At the top are the _Command Menu_ and _Tool Bar_, at the left is the _Project Navigator_ which lists files and sub folders in current project, and in the center of the window are _Main Panels_ for displaying molecular models

![Shape3](RackMultipart20220717-1-mu78nc_html_bd4044a1668c3d74.gif) ![Shape4](RackMultipart20220717-1-mu78nc_html_83f4ee08a3963fb7.gif) ![Shape5](RackMultipart20220717-1-mu78nc_html_8098a8d9c39add27.gif) ![Shape2](RackMultipart20220717-1-mu78nc_html_25411c75f1653aa8.gif) ![Shape1](RackMultipart20220717-1-mu78nc_html_75b37b8e290ed6cb.gif)

**Main Panels**

**Project Navigator**

**Command Menu &amp; Toolbar**

. ![](RackMultipart20220717-1-mu78nc_html_5a57e1e16c9fb2b6.png)

### Licensing

Two types of license modes, local or floating, can be used with DFF. In both cases the license is node-locked to a specific computer. The local mode allows usage of DFF on the same computer that is licensed. The floating mode allows usage of DFF on any computer (client) that can access a licensed computer (server). The license period (either termed or perpetual), as well as the number of concurrent usages of DFF, are specified by a license file.

The license related files, _License.txt_ and _License.ini,_ are saved in _\&lt;dff root\&gt;/License_ folder. _License.txt_ is the license file which specifies the license products, number of license and license terms. _License.ini_ is a configuration file specifying the IP address and port number of a license server. To use the local license mode or on a license server, a valid _License.txt_ is required, _License.ini_ is ignored. To use a floating license, only _License.ini_ is required.

#### Installation and Configuration

Install and start DFF. If the license is not installed, an error message will appear, close the error message, the &quot;License Manager&quot; dialog will appear:

![](/E:/DFF7/Release7.1/UserGuide7/Introduction/4_Gett2.jpg)

This dialog can also be opened by using **Help→License** command from DFF user interface. There are four command buttons on this dialog.

**Request** is used to generate a license request file. Click this button and follow the instructions to generate a license request form; send this form to your DFF distributer to obtain a license file.

**Install** is used to install the license file. Click this button to allocate the license file and install it. The license file is copied to /\&lt;dff root\&gt;/License/License.txt. The license file must be issued for the same computer.

**Configure** is used to set up a floating license. The default values are &quot;_ **localhost** _&quot; and &quot;_ **null** _&quot; as space holders. To use a floating license set the IP address and port number of the licensed server. For example:

![](/E:/DFF7/Release7.1/UserGuide7/Introduction/4_Gett1.jpg)

Which assumes a DFF license server has been set up running on a computer identified by the IP address and accessible through the port numbered as 3583.

#### License Server

License server is an executable code named as _ **dfflsv.exe** _. It is not necessary to install entire DFF package, but only the server code, _ **dfflsv.exe** _ and the license file, License.txt. The file structure should look like this (e.g. on linux):

_/\&lt;dff root\&gt;/bin64x/dfflsv.exe_

_/\&lt;dff root\&gt;/License/License.txt_

To see how to use this command, type

_$./dfflsv.exe help_

To start the license server:

_$./dfflsv.exe start_

which sets the license server using default port number 3583 in background. To use a different port, such as 3580:

_$./dfflsv.exe start 3580_

The status of license server can be checked by:

_$./dfflsv.exe status_

To stop the license server:

_$./dfflsv.exe quit_

To restart the server:

_$./dfflsv.exe reset_

This command can be also used to generate a license request from command line

_$./dfflsv.exe request_

To put the server in background on Linux you can simply put &quot;&amp;&quot; in the end of above commands. You can also set dfflsv.exe to run as a server that automatically starts on Linux or Windows. On Windows, this can be done by using Windows Task Schedule, which is also the way to have dfflsv.exe running on background.

### Install External Software

The user interface of DFF directly integrates with the quantum mechanics software suites _GAUSSIAN_. This software package must be installed and configured on the same computer, and the environment variables must be properly set. Please refer to the documentation of Gaussian packages for more information. Once the software is installed and configured, it can be started directly from DFF interface.

The DFF installation package includes software packages of _GROMACS_[_1_](#_ENREF_1)and _LAMMPS_[_2_](#_ENREF_2), which can be called directly from DFF interface.

# CHAPTER 2 – TUTORIALS

The tutorials are divided into three parts according to common usages: 1) Essential functionality of deployment of TEAMFF force fields; 2) Developing new force fields; 3) Advanced topics for force field developers.

All user files are saved in a project folder, which is associated with a project file, The project file has the same name of the project folder, but with an extension of _&quot;.dpf&quot;_. The project folder and the project file must be placed in the same folder.

For convenience, molecular models used in the tutorials are saved in a project folder named as _Tutorials_ under the _\&lt;\_DFF \_Installation Folder\&gt;_. For example, in Windows the default installation path for the Tutorials folder may be:

_C:\Program Files (x86)\ATI\Direct Force Field 7.2\Tutorials_

It is recommended to copy the tutorials folder and associated project file _ **Tutorials.dpf** _ to a new location so that any changes can be isolated from the original files. In this tutorial, we assume the exercise folder is

\_E:\Tutorials\_

and the project file is

_E:\Tutorials.dpf_

in this document.

_Note: You need write permission to the project file and folder. If you are using a different location, replace &quot;E:\_Tutorials_\&quot; with the path name you have chosen in the rest of this Tutorial* document*.\_

## 2-1. Section A - Essential Functionality

In this section we learn some of the essential functions of DFF. We focus on how to create or import molecular models, in terms of small molecules, liquids, polymers, proteins, and mixtures. We also practice how to use TEAMFF force fields to prepare input files for external software of molecular simulation.

The tutorials illustrate some concerts, algorithms and methods, which are further explained in [Chapter 3 - Concepts, Methods and Algorithms](#_CHAPTER_3_%E2%80%93). More information about available commands is explained in [Chapter 4 - Reference of Commands](#_CHAPTER_4_%E2%80%93).

### Tutorial A1 - Building a Model of Molecule

In this lesson, we will practice some of the basic operations of DFF. The following topics are covered:

1. Creating a project
2. Creating a model
3. Assigning a force field
4. Performing a simple calculation

#### Creating a New Project

We will create a new project called _MyWork_. In DFF, a project consists of a _project file_ and a _project folder_, such as:

       _E:\MyWork
        E:\MyWork.dpf_

denoting a project &quot;_MyWork_&quot; in the _E_ driver.

1. Start DFF and click **File → New Project** command*.\_\_A* dialog named &quot;_Create Project_&quot; will pop up. Select a drive, enter _ **&quot;** _ **MyWork** _ **&quot;** _ as the &quot;_File Name&quot;_, and click the **Create Project** button. A file of &quot;MyWork.dpf&quot; and a folder of &quot;MyWork&quot; will be created in working directory. In the _Project Navigator_, the root node named _&quot;MyWork.dpf&quot;_ and a project node named as &quot;_MyWork_&quot; will appear.

2. Point to the root node in the _Project Navigator and_ right-click the mouse, a pop-up options of &quot;Larger Font&quot; and &quot;Smaller Font&quot;, which can be used to set the size of font in the _Project Navigator_.

3. Hover over the project node and right-click. A pop-up menu with several commands: **New** , **Sort** , **Refresh** and **Open in Explore** appear. Select **New,** a sub-menu appears, select **Folder**. A _&quot;New Folder&quot;_ dialog window will appear. Enter &quot;_ **test** _ &quot; and click **.** A sub-folder will be created in the project folder and listed in the _Project Navigator_. Right-click on subfolder to add a new molecular model and name it as &quot; **Aspirin**&quot;.

_Note: A model is a molecular system which can be one molecule or a set of molecules. Depending on the purpose, we may have multiple models for one of one molecular system, which represent different configurations or conformations._

#### Creating a New Model

In this tutorial, we will make a new aspirin molecule as shown below and then estimate force field parameters for this molecule.

![](/E:/DFF7/Release7.1/UserGuide7/Tutorials/Tutorial_1/T1_Aspirin.jpg)

1. Double-click on the newly created empty model &quot;_Aspirin_&quot; in the _Project Navigator_.

2. Click the **Add Atom** button ( ![](/E:/DFF7/Release7.1/UserGuide7/Tutorials/Tutorial_1/T1_newAtom.gif)) in the toolbar. Select &quot; **C**&quot; in the element pull-down menu ( ![](RackMultipart20220717-1-mu78nc_html_2c6760e1bb792015.png) ) on the toolbar.

3. Left-click on the main screen to add a carbon atom. Move the mouse away from the first atom and click again to make another atom. The single bond between them is automatically added.

4. Repeat until a six-member ring of carbons is formed. To close the ring, click on the starting atom.

_Note: A single click on an existing atom toggles connectivity. A yellow dot indicates connectivity is on. When connectivity is on, any atom added will be bonded to the selected atom. If you make a mistake, use the undo or redo button_ ![](RackMultipart20220717-1-mu78nc_html_56ed4de3e94ae3b5.png) _to alter the operations._

5. Continue drawing until the entire skeleton (carbon atoms and connectivity) is sketched out. At this stage, don&#39;t worry about the hydrogen atoms, elements and bond orders. You should have a structure that looks like this:

![](/E:/DFF7/Release7.1/UserGuide7/Tutorials/Tutorial_1/T1_AspirinAllCarbon.gif)

6. Select &quot;_ **O** _&quot; in the pull-down element menu of the toolbar. Click the replace-atom button ( ![](/E:/DFF7/Release7.1/UserGuide7/Tutorials/Tutorial_1/T1_replaceAtom.gif)). Replace carbon with oxygen as needed by clicking on the atom to be replaced. You should end up with the following structure:

![](/E:/DFF7/Release7.1/UserGuide7/Tutorials/Tutorial_1/T1_AspirinCarbonAndOxygen.gif)

7. Select the **double-bond** button ( ![](/E:/DFF7/Release7.1/UserGuide7/Tutorials/Tutorial_1/T1_doubleBond.gif)). Click on a bond to change the bond order as needed. When you are done with this step, the model should look like this:

![](/E:/DFF7/Release7.1/UserGuide7/Tutorials/Tutorial_1/T1_AspirinNoHydrogens.gif)

8. Click the **add hydrogen** button ( ![](/E:/DFF7/Release7.1/UserGuide7/Tutorials/Tutorial_1/T1_addHydrogens.gif)) to add hydrogen atoms automatically. Hydrogen atoms are added to match the available and existing valence numbers for each atom. Make sure the bond orders are correctly set before clicking the **add hydrogen** button.

![](/E:/DFF7/Release7.1/UserGuide7/Tutorials/Tutorial_1/T1_AspirinNoRefine.gif)

9. Clean the structure by clicking the **refine structure** button ( ![](/E:/DFF7/Release7.1/UserGuide7/Tutorials/Tutorial_1/T1_refine.gif)).

10. The coordinates are adjusted from the points clicked on the screen. For convenience in viewing and operation, recenter the molecule by clicking the **Edit→ Reset COM** command. The molecule will be put in the center of the screen. Select the rotate button in the command bar panel ![](RackMultipart20220717-1-mu78nc_html_c44754f898a7ce98.png), and then hold the right mouse-button and drag to see how the model can be viewed from different angles. Other commands are translation, zoom in/out and recenter (not changing COM).

11. Click on the **Save** button to save the model. DFF uses the &quot;.msd&quot; (Model Structure Data) extension to identify model files.

#### Mouse and Short-cut Key Operations

This would be a good time to practice mouse and keyboard editing functions.

1. Click the selection (arrow) button in the command bar panel ( ![](RackMultipart20220717-1-mu78nc_html_7584b8af07459e40.png) ) to activate the mouse selection function. Once it is activated, click on an atom will pick up the atom. You can also press the left button and drag the mouse to select multiple atoms. You can cut, copy, and paste the selected atoms, to the same model but different location (where the mouse point is) and to a different model.
2. The common short-cut keys are supported, the combination keys Ctrl + C, Ctrl +X and Ctrl + V are used for cutting, copy and paste respectively. In addition, Ctrl + V and Ctrl + Y are used for undo and redo, which are the same as the undo and redo buttons in the toolbar.

#### Save, Close and Open Project

At any time, you can save the project by using **File → Save Project** command, you can also save the project into different name by using **File → Save Project As** command. To close the project, use **File → Close Project** command. DFF will prompt you to save before close. The saved project can be reloaded by using **File → Open Project** command.

_Note: The same model is provided in the Tutorial project. In the following section, we will use the Tutorial project, but the same operations can be applied to the project you have just created._

#### Assign Parameters using TEAMFF

1. Open the _Tutorial_ project using **File → Open Project** command. A list of subfolders is shown in the _Project Navigator_, click on the first one, **&quot;tutorialA1_edit** _ **&quot;** _, which has the _Aspirin.msd_ model listed. Click on this node to have the molecule shown on the main screen.Click the **DFFDB → Admin** command. Browse and select TEAMFF database at _&quot;_ **\&lt;DFF installation\&gt;/database/\*\*** TEAMFF.dffdb **&quot;. This will open a DFFDB Admin dialog. Set _&quot;Force field functional&quot;_ to &quot;** AMBER **&quot;, all force field tables in _AMBER_ type are listed. Select _&quot;_** AMBER-General **&quot; _force field and_ click** OK\*\*.

2. Make sure the model &quot; **Aspirin.msd** _&quot;_ is selected in the _Project Navigator and_ click **TEAM-FF → Assign** command. This will open a dialog listing the selected force field table in _&quot;Input&quot;_. The _&quot;Output&quot;_ is the extracted force field (.ppf) parameter file. Leave other options unchanged, click **OK** to launch the job.

3. When the job is done, a force field table appears. The molecule will have also been assigned atom types (C1, C2, ...) and charges. To display atomic properties such as atomic types, charges, isotope, mass, formal charges, etc., select corresponding item in the pulldown command of atomic properties on the toolbar ![](/E:/DFF7/Release7.1/UserGuide7/Tutorials/T1_Bas1.gif). The _&quot;Apparent Atom Types&quot;_ assigned to the model must be consistent with the atom types listed in the force field ppf file.

_Note that sequential atom types are used as the apparent atom types. The actual atom types used in the database are made by the typing rules associated with the force field table. The conversion is necessary for mixing multiple force fields, although in this tutorial it is not essential._

#### Test the Assigned force field

Now that force field parameters have been prepared and the atom types and charges have been assigned, the model is ready for simulation.

1. Double-click on _&quot; \_\_Aspirin&quot;\_in the \_Project Navigator_; make sure it has a force field assigned as indicated by the _&quot;** Force Field**&quot;_ option in toolbar.

2. Click **Simulation** **→** **Optimization** command to open the _&quot;Optimization&quot;_ dialog. Examine the job name, number of steps and convergence criterion (energy in kcal/mol). Select the **&quot;\*\*** Variable matrix (BFGS)&quot; **method and the**&quot; \***\*Screen view&quot;** option, leave other options unchanged, and click **Execute** to start the job. The structure is automatically updated as the job runs.

3. Similarly, you can perform a molecular dynamics simulation using **Simulation →** **Molecular Dynamics** command.

### Tutorial A2 - Working With a Liquid Model

In this lesson, we will build a liquid model and use TEAMFF to launch simulation jobs.

#### Loading Models and Assigning Force Field

1. Start DFF*.* If the project is not fully loaded, right-click on the &quot;_Tutorials&quot;_ node in _Project Navigator_, right-click mouse to select **Refresh** to update the list. The command **Sort** can be used to arrange the subfolders in the order as specified.

2. In the _&quot;Tutorials&quot;\_folder, there is a &quot;\_tutorialA2_liquid&quot;\_subfolder. There are four molecular models built in this subfolder: &quot;\_water&quot;, &quot;phenol&quot;, &quot;octane&quot;,_ and*&quot;SOS&quot; (Sodium octyl sulfate)*. We will use these models in this lesson.

3. Select all four models. Click **DFFDB → Admin** to ensure the database _&quot;\_TEAMFF_.dffdb&quot;_ is selected. Set &quot;\_Force field functional_&quot; to &quot; **TEAM&quot;** , select **&quot;\*\*** TEAM-General **\_**&quot; **\_ force field from the list, and click** OK\*\* to close the dialog.

4. Select **DFFDB → Assign** command to open a dialog. Rename the _&quot;Output&quot;_ force field to **&quot;team.ppf&quot;**. Four molecular models are listed under &quot;_Available Models&quot;_. Click **OK** to assign force field parameters for these molecules.

5. When the job is complete, a force field table appears. Examine the parameters and close the force field table. Note that each of the models is associated with the newly assigned force field &quot;_team.ppf_&quot;, which can be verified by clicking on the model in the _Project Navigator_ to open the _Force Field Editor_.

6. Select a model in the _Project Navigator_ and then select the **Build → Charge Group** command to set the charge groups. Leave the default option unchanged, click **Execute** to assign charge groups. The central panel of the dialog shows the charge group properties. Repeat this operation for each of models listed in the _Project Navigator_. Water contains one charge group, phenol has 6, octane has 10, and surfactant has 8, among these groups two are charged species: sodium cation and SO4- anion.

#### Building a Liquid Mixture Model

1. Let&#39;s make a mixture of water and phenol. Select water and phenol from the _Project Navigator_, and then open **Build → Bulk Liquid** command. This brings up a dialog to build a liquid model. select **&quot;\*\*** 300&quot; **water molecules and**&quot; \***\*100&quot;** phenol molecules, set density to be **&quot;\*\*** 0.8&quot; **, and click** Execute\*\*.

DFF _will now build a box with low density and then compress the box to the target density. The compression is a series of quick NPT simulation without sufficient relaxation. For bulky molecules, this could cause a very high energy configuration in the end. To avoid such problem, try to make an initial configuration with low density and gradually compress the box by using normal NPT MD simulations with high pressure._

2. Make sure this model is associated with the force field assigned earlier. If not, use **Force Field → Associate** command to do so. Alternatively, you can select the model from the _Project Navigator_ and right-click mouse button to associate the force field.

This model is now ready for simulation. Open **Simulation → Molecular Dynamics** command. Since the model is not optimized, let&#39;s relax the configuration by setting a small-time step of 0.2 fs and run a short period of time, for example:

![](/E:/DFF7/Release7.1/UserGuide7/Tutorials/T2_Liquid/T2_Liq8.jpg)

The most expensive calculation in atomistic simulation is about the nonbond energy. With periodic boundary condition, two options of cutoff, group-based and atom-based, can be selected. This can be done by clicking the **Nonbond Energy** button. The group-based cutoff is recommended.

_If the energy of initial configuration is too high, MD simulation will stop and return an error message. Reduce the time step to smaller value (such as 0.1 - 0.001 fs) can quickly reduce the tensions in the system, then continue the simulation with normal time step._

3. Click **Execute** to launch a MD simulation. The screen will update as the simulation progresses. Set _&quot;\_\_Label&quot;_ to **&quot;\*\*** Total Energy&quot;\*\* to see how the energy changes. When the job is done, a new liquid box is saved in a subfolder.

#### Building Liquid-Vapor Interface

DFF can be used to build liquid-vapor interfaces, which are useful for force field parameterization and validation because the experimental data of vapor-liquid-equilibrium and surface tension are often available. We will build a water liquid-vapor interface first.

1. Open the _&quot;Bilayer Interface&quot;_ dialog by clicking on **Build → Liquid** Interface. Enter a _&quot;Job Name&quot;_ if desired, and then make sure the box dimensions in X and Y are acceptable, make the values larger or smaller will change the box sizes.
2. The _&quot;Phase A&quot;_ is the central part of the model to be built, which has two surfaces. We will treat it as water bulk. Select **&quot;water&quot;** from the pulldown, enter **&quot;1.0&quot;** as the _&quot;Density&quot;_, and **&quot;500&quot;** as the _&quot;Count&quot;_ of molecules. Note the count will change the Z-length, make sure the value is reasonable.
3. The &quot;Phase B&quot; defines the two phases above and below the central part. Let&#39;s treat it as water vapor. Set _&quot;Density&quot;_ to be **&quot;0.1&quot;** , &quot;Count&quot; to be **&quot;50&quot;** , so that the Z-length is like that of the bulk liquid.
4. Do not select anything for the _&quot;Interface&quot;_, and then click **OK** button to start the builder job.
5. When the job is finished, a bilayer model is built. Turn it around you can see the model looks like this:

![](RackMultipart20220717-1-mu78nc_html_75a9d15301ddb67.png)

1. Using **Simulation → Molecular Dynamics** to relax the system, and then using **Simulation → LAMMPS** to submit a simulation.

_The vapor-liquid interface model can be used to calculate vapor-liquid equilibrium directly by using MD simulations. It is generally an expensive simulation because of slow convergence, especially at low temperatures when the number of molecules in the vapor phase is low._

#### Building Liquid-Surfactant-Liquid Interface

DFF can be used to build liquid-liquid interfaces with or without the third molecule in the interface. We will use water, octane, and SOS to build an interface with surfactant.

1. Follow the same procedure as above, set **&quot;water&quot;** in Phase A, and **&quot;octant&quot;** in Phase B. The density of water is **1.0** , the density of octant is **0.7**. Control the _&quot;Count&quot;_ so that the Z-lengths are reasonable.
2. Select **&quot;SOS&quot;** as the interface. Enter &quot;25&quot; as the number of molecules, which defines the surface concentration. The Dialog looks like this:

![](RackMultipart20220717-1-mu78nc_html_91edeaa00a7f3828.png)

1. Click OK to launch a series of DFF background jobs. When the jobs are finished, a new model is loaded automatically. Rotate the model, it should look like:

![](RackMultipart20220717-1-mu78nc_html_6fe2331c52e045f2.png)

### Tutorial A3 - Working with Polymers

In this lesson, we will work with a polymer model.

1. Start DFF and use **File** **→** **Recent Project** to open the _tutorials_ project. Navigate to the project root folder, right-click, and select _ **Refresh.** _ This will reload all files in this project.

#### Assigning a Force Field

2. In the subfolder _ **tutorialA3_Polymers** _, there is a polymer mode that has been prebuilt and converted to the _MSD_ format. Double-click on this model to load the structure:

![](RackMultipart20220717-1-mu78nc_html_3dff4f2c5ba9848a.png)

_Note that this model has a low density (0.4587), which can be displayed by clicking_ _ **&quot;Property&quot;** _ _in the toolbar. We will compress this model to a density closer to the experimental value._

3. Open **DFFDB → Assign** command. This dialog lists the database and force field selected (TEAM-General). The _&quot;Output&quot;_ field lists the file name to be used for the output force field. Unselect Click **OK** to assign force field parameters. When the job is done, a force field table appears. Review and close the force field table.

4. Select this model, open **Build → Charge Group** to assign charge groups, and click **Go** to assign the charge groups automatically. After the job is completed, the central section shows 505 charge groups (scroll the display area to the top to view). The largest group contains 7 atoms, the smallest group contains 3 atoms, and all groups have a total charge of zero charge.

#### Preparing the Model

5. We will now compress this model to a higher density state. Select the model and open **Simulation** **→** **Molecular Dynamics**. Select **&quot;** _ **NPT&quot;** _, set &quot;_Pressure&quot;_ to be **&quot;** _ **1000.0&quot;** _ MPa (very high for a rapid compression), set the &quot;_Equilibration steps&quot;_ to be _ **&quot;100&quot;** _ and &quot;_Evaluation steps&quot;\_to be &quot; **200**&quot;. Make sure &quot;\_Screen View&quot;_ is &quot; **On**&quot; and click _ **OK** _.

![](RackMultipart20220717-1-mu78nc_html_a2b840b6f5b9101b.png)

6. DFFnow displays density changes during compression. Step 5 can be repeated as needed. Every time a new MD job starts, a subfolder is created for that job. When the system approaches the targeted density (1.5), stop the job. The instantaneous configuration should approximate but not match the target density. To make an exact density of 1.5, we would need to reset the cell edge parameters. The required edge size X1 can be calculated from current edge size X0, current density D0 and target density D1 using the following equation:

For this system, the target edge size should be 35.82 for a density of 1.5. Select the model, open **Edit → Adjust PBC** , enter the cell edge size, and click **OK**.

![](RackMultipart20220717-1-mu78nc_html_cf377d74e7a88d27.png)

#### Running LAMMPS

7. The model is now ready for simulation. Repeat a NVT simulation in DFF to relax the simulation box and verify that the density is indeed correct, and then submit the MD simulation to _LAMMPS_ by selecting the prepared model and clicking **Simulation** **→** **LAMMPS**.

![](RackMultipart20220717-1-mu78nc_html_a546ed0971adfef9.png)

The model and force field files are loaded automatically. Note that the option of &quot;_Apply T-factor to LJ terms_&quot; is selected, a new force field in which the LJ parameters are scaled according to the applied temperature will be made and used for this job. Select **&quot;NVT&quot;** , set _&quot;Steps&quot;_ to &quot; **1,000**&quot; in order to see the results quickly, and note that the &quot;_Trajectory file name_&quot; is _ **&quot;** _ **polymer.dta** _ **&quot;** _. Click **OK**.

8. When the job is finished, a subfolder named as &quot;_polymer_LAMMPS&quot;_ will be created in the _Project Navigator_. This folder contains the input and output files of this LAMMPS job. Examine the input and output files. Select &quot;_polymer.dta&quot;_ and &quot;_polymer.msd&quot;_ files from the _Project Navigator_, then click **Simulation** **→** **Trajectory Viewer** to bring up the following dialog box:

![](RackMultipart20220717-1-mu78nc_html_6e96d84047ade59b.png)

Click **OK** to start a new window that replays the trajectory. The trajectory is played in a new window, you can use the same viewing options of DFF to translate, rotate, and zoom the models on the trajectory window.

### Tutorial A4 - Working with Proteins

Models built using external software may need to be modified before assigning a force field. In this lesson, we will work on one example. In _&quot;\_\_tutorialsA4_Proteins&quot;_, a _MOL2_ file is provided. The model does not have hydrogen atoms, so we will assign hydrogen atoms first.

#### Import Models and Assign force Field

1. Start DFF and open the _&quot;_ **tutorials** _&quot;_ project. Right-click on _&quot;_ **tutorialA4_Protein** _&quot;_ and select **Add → Models** command. In the _&quot;Open&quot;_ dialog, set _&quot;Files of type&quot;_ to **&quot;\*\*** MOL2 Files (\*.mol2)&quot; **and select &quot;** protein1.mol2 **_&quot;_. Click** Open\*\* to load both models.

_2._ In the Project Tree, click the newly added model to view it in the main screen. The model does not have hydrogen atoms. Click **Add Hydrogen** button ( ![](/E:/DFF7/Release7.1/UserGuide7/Tutorials/Tutorial_1/T1_addHydrogens.gif) ) on the tool bar or use **Edit** **→** **Add Hydrogen** to add hydrogen atoms automatically.

3. Click **DFFDB** **→ Admin** command. Select the &quot; **AMBER&quot;** force field functional and the &quot; **AMBER-General&quot;** force field. Select protein1 and click **DFFDB** _ **→** _ **Assign**. Note that the selected force field, model (protein1), and output force field are listed. Click **OK** to assign force field parameters. When the job is complete, a force field table appears indicating the force field functional is AMBER and the typing rule is &quot;Composed&quot;, which means atom types have been successfully assigned.

#### Prepare the Model

5. Select **&quot;Protein1.msd&quot;** from the _Project Navigator_ and click **Build** _ **→** _ **Charge Group**. Set &quot;_Allow charge crossing a bond_&quot; parameter to **&quot;0.1&quot;** and click **Execute**. The text area shows the results indicating the largest group has 7 atoms.

_To define small charge group is essential. The groups do not have to be charge neutral, but the size may be an issue. For example, if the group is too large, GROMACS may fails._

6. Because hydrogen atoms were automatically added, the structure is not relaxed. If the configuration is submitted to _GROMACS_ or LAMMPS, the simulation may fail. Therefore, we should relax this configuration first. To do so, select **&quot;Protein1.msd&quot;** and open **Simulation** _ **→** _ **Optimization** :

![](RackMultipart20220717-1-mu78nc_html_95c1529f76809c4d.png)

Click on **&quot;Nonbond Energy&quot;** , which opens the following dialog:

![](RackMultipart20220717-1-mu78nc_html_c59ffbf1ae999495.png)

Select **&quot;Group Cutoff&quot;** and leave other options unchanged. Click **OK** to close this dialog. Click **OK** again in the &quot;Optimization&quot; dialog and watch as the energy value drops. When the job is done, the optimized model will be saved to a subfolder named &quot;_protein1_OPT_&quot;.

#### Run _GROMACS_

7. Now that the optimization job is done, we are ready to submit a job to _GROMACS_. Click **&quot;protein1.msd&quot;** from the &quot;_protein1_OPT&quot;_ folder. Make sure the force field is still associated and select **Simulation** _ **→** _ **GROMACS** command.

8. Using the default options, set the simulation steps to small numbers (e.g. 1000 steps), and click **OK** to start the job. The trajectory file will be saved as &quot;_protein1.dta&quot;_.

9. When the job is complete, a notice will pop up and a subfolder named &quot;_protein1_GROMACS&quot;_ will be placed under the folder in which the job is started. Double-click on the files in this subfolder to see the results of the simulation. Open the **&quot;protein1_GROMACS&quot;** folder, right-click select **Import** , set the file type to **&quot;GROMACS Trajectory File&quot;** , and select **&quot;protein1.dta&quot;** to load the trajectory file into protein1.dta.

10. Select &quot; **protein1.msd&quot;** and **protein1.dta** , then click **Simulation → Trajectory Viewer** to watch the trajectory.

### Tutorial A5 - Mixing Two Force Fields

In this tutorial, we will practice how to use two force fields in one simulation. This example demonstrates one of the unique features of TEAMFF. Because each force field is independently developed, the force fields can be parameterized accurately. Upon use, different force fields can be applied to different molecules depending on which provides a better coverage. Interactions between the different molecules are described by nonbond energy terms only, for which the regular combination rules are applied.

In this lesson, we will use a model consisting of zeolite (MOR) interacting with two xylene molecules. For convenience, a sample file &quot;MOR_2Xylene.msd&quot; is provided.

1. Start DFF and open the project **&quot;Tutorials.dpf&quot;** if it has been closed. Open &quot; **tutorials/tutorialA5_Zeolite&quot;** folder, a unit cell containing two xylene molecules caged in zeolite is listed. Open the model.

_The model contains two different kinds of materials, zeolite, and organic molecules, which are described using different force fields in TEAMFF. There are two ways to use these force fields correctly, the simplest way is set the order of force field in TEAMFF so that the force fields are used in the order as specified. Another is to define subsets and use different force fields for different subsets._

_We will first use the order method, and then the subset method which gives us more specifically control._

#### Using The Order OF Tables

2. Click **DFFDB → Admin** , load **&quot;** TEAMFF **.dffdb&quot;** , select **TEAM** as the force field functional, and select two force fields, **&quot;TEAM-General&quot;** and **&quot;TEAM-Zeolite&quot;** , which is indicated by the check mark in the first column. Since we will use the order to get parameters, make sure the more specific force field, TEAM-Zeolite, is on top of TEAM-General. If the order is different, select a line and use the buttons **Up** and **Down** to adjust its position.

![](RackMultipart20220717-1-mu78nc_html_318e18470de19361.png)

3. With the force fields are selected, click **DFFDB → Assign**. Make sure the &quot;Use the order of selected tables&quot; is selected, leave other options as given, and then click **OK** to launch the job. A new force field will be generated and associated with the model.

![](RackMultipart20220717-1-mu78nc_html_e4b4707ccb0e3221.png)

4. To verify the force field is set properly. Use **Simulation → LAMMPS** command to launch a short MD simulation. When the job is done, using **Simulation → Trajectory** to see the simulation trajectory or examining _LAMMPS_ output file to verify the simulation is carried out successfully.

_Note: DFF does not support simulations of crystals._

#### Using Subsets

_To use subsets to assign force field for different part of model, we first set the subsets._

1. Click **Build → Subsets**. In the pop-up dialog, select the &quot; **automatic – to set subsets using connectivity**&quot; option and click **Execute**. This will create two subsets based on connectivity – one for the zeolite and another for the xylene molecules.

![](RackMultipart20220717-1-mu78nc_html_a7cc2b561172f113.png)

2. Click **Rename** to rename the subsets as shown below. Click **OK** to close both dialogs. Click **&quot;Save&quot;** command to save the model.

![](RackMultipart20220717-1-mu78nc_html_a5849ee1006d5bfd.png)

3. Click **DFFDB → Admin** , load **&quot;** TEAMFF **.dffdb&quot;** , select **TEAM** as the force field functional, and select two force fields, **&quot;TEAM-General&quot;** and **&quot;TEAM-Zeolite&quot;**. Close the dialog.

_Since we will use subsets to assign different force field, the order does not matter in this case._

4. Click **DFFDB → Assign**. In the &quot;Assign force field parameters&quot; dialog, select &quot; **Select table for subset**&quot; and click **Mapping** to open another dialog to choose force field table for each subset as shown below:

![](RackMultipart20220717-1-mu78nc_html_b73edad6ba26d57e.png)

Click **OK** to close the dialogs. Leave other options in &quot;Assign force field parameters&quot; dialog unchanged, and then click **Ok** to begin the assignment process. When the job is completed, a force field will be loaded showing parameters taken from two tables.

5. To verify the force field is set properly. Use **Simulation → LAMMPS** command to launch a short MD simulation. When the job is done, using **Simulation → Trajectory** to see the simulation trajectory or examining _LAMMPS_ output file to verify the simulation is carried out successfully.

## 2-2. Section B - Parameterization

In this section we focus on the central functionality of DFF*,* making force field parameters for molecules. The tutorials cover topics on how to prepare quantum mechanics (QM) data and how to fit parameters using the QM data. We also illustrate how to optimize the van der Waals parameters by using molecular dynamics simulation data of liquid.

### Tutorial B1 - Fitting Parameters for a Small Molecule

In this tutorial, we will learn how to use DFF to fit force field parameters from quantum mechanics data (QMD) for a simple molecule. The molecule is _dimethyl ketone_ in which the four heavy atoms (3 carbons and 1 oxygen) form a rigid plane with two methyl groups are rotatable. To fit this kind of molecules is not difficult. We will learn how to make a force field that not only fits minimum energy structure, but also reproduces the conformational energy profile calculated using QM methods.

A general procedure is to obtain the QMD for an energy minimum structure as well as conformational isomers. The QMD includes energies, energy first and second order derivatives. We then fit QMD to derive valence and charge parameters.

For convenience, files used in this tutorial have been pre-calculated and provided in the **TutorialB1_fitKetone** folder of the tutorials project.

#### Preparing the Quantum Mechanics Data

1. Start DFF and open project _&quot;Tutorials&quot;_ if it is not yet. Open **&quot;\*\*** TutorialB1_fitKetone&quot; **folder. Double-click on the**&quot; \***\*ketone&quot;** model and click **QMD** _ **→** _ **Compute** command. The name of the selected model is listed in the dialog. Set the **Computation** to &quot;OPT FREQ&quot; to optimize the structure and get the Hessians in one step. The computation options as follows:

_Method: B3LYP
Basic Set: 6-31G\*
Total Charge: 0
Multiplicity: 1
CPU time limit: 300 (default)
Memory Limit: 800 (default)_

If you have _GAUSSIAN_ software installed locally, select &quot;Run background job&quot; to run the calculations from _DFF_. When the job is done, there will be a notice prompting next step. To run the job outside of _DFF_ environment, select &quot;Make input files only&quot;. Click **&quot;OK&quot;** to continue.

1. When the Gaussian job is done, locate the output file (_keton.gauout_) in _Project Navigator_, right-click and select **&quot;Create QMD&quot;** to make a QMD (_keton.qmd_) file. A check mark of the QMD file icon ( ![](RackMultipart20220717-1-mu78nc_html_3609c3eb511ec855.gif)) indicates that this QMD data contains optimized structure with the first and second derivatives calculated. Open the QMD file will show the same information.
2. Point to the QMD file, right-click to select &quot; **Create MSD**&quot; command, the optimized structure is saved in a new MSD (_keton.msd_) file. This is the optimized structure, will be used to generate conformers. Select the MSD file from the _Project Navigator,_ click **Build** **→** **Conformational Isomers** , which brings up the &quot;Generate Conformations&quot; dialog box.

![](RackMultipart20220717-1-mu78nc_html_6d40833deaf86463.png)

_This is a dialog that launches the automatic conformation generator (ACG). The software selects all dihedral angles defined by heavy atoms in the molecule, and then starting from the original structure, which should be the one of minimum energy, then scan each of the dihedral angles either systematically or randomly._

1. Using the default options, click **OK** should generate 8 isomers in a sub-folder. Select all the conformers generated, and click **QMD** **→** **Compute**. The selected conformers should be listed in the _&quot;Models to Be Calculated&quot;_ text field. Set the Computation options to &quot;_ **GRADIENT** _&quot;, keep other options unchanged, and click **OK** to run.

_Since the isomers are not energy minimized, it is not helpful to calculate the second derivatives, but the energy and gradients are useful for fitting force field parameters._

1. When the jobs are done, double click on the QMD file obtained above (_keton.qmd_) to open the QMD spreadsheet. Click **Add** button to locate and load the newly obtained Gaussian output files. The spreadsheet will show entries loaded. Select all entries, and click Energy button to calculate the relative energies, some entries may have the same relative energy, which indicates that some structures (e.g. optimized) are calculated twice. You may select and delete the redundant isomer that has no second derivate. The final QMD list should look like the following figure. It shows a high-level summary of the data: name, conformation (if calculated), is it scanned systematically, the total energy, the relative energy, is it optimized, does it contain first and second energy derivatives, and electrostatic potential and atomic charges.

![](RackMultipart20220717-1-mu78nc_html_e014b97ead6dc047.png)

#### Fitting and Analyzing

6. Refresh the &quot;_tutorialB1_ketone&quot;_ folder and select the prepared QMD file. Create a new force field using **Force Field → New Force Field**. Enter &quot;_ **keton** _&quot; as the new force field name and select **&quot;\*\*** AMBER&quot; **as the force field functional. Select &quot;** Default **&quot; typing rules. Make sure \_**&quot; **\_** Generate EQT table **\_**&quot; **\_ is checked. Click** OK **. Examine \_** keton.ppf\*\*\_ tables. Note that atom types are added into the parameter table and a default equivalence table is created.

7. Make sure **&quot;\*\*** ketone.qmd \***\*&quot;** is selected, click **Parameter → Fit Charges** command. Select &quot; **ESP&quot;** as _&quot;Data Source&quot;_, make sure the **&quot;\*\*** Bond type based&quot; **is checked, and click** Execute\*\*. The charge parameters are calculated and assigned to the model.

8. Select **Parameter → Fit Energy Data** to fit valence parameters. The QMD model should be listed in the &quot;Data to fit&quot; box. Leave everything as default and click **OK**. When the job is finished, several files will be loaded into the _Project Navigator_. These files are the input (.dfi), output (.dfo), result force field (.ppf) and fit result table (.dft) files. The result file shows fit merits and validation results, which are structural and vibrational frequency data calculated by the force field using comparisons to QM data.

![](RackMultipart20220717-1-mu78nc_html_243d092e86140eb6.png)

The parameters can be viewed by double-clicking on the _PPF_ file. This dialog shows two panels, &quot;Force Field Parameters&quot; and Equivalence Table. At the upper left corner, the force field functional is indicated to be AMBER. At the lower left corner, the typing rule for this force field is shown as &quot;Default&quot;. This information is also displayed in the toolbar of the DFF interface.

![](RackMultipart20220717-1-mu78nc_html_e9b8f5c07ce58f64.png)

### Tutorial B2 - Fitting Parameters Of A FLexible Molecule

In this lesson we will learn how to fit a force field of 2-methylamino-ethanol (C3H9NO), a molecule with several rotatable bonds. Fitting flexible molecule is more difficult than fitting a rigid molecule. We will compare two sampling strategies and demonstrate the impact of different samplings on the quality of developed force field. The first is rigid sampling, in which all internal coordinates are fixed at selected values, as we used in the previous lesson. The second sampling is flexible; we sample the minimized energy curves along selected internal coordinates. For convenience, pre-calculated QMD files are included in the &quot;tutorialB2_fitAmnol&quot; folder.

#### Rigid Sampling

1. Start DFF and open the _&quot;Tutorials&quot;_ project. Open the **&quot;\*\*** TutorialB2_fitAmnol&quot; **folder. Double-click on the \_** C3H9NO.msd **_ model in \_Project Navigator_. Click** Build \***\* → \*\*** Conformational Isomers**to open a dialog of sampling. The amino group is not planar, therefore, we shall sample the out-off-plane (OOP) angle as well. Select**&quot;Fixed interval&quot; **for &quot;OOPA&quot;. Leave all other parameters as default, then click on** OK\*\* to launch the job. A total of 85 conformational isomers will be generated.
2. Run single point energy and gradient calculations for these structures using the **B3LYP/6-31G\*** protocol. When the calculations are done, combine all data including the fully optimized structure with Hessian calculated (86 data in total) into one QMD file, which is named as **&quot;rigid.qmd&quot;** in this Tutorial. Open **&quot;rigid.qmd&quot;** , select all entries and click on the **&quot;Energy&quot;** button to see the relative energies. The highest value is about 20 kcal/mol.
3. Fit the QMD file using the procedure explained in last tutorial. Since some of the conformers are in high conformational energy, select &quot; **Apply Boltzmann Factor&quot;** in the **Job &amp; Data** panel.
4. When the job is done, the fit quality is not very good. However, if we focus on the low energy range from 0 to 10 kcal/mol, the agreement between QM and FF is not bad.

![](RackMultipart20220717-1-mu78nc_html_ced924c77a39f150.png)

1. To see the deviations in detail, click &quot; **Data&quot;** to export to a csv file and graph the data below 15 kcal/mol using software such as Microsoft Excel:

![](RackMultipart20220717-1-mu78nc_html_1e247f9f8d88e06a.png)

_As seen in this chart, the agreement at low energy region is not perfect, but acceptable. As the example above demonstrates, the rigid sampling is fast, but does not yield very accurate torsional energy curves._

#### Relaxed Samplings

Alternatively, DFF provides a functionality that samples internal rotation energy curves using constrained minimization. This is done by conducting the _Scan_ calculations using _Gaussian_.

1. Click **QMD → Compute** to optimize and calculate Hessians of the molecule using the DFT B3LYP/6-31G\* method. Import the result into a QMD file. Make sure a MSD file is obtained from the optimized structure, which will be used to as the starting point to sample the conformational space.
2. Open the MSD file, click **QM → Compute** to bring up the QMD dialog. Select the option of &quot;Dihedral constraints&quot;, a text field is activated. Click **Add** constraints button to open a &quot;Torsion&quot; dialog for selecting the dihedral angles. The molecule with atom names are displayed on the screen. Select four atoms that defines a dihedral angle **O14-C1-C2-N13** , as shown in the &quot;Torsion&quot; dialog, the angle is &quot;63.845&quot;. Enter &quot; **10**&quot; as the sampling increment, &quot; **36**&quot; as the scan times, which means that we will completely scan 360 degrees for the dihedral angle. Click **OK** to close the &quot;Torsion&quot; dialog. The Dihedral constraints in terms of atom indexes are listed such as &quot;D 14 1 2 13 S 36 10.0&quot;. Make sure the Computation type is &quot;OPTIMIZE&quot; then click **OK** to submit the Gaussian job, which will generate 37 data points. If the option of &quot;Run background job&quot; is selected, it is convenient to select &quot;Reload&quot; and &quot;Append data to a QMD file&quot;.
3. Repeat the above calculation for another dihedral angle, **C1-C2-N13-C9** , which will generate another 37 data points.

_In above procedure, one dihedral angle of selection is fixed while all other internal coordinates are relaxed. The sampling is incomplete but hopefully sufficient for deriving the force field parameters. Alternatively, we may completely scan the two-dimensional space by adding the second constraints before submitting the Gaussian job. If we use 10 degrees as the sampling increment, it will require (37x37) energy minimizations._

1. When the QM jobs are done, import all Gaussian output files to the QMD file. The optimized entry with Hessian calculated must be included and it must show lowest energy. The scanned data points should show various relative energies. In the tutorial, &quot;_relaxed.qmd_&quot; has been pre-calculated. There are 75 data points in this file; one of them has the minimum energy with Hessian calculated.
2. Fit the _&quot;relaxed.qmd&quot;_ using the previously demonstrated procedure. Because energies are not too high in this case, there is noneed to use _Boltzmann Factor_. When the fit is over, the energy dialog should look like this:

![](RackMultipart20220717-1-mu78nc_html_9426d7262da56d70.png)

1. To examine quality of fit, export the data to a .csv file and graph the input vs. fit energies. Note the excellent agreement between force field and QM curves.

![](RackMultipart20220717-1-mu78nc_html_35599efaa151a905.png)

_The relaxed sampling is more time-consuming than the rigid sampling, but the internal energy curve is predicted more accurately._

### Tutorial B3 - Fitting a Molecular Dimer

In this tutorial, we will learn how to fit _QM_ data of a molecular dimer to determine VDW parameters, demonstrated by methane molecules. To fit a VDW dimer, three models are required: dimer and two monomers. The two monomers may be the same as shown in this example. In practice, valence parameters should be determined before the VDW parameters to be adjusted. In this tutorial we will checkout parameters from TEAMFF.

_The initial parameter PPF file and QMD files for methane monomers and dimer can be obtained following the steps below. For convenience, these files have been prepared and provided in the &quot;\_\_tutorialB3_fitCluster&quot;_ _directory._

#### Preparing Force Field

1. Start DFF and open the project of _&quot;Tutorials.dpf&quot;_. In the **&quot;\*\*** tutorialB3_fitCluster&quot; **folder, double-click**&quot; \***\*CH4.msd&quot;** and **&quot;CH4CH4.msd&quot;** to open the molecular models.
2. Select both models in _Project Navigator_ and use **DFFDB\*\*** → \***\*Checkout** command to get a PPF file for methane from _ **&quot;AMBER-General&quot;** _ force field table. The result PPF file will be loaded to the main screen. All parameters are fix indicated by the asterisk (\*) sign. Select the _ **&quot;N12_6&quot;** _ parameters and click **Relax** button in the force field spreadsheet, the VDW parameters are relaxed. Click **Save** to save the changes, and then **OK** to close the window.

![](RackMultipart20220717-1-mu78nc_html_49a35f4ddd02b75d.png)

#### Preparing QMD

1. Click **QMD→Compute** command to optimize and calculated Hessians for both models at MP2/6-311++G (2d,2p) level of theory. After the jobs are finished, make a new MSD model file by selecting the Gaussian output file, **CH4CH4.log** , and tight-click &quot; **Create MSD**&quot; command in _Project Navigator_.
2. Double-click **&quot;CH4CH4.msd&quot;** in the _Project Navigator_ to open it. Then select **Build** **→** **Dimer Configurations** to open the following dialog:

![](RackMultipart20220717-1-mu78nc_html_73cd0c7f37d8ec02.png)

Leave all options as given, click **OK** to generate models in a sub-folder.

_This dialog sets the sampling points by shifting and optionally rotating one monomer relative to another. The shift distances in Angstroms are listed as the &quot;Shift distance&quot;. The values can be manually edited. At each point, the number of random rotations can be changed. This provides a way to sample the intermolecular interactions much more thoroughly. However, limited by the simple functional forms in common force field, fitting the potential energy surfaces might not be satisfactory._

1. Compute QM data at the same level of theory, MP2/6-311++G (2d,2p), for each of the sampling configurations (There should be 15 sampling points). Select all generated sampling models from the _Project Navigator_ and click **QM → Compute** , set the Computation Type to &quot; **GRAIENT**&quot; and carry out the calculations.
2. When all Gaussian jobs are done, make two QMD files: &quot;CH4.QMD&quot; from the optimized with Hessian calculated CH4.log and &quot;CH4CH4.qmd&quot; from the optimized-hessian and all sampling Gaussian output files. This can be done by using **QMD** **→** **Organize QMD** command to open a new QMD dialog, and then use the **Add** button to browse and load the Gaussian output files.

#### Fit VDW Dimer

1. Select both **&quot;CH4CH4.qmd&quot;** and **&quot;CH4CH4.qmd&quot;** models, which are associated with their MSD files, the MSD files are associated with the PPF file, Open **&quot;CH4.ppf&quot;** to list the parameters in _Force Field Editor_ spreadsheet. Make sure the **N12_6** parameters are relaxed (without the asterisk \* mark).
2. Use **Parameter → Fit VDW Dimer** to open _&quot;Fit Cluster Configuration&quot;_ dialog. Both models are listed in the _&quot;Data to fit&quot;_ list. We need to identify which one is cluster, which ones are monomers. Select **&quot;CH4CH4.QMD&quot;** and click **Cluster** , select **&quot;CH4.QMD&quot;** and click **Monomer,** twice. In the end, the dialog looks like:

![](/E:/DFF7/Release7.1/UserGuide7/Tutorials/T4_Fit13.jpg)

Keep other parameters unchanged and click **Execute** to start fitting. When the job is done, a validation panel will appear:

![](RackMultipart20220717-1-mu78nc_html_3c0f7a1dd875cd67.png)

_It should be noted that the fit of isolated molecular dimer is only useful for describing intermolecular interaction in gas phase. For molecules in condensed phases, the VDW parameters should be optimized using the simulation data as shown in next tutorial._

### Tutorial B4 - Fitting Liquid Data

In this lesson, we will learn how to optimize VDW parameters by fitting liquid properties using liquid benzene. We will check out the parameters from a force field of TEAMFF, fit the L-J parameters using simulation data of the liquid.

Because the NVT simulation is more stable than NPT simulation, we use NVT simulation to calculate pressure (P) and heat of vaporization (_Hv_) as the target properties to fit, and the temperature and density are fixed as input.

In this tutorial, we use the experimental data of one temperature (298 K), there are only two target data to fit, therefore we must reduce the adjustable parameters. After all valence and charge parameters are fixed, there are still have 4 adjustable parameters. Therefore, we choose to use two scaling factors for LJ well-depth and radium respectively, to optimize.

#### Preparing A Liquid Model

_An equilibrated liquid simulation box has been prepared and is included in the tutorial directory. You can skip this section. _

1. Sketch a benzene molecule as illustrated in Tutorial 1. Check out force field parameters using **DFFDB → Check out**. This will generate a force field in the _Project Navigator_. We are using the **AMBER-Basic** force field as an example.
2. Assign charge groups for benzene molecule using **Build → Charge Group**. The charge groups, atom types, and associated force fields for this model will be carried over when building the liquid box.
3. Select **Build** **→** **Bulk Liquid** to build a liquid box. Select the molecular model from the pull-down menu and enter &quot;_ **100** _&quot; as the **Count**. This will update several variables in the dialog window. Enter a **Density** of _ **&quot;0.872&quot;** _ and leave the **Compress Rate** as given. Click **Execute** to launch a background job.
4. When the job is finished, a liquid box with periodic boundary condition will be created. Optimize the constructed liquid cell by using **Simulation →** **Optimization**. A few dozen steps (~60) should be sufficient. Use **Nonbond Energy** to set nonbond calculation options. Select **Group Cutoff** , set the **Cutoff** value to &quot;9.5&quot;, and make sure &quot;Tail corrections&quot; is checked. Close the &quot;Nonbond Energy&quot; dialog by clicking **OK**. Launch the optimization job. The total energy should decrease rapidly.
5. Equilibrate the liquid model by running MD simulations repeatedly. Consider using high temperatures (~3000 K) with NVT MD simulations, and then gradually cool the system down to 298K over several (2~3) steps. Each step requires a run time of ~10 ps. Finally, run a NVT MD simulation with a 9.5Å cutoff for 50-100 ps to equilibrate the system.

#### Optimizing VDW Parameters

_To fit the L-J parameters, we use experimental data for the density and heat of vaporization for liquid benzene:_

_Temperature = 298 K
Density = 0.872 g/ml
Pressure = 0.1 MPa
Hv = 8.1 kcal/mol _

1. Load the equilibrated liquid model. Make sure that the force field is associated with the liquid model. The L-J parameters must be relaxed.

![](RackMultipart20220717-1-mu78nc_html_1b01897733ba0023.png)

1. Open **Parameter** **→** **Fit Liquid Properties**. Select **Run NVT**. Enter _ **298.0** _ as the temperature T (K),_ **0.1** _ as the Pressure (MPa), and _ **20.1** _ as the heat of vaporization Hv (kcal/mol). Click **Opt** **to set simulation conditions**. By default, the following values are given: _ **1** _ fs for **Time step** , _ **10,000** _ steps for equilibration and _ **20,000** _ steps for evaluation. The simulation trajectory must be saved and the default interval is every 20 steps. Make sure **nonbond options** are set as before. In this case, a group-based method with a cutoff value of _ **9.5** _ A and **tail correction** is adequate. Leave other options as illustrated in the following figure and click **OK** to launch a job.

![](RackMultipart20220717-1-mu78nc_html_535dad9f82467f81.png)

_If you did not select_ _ **Screen View** _ _in the_ _ **NVT simulation control panel** _ _(activated by clicking_ _ **Opt** _ _in the_ _ **Fit Liquid Data** _ _window), the job will run in background. You can now close the Direct Force Field interface. However, if you are running_ DFF _on Windows platforms, a command prompt window will remain on the screen._

1. When the job is finished, examine the results in the output file (\&lt;jobname\&gt;.dfo). At the end of the output file, a section of summary of the fitting merit is given.
2. Repeat the calculation until calculated values or parameters are converged. Note that convergence is subject to the statistic fluctuations. In a system of about 1000 atoms, evaluated pressures are normally associated with uncertainties of several thousand bars (hundreds of MPa). Normally, values within 10-20 MPa of the experimental value are considered acceptable. (With this magnitude of deviation, the percentage errors in densities obtained using NPT simulations are normally within 1%.)

_After the parameterization, validation should be carried out to test the parameters. For example, calculating densities at different temperatures using NPT simulations with LAMMPS are usually a good test of the parameters obtained. _

## 2-3. Section C - Developing Force Fileds

In this section we practice the advanced tasks for making force field in TEAMFF environment. We will learn how to prepare a training set and how to make a new force field in TEAMFF database. Another important task is to import existing force fields to TEAMFF so that available resources can be utilized. Finally a special topic is given to hyper valence molecules.

### Tutorial C1 - Make A Training Set

In this lesson, we practice how to prepare a training set, one of the most fundamental tasks in force field development. The molecules of training set should a) represent all interactions of the target molecules, and b) as small as possible to avoid unnecessary correlations among the force field terms. Both conditions means that a fragmentation must depend on a force field to be developed.

1. In _Project Navigator_, click on the node of _ **&quot;TutorialC1_fragment&quot;** _ to open the folder. There are dozens of drug-like molecules saved in this folder. Many of these molecules are too large to be parameterized directly, smaller fragment molecules are required. Open at least one of these molecules to activate the commands.

1. Make sure all models are selected, use **Force Field → New Force Field** command to initialize a force field for these molecules. Select _ **&quot;AMBER&quot;** _ as the force field functional and &quot;_ **Default typing rule&quot;** _. Click **OK** to create an empty force field with atom types and equivalence table created.

1. With the new force field created and atom types assigned, select all models in the folder, and **Build → Fragment** command to launch a background job to make fragments. In the end, 29 molecules will be created and saved in the folder &quot;_Required_Fragments_&quot;, which is the training set representing those drug-like molecules. If the training set is parameterized, the result force field is adequate to describe the target molecules.

1. To illustrate the how it works with a quick turnaround, let&#39;s estimate a force field. First create another force field in the folder of &quot;_Required_Fragments_ by using **Force Field → New Force Field** , name the new force field as &quot;_frag.ppf_&quot;. Then, click **Parameter → Estimate Charges** and **Parameter → Estimate Parameters** commands to make an estimated force field. By default, the result force field is named as **&quot;** _ **frag_EC_EP.ppf** _ **&quot;**. This force field covers all parameters for the training set. The coverage is greater than that required for the drug-like molecules.

1. To verify the drug-like molecules are covered, copy _ **&quot;frag_EC_EP.ppf&quot;** _ to upper directory where the drug-like molecules are saved. Select all the drug-like molecules from _Project Navigator_, and right-click the mouse button, select **Associate PPF** command to make the selected molecules associated with **&quot;** _ **frag_EC_EP.ppf** _ **&quot;** , which assigns the force field to the selected molecules. _DFF_ should not report any missing parameters.

1. We can further test the assigned force field by carry out a calculation. Select one of the drug-like molecules from _Project Navigator_, use **Simulation → Optimization** or **Molecular Dynamics** to run a quick job.

_The fragments depend on how atom types are defined. In this lesion, we use &quot;Default&quot; typing rule. If different typing rules or different equivalence tables are used, the result fragments could be different. The fragmentation method assumes that the atom types are defined using the first circle of neighbor atoms of the atom to be typed, which is sufficient in most cases. Therefore, if you define the typing rules using information of atoms beyond the first circle of neighbor atoms, the fragments generated may not be adequate, iterations might be necessary to make sure the training set has all energy terms represented._

### Tutorial C2 - Make a New Force Field

In this lesson, we make a new force field table in TEAMFF database. Let&#39;s use the ppf file we obtained (estimated) in previous lesson, &quot;_frag_EC_EP.ppf&quot;,_ make a new force field table in TEAMFF. We will use &quot;_hydroxychloroquine.msd_&quot;, also copied from last tutorial to test the new force field.

_The TEAMFF database is saved in \&lt;DFF Installation\&gt;/database folder. If this folder is protected, the database file may not be writable. You must get the write permission before running this tutorial. It is also a good practice to make a copy of the database so that the original database is protected. The database includes one binary file (TEAMFF.dffdb) and a folder in the same root-name (TEAMFF) in the database folder._

1. We first create a new table in TEAMFF database. Click **DFFDB → Admin** command to open **_&quot;TEAMFF.dffdb&quot;_** database. Select **_AMBER_** as the force field functional, the dialog lists several force-field tables in AMBER type. Click **Add** button on the right panel to open a new dialog for adding a table. Enter **_MyFF_** as the force field name and select **_AMBER_** as the force field functional. Select **_Use default typing rules_** , which must be the same as that used for force field to be checked in. In the **_Description_** , enter a brief note for the force field. Clicking **OK** to close this dialog. A new force field table is listed in the DFFDB Admin dialog.

_Before checking in parameters,_ DFF _prompts another test to make sure the parameters are ready for checking in. Only entries marked as &quot;D&quot; denoting &quot;developed&quot; can be checked in. If the parameters are obtained by fitting, the entries will be marked as &quot;D&quot;. Since_ **_&quot;_** _frag_EC_EP.ppf&quot; is estimated, the entries are either unmarked or marked as &quot;A&quot; standing for &quot;Automatic&quot;. Let&#39;s fool the system by making all entries as &quot;D&quot;._

1. Click **&quot;** _ **frag_EC_EP.ppf** _ **&quot;** to open the _Force field editor_. Delete entries of **&quot;E0&quot;** , which are not energy parameters but the values to set relative energies, then select all entries, right-click mouse button to select &quot; **_Label as &quot;D&quot;_**&quot; command. Repeat the operation for the &quot;_Equivalence Table&quot;_. The **_Parameter_** page should look like this:

![](RackMultipart20220717-1-mu78nc_html_9b510fb3cc76f007.png)

And the _ **Equivalence Table** _ should look like this

![](RackMultipart20220717-1-mu78nc_html_3965dff7e7cceff7.png)Save the change.

1. Now we proceed to check in the force field. Select the force field from the _Project\_\_Navigator_ and click **DFFDB → Check in** command. Make sure the force field table, **_&quot;MyFF&quot;_** _,_ is selected. Enter a \_Descriptio_n for this task, and then click **OK**. A pop-up window will display the number of parameters (491 entries) will be checked in. Click **OK** to continue.
2. The parameters should be checked in successfully. To verify it, open **DFFDB Admin** page again. Make sure the force field functional is AMBER, you may need to **Refresh** the list. Select the **_&quot;MyFF&quot;_** table, we will test this force field.
3. Select **_&quot;hydroxychloroquine.msd&quot;_** in the _Project Navigator_ and use **DFFDB → Check out** command to check out parameters. Make sure the force field is selected correctly, click **OK** to execute. The parameters checked out are associated with the molecule, which can be tested by running a quick simulation.

### Tutorial C3 - Import A Force Field

In this tutorial, we will practice how to integrate an external force field into TEAMFFas a new force field table, which is another way to extend the coverage of TEAMFF. External force fields can be taken from literature or from other developers. As long as the force field functional is consistent, the imported force field can be used with other force fields in TEAMFF.

Two text file must be prepared in order to import a force field: a &quot;_.ppf&quot;_ file containing the parameters and a _&quot;.def&quot;_ file of the typing rule. DFF has tools to prepare the _&quot;.def&quot;_ and _&quot;.ppf&quot;_ interactively.

To illustrate how this works, let&#39;s use the molecule (&quot;_diethanolamine.msd&quot;_) used in previous lesson. We assume a force field is in AMBER type, and the atom types used in this force field are:

_C1 - for carbon
O1 - for oxygen
N1 - for nitrogen
HO - hydrogen bonded to oxygen
HN - hydrogen bonded to nitrogen
HC - hydrogen bonded to carbon_

Because the force field is independently stored and used, the atom types can be defined as simple as possible. As shown above, only hydrogen atoms need to be differentiated, for other atoms – carbon, oxygen and nitrogen, the atom types can be as general as the element symbols.

In the following steps, we will first see how to prepare the definition file using DFF.

#### Defining Typing Rules

1. Using **Force Field → Define Typing Rules** command to open &quot;_Atom Type Definition&quot;_ dialog. Click **New/Select** button to create a new typing file entitled _ **&quot;MyFF.def&quot;** _. Note that all typing rules must be saved in \&lt;dff root\&gt;/data/TypingScripts/ folder. A definition file, _&quot;Tutorial.def&quot;_, which is the result of this tutorial, has been saved in the directory for comparison.

_Since the typing rule is essential data, all typing rules are saved in a special folder under the DFF installation directory_ _\&lt;dff root\&gt;/data/TypingScripts/\_\_. You need to have the access right to this folder in order to save and use the typing rules you created._

2. Select the root node (_&quot; ****DefinitionTree****&quot;_) in the left panel of this dialog and select _ **C** _ as &quot;Element&quot; in the right panel. Since we will only handle one carbon atom type, there is no need to specify any additional attributes to distinguish a given carbon atom in the molecule. Enter _ **&quot;C&quot;** _ in the editable field as seen below and click **Add**. A new atom type _ **&quot;C1&quot;** _ is added into the _ **DefinitionTree** _ on the left side.

_Any symbol can be used for representing atom types. It is a good practice and useful for parameterization to name the atom types in a consistent and self-explanatory way so that the atom types can be easily recognized._

3. Repeat the above steps for adding the atom types for oxygen and nitrogen. Note that each of these atom types is distinct with no inheritance relationship (_i.e._, not subtypes of one another), so each type should be added to the base node (&quot;_ **Definition Tree** _&quot;.) The result should look like this:

4. Let&#39;s make the hydrogen atom types now. There are three different hydrogen atoms in the molecule depending on whether the hydrogen is bonded to oxygen, nitrogen, or carbon. We will need to differentiate them. First, let&#39;s define hydrogen bonded to oxygen. Click on the &quot;_ **DefinitionTree** \_\_&quot;_ node and select element _ **H** _ in the right panel. Set Connect as _ **1** _ (to indicate one bond). In the editable field, click on the new node under H marked &quot; **?**&quot;. The top section above this field will now refresh. Select element _ **O** _ to indicate the hydrogen is bonded to oxygen. Then enter _ **&quot;HO&quot;** _ as the atom type name.

5. Repeat the process for the other two hydrogen atom types. When all done, it should like this:

![](RackMultipart20220717-1-mu78nc_html_30716dd50433a199.png)

6. Click **Save** to save the definition file, which looks like this:

_!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!_

_! User atom types defination for DFF (Wed Jan 31 17:10:35 CST 2018)_

_!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!_

_Define C1_

_C_

_atom 1: coor=?_

_End_

_Define O1_

_O_

_atom 1: coor=?_

_End_

_Define N1_

_N_

_atom 1: coor=?_

_End_

_Define HO_

_H [&amp;O]_

_atom 1: coor=1_

_atom 2: coor=?_

_End_

_Define HN_

_H [&amp;N]_

_atom 1: coor=1_

_atom 2: coor=?_

_End_

_Define HC_

_H [&amp;C]_

_atom 1: coor=1_

_atom 2: coor=?_

_End_

_RelationTree:_

_(C1_

_)_

_(O1_

_)_

_(N1_

_)_

_(HO_

_)_

_(HN_

_)_

_(HC_

_)_

_End_

7. Test the new typing rule. Select _ **diethanolamine.msd** _, click **Force Field → Assign Atom** Types, and click **Choose** to select a typing rule. Browse and find the definition file you created, and click **Execute** to get the atom types assigned.

![](RackMultipart20220717-1-mu78nc_html_1b85dbb6945aed91.png)

Click **Execute** to assign atom types. Atom types should now be correctly assigned to the molecule.

#### Preparinge a PPF File

8. We will now prepare a PPF file. The PPF format is explained in Chapter 6. In this case, the file should read as follows:

_#DFF:PPF_

_#PROTOCOL = AMBER_

_#TYPINGRULE = MyFF.def_

_ATYPE: C1 : 6.00000,12.01100 : C D_

_ATYPE: HC : 1.00000, 1.00790 : C D_

_ATYPE: HN : 1.00000, 1.00790 : C D_

_ATYPE: HO : 1.00000, 1.00790 : C D_

_ATYPE: N1 : 7.00000,14.00670 : C D_

_ATYPE: O1 : 8.00000,15.99940 : C D_

_BINC: C1 , C1 : 0.00000 : C D_

_BINC: C1 , HC : 0.00150 : C D_

_BINC: C1 , N1 : 0.18840 : C D_

_BINC: C1 , O1 : 0.19890 : C D_

_BINC: HN , N1 : 0.34380 : C D_

_BINC: HO , O1 : 0.41360 : C D_

_N12_6: C1 : 3.93000, 0.06600 : C D_

_N12_6: HC : 2.72000, 0.03000 : C D_

_N12_6: HN : 2.72000, 0.03000 : C D_

_N12_6: HO : 2.72000, 0.03000 : C D_

_N12_6: N1 : 3.69300, 0.14500 : C D_

_N12_6: O1 : 3.37000, 0.17000 : C D_

_BHARM: C1, C1 : 1.50740, 257.60920 : C D_

_BHARM: C1, HC : 1.10030, 337.96220 : C D_

_BHARM: C1, N1 : 1.45050, 269.52610 : C D_

_BHARM: C1, O1 : 1.40890, 260.18510 : C D_

_BHARM: HN, N1 : 1.01940, 494.86480 : C D_

_BHARM: HO, O1 : 0.97090, 576.31990 : C D_

_AHARM: C1, C1, HC : 114.51930, 35.72660 : C D_

_AHARM: C1, C1, N1 : 112.94380, 55.26240 : C D_

_AHARM: C1, C1, O1 : 110.63270, 65.44320 : C D_

_AHARM: C1, N1, C1 : 111.58130, 93.59760 : C D_

_AHARM: C1, N1, HN : 107.62090, 48.64750 : C D_

_AHARM: C1, O1, HO : 105.31840, 56.30250 : C D_

_AHARM: HC, C1, HC : 113.08930, 37.03450 : C D_

_AHARM: HC, C1, N1 : 116.67120, 35.28640 : C D_

_AHARM: HC, C1, O1 : 113.03220, 57.01090 : C D_

_TCOSP: C1, C1, N1, C1 : 0.0, 0.40790, 3.0, 0.0, -2.92360, 1.0, 180.0, 0.78360, 2.0 : C D_

_TCOSP: C1, C1, N1, HN : 0.0, -0.11820, 3.0, 0.0, -0.82030, 1.0, 180.0, -0.71270, 2.0 : C D_

_TCOSP: C1, C1, O1, HO : 0.0, 0.15760, 3.0, 0.0, -1.08540, 1.0, 180.0, -0.51830, 2.0 : C D_

_TCOSP: C1, N1, C1, HC : 0.0, 0.39130, 3.0, 0.0, -0.74250, 1.0, 180.0, -0.15020, 2.0 : C D_

_TCOSP: HC, C1, C1, HC : 0.0, 0.10950, 3.0, 0.0, 9.90490, 1.0, 180.0, -0.98030, 2.0 : C D_

_TCOSP: HC, C1, C1, N1 : 0.0, 0.04500, 3.0, 0.0, 10.64810, 1.0, 180.0, -0.65010, 2.0 : C D_

_TCOSP: HC, C1, C1, O1 : 0.0, -0.18490, 3.0, 0.0, 9.79680, 1.0, 180.0, -1.54950, 2.0 : C D_

_TCOSP: HC, C1, N1, HN : 0.0, 0.31100, 3.0, 0.0, 0.07450, 1.0, 180.0, -0.58790, 2.0 : C D_

_TCOSP: HC, C1, O1, HO : 0.0, 0.35220, 3.0, 0.0, 0.87650, 1.0, 180.0, -0.82550, 2.0 : C D_

_TCOSP: N1, C1, C1, O1 : 0.0, 1.24760, 3.0, 0.0, 9.61000, 1.0, 180.0, -1.01000, 2.0 : C D_

_IBCOS: C1, C1, N1, HN : 180.0, 0.00000, 2.0 : C D_

The 2nd and 3rd lines indicate the force field functional and typing rules. The rest are parameters from different sections. Note that there is no equivalence table for this force field, which means the apparent atom types are the same as the atom types used in identifying parameters, which is acceptable.

Double-click to open the diethanolamine.ppf file:

![](RackMultipart20220717-1-mu78nc_html_42706e9419400a2.png)

9. Assign this force field to _ **diethanolamine.msd** _ to test if atom types are assigned correctly and parameters are complete. This can be done by selecting the model, right-clicking, selecting **Associate** , and selecting the appropriate force field:

![](RackMultipart20220717-1-mu78nc_html_47aaadb2d447f6de.png)

10. Run simulations using **Simulation → Optimization** or **Simulation → Molecular Dynamics** to verify that these parameters work properly.

11. You may create a new force field table using the _AMBER_ format and check in parameters as explained in previous lesson. This force field can be used with other _AMBER_ type force fields in TEAMFF.

### Tutorial C4 - Hypervalence Molecules

In this lesson, we learn a special treatment of coordination bonds of molecules with hypervalence. Hypervalence is common in many transition-metal complexes. Normal force field function forms are capable to describe the variation in bond angles. By using the hypervalence modifier as explained in Chapter 3, we can distinguish different bond angles using simple force field functional form.

1. In _Project Navigator_, click on the node of **&quot;TutorialB5_hypervalence&quot;** to open the folder. There are several molecules listed. Open and view these molecules on the screen, they represent typical coordination structures: octahedral (AsF6), trigonal bi-pyramidal (AsF5), T-Shape (IF3), square pyramidal (IF5), See-Saw (SF4) and square planar (XeF4).

_Note that these bonds are treated as covalent bonds. The assumption is that these bonds are stable under normal condition of simulation._

1. Select one or more of these molecules from the _Project Navigator_, then use **Force Field → New Force Field** command to initialize a force field. In the dialog, select _&quot;Type&quot;_, and choose a typing rule using _ **&quot;Default typing rule&quot;** _ or any typing scripts. Select &quot;Hyper valence modifier&quot;, which works with any typing rules. Click **&quot;OK&quot;** to go.

1. A new force field is created, although the parameters are empty, atom types and equivalence tables are prepared. Examine the atom types, you will see the atom types of ligands are appended with &#39;@&#39; or &#39;%&#39; to differentiate the equatorial and axial positions. Check the Equivalence Table, only ANGLE-S (side) terms keep the special characters.

1. Use **Parameter → Estimate Charge** and **Parameter → Estimate Charge** commands to make automatic parameters. Examine the parameters obtained, the parameters of angles terms are identified by the atom types with the special characters, the reference angles are differentiated depending the relative positions of the atoms, in terms of 180, 90, and 120 degrees, as shown in following figure.

![Shape6](RackMultipart20220717-1-mu78nc_html_2a47a6f95971dc6c.gif)

![](RackMultipart20220717-1-mu78nc_html_6c188bef9e412a3d.png)

1. Run quick MD simulations for any of these molecules to see how the structures are shown.

_Although in this tutorial we did not fit QM data, the concept is demonstrated. The QM calculation can be carried out to test if the optimized structures are as illustrated, and a rigorous force field can be obtained by fitting the QM data, which will yield reasonable structures, energies as well vibrational frequencies._

# CHAPTER 3 – CONCEPTS, METHODS AND ALGORITHMS

## 3-1. Project and Files

### Project

DFF organizes user files by project. A project consists of a project folder (directory) named &quot;_\&lt;project name\&gt;_&quot; and a project file named &quot;_\&lt;project name\&gt;.dpf_&quot;. The &quot;_\&lt;project name\&gt;_&quot; can be any string, but must be identical for both the project folder and the project file. Both the project folder and the project file must also be placed in one folder, which can be anywhere on your computer file system that you have read and write access rights.

The project is potable, which means you can copy or share a project. Make sure to bundle the project folder with the associated project file.

### Project Navigator

The file structure of an opened project is displayed on the left side of the DFF user interface using a computer tree structure. This area is called the _Project Navigator_, andis an interface between your computer files and DFF. However, files relevant to DFF are displayed. You can get into the computer file system from DFF by using one key command **Open in Explorer**.

Operations performed on files or folders in the _Project Navigator_ are applied to real files. For example, deleting a file or a folder from the _Project Navigator_ also immediately deletes it from your computer. _Be careful that files deleted in the Project Navigator will not be stored in the Recycle Bin._ New files or new folders can be added to the _Project Navigator_ from DFF*.* Since any sub-folders under the project folder are considered as a part of the project, if a folder or file is added to the project folder or its sub-folders in the operating system, it will be treated as a part of the project. The **Refresh** command searches out and lists all sub-folders and relevant files in the _Project Navigator_. Another useful function is **Sort** , which can be used to sort by file name, file type, or date. Files in the Project Navigator can be deleted, copied, moved, added, and renamed. Files in other folders on your computer can be imported into the project through DFF, which will copy the selected files to the project folder on your disk drive.

### File Types

Files used by DFF include molecular structure data (.msd), potential parameters (.ppf), validation result tables (.dft), graphic tables (.plot), quantum mechanics data (.qmd), and several types of text files. Each of these files types has a unique icon in the Project Navigator. The file types and their icons in the Project Navigator are listed as follows:

| **File Type**                                                                    | **Icon**                                                                                                                    | **Description** |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------- |
| _Project_                                                                        | ![](RackMultipart20220717-1-mu78nc_html_37bdb07f5a113c27.gif) ![](RackMultipart20220717-1-mu78nc_html_bca76025a554f874.gif) |
| The root directory of the project.                                               |
| ---                                                                              | ---                                                                                                                         | ---             |
| _Folder_                                                                         | A folder containing project data.                                                                                           |
| _Molecular Structure Data(msd)_                                                  | ![](RackMultipart20220717-1-mu78nc_html_7036d1c1d8553f10.gif)                                                               |
| A model file containing structural data.                                         |
| _Structure and Potential File (spf)_                                             | ![](RackMultipart20220717-1-mu78nc_html_eebef128a248078.gif)                                                                |
| A model file containing both molecular structural data and potential parameters. |
| _Quantum Mechanics Data (qmd)_                                                   | ![](RackMultipart20220717-1-mu78nc_html_b9cf4fc3ffb4d814.gif)                                                               |
| A quantum mechanics data file.                                                   |
| _Quantum Mechanics Data (qmd)_                                                   | ![](RackMultipart20220717-1-mu78nc_html_1b70ab9dd893cdaf.gif)                                                               |
| A quantum mechanics data file containing Hessian matrix.                         |
| _Potential Parameter File (ppf)_                                                 | ![](RackMultipart20220717-1-mu78nc_html_7cc792e4145cae96.gif)                                                               |
| A force field potential parameter file.                                          |
| _Text_                                                                           | ![](RackMultipart20220717-1-mu78nc_html_fd72e0892afea56c.gif)                                                               |
| A text file.                                                                     |
| DFF _Fit Table (dft)_                                                            | ![](RackMultipart20220717-1-mu78nc_html_81c1f02e43011681.gif)                                                               |
| A table of validation results.                                                   |

Many commands of DFF are performed on the type of selected files or folders. The commands are usually accessible by using the command menu or by right-clicking files.

## 3-2. Force Fields

A force field is a set of analytic functions that represent Born-Oppenheimer potential energy surfaces for molecules. The complete definition of a force field includes three components: functions in terms of coordinates, atom types, and parameters. The coordinates are usually redundant internal coordinates: bond lengths, bond angles, out-of-plane angles, dihedral angles, non-bonded distances, etc. The functions are generally empiric functions originated from chemical intuitions, atom types are used to distinguish atoms of the same element but in different environments, the parameters are associated with atom types and embedded in the functions. All together a force field describes how energy changes as the coordinates change.

### Force field functional

In this document, we refer a combination of functional forms as a **Force field functional**. DFF supports several common force field functionals including AMBER3,4, CHARMM[5-8](#_ENREF_5), OPLS[9-16](#_ENREF_9) CFF[17-22](#_ENREF_17), COMPASS[23-30](#_ENREF_23) and DREIDING[31](#_ENREF_31). In addition, a specially designed force field functional, TEAM[32-38](#_ENREF_32) is implemented.

In TEAM force field functional, the bond and angle terms are expressed in polynomial expansions representing anharmonicity. In addition, the bond-bond and bond-angle coupling terms are introduced. The anharmonicity, as well as the coupling terms useful for accurately describe the energy change of molecules with high constrains. In order to be compatible with popular force fields, the van der Waals (VDW) terms are modeled by Lennard-Jones-12-6 (LJ-12-6) function. However, one important feature is that the dispersion part if LJ-12-6 function is temperature dependent[35](#_ENREF_35).

The functional forms of TEAM force field functional are written as:

![](/E:/DFF7/Release7.1/UserGuide7/Algorithms/ForceField_TEAM.PNG)

Additionally, the AMBER force field functional is commonly used:

![](/E:/DFF7/Release7.1/UserGuide7/Algorithms/ForceField_AMBER.PNG)

More force field functionals are described in the [Chapter 6](#_6.1_Force_Field).

In the above functions, total energy is expressed as a summation of multiple energy terms; each of these energy terms is expressed as a function of one of the internal coordinates: bond lengths, bond angles, torsion (dihedral) angles, improper dihedral angles and nonbond atom-atom distances. In addition to internal coordinates, each energy term contains one or more adjustable parameters. Because atoms in function terms are classified by atom types that represent atoms in certain chemical environments (see next section), atom types are another part of a force field. To develop a force field requires determination of functional forms, atom types, and parameters.

### Typing Rule

Force field parameters are identified by atom types, which are alphanumerical strings representing atoms of the same element in different chemical environments. For example, a carbon atom in a benzene molecule behaves very differently from a carbon atom in an ethane molecule. To distinguish these two carbon atoms, different atom types are used. The chemical environments are characterized by the atomic attributes of element, connectivity (covalence bonds and bond orders), ring size, aromaticity, and formal charge.

Atom types are assigned using typing rules. Different typing rules assign atom types differently, so a specific set of typing rules must be associated with a force field. Three categories of typing rules are available in DFF – _Default, Extended Default,_ and _Free Defined_. The _Default_ typing rules are hard-coded in the software; they are systematic and complete cover all elements in any environments. The _Extended Default_ are made based on the default typing rules written as scripts in a file with extension &quot;.ext&quot;. _Free Defined_ typing rules are written as scripts in &quot;.def&quot; files.

### Parameters

A force field is written as a PPF file with extension of &quot;.ppf&quot;, which stands for potential parameter file. It contains two parts: an equivalence table of atom types and a table of parameters. The file format is further explained in the[Chapter 6](#_6.4_Potential_Parameter). An equivalence table is a map between assigned atom types and atom types used in the force field, for the purpose of reducing the number of parameters. Equivalence table is optional, if equivalence table is not provided, a one-to-one mapping is used. For more information about atom type definition and equivalence table usage, see the next section.

There are several ways to add a new force field to a DFF project. It can be created, imported or checked out from the DFF database. A PPF file can be associated with one or more MSD (molecular structure data) files with extension of &quot;.msd&quot;. When a force field is associated with models, DFF assigns the atom types and scans the force field for required parameters.

## 3-3. Molecular Topologies and Formal Charges

### Topologies

Atom type assignment depends on molecular topologies and formal charges. Topologies can be established based on atom-atom distances provided that atom coordinates are provided with reasonable precision. The algorithm is straightforward: for any pair of atoms, if the distance between the two atoms is shorter than a threshold value defined as 1.2 times the sum of the tabulated valence radii[39](#_ENREF_39), the atom pair is considered to be bonded. Rings are identified from valence bond networks via a complete search using a breadth-first search algorithm[40](#_ENREF_40). This algorithm finds rings, counts ring sizes, and labels atoms on rings with appropriate ring sizes. For an atom that bridges two rings (e.g., a fused ring), the smaller of the ring sizes is assigned to the atom.

Bond order, formal charge, and aromaticity are estimated based on classical valence bond theory. The algorithms are explained as follows: bond orders are initially assigned as single bonds and then recalculated. For each bond, total valence numbers (TVN) of bonded atoms are calculated. For each atom, the calculated TVN is then compared to the common valence number (CVN). If the TVN is smaller than the CVN for both atoms, the bond order of the bond between these two atoms is increased by one, and this process is repeated until the above condition fails.

### Formal Charges

With bond order and ring sizes fixed, the formal charge for an atom is calculated using the following equation:

where _N \_\_ve_ is the number of valence electrons, _N\_\_ le_ is the number of lone-pair electrons, and _N\_\_le_ is the number of bonding electrons. For each atom in a molecule, the most probable number of lone-pair electrons is estimated using the octet rule. Formal charges for atoms in a small ring (RS \&lt; 6) are distributed to similar atoms in the ring. Similarly, formal charges for atoms in resonance structures are distributed. The above algorithms work well for most common cases involving main group elements, but do not work well for the transition metals. In order to systematically and conveniently calculate formal charges, a data file named &quot;FormalCharge.dat,&quot; which can be found in the \&lt;DFF Installation Folder\&gt;/data folder, is used to specify calculation of formal charges. This table contains the critical parameters for calculating formal charges for each element as well as default formal charges for transition metal elements.

### Aromaticity

After bond orders, formal charges and ring sizes are obtained, DFF calculates the number of valence electrons and assigns aromaticity using the 4n+2 rule.

## 3-4. Atom Type Definitions

Atom types definitions impact the transferability of force fields developed based on those definitions. Atom type represents a subspace in the chemical space. The more specifically defined an atom type, the smaller the subspace it represents. The applicable scope is related to the accuracy of the parameters. Generally speaking, broader coverage implies less accurate predictions, and vice versa. Therefore, an optimal balance between applicable scope and accuracy can be adjusted by defining atom types properly.

Definition of atom types also impacts the extensibility of the force field. Traditionally, atom types are defined rather arbitrarily. Different developers may define atom types differently, and there is no global rule. This makes it very difficult to extend a force field, as adding a new atom type may jeopardize existing definitions. The most common problem is that a new atom type may conflict or overlap with existing ones, and parameters defined under previously atom type sets may be lost.

In order to make extensible and transferable force fields, atom types must be defined properly. For this purpose, a Hierarchical Atom Type (HAT) scheme is designed.[32](#_ENREF_32)

### Hierarchical Atom Type (HAT) Scheme

HAT is a two-level typing scheme consisting of a default definition and an extended definition.[32](#_ENREF_32) The default definition for an atom considers the attributes of the atom only. The extended definition contains more information by considering the attributes of its nested neighboring atoms. Figure 1 illustrates the hierarchy of this typing scheme using a nitrogen atom as an example.

![](RackMultipart20220717-1-mu78nc_html_704a49ea142dc241.png)

### Default Definition

A default definition starts with a three-character root type in which the first two characters are reserved for a given atom&#39;s element symbol. If the element symbol is a single character, it is followed by an underscore. The third character is an integer that corresponds to the coordination number or the number of chemical bonds connected to the given atom. For example, n_3 (Figure 1) represents a nitrogen atom with three chemical bonds.

From the root type, a binary tree data structure is used to classify atom types in three levels:

1.      Small ring size. If an atom is in a small ring (\&lt;6), the ring size is assigned. Therefore, an integer at the fourth character is a flag indicating the atom is in a small ring (e.g., n\_35).

2.      Formal Charge. If a formal charge is assigned to an atom, it is flagged by a sign (+ or –) followed by an integer (1 is omitted) or a character representing a fractional formal charge:

_d:Double(1/2)
t:Triple(1/3)
q:Quadruple(1/4)
p:Pentuple(1/5)
h:Hextuple (1/6)_

3.      Aromaticity. If an atom is in an aromatic ring, the reserved character &quot;a&quot; is appended.

For example, the atom type c_35+pa represents a carbon atom with three bonds in a five-member aromatic ring bearing a +1/5 formal charge.

The default definition provides the most essential information for an atom and has the following properties: (1) the definition is complete; that is, any atom in any environment has an assigned atom type; (2) each atom type is uniquely defined because only two child nodes are present at each node of the tree, and the choices are mutually exclusive; and (3) the atom types are defined inheritably, that is, each atom subtype has only one parent atom type, and each atom subtype represents a subset of the chemical space represented by the parent atom type.

The default definition is implemented in DFF and identified as &quot;Default&quot;. It is hard-coded and cannot be changed by users.

### Extended Default Definition

The extended definition starts from a default definition. The attributes of neighboring atoms are then collected, and the search for neighbors can be nested. A multi-node tree data structure is used for extended definitions because the number of attributes is sufficiently large to differentiate atom types at a given level. An extended definition is specified by a set of scripts, which can be prepared using a text editor. For example, the following script defines a given amide nitrogen with two hydrogen atoms as n_3mh2, which is extended from the default atom type n_3:

_Define n_3m2h
N [–\*] [–H] [–C[=O]]
atom 1: co=3, ar=no, rs\&gt;5, fc=0
atom 2: co=?, elem = C, Si
atom 3: co=?
atom 4: co=3
atom 5: co=1|
End_

In this example, the first line indicates the atom type name. The second line defines the topologic substructure of the atom type to be defined. The substructure is defined using element symbols and bond orders. Element symbols can be a wild card symbol (\* or ?). Bond orders are defined as single, double, partial double, triple and/or any bond order. In this example, the atom element (N) maps out the connectivity for the amide nitrogen atom, which has three single bonds: [–\*], [–H], and [–C[=O]]. Brackets indicate substructures that can be nested. From lines 3 to 7, attributes for each atom in line 2 are provided in order of appearance. The coordination number (co) must be listed, but &quot;?&quot; indicates that the coordination number is ignored. Other characters include aromaticity (ar), ring size (rs), and formal charge (fc).

The same exclusive and inheritable properties of default definitions are implemented for extended definitions. Each child node has only one parent node, and sibling nodes are exclusively defined. The software tests the following two conditions to enforce exclusive and inheritable properties: a) each atom type must represent a subset of the chemical space that its parent atom type represents, and b) the chemical spaces represented by sibling atom types must not overlap.

Extended definitions must be prepared as a definition file named **\&lt;file name\&gt;.ext**. For each extended definition for an atom type, a block of scripts as in the above example should be included. A complete description of the definition file format (.ext) is given in [Chapter 6](</C:/Users/huai/AppData/Roaming/Microsoft/Word/UserGuide71.docx#6.5%20Atom%20Type%20DEFinition%20(DEF,%20EXT)%20File%20Format>) of this document. This file must be placed in the **\&lt;DFF Installation Folder\&gt;/data** folder. DFF can help user prepare definition scripts and check if definitions satisfy the exclusive and inheritable property.

### Complet Scripting Definition

In addition, scripts can be used to prepare a set of definitions without extending the default definitions. This definition is completely flexible, it does not rely on any predefined rules, can be defined at any level of sophistication. The definition is written as scripts that uses molecular topologic information and atomic properties. The definition is particularly useful when importing a force field. The extension name for a Free Definition file is \*.def.

### Atom types of hypervalence molecules

Hypervalence means some atoms in the third and above period on the periodic table do not obey the octet rule. This is common in metal-ligand complexes and metal oxides. In classical force fields, the chemical bonds are assumed to be stable. Although the chemistry of bond breaking and formation cannot be described by normal force field, it is nevertheless significant to study the physical properties of metal-ligand complex or metal oxides.

The hypervalence structure imposes a difficulty for classic force field method. As shown in the following picture. A complex of an atom (M) bonded with a number of the same ligand atoms (L), the bond angles are different depending on the relative positions. The angles are 90, 180 degrees for T-shaped (not shown), Square-planar, Square-pyramidal and Octahedral structures, and 90, 120 and 180 degrees for the See-Saw (not shown) and Trigonal-bipyramidal structures. However, since the ligand atoms bear the same atom types, a normal bond angle function, either harmonic, cosine, or polynomial, cannot describe these bond angles as minimum energy. Special function must be introduced, which imposes a requirement for the simulation engines.

![](RackMultipart20220717-1-mu78nc_html_37c6108e9236027f.png)

In order to use common function forms of force field, an alternative solution is to modify the atom types using structural information. The modifier is a special character optionally plus a numerical index. Two special characters, &quot;@&quot; and &quot;%&quot;, are found to be sufficient for common uses. Each modifier represents a set of structural equivalent atoms. Therefore, combination of the same modifiers represents an angle near 180 or 120 degrees, combination of different modifiers represents an angle near 90 degrees, as shown by the examples below.

![](RackMultipart20220717-1-mu78nc_html_42727b69bc3513fb.png)
![](RackMultipart20220717-1-mu78nc_html_5340fb673b6fcc3b.png)
![](RackMultipart20220717-1-mu78nc_html_2e7881f6f7cf0e9a.png)
![](RackMultipart20220717-1-mu78nc_html_73661a9b651dc7f2.png)

Octahedral See-Saw Square-pyramidal T-Shaped

### Apparent and Equivalent Atom Types

An equivalence table (EQT) is used to reduce the number of atom types (and consequently the number of parameters). Apparent atom types (AATs) are mapped to equivalent atom types (EATs) to identify parameters in force field files. This mapping is done by using an equivalence table.

![](RackMultipart20220717-1-mu78nc_html_54150fc37c0a594f.gif)

Energy terms in a force field are defined as functions of coordinates of one, two, three or four atoms, with each atom represented by an atom type. Because each atom type carries environmental information for other atoms in the same energy term, the required information for each atom type depends on the number of atoms in an energy term and the position of the atom in an energy term. The more atom types used in an energy term, the less specific the atom types.; For three-atom and four-atom energy terms, the atom type definitions of the central atoms are more specific than those of the peripheral atoms.

EQTs are constructed during the process of parameterization, with more specific atom types used only when necessary. The most specific atom types are those defined for one-atom energy terms (nonbond), with two-atom (bond), three-atom (angle) and four-atom (dihedral) terms becoming less specific. The least specific atom types are those used for peripheral atoms in three-atom and four-atom energy terms.

## 3-5. TEAMFF Database

Direct Force Field Database (DFFDB) is a software that implements and manages the force fields in DFF. A force field database called TEAMFF is created using DFFDB.

### Direct Force Field Database

A relational database model is implemented to store and manage force fields and their parameters. This relational model is illustrated in the following figure:

![](RackMultipart20220717-1-mu78nc_html_7efc22b6296680a5.png)

Two types of tables are used: the force field table (FFT, upper block) and parameter tables (PPTs, lower block). A FFT lists the force fields stored in the database; its headings are identifiers (FF_1, FF_2, …), and its tuples include force field names, functional forms, typing rules, references, and flags. Each force field in FFT is linked with a PPT that lists the force field parameters. In each PPT, the headings are identifiers for parameter entries (entry_1, entry_2, …); its tuples include version number, energy terms, atom types, parameters and parameterization notes. The database is specifically designed for force field management, and is implemented in-house and operated by scripting commands.

Using a database to manage force fields provides a standardized interface to add, delete, copy, and extract parameters. Operations can be easily automated, thereby avoiding unintentional human errors. Only new entries are accepted because each entry in the database is unique, and new entries are automatically assigned to a new version number. This version number can be used as a search criterion to recall a certain range of parameters upon retrieval, and is also useful when calculations are repeated using older version parameters.

#### TEAMFF Basic

TEAMFF contains multiple force fields, each force field is a table in the database, completely defined with specific force field functional (AMBER, CHARMM, CFF, etc.), atom typing rules, and parameters. The independence of force fields in the TEAMFF database allows developments of high quality force fields without being constrained by pre-existing parameters. Multiple force fields in the same force field functional can be used together. This greatly enhances the extensibility of TEAMFF.

TEAMFF contains a set of basic force fields as listed in the table.

| **Name**       | **Type**    | **Typing Rule** | **Coverage**                            |
| -------------- | ----------- | --------------- | --------------------------------------- |
| TEAM-Basic     | TEAM        | DFF2012.def     | common organics and drug-like molecules |
| AMBER-Basic    | AMBER       |
| CHARMM-Basic   | CHARMM      |
| CFF-Basic      | CFF         |
| CFF12-Basic    | CFF(LJ12-6) |
| DREIDING-Basic | DREIDING    |

These force fields were developed _automatically_ by fitting a large set of QM data. Hundreds of small organic molecules, synthetic polymer fragments and drug-like molecules were selected as the training set. Quantum mechanics calculations were carried out at the level of B3LYP/6-31G(d,p). The calculated energies and the first and second derivatives of the energy were used to fit the force field parameters. The default equivalence table was employed to reduce the number of parameters. Atomic partial charges were derived from ESP charges. Parameterization was validated by comparing force field predicted data (_e.g._, vibrational frequencies; conformational energies; structural properties such as bond lengths, angles, dihedral angles, _etc_) to QM data. However, these parameters were not validated for specific molecules nor for condense phase properties.

The purpose of these force fields is for providing a starting point of further developments and optimizations. For example, if you find the quality of the basic force field of your choice is not optimal for a set of molecules of interest, you can check out parameters from the basic force field, optimize the parameters by using additional computational or experimental data, and save the revised parameters in a new table of TEAMFF database, and then use the customized force field together with the basic one.

#### TEAMFF General

In addition, TEAMFF contains two default force fields: TEAM-Default and AMBER-Default. Essential characteristics of these two force fields are summarized in the following table:

| **Name**      | **Type** | **Typing Rule** | **Coverage**                            |
| ------------- | -------- | --------------- | --------------------------------------- |
| TEAM-General  | TEAM     | General.ext     | common organics and drug-like molecules |
| AMBER-General | AMBER    |

These force fields are developed using the same typing rules, against same training set of molecules, and have very similar coverage. The difference from the Basic force fields is that these force fields are continually improved depending on users&#39; feedbacks and advances of research. The parameters were obtained by fitting not only QM data but also experimental data.

#### TEAMFF Special

In addition, TEAMFF contains force fields specially designed for particular applications. These are also high quality, off-shelf type of products, that will be continually improved. Some of the special force fields are:

| **Name**     | **Type** | **Typing Rule** | **Coverage**  |
| ------------ | -------- | --------------- | ------------- |
| TEAM-IonLiq  | TEAM     | IonLiq.ext      | Ionic liquids |
| TEAM-Zeolite | TEAM     | Zeolite.def     | Zeolites      |
| AMBER-IonLiq | AMBER    | IonLiq.ext      | Ionic liquids |

These force fields, like the General force fields, are developed in two force field functionals, TEAM and AMBER. Depending on the coverage scope, one or both types may be developed. The force fields can be used alone for the specific coverage, or to be used together with the General force field to provide a coverage of mixtures.

#### Usage of TEAMFF

TEAMFF can be used for two purposes. One is to use it for application, another is to use it for development.

To use TEAMFF for application is similarly to use a traditional force field. The most important advantage of TEAMFF is that it allows multiple force fields to be used seamlessly together to achieve high quality and coverage. The force fields of TEAMFF are selected and applied in an order of precedence. DFF searches for the best set of parameters for a target molecular system, combines the parameters into a unified set of parameters, creates a new set of atom types, assigns the atom types to the molecular system, and finally prepares the force field and model files for simulation.

To use TEAMFF for further development is a unique feature. One possible approach is as follows. If a force field of TEAMFF is found to be not optimal for specific applications, you can either check out the original parameters and optimized them, or develop new parameters independently, using the parameterization tools. When the optimization or parameterization is done, the new parameters can be check into a **new, customized** force field table of TEAMFF. The new force field table can be used together with other existing TEAMFF tables in the same force field functional, as explained above.

### Customized Force Field Tables

A customized force field is like other TEAMFF force fields, has its force field functional, atom typing rules and parameters. The customized force fields can be added to or removed from TEAMFF without affect other force fields. Since each force field is independent and usually focus on a small set of target molecules, to make or optimize a customized force field is relatively easier than making a general force field that covers a large set of molecules.

The combination of different force fields is based on the combination rules of nonbond parameters, which are columbic and Lennard-Jones terms. Therefore, in developing a customized force field the compatibility of Lennard-Jones and charge parameters should be considered. In principle, these parameters should be derived using the same parameterization protocol.

## 3-6. Force Field Extensibility

### Internal Extensibility of Atom Types

Because of the inheritance property of atom types, the force field made based on the HAT is internally extensible.[32](#_ENREF_32) Only when existing parameters are inaccurate or insufficient, the extensibility becomes a challenge. The simplified chart below illustrates the relationship between atom types, parameters and chemical space.

![](RackMultipart20220717-1-mu78nc_html_cf8514f2f30904b5.png)

Two levels of atom types, old (To) and new (Tn), are shown in this chart. The new atom types (child nodes) are derived from the old ones (parent nodes). Parameters Po(To), Po(Tn), Pn(To), and Pn(Tn) represent old or new parameters associated with old or new atom types, respectively. The chemical space is divided in four regions, I, II, III, and IV. In the HAD scheme, a higher level of atom-type definitions represents a broader chemical space than a lower level does. For example, Figure 2 shows that To, at a higher level, represents four regions while Tn, at the lower level, represents only regions II and III. Note that force field parameters associated with atom types are not necessarily complete. We assume that the old parameters with old atom types Po(To) cover regions I, II, and III, but not region IV. We further assume that region I is the training set used to develop Po(To) so that region I is covered accurately; regions II and III are thus covered based on the transferability of parameters. Given that atom types are completely defined, one of the following two scenarios may sometimes occur:

1. One of the scenarios is represented by region IV. In this case, parameters are insufficient to cover this region in a chemical space represented by the old atom types (To). Thus, new parameters must be derived, and this derivation can be performed by selecting a training set from region IV. This procedure is relatively easy because the same atom types are used and the new parameters do not affect the coverage of other regions.

2. The other scenario is represented by regions II and III. In this situation, the parameters Po(To) are sufficient but not accurate. New atom types (Tn) must be introduced and new parameters based on the new atom types Pn(Tn) must be developed. As the force field parameters associated with the new atom types are not necessarily complete, we assume region II is covered by the new parameters but region III is not. Consequently, region III is not covered by any parameters because the new atom types (Tn) replaced the old atom types (To) that represented this region. This phenomenon is a common failure when a force field is extended: coverage is reduced as new atom types are introduced. However, this problem can be solved naturally by using the HAD method. Because new atom types (Tn) are derived from old atom types (To), we can copy old parameters associated with old atom types to new parameters associated with the new atom types for region III, as denoted by Po(Tn). Thus, region III retains coverage by the old parameters while gaining coverage under the new atom types.

Force field transferability is implemented during the parameterization process. Old parameters are often transferred and fixed as new parameters are derived because molecules share common chemical subunits. In other words, new parameters are derived within the constraints of old parameters. This process itself ascertains that old parameters are transferable, and that new parameters work consistently with the old parameters.

### External Extensibility using DFFDB

The DFFDB technology can be used to integrate different force fields. Each force field in the database is modularized: functional forms, typing rules and parameters, which are inseparable parts of a force field, are bundled together in the database. Because of this modularization, each force field is independent and can be developed or imported separately.

When importing force fields, functional forms and parameters can be loaded using text files according to the format specified in [Chapter 6](#_CHAPTER_6_%E2%80%93). The atom typing rules can be implemented using the script language. A definition file with the extension \*.def is a complete definition, while a definition file with the extension \*.ext is an extension of existing definitions. The format of these definition files is given in Chapter 6.

Parameters from different force fields with the same functional forms can be used together under the combination rule for nonbond interactions. This makes the force fields externally extensible, allowing the user to further expand the coverage of a general force field. For example, one may use AMBER or CHARMM for proteins alongside a newly developed force field for small drug molecules.

## 3-7. Overview of Parameterization

### Force field functional and Atom Tying Rules

To develop a force field, the first task is to choose a force field functional and a set of typing rules. This is usually decided based on intended applications and availability of simulation software. The following force field functionals are supported by different simulation engines.

| AMBER    | LAMMPS, _GROMACS_ |
| -------- | ----------------- |
| CHARMM   | LAMMPS, _GROMACS_ |
| DREIDING | LAMMPS            |
| TEAM     | LAMMPS            |
| CFF      | LAMMPS            |

Because the atom typing rules determine the transferability and accuracy of a force field, selection of a set of typing rules is a key factor in force field development. Typing rules can be set either using the programmed _Default_ typing rules or by preparing a script file of typing rules. The _Default_ typing rules are modestly fine defined, suitable for most needs, when the definition of atom types is not fine enough, indicated by parameters are not transferrable, new atom types should be introduced.

### Training Set and Data

Force field works on assumption of energy additivity. Therefore, fragments of a molecule are used to parameterize force fields. The fragment molecules must satisfy two criterions: a) contain all required energy terms, and b) as small as possible to avoid unnecessary correlations and computational expenses. An algorithm is developed and implemented in DFF to automatically find all fragments according to the energy terms required. Given the force field functional and atom typing rules determined, the required energy terms are fixed for a set of target molecules. From the energy terms, the target molecules are scanned to find the minimum fragments. The fragments are cut from the target molecules and saturated by adding hydrogen atoms. The obtained fragments are filtered to remove redundant ones. If the typing rules are changed, the fragmentation process needs to be repeated, the new fragments need to be added to the training set.

Given the training set, next task is to generate data for developing force field. Quantum mechanics calculations are powerful to produce large amount of information in terms of energy, energy derivatives, electrostatic potentials and electron densities, atomic partial charges, etc., which can be used to derive force field parameters. However, how to sample the molecular conformations is a critical issue. Only with sufficient sampling the conformational spaces, the force field derived can be expected to represent the conformers well.

Using the small fragments implies that long-range (nonbond) interactions are to be considered separately. In addition, the nonbond interactions cannot be represented well in QM calculations. Even with the electron correlations are considered, the polarization and multibody effects are very difficult to be captured by using QM calculations. A common practice is to use experimental data of molecular liquids to optimize the nonbond interaction parameters. Therefore, another training set of liquid molecules, which often overlaps with the training set of fragments, is required. The experimental data usually includes equilibrium data such as liquid density at given temperature and pressure, heat of vaporization energy, vapor-liquid-equilibrium curve, as well as dynamic data such as diffusion coefficients and viscosity.

### Parameterization Methods

A common method of parameterization is to empirically fit a set of observable properties in a trial-and-error manner. Because the number of adjustable parameters is usually small, a common problem in the empirical method is _under fit_, the parameters work well for the targeted properties, but fail to predict properties outside of the scope. The solution is try to fit as many properties as possible so that the parameters are likely to be transferrable. This method has been used for developing general force fields for common small molecules,[41-44](#_ENREF_41) and it is still very useful for deriving nonbond parameters9,10,16,23. However, for general parameterization purposes, it is practically infeasible.

To fit hundreds or even thousands parameters is possible by using QM calculations to generate large number of data.17-23,43,45 In one sense, the &quot;observable&quot; properties such as bond lengths, angles and vibrational frequencies, can be obtained by QM calculations. A fundamental approach is to fit the potential energy surfaces in terms of energies, the first and second derivatives of energies of different configurations or conformations. By adjusting the parameters to fit the potential energy surfaces, the resulting force field can be used to predict the &quot;observable&quot; properties and the parameters are naturally transferrable.

However, to fit the potential energy surfaces is a difficult task. One cause is the empirical functions used in force field, are often inadequate to accurately describe the complex energy surfaces; another problem is incomplete sampling of the potential energy surfaces, which results in a very small region; the third reason is that the number of parameters may be too many due to use of redundant internal coordinates, therefore, over-fit could be a problem.

### Systematic Procedure

Force field parameters can be divided into three general parts: charge parameters (electrostatics), valence bond parameters, and van der Waals (VDW) parameters. The combination of electrostatics and VDW terms are also called non-valence or non-bond energies because they described interactions between atoms that are not directly bonded. Because all three parts are coupled, it difficult to fit them simultaneously. A practical method is to fit these three parts iteratively until all parameters converge, as illustrated in the following chart:

![](RackMultipart20220717-1-mu78nc_html_c10edc5aedebf5d2.png)

As shown in the figure, charge and valence terms are derived based on QM data, and VDW parameters are derived from experimental data. Data is calculated or obtained for a set of molecules called the training set. In the following sections, we will explain how to collect a training set, prepare QM and experimental data, and make initial parameters, as well as how to derive charge, valence and VDW parameters.

## 3-8. Automatic Parameters

DFF has the functionality to make automatic parameters for two purposes: to provide initial parameters for fitting and/or to provide default parameters used to approximated force fields. Similar to the methods used in _UFF_ force fields[46](#_ENREF_46), automatic parameters are calculated based on a set of base parameters specified for default atom types. Force field parameters for bond stretches, bond angle and torsion angle distortions, out-of-plane angle distortions, and VDW parameters are calculated based on a set of rules.

Base parameters are stored in the file _AtomType.dat_, which is located in the _Data_ directory. You can modify parameters through the user interface or by directly editing the data files.

Bond Stretch

Two variables - reference bond length and force constant - are calculated:

                        ![](/E:/DFF7/Release7.1/UserGuide7/Algorithms/GuessBondPar.PNG)

where _r \_\_i_ is the bond radii of atom i and _Z\*\_\_ i_ is the effective charge of atom _i_. Both are basic atomic parameters.

Bond Angle Distortion (i-j-k)

Three variables are calculated: reference equilibrium angle, force constant and multiplicity of energy minima. The force constants are:

                        ![](/E:/DFF7/Release7.1/UserGuide7/Algorithms/GuessAnglePar.PNG)

where

                           ![](/E:/DFF7/Release7.1/UserGuide7/Algorithms/GuessAnglePar2.PNG)

The multiplicity n and the reference equilibrium angle are fixed depending on the preferred geometry of the central atom type j:

| Pref. Geom. | n   | ![](/E:/DFF7/Release7.1/UserGuide7/Algorithms/Images/2-6.ht6.gif) |
| ----------- | --- | ----------------------------------------------------------------- |
| SQUARE      | 2   | 90, 180                                                           |
| SQPYRAMIDAL | 2   | 90, 180                                                           |
| BIPYRAMIDAL | 6   | 90, 120, 180                                                      |
| OCTAHEDRAL  | 2   | 90, 180                                                           |
| OTHERS      | 1   | various                                                           |

Dihedral Angle Torsion (i-j-k-l)

Three variables are calculated: reference torsion angle, energy barrier height and multiplicity of energy minima. The torsion energy barrier height is derived by:

                        ![](/E:/DFF7/Release7.1/UserGuide7/Algorithms/GuessTorsPar.PNG)

where ![](/E:/DFF7/Release7.1/UserGuide7/Algorithms/Images/torsion2.gif), ![](/E:/DFF7/Release7.1/UserGuide7/Algorithms/Images/torsion3.gif) are intrinsic torsion barrier parameters for atoms j and k and ![](/E:/DFF7/Release7.1/UserGuide7/Algorithms/Images/torsion4.gif)is the total number of torsion angles about bond (j-k).

The multiplicity n and the reference torsion angle are determined by the preferred geometries of center atoms j and k:

| J           | k           | n   | phi0  |
| ----------- | ----------- | --- | ----- |
| TETRAHEDRAL | TETRAHEDRAL | 3   | 180.0 |
| TETRAHEDRAL | PYRAMIDAL   | 6   | 0.0   |
| TETRAHEDRAL | PLANAR      | 6   | 0.0   |
| TETRAHEDRAL | BENT        | 3   | 180.0 |
| PYRAMIDAL   | PYRAMIDAL   | 6   | 180.0 |
| PYRAMIDAL   | PLANAR      | 6   | 180.0 |
| PYRAMIDAL   | BENT        | 6   | 180.0 |
| PLANAR      | PLANAR      | 2   | 0.0   |
| PLANAR      | BENT        | 6   | 0.0   |
| BENT        | BENT        | 3   | 180.0 |

Out-of-Plane Distortion (i-j-k-l, where j is the central atom)

Out-of-Plane distortion is defined only when the preferred geometry of atom j is PYRAMIDAL or PLANAR. The reference angle is always 0.0, and force constant is 5.0 or 0.0, respectively.

VDW Interactions

Two parameters are provided: the VDW well depth and diameters in terms of the Lennard-Jones 12-6 function:

              ![](/E:/DFF7/Release7.1/UserGuide7/Algorithms/Images/VDWInteractions1.gif)

               ![](/E:/DFF7/Release7.1/UserGuide7/Algorithms/Images/VDWInteractions2.gif)

Both ![](/E:/DFF7/Release7.1/UserGuide7/Algorithms/Images/VDWInteractions3.gif)and ![](/E:/DFF7/Release7.1/UserGuide7/Algorithms/Images/VDWInteractions4.gif) are basic atomic parameters.

Atomic charge parameters are estimated using charges calculated with the QEQ[47](#_ENREF_47) method.

## 3-9. Quantum Mechanics Data

The importance of preparing quality quantum mechanics data (QMD) cannot be overstated. Generally speaking, if the fit itself is successful - which can be verified by checking the fit merits (squares of displacements, variances of parameters) - the quality of resulting force field is mostly determined by the quality of the underlying data. It is therefore very important to provide complete, quality data in order to develop a successful force field.

### Sampling Conformational Energy Space

To derive force field parameters for a molecule using QM method, at least one optimized structure must be provided, and the calculations should include total energy, gradients, the Hessian matrix (the second derivatives of energy), and atomic charges.

Different structures of a molecule in addition to the minimum energy structure can be included to sample potential energy surfaces. In most cases, the interested structures are conformational isomers, which can be generated by rotating bonds measured by dihedral angles. Although structures generated by distorting bond lengths and angles could also be included, it is not necessary in force field development because the anharmonic behavior is not significant under conditions of classic simulations. Many force field functionals do not support the anharmonic terms. Even for force field functional such as CFF that includes the anharmonic terms, those terms can be well estimated from the harmonic term (see TEAM type). Therefore, the distortion sampling usually does not include bond lengths and angles.

The conformers can be calculated by rigid or relaxed samplings. In rigid sampling the correlations among different internal coordinates are ignored, the dihedral angles are changed while all other internal coordinates are fixed to their equilibrium values. In relaxed sampling, the correlations are taken into consideration, for a set of dihedral angles specified, all other internal coordinates are relaxed. Although more computational resources are required in the relaxed sampling, the obtained potential energies are near minimum energy states, the force field parameters obtained by fitting the potential energies are more reliable.

To sample the conformational space efficiently is not trivial for a molecule with multiple rotatable bonds. A systematical scan of entire surface quickly becomes unmanageable. For example, for a molecule with 3 rotatable bonds, if each rotation needs to calculate 10 points in corresponding dihedral angle, a total of 1000 minimizations are required. One may use the random sampling to pick up certain number of points and then find the local minima by energy minimization. Another approach, called orthogonal sampling, may find not only the minimal energy points, but also the saddle points. In the orthogonal sampling, the rotatable bonds are _scanned one after another, not simultaneously_, _from identified minimum energy points._ Although the conformational space is not completely sampled, the data points will likely cover the important lower energy regions. As illustrated by the following figure of a 2-D energy surface. Starting from a minimum energy point M0, varying φ1 reaches minimum energy point M1 and varying φ2 reaches another minimum energy point M&#39;1 (solid lines). Moreover, varying either φ1 from M&#39;1 or φ2 from M1 both reaches M2 (dash lines). By doing so, the local minima and vicinity of saddle points are scanned, but not the high-energy region (H).

![](RackMultipart20220717-1-mu78nc_html_517f22efc3c60c63.png)

### Sampling Intermolecualr Energy Curve

The QM method can be used to probe intermolecular interactions by calculating structures and energies of molecular dimers. DFF supports this type of calculation and provides a method to generate dimer structures automatically. However, it must be noted that using _QM_ methods to characterize weak VDW interactions is a challenging task. Even if calculations can be performed accurately with high levels of correlation and a complete basis set, results still represent interactions between two molecules in a vacuum. To get accurate van der Waals parameters for molecules in condensed phases, condensed phase properties must be used to optimize the force field.

### QMD File

QMcalculations can be done by using any quantum mechanics software package. In order to support different software packages, a standardized file format was designed for storage of QM data. This file format is the QMD file format (more details in **Chapter 6** ) and uses the extension \*.qmd. QMD files are written in simple text file format, and is the only interface between QM calculations and DFF software. DFF can also convert output files generated by _Gaussian_ to QMD files.

Each QMD file corresponds to one molecule, must contain one optimized structure, and may or may not contain conformational isomers. The optimized structure, contains essential data: energy, first and second derivatives of energy, atomic charges (Mulliken or ESP), and electrostatic multiple moments. Conformational isomers, if included, do not require second derivatives. Calculation protocols, methods and basis sets are embedded in the QMD file. The QMD file also contains molecular topology information (connectivity, formal charges, atom types, etc.) which are not required for input, but are generated and used by DFF for parameterization.

There are no particular requirements on the QM methods (HF, DFT, MP2, etc.) and the basis sets used in calculations. Since the ultimate criterion is agreement with experimental data, any QM method that can produce good agreement with experimental data can be used to generate QMD. The DFT method with B3LYP functionality and a modest 6-31G(d) basis set is adequate for describing structural and energetic properties of most organic molecules,[48](#_ENREF_48) and is used as the default QM calculation protocol in DFF.

Before QMD data is used for parameterization, it is a good practice to check data validity. Usually this can be done by comparing relative energies of different structural isomers in a QMD file. The lowest relative energy should correspond to the global minimum with a Hessian matrix calculated. Relative energies should not be too large, and charge parameters should be present in the data set.

## 3-10. Fit QM Data

### Methods

Atomic charges must be calculated and assigned first. Atomic charges can be calculated using _QM_ methods (ESP charges or Mulliken Charges) or using the charge equilibrium method. _Direct Force Field_ uses a charge equilibrium method similar to the published QEq method. The basic parameters used to calculate charge distribution are the ionization potentials (IP) and electron affinities (EA) of relevant atoms, which are collected from literature and included in the _Elements.dat_ file.

Charge parameters are derived from QM atomic charges by solving a set of linear equations. Suppose a set of atomic charges are given in a vector Q for M atoms:

. (1)

The charge parameters can then be calculated by:

, (2)

where P is the charge parameter vector in N order:

(3)

and A is an assignment matrix:

(4)

for each atom i and nearest neighbor j:

, (5)

and where all of the other elements are zero. Assignment matrix elements are determined using ATC and BIC parameters as expressed in Eq. (1).

In general, the number of atoms (M) is greater than the number of charge parameters (N). Therefore, Eq. (3) does not have a precise solution. The singular value decomposition (SVD) method[49](#_ENREF_49) is used to find the best solution as determined by the least-squares approach.

#### Nonlinear Terms

The Levenberg-Marquardt method[49](#_ENREF_49) with constrained minimization technique is used to fit QMD in order to derive valence terms. At this stage, charge and VDW parameters are frozen, as charge parameters should have already been derived from QMD, while VDW parameters are initialized using a set of default parameters provided by DFF.

The least squares problem is written as:

               (6)

The first term is the normal least squares expression of input data and parameter-dependent calculated data. The weighting factor σi differs for different data and can be related to the Boltzmann factor for energy data. The second term is a penalty term in which parameters are restrained to preferred values. The penalty factor _P\_\_j_ is an adjustable factor that controls the constraints. The above equation is reduced to the normal least-squares equation by setting all penalty factors to zero.

#### Linear Terms

In addition, the SVD method[49](#_ENREF_49) is used to reduce redundant problems for linear terms. By limiting variables to linear terms only, the least-squares equation is reduced to a linear equation:

               (7)

If some parameters are linear combinations of others, matrix A is singular or numerically very close to singular, and the SVD method is suitable for solving this problem.

### Charge Parameters

A common way to derive charge parameters from _QM_ data is to convert _QM_ atomic partial charges to charge parameters. Atomic partial charges are calculated from QM wave functions. ESP charges are obtained by fitting to electrostatic potentials, and are thus dependent on how the fit was conducted. ESP charges for atoms in a bulky molecule are typically difficult to obtain as they may be insufficiently sampled. On the other hand, atomic partial charges determined using population analyses such as the Mulliken method are stable. Both types of atomic partial charges have been used in force field development.

There are three types of charge parameters: atom based, atom-type based and bond-type based. Atom based charge parameters are identified by atom names (usually element symbol plus sequence number) assigned by the program. Atom-type based parameters are defined by atom types. Each atom type has a charge parameter, and all atoms that have the same atom type share one parameter. The bond-type based parameter is also called bond charge increment, which is specified by atom types of two bonded atoms (δt(i),at(j)). This parameter represents charge relocation from atom j to atom i. For example, if δat(i),at(j) = 0.5, that means atom i gains 0.5 electron, and atom j loses 0.5 electron. For any atom i, the net charge is a sum of all relevant bond charge increments.

(8)

Atom based charge parameters are difficult to transfer; bond-type based charge parameters reflect the interactions of nearest neighbors and ensure charge neutrality of the entire molecule; and atom-type based charges provides the flexibility to assign net charges. DFF uses atom-type and bond-type based charge parameters in developed force fields. This scheme is flexible to represent any molecules, ionic or non-ionic.

### Valence Parameters

Valence parameters are the largest component of a force field, making up a majority of all parameters. For a force field with N atom types, the number of valence parameters are on the order of O(N2), O(N3) and O(N4) for bond, angle and dihedral angle terms respectively. Although using equivalence tables can reduce the number of atom types and parameters effectively, the number of valence parameters remains very large.

Therefore, optimization of these parameters to fit QM data is a high-dimension optimization problem. In principle, optimization can be achieved using the least-square approach, but in practice it is usually a very difficult task. The fit can be both over-determined (more parameters than data) for some properties and under-determined (more data than parameters) for others. In addition, the correlations and dependencies among parameters make the problem worse.

DFF has been designed to solve these problems using various techniques. An expert system that examines the data, decides an appropriate fitting procedure, monitors the fitting process and adjusts fitting options has been implemented to guide the automated parameterization process.

It may be necessary to adjust the fitting options or initial parameters in order to get a better fit for very complicated systems. Adding controls to the initial parameters is usually very helpful, especially when data is limited. For example, freezing some parameters to reduce the number of adjustable parameters is usually an effective approach to improving fit quality.

### Molecular Dimers

DFF can determine nonbond parameters by fitting molecular dimers in which inter-molecular interactions are represented by VDW and electrostatic terms only. To fit VDW parameters, a number of configurations of the dimer should be generated and calculated with relatively high-level QM calculations (MP2 with sufficiently large basis set). DFF automatically freezes other parameters and fits potential energies of dimers in different configurations using the Levenberg-Marquardt method[49](#_ENREF_49).

It should be noted that this approach might not work well for predicting physical properties of molecules in condensed phases. Although in principle the VDW parameters can be derived by fitting to _QM_ data calculated for molecular dimers, this approach has the following limitations. a) it is very difficult to accurately describe weak VDW interactions using _QM_ method, high level of theory and an extensive basis set must be used. b) the dimer is too small to represent molecular interactions in condensed phases. The result energetic data only represents molecular interactions in gas phase, which in many cases can be significantly different from those found in the condensed phases.

### Specific Properties

Fitting a few specific properties is an alternative way to optimize a force field. This method is useful when the number of adjustable parameters is small such as in the situation a force field is extended to cover new molecules while most parameters are transferred and fixed.

The least-square Levenberg-Marquardt method requires the first derivatives of the merit function with respect to the adjustable parameters. For a given property A, it is:

The property A may or may not be an analytical function of the parameters. Therefore, a numerical differentiation can be calculated, using e.g.a two-point formula:

In this formula, the first-order errors cancel so the slope of the secant lines differs from the slope of the tangent line by an amount that is approximately proportional to δa*2*.

With the first derivatives, fitting can be automated. This method can be used to optimize parameters of a force field for any properties that can be calculated using the force field. However, the computational expenses can be very high. A critical step in employing this method is to select a few, most-sensitive parameters. For some properties (_e.g._ conformational energy profiles and structural parameters), the most sensitive parameters are usually obvious: the parameters of the dihedral angle, bond length and bond angle. DFF has the functionality to fit structures (bond lengths and angles) and conformational energy profiles using the numerical derivative method.

For example, torsion profiles are calculated for selected internal rotations using constrained minimizations in which scanned dihedral angles are fixed at certain values while other degrees of freedom are relaxed. QM calculated values are compared with force field calculated ones, and then a least-squares problem is solved to optimize the relevant torsion parameters. The following figure shows the internal rotation energy profiles for diethyl ether (C–C–O–C). The force field results (dots) are in excellent agreement with DFT data (curve).

![](RackMultipart20220717-1-mu78nc_html_d4d8b72320cce6e4.gif)

## 3-11. Fit Properties of Liquid

DFF can be used to optimize VDW parameters automatically. This is done by combining a molecular dynamics simulation with a least-squares fit procedure.

### Perturbation Theory

The statistic mechanical perturbation theory is used to enable the automation.36,38,50 Assume a small change to the adjustable parameters:

                               (1)

The resultant change to the potential energy can be regarded as a perturbation:

                                                                                 (2)

Based on the perturbation theory, the configuration integral of canonical ensemble consisting of N particles can be written as:

(3)

where the brackets indicate unperturbed (reference state) ensemble average. For any physical property A, we have:

(4)

For example, the internal energy and pressure of ensemble average are given by:

(5)

(6)

The above equations indicate that the change in potential energy and pressure with the perturbation can be estimated by averaging the perturbation energy and virial in the reference state obtained by NVT simulation. The derivatives of an ensemble averaged property \&lt;A\&gt; (energy or pressure) with respect to the parameter _a\_\_k_ is then:

(7)

If the quantity can be analytically evaluated, such as the pressure and internal energy in canonic ensemble, the derivative can be obtained in one simulation. Subsequently, the parameters can be optimized by the least-square method automatically. Notice that in the fluctuation framework[51](#_ENREF_51), similar requirement is needed.

In order to obtain transferable parameters, several molecules containing the same atom types should be parameterized simultaneously. For example, the following table shows molecular liquids that can be used to parameterize non-valence parameters for alkanes:

| **Model**              | **T** | **HOV** | **Den** |
| ---------------------- | ----- | ------- | ------- |
| cyclohexane            | 293.2 | 8.0     | 0.779   |
| 2_2_4_trimethylpentane | 303.2 | 8.4     | 0.684   |
| isopentane             | 293.2 | 6.0     | 0.620   |
| ethane                 | 184.5 | 3.5     | 0.546   |
| propane                | 231.1 | 4.5     | 0.581   |
| 2_2_dimethylhexane     | 303.2 | 8.9     | 0.687   |
| 2_5_dimethylhexane     | 303.2 | 8.9     | 0.685   |
| pentane                | 293.2 | 6.4     | 0.626   |
| 2_methylheptane        | 303.2 | 9.5     | 0.690   |
| butane                 | 298.2 | 5.3     | 0.573   |
| octane                 | 298.2 | 10.2    | 0.699   |
| methane                | 111.1 | 2.0     | 0.424   |

The table lists temperature, heat of vaporization and equilibrium density of the relevant molecular liquids.

The uncertainty in ensemble average has a direct impact to the fitting quality. Large uncertainties associated with short simulation time lead to oscillation in the fitting parameters. In such situations, extending the simulation time is necessary.

For polar molecules with relatively large atomic partial charges, the electrostatic terms dominate the nonbond interactions. If the VDW parameters cannot be optimized to fit empirical data, the atomic charges may not be appropriate, even if the charges are derived by fitting _QM_ electrostatic potentials. The reason is that the separation of electrostatic and VDW parameters is for convenience but not scientifically solid. As in principle, all intermolecular interactions are electrostatic in nature. Comparing the charge values with those in successful force fields might be helpful. If necessary, consider using restraints in the ESP fit and re-parameterizing the charge parameters.

Similarly, if the valence parameters are incorrect, it could be very difficult to optimize the VDW parameters. Even if a fit seems to be successful, the VDW parameters might not be physically meaningful. Careful examination of the intramolecular properties such as bond lengths, angles and dihedral angles is a key to solve this problem.

### Temperature Dependent Parameters

Strictly speaking, force field is not potential energy function because of the empirical (non-polarizable) functions deployed. The nonbond interaction is found to be dependent on temperature because of the polarization effects.[35](#_ENREF_35) One solution is to scale the dispersion coefficient using the following form of [Lennard-Jones (LJ-12-6) function](<#_1._Lennard-Jones_(12-6)>)

(8)

(9)

where the scaling factor is temperature dependent, which can be written as a linear function,

. (10)

The reference temperature is conveniently fixed at 298 K.

Using the expression of [Lennard-Jones (LJ-12-6) function](<#_1._Lennard-Jones_(12-6)>) used in DFF, the well-depth and radius parameters are expressed as:

(11)

(12)

It is found that the scaling factor is rather generic, it takes only two values depending on the hybridization state of the atom type:

| Atom type | (/K)    | Description                 |
| --------- | ------- | --------------------------- |
| c_3a      | 5.0E-05 | C, aromatic                 |
| ---       | ---     | ---                         |
| c_3ac     | 5.0E-05 | C, aromatic, bond to C      |
| c_3aco    | 5.0E-05 | C, aromatic, with carbonyl  |
| c_3o      | 5.0E-05 | C, sp2, in ketone           |
| c_3oh     | 5.0E-05 | C, sp2, in aldehyde         |
| c_3oh2    | 5.0E-05 | C, sp2, in formaldehyde     |
| c_4       | 1.4E-04 | C, sp3                      |
| c_4h      | 1.4E-04 | C, sp3, with 1 H            |
| c_4h2     | 1.4E-04 | C, sp3, with 2 H            |
| c_4h3     | 1.4E-04 | C, sp3, with 3 H            |
| c_4o2     | 1.4E-04 | C, sp3, bond to 2 O         |
| c_4oh2    | 1.4E-04 | C, sp3, bond to O, with 2 H |
| c_4oh3    | 1.4E-04 | C, sp3, bond to O, with 3 H |
| h_1       | 1.4E-04 | H                           |
| o_1       | 5.0E-05 | O, sp2, in carbonyl         |
| o_2       | 1.4E-04 | O, sp3, in ether            |

The scaling factors are specified by a global parameter file: \_\&lt;dff root\&gt;/data TemperatureFactor.dat,\_which subject to further optimizations.

## 3-12. Simulations

A general procedure of using a force field made by DFF is as follows.

### Assigning a Force Field

Prepare or import a simulation model. DFF can be used to build 3-dimensional cubic liquid boxes and liquid interfaces, but this functionality is intended primarily for parameterizations and validations. For complex molecular systems, an external software package can be used to build the simulation models. DFF reads most popular file formats such as .pdb, .mol2, and .car files.

It is important to have a consistent assignment of topologies and formal charges in order to assign atom types. If the coordinates of atoms are given with reasonable precision, DFF can automatically assign topologies and formal charges. This method works well for common organic molecules.

With topologies and formal charges assigned, the next step is to assign atom types and force field parameters using DFFDB. Multiple force fields in the same force field functional can be used together. However, the multiple force fields are called in the order as specified. It is important to know that all valence parameters for one molecule must be taken from one force field, which means that there is no mixing of intra-molecular parameters from different force fields, only the inter-molecular parameters (the nonbond parameters) may be taken from different force field and used by the combinational rule. In operation, DFF scan all molecules again the selected force field, if any parameters are missing for a molecule in the force field, the molecule is not assigned and passed to the next force field assignment.

When all parameters are found, the atom types and parameters, which may be taken from different force field tables, are unified to one force field for the simulation model. A new set of atom types which corresponds to the unified force field table, is made automatically. The atom types are assigned to the simulation model. The model and the force field table can be used directly in simulations.

If any parameters are missing, DFFDB will report the missing terms, which then need to be parameterized.

### Internal Simulation Engines

DFF contains a built-in simulation engine that can be used to optimize and validate parameters. Simulation jobs can be run interactively so that structures and energies are dynamically updated on the screen.

Two different algorithms, the conjugate gradient and variable metric methods, are implemented in DFF for energy minimization. The conjugate gradient method is based on the Polak-Ribiere method, which is similar to the Fletcher-Reeve method. The variable metric method is also called the quasi-Newton method. Both methods involve calculating the derivatives of the potential energy. Both methods are iterative and make use of the previous history of minimization steps as well as the current gradient to determine the next step. For a quadratic functional form in N dimensions, these methods lead to the exact minimum in N steps. The two algorithms have computer memory different requirements. The conjugate gradient needs to store intermediate data on the order of N, while the variable metric method requires storage on the order of N x N.

Restrained energy minimization can be performed to explore energy profiles. This is done by adding energy terms to the total energy function on selected internal coordinates. The restraint function is a harmonic function in which reference values and force constants can be specified. The restraint energy value is subtracted from the total energy in reported results.

The velocity verlet algorithm is implemented in DFF. The choice of integration step size is important. One must weigh the increased accuracy of using a small step size against the greater length of simulated real time per given execution time when using a larger step size. In most molecular systems, the highest vibrational frequency is that of X-H bond stretching, whose period is approximately 10-14 s. The integration time step should therefore be approximately 1 femtosecond (fs).

A dynamic run consists of three parts: initialization, equilibration, and simulation. Initialization provides an initial position and velocity for all atoms. This step can be skipped for a continuous simulation. Equilibration is used to attains the most probable configuration for a system consistent with a given target temperature and pressure. When equilibrium has been achieved, the average properties of the system (temperature, potential energies and kinetic energies) must be constant. After equilibration, a simulation can be conducted and collected data can be analyzed.

The available simulation types are:

_NVE (micro-canonical) Simulation._ This ensemble is obtained by solving Newton&#39;s equation without temperature or pressure controls. Excepting rounding and truncation errors during the integration process, energy is conserved..

_NVT (canonical) Simulation._ This ensemble is obtained by controlling temperature either through direct temperature scaling or via temperature-bath. The volume is kept constant throughout the run.

_NPT (isothermal-isobaric) Simulation._ This ensemble (NPT) allows control over both temperature and pressure. Unit cell vectors are allowed to change, and pressure is adjusted by adjusting volume. This is the ensemble of choice when correct pressure, volume, and densities are important in the simulation. This ensemble can also be used during equilibration to achieve the desired temperature and pressure before changing to a constant-volume or constant-energy ensemble when data collection starts.

Temperature can be modularized using two methods:

_Direct Velocity Scaling_. Temperature can be modified by scaling atom velocities so that the target temperature can is exactly matched. Velocities of all atoms are scaled uniformly. This is controlled by a quantity called a temperature window. When instantaneous temperature is outside of the window, scaling takes place.

_Andersen Stochastic Method_. At intervals proportional to _N\_\_2/3_, where _N_ is the number of atoms in the system, the velocity of each atom is set from the Maxwell-Boltzmann distribution. This corresponds to a collision with an imaginary heat-bath. The system moves through phase space on a constant energy surface until the velocities are changed. Between these &quot;massive stochastic collisions,&quot; time correlation functions may be calculated as usual.

Pressure is calculated using the virial theorem. Pressure changes can be accomplished by changing particle coordinates and unit cell size in the periodic boundary conditions. Berendsen&#39;s method couples the system to a pressure &quot;bath&quot; to maintain a target pressure. At each step, the _x_, _y_, and _z_ coordinates of each atom and the cell edges are scaled by a scaling factor. Strength of the coupling is determined by normalized compressibility of the system (user-defined variable). Note that this method changes the cell uniformly so that the size but not the shape of the cell is changed.

DFF uses period boundary conditions in simulating of molecules in condensed phases. A minimum-image model is used. Atom-based or charge-group-based cutoffs can be used in evaluating nonbond interactions. Both methods can be supplemented with cutoff tail corrections. The charge-group based cutoff scheme works very well for organic molecules in which small neutral charge-groups can be defined. As illustrated in the following table, this method yields essentially same results as those obtained using Ewald summation with greatly reduced computational times:

| **system**      | **cutoff**   | **energy**   | **density** | **sec./step** |
| --------------- | ------------ | ------------ | ----------- | ------------- |
| Propane N=1320  | 6.5          | -292.5±19.5  | 0.567±0.008 | 0.131         |
| ---             | ---          | ---          | ---         | ---           |
| 8.5             | -296.4±19.9  | 0.572±0.009  | 0.200       |
| 10.5            | -298.4±19.2  | 0.572±0.008  | 0.331       |
| 12.5            | -302.2±22.8  | 0.574±0.009  | 0.506       |
| 14.5            | -301.6±20.6  | 0.573±0.009  | 0.759       |
| Ewald           | -301.3±18.3  | 0.573±0.007  | 7.566       |
| Ethanol (N=900) | 6.5          | -1156.8±26.8 | 0.734±0.015 | 0.088         |
| ---             | ---          | ---          | ---         | ---           |
| 8.5             | -1214.0±26.0 | 0.776±0.015  | 0.142       |
| 10.5            | -1210.4±23.9 | 0.785±0.014  | 0.229       |
| 12.5            | -1215.6±23.6 | 0.785±0.011  | 0.352       |
| 14.5            | -1214.8±23.9 | 0.782±0.013  | 0.524       |
| Ewald           | -1207.7±24.3 | 0.780±0.013  | 4.379       |

### External Simulation Engines

DFF is designed to work with different simulation packages. The prepared simulation model and force field parameters can be exported to popular simulation engines including LAMMPS, TOWHEE, DISCOVER, AMBER and CHARMM. Because different conventions are used in different programs, DFF translates the atom types to those recognized by other software packages. It should be noted that this translation is simply a one-to-one mapping from the atom types used by DFF to a set of unique string symbols.

To facilitate the simulation setup, _GROMACS_ and _LAMMPS_ jobs can be launched directly from the DFF after the force field parameters are assigned. Energy minimization and NVT, NPT and NVE molecular dynamics can be carried out directly from the user interface.

#### Special Conversions

Because potential functions implemented in _GROMACS_ and LAMMPS may be different from published force field functionals, some parameters must be converted to the closest functional form upon export of parameters. The following conversions are used:

#### DREIDING to LAMMPS

Dihedral terms in DREIDING is based on the following function:

The closest function used in LAMMPS is the CHARMM dihedral_style:

Therefore, parameters are converted as:

For out-of-plane, DREIDING uses two different functions. For non-planar structure:

![](RackMultipart20220717-1-mu78nc_html_8d05d4da3c6ae4e1.gif)

Otherwise:

![](RackMultipart20220717-1-mu78nc_html_bd8c3bd2c3b87c3e.gif)

The harmonic function is used in LAMMPS (class2 improper style):

Therefore, to get the same force constant at, the following conversions can be used:

# CHAPTER 4 – REFERENCE OF COMMANDS

This chapter explains commands in DFF user interface.

## 4-1. File Menu - Manage Project and Files

Commands in the **File** menu are designed to manage files and projects. Project-based commands can be performed either through the **File** menu or by selecting a node in the _Project Navigator_ and right-clicking mouse button. **Shift-Click** can be used to select all adjacent nodes between the first and last clicked nodes, while **Ctrl-Click** can be used to select multiple non-adjacent nodes.

### Commands for Projects

The following commands found in the **File** menu are used for managing **Projects**. Some can also be accessed by right-clicking a node in the _Project Navigator_.

**New Project** creates a new project. The first time DFF is started, the **Create Project** dialog will point to your home directory. Browse to where you want to place your work, enter a project name and click **Create Project** in the dialog. A folder and a project file (.dpf) will be created in the selected folder, and the project is listed in the Project Navigator. The title bar of DFF main window shows the path and project name of the current project, subsequent new projects will be created in the selected folder.

**Open Project** reloads a previously-saved project. In the **Open Project** dialog, make sure the file extension is set to \*dpf. Browse to the appropriate project file and click **Open**. All files and folders used in last session will be restored.

**Close Project** closes the current project. The project folder and all of its files and sub-folders are saved on your computer. If the project content has changed since the last save, you will be prompted to save again before closing the project.

**Refresh Project** reloads all contents of the current project folder. All subfolders and DFF-relevant files will be listed in the _Project Navigator._

**Save Project** saves the current project folder under the current name and disk location.

**Save Project As** saves the current project under a specific name or location. You can select a different name in the same folder or a different folder altogether.

### Commands for Files

**New** is a command to make a new empty model or folder to the project. The model can be edited and modified, and the model files are save in MSD format.

**Add** is a command to add existing files to the project. Files selected in the **Add** dialog are copied into the project folder and listed in the _Project Navigator_. Several file formats are supported;

_Note that to open a file in the Project Navigator is a different concept. Open a model or a file means to exhibit it in the user interface, the file must be in the Project in order to be open. To open a model or a file can be done by double-clicking of the mouse button or using a mouse tip popup command while the file is selected._

**Close All** closes all molecular models that are open. This command is useful when many models are opened.

**Save** will save any changes made to a file.

**Save As** will save a copy of the current file to new file name or location.

**Save All** will save all opened files at once.

**Recent Projects** lists project files that have been opened recently. This is a convenient method of accessing existing projects.

**Exit** closes DFF.

### Toolbar Commands

The New ( ![](RackMultipart20220717-1-mu78nc_html_48cacd399fa52a4.gif)), Add ( ![](RackMultipart20220717-1-mu78nc_html_cf111f71bde2ec27.gif)) and Save ( ![](RackMultipart20220717-1-mu78nc_html_7985f53274cfc806.gif)) commands can be found in the toolbar for easy access.

### Mouse Commands on Project Navigator

In addition, commands are available by **right-clicking** on nodes of the _Project Navigator_. The available commands depend on the node type. Some **right-click** commands operate identically to those in the command or toolbar menus, some are only accessible using mouse **right-clicking**.

#### On Root Node

The root node is used by DFF internally, it has no correspondence on your computer file system. It has only two functions to make the Project Navigator easy to read.

**Larger Font** increases the font size of Project Navigator

**Smaller Font** decreases the font size of Project Navigator

#### On Project Node

The project node corresponds to the project folder on computer file system. It has four basic functions to manage folders and files in the project.

**New** creates a new molecule model or a new folder

**Sort** rearranges the order of files and folders by name, date and type.

**Refresh** reload all folders and files under this folder.

**Open in Explorer** open the file folder in Windows explorer.

#### On Folder Node

The folder node is where the jobs are conducted, it has more functions to manage the files and sub-folder.

**New** creates a new model or new folder

**Open** shows the selected file in MSD, PPF, QMD, LOG, etc. format.

**Cut** puts this folder into clipboard for copy, will remove this folder.

**Copy** puts this folder into clipboard for copy, will not remove this folder.

**Paste** puts a model or file to current folder.

**Delete** remove this folder.

**Rename** changes the name of the folder.

**Sort** rearranges the order of files and sub-folders in the selected folder.

**Property** list folder location, etc.

**Refresh** reload all folders and files under this folder.

**Open in Explorer** open the folder in Windows Explorer.

#### On Model Node

The model node is relevant to a file, the functions are.

**New** creates a new model or new folder

**Open** loads various files, MSD, PPF, QMD, LOG, etc.

**View** display the selected models in a separate window

**Cut** puts this folder into clipboard for copy, will remove this folder.

**Copy** puts this folder into clipboard for copy, will not remove this folder.

**Paste** puts a model or file to current folder.

**Delete** remove this model.

**Rename** changes the name of the model.

**Save as** to save the model in a new name.

**Associate PPF** and **Dissociate PPF** are used to associate or dissociate a force field with the selected model(s). Available force fields in current or other folders are listed. Once a force field is chosen, it is assigned to the selected model(s).

**Associate MSD** and **Dissociate MSD** are commands used to associate or dissociate a topological data file (MSD) with the selected QMD file.

**Create MSD** is activated only for QMD file and adds a MSD file to be associated with the selected QMD file.

## 4-2. Edit Menu – Sketching, Editing and Modifying Models

The following commands are used to editing and modifying molecular models. They are listed in the **Edit** menu.

### Menu Commands

**Isotope** sets atomic masses in order to make isotopes. This command can be applied to change a single atom or all atoms of a given type in a selected model.

**Guess Bond Order** sets the bond orders of the selected model. If the model already has bond orders set, this operation resets all bond orders. This is useful for imported models, in which bond orders can be reset to ensure that atom types are assigned correctly. Bond orders are recalculated based on the method explained in Section 3-3.

**F ![](RackMultipart20220717-1-mu78nc_html_c3cb5d11c9ec35ff.png) ormal Charge** assigns formal charges automatically or manually. The automatic option uses the method explained in last chapter, Section 3-3. The manual option is useful for assigning special formal charges.

**Torsion** sets or modifies torsion angles and opens a **Torsion** dialog. With this dialog open, selecting four atoms defines a dihedral angle. A new angle can then be set, or an existing one can be rotated by a specified value. Clicking **Execute** performs the specified function. If **Make new model(s)** is selected, each **Execute** click will generate a new model with the specified bond rotation.

**I ![](RackMultipart20220717-1-mu78nc_html_63fb8f9c68a5912e.png) mproper Torsion** is similar to the **Torsion** command, but is used to set or modify improper torsion angles. In the popup dialog, selecting four atoms defines an improper dihedral angle for which the bond angle may be set. Improper torsion can be defined for four atoms that may not be consecutively bonded. In the example at right, this command is used to set the out-of-plane angle of cyclohexane.

**Reset COM** resets the center of mass for a model. Relative positions of atoms are not altered and energy calculations are not impacted. **Reset COM** is useful to obtain a better view of the model, especially when the model needs to be rotated on the screen.

**R ![](RackMultipart20220717-1-mu78nc_html_b69e620f9abd8eea.png) epack PBC** has two sub-commands - **Repack** and **Undo Repack**. **Repack** moves molecules into a box with periodic boundary conditions (PBC) using the minimum image rule, while **Undo Repack** reverses the move. The position of a molecule is determined by its center of mass.

**Adjust PBC** compresses or expands the PBC box in two or three directions. This is done by adjusting the dimensions in small steps with quick MD simulations. This command is useful for preparing interface models.

**Set PBC** is used to **Add** , **Edit** or **Delete** unit cell parameters for a model. Select one of the available options, specify the cell dimensions as necessary, and click **OK** to launch the job.

### Toolbar Sketching Commands

_Some of editing functions are provided via the tool bars._

**Undo (**![](RackMultipart20220717-1-mu78nc_html_9dcfe1bebc930b28.gif)**)** can reverse most editing actions.

**Redo** ( ![](RackMultipart20220717-1-mu78nc_html_ff6efeb05338cad5.gif)) restores actions that have been undone.

**Select Element** ( ![](RackMultipart20220717-1-mu78nc_html_2c6760e1bb792015.png) ) is a pull-down menu listing elements that can be added to the selected model. Only the most common elements are listed explicitly, but clicking &quot;...&quot; will open a periodic table dialog, from which any element can be selected and added.

On the periodic table, the selected element is marked in yellow. The **Property** command opens the **Element Properties** dialog, where an element&#39;s properties are displayed and can be edited. **Default** reverts an element&#39;s properties to those preloaded in **DFF**. _Note that once the new values are saved, they become the default value._

![](RackMultipart20220717-1-mu78nc_html_a2a9a823c8bf0f9e.png)

_The following buttons toggles the_ _ **Mouse Left-Click** _ _function. Once it is activated, left-click on the main windows performs the task. To deactivate the function, click the button again._

**Add Atom** ( ![](/E:/DFF7/Release7.1/UserGuide7/References/Images/newAtom.gif)) sets the **add** atom or bead function. Clicking in the window will add an atom or a bead.

**Delete Atom** ( ![](/E:/DFF7/Release7.1/UserGuide7/References/Images/deleteAtom.gif)) sets the mouse to **delete**. Clicking on an atom will delete it from the model.

**Replace Atom** ( ![](/E:/DFF7/Release7.1/UserGuide7/References/Images/replaceAtom.gif)) sets the mouse to **replace** function. Clicking an existing atom will replace that atom with the selected element.

**Move Atom** ( ![](/E:/DFF7/Release7.1/UserGuide7/References/Images/moveAtom.gif)) sets the mouse to **move** function. **Clicking and dragging** on an atom will move it. Note that the move is a two-dimensional transformation.

**Add Hydrogen** ( ![](/E:/DFF7/Release7.1/UserGuide7/References/Images/addHydrogens.gif)) automatically adds hydrogen atoms to the model. The number of hydrogen required is calculated based on the most probable chemical structure for each atom.

**Del Hydrogen** ( ![](/E:/DFF7/Release7.1/UserGuide7/References/Images/deleteHydrogens.gif)) automatically removes all hydrogen atoms.

**Add Bond** ( ![](/E:/DFF7/Release7.1/UserGuide7/References/Images/newBond.gif)) sets the mouse function to **add bond(s)**. Click any two atoms to add a bond between them. Repeating this operation changes the bond order.

**Delete Bond** ( ![](/E:/DFF7/Release7.1/UserGuide7/References/Images/deleteBond.gif)) sets the mouse function to **delete bond**. Select a bond to delete it.

**Refine Structure** ( ![](/E:/DFF7/Release7.1/UserGuide7/References/Images/refine.gif)) is used to optimize the model. This command approximates a force field for the model and optimizes the structures automatically.

**Set Bond Order** ( ![](/E:/DFF7/Release7.1/UserGuide7/References/Images/bondOrder.JPG)) sets the mouse function to **set bond order** status. Clicking on a bond change its bond order to selected bond order.

**Select**![](RackMultipart20220717-1-mu78nc_html_30a3c91f54fc0636.gif)sets the mouse function as a selector. If this button set on, left-click on an atom will pick up the atom.

**Rotate**![](RackMultipart20220717-1-mu78nc_html_55018a3ccaa46ca8.gif) sets the mouse to rotate an object on the screen.

**Translate**![](RackMultipart20220717-1-mu78nc_html_d3b705ffa447fa95.gif)sets the mouse to translate an object on the screen

**Zoom**![](RackMultipart20220717-1-mu78nc_html_c413fa12de549bf9.gif) sets the mouse to zoom in or zoom out

**Reset**![](RackMultipart20220717-1-mu78nc_html_587036f623939d9c.gif) restores the original position of an object

### Additional Shor-cut Keys on Atoms

_In addition, when the_ **Select** _button is activated, mouse has more functionality as follows._

**Select one or more atoms** – Press and hold the **Left** button and drag over a region on the screen will select all atoms in the region.

**Move selected atoms** – While the atoms are selected (marked by dots), press and hold the **Right** button and drag to move the atoms selected.

**Copy** – Ctrl+C collects the selected atoms

**Delete** – push the Delete key on keyboard

**Paste** – Ctrl+V puts down the copied atoms

**Undo** – Ctrl+Z reverse last action

**Redo** – Ctrl+Y reverse undo

## 4-3. Build Menu - Building More Complicated Models

### Group and Subset

**Charge Group** defines charge groups in a molecule model as is often required by simulation engines. This method can be used only when a force field has been assigned to the model. It works by querying the charge separation between any two bonded atoms. If the charge crossing a bond is smaller than a threshold that can be adjusted, then the bond is used as a division of two charge groups. **Execute** begins the calculation, and results are displayed in the center panel.

![](RackMultipart20220717-1-mu78nc_html_310a9133692fe90d.png)

**Subsets** defines a group of atoms or molecules as a subset of the molecular model. It opens a **Define Subsets** dialog, which provides two options, **Manual Define** and **Auto Define**. The **Manual Define** option offers the flexibility of defining subsets based on atom or molecule. In either case, atoms or molecules can be selected individually. Alternatively, all atoms or molecules identical to a selected atom/molecule can be selected at once. **Define** finalizes one subset definition. The **Auto Define** option identifies subsets and defines them as molecules automatically. **Execute** runs the definition algorithm. Defined subsets are marked with different colors. If necessary, **Reset** restarts the process.

### Bulk Models

**Bulk Liquid** builds a molecular liquid model in a cube (A=B=C) or a slab (A=B≠C) simulation box. Molecules are placed with random orientations in the box at low density initially and then compressed to a targeted density. Clicking **Bulk Liquid** opens a **Make Liquid Model** dialog. Use the pull-down menu under _ **Model** _ to specify the molecular composition of the liquid. Mixtures can be built by selecting different molecules with different numbers (counts). _ **Counts** _ should be entered as number of the selected molecule. Pressing **Enter** will instruct DFF to calculate the percentage of each molecule in the mixture, the total number of atoms and the number of molecules in the box. _ **Density** _ allows the user to specify a target density, and _ **Compress Rate** _ allows the user to specify a rate at which the system will be compressed to the target density. Clicking _ **Build Cubic Box** _ or _ **Build Slab Box** _ will begin the process. For a cubic box, all three edge lengths (A=B=C) are calculated based on the given number of molecules and density. For a slab box, the box height is specified by the user (C) and the other two edge lengths (A=B) are calculated. **Execute** starts the background job. When the job finished, the initial bulk liquid model will be loaded into the _Project Navigator_.

### Interphase Models

**Liquid Interface** combines two or more bulk-liquid boxes to build an interface of liquids. It opens a **Liquid Interface** dialog. In the **Choose Boxes** portion of this dialog, select your liquid models of choice by browsing to your prepared models (.msd file). The distance between adjacent liquid boxes can be set using **Interval**. Specify an **output file name** and click **OK** to launch the job. The combined box will be loaded automatically when the job is finished.

**Bilayer Interface** builds water-surfactant-air or water-surfactant-oil interfaces. The algorithm will build the water box first and place surfactant molecules on either side of the water phase with hydrophilic groups oriented towards the water phase. If an oil phase has been chosen, this phase will then be placed outside the surfactant phase. Within the **Bilayer Interface** dialog, _ **Box Name** _ specifies the name of the model to be built. _**Box Width (X)**_ and _**Box Height (Y)**_ set the dimension of the surfaces and thus determine the area of the surfaces. **Build Options** specifies steps of energy minimization or/and molecular dynamics after the box is built, and defaults to no simulations.

To build a bilayer interface, select **Water** in the **Liquid A** section using the pull-down menu and specify the _ **Thickness** _ of the water phase. **Add** can be used to add additional components into the water phase. **Delete** can be used to remove added components. **Update** calculates the number of water molecules within the constraint of a density close to 1.0. Surfactant molecules can be specified in the **Surfactant B** section using the _ **Surfactant** _ pull-down menu. Surfactant models must have been prepared and saved in the same folder as the current bilayer interface project. Once a surfactant molecule is selected, a number of surfactant molecules per side must be chosen. It is recommended to place N^2 (25, 36, 48 ...) molecules in order to build an evenly distributed surface. Note that because the number refers molecules per side, the total number of surfactants is double your chosen number. **Add** can be used to add an additional surfactant species (without changing the total number of surfactant molecules), and **Delete** can be used to remove surfactant species. Finally, **Liquid C** can used to describe either a vacuum when building water-surfactant-air interfaces or an oil when building water-surfactant-oil interfaces. In the latter case, select the oil molecule and specify its density and count-per-side as described above. **Update** can then be used to calculate the thickness of this phase.
When you are satisfied with your bilayer composition, **OK** launches a background job. A bilayer box without minimization or simulation steps can usually be built in a few minutes.

### Super Cells

**Super Cell ** builds super cells by extending cell lengths into a two- or three-dimensional periodic box. For a 2-D box, only the A and B edges can be extended. The extension is accomplished by multiplying the cell edge lengths by integers.

### Fragments and Sampling

**Fragments** makes molecular fragments for parameterization. This function works by constructing molecular fragments based on the parameterization needs of a selected model. The software automatically builds fragments and saves the results to a subdirectory.

**Conformational Isomers** is useful for building conformational isomers for a molecule in order to sample its energy surfaces. This command should only be used on small molecules, and the model should first be optimized. User-input parameters are used to generate conformational isomers. There are essentially two methods: orthogonal scanning or random sampling. If orthogonal scanning is chosen, the software automatically searches for rotatable bonds and generates isomers by rotating those bonds. If random sampling is chosen, the user sets the number of samples, the random seed, and the range and interval of sampling. Two types of internal coordinates, the torsion dihedral angle and the out-of-plane angle, can be sampled. after After sampling, the software will check generated conformers and remove structures in which atoms are too close to one another. This threshold is set by the **Bump factor** , which is set as a multiplier of the atomic radii. A user-determined **Symmetry factor** can be used to remove structures that are identical due to rotational symmetry. Upon **Execute** , this command will create a sub-folder in the project and save output configurations in the sub-folder.

![](RackMultipart20220717-1-mu78nc_html_71df03bca9e26893.png)

**Dimer Configurations** generates different configurations of a molecular dimer by moving one monomer along the line of the two centers of mass. To use this command, the dimer should be optimized first. The software generates configurations based on user-specified parameters that can be edited by using the **Reset** button. The configurations are **Separation points** between the two molecules as given in the text area. The monomers may be rotated randomly at each separation point. **Bump test range** sets a threshold of atom-atom distance between two monomers, below which the configuration will be removed.

![](RackMultipart20220717-1-mu78nc_html_392506bb3396e925.png)

## 4-4. View menu - Managing How Models Are Displayed

### View Commands

These addition commands are available through the **View** Menu.

**Measure** displays measured molecular properties of the selected molecule. To change what is measured and displayed, click **View → Measure**. The following properties can be measured:

_Angle
Bond
Torsion angle
OOP angle
Dipole moment_

Measurements are taken using mouse clicks. Once a measurement property has been selected, click on atoms to measure the bonds, angles, or moments between them. Selected atoms are labeled by colored dots, and measured values are displayed next to selected atoms.

**Pack View** displays all atoms inside of a periodic box. It does not change the coordinates.

**Job Monitor** toggles a display of background DFF jobs.

**IDE Options** changes the **Look-and-Feel** style of DFF on the _Windows_ platform. Four different **Look-and-Feel** styles can be selected: _Metal_, _CDE/Motif, Windows and Windows Classic_.

**Display Style** changes the molecular rendering style:

_ **Line** - the default style in which colored lines indicate atoms and bonds. Nonbonded atoms are displayed as a circle.
**Stick** - a style in which thick lines indicate for atoms and bonds.
**Stick and Ball** - a style in which thick lines indicate bonds and balls indicate atoms.
**CPK** - the space-filling Corey, Pauling, and Koltun (CPK) model frequently used in industry._

### Toolbar Commands

These commands are available both through the toolbar, and are used to alter the behavior of mouse clicks while viewing a model.

**Rotate** ( ![](/E:/DFF7/Release7.1/UserGuide7/References/Images/rotate.gif)) allows the user to **Left Click-and-Drag** to rotates the model around a central axis.

_Tip: It may take a bit of experimentation to make the model do what you want on the screen in Rotate mode. The easiest way to visualize its movement is to imagine the structure as being confined within a globe. Moving the mouse left will turn the globe toward west along a north-south axis, whereas moving it right will turn the globe east. Moving the mouse up will turn the globe north along an east-west axis, while moving the mouse down will turn it south._

**Translate** ( ![](/E:/DFF7/Release7.1/UserGuide7/References/Images/translate.gif)) allows the user to **Left Click-and-Drag** to slide the model up, down, left, or right in the working area.

**Zoom** ( ![](/E:/DFF7/Release7.1/UserGuide7/References/Images/zoom.gif))allows the user to zoom in by **Lefting Click and Dragging Right** or zoom out by **Left Clicking and Dragging Left**.

**Center** ( ![](/E:/DFF7/Release7.1/UserGuide7/References/Images/center.gif)) moves the selected model back to center of viewing area.

**Label (**![](RackMultipart20220717-1-mu78nc_html_f48784562b40c44.png)**)** is a pull-down menu that sets display modes for various properties of the selected model. Label options include:

_ **Clear All** - removes all labels
**Atom Names** - atom names as given in .msd file.
**Apparent Atom Types** - the Apparent Atom Types. The default is SATs.
**Default Atom Types** - the default atom types (DATs)
**Mulliken Charges** - as given in QMD files.
**ESP Charges** - as given in QMD files.
**Force Field Charges** - assigned by force field
**FF/ESP Charges** - comparison of force field and ESP charges
**Formal Charges** - formal charges
**Default Charges** - assigned QM or force field charges
**Charge Groups** - charge groups
**Total Energy** - the total energy and cell dimensions if available
**Hybridization** - the hybridization states.
**Bond Lengths** - measures and displays average bond lengths.
**Measurement** - labels the measured properties (see below)
**Subsets** - color-codes defined subsets._

## 4-5. DFFDB menu – the Direct Force Field Database

**DFFDB** stands for **Direct Force Field Database**. These commands manage the database and its content force fields.

### Managing the Database

**Admin** is the main method of managing the database contents. It opens the DFFDB Manager dialog:

![](RackMultipart20220717-1-mu78nc_html_dbf0848643f1a920.png)

_Database file_ lists where the database data file is located. Each database is stored as a binary file with a .dffdb extension. Normally one database is sufficient because each database can contain multiple force fields. Database files can be placed on anywhere on your computer. Use **Browse** to locate and load preexisting database files. The default location where are stored databases is the \&lt;DFF installation\&gt;/database folder.

_Force field functional_ indicates what force field functional will be used. Choose a force field functional using the pull-down menu. Available force field functionals for the selected database are listed. After selecting a database and a force field functional, DFF will search and list all force fields of the same force field functional in the **Table** field.

Each table can be selected by checking its **checkbox**. To the right of the checkbox is the _ **Name** _ of the table, its highest _ **Version** _ number, the number of unique and total _ **Entries** _, its _ **Typing Rules** _, and brief description of the table. The **Version** number can be selected using a pop-up pull-down menu that appears when the version cell is selected. This sets a specific version to be used, but does not change the table.

Two hidden commands, **Show log** and **Revert** , can be accessed by **right-clicking** a table entry. **Show log** displays a log of parameter check-in times and dates. **Revert** resets the highest version number to a user-specified version. Note that the **Revert** function, unlike **Version** , will actually remove entries after the specified version and should be used with caution.

The right this dialog contains four commands for ordering and managing database tables: **Add** , **Remove** , **Up** and **Down**. The order in which tables are listed is important. When the database is used, DFF reads parameters from the force field at the top of the list first and moves down as necessary. To reorder the list, select a table and click **Up** or **Down**. To delete a table, use **Remove**. _Note that this operation deletes the table and its contents from the database._ To add a new table, click **Add** to open an **Add New Table** dialog.

![](RackMultipart20220717-1-mu78nc_html_fac681d7e3e7af54.png)

In the **Add New Table** dialog, enter a _ **Name** _ for the force field to be created and select a _ **Type** _, which must be match that of the checked-in force field. Similarly, the **Typing Rule** must also match that of the checked-in force field. Note that once typing rules are decided, they are permanently attached to the force field and can only be modified but not replaced. **Force Field** allows you to enter or browse to the .ppf file to be checked in. However, it is not necessary to add parameters at this stage, as they can be added later. Finally, enter a brief **description** of the table and click **OK** to create a new table.

### Use the Database

**Assign** retrieves parameters from the database and assigns them to the model(s) selected. To use this command, select a model(s) from the _Project Navigator_ and click Assign to open an &quot;Assign force field parameters&quot; dialog:

![](RackMultipart20220717-1-mu78nc_html_2d562e83ace49312.png)

_ **Input** _ lists the tables and database selected in **Database Manager**. The selected input can be changed by clicking **Choose**. _ **Output** _ specifies where the output force field file will be saved. Use **Browse** to change the location.

Three options can be selected. If parameters are missing for a given atom type, _Transfer parameters_ will instruct DFF to find parameters similar atom types. The retrieved parameters are scored in the output file on basis of similarity to the required atom type(s). _Make automatic parameters_ is an alternative method to automatically obtain missing parameters. This option allows DFF to automatically generate parameters using the rules explained in section 3-9. The last option, **Save to SPF File,** makes an integrated file (.spf) from the model (.msd) and the force field parameter (.ppf) files.

**Available Models** lists all models to be assigned in this operation. Force field terms required by these models will be retrieved from the database. You can **Add** or **Remove** any models using **Reset** searches current folder to load all models available. Click **OK** to start the operation. If all parameters are found, retrieved parameters are saved and loaded into the _Project Navigator_ and models are assigned atom types and charges. If some parameters are missing, a sub-folder is created and molecules with missing parameters are saved in this folder.

### Expand the Database

**Check Out** retrieves parameters from the database, but the operation is different from that used by **Assign**. The main difference is that this operation retrieves data from database tables not only the same force field functional, but also the same typing rules. Therefore, atom types must consistent between the force field from which parameters will be checked out and the force field to which parameters will be checked in. The **Check out Parameters** dialog is similar to the **Assign force field parameters** dialog, but the **Make automatic parameters** and **Make SPF file** options are not available.

The resulting force field file is mainly used to continue parameterization. If some parameters are missing, this force field will be used as the initial input, and existing parameters are frozen so that only missing parameters can be added.

**Check In** to add new parameters into the database table. It opens the **Check in Parameter** Dialog. _ **Database** _ shows the database selected. _ **Table** _ lists the table to which new parameters will be added, which can be selected using a pull-down menu. The _ **Type** _ is fixed since the database table has already been selected. The _ **Version** _ number is automaticallyupdated in minor revision increments. A major version increment can be manually set via the pull-down menu.

In the **Force Field** section, **Browse** to the .ppf file to be checked in. _ **Description** _ shows the development log, which can be viewed in the **Database Manager** dialog. _ **Reference** _ lists citation for this check in. **Organize** opens a dialog to manage references in which references can be added or removed. References can be viewed directly from the force field table. Clicking **OK** will insert newly checked-in parameters into the table. The database engine will automatically check for existing parameters in the input force field file such that only new terms and/or changed terms will be saved into database.

### Make a New Database

**New Database** opens the &quot;Create TEAM Database&quot; dialog to create a new database. Browse to a folder and enter a file name for the new database. An empty database will be created and loaded into the &quot;Database Manager&quot;.

## 4-6. Simulation Menu - Internal and External Simulation Methods

### Internal Simulations

**Energy** opens an **Energy** dialog used to set up single-point energy calculations. _ **Job Name** _ identifies the running job and its output file. **Nonbond Energy** button opens a **Nonbond Control** dialog to set up options for nonbond calculations. Computation options include _ **Gradient** _ and _ **Hessian** _. After the job finishes, the input, output file and result structure will be loaded into a new folder of the Project Navigator. The **Nonbond Control** dialog also allows the user to select a cutoff method. Three options can be selected: _ **Atom Cutoff** _, _ **Group Cutoff** _ and _ **No Cutoff** _. A _ **Cutoff** _ value and a _ **Buffer** _ value can then be set. The **Buffer** value is used to calculate the neighbor list efficiently. Both are specified in Angstroms. If using **Group Cutoff** , charge groups must be defined using **Build → Group by Charge**. If _ **No Cutoff** _ is selected, all nonbond interaction pairs are calculated. For systems with periodic boundary conditions, _ **Tail Corrections** _ can be added to compensate for energy and pressure loses due to cutoff.

**Optimization** performs structure optimizations by minimizing energy. It opens an **Optimization** dialog that allows the user to set a _ **Job Name** _, _ **Number of Steps** _, and a _ **Convergence** _ criterion. Two optimization algorithms can be selected: _ **Conjugate gradient** _ and _ **Variable metric** _. Options for nonbond energy calculations are accessible by clicking **Nonbond Energy** , as explained above. To add torsion restraints during optimization, click the checkbox to open a new **Add Restraints** dialog to set up the restraints. In the **Add Restraints** dialog, the top section displays input restraints. To add a restraint, click and highlight the first cell labeled **a1**. This allows you to select atoms from the display window by **Left-Clicking**. Click and select four atoms to fill the four atom cells (a1, a2, a3, a4). Enter a restraining force constant (100 is the default), a starting angle _x1_, increments _dx_,and a total number of points _n_. Clicking **Add** will add one restraint. To add another, repeat the above procedure. Click **OK** to quit this dialog. To see your changes to the structure and energy of the molecule, select the **Screen view** option. Clicking &quot;Execute&quot; launches the background optimization job. When the job finishes, the input, output file and resulting structure will be loaded into a new folder in the **Project Navigator**

**Molecular Dynamics** performs molecular dynamics simulation. It opens a **Molecular Dynamics** dialog. In this dialog, a _ **Job name** _ must first be specified before a simulation ensemble can be chosen - _ **&quot;NVT&quot;, &quot;NPT&quot;** _ or _ **&quot;NVE&quot;** _. To use a temperature control method, click **Temperature (K)** and select either the _ **&quot;Stochastic** \_\_**(Anderson)&quot;**_ or the _ **&quot;Scale Velocity&quot;** _ method. To use a pressure control method, click **Pressure (MPa)**. The _ **Berensdsen** _ method is implemented. **Nonbond Energy** can be used to set up nonbond calculations as explained above. In the **Run time** section, _**Timestep (fs)**_, _ **Equilibrium Steps** _ and _ **Evaluation Steps** _ are user-set parameters that control how the simulation is to be performed. The **Intervals** section is used to for control how frequently (in number of steps) the _ **Trajectory** _ will be saved and how frequently the **Screen** **View** , if selected, will be updated if _ **Screen View** _ is selected. **Execute** launches the background job. When the job finished, the input, output file and resultant structure will be loaded into a new folder in the **Project Navigator**.

### External Simulations

**GROMACS** or **LAMMPS** opens an interface that allows the user to set up simulation jobs using external _GROMACS_ or LAMMPS software. The interfaces are very similar. We will use LAMMPS as an example.

_ **Model** _ lists the molecular model file (.msd) to be used for the simulation. The model should have atom types, charges, and force field parameters assigned. _ **Force Field** _ indicates the force field file (.ppf) assigned to the model. _ **Program** _ allows the user to select either _GROMACS_ or LAMMPS from a pull-down menu. By default, _ **LocalHost** _ is the computer that will run the simulation task. The _ **Computer** _ button can be used to add new and remote computers, which can subsequently be selected using the pull-down menu. Clicking **Computer** starts up a new **Connection** dialog. Enter the _ **IP address** _, _ **Port** _, _ **User name** _, _ **Password** _ and _ **Directory** _ to connect to a remote computer. The software, _GROMACS_/LAMMPS must also have been installed and configured for the remote computer.

The _ **Ensemble** _ section lists three usable ensembles, _ **NVT, NPT** _ and _ **NVE** _. _ **Temperature** _ sets the simulation to run under temperature control methods, the choice of which depends on the software selected. _ **Pressure** _ sets the simulation to run under pressure control method. _ **Nonbond interactions** _ sets options for nonbond evaluations. An option of **Apply T-factor to LJ term** scale the nonbond parameters using temperature scaling factor. A new PPF file will be generated before the force field is exported to the simulation software. _ **Constraints** _ allows the user to set up certain constraints supported by the simulation software. _ **Trajectory** _ specifies how the simulation is to be conducted. _ **Pre Optimization** _ allows the software to perform an energy minimization before MD simulations. _ **Time Step** _ specifies the integration time step in fs. _ **Equilibrium** _ sets the number of steps to simulate before collecting data for analysis. _ **Trajectory collect** _ sets the number of steps to simulate during data collection and after the equilibrium steps. _ **Save Interval** _ sets the interval in steps between saves of the trajectory. _ **Trajectory file name** _ sets the file name for the generated trajectory files. Click **OK** to start the simulation job.

**Job List** opens a **Job Monitor** dialog used to view external simulation jobs. Jobs that have been submitted are listed here. More information about each job can be viewed by **double-clicking** a record. **Right-clicking** on a record allows the user to perform four functions. _ **Refresh** _ rechecks the status of this job. _If the job is finished, it will be marked as_ ( ![](/E:/DFF7/Release7.1/UserGuide7/References/Images/dft.gif)). _ **View Log** _ displays a log file of the job. _ **View Result** _ displays simulation results and should only be used when the job has finished. _ **Delete** _ removes the job record from the listbut preserves the saved files.

![](RackMultipart20220717-1-mu78nc_html_10ac8ee95da2eac8.png)

**Trajectory View** displays the simulation trajectory on DFF screen. Paired topology (.msd) and trajectory (.dta) files must be selected before clicking this command. A dialog will then show the selected files with options to either _ **Save the last frame** _ or _ **Show the trajectory** _.

![](RackMultipart20220717-1-mu78nc_html_92e6e2ee05483482.png)

**Export** allows the user to prepare input files for different simulation engines. Exported files are saved in a folder with the default name of the force field functional used. Resultant force field parameters and model structural data are written into output files with the following extension names:

| **Force field functional** | **File Extensions**  | **Explanation**                                    |
| -------------------------- | -------------------- | -------------------------------------------------- |
| _GROMACS_                  | _mdp, gro, top, itp_ | _mdp=input, gro, top=coordinates, itp=force field_ |
| ---                        | ---                  | ---                                                |
| _LAMPPS_                   | _in, data_           | _in=input, data=coordinates and force field_       |
| _TOWHEE_                   | _input, coord, ff_   | _input=input, coord= coordinatse, ff=force field_  |
| _AMBER_                    | _dat, prep_          | _dat = force field, prep = coordinates_            |
| _CHARMM_                   | _par, rtf_           | _par = force field, rtf = coordinates_             |
| _DISCOVER_                 | _car, mdf, frc_      | _car, mdf = coordinates, frc = force field_        |
| _DREIDING_                 | _drg_                | _drg = force field file_                           |

## 4-7. QMD Menu - Compute and Organize Quantum Mechanics Data

### QM Calculations

**Z-Matrix** opens a **Make Z-matrix** dialog for _Gaussian_ calculations. With this dialog open, **Left-Click** to select a _ **Starting atom** _ and click **Make** to make a new Z-matrix. The Z-matrix can then be edited as necessary. Click **OK** to save it.

**Compute** opens an interface to prepare input files for QMcalculations. If _Gaussian_ is installed on the same computer, it can be launched directly from the interface.

The top section lists the models selected. &quot;Computation&quot; provides common options used in the preparation of parameterization data. The _ **Job name** _ will used to identify this background job. The _ **Use Z-Matrix** _ option is useful for dealing with difficult structures, and _ **Check Z-Matrix** \_can be used to modify the Z-matrix. _ **Scan Dihedral** _ can be used to calculate a minimized conformational energy profile. _ **Set** \_ specifies which dihedral angle will be rotated. With this option, a series of minimization jobs will be launched. Note that this option should be used with the minimized structure.

In the **Options** section, computation variables including method, basis set, total charge, spin multiplicity, CPU number (only for shared computers), maximum CPU time allowed, and memory limit can be specified. If the molecule to be calculated is an ion, the charge and spin multiplicity will be assigned accordingly.

In the **Job** section, computation logistics are specified. _ **Make input files only** _ generates input files without running calculations, while _ **Run background job** _ starts the calculation and loads results onto the same computer. If a background job is begun, there are three options for results. _ **Append data to a QMD file** _ converts and saves all calculated data into one QMD file. _ **Make a QMD file for each calculation** _ makes a QMD file for each model calculated. _ **Do not generate QMD file** _ does not convert the QM output to QMD. As default, original QM output files are saved. _ **Package** _ is used to set the path to the _Gaussian_ executable, which can be located using **Browse**.

### Quantum Mechanics Data (QMD)

**Organize QMD** starts an **Organize Data** dialog allowing the user to view, manage, and output QM files _(.qmd)_. From version 7 onward, DFF uses the ._qmd_ file format for fitting force field parameters and does not directly use _GAUSSIAN_ output files. **Organize QMD** can also be used to examine and organize QM data.

![](RackMultipart20220717-1-mu78nc_html_af59eb0539cb6eeb.png)

In the **Organize Data** dialog, data for each structures is listed in spreadsheet form. **Open** is used to load GAUSSIAN or DFF output files in .qmd format. Files of the .bdf format can also be loaded. Files already in the Project Navigator can be selected and directly loaded by clicking **QMD Organizer**. _ **Name** _ displays the file name of each structure. Note that each file may contain multiple conformers, which are labeled in the _ **Conform** _ column. _ **Energy** _ lists the absolute energy and _ **R Energy** _ lists the relative energy. _ **Optimized** _ indicates whether a structure is fully optimized, and _ **E&#39; , E&quot;** _ are first and second derivatives. _ **ESP Field** _ indicates whether potential values have been calculated. _ **Charges** _ lists atomic charges available in the QM data files. In order to derive parameters, at least one conformer must be optimized with E&#39;, E&quot; and one set of charges calculated. Selecting one or more lines activates several command buttons in this dialog. **Save** writes .qmd files, **Remove** deletes selected line from the list, and **Energy** calculates and displays relative energies.

### Workflows Making QMD

**ADG for Conformers** is an integrated procedure used to sample conformational space and run QM calculations used in developing force field parameters. It opens a wizard in which many options can be customized, enabled or disabled. Clicking on **Execute** will start the job. If you are running the calculations directly, ._qmd_ files and Gaussian output files will be saved into the project folder when the job is finished.

**ADG for Clusters** is a procedure used to generate QMD for a dimer cluster. Select a dimer model (.msd) and click on this command to open an **ADG for Clusters** dialog. Set QM calculation and scanning options, which are the same as those in **Build → Cluster Configurations**. **Execute** starts the background job.

## 4-8. Force Fields menu - Managing Force Field

### Managing Force Field

These commands are used to manage force field files. In DFF*,* force fields are written as .ppf files.

**New Force Field** opens a dialog for creating a new force field for the selected models. The force field can be empty or optionally filled with estimated parameters. First, select a _ **Force field functional** _ from a pull-down menu, which fixed the functional forms. The _ **Typing rule** _ determines how atoms are represented in the force field. Other than the &quot;Default&quot; option which uses computed atom types, you can also use definitions (\*.def and \*.ext files) found in the _\&lt;dff root\&gt;/data/TypingScripts_ folder. The _ **Level of atom type equivalence** _ sets how the apparent atom types are mapped to equivalent atom types, which impacts the real number of atom types used in the force field. Next, enter a name for the force field. Finally, select or deselect the _ **Estimate parameters** _ option. If selected, both charge and valence parameters will be estimated using the UFF algorithm. Click **OK** to lunch a background job. When the job is done, the new force field should be displayed.

**Open PPF** browses and loads a PPF file into current project.

### Force Field Editor

**Open a Force Field Table** opens a table used to edit and organize force field parameters, and can also be accessed by **double-clicking** on a force field file in the _Project Navigator_.

![](RackMultipart20220717-1-mu78nc_html_12a5f34b0a9e4a1c.png)

There are three sections in the table. At the top are commands that can be performed on parameters. The middle section displays the parameter table and the optional equivalence table. The bottom portion contains commands for the force field file.

Commands that can be performed on parameters are **Display Missing Parameters** , **Copy** , **Delete** , **Freeze** and **Relax**. To use these commands, select one or more lines in the parameter spreadsheet and click on a button. **Display Missing Parameters** is activated if parameters are missing (with empty lines), and will shows atom associated with the missing terms. **Copy** makes copy of the selected lines and appends them to the table. **Delete** removes selected lines from the table. **Freeze** prevents parameters from being adjusted and marks them with an asterisk (\*). **Relax** allows frozen parameters to be adjusted and removes the asterisk.

The parameter spreadsheet has six (6) columns - _ **Table, Version, Terms, Atom Types, Parameters and Reference.** _ _ **Table** _ shows the database table from which parameters are taken. _ **Version** _ displays the parameter version number, and _ **Reference** _ indexes the reference list. These terms may be empty if a force field was not taken from a TEAM-FF database. The central three columns, _ **Terms** _, _ **Atom** \_\_**Types** _ and _ **Parameters**\_\_ ,_ are essential for any force field.

Clicking on the heads of columns sorts the lines accordingly, which is helpful for finding terms. _ **Atom Types** _ and _ **Parameters** _ cells are editable. **Double click** on a cell to change its values. **Right-clicking** a line brings up three commands - _ **Freeze** _ _ **force constants, Reverse to original,** _ and _ **Set to zero** _. These commands provide additional ways to control parameters, which is useful for difficult fitting tasks.

Commands that can be performed on force field file are **Save As, Save** and **OK** to close the dialog.

### Using a Force Field

When the force field files are ready, the following commands can be applied:

**Assign Atom Type** is used to assign atom types to models using an **Assign Atom Types** dialog. In this dialog, four methods can be used to assign atom types: **Use Default typing rules** call the program to calculate atom types; **Use scripted typing rules** let selection of the typing scripts in the pull-down menu; **Replace atom type from** , in which all atoms can be switched from one type to another, and _ **Assign type for Atom** _, in which atom types can be changed for a particular atom. **Execute** assigns atom types using the selected rules.

**Associate Force Field** assumes atom types have been assigned to the selected models and associates a force field with the models. It brings up a list of force fields available for selection in a given project, checks if parameters are complete in the selected force field, and assigns atom charges accordingly. This command is also accessible from the **Project Navigator** by selecting models and right-clicking.

**Assign Atom Charges** assigns or recalculates atom charges using charge parameters in a selected force field. It is active only when charge parameters are available in the selected force field.

### Advanced Topics on Force Field

Importing an external force field to DFF involves two steps: 1) reading in parameters and writing them to a PPF file, and 2) creating typing rules for the external force field. After parameters and typing rules are prepared, the force field can be made into a new table in TEAM-FF.

**Import Force Field** converts force field files in other formats to the _DFF_ PPF file format. It reads _AMBER_, _CHARMM_, _CFF_ and _DREIDING_ formats. In the **Importing Force Field** Dialog, **Force field functional** lists supported file formats. **Import from** lists the file location, and **Browse** is used to navigate to the file. When **Protect imported parameters** is selected, imported parameters will be frozen. When **Active parameters only** is selected, only required parameters of the selected model will be imported. **Save to** indicates where imported parameters are saved.

**Define Typing Rules** opens an **Atom Type Definitions** dialog to create or modify a typing rule file.

![](RackMultipart20220717-1-mu78nc_html_549b63ca40a4a9bf.png)

The typing rule file (.def) must be placed in the _\&lt;dff root\&gt;/data_ folder. **New → Select** is used to open or create a .def file. The **Atom Type Definitions** dialog is divided into two main regions. The definition tree on the left shows the relationships between all defined atom types. The child nodes are derived from a parent node and they are more specifically defined than their parent is. The siblings are exclusively defined so that there is no ambiguity. Clicking any node of the definition tree displays properties of selected atom type on the right side of the dialog.

The definition tree also indicates how atom types are searched and compared. Each atom type is a node on the tree, and the order shown in the tree sets the precedence order for assigning atom types, with types at lower-order nodes taking precedence over higher-order nodes. **Move Up** and **Move Down** moves an atom type up or down at the same level. A **Validate** button is used to check for conflicts between the selected definition and its sub-definitions.

An atom type definition must specify properties of the center atom and its neighboring atoms. These properties are also displayed in a small tree-structure at the right side of the **Atom Type Definitions** dialog. The center atom is the root node, while neighboring atoms are subnodes. Clicking on the root node or any subnode to review its properties. The **Element** pull-down displays the element of selected node, which can be changed. Once an element is selected, checking **Exclude selected element** sets the selected element as exclusive (every element but this one). **Order** sets the bond order of a subnode to its super-node. For the root node, **Order** is grayed out. **Connect** indicates how many subnodes a selected node has. **Add Conn** or **Del Conn** increases or decreases available subnodes. **Aromatic** can be set to **Yes, No or?** (Unknown); **Ring** indicates ring number, and **FormalCharge** sets the formal charge. The **Atom Type** section lists the **Name** of the defined atom type, and **Comment** provides a description of the definition to be saved in the .def file.

After a definition is specified, **Add** is used to add a new type to the definition tree. **Delete** removes a type from the definition tree. **Update** applies any changes to a selected node&#39;s attributes. **Save** writes the revised definitions to the .def file. **Close** quits the dialog without saving.

**Define Force field functional** opens a dialog to define a new force type type. In this dialog, **Type Name** can be any string representing the type to be defined. Functional terms can be specified using **Select** button, which open a **Select Function Term** dialog listing all available terms. There are two panels, **Basic Term** and **Cross Term**. By default, none of the checkboxes are selected. A function term can be set by clicking its checkbox and selecting a functional form from the pull-down list. After selecting terms, close the dialog to save the new type definition. You may use it by creating a new **USERDEFINE** -type force field.

**Modify Force field functional** opens a dialog to modify user defined force field functionals. **Modify** changes the definition. **Delete** deletes the definition.

## 4-9. Parameters Menu - Fit and validate force field parameters

### Fit QM Data

To use the following parameter fitting functions, QMD files should first be loaded and associated with corresponding MSD files. Note that all force field related operations, such as assigning atom types, charges, etc., are performed on the MSD files. Make sure the force field is associated with appropriate MSD files.

**Fit Charge Data** is used to fit charge parameters from QM atomic charges. It opens the **Make Charge Parameters** dialog. **Data source** indicates what data is used for deriving charge parameters. **Scaling factor** scales the data. **Available models** lists selected models. **Reset** reloads the available models, and **Remove** removes models from the list. **Show comparison of charges** displays fit results with original data. **Parameter model** fits charges based on atom types ( **Atom type based** ) or bond increment parameters ( **Bond type based** ). **Execute** starts the fitting procedure.

**Fit Energy Data** is used to fit valence parameters from QM data via a dialog with three tabbed panels. Prior to using **Fit Energy Data,** charge parameters should be prepared and atom charges should be assigned.

In the first panel, **Job &amp; Data** , **Data to fit** lists QMD models to be used. **Reset** and **Remove** can be used to modify data models to fit. **Weighting factors** are applied to **Energy, Gradient** and **Hessian** respectively. The default values are 100, 10 and 1. **Apply Boltzmann Factor** applies only to energy. **FF Type** is determined by the associated force field to be parameterized. **Job Name** assigns a name to background jobs. The input force field should be entered into **Initial FF**. The fit result will be written into **Result FF**. The job, initial force field, and result force field names are numbered sequentially; with each iterative fit, the suffix number increases by one, and previous result force field becomes the new initial force field. Thus, the fit may be repeated multiple times. If a new fit needs to be started, click **Start Over** to reset the job sequence. By default, the initial force field is the force field associated with the QMD files to be fit, which is listed in the **Force Field** text field in the toolbar and can also be viewed by clicking **View Force Field**.

The second panel, **Procedure** , provides options to set fitting procedure and relevant parameters. **Auto Procedure** , which uses DFF expert system to fit the data, is selected by default. To disable automatic fitting, select either **Levenberg-Marquardt** or **SVD**. Note the SVD method only fits linear terms. For the Levenberg-Marquardtmethod, the **Maximum iteration** number and the **Convergence** threshold can be specified. For the SVD method, the **Filter threshold** , which controls redundancy in the parameter space, can be adjusted.

The third panel, **Parameters** , allows the user to set adjustable parameters used during the fitting procedure. **Constraints** contains options used to place constraints on the parameters, which are useful especially when data is inadequate for deriving parameters. **Auto-reduce coupling terms** reduces redundant torsion terms in a force field. **Freeze nonbonded terms** is the default for fitting intramolecular properties. **Freeze out-of-plane terms** reduces adjustable parameters which may be redundantly used in a force field. **Use wildcards in torsion terms** is another way to reduce the number of adjustable parameters in the torsion terms. Three options are available for the **Torsional terms:\*\*** Default \***\*,** **Maximum,** and **Minimum**. The **Default** option allows the system to automatically decide the number of torsion parameters depending on the number of data points. The **Anharmonic terms** can be **Frozen to zeros\*\*** , \***\* Relaxed \*\***,** or **Derived\***\*. **The** Derived**option, anharmonic parameters are derived (not fitted) from harmonic force constants. A**Penalty factor **is used by the implemented conditional minimizer to control parameters related to bond lengths and angles. If the** Check and fix parameter **option in the** Parameter correction **section is selected, parameters will be checked against two criteria: estimated variance and specified range. If the test fails, the corresponding parameter will be fixed. On the right side,** Additional Energy Terms** may be added by clicking on corresponding terms. Note that the terms available are related to the force field functional selected.

**Fit VDW Dimer** derives VDW parameters by fitting QM data for molecular dimers. The data requirement for this function is slightly different from that for fitting molecular conformers. The QM data must be prepared for the dimer and for all monomers. For dimers, monomers configurations in different separations should be included in addition to optimized structures. This function only uses energies. Relationships between loaded models must be specified before fitting. To use this command, select the QM models, associate an initial force field, relax at least one of the LJ parameters, and open the **Fit Cluster Configuration** dialog.

This dialog contains two tabbed panels. The **Job&amp;Data** tab has two parts. On the left side, **Data to fit** lists selected models. Select the dimer model and click **Cluster**. Then select the monomer models and click **Monomer**. If the cluster contains only one monomer type, repeat the operation twice. A number after an asterisk (\*) will tell you how many times the monomer used. **Reset** clears previous settings, and­ **Remove** clears any models that are not required. The right side is very similar to that used in the **Fit Energy Data** dialog, and the **Procedure** panel is the same as that used in the **Fit Energy Data** dialog*.*

### Fit Liquid Properties

**Fit Liquid Properties** fits VDW parameters fields from liquid data. A liquid model is required instead of a single molecule. Use the **Build → Liquid Bulk** command to build a liquid box and ensure it has correct valence parameters. Then relax some nonbond parameters in the force field editor. During the fitting of valence parameters, nonbond parameters are normally fixed. Then click **Fit Liquid Properties** to open a **Fit Liquid Data** dialog. **Name, Input FF** and **Output FF** are used to identify files used in the background job. **Run NVT** generates the reference state using MD simulation. If you want to use a saved trajectory file from a previous simulation instead, click **Use saved trajectory**. If **Run NVT** is selected, enter a target temperature and click **Opt.** to examine and modify simulation conditions. If using a saved trajectory, use **Browse** to find the trajectory file. In the **Data to fit** section, select liquid data to fit into **Pressure(MPa)** and **Hv(kcal/mol)**. The temperature and pressure should correspond to the condition at which the density and heat of vaporization are to be measured.

Since only two observable data forms are used to optimize VDW parameters, the number of adjustable variables can be reduced either by freezing some VDW parameters (for example, freezing some parameters to previously optimized parameters) or by using two scaling factors (for Lennard-Johns well depth and radii, respectively). To use the latter method, select **Optimize scaling factor**. **Execute** starts the job.

### Fit Molecular Properties

**Fit Structures** fits molecular structural data, equilibrium bond lengths and angles. This command mimics an empirical fit in which force constants are frozen and structures are reproduced by adjusting the most sensitive parameters. This method uses a finite differentiation method to calculate the derivatives of structural properties with respect to adjustable parameters and fits structural properties using a least squares method. In order to use this command, parameters for bonds and angles must first be relaxed. This command opens the following **Fit Structure Data** dialog:

![](RackMultipart20220717-1-mu78nc_html_aab79f640056d8e8.png)

In the dialog, **Job Name, Input ppf File, Force field functional** and **Output ppf File** are used to identify files for the background job. **QM data** lists selected QM model. **Options** are maximum iteration and step size which controls how the fit is performed. In the **Parameters** panel is used to set adjustable parameters. In this panel, **Fix force constants, Fix out-of-plane terms,** and **Auto-reduce parameters** are useful to reduce the adjustable parameters. For the **Auto-reduce parameters** option, the _ **Structural deviation threshold** _ is used to eliminate the adjustable parameters for bond lengths and angles with deviations lower than the threshold.

**Fit Torsion Energies** fits minimized torsional energy profiles only. This command uses numerical differentiation to calculate derivatives of the minimized torsional energy profile with respect to the adjustable parameters, and then uses the derivatives in a least squares fit. **Job Name, Input ppf File, Force field functional** and **Output ppf File** are used to select files for the background job. **QM data** displays the selected QMD file, which must contain the minimized conformational energy data.

![](RackMultipart20220717-1-mu78nc_html_81c3b5acfa63b4a6.png)

There are three tabbed panels. **Restraints** lists the scanned torsion angle, identified by atom names, force constant, starting value, interval, and data point. Excepting the force constant, which is set to a default of 500, these values are taken from the QMD file and are consistent with QM calculations. **MM Options** are parameters for constrained energy minimization. **Fit Options** specify differentiation step size and fit maximum iteration, and includes an option to reduce the coupling torsional parameters.

### Additional Tools

**Analyze Fit** opens a **Fit Analysis** dialog used to view the .dft file, which records fit results. The **Fit Analysis** dialog contains two tabbed panels. The first, **Fit Merits (i/o)** shows deviations between input and fitted energies, gradients, and Hessian matrix elements. The second, **Optimized Results (i/o)**, displays comparisons between optimized structures and vibrational frequencies. The result force field is used to minimize molecules and compare results against input data for optimized structures. Two components are displayed in each of the panels. On the left, a table lists standard deviations; on the right, the correlation of input to fitted data is displayed graphically. Clicking column headers will display corresponding correlation charts for each property. Clicking any cell in the table will display the property correlation chart for that specific model. When input and fitted data agree well, all data points should be located on the diagonal line of the correlation chart. Clicking on **Data** opens another window to display the data numerically. It also displays the difference between the **Input** and **Fit** results. From this window, the data can be saved as a comma delimited (.csv) file for export to other spreadsheet applications such as Microsoft Excel.

**Estimate Charge** applies the QEq method to estimate charge parameters for selected models. To use this command, a force field must first be created and associated with the models. After selecting the models from the **Project Navigator** and clicking **Estimate Charge** , a dialog shows the input and output PPF files. After execution, the output PPF file will populate with estimated charge parameters, and partial charges are assigned to models.

**Estimate Parameters** opens an **Estimate Force Field** dialog to estimate valence and nonbond parameters for a given molecule. In this dialog, you may select the models you want to use to estimate the parameters in the **Model** panel and assign output force field names. If **Save active parameters only** is checked, the output force field will not contain any parameters not used by the selected models even if they exist in the input force field. If **Protect existing parameters** is checked, the input parameters will not be changed and only missing parameters will be created. Otherwise input parameters may be overwritten by estimated parameters. Check **Use wildcard in torsion terms** to create torsion parameters with wildcards on its end atoms. Check **Use anharmonic terms** to estimate anharmonic parameters.

**Base Parameters** opens a **Default Atom Type Properties** to modify the base parameters of atom types. Input the atom type to be modified in **Default Atom Type** and click **Load** to view the base parameters. You may change the data in the dialog and click **Save** to save the parameters.

## 4-10. Help Menu – Information, License, and Document

**About** displays the software&#39;s version and copyright information.

**Instant Help** provides additional help on some dialogs. This is complementary functionality, it is not shown on every dialog, but some of them that are not very intuitive to see the imput parameters. When you see this icon ( ![](RackMultipart20220717-1-mu78nc_html_3a7b707cacbf79cd.gif)), click it to toggle the display page.

**User Guide** will load and display this document in pdf format.

**References** lists the publications directly relevant to DFF and TEAMFF.

**License** allows the user to view and manage license information. **Agreement** shows software instructions. A license file may be requested using **Request** and installed using **Install**. Server opens a connection to a license server.

# CHAPTER 5 – EXECUTABLE COMMANDS

DFF uses three types of commands:

1. Single commands that require no parameter.
2. Array commands with parameters ending in $END
3. Dictionary commands with parameters in the form of KEYWORD=VALUE ending in $END.

The following symbols are used for simplicity:

A vertical divider ( **|** ) indicates **or** Brackets ( **\&lt;, \&gt;** ) indicates bracket contents are to be filled in by the user

## 5-1. DFFEXP.exe

This executable program exports model .msd and PPF files to different simulation engines. To use this code, first prepare an input file and then run it from the command line by typing **dffexp.exe \&lt;input\&gt;** , where **input** is the root name of the input file.

The input file should be in DFF type-A syntax. Commands are grouped into several sections in the input file, with each section starting with the identifier **$\&lt;SECTION NAME\&gt;** and ending with **$END**. Each section may have one or more lines, and the general syntax is **KEYWORD = VALUE** where the **VALUES** are alphanumeric strings. The commands are case sensitive.

For example:

_$SYSTEM_

_ROOT = C:\Program Files\ATI\Direct Force Field 7.0_

_$END_

_$TASKS_

_EXPORT = GROMACS_

_TEMPLATE = GROMACS.MD_Template_

_$END_

_$MODEL_

_INPUT = benz.msd_

_CRDEXPORT = benz.gro_

_TOPEXPORT = benz.top_

_$END_

_$FORCEFIELD_

_TYPE = AMBER_

_INPUT = benzPPF_

_EXPORT = benz.itp_

_PROTECT = YES_

_$END_

All commands for DFFEXP.exe are dictionary commands.

**$SYSTEM** specifies the path to the \&lt;dff root\&gt; directory.

**ROOT = \&lt;path\&gt;**

**$TASKS** has two entries. The first specifies which simulation engine to export to.

**EXPORT = AMBER || CHARMM || DISCOVER || GROMACS || LAMMPS**

The second is required for _GROMACS_ and LAMMPS only. It sets which template to use. **TEMPLATE = \&lt;file name\&gt;**

Several template files are stored in \&lt;dff root\&gt;/data directory, which can be added to, removed or revised.

**$MODEL** specifies topology files. It employs the follow commands:

**INPUT = \&lt;file pathname\&gt;**

This command specifies the file pathname is an MSD file. If the file is in current folder, there is no need to specify the path.

**CRDEXPORT = \&lt;file pathname\&gt;**

This specifies the coordinate file to be exported. File extension names are &quot;.prep&quot; for AMBER, &quot;.crd&quot; for CHARMM, &quot;.car&quot; for DISCOVER, &quot;.gro&quot; for _GROMACS_; and &quot;.data&quot; for LAMMPS.

**TOPEXPORT =\&lt;file pathname\&gt;** ,

This specifies the topology file to be exported. For AMBER, it is not required; for CHARMM, the .rtf file is used; for DISCOVER, the .mdf file is used; for _GROMACS_, the .top file is used; and for LAMMPS, the .in file is used.

**$FORCEFIELD** sets force field parameters. **TYPE** sets the force field functional.

**TYPE\*\*** = AMBER | CHARMM | DISCOVER | GROMACS | LAMMPS\*\*

**INPUT** specifies where the PPF file is:

**INPUT =\&lt;file pathname\&gt;**

**EXPORT** specifies where the parameter file writes.

**EXPORT** **=\&lt;file pathname\&gt;**

File extension names are .dat for AMBER, .par for CHARMM, .frc for DISCOVER, and .itp for _GROMACS_. LAMMPS does not require this command as parameters are written into the .data file.

**PROTECT = YES || NO**

**YES** sets atom types to be protected and prevent the conversion to shorter strings.

## 5-2. DFFFIT.exe

**$SYSTEM** is explained above.

**ROOT = \&lt;path\&gt;**

This command specifies the path to the \&lt;dff root\&gt; directory.

**$END**

**$COMPUTE** sets what is to be calculated. Valid entries are as follows:

**FIT** specifies fit tasks

**FIT = AUTO | CLUSter | CONFormer | LINEar | NONLinear | TORSion | STRUcture | OPTImized | VALIdation**

AUTO - use the automatic procedure,

CLUS - fit molecular clusters (dimers)

CONF - fit conformers

LINE -use linear fit routine (SVD)

NONL - use nonlinear fit routine (LMM)

TORS - fit minimum torsion profiles

STRU - fit structures only

OPTI - fit optimized structures only

VALI -validate the fit

**CALCULATE** is used for energy calculations only

**CALC = ENERgy | GRADient | HESSian**

ENER - energies only

GRAD - include gradients

HESS - include Hessian matrix elements

**OPTIMIZE** is used for energy minimization

**OPTI = YES | NO**

**INITIALIZATION** estimates initial parameters without doing any calculations

**INIT = YES | NO**

**SETTYPE** is used to assign atom types only.

**SETTypes = NO | AUTO | \&lt;definition file \&gt;**

NO - do not assign types

AUTO - assign atom types using default typing rules.

\&lt;definition file\&gt; - a definition file with an extension of ext or .def, which must be saved in the \&lt;dff root\&gt;/data folder.

**SETCHARGE** is used to set atomic charges only

**SETCharges = YES | NO**

The **COMPUTE** command must be ended with **$END**

**$END**

**$RESTRICTION** is an array command, and each entry specifies a torsion dihedral angle. The syntax for each entry is

**TORS \&lt;atom_1\&gt; \&lt;atom_2\&gt; \&lt;atom_3\&gt; \&lt;atom_4\&gt; \&lt;fc\&gt; \&lt;t0\&gt; \&lt;dt\&gt; \&lt;n\&gt;**

This command is used only with **OPTI = YES** in the **$COMPUTE** command. **\&lt;atom_i\&gt;** is an atom name of the model, and **\&lt;fc\&gt;** is a force constant used to fix the dihedral angle, usually 100-500 kcal/Mol/A2. **\&lt;t0\&gt;** is the initial dihedral angle, **\&lt;dt\&gt;** is the increment for each step, and **\&lt;n\&gt;** is the number of steps.

**$END**

**$MODEL** sets the molecular models used for calculations. It is an array command, and each entry is a file path name.

**\&lt; MSD file pathname 1\&gt;**

**\&lt; MSD file pathname 2\&gt;**

**\&lt; MSD file pathname 3\&gt;**

…

If multiple models are listed, the order must be consistent with that in the **$Data** and **$Bundle** command.

**$END**

**$DATA** lists QMD data files, which must be in the same order as in **$MODEL**

**\&lt; QMD file pathname 1\&gt;**

**\&lt; QMD file pathname 2\&gt;**

**\&lt; QMD file pathname 3\&gt;**

…

The **$DATA** command is required if the **$COMPUTE** includes **FIT** parameters.

**$END**

**$BUNDLE** sets the relationship among given **$MODEL** and **$DATA** parameters as follows:

**CLUS | CONF = \&lt;n\&gt;**

**\&lt;List of cluster or conformer 1\&gt;**

**\&lt;List of cluster or conformer 2\&gt;**

**\&lt;List of cluster or conformer 3\&gt;**

**…**

**\&lt;List of cluster or conformer n\&gt;**

**CLUS** refers to a cluster (dimer), and **CONF** refers to conformers. For one job, the **BUNDLE** can be either **CLUS** or **CONF** , but not both. The integer **n** is the number of entries. **List of cluster** contains indexes of models listed in **$MODEL** command. The dimer comes first, followed by indexes of monomers. For example, **2 1 1** indicates the second model is a dimer and the first model is the monomer. The list of conformers contains indexes of same molecules with different conformations. For example, **1 2 3 8 10 12** indicates the models listed are one molecule with different conformers.

**$END**

**$FORCEFIELD** specifies how a force field is handled. The entries are:

**TYPE = \&lt;force field functional \&gt;**

Set the force field functional to AMBER, CHARMM, CFF, etc.

**INPUT = \&lt;input PPF file pathname\&gt;**

**PROTECT = YES|NO**

If **YES,** the input parameters will not be changed.

**OUTPUT = \&lt;output file path name\&gt;**

**SAVEALL = YES|NO**

If **YES,** all parameters will be saved in the output. Otherwise, only active parameters are saved.

**AUTOPAR = YES|NO**

If **YES** , parameters will be generated if required. Otherwise, the job will stop.

**USECUTOFF = YES|NO**

If a cutoff needs to be used, use the following command:

**CUTOFF = \&lt;d\&gt;**

where **d** is a real number specifying the cutoff in angstrom. For example, **CUTOFF = 12.0**.

**BUFFER = d**

In this case, **d** is used to generate a neighboring list only. E.g. **BUFFER = 0.5** means atoms with **CUTOFF+0.5** will be used in calculating the neighbor list.

**EQUI = OFF|INPUT|DEFAULT|ALL**

indicates how to use the equivalence table. **OFF** means do not use, **INPUT** means uses what is given in the PPF file, **DEFAULT** makes new entries if required, and **ALL** commands the equivalence table to use the apparent atom types.

**SCALE14 = 0.5 0.833**

sets the scaling factors for 1-4 interactions. The first is for the VDW term, and the second is for the electrostatic term.

**$END**

**$FITOptions** specifies options for the fitting job.

**MAXGradient = \&lt;d\&gt;**

**WEIGhts = \&lt;w1 w2 w3\&gt;**

**PENAlty = \&lt;d\&gt;**

**ITERation = \&lt;n\&gt;**

**CONVergence = \&lt;d1 d2\&gt;**

**MAXTry = \&lt;n\&gt;**

**VARIance = \&lt;d\&gt;**

**TOLErance = \&lt;d\&gt;**

**AUTOcorrect = YES|NO**

**LAEMethod = AUTO|GL|SVD**

**$END**

**$PARAMETERS** sets options for force field parameters

**TORSION = MAX|MIN|AUTO**

**MAX** means all parameters will be used. **MIN** means the minimum number of torsional terms will be used. **AUTO** sets the automatic determination of the torsion terms to be used.

**WILDCARD = YES|NO**

If **YES** , the end atoms can be any atom type for the torsion term.

**NONBOND = YES|NO**

sets whether nonbond parameters are relaxed or not.

**UNHARMONIC = NO|RELAX|DERIVE**

**NO** does not permit inclusion of anharmonic terms, **RELAX** uses the anharmonic terms, and **DERIVE** calculates the anharmonic terms from the harmonic terms.

**OOPA = YES|NO**

If **YES** , **OOPA** terms will be optimized.

**ADD = \&lt;term list\&gt;**

Where the terms can be any valid force field terms such as **OOPA IMPR**

**FREEZE = \&lt;term list\&gt;**

Where terms are any valid force field term, such as **TORS, FC, NONB, OOPA,** and **LJ14**

**AUTOREDUCE = YES |NO**

If **YES** , then the software automatically freezes insensitive parameters.

**$END**

**$MMOPTIONS** set options for molecular mechanics calculations:

**CONVergence = double**

**MAXSteps = n**

**VIBRation = YES|NO**

**$END**

**$MDJOB #**

**INITIALIZE = YES | NO (YES)**

**RUN_LENGTH = n (0)**

**TIMESTEP = d (1.0 fs)**

**ENSEMBLE = NVE | NVT | NPT (NVT)**

**PRESSURE = d (0.1 MPa)**

**COMPRESSIBILITY = d (1.0 x10-6MPa/fs)**

**TEMPERATURE = d (298.2 K)**

**TEMP_CONTROL = ANDERSEN | VELOCITY_SCALE**

**TEMP_WINDOW = d (10.0 K)**

**SAVE_HISTORY = n (0)**

**$END**

**$FITVDW**

**SCALE = YES | NO**

If **YES** , only scaling factors are fit.

**TEMP = \&lt;T\&gt;**

Specifies the temperature in Kelvins

**VAPOH = \&lt;H WH\&gt;**

Sets the heat of vaporization and weighting factor

**PRESS = \&lt;P WP\&gt;**

Sets the pressure and weighting factor

**FILE = \&lt; file pathname\&gt;**

Sets the trajectory file pathname.

For multiple data sets, use a list in the following format:

**DATASET = \&lt;file pathname1 T1 H1 WH1 P1 WP1\&gt;**

**DATASET = \&lt;file pathname2 T2 H2 WH2 P2 WP2\&gt;**

**DATASET = \&lt;file pathname3 T3 H3 WH3 P3 WP3\&gt;**

**…**

**$END**

**$FITCHARGE**

**QMCH = ESP | MUL | INPU |QEQ**

**FORMAL = YES|NO**

**METHOD = ATOM_BASED|ATOMTYPE_BASED|BONDTYPE_BASED**

**SCALE = \&lt;d\&gt;**

**COMPARE = YES|NO**

**$END**

**$PRINT**

**COOR = YES|NO**

**PARA = ACT|ALL**

**DATA = YES|NO**

**INTE = YES|NO**

**VARI = YES|NO**

**DETA = YES|NO**

**DEBUG = YES|NO**

**CONSOLE = YES|NO**

**$END**

## 5-3. DFFdb.exe

**$MODEL=$OPEN: [A]**

Load the models into memory. Each line represents a model file. This command is applied by default command when using **$MODEL,** so you may omit this command. Supported file types: **msd, car, pdb, mol2**

For example:

_$MODEL=$OPEN_

_aa.msd_

_bb.msd_

_$END_

loads **aa.msd** and **bb.msd** into memory.

**$MODEL=$SAVE: [A]**

Saves model files to disk. Each line represents a model file.

For example:

_$MODEL=$SAVE_

_aa.msd_

_bb.msd_

_$END_

saves **aa.msd** and **bb.msd** to disk.

**$MODEL=$CLOSE: [S]**

Close all models (changes to these model will be lost unless saved before using this command).

**$MODEL=$SAVEALL: [S]**

Saves all models to disk. File names are same to as those used to load models. Use this command to save your work before you quit a DFF job.

**$MODEL=$SETTYPE: [D]**

Resets the atom type of models. ATTENTION: this command does not save the changes automatically. You must use the **$SAVEALL** command to save the changes.)

Parameters:

**RULER** sets the typing rule. The reserved words are **STRUCTURE** , **DFF** , and the definition file name, such **as TEAM.ext, Default.def. AMBER.def,** etc. If the definition file is an .ext file, the automatic typing rule is called first, followed by extension definitions.

For example:

_$MODEL=$SETTYPE_

_RULER=TEAM.ext_

_$END_

resets the atom typesof models in memory according to AMBER rules

**$MODEL=$PRINTTYPE: [D]**

Prints the atom type of models. ATTENTION: This command does not change the atom types of models. It just prints atom types according to your assigned rules. Use the **SETTYPE** command if you want to change atom types.

Parameters:

**RULER** sets the typing rule, e.g. **STRUCTURE, DFF, AMBER** , etc.

For example:

_$MODEL=$PRINGTYPE_

_RULER=AMBER_

_$END_

prints the atom types of models in memory according to AMBER rules.

**$MODEL=$SETFC: [D]**

Automatically assigns formal charges to the model.

Parameters:

**VALIDATE** checks total charge against a Gaussian output file (extension \*.out). The .out file must be in the same folder as the .msd file. If the file does not exist, or if the value is false, this command is skipped.

For example:

_$MODEL=$SETFC_

_VALIDATE=false_

_$END_

validates the total charge of the models in memory.

**$MODEL=$GUESSBOND: [S]**

Recalculates bond connectivity.

**$FORCEFIELD=$OPEN: [A]**

Loads the force field into memory. Each line represents a force field file. This command is applied by default when using **$FORCEFIELD** so you may omit it.

For example:

_$FORCEFIELD_

_bb.ppf_

_$END_

loads **bb.ppf** into memory.

**$FORCEFIELD=$CLOSE: [S]**

Closes the opened force field.

**$FORCEFIELD=$SETCHARGE: [S]**

Sets the partial charges of models in the **$MODEL** object according to the loaded force field.

**$DATABASE=$CREATE: [D]**

Creates a database table

Parameters:

**FILENAME** : The path to which the database is to be saved

**TABLE** : The table name

**TYPE** : The parameters type, e.g. **AMBER, TEAM, CHARMM,** etc.

**ATOMTYPE** : The typing rule of the database, e.g. **AMBER, DFF** , etc

**NOTE** : Notes appended to the table.

**$DATABASE=$OPEN: [D]**

Opens the database. One table is opened each time the command is used. Use multiple $OPEN commands if you want to open multiple tables.

Parameters:

**FILENAME** : The path to which the database is to be saved

**TABLE** : The table name.

**$DATABASE=$CLOSE: [S]**

Closes all tables.

**$DATABASE=$CHECKIN: [D]**

Checks in parameters.

A database should be opened using **$DATABASE=$OPEN** before this command is used.

Parameters:

**INPUT** : The input .ppf file name

**NOTE** : Notes to append to this check in

**VERSION** : The version number for the new parameters to be checked in

**$DATABASE=$CHECKOUT: [D]**

Checks out parameters.

A database should be opened using **$DATABASE=$OPEN** and models should be loaded using **$MODEL=$OPEN** before this command is used.

Parameters:

**OUTPUT=\&lt;file name\&gt;:** The result .ppf file name

**REQUIRED=\&lt;list of terms\&gt;:** e.g. BINC, etc. If multiple terms are given, separate each term using a space.

**TRANS=\&lt;TRUE|FALSE\&gt;:** defaults to FALSE

**PAIR=\&lt;TRUE|FALSE\&gt;:** defaults to FALSE

**$DATABASE=$ASSIGN: [D]**

Assigns the parameters. A database should be opened using **$DATABASE=$OPEN** and models should be loaded using **$MODEL=$OPEN** before this command is used. Parameters:

**OUTPUT:** The result ppf file name

**REQUIRED:** Required terms other than the general valence term, e.g. BINC, etc.

**TRANS=\&lt;TRUE|FALSE\&gt;:** defaults to FALSE

**AUTO=\&lt;TRUE|FALSE\&gt;:** defaults to FALSE

**PAIR=\&lt;TRUE|FALSE\&gt;:** defaults to FALSE

For example:

_#\_DFF_:DFFJOB\_

_$DATABASE=$OPEN_

_FILENAME=E:\DFF7\Release7.0\database_TEAMFF_.dffdb\_

_TABLE=T_AMBER_

_$END_

_$MODEL_

_PMMA.msd_

_$END_

_$DATABASE=$ASSIGN_

_REQUIRED=_

_MIXOPTION=Nonbond_

_FRAGMENT=FRAG_

_$END_

_$FORCEFIELD=$SETCHARGE_

_$FORCEFIELD=$SAVE_

_PMMA.ppf_

_$END_

_$MODEL=$DUMPALL_

_#\_DFF_:ENDJOB\_

# CHAPTER 6 – FUNCTIONAL FORMS AND FILE FORMATS

## 6.1 Force field functionals

The force field functional refers to a fixed combination of force field functions, each describes a particular interaction term. It does not include any parameters and atom types. DFF supports common force field functionals including AMBER, CHARMM, CFF, DREIDING. In addition, a new force field functional, TEAM, is created and tested for better performance.

Electrostatic interactions are calculated from atomic charges.

For each atom, the charge is calculated by:

There are two parameters, atom type charge (ATC) **,** and bond increment (BINC) ATC is particularly useful for ionic species, BINC describes a charge separation of a chemical bond between two atoms i and j.

Two types of LJ functions, LJ-12-6 and LJ-9-6 are used in force field functionals, LJ-9-6 is used in CFF only, LJ-12-6 is the most popular function.

The 1-4 nonbond terms are scaled as follows:

_AMBER: LJ is scaled by 1/2; electrostatic is scaled by 1/1.2_

_TEAM: electrostatic is scaled by 1/2._

The following table lists functional terms used in each force field functional along with sample parameters:

| **FF Type** | **Term** | **Atom Types**        | **Parameters**                               |
| ----------- | -------- | --------------------- | -------------------------------------------- |
| All         | ATC      | o_1-/2                | -0.5                                         |
| 　          | BINC     | c_4, o_1              | 0.2360                                       |
| 　          | 　       |
| 　          |
| TEAM        | BDQUA    | c_2, c_2              | 　                                           |
| 　          | ADQUA    | c_2, c_2, c_4         | 179.9511, 53.8431                            |
| 　          | TBCOS    | c_3, c_3, c_4, h_1    | 1, -0.1978, 2\*, 1.0728, 3\*, -0.0947        |
| 　          | TBCOS    | c_4, c_3, c_3, c_4    | 2\*, 5.4661                                  |
| 　          | OHARM    | c_3a, c_3o, c_4, o_1  | 0.0000, 44.0651                              |
| 　          | N12_6    | c_3                   | 3.9800, 0.0760                               |
| 　          | C_B_B    | c_2, c_2, c_4         | 8.6266                                       |
| 　          | C_B_A    | c_3, c_4, o_2         | 51.9669                                      |
| 　          | 　       | 　                    | 　                                           |
| CFF         | BQUAR    | c_2, c_2              | 1.2107, 1212.6459, -2425.2919, 2829.5072     |
| 　          | AQUAR    | c_2, c_2, c_4         | 179.8087, 53.8431, -10741.8351, -2569.8855   |
| 　          | TCS3M    | c_2, c_2, c_4, c_4    | 0.1000, -0.2500\*, 0.1200                    |
| 　          | OHARM    | c_3, c_3, c_4, c_4    | 0.0000\*, 2.3488\*                           |
| 　          | N_9_6    | c_2                   | 3.9015\*, 0.0819\*                           |
| 　          | C_B_B    | c_2, c_2, c_4         | -4.6381                                      |
| 　          | C_B_A    | c_34, c_44, h_1       | 21.4453\*                                    |
| 　          | BINC     | h_1p, o_2             | 0.3361\*                                     |
| 　          | 　       | 　                    | 　                                           |
| AMBER       | BHARM    | c_2, c_2              | 1.2057\*, 1276.7505\*                        |
| 　          | AHARM    | c_2, c_2, c_4         | 179.9975\*, 21.7689\*                        |
| 　          | TCOSP    | c_3, c_3, c_3a, c_3a  | 180.0\*, 0.9349\*, 2\*, 0.0\*, 0.0968\*, 3\* |
| 　          | IBCOS    | c_3, c_4o, c_3, h_1   | 180.0000\*, 0.0000 , 2.0000\*                |
| 　          | N12_6    | CC2H2                 | 3.9300\*, 0.0660\*                           |
| 　          | 　       | 　                    | 　                                           |
| CHARMM      | BHARM    | c_2, c_2              | 1.2057\*, 1276.7505\*                        |
| 　          | AHARM    | c_2, c_2, c_4         | 179.9975\*, 21.7689\*                        |
| 　          | TCOSP    | c_3, c_3, c_3a, c_3a  | 180.0\*, 0.9349\*, 2\*, 0.0\*, 0.0968\*, 3\* |
| 　          | IHARM    | c_34, c_34, c_44, h_1 | 0.0000\*, 73.6481\*                          |
| 　          | N12_6    | n_3                   | 3.6930\*, 0.1450\*                           |
| 　          | V14LJ    | c_2                   | 3.8250\*, 0.0910\*                           |
| 　          | 　       | 　                    | 　                                           |
| DREIDING    | N12_6    | c_4                   | 3.9300\*, 0.0660\*                           |
| 　          | BHARM    | c_4, c_4              | 1.5283 , 213.6099                            |
| 　          | ACOSH    | c_4, c_4, h_1         | 107.1210 , 54.6774                           |
| 　          | TCOSM    | h_1, c_4, c_4, h_1    | 0.0000\*, -0.1405 , 3.0000\*                 |
| 　          | OCOSH    | c_3, n_3, c_4, h_1p   | 0.0000\*, 10.0000\*                          |

### TEAM

The essential functions are:

Each term represents an energy contribution as function of bond length, bond angle, torsion dihedral angle, out-of-plane angle and nonbond atom-atom distance. The bond length is in Å; the bond angle is in _radian_; the dihedral angle is in _radian_. The averaged Wilson out-of-plane angle defined by four atoms (i-j-k-l) where i is the center atom, in _radian_.

The anharmonic parameters in bond and angle terms () can be optionally set to be:

- Zeros, the function is a harmonic function.
- Free variables.
- Derived from the harmonic parameter:

In the torsion term, the reference dihedral angle is fixed so that the energy is always 0 at :

The expansion is up to three terms with n fixed, therefore, there are three free parameters. Any integers are allowed for n, but usually n = 1, 2, or 3, in this case, the function becomes:

The nonbond parameters are given for like-atom types, for unlike atom types, the combination rule is:

The nonbond interaction functions apply to _intermolecular_ atom pairs that belong to different molecules, or _intramolecular_ atom pairs that belong to the same molecule but are separated by at least three consecutive bonds. In the case of only three consecutive bonds (1-4 interaction) between the intramolecular atom pairs, the electrostatic interaction is scaled by 0.5.

In addition, the CFF style cross-coupling terms are optionally used.

For the two bonds that form a bond angle (BB):

For each of the two bonds and the angle (BA):

For two angles with a common atom (AA):

For the center bond in a dihedral angle (BT)

For each of the two bonds in a dihedral angle (BBT)

For each of the two angles in a dihedral angle (AT)

For two angles in a dihedral angle (AAT)

### CHARMM

Functional form:

![](RackMultipart20220717-1-mu78nc_html_dd90e3363ad6d8a1.gif)

Combination rules for VDW parameters:

![](RackMultipart20220717-1-mu78nc_html_332b4c7dede3b330.gif)

**Coordinates:**

_b_ – bond length in Å.

 – bond angle in _rad_.

 – dihedral angle of four atoms bonded sequentially (i-j-k-l), in _rad_.

 – improper dihedral angle measuring out-of-plane motion for atoms (i-j-k-l) where i is the center atom, in _rad_.

_r\_\_ij_ – Nonbonded distance in Å. The atoms are either in different molecules or in the same molecule but separated by at least three consecutive bonds (1-4 and beyond interactions).

**Notes:**

1. May use separate 1,4 parameters for VDW

2. May use specific (ij and Rij, no combination rule) nonbonded parameters

3. Hydrogen bond term is not supported.

### AMBER

Functional form:

![](RackMultipart20220717-1-mu78nc_html_6313ae36ba1e936d.gif)

Combination rules for VDW parameters:

**Coordinates:**

_b_ – bond length in Å.

 – bond angle in _rad_.

 – dihedral angle of four atoms bonded sequentially (i-j-k-l), in _rad_.

 – improper dihedral angle measuring out-of-plane motion for atoms (i-j-k-l) where i is the center atom, in _rad_.

_r\_\_ij_ – Nonbonded distance in Å. The atoms are either in different molecules or in the same molecule but separated by at least three consecutive bonds (1-4 and beyond interactions).

**Notes:**

Torsion parameters are divided by a factor of 2.

1-4 VDW terms is scaled by 1/2

1-4 electrostatic is scaled by 1/1.2

### CFF

Functional form:

![](RackMultipart20220717-1-mu78nc_html_e865ad426b658fd9.gif)

Combination rules for VDW parameters:

![](RackMultipart20220717-1-mu78nc_html_5abb11f30123a48d.gif)

**Coordinates:**

_b_ – bond length in Å.

 – bond angle in _rad_.

 – dihedral angle of four atoms bonded sequentially (i-j-k-l), in _rad_.

 – improper dihedral angle measuring out-of-plane motion for atoms (i-j-k-l) where i is the center atom, in _rad_.

_r\_\_ij_ – Nonbonded distance in Å. The atoms are either in different molecules or in the same molecule but separated by at least three consecutive bonds (1-4 and beyond interactions).

**Note:**

1-4 VDW and electrostatic terms are not scaled.

### DREIDING

Functional form

![](RackMultipart20220717-1-mu78nc_html_2b0ddf0c61e2e378.gif)

Where the angle term depends on the geometry of the out-of-plane center. For non-planar geometry:

![](RackMultipart20220717-1-mu78nc_html_8d05d4da3c6ae4e1.gif)

For planar geometry

![](RackMultipart20220717-1-mu78nc_html_bd8c3bd2c3b87c3e.gif)

Combination rules for VDW parameters:

![](RackMultipart20220717-1-mu78nc_html_a627eb386a348992.gif)

**Coordinates:**

_b_ – bond length in Å.

 – bond angle in _rad_.

 – dihedral angle of four atoms bonded sequentially (i-j-k-l), in _rad_.

 – improper dihedral angle measuring out-of-plane motion for atoms (i-j-k-l) where i is the center atom, in _rad_.

_r\_\_ij_ – Nonbonded distance in Å. The atoms are either in different molecules or in the same molecule but separated by at least three consecutive bonds (1-4 and beyond interactions).

**Note** : The Exp-6 form and special hydrogen bond terms are not supported.

### GROMACS

Functional form:

![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/Images/Image5.gif)

Combination rules for VDW parameters:

![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/Images/Image4.gif)

**Coordinates:**

_b_ – bond length in Å.

 – bond angle in _rad_.

 – dihedral angle of four atoms bonded sequentially (i-j-k-l), in _rad_.

 – improper dihedral angle measuring out-of-plane motion for atoms (i-j-k-l) where i is the center atom, in _rad_.

_r\_\_ij_ – Nonbonded distance in Å. The atoms are either in different molecules or in the same molecule but separated by at least three consecutive bonds (1-4 and beyond interactions).

## 6.2 Functions

The following potential functions are supported in Direct Force Field:

### A) Valence Functions

Valence terms are defined by internal chemical coordinates - bond lengths, bond angles, dihedral angles, improper dihedral angles and out-of-plane angles. These terms are also referred as &quot;bond terms&quot; because the internal coordinates are defined by atoms that are all directly bonded.

#### Bond Potential Functions

        The bond distance between atoms _i_ and _j_ is variable in these functions.

                         ![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/Images/Functi4.gif)

Harmonic (BHARM):

![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/BHARM.GIF)

Quartic (BQUAR):

![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/BDQUA.GIF)

Derived Quartic (BDQUA):

![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/BDQUA.GIF)

Morse (BMORS):

![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/BMORS.GIF)

Restrained Harmonic (BRHAR):

![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/BRHAR.GIF)

Where rc is a fixed (not adjustable) parameter specified by user.

#### Angle Potential Functions

In these functions, the angle between two adjacent bonds is the variable:

          ![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/Images/Functi14.gif)

Harmonic (AHARM):

![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/AHARM.GIF)

Quartic (AQUAR):

![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/AQUAR.GIF)

Derived Quartic (ADQUA):

![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/ADQUA.GIF)

Truncated Harmonic (ATRNH):

![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/ATRNH.GIF)

Where  is a fixed (not adjustable) parameter specified by user.

Screened Harmonic (ASCRH):

       ![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/ASCRH.GIF)

        Where _ __1_ and ___ 2_ are user-provided fixed parameters.

Screened Vessel (ASCRV):

![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/ASCRV.GIF)

        Where r1 and r2 are user-provided fixed parameters.

Cosine (ACOS\_):

![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/ACOS_.GIF)

Cosine Harmonic (ACOSH):

![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/ACOSH.GIF)

#### Dihedral Angle (Torsion) Potential Functions

    This variable is the dihedral angle between two surfaces made by bonds i-j, j-k and bonds j-k, j-n, respectively:

                    ![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/Images/Functi25.gif)

Harmonic (THARM):

                    ![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/THARM.GIF)

Cosine Harmonic (TCOSH):

![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/TCOSH.GIF)

Cosine (P) (TCOSP):

![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/TCOSP.GIF)

Cosine (M) (TCOSM):

Triple Cosine (P) (TCS3P):

![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/TCS3P.GIF)

Triple Cosine (M) (TCS3M):

![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/TCS3M.GIF)

Biased Cosine (TBCOS):

![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/TBCOS.GIF)

Effective, it is

**IV. Improper Dihedral Angle Potential Functions**

The improper dihedral angle is measured as the dihedral angle of two surfaces made by bond pairs of j-i/i-k and n-i/i-k respectively.

                    ![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/Images/Functi34.gif)

Harmonic (IHARM):

                    ![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/IHARM.GIF)

Cosine Harmonic (ICOSH):

                    ![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/ICOSH.GIF)

Cosine (P) (ICOSP):

                    ![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/ICOSP.GIF)

Cosine (M) (ICOSM):

Triple Cosine (P) (ICS3P):

                    ![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/ICS3P.GIF)

Triple Cosine (M) (ICS3M):

                    ![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/ICS3M.GIF)

Biased Cosine (IBCOS):

             ![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/IBCOS.GIF)

#### Out of Plane Angle (OOPA) Potential Functions

    This variable is defined as the angle between a surface made by bond pair of j-j/j-n and the bond i-j:

                       ![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/Images/Functi43.gif)

Harmonic (OHARM):

                    ![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/OHARM.GIF)

Cosine Harmonic (OCOSH):

                    ![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/OCOSH.GIF)

Cosine (OCOS\_):

                    ![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/OCOS_.GIF)

### B) The Nonbond Functions

The nonbond terms refer to potential energy terms that describe interactions between two atoms that are not directly bonded, which include the intermolecular interactions and &quot;1-4 and beyond&quot; intramolecular interactions. &quot;1-4 and beyond&quot; means the atoms are at least separated by three connective bonds.

As default, the parameters of these nonbond energy functions are given for two atoms separated by distance (). The force field parameters are given in terms of atom types. By default, the parameters are given as like-atom types () in a force field, and the parameters of unlike atom types () are calculated using the combination rules.

The following functions and their combination rules are supported by DFF.

#### 1. Lennard-Jones (12-6) function

The LJ-12-6 function has three popular expressions. The first one which is used by DFF is written as:

Where corresponds to the minimum energy of -. Parameters are usually given by like-atom types, the Lorentz−Berthelot (LB) combination rule is used to calculate the parameters of unlike atom pairs:

The second expression of this function is

Where is the cross point where the energy equals zero, clearly we have

The third form is

Clearly, we have

#### 2. Lennard-Jones (9-6) Function

#### 3. general LJ-n-m function

#### 4. Buckingham potential

#### 5. Morse Function:

### C) The Cross Coupling Terms

Bond-bond (C_B_B)

                              ![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/C_B_B.GIF)

Bond-angle (C_B_A)

                              ![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/C_B_A.GIF)

Angle-angle (C_A_A)

                              ![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/C_A_A.GIF)

Bond-Torsion (C_B_T)

                              ![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/C_B_T.GIF)

Angle-Torsion (C_A_T)

                              ![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/C_A_T.GIF)

Bond-Bond-Torsion(C_BBT)

                              ![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/C_BBT.GIF)

Angle-Angle-Torsion(C_AAT)

                              ![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/C_AAT.GIF)

Urey-Bradley 1-3 Coupling (UB_13)

                              ![](/E:/DFF7/Release7.1/UserGuide7%20-%20%E5%89%AF%E6%9C%AC/Appendix/FFFPics/UB_13.GIF)

## 6.3 Functions and Parameters

| **Cat.** | **Key**                                                                                          | **Discription**                                               | **Coordinate** | **Functional Form** | **Parameters** |
| -------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- | -------------- | ------------------- | -------------- |
| Charge   | ATC                                                                                              | Atom type charge parameter, a single value assigned to atom i | Atom (i)       |
| qi       |
| BINC     | Bond increment of charge from atom j to i (a positive value means atom i gets a positive charge) | Bond (i, j)                                                   |
|  |
|  |
| VDW      | N12_6                                                                                            | LENNARD_JONES 12-6 function                                   | Atom (i)       |
|  |
|  |
| N_9_6    | LENNARD_JONES 9-6 function                                                                       | Atom (i)                                                      |

|
|

| Bond | BHARM | HARMONIC_BOND | Bond (i-j) |
|
|
| --- | --- | --- | --- | --- | --- |
| BQUAR | QUARTIC_BOND | Bond (i-j) |
|
|
| BDQUA | DERIVED QUARTIC_BOND | Bond (i-j) |
|
|
| Angle | AHARM | HARMONIC_ANGLE | Bond angle (i-j-k) |
|
|
| AQUAR | QUARTIC_ANGLE | Bond angle (i-j-k) |
|
|
| ADQUA | DERIVED QUARTIC_ANGLE | Bond angle (i-j-k) |
|
|
| ACOSH | COSINE_SQUARED_ANGLE | Bond angle (i-j-k) |
|
|

| Torsion | TBCOS | Biased (reference angles are fixed) Fourier expansion of cosine with plus sign (up to three terms in one line) | Dihedral angle (i-j-k-l) |

|
|
| --- | --- | --- | --- | --- | --- |
| TCOSM | Fourier expansion of cosine with minus sign (up to three terms in one line) | Dihedral angle (i-j-k-l) |
|
|
| TCOSP | Fourier expansion of cosine with plus sign (up to three terms in one line) | Dihedral angle (i-j-k-l) |
|
|
| TCS3M | Fixed three-term Fourier expansion of cosine with minus sign. | Dihedral angle (i-j-k-l) |
|
|

| Out-of-plane | OCOSH | Harmonic function of cosine for out-of-plane angle | Out-of-plane angle (i, j, k, l)The second (j) is the center atom |

|
|
| --- | --- | --- | --- | --- | --- |
| OHARM | Harmonic function for out-of-plane angle | Out-of-plane angle (i, j, k, l)The second (j) is the center atom |
|
|
| Improper Torsion | IBCOS | Biased (reference angles are fixed) Fourier expansion of cosine of improper dihedral angle with plus sign (up to three terms in one line) | Improper dihedral angle (1)(i, j, k, l)The third (k) is the center atom |
|
|
| IHARM | Harmonic of improper dihedral angle | Improper dihedral angle (2)(i, j, k, l)The first (i) is the center atom |
|
|

| Cross-terms | C_B_A | Bond-angle coupling; reference values are taken from corresponding bond or angle terms | Bond angle(i, j, k) |
|
|
| --- | --- | --- | --- | --- | --- |
| C_B_B | Bond-bond coupling, reference values are taken from corresponding bond terms. | Bond angle(i, j, k) |
|
|
|
| C_A_A | Angle-angle coupling | Out-of-plane angle(i, j, k, l)The second (j) is the center atom |
|
|
|
| C_B_T | Central bond and torsion coupling | Dihedral angle (i-j-k-l) |
|
|
|
| C_A_T | Angle-torsion coupling | Dihedral angle (i-j-k-l) |
|
|
|
| C_BBT | End bonds-torsion coupling | Dihedral angle (i-j-k-l) |
|
|
|
| C_AAT | End Angles-torsion coupling | Dihedral angle (i-j-k-l) |
|
|
|
| C_B2B | Endbond-endbond | Dihedral angle (i-j-k-l) |
|
|
|
| UB_13 | Urey-Bradley 1-3 coupling | Bond angle(i-j-k) |
|
|

## 6.4 Potential Parameter File (PPF) Format

PPF files use free formatting, in which columns are not fixed, and data is separated by a space (or a comma). Section 1, the equivalence table, is optional.

**Section 1 - Equivalence Table**

Line 1: file header fixed as _#DFF:EQT_

Line 2: description of terms. There are 11 terms:

_AAT - apparent atom type
NB - nonbond
ATC - atom type charge
BINC - bond increment
A/C - angle center atom
A/S - angle side atom
T/C - torsion center atoms
T/S - torsion side atoms
O/C - out-of-plane center atom
O/S - out-of-plane side atoms_

Line 3 &amp; up: equivalence table, from the apparent type to actual type used in each terms. For example:

_#DFF:EQT
#AAT : NB ATC BINC Bond A/C A/S T/C T/S O/C O/S
c_4n: c_4n c_4n c_4n c_4n c_4n c_4n c_4n c_4n c_4n c_4n : A
c_4o: c_4o c_4o c_4o c_4o c_4o c_4o c_4o c_4o c_4o c_4o : A
h_1: h_1 h_1 h_1 h_1 h_1 h_1 h_1 h_1 h_1 h_1 : A
h_1n: h_1n h_1n h_1n h_1n h_1n h_1n h_1n h_1n h_1n h_1n : A
h_1o: h_1o h_1o h_1o h_1o h_1o h_1o h_1o h_1o h_1o h_1o : A
n_3h1: n_3h1 n_3h1 n_3h1 n_3h1 n_3h1 n_3h1 n_3h1 n_3h1 n_3h1 n_3h1 : A
o_2: o_2 o_2 o_2 o_2 o_2 o_2 o_2 o_2 o_2 o_2 : A_

**Section 2 - Parameter list**

Line 1: file header fixed as **#DFF:PPF**
Line 2: force field functional, **#Protocol = CFF | AMBER | CHARMM | TEAM | DREIDING**
Line 3 &amp; up: parameter terms, generally with four sections separated by colons (:) as follows: **term : atom types : parameters : flags**

For example,

_#DFF:PPF
#PROTOCOL = CFF
ATYPE: c_4n: 6.0000\*, 12.0110\*: E 0
ATYPE: c_4o: 6.0000\*, 12.0110\*: E 0
BINC: c_4n, c_4o: 0.0351 : E 0
BINC: c_4n, h_1: -0.0007 : E 0
OHARM: c_4n, n_3h1, c_4n, h_1n: 0.0000\*, 0.0000\*: E 43
C_B_B: c_4n, c_4o, h_1: 6.9965 : E 51
C_B_A: c_4n, c_4o, h_1: 23.8853 : E 62
N_9_6: c_4n: 4.0086 , 0.0594 : E 45
N_9_6: c_4o: 4.0086 , 0.0594 : E 44
BQUAR: c_4n, c_4o: 1.5031 , 330.6238 , -661.2477 , 771.4556 : E 15
BQUAR: c_4n, h_1: 1.0946 , 356.2721 , -712.5442 , 831.3016 : E 18
AQUAR: c_4n, c_4o, h_1: 110.9436 , 54.6945 , -11.4222 , -11.7180 : E 22
AQUAR: c_4n, c_4o, o_2: 107.4400 , 104.3870 , -17.8398 , -21.9785 : E 23
TCS3M: c_4n, c_4o, o_2, h_1o: -0.9319 , -0.2864 , -0.2246 : E 37
TCS3M: c_4n, n_3h1, c_4n, c_4o: 2.7786 , 0.0744 , -0.5756 : E 40_

The following is a complete example of a PPF file for a water molecule:

_#DFF:EQT
#AAT : NB ATC BINC Bond A/C A/S T/C T/S O/C O/S
h_1w: h_1w h_1w h_1w h_1w h_1w h_1w h_1w h_1w h_1w h_1w : A, V 1.0
o_2w: o_2w o_2w o_2w o_2w o_2w o_2w o_2w o_2w o_2w o_2w : A, V 1.19
#DFF:PPF
#PROTOCOL = AMBER
BINC: h_1w, o_2w: 0.4238\*: E 0, V 1.0, S T_AMBER, R R1
N12_6: h_1w: 0.0001\*, 0.0001\*: E 0, V 1.0, S T_AMBER, R R5
N12_6: o_2w: 3.5532\*, 0.1553\*: E 0, V 1.0, S T_AMBER, R R5
BHARM: h_1w, o_2w: 1.0000\*, 450.0000\*: E 0, V 1.0, S T_AMBER, R R5
AHARM: h_1w, o_2w, h_1w: 109.4700\*, 55.0000\*: E 0, V 1.0, S T_AMBER, R R5_

## 6.5 Molecular Structural Data (MSD) File Format

MSD files are generally also freely formatted. Columns are not fixed and data are separated by space (or comma). Sections 1-3 are required, while others are optional.

**Section 1 - header**

Line 1: associated force field file (if not associated with any force field, the file name be may be left empty).
Line 2: file header fixed as **#DFF:MSD**
Line 3: file description, which can be any string with a leading **#** sign, followed by total energy
Line 4: (optional) unit-cell parameters

_#Associated PPF = sample.ppf_

_#DFF:MSD
#Model Structure Data File Energy = 0.0
PBC: 41.0514 41.0514 41.0514 90.0 90.0 90.0_

**Section 2 - Coordinates**

This section lists the number of atoms (NA) followed by NA lines, each describing the following properties of one atom: index, atom name, atomic number, apparent atom type, default atom type, atomic charge, x, y, z, molecular index, residue name and group index. Apparent atom type is used to identify force field parameters, and default atom types are used by DFF for computations. Both can be input as a wildcard ( **?** ).

_3
1 C1 6 C2 c_3a -0.1190 -9.5099 16.1579 8.3032 1 PS 0
2 H2 1 H6 h_1 0.1190 -9.0860 15.4418 9.0026 1 PS 0
3 C3 6 C1 c_3a 0.0812 -10.6996 16.8200 8.6198 1 PS 0_

**Section 3 - Connectivity**

This section starts with an integer (NB) representing number of bonds and followed by NB lines, each describing the following properties of one bond: atom 1 index, atom 2 index, and bond order. Valid bond orders are 1, 2, 3 and -2 for single, double, triple and partial double bonds.

_3
1 2 1
1 3 -2
2 3 -2_

**Section 4 (optional) Formal Charges**

**#FORMAL_CHARGE = d** starts this section, with **d** representing the total formal charge.
Line 2 is the number of atoms with formal charge assigned.
Line 3 onward lists each atom and its formal charge value.

_#FORMAL_CHARGE = 0
3
15 -1/2
16 1
17 -1/2 _

**Section 5 (Optional) Subsets**

**#SUBSET = NS** starts this section, where NS is the number of subsets. The following NS definition sections each contains the name of the subset and the number of subset members, followed by lines each listing atom indexes in each subset member.

_#SUBSET = 2
SurfactantBox_subset_1 3
$1: 1, 2, 3
$2: 4, 5, 6
$3: 9, 10, 12, 13_

_SurfactantBox_subset_0 2
$1: 8, 20
$2: 21, 25_

## 6.6 Atom Type DEFinition (DEF, EXT) File Format

DEF or EXT files contain a number of blocks, and each block defines one atom type. The difference between .def and .ext files is that the former is a complete definition _de novo_, while the latter is an extended definition based on Default definitions. The .ext definition is an optional extension to the Default definition. For default atom types that do not have extended definitions, the default definition is used.

Each definition block follows the general format:

_Define \&lt;atom type\&gt; !comments
\&lt;Substructure Specification \&gt;
[\&lt;Atom attribute string\&gt;]
[…]
End_

Line 1, the definition line, starts with **Define**. **\&lt;atom type\&gt;** is a string of any length representing the atom type symbol. The **comment** is separated from the definition by **!** and should be kept within the same line.

Line 2 is a substructure specification, written as a SMILE string consisting of element symbols, bonds and bond orders. The nested substructure, which can be of unlimited width and depth, is represented by square brackets **[]**. The more structures defined, the more specific a match will be. The elements in the substructure specification are:

1. Element Symbol – any element on the periodic table in capital case. **?** is a wildcard indicating any element. \* indicates multiple elements are allowed or not allowed. A list must be given in the atom attribute section using the keyword **element = \&lt; \&gt;**.
2. Bond orders: - for single, **=** for double, **#** for triple, **~** for partial double, **&amp;** for any.

Line 3 onward lists atom attributes for each atom in line 2. Each line corresponds to one atom and the order must match that in line 2. The attribute string must follow the syntax below:

**Atom id: [coordination=n] [,aromatic = yes|no] [,ringsize=r][,formalcharge=c] [,element = [!]list]**

where **coordination=n** is an integer indicating the coordination number (how many bonds are connected). If an integer is given, all bonds should be specified. It can be a question mark **?** indicating any coordination number is allowed. An integer following the question mark, **?n** , indicates the coordination is unlimited but **n** bonds must be specified.

**ringsize = r** is an integer indicating ring size. **\&gt;=** is allowed in addition to **=**.

**c** indicates formal charge using a string such as **+q, -2, 1,** etc.

**element = list** indicates allowed elements, which should be separated by spaces. A **!** placed in front of the list indicates disallowed elements.

Note that the first 4 characters of the above attributes are used in the definition, while the rest are optional.

**End** in the last line closes this block.

For example:

_Define n_samle ! sample for definition_

_N [-C[=O][-C[-\*][&amp;\*]]][-c]_

_atom 1: coor=3_

_atom 2: coor=3_

_atom 3: coor=?_

_atom 4: coor=4_

_atom 5: coor=?, elem=F O_

_atom 6: coor=?, elem=!P Si_

_atom 7: coor=?, arom=no, ring=\&gt;5, form=1_

_End_

_And the first nitrogen is in a non-aromatic 5-member ring, the second atom (carbon) has three bonds, also in a 5-member ring; the third (nitrogen) and last (carbon) atoms are in 5-member ring._

## 6.7 Quantum Mechanics Data (QMD) File Format

The QMD file contains quantum data. In older versions of DFF, this file also contains topologic information for the molecule by including a section at the header of the file in MSD format. For example:

_#\_DFF_:MSD
#Model Structure Data File Energy = -47947.382101
3
1 O0 8 o_2w o_2w 0.000000 -1.000000 -0.875000 -0.017310 1 UNK 0
2 H1 1 h_1w h_1w 0.000000 -1.000000 -0.113702 0.582231 1 UNK 0
3 H2 1 h_1w h_1w 0.000000 -1.000000 -1.636298 0.582231 1 UNK 0
2
1 2 1
1 3 1\_

From release 7.1.4 onward, this topologic data is not included in the QMD file. This is because the topologic data can be changed by DFF functions, while QMD data should be unchanged. In order for DFF to perform calculations using topologic data, a link to a MSD file is included in the QMD file. This link can be added or changed by using the **Associate** command. This is recorded in the first line of a QMD file. For example:

_#Associated MSD = keton.msd_

By default, the MSD file should be placed in the same folder of the QMD file. When the QMD file is moved, the associated MSD file should be moved with it.

Quantum data information format is freely formatted. Columns are not fixed and data are separated by spaces. Only sections 1, 2, and 8 are required, while others are optional. One .qmd file can contain several structures. Each structure should have the required sections 1, 2, and 8. After the last structure, a section 9 is required.

**Section 1, header**

Part 1: the associated MSD file (can be empty)
Part 2: file header fixed **! Aeon Quantum Mechanic Data Version 0.1**
Part 3: mark of **ID** label
Part 4: mark of **METHOD** label (optional)

_#Associated MSD = keton.msd_

_! Aeon Quantum Mechanic Data Version 0.1
$ID
0
$END_

_$METHOD
B3LYP/6-31G\* Force Pop=(CHelpG,Regular)
$END_

**Section 2, Basic Data**

_!------------------------------------------------------------------------------_

_! Basic Data_

_!------------------------------------------------------------------------------_

_$NUMBER OF ATOMS_

_10_

_$END !NUMBER OF ATOMS_

_$ATOM_

_!Index Symbol Number X Y Z_

_1 C 6 -1.295735 -0.118523 0.054397_

_2 C 6 0.029560 0.613385 0.192253_

_3 C 6 1.281459 -0.179593 -0.146886_

_4 O 8 0.085192 1.773221 0.552857_

_5 H 1 -1.306202 -1.021219 0.677911_

_6 H 1 -2.114783 0.540259 0.348486_

_7 H 1 -1.444815 -0.447479 -0.981899_

_8 H 1 2.163001 0.453922 -0.033472_

_9 H 1 1.371165 -1.053349 0.510930_

_10 H 1 1.231159 -0.560623 -1.174577_

_$END_

**Section 3, (optional) Energy Data**

_!----------------------------------------------------------
! Energy Data
!----------------------------------------------------------
$ENERGY
-84812.887268 kcal/mol
$END !ENERGY
$FORCES !(kcal/mol/A)
-0.716913 -5.987174 -2.555379
2.752115 -0.662026 0.665939
-1.625517 -2.123094 -1.871374
0.045693 -0.226217 -0.191085
-0.051677 -0.803779 0.290121
0.643164 -1.016603 -0.639069
-2.261426 6.214656 1.616661
-0.738376 1.817246 2.189279
-2.518061 3.433639 1.752931
4.470998 -0.646648 -1.258025
$END !FORCES_

**Section 4, (optional) Charge Data**

_!----------------------------------------------------------
! Charge Data
!----------------------------------------------------------
$TOTAL CHARGE
-0.000000 e
$END !TOTAL CHARGE
$ESP CHARGES
-0.739042
0.340667
0.158486
0.007208
0.033324
-0.025768
0.355330
-0.020934
-0.049300
-0.059971
$END !ESP CHARGES
$MULLIKEN CHARGES
-0.526655
0.294600
-0.305418
0.146243
0.152488
0.116706
-0.304082
0.145300
0.153126
0.127692
$END !MULLIKEN CHARGES_

**Section 5, (Optional) Electrostatic Properties**

_!----------------------------------------------------------
! Electrostatic Properties (Atomic Units)
!----------------------------------------------------------
$ESP
! X Y Z Potential
0.000316 0.566741 -0.152380 -18.370141
0.000132 1.330423 0.520541 -1.071977
-1.212072 -0.222454 0.021839 -14.725686
-2.089652 0.427595 -0.060418 -1.127493
-1.275350 -0.969811 -0.778655 -1.130773
-1.271076 -0.764719 0.985643 -1.136620
1.214571 -0.220036 0.019766 -14.726146
0.979593 -1.282681 -0.117743 -1.124138
1.946472 0.060080 -0.745303 -1.138253
1.692673 -0.113130 1.012963 -1.127335
$END !ESP_

**Section 6, (Optional) Poles**

_!----------------------------------------------------------
! Poles
!----------------------------------------------------------
$DIPLE !(Debye)
-0.001000 -0.256600 1.107300 (TOTAL=1.136643)
$END !DIPLE
$QUADRUPOLE
-19.824400 -20.116900 -21.402600
-0.126300 0.107500 1.912300
$END !QUADRUPOLE_

**Section 7, (Optional) Miscellaneous Options**

_!----------------------------------------------------------
! Miscellaneous Options
!----------------------------------------------------------
$OPTIONS
B3LYP/6-31G(d)
$END !OPTIONS
$DATE
22-Oct-2007
$END !DATE
$PACKAGE
x86-Linux-G03RevB.03
$END !PACKAGE_

**Section 8, Structure End-mark**

_$$$$$$$$$$$$$$$$$$$$$$$$$ -- End Of Record -- $$$$$$$$$$$$$$$$$$$$$$$$$_

**Section 9, End-mark**

_#DFF:END_

# REFERENCES

(1) GROMACS available under the GNU Lesser General Public License (LGPL), version 2.1. [http://www.gromacs.org/](http://www.gromacs.org/).

(2) LAMMPS distributed as an open source code under the terms of the GPL, distributed by Sandia National Laboratories, a US Department of Energy laboratory. [http://lammps.sandia.gov](http://lammps.sandia.gov/).

(3) Asensio, J. L.; Jimenez‐Barbero, J. The use of the AMBER force field in conformational analysis of carbohydrate molecules: Determination of the solution conformation of methyl α‐lactoside by NMR spectroscopy, assisted by molecular mechanics and dynamics calculations. _Biopolymers_ **1995** , _35_, 55-73.

(4) Wang, J. M.; Wolf, R. M.; Caldwell, J. W.; Kollman, P. A.; Case, D. A. Development and testing of a general amber force field. _Journal of Computational Chemistry_ **2004** , _25_, 1157-1174.

(5) Brooks, B. R.; Brooks, C. L.; Mackerell, A. D.; Nilsson, L.; Petrella, R. J.; Roux, B.; Won, Y.; Archontis, G.; Bartels, C.; Boresch, S.; Caflisch, A.; Caves, L.; Cui, Q.; Dinner, A. R.; Feig, M.; Fischer, S.; Gao, J.; Hodoscek, M.; Im, W.; Kuczera, K.; Lazaridis, T.; Ma, J.; Ovchinnikov, V.; Paci, E.; Pastor, R. W.; Post, C. B.; Pu, J. Z.; Schaefer, M.; Tidor, B.; Venable, R. M.; Woodcock, H. L.; Wu, X.; Yang, W.; York, D. M.; Karplus, M. CHARMM: The biomolecular simulation program. _Journal of Computational Chemistry_ **2009** , _30_, 1545-1614.

(6) Brooks, B. R.; Bruccoleri, R. E.; Olafson, B. D.; States, D. J.; Swaminathan, S.; Karplus, M. CHARMM: A program for macromolecular energy, minimization, and dynamics calculations. _Journal of Computational Chemistry_ **1983** , _4_, 187-217.

(7) Guvench, O.; Mallajosyula, S. S.; Raman, E. P.; Hatcher, E.; Vanommeslaeghe, K.; Foster, T. J.; Jamison, F. W.; MacKerell Jr, A. D. CHARMM additive all-atom force field for carbohydrate derivatives and its utility in polysaccharide and carbohydrate–protein modeling. _Journal of chemical theory and computation_ **2011** , _7_, 3162-3180.

(8) Huang, J.; Rauscher, S.; Nawrocki, G.; Ran, T.; Feig, M.; de Groot, B. L.; Grubmüller, H.; MacKerell Jr, A. D. CHARMM36m: an improved force field for folded and intrinsically disordered proteins. _Nature methods_ **2017** , _14_, 71.

(9) Jorgensen, W. L.; Tiradorives, J. THE OPLS POTENTIAL FUNCTIONS FOR PROTEINS - ENERGY MINIMIZATIONS FOR CRYSTALS OF CYCLIC-PEPTIDES AND CRAMBIN. _Journal of the American Chemical Society_ **1988** , _110_, 1657-1666.

(10) Jorgensen, W. L.; Tirado-Rives, J. The OPLS [optimized potentials for liquid simulations] potential functions for proteins, energy minimizations for crystals of cyclic peptides and crambin. _Journal of the American Chemical Society_ **1988** , _110_, 1657-1666.

(11) Damm, W.; Frontera, A.; Tirado–Rives, J.; Jorgensen, W. L. OPLS all-atom force field for carbohydrates. _Journal of Computational Chemistry_ **1997** , _18_, 1955-1970.

(12) Kony, D.; Damm, W.; Stoll, S.; Van Gunsteren, W. F. An improved OPLS–AA force field for carbohydrates. _Journal of Computational Chemistry_ **2002** , _23_, 1416-1429.

(13) MacCallum, J. L.; Tieleman, D. P. Calculation of the water–cyclohexane transfer free energies of neutral amino acid side-chain analogs using the OPLS all-atom force field. _Journal of Computational Chemistry_ **2003** , _24_, 1930-1935.

(14) Zubillaga, R. A.; Labastida, A.; Cruz, B.; Martínez, J. C.; Sánchez, E.; Alejandre, J. Surface Tension of Organic Liquids Using the OPLS/AA Force Field. _Journal of Chemical Theory and Computation_ **2013** , _9_, 1611-1615.

(15) Bernardes, C. E. S.; Joseph, A. Evaluation of the OPLS-AA Force Field for the Study of Structural and Energetic Aspects of Molecular Organic Crystals. _The Journal of Physical Chemistry A_ **2015** , _119_, 3023-3034.

(16) Harder, E.; Damm, W.; Maple, J.; Wu, C.; Reboul, M.; Xiang, J. Y.; Wang, L.; Lupyan, D.; Dahlgren, M. K.; Knight, J. L. OPLS3: a force field providing broad coverage of drug-like small molecules and proteins. _Journal of chemical theory and computation_ **2015** , _12_, 281-296.

(17) Hwang, M. J.; Stockfisch, T. P.; Hagler, A. T. Derivation of Class II Force Fields. 2. Derivation and Characterization of a Class II Force Field, CFF93, for the Alkyl Functional Group and Alkane Molecules. _Journal of the American Chemical Society_ **1994** , _116_, 2515-2525.

(18) Maple, J. R.; Hwang, M. J.; Stockfisch, T. P.; Dinur, U.; Waldman, M.; Ewig, C. S.; Hagler, A. T. Derivation of class II force fields. I. Methodology and quantum force field for the alkyl functional group and alkane molecules. _Journal of Computational Chemistry_ **1994** , _15_, 162-182.

(19) Sun, H.; Mumby, S. J.; Maple, J. R.; Hagler, A. T. An ab Initio CFF93 All-Atom Force Field for Polycarbonates. _Journal of the American Chemical Society_ **1994** , _116_, 2978-2987.

(20) Sun, H.; Mumby, S. J.; Maple, J. R.; Hagler, A. T. Ab Initio Calculations on Small Molecule Analogs of Polycarbonates. _The Journal of Physical Chemistry_ **1995** , _99_, 5873-5882.

(21) Hwang, M. J.; Ni, X.; Waldman, M.; Ewig, C.; Hagler, A. Derivation of class II force fields. VI. Carbohydrate compounds and anomeric effects. _Biopolymers_ **1998** , _45_, 435-468.

(22) Ewig, C. S.; Thacher, T. S.; Hagler, A. T. Derivation of Class II Force Fields. 7. Nonbonded Force Field Parameters for Organic Compounds. _The Journal of Physical Chemistry B_ **1999** , _103_, 6998-7014.

(23) Sun, H. COMPASS: An ab Initio Force-Field Optimized for Condensed-Phase ApplicationsOverview with Details on Alkane and Benzene Compounds. _The Journal of Physical Chemistry B_ **1998** , _102_, 7338-7364.

(24) Sun, H.; Ren, P.; Fried, J. The COMPASS force field: parameterization and validation for phosphazenes. _Computational and Theoretical Polymer Science_ **1998** , _8_, 229-246.

(25) Bunte, S. W.; Sun, H. Molecular modeling of energetic materials: the parameterization and validation of nitrate esters in the COMPASS force field. _The Journal of Physical Chemistry B_ **2000** , _104_, 2477-2489.

(26) Bunte, S. W.; Sun, H. Molecular Modeling of Energetic Materials:  The Parameterization and Validation of Nitrate Esters in the COMPASS Force Field. _The Journal of Physical Chemistry B_ **2000** , _104_, 2477-2489.

(27) Yang, J.; Ren, Y.; Tian, A.-m.; Sun, H. COMPASS Force Field for 14 Inorganic Molecules, He, Ne, Ar, Kr, Xe, H2, O2, N2, NO, CO, CO2, NO2, CS2, and SO2, in Liquid Phases. _The Journal of Physical Chemistry B_ **2000** , _104_, 4951-4957.

(28) McQuaid, M. J.; Sun, H.; Rigby, D. Development and validation of COMPASS force field parameters for molecules with aliphatic azide chains. _Journal of computational chemistry_ **2003** , _25_, 61-71.

(29) McQuaid, M. J.; Sun, H.; Rigby, D. Development and validation of COMPASS force field parameters for molecules with aliphatic azide chains. _Journal of Computational Chemistry_ **2004** , _25_, 61-71.

(30) Sun, H.; Jin, Z.; Yang, C.; Akkermans, R. L. C.; Robertson, S. H.; Spenley, N. A.; Miller, S.; Todd, S. M. COMPASS II: extended coverage for polymer and drug-like molecule databases. _Journal of Molecular Modeling_ **2016** , _22_, 1-10.

(31) Mayo, S. L.; Olafson, B. D.; Goddard, W. A. DREIDING: a generic force field for molecular simulations. _The Journal of Physical Chemistry_ **1990** , _94_, 8897-8909.

(32) Jin, Z.; Yang, C.; Cao, F.; Li, F.; Jing, Z.; Chen, L.; Shen, Z.; Xin, L.; Tong, S.; Sun, H. Hierarchical atom type definitions and extensible all-atom force fields. _Journal of Computational Chemistry_ **2016** , _37_, 653-664.

(33) Cao, F.; Gong, Z.; Wu, Y.; Sun, H. A high-throughput computing procedure for predicting vapor-liquid equilibria of binary mixtures – Using carbon dioxide and n-alkanes as examples. _Fluid Phase Equilibria_ **2017** , _452_, 58-68.

(34) Huang, H.; Cao, F.; Wu, L.; Sun, H. All-atom and coarse-grained force fields for polydimethylsiloxane. _Molecular Simulation_ **2017** , 1-10.

(35) Gong, Z.; Sun, H.; Eichinger, B. E. On the Temperature Transferability of Force Field Parameters for Dispersion Interactions. _Journal of Chemical Theory and Computation_ **2018**.

(36) Gong, Z.; Wu, Y.; Wu, L.; Sun, H. Predicting Thermodynamic Properties of Alkanes by High-Throughput Force Field Simulation and Machine Learning. _Journal of Chemical Information and Modeling_ **2018** , _58_, 2502-2516.

(37) Gong, Z.; Sun, H. Pressure-viscosity relation of 2,2,4-trimethylhexane predicted using all-atom TEAM force field. _Fluid Phase Equilibria_ **2019** , _497_, 64-70.

(38) Gong, Z.; Sun, H. Extension of TEAM Force-Field Database to Ionic Liquids. _Journal of Chemical &amp; Engineering Data_ **2019**.

(39) Lide, D. R.; Baysinger, G.; Berger, L. I.; Goldberg, R. N.; Kehiaian, H. V.; Kuchitsu, K.; Rosenblatt, G.; Roth, D. L.; Zwillinger, D. CRC Handbook of Chemistry and Physics.

(40) Figueras, J. Ring Perception Using Breadth-First Search. _Journal of Chemical Information and Computer Sciences_ **1996** , _36_, 986-991.

(41) Allinger, N. L. Conformational analysis. 130. MM2. A hydrocarbon force field utilizing V1 and V2 torsional terms. _Journal of the American Chemical Society_ **1977** , _99_, 8127-8134.

(42) Allinger, N. L.; Yuh, Y. H.; Lii, J. H. Molecular mechanics. The MM3 force field for hydrocarbons. 1. _Journal of the American Chemical Society_ **1989** , _111_, 8551-8566.

(43) Cornell, W. D.; Cieplak, P.; Bayly, C. I.; Gould, I. R.; Merz, K. M.; Ferguson, D. M.; Spellmeyer, D. C.; Fox, T.; Caldwell, J. W.; Kollman, P. A. A Second Generation Force Field for the Simulation of Proteins, Nucleic Acids, and Organic Molecules. _Journal of the American Chemical Society_ **1995** , _117_, 5179-5197.

(44) MacKerell, A. D.; Banavali, N.; Foloppe, N. Development and current status of the CHARMM force field for nucleic acids. _Biopolymers_ **2000** , _56_, 257-265.

(45) Dasgupta, S.; Yamasaki, T.; III, W. A. G. The Hessian biased singular value decomposition method for optimization and analysis of force fields. _The Journal of Chemical Physics_ **1996** , _104_, 2898-2920.

(46) Rappe, A. K.; Casewit, C. J.; Colwell, K. S.; Goddard, W. A.; Skiff, W. M. UFF, a full periodic table force field for molecular mechanics and molecular dynamics simulations. _Journal of the American Chemical Society_ **1992** , _114_, 10024-10035.

(47) Rappe, A. K.; Goddard III, W. A. Charge equilibration for molecular dynamics simulations. _The Journal of Physical Chemistry_ **1991** , _95_, 3358-3363.

(48) Riley, K. E.; Op&#39;t Holt, B. T.; Merz, K. M. Critical Assessment of the Performance of Density Functional Methods for Several Atomic and Molecular Properties. _Journal of Chemical Theory and Computation_ **2007** , _3_, 407-433.

(49) Press, W. H.; Teukolsky, S. A.; Vetterling, W. T.; Flannery, B. P. _Numerical recipes 3rd edition: The art of scientific computing_; Cambridge University Press, 2007.

(50) Sun, H. Prediction of fluid densities using automatically derived VDW parameters. _Fluid Phase Equilibria_ **2004** , _217_, 59-76.

(51) Wang, L.-P.; Chen, J.; Van Voorhis, T. Systematic Parametrization of Polarizable Force Fields from Quantum Chemistry Data. _Journal of Chemical Theory and Computation_ **2013** , _9_, 452-460.

99
