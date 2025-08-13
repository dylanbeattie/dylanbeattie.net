var sectionRules = {
  "width": ["auto", "600px", "50%"],
  "height": ["auto", "600px", "50%"],
  "flex-direction": ["row", "row-reverse", "column", "column-reverse"],
  "flex-wrap": ["nowrap", "wrap", "wrap-reverse"],
  "justify-content": ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly", "left", "right", "start", "end"],
  "align-items": ["flex-start", "flex-end", "center", "baseline", "stretch"],
  "align-content": ["flex-start", "flex-end", "center", "space-between", "space-around", "stretch"],
  "row-gap": ["0px", "4px", "8px", "16px", "32px"],
  "column-gap": ["0px", "4px", "8px", "16px", "32px"]
}

var elementRules = {
  "width": ["auto", "12.5%", "50%", "100px"],
  "height": ["auto", "12.5%", "50%", "100px"],
  // "display": ["block", "inline-block", "inline"]
}

const rules = {};

function makeHandler(selector, rule, value) {
  return _ => {
    rules[selector] ||= {};
    rules[selector][rule] = value;
    document.querySelectorAll(selector).forEach(el => el.style[rule] = value);
    outputCssRules(rules);
  }
}

function outputCssRules(rules) {
  var css = "";
  for (var selector in rules) {
    css += selector + " {\n";
    for (var rule in rules[selector]) {
      css += `  ${rule}: ${rules[selector][rule]};\n`;
    }
    css += "}\n\n";
  }
  document.getElementById('css-rules').value = css;
}

let form = document.querySelector("form");

function buildForm(rules, selector, group) {
  for (var rule in rules) {
    let first = true;
    let fieldset = html('fieldset');
    fieldset.appendChild(html('div', {}, rule + ':'));
    let div = html('div');
    for (var value of rules[rule].values()) {
      let id = `${group}-${rule}-${value}`;
      let input = html('input', { 'type': 'radio', 'name': `${group}-${rule}`, 'value': value, 'id': id });
      let label = html('label', { 'for': id }, value);
      label.prepend(input);
      div.appendChild(label);
      let listener = makeHandler(selector, rule, value);
      input.addEventListener("change", listener);
      if (first) {
        input.checked = "checked";
        listener({});
      }
      first = false;
    }
    fieldset.appendChild(div);
    form.appendChild(fieldset);
  }
}

form.appendChild(html('h4', {}, 'Container CSS'));
buildForm(sectionRules, 'section', 'section');
form.appendChild(html('h4', {}, 'Elements CSS'));
buildForm(elementRules, 'section > div', 'element');

const content = {
  helloWorld: "Hello World",
  loremIpsum: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
  ut aliquip ex ea commodo consequat.</p>`,
};

const images = ['adam-gritco-eZaO39RrjxU-unsplash.jpg',
  'amelia-cui-V9lFsmelUOo-unsplash.jpg',
  'antony-scillitoe-hUN2iVLotQo-unsplash.jpg',
  'austin-prock-Hz3Kjzgyv_Q-unsplash.jpg',
  'david-clode-3YEMFXYBgu8-unsplash.jpg',
  'david-clode-ol4brlodnvY-unsplash.jpg',
  'david-clode-Ue2tcqeomdw-unsplash.jpg',
  'dominik-scythe-XV9F-gfmThs-unsplash.jpg',
  'filip-mroz-0hJL8lBl0qQ-unsplash.jpg',
  'hua-thun-ho-90qdd1mgB0Y-unsplash.jpg',
  'jonny-gios-ypOlXA2eSew-unsplash.jpg',
  'mollie-sivaram-ts1zXzsD7xc-unsplash.jpg',
  'reno-laithienne-MGfDE60G0-M-unsplash.jpg',
  'sean-pollock-PhYq704ffdA-unsplash.jpg',
  'sergey-pesterev-tMvuB9se2uQ-unsplash.jpg',
  'sergey-pesterev-wdMWMHXUpsc-unsplash.jpg'];
document.querySelectorAll("input[name=content]").forEach(element => {
  element.addEventListener("change", e => {
    switch (e.target.value) {
      case "hello-world":
        document.querySelectorAll("section > div").forEach(div => div.innerHTML = content.helloWorld);
        break;
      case "lorem-ipsum":
        document.querySelectorAll("section > div").forEach(div => div.innerHTML = content.loremIpsum);
        break;
      case "images":
        let shuffledImages = [...images].sort(() => Math.random() - 0.5);
        document.querySelectorAll("section > div").forEach(div => {
          div.innerHTML = `<img src="unsplash/${shuffledImages.pop()}" style="height: 100px;">`;
        });
        break;
      default:
        document.querySelectorAll("section > div").forEach(div => {
          let wordCount = Math.floor(Math.pow(Math.random() * 5, 2)) + 1;
          console.log(wordCount);
          div.innerHTML = makeRandomText(wordCount);
        });
        break;
    }
  });
});

function makeRandomText(wordCount) {
  let words = [];
  for (let i = 0; i < wordCount; i++) {
    let wordLength = Math.floor(Math.random() * 8) + 3;
    let word = '';
    let vowels = 'aeiou';
    let consonants = 'bcdfghjklmnpqrstvwxyz';
    for (let j = 0; j < wordLength; j++) {
      if (j % 2 === 0) {
        word += consonants[Math.floor(Math.random() * consonants.length)];
      } else {
        word += vowels[Math.floor(Math.random() * vowels.length)];
      }
    }
    words.push(word);
  }
  return words.join(' ');
}

function html(tagName, attributes, innerText) {
  const element = document.createElement(tagName);
  for (const [key, value] of Object.entries(attributes || {})) element.setAttribute(key, value);
  if (innerText) element.innerText = innerText;
  return element;
}
