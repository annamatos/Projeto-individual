function calculoCachorro() {
    var nome = input_nome.value;
    var anos = Number(input_anos.value);
    var selectElement = document.getElementById("meuSelect");
    var porte = selectElement.value;

    if (porte == 1) {
        if (anos <= 2) {
            var idade = (anos * 12.5)
        } else {
            var idade = 23 + ((anos - 2) * 4.5);
        }
    } else if (porte == 2) {
        if (anos <= 2) {
            var idade = (anos * 10.5)
        } else {
            var idade = 19 + ((anos - 2) * 5.7);
        }
    } else {
        if (anos <= 2) {
            var idade = (anos * 9)
        } else {
            var idade = 16 + ((anos - 2) * 8);
        }
    }
    div_resultado.innerHTML = `<div class="resultado"> O doguinho ${nome} tem ${idade} anos humanos.</div>`

    if (porte == 0) {
        alert(`Informe o porte do seu cachorro.`)
        div_resultado.innerHTML = ""
    } else if (anos <= 0) {
        alert(`Informe a idade do cachorro.`)
        div_resultado.innerHTML = ""
    }
}

function calculoGato() {
    var nome = input_nomeGato.value;
    var anos = Number(input_anosGato.value);

    if (anos <= 1) {
        var idade = anos * 15
    } else if (anos == 2) {
        var idade = 15 + 10
    } else {
        var idade = 25 + ((anos - 2) * 4)
    }
    
    div_resultado.innerHTML = `<div class="resultado"> O seu gatinho ${nome} tem ${idade} anos humanos.`

    if (anos <= 0) {
        alert(`Informe a idade do gato.`)
        div_resultadoGato.innerHTML = ""
    }

}