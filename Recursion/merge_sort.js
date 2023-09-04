/* Merge Sort Algorithm */

function mergeSort(array) {
  // Base case
  if (array.length <= 1) return;
  
  // Divide array by populating left and right arrays
  let half = Math.floor(array.length / 2);
  let leftArray = [];
  let rightArray = [];

  let i = 0;
  let j = 0;
  
  for (; i < array.length; i++) {
    if (i < half) {
      leftArray[i] = array[i];
    } else {
      rightArray[j] = array[i];
      j++;
    }
  }

  mergeSort(leftArray);
  mergeSort(rightArray);
  merge(leftArray, rightArray, array);
  return array;
}

function merge(leftArray, rightArray, array) {
  let leftSize = Math.floor(array.length / 2);
  let rightSize = array.length - leftSize;
  let i = 0;
  let l = 0;
  let r = 0;

  while (l < leftSize && r < rightSize) {
    if (leftArray[l] < rightArray[r]) {
      array[i] = leftArray[l];
      i++;
      l++;
    } else {
      array[i] = rightArray[r];
      i++;
      r++;
    }
  }
  while (l < leftSize) {
    array[i] = leftArray[l];
    i++;
    l++;
  }
  while (r < rightSize) {
    array[i] = rightArray[r];
    i++;
    r++;
  }
  return array;
}

console.log(mergeSort([5, 6, 3, 2, 1, 4]))