/*  Notify.js
 *  MIT License
 *  https://github.com/CommonConductFoundry/Notify
*/

function createCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {
	createCookie(name,"",-1);
}


/** Alets
  * This function handles alerts
  * alerttype: error, success, notice, warning
**/
function notify(title, message, type, alertid, dismissable, linkhref, linkname) {
	var AlertTitle		= title;
	var AlertMessage	= message;
	var AlertType		= type;
	var AlertID			= alertid;
	var Dismissable		= dismissable;
	var LinkSrc			= linkhref;
	var LinkTitle		= linkname;
	
	if(AlertTitle !== false && AlertTitle !== true && AlertTitle.trim() !== "") {
		var RenderTitle 	= '<div class="alert-title">' + AlertTitle + '</div>';
	} else {
		var RenderTitle 	= '';
	}
	if(AlertMessage !== false && AlertMessage !== true && AlertMessage.trim() !== "") {
		var RenderMessage 	= '<div class="alert-message"><p>' + AlertMessage + '</p></div>';
	} else {
		notify(false, 'Notify() requires message paramater. See console log for more information.', 'error', 'NOTIFY_ERROR_ALERT', false, false, false, false);
		console.log("You didn't provide a message for your notify() notification.");
	}
	if(Dismissable !== false) {
		var RenderDismiss	= '<button class="dismiss" id="dismiss'+AlertID+'">&times;</button>';
		if(AlertID !== false) {
			$(".alert .dismiss#dismiss"+AlertID).click(function() {
				createCookie(AlertID, "user-dismissed", 145);
			});
		} else {
			notify(false, 'You tried to set a dismissable alert but didn\'t specify an alert id. See console log.', 'error', 'NOTIFY_ERROR_ALERT', false, false, false, false);
			console.log('You tried to set a dismissable alert but didn\'t provide or specify an unique alert id. This alert isn\'t dismissable. Current alert message: '+ message);
		}
	} else {
		var RenderDismiss	= '';
	}
	if(LinkSrc !== false && LinkSrc !== true && LinkSrc.trim() !== "" && LinkTitle !== false && LinkTitle !== true && LinkTitle.trim() !== "") {
		var RenderLink		= '<div class="alert-link"><a target="_blank" title="' + LinkTitle + '" href="' + LinkSrc + '">' + LinkTitle + '</a></div>';
	} else {
		var RenderLink 		= '';
	}
	
	if(readCookie(AlertID)) {
		var AlertClosed = AlertID;
	}

	
	if(AlertMessage !== false && AlertMessage !== true && AlertMessage.trim() !== "" && AlertClosed !== AlertID) {
		if(AlertID == false) {
			AlertID = "";
			AlertID = AlertID.trim();
		}
		$('<div class="alert ' + AlertType + '" id="' + AlertID + '">'	+
			'<div class="container">'									+ 
				RenderDismiss											+ 
				RenderTitle												+ 
				RenderMessage											+
				RenderLink												+
			'</div>'													+
		'</div>').prependTo('body');
	}
}
