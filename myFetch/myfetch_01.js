// ดึงข้อมูลสภาพอากาศ

const apiKey = '907f0a31d6cff4b3b21e57169ad23ac2';
const city = "Tokyo"
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=th`;

fetch(url)
  .then(response => response.json())
  .then(data => {

    console.log(data);
    
    
  })
  .catch(error => console.error('Error:', error));