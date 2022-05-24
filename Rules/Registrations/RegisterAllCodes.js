//import { v4 as uuidv4 } from 'uuid';
//import {v4 as uuidv4} from 'uuid';
//import { uuid } from 'uuidv4';

let context;

export default async function RegisterAllCodes(clientAPI) {
    context = clientAPI;
    //GET LOCATION
    var location = context.evaluateTargetPath("#Page:Scanner_ScanCodes/#Control:FCListPicker/#SelectedValue");
    if (location != null && location.length > 0) {
        //GET CODES
        var note = context.evaluateTargetPath("#Page:Scanner_ScanCodes/#Control:FCNote");
        var scannedlots = ["empty"];
        if (note.getValue().length > 0) {
            scannedlots = note.getValue().split(";");
        }
        //GET LOTS FROM LOCATION
        var lots = await GetLotsFromLocation(location);
        //MAKE REGISTRATIONS
        lots.forEach(lot => {
            if (scannedlots.includes(lot.ID)) {
                context.executeAction({
                    "Name": "/flexso_mdk_parking/Actions/Registrations/Registrations_CreateEntityAvailableTrue.action",
                    "Properties": {
                        "Properties": {
                            "lot_ID": lot.ID
                        }
                    }
                });
            }
            else {
                context.executeAction({
                    "Name": "/flexso_mdk_parking/Actions/Registrations/Registrations_CreateEntityAvailableFalse.action",
                    "Properties": {
                        "Properties": {
                            "lot_ID": lot.ID
                        }
                    }
                });
            }
        });
        //BACK TO MAIN PAGE
        return context.executeAction('/flexso_mdk_parking/Actions/CloseModalPage_Complete.action');
    }
}

async function GetLotsFromLocation(loc) {
    return context.read('/flexso_mdk_parking/Services/sap_flexso_parkingapp_mobileservices.service', 'Lots', [], `$filter=location_name eq '${loc}'`)
        .then((results) => {
            if (results.length > 0) {
                return results;
            }
        })
        .catch((error) => {
            alert(error);
        });
}
