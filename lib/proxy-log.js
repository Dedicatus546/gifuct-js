"use strict";

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProxyLog = ProxyLog;

function ProxyLog(stream, name) {
  var proxy = {};

  for (var k in stream) {
    proxy[k] = function () {
      var r = stream[k].apply(stream, arguments);

      if (r instanceof Function) {
        r = PorxyLogFunction(r, function (fr) {
          console.log("[".concat(name, "] ").concat(k, ": "), fr);
        });
      } else {
        console.log("[".concat(name, "] ").concat(k, ": "), r);
      }

      return r;
    };
  }

  return proxy;
}

function PorxyLogFunction(fn, log) {
  return function () {
    log(fn.apply(this, arguments));
  };
}