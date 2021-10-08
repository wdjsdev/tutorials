//set the target identifier so that vscode knows where
//to run the application
#target Illustrator

//To avoid variables clogging up the global scope
//we wrap all logic inside functions to limit their
//scope. Lots of variables in the global scope has
//been known to increase MRAP errors.

//this block represents a discreet javascript function
//it takes no arguments and returns nothing. It only
//executes the code inside it and then terminates.
function basicJavascriptTutorial()
{
	//the alert() function sends an alert dialog to the user.
	//the script stops executing until the user clicks OK
	//just pass in a string to be displayed
	alert("Program is running.");


	//the $.writeln() function writes a line to the console
	//useful for debugging when you don't want to halt the
	//execution of the script, but you still want to know
	//what value some variable had at a given point
	var counterVariable = 10;
	$.writeln("counterVariable = " + counterVariable);

	//notice that you can easily concatenate strings and variables with the + operator.
	//even though counterVariable is an integer, it will be converted to a string
	//so that it is displayed properly in the console or the alert dialog.


	//now let's increment counterVariable by 1
	counterVariable++;
	$.writeln("counterVariable = " + counterVariable);

	//or we could do it this way
	counterVariable += 1;
	$.writeln("counterVariable = " + counterVariable);


	//what if we wanted to increment the variable and write a message 10 times?
	//let's write a for loop that will do this for us
	for(var i=0;i<10;i++)
	{
		counterVariable++;
		$.writeln("counterVariable = " + counterVariable);
	}

	//and of course we can always just explicitly assign a
	//a new value to the variable just like we did initially
	counterVariable = 10;


	//now let's take a look at a very simple conditional block
	if(counterVariable >= 20)
	{
		//counterVariable is greater than or equal to 20
		alert("big counter variable");
	}
	else if(counterVariable < 20 && counterVariable >=10)
	{
		//counterVariable is between 10 and 19 inclusive
		alert("medium counter variable");
	}
	else
	{
		//no condition here.. if the above two conditions are false,
		//this block will be executed.
		alert("small counter variable");
	}


	//ok that's all for now. you can put an explicit return statement
	//at the end of a function, but it's not necessary. if no return
	//is explicitly added, the function will just return undefined.
	return undefined;
}

//this line calls the function defined above
basicJavascriptTutorial();