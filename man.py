import numpy as np
def f(x,y):
     return 10*x+y

r=np.fromfunction(f,(5,4),dtype=int)
print(r)
print(r[2,3])
print(r[:,2:])