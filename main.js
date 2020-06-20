let takip = false;
let csonuc ;

function ac(){
    document.getElementById("a").value = "";
    csonuc = "";
}
function c(){
    csonuc =  document.getElementById("a").value;
    let a = document.getElementById("a").value = "";
    takip = true;
}
function sil(){
    let a = document.getElementById("a").value;
    let b = a.length;
    let c = a.substring(0,b-1);
    document.getElementById("a").value = c;
}
function bol(){
    let a = document.getElementById("a").value += "/";
}
function dokuz(){
    let a = document.getElementById("a").value += "9";
}
function sekiz(){
    let a = document.getElementById("a").value += "8";
}
function yedi(){
    let a = document.getElementById("a").value += "7";
}
function carp(){
    let a = document.getElementById("a").value += "*";
}
function alti(){
    let a = document.getElementById("a").value += "6";
}
function bes(){
    let a = document.getElementById("a").value += "5";
}
function dort(){
    let a = document.getElementById("a").value += "4";
}
function arti(){
    let a = document.getElementById("a").value += "+";
}
function uc(){
    let a = document.getElementById("a").value += "3";
}
function iki(){
    let a = document.getElementById("a").value += "2";
}
function bir(){
    let a = document.getElementById("a").value += "1";
}
function eksi(){
    let a = document.getElementById("a").value += "-";
}
function sifir(){
    let a = document.getElementById("a").value += "0";
}
function solp(){
    let a = document.getElementById("a").value += "(";
}
function sagp(){
    let a = document.getElementById("a").value += ")";
}
function esit(){
    let a;
    if(takip){
        let d = csonuc.length;
        let c = csonuc.substring(d-1,d);
        if( c =="+" ||c=="*"||c=="/" || c=="-"){
            c = csonuc.substring(0,d-1);
            a = c + document.getElementById("a").value;
        }else{
            a = csonuc + document.getElementById("a").value;
        }
    }else{
         a = document.getElementById("a").value ;
    }
    let b = eval(a);
    document.getElementById("a").value =b;
    takip = false;
}

