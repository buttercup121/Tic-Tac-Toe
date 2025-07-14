let boxes=document.querySelectorAll(".box");

let turnX=true;
const positions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
  box.addEventListener("click", ()=>{
    if(turnX){
 box.innerHTML="X";
 turnX=false;
  document.dispa
    }else{
 box.innerHTML="O";
 turnX=true;
    }
   box.disabled=true;
   winner();
  })
})

function winner(){
    let win=false;
    // const win=false;
    for(let p of positions){
       //console.log(boxes[p[0]],boxes[p[1]],boxes[p[2]]);
        let p1= boxes[p[0]].innerText;
         let p2= boxes[p[1]].innerText;
        let p3= boxes[p[2]].innerText;
    
   if(p1 !== "" && p1===p2 && p2===p3){
            // alert("Winner Spotted!");
            console.log("Winner Spotted");
            
            document.querySelector(".mes").innerText="Winner Spotted!!";
            document.querySelector(".winner").style.display="flex";
           win=true;
           return;
           
          }
    }
      let isFull = true;
  for (let box of boxes) {
    if (box.innerText === "") {
      isFull = false;
      break;
    }
  }
   if(!win && isFull){
     document.querySelector(".mes").innerText="Retry";
            document.querySelector(".winner").style.display="flex";
   }
   
}

document.querySelector(".re-play").addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
        
    })
     document.querySelector(".winner").style.display="none";
})