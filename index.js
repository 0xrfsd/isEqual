// isEqual function 

// var a = 1
// var b = 2

// function isEqual() {
//     if(a == b) {
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     }
// }

// isEqual();

// isEqualArray function

var a = [0, 2, 3, 4]

var b = [1, 9, 3, 4]

function isEqualArray() {
    for (i = 0; i < a.length; i++) {
        if(a[i] == b[i]) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
}

isEqualArray();