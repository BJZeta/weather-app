const key = "Z3rZCNmlIJmMmrYQ5xE6xVZMxkbGxa2h";

async function getCity(city) {
  const response = await fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${city}`
  );

  const data = await response.json();

  console.log(data[0]);
}

getCity("Los Angeles").then();
