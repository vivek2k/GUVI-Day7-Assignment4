var XMLHttpRequest = require('xhr2');

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all", true)

xhr.send()

xhr.onload = function() {
    if(xhr.status != 200){
        console.log("Not Found ")
    }
    else {
        let countryDetails = JSON.parse(xhr.responseText);
        
        const population = countryDetails.filter((element)=>{
            if(element.population < 200000){
                return element.name;
            }
        })
        console.log(population)
    }
}