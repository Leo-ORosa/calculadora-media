function Resultado() {
  var valorElemento1 = document.getElementById("number-1");
  var valor1 = valorElemento1.value;
  var valor1Bimestre = parseFloat(valor1);

  var valorElemento2 = document.getElementById("number-2");
  var valor2 = valorElemento2.value;
  var valor2Bimestre = parseFloat(valor2);

  var valorElemento3 = document.getElementById("number-3");
  var valor3 = valorElemento3.value;
  var valor3Bimestre = parseFloat(valor3);

  var valorElemento4 = document.getElementById("number-4");
  var valor4 = valorElemento4.value;
  var valor4Bimestre = parseFloat(valor4);

  var valorDaMedia =
    (valor1Bimestre + valor2Bimestre + valor3Bimestre + valor4Bimestre) / 4;

  var elementoMedia = document.getElementById("valorMedia");
  var media = "O resultado da sua media é: " + valorDaMedia;
  elementoMedia.innerHTML = media;
  console.log(
    (valor1Bimestre + valor2Bimestre + valor3Bimestre + valor4Bimestre) / 4
  );
}