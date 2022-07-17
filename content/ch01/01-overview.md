# Overview

Direct Force Field (DFF) is a software designed for development and deployment of force fields. DFF is offered in two versions, Standard and Professional. The Standard version is designed for deployment of force fields, and the Professional version has additional functions for the development of force fields.

Computer database technology is used to manage force fields in DFF environment. Direct Force Field Database (DFFDB) is a software that support multiple database tables, each is an independent force field that has force field functional, typing rule and parameters. Since each force field can be developed independently and multiple force fields in the same force field functional can be used together, DFFDB enables extensibility without compromise of accuracy.

Using DFFDB, a force field database titled as TEAMFF is developed and included in DFF package. TEAMFF contains multiple force fields in common force field functionals including AMBER, CHARMM, CFF, DREDING, and TEAM. Among these force field functionals TEAM and AMBER are continually updated. These force fields provide a broad coverage of common organic molecules, polymers, drug-like molecules, zeolites, ionic liquids, and metal oxides. TEAMFF can be used with molecular dynamics packages, GROMACS and LAMMPS, directly from DFF.

The central feature of DFF is to develop new parameters or new force fields. A set of parameterization tools, which are designed for the tasks of making the training set, generating quantum mechanics data (QMD), deriving force field parameters by fitting QMD and physical data of liquids data, and validating the derived force field parameters, has been implemented.
DFF is delivered with a window-based graphical user interface, enabling easy access of the functionality provided. It runs on various Windows and Linux operating systems. Most functions can be executed from command line without the interface, enable integration of the software with other simulation environments.
