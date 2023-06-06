var qntHistoria = 1 
for (var i = 1; i <= qntHistoria; i++) {
var posicao = i

function buscarPeloId() {
  fetch(`/avisos/${posicao}`, {
    method: "GET"
  })
    .then(res => {
      res.json().then(json => {
        const historia = json[0];
        feed.innerHTML += `
  <div>
  <h1>${historia.titulo}</h1>
  <h2>${historia.autor}</h2>
  <p>${historia.historia} fk: ${historia.fkUsuario}</p>
  <img src="../assets/${historia.imagem}" width="400px" alt="">
  </div>`

      })
    })
    .catch(err => {
      console.log(err);
    })}
    buscarPeloId()
  }