const cityName = document.getElementById("cityName");
const submitbtn = document.getElementById("submitbtn");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const today_date = document.querySelector(".Today_date");
const data_hide  = document.querySelector(".data_hide");
const temp_real_val = document.getElementById("temp_real_val"); 
var  icon = document.getElementById('icon');




let date = new Date();
let month = date.getMonth() + 1;
let date_ = date.getDate();

today_date.innerText = date;

async function getInfo(e) {
  e.preventDefault();

  let cityVal = cityName.value;

  if (!cityVal) {
    city_name.innerText = "Plz write the name before search";
    data_hide.classList.add(`data_hide`)
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=338b3cfb5c7ff330e2a9b9b9d25ad294`;
      let resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      const array = [data];

      console.log(array);

      array.map((elm, index, array) => {
        console.log(elm.main.temp);    // 45.45
        console.log(elm.sys.country); // india
        console.log(elm.weather[0].description);
        console.log(elm.weather[0].main);  // Clear 
        console.log(elm.name);  // city name 

        temp.innerText = elm.main.temp;
        city_name.innerText = ` ${elm.name} , ${elm.sys.country}`;

        const  tempMood = elm.weather[0].main;


        if (tempMood == "Clear") {
          temp_status.innerHTML = `<i class="fa-solid fa-cloud-sun fa-beat-fade" style="color:#99baeb;"></i>`;
        } else if (tempMood=="Haze") {
          temp_status.innerHTML = `<i class="fa-solid fa-cloud-meatball fa-bounce" style="color:#99baeb;"></i>`;
        } else if (tempMood == "Clouds") {
          temp_status.innerHTML = `<i class="fa-solid fa-cloud-sun fa-beat-fade" style="color:#99baeb;"></i>`;
        } else if (tempMood == "Rain") {
          temp_status.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy fa-shake" style="color:#99baeb;"></i>`;
        } else if (tempMood == "scattered clouds") {
          temp_status.innerHTML = `<i class="fa-solid fa-cloud-sun fa-beat-fade" style="color:#99baeb;"></i>`;
        } else {
          temp_status.innerHTML = `<i class="fa-solid fa-cloud-sun fa-beat-fade" style="color:#99baeb;"></i>`;
          console.log("not found");
        }

        // Bangalore

        // Mumbai``````

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


 

//     change the background colour



function changeicon(){
    document.body.classList.toggle("dark-theme");
    let change_icon = document.body.classList.contains("dark-theme");
    if(change_icon){
     icon.src='/images/sun.png';
      }else{
     icon.src='/images/moon.png';
   }
}

icon.addEventListener("click",changeicon);

