export default function loadBanner() {
    let banner = document.createElement('div');
    banner.className = 'banner';
    banner.innerHTML = '<b>OPENS 7/24</b>' +
                        ' | ' + 
                        '<b>ENTER AT YOUR OWN RISK</b>';
    document.body.appendChild(banner);
};