let canvas,ctx,bird,pigs=[],score=0,levelIndex=0;
function loadLevel(i){pigs=LEVELS[i].pigs.map(p=>new Pig(p.x,p.y));document.getElementById('level').textContent=i+1;}
function startGame(){canvas=gameCanvas;ctx=canvas.getContext('2d');bird=new Bird(150,500);loadLevel(0);
canvas.addEventListener('click',()=>{bird.x+=90;playSound('launch');checkHits();});
loop();}
function checkHits(){for(const p of pigs){if(p.alive&&dist(bird.x,bird.y,p.x,p.y)<50){p.alive=false;score+=5000;scoreEl.textContent=score;}}if(pigs.every(p=>!p.alive)&&levelIndex<LEVELS.length-1){levelIndex++;loadLevel(levelIndex);}}
const scoreEl=document.getElementById('score');
function loop(){ctx.clearRect(0,0,1200,700);ctx.fillStyle='red';ctx.beginPath();ctx.arc(bird.x,bird.y,16,0,7);ctx.fill();
for(const p of pigs){if(p.alive){ctx.fillStyle='green';ctx.beginPath();ctx.arc(p.x,p.y,20,0,7);ctx.fill();}}
requestAnimationFrame(loop);}