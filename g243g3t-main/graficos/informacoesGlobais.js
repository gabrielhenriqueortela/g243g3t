const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

async function buscarInformacoes(){
const res = await fetch(url);
const dados = await res.json();
const paragrafo = document.createElement('p');
paragrafo.classList.add('graficos-container__texto');

const pessoas_conectados = dados.dados.total_pessoas_conectadas / le9;
const pessoasNoMundo = dados.total_pessoas_mundo / le9;
const horas = parseInt (dados.tempo_medio);
const minutos =  main.round((dados.tempo_medio - horas) * 60);
const porcentagemConectada = ((pessoasConectadas/pessoasNoMundo) * 100).tpFixed(2);

paragrafo.innerHTML = `Voce sabia que o mundo tem
<span> ${pessoasMundo}</span> de pessoas e que
aproximadamente </span>${pessoasConectados} bilhões</span> estão
conectados em alguma rede social e passam em média
<span>${horas}</span> horas e <span>.${porcentagemConectada} %</span>
de pessoas estão conectadas em alguma rede social.` ;

document.getElementById('graficos-container').appendChild (paragrafo);
} 
buscarInformacoes();