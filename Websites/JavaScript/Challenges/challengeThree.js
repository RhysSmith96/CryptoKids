
//function for changing the first challenge on the site

function correctThree(){
	//finds the id tag input*
	var message = document.getElementById("inputThree");
			//the if statement goes through the test_answer function first, making case and symbols irrelevent
	if (test_answer(message, "The cat drank the milk and smacked the dog"))
	{	//prints accordingly to whether the input matches the correct string
		document.getElementById("outputThree").innerHTML ="Correct";
	}	
	else{	
		document.getElementById("outputThree").innerHTML ="Wrong";
	}
	
}


function test_answer(message, answer) {
    msg = message.value.toLowerCase().replace(/[^a-z]/g, "");
    ans = answer.toLowerCase().replace(/[^a-z]/g, "");
    return msg==ans
}

