google.charts.load("current", {packages:["corechart", 'table', 'bar']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
	var data = google.visualization.arrayToDataTable([
		['Location', 							'Visits'],
		['at home',  							14],
		['527 Caffe',							5],
		['Subway @ Norris University Center', 	4],
		["Giordano's", 							3],
		["LYFE Kitchen", 						8]]);

	// var chartWidth = $('#ziyu').width();

	var options = {
		title: 'Dining Locations - Total: 34 Visits',
		fontSize: 12,
		chartArea: {width: '50%'},
		colors: ['green'],
		// hAxis: {
		// 	title: 'No. of Visits',
		// 	minValue: 0
		// },
		// vAxis: {
		// 	title: 'Location'
		// }
		// width: chartwidth,
		// height: '100%'
	};
	var chart = new google.visualization.BarChart(document.getElementById('donut_chart'));
	chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {
	var data = google.visualization.arrayToDataTable([
		['Expenditure', 						'$'],
		['at home',  							178.88],
		['527 Cafe',							68.12],
		['Subway @ Norris University Center', 	120.48],
		["Giordano's", 							56.43],
		["LYFE Kitchen", 						116.72]]);
	var options = {
		title: 'Expenditures - Total: 540.63 U.S. Dollars',
		fontSize: 12,
		chartArea: {width: '50%'},
		colors: ['purple'],
		// hAxis: {
		// 	title: 'No. of Visits',
		// 	minValue: 0
		// },
		// vAxis: {
		// 	title: 'Location'
		// }
		// width:  800,
		// height: 200
	};
	var chart = new google.visualization.BarChart(document.getElementById('donut_chart_2'));
	chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawChart3);
function drawChart3() {
	var data = google.visualization.arrayToDataTable([
		['Date', 'Expenditures'],
		['2/14/2017',  24.87],
		['2/15/2017',  29.32],
		['2/16/2017',  31.15],
		['2/17/2017',  26.47]]);

	var options = {
		title: 'Expenditures by Day (in U.S. Dollars)',
		// curveType: 'function',
		legend: {position: 'none'},
		fontSize: 12,
		// width: '100%',
		// height: '100%'
	};
	var chart = new google.visualization.LineChart(document.getElementById('line_chart'));
	chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawTable);
function drawTable() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Date');
	data.addColumn('string', 'Place');
	data.addColumn('number', 'Cost');
	data.addRows([
		['2/17/17 12:01',	'527 Cafe',								{v:9.89, 	f: '$9.89'}],
		['2/16/17 19:01',  	'Subway @ Norris University Center', 	{v:12.01,   f: '$12.01'}],
		['2/16/17 11:33',  	"Giordano's", 							{v:18.34,   f: '$18.34'}],
		['2/15/17 18:56', 	'LYFE Kitchen', 						{v:8.43,   	f: '$8.43'}],
		['2/15/17 11:47', 	'at home', 								{v:4.28,   	f: '$4.28'}]
		]);
	var options = {
		showRowNumber: false,
		width: '100%',
		height: '100%',
	}
	var table = new google.visualization.Table(document.getElementById('table_chart'));
	table.draw(data, options);
}

google.charts.setOnLoadCallback(drawTable2);
function drawTable2() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Date');
	data.addColumn('string', 'Program');
	data.addColumn('string', 'Duration');
	data.addRows([
		['2/17/17 14:01',	'Jogging',			'1h 35m'],
		['2/15/17 21:01',  	'Pilates', 			'0h 45m'],
		['2/14/17 09:33',  	"Boxing", 			'0h 52m'],
		['2/12/17 20:56', 	'Yoga', 			'1h 14m'],
		['2/11/17 08:47', 	'Studio Cycling', 	'0h 58m']
		]);
	var options = {
		showRowNumber: false,
		width: '100%',
		height: '100%'
	}
	var table = new google.visualization.Table(document.getElementById('table_chart_2'));
	table.draw(data, options);
}

google.charts.setOnLoadCallback(drawTable3);
function drawTable3() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Restaurant');
	data.addColumn('number', 'Visits');
	data.addColumn('string', 'Fav. Dish');
	data.addRows([
		['527 Cafe',		14,			'Beef Noodles, Egg Fried Rice'],
		['LYFE Kitchen',	12,			'Green Salad, Tuna Sandwich'],
		["Giordano's",		7,			'Sausage Pizza, Chipotle Chicken Wings']
		]);
	var options = {
		showRowNumber: false,
		width: '100%',
		height: '100%'
	}
	var table = new google.visualization.Table(document.getElementById('table_chart_3'));
	table.draw(data, options);
}