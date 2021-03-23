//Declaration des variables par deux methodes
//1er methode
//let zeed=document.body.lastElementChild.previousElementSibling.firstElementChild;
//let na9es=document.body.lastElementChild.previousElementSibling.lastElementChild;
//Declaration de resul par deux manières
//let resul=Number(document.body.lastElementChild.previousElementSibling.firstElementChild.nextElementSibling.innerHTML);
//let resul=Number(document.body.lastElementChild.previousElementSibling.lastElementChild.previousElementSibling.innerHTML);
//2eme methode
//let zeed=document.getElementById("zeed");
//let na9es=document.getElementById("na9es");
//let resul=Number(document.getElementById("resultat").innerHTML);
zeed.addEventListener("click",function(){
    resul++;
    document.getElementById("resultat").innerHTML=resul;
})
na9es.addEventListener("click",function(){
    resul--; 
    if (resul<0){
        resul=0;
    }
        document.getElementById("resultat").innerHTML=resul;
    
})
