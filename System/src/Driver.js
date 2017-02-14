// https://www.npmjs.com/package/dockerode 

var fs = require('fs');
var Docker = require('dockerode');
var docker = new Docker({socketpath: '/var/run/docker.sock'});
var docker1 = new Docker();
var docker2 = new Docker({host: 'http://192.168.1.10', port:'5002'});
var docker3 = new Docker({protocol:'http', host:'127.0.0.2', port:'5002'});
var docker4 = new Docker({host: '127.0.0.2', post:'5002'});

var docker5 = new Docker({
	host: '192.168.1.10',
	port: process.env.DOCKER_PORT || 2375,
	ca: fs.readFileSync('ca.pem'),
	cert: fs.readFileSync('cert.pem'),
	key: fs.readFileSync('key.pem')
});

var currentDockerId;

// Sets DockerId to a variable
var setDockerId = function(dockerId) {
	currentDockerId = docker.getContainer(dockerId); 
};

setDockerId('d4a7b19ca92c');


currentDockerId.inspect(function (err,data,container) {
	console.log('*Current Docker Id*');
	console.log(data);
	console.log(container);
});

currentDockerId.start(function(err, data) {
	console.log('Start');
	console.log(data);
});

console.log('Docker ID: ' + currentDockerId);
