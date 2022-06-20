# TEAMFF

TEAM-FF stands for Transferable, Extensible, Accurate and Modular force field. Several novel and patent-pending techniques make TEAMFF outstanding from traditional force fields. It is not only a database that contains large number of high quality force field parameters, but also an open database that can be easily extended by adding force field parameters or force fields.

A key concept is that TEAMFF contains multiple force fields that can be used together. That means parameters can be taken from different tables even though the force fields are independently developed. The quality of mixing depends on how those force fields are developed. Since nonbond interaction (VDW and electrostatic) terms are generally transferable using the common (e.g. Lorentz-Berthelot) combining rules, the default is to mix nonbond terms only.

Two major families of force fields are fully supported and continually developed:
AMBER family:

- AMBER-General
- AMBER-IonLiq

TEAM family:

- TEAM-General
- TEAM-IonLiq
- TEAM-Zeolite

In addition, a set of basic force fields:

- TEAM-Basic
- AMBER-Basic
- CHARMM-Basic
- CFF-Basic
- DREIDING-Basic
