let currentPopup = null;

function openPopup(popupId) {
    if (currentPopup) {
        closePopup(currentPopup);
    }

    currentPopup = popupId;
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById(popupId).style.display = 'block';
}

function closePopup(popupId) {
    currentPopup = null;
    document.getElementById('overlay').style.display = 'none';
    document.getElementById(popupId).style.display = 'none';
}

function showOverlay(container) {
    const overlay = container.querySelector('.overlay');
    overlay.style.top = '0';
    overlay.style.opacity = '1';
}

function hideOverlay(container) {
    const overlay = container.querySelector('.overlay');
    overlay.style.top = '100%';
    overlay.style.opacity = '0';
}
