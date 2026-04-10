const url = "https://api.api-ninjas.com/v1/nutrition?query=1lb brisket and fries";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": "0R76OHRwfufwk64XAnSrHSRag042mRxvLi9hVzdg",
    "Content-Type": "application/json",
  },
};

fetch(url, options)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Something went wrong!", error);
  });