#!/bin/bash

set -- $(getopt -q ab:cd "$@")

echo
while [ -n "$1" ]
do
	case "$1" in
		-a) echo "Fount the -a option" ;;
		-b) param
