(function ($) {
	$("article img").wrap(function () {
		return ("<a href=" + this.src + "></a>");
	});
})(jQuery);