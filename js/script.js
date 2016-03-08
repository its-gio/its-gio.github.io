$(document).ready(function(){
	$('#BMD').click(function(){
		$('html, body').animate({
			scrollTop: "800px"
		}, 800);
	});
	$("#top").click(function(e){
	$('html, body').animate({
		scrollTop: "0px"
	}, 700);
	e.preventDefault();
	});
});
$(window).scroll(function(){
	var wScroll = $(this).scrollTop(),
	wHeight = $(window).height();
	$('.sparks').css({
		'transform' : 'translate(0px, ' + wScroll/10 +'%)'
	})
	$('.Hi').css({
		'transform' : 'translate(0px, ' + wScroll/2 +'%)'
	})
	if (wScroll > $('.workXP').offset().top-(wHeight/1.8)){
		$('.workXP img').each(function(i){
			setTimeout(function(){
				$('.workXP img').eq(i).addClass('showing');
			}, 150 * (i+1));
		})
	};
	if(wScroll > $('.info').offset().top-(wHeight)){
		$("#top").fadeIn();
	}else{
		$('#top').fadeOut();
	}
})