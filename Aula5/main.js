function  ola() {
    console.log("seja bem vindo a sala de aula");
    
}


function fnValidarIdade (){
       var idade = document.getElementById("idadeUsuario").value

       console.log(idade);
       

       if(idade >=18) {
        alert("Voce pode dirigir!!!")
       }


       else{
        alert("voce nao pode dirigir!!!")
       }
  
}


function fnvalidarVogal(){

var vogal document.getElementById("vogalUsuario").value

switch (vogal) {
case "a":
case "e":
case "i":
case "o":
case "u":
alert("VOCÊ DIGITOU UMA VOGAL!!!!!")
break;
default:
alert("VOCÊ DIGITOU UMA CONSOANTE.....")
break;
}