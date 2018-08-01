// baked using JS Rhino missing semicols

function insertinarray(a, pos, val){
    a.push(0)
    for(let i = a.length - 1; i > pos; i--)
        a[i] = a[i-1]
    a[pos] = val
}

function deletefromarray(a, pos){
    for(let i = pos; i < a.length - 1; i++)
        a[i] = a[i+1]
    a.pop()
}

function linearsearch(a, val){
    for(let i = 0; i < a.length; i++)
        if(a[i] == val)
            return true
    return false
}

let a = [1, 2, 3, 4]
insertinarray(a, 2, 10)
print(a)
deletefromarray(a, 1)
print(a)
if(linearsearch(a, 4))
    print('Found')
else
    print('Not Found')
