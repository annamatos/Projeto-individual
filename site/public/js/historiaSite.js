var listaHistorias = [];
var qntHistoria = 2

for (var contador = 0; contador < qntHistoria; contador++) {
  var id = contador + 1
  listaHistorias.push(id)
}

var posicao = listaHistorias[0]

function proxima() {
  if(posicao <= listaHistorias.length){
    posicao++;
    exibirPeloId();    
  }else{
    posicao=listaHistorias[0];
    exibirPeloId();
  }
}

function anterios() {
  if(posicao >= 1){
    posicao = posicao - 1
    exibirPeloId();    
  }else{
    posicao = listaHistorias[listaHistorias.length - 1];
    exibirPeloId();
  }
}

function exibirPeloId() {
fetch(`/historias/${posicao}`, {
  method: "GET"
})
  .then(res => {
    res.json().then(json => {
      
      const historia = json[0];
      titulo.innerHTML = `<span>${historia.nome}</span>`
      corpo.innerHTML = `<span>${historia.descricao}</span>
        <div class="autor"><span>${historia.nomeAutor}</span></div>`
      imagem.innerHTML = `<div class="imagem"><img src="../assets/${historia.imagem}" alt=""></div>`

    })
  })
  .catch(err => {
    console.log(err);
  })
} 
exibirPeloId()
