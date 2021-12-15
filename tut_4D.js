#target Illustrator

function manipulatingIllustratorObjectsTutorial4()
{
	#include "/Volumes/Customization/Library/Scripts/Script_Resources/Data/Utilities_Container.jsxbin";
    #include "/Volumes/Customization/Library/Scripts/Script_Resources/Data/Batch_Framework.jsxbin";

	/*
    if(app.documents.length < 1)
	{
		//there are no open documents..
		//alert the user and exist script
		alert("Please open a document and try again");
		return;
	}
    */
    batchInit(containerFunction,"readme text.. this is optional")

    function containerFunction()
    {

	    var doc = app.activeDocument; //whichever document is open at the moment
	
	    var layers = doc.layers;
	    var swatches = doc.swatches;
	    var artboards = doc.artboards;
        var fname = activeDocument.name;

        var garmentLayer = layers[0];
        var backLayer = doc.layers.getByName("BKGRD, do not unlock");


        var informationLayer = findSpecificLayer(garmentLayer, "Information");
        var mockupLayer = findSpecificLayer(garmentLayer, "Mockup");   
        //var backLayer = findSpecificLayer(app.activeDocument.layers.index[2]);
        var textFrame;
        var find1, find2, find3, initialSearch, searchRelocated;

        function findText()
        { 
            backLayer.locked = false;
            informationLayer.locked = false;
            find1 = "Fill Color";
            find2 = "Inside Stroke Color";
            find3 = "Outside Stroke Color";
            initialSearch = backLayer.textFrames.length
            searchRelocated = informationLayer.textFrames.length
            for (i =initialSearch - 1; i>=0; i--)
                {if(backLayer.textFrames[i].name == find1, find2, find3)
                    {backLayer.textFrames[i].move(informationLayer, ElementPlacement.PLACEATBEGINNING);}
                }
            /*for (i =searchRelocated - 1; i>=0; i--)
                {if(informationLayer.textFrames[i].name == find)
                    {informationLayer.textFrames[i].name = "Snap Color";}
                }*/
            informationLayer.locked = true;
            backLayer.locked = true;
        }
        findText();

        return undefined;
        
        batchInit() 
    }
    containerFunction();
       
    


   

}
manipulatingIllustratorObjectsTutorial4();
