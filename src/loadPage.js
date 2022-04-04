import loadBanner from './banner.js';
import loadHeader from './header.js';
import loadHome from './home.js';
import loadFooter from './footer.js';

function loadPage() {
    loadBanner();
    loadHeader();
    document.getElementById('Home').classList.add('current');
    loadHome();
    loadFooter();
}

export default loadPage;