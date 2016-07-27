$(document).ready(function (){
	$('#brickhaus-menu').lazeemenu('collapseAll');
	
	var length = parseInt($("#verticalLineUp").css('height')) + 20;
	$("#verticalLineUp").css({'height': length + 'px'});
	$("#verticalLineDown > div").css({'height': length + 'px', 'bottom': length - 84 + 'px'});

	length = $(".footer-content-info").css('height');
	$("#footerVerticalLine").css({'height':length});
	
	adjustDimensions();
	adjustImagesDimenstions();
	alignColoredTitle();
});

$(window).resize(function(){
	adjustDimensions();
	adjustImagesDimenstions();
	alignColoredTitle();
});

function adjustDimensions(){
	var width = $(".front-page-featured-item-image").css('width');
	$(".front-page-featured-item-image-text").css({'width': width });

	var length = parseInt($(".quotes-text").css('height'));
	$(".quote-right > img").css({'top': length + 'px'});
	
	length = parseInt($('.customization-content').css('height'));
	$("#customVerticalLine").css({'height': length + 150 + 'px'});
	
	length = $('.about-title-small-content').css('height');
	$("#aboutVerticalLine").css({'height': length});
};

function adjustImagesDimenstions(){
	if($('.two-image-banner-section').length != 0){
		$.each($('.two-image-banner-section').find('img'), function(index, element){
			if(parseInt($(element).css('height')) > parseInt($(element).css('width'))){
				$(element).css({'width':'100%', 'height': 'none'});
			}
		});
	}
	
	if($('.three-image-banner-section').length != 0){
		$.each($('.three-image-banner-section').find('img'), function(index, element){
			if(parseInt($(element).css('height')) > parseInt($(element).css('width'))){
				$(element).css({'width':'100%', 'height': 'none'});
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
	
	$.each($('.contact-social-links-image'), function(index, element){
		var width = parseInt($(element).css('width'));
		// $(element).css({'height': width - 1 + 'px'});
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
