const score=JSON.parse(localStorage.getItem('score'))||{
    wins:0,
    losses:0,
    ties:0
};

console.log(score);
 
function computermove(){
    console.log(5);
    let cm=''
    val=Math.random()
    if (0<=val && val<1/3)
    cm='rock';
    else if (1/3<=val && val<2/3)
    cm='paper';
    else
    cm='scissors';
return cm;
}
function playermove(ch){
    console.log(4);
    let cm=computermove();
   if (ch===cm)
   res='Tie';
   
   else if (ch==='rock') {
    if (cm==='paper')
    res='You Lose';
    else
    res='You Win';
   }
  else if (ch==='paper'){
    if (cm==='scissors')
    res='You Lose';
    else
    res='You Win';
   }
   else if (ch==='scissors'){
    if (cm==='rock')
    res='You Lose';
    else
    res='You Win';
   }
   if (res==='Tie')
   score.ties+=1;
   else if (res==='You Win')
   score.wins+=1;
   else
   score.losses+=1;
document.querySelector('.result').innerHTML=res;
document.querySelector('.score').innerHTML=`you<img src="${ch}-emoji.png" class="move-img">computer<img src="${cm}-emoji.png" class="move-img">\n
wins :${score.wins} losses:${score.losses} tie:${score.ties}`;
//    alert(`Your choice is ${ch}.Computer choice is ${cm}.So ${res}
// wins: ${score.wins} lose: ${score.losses} Tie: ${score.ties}`);
localStorage.setItem('score',JSON.stringify(score));
}

function reset(){
    localStorage.removeItem('score');
    score.wins=0;
    score.losses=0;
    score.ties=0;
document.querySelector('.result').innerHTML='';
document.querySelector('.score').innerHTML='';

}