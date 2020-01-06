
const userLeft = false;
const userWatchingMemes = false;

function tutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'user left',
                message: ':('
            })
        } else if (userWatchingMemes) {
            reject({
                name: 'user is watching memes right now',
                message: 'memes > dev'
            })
        } else {
            resolve('continue assim ')
        }
    })
}
tutorialPromise().then((message) => {
    console.log('Sucesso na promise: ', message)
    alert('Sucesso na promise: ', message)
}).catch ((error) => {
    console.log(error.name + ' ' + error.message)
})
