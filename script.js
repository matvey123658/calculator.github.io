let expression_field = document.querySelector('.input-field')
let ac = document.querySelector('.btn-clear')
function clear(){
    expression_field.value = ''
    calculator = []
    number = ''

}

let calculator = []
let historytable = document.querySelector('.history')
let zero = document.querySelector('.btn-0')
let one = document.querySelector('.btn-1')
let two = document.querySelector('.btn-2')
let three = document.querySelector('.btn-3')
let four = document.querySelector('.btn-4')
let five = document.querySelector('.btn-5')
let six = document.querySelector('.btn-6')
let seven = document.querySelector('.btn-7')
let eight = document.querySelector('.btn-8')
let nine = document.querySelector('.btn-9')
let ten = document.querySelector('.btn-10')
let number1 = 0
let number2 = 0 
let number = ''
ac.addEventListener('click',clear)
zero.addEventListener('click',function(){
    expression_field.value += zero.innerHTML
    number += '0'
})
one.addEventListener('click',function(){
    expression_field.value += one.innerHTML
  
    number += '1'
})
two.addEventListener('click',function(){
    expression_field.value += two.innerHTML
     
    number += '2'
})
three.addEventListener('click',function(){
    expression_field.value += three.innerHTML
    number += '3'
})
four.addEventListener('click',function(){
    expression_field.value += four.innerHTML
    number += '4'
})
five.addEventListener('click',function(){
    expression_field.value += five.innerHTML
    number += '5'
})
six.addEventListener('click',function(){
    expression_field.value += six.innerHTML
    number += '6'
})
seven.addEventListener('click',function(){
    expression_field.value += seven.innerHTML
    number += '7'
})
eight.addEventListener('click',function(){
    expression_field.value += eight.innerHTML
   number += '8'
})
nine.addEventListener('click',function(){
    expression_field.value += nine.innerHTML
    number += '9'
})    
let equals = document.querySelector('.btn-equal')
let plus = document.querySelector('.btn-plus')
let minus = document.querySelector('.btn-minus')
let divide = document.querySelector('.btn-div')
let multiple = document.querySelector('.btn-mult')
let point = document.querySelector('.btn-point')
let clear_history = document.querySelector('.clear-history')
let answer = 0
point.addEventListener('click',function(){
    expression_field.value += '.'
    number += '.'
})
plus.addEventListener('click',function(){
    calculator.push(+expression_field.value)
    expression_field.value += plus.innerHTML
    calculator.push('+')
    number = ''
})

minus.addEventListener('click',function(){
    calculator.push(+expression_field.value)
    expression_field.value += minus.innerHTML
    calculator.push('-')
    number = ''
})
divide.addEventListener('click',function(){
    calculator.push(+expression_field.value)
    expression_field.value += divide.innerHTML
    calculator.push('/')
    number = ''
})
multiple.addEventListener('click',function(){
    calculator.push(+expression_field.value)
    expression_field.value += multiple.innerHTML
    calculator.push('*')
    number = ''
})
clear_history.addEventListener('click',function(){
    historytable.innerHTML = '' 
})
equals.addEventListener('click',function(){
    
    calculator.push(+number)
    let a = +calculator[0]
    let b = +calculator[2]
    console.log(calculator)
    let c = ""
    if(calculator.includes('+')){
        expression_field.value = a+b
        c = "+"
        
    }
    if(calculator.includes('-')){
        expression_field.value = a-b
        c = "-"
    }
    if(calculator.includes('*')){
        expression_field.value = a*b
        c = "*"
        
    }
    if(calculator.includes('/')){
        expression_field.value = a/b
        c = "/"
        
    }
    
    historytable.innerHTML += '<div class =\'element\'>'+ a + ' ' + c + ' ' + b + ' = ' + expression_field.value + '</div>'
    calculator = []
   
  
   
})
    
