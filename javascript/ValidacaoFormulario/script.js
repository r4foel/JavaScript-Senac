
//addEventListener é um termo usado na programação para descrever uma ação que permite que um elemnto da pagina da web (como um botão, uma imagem ou qualquer oura coisa que você possa interagir) "ouça" ou "esteja ciente" de eventos, como um clique do mouse, uma tecla pressionada ou uma mudança na pagina.

//DOMContentLoaded é acionado quando a pagina é totalmente carregada no navegador

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');

    //Aqui estamos obtendo o elemento HTML com o ID "form" e armazenando na variável chamada "form"

    const nomeUsuarioInput = document.getElementById('nomeusuario')

    //Estamos obtendo o elemento de entrada (input) HTML com o id "nomeusuario" e armazenando-o na variável "nomeUsuarioInput". Isso se refere ao campo onde o usuário insere seu nome

    //const erroElement = document.getElementById('erro')

    const erroNomeElement  = document.getElementById('erroNome')
    const erroEmailElement  = document.getElementById('erroEmail')


    //Estamos obtendo o elemento HTML com o id "erro" e armazenado-o na variável "erroElement". Isso se refere à <div> que usaremos para exibir mensagens de erro.

    form.addEventListener('submit', function (event) {

        // Estamos adicionando um ouvinte de evento ao formulário. Esse ouvindo será acionado quando o usuário tentar enviar o formulário
        if (nomeUsuarioInput.value.trim() === '') {
            event.preventDefault(); //Impede o envio do formulário

            //Aqui estamos verificando se o campo de nome de usuário esta vazio, se estiver vazio: event.prevenDefault(); isso impede o envio do formulário, ou seja evita que os dados do formulário sejam enviados ao servidor se houver um erro

            //Exibe a mensagem de erro
            erroNomeElement.style.display = 'block';

            //Isso faz com que a <div> de erro seja exibida na página definindo o estilo de exibição como "block". Isso mostra a mensagem de erro na tela
        }         else {
            erroNomeElement.style.display = 'none';
//Se o campo não estiver vazio, oculta a mensagem de erro
//erroElement.style.display = 'none';
//Se o campo de nome de usuário não estiver vazio erroElement.style.display = 'none'; isso faz com que a <div> de erro seja ocultada na pagina, definindo o estilo de exibição como "none", ou seja oculta a mensagem de erro quando o campo esta preenchido corretamente
        }


if (nomeEmailInput.value.trim() === '') {
event.preventDefault();
erroEmailElement.style.display = 'block';

} else {
   erroEmailElement.style.display = 'none'; 
}


//Validar o campo de e-mail com a expressão regular ou seja um e-mail valido
const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
if (!emailRegex.test(nomeEmailInput.value.trim())) {
    event.preventDefault();
    erroEmailElement.style.display = 'block';

}
else {
    erroEmailElement.style.display = 'none';
}


    })


});