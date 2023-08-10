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




//fonction apuration de la page 2
// declaration des varibales
// document.getElementById("suivant1").addEventListener("click", Suivant);

// const left_v = document.querySelector(".flex-item-left_v")
// const right_v = document.querySelector(".flex-item-right_v")

// const left_email = document.querySelector(".flex-item-left_email")
// const right_phone = document.querySelector(".flex-item-right_phone")

// const left_age = document.querySelector(".flex-item-left_age")
// const left_select= document.querySelector(".flex-item-left_select")
// //declaration des variables du formulaire
// let first_name = document.getElementById("firstName").value
// let last_name = document.getElementById("lastName").value
// let email = document.getElementById("email").value
// let phone_number = document.getElementById("PhoneNumber").value
// let age = document.getElementById("Age").value
// let select=document.getElementById('selected').value

let email_regrex= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


// let suivant11=document.getElementById("suivant11")
// suivant11.addEventListener("click",
//                                         (event) =>{
 
//     // if (document.getElementById("suivant1") || document.getElementById("suivant11")  ) {
//         //verifications des inputs du formulaire

//         if (first_name == "") {
//             event.preventDefault()

//             // alert("oupsss")
//             left_v.innerHTML = "<span style='color:red;'>Champ firstName vide!</span>";

//             left_v.style.display = "block";
//             // in1.style.backgroundColor = "rgb(197, 170, 170)"

//         }else if(window.scrollX<767){
            
//         }
//         if (last_name == "") {
//             right_v.innerHTML = "<span style='color:red;'>Champ lastName vide!</span>";

//             right_v.style.display = "block";
//             // in2.style.backgroundColor = "rgb(197, 170, 170)"
                     
      
//         }
//         if (email == "" ) {
//             left_email.innerHTML = "<span style='color:red;'>Champ Email vide!</span>";

//             left_email.style.display = "block";
//             // ine.style.backgroundColor = "rgb(197, 170, 170)"
                     
      
//         }else if(email!=email_regrex){
//             right_phone.innerHTML = "<span style='color:red;'>Email invalid!</span>";

//             right_phone.style.display = "block";
           
//         }
//         if (phone_number == "") {
//             right_phone.innerHTML = "<span style='color:red;'>Champ telephone Vide</span>";

//             right_phone.style.display = "block";
//             // inp.style.backgroundColor = "rgb(197, 170, 170)"
                     
      
//         }else if(phone_number !=tel_regrex){
//             right_phone.innerHTML = "<span style='color:red;'>Numero incorecte!</span>";

//             right_phone.style.display = "block";
          
            
//         }
//         if (age == "") {
//             left_age.innerHTML = "<span style='color:red;'>Champ age vide!</span>";

//             left_age.style.display = "block";
//             // ina.style.backgroundColor = "rgb(197, 170, 170)"
                     
      
//         } else if( age<=15){
//             left_age.innerHTML = "<span style='color:red;'>Age minimum est 15ans!</span>";

//             left_age.style.display = "block";
            
            
//         }else if(age !=/^\d+$/){
//             left_age.innerHTML = "<span style='color:red;'>Veuillez saisir un chifre!</span>";

//             left_age.style.display = "block";
            
            
//         }
//         if(select == "Your country"){
//             left_select.innerHTML="<span style='color:red;'>Veuillez choisir une valeur!</span>";
//             left_select.style.display = "block";
//             console.log("dd");
//             console.log(select);

            
//         }
//         if(first_name !="" && last_name !="" && email !="" && phone_number !="" && age !=="" ){
//                             c2.style.color = "gray"
//                 c3.style.color = 'gainsboro';
//                 //
//                 image_1.style.display = "none";
               
   
//         }
//     }
// }
    
//       );


let id = (id) => document.getElementById(id);
let formClass= (formClass)  => document.getElementsByClassName(formClass)
let submit= document.getElementById("suivant11");
//champ formulaire
let  first_name= id("firstName"),
    last_name = id ("lastName"),
    email = id("email"),
    phone_number = id("PhoneNumber"),
    age= id ("Age"),    
    choix = id("selected"),
    form= id("form"),
    errorMessage= formClass("error"),
    error_phone= formClass("error_phone"),
    phoneMessage= formClass("error"),

    ageMessage= formClass("error"),
    errorMessage_= formClass("error_")

suivant11.addEventListener("click", (e) => {
    e.preventDefault()
    invalForm(first_name,0,"le champ ne doit pas etre vide","sssss")
    invalForm(last_name,1,"le champ ne doit pas etre vide")
    invalForm(email,2,"le champ ne doit pas etre vide")
    invalForm(phone_number,3,"le champ ne doit pas etre vide")
    invalForm(age,4,"le champ ne doit pas etre vide")
    invalForm(choix,5,"le champ ne doit pas etre vide")
    // invalForm(email,6,"")


});
// submit.adfunction emailFunction(){
//     em=email.value
//     console.log(em);
//     }
submit.addEventListener("click",() =>{
   
})
let emailMessage=document.querySelector(".error_email")
let first_names=document.getElementById("firstName")
let phoneMessages=document.querySelector(".error_phone")
let ageMessages=document.querySelector(".error_age")
let firstnameMessage=document.querySelector(".error_firstname")
let lastnameMessage=document.querySelector(".error_lastname")

let selecMessage=document.querySelector(".error_selec")

let selec=document.querySelector('.form-select')
 let invalForm=(id,serial,message) =>{
    
    //  if(id.value.trim() === ""){
    //      errorMessage[serial].innerHTML = message;
    //      id.style.borderBottom= "4px solid red";
    //  }else if(id.value.trim() !=""){
       
    // }
     //fonction check email
    
     function Validate(email){
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(email.match(validRegex)){
            emailMessage.innerHTML=""
        
       
        }else {
            emailMessage.innerHTML="<span style='color:red';>Email invalide</span>"
        }
     }
     Validate(email.value)
     //fonction verfication numero de telephone
     function ValidateTel(phone){
         let  tel_regrex=/[0-9]{8}/
         if(phone.match(tel_regrex)){
             phoneMessages.innerHTML=""
         }else if(phone_number.value === "") {
                phoneMessages.innerHTML="<span style='color:red';>Le champ est vide</span>"
         }
         else{
             phoneMessages.innerHTML="<span color='red';>Numero incorecte<span>"
         }

     }
    ValidateTel(phone_number.value)
    //fonction verification de lage
    function ValidateAge(age){
        let age_regrex=/[0-9]{1}/
        if(age.match(age_regrex)  ){
            ageMessages.innerHTML=""
        }
        else{
            ageMessages.innerHTML="<span style='color:red';>Age invalide</span> "
        }
    }
    ValidateAge(age.value)
    
    //fonction verificaton du prenom
    function ValidateFirstname(prenom){
        let first_name_regrex=/[a-z]/;
        if(prenom.match(first_name_regrex)){
            firstnameMessage.innerHTML=""
            
        }
        else if (first_name.value === ""){
            firstnameMessage.innerHTML="<span style='color:red';>Champ FirstName vide</span>"
        }
        else{
            firstnameMessage.innerHTML="<span style='color:red';>FirstName incorecte</span>"
        }
    }

    ValidateFirstname(first_names.value)
    //fonction verifcation du nom
    function  ValidateLastname(nom){
        let last_name_regrex=/[a-z]/;
        if(nom.match(last_name_regrex)){
            lastnameMessage.innerHTML=""
        }
        else if (last_name.value === ""){
            lastnameMessage.innerHTML="<span style='color:red';>Champ last name vide</span>"
        }
        else{
            lastnameMessage.innerHTML="<span style='color:red';>LastName incorecte</span>"
        }

    }
    ValidateLastname(last_name.value)
    
    //fonction verication du selecte
    function ValidateSelec(valeur){
        if(valeur== "Your country"){
            selecMessage.innerHTML="<span style='color:red';>Choissisez un pays</span>"
            
        }
        else{
            selecMessage.innerHTML=""
        }
    }
    ValidateSelec(selec.value)
   
     
    
 }