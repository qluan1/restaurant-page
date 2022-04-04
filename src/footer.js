export default function loadFooter() {
    let footer = document.createElement('div');
    footer.className = 'footer';
    document.querySelector('#main').appendChild(footer);
    footer.innerHTML = '<div>&copy; 2022 qluan1 The Odin Project Assignment</div>' + 
                       '<div>Assets used in this fan project are properties of their respective owners.</div>';
};