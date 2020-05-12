
//function for changing the first challenge on the site

function correctFive(){
	//finds the id tag input*
	var message = document.getElementById("inputFive");
	//the if statement goes through the test_answer function first, making case and symbols irrelevent
	if (test_answer(message, "All of the lights in here Kayne"))
	{	//prints accordingly to whether the input matches the correct string
		document.getElementById("outputFive").innerHTML ="Correct";
	}
	else{
		document.getElementById("outputFive").innerHTML ="Wrong";
	}
	
}


function test_answer(message, answer) {
    msg = message.value.toLowerCase().replace(/[^a-z]/g, "");
    ans = answer.toLowerCase().replace(/[^a-z]/g, "");
    return msg==ans
}

