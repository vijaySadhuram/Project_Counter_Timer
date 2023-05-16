const Dayelement=document.querySelector(".days");
const Hourelement=document.querySelector(".hours");
const Minuteelement=document.querySelector(".Minutes");
const Secondelement=document.querySelector(".Seconds");


const second=1000
//1000 millisec
const minute=60*second;
const hour=60*minute;
const day=24*hour;


const timmerFunction=()=>{
    setInterval(() => {
    const timer =new Date("05/18/2023").getTime();
    const todayDate=new Date().getTime();
    const differenceTime=timer-todayDate;
    const leftDay=Math.floor(differenceTime/day);
    const lefthour=Math.floor(differenceTime%day/hour);
    const leftminute=Math.floor(differenceTime%hour/minute);
    const leftsecond=Math.floor(differenceTime%minute/second);
    console.log(leftDay,lefthour,leftminute,leftsecond)
    Dayelement.innerHTML=leftDay;
    Hourelement.innerHTML=lefthour;
    Minuteelement.innerHTML=leftminute;
    Secondelement.innerHTML=leftsecond;
        
    }, 1000);
    


// console.log(differenceTime%day/hour);
// console.log(differenceTime/day)
// console.log(hour)
// console.log(day)


}
timmerFunction();