export class Prompter {

	#text = "Ready.";

	constructor(text) {
		this.#text = text;
	}

	#fontSizes = [32, 48, 64, 80, 96, 128, 144, 192];

	#fontSize = 48;
	#padding = 100;
	#started = false;
	#status = "Ready.";
	#hflip = false;
	#vflip = false;

	#startSearchAtIndex = -1; // When we recognise a needle, how far into the haystack do we start looking for it?
	#windowSize = 50; // how many characters do we consider when looking for a match?
	#windowExpansion = 20; // how many characters do we add to the window when we don't find a match?
	#matchIndex = 0; // how many characters have we successfully matched?
	#guessCount = 0; // how many characters are we currently guessing?
	#scrollSpeed = 0; // how many pixels do we scroll per frame?

	get fontSize() { return this.#fontSize; }
	get status() { return this.#status; }
	get padding() { return this.#padding; }
	get vflip() { return this.#vflip; }
	get hflip() { return this.#hflip; }

	get matchIndex() { return this.#matchIndex; }
	get guessCount() { return this.#guessCount; }

	get started() { return this.#started; }

	toggle(axis) {
		if (axis === "vflip") {
			this.#vflip = !this.#vflip;
		} else if (axis === "hflip") {
			this.#hflip = !this.#hflip;
		}
	}

	adjustPadding(direction) {
		this.#padding += (direction * 100);
		this.#padding = Math.min(800, Math.max(0, this.#padding));
	}

	adjustFontSize(offset) {
		let index = this.#fontSizes.indexOf(parseInt(this.#fontSize));
		if (index < 0) index = 3;
		index = Math.min(this.#fontSizes.length - 1, Math.max(index + offset, 0));
		this.#fontSize = this.#fontSizes[index];
	}

	start() {
		this.#started = !this.#started;
		this.#status = (this.#started ? "Listening" : "Ready.");
	}

	removePunctuation = (s) => (s || "").replace(/['\.,!?]+/g, '').replace(/[-]+/g, ' ');

	// return the latest #windowSize characters, lowercased,
	// from the speech recognition result
	getNeedleFromResult(event) {
		const result = Array.from(event.results).map(r => r[0].transcript).join(' ');
		var needle = result.split(/\s+/).join(' ').toLowerCase();
		console.warn(needle);
		if (needle.length > this.#windowSize) needle = needle.slice(-this.#windowSize);
		console.warn(needle);
		needle = this.removePunctuation(needle);
		console.warn(needle);
		return needle;
	}

	recognized = function (event) {
		let needle = this.getNeedleFromResult(event);
		this.#status = needle;
		let haystackSize = this.#startSearchAtIndex + needle.length + this.#windowExpansion;
		let words = this.#text.split(/\b/);

		let haystack = this.#text.toLowerCase().substring(0, haystackSize);
		let originalHaystack = haystack;
		haystack = haystack.replace(/[\r\n]+/g, ' ');
		haystack = this.removePunctuation(haystack);
		console.log("needle: " + needle);
		console.log("haystack: " + haystack);
		console.log("startSearchAtIndex: " + this.#startSearchAtIndex);
		let startOfMatch = haystack.indexOf(needle, this.#startSearchAtIndex);
		console.log("startOfMatch: " + startOfMatch);
		if (startOfMatch < 0) {
			this.#guessCount += 4;
		} else if (startOfMatch >= this.#startSearchAtIndex) {
			this.#startSearchAtIndex = startOfMatch;
			this.#guessCount = 0;
			this.#matchIndex = this.#startSearchAtIndex + needle.length;
		}
	}
}
