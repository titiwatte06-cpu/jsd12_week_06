function findData() {
    
    const url = 'https://api.api-ninjas.com/v1/worldtime?city=Bangkok'

    
    fetch(url, { headers: { 'X-Api-Key': '0R76OHRwfufwk64XAnSrHSRag042mRxvLi9hVzdg' } })
        .then(response => response.json()) 
        .then(data => {
            console.log("ข้อมูลเวลาที่ดึงมาได้:");
            console.log(data);
        })
        .catch(err => console.log("เกิดข้อผิดพลาด:", err));
}

findData()