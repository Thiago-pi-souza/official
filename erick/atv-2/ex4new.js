    function calculate(){
        let n1 = document.querySelector('input#num1')
        let n2 = document.querySelector('input#num2')
        let n3 = document.querySelector('input#num3')
        let a = Number(n1.value)
        let b = Number(n2.value)
        let c = Number(n3.value)

        let delta = b * b - 4 * a * c 
        let x1 = (-b + Math.sqrt(delta)) / (2 * a) 
        let x2 = (-b - Math.sqrt(delta)) / (2 * a)

        let res = document.getElementById('res')

        res.innerHTML = `
            <ul>
            <li>Entradas: <b>${a}</b>, <b>${b}</b> e <b>${c}</b>.</li>
            <li>X1: <b>${x1}</b>.</li>
            <li>X2: <b>${x2}</b>.</li>
            </ul> 
            `
    }
    