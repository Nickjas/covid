import numpy as np
#creation of arrays
#this are the list of ways in which you can create an array in numpy
#use arange()
d=np.arange(40)
print(d)
#we can find the dimension of the array by
print(d.ndim)
#we can also find the size by
print(d.size)

f=np.arange(20,100,10).reshape(2,4)
print(f)
print(f.ndim)

h= np.linspace(20,40,15).reshape(3,5)
print(h)

k=np.random.rand(40)
print(k)

j=np.arange(10000).reshape(100,100)
print(j)
#basic operation
l=np.linspace(100,400,10)
q=np.linspace(50,100,10)
c=l-q
print(c)
c=l+q
print(c)
c=l*q
d=10*np.sin(c)
print(d>-5)
w=d.reshape(2,5)
print(w)
g=l.reshape(5,2)


##
w=np.arange(10)
print(np.sqrt(w))
# indexing and slicing 
s=np.arange(10)**3
print(s)
print(s[3:5])
for i in s:
    print(i**(1/3.))
    