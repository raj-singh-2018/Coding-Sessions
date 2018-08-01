// bake your code here


function binsearch(a, val, low, high){
    if(low <= high){
        let mid = parseInt(low + (high - low) / 2)
        if(a[mid] == val)
            return true
        else if(val < a[mid])
            return binsearch(a, val, low, mid - 1)
        else 
            return binsearch(a, val, mid + 1, high)
    }
    
    return false
}


let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

if(binsearch(a, 20, 0, a.length - 1))
    print('Found')
else
    print('Not Found')
