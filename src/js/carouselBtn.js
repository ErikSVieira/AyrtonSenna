export function carouselBtn() {
    const btnCarousel = document.querySelectorAll('.btnCarousel');

    btnCarousel.forEach((btn, key) => {
        btn.addEventListener('click', () => {
            desativarBotaoSelecionado();
            selecionarBotaoCarrosel(btn);
            esconderImagemAtiva();
            mostrarImagemDeFundo(key);
        })
    })

    // Mundança automatica
    setInterval((() => {
        for (let i = 0; i < btnCarousel.length; i++) {
            if (btnCarousel[i].className == 'btnCarousel btnSelection' && i < btnCarousel.length - 1) {
                desativarBotaoSelecionado();
                esconderImagemAtiva();

                mostrarImagemDeFundo(i + 1);
                selecionarBotaoCarrosel(btnCarousel[i + 1]);
                break;
            } else if (btnCarousel.length == (i + 1)) {
                desativarBotaoSelecionado();
                esconderImagemAtiva();

                mostrarImagemDeFundo(0);
                selecionarBotaoCarrosel(btnCarousel[0]);
            }
        }
    }), 5000);
}

function mostrarImagemDeFundo(key) {
    const imgCarousel = document.querySelectorAll('.imgCarousel');

    imgCarousel[key].classList.add('action');
}

function selecionarBotaoCarrosel(btn) {
    btn.classList.add('btnSelection');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.action');
    imagemAtiva.classList.remove('action');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.btnSelection');
    botaoSelecionado.classList.remove('btnSelection');
}