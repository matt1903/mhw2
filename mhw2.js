function scroll2Top(event)
{
    window.scrollTo({top: 0});      /*Funzione per scrollare fino all'inizio della pagina*/
}
const clickTop = document.querySelector('.back-top');
clickTop.addEventListener('click', scroll2Top);     /*Evento che attende un click sul bottone 'back-to-top*/


function changeImageOn(event)
{
    const img = document.querySelector('#arduOG');
    img.src = 'Immagini/what-arduino-imgOn.svg';
    img.removeEventListener('mouseenter', changeImageOn);
}

function changeImageOff(event)
{
    const img = document.querySelector('#arduOG');
    img.src = 'Immagini/arduinoUno.png';
    img.removeEventListener('mouseleave', changeImageOff);
}
const image = document.querySelector('.what-arduino');
image.addEventListener('mouseenter', changeImageOn);
image.addEventListener('mouseleave', changeImageOff);

function freeOnclick(event)
{
    const container = event.currentTarget;
    const new_div = 
}

const freeTrial = document.querySelector('#free-div');
freeTrial.addEventListener('click', freeOnclick);