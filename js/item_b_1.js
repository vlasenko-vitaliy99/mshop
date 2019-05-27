var drum = "MAXTONE MXC3005";
var drum_price = 10570;



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
	var item =  sessionStorage.getItem("item") + sessionStorage.getItem("num") + ") Барабанная установка: "+ drum +" .. "+drum_price + " грн; ";
	sessionStorage.setItem("item", item);

	var sum =parseInt(sessionStorage.getItem("basket"))+drum_price;
	sessionStorage.setItem("basket", sum+" грн");
	document.getElementById('bas').innerHTML=sessionStorage.getItem("basket")
}
document.getElementById("buy_item").onclick=add_to_basket;


function send_comment() {
	sessionStorage.setItem("count1", 1);
	var aa = document.getElementById('name-a').value;
    var bb = document.getElementById('comment-b').value;
    var plus=parseInt(sessionStorage.getItem("swit"))+1;
    sessionStorage.setItem("swit", plus);

    if(sessionStorage.getItem("swit")==1){
	sessionStorage.setItem("o11", aa+": - "+ bb);
    document.getElementById('otziv1').innerHTML=sessionStorage.getItem("o11");
	}
	if(sessionStorage.getItem("swit")==2){
	sessionStorage.setItem("o21", aa+": - "+ bb);
    document.getElementById('otziv2').innerHTML=sessionStorage.getItem("o21");
    }
    if(sessionStorage.getItem("swit")==3){
		sessionStorage.setItem("o31",aa+": - "+ bb);
    document.getElementById('otziv3').innerHTML=sessionStorage.getItem("o31");
    }
    if(sessionStorage.getItem("swit")==4){
		sessionStorage.setItem("o41", aa+": - "+ bb);
    document.getElementById('otziv4').innerHTML=sessionStorage.getItem("o41");
    }

}
document.getElementById("add_commentar1").onclick=send_comment;

if(sessionStorage.getItem("count1")!=1)
{
sessionStorage.setItem("o11", " ");
sessionStorage.setItem("o21", " ");
sessionStorage.setItem("o31", " ");
sessionStorage.setItem("o41", " ");
sessionStorage.setItem("swit", 0);
}
document.getElementById('otziv1').innerHTML=sessionStorage.getItem("o11");
document.getElementById('otziv2').innerHTML=sessionStorage.getItem("o21");
document.getElementById('otziv3').innerHTML=sessionStorage.getItem("o31");
document.getElementById('otziv4').innerHTML=sessionStorage.getItem("o41");