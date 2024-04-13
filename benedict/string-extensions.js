String.prototype.isWord = function() { return /^\w+$/.test(this); }

String.prototype.splinter = function() {
	let tokens = this.split(/\b/);
	if (!tokens[0].isWord()) tokens.unshift('');
	if (tokens.length % 2) tokens.push('');
	let words = [];
	let spaces = [];
	for(var i = 0; i < tokens.length; i += 2) {
		words.push(tokens[i]);
		spaces.push(tokens[i+1]);
	}
	return [words,spaces];
}
