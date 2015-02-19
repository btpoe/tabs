;
(function ($) {

	function Tabs(wrap) {

		var tabs = this;
		tabs.wrap = $(wrap);

		tabs.init = function () {

			prepare();

			if (tabs.wrap[0].contentTabs) {
				return tabs.wrap[0].contentTabs;
			}

			setMethods();
			bindEvents();

			tabs.wrap[0].contentTabs = tabs;
			return tabs.wrap[0].contentTabs
		};

		function prepare() {
			tabs.tabs = tabs.wrap.find('.Tab-link');
			tabs.containers = tabs.wrap.find('.Tab-container');

			tabs.mobileSelect = $('<select>').insertAfter(tabs.wrap.find('.Tab-list'));
			tabs.tabs.each(function() {
				var tab = $(this);
				var href = tab.attr('href');
				tab.data('href', href);
				var option = $('<option value="'+href+'">').data('href', href).html(tab.html());

				if (tab.hasClass('is-active')) {
					option.prop('selected', true)
				}
				option.appendTo(tabs.mobileSelect);
			});
			tabs.mobileSelect.customSelect();
		}

		function setMethods() {

			tabs.open = function(tab) {
				var container = tabs.containers.filter(tab.data('href'));

				tabs.tabs.add(tabs.containers).removeClass('is-active');

				if (tab.prop('tagName') !== 'a') {
					tab = tabs.tabs.filter('[href="'+tab.data('href')+'"]');
				}
				tab.add(container).addClass('is-active');
				tabs.mobileSelect.val(tab.data('href'))
					.trigger('change.select');

				container.trigger('tabActive');
			};

		}

		function bindEvents() {

			var events = {
				click: function (e) {
					e.preventDefault();
					tabs.open($(this));
				},
				mobileChange: function () {
					tabs.open($(this).find(':selected'));
				},
				scrollToAnchor: function() {
					tabs.open(tabs.tabs.filter('[href=#'+this.id+']'));
				}
			};

			tabs.wrap.on('click.tabs', '.Tab-link', events.click);
			tabs.mobileSelect.on('change.tabs', events.mobileChange);
			tabs.wrap.on('scrollToAnchor.tabs', '.Tab-container', events.scrollToAnchor);
		}
	}

	$.fn.tabs = function () {
		return this.each(function () {
			return new Tabs(this).init();
		});
	};

})(jQuery || Zepto);