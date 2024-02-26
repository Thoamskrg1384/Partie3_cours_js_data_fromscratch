function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    console.log(array);
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
}

selectionSort([451, 2, 65, 4, 7, 98, 2, 3, 1]);
