# Augment TEAMFF

If this tutorial we show how to extend the coverage of TEAMFF. We will try two ways, one is to add new parameters to existing force field table, another is to make a new force field table. 

## Add parameters to an existing table

- select a few molecules, such as a set of drug molecules, check out parameters form TEAMFF, which show missing parameters.
- Using the missing parameters to make training set.
- Parameterize the training set, with checkout parameters fixed. 
- text the results.

## Add a new force field table
Because the reaming variable parameters are limited, the fit is god optimal, which indicates the correlation of parameters and the atom types are not truly transferrable. Alternatively, we make a nwe force field independently, then use this force field together with existing ones, so that a better coverage is achieved.  

- make a new force field, with default typing rule. If you intend to add more molecules, use flexible typing rules. 
- make fragments using the empty PPF
- Parameterize all fragments together. Validate the fit.
- make a new table in TEAMFF, and check in the new force field. 

The newly created table contains parameters for the training set we used today. Teh table can be extended by adding new parameters in the future. However, we are facing the same problem as if the existing parameters are transferrable or not. 