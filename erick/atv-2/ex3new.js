function calculate(){
    let n1 = document.querySelector('input#num1')
    let n2 = document.querySelector('input#num2')
    let price = Number(n1.value)
    let discount = Number(n2.value)

    let amountDiscounted = price * discount / 100 
    let finalPrice = price - amountDiscounted 

    let res = document.getElementById('res')

    res.innerHTML = `
        <ul>
            <li>Preço base: <b>${price}</b>.</li>
            <li>Valor do desconto: <b>${amountDiscounted}</b>.</li>
            <li>Preço final: <b>${finalPrice}</b>.</li>
        </ul> 
    `
}