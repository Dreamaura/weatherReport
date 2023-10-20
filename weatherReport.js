function weatherReport(temp, rain) {
    if (temp > 20 && rain == 1){
        window.alert("Bring an umbrella.");
    }
    else if (temp > 20 && rain == 2) {
        window.alert("Bring sunscreen!");
    }
    else if (temp > 10 && rain == 1) {
        window.alert("Bring a summer coat.");
    }
    else if (temp > 10 && rain == 2) {
        window.alert("No jacket needed, its mild.");
    }
    else if (temp < 10 && rain == 1) {
        window.alert("It's cold and wet, stay inside!");
    }
    else {
        window.alert("It's a cold crisp day, the best kind, go out and enjoy it!");
    }
}

while (true) {
    temp = prompt("Please enter the temperature.");
    if (!isNaN(temp) && temp >= -20 && temp <= 50) {
        while (true) {
        rain = prompt("Is it raining? 1 for yes, 2 for no.");
        if (rain == 1 || rain == 2) {
            rain = parseInt(rain);
            temp = parseFloat(temp);
            weatherReport(rain, temp);
            break;
            }
        else {
            window.alert("Please only enter 1 or 2 for yes and no.");
        }
        }
        }  
    else if (isNaN(temp)) {
        window.alert("Please enter a valid number.");
    } 
    else {
        window.alert("Please enter a valid temperature, its Ireland for God's sake!");
        }

}