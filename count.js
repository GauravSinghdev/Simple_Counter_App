var timer;
function start()
{
    timer = setInterval(() =>{
    const a = parseInt(document.getElementById("init").innerHTML);
    const ans = a+1;
    document.getElementById("init").innerHTML = ans;
    },10);
}

function stop()
{
    clearInterval(timer);
}

function reset()
{
    clearInterval(timer);
    document.getElementById("init").innerHTML = 0;
}


function greeting()
{
    const date = new Date();
    const hour = date.getHours();

    if(hour>=5 && hour<12)
    {
        greeting = "Good Morning there";
    }
    else if(hour>12 && hour<18)
    {
        greeting = "Goode Afternoon there";
    }
    else{
        greeting = "Good Evening there";
    }

    return greeting;
}

const greet = document.getElementById("greeting-msg");

greet.innerHTML = greeting();


function getdate()
{
    let date = new Date();
    let date1 = date.getHours();
    var dt;
    if(date1>0 && date1<12)
    {
        dt  = "AM";
    }
    else dt = "PM";

    let hour = date1 - 12;
    let min = date.getMinutes();
    let sec = date.getSeconds();
    const d = document.getElementById("showdate");

    d.innerHTML =  `${hour}:${min}:${sec} ${dt}`;
}


setInterval(getdate,10);