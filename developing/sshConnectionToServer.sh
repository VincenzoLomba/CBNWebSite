#!/bin/bash

if [ -z "${CBN_PEM}" ]; then
	echo ""
	echo " An environment variable named CBN_PEM has to be defined!"
	echo " This environment variable must contain the full path of the PEM file (to use in order to establish the ssh connection)"
else
	SERVER_DOMAIN=campusbynight.it
	dashes=`eval printf -- '-%.0s' {1..${#SERVER_DOMAIN}}` #(https://stackoverflow.com/a/23087599/4244130)
	echo ""
	echo "+---------------------------------------${dashes}+"
	echo "| SSH connection to the remote server: ${SERVER_DOMAIN} |"
	echo "+---------------------------------------${dashes}+"
	echo ""
	ssh -i "${CBN_PEM}" ubuntu@${SERVER_DOMAIN}
fi

echo ""
read -n1 -r -p "Press any key to continue..." key #(https://stackoverflow.com/questions/92802/what-is-the-linux-equivalent-to-dos-pause)