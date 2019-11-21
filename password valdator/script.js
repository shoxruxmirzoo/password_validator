var is_visible = false;

function see()  {
  var input = document.getElementById("password");
  var see = document.getElementById("see");

  if (is_visible) {
    input.type = 'password';
    is_visible = false;
    see.style.color = 'gray';
    
  }
  else {
    input.type = 'text';
    is_visible = true;
    see.style.color = '#262626';
  }
}

function check() {
  var input = document.getElementById('password').value;

  input = input.trim();
  document.getElementById('password').value = input;

  document.getElementById('count').innerText ="Length : " + input.length;

  
  //check idlarni kiritib olamiz
  var check0 = document.getElementById('check0');
  var check1 = document.getElementById('check1');
  var check2 = document.getElementById('check2');
  var check3 = document.getElementById('check3');
  var check4 = document.getElementById('check4');


  if(input.length>5) {
    check0.style.color = "green";
  }
  else {
    check0.style.color = "tomato";
    
  }
  if (input.length<=10) {
    check1.style.color = "green";
  }
  else {
    check1.style.color = "tomato";
  }
    if (input.match(/[0-9]/i))  {
      check2.style.color = "green";
    }
    else {
      check2.style.color = "tomato";
    }
    if (input.match(/[^A-Za-z0-9-'']/i)) {
      check3.style.color = "green";
    }
    else {
      check3.style.color = "tomato";
    }
    if (input.match(' ')) {
      check4.style.color = "tomato";
    }
    else {
      check4.style.color = "green";
    }


}