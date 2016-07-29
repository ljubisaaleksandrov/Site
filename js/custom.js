$(document).ready(function (){
	$('#brickhaus-menu').lazeemenu('collapseAll');
	
	$('.media-images-item-image').bind('mouseover', function() {
		$(this).addClass('show_info');
	});
	
	$('.media-images-item-image').bind('mouseout', function() {
		$(this).removeClass('show_info');
	});
	
	adjustImagesDimenstions();
	adjustDimensions();
	alignColoredTitle();
});

$(window).resize(function(){
	adjustImagesDimenstions();
	adjustDimensions();
	alignColoredTitle();
});

function adjustDimensions(){
	var length = parseInt($("#verticalLineUp").css('height')) + 20;
	$("#verticalLineUp").css({'height': length + 'px'});
	$("#verticalLineDown > div").css({'height': length + 'px', 'bottom': length - 84 + 'px'});

	length = $(".footer-content-info").css('height');
	$("#footerVerticalLine").css({'height':length});

	var width = $(".front-page-featured-item-image").css('width');
	$(".front-page-featured-item-image-text").css({'width': width });

	length = parseInt($(".quotes-text").css('height'));
	$(".quote-right > img").css({'top': length + 'px'});
	
	length = parseInt($('.customization-content').css('height'));
	$("#customVerticalLine").css({'height': length + 150 + 'px'});
	
	length = $('.about-title-small-content').css('height');
	$("#aboutVerticalLine").css({'height': length});

	length = parseInt($('.browstone-title-section').css('width'));
	$(".browstone-title-hr").css({'width': length - 60 + 'px'});

	length = $('.browstone-content-left').css('height');
	$("#browstoneVerticalLine").css({'height': length});

	length = $('.charitable-title-section').css('height');
	$("#charitableVerticalLine").css({'height': length});

	length = $('.communities-title-text-container').css('height');
	$("#communitiesVerticalLine").css({'height': length});

	if($(window).width() < 992){
		$.each($(".communities-filters-section"), function(index, element){
			$(element).find('a').css({'margin': '10px 10px'});
			$(element).find('h3').css({'margin': '5px 10px'});
		});
	}
	else{
		$.each($(".communities-filters-section"), function(index, element){
			$(element).find('a').css({'margin': '10px 20px'});
			$(element).find('h3').css({'margin': '5px 20px'});
		});
	}
	
	if($('.live-smarter-content-right').length > 0){
		var image = $('.live-smarter-content-right').find('img');
		var imageHeight = parseInt($(image).height());
		var maskHeight = imageHeight / 11;
		$('.live-smarter-content-right-mask-first').css({'height': maskHeight + 'px', 'top': maskHeight * 2 + 'px'});
		$('.live-smarter-content-right-mask-second').css({'height': maskHeight + 'px', 'top': maskHeight * 5 + 'px'});
		$('.live-smarter-content-right-mask-third').css({'height': maskHeight + 'px', 'top': maskHeight * 8 + 'px'});
	}
};

function adjustImagesDimenstions(){
	if($('.front-page-featured-item-image').length != 0){
		$.each($('.front-page-featured-item-image').find('img'), function(index, element){
			if(parseInt($(element).css('height')) < parseInt($(element).css('width'))){
				$(element).css({'height':'100%', 'width': 'auto'});
			}
		});
	}
	
	if($('.two-image-banner-section').length != 0){
		$.each($('.two-image-banner-section').find('img'), function(index, element){
			if(parseInt($(element).css('height')) > parseInt($(element).css('width'))){
				$(element).css({'width':'100%', 'height': 'auto'});
			}
		});
	}
	
	if($('.three-image-banner-section').length != 0){
		$.each($('.three-image-banner-section').find('img'), function(index, element){
			$(element).parent().css({'height': $(element).parent().css('width')});
			if(parseInt($(element).css('height')) < parseInt($(element).css('width'))){
				$(element).css({'height':'100%', 'width': 'auto'});
			}
		});
	}
	
	$.each($('.team-members-item-image'), function(index, element){
		$(element).css('height', $(element).css('width'));
		var image = $(element).find('img');

		if(parseInt($(image).css('height')) < parseInt($(image).css('width'))){
			var difference = parseInt($(image).css('width')) - parseInt($(image).css('height'));
			$(image).css({'height':'100%', 'width': 'auto', 'margin-left': -difference/2 });
		}
	});
	
	$.each($('.communities-results-item-image'), function(index, element){
		$(element).css('height', $(element).css('width'));
		var image = $(element).find('img');

		if(parseInt($(image).css('height')) < parseInt($(image).css('width'))){
			var difference = parseInt($(image).css('width')) - parseInt($(image).css('height'));
			$(image).css({'height':'100%', 'width': 'auto', 'margin-left': -difference/2 });
		}
	});
	
	$.each($('.media-images-item-image'), function(index, element){
		$(element).css('height', $(element).css('width'));
		var image = $(element).find('img');
		

		if(parseInt($(image).css('height')) < parseInt($(image).css('width'))){
			var difference = parseInt($(image).css('width')) - parseInt($(image).css('height'));
			$(image).css({'height':'100%', 'width': 'auto', 'margin-left': -difference/2 });
		}
	});
	
	$.each($('.communities-upcoming-item-image'), function(index, element){
		$(element).css('height', $(element).css('width'));
		var image = $(element).find('img');

		if(parseInt($(image).css('height')) < parseInt($(image).css('width'))){
			var difference = parseInt($(image).css('width')) - parseInt($(image).css('height'));
			$(image).css({'height':'100%', 'width': 'auto', 'margin-left': -difference/2 });
		}
	});
	
	$.each($('.communities-banner-item-image'), function(index, element){
		$(element).css('height', $(element).css('width'));
		var image = $(element).find('img');

		if(parseInt($(image).css('height')) < parseInt($(image).css('width'))){
			var difference = parseInt($(image).css('width')) - parseInt($(image).css('height'));
			$(image).css({'height':'100%', 'width': 'auto', 'margin-left': -difference/2 });
		}
	});
	
	$.each($('.e-river-content-left > img'), function(index, element){
		var parentWidth = parseInt($('.e-river-content-left').css('width'));
		$(element).css({'height': parentWidth + 'px'});

		var width = parseInt($(element).css('width'));
		var difference = width - parentWidth;
		$(element).css({'margin-left': -difference/2 + 'px' });
	});

	$.each($('.browstone-content-right > img'), function(index, element){
		var parentWidth = parseInt($('.browstone-content-right').css('width'));
		$(element).css({'height': parentWidth + 'px'});

		var width = parseInt($(element).css('width'));
		var difference = width - parentWidth;
		$(element).css({'margin-left': -difference/2 + 'px' });
	});
}

function alignColoredTitle(){
	if($('.customization-banner-section').length > 0){
		var h2 = $('.customization-banner-section').children('h2');
		if($(h2).height() < 50){
			var span = $('.customization-banner-section').find('span');
			var width = $(document).width();
			var offset = $(span).offset().left;
			var left = offset * 100 / width;
			var right = 100 - left;
			var color = $(span).css('background-color');
			$(h2).css({'background': 'linear-gradient(90deg, white ' + left + '%,' + color + ' ' + right + '%)'});
		}
		else{
			$(h2).css({'background': 'none'});
		}
	};
}




var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

function vidFade() {
	vid.classList.add("stopfade");
}

// vid.addEventListener('ended', function()
// {
	// // only functional if "loop" is removed 
	// vid.pause();
	// // to capture IE10
	// vidFade();
// }); 


// pauseButton.addEventListener("click", function() {
	// vid.classList.toggle("stopfade");
	// if (vid.paused) {
		// vid.play();
		// pauseButton.innerHTML = "Pause";
	// } else {
		// vid.pause();
		// pauseButton.innerHTML = "Paused";
	// }
// })