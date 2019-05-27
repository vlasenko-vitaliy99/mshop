var drum = "CORT CR100 (BK)";
var drum_price = 6639;



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
	var item =  sessionStorage.getItem("item") + sessionStorage.getItem("num") + ") Электрогитары: "+ drum +" .. "+drum_price + " грн; ";
	sessionStorage.setItem("item", item);

	var sum =parseInt(sessionStorage.getItem("basket"))+drum_price;
	sessionStorage.setItem("basket", sum+" грн");
	document.getElementById('bas').innerHTML=sessionStorage.getItem("basket")
}
document.getElementById("buy_item").onclick=add_to_basket;



function send_comment() {
	sessionStorage.setItem("countg3", 1);
	var aa = document.getElementById('name-a').value;
    var bb = document.getElementById('comment-b').value;
    var plus=parseInt(sessionStorage.getItem("switg3"))+1;
    sessionStorage.setItem("switg3", plus);

    if(sessionStorage.getItem("switg3")==1){
	sessionStorage.setItem("o1g3", aa+": - "+ bb);
    document.getElementById('otziv1').innerHTML=sessionStorage.getItem("o1g3");
	}
	if(sessionStorage.getItem("switg3")==2){
	sessionStorage.setItem("o2g3", aa+": - "+ bb);
    document.getElementById('otziv2').innerHTML=sessionStorage.getItem("o2g3");
    }
    if(sessionStorage.getItem("switg3")==3){
		sessionStorage.setItem("o3g3",aa+": - "+ bb);
    document.getElementById('otziv3').innerHTML=sessionStorage.getItem("o3g3");
    }
    if(sessionStorage.getItem("switg3")==4){
		sessionStorage.setItem("o4g3", aa+": - "+ bb);
    document.getElementById('otziv4').innerHTML=sessionStorage.getItem("o4g3");
    }

}
document.getElementById("add_commentarg3").onclick=send_comment;

if(sessionStorage.getItem("countg3")!=1)
{
sessionStorage.setItem("o1g3", " ");
sessionStorage.setItem("o2g3", " ");
sessionStorage.setItem("o3g3", " ");
sessionStorage.setItem("o4g3", " ");
sessionStorage.setItem("switg3", 0);
}
document.getElementById('otziv1').innerHTML=sessionStorage.getItem("o1g3");
document.getElementById('otziv2').innerHTML=sessionStorage.getItem("o2g3");
document.getElementById('otziv3').innerHTML=sessionStorage.getItem("o3g3");
document.getElementById('otziv4').innerHTML=sessionStorage.getItem("o4g3");
