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
    else if(hour>12 && hour>18)
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