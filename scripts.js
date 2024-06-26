document.addEventListener('DOMContentLoaded', function() {
    const expandableItems = document.querySelectorAll('.expandable');

    expandableItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
            const content = item.querySelector('.content');
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.padding = '15px';
            } else {
                content.style.maxHeight = '0';
                content.style.padding = '0 15px';
            }
        });
    });
});
