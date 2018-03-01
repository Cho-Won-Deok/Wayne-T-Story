(function(window, jQuery, undefined) {
	var wayneTstory =  {
		init : function () {
			if (jQuery == undefined) {
				alert('jQuery가 선언되지 않았습니다. jQuery를 해당 파일보다 먼저 선언하십시오.');
				return;
			} else {
				alert('jquery ok');
			}
		}
	}

	window.wayneTstory = wayneTstory;
})(window, jQuery);
