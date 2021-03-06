# iOS-image-resizing

## Description
Resizing images and icons for iOS apps development will be simplified by the scripts inlcuded in iOS-image-resizing.
\
**Create-iOS-Icon** script, given a 1024x1024 .png icon, generate all necessary icon sizes.
\
Also **create-iOS-Assest** script, given a icon at least 100x100, creates all necessary images sizes 

## Contents

### Create-iOS-Icon
Script receives in input a image .png at least 1024x1024, it must be squared. 
\
As indicated by Apple in [Human Interface Guidelines - App Icon](https://developer.apple.com/ios/human-interface-guidelines/icons-and-images/app-icon/), script creates all necessary size icon:
* **_App Icon Sizes_**

|Device or context.        |Icon size |
|:---------------------|:--------|
|iPhone|180px × 180px (60pt × 60pt @3x)|
||120px × 120px (60pt × 60pt @2x)|
|iPad Pro|167px × 167px (83.5pt × 83.5pt @2x)|
|iPad, iPad mini|152px × 152px (76pt × 76pt @2x)|
|App Store|1024px × 1024px (1024pt × 1024pt @1x)|

* **_Spotlight, Settings, and Notification Icons_**

|Device|	Spotlight icon size|
|:---|:---|
|iPhone|	120px × 120px (40pt × 40pt @3x)|
||80px × 80px (40pt × 40pt @2x)|
|iPad Pro, iPad, iPad mini	|80px × 80px (40pt × 40pt @2x)|

|Device|	Settings icon size|
|:---|:---|
|iPhone|	87px × 87px (29pt × 29pt @3x)|
||58px × 58px (29pt × 29pt @2x)|
|iPad Pro, iPad, iPad mini	|58px × 58px (29pt × 29pt @2x)|

|Device|	Notification icon size|
|:---|:---|
|iPhone|	60px × 60px (20pt × 20pt @3x)|
||40px × 40px (20pt × 20pt @2x)|
|iPad Pro, iPad, iPad mini|	40px × 40px (20pt × 20pt @2x)|

### Create-iOS-Assest
Script receives in input a image .png at least 100x100, it must be squared. 
\
As indicated by Apple in [Human Interface Guidelines - Custom Icon](https://developer.apple.com/ios/human-interface-guidelines/icons-and-images/custom-icons/), script creates all necessary size icon:

* **_Navigation Bar and Toolbar Icon Size_**


|Target sizes|	Maximum sizes|
|:---|:---|
|75px × 75px (25pt × 25pt @3x)|	83px × 83px (27.67pt × 27.67pt @3x)|
|50px × 50px (25pt × 25pt @2x)|	56px × 56px (28pt × 28pt @2x)|

## Installation

* Save scripts to:
 * **Win**: C:\Program Files\Adobe\Adobe Utilities\ExtendScript Toolkit CS5\SDK
 * **Mac**: /Applications/Utilities/Adobe Utilities/ExtendScript Toolkit CS5/SDK
* Restart Photoshop

## Usage

* Open Photoshop
* Select File > Scripts > Create-iOS-Icons or Create-iOS-Assest
* Select the prepares Image (1024x1024 or 100x100)
* The different resized icons will get saved to the same folder that original image is in
