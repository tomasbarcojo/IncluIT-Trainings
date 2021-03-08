function solution(A) {
    let setOfInts = new Set();
    for (let i = 0; i < A.length; i++) {
        if ((A[i] >= 0) && ((A[i] % 2) === 0)) {
            setOfInts.add(A[i]);
        } else if (Math.abs(A[i]) % 2 === 0) {
            setOfInts.add(A[i]);
        }
    };
    const resultArr = Array.from(setOfInts)
    return resultArr.sort(function(a, b){return b-a});
};

const test = [-2, 0, 1, 2, 3];
const test2 = [10, 0, 2, 6, 8, 9];
const test3 = [10, 0, 2, 6, 8, 9, 10, 6];

console.log(solution(test3));

function solution(S, T) {
    // write your code in JavaScript
    let obj1 = {};
    let obj2 = {};

    if (S.length !== T.length) { return false };

    for (var i = 0; i < S.length; i++) {
        obj1[S[i]] = S[i]
        obj2[T[i]] = T[i]
    }

    // console.log(obj1.hasOwnProperty(S[0]))
    // console.log(!obj1['z'])

    for (var i = 0; i < S.length; i++) {
        if (!obj1[S[i]] && !obj2[S[i]]) {
            return false;
        }
    }

    return true
}

const S = 'claro';
const T = 'calor';

console.count()
console.log(solution(S, T))