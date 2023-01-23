const hoje = new Date();
const aniversario = new Date(hoje.getFullYear(), 4, 19);
const dia = 1000 * 60 * 60 * 24;

if (hoje.getMonth() == 4 && hoje.getDate() > 19)
aniversario.setFullYear(aniversario.getFullYear() +1 );

const dias = Math.ceil(
  (aniversario.getTime() - hoje.getTime()) / dia
);

if (dias == 0)
console.log(`Hoje é seu aniversário, parabéns! 🥳`);
else
console.log(`Faltam ${dias} dia(s) para o seu aniversário!`);

