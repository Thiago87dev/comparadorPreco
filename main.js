let gramaMililitro = document.querySelector('.menu')
let peso = document.querySelectorAll('.peso')
let preco = document.querySelectorAll('.form-peso input')
preco[0].focus()

gramaMililitro.addEventListener('click',(e)=>{
    let conteudoLi = e.target.textContent;
    peso.forEach(i =>{
        i.textContent = conteudoLi
    })

    preco[0].focus()
})