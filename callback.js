const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is an error', undefined)
        callback(undefined, [1,2,3])
    },3000)
}

doWorkCallback((error, result) => {
    if(error){
        return console.log(error)
    }

    console.log(result)
})