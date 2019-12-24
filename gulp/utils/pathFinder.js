var paths = require('../paths');

module.exports = {
	vendor: function vendor(file) {
		return paths.vendor + file;
	},
	component: function component(file) {
		return paths.components + file;
	},
	app: function app(file) {
		return paths.appScripts + file;
	}
};
