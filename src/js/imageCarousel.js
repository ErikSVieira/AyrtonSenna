export async function loadImage() {
    try {
        const response = await fetch('./src/json/image_carousel.json');
        const catalogo = await response.json();
        return catalogo;
    } catch (error) {
        console.error('Erro ao carregar o arquivo JSON:', error);
    }
}