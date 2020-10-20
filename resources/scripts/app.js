const CLASS_NAME_HIDDEN = 'hidden';
const CLASS_NAME_SHOW = 'show';
const CLASS_NAME_VISIBLE = 'visible';
const ELEMENT_QUERY_BACKDROP = '#backdrop';
const ELEMENT_QUERY_POPUPCONTAINER_CARD = '#popup-container .card';
const RADIO_BUTTON_NAME_MADERA = 'madera';
const RADIO_BUTTON_NAME_BASE = 'base';
const RADIO_BUTTON_NAME_ACABADO = 'acabado';


const preciosMadera = {
    saman: 100,
    parota: 200,
    macuilis: 300,
    caoba: 400
};

const preciosBase = {
    casa: 100,
    cuadrada: 200
};

const preciosAcabado= {
    mate: 100,
    semimate: 200,
    brilloso: 300,
    piano: 400
};

const showPopupContainer = () => {
    const popupContainer = document.getElementById("popup-container");
    popupContainer.classList.remove(CLASS_NAME_HIDDEN);
    popupContainer.classList.add(CLASS_NAME_SHOW)
};

const hidePopupContainer = () => {
    const popupContainer = document.getElementById("popup-container");
    popupContainer.classList.add(CLASS_NAME_HIDDEN);
    popupContainer.classList.remove(CLASS_NAME_SHOW)
}

const showCard = () => {
    const cardElement = document.querySelector(ELEMENT_QUERY_POPUPCONTAINER_CARD);
    cardElement.classList.remove(CLASS_NAME_HIDDEN);
    cardElement.classList.add(CLASS_NAME_SHOW);

};

const hideCard = () => {
    const cardElement = document.querySelector(ELEMENT_QUERY_POPUPCONTAINER_CARD);
    cardElement.classList.add(CLASS_NAME_HIDDEN);
    cardElement.classList.remove(CLASS_NAME_SHOW);};

const showCardImgAndBody = (imgi) => {
    const muestra = document.querySelector(`.card #muestra-${imgi}`);
    muestra.classList.remove(CLASS_NAME_HIDDEN);
    muestra.classList.add(CLASS_NAME_SHOW);
    const tarjeta = document.querySelector(`.card #tarjeta-${imgi}`);
    tarjeta.classList.remove(CLASS_NAME_HIDDEN);
    tarjeta.classList.add(CLASS_NAME_SHOW);
};

const hideCardImgAndBody = () => {
    const muestra = document.querySelector(`.card .show`);
    muestra.classList.add(CLASS_NAME_HIDDEN);
    muestra.classList.remove(CLASS_NAME_SHOW);
    const tarjeta = document.querySelector(`.card .show`);
    tarjeta.classList.add(CLASS_NAME_HIDDEN);
    tarjeta.classList.remove(CLASS_NAME_SHOW);
};

const showBackdrop = () => {
    document.querySelector(ELEMENT_QUERY_BACKDROP).classList.add(CLASS_NAME_VISIBLE);
};

const hideBackdrop = () => {
    document.querySelector(ELEMENT_QUERY_BACKDROP).classList.remove(CLASS_NAME_VISIBLE);
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

const calculateTotalCost = () => {
    //iterate over the radio button groups and find the selected options in all
    let totalSum = 0;
    for(const btnGroup of document.querySelectorAll("#cotizacion .btn-group")) {
        const selected = btnGroup.querySelector(".active input"); //select the input element inside the .active label element
        if(selected === undefined) { //if no option is selected in current button group
            
            //throw an error to alert the user
        } else {
            if(selected.name === RADIO_BUTTON_NAME_MADERA) {
                totalSum += preciosMadera[selected.id]; //["caoba"]
            } else if (selected.name === RADIO_BUTTON_NAME_BASE) {
                totalSum += preciosBase[selected.id];
            } else if (selected.name === RADIO_BUTTON_NAME_ACABADO) {
                totalSum += preciosAcabado[selected.id];
            }
        }
    }
    return totalSum;
}

const displayTotalCost = (sum) => {
    let resultElement = document.querySelector(".resultado-cotizacion");
    if(resultElement === null) {
        resultElement = document.createElement("label");
        resultElement.className = "resultado-cotizacion";
    }
    resultElement.innerHTML = `<h3>Inversión aproximada: ${sum} MXN</h3>`;
    document.querySelector("#calcular-btn").insertAdjacentElement('afterend', resultElement);
}

//calculate the total of the cotization and append it after the "calcular" button
const calcularButtonClickHandler = (ev) => {
    displayTotalCost(calculateTotalCost());
}

for(const clickableImage of document.querySelectorAll(".muestra-clickable")){
    clickableImage.addEventListener('click', muestraClickableHandler, false);
}

for(const clickableImage of document.querySelectorAll(".card .btn-secondary")){
    clickableImage.addEventListener('click', cardCloseButtonClickHandler, false);
}

document.querySelector(ELEMENT_QUERY_BACKDROP).addEventListener('click', backdropClickHandler);
document.querySelector("#calcular-btn").addEventListener('click', calcularButtonClickHandler);

console.log("Loaded script successfully.");