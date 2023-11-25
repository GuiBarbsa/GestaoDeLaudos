//O DOM vai esperar todo o conteúdo HTML ser criado para funcionar corretamente
document.addEventListener('DOMContentLoaded', function(){
  
  //definindo uma variável para o evento do Icone (ION-ICON)
  var ionIcon = document.getElementById('icon')

  ionIcon.onclick = function () {
    alert("Seja bem vindo(a)!")
  }
});