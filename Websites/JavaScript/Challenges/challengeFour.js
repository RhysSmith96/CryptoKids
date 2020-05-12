
//function for changing the first challenge on the site

function correctFour(){
	//finds the id tag input*
	var message = document.getElementById("inputFour");
	//the if statement goes through the test_answer function first, making case and symbols irrelevent
	if (test_answer(message, "Lj Wcafpy otvh lng oiupcw"))
	{	//prints accordingly to whether the input matches the correct string
		document.getElementById("outputFour").innerHTML ="Correct";
	}
	else{
		document.getElementById("outputFour").innerHTML ="Wrong";
	}
	
}


function test_answer(message, answer) {
    msg = message.value.toLowerCase().replace(/[^a-z]/g, "");
    ans = answer.toLowerCase().replace(/[^a-z]/g, "");
    return msg==ans
}

