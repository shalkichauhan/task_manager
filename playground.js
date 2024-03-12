const sum = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })

}

sum(1, 2).then((result) => {

    console.log(result)
    return result

}).then((w) => {
    console.log(w + 5)


}).catch((e) => {
    console.log(e)
})