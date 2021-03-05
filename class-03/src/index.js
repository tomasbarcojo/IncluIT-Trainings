function rotateArray(array, numOfRotations) {

    // to rotate left way
    if (numOfRotations < 0) {
        for (let i = 0; i > numOfRotations; i--) {
            let first = array.shift(); //saves and deletes the first element
            array.push(first); // adds the saved element in the end
        };
        return array;
    }

    // to rotate right way
    for (let i = 0; i < numOfRotations; i++) {
        let last = array.pop(); //saves and deletes the last element
        array.unshift(last); // adds the saved element in the first position
    };
    return array;
};

module.exports = rotateArray;

// positive number: rotate right
// negative number: rotate left
