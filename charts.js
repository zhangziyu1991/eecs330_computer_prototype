google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
	var data = google.visualization.arrayToDataTable([
		['Location', 'Number of Visits'],
		['at home',  							12],
		['527 Caffe',							5],
		['Subway @ Norris University Center', 	4],
		["Giordano's", 							3],
		["LYFE Kitchen", 						8]]);

	var options = {
		title: 'Dining Locations - Total: 32 Visits',
		pieHole: 0.4,
		fontSize: 11
	};

	var chart = new google.visualization.PieChart(document.getElementById('donut_chart'));
	chart.draw(data, options);
}

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {
	var data = google.visualization.arrayToDataTable([
		['Expenditure', 'Dollars'],
		['at home',  							178.88],
		['527 Caffe',							68.12],
		['Subway @ Norris University Center', 	120.48],
		["Giordano's", 							56.43],
		["LYFE Kitchen", 						116.72]]);

	var options = {
		title: 'Expenditures - Total: 540.63 U.S. Dollars',
		pieHole: 0.4,
		fontSize: 11
	};

	var chart = new google.visualization.PieChart(document.getElementById('donut_chart_2'));
	chart.draw(data, options);
}

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart3);

      function drawChart3() {
        var data = google.visualization.arrayToDataTable([
          ['Date', 'Expenditures'],
          ['2/10/2017',  24.87],
          ['2/11/2017',  29.32],
          ['2/12/2017',  31.15],
          ['2/13/2017',  26.47]]);

        var options = {
          title: 'Expenditure by Day (in U.S. Dollars)',
          curveType: 'function',
          legend: {position: 'none'},
          fontSize: 11,
        };

        var chart = new google.visualization.LineChart(document.getElementById('map_chart'));

        chart.draw(data, options);
      }