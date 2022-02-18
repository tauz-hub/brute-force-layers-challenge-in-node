#!/bin/bash
echo -e "\e[0;32mCreating processes..\e[0m"
sh ./createProcesses.sh
echo -e "\e[0;32mStart processes...\e[0m"
sh ./execute.sh