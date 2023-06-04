function enviarHistoria() {
  const formData = new FormData();
  formData.append('foto', foto.files[0])
  formData.append('nome', nome.value)
  formData.append('descricao', descricao.value)
  formData.append('fkUsuario', sessionStorage.ID_USUARIO)

  fetch("/historias/cadastrohistoria", {
    method: "POST",
    body: formData
  })
    .then(res => {
      alert(`História enviada com sucesso`)
      // window.location = "./perfil.html"
    })
    .catch(err => {
      console.log(err);
    })
}

function buscarPeloId() {
  fetch(`/historias/${buscaInput.value}`, {
    method: "GET"
  })
    .then(res => {
      res.json().then(json => {
        const historia = json[0];
        resulimg.innerHTML = `
    <div>
    <h1>${historia.nome}</h1>
    <p>${historia.descricao}</p>
    <img src="../assets/${historia.imagem}" width="400px" alt="">
    </div>`

      })
    })
    .catch(err => {
      console.log(err);
    })
}
var posicao = 1
function exibirPeloId() {
  fetch(`/historias/${posicao}`, {
    method: "GET"
  })
    .then(res => {
      res.json().then(json => {
        const historia = json[0];
        titulo.innerHTML = `${historia.nome}`
        corpo.innerHTML = `${historia.descricao}${historia.nomeAutor}`

      })
    })
    .catch(err => {
      console.log(err);
    })
  posicao++
}