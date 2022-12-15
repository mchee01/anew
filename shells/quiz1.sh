#!/bin/bash

echo -n "Input Woman Age : "
read woman
echo -n "Input Man Age : "
read man

if [ $woman -gt $man ]; then
	echo old Woman
elif [ $woman -eq $man ]; then
	echo same
else
	echo old man
fi
