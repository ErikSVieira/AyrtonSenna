import { renderCarousel } from "./renderCarousel.js";
import { carouselBtn } from "./carouselBtn.js";

async function renderIndex() {
    try {
        await renderCarousel();
        carouselBtn();
    } catch (error) {
        console.error('Erro ao renderizar página:', error);
    }
}

renderIndex();