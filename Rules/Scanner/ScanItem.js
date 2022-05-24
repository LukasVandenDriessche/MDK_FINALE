export default function ScanItem(context) {
    var scanner = context.getActionResult('OpenScanner');
    var scannedItem = scanner.data;
    var note = context.evaluateTargetPath("#Page:Scanner_ScanCodes/#Control:FCNote");
    var value = note.getValue();
    if (value == null) {
        note.setValue(scannedItem);
    }
    else {
        value = value + ";" + scannedItem;
        note.setValue(value);
    }
}

// let tfcodes;

// export default async function ScanItem(context) {
//     var scanner = context.getActionResult('OpenScanner');
//     var scannedItem = scanner.data;
//     var note = context.evaluateTargetPath("#Page:Scanner_ScanCodes/#Control:FCNote");
//     var value = note.getValue();
//     var continu = false;
//     if (value == null) {
//         note.setValue(scannedItem);
//         continu = true;
//     }
//     else {
//         value = value + ";" + scannedItem;
//         note.setValue(value);
//         continu = true;
//     }
//     if (continu) {
//         await context.executeAction('/flexso_mdk_parking/Actions/Scanner/Scanner_OpenScanner2.action');
//     }
// }