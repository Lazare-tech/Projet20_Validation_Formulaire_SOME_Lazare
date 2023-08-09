// Selection des cercles
const cercle_1 = document.querySelector('.cercle_1');
const cercle_2=document.querySelector('.cercle_2')
// Selection images
const image_1 = document.querySelector('.wizard-1');

const title = document.querySelector('h2')
// formmulaire
const form_1 = document.querySelector('.form_one');
//bouton forward 
const forward2 = document.querySelector('.forward2')
//bouton backward one
const backward1 = document.querySelector('.backward1')
const backward2 = document.querySelector('.backward2')



//
const c2 = document.querySelector('.c2');
const c3 = document.querySelector('.c3');
const c1 = document.querySelector('.c1');
//fonction aparution page 1


//fonction apuration de la page 2
// declaration des varibales
// document.getElementById("suivant1").addEventListener("click", Suivant);

const left_v = document.querySelector(".flex-item-left_v")
const right_v = document.querySelector(".flex-item-right_v")

const left_email = document.querySelector(".flex-item-left_email")
const right_phone = document.querySelector(".flex-item-right_phone")

const left_age = document.querySelector(".flex-item-left_age")
const left_select= document.querySelector(".flex-item-left_select")
//declaration des variables du formulaire
let first_name = document.getElementById("firstName").value
let last_name = document.getElementById("lastName").value
let email = document.getElementById("email").value
let phone_number = document.getElementById("PhoneNumber").value
let age = document.getElementById("Age").value
let select=document.getElementById('selected').value

//
let email_regrex= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let tel_regrex=/[0-9]{8}/
document.getElementById("suivant11").addEventListener("click",
                                        function(event)
 {
    event.preventDefault()
    if (document.getElementById("suivant1") || document.getElementById("suivant11")  ) {
        //verifications des inputs du formulaire
        if (first_name == "") {
            // alert("oupsss")
            left_v.innerHTML = "<span style='color:red;'>Champ firstName vide!</span>";

            left_v.style.display = "block";
            // in1.style.backgroundColor = "rgb(197, 170, 170)"

        }else if(window.scrollX<767){
            
        }
        if (last_name == "") {
            right_v.innerHTML = "<span style='color:red;'>Champ lastName vide!</span>";

            right_v.style.display = "block";
            // in2.style.backgroundColor = "rgb(197, 170, 170)"
                     
      
        }
        if (email == "" ) {
            left_email.innerHTML = "<span style='color:red;'>Champ Email vide!</span>";

            left_email.style.display = "block";
            // ine.style.backgroundColor = "rgb(197, 170, 170)"
                     
      
        }else if(email!=email_regrex){
            right_phone.innerHTML = "<span style='color:red;'>Email invalid!</span>";

            right_phone.style.display = "block";
           
        }
        if (phone_number == "") {
            right_phone.innerHTML = "<span style='color:red;'>Champ telephone Vide</span>";

            right_phone.style.display = "block";
            // inp.style.backgroundColor = "rgb(197, 170, 170)"
                     
      
        }else if(phone_number !=tel_regrex){
            right_phone.innerHTML = "<span style='color:red;'>Numero incorecte!</span>";

            right_phone.style.display = "block";
          
            
        }
        if (age == "") {
            left_age.innerHTML = "<span style='color:red;'>Champ age vide!</span>";

            left_age.style.display = "block";
            // ina.style.backgroundColor = "rgb(197, 170, 170)"
                     
      
        } else if( age<=15){
            left_age.innerHTML = "<span style='color:red;'>Age minimum est 15ans!</span>";

            left_age.style.display = "block";
            
            
        }else if(age !=/^\d+$/){
            left_age.innerHTML = "<span style='color:red;'>Veuillez saisir un chifre!</span>";

            left_age.style.display = "block";
            
            
        }
        if(select == "Your country"){
            left_select.innerHTML="<span style='color:red;'>Veuillez choisir une valeur!</span>";
            left_select.style.display = "block";
            console.log("dd");
            console.log(select);

            
        }
        if(first_name !="" && last_name !="" && email !="" && phone_number !="" && age !=="" ){
                            c2.style.color = "gray"
                c3.style.color = 'gainsboro';
                //
                image_1.style.display = "none";
               
   
        }
    }
    
    });

