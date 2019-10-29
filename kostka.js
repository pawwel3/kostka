window.onload=myFunction();
function myFunction() {


var liczba=new Array(5);
liczba[0]=new Array(8);
liczba[0]=["","","","","*","","","",""];
liczba[1]=new Array(8);
liczba[1]=["","","","*","","","","",""];
liczba[2]=new Array(8);
liczba[2]=["*","","","","*","","","","*"];
liczba[3]=new Array(8);
liczba[3]=["*","","*","","","","*","","*"];
liczba[4]=new Array(8);
liczba[4]=["*","","*","","*","","*","","*"];
liczba[5]=new Array(8);
liczba[5]=["*","","*","*","","*","*","","*"];
		
		var tresc_diva="";
		var j=Math.floor(Math.random()*6);
		liczba=liczba[j];
		
		
	
	for(i=0;i<=8;i++){
	element="licz"+i;
	/*alert(liczba[i]);*/
	tresc_diva = tresc_diva + '<div class="kropka" id="'+element+'">'+liczba[i]+'</div>';
		/*if(i==2||i==5)tresc_diva=tresc_diva+'<div style="clear:both;"></div>';*/
	
	}
	document.getElementById("kropka").innerHTML=tresc_diva;
	/*alert(tresc_diva);*/
	
	
	
	function stop(){
			clearInterval(time);
		}
	var j=0;
	const time = setInterval(function jeszcze_raz() {
		j++;
    
    myFunction();
	if(j=>10){
		stop();
	};
	

   
}, 300);
stop();
	
}	


