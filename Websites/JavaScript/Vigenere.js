

//This function checks whether the key is empty and alerts the user if so.
function doEncrypt(isDec) {
  if (document.getElementById("key").value.length == 0) {
    alert("Key is empty");
    
  }

  //Checks whether there is valid characters inside the key value
  var key = filter(document.getElementById("key").value);
  if (key.length == 0) {
    alert("Invalid Key Input");
    return;
  }
  //This is the for loop for taking the input parameters
  if (isDec) {
    for (var i = 0; i < key.length; i++)
      key[i] = (26 - key[i]) % 26;
  }
    input = document.getElementById("inputCode");
    input.value = encrypt(input.value, key);

}
//this is the encrypting function. It changes the letters dependending on the key 
//This takes two different alphabets and changes them accordingly
function encrypt(input, key){
  var cipher = "";
  for (var i = 0, j = 0; i< input.length; i++){
    var x = input.charCodeAt(i);
    if(upper(x)){
      cipher += String.fromCharCode((x - 65 + key[j % key.length]) % 26 + 65);
      j++;
    } else if (lower(x)){
      cipher += String.fromCharCode((x - 97 + key[j % key.length]) % 26 + 97);
      j++;
    } else { 
      cipher += input.charAt(i);
    }
  }
  //this returns the output to my output box inside the html
    document.getElementById('output').value = cipher;
    return input;
}



//The filters letters out of the array and making sure that they're valid and whether they're lower or upper
function filter(key){
  var result = [];
  for(var i = 0; i < key.length; i++){
    var x = key.charCodeAt(i);
    if (letter(x))
      result.push((x - 65) % 32);
  }
  return result;
}
//checks whether its a letter
function letter(x){
  return upper(x) || lower(x);
}
//checks whether its uppercase
function upper(x){
  return 65 <= x && x <= 90;
}
//checks whether its lowercase
function lower(x){
  return 97 <= x && x <= 122;
}
