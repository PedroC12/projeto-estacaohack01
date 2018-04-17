let inputNome = document.querySelector("#nome");
let inputComentario = document.querySelector("#comentario");
let botaoEnviar = document.querySelector("#enviar");
let saida = document.querySelector("#saida");
let saida2= document.querySelector("#saida2");

botaoEnviar.onclick = function(){
    let nome = inputNome.value;
    let comentario = inputComentario.value;
    console.log(nome+comentario);
    saida2.innerHTML = nome+" Comentou: ";
    saida.innerHTML = comentario;
}
