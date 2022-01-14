document.addEventListener('DOMContentLoaded', () => {
    const scaleItems = document.querySelectorAll('.border')

    const scaleAnimation = () => {
        let windowCenter = (window.innerHeight / 3) + window.scrollY;
        scaleItems.forEach(el => {
            let scrollOffSet = el.offsetTop + (el.offsetHeight / 2);
            if (windowCenter >= scrollOffSet) {
                el.classList.add('scale-class');
            } else {
                el.classList.remove('scale-class');
            }
        });
    };


    const scrollItems = document.querySelectorAll('.scroll-item')

    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight*0.75) + window.scrollY;
        scrollItems.forEach(el => {
            let scrollOffSet = el.offsetTop + (el.offsetHeight / 2);
            if (windowCenter >= scrollOffSet) {
                el.classList.add('animation-class');
            } else {
                el.classList.remove('animation-class');
            }
        });
    };

    scaleAnimation();
    scrollAnimation();
    window.addEventListener('scroll', () => {
        scrollAnimation();
        scrollAnimation();
    });
});
