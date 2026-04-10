function getData() {
  const url = 'https://api.api-ninjas.com/v1/aircraft?model=a&limit=30';
  fetch(url, {headers: { 'X-Api-Key': '0R76OHRwfufwk64XAnSrHSRag042mRxvLi9hVzdg' }})
    .then(response => response.json())

    

    .then(data => {
      
      console.log(data);
    })
    
    // 4. Handle errors
    .catch(error => {
      console.error("Something went wrong:", error);
    });
}

getData();