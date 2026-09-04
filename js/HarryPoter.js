document.addEventListener('DOMContentLoaded', () => {
document.body.classList.add('page-loaded');
const links = document.querySelectorAll('.nav-items a');
const currentPage = window.location.pathname.split("/").pop();
    links.forEach(link => {
const href = link.getAttribute('href');
const line = document.createElement('span');
    line.style.position = 'absolute';
    line.style.left = '0';
    line.style.bottom = '0';
    line.style.width = '0';
    line.style.height = '2px';
    line.style.background = '#fff';
    line.style.transition = 'width .3s ease';
    link.style.position = 'relative';
    link.style.display = 'inline-block';
    link.style.paddingBottom = '10px';
    link.appendChild(line);
    if(href === currentPage){
        line.style.width = '100%';
    }
    link.addEventListener('mouseenter', () => {
        if(href !== currentPage){
            line.style.width = '100%';
        }
    });
    link.addEventListener('mouseleave', () => {
        if(href !== currentPage){
            line.style.width = '0';
        }
    });
    link.addEventListener('click', function(e){
        if(
            href.startsWith('http') ||
            href.startsWith('#') ||
            href.startsWith('mailto:') ||
            href.startsWith('tel:')
        ){
            return;
        }
        e.preventDefault();
        document.body.classList.remove('page-loaded');
        document.body.classList.add('page-fade-out');
        setTimeout(() => {
            window.location.href = href;
        }, 500);
    });
});
});
