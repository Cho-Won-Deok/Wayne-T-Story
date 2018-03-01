(function(window, $, undefined) {
	var wayneTstory =  {
		answerObjArr : null,
		prefix : "",
		init : function (prefix) {
			if ($ == undefined) {
				alert('jQuery가 선언되지 않았습니다. jQuery를 해당 파일보다 먼저 선언하십시오.');
				return;
			} else {
				if (prefix == undefined || prefix == "") {
					alert('답변 textarea의 prefix명을 init 함수 실행시 넣어야 합니다.');
					return;
				}
				this.prefix = prefix;
			}
		},
		getReply:function() {
			this.answerObjArr = $("textarea[name^='" + this.prefix + "']");
			var txt = "";
			for (var i = 0; i < this.answerObjArr.length; i++) {
				txt += this.answerObjArr.eq(i).val() + "\n";
			}
			//console.log(txt);
			return txt;
		},
		setReply:function() {
			//console.log(this.answerObjArr);
			//각 답변을 모아서 댓글 창에 넣어줌
			$("textarea[name='comment']").text(this.getReply());

		},
		submit:function() {
			this.setReply();
			//로그인상태가 아니어서 이름/비번을 적어야 하면 자동으로 넣어주자.
			var nameObj = $("#name");
			if (nameObj.is(":visible")) {
				$("#name").val("guest");
				$("#password").val("1234");
			}
			//confirm버튼을 눌러줌
			$(".btn_submit_b").trigger("click");
		}
	}

	window.wayneTstory = wayneTstory;
})(window, jQuery);
