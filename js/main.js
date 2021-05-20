function clicou(){
    window.document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar</b>"
}

function redirecionar(){
    window.open("https://globo.com")
    window.location.href = "https://globo.com"
}

function trocar(elemento){
    elemento.innerHTML = "Passou o mouse com sucesso"

}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada")
}

function funcaoChance(elemento){
    console.log(elemento.value)
}

/*
function soma(n1, n2){
     return n1 + n2
 }


var validar = 0

function validaIdade(idade){

    if (idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar
}

var idade = prompt("Qual a sua idade? ")
validaIdade(idade)
console.log(validaIdade(idade))
*/



/*
var d = new Date()
alert(d.getMonth()+1) // Necessário somar mais um pois ele inicia o mês pelo 0
*/

/*
var count
for(count = 0; count <= 5; count++){
    alert(count)
}
*/

/*
var count = 0
while(count <= 5){
    console.log(count)
    count ++
}
*/

/*
var idade = prompt(" Qual a sua idade? ")
if(idade >= 18){
    alert("Maior de Idade")
}else{
    alert("Menor de idade")
}
*/

/*
var frutas = [{nome:"Maça", cor:"Vermelha"} , {nome:"Uva", cor:"Roxa"}] // Dicionário
console.log(frutas)
console.log(frutas.nome)
alert(frutas[1].nome)
*/

/*
var fruta = {nome:"Maça", cor:"Vermelha"} // Dicionário
console.log(fruta)
console.log(fruta.nome)
alert(fruta.cor)
*/


/*
var lista = ["Maça","Pêra","Laranja"]
lista.push("Uva") //add item
lista.pop() // remove último item
console.log(lista.length) // retorna o tamanho da lista
console.log(lista.reverse()) // inverte ordem da lista
console.log(lista)
console.log(lista.toString()) 
console.log(lista.join(" - "))
*/



/*
var nome = "Thiago Souza"
var n1 = 5
var n2 = 3
var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos ")
//alert(idade + idade2)
console.log(nome)
console.log(n1 * n2)
console.log(frase.replace("Japão", "Brasil"))
alert(frase.toLocaleLowerCase())
*/