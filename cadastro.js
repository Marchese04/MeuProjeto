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

const toggleSwitch = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const form = document.getElementById('formulario1');

function applyTheme(theme) {
  form.classList.remove('light-mode', 'dark-mode');
  form.classList.add(theme);
  localStorage.setItem('theme', theme);

  if (theme === 'dark-mode') {
    themeIcon.classList.replace('bi-sun', 'bi-moon');
    toggleSwitch.checked = true;
  } else {
    themeIcon.classList.replace('bi-moon', 'bi-sun');
    toggleSwitch.checked = false;
  }
}

const savedTheme = localStorage.getItem('theme') || 'light-mode';
applyTheme(savedTheme);

toggleSwitch.addEventListener('change', () => {
  const newTheme = toggleSwitch.checked ? 'dark-mode' : 'light-mode';
  applyTheme(newTheme);
});