var drum = "YAMAHA GIGMAKER";
var drum_price = 22002;



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
	sessionStorage.setItem("count2", 1);
	var aa = document.getElementById('name-a').value;
    var bb = document.getElementById('comment-b').value;
    var plus=parseInt(sessionStorage.getItem("swit2"))+1;
    sessionStorage.setItem("swit2", plus);

    if(sessionStorage.getItem("swit2")==1){
	sessionStorage.setItem("o12", aa+": - "+ bb);
    document.getElementById('otziv1').innerHTML=sessionStorage.getItem("o12");
	}
	if(sessionStorage.getItem("swit2")==2){
	sessionStorage.setItem("o22", aa+": - "+ bb);
    document.getElementById('otziv2').innerHTML=sessionStorage.getItem("o22");
    }
    if(sessionStorage.getItem("swit2")==3){
		sessionStorage.setItem("o32",aa+": - "+ bb);
    document.getElementById('otziv3').innerHTML=sessionStorage.getItem("o32");
    }
    if(sessionStorage.getItem("swit2")==4){
		sessionStorage.setItem("o42", aa+": - "+ bb);
    document.getElementById('otziv4').innerHTML=sessionStorage.getItem("o42");
    }

}
document.getElementById("add_commentar2").onclick=send_comment;

if(sessionStorage.getItem("count2")!=1)
{
sessionStorage.setItem("o12", " ");
sessionStorage.setItem("o22", " ");
sessionStorage.setItem("o32", " ");
sessionStorage.setItem("o42", " ");
sessionStorage.setItem("swit2", 0);
}
document.getElementById('otziv1').innerHTML=sessionStorage.getItem("o12");
document.getElementById('otziv2').innerHTML=sessionStorage.getItem("o22");
document.getElementById('otziv3').innerHTML=sessionStorage.getItem("o32");
document.getElementById('otziv4').innerHTML=sessionStorage.getItem("o42");