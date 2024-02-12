let myscore =document.getElementById("score") 
let start = document.querySelector(".startup button")
let mypopUp = document.querySelector(".popUp")
let finelscore = document.querySelector(".popUp span")
let replay = document.querySelector(".replay")
let gameover = false
let cmptr = 0
window.onload = function(){
    start.addEventListener("click",()=>{
        start.parentElement.style.display = "none"
        setgame()
    })  
    }

    /// create the moles
   
function setgame(){
    for(let i = 0 ; i < 9 ;i++){
        let mole = document.createElement("div")
        mole.id = i.toString()
        content.appendChild(mole)}
         setInterval(setmole,1500)
         setInterval(settile,1500) 
 }
    
// create the random moving of the nurse
function setmole() {
  if(gameover)
  return
    if(typeof currenttoil !== "undefined")  {
       currenttoil.innerHTML = "";
    }
         randomNumbr = (Math.floor(Math.random( )*9)).toString()
         if( typeof currentplant !== "undefined" && currentplant.id == randomNumbr){
            return
           }
             let mymonty = document.createElement("img")
             mymonty.src ="/Images/monty-mole.png" 
             currenttoil  = document.getElementById(randomNumbr)
             currenttoil.appendChild(mymonty) 
             mymonty.addEventListener("click",()=>{
            cmptr +=100
             myscore.innerHTML = cmptr 
         })
         }

function settile(){
      if(gameover)
      return
      if(typeof currentplant !== "undefined")  {
        currentplant.innerHTML = "";
       }
       randomNumbr2 =(Math.floor(Math.random( )*9)).toString()
       if(typeof currenttoil !== "undefined" && currenttoil.id == randomNumbr2){
        return
       }
        let myplant =  document.createElement("img")
        myplant.src = "/Images/$.png" 
        currentplant = document.getElementById(randomNumbr2)
        currentplant.appendChild(myplant)
        myplant.addEventListener("click",()=>{
        gameover = true;
        finelscore.innerHTML = cmptr
        mypopUp.style.top = "50%"
    })
}
// reset the game 

replay.addEventListener("click",()=>{
    if(gameover === true){
        replay.parentElement.style.display = "none"  
        gameover = false;
        cmptr = 0;
        myscore.innerHTML = cmptr;
        content.innerHTML = "";
        mypopUp.style.top = "-50%";
        setgame()

    }
    else{
        replay.parentElement.style.display = "block"  
    }
   
})


