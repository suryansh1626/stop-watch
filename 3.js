const display = document.getElementById("display")
const start = document.getElementById("start")
const stop = document.getElementById("stop")
const reset = document.getElementById("reset")
const lap = document.getElementById("lap")
const list = document.getElementById("list")
let hour=0;
let minutes=0;
let second=0;
let flag=null;

start.addEventListener("click",()=>{
    if(flag!=null){
        return 
    }
    flag = setInterval(()=>{
         second++;
        if(second==60){
            minutes++;
            second=0;
        }
        if(minutes==60){
            hour++;
            minutes=0;
        }
        updateTimer()
    },1000)
})
stop.addEventListener("click",()=>{
    clearInterval(flag)
    flag=null
})
reset.addEventListener("click",()=>{
    clearInterval(flag)
    flag=null
    hour=0
    minutes=0
    second=0
    list.innerHTML=""
    updateTimer()
})
lap.addEventListener("click", () => {
    let li = document.createElement("li");
    li.innerText = display.innerText;
    list.appendChild(li);
});
function updateTimer(){
    let h = hour<10?"0"+hour : hour
    let m = minutes<10?"0"+minutes : minutes
    let s = second<10?"0"+second : second
    display.innerText=`${h}:${m}:${s}`
}