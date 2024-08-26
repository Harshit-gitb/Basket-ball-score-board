let team1score = Number(document.getElementById('T1score').textContent)
let team2score = Number(document.getElementById('T2score').textContent)
document.getElementById("inca1").addEventListener('click',increment1a);
document.getElementById("inca2").addEventListener('click',increment2a);
document.getElementById("inca3").addEventListener('click',increment3a);
document.getElementById("incb1").addEventListener('click',increment1b);
document.getElementById("incb2").addEventListener('click',increment2b);
document.getElementById("incb3").addEventListener('click',increment3b);
document.getElementById("newGame").addEventListener('click',newgame);

team1score = 0;
function increment1a(){
    team1score  += 1
    document.getElementById('T1score').textContent = team1score;
}
function increment2a(){
    team1score  += 2
    document.getElementById('T1score').textContent = team1score;
}
function increment3a(){
    team1score  += 3
    document.getElementById('T1score').textContent = team1score;
}


team2score = 0;
function increment1b(){
    team2score  += 1
    document.getElementById('T2score').textContent = team2score;
}
function increment2b(){
    team2score  += 2
    document.getElementById('T2score').textContent = team2score;
}
function increment3b(){
    team2score  += 3
    document.getElementById('T2score').textContent = team2score;
}



function newgame(){
 team1score = 0;
 team2score = 0; 
 document.getElementById('T1score').textContent = team1score;
 document.getElementById('T2score').textContent = team2score;
 document.getElementById('T1score').innerText = 0;
 document.getElementById('T2score').innerText = 0;
}


