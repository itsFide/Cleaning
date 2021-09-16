// Аккордеон
function accordion() {
    let itemsContent = document.querySelectorAll('.accordion__item-content');
    const items = document.querySelectorAll('.accordion__item-trigger')
    items.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentNode
            let parentItem = parent.querySelector('.accordion__item-content');
            if (parent.classList.contains('accordion__item-active')) {
                parent.classList.remove('accordion__item-active')
                parentItem.style.height = '0px';
                
            } else {
                document
                    .querySelectorAll('.accordion__item-content')
                    .forEach((child) => {
                        child.style.height = '0px'
                    }) 
                    document.querySelectorAll('.accordion__item')
                    .forEach((child) => {
                        
                        child.classList.remove('accordion__item-active')
                    }) 
                    parent.classList.add('accordion__item-active')
                    parentItem.style.height = parentItem.scrollHeight + 'px';
                
            }
        })
    })
}

accordion() 