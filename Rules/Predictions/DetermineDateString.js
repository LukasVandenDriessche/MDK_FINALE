export default function DetermineDateString(clientAPI) {
    var date = clientAPI.evaluateTargetPath("#Page:Predictions_MakePrediction/#Control:FCDatePicker/#Value");
    const result = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + "-" + date.getHours() + "-" + date.getMinutes();
    return result;
}

