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
    "height": ["auto", "12.5%", "50%", "100px"]
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
    for(var selector in rules) {
        css += selector + " {\n";
        for(var rule in rules[selector]) {
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

function html(tagName, attributes, innerText) {
    const element = document.createElement(tagName);
    for (const [key, value] of Object.entries(attributes || {})) element.setAttribute(key, value);
    if (innerText) element.innerText = innerText;
    return element;
}
