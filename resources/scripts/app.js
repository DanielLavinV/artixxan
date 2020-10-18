const showPopupContainer = () => {
    const popupContainer = document.getElementById("popup-container");
    popupContainer.classList.remove("hidden");
    popupContainer.classList.add("show")
};

const hidePopupContainer = () => {
    const popupContainer = document.getElementById("popup-container");
    popupContainer.classList.add("hidden");
    popupContainer.classList.remove("show")
}

const showCard = () => {
    const cardElement = document.querySelector("#popup-container .card");
    cardElement.classList.remove("hidden");
    cardElement.classList.add("show");

};

const hideCard = () => {
    const cardElement = document.querySelector("#popup-container .card");
    cardElement.classList.add("hidden");
    cardElement.classList.remove("show");};

const showCardImgAndBody = (imgi) => {
    const muestra = document.querySelector(`.card #muestra-${imgi}`);
    muestra.classList.remove("hidden");
    muestra.classList.add("show");
    const tarjeta = document.querySelector(`.card #tarjeta-${imgi}`);
    tarjeta.classList.remove("hidden");
    tarjeta.classList.add("show");
};

const hideCardImgAndBody = () => {
    const muestra = document.querySelector(`.card .show`);
    muestra.classList.add("hidden");
    muestra.classList.remove("show");
    const tarjeta = document.querySelector(`.card .show`);
    tarjeta.classList.add("hidden");
    tarjeta.classList.remove("show");
};

const showBackdrop = () => {
    document.querySelector("#backdrop").classList.add("visible");
};

const hideBackdrop = () => {
    document.querySelector("#backdrop").classList.remove("visible");
};

const muestraClickableHandler = (e) => {
    showBackdrop();
    showPopupContainer();
    showCard();
    showCardImgAndBody(e.target.alt);
};

const backdropClickHandler = () => {
    hideBackdrop();
    hidePopupContainer();
    hideCard();
    hideCardImgAndBody();
};

const cardCloseButtonClickHandler = () => {
    hideBackdrop();
    hidePopupContainer();
    hideCard();
    hideCardImgAndBody();
};

for(const clickableImage of document.querySelectorAll(".muestra-clickable")){
    clickableImage.addEventListener('click', muestraClickableHandler, false);
}

for(const clickableImage of document.querySelectorAll(".card .btn-secondary")){
    clickableImage.addEventListener('click', cardCloseButtonClickHandler, false);
}

document.querySelector("#backdrop").addEventListener('click', backdropClickHandler);

console.log("Loaded script successfully.");