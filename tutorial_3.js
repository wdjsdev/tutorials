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

	


	//now let's get some properties of the document
	var layers = doc.layers;
	var swatches = doc.swatches;
	var artboards = doc.artboards;

    //first we are going to assume that the first layer in the document
    //is the "garment layer". This is where we'll find the information layer.
    //get the information layer on the garment layer
    var garmentLayer = layers[0];

    //get the information layer
    //the findSpecificLayer function is defined in the Utilities_Container.jsxbin
    //parameters are:
    //1. the parent layer to search in
    //2. the name of the layer to find
    //3. [optional] search type ("match" = exact, "imatch" = match full name case insensitive, "any" = layer name contains)
    var informationLayer = findSpecificLayer(garmentLayer, "Information");

    //unlock the information layer so we can access it's properties



    //now we have the information layer, let's create the text frame(s)


    var textFrame; // add some logic here to make a text frame on the information layer


    //now give the new text frame a name with the .name


    //now position the text frame with the .position property or by
    //explicitly setting the left (x), top (y) properties


    //lock the information layer



    //save the document
    



	return undefined;
}

//this line calls the function defined above
manipulatingIllustratorObjectsTutorial();