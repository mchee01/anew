#!/bin/bash
if [ $# -eq 0 ]; then
	echo "Not found contry name."
else
	case "$1" in
		ko)
			echo "Seoul" ;;
		us)
			echo "Washington" ;;
		cn)
			echo "Beijing" ;;
		jp)
			echo "Tokyo" ;;
		*)
			echo "$1 not have list" ;;
	esac
fi
