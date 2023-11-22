function getNextNumberInArray(arr) {
    // Initialize the index outside the function
    let currentIndex = 0;

    // Return a function that will display the next element in the array
    return function () {
        if (currentIndex < arr.length) {
            console.log(arr[currentIndex]);
            currentIndex++;
        } else {
            console.log("End of the array");
            // If you want to start over from the beginning after reaching the end, reset the index:
            // currentIndex = 0;
        }
    };
}

// Example usage:
const numbersArray = [1, 2, 3, 4, 5];

const getNextNumber = getNextNumberInArray(numbersArray);

getNextNumber(); // Output: 1
getNextNumber(); // Output: 2
getNextNumber(); // Output: 3
// ...

// If you want to start over from the beginning after reaching the end:
// getNextNumber(); // Output: 4
// getNextNumber(); // Output: 5
// getNextNumber(); // Output: End of the array
// getNextNumber(); // Output: 1 (starting over)
