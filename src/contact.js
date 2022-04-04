import afterlifeMap from './img/afterlife_map.jpg';

export default function loadContact () {
    let content = document.querySelector('#content');
    while (content.firstElementChild) {
        content.removeChild(content.firstElementChild);
    }

    let div = document.createElement('div');
    div.className = 'contact-page';
    content.appendChild(div);

    div.appendChild(getMessage());
    div.appendChild(getMap());
};

function getMessage() {
    let form = document.createElement('form');
    form.setAttribute('onsubmit', 'return false');
    form.appendChild(document.createElement('h3'));
    form.querySelector('h3').textContent = 'Message Us';

    let formItems = ['Full Name', 'Email', 'Type Your Message'];
    for (let i = 0; i < formItems.length; i++) {
        let div = document.createElement('label');
        div.className = 'form-input';
        form.appendChild(div);
        div.appendChild(document.createElement('input'));
        div.querySelector('input').setAttribute('type', 'text');
        div.querySelector('input').setAttribute('required', '');
        div.appendChild(document.createElement('span'));
        div.querySelector('span').textContent = formItems[i];
    }

    let submit = document.createElement('button');
    submit.textContent = 'Submit';
    submit.className = 'form-submit';
    form.appendChild(submit);
    return form;
}

function getMap() {
    let div = document.createElement('div');
    div.className = 'map-container';
    div.appendChild(document.createElement('h3'));
    div.querySelector('h3').textContent = 'Our Location';
    let map = new Image();
    map.src = afterlifeMap;
    div.appendChild(map);
    return div;
}