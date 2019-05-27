var drum = "MAXTONE TCC27BNS";
var drum_price = 4410;



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
	var item = sessionStorage.getItem("item")+sessionStorage.getItem("num") + ") Кларнеты: "+  drum +" .. "+drum_price + " грн; ";
	sessionStorage.setItem("item", item);


	var sum =parseInt(sessionStorage.getItem("basket"))+drum_price;
	sessionStorage.setItem("basket", sum +" грн");
	document.getElementById('bas').innerHTML=sessionStorage.getItem("basket")
}
document.getElementById("buy_item").onclick=add_to_basket;


function send_comment() {
	sessionStorage.setItem("countd1", 1);
	var aa = document.getElementById('name-a').value;
    var bb = document.getElementById('comment-b').value;
    var plus=parseInt(sessionStorage.getItem("switd1"))+1;
    sessionStorage.setItem("switd1", plus);

    if(sessionStorage.getItem("switd1")==1){
	sessionStorage.setItem("o1d1", aa+": - "+ bb);
    document.getElementById('otziv1').innerHTML=sessionStorage.getItem("o1d1");
	}
	if(sessionStorage.getItem("switd1")==2){
	sessionStorage.setItem("o2d1", aa+": - "+ bb);
    document.getElementById('otziv2').innerHTML=sessionStorage.getItem("o2d1");
    }
    if(sessionStorage.getItem("switd1")==3){
		sessionStorage.setItem("o3d1",aa+": - "+ bb);
    document.getElementById('otziv3').innerHTML=sessionStorage.getItem("o3d1");
    }
    if(sessionStorage.getItem("switd1")==4){
		sessionStorage.setItem("o4d1", aa+": - "+ bb);
    document.getElementById('otziv4').innerHTML=sessionStorage.getItem("o4d1");
    }

}
document.getElementById("add_commentard1").onclick=send_comment;

if(sessionStorage.getItem("countd1")!=1)
{
sessionStorage.setItem("o1d1", " ");
sessionStorage.setItem("o2d1", " ");
sessionStorage.setItem("o3d1", " ");
sessionStorage.setItem("o4d1", " ");
sessionStorage.setItem("switd1", 0);
}
document.getElementById('otziv1').innerHTML=sessionStorage.getItem("o1d1");
document.getElementById('otziv2').innerHTML=sessionStorage.getItem("o2d1");
document.getElementById('otziv3').innerHTML=sessionStorage.getItem("o3d1");
document.getElementById('otziv4').innerHTML=sessionStorage.getItem("o4d1");