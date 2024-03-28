var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResults = true;
recognition.maxAlternatives = 1;
const textarea = document.querySelector("textarea");
const playback = document.querySelector("div#playback");

document.querySelector("#bigger-text-button").addEventListener("click", () => changeTextSize(1));
document.querySelector("#smaller-text-button").addEventListener("click", () => changeTextSize(-1));
document.querySelector("#reset-button").addEventListener("click", () => reset());
document.querySelector("#start-button").addEventListener("click", () => start());
document.querySelector("#h-flip-button").addEventListener("click", () => toggle("hflip"));
document.querySelector("#v-flip-button").addEventListener("click", () => toggle("vflip"));

function toggle(className) {
	if (playback.classList.contains(className)) {
		playback.classList.remove(className);
	} else {
		playback.classList.add(className);
	}
}

var scrollAdjustmentFactor = 80;

var fontSizes = ["32px", "48px", "64px", "80px", "96px", "128px", "144px", "192px"];

function changeTextSize(offset = 0) {
	var fontSize = window.getComputedStyle(playback).fontSize;
	var index = fontSizes.indexOf(fontSize);
	if (index < 0) index = 3;
	index += offset;
	if (index < 0) index = 0;
	if (index >= fontSizes.length) index = fontSizes.length - 1;
	var size = fontSizes[index];
	playback.style.fontSize = size;
	textarea.style.fontSize = size;
	scrollAdjustmentFactor = parseInt(size) * 1.125; //  + (parseInt(size) / 8);
	var paddingTop = (380 - (1.3 * parseInt(size))) + "px";
	playback.style.paddingTop = paddingTop;
	textarea.style.paddingTop = paddingTop;
	allowReverseScroll = true;
}

changeTextSize(-2);

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
	textarea.focus();
	textarea.blur();
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
		lookahead += 3;
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