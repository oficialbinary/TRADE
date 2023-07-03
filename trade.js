//mobile menu button funcftion

$(document).ready(function(){

  $("#menuBt").click(function(){
  $(".mobile-navigation-bar").fadeToggle(1000);
  });
  
});

function er(){
  let error = document.getElementById('message');
  let num = document.getElementById('dep-A').value;
  
  try{
  if(num.trim() == "") throw "Value cannot be empty";
  if(isNaN(num)) throw "Value must be a number";
  }
  catch(err){
  error.innerHTML =err;
  }

  error.style.color = '#ffee00';
  
}

/*function witDx(){
  let amnt = document.getElementById('witVal');
  let addA = document.getElementById('add-up');

  if(amnt.value == Number){
    addA.value == amnt.value + 0.1
  }
  else{
    addA.value = '';

  }
}
*/

function sameval(){
  let ab = document.getElementById('witVal');
  let bc = document.getElementById('add-up');
  let cc = document.getElementById('add-tots');
  
  bc.value = Math.round((10/100)*ab.value);
  cc.value = parseInt(bc.value) + parseInt(ab.value);
  
}

//to alert registration status

let rBtn = document.querySelector('.reg-btn');

function checkx(){
  alert(`Your Account\nIs Registered!\nGo To Dashbord\nTo See Balance`);
  window.location = 'pay.html';
}

rBtn.addEventListener('click', checkx);

//to alert login status

let logBtn = document.querySelector('.log-btn');
let frmm = document.querySelector('.lgform');

function logStatus(){
  if(document.frm.em.value == ''){
    alert('enter your emali address');
      document.frm.em.focus();
      return false;
  }
  


  if(document.frm.ph.value == ''){
    alert('enter phone nunber');
    document.frm.ph.focus();
    return false;
  }
}

//after login

function validxx(){
  if(document.frm.value !== ''){
   alert("successful");
   window.location="pay.html";
  }
}

//for witdrawal

let proceedW = document.getElementById('witVal');
let wBtn = document.getElementById('wbtn');

function withdrawx(){

  alert(`Amount entered\nIs been Processed`);
  location.reload();
 
}

