

function calcularOrçamento(precoPeca, horasTrabalho) {
  const valorHora = 85.00;
  const totalMaodeObra = valorHora * horasTrabalho;
  return precoPeca + totalMaodeObra;
} 

function verificarGarantia(meses) {
  if (meses <= 3) {
    return "Garantia válida";
  } else {
    return "Garantia inválida";
  } } 

  module.exports = { calcularOrçamento,
     verificarGarantia }

