#target Illustrator

function manipulatingIllustratorObjectsTutorial()
{
	#include "/Volumes/Customization/Library/Scripts/Script_Resources/Data/Utilities_Container.jsxbin";
    #include "/Volumes/Customization/Library/Scripts/Script_Resources/Data/Batch_Framework.jsxbin";

	if(app.documents.length < 1)
	{
		//there are no open documents..
		//alert the user and exist script
		alert("Please open a document and try again");
		return;
	}
	var doc = app.activeDocument; //whichever document is open at the moment
	
	var layers = doc.layers;
	var swatches = doc.swatches;
	var artboards = doc.artboards;
    var fname = activeDocument.name;

    var garmentLayer = layers[0];

    var informationLayer = findSpecificLayer(garmentLayer, "Information");
    var mockupLayer = findSpecificLayer(garmentLayer, "Mockup");   

    var textFrame;

    function contentSwap()
    {
        informationLayer.locked = false;
        mockupLayer.textFrames[1].contents = "COLOR";
        mockupLayer.textFrames[1].name = "Button Color";
        mockupLayer.textFrames[1].move(informationLayer, ElementPlacement.PLACEATBEGINNING);
        informationLayer.locked = true;
    }
    contentSwap();

    return undefined;
}
manipulatingIllustratorObjectsTutorial();