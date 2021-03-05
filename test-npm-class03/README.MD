# Rotation of an array

Testing my npm package fuction to rotate 'k' times left or right an array.

## Installation

On `test-npm-class03` use the package manager [npm](https://docs.npmjs.com/) to install.

```bash
npm i array-test-tomasbarcojo
```

## Usage

On `test-npm-class03` run:

```bash
node test.js
```
### Examples:

Positive number: rotates to right
Negative number: rotates to left

```javascript
import { rotateArray } from 'array-test-tomasbarcojo'

let test = [1, 2, 3, 4, 5]

rotateArray(test, 2) # returns [ 4, 5, 1, 2, 3 ]
rotateArray(test, -2) # returns [ 3, 4, 5, 1, 2 ]
```