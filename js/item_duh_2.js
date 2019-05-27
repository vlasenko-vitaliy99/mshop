var drum = "MAXTONE SXC53 A/L";
var drum_price = 12852;



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
	var item =  sessionStorage.getItem("item") + sessionStorage.getItem("num") + ") Саксофоны: "+ drum +" .. "+drum_price + " грн; ";
	sessionStorage.setItem("item", item);

	var sum =parseInt(sessionStorage.getItem("basket"))+drum_price;
	sessionStorage.setItem("basket", sum+" грн");
	document.getElementById('bas').innerHTML=sessionStorage.getItem("basket")
}
document.getElementById("buy_item").onclick=add_to_basket;


function send_comment() {
	sessionStorage.setItem("countd3", 1);
	var aa = document.getElementById('name-a').value;
    var bb = document.getElementById('comment-b').value;
    var plus=parseInt(sessionStorage.getItem("switd3"))+1;
    sessionStorage.setItem("switd3", plus);

    if(sessionStorage.getItem("switd3")==1){
	sessionStorage.setItem("o1d3", aa+": - "+ bb);
    document.getElementById('otziv1').innerHTML=sessionStorage.getItem("o1d3");
	}
	if(sessionStorage.getItem("switd3")==2){
	sessionStorage.setItem("o2d3", aa+": - "+ bb);
    document.getElementById('otziv2').innerHTML=sessionStorage.getItem("o2d3");
    }
    if(sessionStorage.getItem("switd3")==3){
		sessionStorage.setItem("o3d3",aa+": - "+ bb);
    document.getElementById('otziv3').innerHTML=sessionStorage.getItem("o3d3");
    }
    if(sessionStorage.getItem("switd3")==4){
		sessionStorage.setItem("o4d3", aa+": - "+ bb);
    document.getElementById('otziv4').innerHTML=sessionStorage.getItem("o4d3");
    }

}
document.getElementById("add_commentard3").onclick=send_comment;

if(sessionStorage.getItem("countd3")!=1)
{
sessionStorage.setItem("o1d3", " ");
sessionStorage.setItem("o2d3", " ");
sessionStorage.setItem("o3d3", " ");
sessionStorage.setItem("o4d3", " ");
sessionStorage.setItem("switd3", 0);
}
document.getElementById('otziv1').innerHTML=sessionStorage.getItem("o1d3");
document.getElementById('otziv2').innerHTML=sessionStorage.getItem("o2d3");
document.getElementById('otziv3').innerHTML=sessionStorage.getItem("o3d3");
document.getElementById('otziv4').innerHTML=sessionStorage.getItem("o4d3");