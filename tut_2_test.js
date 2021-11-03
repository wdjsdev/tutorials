generateColorGrid(5,5);

function generateColorGrid(rows, columns) {

    #include "/Volumes/Customization/Library/Scripts/Script_Resources/Data/Utilities_Container.jsxbin";

	if(app.documents.length < 1)
	{
		alert("Please open a document and try again");
		return;
	}

    var doc = app.activeDocument;
    var layers = doc.layers;
	var swatches = doc.swatches;
	var artboards = doc.artboards;

	//new layer
	//var workingLayer = layers.add(); //creates a new empty, unnamed layer
	//workingLayer.name = "Working Layer";



    var randomColor = new CMYKColor();
    var document = app.documents.add();
    document.name = "Color Grid" + rows.toString() + "x" + columns.toString();
    //document.documentColorSpace = documentColorSpace.RGB;

    var width = 100;
    var height = 50;

    var workingLayer,myRect;
    var counter = 0;
    var thisX = 0;
    var thisY = 0;

    layer = document.layers.add();
    layer.name = "Working Layer"; //+ counter;

    for(var x = 1; x <= columns; x++){
        for(var y = 1; y <= rows; y++){
            counter++;
            //layer = document.layers.add();
            //layer.name = "Working Layer" + counter;
            myRect = layer.pathItems.rectangle(document.height, 0, width, height);
            randomColor.cyan = Math.floor(Math.random() * 100);
            randomColor.magenta = Math.floor(Math.random() * 100);
            randomColor.yellow = Math.floor(Math.random() * 100);
            randomColor.black = Math.floor(Math.random() * 100)
            myRect.fillColor = randomColor;
            myRect.filled = true;
            myRect.stroked = true;
            myRect.strokeColor = randomColor;
            myRect.translate(thisX, thisY);
            thisY += height + 20; //ratio to dictate spacing of blocks
        }
        thisX += width + 20; //ratio to dictate spacing of blocks
        thisY = 0;
    }
    return undefined;
}