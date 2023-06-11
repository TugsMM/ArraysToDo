// Push Front
function pushFront(array, value) {
    // Shifting the elements to the right
    for (let i = array.length - 1; i >= 0; i--) {
      array[i + 1] = array[i]; // Moving the element at index i to the right
    }
    // Inserting the value at the beginning because of pushFront
    array[0] = value;
  }

  const originalArray = [2, 3, 4, 5];
  const newValue = 1;
  
  pushFront(originalArray, newValue);
  console.log(originalArray);


// Pop Front
function popFront(array) {
    // Removing the value at the beginning
    const value = array[0];
  
    // Shifting the remaining elements to the left
    for (let i = 0; i < array.length - 1; i++) {
      array[i] = array[i + 1]; // Moving the element at index i+1 to the left
    }
  
    // Remoming the last element
    array.length = array.length - 1;
  
    console.log(value + ' returned, with:', array, "printed in the function");
  }

  popFront([0, 5, 10, 15]); 
  popFront([4, 5, 7, 9]); 


//   Insert At
function insertAt(array, index, value) {
    // Shifting the elements to the right from the given index
    for (let i = array.length - 1; i >= index; i--) {
      array[i + 1] = array[i];
    }
    // Inserting the value at the given index
    array[index] = value;
  
    return array;
  }
  
  console.log(insertAt([100, 200, 5], 2, 311)); 
  console.log(insertAt([9, 33, 7], 1, 42)); 
  
  
  
  