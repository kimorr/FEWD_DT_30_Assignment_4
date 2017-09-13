$(document).ready(function(){

	//PREVENT PAGE FROM RELOADING WHEN READ/LEARN MORE ARE CLICKED

	$( ".readmore a, .readless a, .learnmore" ).click(function( event ) {
	  event.preventDefault();
	});

	//READ MORE SLIDE DOWN

	$(".readmore a").click(function(){
		readMore();
	})

	function readMore(){
		$("#show-this-on-click").slideDown("slow", function(){
			//Animation complete
		});
		$(".readmore a").hide();
		$(".readless").show();
		 
	}

	//READ LESS SLIDE UP

	$(".readless a").click(function(){
		readLess();
	})

	function readLess(){
		$("#show-this-on-click").slideUp("slow", function(){
			//Animation complete
			$(".readless").hide();
			$(".readmore a").show();
			//QUESTION: How do I get the ".readmore a" to show up mid-way through the slideup animation?
		});		
	}

	//LEARN MORE SLIDE DOWN	

	$(".learnmore").click(function(){
		learnMore();
	})

	function learnMore(){
		$("#learnmoretext").slideDown(400, function(){
			//Animation complete
		});
		$(".learnmore").hide();
	}

})