$(function(){
	$("#izl_rmenu").each(function(){
		$(this).find(".izl_rmenu_hover").mouseenter(function(){
			$(this).find(".pic").stop().fadeIn("fast");
		});
		$(this).find(".izl_rmenu_hover").mouseleave(function(){
			$(this).find(".pic").stop().fadeOut("fast");
		});
  
		$(this).find(".btn-top").click(function(){
			$("html, body").animate({
				"scroll-top":0
			},"fast");
		});
	});
	var lastRmenuStatus=false;
	$(window).scroll(function(){//bug
		var _top=$(window).scrollTop();
		if(_top>200){
			$("#izl_rmenu").data("expanded",true);
		}else{
			$("#izl_rmenu").data("expanded",false);
		}
		if($("#izl_rmenu").data("expanded")!=lastRmenuStatus){
			lastRmenuStatus=$("#izl_rmenu").data("expanded");
			if(lastRmenuStatus){
				$("#izl_rmenu .btn-top").stop().slideDown();
			}else{
				$("#izl_rmenu .btn-top").stop().slideUp();
			}
		}
	});
});