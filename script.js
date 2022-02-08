var request = new XMLHttpRequest();
      request.open("GET","https://restcountries.com/v2/all",true)
      request.send();
      request.onload = function () {
        let countryData = JSON.parse(this.response);
        let populationarry=[]
      
        for(data of countryData){
          if(data.currencies){
           if(data.currencies[0].code==='USD'){
             console.log(data.name)
          }
        }
        }
  

        }

       