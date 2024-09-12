# Download and install DFF

## System Requirements

Linux or Windows operating systems with at least 1 GB of free disk space and 1 GB of memory are required.
1.	Windows – versions after XP are supported. 
2.	Linux - kernel version 2.6.9 and above are supported.

DFF requires Java Runtime Environment (JRE). The DFF installation package of Windows includes JRE. On Linux platform, make sure that JRE has been installed, which can be verified by using
<br/>
`java -version`
<br/>
from command line.

## Installation
On Windows, run the installer program such as <br/>`dff8003-WinJre.exe` <br/>to start the installation process and follow the instructions. You can choose where to place the software, make sure proper written permission to the installation directory. 

The installation directory is referred as \<dff-root> in this document. Several subdirectories such as: /bin64w, /data, /database, /force fields, /images, /jar, /License, can be found in the installation directory.

On Linux, unpack the release package. For example:
<br/>
`$tar zxvf dff8003.tar.gz`
<br/>
which will create the \<dff-root>. By default the installation directory is under the current directory. You may move it to anywhere appropriate. 

## Uninstall
To uninstall DFF from Windows systems, run `uninstall.exe` which is in the \<dff-root\> directory. On Linux platform, delete the DFF installation directory.

## Start DFF
On windows, after the installation, click the DFF icon which should be created during the installation or run \<dff-root>\DFF8.bat file to start. 

On Linux, depending on system configuration, you may start DFF8.sh by clicking on it, or run DFF8.sh from command line.

Unless the license file has been installed, an error message will appear when you first start DFF. Close the error message, the "License Manager" dialog will appear for configuring a license. Please see [License](./licensing.md) to continue. 