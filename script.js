function slide1(){
    document.getElementById("slide2").style.display="none";
    document.getElementById("slide3").style.display="none";
    document.getElementById("slide1").style.display="block";
}
function slide2(){
    document.getElementById("slide1").style.display="none";
    document.getElementById("slide3").style.display="none";
    document.getElementById("slide2").style.display="block";
}
function slide3(){
    document.getElementById("slide1").style.display="none";
    document.getElementById("slide2").style.display="none";
    document.getElementById("slide3").style.display="block";
}

function moon(){
    document.getElementById("mars").style.display="none";
    document.getElementById("europa").style.display="none";
    document.getElementById("titan").style.display="none";
    document.getElementById("moon").style.display="contents";
}
function mars(){
    document.getElementById("moon").style.display="none";    
    document.getElementById("europa").style.display="none";
    document.getElementById("titan").style.display="none";
    document.getElementById("mars").style.display="contents";
}
function europa(){
    document.getElementById("moon").style.display="none";    
    document.getElementById("mars").style.display="none";
    document.getElementById("titan").style.display="none";
    document.getElementById("europa").style.display="contents";
}
function titan(){
    document.getElementById("moon").style.display="none";    
    document.getElementById("mars").style.display="none";
    document.getElementById("europa").style.display="none";
    document.getElementById("titan").style.display="contents";
}

function douglas(){
    document.getElementById("mark").style.display="none";
    document.getElementById("victor").style.display="none";
    document.getElementById("ansari").style.display="none";
    document.getElementById("douglas").style.display="block";
}
function mark(){
    document.getElementById("douglas").style.display="none";
    document.getElementById("victor").style.display="none";
    document.getElementById("ansari").style.display="none";
    document.getElementById("mark").style.display="block";
}
function victor(){
    document.getElementById("douglas").style.display="none";
    document.getElementById("mark").style.display="none";
    document.getElementById("ansari").style.display="none";
    document.getElementById("victor").style.display="block";
}
function ansari(){
    document.getElementById("douglas").style.display="none";
    document.getElementById("mark").style.display="none";
    document.getElementById("victor").style.display="none";
    document.getElementById("ansari").style.display="block";
}