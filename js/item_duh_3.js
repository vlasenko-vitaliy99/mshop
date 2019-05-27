var drum = "HOHNER Blues Band C";
var drum_price = 344;



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
	var item =  sessionStorage.getItem("item") + sessionStorage.getItem("num") + ") Губные гармошки: "+ drum +" .. "+drum_price + " грн; ";
	sessionStorage.setItem("item", item);

	var sum =parseInt(sessionStorage.getItem("basket"))+drum_price;
	sessionStorage.setItem("basket", sum+" грн");
	document.getElementById('bas').innerHTML=sessionStorage.getItem("basket")
}
document.getElementById("buy_item").onclick=add_to_basket;


function send_comment() {
	sessionStorage.setItem("countd4", 1);
	var aa = document.getElementById('name-a').value;
    var bb = document.getElementById('comment-b').value;
    var plus=parseInt(sessionStorage.getItem("switd4"))+1;
    sessionStorage.setItem("switd4", plus);

    if(sessionStorage.getItem("switd4")==1){
	sessionStorage.setItem("o1d4", aa+": - "+ bb);
    document.getElementById('otziv1').innerHTML=sessionStorage.getItem("o1d4");
	}
	if(sessionStorage.getItem("switd4")==2){
	sessionStorage.setItem("o2d4", aa+": - "+ bb);
    document.getElementById('otziv2').innerHTML=sessionStorage.getItem("o2d4");
    }
    if(sessionStorage.getItem("switd4")==3){
		sessionStorage.setItem("o3d4",aa+": - "+ bb);
    document.getElementById('otziv3').innerHTML=sessionStorage.getItem("o3d4");
    }
    if(sessionStorage.getItem("switd4")==4){
		sessionStorage.setItem("o4d4", aa+": - "+ bb);
    document.getElementById('otziv4').innerHTML=sessionStorage.getItem("o4d4");
    }

}
document.getElementById("add_commentard4").onclick=send_comment;

if(sessionStorage.getItem("countd4")!=1)
{
sessionStorage.setItem("o1d4", " ");
sessionStorage.setItem("o2d4", " ");
sessionStorage.setItem("o3d4", " ");
sessionStorage.setItem("o4d4", " ");
sessionStorage.setItem("switd4", 0);
}
document.getElementById('otziv1').innerHTML=sessionStorage.getItem("o1d4");
document.getElementById('otziv2').innerHTML=sessionStorage.getItem("o2d4");
document.getElementById('otziv3').innerHTML=sessionStorage.getItem("o3d4");
document.getElementById('otziv4').innerHTML=sessionStorage.getItem("o4d4");