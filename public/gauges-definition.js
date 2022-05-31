// Create Temperature Gauge1
function createTemperatureGauge1() {
    var gauge = new LinearGauge({
        renderTo: 'gauge-temperature1',
        width: 100,
        height: 200,
        units: "Temperature C",
        minValue: 0,
        startAngle: 90,
        ticksAngle: 180,
        maxValue: 40,
        colorValueBoxRect: "#049faa",
        colorValueBoxRectEnd: "#049faa",
        colorValueBoxBackground: "#f1fbfc",
        valueDec: 2,
        valueInt: 2,
        majorTicks: [
            "0",
            "5",
            "10",
            "15",
            "20",
            "25",
            "30",
            "35",
            "40"
        ],
        minorTicks: 4,
        strokeTicks: true,
        highlights: [
            {
                "from": 30,
                "to": 40,
                "color": "rgba(200, 50, 50, .75)"
            }
        ],
        colorPlate: "#fff",
        colorBarProgress: "#CC2936",
        colorBarProgressEnd: "#049faa",
        borderShadowWidth: 0,
        borders: false,
        needleType: "arrow",
        needleWidth: 2,
        needleCircleSize: 7,
        needleCircleOuter: true,
        needleCircleInner: false,
        animationDuration: 1500,
        animationRule: "linear",
        barWidth: 10,
    });
    return gauge;
}

function createTemperatureGauge2() {
    var gauge = new LinearGauge({
        renderTo: 'gauge-temperature2',
        width: 100,
        height: 200,
        units: "Temperature F",
        minValue: 32,
        startAngle: 90,
        ticksAngle: 180,
        maxValue: 104,
        colorValueBoxRect: "#049faa",
        colorValueBoxRectEnd: "#049faa",
        colorValueBoxBackground: "#f1fbfc",
        valueDec: 2,
        valueInt: 2,
        majorTicks: [
            "32",
            "41",
            "50",
            "59",
            "68",
            "77",
            "86",
            "95",
            "104"
        ],
        minorTicks: 4,
        strokeTicks: true,
        highlights: [
            {
                "from": 86,
                "to": 104,
                "color": "rgba(200, 50, 50, .75)"
            }
        ],
        colorPlate: "#fff",
        colorBarProgress: "#CC2936",
        colorBarProgressEnd: "#049faa",
        borderShadowWidth: 0,
        borders: false,
        needleType: "arrow",
        needleWidth: 2,
        needleCircleSize: 7,
        needleCircleOuter: true,
        needleCircleInner: false,
        animationDuration: 1500,
        animationRule: "linear",
        barWidth: 10,
    });
    return gauge;
}

// Create Humidity Gauge
function createHumidityGauge(){
    var gauge = new RadialGauge({
        renderTo: 'gauge-humidity',
        width: 200,
        height: 200,
        units: "Humidity (%)",
        minValue: 0,
        maxValue: 100,
        colorValueBoxRect: "#049faa",
        colorValueBoxRectEnd: "#049faa",
        colorValueBoxBackground: "#f1fbfc",
        valueInt: 2,
        majorTicks: [
            "0",
            "20",
            "40",
            "60",
            "80",
            "100"
    
        ],
        minorTicks: 4,
        strokeTicks: true,
        highlights: [
            {
                "from": 80,
                "to": 100,
                "color": "#03C0C1"
            }
        ],
        colorPlate: "#fff",
        borderShadowWidth: 0,
        borders: false,
        needleType: "line",
        colorNeedle: "#007F80",
        colorNeedleEnd: "#007F80",
        needleWidth: 2,
        needleCircleSize: 3,
        colorNeedleCircleOuter: "#007F80",
        needleCircleOuter: true,
        needleCircleInner: false,
        animationDuration: 1500,
        animationRule: "linear"
    });
    return gauge;
}

function createPM25Gauge(){
    var gauge = new RadialGauge({
        renderTo: 'gauge-PM25',
        width: 200,
        height: 200,
        units: "PM2.5 (µg/m^3)",
        minValue: 0,
        maxValue: 180,
        colorValueBoxRect: "#049faa",
        colorValueBoxRectEnd: "#049faa",
        colorValueBoxBackground: "#f1fbfc",
        valueInt: 2,
        majorTicks: [
            "0",
            "20",
            "40",
            "60",
            "80",
            "100",
            "120",
            "140",
            "160",
            "180"
    
        ],
        minorTicks: 10,
        strokeTicks: true,
        highlights: [
            {
                "from": 0,
                "to": 50,
                "color": '#04AA6D'
            },
            {
                "from": 50,
                "to": 150,
                "color": '#FFBF00'
            },
            {
                "from": 150,
                "to": 180,
                "color": '#D2222D'
            }
        ],
        colorPlate: "#fff",
        borderShadowWidth: 0,
        borders: false,
        needleType: "line",
        colorNeedle: "#007F80",
        colorNeedleEnd: "#007F80",
        needleWidth: 2,
        needleCircleSize: 3,
        colorNeedleCircleOuter: "#007F80",
        needleCircleOuter: true,
        needleCircleInner: false,
        animationDuration: 1500,
        animationRule: "linear"
    });
    return gauge;
}
function createPM10Gauge(){
    var gauge = new RadialGauge({
        renderTo: 'gauge-PM10',
        width: 200,
        height: 200,
        units: "PM10 (µg/m^3)",
        minValue: 0,
        maxValue: 180,
        colorValueBoxRect: "#049faa",
        colorValueBoxRectEnd: "#049faa",
        colorValueBoxBackground: "#f1fbfc",
        valueInt: 2,
        majorTicks: [
            "0",
            "20",
            "40",
            "60",
            "80",
            "100",
            "120",
            "140",
            "160",
            "180"
    
        ],
        minorTicks: 10,
        strokeTicks: true,
        highlights: [
            {
                "from": 0,
                "to": 50,
                "color": '#04AA6D'
            },
            {
                "from": 50,
                "to": 150,
                "color": '#FFBF00'
            },
            {
                "from": 150,
                "to": 180,
                "color": '#D2222D'
            }
        ],
        colorPlate: "#fff",
        borderShadowWidth: 0,
        borders: false,
        needleType: "line",
        colorNeedle: "#007F80",
        colorNeedleEnd: "#007F80",
        needleWidth: 2,
        needleCircleSize: 3,
        colorNeedleCircleOuter: "#007F80",
        needleCircleOuter: true,
        needleCircleInner: false,
        animationDuration: 1500,
        animationRule: "linear"
    });
    return gauge;
}

function createPM01Gauge(){
    var gauge = new RadialGauge({
        renderTo: 'gauge-PM01',
        width: 200,
        height: 200,
        units: "PM1.0 (µg/m^3)",
        minValue: 0,
        maxValue: 180,
        colorValueBoxRect: "#049faa",
        colorValueBoxRectEnd: "#049faa",
        colorValueBoxBackground: "#f1fbfc",
        valueInt: 2,
        majorTicks: [
            "0",
            "20",
            "40",
            "60",
            "80",
            "100",
            "120",
            "140",
            "160",
            "180"
    
        ],
        minorTicks: 10,
        strokeTicks: true,
        highlights: [
            {
                "from": 0,
                "to": 50,
                "color": '#04AA6D'
            },
            {
                "from": 50,
                "to": 150,
                "color": '#FFBF00'
            },
            {
                "from": 150,
                "to": 180,
                "color": '#D2222D'
            }
        ],
        colorPlate: "#fff",
        borderShadowWidth: 0,
        borders: false,
        needleType: "line",
        colorNeedle: "#007F80",
        colorNeedleEnd: "#007F80",
        needleWidth: 2,
        needleCircleSize: 3,
        colorNeedleCircleOuter: "#007F80",
        needleCircleOuter: true,
        needleCircleInner: false,
        animationDuration: 1500,
        animationRule: "linear"
    });
    return gauge;
}