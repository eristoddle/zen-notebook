# Zen Notebook

[![Join the chat at https://gitter.im/eristoddle/zen-notebook](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/eristoddle/zen-notebook?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Update - 9/10/2016

Well, I got busy after a while away. I am upgrading the code so I can create phone apps also. And then on to bug fixes and features. So currently on this branch, running the gulp commands will only run or build the example app until I get the Zen Notebook code updated for the new stack.

The old version of the app using Angular 1 and Node Webkit will always be available on the `legacy-angular1-nodewebkit` branch. And last time I checked everything built correctly, but I will not be supporting that version.

The new version will be able to open the data files of the old version. I am just changing the code stack.

## A Distraction Free Journal/Notebook/Diary for Writing Practice

When I was 14, I bought Writing Down the Bones by Natalie Goldberg. I have kept up with writing practice off and on for over two decades now. Many times in the last few years, I have searched for something in an electronic version that I could use easily from a laptop, when I wanted to. Something I could just click on and start writing with. If I got caught up in the setup and configuration of the damn tool, the moment could be gone fast, because at the same time I like to write, I am also a nerd at heart and can tweak out on this type of stuff. So the only solution is to get to the writing quickly and not have to worry about anything getting in the way of that.

I found [Red Notebook](http://rednotebook.sourceforge.net) and [ZenPen](http://github.com/tholman/zenpen) in the same week and an idea just came together.

And of course, being the nerd again, thought of all the other writing tools I would want distraction free and simplified. So the feature wish list keeps growing.

## Screenshot

![](http://stephanmiller.com/sites/default/files/styles/large/public/screenshot_0.png)

## Screencast

[YouTube Screencast of Zen Notebook](https://www.youtube.com/watch?v=XuOEtBkhGsc)

## Features Currently in Executable Version

The application is still in alpha. The most recently version will be in the source code and in the Mac build because I am currently working on a Mac. I will keep the executables updated on a regular basis when I have added important features or fix major bugs. But I can tell I didn't start creating executables until I had a version I trusted to use on a daily basis as a replacement for Red Notebook. And most of the beta version punch list items come from bugs I found and ideas I had while using it every day.

- Distraction free writing environment: All menus and configuration options are hidden until needed. A small barely visible nav bar at the top left of the GUI becomes 100% visible when hovered with the mouse. The buttons activate various menus. The application can be made full screen.
- Emulates a daily journal/diary/notebook in an electronic application: Written content is saved to dates and the date can be changed used an interactive calendar
- Cross platform: Executables for Windows, Mac and Linux
- 7 themes: Clicking the yin-yang nav button will change the theme
- Custom typewriter theme: uses the MyUnderwood Font and has typewriter sound effects
- Custom relax theme: beta, still a little rough, has a background that changes color and a rainfall background sound
- Journal saved to simple JSON format

## Download Zen Notebook Executables

These are in zip format. They are not installers. I do plan on working on installation package eventually, but for now, you can unzip the correct file for your operating system and run the executable for in the resulting folder. For the Mac version, just unzip the file and in it you will find a Zen Notebook app you can drag to your Application Folder

### Mac

[Download](https://www.dropbox.com/s/4y4whcn7imlo6cy/mac.zip?dl=1)

### Windows

Note: Sounds are currently deactivated in the Windows version. I have tracked the issues down to sounds. I am not sure if this is because the sounds get loaded from files or using the sounds themselves in the Windows version.

[Download](https://www.dropbox.com/s/us6ywvkld54t1mi/windows.zip?dl=1)

### Linux 32 bit

[Download](https://www.dropbox.com/s/i835wrbqmx5598h/linux-x32.zip?dl=1)

### Linux 64 bit

[Download](https://www.dropbox.com/s/9tk3zr6dtkmgv2g/linux-x64.zip?dl=1)

## Beta Version Punch List

- [ ] Remove all legacy cruft from master branch
      - [ ] get current example app building correctly for all platforms
      - [ ] package.json clean up
      - [ ] convert grunt tasks to gulp tasks
      - [ ] find a new one shot release workflow using electron-packager and gulp
      - [ ] bower to npm ?
      - [ ] search and destroy all remaining files and folders from old application
      - [ ] Convert AngularJS code to Angular2
      - [ ] Merge Angular2 branch into master
- [ ] Add Tags
- [ ] Add Search
- [ ] Add Stats
- [ ] Fix bug when content footer pops up from bottom when mouse is hovered
- [ ] Fix info links to open in system browser, alternately in iframe
- [ ] Add accordian/collapsible divs to left bar
- [ ] Optimize code
- [ ] Make it also a simple writing tool where files can be opened and exported to PDF or html from markdown or rtf
- [ ] Smooth and mellow relax colors
- [ ] Manage sound levels
- [ ] Allow for custom theme: font, background, text color
- [ ] Possibly make typewriter theme scroll paper from bottom
- [ ] Typewriter combine carriage return sounds into one? or play them right after the other
- [ ] Fix sound effects on typewriter for cylinder clicking sound
- [ ] Add more sounds to relax theme
- [ ] Figure out to minimize file size using background sounds, api? cached download on demand? stream from my own server?
- [ ] Fix margin bottom on content when taller than window. No text sitting on the bottom
- [ ] Add more typewriter styling
- [ ] Fix month forward arrow on calendar
- [ ] Double check that all functionality works from scratch without existing journal
- [ ] Add configuration loading
- [ ] Create configuration menu
- [ ] Fix today button
- [ ] Warn to save content on close is no file exists
- [ ] Make persistent storage agnostic
- [ ] Create services of sound
- [ ] Dates with content don't highlight until after a click on the calendar
- [ ] Clicks on calendar don't change word counts
- [ ] Intercept copy and paste to remove any html markup
- [ ] Add Markua support
- [ ] Create Leanpub component
- [ ] Possible json/folder mode switch which will save work in one json file or separate text files with meta data files
- [ ] Add self updating
- [ ] Create application service that can map key codes events to functions in application and component
- [ ] Add testing
- [ ] Add jsdoc
- [ ] Slideshow/presentation functionality
- [ ] Add tooltip type hover editor for markdown, like Evernote or Typora, that can be switched off and on.
- [ ] Add line by line markdown preview instead of dual pane preview

## Future Roadmap and Wish List

This is my wish and idea list

- [ ] Sync content to cloud services instead of just the file system
- [ ] Work on integrating Cordova or PhoneGap to and build first Andriod and iOS versions
- [ ] Flesh out website. Write writing prompts integration and consider users, writing groups, online version and journal post permissions.
- [ ] Write first full featured plugin which will have a folder/document structure similar to Scrivener. This will require a more advanced theming system to change up element display (masonry block, outline, editing).
- [ ] Integrate PanDoc and consider a web service
- [ ] Create a plugin system similar to Atom's
- [ ] Add Pomodoro
- [ ] Add timed writing exercises
- [ ] Add simple project mode for a folder of markdown files

## Development

1. Pull down the repo
2. Run `npm install gulp ionic cordova electron -g` unless you already have those installed globally
3. Run `npm install`
4. `ionic serve` will run the local Ionic Server.
5. `ionic build` will build the web, Android and IOS apps.
6. `gulp electron:all` will build the Windows, OSX, and Linux binary applications.
7. `gulp electron:build` will build installation applications for Windows, OSX, and Linux

_Note that electron-builder used to create the installers has it's only requirements based on which platform you are building on listed [here](https://www.npmjs.com/package/electron-builder)_

_Note that currently I am still converting the old app into the new Ionic app and until that is done, the process able will only run an example boilerplate application._

I am following the conventions of Ionic and Electron for the most part, so for further info, please see their respective documentation.

Don't worry about the Laravel backend for now. It has never been production ready and I started work on it for the future: phone app project syncing, PanDoc compiling on the server, collaboration, etc. But currently all functionality is through local files. Also, as it stands now, the server part of the application was last updated two years ago and I have plenty of work migrating the code and fixing all the bugs before I even get to that again.

That being said, until I have a server or Dropbox syncing in place, I am not sure how useful the phone apps that result will be. I currently sync the files my desktop apps use by saving the notebook.json file to a Dropbox folder and I just point the app to that file on whichever computer I am on. It has worked for 2 years now and I have moved through all three platforms. And currently I jump back and forth from Windows to Linux almost daily.

## Technologies Used

- Electron : <http://electron.atom.io/docs/>
- Electron Builder: <https://www.npmjs.com/package/electron-builder>
- Ionic2 (+ Angular2) : <http://ionicframework.com/docs/v2/getting-started/installation/>
- Gulp
- Laravel
- Buzz : <http://buzz.jaysalvat.com/>
- Markua : Not yet but will be adding

## Random Windows Issues

Okay, I kept running into read-only issues and EPERM errors on Windows.

I found a lot of the time it had to do with having an electron app running I couldn't see that owned the dist folder. Check the task manager.

To build the OSX on Windows, you need to be running cmd as Admin.

- <https://support.microsoft.com/en-us/kb/326549>
- <https://www.dropbox.com/help/72>
- <https://github.com/electron-userland/electron-packager/issues/402>
- <http://stackoverflow.com/questions/29483772/remove-windows-file-readonly-attribute-in-gulp-file>
- <https://github.com/gulpjs/gulp/issues/660>

## Software Features I May Emulate

- WriteMonkey - <http://writemonkey.com/>
- Ulysses - <http://www.ulyssesapp.com/>
- Scrivener - <http://www.literatureandlatte.com/scrivener.php>
- Q10 - <http://www.baara.com/q10/>
- Scapple - <https://www.literatureandlatte.com/scapple.php>
- Typora = <http://www.typora.io/>

## Component Ideas

- Notebook: Default mode, a diary
- Nanowrimo: Simple novel structure with word count and progress
- Leanpub: Work from a Leanpub dropbox project folder
- Jekyll: Work from a Jekyll blog git repo
- Markdown Project: Folder of markdown files
