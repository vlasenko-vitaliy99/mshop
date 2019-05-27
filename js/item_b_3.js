var drum = "ALESIS DM LITE KIT";
var drum_price = 10352;



if(sessionStorage.getItem("c")!=1)
{
	sessionStorage.setItem("num", 0);
	sessionStorage.setItem("basket", 0);
	sessionStorage.setItem("item", "");
	sessionStorage.setItem("p_item", "");

}
document.getElementById('bas').innerHTML=sessionStorage.getItem("basket")

document.getElementById('d11').innerHTML=drum;
document.getElementById('p_d11').innerHTML=drum_price+" грн";

function add_to_basket() {
	var num = parseInt(sessionStorage.getItem("num")) +1;
	sessionStorage.setItem("num", num);

	sessionStorage.setItem("c", 1);
	var item =  sessionStorage.getItem("item") + sessionStorage.getItem("num") + ")  Электронные ударные: "+ drum +" .. "+drum_price + " грн; ";
	sessionStorage.setItem("item", item);

	var sum =parseInt(sessionStorage.getItem("basket"))+drum_price;
	sessionStorage.setItem("basket", sum+" грн");
	document.getElementById('bas').innerHTML=sessionStorage.getItem("basket")
}
document.getElementById("buy_item").onclick=add_to_basket;


function send_comment() {
	localStorage.setItem("count3", 1);
	var aa = document.getElementById('name-a').value;
    var bb = document.getElementById('comment-b').value;
    var plus=parseInt(sessionStorage.getItem("swit3"))+1;
    sessionStorage.setItem("swit3", plus);

    if(sessionStorage.getItem("swit3")==1){
	sessionStorage.setItem("o13", aa+": - "+ bb);
    document.getElementById('otziv1').innerHTML=sessionStorage.getItem("o13");
	}
	if(sessionStorage.getItem("swit3")==2){
	sessionStorage.setItem("o23", aa+": - "+ bb);
    document.getElementById('otziv2').innerHTML=sessionStorage.getItem("o23");
    }
    if(sessionStorage.getItem("swit3")==3){
		sessionStorage.setItem("o33",aa+": - "+ bb);
    document.getElementById('otziv3').innerHTML=sessionStorage.getItem("o33");
    }
    if(sessionStorage.getItem("swit3")==4){
		sessionStorage.setItem("o4", aa+": - "+ bb);
    document.getElementById('otziv4').innerHTML=sessionStorage.getItem("o43");
    }

}
document.getElementById("add_commentar3").onclick=send_comment;

if(sessionStorage.getItem("count3")!=1)
{
sessionStorage.setItem("o13", " ");
sessionStorage.setItem("o23", " ");
sessionStorage.setItem("o33", " ");
sessionStorage.setItem("o43", " ");
sessionStorage.setItem("swit3", 0);
}
document.getElementById('otziv1').innerHTML=sessionStorage.getItem("o13");
document.getElementById('otziv2').innerHTML=sessionStorage.getItem("o23");
document.getElementById('otziv3').innerHTML=sessionStorage.getItem("o33");
document.getElementById('otziv4').innerHTML=localStorage.getItem("o43");