#!/bin/sh

#TODO: Make this a general all around build script that checks the folder for existing included files
#Adds them if needed and then wraps up the new source files
#Minification
#TODO: Switch to a build system like grunt

#Mac
cd app
zip -r App.nw ./*
mv ./App.nw "../build/Zen Notebook/mac/Zen Notebook.app/Contents/Resources/App.nw"

#Linux
##zip all files to nw archive
#zip -r my-app.nw ./*
##copy nw.pak from current build node-webkit
#cp /opt/node-webkit/nw.pak ./nw.pak
##compilation to executable form
#cat /opt/node-webkit/nw ./my-app.nw > ../build/linux/my-app && chmod +x ../build/linux/my-app
##move nw.pak to build folder
#mv ./nw.pak ../build/linux/nw.pak
##remove my-app.nw
#rm ./my-app.nw
##run application
#../build/linux/my-app