#!/bin/bash

man=30
woman=20

if [ $man -lt $woman ]
then
	echo woman = $woman
else
	echo man = $man
fi
