sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox ) => {
    "use strict";

    return Controller.extend("empdetailscustom.controller.View1", {
        onInit() {
        },
        handleSavePress : function () {

			var oEmpId = this.getView().byId("idEmp").getValue();
            var oEmpName = this.getView().byId("idName").getValue();
            var oEmpDept = this.getView().byId("idDept").getValue();
            var oEmpRole = this.getView().byId("idRole").getValue();
            var oEmpLocation = this.getView().byId("idLocation").getValue();
            var oEmpSalary = this.getView().byId("idSalary").getValue();
            var oEmpContact = this.getView().byId("idContact").getValue();
            var oEmpAge = this.getView().byId("idAge").getValue();
            var that = this;
            var oModel = this.getView().getModel();
             var oContext = oModel.bindList("/employee").create({
                "ID": parseInt(oEmpId),
                "Name": oEmpName,
                "Depertment": oEmpDept,
                "Role": oEmpRole,
                "Location": oEmpLocation,
                "Salary": oEmpSalary,
                "Contact" : oEmpContact.toString(),
                "Age": oEmpAge
            });
            oContext.created().then(() =>{
                MessageBox.success("Employee added successfully!");
                that.getView().byId("idEmp").setValue("");
           that.getView().byId("idName").setValue("");
            that.getView().byId("idDept").setValue("");
            that.getView().byId("idRole").setValue("");
            that.getView().byId("idLocation").setValue("");
            that.getView().byId("idSalary").setValue("");
            that.getView().byId("idContact").setValue("");
            that.getView().byId("idAge").setValue("");
            }).catch((err) => {
                MessageBox.error("Error adding Employee: " + err);
            });

		}
    });
});