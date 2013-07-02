/*
  Autorefresh - a script by Tiago César Oliveira - tcoliveira@gmail.com
	
	Find more at https://github.com/tiagocesar/autorefresh
	
	Based on ReCSS - http://david.dojotoolkit.org/recss.html
*/

var process = true;

window.onfocus = function() {
	if (process)
		doProcessing();
}

window.onblur = function() {
	process = true;
}

function doProcessing() {
	var i, a, s;
	
	a = document.getElementsByTagName('link');
	
	for (i=0; i < a.length; i++) {
		s = a[i];
		
		if (s.rel.toLowerCase().indexOf('stylesheet') >= 0 && s.href) {
			var h = s.href.replace(/(&|%5C?)forceReload=\d+/,'');
			s.href = h + (h.indexOf('?')>=0?'&':'?') + 'forceReload=' + (new Date().valueOf());
		}
	}

	process = false;
}
