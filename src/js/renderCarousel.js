import { loadImage } from "./imageCarousel.js";

export async function renderCarousel() {
    try {
        const catalogo = await loadImage();
        
        catalogo.forEach(carouselImg => {
            if (carouselImg.first === 1) {
                carouselImg['action'] = 'action';
                carouselImg['btnSelection'] = 'btnSelection';
            } else {
                carouselImg['action'] = '';
                carouselImg['btnSelection'] = '';
            }

            const imgCarousel = `
                <img title="${carouselImg.description}" 
                    class="imgCarousel ${carouselImg.action}" 
                    src="./src/images/${carouselImg.image}" 
                    alt="${carouselImg.description}"
                />
            `;

            document.getElementById('carouselImg').innerHTML += imgCarousel;
            
            const carouselBtn = `<button class="btnCarousel ${carouselImg.btnSelection}"></button>`;
            document.getElementById('carouselBtn').innerHTML += carouselBtn;
        });
    } catch (error) {
        console.error('Erro ao carregar o dados:', error);
    }
}