export const radioPlayerInit = () => {
    const radio = document.querySelector('.radio');
    const radioCoverImg = document.querySelector('.radio-cover__img');
    const radioHeader = document.querySelector('.radio-header');
    const radioNagation = document.querySelector('.radio-navigation');
    const radioItem = document.querySelectorAll('.radio-item');
    const radioStop = document.querySelector('.radio-stop');

    const audio = new Audio();
    audio.type = 'audio/aac';

    radio.stop.disabled = 'true';

    radioNagation.addEventListener('change', (event) => {
        const target = event.target;
        audio.src = 'target.dataset.radioStation';
        audio.play();

    })
}