## Common Use Cases
The functionality of DFF includes 
1) Use TEAMFF (Standard version)
2) Augment TEAMFF (Professional version)
3) Make specific force fields (Professional version) 


### Use TEAMFF
The most common use DFF is to assign force field parameters using TEAMFF database. The procedure is similar to using any other traditional force fields.
Prepare or import a molecular model for simulation, then select the force field 
type (e.g. AMBER, TEAM, CHARMM,...) to be used. The selection of force field type is often related to the simulation software intended to use. The difference between TEAMFF and tradition force fields is that several force fields can be used together in the order as given in TEAMFF. The parameters and atom types obtained are prepared as input files for designate simulation software. 

### Augment TEAMFF

The advantage of TEAMFF is its extensibility. To augment TEAMFF can be done in one of two ways, one is to add new parameters to existing force field, another is to add a new force field table. Both start with generate a training set for the new parameters. Given a force field in TEAMFF, if required parameters are missing, DFF will generate the required molecular fragments, which form the training set for new parameterization. Follow the procedure in this document to make a new force field. If the new parameters are added to existing force field, check-in the new force field to the existing force field table. If a new force field is added to augment the database, create a table and check-in the new force field, then the new force field can be used together with the existing one. 


### Make Customized Force Field Using MFDFF Method. 

Traditional force fields consistently face challenges in terms of coverage and accuracy. This stems from poorly defined transferability assumed in force field parametrization, which doesn't always yield optimal results. In essence, any data model derived from regressing a diverse and large dataset, regardless of the regression methodology employed, inherently involves a trade-off between coverage and accuracy.

From an individual user's perspective, this broad coverage may not always be the ideal solution. Given that it's possible to construct a force field directly from quantum mechanical data, a superior approach involves representing a smaller, specific subspace of interest. This approach ensures the most precise representation of the underlying quantum mechanical description. This is where DFF comes into play, offering the opportunity for such specialization. 

The solution includes a database (QMDFF) that stores QM data of fragments and developed force fields for molecular systems identified by constituent fragments. 

For any target system, DFF parses the structure data and search database for force field. If none exists, a new force field will be created using the fragments as training set. Since fragments often shared by different molecules and the QM data of fragments are saved in the database, the requirement of expensive QM computations is minimized. The fitting and validation of force field is the same as explained above. If successful, the result force field is saved in the database for reuse.
