$(document).ready(function () {
    
    //HTML5 geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
                
            $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" + longitude, function (data) {
            
                let weather = " ";
                let temperature = " ";
                let icon = " ";
                let location = " ";
                    
                //iterating through API and selecting the data I want to use
                Object.keys(data).forEach(function (item, index, array) {
                    if (item == "weather") {
                        data["weather"].forEach(function (item, index, array) {
                            weather += item["main"];

                            //Own icons
                            if (item["main"] == "Clouds") {
                                icon += '<img src = imgs/cloudy.png>';
                            } else if (item["main"] == "Drizzle") {
                                icon += '<img src = imgs/drizzle.png>';
                            } else if (item["main"] == "Rain") {
                                icon += '<img src = imgs/rainy-day.png>';
                            } else if (item["main"] == "Snow") {
                                icon += '<img src = imgs/snow.png>';
                            } else if (item["main"] == "Clear") {
                                icon += '<img src = imgs/sunny.png>';
                            } else if (item["main"] == "Thunderstorm") {
                                icon += '<img src = imgs/storm.png>';
                            } else if (item["main"] == "Mist") {
                                icon += '<img src = imgs/foggy.png>';
                            }

                        });     
                    }
                    if (item == "main") {
                        temperature += data["main"]["temp"];
                    }
                        
                });
                
                //geocoding
                let city = data.name;
                let country = data.sys.country;

                location = city + " , " + country;

                //functions to toggle between celsius and fahrenheit 
                function setCelsius() {
                    return temperature + "°C";
                };

                function setFahrenheit() {
                    var fahrenheit = temperature * 9/5 + 32;
                    return fahrenheit + "°F";
                }
                    
                $('#toggle').on('click', function () {
                    $('#toggle').toggleClass('celsius');
                    $('#toggle').toggleClass('fahrenheit');

                    if ($(this).hasClass('celsius')) {
                        $('#temperature').text(setFahrenheit());
                        return;
                    } else {
                        $('#temperature').text(setCelsius());
                    }
   
                });

                //appending data in html format                    
                $("#weather").html(weather);
                $("#temperature").html(temperature + "°C");
                $("#location").html(location);
                $("#icon").html(icon);
            });
        });
    }
 
});