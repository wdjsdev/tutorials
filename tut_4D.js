#target Illustrator

function manipulatingIllustratorObjectsTutorial()
{
    #include "/Volumes/Customization/Library/Scripts/Script_Resources/Data/Utilities_Container.jsxbin";
    #include "/Volumes/Customization/Library/Scripts/Script_Resources/Data/Batch_Framework.jsxbin";


    //we can remove this conditional for batching orders
    //most times you'll run the script with no documents open
    //and choose a folder to batch.
    if (app.documents.length < 1)
    {
        //there are no open documents..
        //alert the user and exist script
        alert("Please open a document and try again");
        return;
    }


    //everything from here down should be packaged up in a container function
    //so that you can execute all of this logic on each file.
    //after you package it up, you'll call that container function from
    //within the batchInit() function, like so:
    //batchInit(myContainerFunction,"readme text.. this is optional");

    //note that when passing a function to another function like this, we don't use
    //the parentheses that we'd normally use to call the function. That's because
    //we don't actually want to call the function yet. We want to pass the reference
    //to the function as the argument. If we call the function
    //within the argument list, like this:
    //batchInit(myContainerFunction(),"readme text.. this is optional");
    //then it will execute myContainerFunction, and then pass in the return value
    //of that function as the first argument to the batchInit function.
    //This is not what we want. We want to pass the function itself, so that it can
    //be executed from inside the batchInit function. That's how we'll get it to run
    //on each necessary file.


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
        for (i = count - 1; i >= 0; i--)
        {
            if (mockupLayer.textFrames[i].contents == find)
            {
                mockupLayer.textFrames[i].move(informationLayer, ElementPlacement.PLACEATBEGINNING);
            }
        }
        for (i = recount - 1; i >= 0; i--)
        {
            if (informationLayer.textFrames[i].contents == find)
            {
                informationLayer.textFrames[i].name = "Button Color";
            }
        }
        informationLayer.locked = true;
    }
    findText();

    //everything above this (up to the other comment) should be
    //inside your container function
    //then you can call the batchInit() function just below this

    return undefined;
}
manipulatingIllustratorObjectsTutorial();