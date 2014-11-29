#!/bin/sh

#Mac
cd app
zip -r App.nw ./*
mv ./App.nw "../build/Zen Notebook/mac/Zen Notebook.app/Contents/Resources/App.nw"

#Windows

#Linux 32

#Linux 64
#cat /opt/node-webkit/nw ./my-app.nw > ../build/linux/my-app && chmod +x ../build/linux/my-app
