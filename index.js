const Dayelement=document.querySelector(".days");
const Hourelement=document.querySelector(".hours");
const Minuteelement=document.querySelector(".Minutes");
const Secondelement=document.querySelector(".Seconds");
const counterTimer=document.querySelector(".counterTimer");
        
const heading=document.querySelector("h1");
console.log(counterTimer)


const second=1000
//1000 millisec
const minute=60*second;
const hour=60*minute;
const day=24*hour;


const intervalId= timmerFunction=()=>{
    let now=new Date();
    let date=String(now.getDate()).padStart(2,"0"),
    mm=String(now.getMonth()+1).padStart(2,"0");
    let yyyy=now.getFullYear();
   
    // console.log(yyyy)
    const enterDate=prompt("Enter Date").padStart(2,"0");
    const enterMonth=prompt("Enter a Month").padStart(2,"0");
    let targetDate=`${enterMonth}/${enterDate}/${yyyy}`;
    // console.log(targetDate);
    now=`${mm}/${date}/${yyyy}`;
    console.log(now);
    console.log(targetDate);
    if(now > targetDate){
        targetDate=`${enterMonth}/${enterDate}/${yyyy+1}`
    }

    setInterval(() => {
    const timer =new Date(targetDate).getTime();
    const todayDate=new Date().getTime();
    const differenceTime=timer-todayDate;
    const leftDay=Math.floor(differenceTime/day);
    const lefthour=Math.floor(differenceTime%day/hour);
    const leftminute=Math.floor(differenceTime%hour/minute);
    const leftsecond=Math.floor(differenceTime%minute/second);
    // console.log(leftDay,lefthour,leftminute,leftsecond)
    Dayelement.innerHTML=leftDay;
    Hourelement.innerHTML=lefthour;
    Minuteelement.innerHTML=leftminute;
    Secondelement.innerHTML=leftsecond;
        if(differenceTime < 0){
       counterTimer.style.display="none";
    //    var snd = new Audio('audio.m4a');
    //    snd.autoplay();
        // alert("Thank you!");
       heading.innerText="Time's Up"
       
       clearInterval(intervalId);

        }
    }, 1000);
    


// console.log(differenceTime%day/hour);
// console.log(differenceTime/day)
// console.log(hour)
// console.log(day)


}
timmerFunction();