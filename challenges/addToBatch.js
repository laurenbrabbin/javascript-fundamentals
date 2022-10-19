const addToBatch = (arr, number) => {
  if (arr.length < 5) {
    const new_arr = arr.concat(number)
    console.log(new_arr)
  } else {
    console.log(arr)
  }
}

addToBatch([1, 2, 3, 4, 5, 6], 7);