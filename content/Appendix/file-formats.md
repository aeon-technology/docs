# File Formats

## 1. Molecular Structure Data (MSD) File

MSD files are in free format, columns are not fixed and separated by space. The keywords are prefixed by \$
sign. The comments or labels are prefixed by \# sign, 
can be edited. 

### Section 1 - header

Several keywords may be given to specify the model.

$ForceField = < the path to ppf linked to this model >
$TypingRule = < the typing rule used for assign atom type >

For example:
```#DFF:MSD 2.0
#ForceField = E:\DFF8\MyFF.ppf
#TypingRule = Default
```

### Section 2 - Atoms
This section starts with keyword: \$NumAtom = < the number of atoms > and followed by lines of atomic data. In each line, the order of data is:
index, atomic number, atom type, atomic charge, coordinate x, coordinate y, coordinate z, molecule id, residue id, and group id. 

For example, 
```
$NUMATOM = 21
1 6  C_3   0.3165 -4.1082 -0.9024 -0.1570  1    UNK   0
2 6  C_3A  0.0770 -2.6080 -1.1963 -0.1397  1    UNK   0
3 6  C_3A  0.1824 -1.4993 -0.1274 -0.1188  1    UNK   0
```

### Section 3 - Connectivity
This section starts with keyword $NumBond = < the number of bonds > and followed by data of each bond: atom 1 index, atom 2 index, and bond order. Valid bond orders are 1, 2, 3 and -2 for single, double, triple and partial double bonds.
```
$NUMBOND = 3
1    2    1
1    3   -2
2    3   -2
```

### Section 4 (optional) 
$FORMAL_CHARGE starts this section, with d representing the total 
```
$FORMAL_CHARGE = 0
3
15   -1/2    
16    1    
17   -1/2  
```

$SUBSET = NS starts this section, where NS is the number of subsets.  The following NS definition sections each contains the name of the subset and the number of subset members, followed by lines each listing atom indexes in each subset member.
```
$SUBSET = 2
SurfactantBox_subset_1 3
$1: 1, 2, 3
$2: 4, 5, 6
$3: 9, 10, 12, 13
SurfactantBox_subset_0 2
$1: 8, 20
$2: 21, 25
```

## 2. Potential Parameter File (PPF)  

PPF files use free formatting, in which columns are not fixed, and data is separated by a space (or a comma). Section 1, the equivalence table, is optional.

### Section 1 - Equivalence Table
Line 1: file header fixed as #DFF:EQT
Line 2: description of terms. There are 11 terms:
AAT - apparent atom type
NB - nonbond
ATC - atom type charge
BINC - bond increment
A/C - angle center atom
A/S - angle side atom
T/C - torsion center atoms
T/S - torsion side atoms
O/C - out-of-plane center atom
O/S - out-of-plane side atoms
Line 3 & up: equivalence table, from the apparent type to actual type used in each terms. For example:
```
#DFF:EQT
#AAT : NB ATC BINC Bond A/C A/S T/C T/S O/C O/S
c_4n : c_4n c_4n c_4n c_4n c_4n c_4n c_4n c_4n c_4n c_4n : A
c_4o : c_4o c_4o c_4o c_4o c_4o c_4o c_4o c_4o c_4o c_4o : A
h_1  : h_1 h_1 h_1 h_1 h_1 h_1 h_1 h_1 h_1 h_1 : A
h_1n : h_1n h_1n h_1n h_1n h_1n h_1n h_1n h_1n h_1n h_1n : A
h_1o : h_1o h_1o h_1o h_1o h_1o h_1o h_1o h_1o h_1o h_1o : A
n_3h1: n_3h1 n_3h1 n_3h1 n_3h1 n_3h1 n_3h1 n_3h1 n_3h1 n_3h1 n_3h1: A
o_2  : o_2 o_2 o_2 o_2 o_2 o_2 o_2 o_2 o_2 o_2 : A
```

### Section 2 - Parameter list
Line 1: file header fixed as #DFF:PPF
Line 2: forcefield type, #Protocol = CFF | AMBER | CHARMM | TEAM | DREIDING
Line 3 & up: parameter terms, generally with four sections separated by colons (:) as follows: term : atom types : parameters : flags
For example,
```
#DFF:PPF
#PROTOCOL = CFF
ATYPE: c_4n: 6.0000*, 12.0110*: E 0
ATYPE: c_4o: 6.0000*, 12.0110*: E 0
BINC: c_4n, c_4o: 0.0351 : E 0
BINC: c_4n, h_1: -0.0007 : E 0
OHARM: c_4n, n_3h1, c_4n, h_1n: 0.0000*, 0.0000*: E 43
C_B_B: c_4n, c_4o, h_1: 6.9965 : E 51
C_B_A: c_4n, c_4o, h_1: 23.8853 : E 62
N_9_6: c_4n: 4.0086 , 0.0594 : E 45
N_9_6: c_4o: 4.0086 , 0.0594 : E 44
BQUAR: c_4n, c_4o: 1.5031 , 330.6238 , -661.2477 , 771.4556 : E 15
BQUAR: c_4n, h_1: 1.0946 , 356.2721 , -712.5442 , 831.3016 : E 18
AQUAR: c_4n, c_4o, h_1: 110.9436 , 54.6945 , -11.4222 , -11.7180 : E 22
AQUAR: c_4n, c_4o, o_2: 107.4400 , 104.3870 , -17.8398 , -21.9785 : E 23
TCS3M: c_4n, c_4o, o_2, h_1o: -0.9319 , -0.2864 , -0.2246 : E 37
TCS3M: c_4n, n_3h1, c_4n, c_4o: 2.7786 , 0.0744 , -0.5756 : E 40
```

The following is a complete example of a PPF file for a water molecule:
```
#DFF:EQT
#AAT : NB ATC BINC Bond A/C A/S T/C T/S O/C O/S
h_1w: h_1w h_1w h_1w h_1w h_1w h_1w h_1w h_1w h_1w h_1w : A, V 1.0
o_2w: o_2w o_2w o_2w o_2w o_2w o_2w o_2w o_2w o_2w o_2w : A, V 1.19
#DFF:PPF
#PROTOCOL = AMBER
BINC: h_1w, o_2w: 0.4238*: E 0, V 1.0, S T_AMBER, R R1
N12_6: h_1w: 0.0001*, 0.0001*: E 0, V 1.0, S T_AMBER, R R5
N12_6: o_2w: 3.5532*, 0.1553*: E 0, V 1.0, S T_AMBER, R R5
BHARM: h_1w, o_2w: 1.0000*, 450.0000*: E 0, V 1.0, S T_AMBER, R R5
AHARM: h_1w, o_2w, h_1w: 109.4700*, 55.0000*: E 0, V 1.0, S T_AMBER, R R5
```

## 3 Quantum Mechanics Data (QMD) File 

Each QMD file is used for one model, which can be one molecule (in most cases) or a cluster of molecules (such as dimer). 
Each QMD file may have multiple sets of data, each corresponds to a configuration. The start is labeled by \#DFF:QMD <version number>, and ended by \#END_DFF:QMD.

Each data set contains multiple data, leading by dollar sign \$. There are two types of data, simple value or array values. The simple value has the syntax of \$<property>=<value>. The array values starts with \$<Property> and ends with \$End.
The following is an example of one set of data:
```
#DFF:QMD 2.0
$SMILES = CCO
$FORMULA = C2H6O
$THEORIES = B3LYP/6-31G*
$SOURCE = freq.gauout
$COMMANDS = Freq Pop=(CHelpG,Regular)
$COORDINATES !(A)
    1     C      6      -0.306057     0.168118    -0.005229
    2     O      8       1.014977     0.380097     0.482524
    3     H      1      -0.954201     0.752072     0.656423
    4     H      1      -0.424102     0.581142    -1.020634
    5     H      1       1.620855    -0.096886    -0.105823
    6     C      6      -0.716507    -1.301946     0.015944
    7     H      1      -0.081170    -1.898049    -0.652474
    8     H      1      -0.622336    -1.710742     1.027407
    9     H      1      -1.754418    -1.425736    -0.315841
$END
$ENERGY =        -97285.57  !(kcal/mol)
$FORCES !(kcal/mol/A)
    -0.116464     0.065206    -0.043370
     0.089233    -0.002870     0.054106
     0.009215    -0.000072    -0.007625
     0.034275    -0.019244     0.005666
    -0.005292     0.000969    -0.020920
    -0.068935    -0.047546    -0.032939
     0.021958     0.005930     0.038405
     0.015601     0.008477    -0.012335
     0.020412    -0.010851     0.019012
$END
$HESSIANS !(kcal/mol/A^2)
    1145.183505     -133.693856     1159.844131
    -115.176629       28.874398     1353.532391
    -468.854091      -66.436511     -145.164498
    1107.761738        4.957859     -170.922996
     -41.579743     -240.109941      440.822802
     -53.555480      -52.662893     -237.509377
    -201.384677      418.536594      679.019255
    -291.479285      172.747678      198.701715
     -78.971728       38.016048       40.519089
     358.520744      184.951380     -283.982890
    -192.396325       -7.432553       11.354699
       8.515459     -192.178153      302.615387
     220.179190     -196.786569     -357.872928
     -22.092327       16.484882       23.976124
    -221.562754      211.145236      364.070935
    -119.441339       18.297441      -13.063192
     -45.211225       19.745027      -89.294905
       8.074005      -16.994951       38.605669
     141.962325       15.276935     -199.805282
     184.268471       -1.322187       14.403754
     -14.951985       -2.808339       17.748470
     -36.354637      -10.765774      208.012283
     -19.899581      185.470121     -576.267167
     -33.437525        1.808749      -17.401738
       0.416625       18.102798      -41.723764
      49.955931     -204.354449      626.797323
     -73.197113       53.029299       64.173714
    -458.923090      271.624545      321.182562
     -14.657220       -4.354009       -9.885959
       5.029321        1.302445       -0.321410
     535.348394      -16.877820        2.425328
       4.155467      341.228226     -288.229784
    -349.309783       -1.473289        2.157968
       1.966104       -0.748947       -0.870089
      -1.733007     -318.756831      281.324824
     -40.004807       14.047611       13.600510
     423.616491     -360.123512     -460.185782
      -5.695221        0.373667        2.418246
      -2.242561        1.650498        2.236847
    -375.609768      342.975553      442.491653
    -183.584219      -27.670753       12.442199
     -64.924723      -90.357688      -18.048994
      16.634013       40.901003       -2.210024
       7.640059        1.603081        2.508151
       4.984055       -5.211908       -1.503855
    1281.793463      -47.641639     -439.649813
      12.826308      -17.758016       -5.229118
      -6.787672      -11.245188      -41.972233
       3.571112       -5.726391      -30.552235
      -1.664078       -0.298933        5.557519
       1.354836      -58.416219     1091.064062
       8.843322       18.187705     -193.716159
     -21.016772      -33.954205        5.514426
     -13.133645      -47.874982        3.477690
      19.287641       71.809493        0.772813
       2.302034        4.358042        0.714751
      14.749947       -6.718698     1305.691985
       9.072228      -13.467245      -15.232700
       6.802978        1.021169       -0.508366
       0.873899       -5.069500       -1.235622
       0.244166        2.036288       -0.623660
      -0.477868        1.020071        1.280103
    -307.528451      179.384875      205.584379
     326.067727       51.446968      -44.442894
     -50.373004        0.995242        7.337607
       3.630518       -6.272158      -13.685641
       1.557950       -0.196772        3.711503
       0.972721       -3.514194       -0.482081
      -0.310855      178.045053     -271.977125
    -186.849966     -196.896596      299.424462
      -2.023426        2.318348        2.285340
      -2.916753        0.896890       -0.189915
       0.452860        1.123398        3.505679
      -1.917163       -0.870605        1.785623
      -0.719838       -2.291121       -0.251718
     207.698986     -186.044123     -331.190268
    -229.701140      207.949023      348.295785
      -0.004639       -8.752656       18.516532
       2.475725        3.004640        0.955444
      -0.077109        1.080799       -1.340853
       0.817563       -4.473918        0.055350
      -0.230564       -0.241231        0.809137
    -117.450608       22.210355      -47.910926
       3.834797      -18.656385       42.373127
     112.380346       10.291177      -31.850556
      77.936598        2.613158        8.545867
      -4.774420        1.091421        3.447326
      -0.475291       -5.801058      -14.708536
      -0.875154       -0.324704       -0.514954
       0.145500       18.777415     -187.327879
     197.448234       -6.044888       15.646344
     -38.001370      -21.526191      204.941179
      -1.956087       -0.258284       -0.093131
       3.140617       -1.378030        2.944831
       0.179472        1.072194        2.124915
      -1.143028       -0.384759        3.827895
      -0.274956        0.398854       -0.816577
     -47.024209      201.018495     -627.601262
      -5.250003       15.573874      -39.148768
      52.697111     -221.083027      675.382620
     -17.695070        5.946580       -5.197140
      -0.155584       -7.901681        0.135304
       1.082682       -0.903994       -0.457297
       0.885103       -0.848509        1.346119
       2.124108        1.061729       -0.649542
    -637.563612      -60.508821     -168.706003
     -38.889499       -4.951159      -13.246630
      -1.745534        0.923669       -0.368871
     691.957406      -68.710982        8.384972
     -23.712193      -11.777442      -18.082854
      -2.195772        2.121980        2.316936
      -1.108810        2.191402        2.060154
       2.272298        1.292383       -1.368730
      -0.113299      -57.669984     -119.913201
     -16.405644       38.015846        4.467846
      14.919560       27.354610        1.821209
       5.040659       67.182186      120.313669
       3.593499        0.809563       -3.959502
      -0.744577       -0.691625        3.832152
       0.121882       -0.061467        0.023081
      -0.188413       -0.812050       -0.027832
      -0.846358       -0.520086       -0.207954
    -168.612178      -17.556202     -163.663954
      45.687008        7.849738       14.908221
     -66.154899      -10.321048      -16.620523
     187.144037       21.303179      165.716310
$END
$CHARGE = 0.000000 !(e)
$ESP CHARGES !(e)
       0.386439
      -0.642684
       0.012539
      -0.058908
       0.386630
      -0.269072
       0.061853
       0.073557
       0.049645
$END
$MULLIKEN CHARGES !(e)
      -0.025786
      -0.609691
       0.149022
       0.120084
       0.384538
      -0.457183
       0.135458
       0.160239
       0.143319
$END
$FREQUENCIES !(cm^-1)
     270.148200      321.810500      420.620700
     811.495900      895.918800     1071.827000
    1087.617100     1149.885900     1297.443800
    1398.191900     1426.220800     1444.469600
    1519.818200     1523.319800     1547.473200
    2994.733000     3040.702400     3090.537400
    3111.029100     3129.329300     3737.947600
$END
$DIPOLE  !(Debye)
     1.141200    -0.224300     1.203500 (TOTAL = 1.673637)
$END
#END_DFF:QMD
```

## 4. Atom Type Definition (DEF, EXT) File

DEF or EXT files contain a number of blocks, and each block defines one atom type. The difference between .def and .ext files is that the former is a complete definition de novo, while the latter is an extended definition based on Default definitions. The .ext definition is an optional extension to the Default definition. For default atom types that do not have extended definitions, the default definition is used.

Each definition block follows the general format:
Define <atom type> !comments
<Substructure Specification >
[<Atom attribute string>]
[…]
End

Line 1, the definition line, starts with Define. <atom type> is a string of any length representing the atom type symbol. The comment is separated from the definition by ! and should be kept within the same line.

Line 2 is a substructure specification, written as a SMILE string consisting of element symbols, bonds and bond orders. The nested substructure, which can be of unlimited width and depth, is represented by square brackets [ ]. The more structures defined, the more specific a match will be. The elements in the substructure specification are:
a)	Element Symbol – any element on the periodic table in capital case. ? is a wildcard indicating any element. * indicates multiple elements are allowed or not allowed. A list must be given in the atom attribute section using the keyword element = < >.
b)	Bond orders:  - for single,  = for double, # for triple, ~ for partial double, & for any. 

Line 3 onward lists atom attributes for each atom in line 2. Each line corresponds to one atom and the order must match that in line 2. The attribute string must follow the syntax below:
Atom id: [coordination=n] [,aromatic = yes|no] [,ringsize=r][,formalcharge=c] [,element = [!]list]
where coordination=n is an integer indicating the coordination number (how many bonds are connected). If an integer is given, all bonds should be specified. It can be a question mark ? indicating any coordination number is allowed. An integer following the question mark, ?n, indicates the coordination is unlimited but n bonds must be specified.
ringsize = r is an integer indicating ring size. >= is allowed in addition to =.
c indicates formal charge using a string such as +q, -2, 1, etc.
element = list indicates allowed elements, which should be separated by spaces. A !  placed in front of the list indicates disallowed elements.
Note that the first 4 characters of the above attributes are used in the definition, while the rest are optional.
End in the last line closes this block.

For example:
```
Define n_samle	! sample for definition
    N [-C[=O][-C[-*][&*]]][-C]
    atom 1: coor=3
    atom 2: coor=3
    atom 3: coor=?
    atom 4: coor=4
    atom 5: coor=?, elem=F O
    atom 6: coor=?, elem=!P Si
    atom 7: coor=?, arom=no, ring=>5, form=1
End
```

