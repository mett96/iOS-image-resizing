// Turn debugger on. 0 is off.
// $.level = 1;

try
{
  var originalImage = File.openDialog("Select a square 1024x1024 PNG.", "*.png", false);

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
    else if ((doc.width < 1024) && (doc.height < 1024))
    {
        throw "Image is too small!  Image must be at least 1024x1024 pixels.";
    }

    // Select the destination folder
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
      {"name": "AppStoreiOS-1024", "size":1024},

      {"name": "iPhoneApp-60", "size":60},
      {"name": "iPhoneApp-60@2x", "size":120},
      {"name": "iPhoneApp-60@3x", "size":180},

      {"name": "iPadPro-83.5", "size":83.5},
      {"name": "iPadPro-83.5@2x", "size":167},

      {"name": "iPad-76", "size":76},
      {"name": "iPad-76@2x", "size":152},

      {"name": "spotlight-40", "size":40},
      {"name": "spotlight-40@2x", "size":80},
      {"name": "spotlight-40@3x", "size":120},

      {"name": "settings-29", "size":29},
      {"name": "settings-29@2x", "size":58},
      {"name": "settings-29@3x", "size":87},

      {"name": "notification-20", "size":20},
      {"name": "notification-20@2x", "size":40},
      {"name": "notification-20@3x", "size":60},
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

    alert("iOS Icons created!");
  }
}
catch (exception)
{
  // Show debug message and then quit
	if ((exception != null) && (exception != ""))
    alert(exception);
 }
finally
{
    if (doc != null)
        doc.close(SaveOptions.DONOTSAVECHANGES);

    app.preferences.rulerUnits = initialPrefs; // restore prefs
}
