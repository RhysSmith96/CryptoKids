
//function for changing the first challenge on the site

function correctOne(){
																		//finds the id tag input*
	var message = document.getElementById("inputOne");
																		//the if statement goes through the test_answer function first, making case and symbols irrelevent
	if (test_answer(message, "Gmtlivw evi gssp!"))
	{																	//prints accordingly to whether the input matches the correct string
		document.getElementById("outputOne").innerHTML ="Correct";
	}
	else{
		document.getElementById("outputOne").innerHTML ="Wrong";
	}
}
function test_answer(message, answer) {
    msg = message.value.toLowerCase().replace(/[^a-z]/g, "");
    ans = answer.toLowerCase().replace(/[^a-z]/g, "");
    return msg==ans
}

