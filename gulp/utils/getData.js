var fs, path;

path = require('path');

fs = require('fs');

module.exports = function(dataFile) {
	var dataFilePath, dataPath;
	dataPath = (path.resolve(path.join('.', 'app', 'resources', 'assets', 'data'))) + path.sep;
	dataFilePath = path.resolve(path.join(dataPath, /\.json$/.test(dataFile) && dataFile || dataFile + '.json'));
	if (dataPath !== dataFilePath.slice(0, dataPath.length)) {
		throw new Error('Data path is not in data directory. Abort due potential data disclosure.');
	}
	return JSON.parse(fs.readFileSync(dataFilePath));
};
