// Turn debugger on. 0 is off.
// $.level = 1;

try
{
  // Prompt user to select originalImage file. Clicking "Cancel" returns null.
  var originalImage = File.openDialog("Select a sqaure PNG.", "*.png", false);

  if (originalImage !== null)
  {
    var doc = open(originalImage, OpenDocumentType.PNG);

    if (doc == null)
    {
      throw "Something is wrong with the file.  Make sure it's a valid PNG file.";
    }

    var startState = doc.activeHistoryState;       // save for undo
    var initialPrefs = app.preferences.rulerUnits; // will restore at end
    app.preferences.rulerUnits = Units.PIXELS;     // use pixels

    if (doc.width != doc.height)
    {
        throw "Image is not square";
    }
    else if ((doc.width < 100) && (doc.height < 100))
    {
        throw "Image is too small!  Image must be at least 100x100 pixels.";
    }
    else if (doc.width < 100)
    {
        throw "Image width is too small!  Image width must be at least 1024 pixels.";
    }
    else if (doc.height < 100)
    {
        throw "Image height is too small!  Image height must be at least 1024 pixels.";
    }

    // Folder selection dialog
    var destFolder = Folder.selectDialog( "Choose an output folder");

    if (destFolder == null)
    {
      // User canceled, just exit
      throw "";
    }

    // Save icons in PNG using Save for Web.
    var eosfw = new ExportOptionsSaveForWeb();
    eosfw.format = SaveDocumentType.PNG;
    eosfw.PNG8 = false; // use PNG-24
    eosfw.transparency = true;
    doc.info = null;  // delete metadata

    var icons = [
      {"name": "ImageUniversal-25", "size":25},
      {"name": "ImageUniversal-25@2x", "size":50},
      {"name": "ImageUniversal-25@3x", "size":75},

      {"name": "MaxSize-28", "size":28},
      {"name": "MaxSize-28@2x", "size":56},
      {"name": "MaxSize-28@3x", "size":83},

    ];

    var icon;
    for (i = 0; i < icons.length; i++)
    {
      icon = icons[i];
      doc.resizeImage(icon.size, icon.size, // width, height
                      null, ResampleMethod.BICUBICSHARPER);

      var destFileName = icon.name + ".png";

      doc.exportDocument(new File(destFolder + "/" + destFileName), ExportType.SAVEFORWEB, eosfw);
      doc.activeHistoryState = startState; // undo resize
    }

    alert("iOS Assest created!");
  }
}
catch (exception)
{
  // Show degbug message and then quit
	if ((exception != null) && (exception != ""))
    alert(exception);
 }
finally
{
    if (doc != null)
        doc.close(SaveOptions.DONOTSAVECHANGES);

    app.preferences.rulerUnits = initialPrefs; // restore prefs
}
