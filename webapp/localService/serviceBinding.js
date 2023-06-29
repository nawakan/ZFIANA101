function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZA_CU_Q_FI_016_CDS/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}