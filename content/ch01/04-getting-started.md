# Getting Started

## System Requirements

Linux or Windows operating systems with at least 1 GB of free disk space and 2 GB of memory are required.

1. Windows – versions after XP are supported.
2. Linux - kernel version 2.6.9 and above are supported.

## Installation

DFF requires _Java Runtime Environment (JRE)_. The DFF installation package for _Windows_ includes _JRE_, which will not replace any _JRE_ installed on your computer. On _Linux_ platform, ensure that _JRE_ has been installed. This can be verified by using "java -version" in command line. For example:

```sh
$ java -version
openjdk version "1.8.0_201";
OpenJDK Runtime Environment (build 1.8.0_201-b09)
OpenJDK 64-Bit Server VM (build 25.201-b09, mixed mode)
```

On Windows, run the installer executable such as `dff7205-WinJre.exe` to start the installation process and follow the instructions of the installer. You must have a written permission to the installation directory, which is referred as `<dff root>` in this document.

On _Linux_, unzip the release package:

```sh
$ tar zxvf dff7.tar.gz
```

A subdirectory named `DFF7` should be placed in current directory. It contains several subdirectories such as: `bin64x`, `data`, `database`, `forcefields`, `images`, `jar` and a shell script: `dff7.sh`.

_Linux_ may not support all languages. Restricting the language to English for any non-English versions of _Linux_ is recommended. From the command shell running DFF, execute the following command to set the language to English only.
_If you are using B shell:_

```sh
$ export LC_ALL =
```

If you are using C shell:

```sh
$ setenv LC
```

## Uninstalling

To uninstall DFFfrom Windows system, run "Unistall.exe" which is located in the `<dff root>` directory. On Linux platform, delete the DFF installation directory.

## Starting

To start the software, double click on the DFF icon on Windows. On _Linux_, DFF can be started by running the shell script `dff7.sh`:

```sh
$ sh dff7.sh
```

The DFF user interface is divided into three areas. At the top are the _Command Menu_ and _Tool Bar_, at the left is the _Project Navigator_ which lists files and sub folders in current project, and in the center of the window are _Main Panels_ for displaying molecular models

<mark>TODO: An UI illustration is missing here</mark>

## Licensing

Two types of license modes, local or floating, can be used with DFF. In both cases the license is node-locked to a specific computer. The local mode allows usage of DFF on the same computer that is licensed. The floating mode allows usage of DFF on any computer (client) that can access a licensed computer (server). The license period (either termed or perpetual), as well as the number of concurrent usages of DFF, are specified by a license file.

The license related files, `License.txt` and `License.ini` are saved in `<dff root>/License` folder. `License.txt` is the license file which specifies the license products, number of license and license terms. `License.ini` is a configuration file specifying the IP address and port number of a license server. To use the local license mode or on a license server, a valid `License.txt` is required, `License.ini` is ignored. To use a floating license, only `License.ini` is required.

### Installation and Configuration

Install and start DFF. If the license is not installed, an error message will appear, close the error message, the **License Manager** dialog will appear:

<mark>TODO add image</mark>

This dialog can also be opened by using **Help** → **License** command from DFF user interface. There are four command buttons on this dialog.

**Request** is used to generate a license request file. Click this button and follow the instructions to generate a license request form; send this form to your DFF distributer to obtain a license file.

**Install** is used to install the license file. Click this button to allocate the license file and install it. The license file is copied to `<dff root>/License/License.txt`. The license file must be issued for the same computer.

**Configure** is used to set up a floating license. The default values are `localhost` and `null` as space holders. To use a floating license set the IP address and port number of the licensed server. For example:

<mark>TODO add image</mark>

Which assumes a DFF license server has been set up running on a computer identified by the IP address and accessible through the port numbered as `3583`.

### License Server

License server is an executable code named as `dfflsv.exe`. It is not necessary to install entire DFF package, but only the server code, `dfflsv.exe` and the license file, `License.txt`. The file structure should look like this (e.g. on Linux):

```
<dff root>/bin64x/dfflsv.exe
<dff root>/License/License.txt
```

To see how to use this command, type

```sh
$ ./dfflsv.exe help
```

To start the license server:

```sh
$ ./dfflsv.exe start
```

which sets the license server using default port number `3583` in background. To use a different port, such as `3580`:

```sh
$ ./dfflsv.exe start 3580
```

The status of license server can be checked by:

```sh
$ ./dfflsv.exe status
```

To stop the license server:

```sh
$ ./dfflsv.exe quit
```

To restart the server:

```sh
$ ./dfflsv.exe reset
```

This command can be also used to generate a license request from command line

```sh
$ ./dfflsv.exe request
```

To put the server in background on Linux you can simply put `&` in the end of above commands. You can also set `dfflsv.exe` to run as a server that automatically starts on Linux or Windows. On Windows, this can be done by using Windows Task Schedule, which is also the way to have `dfflsv.exe` running on background.

## Install External Software

The user interface of DFF directly integrates with the quantum mechanics software suites _GAUSSIAN_. This software package must be installed and configured on the same computer, and the environment variables must be properly set. Please refer to the documentation of Gaussian packages for more information. Once the software is installed and configured, it can be started directly from DFF interface.

The DFF installation package includes software packages of _GROMACS_[^1] and _LAMMPS_[^2], which can be called directly from DFF interface.

[^1]: GROMACS available under the GNU Lesser General Public License (LGPL), version 2.1. [http://www.gromacs.org/](http://www.gromacs.org/).
[^2]: LAMMPS distributed as an open source code under the terms of the GPL, distributed by Sandia National Laboratories, a US Department of Energy laboratory. [http://lammps.sandia.gov](http://lammps.sandia.gov/).
