document.addEventListener("DOMContentLoaded", () => {
   'strict mode';

   const slideModule = (function () {
      /***** nav *****/
       const nav = () => {
          var nav_flag = true;
          document.querySelector(".main--menu").addEventListener("click", () => {
             if(nav_flag) {
                document.querySelector(".nav--container > ul").style="display:block;z-index:10";
                nav_flag=false;
             } else {
                document.querySelector(".nav--container > ul").style="display:none;z-index:-1";
                nav_flag=true;
             }
          });

          window.onresize = function(event) {
          let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
             if(width > 600) {
                document.querySelector(".nav--container > ul").style="display:flex;z-index:10";
             } else {
                document.querySelector(".nav--container > ul").style="display:none;z-index:-1";
                nav_flag=true;
             }
          }
       }
      /***** /nav *****/
      /***** contact form validate *****/
      const formValidate = () => {
         var flag1=false;
         var flag2=false;
         var flag3=false;
         var flag4=false;

         document.querySelector("#btn_submit").addEventListener("click", () => {
            if(document.querySelector('#ContactForm input[name="formName"]').value == "" || document.querySelector('#ContactForm input[name="formSurname"]').value == "" || document.querySelector('#ContactForm input[name="formEmail"]').value == "" || document.querySelector('#ContactForm input[name="formSecondEmail"]').value == "") {
               alert("Wypełnij wszystkie pola formularza przed wysłaniem wiadomości");
               document.querySelector("#btn_submit").disabled = true;
            }
            if(flag1 && flag2 && flag3 && flag4) {document.querySelector("#btn_submit").disabled = false;}
            else {document.querySelector("#btn_submit").disabled = true;}
         });

         function form_check(val, type_of_field) {
            if(type_of_field =="name" || type_of_field == "surname") {
               const reg = /^[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźÓżŻ]{3,}$/g; // min. 3 znaki, niebędące cyframi
               if (!reg.test(val) || val.length == 0) {
                  alert(((type_of_field == "name") ? "Imię": "Nazwisko") +" jest niepoprawne");
                  document.querySelector("#btn_submit").disabled = true;
                  (type_of_field == "name") ? flag1=false : flag2=false;
               } else {
                  document.querySelector("#btn_submit").disabled = false;
                  (type_of_field == "name") ? flag1=true : flag2=true;
               }
            } else {
               var mailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
               if(!mailReg.test(String(val).toLowerCase())) {
                  alert("Email jest niepoprawny");
                  document.querySelector("#btn_submit").disabled = true;
                  (type_of_field == "email") ? flag3=false : flag4=false;
               } else {
                  document.querySelector("#btn_submit").disabled = false;
                  (type_of_field == "email") ? flag3=true : flag4=true;
               }
            }
         }

         document.querySelector('#ContactForm input[name="formName"]').addEventListener("change", function() {form_check(this.value, "name");});
         document.querySelector('#ContactForm input[name="formSurname"]').addEventListener("change", function() {form_check(this.value, "surname");});
         document.querySelector('#ContactForm input[name="formEmail"]').addEventListener("change", function() {form_check(this.value, "email");});
         document.querySelector('#ContactForm input[name="formSecondEmail"]').addEventListener("change", function() {form_check(this.value, "secondEmail");});
      }
      /***** /contact form validate *****/


      return {
         nav : nav,
         formValidate : formValidate
      }
   })();

   slideModule.nav();
   slideModule.formValidate();
});
