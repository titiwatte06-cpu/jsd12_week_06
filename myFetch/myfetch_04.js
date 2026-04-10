function findData(city) {
    const url = `https://api.api-ninjas.com/v1/worldtime?city=${city}`;

    fetch(url, { headers: { 'X-Api-Key': '0R76OHRwfufwk64XAnSrHSRag042mRxvLi9hVzdg' } })
        .then(res => res.json())
        .then(data => {
            console.log(`เวลาที่ ${city} คือ: ${data.datetime}`);
        })
        .catch(err => console.log(err));
}

findData("London");
findData("Tokyo");
findData("New York");