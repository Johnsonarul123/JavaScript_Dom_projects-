function randomColor(){
    let color = "0123456789ABCDEF"
    let cons = "#";
    for(let i=0; i<6 ;i++){
        cons += color[ Math.floor(Math.random() * 16) ];
    }
    return cons;
}
console.log(randomColor);


document.addEventListener("click", (e) =>{
    let body = document.querySelector("body");
    let circle= document.createElement("div");
    circle.classList.add("circle");
    circle.style.left= `${e.clientX - 15}px`;
    circle.style.top =`${e.clientY - 15}px`;
  
    circle.style.backgroundColor = randomColor();

    body.append(circle);


    setTimeout(()=>{
        circle.remove();
    },2000);
});



