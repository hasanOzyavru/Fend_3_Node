const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "06bb0ad71a9caa1520f4937937378e3f";

const zip = document.getElementById("zip");
const buton = document.getElementById("my-button");
const res = document.getElementById("result");

const getData = async (url, zip, api) => {
  const data = await fetch(url + `${zip}&units=metric&APPID=` + api);
  const response = await data.json();
  return response;
};

const postData = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response;
};

buton.addEventListener("click", () => {
  let zipval = zip.value;
  if (!zipval) {
    zipval = 75189;
  }
  getData(baseURL, zipval, apiKey).then(result => {
    console.log(result);
    res.textContent = `${result.name} is ${result.main.temp} C`;
    postData("http://localhost:3000/app", {
      name: result.name,
      temperature: result.main.temp
    });
  });
});