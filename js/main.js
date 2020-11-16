function weatherGetter() {
    let cityWeather = document.querySelector('#city').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityWeather}&appid=2e3c135388fe301b2cff9c0698128f51&units=imperial`)
    .then(response => response.json())
    .then(data => {


        // Grab Longitude and Latitude
        let lon = data.coord.lon
        let lat = data.coord.lat
        // Grab temperature(High)
        let tempH = Math.round(data.main.temp_max)
        let temp_text_high = document.querySelector('#tempHigh')
        temp_text_high.innerHTML = tempH

        // Grab temperature(Low)
        let tempL = Math.round(data.main.temp_min)
        let temp_text_low = document.querySelector('#tempLow')
        temp_text_low.innerHTML = tempL
        
        // Grab humidity
        let humidity = data.main.humidity
        let humidity_text = document.querySelector('#humidity')
        humidity_text.innerHTML = humidity
        
        //  Grab  Weather Description
        let description = data.weather[0].description
        let description_text = document.querySelector('#description')
        description_text.innerHTML = description

         //  Grab  Location Name
         let location = data.name
         let location_text = document.querySelector('#location')
         location_text.innerHTML = location

        
        
        
    });
}