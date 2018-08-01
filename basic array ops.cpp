//Basic Array operations
void insertinarray(int a[],int pos,int val){
    for(int i=4;i>pos;i--)
        a[i] = a[i-1];
    a[pos] = val;
}

void deletefromarray(int a[],int pos)
{
    for(int i=pos;i<4;i++)
        a[i] = a[i+1];
}
void printarray(int a[],int n)
{
    for(int i=0;i<n;i++)
        cout<<a[i]<<" ";
}
bool linearsearch(int a[],int val)
{
    for(int i=0;i<4;i++)
        if(a[i]==val)
            return true;
    return false;
}

int main()
{
    int a[5]={1,2,3,4},pos,val;
    cin>>pos>>val;
    insertinarray(a,pos,val);
    printarray(a,5);
    cin>>pos;
    deletefromarray(a, pos);
    printarray(a,4);
    if(linearsearch(a,2))
        cout<<endl<<"Found";
    else
        cout<<endl<<"Not Found";
}









