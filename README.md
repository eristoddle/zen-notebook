# Zen Notebook #

##A Distraction Free Journal/Notebook/Diary for Writing Practice

When I was 14, I bought Writing Down the Bones by Natalie Goldberg. I have kept up with writing practice off and on 
for over two decades now. Many times in the last few years, I have searched for something in an electronic version 
that I could use easily from a laptop, when I wanted to. Something I could just click on and start writing with. If I
 got caught up in the setup and configuration of the damn tool, the moment could be gone fast, 
 because at the same time I like to write, I am also a nerd at heart and can tweak out on this type of stuff. So the 
 only solution is to get to the writing quickly and not have to worry about anything getting in the way of that.
 
I found [Red Notebook](http://rednotebook.sourceforge.net) and [ZenPen](http://github.com/tholman/zenpen) in the same week and an idea just came 
together. 

And of course, being the nerd again, thought of all the other writing tools I would want distraction free and 
simplified. So the feature wish list keeps growing.

##Screenshot

![](http://stephanmiller.com/sites/default/files/styles/large/public/screenshot_0.png)

##Screencast

[YouTube Screencast of Zen Notebook](https://www.youtube.com/watch?v=XuOEtBkhGsc)

##Features Currently in Executable Version

The application is still in alpha. The most recently version will be in the source code and in the Mac build because 
I am currently working on a Mac. I will keep the executables updated on a regular basis when I have added 
important features or fix major bugs. But I can tell I didn't start creating executables until I had a version I 
trusted to use on a daily basis as a replacement for Red Notebook. And most of the beta version punchlist items come 
from bugs I found and ideas I had while using it every day.

* Distraction free writing environment: All menus and configuration options are hidden until needed. A small barely 
visible nav bar at the top left of the GUI becomes 100% visible when hovered with the mouse. The buttons activate 
various menus. The application can be made full screen.
* Emulates a daily journal/diary/notebook in an electronic application: Written content is saved to dates and the 
date can be changed used an interactive calendar
* Cross platform: Executables for Windows, Mac and Linux
* 7 themes: Clicking the yin-yang nav button will change the theme
* Custom typewriter theme: uses the MyUnderwood Font and has typewriter sound effects
* Custom relax theme: beta, still a little rough, has a background that changes color and a rainfall background sound
* Journal saved to simple JSON format

##Download Zen Notebook Executables

These are in zip format. They are not installers. I do plan on working on installation package eventually, 
but for now, you can unzip the correct file for your operating system and run the executable for in the resulting 
folder. For the Mac version, just unzip the file and in it you will find a Zen Notebook app you can drag to your 
Application Folder

###Mac

[Download](http://stephanmiller.com/sites/default/files/software/mac.zip)

[Alternate Download](https://www.dropbox.com/s/vjauq3bvhx6ffo9/mac.zip?dl=0)

###Windows

Note: Sounds are currently deactivated in the Windows version. I have tracked the issues down to sounds. I am not 
sure if this is because the sounds get loaded from files or using the sounds themselves in the Windows version.

[Download](http://stephanmiller.com/sites/default/files/software/windows.zip)

[Alternate Download](https://www.dropbox.com/s/1ubg2mv830yq7vw/windows.zip?dl=0)

###Linux 32 bit

[Download](http://stephanmiller.com/sites/default/files/software/linux-x32.zip)

[Alternate Download](https://www.dropbox.com/s/a3jxe3qchhm9547/linux-x32.zip?dl=0)

###Linux 64 bit

[Download](http://stephanmiller.com/sites/default/files/software/linux-x64.zip)

[Alternate Download](https://www.dropbox.com/s/acmielhprw1c6t2/linux-x64.zip?dl=0)

##Beta Version Punchlist

* Add Tags
* Add Search
* Add Stats
* Fix bug when content footer pops up from bottom when mouse is hovered
* Fix info links to open in system browser, alternately in iframe
* Add accordian/collapsible divs to left bar
* Reorganize and refactor application for modularity. Separate gui and notebook functionality. Make notebook the 
first plugin
* Optimize code
* Have a more automated build process with install packages, bower, minification, etc.
* Make it also a simple writing tool where files can be opened and exported to PDF or html from markdown or rtf
* Smooth and mellow relax colors
* Manage sound levels
* Allow for custom theme: font, background, text color
* Possibly make typewriter theme scroll paper from bottom
* Typewriter combine carriage return sounds into one? or play them right after the other
* Fix sound effects on typewriter for cylinder clicking sound
* Add more sounds to relax theme
* Figure out to minimize file size using background sounds, api? cached download on demand? stream from my own server?
* Fix margin bottom on content when taller than window. No text sitting on the bottom
* Add more typewriter styling
* Fix month forward arrow on calendar
* Double check that all functionality works from scratch without existing journal
* Add markdown support
* Add configuration loading
* Create configuration menu
* Fix today button
* Warn to save content on close is no file exists
* Make persistent storage agnostic
* Create services of sound and storage
* Dates with content don't highlight until after a click on the calendar
* Clicks on calendar don't change word counts
* Intercept copy and paste to remove any html markup
* Create a more complex parser so saved content fits format: text, markdown, etc.
* Add Markua support
* Create Leanpub component
* Possible json/folder mode switch which will save work in one json file or separate text files with meta data files
* 

##Futute Roadmap

This is my wish and idea list

* Sync content to cloud services instead of just the file system
* Work on integrating Cordova or PhoneGap to and build first Andriod and iOS versions
* Flesh out website. Write writing prompts integration and consider users, writing groups, 
online version and journal post permissions.
* Write first full featured plugin which will have a folder/document structure similar to Scrivener. This will 
require a more advanced theming system to change up element display (masonry block, outline, editing).
* Integrate PanDoc and consider a web service

##Source Code in Ubuntu 14.04

In order to get nodewebkit to work on Ubuntu 14.04 and later, you will have to make sure to do something like this. I
 would explain it more, but I forget how I figured this out because it was months ago, and now that it finally works,
  I only care that it does. So it may or may not work for you. Anyway you know the process.
  
  * Try to run the project
  * If there is an error, copy it and search on Google
  * Spend the next hour or two figuring out what the issue is
  
Anyway, this page here explains a few complicated ways to fix this issue: 
    https://github.com/rogerwang/node-webkit/wiki/The-solution-of-lacking-libudev.so.0

But I found out that just creating a symbolic link was easier.

`sudo ln -sf /lib/x86_64-linux-gnu/libudev.so.1 /lib/x86_64-linux-gnu/libudev.so.0`

##My Current Workflow

* I am currently working on a Mac
* I build the Windows and two Linux versions using [Web2Executable](https://github.com/jyapayne/Web2Executable)
* Ironically that did not build the Mac version correctly because some of the necessary nodewbkit files were missing 
and since I am not a Mac developer I built the initial Mac version with [nuwk!](http://codeb.it/nuwk/) which managed 
to get everything I needed for nodewebkit assembled correctly but screwed up the app folder. So I ripped that apart 
and figured out the source files are stored at Resources/App.nw which a zip file of the app folder. So I manually 
fixed that App and then wrote the mac_build.sh script to do that automatically for me. It just wraps up the app 
folder and puts it in the right place in the App and leaves all the nodewebkit files where they are. It gives me a 
quick way to test the current dev version in the wild. I do use the software now that it is functional.
* There are two package.json files. The one in the root folder is the dev version and the one in the app folder is 
the release version. In the dev version I leave the frame and access to developer tools in webkit. Either can be run 
with `npm start`
* I tend to write sloppy code to get things done and see if they work and then go back and clean up. I am liking 
Angular in that is is helping me do this when I choose too. This is my first project in Angular and I am used to PHP 
frameworks. I am still not sure that it is the best choice. Others I am considering are Ember.js, 
React.js and Backbone with Marionette. My familiarity with dependency injection has me liking Angular and I do like 
two way data binding, though I hardly use it, since the main form is not a form at all but a contenteditable region 
and currently not supported by Angular for two way data binding. But I figured out my way around it. I figure once I 
get more familiar with one framework then I can survey the others. Once I am sure I have a beta version and know how 
I want the final application is structured, I can make a better choice among the various JavaScript frameworks. 
Currently leaning toward React.js.
* I am now using grunt to concat and minify the js and css instead of head.js. It seemed the windows versions of the 
software had an issue loading the javascript files in the correct order or something. Only a windows issue that I 
solved by concatenating the js files.

##Software Features I May Emulate

- WriteMonkey - http://writemonkey.com/
- Ulysses - http://www.ulyssesapp.com/
- Scrivener - http://www.literatureandlatte.com/scrivener.php
- Q10 - http://www.baara.com/q10/
- Pen - https://github.com/sofish/pen
- Scapple - https://www.literatureandlatte.com/scapple.php

##Technologies Used

- NodeWebkit : https://github.com/rogerwang/node-webkit
- AngularJS  : https://angularjs.org/
- Sass : http://sass-lang.com/
- Grunt : 
- Laravel : 
- Buzz : http://buzz.jaysalvat.com/
- Head : http://headjs.com/
- Marked : https://github.com/chjj/marked
- ngStorage : https://github.com/gsklee/ngStorage
- Markua : Not yet but will be adding
