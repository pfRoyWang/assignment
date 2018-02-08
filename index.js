var imgs = document.getElementById("ava1img");
document.getElementById("ava1").addEventListener("click",function(){
    imgs.src="img/ava1.png";
});
document.getElementById("ava2").addEventListener("click",function(){
    imgs.src="img/ava2.png";
});
document.getElementById("menub").addEventListener("click",function(){
    document.getElementById("menu").style.right="0px";
});
var num1=0;
document.getElementById("topb").addEventListener("click",function(){
    num1 = num1+7;
    document.getElementById("center").style.bottom =num1+"%";
});
document.getElementById("botb").addEventListener("click",function(){
    num1 = num1-7;
    document.getElementById("center").style.bottom =num1+"%";
});
document.getElementById("rightb").addEventListener("click",function(){
    num1 = num1+7;
    document.getElementById("center").style.left =num1+"%";
});
document.getElementById("leftb").addEventListener("click",function(){
    num1 = num1-7;
    document.getElementById("center").style.left =num1+"%";
});
document.getElementById("+").addEventListener("click",function(){
    var num2 = 30;
    num1 = num1+1;   
    document.getElementById("center").style.height =num2+num1+"%";
});
document.getElementById("-").addEventListener("click",function(){
    var num2 = 30;
    num1 = num1-1;   
    document.getElementById("center").style.height =num2+num1+"%";
});
document.getElementById("but1").addEventListener("click",function(){
   document.getElementById("but1").style.display="block";
});
document.getElementById("but2").addEventListener("click",function(){
   document.getElementById("but2").style.display="block";
});
document.getElementById("but3").addEventListener("click",function(){
   document.getElementById("but3").style.display="block";
});