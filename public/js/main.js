const cityName = document.getElementById("cityName");
const submitbtn = document.getElementById("submitbtn");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const today_date = document.querySelector(".Today_date");

let date = new Date();
let month = date.getMonth() + 1;
let date_ = date.getDate();

today_date.innerText = date;

async function getInfo(e) {
  e.preventDefault();

  let cityVal = cityName.value;

  if (!cityVal) {
    city_name.innerText = "Plz write the name before search";
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=338b3cfb5c7ff330e2a9b9b9d25ad294`;
      let resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      const array = [data];

      console.log(array);

      array.map((elm, index, array) => {
        console.log(elm.main.temp);
        console.log(elm.sys.country);
        console.log(elm.weather[0].description);
        console.log(elm.name);

        temp.innerText = elm.main.temp;
        city_name.innerText = ` ${elm.name} , ${elm.sys.country}`;

        if (elm.weather[0].description == "clear sky") {
          temp_status.innerHTML = `<i class="fa-solid fa-cloud-sun fa-beat-fade" style="color: yellow;"></i>`;
        } else if (elm.weather[0].description == "haze") {
          temp_status.innerHTML = `<i class="fa-solid fa-cloud-meatball fa-bounce" style="color: #635cc7;"></i>`;
        } else if (elm.weather[0].description == "few clouds") {
          temp_status.innerHTML = `<i class="fa-solid fa-cloud-sun fa-beat-fade" style="color: #5059d7;"></i>`;
        } else if (elm.weather[0].description == " broken clouds") {
          temp_status.innerHTML = `<i class="fa-solid fa-cloud-sun fa-beat-fade" style="color: #5059d7;"></i>`;
        } else if (elm.weather[0].description == "scattered clouds") {
          temp_status.innerHTML = `<i class="fa-solid fa-cloud-sun fa-beat-fade" style="color: #5059d7;"></i>`;
        } else {
          console.log("error");
        }

        // Mumbai	Maharashtra	12,442,373	18,414,288	853	89.73
        // 2	Delhi	Delhi	11,034,555	16,314,838	876	87.59
        // 3	Bangalore

        // Mumbai``````````````````

        // Hyderabad

        // Pune ``````````````

        // Chennai

        // Bengaluru

        // Ahmedabad

        // Kolkata````````````````

        // Kochi

        // Delhi`````````````````````
      });
    } catch {
      city_name.innerText = `Plz Enter the City Name Properly`;
    }
  }
}

submitbtn.addEventListener("click", getInfo);
