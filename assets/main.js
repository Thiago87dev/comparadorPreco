let gramaMililitro = document.querySelector('.menu')
let peso = document.querySelectorAll('.peso')
let inputPeso = document.querySelectorAll('.form-peso input')
let inputPreco = document.querySelectorAll('.form-preco input')
let calcular = document.querySelector('#btn-calcular')
let resultado = document.querySelector('.resultado')
let frente = document.querySelector('.frente')
let maisB = document.querySelector('.mais-barato')
let campoResultado = document.querySelectorAll('.campo-resultado')
let btnNovoCacl = document.querySelector('.btn-novo-calculo')
let btnInterrogacao = document.querySelector('.img')

inputPeso[0].focus()

gramaMililitro.addEventListener('click',(e)=>{
    let conteudoLi = e.target.textContent;
    peso.forEach(i =>{
        i.textContent = conteudoLi
    })
    if(inputPeso[0].value === ''){
        inputPeso[0].focus()
    }else if(inputPreco[0].value === ''){
        inputPreco[0].focus()
    }else if(inputPeso[1].value === ''){
        inputPeso[1].focus()
    }else if (inputPreco[1].value === ''){
        inputPreco[1].focus()
    }
})

btnInterrogacao.addEventListener('click', ()=>{
    alert('Use esse app quando tiver um produto com 2 preços e medidas diferentes e você quer saber qual vale mais a pena comprar (mais barato).')
})
calcular.addEventListener('click', calcularPreco)
btnNovoCacl.addEventListener('click', novoCalculo)



function novoCalculo(){
    resultado.style.display = 'none'
    frente.style.display = 'flex'

    document.querySelector('#peso1').value = ''
    document.querySelector('#peso2').value = ''
    document.querySelector('#preco1').value = ''
    document.querySelector('#preco2').value = ''

    inputPeso[0].focus()
    window.scrollTo(0,0)
}

function calcularPreco(){
    let peso1 = Number(document.querySelector('#peso1').value)
    let peso2 = Number(document.querySelector('#peso2').value)
    let preco1 = Number(document.querySelector('#preco1').value)
    let preco2 = Number(document.querySelector('#preco2').value)

    if(peso1 === 0 || peso2 === 0 || preco1 === 0 || preco2 === 0) {
        alert('Nenhum campo pode ficar vazio')
    }else{
        peso.forEach(i =>{
            if(i.textContent === 'Gramas (g)'){
                let precoPorPesoProduto1 = preco1 / peso1
                let precoPorPesoProduto2 = preco2 / peso2
           
                let pesoBarato
                if(precoPorPesoProduto1 < precoPorPesoProduto2){
                    pesoBarato = `${peso1}(g)`
                    maisB.innerHTML = `Produto de ${pesoBarato} é o mais barato`
                }else if (precoPorPesoProduto1 > precoPorPesoProduto2){
                    pesoBarato = `${peso2}(g)`
                    maisB.innerHTML = `Produto de ${pesoBarato} é o mais barato`
                }else{
                    maisB.innerHTML = `Preços iguais`
                }
                
                campoResultado[0].innerHTML = `O preço por grama do primeiro produto (com ${peso1} gramas) é de ${precoPorPesoProduto1.toFixed(2).padEnd(4, '0')} centavos`

                campoResultado[1].innerHTML = `O preço por grama do segundo produto (com ${peso2} gramas) é de ${precoPorPesoProduto2.toFixed(2).padEnd(4, '0')} centavos`
    
                resultado.style.display = 'flex'
                frente.style.display = 'none'
            }else{
                let precoPorPesoProduto1 = preco1 / peso1
                let precoPorPesoProduto2 = preco2 / peso2
           
                let pesoBarato
                if(precoPorPesoProduto1 < precoPorPesoProduto2){
                    pesoBarato = `${peso1}(ml)`
                    maisB.innerHTML = `Produto de ${pesoBarato} é o mais barato`
                }else if (precoPorPesoProduto1 > precoPorPesoProduto2){
                    pesoBarato = `${peso2}(ml)`
                    maisB.innerHTML = `Produto de ${pesoBarato} é o mais barato`
                }else{
                    maisB.innerHTML = `Preços iguais`
                }
                
                campoResultado[0].innerHTML = `O preço por mililitro do primeiro produto (com ${peso1} mililitros) é de ${precoPorPesoProduto1.toFixed(2).padEnd(4, '0')} centavos`

                campoResultado[1].innerHTML = `O preço por mililitro do segundo produto (com ${peso2} mililitros) é de ${precoPorPesoProduto2.toFixed(2).padEnd(4, '0')} centavos`
    
                resultado.style.display = 'flex'
                frente.style.display = 'none'
                window.scrollTo(0,0)
            }
        })
          
    }   
}