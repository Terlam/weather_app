$("#getWeather").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#getWeather").click();
    }
});

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

function cityGetter() {
    console.log(description.innerText)
    let clientId = "8Zw4_e1xJ4TnnIUvbzhQJORwbg9su8ACGeepK6DR3Iw"
    let cityPhoto = document.querySelector('#city').value;
    fetch(`https://api.unsplash.com/photos/random?client_id=${clientId}&orientation=squarish&query=${cityPhoto}&city`)
    .then(response => response.json())
    
    .then(data2 => {
        let city_photo = data2.urls.regular
        console.log(data2)
        let city_img_url = document.querySelector('#city_img_url')
        city_img_url = city_photo
        $('#city_img_url').css("background-image", `url(${city_photo})`)

            let photoText = data2.user.name
            let photo_link_text = document.querySelector('#photoText')
            photo_link_text.innerHTML = 
            `Photo by <a href="${data2.user.portfolio_url}" target="_blank">${photoText}</a>
            on <a href="https://unsplash.com/" target="_blank">Unsplash</a>`
            


    });
}


