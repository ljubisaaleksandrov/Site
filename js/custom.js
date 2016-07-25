$(document).ready(function (){
	$('#brickhaus-menu').lazeemenu('collapseAll');
	
	var length = parseInt($("#verticalLineUp").css('height')) + 20;
	$("#verticalLineUp").css({'height': length + 'px'});
	$("#verticalLineDown > div").css({'height': length + 'px', 'bottom': length - 84 + 'px'});

	length = $(".footer-content-info").css('height');
	$("#footerVerticalLine").css({'height':length});
	
	adjustDimensions();
	adjustImagesDimenstions();
});

$(window).resize(function(){
	adjustDimensions();
	adjustImagesDimenstions();
});

function adjustDimensions(){
	var width = $(".front-page-featured-item-image").css('width');
	$(".front-page-featured-item-image-text").css({'width': width });

	var length = parseInt($(".quotes-text").css('height'));
	$(".quote-right > img").css({'top': length + 'px'});
	
	length = parseInt($('.customization-content').css('height'));
	$("#customVerticalLine").css({'height': length + 150 + 'px'});
};

function adjustImagesDimenstions(){
	if($('.two-image-banner-section').length != 0){
		$.each($('.two-image-banner-section').find('img'), function(index, element){
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
	
	var span = $('.color-back-red');
	var rt = ($('.customization-banner-section').width() - ($(span).offset().left));
	$(span).css('width', rt);
	alert(rt);
}
