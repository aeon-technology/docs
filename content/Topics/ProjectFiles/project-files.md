# Project and File System

## Project and Project Navigator

DFF organizes user files by project. A project is a folder and all its sub-folders and files in the file system, a project file ".dpf" that saves the properties of the project is placed in the folder. 

The file structure of a project is displayed on the left side of the DFF user interface using a computer tree structure, which is called Project Navigator. This is an interface between your computer file system and DFF. Each node in the Project Navigator tree corresponds to a file or folder in the file system. Note only DFF-relevant files are displayed. 

Operations performed on files or folders in the Project Navigator are applied to real files. For example, deleting a file or a folder from the Project Navigator is applied to the file system of your computer. Be careful that files deleted in the Project Navigator will not be stored in the Recycle Bin. 

New files or new folders can be added to the Project Navigator from DFF. Since any sub-folders under the project folder are considered as a part of the project, if a folder or file is added to the project folder or its sub-folders in the operating system, it will be treated as a part of the project. 

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
