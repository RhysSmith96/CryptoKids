function Encrypt() {
	//scans the document, replacing any symbol or white space 
	message = document.getElementById("inputCode").value.replace(/[^a-z]\s/g, "");
	//returns an alert if nothing has been entered
	if (message.length < 1) {
		alert("please enter some message");
		return;
	}
	//gets the key value, key has to be between a certain length
	var key = parseInt(document.getElementById("key").value);
	if (key > Math.floor(2 * (message.length - 1))) {
		alert("Enter 1-22");
		return;
	}
	//this is the for loop for putting each character in their places 
	cipher = "";
	for (row = 0; row < key - 1; row++) {
		pass = 2 * (key - row - 1);
		j = 0;
		for (i = row; i < message.length;) {
			cipher += message.charAt(i);
			if ((row == 0) || (j % 2 == 0)) i += pass;
			else i += 2 * (key - 1) - pass;
			j++;
		}
	}
	for (i = row; i < message.length; i += 2 * (key - 1)) {
		cipher += message.charAt(i);
	}
		//returns the value into the output of the correct id in the html
	document.getElementById("output").value = cipher;
}

//decrypt works the same as the encrypt just the opposite
function Decrypt() {
	message = document.getElementById("inputCode").value.replace(/[^a-z]\s/g, "");
	if (message.length < 1) {
		alert("Ciphertext invalid");
		return;
	}
	var key = parseInt(document.getElementById("key").value);
	if (key > Math.floor(2 * (message.length - 1))) {
		alert("Enter 1-22");
		return;
	}
	x = new Array(message.length);
	k = 0
	for (row = 0; row < key - 1; row++){
		pass = 2 * (key - row - 1);
		j = 0;
		for(i = row; i < message.length;){
			x[i] = message.charAt(k++);
			if((row == 0) || (j % 2 == 0)) i += pass;
			else i =+ 2 * (key - 1) - pass;
			j++
		}
	}
	for (i = row; i < message.length; i += 2 * (key - 1)) {
		x[i] = message.charAt(k++);
	}
		document.getElementById("output").value = x.join("");

}