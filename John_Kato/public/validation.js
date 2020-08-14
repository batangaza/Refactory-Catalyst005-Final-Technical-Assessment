// disable form submissions if there are invalid fields
(function () {
    'use strict'
  
    window.addEventListener('load', function () {

      var forms = document.getElementsByClassName('needs-validation')
  
      
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
    }, false)
  }())

  
function formValidation() {
    var ufirst = document.registrationform.surname;
    var upass = document.registrationform.firstname;
    var utel = document.registrationform.location;
    var uid = document.registrationform.job;
    var uidd = document.registrationform.origin;
    var unation = document.registrationform.gen;
    var nation = document.registrationform.category
  
  
    if (firstvalidation(ufirst)) {
      if (passvalidation(upass)) {
        if (utelvalidation(utel)) {
          if (uservalidation(uid)) {
            if (alphavalidation(uidd)) {
                if (nationvalidation(unation)) {
                    if (unationvalidation(nation)) {
            alert("Form Submitted Succesfully");
            window.location.reload(Get);
                    }
                }
            }
          }
        }
      }
    }
  
    return false;
  }
  
    //Accessing form element
    function firstvalidation(ufirst) {
      var letters = /^[A-Za-z]+$/;
      if (ufirst.value.match(letters)) {
    
        return true;
      } else {
        alert("Surname must have alphabet characters only");
   
        ufirst.focus();
        return false;
      }
    }
    
  //Accessing form element
  function passvalidation(upass) {
    var letters = /^[A-Za-z]+$/;
    if (upass.value.match(letters)) {
    
      return true;
    } else {
      alert("Givenname must have alphabet characters only");
    
      upass.focus();
      return false;
    }
  }
  

    //Accessing form element
    function utelvalidation(utel) {
        var letters = /^[A-Za-z]+$/;
        if (utel.value.match(letters)) {
        
          return true;
        } else {
          alert("Place of Residence must have characters only");
        
          utel.focus();
          return false;
        }
      }


       //Accessing form element
    function uservalidation(uid) {
        var letters = /^[A-Za-z]+$/;
        if (uid.value.match(letters)) {
        
          return true;
        } else {
          alert("Occupation must have characters only");
        
          utel.focus();
          return false;
        }
      }



  //Accessing form element
  function alphavalidation(uidd) {
    var letters = /^[A-Za-z]+$/;
    if (uidd.value.match(letters)) {
    
      return true;
    } else {
      alert("Nationality must have characters only");
    
      uidd.focus();
      return false;
    }
  }

  
//Defining method nationvalidation with parameter
function nationvalidation(unation) {
    if (unation.value == "Default") {
      alert("Please select your Gender");
    
      unation.focus();
      return false;
    } else {
     
      return true;
    }
  }

  function unationvalidation(nation) {
    if (nation.value == "Default") {
      alert("Please select your Category");
  
      nation.focus();
      return false;
    } else {
    
      return true;
    }
  }