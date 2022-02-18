
import httpx from 'httpx'

import { readFile } from 'fs/promises';
const json = JSON.parse(
    await readFile(
        new URL('../database.json', import.meta.url)
    )
);
const listLink = json.data


import { fileURLToPath } from 'url';
import path from 'path';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const numberProcessOrder = parseInt(path.basename(__dirname).replace('process', ''));


const tam = listLink.length 

let i = numberProcessOrder
do {
    await httpx.request(listLink[i]).then(async (response) => {
        console.log(listLink[i] + '        |        ' +  'Contagem: ' + i )
        if (response.data) {
            const obj = {
                data: listLink[i]
            }

            await fs.writeFile('BINGO.json',JSON.stringify(obj), (err) => {
                if (err) {
                    console.log(err);
                }
            });
            i = tam;
        }
    }, (err) => {
        console.log(err)
    });
    i += 10;
} while (i < tam)


