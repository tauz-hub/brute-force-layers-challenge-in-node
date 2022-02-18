import fs from 'fs'
const list =
    'asdfghjklqwertyuiopzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'.split('');

const listLink =[]

list.forEach(char1 => {
    list.forEach(char2 => {
        list.forEach(char3 => {
        listLink.push(`https://4d${char1}jU${char2}9${char3}.layers.digital`)
        });
    });
});

const obj = {
    data: listLink
}

fs.writeFile('database.json',JSON.stringify(obj), function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
}); 