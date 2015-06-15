var http = require('http'),
    faye = require('faye');

var argv = require('optimist').default('port', 8000).default('debug', false).argv,
    util = require('util');

if (argv.debug) {
  faye.Logging.logLevel = 'debug';
  faye.logger = function(msg) {
    console.log(msg)
  };
}

var bayeux = new faye.NodeAdapter({ mount: '/faye', timeout: 45 });
bayeux.listen(argv.port);
