new MutationObserver(function(mutations) {
	var src = document.documentElement.innerHTML.replace(/<script src="ec.js.+?\/script>/i, '');
	history.pushState({s: src}, 'Echo', '?' + encodeURIComponent(src));
}).observe(document.documentElement, {
	attributes: true,
	childList: true,
	characterData: true,
	subtree: true
});
