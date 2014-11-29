#!/bin/sh

cd ..
cd "build/Zen Notebook"
zip linux-x32.zip linux32
zip linux-x64.zip linux64
zip mac.zip osx
zip windows.zip win
mv linux-x32.zip ../../../../xampp/htdocs/debian/af23/sites/default/files/software/linux-x32.zip
mv linux-x64.zip ../../../../xampp/htdocs/debian/af23/sites/default/files/software/linux-x64.zip
mv mac.zip ../../../../xampp/htdocs/debian/af23/sites/default/files/software/mac.zip
mv windows.zip ../../../../xampp/htdocs/debian/af23/sites/default/files/software/windows.zip