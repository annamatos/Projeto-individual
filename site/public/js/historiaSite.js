var listaHistorias = [];
var contador = 0;
var qntHistoria =2

for (var contador = 0; contador < qntHistoria; contador++) {
    var id= contador+1
    listaHistorias.push(id)
}


var posicao=listaHistorias[0]

function proxima(){
    
    function exibirPeloId() {
        fetch(`/historias/${posicao}`, {
          method: "GET"
        })
          .then(res => {
            res.json().then(json => {
              const historia = json[0];
              titulo.innerHTML = `<span>${historia.nome}</span>`
              corpo.innerHTML =`<span>${historia.descricao}</span>
              <div class="autor"><span>${historia.nomeAutor}</span></div>`
              imagem.innerHTML = ` <img src="../assets/${historia.imagem}" width="200px" alt="">`
             
            })
          })
          .catch(err => {
            console.log(err);
          })
          posicao++
      }
      exibirPeloId()
}
function anterios(){
    alert('funcioca')
    var nome =anna
    listaHistorias.push(nome)
}