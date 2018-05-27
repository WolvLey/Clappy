class Utilities {

    static parseFile(filename) {
        const fs = require('fs'),
            path = require('path'),
            filePath = path.join(__dirname, filename);

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

    static writeToFile(file, text) {
        const fs = require('fs'),
            path = require('path')
        filePath = path.join(__dirname, file);

        return new Promise((reject) => {
            fs.writeFile(filePath, text, (err) => {
                if (err) {
                    reject(err)
                    return
                }
                console.log(`Text was saved: ${filePath}`)
            })
        })
    }
}

module.exports = Utilities;