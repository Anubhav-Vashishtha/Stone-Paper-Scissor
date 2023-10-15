let Scissor = document.getElementById("Scissor1");
let Paper = document.getElementById("Paper1");
let btn = document.getElementById("btn");
let Stone = document.getElementById("Stone1");
let score = document.getElementById("score");
let Player = document.getElementsByClassName("player")[0];
let Computer = document.getElementsByClassName("computer")[0];

let arr=["Stone","Paper","Scissor"];
let a=0;
let b = 0 ;


let win=(a,b)=>{
if(a+b==5 && a>b){
    document.body.innerHTML=`
    <span style="font-size:2.5vw; margin-bottom:10px;">You Won</span>
    `;
}

if(a+b==5 && a<b){
    document.body.innerHTML=`
    <span style="font-size:2.5vw; margin-bottom:10px;">Computer Won</span>
    `;
}

}

Paper.addEventListener("click",()=>{
    let num=Math.floor(Math.random()*2.5);
    Player.innerHTML=`
    <div>Player</div>
    <img id="player"  src="Paper.png" alt="" >
    `;
    Computer.innerHTML=`
    <div>Computer</div>
    <img id="computer" src="${arr[num]}.png" alt="">
    `;

    if (arr[num]=="Paper") {
        score.innerHTML=`
        ${a} - ${b}
        `;
    }

    else if(arr[num]=="Stone"){
        a=a+1;
        score.innerHTML=`
        ${a} - ${b}
        `;
    }

    else if(arr[num]=="Scissor"){
        b=b+1;
        score.innerHTML=`
        ${a} - ${b}
        `;
    }

    win(a,b);
});

Stone.addEventListener("click",()=>{
    let num=Math.floor(Math.random()*2.5);
    Player.innerHTML=`
    <div>Player</div>
    <img id="player"  src="Stone.png" alt="" >
    `;
    Computer.innerHTML=`
    <div>Computer</div>
    <img id="computer" src="${arr[num]}.png" alt="">
    `;

    if (arr[num]=="Paper") {
        b=b+1;
        score.innerHTML=`
        ${a} - ${b}
        `;
    }
    
    else if(arr[num]=="Stone"){
        score.innerHTML=`
        ${a} - ${b}
        `;
    }
    
    else if(arr[num]=="Scissor"){
        a=a+1;
        score.innerHTML=`
        ${a} - ${b}
        `;
    }

    win(a,b);
});

Scissor.addEventListener("click",()=>{
    let num=Math.floor(Math.random()*2.5);
    Player.innerHTML=`
    <div>Player</div>
    <img id="player"  src="Scissor.png" alt="" >
    `;
    Computer.innerHTML=`
    <div>Computer</div>
    <img id="computer" src="${arr[num]}.png" alt="">
    `;

    if (arr[num]=="Paper") {
        a=a+1;
        score.innerHTML=`
        ${a} - ${b}
        `;
    }
    
    else if(arr[num]=="Stone"){
        b=b+1;
        score.innerHTML=`
        ${a} - ${b}
        `;
    }
    
    else if(arr[num]=="Scissor"){
        score.innerHTML=`
        ${a} - ${b}
        `;
    }
    
    win(a,b);
});