var array = [1,6,8,4,6]
function bubbleSort(array)
{
    var i,j,limit;
    limit = array.length;
    while(limit--) //starts from extrem and loops till index zero
    {
        for(i=0,j=1;i<limit;++i,++j)
        if(array[i]>array[j]) 
        //swap
        {
            temp = array[i]
            array[i]=array[j]
            array[j]=temp;
        }
    } return array;
} 
console.log(bubbleSort(array));