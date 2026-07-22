
// ⭐ Create Twinkling Stars

const stars = document.getElementById("stars");

for(let i=0;i<250;i++){

let star=document.createElement("div");

star.className="star";

let size=Math.random()*3+1;

star.style.width=size+"px";

star.style.height=size+"px";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDuration=(1+Math.random()*3)+"s";

star.style.animationDelay=Math.random()*2+"s";

stars.appendChild(star);

}

// 🌠 Shooting Stars

function shootingStar(){

let s=document.createElement("div");

s.style.position="absolute";

s.style.width="3px";

s.style.height="3px";

s.style.background="white";

s.style.boxShadow="0 0 20px white";

s.style.top=Math.random()*40+"vh";

s.style.left="-20px";

s.style.transform="rotate(45deg)";

s.style.zIndex="5";

document.body.appendChild(s);

let x=0;

let y=0;

let move=setInterval(()=>{

x+=12;

y+=8;

s.style.left=x+"px";

s.style.top=`calc(${Math.random()*0}vh + ${y}px)`;

if(x>window.innerWidth){

clearInterval(move);

s.remove();

}

},20);

}

setInterval(shootingStar,2500);
  function startJourney(){
document.getElementById("welcomeScene").style.display="none";
document.getElementById("journeyScene").style.display="block";
  }
