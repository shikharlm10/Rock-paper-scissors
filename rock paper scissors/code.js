var userscore = 0;
var compscore = 0;
const userscore_span = document.getElementById("score-user");
const compscore_span = document.getElementById("score-comp");
const score_div = document.querySelector("score");
const result_p = document.querySelector(".result >p");
const r_div = document.getElementById("r");
const p_div = document.getElementById('p');
const s_div = document.getElementById("s");
// const user_animate = document.getElementById('user-tag');
// const comp_animate = document.getElementById('comp-tag');


function choice_comp(){
    const opt=['Rock','Paper','Scissors'];
    const rand=Math.floor(Math.random()*3);
    return opt[rand];
}


function win(user,comp){
    ++userscore;
    userscore_span.innerHTML=userscore;
    compscore_span.innerHTML=compscore;
    result_p.innerHTML=(user + " Defeats " + comp);

    ////// add animation after winning
    document.getElementById('user-tag').classList.add('pop1');
    setTimeout(() => {document.getElementById('user-tag').classList.remove('pop1')},250);
}

function lose(user,comp){
    ++compscore;
    userscore_span.innerHTML=userscore;
    compscore_span.innerHTML=compscore;
    result_p.innerHTML=(comp + " Defeats " + user);

    document.getElementById('comp-tag').classList.add('pop2');
    setTimeout(() => {document.getElementById('comp-tag').classList.remove('pop2')},250);
    
}



function draw(){
    result_p.innerHTML=("It's A Draw");
}



function play(userchoice){
    const compt_choice=choice_comp();
    console.log("Computer chooses :"+compt_choice);
    console.log("User chooses :"+ userchoice+"\n");

    //.... fetching result...

    switch(userchoice+compt_choice){ 

        case "RockScissors":
            case "ScissorsPaper":
                case "PaperRock":  win(userchoice,compt_choice);  break;

        case "ScissorsRock":
            case "PaperScissors":
                case "RockPaper":  lose(userchoice,compt_choice);  break;        

        case "ScissorsScissors":
            case "PaperPaper":
                case "RockRock":  draw();  break;              
    
    }

}



function main(){

    r_div.addEventListener('click',function(){
        play ("Rock");
    })
    p_div.addEventListener('click',function(){
        play ("Paper");
    })
    s_div.addEventListener('click',function(){
        play ("Scissors");
    })
}


main();