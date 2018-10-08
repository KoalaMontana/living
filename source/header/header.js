function classToggle() {
	var element = document.getElementsByTagName("body")[0];

	if (element.classList) { 
		element.classList.toggle("js-menu__opened");
	} else {
		// For IE9
		var classes = element.className.split(" ");
		var i = classes.indexOf("js-menu__opened");

		if (i >= 0) 
			classes.splice(i, 1);
		else 
			classes.push("js-menu__opened");
			element.className = classes.join(" "); 
	}
}
document.getElementById("js-menu-burger").addEventListener('click', classToggle);