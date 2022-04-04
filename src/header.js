import logo from './img/afterlife_logo.png';

export default function loadHeader() {
    let header = document.createElement('div');
    header.className = 'header';

    let title = document.createElement('div');
    title.className = 'title';
    let afterLogo = new Image();
    afterLogo.src = logo;
    title.appendChild(afterLogo);
    title.addEventListener('mouseenter', ()=>{
        title.classList.add('blur');
        setTimeout(()=>{
            title.classList.remove('blur');
        }, 200);
    });

    let nav = document.createElement('h2');
    nav.className = 'nav';

    for (let s of ['Home', 'Menu', 'Contact']) {
        let link = document.createElement('a');
        link.id = s;
        link.textContent = s;
        nav.appendChild(link);
        link.addEventListener('mouseenter', ()=>{
            link.classList.add('blur');
            setTimeout(()=>{
                link.classList.remove('blur');
            }, 200);
        });
    }

    header.appendChild(title);
    header.appendChild(nav);
    document.querySelector('#main').appendChild(header);
};
