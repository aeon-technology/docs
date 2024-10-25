# Example  reference and equation 

See the reference, will pick up the item and renumber. [^1][^2]
Or this way [^1][^2][^3]

### Inline
$
\nabla \times \vec{e} + \frac{\partial \vec{b}}{\partial t} = 0, \\
\nabla \times \vec{h}-\vec{j}=\vec{s}\_{e}, \\
\nabla^2 \times \vec{h}\times\vec{j}=\vec{s}\_{e}
$

### Block aligned by using '&', will not number the lines
$$
\begin{align} 
S&= \int_{3}^{9}{x^2 dx}\\ 
&= \left[\frac{x^3}{3}\right]_3^9\\ 
&= \frac{9^3}{3}-\frac{9^3}{3}\\ 
&= 76253 \\
\nabla \times \vec{e} + \frac{\partial \vec{b}}{\partial t} = 0 \\
\nabla \times \vec{h}-\vec{j}=\vec{s}\_{e}\\
\nabla^2 \times \vec{h}\times\vec{j}=\vec{s}\_{e}
\end{align}
$$

### Number equations using \tag{}
$$
\bar{D}=\frac{1}{n} \sum_{j=1}^{n} D_{j}, \quad s_{d}^{2}=\frac{1}{n-1} \sum_{j=1}^{n}\left(D_{j}-\bar{D}\right)^{2}        \tag{6-1}
$$


# Math

$$
χ^2 = \sum_{i=1}^N [y_i^o - y_i(i)a/σ_i]^2 + \sum_{j}^N aP_j{(a_j-a_j^*)}^2         \tag{6-2}					
$$  		

$$
E = \sum_{d} \sum_{n=1}^3 [1 + k_{d,n} cos(n\phi_d - \phi_d^0)]
$$

$$
χ^2 = \sum_{i=1}^N [y_i^o-y_i(a)/σ_i]^2 + \sum_j^N aP_j(a_j-a_j^*)^2					
$$

$$
χ^2=\sum_{i=1}^N[\frac{y_i - \sum_{k}a_kx_k}{σ_i}]^2=|B-A⋅a|^2	  
$$

$$
\frac{\partial f}{\partial x}
$$

$$
\int_0 \mu(u_1,\dots,u_k) \,du_1 \dots du_k
$$

$$
\iiint_0^\infty \mu(u_1,\dots,u_k) \,du_1 \dots du_k
$$

$$
\int_0^\infty ...\int_0^\infty\mu(u_1,\dots,u_k) \,du_1 \dots du_k
$$




# References
[^1]: Levenberg, Kenneth (1944). "A Method for the Solution of Certain Non-Linear Problems in Least Squares". Quarterly of Applied Mathematics. 2 (2): 164–168. doi:10.1090/qam/10666.
[^2]: Marquardt, Donald (1963). "An Algorithm for Least-Squares Estimation of Nonlinear Parameters". SIAM Journal on Applied Mathematics. 11 (2): 431–441. doi:10.1137/0111030. hdl:10338.dmlcz/104299.
[^3]: Press, W. H.; Teukolsky, S. A.; Vetterling, W. T.; Flannery, B. P. Numerical recipes 3rd edition: The art of scientific computing; Cambridge University Press, 2007.