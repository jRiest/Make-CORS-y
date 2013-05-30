var express = require('express'),
    extend = require('extend'),
    http = require('http'),
    https = require('https');

function parseTargetURL(url) {
  var opts = {},
      split;

  url = opts.hostname = url.replace(/^https?:\/\//, '').replace(/\/+$/, ''),
  split = url.split(':');
  if (split.length > 1) {
    opts.port = parseInt(split[1], 10);
  }
  return opts;
}

module.exports = function(config) {
	var server = express(),
      isHttps = config.target.indexOf('https://') === 0,
      defaultOptions = parseTargetURL(config.target),
      port = config.port,
      headers = config.headers;

  function proxyRequest(request, response) {
    var postData = request.body,
        options = {
          method: request.method,
          path: request.originalUrl,
          headers: request.headers
        };
    extend(options, defaultOptions);
    options.headers.host = options.hostname;
    delete options.headers['accept-encoding']; // prevent g-zip header from being sent
    var req = (isHttps ? https : http).request(options, function(res) {
      var output = '',
          logMsg = options.method + ' ' + options.hostname + options.path + ' Code: '+ res.statusCode;
      console.log(logMsg);
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          output += chunk;
      });
      res.on('end', function() {
        response
          .status(res.statusCode)
          .set(extend(res.headers, headers));
        response.send(output);
      });
    });

    req.on('error', function(e) {
      console.log('problem with request: ' + e.message);
    });
    req.end();
  }

  server.configure(function() {
    server.use(express.bodyParser());
    server.use(express.errorHandler());
  });


  server.all('*', proxyRequest);
  server.listen(port);
  return server;
};