document.addEventListener("DOMContentLoaded", function () {
 
  const senha = document.getElementById("senha");
  const exibirSenha = document.getElementById("exibir-senha");

  exibirSenha.addEventListener("change", function () {
    senha.type = this.checked ? "text" : "password";
  });

  const confirmar = document.getElementById("confirmar-senha");
  const exibirConfirmar = document.getElementById("exibir-confirmar");

  exibirConfirmar.addEventListener("change", function () {
    confirmar.type = this.checked ? "text" : "password";
  });
});

 (() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})()

const toggleButton = document.getElementById('theme-toggle');
const form = document.getElementById('formulario1');

function applyTheme(theme) {
  form.classList.remove('light-mode', 'dark-mode');
  form.classList.add(theme);
  localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme') || 'light-mode';
applyTheme(savedTheme);

toggleButton.addEventListener('click', () => {
  const currentTheme = form.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
  const newTheme = currentTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';
  applyTheme(newTheme);
});

