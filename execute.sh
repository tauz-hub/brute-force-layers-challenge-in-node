#!/usr/bin/env bash
npm i
node controller/createComb.js
npm i pm2 -g
pm2 start process0/cop.js
pm2 start process1/cop.js
pm2 start process2/cop.js
pm2 start process3/cop.js
pm2 start process4/cop.js
pm2 start process5/cop.js
pm2 start process6/cop.js
pm2 start process7/cop.js
pm2 start process8/cop.js
pm2 start process9/cop.js

echo -e "\e[0;32mOnline processes!\e[0m"