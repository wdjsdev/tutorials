//set the target identifier so that vscode knows where
//to run the application
#target Illustrator

function manipulatingIllustratorObjectsTutorial()
{

	//here's some logic to include my utilities container
	//which has some functions we'll find useful below.
	#include "/Volumes/Customization/Library/Scripts/Script_Resources/Data/Utilities_Container.jsxbin";


	
	//to access anything like layers, pageItems, swatches...
	//literally anything.. you need to first grab the document
	//object. In most cases, we'll just use whichever document is open

	if(app.documents.length < 1)
	{
		//there are no open documents..
		//alert the user and exist script
		alert("Please open a document and try again");
		return;
	}
	var doc = app.activeDocument; //whichever document is open at the moment

	//you can also get documents by index if you know which one you want, like this
	//
	//	var doc = app.documents[2]; //since indexes are zero based, this will get the 3rd document
	//
	//however i strongly discourage this practice because 
	//as different documents are activated/opened/closed, the indexes get
	//changed and it's hard to keep track.



	//to get a document that isn't active by name, try this:
	//
	// var doc = app.documents["My_File.ai"];
	//
	//careful though. if the file isn't open, or there's a 
	//typo, you'll get a runtime error


	//and finally, you can create a new document, and the return value
	//will be the document object. so you could create a new document
	//and save it to the doc variable like this:

	// var doc = app.documents.add();




	//now let's get some properties of the document
	var layers = doc.layers;
	var swatches = doc.swatches;
	var artboards = doc.artboards;


	//let's make a new layer to work with
	var workingLayer = layers.add(); //creates a new empty, unnamed layer
	workingLayer.name = "Working Layer"; //change the name of the layer

	//here we'll set some variables to use for defining a rectangle
	var x = 100; //x coordinate of new rectangle's top left corner
	var y = -100 //y coordinate of new rectangle's top left corner

	var width = 100; //value in points.
	var height = 50; //value in points.. every measurement in illustrator scripting is in points

	//now let's draw a rectangle on the artboard;
	//rectangle method takes at least 4 arguments
	//they are: (top coordinate, left coordinate, width, height)
	var myRect = workingLayer.pathItems.rectangle(y,x,width,height);


	//when you create the new rectangle, it will adopt whatever
	//the document default fill/stroke colors are (whatever's displayed
	// in your swatches panel for fill and stroke). 
	//to change the fill/stroke color, you can either create a new swatch,
	//access an existing swatch, or create a basic rgb/cmyk color. 

	//here's an example of creating a CMYKColor() object from the 
	//documentation:
	// https://ai-scripting.docsforadobe.dev/jsobjref/CMYKColor/

	// Set color values for the CMYK object
	var newCMYKColor = new CMYKColor();
	//color values should be between 0 and 100
	newCMYKColor.black = 0;
	newCMYKColor.cyan = 30.4;
	newCMYKColor.magenta = 32;
	newCMYKColor.yellow = 0;

	// Now we'll apply this color to the rectangle by
	//using its fillColor property. 
	myRect.filled = true;
	myRect.fillColor = newCMYKColor;


	//now let's make a new rectangle and fill it with an rgb color instead
	//first we'll update the x coordinate of our rectangle
	//i just want to increment the x variable by the width of the rectangle
	//plus some spacing.. let's just call it 20 points
	//this moves the left edge of the rectangle to the right so that our
	//new rect won't overlap the old one.
	x += width + 20;

	var myNewRect = workingLayer.pathItems.rectangle(y,x,width,height);


	// https://ai-scripting.docsforadobe.dev/jsobjref/RGBColor/
	var newRGBColor = new RGBColor();
	//color values should be between 0 and 255
	newRGBColor.red = 100;
	newRGBColor.green = 0;
	newRGBColor.blue = 255;

	//now let's apply this color to our new rectangle
	//but let's make it a stroke this time. strokeColor works
	//exactly the same as fillColor
	myNewRect.stroked = true;
	myNewRect.strokeColor = newRGBColor;


	//Great, now we've made a couple of things and changed their
	//appearance.. Now let's duplicate them, and translate them
	//on the drawing area

	//it's important that you save your duplicates to a variable or you'll lose them
	//if i just say myRect.duplicate(); the resulting object gets returned from the
	//duplicate() function, but doesn't get stored. so yo won't be able to do anything
	//with it unless you identify it by some other means (which is difficult, because
	//by virtue of duplicating a thing, there's 2 of them now..)

	var myRectCopy = myRect.duplicate(); //behaves identically to copy and paste
	var myNewRectCopy = myRect.duplicate();

	//to move an object on the drawing area, you can use a bunch of differnt methods
	//you can explicitly change the "left" or "top" coordinates, like so:
	myRectCopy.top -= (height + 20); //move the object down by the height of the rect and a 20 point margin
	myRectCopy.left -= width / 2; //move the object left by half the width of the rectangle
	myRectCopy.name = "moved by left and top properties";


	//you can also set both the x/left and y/top coordinates at the same time
	//with the "position" property, which is an array of [x,y];
	myNewRectCopy.position = [500,500]; //no math here. just explicitly put this rect at [500,500];
	myNewRectCopy.name = "500,500";
	//but you could do math in there if you wanted to
	// myNewRectCopy.position = [myNewRectCopy.left + 500, myNewRectCopy.top - 500];

	//and finally you can move objects with the translate(deltaX,deltaY) method, like this:
	var myThirdRect = myRect.duplicate();

	myThirdRect.translate(0,-(height * 2 + 40)); //translate down by 2 rectangle heights + 40 points for a buffer.
	myThirdRect.name = "translate()";
	

	//
	//now your homework
	//
	//update this code to create a 5x5 grid of rectangles
	//each with a different color. Use at least one for loop
	//to create your grid (bonus points for a nested loop).
	//either utilize some math to generate the color values
	//like perhaps the colors could be some multiple of the
	//row/column number, or you can utilize the getRandom(min,max)
	//function from the utilities container which will return
	//a number between the min and max (integers)
	//



	//ok that's all for now. you can put an explicit return statement
	//at the end of a function, but it's not necessary. if no return
	//is explicitly added, the function will just return undefined.
	return undefined;
}

//this line calls the function defined above
manipulatingIllustratorObjectsTutorial();