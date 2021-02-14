import close from './event';

let filter = () =>{

let table = document.getElementById("shedTable");
let newEvent = [];
let filter = document.getElementById("filter");
console.log(filter.value);
if(filter.value == 'All'){
for(let i=1; i<=9; i++)
    for(let j =1; j<=5; j++){
        newEvent = JSON.parse(localStorage.getItem(`${j}${i}`));
        if(newEvent !== null){
            table.rows[i].cells[j].innerHTML = 
            `<div class="meeting">
            <div class="meeting-name">${newEvent[0]}</div>
            <div class="delete-item">&#9746</div>
            </div>`;
        }
    }
}
filter.addEventListener('change', function(e) {
                let name = e.target.value;
                console.log(name);
                for(let i=1; i<=9; i++)
                    for(let j=1; j<=5; j++){
                        newEvent = JSON.parse(localStorage.getItem(`${j}${i}`));
                        if(newEvent !== null){
                            table.rows[i].cells[j].innerHTML = ' ';
                            if(newEvent[1].indexOf(`${name}`, 0) !== -1){
                                table.rows[i].cells[j].innerHTML = 
                                    `<div class="meeting">
                                    <div class="meeting-name">${newEvent[0]}</div>
                                    <div class="delete-item">&#9746</div>
                                    </div>`
                                close();
                            }
                        }
                    }
                
                if(name == 'All'){
                    for(let i=1; i<=9; i++)
                        for(let j =1; j<=5; j++){
                            newEvent = JSON.parse(localStorage.getItem(`${j}${i}`));
                            if(newEvent !== null){
                                table.rows[i].cells[j].innerHTML = `<div class="meeting">
                                <div class="meeting-name">${newEvent[0]}</div>
                                <div class="delete-item">&#9746</div>
                                </div>`;
                                close();
                            }
                        }
                    }
                })
            }

            export default filter;