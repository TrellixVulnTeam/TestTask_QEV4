import '../styles/calendar.scss';
import close from './event';
import filter from './display-events';



function init(){

filter();
close();


let btnNewEv = document.getElementById("btn-new-event");
btnNewEv.addEventListener('click', () => {
    window.location.href = "./create-event.html";
});
}

init();
