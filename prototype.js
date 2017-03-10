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
    	fullStar: true
    });

  	$("#rateYo2").rateYo({
    	rating: 3,
    	fullStar: true
  	});

  	$("#rateYo3").rateYo({
    	rating: 3,
    	fullStar: true
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
		disableTextInput: true
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
		'maxTime': '11:30pm',
		disableTextInput: true
	});

	$('#endtime').on('changeTime', function() {
		endtimesec = $(this).timepicker('getSecondsFromMidnight');
		calculate();
	});	

	$( "#Filters" ).selectmenu();
	
    	$("#Favouritebutton_Joyyee").click(function(){
    	if ($("#Favouritebutton_Joyyee").attr("class") == "fa fa-bookmark-o") {
        	$("#Favouritebutton_Joyyee").attr("class", "fa fa-bookmark");
        	$("#Bookmarked_Joyyee").show();
        	$("#Bookmarked_respage_Joyyee").show();
    	}
    	else {
    		$("#Favouritebutton_Joyyee").attr("class", "fa fa-bookmark-o");
    		$("#Bookmarked_Joyyee").hide();
    		$("#Bookmarked_respage_Joyyee").hide();
    	}
    });


    	$("#Favouritebutton_Nafnaf").click(function(){
    	if ($("#Favouritebutton_Nafnaf").attr("class") == "fa fa-bookmark-o") {
        	$("#Favouritebutton_Nafnaf").attr("class", "fa fa-bookmark");
        	$("#Bookmarked_Nafnaf").show();
        	$("#Bookmarked_respage_Nafnaf").show();
    	}
    	else {
    		$("#Favouritebutton_Nafnaf").attr("class", "fa fa-bookmark-o");
    		$("#Bookmarked_Nafnaf").hide();
    		$("#Bookmarked_respage_Nafnaf").hide();
    	}
    });


    	$("#Favouritebutton_LYFE").click(function(){
    	if ($("#Favouritebutton_LYFE").attr("class") == "fa fa-bookmark-o") {
        	$("#Favouritebutton_LYFE").attr("class", "fa fa-bookmark");
        	$("#Bookmarked_LYFE").show();
        	$("#Bookmarked_respage_LYFE").show();
    	}
    	else {
    		$("#Favouritebutton_LYFE").attr("class", "fa fa-bookmark-o");
    		$("#Bookmarked_LYFE").hide();
    		$("#Bookmarked_respage_LYFE").hide();
    	}
    });

    	$('#Filters').ready(function(){
            $("#respage_placeholder1").html(Joyyee).enhanceWithin();
            $("#respage_placeholder2").html(Nafnaf).enhanceWithin();
            $("#respage_placeholder3").html(LYFE).enhanceWithin();
        });
        
        $('#Filters').change(function() {
    	if ($("#Filters").val() == 1) //Ratings (Descending)
     	{
     		$("#respage_placeholder1").html(Joyyee).enhanceWithin();
            $("#respage_placeholder2").html(Nafnaf).enhanceWithin();
            $("#respage_placeholder3").html(LYFE).enhanceWithin();
     	}
        if ($("#Filters").val() == 2) //Price (Descending)
        {
            $("#respage_placeholder1").html(Joyyee).enhanceWithin();
            $("#respage_placeholder2").html(LYFE).enhanceWithin();
            $("#respage_placeholder3").html(Nafnaf).enhanceWithin();
        }
        if ($("#Filters").val() == 3) //Price (Ascending)
        {
            $("#respage_placeholder1").html(Nafnaf).enhanceWithin();
            $("#respage_placeholder2").html(LYFE).enhanceWithin();
            $("#respage_placeholder3").html(Joyyee).enhanceWithin();
        }
        if ($("#Filters").val() == 4) //Healthiness (Descending)
        {
            $("#respage_placeholder1").html(LYFE).enhanceWithin();
            $("#respage_placeholder2").html(Nafnaf).enhanceWithin();
            $("#respage_placeholder3").html(Joyyee).enhanceWithin();
        }
        if ($("#Filters").val() == 5) //Healthiness (Ascending)
        {
            $("#respage_placeholder1").html(Joyyee).enhanceWithin();
            $("#respage_placeholder2").html(Nafnaf).enhanceWithin();
            $("#respage_placeholder3").html(LYFE).enhanceWithin();
        }
	});
	
});


var Joyyee = 	'<a href="#Joyyee">' +
				'<div>' + 
				'<p class="restaurantname">Joyyee Noodles</p>' +
				'<i class="fa fa-star" style="color:#f1c40f"></i>' +
				'<i class="fa fa-star" style="color:#f1c40f"></i>' +
				'<i class="fa fa-star" style="color:#f1c40f"></i>' +
				'<i class="fa fa-star" style="color:#f1c40f"></i> ' +
				'<i class="fa fa-at" style="visibility: hidden"></i> ' + 
				'<i class="fa fa-dollar" style="color:black"></i>' +
				'<i class="fa fa-dollar" style="color:black"></i>' +
				'<i class="fa fa-dollar" style="color:black"></i>' +
				'<i class="fa fa-at" style="visibility: hidden"></i>' +  
				'<i class="fa fa-heart" style="color:red"></i>' +
				'<i class="fa fa-heart" style="color:red"></i>' +
				'<p class="restaurantdetails">519 Davis Street (500m)</p>' +
				'<p class="restaurantdetails">Asian / Milk Tea</p>' +
				'<img src="prototype_images/Joyyee.jpg" class="Restaurant_Image">' +
				'<p id="Bookmarked_respage_Joyyee">This Restaurant is Bookmarked!</p>' +
				'</div>' +
				'</a>' +
                '<br>';


var Nafnaf =    '<a href="#Nafnaf">' +
                '<div>' +
                   ' <p class="restaurantname">Naf Naf Grill</p>' +
                    '<i class="fa fa-star" style="color:#f1c40f"></i>' +
                    '<i class="fa fa-star" style="color:#f1c40f"></i>' +
                    '<i class="fa fa-star" style="color:#f1c40f"></i>' +
                    '<i class="fa fa-star" style="color:#f1c40f"></i> ' +
                    '<i class="fa fa-at" style="visibility: hidden"></i> ' + 
                    '<i class="fa fa-dollar" style="color:black"></i>' +
                    '<i class="fa fa-dollar" style="color:black"></i>' +
                    '<i class="fa fa-dollar" style="visibility: hidden"></i>' +
                    '<i class="fa fa-at" style="visibility: hidden"></i>  ' +
                    '<i class="fa fa-heart" style="color:red"></i>' +
                    '<i class="fa fa-heart" style="color:red"></i>' +
                    '<i class="fa fa-heart" style="color:red"></i>' +
                    '<p class="restaurantdetails">1629 Orrington Avenue (100m)</p>' +
                    '<p class="restaurantdetails">Middle Eastern / Fast Food</p>' +
                    '<img src="prototype_images/Nafnaf.jpg" class="Restaurant_Image">' +
                    '<p id="Bookmarked_respage_Nafnaf">This Restaurant is Bookmarked!</p>' +
                '</div>' +
                '</a>' +
                '<br>';

var LYFE =      '<a href="#LYFE">' +
                '<div>' +
                 '   <p class="restaurantname">LYFE Kitchen</p>' +
                    '<i class="fa fa-star" style="color:#f1c40f"></i>' +
                    '<i class="fa fa-star" style="color:#f1c40f"></i>' +
                    '<i class="fa fa-star" style="color:#f1c40f"></i>' +
                    '<i class="fa fa-star" style="visibility: hidden"></i>' +
                    '<i class="fa fa-at" style="visibility: hidden"></i>  ' +
                    '<i class="fa fa-dollar" style="color:black"></i>' +
                    '<i class="fa fa-dollar" style="color:black"></i>' +
                    '<i class="fa fa-dollar" style="color:black"></i>' +
                    '<i class="fa fa-dollar" style="visibility: hidden"></i>' +
                    '<i class="fa fa-at" style="visibility: hidden"></i>  ' +
                    '<i class="fa fa-heart" style="color:red"></i>' +
                    '<i class="fa fa-heart" style="color:red"></i>' +
                    '<i class="fa fa-heart" style="color:red"></i>' +
                    '<i class="fa fa-heart" style="color:red"></i>' +
                    '<p class="restaurantdetails">1603 Orrington Avenue (150m)</p>' +
                    '<p class="restaurantdetails">Healthy Food / Organic</p>' +
                    '<img src="prototype_images/LYFE.jpg" class="Restaurant_Image">' +
                    '<p id="Bookmarked_respage_LYFE">This Restaurant is Bookmarked!</p>' +
                '</div>' +
                '</a>' +
                '<br>';


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
