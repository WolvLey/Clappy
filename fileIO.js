const fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, 'rules.info');

let rules;

function read() {
    fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
        if (!err) {
            rules = data;
        } else {
            console.log(err);
        }
    });
}
module.exports =read;