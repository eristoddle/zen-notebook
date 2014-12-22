#!/bin/sh

echo "Zipping and moving executables"
cd ..
cd "build/Zen Notebook"
zip -r linux-x32.zip linux32
zip -r linux-x64.zip linux64
zip -r mac.zip osx
zip -r windows.zip win
mv linux-x32.zip ../../../../xampp/htdocs/af23/sites/default/files/software/linux-x32.zip
mv linux-x64.zip ../../../../xampp/htdocs/af23/sites/default/files/software/linux-x64.zip
mv mac.zip ../../../../xampp/htdocs/af23/sites/default/files/software/mac.zip
mv windows.zip ../../../../xampp/htdocs/af23/sites/default/files/software/windows.zip