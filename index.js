const cep = document.querySelector("#cep");
const latitude = document.querySelector("#lat");
const longitude = document.querySelector("#lnog");

const tempo = document.getElementById("inputlg");
const ceptabela = document.getElementById("cepTB");
const bairro = document.getElementById("bairroTB");
const cidade = document.getElementById("cityTB");

async function getAddByendereco() {
    
 const apiURL = `https://viacep.com.br/ws/${cep.value}/json/`;


const response = await fetch(apiURL); 

const data = await response.json();
console.log(data);


ceptabela.innerHTML = data.logradouro;
bairro.innerHTML = data.bairro;
cidade.innerHTML =  `${data.localidade} / ${data.uf}`;


async function getTempo(){
 const apitempo = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m`;

 const res = await fetch(apitempo)
 const tempo = await res.json();
 

console.log(tempo);

};


};



