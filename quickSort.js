var arr = [1,6,9,3,5,6,8]

function quickSort(arr) {
if (arr.length <= 1) return arr;
var left = [];
var right = [];
var newArray = [];
var pivot = arr.reverse().pop();
for (i = 0; i < arr.length; i++) {
if (arr[i] <= pivot) {
left.push(arr[i]);
} else {
right.push(arr[i]);
}
}
return newArray.concat(quickSort(left), pivot, quickSort(right));
}
console.log(quickSort(arr));