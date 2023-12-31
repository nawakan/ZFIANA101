(function () {
	"use strict";
	/*global sap, jQuery */

	/**
	 * @fileOverview Application component to display information on entities from the GWSAMPLE_BASIC
	 *   OData service.
	 * @version @version@
	 */
	jQuery.sap.declare("com.cu.ovp.fi002.ZCU_OVP_FI002.Component");

	jQuery.sap.require("sap.ovp.app.Component");

	sap.ovp.app.Component.extend("com.cu.ovp.fi002.ZCU_OVP_FI002.Component", {
		metadata: {
			manifest: "json"
		}
	});
}());