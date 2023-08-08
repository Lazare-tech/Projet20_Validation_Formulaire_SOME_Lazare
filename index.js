// Selection des cercles
const cercle_1=document.querySelector('.cercle_1');
const cercle_2=document.querySelector('.cercle_2');
const cercle_3=document.querySelector('.cercle_3')
// Selection images
const image_1=document.querySelector('.wizard-1');
const image_2=document.querySelector('.wizard-2');
const image_3=document.querySelector('.wizard-3')
const title=document.querySelector('h2')
// formmulaire
const form_1=document.querySelector('.form_one');
const form_2=document.querySelector('.form_two');
const form_3=document.querySelector('.form_three')
//bouton forward 
const forward2=document.querySelector('.forward2')
//bouton backward one
const backward1=document.querySelector('.backward1')
const backward2=document.querySelector('.backward2')
//
const c2=document.querySelector('.c2');
const c3=document.querySelector('.c3');
const c1=document.querySelector('.c1');
//fonction aparution page 1
// fonction bouton forward
document.getElementById("backward1").addEventListener("click",affichagePremierePage);
document.getElementById("firstPage").addEventListener("click",affichagePremierePage)
document.ge
function affichagePremierePage(){
    if(document.getElementById("backward1") || document.getElementById("firstPage")){
        //cercle couleur
        //
        c2.style.color="gainsboro"
        c3.style.color='gainsboro';

        image_1.style.display="block";
        image_2.style.display="none"
        image_3.style.display="none";
        // formualire
        form_1.style.display="block";
        form_2.style.display="none";
        form_3.style.display="none";  
    }
}
//fonction apuration de la page 2
// declaration des varibales
document.getElementById("suivant11").addEventListener("click",Suivant);
document.getElementById("suivant1").addEventListener("click",Suivant);
document.getElementById("backward2").addEventListener("click",Suivant);

function Suivant(){
    if(document.getElementById("suivant1") || document.getElementById("suivant11") || document.getElementById(backward2) ){
        c2.style.color="gray"
        c3.style.color='gainsboro';
        //
        image_1.style.display="none";
        image_2.style.display="block"
        image_3.style.display="none";
        // formualire
        form_1.style.display="none";
        form_2.style.display="block";
        form_3.style.display="none";
    }
}
//fonction apparution de la page 3
//declaration des variables
document.getElementById("cercle_3").addEventListener("click",affichageDernierePage)
document.getElementById("forward2").addEventListener("click",affichageDernierePage)
function affichageDernierePage(){
    if(document.getElementById("cercle_3") || document.getElementById("forward2")){
        // c1.style.color="black"
        c2.style.color="gray"
        c3.style.color="gray"
        image_1.style.display="none";
        image_2.style.display="none"
        image_3.style.display="block"
    // formulaire
    form_1.style.display="none";
    form_2.style.display="none";
    form_3.style.display="block";
        
    }
}

