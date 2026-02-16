//Variaveis para o botão de tema.
let logo = document.querySelector('.logo');
let botao_tema = document.querySelector('.botao_tema');
let trilho = document.getElementById('trilho');
let body = document.querySelector('body');
let html = document.querySelector('html');
let cabecalho = document.getElementById('cabecalho');
let conteudo = document.querySelector('.bloco_conteudo');
let cep = document.querySelector('.digitar_cep');
let botao_consultar = document.querySelector('.botao_consultar');

//Programando o botão de tema.
botao_tema.addEventListener('click', ()=> {
    botao_tema.classList.toggle('escuro');
    trilho.classList.toggle('escuro');
    body.classList.toggle('escuro');
    html.classList.toggle('escuro');
    cabecalho.classList.toggle('escuro');
    conteudo.classList.toggle('escuro');
    cep.classList.toggle('escuro');
    botao_consultar.classList.toggle('escuro');

//Trocando a imagem para o tema escuro.
    if (body.classList.contains('escuro')) {
        logo.style.opacity = "0";

        setTimeout(() => {
            logo.src = "imagens/logo_escuro.png";
            logo.style.opacity = "1";
        }, 300);
    } else {
        logo.style.opacity = "0";

        setTimeout(() => {
            logo.src = "imagens/logo_claro.png";
            logo.style.opacity = "1";
        }, 300);
    }
})

