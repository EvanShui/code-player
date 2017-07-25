var openWindows = 0;

function textAreaDimensions(){
	var width = ($(window).width()) / openWindows - 2;
	alert($(".header").css("width"))
	alert(openWindows)
	var height = 2890;
	alert(width);
	$(".panel").width(width);
	$(".panel").height(height);
}

function updateOutput(){
	$("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#css-text").val() + "</style></head><body>" + $("#html-text").val() + "</body></html>");
document.getElementById("output-text").contentWindow.eval($("#js-text").val());
}

updateOutput();
$("textarea").on("change keyup paste", function() {
	alert("hello");
	updateOutput();
})

$("button").click(function(){
	var type = "#" + $(this).attr("id") + "-text";
	if($(this).hasClass("active")){
		$(this).toggleClass("active");
		openWindows -= 1;
		textAreaDimensions();
		$(type).toggleClass("hidden");
		alert(type);
	} else {
		$(this).toggleClass("active");
		openWindows += 1;
		textAreaDimensions();
		$(type).toggleClass("hidden");
		alert(type);
	}
	$(".text-area").css("left", openWindows);
	alert(openWindows);
});

