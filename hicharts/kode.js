var aarstallXAkse = ["1991", "2000", "2018", "2019"];
var papiravis = {name: "Papiravis", data: [84, 77, 30, 27]};
var fjernsyn = {name: "Fjernsyn", data: [81, 82, 60, 48]};
var radio = {name: "Radio", data: [71, 57, 50, 48]}


var massObjectData = []; 
var arrData = ["Papiravis","84","77","30","27","Fjernsyn","81","82","60","48","Radio","71","57","50","48","Lydmedier","43","50","51","55","Ukeblad","21","17","5","4","Bøker","24","20","24","25","Tidsskrift","18","14","6","7","Tegneserieblad","11","9","3","3","Serier/film/video","10","10","37","43","Internett","null","27","91","90"];
for(i=0; i<10; i++) {
    var curArr = []
    for(m=0; m<5; m++) {
        if(m === 0) {
            var curName = arrData[i * 5 + m];
        }
        if (m !== 0) {
            curArr.push(parseInt(arrData[i * 5 + m]))
        }
    }
    massObjectData.push({name: curName, data: curArr})
}

console.log(massObjectData);

function barHighCharts() { 
    var myChart = Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Karakterfordeling'
        },
        xAxis: {
            categories: aarstallXAkse
        },
        yAxis: {
            title: {
                text: 'Antall karakterar, ASVG'
            }
        },
        series: massObjectData
    });
}

function lineHighCharts() { 
    var myChart = Highcharts.chart('container', {
        chart: {
            type: 'line' // Eventuelt bar, ...
        },
        title: {
            text: 'Karakterfordeling'
        },
        xAxis: {
            categories: aarstallXAkse
        },
        yAxis: {
            title: {
                text: 'Antall karakterar, ASVG'
            }
        },
        series: massObjectData
    });
}

function streamHighCharts() { 
    var myChart = Highcharts.chart('container', {
        chart: {
            type: 'streamgraph' // Eventuelt bar, ...
        },
        title: {
            text: 'Karakterfordeling'
        },
        xAxis: {
            categories: aarstallXAkse
        },
        yAxis: {
            title: {
                text: 'Antall karakterar, ASVG'
            }
        },
        series: massObjectData
    });
}
lineHighCharts();