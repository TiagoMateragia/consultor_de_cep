*Consultor de CEP*

Aplicação web desenvolvida para consulta de endereços a partir de um CEP, utilizando a API pública do ViaCEP.
O projeto permite buscar informações completas como logradouro, bairro, localidade, UF, IBGE, DDD, entre outros dados, além de contar com sistema de alternância entre tema claro e escuro.

*Demonstração*

- Tema claro
- Tema escuro com troca dinâmica de logo
- Layout responsivo
- Consulta de CEP via API
- Tratamento básico de erro

 *Tecnologias utilizadas*
- HTML5
- CSS3
- JavaScript
- API ViaCEP

*Funcionalidades*

*1. Consulta de CEP em Tempo Real*

Sanitização automática do input (remoção de caracteres não numéricos)
Requisição dinâmica para a API do ViaCEP utilizando fetch
Atualização do DOM sem recarregar a página
Exibição estruturada dos seguintes dados:

- Logradouro
- Complemento
- Unidade
- Bairro
- Localidade
- UF
- Estado
- Região
- IBGE
- GIA
- DDD
- SIAFI

*2. Tratamento de Erros*

- Exibição de mensagem temporária quando o CEP não é encontrado
- Limpeza automática dos campos exibidos em caso de erro
- Controle de exibição dinâmica do bloco de resultado
- Fallback visual para campos não retornados pela API ("Não encontrado")

*3. Sistema de Tema Claro/Escuro*

- Alternância dinâmica utilizando classList.toggle()
- Transições suaves com CSS (transition)
- Troca automática da logo conforme o tema
- Aplicação de estilos independentes para:
  
    - Body
    - Header
    - Blocos de conteúdo
    - Input
    - Botões
    - Resultado da consulta

*4. Layout Responsivo*

- Adaptação automática para dispositivos móveis
- Ajuste de largura dos blocos
- Reorganização do layout em telas menores
- Controle de scroll para melhor experiência em smartphones

*5. Manipulação Avançada de DOM*

- Seleção dinâmica de elementos
- Inserção de conteúdo via innerHTML
- Controle condicional de exibição com display: none e flex
- Atualização visual baseada no estado da aplicação

*Lógica Aplicada*

*1. Sanitização do CEP*

    let cep_val = cep.value.trim().replace(/\D/g, '');
Remove qualquer caractere que não seja número antes da requisição.

*2. Consumo de API com Fetch*

    fetch(`https://viacep.com.br/ws/${cep_val}/json/`)
Uso de:

- Promises
- then()
- catch()
- Manipulação dinâmica do DOM

*Como Executar o Projeto*

Clone o repositório:

    git clone https://github.com/TiagoMateragia/consultor-de-cep.git
Abra o arquivo index.html no navegador.
Não precisa de backend ou servidor — projeto 100% front-end.

*Autor*

Tiago Materagia
