let taken = function(){
    
    let close = document.querySelector('.close-icon');
    let message = document.querySelector('.slot-is-taken');
    message.style.display = 'block';

    close.addEventListener('click', function(){
        message.style.display = 'none';
    })
}

export default taken;