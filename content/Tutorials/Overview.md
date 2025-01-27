# Tutorials

A tutorial project folder "\<dff-root\>\Tutorials" is included in DFF package. To use the tutorials, copy the folder to another place where you have write permission.

The first part, section A, covers basic functions of DFF: create or import molecular models, use TEAMFF force fields to assign force field, and launch simulation jobs.

Section B is about using parameterization tools. The topics are quantum mechanics data (QMD) generation, fit QMD to get charge and valence parameters, and fit liquid data to optimize LJ parameters.

Section C is about force field development for real-life simulation models. This can be achieved by adding new force fields to TEAMFF database or making MFDFF database. The former is suitable for developing a few force fields to work with existing TEAMFF database, the latter is designed to make customized force field library in large scale.

In the Tutorial directory, there is a `/database` directory, which contains both `TEAMFF.dffdb` and `demo.db` for teh exercises. 

- [A1. Project and Models](./Project/project.md)
- [A2. Build Liquid Models](./Liquid/liquid.md)	
- [A3. Use TEAMFF on Macromolecules](./Macromol/useTEAMFF.md)
- [A4. Mix TEAMFF Force Fields](./Mixff/mixFF.md)
- [B1. Fit Simple Molecule](./FitRigid/fitKeton.md)
- [B2. Fit Flexible Molecule](./FitFlexMol/fitAmnol.md)	
- [B3. Fit Molecular Dimer](./FitDimer/ditDimer.md)	
- [B4. Fit Liquid Date](./FitLiquid/fitLiquid.md)	
- [C1. Make Force Field](./MakeFF/makeFF.md)	
- [C2. Extend TEAMFF](./ExtTEAM/extTEAMFF.md)	
- [C3. Use MFDFF](./UseMFDFF/useMFDFF.md)	