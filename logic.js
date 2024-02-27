let userscore = 0;
let compscore = 0;
let userWin;
const choices  = document.querySelectorAll(".choice")
let userscorenum = document.querySelector("#user-score")
let compscorenum = document.querySelector("#comp-score")
let msg = document.querySelector("#msg");
const genComp = ()=>{
    const opt = ["rock","paper","scissor"];
    let compChoice = opt[Math.floor(Math.random()*3)];
    return compChoice;
}

const runCount=(userWin)=>{
    if(userWin==true){
        userscore++;
        userscorenum.innerText = userscore;
    }
    if(userWin==false){
        compscore++;
        compscorenum.innerText = compscore;
    }
}

const playGame=(userchoice)=>{
    console.log(userchoice);
    const comp = genComp();
    console.log(comp);

    if(userchoice == comp){
        msg.innerText = "Draw Game"
        // console.log("draw game");
    }
    else{
        userWin = true;
        if(userchoice == "rock"){
            if(comp=="paper"){
              userWin = false;
              msg.innerText = "system beat you";
            }
            else{
              userWin = true;  
              msg.innerText = " you beat system  ";
            }
        }
        else if(userchoice == "paper"){
            if(comp == "rock"){
                userWin = true;
                msg.innerText = "you beat system";    
            }
            else{
                userWin = false;
                msg.innerText = "system beat you";
            }
        }
        else{
            if(comp =="rock"){
                userWin = false;
                msg.innerText = "system beat you";
            }
            else{
                userWin = true;
                msg.innerText = "you beat system";
            }
        }
        runCount(userWin); 
    }
      
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       const userchoice = choice.getAttribute("id");
       console.log(`choice was clicked ${userchoice}`)
       playGame(userchoice);
    })
})