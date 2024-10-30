document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupDescriptionItem = document.getElementById('popup-description-item');
    const popupDescriptionAllergeni = document.getElementById('popup-description-allergeni');
    const popupImage = document.getElementById('popup-img');
    const closeBtn = document.querySelector('.close');

    menuItems.forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            const title = item.textContent;
            const descriptionItem = item.getAttribute('data-description');
            const descriptionAllergeni = item.getAttribute('data-allergeni');
            const imageSrc = item.getAttribute('data-img');
            popupTitle.textContent = title;
            popupImage.src = imageSrc;
            popupDescriptionItem.textContent = descriptionItem;
            popupDescriptionAllergeni.textContent = descriptionAllergeni;
            popup.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', event => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
