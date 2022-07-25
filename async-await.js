// adding 'async' keyword right before the function

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a<0 || b<0){
                return reject('Numbers must be non-negetive')
            }
            resolve(a + b)
        }, 2000)
    })
}

const doWork = async () => {
    //throw new Error('Something went wrong')
    //return 'Likhon'

    const sum = await add(1, 99)
    const sum2 = await add(sum, 100)
    const sum3 = await add(sum2, 100)
    return sum3
}
// after adding async, the fuction is returning a promise
// async fuction always returning promise
// console.log(doWork())


// here result is the value that the function is returning
doWork().then((result) => {
    console.log('the result is ', result)
}).catch((error) => {
    console.log(error)
})