

const containerBotonMenu = document.querySelector(".container__boton-menu");
const tresLineas = document.querySelectorAll(".tres-lineas");
const lineaSuperior = document.querySelector('.linea-superior');
const lineaInferior = document.querySelector('.linea-inferior');
const lineaMedio = document.querySelector('.linea-medio');
let menuHamburguesaActivo = false;

containerBotonMenu.onclick = () => {
    menuHamburguesaActivo = !menuHamburguesaActivo
    if (menuHamburguesaActivo) {
        tresLineas.forEach(span => {
            span.classList.add("to-cross-motion")
        })
        setTimeout(() => {
            lineaMedio.classList.add("counter-clockwise");
            lineaSuperior.classList.add("counter-clockwise");
            lineaInferior.classList.add("clockwise")
        }, 300)
    }
    else {
        lineaMedio.classList.remove("counter-clockwise");
        lineaSuperior.classList.remove("counter-clockwise");
        lineaInferior.classList.remove("clockwise")
        setTimeout(() => {
            tresLineas.forEach(span => {
                span.classList.remove("to-cross-motion")
            })
        }, 300)
    }
}

