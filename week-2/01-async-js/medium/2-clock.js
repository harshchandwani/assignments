let  count = 0;
let counter = setInterval(() => {
    const currentDate = new Date();
    
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();
    let second = currentDate.getSeconds();


    hour = hour <= 12 ? hour: hour - 12;
    let timeZone = hour <= 12 ? "pm": "am";
    let time = hour + ':' + minute + ':' + second + " " +  timeZone;
    console.log(time);

     
}, 1000);
