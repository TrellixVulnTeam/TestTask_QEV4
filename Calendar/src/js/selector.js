let select = () => {
    let selectHeader = document.querySelectorAll('.select-header');
    let selectItem = document.querySelectorAll('.select-item');

    selectHeader.forEach(item=>{
        item.addEventListener('click', selectToggle)
    })

    selectItem.forEach(item=>{
        item.addEventListener('click', selectChoose)
    })

    function selectToggle(){
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose(){
        let text = this.innerText;
        let select = this.closest('.select');
        let currentText = this.closest('.select').querySelector('.select-current');
        if(currentText.innerText == 'All participants:')
        currentText.innerText = '';
        if(currentText.innerText.indexOf(text) === -1)
        currentText.innerText += ` ${text}`;
        select.classList.remove('is-active');
        //console.log(text);
    }
}

select();