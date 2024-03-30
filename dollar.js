var XMLHttpRequest = require('xhr2');

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all", true)

xhr.send()

xhr.onload = function () {
        var countryDetails = JSON.parse(this.response);
        var cur=[];
        for(i=0;i<countryDetails.length;i++){
            // if(countryDetails[i].currencies[0]==="USD")
            // {
            //     console.log("name:",countryDetails[i].name,"==>",countryDetails[i].currenc6ies[0])
            // }
            console.log(countryDetails[i].currencies)
        }
    }