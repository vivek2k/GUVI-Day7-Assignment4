var XMLHttpRequest = require('xhr2');

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all", true)

xhr.send()

xhr.onload=function (){

    var countryDetails=JSON.parse(this.response);
    const population=countryDetails.reduce((acc,element)=>{
        return acc + element.population;
    },0)
    console.log(population);}