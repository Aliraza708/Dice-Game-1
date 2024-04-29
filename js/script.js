//const drawBtn=document.querySelector('#btn');
var drawCircle=document.querySelector('#draw');
var diceImg=document.querySelector('#diceImg');
var soundAnimation=document.querySelector('#sound');

var resultGame=document.querySelector('#result1');
var userInput=document.querySelector('#userInput');
var drawBtn=document.querySelector('#gameBtn');

var user_number = document.getElementById("user_number");
var result = document.getElementById("result");
var info_box_result = document.getElementById("info_box_result");
var total = document.getElementById("total");
var win  = document.getElementById("win");
var loss = document.getElementById("loss");
var count = 10;
var won = 0;
var losted = 0;

var drawnNumber=0;

drawBtn.addEventListener('click', function(){
	diceImg.classList.add('diceAnimation');
	drawCircle.classList.add('appear');

	soundAnimation.play();

	drawBtn.style.display='none';



	setTimeout(function(){
		drawnNumber=randomNumber(1,6);
		diceImg.setAttribute('src', 'img/'+drawnNumber+'.png');
		console.log(diceImg);
		drawCircle.textContent=drawnNumber;

		drawBtn.style.display='inline-block';

		diceImg.classList.remove('diceAnimation');
		drawCircle.classList.remove('appear');

		game(drawnNumber);
	},1750)
})

function randomNumber(min, max){
	total.innerText = --count;
	min=Math.ceil(min);
	max=Math.floor(max);
	return Math.floor(Math.random()* (max-min+1)) + min;
	  
}

function game(num){
	user_number.innerText = userInput.value;
	 var userValue=userInput.value;	
		if(num == userValue){ 
	     win.innerText = ++won
		result.innerHTML = "You win ";
		info_box_result.style.background = "green";
	}
	else{
		loss.innerText = ++losted
		result.innerHTML = "You loss"
		info_box_result.style.background ="red"
	}
	if(count == 0){
		if(won >= 3){
			resultGame.innerText = "Congration ! You won ";
			resultGame.style.color = "green"
		
	  
		  }else{
			resultGame.innerText="Sorry ! you loss   Try again";
			resultGame.style.color = "red"
			
		
		  }
		  count = 10;
		  won = 0;
		  losted = 0;
		  

	total.innerText = count;
	win.innerText = won;
	loss.innerText =losted;
	
	 }
}

    
 