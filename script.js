const inputs = document.querySelectorAll('.contact-input')

inputs.forEach(ipt => {
    ipt.addEventListener('focus', () => {
        ipt.parentNode.classList.add('focus');
        ipt.parentNode.classList.add('not-empty');
    })
    ipt.addEventListener('blur', () => {
        if(ipt.value == ''){
            ipt.parentNode.classList.remove('not-empty');
        }
        ipt.parentNode.classList.remove('focus');
    })
})

function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle('dark-mode');
}

var toggleButton = document.getElementById('toggleDarkMode');
toggleButton.addEventListener('click', toggleDarkMode);

function updateClock() {
  var clockElement = document.getElementById('clock');
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  clockElement.textContent = hours + ':' + minutes + ':' + seconds;
}

updateClock();

setInterval(updateClock, 1000);

function toggleDarkMode() {
  var bodyElement = document.body;
  bodyElement.classList.toggle('dark-mode');
}

var form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  var nomeInput = document.getElementById('nome');
  var emailInput = document.getElementById('email');
  var numeroInput = document.getElementById('numero');

  if (nomeInput.value !== '' && emailInput.value !== '' && numeroInput.value !== '') {
    alert('O formulário foi enviado com sucesso!');

    nomeInput.value = '';
    emailInput.value = '';
    numeroInput.value = '';
  } else {
    alert('Por favor, preencha todos os campos antes de enviar o formulário.');
  }
});


function verificarCredenciais(event) {
  event.preventDefault(); 

  var nomeInput = document.getElementById('nome');
  var senhaInput = document.getElementById('senha');

  var nome = nomeInput.value;
  var senha = senhaInput.value;

  if (nome === 'Admin' && senha === '123456') {
    window.location.href = 'https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021';
  } else {
    alert('Credenciais inválidas. Por favor, tente novamente.');
  }

  nomeInput.value = '';
  senhaInput.value = '';
}