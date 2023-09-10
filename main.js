let animes = ['<img src="./img/Goku.png"></img>', '<img src="./img/pngegg.png"></img>', '<img src="./img/sakura.png"></img>', '<img src="./img/Shenlong.png"></img>', '<img src="./img/vegeta.png"></img>']
let teste= document.getElementById('imagens')
btn = document.getElementById('btn')
btnx = document.getElementById('btnx')
let i =0





btn.addEventListener('click', function(e){
    e.preventDefault()
    // Exibir o item atual do array
    teste.innerHTML = animes[i];

        // Atualizar o índice para o próximo item, com verificação de limite
        i = (i + 1) % animes.length;


    
})

btnx.addEventListener('click', function(e){
    e.preventDefault()

    i = (i - 1 + animes.length) % animes.length
    teste.innerHTML = animes[i]


})
btnx.addEventListener('mousedown', function (e) {
    e.stopPropagation();
});voltar
