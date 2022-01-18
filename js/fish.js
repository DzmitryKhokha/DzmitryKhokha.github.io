document.addEventListener('DOMContentLoaded', () => {


    const scrollItems = document.querySelectorAll('.scroll-item')

    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight) + window.scrollY;
        scrollItems.forEach(el => {
            let scrollOffSet = el.offsetTop + (el.offsetHeight / 2);
            if (windowCenter >= scrollOffSet) {
                el.classList.add('animation-class');
            } else {
                el.classList.remove('animation-class');
            }
        });
    };

    scrollAnimation();
    window.addEventListener('scroll', () => {
        scrollAnimation();
    });
});


/*To use in future*/
