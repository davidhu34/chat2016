"use strict";
//var debug = require('debug')('REM:server');

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _util = require('./server/util');

var _middlewares = require('./server/middlewares');

var _middlewares2 = _interopRequireDefault(_middlewares);

var _api = require('./server/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = (0, _util.normalizePort)(process.env.PORT || '5000');
app.use(_express2.default.static(path.join(__dirname, '/dist')));
(0, _middlewares2.default)(app);
app.use('/', (0, _api2.default)(io));
app.get('/', function (req, res, next) {
    res.sendFile('index.html');
});
app.set('port', port);

var server = _http2.default.createServer(app);

io.listen(server);

server.listen(port);
server.on('error', (0, _util.onError)());
server.on('listening', (0, _util.onListening)(server));
