// Início do código
console.log("Perfil do Usuário");
console.log("Informações da conta do entregador");
console.log("e novos pedidos.");
console.log(99 / 70);

const nomeUsuario = "pedrosouza";
const idUsuario = "00311";
const usuario = nomeUsuario + "@" + idUsuario;
const cadastroEmpresa = null;
let qtdPedidos = 11;
var qtdEntregas = 15;
let estaOnline = true;

console.log("----------------------");
console.log(`Usuário: ${usuario}`);
console.log(`Empresa cadastrada: ${cadastroEmpresa}`);
console.log(`Disponível para entregas: ${estaOnline ? "Sim" : "Não"}`);
console.log(`Pedidos (hoje): ${qtdPedidos}`);
console.log(`Entregas (hoje): ${qtdEntregas}`);

const pontuacaoDiaria = qtdEntregas - qtdPedidos;
let notaClientes = 4.73;
let notaEmpregador = 4.86;
const notaGeral = (notaClientes + notaEmpregador) / 2;
const excelencia = notaGeral >= 4.5 ? "Sim" : "Não";
let desempenho;

console.log(`Pontuação (hoje): ${pontuacaoDiaria}`);
console.log(`Nota: ${notaGeral.toFixed(2)}`);
console.log(`Entregador de Excelência: ${excelencia}`);

if (notaGeral >= 4.5) {
  desempenho = "Excelente";
} else if (notaGeral > 4) {
  desempenho = "Muito Bom";
} else if (notaGeral > 3.5) {
  desempenho = "Bom";
} else if (notaGeral > 3) {
  desempenho = "Ok";
} else {
  desempenho = "Ruim";
}

console.log(`Desempenho Geral: ${desempenho}`);
