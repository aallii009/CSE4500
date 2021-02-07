const xhr = new XMLHttpRequest();
xhr.onload = function () {
	console.log(this.responseText);
	try{
		const resObj = JSON.parse(this.responseText);
		document.getElementById('api').innerText = JSON.stringify(this.responseText);
	} catch(e) {
		console.warn('There was an error')
	}

};
	xhr.open('GET', 'https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400'
);
	xhr.send();








