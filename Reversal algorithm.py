
def reversearray(a, start, stop):
    while(start < stop):
        temp = a[start]
        a[start] = a[stop]
        a[stop] = temp
        start += 1
        stop -= 1

def reversalalgo(a, d):
    reversearray(a, 0, d-1)
    reversearray(a, d, len(a) - 1)
    reversearray(a, 0, len(a) - 1)

a = [1, 2, 3, 4, 5, 6, 7]
reversalalgo(a, 2)
print(a)
