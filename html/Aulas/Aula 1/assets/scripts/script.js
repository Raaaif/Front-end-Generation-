/*Case sensitive = reconhece letras maiusculas e minusculas

por tag: getElementByTagName()
por id: getElementById()
por nome: getElementsByName
por classe: getElementsByClassName()
por seletor: querySelector()
*/

let nome = document.getElementById("nome");
let email = document.getElementById("email");
let assunto = document.getElementById("assunto");

nome.style.width = "50%";
email.style.width = "50%";

function validName(){
  let txt = document.querySelector('#txtNome')
  if(nome.value.length < 3){
    txt.innerHTML = "Nome inválido"
    txt.style.color = 'red'
  }  
  else{
    txt.innerHTML = "Nome válido"
    txt.style.color = 'green'

  }
}

function validEmail(){
  let txtEmail = document.querySelector('#txtEmail')
  if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
    txtEmail.style.color = 'red'
    txtEmail.innerHTML = "E-mail inválido!"
  }
  else{
    txtEmail.innerHTML = "E-mail válido!"
    txtEmail.style.color = "green"
  }
}
