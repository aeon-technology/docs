# Extensibility of TEAMFF

There are twp ways to expand the coverage of TEAMFF. One is to add new atom types and parameters using the inheritance nature of atom type definitions[^1]. Another is to make new force fields using the feature of combination of force fields.

## Add Atom Types and Parameters

The simplified chart below illustrates the relationship between atom types, parameters and chemical space. 

![alt text](image.png)

Two levels of atom types, old (To) and new (Tn), are shown in this chart. The new atom types (child nodes) are derived from the old ones (parent nodes). Parameters Po(To), Po(Tn), Pn(To), and Pn(Tn) represent old or new parameters associated with old or new atom types, respectively. The chemical space is divided in four regions, I, II, III, and IV. In the HAD scheme, a higher level of atom-type definitions represents a broader chemical space than a lower level does. For example, Figure 2 shows that To, at a higher level, represents four regions while Tn, at the lower level, represents only regions II and III. Note that force field parameters associated with atom types are not necessarily complete. We assume that the old parameters with old atom types Po(To) cover regions I, II, and III, but not region IV. We further assume that region I is the training set used to develop Po(To) so that region I is covered accurately; regions II and III are thus covered based on the transferability of parameters. Given that atom types are completely defined, one of the following two scenarios may sometimes occur:

1) One of the scenarios is represented by region IV. In this case, parameters are insufficient to cover this region in a chemical space represented by the old atom types (To). Thus, new parameters must be derived, and this derivation can be performed by selecting a training set from region IV. This procedure is relatively easy because the same atom types are used and the new parameters do not affect the coverage of other regions.

2) The other scenario is represented by regions II and III. In this situation, the parameters Po(To) are sufficient but not accurate. New atom types (Tn) must be introduced and new parameters based on the new atom types Pn(Tn) must be developed. As the forcefield parameters associated with the new atom types are not necessarily complete, we assume region II is covered by the new parameters but region III is not. Consequently, region III is not covered by any parameters because the new atom types (Tn) replaced the old atom types (To) that represented this region. This phenomenon is a common failure when a forcefield is extended: coverage is reduced as new atom types are introduced. However, this problem can be solved naturally by using the HAD method. Because new atom types (Tn) are derived from old atom types (To), we can copy old parameters associated with old atom types to new parameters associated with the new atom types for region III, as denoted by Po(Tn). Thus, region III retains coverage by the old parameters while gaining coverage under the new atom types.

Force field transferability is implemented during the parameterization process. Old parameters are often transferred and fixed as new parameters are derived because molecules share common chemical subunits. In other words, new parameters are derived within the constraints of old parameters. This process itself ascertains that old parameters are transferable, and that new parameters work consistently with the old parameters. 


## Augment TEAMFF

The most outstanding feature of TEAMFF is that multiple force fields can be used together, which offers the possibility of easy extensibility.

DFF can automatically generate required molecular fragments from missing parameters for parameterization. For example, a simulation model contains 10 kinds of molecules (e.g. water, methanol, protein), among them 8 are completely covered by TEAMFF, but 2 kinds of molecule show missing parameters. DFF will generate required fragments for the 2 kind of molecules. If a new force field is made by using these fragments and added to TEAMFF, the model is completely covered.

The identification of fragments depends on the atom types, so the typing rule must be the same to make sure the new force field includes all required parameters. As a general practice, the force field type should be the same. 

Given the training set, force field type and atom typing rules, a new force field can be made by using the [procedure](../Parameters/introduction.md) explained previously. 


## REFERENCE
[^1] Jin, Z.; Yang, C.; Cao, F.; Li, F.; Jing, Z.; Chen, L.; Shen, Z.; Xin, L.; Tong, S.; Sun, H. Hierarchical atom type definitions and extensible all-atom forcefields. Journal of Computational Chemistry 2016, 37, 653-664.
[^2] Lorentz, H. A. (1881). "Ueber die Anwendung des Satzes vom Virial in der kinetischen Theorie der Gase". Annalen der Physik. 248 (1): 127–136. Bibcode:1881AnP...248..127L. doi:10.1002/andp.18812480110.
[^3] Daniel Berthelot "Sur le mélange des gaz", Comptes rendus hebdomadaires des séances de l’Académie des Sciences, 126 pp. 1703-1855 (1898)