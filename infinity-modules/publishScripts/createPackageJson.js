const fs = require('fs');
const path = require('path');
const directoryPath = '../lib';

const createDirectory = directoryPath => {
	return new Promise((resolve, reject) => {
		fs.access(directoryPath, fs.constants.F_OK, err => {
			if (err) {
				fs.mkdir(directoryPath, {
					recursive: true
				}, err => {
					if (err) { throw new Error(err); }
					resolve();
				});
			}
		});
	});
};

const createPackageFile = () => {
	const readStream = fs.createReadStream(path.join(__dirname, 'template/package.json'));
	const writeStream = fs.createWriteStream(path.join(__dirname, '../lib/package.json'));

	readStream.pipe(writeStream);
};

createDirectory(path.join(__dirname, directoryPath)).then(() => {
	createPackageFile();
});
