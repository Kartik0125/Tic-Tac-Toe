let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
//playerX,playerO
let turn0=true;
let count=0;
let winningPattern=[
    [0,1,2],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        if(turn0)
            {
                box.innerText="O";
                box.style.color="#6b5b95";
                turn0=false;
            }
        else{
            box.innerText="X";
            box.style.color="#f7786b";
            turn0=true;
        }
        box.disabled=true;
        count++;

        let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }

    });
});
const resetGame = () => {
    turn0=true;
    enablebtn();
    msgcontainer.classList.add("hide");
};
const disablebtn = () =>{
    for(let box of boxes)
        {
            box.disabled=true;
        }
};
const enablebtn = () =>{
    for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
};
const showWinner = (winner)=>{
    msg.innerText=`Congratulations Winner is ${winner}!!`;
    msgcontainer.classList.remove("hide");
    disablebtn();
};
const gameDraw = () =>{
            msg.innerText=`Match Draw!!`;
            msgcontainer.classList.remove("hide");
            disablebtn();
};
const checkWinner=() => {
    for(let pattern of winningPattern)
        {
            let pos1=boxes[pattern[0]].innerText;
            let pos2=boxes[pattern[1]].innerText;
            let pos3=boxes[pattern[2]].innerText;

            if(pos1 !== "" && pos2!=="" && pos3 !== "")
                {
                    if(pos1 === pos2 && pos2 === pos3)
                        {
                            showWinner(pos1);
                            return true;
                        }
                }
        }
};

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);