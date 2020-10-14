const userscore=0;
const compscore=0;
const userscore_span= document.getElementById("user-score");
const compscore_span=document.getElementById("comp-score");
const score_div=document.querySelector("score");
const result_div=document.querySelector("result");
const r_div=document.getElementById("r");
const p_div=document.getElementById('p');
const s_div=document.getElementById("s");

function choice_comp(){
    const opt=['r','p','s'];
    const rand=Math.floor(Math.random()*3);
    return opt[rand];
}

function play(userchoice){
    const compt_choice=choice_comp();
    
}

function main(){

    r_div.addEventListener('click',function()){
        game ("r");
    }
    p_div.addEventListener('click',function()){
        game ("p");
    }
    s_div.addEventListener('click',function()){
        game ("s");
    }
}
