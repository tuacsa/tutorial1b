/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"accenturetutorial1b.ui5./tutorial1b/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
