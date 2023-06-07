var qntHistoria = 11

// function quant(){
// fetch(`/historias/qntHist`, {
//   method: "GET"
// })
//   .then(res => {
//     res.json().then(json => {
//       console.log(json);
//       const quantidade = json[0];
//        qntHistoria = quantidade.count
//       console.log(res)
//     })
//   })
//   .catch(err => {
//     console.log(err);
//   })

// }
// quant() 

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
          <div class="teste">
          <div class="historia">
        <div class="titulo" id="titulo">
            <span>${historia.titulo}</span>
        </div>
        <div class="corpo" id="corpo">
            <span>${historia.historia}</span>
            <div class="autor">
                <span>${historia.autor}</span>
            </div>
        </div>
      </div>
<div class="lado-direito">
<div class="imagem" >
<img src="../assets/${historia.imagem}" alt="">
</div>
</div>
</div>`
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
  buscarPeloId()
}
