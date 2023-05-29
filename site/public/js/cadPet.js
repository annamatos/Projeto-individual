function cadastroPet(){
    var pet={
        nome: nomePet.value,
        dtNasc:dtNascPet.value,
        tipo: tipoPet.value,
        raça: raçaPet.value
    }
    cadastrado.innerHTML += `${JSON.stringify(pet)}`
alert(`cadastro dp animal`)
}