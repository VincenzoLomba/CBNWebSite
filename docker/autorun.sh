#!/bin/bash

# |> The launching script for the Tomcat Server <|
# How to use the tail command: https://askubuntu.com/questions/509881/tail-reading-an-entire-file-and-then-following
# sh /opt/tomcat/bin/catalina.sh stop

sh /opt/tomcat/bin/catalina.sh start
echo "Tomcat 9 started!"

tail -f /opt/tomcat/logs/catalina.out

