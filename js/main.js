
    const timer = document.getElementById("timer");
    const start = document.getElementById("start");
    const stop = document.getElementById("stop");
    const reset = document.getElementById("reset");
    const justOne = document.getElementById("justOne");
   
    let startTime = 0;
    let stopTime = 0;
    let elapsedTime = 0;
    let id;
    let s;
    let ms;
    // カウント
   function countUp(){
    
    id =  setTimeout(function(){
            // 現在の時間 - スタートを押した時間　=　経過時間
           elapsedTime = Date.now() - startTime + stopTime;
           timer.innerHTML = elapsedTime; 

           countUp();
           timeConversion();
        },10);
    }


    // ミリ秒を分毎時に変換
    function timeConversion(){
        // 1000ミリ秒　= 1秒
        // 60000ミリ秒　= 1 分

        // 分
        let m = Math.floor(elapsedTime / 60000);
        // 秒
         s = Math.floor(elapsedTime % 60000 / 1000);
        // ミリ秒
         ms = elapsedTime % 1000;

    
    
m = ('0' + m).slice(-2);
s= ('0' + s).slice(-2);
ms = ('00' + ms).slice(-3);

timer.innerHTML = m + ":" + s + "." + ms;
    }

start.disabled = false;
stop.disabled = true;
reset.disabled = true;

// スタートボタンを押したとき
    start.addEventListener('click',()=>{
        // 押した時間を入れる
        startTime = Date.now();
        countUp();
        timeConversion();
        start.disabled = true;
        reset.disabled = true;
        stop.disabled = false;
    });

    stop.addEventListener('click',()=>{
        clearTimeout(id);
        stopTime = Date.now() - startTime + stopTime;
        start.disabled = false;
        stop.disabled = true;
        reset.disabled  = false;

        if(s == 1.0　&& ms == 0){
            justOne.style.display = "block";
         }else{
             justOne.style.display = "none";
         }
    
    });

    reset.addEventListener("click",()=>{
        elapsedTime = 0;
        stopTime = 0;
        timeConversion();
        start.disabled = false;
        stop.disabled = true;
        reset.disabled  = true;
        justOne.style.display = "none";
    });



