#!/usr/bin/env bash

for i in 0 1 2 3 4 5 6 7 8 9; do
    echo  "\e[0;32m-->Cloning the $i process...\e[0m"
    mkdir -p "process$i"
    cp -r "./templete/cop.js" "./process$i"
done

echo -e "\e[0;32mFinished! \e[0m"
