(function() {
	var scroll = {
		init: function() {
			this.cacheDOM();
			this.bindEvent();
		},
		cacheDOM: function() {
			this.$doc = $(document);
			this.$down = this.$doc.find('#BMD');
			this.$body = this.$doc.find('html, body');
			this.$top = this.$doc.find('#top');
		},
		bindEvent: function() {
			this.$down.on('click', this.animateDown.bind(this));
		},
		animateDown: function() {
			this.$body.animate({
				scrollTop: "800px"
			}, 800);
		}
	};
	scroll.init();
})()
