$(document).ready(function () {
    $("#get-weather").on("click", function() {
        $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139", function (data) {

            let weather = " ";
            let temperature = " ";
            let icon = " ";
            
            //weather += data["weather"][0]['main'];

            //function weatherData (val) {
                
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
            //}
            
            
            $("#weather").html(weather);
            $("#temperature").html(temperature);
            $("#location").html();
            $("#icon").html(icon);
            $("#switch").html();
        });
    });
});