var p1=document.querySelector("#p1");
var p2= document.querySelector("#p2");
var resetbutton=document.querySelector("#reset");
var p1s= document.querySelector("#p1s");
var p2s= document.querySelector("#p2s");
var num=document.querySelector("input");
var final=document.querySelector("p span");
var body= document.querySelector("body");
var p1score=0;
var p2score=0;
var gameover = false;
var winningscore=5;
p1.addEventListener("click",function(){
	if(!gameover){
		p1score++;
		if(p1score===winningscore){
			p1s.classList.add("winner");
			body.classList.add("yo");
			gameover = true;
		}
	
	p1s.textContent = p1score;
	}
});
p2.addEventListener("click",function(){
	if(!gameover){
	p2score++;
	if(p2score===winningscore){
		p2s.classList.add("winner");
		body.classList.add("yes");
		gameover=true;
	}
	p2s.textContent = p2score;
}
});

resetbutton.addEventListener("click",function(){
	reset();
});
	
function reset(){
	p1score=0;
	p2score=0;
	p1s.textContent=0;
	p2s.textContent=0;
	p1s.classList.remove("winner");
	body.classList.remove("yo");
	p2s.classList.remove("winner");
    body.classList.remove("yes");
	gameover=false;
}
num.addEventListener("change",function(){
final.textContent = this.value;
winningscore =Number(this.value);
reset();
});