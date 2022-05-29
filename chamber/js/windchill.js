window.onload = function () {

  let temperature;
  let windSpeed;

  const calculateWindChillFactor = () => {
    let result =  35.74 + 0.6215 * temperature -35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16)
    let rounded = Math.round(result);
    return rounded;
  }; 

  var windChillLabel = document.getElementById("windChillLabel2");
  var windSpeedInput = document.getElementById("windSpeedInput");
  var temperatureInput = document.getElementById("temperatureInput");
  var button = document.getElementById("calculateButton");

  windSpeedInput.addEventListener("change", function (event) {
    windSpeed = parseFloat(windSpeedInput.value);
  });

  temperatureInput.addEventListener("change", function (event) {
    temperature = parseFloat(temperatureInput.value);
  });

  button.addEventListener('click', function(event){

    if(temperature && temperature >50) {
      temperatureInput.value = "";
      temperature = null;
      alert('Temperature must be under 50 F');
      return;
    };

    if(windSpeed && windSpeed <= 3 ) {
      windSpeedInput.value = "";
      windSpeed = null;
      alert('wind speed must be over 3 mph ');
      return;
    };
    
    if(!windSpeedInput.value || !temperatureInput.value) {
      alert('You need to define wind speed and temperature first!!!');
      return;
    };
    windChillLabel.innerText = calculateWindChillFactor();
  });
};
