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
var find, count;

    function fabricText()
    {
        informationLayer.locked = false;
        find = "COLOR";
        count = mockupLayer.textFrames.length
        for (i=count-1; i>0; i--)
        { if (mockupLayer.textFrames[i].contents.match (find) == find)
              { mockupLayer.textFrames[i].move(informationLayer, ElementPlacement.PLACEATBEGINNING);
                } informationLayer.textFrames[0].name = "Button Color";
        }
        informationLayer.locked = true;
    }
    fabricText();

    return undefined;
}
manipulatingIllustratorObjectsTutorial();
