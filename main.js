let animes = ['<img src="./img/Goku.png"></img>', '<img src="./img/pngegg.png"></img>', '<img src="./img/sakura.png"></img>', '<img src="./img/Shenlong.png"></img>', '<img src="./img/vegeta.png"></img>']
let teste= document.getElementById('imagens')




btn = document.getElementById('btn')
let i =0
btn = addEventListener('click', function(e){
    e.preventDefault()
    // Exibir o item atual do array
    teste.innerHTML = animes[i];

        // Atualizar o índice para o próximo item, com verificação de limite
        i = (i + 1) % animes.length;


    
})