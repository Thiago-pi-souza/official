function calcular(){
    let numbe1 = document.querySelector('input#num1')
    let numbe2 = document.querySelector('input#num2')
    let n1 = Number(numbe1.value)
    let n2 = Number(numbe2.value)

    let sum = n1 + n2 
    let subtraction = n1 - n2 
    let multiplication = n1 * n2
    let division = n1 / n2 

    let rest = n1 % n2

    let res = document.getElementById('res')

    res.innerHTML = `
      <ul>
        <li>Entradas: <b>${n1}</b> e <b>${n2}</b>.</li>
        <li>Soma: <b>${sum}</b>.</li>
        <li>Subtração: <b>${subtraction}</b>.</li>
        <li>Multiplicação: <b>${multiplication}</b>.</li>
        <li>Divisão: <b>${division}</b>.</li>
        <li>Resto: <b>${rest}</b>.</li>
      </ul> `
    }