document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady () {
	if (navigator.splashscreen) // As will error in browser
		navigator.splashscreen.hide();

	// Enabling active states to be applied on tap
	document.addEventListener("touchstart", function() {}, true);
}