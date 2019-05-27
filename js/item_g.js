var drum = "CORT AF580 (NAT)";
var drum_price = 3445;



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
	var item = sessionStorage.getItem("item")+sessionStorage.getItem("num") + ") Акустические гитары: "+  drum +" .. "+drum_price + " грн; ";
	sessionStorage.setItem("item", item);


	var sum =parseInt(sessionStorage.getItem("basket"))+drum_price;
	sessionStorage.setItem("basket", sum +" грн");
	document.getElementById('bas').innerHTML=sessionStorage.getItem("basket")
}
document.getElementById("buy_item").onclick=add_to_basket;



function send_comment() {
	sessionStorage.setItem("countg1", 1);
	var aa = document.getElementById('name-a').value;
    var bb = document.getElementById('comment-b').value;
    var plus=parseInt(sessionStorage.getItem("switg1"))+1;
    sessionStorage.setItem("switg1", plus);

    if(sessionStorage.getItem("switg1")==1){
	sessionStorage.setItem("o1g1", aa+": - "+ bb);
    document.getElementById('otziv1').innerHTML=sessionStorage.getItem("o1g1");
	}
	if(sessionStorage.getItem("switg1")==2){
	sessionStorage.setItem("o2g1", aa+": - "+ bb);
    document.getElementById('otziv2').innerHTML=sessionStorage.getItem("o2g1");
    }
    if(sessionStorage.getItem("switg1")==3){
		sessionStorage.setItem("o3g1",aa+": - "+ bb);
    document.getElementById('otziv3').innerHTML=sessionStorage.getItem("o3g1");
    }
    if(sessionStorage.getItem("switg1")==4){
		sessionStorage.setItem("o4g1", aa+": - "+ bb);
    document.getElementById('otziv4').innerHTML=sessionStorage.getItem("o4g1");
    }

}
document.getElementById("add_commentarg1").onclick=send_comment;

if(sessionStorage.getItem("countg1")!=1)
{
sessionStorage.setItem("o1g1", " ");
sessionStorage.setItem("o2g1", " ");
sessionStorage.setItem("o3g1", " ");
sessionStorage.setItem("o4g1", " ");
sessionStorage.setItem("switg1", 0);
}
document.getElementById('otziv1').innerHTML=sessionStorage.getItem("o1g1");
document.getElementById('otziv2').innerHTML=sessionStorage.getItem("o2g1");
document.getElementById('otziv3').innerHTML=sessionStorage.getItem("o3g1");
document.getElementById('otziv4').innerHTML=sessionStorage.getItem("o4g1");
