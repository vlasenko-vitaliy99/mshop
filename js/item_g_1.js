var drum = "CORT AD880CE (BK)";
var drum_price = 5439;



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
	var item =  sessionStorage.getItem("item") + sessionStorage.getItem("num") + ") Электро-акустические гитары: "+ drum +" .. "+drum_price + " грн; ";
	sessionStorage.setItem("item", item);

	var sum =parseInt(sessionStorage.getItem("basket"))+drum_price;
	sessionStorage.setItem("basket", sum+" грн");
	document.getElementById('bas').innerHTML=sessionStorage.getItem("basket")
}
document.getElementById("buy_item").onclick=add_to_basket;



function send_comment() {
	sessionStorage.setItem("countg2", 1);
	var aa = document.getElementById('name-a').value;
    var bb = document.getElementById('comment-b').value;
    var plus=parseInt(sessionStorage.getItem("switg2"))+1;
    sessionStorage.setItem("switg2", plus);

    if(sessionStorage.getItem("switg2")==1){
	sessionStorage.setItem("o1g2", aa+": - "+ bb);
    document.getElementById('otziv1').innerHTML=sessionStorage.getItem("o1g2");
	}
	if(sessionStorage.getItem("switg2")==2){
	sessionStorage.setItem("o2g2", aa+": - "+ bb);
    document.getElementById('otziv2').innerHTML=sessionStorage.getItem("o2g2");
    }
    if(sessionStorage.getItem("switg2")==3){
		sessionStorage.setItem("o3g2",aa+": - "+ bb);
    document.getElementById('otziv3').innerHTML=sessionStorage.getItem("o3g2");
    }
    if(sessionStorage.getItem("switg2")==4){
		sessionStorage.setItem("o4g2", aa+": - "+ bb);
    document.getElementById('otziv4').innerHTML=sessionStorage.getItem("o4g2");
    }

}
document.getElementById("add_commentarg2").onclick=send_comment;

if(sessionStorage.getItem("countg2")!=1)
{
sessionStorage.setItem("o1g2", " ");
sessionStorage.setItem("o2g2", " ");
sessionStorage.setItem("o3g2", " ");
sessionStorage.setItem("o4g2", " ");
sessionStorage.setItem("switg2", 0);
}
document.getElementById('otziv1').innerHTML=sessionStorage.getItem("o1g2");
document.getElementById('otziv2').innerHTML=sessionStorage.getItem("o2g2");
document.getElementById('otziv3').innerHTML=sessionStorage.getItem("o3g2");
document.getElementById('otziv4').innerHTML=sessionStorage.getItem("o4g2");
