function updateTime(){
    const hour=document.getElementById("hourline")
    const minute=document.getElementById("minuteline")
    const second=document.getElementById("secondline")

    const todayDate=new Date();  //create a date instance(child)

    const todayHour=todayDate.getHours() >12 ? todayDate.getHours()-12:todayDate.getHours()

    const todayMinute=todayDate.getMinutes()

    const todaySecond=todayDate.getSeconds()

    hour.style.rotate=`${(todayHour*30)+(0.5*todayMinute)}deg`;
    minute.style.rotate=`${(todayMinute*6)+(0.08333333333333333*todaySecond)}deg`;
    second.style.rotate=`${todaySecond*6}deg`;
}

setInterval(()=>{
    updateTime();
},1000)