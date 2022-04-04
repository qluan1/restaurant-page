export default function loadHome() {
    let content = document.querySelector('#content');
    if (content) {
        while (content.firstElementChild) {
            content.removeChild(content.firstElementChild);
        }
    } else {
        content = document.createElement('div');
        content.id = 'content';
        document.querySelector('#main').appendChild(content);
    }

    loadDescription();
    loadMedia();
    
    function loadDescription() {
        let des = document.createElement('div');
        des.className = 'description';
        content.appendChild(des);

        let statement = document.createElement('h1');
        des.appendChild(statement);
        statement.className = 'statement';
        statement.innerHTML = 'Welcome' + '<br>' +'To The' + '<br>' + 'Major League.';
        
        let about = document.createElement('div');
        des.appendChild(about);
        about.className = 'about';
        about.innerHTML = '<h2>Premiere Solo Bar of Night City Now In Watson District</h2>' +
                          '<p>There is only one path in Night City worth walking: the one that leads to the <span>Afterlife</span>.'+
                          '<br> <br>' +
                          'The <span>Afterlife</span> is an iconic bar where the who\'s who of mercs and first-rate fixers gather to kick back or conduct biz. ' +
                          'Once you make it here, sooner or later, everything else opens up to you.</p>';
    }

    function loadMedia(){
        let media = document.createElement('div');
        media.className = 'media';
        content.appendChild(media);

        let promo = document.createElement('p');
        promo.className = 'promotion';
        promo.textContent = 'AS FEATURED IN';
        media.appendChild(promo);

        let refer = document.createElement('div');
        refer.className = 'refs';
        media.appendChild(refer);

        let ref = document.createElement('a');
        refer.appendChild(ref);
        ref.setAttribute('target', '_blank');
        ref.setAttribute('rel', 'noopener noreferer');
        ref.setAttribute('href', 'https://cyberpunk.fandom.com/wiki/Afterlife');

        let img = document.createElement('img');
        ref.appendChild(img);
        img.setAttribute('src', 'https://static.wikia.nocookie.net/cyberpunk/images/e/e6/Site-logo.png');
    }
}