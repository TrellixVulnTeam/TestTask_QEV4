import '../styles/create-event.scss';
import '../styles/error.scss';
import '../styles/selector.scss';

import {Meeting} from './meeting';
import './selector';
import './slot-is-taken';
  
  
  function init(){
      
    let btnCreate = document.getElementById("btn-create");
  
    btnCreate.addEventListener("click", () =>{
    
    let name = document.getElementById("name").value;
    let participants = document.querySelector('.select-current').innerText;
    let day = document.getElementById("day").value;
    let time = document.getElementById("time").value;
    
    let newMeeting = new Meeting(name, participants, day, time);

    newMeeting.setItemToLocaleStorage();
    
    });
  
    let btnCancel = document.getElementById("btn-cancel");
  
    btnCancel.addEventListener("click", () =>{
    
    document.location.href = "./calendar.html";
    
    });
  
  }
  
  window.onload=init;