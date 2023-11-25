//O DOM vai esperar todo o conteúdo HTML ser criado para funcionar corretamente
document.addEventListener("DOMContentLoaded", function () {
  //definindo uma variável para o evento do Icone (ION-ICON)
  var ionIcon = document.getElementById("icon")

  ionIcon.onclick = function () {
    alert(
      "Se já possui um usuário acesse com suas credenciais. Mas se não tiver clique em 'Cadastre-se'!"
    )
  }
})
//Criando as funções para validação do login
function validateUser() {
  /*Pegar o valor do campo usuário*/
  const user = document.getElementById("user").value
  if (!user) {
    alert("Insira o nome de usuário para o acesso!")
  }
}
