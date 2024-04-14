const SCROLLBAR_WIDTH = 20;

export class Renderer {
	constructor(container) {
		this.wrapper = container.getElementById('prompter');
		this.textarea = container.getElementById("textarea");
		this.playback = container.getElementById("playback");
		this.hr = container.getElementById("marker");
		this.statusLabel = container.getElementById("status-label");
		this.startButton = container.getElementById("start-button");
	}

	update(prompter) {
		if (prompter.started && this.playback.style.display != "block") {
			this.textarea.style.display = "none";
			this.playback.style.display = "block";
		} else if (this.textarea.style.display != "block" && !prompter.started) {
			this.textarea.style.display = "block";
			this.playback.style.display = "none";
		}
		this.textarea.style.fontSize = prompter.fontSize + "px";
		this.playback.style.fontSize = prompter.fontSize + "px";
		this.statusLabel.innerText = prompter.status;
		this.textarea.style.paddingRight = prompter.padding + "px";
		this.textarea.style.paddingLeft = (prompter.padding + SCROLLBAR_WIDTH) + "px";
		this.playback.style.paddingLeft = prompter.padding + "px";
		this.playback.style.paddingRight = prompter.padding + "px";
		this.hr.style.left = prompter.padding + "px";
		this.hr.style.right = prompter.padding + "px";

		if (prompter.vflip && !this.wrapper.classList.contains("vflip")) {
			this.wrapper.classList.add("vflip");
		} else if (!prompter.vflip && this.wrapper.classList.contains("vflip")) {
			this.wrapper.classList.remove("vflip");
		}

		if (prompter.hflip && !this.wrapper.classList.contains("hflip")) {
			this.wrapper.classList.add("hflip");
		} else if (!prompter.hflip && this.wrapper.classList.contains("hflip")) {
			this.wrapper.classList.remove("hflip");
		}
		this.updateMatchHighlight(prompter);
		this.updateScrollOffset(prompter);
	}

	updateMatchHighlight(prompter) {
		// console.log(prompter.matchIndex, prompter.guessCount);
		let text = textarea.value;
		let html = `<span class="match">${text.substring(0, prompter.matchIndex)}</span>`
			+ `<span class="guess">${text.substring(prompter.matchIndex, prompter.matchIndex + prompter.guessCount)}</span>`
			+ `${text.substring(prompter.matchIndex + prompter.guessCount)}\n\n\n\n\n\n\n\n\n\n\n`;
		playback.innerHTML = html.replace(/\n/g, '<br />');
	}

	updateScrollOffset(prompter) {
		// var paddingTop = (380 - (1.3 * prompter.fontSize));
		// this.playback.style.paddingTop = paddingTop + "px";
		// this.textarea.style.paddingTop = paddingTop + "px";
		// console.log(paddingTop);
	}
}
