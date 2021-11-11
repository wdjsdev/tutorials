
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

    var textFrame;

    function fabricText()
    {
        informationLayer.locked = false;
        textFrame = informationLayer.textFrames.add();
        textFrame.textRange.characterAttributes.size = 14;
        textFrame.position = new Point(475, -733);
        //textFrame.move(informationLayer, ElementPlacement.PLACEATBEGINNING);
        textFrame.name = "Fabric Style";
        informationLayer.locked = true;
    }
    fabricText();
    
    function saveOver()//exports seperate test.ai
    {
        var originalInteractionLevel = userInteractionLevel;
        userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS; //suppress default alerts
        doc.saveAs(File('~/Desktop/test.ai'));
        if(doc.saved === true){
            $.writeln('Done, my gamer');
        }else{
            $.writeln('bruh');
        }
        userInteractionLevel = originalInteractionLevel;
    }
    saveOver();
    
	return undefined;
}

//this line calls the function defined above
manipulatingIllustratorObjectsTutorial();
