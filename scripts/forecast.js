const key = "Z3rZCNmlIJmMmrYQ5xE6xVZMxkbGxa2h";

//WEATHER INFO ON CITY
async function getWeather(id) {
  const response = await fetch(
    `http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${key}`
  );

  const data = await response.json();

  return data[0];
}

//GET CITY
async function getCity(city) {
  const response = await fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${city}`
  );

  const data = await response.json();

  return data[0];
}
