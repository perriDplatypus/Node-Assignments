const http = require('http');

const server = http.createServer((request, response) => {
	const url = request.url;
	const method = request.method;

	if (url === '/') {
		response.write('<html>');
		response.write('	<head>');
		response.write('		<title>Assignment 1</title>');
		response.write('	</head>');
		response.write('	<body>');
		response.write('		<h1>Assignment 1</h1>');
		response.write('		<ul>');
		response.write('			<li>User 1</li>');
		response.write('			<li>User 2</li>');
		response.write('			<li>User 3</li>');
		response.write('		</ul>');
		response.write('		<form action="/create-user" method="POST">');
		response.write('			<input type="text" name="create-user">');
		response.write('			<button type="submit">Add</button>');
		response.write('		</form>');
		response.write('	</body>');
		response.write('</html>');
		return response.end();
	}

	if (url === '/create-user' && method === 'POST') {
		const username = [];
		request.on('data', chunk => {
			console.log(chunk);
			username.push(chunk);
		});

		return request.on('end', () => {
			const parsedData = Buffer.concat(username).toString();
			const user = parsedData.split('=')[1];
			console.log(user);
			response.statusCode = 302;
			response.setHeader('Location', '/');
			return response.end();
		});
	}

	response.setHeader('Content-Type', 'text/html');
	response.write('<html>');
	response.write('<head><title>Default page</title><head>');
	response.write('<body><h1>Fuck you from my Node.js Server!</h1></body>');
	response.write('</html>');
	response.end();
});

server.listen(3000);