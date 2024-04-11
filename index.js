const cep = document.querySelector("#cep");

const ceptabela = document.getElementById("cepTB");
const bairro = document.getElementById("bairroTB");
const cidade = document.getElementById("cityTB");

async function getAddByendereco() {
  const apiURL = `https://viacep.com.br/ws/${cep.value}/json/`;

  const response = await fetch(apiURL);

  const data = await response.json();
  console.log(data);

  getTempo();

  ceptabela.innerHTML = data.logradouro;
  bairro.innerHTML = data.bairro;
  cidade.innerHTML = `${data.localidade} / ${data.uf}`;
}
async function getTempo() {
  const lat = document.getElementById("latitude");
  const long = document.getElementById("longitde");

  try {
    const apitempo = `https://api.open-meteo.com/v1/forecast?latitude=${lat.value}&longitude=${long.value}&hourly=temperature_2m`;

    const res = await fetch(apitempo);
    const prevTemp = await res.json();

    console.log(prevTemp);
       const tempo = document.getElementById("inputlg").innerHTML = '';
    /*for (
      let index = 0;
      index < prevTemp.hourly.temperature_2m.length;
      index++
    ) {
    }*/
      const data = new Date();
      const hora = data.getHours();
      console.log(hora);
      console.log(typeof( prevTemp.hourly.time[0]));
     
      
      

  } catch (error) {
    alert(error.message);
  };

};
