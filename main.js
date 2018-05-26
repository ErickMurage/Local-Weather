$(document).ready(function () {
    
    //$("#get-weather").on("click", function() {
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;
                
                $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" + longitude, function (data) {
            
                    let weather = " ";
                    let temperature = " ";
                    let icon = " ";
                    
                    Object.keys(data).forEach(function (item, index, array) {

                        if (item == "weather") {
                            data["weather"].forEach(function (item, index, array) {
                                weather += item["description"];
                                icon += "<img src = '"+ item["icon"] +"' >"
                            });     
                        }
                        if (item == "main") {
                            temperature += data["main"]["temp"] + "⁰c";
                        }
                        
                    });
                
                    console.log(temperature);

                    function temperatureConverter () {
                        
                    }


                    $("#weather").html(weather);
                    $("#temperature").html(temperature);
                    $("#location").html();
                    $("#icon").html(icon);
                    $("#switch").html();
                });
            });
        }
        
        
        
    //});
});