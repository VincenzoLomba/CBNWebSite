#!/bin/bash

# How can I check if a program exists from a Bash script? (https://stackoverflow.com/questions/592620/how-can-i-check-if-a-program-exists-from-a-bash-script)
# What does &> do in bash? (https://stackoverflow.com/questions/24793069/what-does-do-in-bash)

WEBSITE_NAME=cbnwebsite
dashes=`eval printf -- '-%.0s' {1..${#WEBSITE_NAME}}` #(https://stackoverflow.com/a/23087599/4244130)
echo ""
echo ""
echo "+----------------------------${dashes}+"
echo "| Building Angular website: ${WEBSITE_NAME} |"
echo "+----------------------------${dashes}+"
	
while ! command -v ng &> /dev/null
do
	echo ""
	echo "The Angular CLI (Command Line Interface) must be installed in order to build the website!"
	echo "Visit 'https://angular.io/cli' for the installation guide."
	read -n1 -r -p "After installing the Angular CLI, press any key to retry to build the website..." key #(https://stackoverflow.com/questions/92802/what-is-the-linux-equivalent-to-dos-pause)
done

cd ../
cd frontend
echo ""

exeAndShow() { echo "\$ $@" ; "$@" ; } #(https://stackoverflow.com/a/23342259/4244130)
exeAndShow ng b --configuration production

echo "+---------------------------${dashes}+"
echo "| Zipping Angular website: ${WEBSITE_NAME} |"
echo "+---------------------------${dashes}+"

npm install zip
zip -r dist/${WEBSITE_NAME}/ROOT.zip dist/${WEBSITE_NAME}