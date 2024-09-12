## Common Use Cases
The functionality of DFF includes 
1) Use TEAMFF (Standard version)
2) Augment TEAMFF (Professional version)
3) Make specific force fields (Professional version) 


### Use TEAMFF
Using TEAMFF is similar with the online version, with additional features of build molecular models, flexibility of handling the parameter assignments. 

### Augment TEAMFF

Augment TEAMFF database can be done in a couple of ways. To add new parameters to an existing force field is challenging and often problematic because of conflicts. A better practice is to put the new parameters into a new force field table and then use the table together with existing ones. 

To make new force field starts from identifying training set. Given selected force field type and force fields, if TEAMFF is incomplete, molecular fragments that contains the absent parameters will be created and saved, which form the training set.

Next, execute Gaussian calculations to generate quantum mechanics data (QMD) for the training set. DFF provide automatic methods that efficiently sample the potential energy surface for parametrization.

Using the QMD files, carry out parameterization using the automated fitting program. The validation of parameterization is automatically conducted at the the of fitting. Default LJ-12-6 parameters, sourced from prior work, are used and fixed. The LJ-12-6 parameters can be optimized with reliable experimental liquid data. 

When the force field is completed, create a new force field table in TEAMFF. The table can be used with other force fields in the same force field type.


### Make specific force field from QM data 

Traditional force fields consistently face challenges in terms of coverage and accuracy. This stems from poorly defined transferability assumed in force field parametrization, which doesn't always yield optimal results. In essence, any data model derived from regressing a diverse and large dataset, regardless of the regression methodology employed, inherently involves a trade-off between coverage and accuracy.

From an individual user's perspective, this broad coverage may not always be the ideal solution. Given that it's possible to construct a force field directly from quantum mechanical data, a superior approach involves representing a smaller, specific subspace of interest. This approach ensures the most precise representation of the underlying quantum mechanical description. This is where DFF comes into play, offering the opportunity for such specialization. 

The solution includes a database (QMDFF) that stores QM data of fragments and developed force fields for molecular systems identified by constituent fragments. 

For any target system, DFF parses the structure data and search QMDFF database for force field. If none exists, a new force field will be created using the fragments as training set. Since fragments often shared by different molecules and the QM data of fragments are saved in the database, the requirement of expensive QM computations is minimized. The fitting and validation of force field is the same as explained above. If successful, the result force field is saved in the database for reuse.
