// var http = require('http');
// var fs = require('fs');

// function onRequest(request, response) {
//     response.writeHead(200);
//     fs.readFile('./index.html', null, function(error, data) {
//         if (error) {
//             response.writeHead(404);
//             response.write('File not found!');
//         } else {
//             response.write(data);
//         }
//         response.end();
//     });
// }
// http.createServer(onRequest).listen(8000);
// console.log('Server Started');
