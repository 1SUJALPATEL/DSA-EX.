// binary searching opration 

// let arr = [1, 5, 9, 20, 21, 25, 33]

// function search(arr, element, start, end) {

//     let mid = (start + end) / 2

//     if (start > end) {

//         return false

//     }

//     if (arr[mid] === element) {

//         return true

//     }

//     if (arr[mid] > element) {

//         return search(arr, element, start, mid - 1)

//     }
//     else {

//         return search(arr, element, mid + 1, end)

//     }

// }

// let result = search(arr, 1, 0, arr.length)
// console.log(result);



// cardence opration 

// let arr = [-10, 5, -6, 9, 1, 2, 8]

// let max = 0
// let current = arr[0]

// for (let i = 0; i < arr.length; i++) {

//     current = current + arr[i]

//     if (current < 0) {

//         current = 0

//     }

//     if (max < current) {

//         max = current

//     }

// }

// console.log(max);


// liner searching opration 

let arr = [1,5,6,9,10,23,5]

let element = 23

for(let i=0 ; i<arr.length ; i++){

    if(element == arr[i]){

        console.log("Number Found");

    }

}
