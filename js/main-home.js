$(document).ready(function () {

  $("#aviso").hide();

  $("#qtd-kg-carne").on("keydown", function (e){
    return e.keyCode !== 69 && e.keyCode !== 189;
  });

  $("#calcular-qtd").on("click", function (e) {
    $("#aviso").hide();
    let quantidade = $("#qtd-kg-carne").val();

    if(!quantidade || quantidade == 0){
      $("#aviso").show();
      $("#descarga").html('X');
      $("#banho").html('X');
      $("#maquina-lavar").html('X');
      $("#lavar-carro").html('X');
    }

    else {
      let litrosPorQuiloCarne = 15400;

      let litrosGastosPorQtd = litrosPorQuiloCarne * quantidade;
      
      let qtdDescargas = litrosGastosPorQtd / 10;
      let qtdBanhos = litrosGastosPorQtd / 15;
      let qtdLavagemMaquina = litrosGastosPorQtd / 150;
      let qtdLavagemAutomovel = litrosGastosPorQtd / 100;
      
      $("#descarga").html(Math.floor(qtdDescargas));
      $("#banho").html(Math.floor(qtdBanhos));
      $("#maquina-lavar").html(Math.floor(qtdLavagemMaquina));
      $("#lavar-carro").html(Math.floor(qtdLavagemAutomovel));
    }

  });
});