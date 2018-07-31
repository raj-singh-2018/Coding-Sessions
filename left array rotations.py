# cook your dish here

def leftrotatebyone(a):
    temp = a[0]
    for i in range(len(a) - 1):
        a[i] = a[i+1]
    a[len(a) - 1] = temp

def leftrotate(a, d):
    for i in range(d):
        leftrotatebyone(a)

a = [1, 2, 3, 4, 5, 6, 7]
leftrotate(a, 2)
print(a)
