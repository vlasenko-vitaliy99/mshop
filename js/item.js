var drum = "PDP PDZ522KT Z5 SERIES BLACK CHERRY";
var drum_price = 15289;



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

//корзина

function add_to_basket() {
	var num = parseInt(sessionStorage.getItem("num")) +1;
	sessionStorage.setItem("num", num);

	sessionStorage.setItem("c", 1);
	var item = sessionStorage.getItem("item")+sessionStorage.getItem("num") + ") Барабанная установка: "+  drum +" .. "+drum_price + " грн; ";
	sessionStorage.setItem("item", item);


	var sum =parseInt(sessionStorage.getItem("basket"))+drum_price;
	sessionStorage.setItem("basket", sum +" грн");
	document.getElementById('bas').innerHTML=sessionStorage.getItem("basket")
}
document.getElementById("buy_item").onclick=add_to_basket;


function send_comment() {
	sessionStorage.setItem("count", 1);
	var aa = document.getElementById('name-a').value;
    var bb = document.getElementById('comment-b').value;
    var plus=parseInt(sessionStorage.getItem("swit"))+1;
    sessionStorage.setItem("swit", plus);

    if(sessionStorage.getItem("swit")==1){
	sessionStorage.setItem("o1", aa+": - "+ bb);
    document.getElementById('otziv1').innerHTML=sessionStorage.getItem("o1");
	}
	if(sessionStorage.getItem("swit")==2){
	sessionStorage.setItem("o2", aa+": - "+ bb);
    document.getElementById('otziv2').innerHTML=sessionStorage.getItem("o2");
    }
    if(sessionStorage.getItem("swit")==3){
		sessionStorage.setItem("o3",aa+": - "+ bb);
    document.getElementById('otziv3').innerHTML=sessionStorage.getItem("o3");
    }
    if(sessionStorage.getItem("swit")==4){
		sessionStorage.setItem("o4", aa+": - "+ bb);
    document.getElementById('otziv4').innerHTML=sessionStorage.getItem("o4");
    }

}
document.getElementById("add_commentar").onclick=send_comment;

if(sessionStorage.getItem("count")!=1)
{
sessionStorage.setItem("o1", " ");
sessionStorage.setItem("o2", " ");
sessionStorage.setItem("o3", " ");
sessionStorage.setItem("o4", " ");
sessionStorage.setItem("swit", 0);
}
document.getElementById('otziv1').innerHTML=sessionStorage.getItem("o1");
document.getElementById('otziv2').innerHTML=sessionStorage.getItem("o2");
document.getElementById('otziv3').innerHTML=sessionStorage.getItem("o3");
document.getElementById('otziv4').innerHTML=sessionStorage.getItem("o4");
