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
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")


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
    nomeOk = true
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
    emailOk = true
  }
}

function contCa(valor) {
  quant = 240;
  total = valor.length;
  if(total <= quant) {
      resto = quant - total;
      document.getElementById("cont").innerHTML = resto;
      assuntoOk = true
  } else {
      document.getElementById("assunto").value = valor.substr(0,quant);
      
  }    
}

function enviar(){
  if(nomeOk == true && emailOk == true && assuntoOk == true){
    alert('Formulário enviado com sucesso!')
  }
  else{
    alert('Formulário preenchido incorretamente!')
  }
}

function zoom(){
  mapa.style.width = '800px'
  mapa.style.height = '600px' 
}

function normal(){
  mapa.style.width = '600px'
  mapa.style.height = '450px' 
}

