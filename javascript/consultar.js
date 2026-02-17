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

//Variaveis para utilizar na função.
let msg_erro = document.querySelector('.msg_erro');
let logradouro = document.querySelector('.logradouro');
let complemento = document.querySelector('.complemento');
let unidade = document.querySelector('.unidade');
let bairro = document.querySelector('.bairro');
let localidade = document.querySelector('.localidade');
let uf = document.querySelector('.uf');
let estado = document.querySelector('.estado');
let regiao = document.querySelector('.regiao');
let ibge = document.querySelector('.ibge');
let gia = document.querySelector('.gia');
let ddd = document.querySelector('.ddd');
let siafi = document.querySelector('.siafi');

//Função para chamada da API e consultar o CEP digitado no input.
function consultar_cep(){
    let cep_val = cep.value;

    fetch(`https://viacep.com.br/ws/${cep_val}/json/`)
        .then((call)=> {
            return call.json();
        })
        .then((call_json)=> {
            let logradouro_val = call_json.logradouro;
            let complemento_val = call_json.complemento;
            let unidade_val = call_json.unidade;
            let bairro_val = call_json.bairro;
            let localidade_val = call_json.bairro;
            let uf_val = call_json.uf;
            let estado_val = call_json.estado;
            let regiao_val = call_json.regiao;
            let ibge_val = call_json.ibge;
            let gia_val = call_json.gia;
            let ddd_val = call_json.ddd;
            let siafi_val = call_json.siafi;
            console.log(call_json);
        })
        .catch((erro)=> {
            msg_erro.innerHTML = "Não encontrado.";
            setTimeout(()=> {
                msg_erro.innerHTML = '';
            }, 3000);
        })
}