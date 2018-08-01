def insertinarray(l, pos, val):
    l.append(0)
    for i in range(len(l)-1, pos, -1):
        l[i] = l[i-1]
    l[pos] = val

def deletefromarray(l, pos):
    for i in range(pos, len(l)-1):
        l[i] = l[i+1]
    l.pop()

def linearsearch(l, val):
    for i in range( len(l) - 1):
        if val == l[i]:
            return True
    return False
    
l = [1, 2, 3, 4]
insertinarray(l, int(input().strip()), int(input().strip()))
print(l)
deletefromarray(l, int(input().strip()))
print(l)
if(linearsearch(l, 2)):
    print("Found")
else:
    print("Not Found")
