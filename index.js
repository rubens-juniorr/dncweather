const cep = document.querySelector("#cep");
const ceptabela = document.getElementById("cepTB");
const bairro = document.getElementById("bairroTB");
const cidade = document.getElementById("cityTB");

async function getAddByendereco() {
  const apiURL = `https://viacep.com.br/ws/${cep.value}/json/`;

  const response = await fetch(apiURL);

  const data = await response.json();
  console.log(data);

  getPrevisao();

  ceptabela.innerHTML = data.logradouro;
  bairro.innerHTML = data.bairro;
  cidade.innerHTML = `${data.localidade} / ${data.uf}`;
}
async function getPrevisao() {
  const lat = document.getElementById("latitude").value;
  const long = document.getElementById("longitude").value;
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=" +
        lat +
        "&longitude=" +
        long +
        "&hourly=temperature_2m"
    );
    const data = await response.json();
    console.log(data);
    document.getElementById("previsao").value =
      "Previsão de tempo de acordo com a região: " +
      data.hourly.temperature_2m[12] +
      "°C";
  } catch (error) {
    alert("Latitude e Longitudes inseridos invalidos.");
  }
}

//52.52
//13.419998
