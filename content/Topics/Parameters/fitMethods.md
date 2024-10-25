# Fit Methods

## Levenberg-Marquardt Method
 
The Levenberg-Marquardt method [^1] [^2] with constrained minimization technique is implemented. The least squares problem is written as:

$$
χ^2 = \sum_{i=1}^N [y_i^o - y_i(i)a/σ_i]^2 + \sum_{j}^N aP_j(a_j-a_j^*)^2\tag{1}	
$$ 		

The first term is the normal least squares expression of input data $y_i^o$ and parameter-dependent calculated data $y_i(a)$. $σ_i$
is the weighting factor, which can be related to the Boltzmann factor for energy. The second term is a penalty term in which the parameter $a_j$ is restrained to preferred value $a_j^*$. The penalty factor $P_j$
is adjustable. 

## Linear SVD Method

In addition, the SVD method [^3] is used to fit the linear equations,  
$$
y_i(a) = \sum_{k} a_k x_k \tag{2}
$$  

where $a_k$ is adjustable parameter and $x_k$ is the variable. The least-squares equation is then reduced to a linear equation:
$$
χ^2=\sum_{i=1}^N[\frac{y_i - \sum_{k}a_kx_k}{σ_i}]^2 = |B-A⋅a|^2	 \tag{3}
$$	

This method is especially useful when matrix A is singular or very close to singular.


### References

[^1]: Levenberg, Kenneth (1944). "A Method for the Solution of Certain Non-Linear Problems in Least Squares". Quarterly of Applied Mathematics. 2 (2): 164–168. doi:10.1090/qam/10666.
 
[^2]: Marquardt, Donald (1963). "An Algorithm for Least-Squares Estimation of Nonlinear Parameters". SIAM Journal on Applied Mathematics. 11 (2): 431–441. doi:10.1137/0111030. hdl:10338.dmlcz/104299.

[^3]: Press, W. H.; Teukolsky, S. A.; Vetterling, W. T.; Flannery, B. P. Numerical recipes 3rd edition: The art of scientific computing; Cambridge University Press, 2007.