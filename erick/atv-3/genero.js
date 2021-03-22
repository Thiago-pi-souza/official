function welcome(){
    let name = document.querySelector('txt')
    let gender = document.querySelector('gender')
    let par = document.querySelector('p')
    let choice = select.value('gender')

    if (choice === 'male'){
        par.textContent = `Seu nome é ${name} e você pertence ao gênero masculino`
    } else{
        par.textContent = `Seu nome é ${name} e você pertence ao gênero femenino`
    }


}