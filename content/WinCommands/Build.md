# Build Menu

The Build Menu provides tools for building and manipulating bulk models for simulation tasks, which is needed for validating force fields.

- **Set PBC** is used to Add, Edit or Delete unit cell parameters for a model. Select one of the available options, specify the cell dimensions as necessary, and click **OK** to launch the job. 

- **Adjust PBC** alters the PBC box in two or three directions.  This is done by adjusting the dimensions in small steps with quick MD simulations. This command is useful for preparing interface models.

- **Repack PBC** has two sub-commands - **Repack** and **Undo Repack**. **Repack** moves molecules into a box with periodic boundary conditions (PBC) using the minimum image rule, while **Undo Repack** reverses the move. 

- **Super Cell** builds super cell by extending cell lengths for two- or three-dimensional periodic box. For a 2-D box, only the A and B edges can be extended. The extension is accomplished by multiplying the cell edge lengths by integers.    

- **Bulk Liquid** builds a molecular liquid model as a cubic box (A=B=C) or a slab (A=B≠C) box. Molecules are placed with random orientations in the box at low density initially and then compressed to a targeted density. For detail explanation click [here](./Build-Liquid-Bulk.md).

- **Liquid Interface** builds an interface of two phases (A and B) of liquids, optionally with an interphase between (X), using compression method. It opens a Liquid Interface dialog for setting the options and starting the computation. Click [here](./build-Liquid-Interface.md) for details.

