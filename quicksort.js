function quicksort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
    if (arr.length <= 1) return arr;

  // Pick the first value as the pivot
  let idx = Math.floor(Math.random() * arr.length);
  let pivot = arr[idx];

  let left = [], right = [];

  // Orient the pivot so that...
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    
    // every number smaller than the pivot is to the left
        if (num < pivot) 
        left.push(num);
        // every number larger (or equal) than the pivot is to the right
    else if (num > pivot)
    right.push(num);
  }

  // Recursively sort the left
 left =  quicksort(left);

  // Recursively sort the right
  right = quicksort(right);

  // Return the left, pivot and right in sorted order
  return [...left, pivot, ...right];
}
console.log(quicksort([2,4,6,8,1,3,5,7,9]));

module.exports = [quicksort];
