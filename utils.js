class Utilities {

    static parseFile(file) {
        const fs = require('fs'),
            path = require('path'),
            filePath = path.join(__dirname, file);

        return new Promise((resolve) => {
            fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    console.error(err);
                }
            });
        });
    }
}

module.exports = Utilities;