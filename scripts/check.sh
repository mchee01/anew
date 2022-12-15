#!/bin/bash

mongodb=$(ps -ef | grep 'node' | grep 'mongo')
mysql=$(ps -ef | grep 'node' | grep 'mysql')

second1=$(echo ${mongodb} | cut -d " " -f2)
second2=$(echo ${mysql} | cut -d " " -f2)

for var in $second1 $second2
do
    if [ -n ${var} ]; then
        result=$(kill -9 ${var})
        echo "${var} process is killed."
    else
        echo "running process not found."
    fi
done