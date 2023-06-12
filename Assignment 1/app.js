const http = require('http');

const server = http.createServer((request, response) => {
	const url = request.url;
	const method = request.method;

	if (url === '/') {
		response.write('<html>');
		response.write('<head>');
		response.write('	<title>Assignment 1</title>');
		response.write('</head>');
		response.write('<body>');
		response.write('	<h1>Assignment 1</h1>');
		response.write('	<ul>');
		response.write('		<li>User 1</li>');
		response.write('		<li>User 2</li>');
		response.write('		<li>User 3</li>');
		response.write('	</ul>');
		response.write('</body>');
		response.write('</html>');
		response.end();
	}
});