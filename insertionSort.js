var array = [1,3,6,8,4]
function insertionSort(array)
{
    var i = 1;
    while(i<array.length)
   { 
       var j = i;
       while(j>0 && array[j-1]>array[j])
       //swap
       {
        temp = array[j-1]
        array[j-1]=array[j]
        array[j]=temp;
        j = j-1;
       }
       i = i+1;

   } 
return array;
}
console.log(insertionSort(array));