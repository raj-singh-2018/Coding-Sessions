// baked in js Rhino

function leftrotatebyone(a){
    let temp = a[0]
    for(let i = 0; i < a.length - 1; i++)
        a[i] = a[i+1]
    a[a.length - 1] = temp
}


function leftarrayrotations(a, d){
    for(let i = 0;i < d; i++)
        leftrotatebyone(a)
}


a = [1, 2, 3, 4, 5, 6, 7]
leftarrayrotations(a, 2)
print(a)
