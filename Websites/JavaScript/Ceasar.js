
function ceasarEncrypt(){
  var k = document.getElementById("key").value;                   //Gets the key value from the webpage
  var message = document.getElementById("input").value;           //Grabs the input from the webpage's input box
  var key1 = Number(k)                                            //converts the object into a number value
  console.log(key1);
  var result='';                                                  //creates the output
  for (var i = 0, len = message.length; i < len; i++) {
  	if (message[i].toLowerCase().charCodeAt(0) - 65 < 27){ 
          result = result +  message[i];                          //this checks if the array is a letter. keeping as symbol if not
        }
  	else if (message[i] == message[i].toUpperCase()){
      var code = message[i].charCodeAt(0);                           //checks the upper case letters
      var e = (((code - 65 + key1) % 26) + 65);
      result = result + String.fromCharCode(e).toUpperCase();     //appends to the result
    }
    else if (message[i] == message[i].toLowerCase()){
      var code = message[i].charCodeAt(0);                           //checks the lowercase letters
      var e = (((code - 97 + key1) % 26) + 97);
      result = result + String.fromCharCode(e);
    }
    

    }
  
  document.getElementById('output').value = result ;
}

function ceasarDecrypt(){
    var result = "";
    var k = document.getElementById("key").value;
    var message = document.getElementById("input").value;                     //Grabs the input from the webpage's input box
    for(var i = 0; i < message.length; i++) {
        var encrypted = message.charCodeAt(i);
        if(encrypted >= 97 && encrypted <= 122) {
            result += String.fromCharCode((encrypted-97 - k + 26) %26 + 97 );
        } else if(encrypted >= 65 && encrypted <= 90) {
            result += String.fromCharCode((encrypted-65 - k + 26) %26 + 65 );
        } else {
            result = result +  message[i];
        }
    }
     document.getElementById('output').value = result ;
}