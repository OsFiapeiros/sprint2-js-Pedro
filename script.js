window.onload = function() {
    alert('Bem-vindo ao nosso programa de transporte sustentável!');
}

function cadastrarUsuario(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Obter os valores do formulário
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var endereco = document.getElementById('endereco').value;

    // Verificar se o usuário já está cadastrado
    if (verificarUsuarioCadastrado(email)) {
        alert('Usuário já cadastrado!');
        return;
    }

    // Enviar os dados para o servidor
    enviarDadosServidor(nome, email, endereco);

    // Limpar o formulário
    document.getElementById('cadastroForm').reset();

    alert('Cadastro realizado com sucesso!');
}

function enviarDadosServidor(nome, email, endereco) {
    // Envio dos dados para o servidor
    console.log('Enviando dados para o servidor:');
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Endereço:', endereco);
}

function verificarUsuarioCadastrado(email) {
    // Busca de usuário cadastrado
    var usuariosCadastrados = ['usuario1@gmail.com', 'usuario2@gmail.com', 'usuario3@gmail.com'];

    for (var i = 0; i < usuariosCadastrados.length; i++) {
        if (usuariosCadastrados[i] === email) {
            return true; // Usuário já está cadastrado
        }
    }

    return false; // Usuário não está cadastrado
}
