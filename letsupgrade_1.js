const arr = [2, 4, 6, 8, 10];

// Initialize a variable to hold the sum
let sum = 0;

// Loop through the array and add each element to the sum
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

// Display the sum in the DOM
document.getElementById("result").innerHTML = `The sum of the elements in the array is: ${sum}`;