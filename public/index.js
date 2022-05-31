// convert epochtime to JavaScripte Date object
function epochToJsDate(epochTime){
  return new Date(epochTime*1000);
}

// convert time to human-readable format YYYY/MM/DD HH:MM:SS
function epochToDateTime(epochTime){
  var epochDate = new Date(epochToJsDate(epochTime));
  var dateTime = epochDate.getFullYear() + "/" +
    ("00" + (epochDate.getMonth() + 1)).slice(-2) + "/" +
    ("00" + epochDate.getDate()).slice(-2) + " " +
    ("00" + epochDate.getHours()).slice(-2) + ":" +
    ("00" + epochDate.getMinutes()).slice(-2) + ":" +
    ("00" + epochDate.getSeconds()).slice(-2);

  return dateTime;
}

// function to plot values on charts
function plotValues(chart, timestamp, value){
  var x = epochToJsDate(timestamp).getTime();
  var y = Number (value);
  if(chart.series[0].data.length > 40) {
    chart.series[0].addPoint([x, y], true, true, true);
  } else {
    chart.series[0].addPoint([x, y], true, false, true);
  }
}

//end of func
var dbPath="UserData/readings";
var dbRef = firebase.database().ref(dbPath);
var chartPath = 'UserData/charts/range';
var chartRef = firebase.database().ref(chartPath);

const chartsRangeInputElement = document.getElementById('charts-range');

const celciusElement = document.getElementById("celcius");
const farenheitElement = document.getElementById("faren");
const update1Element = document.getElementById("lastUpdate1")
const update2Element = document.getElementById("lastUpdate2")
const updatebar25Element = document.getElementById("myBar25");
const updatebar10Element = document.getElementById("myBar10");
const updatebar01Element = document.getElementById("myBar01");

function ref1() {



dbRef.orderByKey().limitToLast(1).on('child_added', snapshot =>{
  var jsonData = snapshot.toJSON(); // example: {temperature: 25.02, humidity: 50.20, pressure: 1008.48, timestamp:1641317355}
  var celcius = jsonData.TemperatureToCelsius;
  var farenheit = jsonData.TemperatureToFahrenheit;
  var PM01 =jsonData.PM01;
  var PM10 =jsonData.PM10;
  var PM25 =jsonData.PM25;
  var humidity = jsonData.Humidity;
  var timestamp = jsonData.TimeStamp;
  var tm=timestamp-7*3600;
  // Update DOM elements
    if(timestamp !=undefined){
      celciusElement.innerHTML = celcius +' °C' ;
      farenheitElement.innerHTML=farenheit +' °F';

      var gaugeT1 = createTemperatureGauge1();
      var gaugeT2 = createTemperatureGauge2();
      var gaugeH = createHumidityGauge();
      var gaugePM25 = createPM25Gauge();
      var gaugePM10 = createPM10Gauge();
      var gaugePM01 = createPM01Gauge();
      gaugeT1.draw();
      gaugeT2.draw();
      gaugeH.draw();
      gaugePM25.draw();
      gaugePM10.draw();
      gaugePM01.draw();
      gaugeT1.value = celcius;
      gaugeT2.value = farenheit;
      gaugeH.value = humidity;
      gaugePM25.value=PM25;
      gaugePM10.value=PM10;
      gaugePM01.value=PM01;
      


      if(PM25<51){
        var color1 = '#04AA6D';
        }
        else if(PM25>=51 & PM25<150){
          var color1 = '#FFBF00';
        }
        else{
          var color1 = '#D2222D';
          PM25 = Math.min(PM25, 200);
        }

      updatebar25Element.style.backgroundColor=color1;
      updatebar25Element.style.width = PM25/2 + "%";
      updatebar25Element.innerHTML = PM25+ "µg";
      if(PM10<51){
        var color2 = '#04AA6D';
        }
        else if(PM10>=51 & PM10<150){
          var color2 = '#FFBF00';
        }
        else{
          var color2 = '#D2222D';
          PM10 = Math.min(PM10, 200);
        }
    
      updatebar10Element.style.backgroundColor=color2;
      updatebar10Element.style.width = PM10/2 + "%";
      updatebar10Element.innerHTML = PM10+ "µg";
      if(PM01<51){
        var color3 = '#04AA6D';
        }
        else if(PM01>=51 & PM01<150){
          var color3 = '#FFBF00';
        }
        else{
          var color3 = '#D2222D';
          PM01 = Math.min(PM01, 200);
        }
    
      updatebar01Element.style.backgroundColor=color3;
      updatebar01Element.style.width = PM01/2 + "%";
      updatebar01Element.innerHTML = PM01+ "µg";

      update1Element.innerHTML = 'Lasted Update: '+epochToDateTime(tm);
      update2Element.innerHTML = 'Lasted Update: '+epochToDateTime(tm);
    }

  
});
}
setInterval(ref1, 10000);

function ref2() {

    // CHARTS
    // Number of readings to plot on charts
    var chartRange = 0;
    // Get number of readings to plot saved on database (runs when the page first loads and whenever there's a change in the database)
    chartRef.once('value', snapshot =>{
      chartRange = Number(snapshot.val());
      console.log(chartRange);
      // Delete all data from charts to update with new values when a new range is selected
      chartH.destroy();
      // Render new charts to display new range of data
      chartH = createHumidityChart();
      // Update the charts with the new range
      // Get the latest readings and plot them on charts (the number of plotted readings corresponds to the chartRange value)
      dbRef.orderByKey().limitToLast(chartRange).on('child_added', snapshot =>{
        var jsonData = snapshot.toJSON(); // example: {temperature: 25.02, humidity: 50.20, pressure: 1008.48, timestamp:1641317355}
        // Save values on variables
        var humidity = jsonData.Humidity;
        var timestamp = jsonData.TimeStamp;
        var tm=timestamp;
        // Plot the values on the charts
        plotValues(chartH, tm, humidity);
      });
    });
  }
  setInterval(ref2, 10000);

    // Update database with new range (input field)
    chartsRangeInputElement.onchange = () =>{
      chartRef.set(chartsRangeInputElement.value);
    };


//Display Time
var timeDisplay = document.getElementById("time");
function refreshTime() {
  const d = new Date();
  timeDisplay.innerHTML = d.toLocaleTimeString('en-GB');
}

setInterval(refreshTime, 1000);
  
