window.addEventListener('DOMContentLoaded', function() {
  alert('Bem-vindo!');
});

var imagens = ["images/fazenda(1).jpg", "images/fazenda(2).jpg", "images/fazenda(3).jpg"];
var index = 0;
var time = 5000;

function slideShow() {
document.getElementById("imagem").src = imagens[index];
index = (index + 1) % imagens.length;
setTimeout(slideShow, time);
}

slideShow();
