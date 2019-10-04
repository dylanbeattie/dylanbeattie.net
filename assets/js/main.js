/*
	Arcana by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:	  [ '1281px',  '1680px' ],
			normal:	[ '981px',   '1280px' ],
			narrow:	[ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:	[ '481px',   '736px'  ],
			mobilep:   [ null,	  '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			offsetY: -15,
			hoverDelay: 0,
			alignment: 'center'
		});

	// Nav.

		// Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);

$(function() {
	const copyToClipboard = (function initClipboardText() {
		const textarea = document.createElement('textarea');
	
		// Move it off screen.
		textarea.style.cssText = 'position: absolute; left: -99999em';
	
		// Set to readonly to prevent mobile devices opening a keyboard when
		// text is .select()'ed.
		textarea.setAttribute('readonly', true);
	
		document.body.appendChild(textarea);
	
		return function setClipboardText(text) {
			textarea.value = text;
	
			// Check if there is any content selected previously.
			const selected = document.getSelection().rangeCount > 0 ?
				document.getSelection().getRangeAt(0) : false;
	
			// iOS Safari blocks programmtic execCommand copying normally, without this hack.
			// https://stackoverflow.com/questions/34045777/copy-to-clipboard-using-javascript-in-ios
			if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
				const editable = textarea.contentEditable;
				textarea.contentEditable = true;
				const range = document.createRange();
				range.selectNodeContents(textarea);
				const sel = window.getSelection();
				sel.removeAllRanges();
				sel.addRange(range);
				textarea.setSelectionRange(0, 999999);
				textarea.contentEditable = editable;
			} else {
				textarea.select();
			}
	
			try {
				const result = document.execCommand('copy');
	
				// Restore previous selection.
				if (selected) {
					document.getSelection().removeAllRanges();
					document.getSelection().addRange(selected);
				}
	
				return result;
			} catch (err) {
				return false;
			}
		};
	})();

	$(".clipboard-links a").on("click", function() {
		$this = $(this);
		srcElementId = $this.data('src-element-id');
		srcElement = $("#" + srcElementId);
		content = srcElement.val();
		copyToClipboard(content);
		alert('Copied to clipboard!');
		return(false);
	});
});

$()