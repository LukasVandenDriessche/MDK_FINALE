{
	"_Name": "flexso_mdk_parking",
	"Version": "/flexso_mdk_parking/Globals/AppDefinition_Version.global",
	"MainPage": "/flexso_mdk_parking/Pages/Main.page",
	"OnLaunch": [
		"/flexso_mdk_parking/Actions/Service/InitializeOffline.action"
	],
	"OnWillUpdate": "/flexso_mdk_parking/Rules/OnWillUpdate.js",
	"OnDidUpdate": "/flexso_mdk_parking/Actions/Service/InitializeOffline.action",
	"Styles": "/flexso_mdk_parking/Styles/Styles.less",
	"Localization": "/flexso_mdk_parking/i18n/i18n.properties",
	"_SchemaVersion": "6.1"
}