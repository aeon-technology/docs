# PROJECT NAVIGATOR

The Project Navigator is an interface between your computer files and DFF. Operations performed on files or folders in the Project Navigator are applied to real files. For example, deleting a file or a folder from the Project Navigator also immediately deletes it from your computer. New files or new folders can be added to the Project Navigator from DFF. Since any sub-folders under the project folder are considered as a part of the project, if a folder or file is added to the project folder or its sub-folders in the operating system, it will be treated as a part of the project. 

## FILE TYPES
Files used by DFF include molecular structure data (.msd), potential parameters (.ppf), validation result tables (.dft), quantum mechanics data (.qmd), and text files. Each of these files types has a unique icon in the Project Navigator. 

## Navigator Commands
Commands can be applied to a project by selecting a node and right-clicking mouse. Depends on the type of node or files, different operations can be applied.  

On the root node (.dpf)
- **Larger Font** - enlarge the font size of the Navigator
- **Smaller Font** - reduce the font size of Navigator

On any folder or file node, several common commands can be applied, which are self-explaining:

- **New** to create a new empty model 
- **Open** to open a model file from disk
- **Copy** to make a copy of the file or folder
- **Cut** to cut the file or folder off the project tree
- **Paste** to paste the cut object.  
- **Delete** to delete the object.
- **Rename** to rename a project

On folders
- **Refresh** to reload all relevant files for current folder
- **Sort** to arrange all files using name, type or modify date
- **Open in explorer** - to see current folder in Windows's explorer.

On files, various commands can be applied depending on the type of files. The most common ones are:

For MSD node:
- **Associate PPF** to assign a force field (PPF file) to the model
- **Dissociate PPF** to remove the assigned force field.

For QMD file
- **Create MSD** - to extract the structure of lowest energy and save into a MSD file.
