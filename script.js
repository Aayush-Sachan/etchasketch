const grid = document.getElementById("grid");
let draw = false;
for(let i=0;i<(16*16);i++){
    let elem = document.createElement("div");
    elem.classList.add("box");
    elem.addEventListener("mousedown",function(){
        // box.classList.toggle("box");
        draw=true;
        
    });
    elem.addEventListener("mousemove",function(){
        if(draw){
            if(!elem.classList.contains("active")){
                elem.classList.remove("box");
            elem.classList.add("active");}
        }
    });
    grid.appendChild(elem);
}

let allelem = document.querySelectorAll(".box");


document.addEventListener("mouseup",()=>{
    draw=false;
})

let clear= document.getElementById("clear");

clear.addEventListener("click",()=>{
    allelem.forEach((box)=>{
        if(box.classList.contains("active")){
            box.classList.remove("active");
            box.classList.add("box");
        }
    })
})