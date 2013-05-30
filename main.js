var HEADER_MAP = {
  'allow-credentials': 'Access-Control-Allow-Credentials',
  'allow-headers': 'Access-Control-Allow-Headers',
  'allow-methods': 'Access-Control-Allow-Methods',
  'allow-origin': 'Access-Control-Allow-Origin',
  'expose-headers': 'Access-Control-Expose-Headers',
  'max-age': 'Access-Control-Max-Age'
};
var VERSION = '0.0.2';

var proxy = require('./proxy.js'),
    optimist = require('optimist'),
    argv = optimist
             .options({
               h: {
                 alias: 'help',
                 describe: 'Shows help information'
               },
               p: {
                 alias: 'port',
                 default: 8080,
                 describe: 'Port on which the local proxy server should run'
               },
               v: {
                 alias: 'version',
                 describe: 'Returns the current version'
               }
             })
             .alias()
             .describe(HEADER_MAP)
             .default('allow-origin', '*')
             .check(function(argv) {
              if (!argv.h && !argv.v && argv._.length !== 1) {
                throw 'You must specify a target';
              }
             })
             .usage([
                '',
                'Proxy requests to the target and add CORS headers to the response.',
                '',
                'Usage: $0 [options] target',
                '',
                'For more information on CORS, visit',
                'https://developer.mozilla.org/en-US/docs/HTTP/Access_control_CORS'
             ].join('\n'))
             .argv;

if (argv.v) {
  return console.log(VERSION);
} else if (argv.h) {
  return optimist.showHelp();
}

var config = {
  target: argv._[0],
  port: parseInt(argv.p || argv.port, 10),
  headers: {}
};

for (var arg in HEADER_MAP) {
  if (typeof argv[arg] !== 'undefined') {
    config.headers[HEADER_MAP[arg]] = argv[arg];
  }
}

proxy(config);
console.log('Server running at http://localhost:' + config.port);