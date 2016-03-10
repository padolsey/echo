this.addEventListener('fetch', function(event) {
	var res = (event.request.url.match(/\/\?((?:<|%3C).+)/)||[])[1];
	if (res) {
		event.respondWith(
			new Response('<script src="ec.js"></script>' + decodeURIComponent(res), {
				headers: { 'Content-Type': 'text/html' }
			})
		);
	}
});