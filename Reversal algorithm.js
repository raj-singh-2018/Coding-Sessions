// bake your code here


function reversearray(a, start, stop){
    while(start < stop){
        let temp = a[start]
        a[start] = a[stop]
        a[stop] = temp
        start++
        stop--
    }
}

function reversalalgo(a, d){
    reversearray(a, 0, d-1)
    reversearray(a, d, a.length - 1)
    reversearray(a, 0, a.length - 1)
    
}

let a = [1, 2, 3, 4, 5, 6, 7]
reversalalgo(a, 2)
print(a)
