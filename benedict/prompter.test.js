import './string-extensions.js';

describe('splinter', () => {
	it('finds words', () => {
		var [words, _] = "foo bar baz".splinter();
		expect(words).toEqual(['foo', 'bar', 'baz']);
	});
	it('finds spaces', () => {
		var input = `newline\nspace twospaces  hyphen-tab	exclamation!question?`;
		var [tokens, spaces] = input.splinter();
		expect(tokens).toEqual(['newline', 'space', 'twospaces', 'hyphen', 'tab', 'exclamation', 'question']);
		expect(spaces).toEqual(['\n', ' ', '  ', '-', '\t', '!', '?']);
	});
})