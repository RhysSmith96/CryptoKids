
//function for changing the first challenge on the site

function correctSix(){
	//finds the id tag input*
	var message = document.getElementById("inputSix");
	//the if statement goes through the test_answer function first, making case and symbols irrelevent
	if (test_answer(message, "CZnk iuxutg boxay oy znk suyz gttueotm znotm"))
	{	//prints accordingly to whether the input matches the correct string
		document.getElementById("outputSix").innerHTML ="Correct";
	}
	else{
		document.getElementById("outputSix").innerHTML ="Wrong";
	}
	
}


function test_answer(message, answer) {
    msg = message.value.toLowerCase().replace(/[^a-z]/g, "");
    ans = answer.toLowerCase().replace(/[^a-z]/g, "");
    return msg==ans
}

