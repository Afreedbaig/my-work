let h4 = document.querySelector("h4");
highScore =[]

let Gs="";
let Us="";
let ongoing = false;

let start = false;
let lev = 0;

let A1 = document.querySelector(".B")
let A2 = document.querySelector(".C")
let A3 = document.querySelector(".D")
let A4 = document.querySelector(".E")

let edit = [A1,A2,A3,A4]

document.addEventListener("keydown",()=>{
    if (start == false){
        ongoing = true;
        console.log("Started!!")
        start = true
        levelup()
    }
})
function levelup(){
    Us=""
    lev++
    h4.innerText = `level ${lev}`
    let n = Math.ceil(Math.random()*4) 
    Gs += n
    let random = edit[n-1]
    console.log(n)
    setTimeout(flash(random),1000)
}
function flash(btn){
    btn.classList.add("user");
    setTimeout(()=>{
        btn.classList.remove("user")
    },400)
}
button = document.querySelectorAll("button")
for (i of button){
    i.addEventListener("keydown",(event)=>{
        event.preventDefault()
    })
    i.addEventListener("click",(event)=>{
        if (ongoing){
            Us += event.target.innerText
            event.target.parentElement.classList.add("flash")
            setTimeout(()=>{
                event.target.parentElement.classList.remove("flash")
            },250)
            if (Gs == Us){
                setTimeout(levelup,400)
            }else if (!Gs.includes(Us)){
                highScore.push(lev - 1)
                h4.innerText=`Game Over !!! your score is ${lev - 1} \n press any key to play again!!`
                ongoing = false;
                start = false;
                lev = 0;
                Gs=""
                console.log(Math.max(highScore))
        }}
    })}
button.addEventListener("keydown",(event)=>{
    console.log(event)
})