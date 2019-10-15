
const highlight = document.querySelectorAll('.tooltip');

console.log('highlight',highlight)

highlight.forEach((item) => {
    // console.log(item)
    item.addEventListener('click', () => {
        if (item.dataset.highlightClick === 'on') {
            item.style.background = 'red'
        }
    })
})
