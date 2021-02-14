import taken from './slot-is-taken';

class Meeting{
    constructor(name, participants, day, time){
        this.name = name;
        this.participants = participants;
        this.day = day;
        this.time = time;
    }

    setItemToLocaleStorage(){
        let eventInfo = [];
        eventInfo.push(this.name);
        eventInfo.push(this.participants);
        eventInfo.push(this.day);
        eventInfo.push(this.time);
        if(localStorage.getItem(`${this.day}${this.time}`) == null){
        localStorage.setItem(`${this.day}${this.time}`, JSON.stringify(eventInfo));
        document.location.href = "./calendar.html";
        }
        else taken();
    }

    show(){
        console.log(this.name+' '+this.participants+' '+this.day+' '+this.time+' ')
    }
}

export {Meeting};