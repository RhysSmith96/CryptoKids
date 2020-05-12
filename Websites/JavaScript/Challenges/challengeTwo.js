
//function for changing the first challenge on the site

function correctTwo(){
	//finds the id tag input*
	var message = document.getElementById("inputTwo");
	//the if statement goes through the test_answer function first, making case and symbols irrelevent
	if (test_answer(message, "Computer science is a fun subject!"))
	{	//prints accordingly to whether the input matches the correct string
		document.getElementById("outputTwo").innerHTML ="Correct";
	}
	else{
		document.getElementById("outputTwo").innerHTML ="Wrong";
	}
	
}


function test_answer(message, answer) {
    msg = message.value.toLowerCase().replace(/[^a-z]/g, "");
    ans = answer.toLowerCase().replace(/[^a-z]/g, "");
    return msg==ans
}

