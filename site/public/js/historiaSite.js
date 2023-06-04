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
      if (posicao <= listaHistorias.length){
        fetch(`/historias/${posicao}`, {
          method: "GET"
        })
          .then(res => {
            res.json().then(json => {
              const historia = json[0];
              titulo.innerHTML = `<span>${historia.nome}</span>`
              corpo.innerHTML =`<span>${historia.descricao}</span>
              <div class="autor"><span>${historia.nomeAutor}</span></div>`
              imagem.innerHTML = `<div class="imagem"><img src="../assets/${historia.imagem}" alt=""></div>`
             
            })
          })
          .catch(err => {
            console.log(err);
          })
          posicao++
      } else{
        alert(`deu certo`)
      }
    }
      exibirPeloId()
}
function anterios(){
  posicao = posicao - 1
    if(posicao > 0){
      setaL.style.display = 'flex';
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
          
      }
      exibirPeloId()

    } else{
      posicao=listaHistorias.length
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
            
        }
        exibirPeloId()
    }
}