
var inputElement = document.querySelector('input[name=nome]') 
var btnElement = document.querySelector('button.botao') // referenciando o nome e o caminho

var linkElement = document.createElement('a')

linkElement.setAttribute('href', 'http://rocketseat.com.br')
var textElement = document.createTextNode('Acessar link')
linkElement.appendChild(textElement)

var conteinerElement = document.querySelector('#app2')
conteinerElement.appendChild(linkElement)

btnElement.onclick = function(){
  var conteudoInput = inputElement.value; 
  alert('botao clicado' + conteudoInput)
  console.log(conteudoInput)
}


