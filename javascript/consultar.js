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
let bloco_resultado = document.querySelector('.bloco_resultado');

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
    bloco_resultado.classList.toggle('escuro');

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
let mostrar_conteudo = false;
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
    let cep_val = cep.value.trim().replace(/\D/g, '');

    fetch(`https://viacep.com.br/ws/${cep_val}/json/`)
        .then((call)=> {
            return call.json();
        })
        .then((call_json)=> {
            let logradouro_val = call_json.logradouro;
            let complemento_val = call_json.complemento;
            let unidade_val = call_json.unidade;
            let bairro_val = call_json.bairro;
            let localidade_val = call_json.localidade;
            let uf_val = call_json.uf;
            let estado_val = call_json.estado;
            let regiao_val = call_json.regiao;
            let ibge_val = call_json.ibge;
            let gia_val = call_json.gia;
            let ddd_val = call_json.ddd;
            let siafi_val = call_json.siafi;
            mostrar_conteudo = true;

// Verificação para mostrar o resultado para o usuário e alteração no estilo da pagina.
            if (mostrar_conteudo === true){
                bloco_resultado.style.display = 'flex';
                bloco_resultado.style.height = 'auto';
                bloco_resultado.style.width = 'auto';
                
                logradouro.innerHTML = `<strong>Logradouro:</strong> ${logradouro_val || "Não encontrado"}`;
                complemento.innerHTML = `<strong>Complemento:</strong> ${complemento_val || "Não encontrado"}`;
                unidade.innerHTML = `<strong>Unidade:</strong> ${unidade_val || "Não encontrado"}`;
                bairro.innerHTML = `<strong>Bairro:</strong> ${bairro_val || "Não encontrado"}`;
                localidade.innerHTML = `<strong>Localidade:</strong> ${localidade_val || "Não encontrado"}`;
                uf.innerHTML = `<strong>UF:</strong> ${uf_val || "Não encontrado"}`;
                estado.innerHTML = `<strong>Estado:</strong> ${estado_val || "Não encontrado"}`;
                regiao.innerHTML = `<strong>Região:</strong> ${regiao_val || "Não encontrado"}`;
                ibge.innerHTML = `<strong>IBGE:</strong> ${ibge_val || "Não encontrado"}`;
                gia.innerHTML = `<strong>GIA:</strong> ${gia_val || "Não encontrado"}`;
                ddd.innerHTML = `<strong>DDD:</strong> ${ddd_val || "Não encontrado"}`;
                siafi.innerHTML = `<strong>Siafi:</strong> ${siafi_val || "Não encontrado"}`;
            }
            })
        .catch((erro)=> {
            mostrar_conteudo = false;
            bloco_resultado.style.display = 'block';
            bloco_resultado.style.height = '50px';
            bloco_resultado.style.width = '160px';
            msg_erro.innerHTML = "Não encontrado.";
            setTimeout(()=> {
                msg_erro.innerHTML = '';
                bloco_resultado.style.display = 'none';
            }, 3000);

//Limpando o conteudo visivel caso não encontre o CEP.
            if (mostrar_conteudo === false){
                logradouro.innerHTML = "";
                complemento.innerHTML = "";
                unidade.innerHTML = "";
                bairro.innerHTML = "";
                localidade.innerHTML = "";
                uf.innerHTML = "";
                estado.innerHTML = "";
                regiao.innerHTML = "";
                ibge.innerHTML = "";
                gia.innerHTML = "";
                ddd.innerHTML = "";
                siafi.innerHTML = "";
            }
        })
}