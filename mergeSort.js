var array = [1,3,6,5,8,2]
function mergeSort(array)
{ 
    if(array.length<2) return array;//if the array has only one element

    var middle = Math.floor(array.length/2);// if the array length is odd
    var left = array.slice(0,middle);
    var right = array.slice(middle, array.length);

 return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right)
{
    var result = [];// to store resultant values
    while (left.length && right.length)
    {
        if (left[0]<=right[0])
        { /*takes the first element in left array and
            puts the element into the result array (l->r)*/
            result.push(left.shift());
           
        }
        else 
        {
            result.push(right.shift());
        }

    } 
    /*when the divided length is not equal the last element 
    of either greater array will be pushed with this*/

    while (left.length) result.push(left.shift()); 
    while (right.length) result.push(right.shift());
    return result;
}
console.log(mergeSort(array));