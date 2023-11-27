function validateName(name) {
    if (name.length < 3) {
      return "O nome deve ter pelo menos 3 caracteres.";
    }
  
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      return "O nome deve conter apenas letras e espaços.";
    }
  
    return true;
  }
  
  function validateEmail(email) {
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      return "Digite um e-mail válido.";
    }
  
    return true;
  }
  
  function validatePhone(phone) {
    if (!/^\d{11}$/.test(phone)) {
      return "Digite um número de telefone válido (sem DDD).";
    }
  
    return true;
  }
  
  function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    let errors = [];
  
    if (!validateName(name)) {
      errors.push("O nome é inválido.");
    }
  
    if (!validateEmail(email)) {
      errors.push("O e-mail é inválido.");
    }
  
    if (!validatePhone(phone)) {
      errors.push("O telefone é inválido.");
    }
  
    if (name.length === 0 || email.length === 0 || phone.length === 0) {
      errors.push("Todos os campos são obrigatórios.");
    }
  
    if (errors.length > 0) {
      alert(errors.join("\n"));
      return false;
    }
  
    return true;
  }
  
  
  const form = document.getElementById('form');
  form.addEventListener('submit', function(event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  });
  