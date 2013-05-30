# Make CORS-y
A command-line tool to create a local proxy server that will make requests to a remote URL and add CORS headers to all responses.

## Setup

    $ npm install -g make-corsy

## How to Use

    $ make_corsy [options] target_url

## Options

    -h, --help           Shows help information
    -p, --port           Port on which the local proxy server should run  [default: 8080]
    -v, --version        Returns the current version
    --allow-credentials  Access-Control-Allow-Credentials
    --allow-headers      Access-Control-Allow-Headers
    --allow-methods      Access-Control-Allow-Methods
    --allow-origin       Access-Control-Allow-Origin                      [default: "*"]
    --expose-headers     Access-Control-Expose-Headers
    --max-age            Access-Control-Max-Age

## Alternatives
Want to give something else a try? Check out these other similar projects.

* [tinycors](https://github.com/cburgmer/tinycors)
* [CORS-Proxy](https://github.com/gr2m/CORS-Proxy/)

## License
The MIT License (MIT)

Copyright (c) 2013 Jake Riesterer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
