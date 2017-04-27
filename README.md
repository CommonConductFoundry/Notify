# Welcome to Notify()
## Overview
Notify() is a expandable notification/alerting plug-in for jQuery with flexibility such as, but not limited to:
- specifying you alert's title
- defining the alert type [default, error, warning, success, notice]
- if the alert is dismissible
Get started and give it a try by adding Notify() to your project.

<a href="https://fiddle.jshell.net/3bv2qezn/embedded/result,html/" target="_blank">View demo</a>


# Docs
## Empty usage
The following code:
```javascript
<script src="src/to/notify.js"></script>
<script>
notify(
	"Title", // Alert Title
	"Content", // Alert Content
	"demo_alert_class", // Alert Class
	"demo_alert_id", // Alert ID
	true, // Dismissable
	"http://www.example.com", // Alert Link src
	"A link"  // Alert Link Text
);
</script>
```

Renders
```html
<div class="alert demo_alert_class" id="demo_alert_id">
	<div class="container">
		<button class="dismiss" id="dismissdemo_alert_id">&times;</button>
		<div class="alert-title">
			Title
		</div>
		<div class="alert-message">
			<p>Content</p>
		</div>
		<div class="alert-link">
			<a href="http://www.example.com" target="_blank" title="A link">A link</a>
		</div>
	</div>
</div>
```

# Example
## Dismissible (Cookie alert)
Below is an example of a simple cookie consent notification. The user is able to dismiss this notification.
```javascript
<script src="src/to/notify.js"></script>
<script>
notify(
	"This site uses cookies", // Alert Title
	"By continuing to use this site you consent to the use of cookies on your device as described in our cookie policy unless you have disabled them.", // Alert Content
	"notice", // Alert Class
	"cookie-alert", // Alert ID
	true, // Dismissable
	"https://www.example.com/help/cookies", // Alert Link src
	"Read out cookie policy" // Alert Link Text
);
</script>
```

Renders:
```html
<div class="alert notice" id="cookie-alert">
	<div class="container">
		<button class="dismiss" id="dismisscookie-alert">&times;</button>
		<div class="alert-title">
			This site uses cookies
		</div>
		<div class="alert-message">
			<p>By continuing to use this site you consent to the use of cookies on your device as described in our cookie policy unless you have disabled them.</p>
		</div>
		<div class="alert-link">
			<a href="https://www.example.com/help/cookies" target="_blank" title="Read out cookie policy">Read out cookie policy</a>
		</div>
	</div>
</div>
```

## Not dismissible (Maintenance alert)
Perhaps, you need a notification that you don't want the user to be able to dismiss?
```javascript
<script src="src/to/notify.js"></script>
<script>
notify(
	"Planned maintenance", // Alert Title
	"This website will be unavailable from 01-01-2020 until 04-01-2020 - sorry for any trouble this may cause.", // Alert Content
	"warning", // Alert Class
	"maintenance-alert", // Alert ID
	false, // Dismissable
	false, // Alert Link src
	false  // Alert Link Text
);
</script>
```

Renders:
```html
<div class="alert warning" id="maintenance-alert">
	<div class="container">
		<div class="alert-title">
			Planned maintenance
		</div>
		<div class="alert-message">
			<p>This website will be unavailable from 01-01-2020 until 04-01-2020 - sorry for any trouble this may cause.</p>
		</div>
	</div>
</div>
```
