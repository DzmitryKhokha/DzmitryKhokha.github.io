const boxes = document.querySelectorAll('.secrets__item')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    // const triggerBottom = window.innerHeight * 0.8;
    // 0.8 is equivalent of 4/5
    // So effectively we are saying that  triggerBottom is 80% of window.innerHeight.
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(secrets__item => {
        const boxTop = secrets__item.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            secrets__item.classList.add('show')
        } else {
            secrets__item.classList.remove('show')
        }
    })
}
