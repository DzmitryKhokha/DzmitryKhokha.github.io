document.addEventListener('DOMContentLoaded', () => {


    const scrollValueItems = document.querySelectorAll('.scroll-item')
    const addClass = document.querySelectorAll('.beef')

    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight * 1.2) + window.scrollY;
        scrollValueItems.forEach(el => {
            let scrollOffSet = el.offsetTop + (el.offsetHeight / 3);
            if (windowCenter >= scrollOffSet) {
                el.classList.add('animation-class');
            } else {
                el.classList.remove('animation-class');
            }
        });

        let windowQuarter = (window.innerHeight / 5) + window.scrollY;
        addClass.forEach(el => {
            let scrollOffSet = el.offsetTop + (el.offsetHeight*0.8);
            if(windowQuarter >= scrollOffSet) {
                el.classList.add('anim-class');
            } else {
                el.classList.remove('anim-class')
            }
        })
    };


    scrollAnimation();
    window.addEventListener('scroll', () => {
        scrollAnimation();

    });
});
