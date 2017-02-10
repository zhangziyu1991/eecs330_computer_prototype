/*Global Variables*/
var starttimesec = -1;
var endtimesec = -1;
var starttime = '12:00am';
var CurrentList = 1;
var CurrentTimeRaw = new Date();

function checkTime(i){  /*Helper function to correctly display current time*/
	if (i<10) {i="0"+i;}
	return i;
}
var CurrentTime = "Current Time: " + CurrentTimeRaw.getHours() + ":" + checkTime(CurrentTimeRaw.getMinutes());

function convertDuration(durationsec){ /*Helpfer function to calculate and display the duration from user inputs*/
	if (endtimesec == -1 || starttimesec == -1) {
		return 'Please Select Start Time and End Time';
	}
	else if (durationsec <= 0 ) {
		return 'Please Select Correct Start Time and End Time';
	}
	else {
		var h = Math.floor(durationsec / 3600);
   		var m = Math.floor(durationsec % 3600 / 60);
    	var hDisplay = h > 0 ? h + (h == 1 ? " Hour  " : " Hours  ") : "";
    	var mDisplay = m > 0 ? m + (m == 1 ? " Minute" : " Minutes") : "";
    	return hDisplay + mDisplay; 
	}
}

function convertCalories(durationsec){ /*Helpfer function to calculate and display the calories from user inputs, currently ignore the program name and solely depends on duration*/
	if (endtimesec == -1 || starttimesec == -1) {
		return 'Please Enter Workout Details';
	}
	else if (durationsec <= 0) {
		return 'Please Enter Correct Start Time and End Time';
	}
	else {
		var caloriesnumber = Math.floor(durationsec / 60) *7;
		var caloriesdisplay = caloriesnumber > 0 ? caloriesnumber + " K" :" ";
		return caloriesdisplay;
	}
}

function calculate(){   /*Helper function to execute after the user selects times*/
	var durationsec = endtimesec - starttimesec;
	var duration = convertDuration(durationsec);
	$('#duration').text(" "+ duration);
	var caloriesconsumed = convertCalories(durationsec);
	$('#caloriesconsumed').text(" "+ caloriesconsumed);
}

$(document).ready(function(){
	$("#CurrentTime1").text(CurrentTime);
	$("#CurrentTime2").text(CurrentTime);

  	$("#rateYo1").rateYo({
    	rating: 3,
    	halfStar: true,
    });

  	$("#rateYo2").rateYo({
    	rating: 3,
    	halfStar: true,
  	});

  	$("#rateYo3").rateYo({
    	rating: 3,
    	halfStar: true,
  	});

    $("#AddItem").click(function(){
        if (CurrentList == 1) {
        	$("#ItemList1").fadeIn();
        	CurrentList ++;
        	$("#DeleteItem").show();
        }
        else if (CurrentList == 2) {
        	$("#ItemList2").fadeIn();
        	CurrentList ++;
        	$("#AddItem").hide();
        }
    });

    $("#DeleteItem").click(function(){
        if (CurrentList == 2) {
        	$("#ItemList1").fadeOut();
        	$("#DeleteItem").hide();
        	CurrentList --;
        }
        else if (CurrentList == 3) {
        	$("#ItemList2").fadeOut();
        	$("#AddItem").show();
        	CurrentList --;
        }
    });

	$('#starttime').timepicker({
	});

	$('#starttime').on('changeTime', function() {
		starttimesec = $(this).timepicker('getSecondsFromMidnight');
		starttime = $(this).val();
		$('#endtime').timepicker({
			'minTime': starttime,
			'maxTime': '11:30pm'
		});
		calculate();
	});

	$('#endtime').timepicker({
		'minTime': starttime,
		'maxTime': '11:30pm'
	});

	$('#endtime').on('changeTime', function() {
		endtimesec = $(this).timepicker('getSecondsFromMidnight');
		calculate();
	});	
});


/* initialzation needed for select popup page */
$( function() {
    $( "#select" ).enhanceWithin().popup();
});

/* reload the workout login page after submission */
$(document).ready(function(){
  $("#loginworkout_submit").click(function(){
 location.reload();
  });
});

/* reload the meal login page after submission */
$(document).ready(function(){
  $("#loginmeals_submit").click(function(){
 location.reload();
  });
});