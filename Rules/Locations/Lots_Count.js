/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Lots_Count(context) {
    //The following currentCustomer will retrieve the current customer record
    const currentLocation = context.getPageProxy().binding.Name;
    //The following expression will retrieve the total count of the orders for a given customer
    return context.count('/flexso_mdk_parking/Services/sap_flexso_parkingapp_mobileservices.service', 'Lots', `$filter=location_name eq '${currentLocation}'`).then((count) => {
        return count;
    });
}
