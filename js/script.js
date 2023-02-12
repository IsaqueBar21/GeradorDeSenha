//referencia ao id slider
let sliderElement = document.querySelector("#slider");
//referencia ao id button
let buttonElement = document.querySelector("#button");
//referencia ao id valor do tamanho dos caracteres
let sizePassword = document.querySelector("#valor");
//referencia ao id password
let password = document.querySelector("#password");
//referencia ao id container password que esconde a senha gerada
let containerPassword = document.querySelector("#container-password");

let charset =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%¨&*.()-_+^~:?/><";

sizePassword.innerHTML = sliderElement.value;

let novaSenha = "";

//função que determina o valor que a senha terá de acordo com a posição do slider
sliderElement.oninput = function () {
  sizePassword.innerHTML = this.value;
};

//função que gera a senha
function generatePassword() {
  let pass = "";

  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  //faz aparecer o botão escondido de copiar a senha
  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
}


