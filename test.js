function makeRequest(location) {  // location == variavel definida e passada na condicional
    return new Promise((resolve, reject ) => { // casos 
        console.log(`Fazendo requisiçao para o ${location}`)
        if(location == 'Google') {
            resolve('google says hi')
        }
        else{
            reject('endereço errado')
        }
    })
}

function processRequest(response) {
    return new Promise ((resolve, reject ) => {
        console.log('processando')
        resolve( `extra  +  ${response}`)
    }) 
}

//makeRequest('Facebook').then(response => {
  //  console.log('resposta recebida') 
   // return processRequest(response) 
// }).then(processedResponse => {
  //  console.log(processedResponse)
// }).catch(erro => {
  //  console.log(erro)
// })

 async function doWork(){
     try{
        const response = await makeRequest('Facebook')
        console.log('resposta recebida') 
        const processedResponse = await processRequest(response)
        console.log(processedResponse)
     } catch (erro){
         console.log(erro)
     }
}
doWork()