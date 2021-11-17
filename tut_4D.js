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
    var find, count, recount;

    function findText()
    {
        informationLayer.locked = false;
        find = "COLOR";
        count = mockupLayer.textFrames.length
        recount = informationLayer.textFrames.length
        for (i =count - 1; i>=0; i--)
        { if(mockupLayer.textFrames[i].contents == find)
            { mockupLayer.textFrames[i].move(informationLayer, ElementPlacement.PLACEATBEGINNING);}
            }
        for (i =recount - 1; i>=0; i--)
            {if(informationLayer.textFrames[i].contents == find)
                    {informationLayer.textFrames[i].name = "Button Color";}
            }
        informationLayer.locked = true;
    }
    findText();
    
    return undefined;
}
manipulatingIllustratorObjectsTutorial();
