const cityForm = document.getElementById("city-form");
const card = document.getElementById("card");
const details = document.getElementById("details");
const time = document.getElementById("time");
const icon = document.querySelector("#icon img");

function updateUI(data) {
  const { cityDetails, weather } = data;

  details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
              <span>${weather.Temperature.Imperial.Value}</span>
              <span>&deg;F</span>
    `;

  //REMOVE d-none CLASS
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
}

async function updateCity(city) {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);

  return { cityDetails, weather };
}

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = cityForm.city.value.trim();
  cityForm.reset();

  updateCity(city)
    .then((data) => {
      updateUI(data);
    })
    .catch((err) => console.log(err));
});
