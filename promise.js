// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve([2,3,7])
//         reject('Things went wrong!')
//     }, 3000)
// })

const e = require("express")

// doWorkPromise.then((result) => {
//     console.log('success!', result)
// }).catch((error) => {
//     console.log(error)
// })


const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 3000)
    })
}

// add(1, 2).then((sum) => {
//     console.log(sum)

//     add(5, sum).then((sum2) => {
//         console.log(sum2)
//     }).catch((e) => {
//         console.log(e)
//     })

// }).catch((error) => {
//     console.log(error)
// })


// Now we will use promise chaining
add(1, 1).then((sum) => {
    console.log(sum) // it is calld when 1st promise is fulfilled
    return add(sum, 4)
}).then((sum2) => {
    console.log(sum2) // it is calld when 2nd promise is fulfilled
}).catch((error) => {
    console.log(error)
})