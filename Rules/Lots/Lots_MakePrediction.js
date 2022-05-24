export default async function Lots_MakePrediction(clientAPI) {
    context = clientAPI;
    var lot = context.evaluateTargetPath("#Page:Lots_Prediction2/#Control:FCListPicker/#SelectedValue");
    var date = context.evaluateTargetPath("#Page:Lots_Prediction2/#Control:FCDatePicker/#SelectedValue");

    return context.read('/flexso_mdk_parking/Services/sap_flexso_parkingapp_mobileservices.service','Prediction',{'Lot': lot, 'regtime': date},)
    .then((result) => {
        alert(result);
        var status = result.predictions.labels.results[0].value;
        var prop = result.predictions.labels.results[0].probability;
        var st = context.evaluateTargetPath("#Page:Lots_Prediction2/#Control:FCTest");
        var pr = context.evaluateTargetPath("#Page:Lots_Prediction2/#Control:fieldPerc");
        st.setValue(status);
        pr.setValue(prop);
    });    
}
