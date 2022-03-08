let random = [0,3,1,4,6,8,5,2,7];

//this is linear search 
//O(n)
function search(arr,target)
{
    for (i = 0; i < arr.length; i++)
    {
        if (target === arr[i])
        {
            console.log("found");
            return i;
        }
    }
    console.log("not found");
    return false;
}

search(random,0);
