var Saldo=localStorage.getItem("saldo");
var uid=localStorage.getItem("UID");
if(localStorage.getItem("UID")>=10000){

}else{
	Saldo=10;
	var randomizer=Math.floor(Math.random() * 10000);
	uid=randomizer+10000;
	localStorage.setItem("UID", uid);
}
		
if(localStorage.getItem("UID")==0){
	Saldo=20;
}
		
localStorage.setItem("saldo", Saldo);
document.getElementById("saldo").innerHTML=Saldo;
document.getElementById("uid").innerHTML=uid;