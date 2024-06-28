export function ProxyLog(stream, name) {
  var proxy = {}
  for (var k in stream) {
    proxy[k] = function () {
      var r = stream[k].apply(stream, arguments)
      if (r instanceof Function) {
        r = PorxyLogFunction(r, function (fr) {
          console.log(`[${name}] ${k}: `, fr)
        })
      } else {
        console.log(`[${name}] ${k}: `, r)
      }
      return r
    }
  }
  return proxy
}

function PorxyLogFunction(fn, log) {
  return function () {
    log(fn.apply(this, arguments))
  }
}
