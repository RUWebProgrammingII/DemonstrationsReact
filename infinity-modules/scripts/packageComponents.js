const fs = require('fs');
const path = require('path');

const directoryPath = '../lib';

const createDirectory = directoryPath => {
    fs.access(directoryPath, fs.constants.F_OK, err => {
        if (err) {
            fs.mkdir(directoryPath, { recursive: true }, err => {
                console.log(err);
            });
        }
    });
};

const createPackageFile = () => {
    fs.writeFile(path.join(__dirname, '../lib/package.json'));
};

createDirectory(path.join(__dirname, directoryPath));
createPackageFile();
