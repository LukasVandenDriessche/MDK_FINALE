/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default async function ScanItem2(context) {
    var scanner = context.getActionResult('OpenScanner2');
    var scannedItem = scanner.data;
    var note = context.evaluateTargetPath("#Page:Scanner_ScanCodes/#Control:FCNote");
    var value = note.getValue();
    var continu = false;
    if (value == null) {
        note.setValue(scannedItem);
        continu = true;
    }
    else {
        value = value + ";" + scannedItem;
        note.setValue(value);
        continu = true;
    }
    if (continu) {
        await context.executeAction('/flexso_mdk_parking/Actions/Scanner/Scanner_OpenScanner.action');
    }
}
