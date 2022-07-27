let userName = prompt("Lütfen İsminizi Giriniz.");

let writeName = document.getElementById("myName").innerHTML= userName;


function currentTime() {
    const WEEKDAY = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let session = "AM";
    let day = WEEKDAY[date.getDay()];

    if(hour>12){
        session = "PM";
    }

    hour = (hour<10) ? "0" + hour : hour;
    min = (min<10) ? "0" + min : min;
    sec = (sec<10) ? "0" + sec : sec;

    let time = hour + ":" + min + ":" + sec + " " + session + " " + day;
  

  document.getElementById("myClock").innerText = time;
  var t = setTimeout(function(){ currentTime()},1000);

}

currentTime();
 