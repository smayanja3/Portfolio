//2 inputs 
//return the result of either +,-,/,*
//have a click event
//p or h2 for the result to show


document.querySelector("#addi").addEventListener('click',runAddition)
document.querySelector("#sub").addEventListener('click',runSubtraction)
document.querySelector("#multiply").addEventListener('click',runMulti)
document.querySelector("#divide").addEventListener('click',runDivi)

function runDivi(){
let n1 = Number(document.querySelector('#number1').value) 
let n2 = Number(document.querySelector('#number2').value) 
let quotient = n1 / n2
document.querySelector('h2').innerText = quotient
console.log(quotient)
}

function runMulti(){
let n1 = Number(document.querySelector('#number1').value) 
let n2 = Number(document.querySelector('#number2').value) 
let product = n1 * n2
document.querySelector('h2').innerText = product
console.log(product)
}

function runSubtraction(){
let n1 = Number(document.querySelector('#number1').value) 
let n2 = Number(document.querySelector('#number2').value) 
let difference = n1 - n2
document.querySelector('h2').innerText = difference
console.log(difference)
}

function runAddition(){
let n1 = Number(document.querySelector('#number1').value) 
let n2 = Number(document.querySelector('#number2').value) 
let sum = n1 + n2
document.querySelector('h2').innerText = sum
console.log(sum)
}
