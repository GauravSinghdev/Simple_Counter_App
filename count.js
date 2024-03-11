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