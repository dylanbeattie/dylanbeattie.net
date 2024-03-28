var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const textarea = document.querySelector("textarea");
const hr = document.querySelector("hr");
if (!SpeechRecognition) {
	textarea.style.fontSize = "32px";
	textarea.value = "Sorry, Benedict requires the SpeechRecognition API, which your browser doesn't support. 😢"
} else {
	var recognition = new SpeechRecognition();
	recognition.continuous = true;
	recognition.lang = 'en-US';
	recognition.interimResults = true;
	recognition.maxAlternatives = 1;
	const playback = document.querySelector("div#playback");

	document.querySelector("#bigger-text-button").addEventListener("click", () => updateTextSize(1));
	document.querySelector("#smaller-text-button").addEventListener("click", () => updateTextSize(-1));
	document.querySelector("#reset-button").addEventListener("click", () => reset());
	document.querySelector("#start-button").addEventListener("click", () => start());
	document.querySelector("#h-flip-button").addEventListener("click", () => toggle("hflip"));
	document.querySelector("#v-flip-button").addEventListener("click", () => toggle("vflip"));
	document.querySelector("#wider-button").addEventListener("click", () => pad(-1));
	document.querySelector("#narrower-button").addEventListener("click", () => pad(+1));

	const SCROLLBAR_WIDTH = 16;

	function pad(direction = 0) {
		console.log(direction);
		var padding =
			parseInt(window.getComputedStyle(playback).paddingLeft)
			||
			parseInt(window.getComputedStyle(textarea).paddingLeft);

		var elementWidth = (playback.getBoundingClientRect().width
			||
			textarea.getBoundingClientRect().width);
		var upperLimit = (elementWidth / 2) - 200;
		console.log(playback.getBoundingClientRect().width);
		console.log(padding, upperLimit);
		var lowerLimit = 0;
		padding += (direction * 100);
		padding = Math.min(upperLimit, Math.max(lowerLimit, padding));
		console.log(padding);
		textarea.style.paddingLeft = padding + SCROLLBAR_WIDTH + "px";
		textarea.style.paddingRight = padding + "px";
		playback.style.paddingLeft = padding + "px";
		playback.style.paddingRight = padding + "px";
		hr.style.left = padding + "px";
		hr.style.right = padding + "px";
		allowReverseScroll = true;
	}

	function toggle(className) {

		if (playback.classList.contains(className)) {
			playback.classList.remove(className);
		} else {
			playback.classList.add(className);
		}
		updateTextSize();
	}

	var scrollAdjustmentFactor = 80;

	var fontSizes = ["32px", "48px", "64px", "80px", "96px", "128px", "144px", "192px"];

	function updateTextSize(offset = 0) {
		var fontSize = window.getComputedStyle(playback).fontSize;
		var index = fontSizes.indexOf(fontSize);
		if (index < 0) index = 3;
		index += offset;
		if (index < 0) index = 0;
		if (index >= fontSizes.length) index = fontSizes.length - 1;
		var size = fontSizes[index];
		playback.style.fontSize = size;
		textarea.style.fontSize = size;
		scrollAdjustmentFactor = parseInt(size) * 1.125;
		var paddingTop = (380 - (1.3 * parseInt(size)));
		if (playback.classList.contains("vflip")) paddingTop += 260;
		playback.style.paddingTop = paddingTop + "px";
		textarea.style.paddingTop = paddingTop + "px";
		allowReverseScroll = true;
	}

	let startSearchAtIndex, WINDOW_SIZE, currentHighlight, lookahead, scrollSpeed;

	var started = false;
	function start() {
		if (started) {
			document.querySelector("label#status-label").innerText = "Ready.";
			recognition.stop();
			started = false;
			edit();
		} else {
			document.querySelector("label#status-label").innerText = "Listening...";
			recognition.start();
			started = true;
			play();
		}
	}

	function reset() {
		recognition.stop();
		startSearchAtIndex = -1;
		WINDOW_SIZE = 20;
		currentHighlight = 0;
		lookahead = 20;
		scrollSpeed = 2;
		textarea.selectionStart = 0;
		textarea.selectionEnd = 0;
		updatePlaybackContents(currentHighlight);
		edit();
	}

	function play() {
		updatePlaybackContents(currentHighlight);
		playback.style.display = "block";
		textarea.style.display = "none";
	}

	textarea.addEventListener("blur", play);

	playback.addEventListener("click", edit);

	function edit(event) {
		textarea.style.display = "block";
		playback.style.display = "none";
		textarea.focus();
	}

	recognition.onresult = function (event) {
		const result = Array.from(event.results).map(r => r[0].transcript).join(' ');
		let needle = result.split(/\s+/).join(' ').toLowerCase().slice(-WINDOW_SIZE);
		document.querySelector("label#result-label").innerText = needle;
		let contents = playback.innerText;
		let haystack = contents.toLowerCase().substring(0, startSearchAtIndex + needle.length + lookahead);
		let startOfMatch = haystack.indexOf(needle, startSearchAtIndex);
		let highlight = startOfMatch + needle.length;
		if (highlight > currentHighlight) {
			lookahead = 20;
			startSearchAtIndex = startOfMatch;
			currentHighlight = highlight;
			updatePlaybackContents(highlight);
		} else if (startOfMatch < 0) {
			lookahead += 4;
			updatePlaybackContents(currentHighlight + (lookahead / 2) - 5);
		}
	}

	function updatePlaybackContents(position) {
		let text = textarea.value;
		let html = `<span>${text.substring(0, position)}</span>${text.substring(position)}\n\n\n\n\n\n\n\n\n\n\n`;
		html = html.replace(/\n/g, '<br />');
		playback.innerHTML = html;
	}

	let scrollingInterval;

	var allowReverseScroll = false;
	const scroll = () => {
		let span = playback.querySelector("span");
		if (!span) return (console.log("No span - returning..."));
		let rect = span.getBoundingClientRect();
		let distance = (rect.height - playback.scrollTop) - scrollAdjustmentFactor;
		if (Math.abs(distance) < 1) return (allowReverseScroll = false);
		scrollSpeed = Math.sign(distance) * Math.floor(Math.log2(Math.abs(distance * 5))) || 0;
		if (scrollSpeed > 0 || allowReverseScroll) playback.scrollTop += scrollSpeed;
	}

	recognition.onspeechstart = () => {
		scrollingInterval = window.setInterval(scroll, 1000 / 60);
	};

	recognition.onnomatch = console.log;
	recognition.onerror = console.log;
	reset();
	updateTextSize();
	pad();
}