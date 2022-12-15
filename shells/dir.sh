#!/bin/bash

a=$1

if [ -d $a ]; then
	echo $a directory is exit..!!
else
	echo $a directory is not exit..!!
fi
