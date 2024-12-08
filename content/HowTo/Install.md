# Download and Install DFF

## System Requirements

Linux or Windows operating systems with at least 2 GB 
of free disk space and 1 GB of memory are required.
1.	Windows – versions after XP are supported. 
2.	Linux - kernel version 2.6.9 and above are supported.

DFF requires Java Runtime Environment (JRE). The DFF 
installation package of Windows includes JRE. On Linux 
platform, make sure that JRE has been installed, which 
can be verified by using
<br/>
`java -version`
<br/>
from command line.

## Installation
On both Windows and Linux, run the installer program 
such as <br/>`dff8006w.exe` or `dff8006x.exe` <br/> to 
start the installation process and follow the instructions. 
You can choose where to place the software, make sure 
you have written permission to the installation directory.

By default, DFF is installed on system directories such as 
`Program Files` on Windows or `/usr/local` on Linux. 
You need to be Administrator on Windows or use `sudo` prefix 
command on Linux to run the installer. On linux, change the 
permission after the installation so that the software is 
accessible to all users on the system, such as:

`sudo chmod -R 755 /usr/local/DirectForceField`

The installation directory is referred as \<dff-root> in 
this document. Several subdirectories such as: /bin64w, 
/data, /database, /force fields, /images, /jar, /License, 
can be found in the installation directory.

## Uninstall
To uninstall DFF from Windows systems, run `uninstall_w.exe` 
or `uninstall_x` which is in the \<dff-root\> directory. 

## Start DFF

On windows, a shortcut link will be created by the installer. 
Click the link to get DFF user interface started. If the link does not start DFF, browse to the installation directory 
`<dff-root>\bin64w` and run `dffwin.exe` to start the program. 
You can manually create a shortcut link to this program.

On Linux, the installer will add a PATH to your `.bashrc` 
configuration file. You may need to source the configuration 
file or restart a terminal, and then type `dffwin.exe` from 
command line to start the program.

Unless the license file has been installed, an information 
message will appear when you first start DFF. Close the message, the "License Manager" dialog will appear for configuring a license. Follow the instruction to set up a license. For more details, read [License](./License.md) to continue. 

*If DFF is installed in a folder that needs administrator 
privilege, to configure license needs administrator's privilege. To start DFF using `run as administrator` on windows or using `sudo` prefix on Linux. Alternatively, you can manually copy the authorized license file to \<dff-root\>\License.* 