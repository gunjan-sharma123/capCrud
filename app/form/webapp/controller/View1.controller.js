sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/model/odata/v2/ODataModel"
    
],
// gunjan
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment,MessageToast,ODataModel,MessageBox) {
        "use strict";

        return Controller.extend("form.controller.view1", {
            Model: null, // Declare the oModel variable
            onInit: function () {
                
            },
            onPress: function() {
                if (!this._oDialog) {
                    this._oDialog = sap.ui.xmlfragment("form.view.fragment.MyDialogform", this);
                    this.getView().addDependent(this._oDialog);
                }
                this._oDialog.open();
            },
            onSave: function () {
                var oModel = this.getView().getModel(); // Get the model from the view
                var oData = {
                    firstName: "priya",
                    lastName: "jha",
                    MobileNo: "9876543212"
                };
                oModel.create("/User", oData, {
                    success: function () {
                       
                        // MessageBox.success("Project 1234567 was created and assigned to team \"ABC\".")
                        alert("done")
                    },
                    error: function (oError) {
                        // this._oDialog.close();
                        //MessageBox.error("Select a team in the \"Development\" area.\n\"Marketing\" isn't assigned to this area.");
                        alert("error")
                    }
                   
                });
                this._oDialog.close();
            },
            ondelete: function(oEvent) {
                var oTable = this.getView().byId("idProductsTable");
                var oSelectedItem = oEvent.getSource().getParent(); // Get the selected item
                var oModel = this.getView().getModel(); // Assuming the model is bound to the view
            
                // Get the context binding path of the selected item
                var sPath = oSelectedItem.getBindingContext().getPath();
            
                // Remove the item from the OData model (which will trigger a deletion in the backend)
                oModel.remove(sPath, {
                    success: function() {
                        sap.m.MessageToast.show("Item deleted successfully");
                        
                        // Remove the item from the UI table
                        oTable.removeItem(oSelectedItem);
                    },
                    error: function(oError) {
                        sap.m.MessageBox.error("Error deleting item: " + oError.responseText);
                    }
                });
            },
          
            
            
    
            onCancel: function() {
                this._oDialog.close();
            }
        });
    });
