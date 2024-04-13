import { Prompter } from './prompter.js';
import { Renderer } from './renderer.js';

export class Benedict {
	constructor(text, dom, speech) {
		this.model = new Prompter(text);
		this.speech = speech;
		this.renderer = new Renderer(dom);
		dom.querySelector("#bigger-text-button").addEventListener("click", this.increaseFontSize.bind(this));
		dom.querySelector("#smaller-text-button").addEventListener("click", this.decreaseFontSize.bind(this));
		dom.querySelector("#start-button").addEventListener("click", this.start.bind(this));
		dom.querySelector("#wider-button").addEventListener("click", () => this.invoke(() => this.model.adjustPadding(-1)));
		dom.querySelector("#narrower-button").addEventListener("click", () => this.invoke(() => this.model.adjustPadding(+1)));
		dom.querySelector("#reset-button").addEventListener("click", () => reset());
		dom.querySelector("#h-flip-button").addEventListener("click", () => this.toggle("hflip"));
		dom.querySelector("#v-flip-button").addEventListener("click", () => this.toggle("vflip"));

		speech.onresult = this.model.recognized.bind(this.model);
		speech.onnomatch = console.log;
		speech.onerror = this.handleSpeechError;
		const FRAMES_PER_SECOND = 1;
		window.setInterval(() => this.renderer.update(this.model), 1000 / FRAMES_PER_SECOND);
	}

	handleSpeechError = error => {
		console.log(error);
		recognition.abort();
		window.setTimeout(() => recognition.start(), 500);
	};

	toggle = axis => this.invoke(() => this.model.toggle(axis));

	invoke = (fn) => { fn(); this.renderer.update(this.model); };
	increaseFontSize = () => this.invoke(() => this.model.adjustFontSize(+1));
	decreaseFontSize = () => this.invoke(() => this.model.adjustFontSize(-1));
	reset = () => this.invoke(() => {

	});
	start = () => this.invoke(() => {
		this.speech.start();
		this.model.start();
	});
}
