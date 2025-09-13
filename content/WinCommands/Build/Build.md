# Build Menu

The Build Menu provides tools for building and manipulating bulk models for simulation tasks, which is needed for validating force fields.

- **Set PBC** is used to Add, Edit or Delete unit cell parameters for a model. Select one of the available options, specify the cell dimensions as necessary, and click **OK** to launch the job. 

- **Adjust PBC** alters the PBC box in two or three directions.  This is done by adjusting the dimensions in small steps with quick MD simulations. This command is useful for preparing interface models.

- **Super Cell** builds super cell by extending cell lengths for two- or three-dimensional periodic box. For a 2-D box, only the A and B edges can be extended. The extension is accomplished by multiplying the cell edge lengths by integers.    

- **Pack PBC** has two sub-commands - **Repack** and **Undo Repack**. **Repack** moves molecules into a box with periodic boundary conditions (PBC) using the minimum image rule, while **Undo Repack** reverses the move.

- **Liquid Bulk** builds a molecular liquid model as a cubic box (A=B=C) or a slab (A=B≠C) box. Molecules are placed with random orientations in the box at low density initially and then compressed to a targeted density. For detail explanation click [here](./Build-Liquid-Bulk.md).

- **Bilayer Interface** builds an bilayer interface, which is a boundary region between a bilayer region (A) and two substances (B), most commonly liquid or solid region, and optionally an interfacial region (X) such as surfactant. This model is critical for processes like cell membrane functions, drug delivery, and battery performance. 
of two phases (A and B) of liquids, optionally with an interphase between (X), using compression method. It opens a Liquid Interface dialog for setting the options and starting the computation. Click [here](./build-Liquid-Interface.md) for details.

- **Build With Packmol** build bulk or interface simulation models using Packmol program. The dialog has two parts, 'Components' and 'Structure'. In the 'Component' section, molecular models should be selected in the order of descending size so that the insertion is more efficient. Set the 'Count' (number) of each molecule model, the relative weights are calculated when `Enter` is hit in any cell of 'Count'. In the 'Structure' section, two types of simulation model can be built by using the 'Components'. 'Bulk', either 'Cubic' or 'Rectangular' box can be built as mixtures by selecting more than one components; 'Interface' is built as single components in each phase.