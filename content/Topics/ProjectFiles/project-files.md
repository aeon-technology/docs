# Project and File System

## Project and Project Navigator

DFF organizes user files by **Project**. A project is a folder (directory) and its sub-folders and files. The project corresponds to disk files but only DFF relevant files are shown. 

The file structure of a project is displayed on the left side of the DFF main user interface, which is called **Project Navigator**. This is an interface between your computer file system and DFF. 

Operations performed on files or folders in the Project Navigator are applied to real files. For example, deleting a file or a folder from the Project Navigator is applied to the file system of your computer. Be careful that files deleted in the Project Navigator will not be stored in the Recycle Bin. 

New files or folders can be added to a project either from DFF user interface or from system command interface. 

The file system and operation status are saved in a project file named as ".dpf", which is in the project root folder. In DFF7, the project file is saved as "\<Project Name\>.dpf" in parallel with the project folder. To open a DFF7 project, you can either select the project file or the project folder. 

*Note - the project files, like other files such as .msd, .ppf and .qmd, are backward-compatible, which means DFF8 can open DFF7 files, but DFF7 cannot open DFF8 files.*

Since a project is a folder, projects are potable, which means you can copy a project and open it from other places.


## Quick Commands 

Select one or multiple nodes in the Project Navigator and right-click mouse button brings up a list of commands that can be applied to the selected nodes. 

The **Refresh** command searches and lists all sub-folders and relevant files in the Project Navigator. 

Another useful function is **Sort**, which can be used to sort by file name, file type, or date. 

Files in the Project Navigator can be deleted, copied, moved, added, and renamed. Files in other folders on your computer can be imported into the project through DFF, which will copy the selected files to the project folder on your disk drive.

## File Types

Files used by DFF include model structure data (.msd), potential parameters (.ppf), validation result tables (.dft), graphic tables (.plot), quantum mechanics data (.qmd), and several types of text files. Each of these files types has an icon in the Project Navigator. The file types and their icons are listed as follows: 

| Description   | Icon	         |   
| ---------     |  -----------   |
| Project root folder   | ![alt text](image.png) |
| Project sub-folder	| ![alt text](image-1.png) | 
| Model structure data file (.msd)|![alt text](image-2.png) |   	
| Structure and Potential File (.spf) |![alt text](image-3.png) |	
| Quantum mechanics data file (.qmd) | ![alt text ](image-4.png) |
| Quantum mechanics data ready for fit file (.qmd) | ![alt text](image-5.png) |
| Potential parameter file (.ppf) | ![alt text](image-6.png) |	
| Fit result table file (.dft) | ![alt text](image-7.png)	|
| DFF relevant text files (.log, .dfi, .dfo) | ![alt text](image-8.png) |
