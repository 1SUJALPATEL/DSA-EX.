// bubble sorting opration



// let arr = [9, 5, 10, 7, 8, 6, 1, 3]

// for (let i = 0; i < arr.length; i++) {

//     let swap = false

//     for (let j = 0; j < arr.length; j++) {

//         if (arr[j] > arr[j + 1]) {

//             let temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp

//             swap = true

//         }

//     }

//     if (!swap) {
//         break
//     }

// }
// console.log(arr);

// selaction soerting opration


let arr = [2, 20, 30, 1, 5, 98, 0]

let min

for (let i = 0; i < arr.length; i++) {

    min = i

    for (let j = i; j < arr.length; j++) {

        if (arr[min] > arr[j]) {

            min = j

        }

    }

    let temp = arr[min]
    arr[min] = arr[i]
    arr[i] = temp

}

console.log(arr);