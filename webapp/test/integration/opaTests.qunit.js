/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["accenture/tutorial1b/ui5/tutorial1b/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
