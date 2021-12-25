function verificar() {
   
  var nome = window.document.querySelector("input#nome");
  var dateNascimento = window.document.querySelector("input#dataNasc");
  var res = window.document.querySelector("")

  var nascimento = Date(dateNascimento.value)

  var agora = new Date();
  var hoje = agora.getFullYear;
  var idade = hoje - nascimento;


  console.log(`sua ${idade}`);

  var res = windon.document.querySelector("div.result");

  if (idade < 16) {
    res.innerHTML = `Ola ${nome} Voce tem ${idade} e voce nao pode votar`;
  } else if (idade < 18 || idade > 65) {
    //se for menor de 18 anos OU maior de 65 anos.
    res.innerHTML = `Ola ${nome} Voce tem ${idade} e voce pode votar! O voto é opcional`;
  } else {
    res.innerHTML = `Ola ${nome} Voce tem ${idade} e voce deve votar! O voto é OBRIGATORIO`;
  }
}
