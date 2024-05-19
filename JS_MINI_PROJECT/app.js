

let Add = document.querySelector("button")
Add.addEventListener("click",()=>{
    let delbtn = document.createElement("button")
    delbtn.innerText="delete"
    delbtn.classList.add("b")
    let H =document.createElement("li")
    let Data = document.querySelector("input").value
    H.append(Data)
    H.appendChild(delbtn)
    document.querySelector("ul").appendChild(H)
    // document.querySelector("input").value = "";
})

let ul = document.querySelector("ul")
ul.addEventListener("click",function(event){
    if (event.target.nodeName=="BUTTON"){
        event.target.parentElement.remove()
    }
})

