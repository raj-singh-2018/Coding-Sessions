void reversearray(int a[],int start, int stop)
{
    while(start < stop)
    {
        int temp = a[start];
        a[start] = a[stop];
        a[stop] = temp;
        start++;
        stop--;
    }
}

void printarray(int a[],int n)
{
    for(int i = 0;i < n;i++)
        cout<<a[i]<<" ";
}

void reversalalgo(int a[],int n, int d)
{
    reversearray(a,0,d-1);
    reversearray(a,d,n-1);
    reversearray(a,0,n-1);
}

int main()
{
    int a[] = {1,2,3,4,5,6,7};
    int n = sizeof(a)/sizeof(a[0]);
    reversalalgo(a,n,2);
    printarray(a,n);
}










