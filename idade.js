function verificar() {
  var nome = window.document.getElementById ("nome");
  var tIdade = window.document.querySelector("input#idade");
  var res = window.document.querySelector("div.result");

  var idade = Number(tIdade.value);
  var tnome = (nome.value)

  res.innerHTML = `Ola ${tnome}`;

  if (idade < 16) {
    res.innerHTML += ` Voce tem ${idade} e voce nao pode votar`;
  } else if (idade < 18 || idade > 65) {
    //se for menor de 18 anos OU maior de 65 anos.
    res.innerHTML += ` Voce tem ${idade} e voce pode votar! O voto é opcional`;
  } else {
    res.innerHTML += ` Voce tem ${idade} e voce deve votar! O voto é OBRIGATORIO`;
  }
}