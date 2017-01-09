$(document).ready(function(){
	$('#tunes').css('opacity', 0);

	$("#tunes").waypoint(function() {
	    $('#tunes').addClass('fadeInLeft');
	  }
	}, { offset: '50%'});
});

$(document).ready(function(){
	$('#shows').css('opacity', 0);

	$("#shows").waypoint(function() {
	    $('#shows').addClass('fadeInLeft');
	  }
	}, { offset: '50%'});
});

$(document).ready(function(){
	$('#videos').css('opacity', 0);

	$("#videos").waypoint(function() {
	    $('#videos').addClass('fadeInLeft');
	  }
	}, { offset: '50%'});
});

$(document).ready(function(){
	$('#social-icons').css('opacity', 0);

	$("#social-icons").waypoint(function() {
	    $('#social-icons').addClass('fadeInLeft');
	  }
	}, { offset: '50%'});
});