let close = function(){
    let close_btn = document.querySelectorAll('div.delete-item');
    close_btn.forEach(item=>{
        item.addEventListener('click', () => {
            let name = item.parentNode.parentNode.innerText;
            let deleteMeet = confirm (`Are you shure you want to delete "${name.substring(0, name.length - 2)}" event?`);
            if(deleteMeet){
            for(let i=1; i<=9; i++)
                for(let j =1; j<=5; j++){
                    let newEvent = JSON.parse(localStorage.getItem(`${j}${i}`));
                    if(newEvent !== null){
                    if(newEvent[0] === name.substring(0, name.length - 2)){
                        localStorage.removeItem(`${j}${i}`);
                    }
                }
                }
            item.parentNode.parentNode.removeChild(item.parentNode);
            }
        })
    })
}
export default close;