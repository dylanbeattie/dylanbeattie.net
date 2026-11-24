String.prototype.replaceAt = function (index, char) {
  var a = this.split("");
  a[index] = char;
  return a.join("");
}

const WORDLIST = (await(await fetch('./words.txt')).text()).split('\n');
const PROPER_NOUNS = (await(await fetch('./proper-nouns.txt')).text()).split('\n');
document.getElementById("loading").style.display = "none";
const isUpper = c => c >= 'A' && c <= 'Z';
const ALL_WORDS = WORDLIST.concat(PROPER_NOUNS).sort((a, b) =>
  isUpper(a[0]) - isUpper(b[0]) ||
  (a < b ? -1 : a > b ? 1 : 0)
);

let count = NaN;

var regexInput = document.querySelector("input#regex");
var countInput = document.querySelector("input#count");
var ol = document.querySelector("ol");
regexInput.addEventListener("change", search);
countInput.addEventListener("change", search);
function search() {
  var pattern = regexInput.value;
  var progit = "";
  var alts = {};
  var adjust = 0;
  for (var i = 0; i < pattern.length; i++) {
    progit += pattern[i];
    if (pattern[i] >= 'A' && pattern[i] <= 'Z') {
      alts[i - adjust] = [pattern[i].toLowerCase(), pattern[i + 1].toLowerCase()];
      adjust++;
      i++;
    }
  }
  if (progit != pattern) {
    var rx = new RegExp(progit, "i");
    console.log("pattern: " + progit);
    var wimble = ALL_WORDS.filter(w => rx.test(w)).slice(0, 1000000);
    for (var alt of Object.keys(alts)) progit = progit.replaceAt(alt, alts[alt][1]);
    rx = new RegExp(progit, "i");
    var womble = ALL_WORDS.filter(w => rx.test(w)).slice(0, 1000000);
    var words = new Array();
    for (var word of wimble) {
      var walt = word;
      for (var alt of Object.keys(alts)) walt = walt.replace(alts[alt][0], alts[alt][1]);
      if (womble.includes(walt)) words.push(word + " / " + walt);
    }
    var items = '<li>' + words.join('</li><li>') + '</li>';
    ol.innerHTML = items;
  } else if (regexInput.value.length > 0) {
    var rx = new RegExp(regexInput.value, "i");
    var filteredWords = ALL_WORDS.filter(w => rx.test(w));
    if (count = parseInt(countInput.value)) {
      filteredWords = filteredWords.filter(w => w.length == count);
    }
    filteredWords = filteredWords.slice(0, 1000);
    var items = '<li>' + filteredWords.join('</li><li>') + '</li>';
    ol.innerHTML = items;
  }
}
search();
