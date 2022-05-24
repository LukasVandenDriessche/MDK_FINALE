export default function GetCurrentDate(clientAPI) {
    return new Date(new Date() - (new Date().getTimezoneOffset() * 60000));
}
