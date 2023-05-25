function cadastrar() {
    var nome = input_nome.value
    var sobrenome = input_sobrenome.value
    var genero = input_genero.value
    var estado = input_estado.value
    var email = input_email.value
    var senha = input_senha.value
    var confirmeSenha = input_confirmeSenha.value

    if (nome == "" || sobrenome == "" || genero == "" || estado == "") {
        alert(`Campo(s) vazio!`)
    } else if (email == "" || senha == "" || confirmeSenha == "") {
        alert(`email e/ou senha não informados`)
    }
    else if (senha != confirmeSenha) {
        alert(`Senhas diferentes`)
    } else {
        href = "login.html"
    }

}