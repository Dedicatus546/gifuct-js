(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["GifuctJS"] = factory();
	else
		root["GifuctJS"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51);


 // user canvas

var c = document.getElementById('c');
var ctx = c.getContext('2d'); // gif patch canvas

var tempCanvas = document.createElement('canvas');
var tempCtx = tempCanvas.getContext('2d'); // full gif canvas

var gifCanvas = document.createElement('canvas');
var gifCtx = gifCanvas.getContext('2d');
var url = document.getElementById('url'); // default gif

url.value = '/demo/large_gif.gif'; // url.value = '/demo/horses.gif'
// url.value = '/demo/dog.gif'
// url.value = '/demo/jblack.gif'
// url.value = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1192467131,1889324742&fm=26&gp=0.jpg'

document.getElementById('loadGIF').onclick = loadGIF;
document.getElementById('playpause').onclick = playpause;

document.getElementById('edgedetect').onchange = function () {
  bEdgeDetect = !bEdgeDetect;
};

document.getElementById('grayscale').onchange = function () {
  bGrayscale = !bGrayscale;
};

document.getElementById('invert').onchange = function () {
  bInvert = !bInvert;
};

document.getElementById('pixels').onchange = function (e) {
  pixelPercent = e.target.value;
}; // load the default gif


loadGIF();
var gif; // load a gif with the current input url value

function loadGIFFull() {
  var oReq = new XMLHttpRequest();
  oReq.open('GET', url.value, true);
  oReq.responseType = 'arraybuffer';

  oReq.onreadystatechange = function (oEvent) {
    console.log('download... ', oEvent);
  };

  oReq.onload = function (oEvent) {
    var arrayBuffer = oReq.response; // Note: not oReq.responseText

    if (arrayBuffer) {
      Object(_src_index_js__WEBPACK_IMPORTED_MODULE_2__["parseGIF"])(arrayBuffer, {
        parseAfter: function parseAfter(schema, result, current, events) {// if (schema.image) {
          //     events.terminated = true
          //     oReq.abort()
          // }
          // console.log(Object.keys(schema), schema)
        }
      }).then(function (v) {
        gif = v;
        console.log("gif", gif);
        var frames = Object(_src_index_js__WEBPACK_IMPORTED_MODULE_2__["decompressFrames"])(gif, true); // render the gif

        renderGIF(frames);
      })["catch"](function (e) {
        console.log('error in downloading gif, ', e);
      });
    }
  };

  oReq.send(null);
}

function loadGIFChunked() {
  debugger;
  var loader = _src_index_js__WEBPACK_IMPORTED_MODULE_2__["ChunkedParser"].buildLoader({
    url: url.value,
    loaderType: 'fetch',
    chunkSize: 600
  });
  var stream = _src_index_js__WEBPACK_IMPORTED_MODULE_2__["ChunkedParser"].buildStream(loader);

  try {
    Object(_src_index_js__WEBPACK_IMPORTED_MODULE_2__["parseGIFChunked"])(stream, _src_index_js__WEBPACK_IMPORTED_MODULE_2__["ChunkedParser"], {
      parseAfter: function parseAfter(schema, result, current, events) {
        if (schema.image) {
          if (/first/.test(location.href)) {
            events.terminated = true;
            loader.abort();
          }
        } // console.log(Object.keys(schema), schema)

      }
    }).then(function (v) {
      gif = v;
      var frames = Object(_src_index_js__WEBPACK_IMPORTED_MODULE_2__["decompressFrames"])(gif, true); // render the gif

      renderGIF(frames);
    })["catch"](function (e) {
      console.log('error in downloading gif, ', e);
    });
  } catch (e) {
    console.log('error in downloading gif, ', e);
  }
}

function loadGIF() {
  loadGIFFull(); // loadGIFChunked()
}

var playing = false;
var bEdgeDetect = false;
var bInvert = false;
var bGrayscale = false;
var pixelPercent = 100;
var loadedFrames;
var frameIndex;

function playpause() {
  playing = !playing;

  if (playing) {
    renderFrame();
  }
}

function renderGIF(frames) {
  loadedFrames = frames;
  frameIndex = 0;
  c.width = frames[0].dims.width;
  c.height = frames[0].dims.height;
  gifCanvas.width = c.width;
  gifCanvas.height = c.height;

  if (!playing) {
    playpause();
  }
}

var frameImageData;

function drawPatch(frame) {
  var dims = frame.dims;

  if (!frameImageData || dims.width != frameImageData.width || dims.height != frameImageData.height) {
    tempCanvas.width = dims.width;
    tempCanvas.height = dims.height;
    frameImageData = tempCtx.createImageData(dims.width, dims.height);
  } // set the patch data as an override


  frameImageData.data.set(frame.patch); // draw the patch back over the canvas

  tempCtx.putImageData(frameImageData, 0, 0);
  gifCtx.drawImage(tempCanvas, dims.left, dims.top);
}

var edge = function edge(data, output) {
  var odata = output.data;
  var width = gif.lsd.width;
  var height = gif.lsd.height;
  var conv = [-1, -1, -1, -1, 8, -1, -1, -1, -1];
  var halfside = Math.floor(3 / 2);

  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var r = 0,
          g = 0,
          b = 0;

      for (var cy = 0; cy < 3; cy++) {
        for (var cx = 0; cx < 3; cx++) {
          var scy = y - halfside + cy;
          var scx = x - halfside + cx;

          if (scy >= 0 && scy < height && scx >= 0 && scx < width) {
            var src = (scy * width + scx) * 4;
            var f = cy * 3 + cx;
            r += data[src] * conv[f];
            g += data[src + 1] * conv[f];
            b += data[src + 2] * conv[f];
          }
        }
      }

      var i = (y * width + x) * 4;
      odata[i] = r;
      odata[i + 1] = g;
      odata[i + 2] = b;
      odata[i + 3] = 255;
    }
  }

  return output;
};

var invert = function invert(data) {
  for (var i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i]; // red

    data[i + 1] = 255 - data[i + 1]; // green

    data[i + 2] = 255 - data[i + 2]; // blue

    data[i + 3] = 255;
  }
};

var grayscale = function grayscale(data) {
  for (var i = 0; i < data.length; i += 4) {
    var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = avg; // red

    data[i + 1] = avg; // green

    data[i + 2] = avg; // blue

    data[i + 3] = 255;
  }
};

function manipulate() {
  var imageData = gifCtx.getImageData(0, 0, gifCanvas.width, gifCanvas.height);
  var other = gifCtx.createImageData(gifCanvas.width, gifCanvas.height);

  if (bEdgeDetect) {
    imageData = edge(imageData.data, other);
  }

  if (bInvert) {
    invert(imageData.data);
  }

  if (bGrayscale) {
    grayscale(imageData.data);
  } // do pixelation


  var pixelsX = 5 + Math.floor(pixelPercent / 100 * (c.width - 5));
  var pixelsY = pixelsX * c.height / c.width;

  if (pixelPercent != 100) {
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;
  }

  ctx.putImageData(imageData, 0, 0);
  ctx.drawImage(c, 0, 0, c.width, c.height, 0, 0, pixelsX, pixelsY);
  ctx.drawImage(c, 0, 0, pixelsX, pixelsY, 0, 0, c.width, c.height);
}

function renderFrame() {
  // get the frame
  var frame = loadedFrames[frameIndex];
  var start = new Date().getTime(); // gifCtx.clearRect(0, 0, c.width, c.height)
  // draw the patch

  drawPatch(frame); // perform manipulation

  manipulate(); // update the frame index

  frameIndex++;

  if (frameIndex >= loadedFrames.length) {
    frameIndex = 0;
  }

  var end = new Date().getTime();
  var diff = end - start;

  if (playing) {
    // delay the next gif frame
    setTimeout(function () {
      requestAnimationFrame(renderFrame); //renderFrame();
    }, Math.max(0, Math.floor(frame.delay - diff)));
  }
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(2);

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var createNonEnumerableProperty = __webpack_require__(5);
var has = __webpack_require__(15);
var setGlobal = __webpack_require__(16);
var inspectSource = __webpack_require__(17);
var InternalStateModule = __webpack_require__(19);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var definePropertyModule = __webpack_require__(8);
var createPropertyDescriptor = __webpack_require__(14);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(7);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var IE8_DOM_DEFINE = __webpack_require__(9);
var anObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(13);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var fails = __webpack_require__(7);
var createElement = __webpack_require__(10);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var isObject = __webpack_require__(11);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var createNonEnumerableProperty = __webpack_require__(5);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(18);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var setGlobal = __webpack_require__(16);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(20);
var global = __webpack_require__(3);
var isObject = __webpack_require__(11);
var createNonEnumerableProperty = __webpack_require__(5);
var objectHas = __webpack_require__(15);
var shared = __webpack_require__(18);
var sharedKey = __webpack_require__(21);
var hiddenKeys = __webpack_require__(25);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var inspectSource = __webpack_require__(17);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(22);
var uid = __webpack_require__(24);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(23);
var store = __webpack_require__(18);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.8.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var getOwnPropertyDescriptor = __webpack_require__(28).f;
var createNonEnumerableProperty = __webpack_require__(5);
var redefine = __webpack_require__(2);
var setGlobal = __webpack_require__(16);
var copyConstructorProperties = __webpack_require__(34);
var isForced = __webpack_require__(46);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var propertyIsEnumerableModule = __webpack_require__(29);
var createPropertyDescriptor = __webpack_require__(14);
var toIndexedObject = __webpack_require__(30);
var toPrimitive = __webpack_require__(13);
var has = __webpack_require__(15);
var IE8_DOM_DEFINE = __webpack_require__(9);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(31);
var requireObjectCoercible = __webpack_require__(33);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(7);
var classof = __webpack_require__(32);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(15);
var ownKeys = __webpack_require__(35);
var getOwnPropertyDescriptorModule = __webpack_require__(28);
var definePropertyModule = __webpack_require__(8);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(36);
var getOwnPropertyNamesModule = __webpack_require__(38);
var getOwnPropertySymbolsModule = __webpack_require__(45);
var anObject = __webpack_require__(12);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(37);
var global = __webpack_require__(3);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);

module.exports = global;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(39);
var enumBugKeys = __webpack_require__(44);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(15);
var toIndexedObject = __webpack_require__(30);
var indexOf = __webpack_require__(40).indexOf;
var hiddenKeys = __webpack_require__(25);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(30);
var toLength = __webpack_require__(41);
var toAbsoluteIndex = __webpack_require__(43);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(42);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(42);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 45 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(7);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(33);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(39);
var enumBugKeys = __webpack_require__(44);

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(27);
var global = __webpack_require__(3);
var userAgent = __webpack_require__(50);

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(36);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseGIF", function() { return parseGIF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseGIFChunked", function() { return parseGIFChunked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decompressFrame", function() { return decompressFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decompressFrames", function() { return decompressFrames; });
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_buffer_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);
/* harmony import */ var core_js_modules_es_array_buffer_slice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_slice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_typed_array_uint8_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92);
/* harmony import */ var core_js_modules_es_typed_array_uint8_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint8_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_typed_array_uint8_clamped_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(104);
/* harmony import */ var core_js_modules_es_typed_array_uint8_clamped_array__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint8_clamped_array__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_typed_array_copy_within__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(105);
/* harmony import */ var core_js_modules_es_typed_array_copy_within__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_copy_within__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_typed_array_every__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(107);
/* harmony import */ var core_js_modules_es_typed_array_every__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_every__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_typed_array_fill__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(108);
/* harmony import */ var core_js_modules_es_typed_array_fill__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_fill__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_typed_array_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(109);
/* harmony import */ var core_js_modules_es_typed_array_filter__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_filter__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_typed_array_find__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(110);
/* harmony import */ var core_js_modules_es_typed_array_find__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_typed_array_find_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(111);
/* harmony import */ var core_js_modules_es_typed_array_find_index__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_index__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_typed_array_for_each__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(112);
/* harmony import */ var core_js_modules_es_typed_array_for_each__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_for_each__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_typed_array_includes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(113);
/* harmony import */ var core_js_modules_es_typed_array_includes__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_includes__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_typed_array_index_of__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(114);
/* harmony import */ var core_js_modules_es_typed_array_index_of__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_index_of__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_typed_array_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(115);
/* harmony import */ var core_js_modules_es_typed_array_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_typed_array_join__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(116);
/* harmony import */ var core_js_modules_es_typed_array_join__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_join__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_typed_array_last_index_of__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(117);
/* harmony import */ var core_js_modules_es_typed_array_last_index_of__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_last_index_of__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_typed_array_map__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(120);
/* harmony import */ var core_js_modules_es_typed_array_map__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_map__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_typed_array_reduce__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(121);
/* harmony import */ var core_js_modules_es_typed_array_reduce__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_right__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(123);
/* harmony import */ var core_js_modules_es_typed_array_reduce_right__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_right__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_typed_array_reverse__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(124);
/* harmony import */ var core_js_modules_es_typed_array_reverse__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reverse__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_typed_array_set__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(125);
/* harmony import */ var core_js_modules_es_typed_array_set__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_typed_array_slice__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(126);
/* harmony import */ var core_js_modules_es_typed_array_slice__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_slice__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_typed_array_some__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(127);
/* harmony import */ var core_js_modules_es_typed_array_some__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_some__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_typed_array_sort__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(128);
/* harmony import */ var core_js_modules_es_typed_array_sort__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_sort__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_typed_array_subarray__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(129);
/* harmony import */ var core_js_modules_es_typed_array_subarray__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_subarray__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(130);
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_locale_string__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_typed_array_to_string__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(131);
/* harmony import */ var core_js_modules_es_typed_array_to_string__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_string__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var js_binary_schema_parser_lib_schemas_gif__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(132);
/* harmony import */ var js_binary_schema_parser_lib_schemas_gif__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(js_binary_schema_parser_lib_schemas_gif__WEBPACK_IMPORTED_MODULE_30__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "GIF", function() { return js_binary_schema_parser_lib_schemas_gif__WEBPACK_IMPORTED_MODULE_30___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SchemaFactory", function() { return js_binary_schema_parser_lib_schemas_gif__WEBPACK_IMPORTED_MODULE_30__["SchemaFactory"]; });

/* harmony import */ var js_binary_schema_parser__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(282);
/* harmony import */ var js_binary_schema_parser_lib_parsers_uint8__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(271);
/* harmony import */ var js_binary_schema_parser_lib_parsers_uint8__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(js_binary_schema_parser_lib_parsers_uint8__WEBPACK_IMPORTED_MODULE_32__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return js_binary_schema_parser_lib_parsers_uint8__WEBPACK_IMPORTED_MODULE_32__; });
/* harmony import */ var js_binary_schema_parser_lib_parsers_chunked_uint8__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(283);
/* harmony import */ var js_binary_schema_parser_lib_parsers_chunked_uint8__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(js_binary_schema_parser_lib_parsers_chunked_uint8__WEBPACK_IMPORTED_MODULE_33__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ChunkedParser", function() { return js_binary_schema_parser_lib_parsers_chunked_uint8__WEBPACK_IMPORTED_MODULE_33__; });
/* harmony import */ var _deinterlace__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(328);
/* harmony import */ var _lzw__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(333);






































var parseGIF = function parseGIF(arrayBuffer) {
  var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var byteData = new Uint8Array(arrayBuffer);
  var result = {};
  return Object(js_binary_schema_parser__WEBPACK_IMPORTED_MODULE_31__["parse"])(js_binary_schema_parser_lib_parsers_uint8__WEBPACK_IMPORTED_MODULE_32__["buildStream"](byteData), js_binary_schema_parser_lib_schemas_gif__WEBPACK_IMPORTED_MODULE_30___default.a, result, result, events);
};
var parseGIFChunked = function parseGIFChunked(stream, parser) {
  var events = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var result = {};
  var GIF = Object(js_binary_schema_parser_lib_schemas_gif__WEBPACK_IMPORTED_MODULE_30__["SchemaFactory"])(parser);
  return Object(js_binary_schema_parser__WEBPACK_IMPORTED_MODULE_31__["parse"])(stream, GIF, result, result, events);
};

var generatePatch = function generatePatch(image) {
  var totalPixels = image.pixels.length;
  var patchData = new Uint8ClampedArray(totalPixels * 4);

  for (var i = 0; i < totalPixels; i++) {
    var pos = i * 4;
    var colorIndex = image.pixels[i];
    var color = image.colorTable[colorIndex];
    patchData[pos] = color[0];
    patchData[pos + 1] = color[1];
    patchData[pos + 2] = color[2];
    patchData[pos + 3] = colorIndex !== image.transparentIndex ? 255 : 0;
  }

  return patchData;
};

var decompressFrame = function decompressFrame(frame, gct, buildImagePatch) {
  if (!frame.image) {
    console.warn('gif frame does not have associated image.');
    return;
  }

  var image = frame.image; // get the number of pixels

  var totalPixels = image.descriptor.width * image.descriptor.height; // do lzw decompression

  var pixels = Object(_lzw__WEBPACK_IMPORTED_MODULE_35__["lzw"])(image.data.minCodeSize, image.data.blocks, totalPixels); // deal with interlacing if necessary

  if (image.descriptor.lct.interlaced) {
    pixels = Object(_deinterlace__WEBPACK_IMPORTED_MODULE_34__["deinterlace"])(pixels, image.descriptor.width);
  }

  var resultImage = {
    pixels: pixels,
    dims: {
      top: frame.image.descriptor.top,
      left: frame.image.descriptor.left,
      width: frame.image.descriptor.width,
      height: frame.image.descriptor.height
    }
  }; // color table

  if (image.descriptor.lct && image.descriptor.lct.exists) {
    resultImage.colorTable = image.lct;
  } else {
    resultImage.colorTable = gct;
  } // add per frame relevant gce information


  if (frame.gce) {
    resultImage.delay = (frame.gce.delay || 10) * 10; // convert to ms

    resultImage.disposalType = frame.gce.extras.disposal; // transparency

    if (frame.gce.extras.transparentColorGiven) {
      resultImage.transparentIndex = frame.gce.transparentColorIndex;
    }
  } // create canvas usable imagedata if desired


  if (buildImagePatch) {
    resultImage.patch = generatePatch(resultImage);
  }

  return resultImage;
};
var decompressFrames = function decompressFrames(parsedGif, buildImagePatches) {
  return parsedGif.frames.filter(function (f) {
    return f.image;
  }).map(function (f) {
    return decompressFrame(f, parsedGif.gct, buildImagePatches);
  });
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(27);
var $filter = __webpack_require__(53).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(61);
var arrayMethodUsesToLength = __webpack_require__(63);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(54);
var IndexedObject = __webpack_require__(31);
var toObject = __webpack_require__(47);
var toLength = __webpack_require__(41);
var arraySpeciesCreate = __webpack_require__(56);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(55);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
var isArray = __webpack_require__(57);
var wellKnownSymbol = __webpack_require__(58);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(32);

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var shared = __webpack_require__(22);
var has = __webpack_require__(15);
var uid = __webpack_require__(24);
var NATIVE_SYMBOL = __webpack_require__(59);
var USE_SYMBOL_AS_UID = __webpack_require__(60);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(7);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(59);

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(7);
var wellKnownSymbol = __webpack_require__(58);
var V8_VERSION = __webpack_require__(62);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var userAgent = __webpack_require__(50);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var fails = __webpack_require__(7);
var has = __webpack_require__(15);

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(30);
var addToUnscopables = __webpack_require__(65);
var Iterators = __webpack_require__(69);
var InternalStateModule = __webpack_require__(19);
var defineIterator = __webpack_require__(70);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(58);
var create = __webpack_require__(66);
var definePropertyModule = __webpack_require__(8);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var defineProperties = __webpack_require__(67);
var enumBugKeys = __webpack_require__(44);
var hiddenKeys = __webpack_require__(25);
var html = __webpack_require__(68);
var documentCreateElement = __webpack_require__(10);
var sharedKey = __webpack_require__(21);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var definePropertyModule = __webpack_require__(8);
var anObject = __webpack_require__(12);
var objectKeys = __webpack_require__(48);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(36);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(27);
var createIteratorConstructor = __webpack_require__(71);
var getPrototypeOf = __webpack_require__(73);
var setPrototypeOf = __webpack_require__(76);
var setToStringTag = __webpack_require__(75);
var createNonEnumerableProperty = __webpack_require__(5);
var redefine = __webpack_require__(2);
var wellKnownSymbol = __webpack_require__(58);
var IS_PURE = __webpack_require__(23);
var Iterators = __webpack_require__(69);
var IteratorsCore = __webpack_require__(72);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(72).IteratorPrototype;
var create = __webpack_require__(66);
var createPropertyDescriptor = __webpack_require__(14);
var setToStringTag = __webpack_require__(75);
var Iterators = __webpack_require__(69);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(73);
var createNonEnumerableProperty = __webpack_require__(5);
var has = __webpack_require__(15);
var wellKnownSymbol = __webpack_require__(58);
var IS_PURE = __webpack_require__(23);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(15);
var toObject = __webpack_require__(47);
var sharedKey = __webpack_require__(21);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(74);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(7);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(8).f;
var has = __webpack_require__(15);
var wellKnownSymbol = __webpack_require__(58);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var aPossiblePrototype = __webpack_require__(77);

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(27);
var $map = __webpack_require__(53).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(61);
var arrayMethodUsesToLength = __webpack_require__(63);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(27);
var fails = __webpack_require__(7);
var ArrayBufferModule = __webpack_require__(80);
var anObject = __webpack_require__(12);
var toAbsoluteIndex = __webpack_require__(43);
var toLength = __webpack_require__(41);
var speciesConstructor = __webpack_require__(87);

var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
var DataView = ArrayBufferModule.DataView;
var nativeArrayBufferSlice = ArrayBuffer.prototype.slice;

var INCORRECT_SLICE = fails(function () {
  return !new ArrayBuffer(2).slice(1, undefined).byteLength;
});

// `ArrayBuffer.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-arraybuffer.prototype.slice
$({ target: 'ArrayBuffer', proto: true, unsafe: true, forced: INCORRECT_SLICE }, {
  slice: function slice(start, end) {
    if (nativeArrayBufferSlice !== undefined && end === undefined) {
      return nativeArrayBufferSlice.call(anObject(this), start); // FF fix
    }
    var length = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    var result = new (speciesConstructor(this, ArrayBuffer))(toLength(fin - first));
    var viewSource = new DataView(this);
    var viewTarget = new DataView(result);
    var index = 0;
    while (first < fin) {
      viewTarget.setUint8(index++, viewSource.getUint8(first++));
    } return result;
  }
});


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var DESCRIPTORS = __webpack_require__(6);
var NATIVE_ARRAY_BUFFER = __webpack_require__(81);
var createNonEnumerableProperty = __webpack_require__(5);
var redefineAll = __webpack_require__(82);
var fails = __webpack_require__(7);
var anInstance = __webpack_require__(83);
var toInteger = __webpack_require__(42);
var toLength = __webpack_require__(41);
var toIndex = __webpack_require__(84);
var IEEE754 = __webpack_require__(85);
var getPrototypeOf = __webpack_require__(73);
var setPrototypeOf = __webpack_require__(76);
var getOwnPropertyNames = __webpack_require__(38).f;
var defineProperty = __webpack_require__(8).f;
var arrayFill = __webpack_require__(86);
var setToStringTag = __webpack_require__(75);
var InternalStateModule = __webpack_require__(19);

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length';
var WRONG_INDEX = 'Wrong index';
var NativeArrayBuffer = global[ARRAY_BUFFER];
var $ArrayBuffer = NativeArrayBuffer;
var $DataView = global[DATA_VIEW];
var $DataViewPrototype = $DataView && $DataView[PROTOTYPE];
var ObjectPrototype = Object.prototype;
var RangeError = global.RangeError;

var packIEEE754 = IEEE754.pack;
var unpackIEEE754 = IEEE754.unpack;

var packInt8 = function (number) {
  return [number & 0xFF];
};

var packInt16 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF];
};

var packInt32 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
};

var unpackInt32 = function (buffer) {
  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
};

var packFloat32 = function (number) {
  return packIEEE754(number, 23, 4);
};

var packFloat64 = function (number) {
  return packIEEE754(number, 52, 8);
};

var addGetter = function (Constructor, key) {
  defineProperty(Constructor[PROTOTYPE], key, { get: function () { return getInternalState(this)[key]; } });
};

var get = function (view, count, index, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalState(view);
  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
  var bytes = getInternalState(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = bytes.slice(start, start + count);
  return isLittleEndian ? pack : pack.reverse();
};

var set = function (view, count, index, conversion, value, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalState(view);
  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
  var bytes = getInternalState(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = conversion(+value);
  for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
};

if (!NATIVE_ARRAY_BUFFER) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    setInternalState(this, {
      bytes: arrayFill.call(new Array(byteLength), 0),
      byteLength: byteLength
    });
    if (!DESCRIPTORS) this.byteLength = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = getInternalState(buffer).byteLength;
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    setInternalState(this, {
      buffer: buffer,
      byteLength: byteLength,
      byteOffset: offset
    });
    if (!DESCRIPTORS) {
      this.buffer = buffer;
      this.byteLength = byteLength;
      this.byteOffset = offset;
    }
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, 'byteLength');
    addGetter($DataView, 'buffer');
    addGetter($DataView, 'byteLength');
    addGetter($DataView, 'byteOffset');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
    }
  });
} else {
  if (!fails(function () {
    NativeArrayBuffer(1);
  }) || !fails(function () {
    new NativeArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new NativeArrayBuffer(); // eslint-disable-line no-new
    new NativeArrayBuffer(1.5); // eslint-disable-line no-new
    new NativeArrayBuffer(NaN); // eslint-disable-line no-new
    return NativeArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new NativeArrayBuffer(toIndex(length));
    };
    var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE] = NativeArrayBuffer[PROTOTYPE];
    for (var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) {
        createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);
      }
    }
    ArrayBufferPrototype.constructor = $ArrayBuffer;
  }

  // WebKit bug - the same parent prototype for typed arrays and data view
  if (setPrototypeOf && getPrototypeOf($DataViewPrototype) !== ObjectPrototype) {
    setPrototypeOf($DataViewPrototype, ObjectPrototype);
  }

  // iOS Safari 7.x bug
  var testView = new $DataView(new $ArrayBuffer(2));
  var nativeSetInt8 = $DataViewPrototype.setInt8;
  testView.setInt8(0, 2147483648);
  testView.setInt8(1, 2147483649);
  if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll($DataViewPrototype, {
    setInt8: function setInt8(byteOffset, value) {
      nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, { unsafe: true });
}

setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);

module.exports = {
  ArrayBuffer: $ArrayBuffer,
  DataView: $DataView
};


/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined';


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(2);

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(42);
var toLength = __webpack_require__(41);

// `ToIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-toindex
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length or index');
  return length;
};


/***/ }),
/* 85 */
/***/ (function(module, exports) {

// IEEE754 conversions based on https://github.com/feross/ieee754
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = 1 / 0;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;

var pack = function (number, mantissaLength, bytes) {
  var buffer = new Array(bytes);
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
  var index = 0;
  var exponent, mantissa, c;
  number = abs(number);
  // eslint-disable-next-line no-self-compare
  if (number != number || number === Infinity) {
    // eslint-disable-next-line no-self-compare
    mantissa = number != number ? 1 : 0;
    exponent = eMax;
  } else {
    exponent = floor(log(number) / LN2);
    if (number * (c = pow(2, -exponent)) < 1) {
      exponent--;
      c *= 2;
    }
    if (exponent + eBias >= 1) {
      number += rt / c;
    } else {
      number += rt * pow(2, 1 - eBias);
    }
    if (number * c >= 2) {
      exponent++;
      c /= 2;
    }
    if (exponent + eBias >= eMax) {
      mantissa = 0;
      exponent = eMax;
    } else if (exponent + eBias >= 1) {
      mantissa = (number * c - 1) * pow(2, mantissaLength);
      exponent = exponent + eBias;
    } else {
      mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
      exponent = 0;
    }
  }
  for (; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8);
  exponent = exponent << mantissaLength | mantissa;
  exponentLength += mantissaLength;
  for (; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8);
  buffer[--index] |= sign * 128;
  return buffer;
};

var unpack = function (buffer, mantissaLength) {
  var bytes = buffer.length;
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var nBits = exponentLength - 7;
  var index = bytes - 1;
  var sign = buffer[index--];
  var exponent = sign & 127;
  var mantissa;
  sign >>= 7;
  for (; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8);
  mantissa = exponent & (1 << -nBits) - 1;
  exponent >>= -nBits;
  nBits += mantissaLength;
  for (; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8);
  if (exponent === 0) {
    exponent = 1 - eBias;
  } else if (exponent === eMax) {
    return mantissa ? NaN : sign ? -Infinity : Infinity;
  } else {
    mantissa = mantissa + pow(2, mantissaLength);
    exponent = exponent - eBias;
  } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
};

module.exports = {
  pack: pack,
  unpack: unpack
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(47);
var toAbsoluteIndex = __webpack_require__(43);
var toLength = __webpack_require__(41);

// `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var aFunction = __webpack_require__(55);
var wellKnownSymbol = __webpack_require__(58);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(89);
var redefine = __webpack_require__(2);
var toString = __webpack_require__(90);

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(58);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(89);
var classof = __webpack_require__(91);

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(89);
var classofRaw = __webpack_require__(32);
var wellKnownSymbol = __webpack_require__(58);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(93);

// `Uint8Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint8', function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(27);
var global = __webpack_require__(3);
var DESCRIPTORS = __webpack_require__(6);
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__(94);
var ArrayBufferViewCore = __webpack_require__(96);
var ArrayBufferModule = __webpack_require__(80);
var anInstance = __webpack_require__(83);
var createPropertyDescriptor = __webpack_require__(14);
var createNonEnumerableProperty = __webpack_require__(5);
var toLength = __webpack_require__(41);
var toIndex = __webpack_require__(84);
var toOffset = __webpack_require__(97);
var toPrimitive = __webpack_require__(13);
var has = __webpack_require__(15);
var classof = __webpack_require__(91);
var isObject = __webpack_require__(11);
var create = __webpack_require__(66);
var setPrototypeOf = __webpack_require__(76);
var getOwnPropertyNames = __webpack_require__(38).f;
var typedArrayFrom = __webpack_require__(99);
var forEach = __webpack_require__(53).forEach;
var setSpecies = __webpack_require__(102);
var definePropertyModule = __webpack_require__(8);
var getOwnPropertyDescriptorModule = __webpack_require__(28);
var InternalStateModule = __webpack_require__(19);
var inheritIfRequired = __webpack_require__(103);

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var round = Math.round;
var RangeError = global.RangeError;
var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
var DataView = ArrayBufferModule.DataView;
var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
var TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG;
var TypedArray = ArrayBufferViewCore.TypedArray;
var TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var isTypedArray = ArrayBufferViewCore.isTypedArray;
var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
var WRONG_LENGTH = 'Wrong length';

var fromList = function (C, list) {
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor(C))(length);
  while (length > index) result[index] = list[index++];
  return result;
};

var addGetter = function (it, key) {
  nativeDefineProperty(it, key, { get: function () {
    return getInternalState(this)[key];
  } });
};

var isArrayBuffer = function (it) {
  var klass;
  return it instanceof ArrayBuffer || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
};

var isTypedArrayIndex = function (target, key) {
  return isTypedArray(target)
    && typeof key != 'symbol'
    && key in target
    && String(+key) == String(key);
};

var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
  return isTypedArrayIndex(target, key = toPrimitive(key, true))
    ? createPropertyDescriptor(2, target[key])
    : nativeGetOwnPropertyDescriptor(target, key);
};

var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
  if (isTypedArrayIndex(target, key = toPrimitive(key, true))
    && isObject(descriptor)
    && has(descriptor, 'value')
    && !has(descriptor, 'get')
    && !has(descriptor, 'set')
    // TODO: add validation descriptor w/o calling accessors
    && !descriptor.configurable
    && (!has(descriptor, 'writable') || descriptor.writable)
    && (!has(descriptor, 'enumerable') || descriptor.enumerable)
  ) {
    target[key] = descriptor.value;
    return target;
  } return nativeDefineProperty(target, key, descriptor);
};

if (DESCRIPTORS) {
  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
    definePropertyModule.f = wrappedDefineProperty;
    addGetter(TypedArrayPrototype, 'buffer');
    addGetter(TypedArrayPrototype, 'byteOffset');
    addGetter(TypedArrayPrototype, 'byteLength');
    addGetter(TypedArrayPrototype, 'length');
  }

  $({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
    defineProperty: wrappedDefineProperty
  });

  module.exports = function (TYPE, wrapper, CLAMPED) {
    var BYTES = TYPE.match(/\d+$/)[0] / 8;
    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + TYPE;
    var SETTER = 'set' + TYPE;
    var NativeTypedArrayConstructor = global[CONSTRUCTOR_NAME];
    var TypedArrayConstructor = NativeTypedArrayConstructor;
    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
    var exported = {};

    var getter = function (that, index) {
      var data = getInternalState(that);
      return data.view[GETTER](index * BYTES + data.byteOffset, true);
    };

    var setter = function (that, index, value) {
      var data = getInternalState(that);
      if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
      data.view[SETTER](index * BYTES + data.byteOffset, value, true);
    };

    var addElement = function (that, index) {
      nativeDefineProperty(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };

    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
        anInstance(that, TypedArrayConstructor, CONSTRUCTOR_NAME);
        var index = 0;
        var byteOffset = 0;
        var buffer, byteLength, length;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new ArrayBuffer(byteLength);
        } else if (isArrayBuffer(data)) {
          buffer = data;
          byteOffset = toOffset(offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - byteOffset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + byteOffset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (isTypedArray(data)) {
          return fromList(TypedArrayConstructor, data);
        } else {
          return typedArrayFrom.call(TypedArrayConstructor, data);
        }
        setInternalState(that, {
          buffer: buffer,
          byteOffset: byteOffset,
          byteLength: byteLength,
          length: length,
          view: new DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);
    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
        anInstance(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
        return inheritIfRequired(function () {
          if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
          if (isArrayBuffer(data)) return $length !== undefined
            ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length)
            : typedArrayOffset !== undefined
              ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES))
              : new NativeTypedArrayConstructor(data);
          if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
          return typedArrayFrom.call(TypedArrayConstructor, data);
        }(), dummy, TypedArrayConstructor);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
        if (!(key in TypedArrayConstructor)) {
          createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
        }
      });
      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
    }

    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
    }

    if (TYPED_ARRAY_TAG) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
    }

    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

    $({
      global: true, forced: TypedArrayConstructor != NativeTypedArrayConstructor, sham: !NATIVE_ARRAY_BUFFER_VIEWS
    }, exported);

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
      createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
    }

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
    }

    setSpecies(CONSTRUCTOR_NAME);
  };
} else module.exports = function () { /* empty */ };


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-new */
var global = __webpack_require__(3);
var fails = __webpack_require__(7);
var checkCorrectnessOfIteration = __webpack_require__(95);
var NATIVE_ARRAY_BUFFER_VIEWS = __webpack_require__(96).NATIVE_ARRAY_BUFFER_VIEWS;

var ArrayBuffer = global.ArrayBuffer;
var Int8Array = global.Int8Array;

module.exports = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function () {
  Int8Array(1);
}) || !fails(function () {
  new Int8Array(-1);
}) || !checkCorrectnessOfIteration(function (iterable) {
  new Int8Array();
  new Int8Array(null);
  new Int8Array(1.5);
  new Int8Array(iterable);
}, true) || fails(function () {
  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
  return new Int8Array(new ArrayBuffer(2), 1, undefined).length !== 1;
});


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(58);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_ARRAY_BUFFER = __webpack_require__(81);
var DESCRIPTORS = __webpack_require__(6);
var global = __webpack_require__(3);
var isObject = __webpack_require__(11);
var has = __webpack_require__(15);
var classof = __webpack_require__(91);
var createNonEnumerableProperty = __webpack_require__(5);
var redefine = __webpack_require__(2);
var defineProperty = __webpack_require__(8).f;
var getPrototypeOf = __webpack_require__(73);
var setPrototypeOf = __webpack_require__(76);
var wellKnownSymbol = __webpack_require__(58);
var uid = __webpack_require__(24);

var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var Uint8ClampedArray = global.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array && getPrototypeOf(Int8Array);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var isPrototypeOf = ObjectPrototype.isPrototypeOf;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQIRED = false;
var NAME;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var isView = function isView(it) {
  var klass = classof(it);
  return klass === 'DataView' || has(TypedArrayConstructorsList, klass);
};

var isTypedArray = function (it) {
  return isObject(it) && has(TypedArrayConstructorsList, classof(it));
};

var aTypedArray = function (it) {
  if (isTypedArray(it)) return it;
  throw TypeError('Target is not a typed array');
};

var aTypedArrayConstructor = function (C) {
  if (setPrototypeOf) {
    if (isPrototypeOf.call(TypedArray, C)) return C;
  } else for (var ARRAY in TypedArrayConstructorsList) if (has(TypedArrayConstructorsList, NAME)) {
    var TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && (C === TypedArrayConstructor || isPrototypeOf.call(TypedArrayConstructor, C))) {
      return C;
    }
  } throw TypeError('Target is not a typed array constructor');
};

var exportTypedArrayMethod = function (KEY, property, forced) {
  if (!DESCRIPTORS) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && has(TypedArrayConstructor.prototype, KEY)) {
      delete TypedArrayConstructor.prototype[KEY];
    }
  }
  if (!TypedArrayPrototype[KEY] || forced) {
    redefine(TypedArrayPrototype, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS) return;
  if (setPrototypeOf) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global[ARRAY];
      if (TypedArrayConstructor && has(TypedArrayConstructor, KEY)) {
        delete TypedArrayConstructor[KEY];
      }
    }
    if (!TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8Array[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      redefine(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  if (!global[NAME]) NATIVE_ARRAY_BUFFER_VIEWS = false;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS || typeof TypedArray != 'function' || TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow
  TypedArray = function TypedArray() {
    throw TypeError('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (DESCRIPTORS && !has(TypedArrayPrototype, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQIRED = true;
  defineProperty(TypedArrayPrototype, TO_STRING_TAG, { get: function () {
    return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
  } });
  for (NAME in TypedArrayConstructorsList) if (global[NAME]) {
    createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
  }
}

module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray,
  aTypedArrayConstructor: aTypedArrayConstructor,
  exportTypedArrayMethod: exportTypedArrayMethod,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var toPositiveInteger = __webpack_require__(98);

module.exports = function (it, BYTES) {
  var offset = toPositiveInteger(it);
  if (offset % BYTES) throw RangeError('Wrong offset');
  return offset;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(42);

module.exports = function (it) {
  var result = toInteger(it);
  if (result < 0) throw RangeError("The argument can't be less than 0");
  return result;
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(47);
var toLength = __webpack_require__(41);
var getIteratorMethod = __webpack_require__(100);
var isArrayIteratorMethod = __webpack_require__(101);
var bind = __webpack_require__(54);
var aTypedArrayConstructor = __webpack_require__(96).aTypedArrayConstructor;

module.exports = function from(source /* , mapfn, thisArg */) {
  var O = toObject(source);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var i, length, result, step, iterator, next;
  if (iteratorMethod != undefined && !isArrayIteratorMethod(iteratorMethod)) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    O = [];
    while (!(step = next.call(iterator)).done) {
      O.push(step.value);
    }
  }
  if (mapping && argumentsLength > 2) {
    mapfn = bind(mapfn, arguments[2], 2);
  }
  length = toLength(O.length);
  result = new (aTypedArrayConstructor(this))(length);
  for (i = 0; length > i; i++) {
    result[i] = mapping ? mapfn(O[i], i) : O[i];
  }
  return result;
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(91);
var Iterators = __webpack_require__(69);
var wellKnownSymbol = __webpack_require__(58);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(58);
var Iterators = __webpack_require__(69);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(36);
var definePropertyModule = __webpack_require__(8);
var wellKnownSymbol = __webpack_require__(58);
var DESCRIPTORS = __webpack_require__(6);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
var setPrototypeOf = __webpack_require__(76);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(93);

// `Uint8ClampedArray` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint8', function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(96);
var $copyWithin = __webpack_require__(106);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.copyWithin` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.copywithin
exportTypedArrayMethod('copyWithin', function copyWithin(target, start /* , end */) {
  return $copyWithin.call(aTypedArray(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
});


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(47);
var toAbsoluteIndex = __webpack_require__(43);
var toLength = __webpack_require__(41);

var min = Math.min;

// `Array.prototype.copyWithin` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.copywithin
module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(96);
var $every = __webpack_require__(53).every;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.every` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.every
exportTypedArrayMethod('every', function every(callbackfn /* , thisArg */) {
  return $every(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(96);
var $fill = __webpack_require__(86);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.fill
// eslint-disable-next-line no-unused-vars
exportTypedArrayMethod('fill', function fill(value /* , start, end */) {
  return $fill.apply(aTypedArray(this), arguments);
});


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(96);
var $filter = __webpack_require__(53).filter;
var speciesConstructor = __webpack_require__(87);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.filter
exportTypedArrayMethod('filter', function filter(callbackfn /* , thisArg */) {
  var list = $filter(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  var C = speciesConstructor(this, this.constructor);
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor(C))(length);
  while (length > index) result[index] = list[index++];
  return result;
});


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(96);
var $find = __webpack_require__(53).find;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.find` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.find
exportTypedArrayMethod('find', function find(predicate /* , thisArg */) {
  return $find(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(96);
var $findIndex = __webpack_require__(53).findIndex;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.findindex
exportTypedArrayMethod('findIndex', function findIndex(predicate /* , thisArg */) {
  return $findIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(96);
var $forEach = __webpack_require__(53).forEach;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.foreach
exportTypedArrayMethod('forEach', function forEach(callbackfn /* , thisArg */) {
  $forEach(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(96);
var $includes = __webpack_require__(40).includes;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.includes
exportTypedArrayMethod('includes', function includes(searchElement /* , fromIndex */) {
  return $includes(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(96);
var $indexOf = __webpack_require__(40).indexOf;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.indexof
exportTypedArrayMethod('indexOf', function indexOf(searchElement /* , fromIndex */) {
  return $indexOf(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var ArrayBufferViewCore = __webpack_require__(96);
var ArrayIterators = __webpack_require__(64);
var wellKnownSymbol = __webpack_require__(58);

var ITERATOR = wellKnownSymbol('iterator');
var Uint8Array = global.Uint8Array;
var arrayValues = ArrayIterators.values;
var arrayKeys = ArrayIterators.keys;
var arrayEntries = ArrayIterators.entries;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var nativeTypedArrayIterator = Uint8Array && Uint8Array.prototype[ITERATOR];

var CORRECT_ITER_NAME = !!nativeTypedArrayIterator
  && (nativeTypedArrayIterator.name == 'values' || nativeTypedArrayIterator.name == undefined);

var typedArrayValues = function values() {
  return arrayValues.call(aTypedArray(this));
};

// `%TypedArray%.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.entries
exportTypedArrayMethod('entries', function entries() {
  return arrayEntries.call(aTypedArray(this));
});
// `%TypedArray%.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.keys
exportTypedArrayMethod('keys', function keys() {
  return arrayKeys.call(aTypedArray(this));
});
// `%TypedArray%.prototype.values` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.values
exportTypedArrayMethod('values', typedArrayValues, !CORRECT_ITER_NAME);
// `%TypedArray%.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype-@@iterator
exportTypedArrayMethod(ITERATOR, typedArrayValues, !CORRECT_ITER_NAME);


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(96);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $join = [].join;

// `%TypedArray%.prototype.join` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.join
// eslint-disable-next-line no-unused-vars
exportTypedArrayMethod('join', function join(separator) {
  return $join.apply(aTypedArray(this), arguments);
});


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(96);
var $lastIndexOf = __webpack_require__(118);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.lastIndexOf` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.lastindexof
// eslint-disable-next-line no-unused-vars
exportTypedArrayMethod('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */) {
  return $lastIndexOf.apply(aTypedArray(this), arguments);
});


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(30);
var toInteger = __webpack_require__(42);
var toLength = __webpack_require__(41);
var arrayMethodIsStrict = __webpack_require__(119);
var arrayMethodUsesToLength = __webpack_require__(63);

var min = Math.min;
var nativeLastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
// For preventing possible almost infinite loop in non-standard implementations, test the forward version of the method
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });
var FORCED = NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH;

// `Array.prototype.lastIndexOf` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof
module.exports = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return nativeLastIndexOf.apply(this, arguments) || 0;
  var O = toIndexedObject(this);
  var length = toLength(O.length);
  var index = length - 1;
  if (arguments.length > 1) index = min(index, toInteger(arguments[1]));
  if (index < 0) index = length + index;
  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
  return -1;
} : nativeLastIndexOf;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(7);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(96);
var $map = __webpack_require__(53).map;
var speciesConstructor = __webpack_require__(87);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.map` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.map
exportTypedArrayMethod('map', function map(mapfn /* , thisArg */) {
  return $map(aTypedArray(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
    return new (aTypedArrayConstructor(speciesConstructor(O, O.constructor)))(length);
  });
});


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(96);
var $reduce = __webpack_require__(122).left;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reduce
exportTypedArrayMethod('reduce', function reduce(callbackfn /* , initialValue */) {
  return $reduce(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(55);
var toObject = __webpack_require__(47);
var IndexedObject = __webpack_require__(31);
var toLength = __webpack_require__(41);

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(96);
var $reduceRight = __webpack_require__(122).right;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduceRicht` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reduceright
exportTypedArrayMethod('reduceRight', function reduceRight(callbackfn /* , initialValue */) {
  return $reduceRight(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(96);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var floor = Math.floor;

// `%TypedArray%.prototype.reverse` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reverse
exportTypedArrayMethod('reverse', function reverse() {
  var that = this;
  var length = aTypedArray(that).length;
  var middle = floor(length / 2);
  var index = 0;
  var value;
  while (index < middle) {
    value = that[index];
    that[index++] = that[--length];
    that[length] = value;
  } return that;
});


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(96);
var toLength = __webpack_require__(41);
var toOffset = __webpack_require__(97);
var toObject = __webpack_require__(47);
var fails = __webpack_require__(7);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var FORCED = fails(function () {
  // eslint-disable-next-line no-undef
  new Int8Array(1).set({});
});

// `%TypedArray%.prototype.set` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.set
exportTypedArrayMethod('set', function set(arrayLike /* , offset */) {
  aTypedArray(this);
  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
  var length = this.length;
  var src = toObject(arrayLike);
  var len = toLength(src.length);
  var index = 0;
  if (len + offset > length) throw RangeError('Wrong length');
  while (index < len) this[offset + index] = src[index++];
}, FORCED);


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(96);
var speciesConstructor = __webpack_require__(87);
var fails = __webpack_require__(7);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $slice = [].slice;

var FORCED = fails(function () {
  // eslint-disable-next-line no-undef
  new Int8Array(1).slice();
});

// `%TypedArray%.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.slice
exportTypedArrayMethod('slice', function slice(start, end) {
  var list = $slice.call(aTypedArray(this), start, end);
  var C = speciesConstructor(this, this.constructor);
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor(C))(length);
  while (length > index) result[index] = list[index++];
  return result;
}, FORCED);


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(96);
var $some = __webpack_require__(53).some;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.some` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.some
exportTypedArrayMethod('some', function some(callbackfn /* , thisArg */) {
  return $some(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(96);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $sort = [].sort;

// `%TypedArray%.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.sort
exportTypedArrayMethod('sort', function sort(comparefn) {
  return $sort.call(aTypedArray(this), comparefn);
});


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(96);
var toLength = __webpack_require__(41);
var toAbsoluteIndex = __webpack_require__(43);
var speciesConstructor = __webpack_require__(87);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.subarray` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.subarray
exportTypedArrayMethod('subarray', function subarray(begin, end) {
  var O = aTypedArray(this);
  var length = O.length;
  var beginIndex = toAbsoluteIndex(begin, length);
  return new (speciesConstructor(O, O.constructor))(
    O.buffer,
    O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT,
    toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex)
  );
});


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var ArrayBufferViewCore = __webpack_require__(96);
var fails = __webpack_require__(7);

var Int8Array = global.Int8Array;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $toLocaleString = [].toLocaleString;
var $slice = [].slice;

// iOS Safari 6.x fails here
var TO_LOCALE_STRING_BUG = !!Int8Array && fails(function () {
  $toLocaleString.call(new Int8Array(1));
});

var FORCED = fails(function () {
  return [1, 2].toLocaleString() != new Int8Array([1, 2]).toLocaleString();
}) || !fails(function () {
  Int8Array.prototype.toLocaleString.call([1, 2]);
});

// `%TypedArray%.prototype.toLocaleString` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.tolocalestring
exportTypedArrayMethod('toLocaleString', function toLocaleString() {
  return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice.call(aTypedArray(this)) : aTypedArray(this), arguments);
}, FORCED);


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var exportTypedArrayMethod = __webpack_require__(96).exportTypedArrayMethod;
var fails = __webpack_require__(7);
var global = __webpack_require__(3);

var Uint8Array = global.Uint8Array;
var Uint8ArrayPrototype = Uint8Array && Uint8Array.prototype || {};
var arrayToString = [].toString;
var arrayJoin = [].join;

if (fails(function () { arrayToString.call({}); })) {
  arrayToString = function toString() {
    return arrayJoin.call(this);
  };
}

var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString;

// `%TypedArray%.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.tostring
exportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD);


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(133);

__webpack_require__(135);

__webpack_require__(197);

__webpack_require__(207);

__webpack_require__(211);

__webpack_require__(227);

__webpack_require__(229);

__webpack_require__(230);

__webpack_require__(231);

__webpack_require__(232);

__webpack_require__(233);

__webpack_require__(234);

__webpack_require__(235);

__webpack_require__(236);

__webpack_require__(237);

__webpack_require__(238);

__webpack_require__(239);

__webpack_require__(243);

__webpack_require__(244);

__webpack_require__(246);

__webpack_require__(247);

__webpack_require__(248);

__webpack_require__(249);

__webpack_require__(250);

__webpack_require__(251);

__webpack_require__(252);

__webpack_require__(253);

__webpack_require__(254);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchemaFactory = SchemaFactory;
exports.default = void 0;

var _ = __webpack_require__(255);

var uint8 = _interopRequireWildcard(__webpack_require__(271));

function SchemaFactory(_ref) {
  var readByte = _ref.readByte,
      peekByte = _ref.peekByte,
      readBytes = _ref.readBytes,
      peekBytes = _ref.peekBytes,
      readString = _ref.readString,
      readUnsigned = _ref.readUnsigned,
      readArray = _ref.readArray,
      readBits = _ref.readBits; // a set of 0x00 terminated subblocks

  var subBlocksSchema = {
    blocks: function blocks(stream) {
      var terminator = 0x00;
      var chunks = [];
      var total = 0;

      var next = function next() {
        return readByte()(stream).then(function (size) {
          if (size == terminator) {
            return chunks;
          } else {
            return readBytes(size)(stream).then(function (bytes) {
              chunks.push(bytes);
              total += size;
            }).then(next);
          }
        });
      };

      return next().then(function () {
        var result = new Uint8Array(total);
        var offset = 0;

        for (var i = 0; i < chunks.length; i++) {
          result.set(chunks[i], offset);
          offset += chunks[i].length;
        }

        return result;
      });
    }
  }; // global control extension

  var gceSchema = (0, _.conditional)({
    gce: [{
      codes: readBytes(2)
    }, {
      byteSize: readByte()
    }, {
      extras: readBits({
        future: {
          index: 0,
          length: 3
        },
        disposal: {
          index: 3,
          length: 3
        },
        userInput: {
          index: 6
        },
        transparentColorGiven: {
          index: 7
        }
      })
    }, {
      delay: readUnsigned(true)
    }, {
      transparentColorIndex: readByte()
    }, {
      terminator: readByte()
    }]
  }, function (stream) {
    return peekBytes(2)(stream).then(function (codes) {
      return codes[0] === 0x21 && codes[1] === 0xf9;
    });
  }); // image pipeline block

  var imageSchema = (0, _.conditional)({
    image: [{
      code: readByte()
    }, {
      descriptor: [{
        left: readUnsigned(true)
      }, {
        top: readUnsigned(true)
      }, {
        width: readUnsigned(true)
      }, {
        height: readUnsigned(true)
      }, {
        lct: readBits({
          exists: {
            index: 0
          },
          interlaced: {
            index: 1
          },
          sort: {
            index: 2
          },
          future: {
            index: 3,
            length: 2
          },
          size: {
            index: 5,
            length: 3
          }
        })
      }]
    }, (0, _.conditional)({
      lct: readArray(3, function (stream, result, parent) {
        return Math.pow(2, parent.descriptor.lct.size + 1);
      })
    }, function (stream, result, parent) {
      return parent.descriptor.lct.exists;
    }), {
      data: [{
        minCodeSize: readByte()
      }, subBlocksSchema]
    }]
  }, function (stream) {
    return peekByte()(stream).then(function (v) {
      return v === 0x2c;
    });
  }); // plain text block

  var textSchema = (0, _.conditional)({
    text: [{
      codes: readBytes(2)
    }, {
      blockSize: readByte()
    }, {
      preData: function preData(stream, result, parent) {
        return readBytes(parent.text.blockSize)(stream);
      }
    }, subBlocksSchema]
  }, function (stream) {
    return peekBytes(2)(stream).then(function (codes) {
      return codes[0] === 0x21 && codes[1] === 0x01;
    });
  }); // application block

  var applicationSchema = (0, _.conditional)({
    application: [{
      codes: readBytes(2)
    }, {
      blockSize: readByte()
    }, {
      id: function id(stream, result, parent) {
        return readString(parent.blockSize)(stream);
      }
    }, subBlocksSchema]
  }, function (stream) {
    return peekBytes(2)(stream).then(function (codes) {
      return codes[0] === 0x21 && codes[1] === 0xff;
    });
  }); // comment block

  var commentSchema = (0, _.conditional)({
    comment: [{
      codes: readBytes(2)
    }, subBlocksSchema]
  }, function (stream) {
    return peekBytes(2)(stream).then(function (codes) {
      return codes[0] === 0x21 && codes[1] === 0xfe;
    });
  });
  var schema = [{
    header: [{
      signature: readString(3)
    }, {
      version: readString(3)
    }]
  }, {
    lsd: [{
      width: readUnsigned(true)
    }, {
      height: readUnsigned(true)
    }, {
      gct: readBits({
        exists: {
          index: 0
        },
        resolution: {
          index: 1,
          length: 3
        },
        sort: {
          index: 4
        },
        size: {
          index: 5,
          length: 3
        }
      })
    }, {
      backgroundColorIndex: readByte()
    }, {
      pixelAspectRatio: readByte()
    }]
  }, (0, _.conditional)({
    gct: readArray(3, function (stream, result) {
      return Math.pow(2, result.lsd.gct.size + 1);
    })
  }, function (stream, result) {
    return result.lsd.gct.exists;
  }), // content frames
  {
    frames: (0, _.loop)([gceSchema, applicationSchema, commentSchema, imageSchema, textSchema], function (stream) {
      return peekByte()(stream).then(function (nextCode) {
        return (// rather than check for a terminator, we should check for the existence
          // of an ext or image block to avoid infinite loops
          //var terminator = 0x3B;
          //return nextCode !== terminator;
          nextCode === 0x21 || nextCode === 0x2c
        );
      });
    })
  }];
  return schema;
}

var _default = SchemaFactory(uint8);

exports.default = _default;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(134);

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),
/* 134 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(136);
var addToUnscopables = __webpack_require__(141);
var Iterators = __webpack_require__(175);
var InternalStateModule = __webpack_require__(176);
var defineIterator = __webpack_require__(179);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(137);
var requireObjectCoercible = __webpack_require__(140);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(138);
var classof = __webpack_require__(139);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 139 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 140 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(142);
var create = __webpack_require__(161);
var definePropertyModule = __webpack_require__(150);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(143);
var shared = __webpack_require__(144);
var has = __webpack_require__(157);
var uid = __webpack_require__(158);
var NATIVE_SYMBOL = __webpack_require__(159);
var USE_SYMBOL_AS_UID = __webpack_require__(160);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(145);
var store = __webpack_require__(146);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.8.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(143);
var setGlobal = __webpack_require__(147);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(143);
var createNonEnumerableProperty = __webpack_require__(148);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(149);
var definePropertyModule = __webpack_require__(150);
var createPropertyDescriptor = __webpack_require__(156);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(138);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(149);
var IE8_DOM_DEFINE = __webpack_require__(151);
var anObject = __webpack_require__(154);
var toPrimitive = __webpack_require__(155);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(149);
var fails = __webpack_require__(138);
var createElement = __webpack_require__(152);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(143);
var isObject = __webpack_require__(153);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(153);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(153);

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 157 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 158 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(138);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(159);

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(154);
var defineProperties = __webpack_require__(162);
var enumBugKeys = __webpack_require__(170);
var hiddenKeys = __webpack_require__(169);
var html = __webpack_require__(171);
var documentCreateElement = __webpack_require__(152);
var sharedKey = __webpack_require__(174);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(149);
var definePropertyModule = __webpack_require__(150);
var anObject = __webpack_require__(154);
var objectKeys = __webpack_require__(163);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(164);
var enumBugKeys = __webpack_require__(170);

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(157);
var toIndexedObject = __webpack_require__(136);
var indexOf = __webpack_require__(165).indexOf;
var hiddenKeys = __webpack_require__(169);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(136);
var toLength = __webpack_require__(166);
var toAbsoluteIndex = __webpack_require__(168);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(167);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 167 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(167);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 169 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 170 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(172);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(173);
var global = __webpack_require__(143);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(143);

module.exports = global;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(144);
var uid = __webpack_require__(158);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 175 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(177);
var global = __webpack_require__(143);
var isObject = __webpack_require__(153);
var createNonEnumerableProperty = __webpack_require__(148);
var objectHas = __webpack_require__(157);
var shared = __webpack_require__(146);
var sharedKey = __webpack_require__(174);
var hiddenKeys = __webpack_require__(169);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(143);
var inspectSource = __webpack_require__(178);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(146);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(180);
var createIteratorConstructor = __webpack_require__(189);
var getPrototypeOf = __webpack_require__(191);
var setPrototypeOf = __webpack_require__(195);
var setToStringTag = __webpack_require__(194);
var createNonEnumerableProperty = __webpack_require__(148);
var redefine = __webpack_require__(183);
var wellKnownSymbol = __webpack_require__(142);
var IS_PURE = __webpack_require__(145);
var Iterators = __webpack_require__(175);
var IteratorsCore = __webpack_require__(190);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(143);
var getOwnPropertyDescriptor = __webpack_require__(181).f;
var createNonEnumerableProperty = __webpack_require__(148);
var redefine = __webpack_require__(183);
var setGlobal = __webpack_require__(147);
var copyConstructorProperties = __webpack_require__(184);
var isForced = __webpack_require__(188);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(149);
var propertyIsEnumerableModule = __webpack_require__(182);
var createPropertyDescriptor = __webpack_require__(156);
var toIndexedObject = __webpack_require__(136);
var toPrimitive = __webpack_require__(155);
var has = __webpack_require__(157);
var IE8_DOM_DEFINE = __webpack_require__(151);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(143);
var createNonEnumerableProperty = __webpack_require__(148);
var has = __webpack_require__(157);
var setGlobal = __webpack_require__(147);
var inspectSource = __webpack_require__(178);
var InternalStateModule = __webpack_require__(176);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(157);
var ownKeys = __webpack_require__(185);
var getOwnPropertyDescriptorModule = __webpack_require__(181);
var definePropertyModule = __webpack_require__(150);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(172);
var getOwnPropertyNamesModule = __webpack_require__(186);
var getOwnPropertySymbolsModule = __webpack_require__(187);
var anObject = __webpack_require__(154);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(164);
var enumBugKeys = __webpack_require__(170);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 187 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(138);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(190).IteratorPrototype;
var create = __webpack_require__(161);
var createPropertyDescriptor = __webpack_require__(156);
var setToStringTag = __webpack_require__(194);
var Iterators = __webpack_require__(175);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(191);
var createNonEnumerableProperty = __webpack_require__(148);
var has = __webpack_require__(157);
var wellKnownSymbol = __webpack_require__(142);
var IS_PURE = __webpack_require__(145);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(157);
var toObject = __webpack_require__(192);
var sharedKey = __webpack_require__(174);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(193);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(140);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(138);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(150).f;
var has = __webpack_require__(157);
var wellKnownSymbol = __webpack_require__(142);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(154);
var aPossiblePrototype = __webpack_require__(196);

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(153);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(180);
var fails = __webpack_require__(138);
var ArrayBufferModule = __webpack_require__(198);
var anObject = __webpack_require__(154);
var toAbsoluteIndex = __webpack_require__(168);
var toLength = __webpack_require__(166);
var speciesConstructor = __webpack_require__(205);

var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
var DataView = ArrayBufferModule.DataView;
var nativeArrayBufferSlice = ArrayBuffer.prototype.slice;

var INCORRECT_SLICE = fails(function () {
  return !new ArrayBuffer(2).slice(1, undefined).byteLength;
});

// `ArrayBuffer.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-arraybuffer.prototype.slice
$({ target: 'ArrayBuffer', proto: true, unsafe: true, forced: INCORRECT_SLICE }, {
  slice: function slice(start, end) {
    if (nativeArrayBufferSlice !== undefined && end === undefined) {
      return nativeArrayBufferSlice.call(anObject(this), start); // FF fix
    }
    var length = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    var result = new (speciesConstructor(this, ArrayBuffer))(toLength(fin - first));
    var viewSource = new DataView(this);
    var viewTarget = new DataView(result);
    var index = 0;
    while (first < fin) {
      viewTarget.setUint8(index++, viewSource.getUint8(first++));
    } return result;
  }
});


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(143);
var DESCRIPTORS = __webpack_require__(149);
var NATIVE_ARRAY_BUFFER = __webpack_require__(199);
var createNonEnumerableProperty = __webpack_require__(148);
var redefineAll = __webpack_require__(200);
var fails = __webpack_require__(138);
var anInstance = __webpack_require__(201);
var toInteger = __webpack_require__(167);
var toLength = __webpack_require__(166);
var toIndex = __webpack_require__(202);
var IEEE754 = __webpack_require__(203);
var getPrototypeOf = __webpack_require__(191);
var setPrototypeOf = __webpack_require__(195);
var getOwnPropertyNames = __webpack_require__(186).f;
var defineProperty = __webpack_require__(150).f;
var arrayFill = __webpack_require__(204);
var setToStringTag = __webpack_require__(194);
var InternalStateModule = __webpack_require__(176);

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length';
var WRONG_INDEX = 'Wrong index';
var NativeArrayBuffer = global[ARRAY_BUFFER];
var $ArrayBuffer = NativeArrayBuffer;
var $DataView = global[DATA_VIEW];
var $DataViewPrototype = $DataView && $DataView[PROTOTYPE];
var ObjectPrototype = Object.prototype;
var RangeError = global.RangeError;

var packIEEE754 = IEEE754.pack;
var unpackIEEE754 = IEEE754.unpack;

var packInt8 = function (number) {
  return [number & 0xFF];
};

var packInt16 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF];
};

var packInt32 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
};

var unpackInt32 = function (buffer) {
  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
};

var packFloat32 = function (number) {
  return packIEEE754(number, 23, 4);
};

var packFloat64 = function (number) {
  return packIEEE754(number, 52, 8);
};

var addGetter = function (Constructor, key) {
  defineProperty(Constructor[PROTOTYPE], key, { get: function () { return getInternalState(this)[key]; } });
};

var get = function (view, count, index, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalState(view);
  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
  var bytes = getInternalState(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = bytes.slice(start, start + count);
  return isLittleEndian ? pack : pack.reverse();
};

var set = function (view, count, index, conversion, value, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalState(view);
  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
  var bytes = getInternalState(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = conversion(+value);
  for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
};

if (!NATIVE_ARRAY_BUFFER) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    setInternalState(this, {
      bytes: arrayFill.call(new Array(byteLength), 0),
      byteLength: byteLength
    });
    if (!DESCRIPTORS) this.byteLength = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = getInternalState(buffer).byteLength;
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    setInternalState(this, {
      buffer: buffer,
      byteLength: byteLength,
      byteOffset: offset
    });
    if (!DESCRIPTORS) {
      this.buffer = buffer;
      this.byteLength = byteLength;
      this.byteOffset = offset;
    }
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, 'byteLength');
    addGetter($DataView, 'buffer');
    addGetter($DataView, 'byteLength');
    addGetter($DataView, 'byteOffset');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
    }
  });
} else {
  if (!fails(function () {
    NativeArrayBuffer(1);
  }) || !fails(function () {
    new NativeArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new NativeArrayBuffer(); // eslint-disable-line no-new
    new NativeArrayBuffer(1.5); // eslint-disable-line no-new
    new NativeArrayBuffer(NaN); // eslint-disable-line no-new
    return NativeArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new NativeArrayBuffer(toIndex(length));
    };
    var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE] = NativeArrayBuffer[PROTOTYPE];
    for (var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) {
        createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);
      }
    }
    ArrayBufferPrototype.constructor = $ArrayBuffer;
  }

  // WebKit bug - the same parent prototype for typed arrays and data view
  if (setPrototypeOf && getPrototypeOf($DataViewPrototype) !== ObjectPrototype) {
    setPrototypeOf($DataViewPrototype, ObjectPrototype);
  }

  // iOS Safari 7.x bug
  var testView = new $DataView(new $ArrayBuffer(2));
  var nativeSetInt8 = $DataViewPrototype.setInt8;
  testView.setInt8(0, 2147483648);
  testView.setInt8(1, 2147483649);
  if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll($DataViewPrototype, {
    setInt8: function setInt8(byteOffset, value) {
      nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, { unsafe: true });
}

setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);

module.exports = {
  ArrayBuffer: $ArrayBuffer,
  DataView: $DataView
};


/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined';


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(183);

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(167);
var toLength = __webpack_require__(166);

// `ToIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-toindex
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length or index');
  return length;
};


/***/ }),
/* 203 */
/***/ (function(module, exports) {

// IEEE754 conversions based on https://github.com/feross/ieee754
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = 1 / 0;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;

var pack = function (number, mantissaLength, bytes) {
  var buffer = new Array(bytes);
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
  var index = 0;
  var exponent, mantissa, c;
  number = abs(number);
  // eslint-disable-next-line no-self-compare
  if (number != number || number === Infinity) {
    // eslint-disable-next-line no-self-compare
    mantissa = number != number ? 1 : 0;
    exponent = eMax;
  } else {
    exponent = floor(log(number) / LN2);
    if (number * (c = pow(2, -exponent)) < 1) {
      exponent--;
      c *= 2;
    }
    if (exponent + eBias >= 1) {
      number += rt / c;
    } else {
      number += rt * pow(2, 1 - eBias);
    }
    if (number * c >= 2) {
      exponent++;
      c /= 2;
    }
    if (exponent + eBias >= eMax) {
      mantissa = 0;
      exponent = eMax;
    } else if (exponent + eBias >= 1) {
      mantissa = (number * c - 1) * pow(2, mantissaLength);
      exponent = exponent + eBias;
    } else {
      mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
      exponent = 0;
    }
  }
  for (; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8);
  exponent = exponent << mantissaLength | mantissa;
  exponentLength += mantissaLength;
  for (; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8);
  buffer[--index] |= sign * 128;
  return buffer;
};

var unpack = function (buffer, mantissaLength) {
  var bytes = buffer.length;
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var nBits = exponentLength - 7;
  var index = bytes - 1;
  var sign = buffer[index--];
  var exponent = sign & 127;
  var mantissa;
  sign >>= 7;
  for (; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8);
  mantissa = exponent & (1 << -nBits) - 1;
  exponent >>= -nBits;
  nBits += mantissaLength;
  for (; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8);
  if (exponent === 0) {
    exponent = 1 - eBias;
  } else if (exponent === eMax) {
    return mantissa ? NaN : sign ? -Infinity : Infinity;
  } else {
    mantissa = mantissa + pow(2, mantissaLength);
    exponent = exponent - eBias;
  } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
};

module.exports = {
  pack: pack,
  unpack: unpack
};


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(192);
var toAbsoluteIndex = __webpack_require__(168);
var toLength = __webpack_require__(166);

// `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(154);
var aFunction = __webpack_require__(206);
var wellKnownSymbol = __webpack_require__(142);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(208);
var redefine = __webpack_require__(183);
var toString = __webpack_require__(209);

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(142);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(208);
var classof = __webpack_require__(210);

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(208);
var classofRaw = __webpack_require__(139);
var wellKnownSymbol = __webpack_require__(142);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(212);

// `Uint8Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint8', function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(180);
var global = __webpack_require__(143);
var DESCRIPTORS = __webpack_require__(149);
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__(213);
var ArrayBufferViewCore = __webpack_require__(215);
var ArrayBufferModule = __webpack_require__(198);
var anInstance = __webpack_require__(201);
var createPropertyDescriptor = __webpack_require__(156);
var createNonEnumerableProperty = __webpack_require__(148);
var toLength = __webpack_require__(166);
var toIndex = __webpack_require__(202);
var toOffset = __webpack_require__(216);
var toPrimitive = __webpack_require__(155);
var has = __webpack_require__(157);
var classof = __webpack_require__(210);
var isObject = __webpack_require__(153);
var create = __webpack_require__(161);
var setPrototypeOf = __webpack_require__(195);
var getOwnPropertyNames = __webpack_require__(186).f;
var typedArrayFrom = __webpack_require__(218);
var forEach = __webpack_require__(222).forEach;
var setSpecies = __webpack_require__(225);
var definePropertyModule = __webpack_require__(150);
var getOwnPropertyDescriptorModule = __webpack_require__(181);
var InternalStateModule = __webpack_require__(176);
var inheritIfRequired = __webpack_require__(226);

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var round = Math.round;
var RangeError = global.RangeError;
var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
var DataView = ArrayBufferModule.DataView;
var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
var TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG;
var TypedArray = ArrayBufferViewCore.TypedArray;
var TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var isTypedArray = ArrayBufferViewCore.isTypedArray;
var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
var WRONG_LENGTH = 'Wrong length';

var fromList = function (C, list) {
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor(C))(length);
  while (length > index) result[index] = list[index++];
  return result;
};

var addGetter = function (it, key) {
  nativeDefineProperty(it, key, { get: function () {
    return getInternalState(this)[key];
  } });
};

var isArrayBuffer = function (it) {
  var klass;
  return it instanceof ArrayBuffer || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
};

var isTypedArrayIndex = function (target, key) {
  return isTypedArray(target)
    && typeof key != 'symbol'
    && key in target
    && String(+key) == String(key);
};

var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
  return isTypedArrayIndex(target, key = toPrimitive(key, true))
    ? createPropertyDescriptor(2, target[key])
    : nativeGetOwnPropertyDescriptor(target, key);
};

var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
  if (isTypedArrayIndex(target, key = toPrimitive(key, true))
    && isObject(descriptor)
    && has(descriptor, 'value')
    && !has(descriptor, 'get')
    && !has(descriptor, 'set')
    // TODO: add validation descriptor w/o calling accessors
    && !descriptor.configurable
    && (!has(descriptor, 'writable') || descriptor.writable)
    && (!has(descriptor, 'enumerable') || descriptor.enumerable)
  ) {
    target[key] = descriptor.value;
    return target;
  } return nativeDefineProperty(target, key, descriptor);
};

if (DESCRIPTORS) {
  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
    definePropertyModule.f = wrappedDefineProperty;
    addGetter(TypedArrayPrototype, 'buffer');
    addGetter(TypedArrayPrototype, 'byteOffset');
    addGetter(TypedArrayPrototype, 'byteLength');
    addGetter(TypedArrayPrototype, 'length');
  }

  $({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
    defineProperty: wrappedDefineProperty
  });

  module.exports = function (TYPE, wrapper, CLAMPED) {
    var BYTES = TYPE.match(/\d+$/)[0] / 8;
    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + TYPE;
    var SETTER = 'set' + TYPE;
    var NativeTypedArrayConstructor = global[CONSTRUCTOR_NAME];
    var TypedArrayConstructor = NativeTypedArrayConstructor;
    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
    var exported = {};

    var getter = function (that, index) {
      var data = getInternalState(that);
      return data.view[GETTER](index * BYTES + data.byteOffset, true);
    };

    var setter = function (that, index, value) {
      var data = getInternalState(that);
      if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
      data.view[SETTER](index * BYTES + data.byteOffset, value, true);
    };

    var addElement = function (that, index) {
      nativeDefineProperty(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };

    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
        anInstance(that, TypedArrayConstructor, CONSTRUCTOR_NAME);
        var index = 0;
        var byteOffset = 0;
        var buffer, byteLength, length;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new ArrayBuffer(byteLength);
        } else if (isArrayBuffer(data)) {
          buffer = data;
          byteOffset = toOffset(offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - byteOffset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + byteOffset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (isTypedArray(data)) {
          return fromList(TypedArrayConstructor, data);
        } else {
          return typedArrayFrom.call(TypedArrayConstructor, data);
        }
        setInternalState(that, {
          buffer: buffer,
          byteOffset: byteOffset,
          byteLength: byteLength,
          length: length,
          view: new DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);
    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
        anInstance(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
        return inheritIfRequired(function () {
          if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
          if (isArrayBuffer(data)) return $length !== undefined
            ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length)
            : typedArrayOffset !== undefined
              ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES))
              : new NativeTypedArrayConstructor(data);
          if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
          return typedArrayFrom.call(TypedArrayConstructor, data);
        }(), dummy, TypedArrayConstructor);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
        if (!(key in TypedArrayConstructor)) {
          createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
        }
      });
      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
    }

    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
    }

    if (TYPED_ARRAY_TAG) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
    }

    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

    $({
      global: true, forced: TypedArrayConstructor != NativeTypedArrayConstructor, sham: !NATIVE_ARRAY_BUFFER_VIEWS
    }, exported);

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
      createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
    }

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
    }

    setSpecies(CONSTRUCTOR_NAME);
  };
} else module.exports = function () { /* empty */ };


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-new */
var global = __webpack_require__(143);
var fails = __webpack_require__(138);
var checkCorrectnessOfIteration = __webpack_require__(214);
var NATIVE_ARRAY_BUFFER_VIEWS = __webpack_require__(215).NATIVE_ARRAY_BUFFER_VIEWS;

var ArrayBuffer = global.ArrayBuffer;
var Int8Array = global.Int8Array;

module.exports = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function () {
  Int8Array(1);
}) || !fails(function () {
  new Int8Array(-1);
}) || !checkCorrectnessOfIteration(function (iterable) {
  new Int8Array();
  new Int8Array(null);
  new Int8Array(1.5);
  new Int8Array(iterable);
}, true) || fails(function () {
  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
  return new Int8Array(new ArrayBuffer(2), 1, undefined).length !== 1;
});


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(142);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_ARRAY_BUFFER = __webpack_require__(199);
var DESCRIPTORS = __webpack_require__(149);
var global = __webpack_require__(143);
var isObject = __webpack_require__(153);
var has = __webpack_require__(157);
var classof = __webpack_require__(210);
var createNonEnumerableProperty = __webpack_require__(148);
var redefine = __webpack_require__(183);
var defineProperty = __webpack_require__(150).f;
var getPrototypeOf = __webpack_require__(191);
var setPrototypeOf = __webpack_require__(195);
var wellKnownSymbol = __webpack_require__(142);
var uid = __webpack_require__(158);

var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var Uint8ClampedArray = global.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array && getPrototypeOf(Int8Array);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var isPrototypeOf = ObjectPrototype.isPrototypeOf;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQIRED = false;
var NAME;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var isView = function isView(it) {
  var klass = classof(it);
  return klass === 'DataView' || has(TypedArrayConstructorsList, klass);
};

var isTypedArray = function (it) {
  return isObject(it) && has(TypedArrayConstructorsList, classof(it));
};

var aTypedArray = function (it) {
  if (isTypedArray(it)) return it;
  throw TypeError('Target is not a typed array');
};

var aTypedArrayConstructor = function (C) {
  if (setPrototypeOf) {
    if (isPrototypeOf.call(TypedArray, C)) return C;
  } else for (var ARRAY in TypedArrayConstructorsList) if (has(TypedArrayConstructorsList, NAME)) {
    var TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && (C === TypedArrayConstructor || isPrototypeOf.call(TypedArrayConstructor, C))) {
      return C;
    }
  } throw TypeError('Target is not a typed array constructor');
};

var exportTypedArrayMethod = function (KEY, property, forced) {
  if (!DESCRIPTORS) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && has(TypedArrayConstructor.prototype, KEY)) {
      delete TypedArrayConstructor.prototype[KEY];
    }
  }
  if (!TypedArrayPrototype[KEY] || forced) {
    redefine(TypedArrayPrototype, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS) return;
  if (setPrototypeOf) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global[ARRAY];
      if (TypedArrayConstructor && has(TypedArrayConstructor, KEY)) {
        delete TypedArrayConstructor[KEY];
      }
    }
    if (!TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8Array[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      redefine(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  if (!global[NAME]) NATIVE_ARRAY_BUFFER_VIEWS = false;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS || typeof TypedArray != 'function' || TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow
  TypedArray = function TypedArray() {
    throw TypeError('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (DESCRIPTORS && !has(TypedArrayPrototype, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQIRED = true;
  defineProperty(TypedArrayPrototype, TO_STRING_TAG, { get: function () {
    return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
  } });
  for (NAME in TypedArrayConstructorsList) if (global[NAME]) {
    createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
  }
}

module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray,
  aTypedArrayConstructor: aTypedArrayConstructor,
  exportTypedArrayMethod: exportTypedArrayMethod,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var toPositiveInteger = __webpack_require__(217);

module.exports = function (it, BYTES) {
  var offset = toPositiveInteger(it);
  if (offset % BYTES) throw RangeError('Wrong offset');
  return offset;
};


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(167);

module.exports = function (it) {
  var result = toInteger(it);
  if (result < 0) throw RangeError("The argument can't be less than 0");
  return result;
};


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(192);
var toLength = __webpack_require__(166);
var getIteratorMethod = __webpack_require__(219);
var isArrayIteratorMethod = __webpack_require__(220);
var bind = __webpack_require__(221);
var aTypedArrayConstructor = __webpack_require__(215).aTypedArrayConstructor;

module.exports = function from(source /* , mapfn, thisArg */) {
  var O = toObject(source);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var i, length, result, step, iterator, next;
  if (iteratorMethod != undefined && !isArrayIteratorMethod(iteratorMethod)) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    O = [];
    while (!(step = next.call(iterator)).done) {
      O.push(step.value);
    }
  }
  if (mapping && argumentsLength > 2) {
    mapfn = bind(mapfn, arguments[2], 2);
  }
  length = toLength(O.length);
  result = new (aTypedArrayConstructor(this))(length);
  for (i = 0; length > i; i++) {
    result[i] = mapping ? mapfn(O[i], i) : O[i];
  }
  return result;
};


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(210);
var Iterators = __webpack_require__(175);
var wellKnownSymbol = __webpack_require__(142);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(142);
var Iterators = __webpack_require__(175);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(206);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(221);
var IndexedObject = __webpack_require__(137);
var toObject = __webpack_require__(192);
var toLength = __webpack_require__(166);
var arraySpeciesCreate = __webpack_require__(223);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(153);
var isArray = __webpack_require__(224);
var wellKnownSymbol = __webpack_require__(142);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(139);

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(172);
var definePropertyModule = __webpack_require__(150);
var wellKnownSymbol = __webpack_require__(142);
var DESCRIPTORS = __webpack_require__(149);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(153);
var setPrototypeOf = __webpack_require__(195);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(215);
var $copyWithin = __webpack_require__(228);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.copyWithin` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.copywithin
exportTypedArrayMethod('copyWithin', function copyWithin(target, start /* , end */) {
  return $copyWithin.call(aTypedArray(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
});


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(192);
var toAbsoluteIndex = __webpack_require__(168);
var toLength = __webpack_require__(166);

var min = Math.min;

// `Array.prototype.copyWithin` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.copywithin
module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(215);
var $every = __webpack_require__(222).every;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.every` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.every
exportTypedArrayMethod('every', function every(callbackfn /* , thisArg */) {
  return $every(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(215);
var $fill = __webpack_require__(204);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.fill
// eslint-disable-next-line no-unused-vars
exportTypedArrayMethod('fill', function fill(value /* , start, end */) {
  return $fill.apply(aTypedArray(this), arguments);
});


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(215);
var $filter = __webpack_require__(222).filter;
var speciesConstructor = __webpack_require__(205);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.filter
exportTypedArrayMethod('filter', function filter(callbackfn /* , thisArg */) {
  var list = $filter(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  var C = speciesConstructor(this, this.constructor);
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor(C))(length);
  while (length > index) result[index] = list[index++];
  return result;
});


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(215);
var $find = __webpack_require__(222).find;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.find` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.find
exportTypedArrayMethod('find', function find(predicate /* , thisArg */) {
  return $find(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(215);
var $findIndex = __webpack_require__(222).findIndex;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.findindex
exportTypedArrayMethod('findIndex', function findIndex(predicate /* , thisArg */) {
  return $findIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(215);
var $forEach = __webpack_require__(222).forEach;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.foreach
exportTypedArrayMethod('forEach', function forEach(callbackfn /* , thisArg */) {
  $forEach(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(215);
var $includes = __webpack_require__(165).includes;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.includes
exportTypedArrayMethod('includes', function includes(searchElement /* , fromIndex */) {
  return $includes(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(215);
var $indexOf = __webpack_require__(165).indexOf;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.indexof
exportTypedArrayMethod('indexOf', function indexOf(searchElement /* , fromIndex */) {
  return $indexOf(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(143);
var ArrayBufferViewCore = __webpack_require__(215);
var ArrayIterators = __webpack_require__(135);
var wellKnownSymbol = __webpack_require__(142);

var ITERATOR = wellKnownSymbol('iterator');
var Uint8Array = global.Uint8Array;
var arrayValues = ArrayIterators.values;
var arrayKeys = ArrayIterators.keys;
var arrayEntries = ArrayIterators.entries;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var nativeTypedArrayIterator = Uint8Array && Uint8Array.prototype[ITERATOR];

var CORRECT_ITER_NAME = !!nativeTypedArrayIterator
  && (nativeTypedArrayIterator.name == 'values' || nativeTypedArrayIterator.name == undefined);

var typedArrayValues = function values() {
  return arrayValues.call(aTypedArray(this));
};

// `%TypedArray%.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.entries
exportTypedArrayMethod('entries', function entries() {
  return arrayEntries.call(aTypedArray(this));
});
// `%TypedArray%.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.keys
exportTypedArrayMethod('keys', function keys() {
  return arrayKeys.call(aTypedArray(this));
});
// `%TypedArray%.prototype.values` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.values
exportTypedArrayMethod('values', typedArrayValues, !CORRECT_ITER_NAME);
// `%TypedArray%.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype-@@iterator
exportTypedArrayMethod(ITERATOR, typedArrayValues, !CORRECT_ITER_NAME);


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(215);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $join = [].join;

// `%TypedArray%.prototype.join` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.join
// eslint-disable-next-line no-unused-vars
exportTypedArrayMethod('join', function join(separator) {
  return $join.apply(aTypedArray(this), arguments);
});


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(215);
var $lastIndexOf = __webpack_require__(240);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.lastIndexOf` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.lastindexof
// eslint-disable-next-line no-unused-vars
exportTypedArrayMethod('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */) {
  return $lastIndexOf.apply(aTypedArray(this), arguments);
});


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(136);
var toInteger = __webpack_require__(167);
var toLength = __webpack_require__(166);
var arrayMethodIsStrict = __webpack_require__(241);
var arrayMethodUsesToLength = __webpack_require__(242);

var min = Math.min;
var nativeLastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
// For preventing possible almost infinite loop in non-standard implementations, test the forward version of the method
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });
var FORCED = NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH;

// `Array.prototype.lastIndexOf` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof
module.exports = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return nativeLastIndexOf.apply(this, arguments) || 0;
  var O = toIndexedObject(this);
  var length = toLength(O.length);
  var index = length - 1;
  if (arguments.length > 1) index = min(index, toInteger(arguments[1]));
  if (index < 0) index = length + index;
  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
  return -1;
} : nativeLastIndexOf;


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(138);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(149);
var fails = __webpack_require__(138);
var has = __webpack_require__(157);

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(215);
var $map = __webpack_require__(222).map;
var speciesConstructor = __webpack_require__(205);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.map` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.map
exportTypedArrayMethod('map', function map(mapfn /* , thisArg */) {
  return $map(aTypedArray(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
    return new (aTypedArrayConstructor(speciesConstructor(O, O.constructor)))(length);
  });
});


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(215);
var $reduce = __webpack_require__(245).left;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reduce
exportTypedArrayMethod('reduce', function reduce(callbackfn /* , initialValue */) {
  return $reduce(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(206);
var toObject = __webpack_require__(192);
var IndexedObject = __webpack_require__(137);
var toLength = __webpack_require__(166);

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(215);
var $reduceRight = __webpack_require__(245).right;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduceRicht` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reduceright
exportTypedArrayMethod('reduceRight', function reduceRight(callbackfn /* , initialValue */) {
  return $reduceRight(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(215);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var floor = Math.floor;

// `%TypedArray%.prototype.reverse` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reverse
exportTypedArrayMethod('reverse', function reverse() {
  var that = this;
  var length = aTypedArray(that).length;
  var middle = floor(length / 2);
  var index = 0;
  var value;
  while (index < middle) {
    value = that[index];
    that[index++] = that[--length];
    that[length] = value;
  } return that;
});


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(215);
var toLength = __webpack_require__(166);
var toOffset = __webpack_require__(216);
var toObject = __webpack_require__(192);
var fails = __webpack_require__(138);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var FORCED = fails(function () {
  // eslint-disable-next-line no-undef
  new Int8Array(1).set({});
});

// `%TypedArray%.prototype.set` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.set
exportTypedArrayMethod('set', function set(arrayLike /* , offset */) {
  aTypedArray(this);
  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
  var length = this.length;
  var src = toObject(arrayLike);
  var len = toLength(src.length);
  var index = 0;
  if (len + offset > length) throw RangeError('Wrong length');
  while (index < len) this[offset + index] = src[index++];
}, FORCED);


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(215);
var speciesConstructor = __webpack_require__(205);
var fails = __webpack_require__(138);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $slice = [].slice;

var FORCED = fails(function () {
  // eslint-disable-next-line no-undef
  new Int8Array(1).slice();
});

// `%TypedArray%.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.slice
exportTypedArrayMethod('slice', function slice(start, end) {
  var list = $slice.call(aTypedArray(this), start, end);
  var C = speciesConstructor(this, this.constructor);
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor(C))(length);
  while (length > index) result[index] = list[index++];
  return result;
}, FORCED);


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(215);
var $some = __webpack_require__(222).some;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.some` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.some
exportTypedArrayMethod('some', function some(callbackfn /* , thisArg */) {
  return $some(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(215);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $sort = [].sort;

// `%TypedArray%.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.sort
exportTypedArrayMethod('sort', function sort(comparefn) {
  return $sort.call(aTypedArray(this), comparefn);
});


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(215);
var toLength = __webpack_require__(166);
var toAbsoluteIndex = __webpack_require__(168);
var speciesConstructor = __webpack_require__(205);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.subarray` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.subarray
exportTypedArrayMethod('subarray', function subarray(begin, end) {
  var O = aTypedArray(this);
  var length = O.length;
  var beginIndex = toAbsoluteIndex(begin, length);
  return new (speciesConstructor(O, O.constructor))(
    O.buffer,
    O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT,
    toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex)
  );
});


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(143);
var ArrayBufferViewCore = __webpack_require__(215);
var fails = __webpack_require__(138);

var Int8Array = global.Int8Array;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $toLocaleString = [].toLocaleString;
var $slice = [].slice;

// iOS Safari 6.x fails here
var TO_LOCALE_STRING_BUG = !!Int8Array && fails(function () {
  $toLocaleString.call(new Int8Array(1));
});

var FORCED = fails(function () {
  return [1, 2].toLocaleString() != new Int8Array([1, 2]).toLocaleString();
}) || !fails(function () {
  Int8Array.prototype.toLocaleString.call([1, 2]);
});

// `%TypedArray%.prototype.toLocaleString` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.tolocalestring
exportTypedArrayMethod('toLocaleString', function toLocaleString() {
  return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice.call(aTypedArray(this)) : aTypedArray(this), arguments);
}, FORCED);


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var exportTypedArrayMethod = __webpack_require__(215).exportTypedArrayMethod;
var fails = __webpack_require__(138);
var global = __webpack_require__(143);

var Uint8Array = global.Uint8Array;
var Uint8ArrayPrototype = Uint8Array && Uint8Array.prototype || {};
var arrayToString = [].toString;
var arrayJoin = [].join;

if (fails(function () { arrayToString.call({}); })) {
  arrayToString = function toString() {
    return arrayJoin.call(this);
  };
}

var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString;

// `%TypedArray%.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.tostring
exportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD);


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(256);

__webpack_require__(207);

__webpack_require__(257);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loop = exports.conditional = exports.parse = void 0;

var parse = function parse(stream, schema) {
  var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var parent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : result;
  var events = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var parseMain = function parseMain() {
    if (events.terminated) {
      return result;
    }

    if (Array.isArray(schema)) {
      var promiseLoop = Promise.resolve();

      var _loop = function _loop(i) {
        var partSchema = schema[i];
        promiseLoop = promiseLoop.then(function () {
          return parse(stream, partSchema, result, parent, events);
        });
      };

      for (var i = 0; i < schema.length; i++) {
        _loop(i);
      }

      return promiseLoop;
    }

    if (typeof schema === 'function') {
      // read
      return schema(stream, result, parent, parse, events);
    }

    var key = Object.keys(schema)[0];

    if (Array.isArray(schema[key])) {
      parent[key] = {};
      return parse(stream, schema[key], result, parent[key], events);
    } else {
      //read
      return Promise.resolve(schema[key](stream, result, parent, parse, events)).then(function (v) {
        return parent[key] = v;
      });
    }
  };

  return Promise.resolve().then(function () {
    if (events.parseBefore) {
      return events.parseBefore(schema, result, parent, events);
    }
  }).then(parseMain).then(function () {
    if (events.parseAfter) {
      return events.parseAfter(schema, result, parent, events);
    }
  }).then(function () {
    return result;
  });
};

exports.parse = parse;

var conditional = function conditional(schema, conditionFunc) {
  return function (stream, result, parent, parse, events) {
    return Promise.resolve(conditionFunc(stream, result, parent, events)).then(function (ok) {
      if (ok) {
        return parse(stream, schema, result, parent, events);
      }
    });
  };
};

exports.conditional = conditional;

var loop = function loop(schema, continueFunc) {
  return function (stream, result, parent, parse, events) {
    var arr = [];

    var next = function next() {
      return Promise.resolve(continueFunc(stream, result, parent, events)).then(function (hasNext) {
        if (hasNext && !events.terminated) {
          var newParent = {};
          return parse(stream, schema, result, newParent, events).then(function () {
            return arr.push(newParent);
          }).then(next);
        } else {
          return arr;
        }
      });
    };

    return next();
  };
};

exports.loop = loop;

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(180);
var toObject = __webpack_require__(192);
var nativeKeys = __webpack_require__(163);
var fails = __webpack_require__(138);

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(180);
var IS_PURE = __webpack_require__(145);
var global = __webpack_require__(143);
var getBuiltIn = __webpack_require__(172);
var NativePromise = __webpack_require__(258);
var redefine = __webpack_require__(183);
var redefineAll = __webpack_require__(200);
var setToStringTag = __webpack_require__(194);
var setSpecies = __webpack_require__(225);
var isObject = __webpack_require__(153);
var aFunction = __webpack_require__(206);
var anInstance = __webpack_require__(201);
var inspectSource = __webpack_require__(178);
var iterate = __webpack_require__(259);
var checkCorrectnessOfIteration = __webpack_require__(214);
var speciesConstructor = __webpack_require__(205);
var task = __webpack_require__(261).set;
var microtask = __webpack_require__(265);
var promiseResolve = __webpack_require__(266);
var hostReportErrors = __webpack_require__(268);
var newPromiseCapabilityModule = __webpack_require__(267);
var perform = __webpack_require__(269);
var InternalStateModule = __webpack_require__(176);
var isForced = __webpack_require__(188);
var wellKnownSymbol = __webpack_require__(142);
var IS_NODE = __webpack_require__(264);
var V8_VERSION = __webpack_require__(270);

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && !NATIVE_REJECTION_EVENT) return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(143);

module.exports = global.Promise;


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(154);
var isArrayIteratorMethod = __webpack_require__(220);
var toLength = __webpack_require__(166);
var bind = __webpack_require__(221);
var getIteratorMethod = __webpack_require__(219);
var iteratorClose = __webpack_require__(260);

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(154);

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(143);
var fails = __webpack_require__(138);
var bind = __webpack_require__(221);
var html = __webpack_require__(171);
var createElement = __webpack_require__(152);
var IS_IOS = __webpack_require__(262);
var IS_NODE = __webpack_require__(264);

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(263);

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(172);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(139);
var global = __webpack_require__(143);

module.exports = classof(global.process) == 'process';


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(143);
var getOwnPropertyDescriptor = __webpack_require__(181).f;
var macrotask = __webpack_require__(261).set;
var IS_IOS = __webpack_require__(262);
var IS_NODE = __webpack_require__(264);

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  if (!IS_IOS && !IS_NODE && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(154);
var isObject = __webpack_require__(153);
var newPromiseCapability = __webpack_require__(267);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(206);

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(143);

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),
/* 269 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(143);
var userAgent = __webpack_require__(263);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(272);

__webpack_require__(135);

__webpack_require__(276);

__webpack_require__(277);

__webpack_require__(279);

__webpack_require__(256);

__webpack_require__(207);

__webpack_require__(257);

__webpack_require__(280);

__webpack_require__(286);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readBits = exports.readArray = exports.readUnsigned = exports.readString = exports.peekBytes = exports.readBytes = exports.peekByte = exports.readByte = exports.buildStream = void 0; // Default stream and parsers for Uint8TypedArray data type

var buildStream = function buildStream(uint8Data) {
  return {
    data: uint8Data,
    pos: 0
  };
};

exports.buildStream = buildStream;

var readByte = function readByte() {
  return function (stream) {
    return Promise.resolve(stream.data[stream.pos++]);
  };
};

exports.readByte = readByte;

var peekByte = function peekByte() {
  var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return function (stream) {
    return Promise.resolve(stream.data[stream.pos + offset]);
  };
};

exports.peekByte = peekByte;

var readBytes = function readBytes(length) {
  return function (stream) {
    return Promise.resolve(stream.data.subarray(stream.pos, stream.pos += length));
  };
};

exports.readBytes = readBytes;

var peekBytes = function peekBytes(length) {
  return function (stream) {
    return Promise.resolve(stream.data.subarray(stream.pos, stream.pos + length));
  };
};

exports.peekBytes = peekBytes;

var readString = function readString(length) {
  return function (stream) {
    return readBytes(length)(stream).then(function (bytes) {
      return Array.from(bytes).map(function (value) {
        return String.fromCharCode(value);
      }).join('');
    });
  };
};

exports.readString = readString;

var readUnsigned = function readUnsigned(littleEndian) {
  return function (stream) {
    return readBytes(2)(stream).then(function (bytes) {
      return littleEndian ? (bytes[1] << 8) + bytes[0] : (bytes[0] << 8) + bytes[1];
    });
  };
};

exports.readUnsigned = readUnsigned;

var readArray = function readArray(byteSize, totalOrFunc) {
  return function (stream, result, parent) {
    var totalPromise = typeof totalOrFunc === 'function' ? totalOrFunc(stream, result, parent) : totalOrFunc;
    return Promise.resolve(totalPromise).then(function (total) {
      var parser = readBytes(byteSize);
      var arr = new Array(total);
      var promiseLoop = Promise.resolve();

      for (var i = 0; i < total; i++) {
        promiseLoop = promiseLoop.then(function (e) {
          return parser(stream);
        });
        arr[i] = promiseLoop;
      }

      return promiseLoop.then(function (e) {
        return Promise.all(arr);
      });
    });
  };
};

exports.readArray = readArray;

var subBitsTotal = function subBitsTotal(bits, startIndex, length) {
  var result = 0;

  for (var i = 0; i < length; i++) {
    result += bits[startIndex + i] && Math.pow(2, length - i - 1);
  }

  return result;
}; // export const readBits = schema => stream => {
//   const byte = readByte()(stream)
//   // convert the byte to bit array
//   const bits = new Array(8)
//   for (var i = 0; i < 8; i++) {
//     bits[7 - i] = !!(byte & (1 << i))
//   }
//   // convert the bit array to values based on the schema
//   return Object.keys(schema).reduce((res, key) => {
//     const def = schema[key]
//     if (def.length) {
//       res[key] = subBitsTotal(bits, def.index, def.length)
//     } else {
//       res[key] = bits[def.index]
//     }
//     return res
//   }, {})
// }


var readBits = function readBits(schema) {
  return function (stream) {
    return readByte()(stream).then(function (byte) {
      // convert the byte to bit array
      var bits = new Array(8);

      for (var i = 0; i < 8; i++) {
        bits[7 - i] = !!(byte & 1 << i);
      } // convert the bit array to values based on the schema


      return Object.keys(schema).reduce(function (res, key) {
        var def = schema[key];

        if (def.length) {
          res[key] = subBitsTotal(bits, def.index, def.length);
        } else {
          res[key] = bits[def.index];
        }

        return res;
      }, {});
    });
  };
};

exports.readBits = readBits;

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(180);
var from = __webpack_require__(273);
var checkCorrectnessOfIteration = __webpack_require__(214);

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(221);
var toObject = __webpack_require__(192);
var callWithSafeIterationClosing = __webpack_require__(274);
var isArrayIteratorMethod = __webpack_require__(220);
var toLength = __webpack_require__(166);
var createProperty = __webpack_require__(275);
var getIteratorMethod = __webpack_require__(219);

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(154);
var iteratorClose = __webpack_require__(260);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(155);
var definePropertyModule = __webpack_require__(150);
var createPropertyDescriptor = __webpack_require__(156);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(180);
var IndexedObject = __webpack_require__(137);
var toIndexedObject = __webpack_require__(136);
var arrayMethodIsStrict = __webpack_require__(241);

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(180);
var $map = __webpack_require__(222).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(278);
var arrayMethodUsesToLength = __webpack_require__(242);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(138);
var wellKnownSymbol = __webpack_require__(142);
var V8_VERSION = __webpack_require__(270);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(180);
var $reduce = __webpack_require__(245).left;
var arrayMethodIsStrict = __webpack_require__(241);
var arrayMethodUsesToLength = __webpack_require__(242);
var CHROME_VERSION = __webpack_require__(270);
var IS_NODE = __webpack_require__(264);

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(281).charAt;
var InternalStateModule = __webpack_require__(176);
var defineIterator = __webpack_require__(179);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(167);
var requireObjectCoercible = __webpack_require__(140);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conditional", function() { return conditional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loop", function() { return loop; });
const parse = (stream, schema, result = {}, parent = result, events = {}) => {
  const parseMain = () => {
    if (events.terminated) {
      return result;
    }

    if (Array.isArray(schema)) {
      let promiseLoop = Promise.resolve();

      for (let i = 0; i < schema.length; i++) {
        let partSchema = schema[i];
        promiseLoop = promiseLoop.then(() => parse(stream, partSchema, result, parent, events));
      }

      return promiseLoop;
    }

    if (typeof schema === 'function') {
      // read
      return schema(stream, result, parent, parse, events);
    }

    const key = Object.keys(schema)[0];

    if (Array.isArray(schema[key])) {
      parent[key] = {};
      return parse(stream, schema[key], result, parent[key], events);
    } else {
      //read
      return Promise.resolve(schema[key](stream, result, parent, parse, events)).then(v => parent[key] = v);
    }
  };

  return Promise.resolve().then(() => {
    if (events.parseBefore) {
      return events.parseBefore(schema, result, parent, events);
    }
  }).then(parseMain).then(() => {
    if (events.parseAfter) {
      return events.parseAfter(schema, result, parent, events);
    }
  }).then(() => result);
};
const conditional = (schema, conditionFunc) => (stream, result, parent, parse, events) => {
  return Promise.resolve(conditionFunc(stream, result, parent, events)).then(ok => {
    if (ok) {
      return parse(stream, schema, result, parent, events);
    }
  });
};
const loop = (schema, continueFunc) => (stream, result, parent, parse, events) => {
  const arr = [];

  const next = () => {
    return Promise.resolve(continueFunc(stream, result, parent, events)).then(hasNext => {
      if (hasNext && !events.terminated) {
        const newParent = {};
        return parse(stream, schema, result, newParent, events).then(() => arr.push(newParent)).then(next);
      } else {
        return arr;
      }
    });
  };

  return next();
};

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(284);

__webpack_require__(272);

__webpack_require__(135);

__webpack_require__(276);

__webpack_require__(277);

__webpack_require__(279);

__webpack_require__(285);

__webpack_require__(197);

__webpack_require__(256);

__webpack_require__(207);

__webpack_require__(257);

__webpack_require__(280);

__webpack_require__(211);

__webpack_require__(227);

__webpack_require__(229);

__webpack_require__(230);

__webpack_require__(231);

__webpack_require__(232);

__webpack_require__(233);

__webpack_require__(234);

__webpack_require__(235);

__webpack_require__(236);

__webpack_require__(237);

__webpack_require__(238);

__webpack_require__(239);

__webpack_require__(243);

__webpack_require__(244);

__webpack_require__(246);

__webpack_require__(247);

__webpack_require__(248);

__webpack_require__(249);

__webpack_require__(250);

__webpack_require__(251);

__webpack_require__(252);

__webpack_require__(253);

__webpack_require__(254);

__webpack_require__(286);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readBits = exports.readArray = exports.readUnsigned = exports.readString = exports.peekBytes = exports.readBytes = exports.peekByte = exports.readByte = exports.buildStream = exports.buildCustomLoader = exports.buildLoader = void 0;

var _ioController = _interopRequireDefault(__webpack_require__(288)); // Default stream and parsers for Uint8TypedArray data type

/**
 * options.url url
 * options.loaderType xhr|fetch
 * options.chunkSize 200 (kb)
 */


var buildLoader = function buildLoader(options) {
  var byteLength = 0;
  var _buffers = null;
  var error = null;
  var done = false; // 编译后的async性能较差，直接使用promise

  var ioc = new _ioController.default({
    url: options.url
  }, {
    loaderType: options.loaderType,
    chunkSize: options.chunkSize,
    stashInitialSize: 20,
    enableStashBuffer: false,
    seekType: 'range'
  });

  function checkBuffer(pos) {
    if (error) {
      console.error(error);
      return Promise.reject(new Error(error.message));
    }

    if (pos >= byteLength) {
      if (!done) {
        return sleep(30).then(function () {
          return checkBuffer(pos);
        });
      }
    }

    return Promise.resolve();
  }

  function sleep(ms) {
    return new Promise(function (o) {
      return setTimeout(o, ms);
    });
  }

  return buildCustomLoader({
    load: function load(buffers) {
      _buffers = buffers;

      ioc._onDataArrival = function (chunk, byteStart) {
        buffers.push(new Uint8Array(chunk));
        byteLength += chunk.byteLength;
      };

      ioc._onError = function (t, e) {
        error = new Error(t + ' - ' + JSON.stringify(e));
      };

      ioc._onComplete = function (e) {
        done = true;
      }; // ioc._onSeeked = null;
      // ioc._onRedirect = null;
      // ioc._onRecoveredEarlyEof = null;


      ioc.open();
    },
    check: checkBuffer
  });
};
/**
 * options.data
 */


exports.buildLoader = buildLoader;

var buildCustomLoader = function buildCustomLoader(options) {
  var buffers = [];
  var readingBuffer = new Uint8Array([]);
  var consumedBytes = 0;
  var pos = 0; // 编译后的async性能较差，直接使用promise

  options.load(buffers);

  function checkBuffer(len) {
    return options.check(consumedBytes + pos + len);
  }

  var that = {
    readByte: function readByte() {
      return checkBuffer(1).then(function () {
        if (pos >= readingBuffer.length) {
          consumedBytes += readingBuffer.length;
          readingBuffer = buffers.splice(0, 1)[0] || [];
          pos = 0;
        }

        return readingBuffer[pos++];
      });
    },
    peekByte: function peekByte(offset) {
      return checkBuffer(offset).then(function () {
        var p = pos + offset;
        var readingB = readingBuffer;
        var buffersI = 0;

        if (p >= readingB.length) {
          p -= readingB.length;
          readingB = buffers[buffersI];
          buffersI++;
        }

        return readingB[p];
      });
    },
    readBytes: function readBytes(len) {
      return checkBuffer(len).then(function () {
        if (pos + len < readingBuffer.length) {
          var _bytes = readingBuffer.subarray(pos, pos + len);

          pos += len;
          return _bytes;
        }

        var bytes = new Uint8Array(len);
        var readedNum = 0;

        while (buffers.length > 0 || readingBuffer.length > 0) {
          if (pos + len > readingBuffer.length) {
            var sub = readingBuffer.subarray(pos);
            bytes.set(sub, readedNum);
            readedNum += sub.length;
            len -= readedNum;

            if (!buffers[0]) {
              return Promise.reject(new Error('Unexcepted EOF, pos=' + pos));
            }

            consumedBytes += readingBuffer.length;
            readingBuffer = buffers.splice(0, 1)[0];
            pos = 0;
          } else {
            bytes.set(readingBuffer.subarray(pos, pos + len), readedNum);
            pos += len;
            break;
          }
        }

        return bytes;
      });
    },
    peekBytes: function peekBytes(len) {
      return checkBuffer(len).then(function () {
        if (pos + len < readingBuffer.length) {
          return readingBuffer.subarray(pos, pos + len);
        }

        var p = pos;
        var readingB = readingBuffer;
        var buffersI = 0;
        var bytes = new Uint8Array(len);
        var readedNum = 0;

        while (buffers.length > buffersI || readingB.length > 0) {
          if (p + len > readingB.length) {
            var sub = readingB.subarray(p);
            bytes.set(sub, readedNum);
            readedNum += sub.length;
            len -= readedNum;

            if (!buffers[buffersI + 1]) {
              // return Promise.reject(new Error('Unexcepted EOF: pos='+p))
              return bytes.subarray(0, readedNum);
            }

            readingB = buffers[buffersI++];
            p = 0;
          } else {
            bytes.set(readingB.subarray(p, p + len), readedNum);
            break;
          }
        }

        return bytes;
      });
    },
    abort: function abort() {
      options.abort && options.abort();
    }
  };
  return that;
};

exports.buildCustomLoader = buildCustomLoader;

var buildStream = function buildStream(loader) {
  return {
    loader: loader,
    pos: 0
  };
};

exports.buildStream = buildStream;

var readByte = function readByte() {
  return function (stream) {
    return stream.loader.readByte();
  };
};

exports.readByte = readByte;

var peekByte = function peekByte() {
  var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return function (stream) {
    return stream.loader.peekByte(offset);
  };
};

exports.peekByte = peekByte;

var readBytes = function readBytes(length) {
  return function (stream) {
    return stream.loader.readBytes(length);
  };
};

exports.readBytes = readBytes;

var peekBytes = function peekBytes(length) {
  return function (stream) {
    return stream.loader.peekBytes(length);
  };
};

exports.peekBytes = peekBytes;

var readString = function readString(length) {
  return function (stream) {
    return readBytes(length)(stream).then(function (bytes) {
      return Array.from(bytes).map(function (value) {
        return String.fromCharCode(value);
      }).join('');
    });
  };
};

exports.readString = readString;

var readUnsigned = function readUnsigned(littleEndian) {
  return function (stream) {
    return readBytes(2)(stream).then(function (bytes) {
      return littleEndian ? (bytes[1] << 8) + bytes[0] : (bytes[0] << 8) + bytes[1];
    });
  };
};

exports.readUnsigned = readUnsigned;

var readArray = function readArray(byteSize, totalOrFunc) {
  return function (stream, result, parent) {
    var totalPromise = typeof totalOrFunc === 'function' ? totalOrFunc(stream, result, parent) : totalOrFunc;
    return Promise.resolve(totalPromise).then(function (total) {
      var parser = readBytes(byteSize);
      var arr = new Array(total);
      var promiseLoop = Promise.resolve();

      for (var i = 0; i < total; i++) {
        promiseLoop = promiseLoop.then(function (e) {
          return parser(stream);
        });
        arr[i] = promiseLoop;
      }

      return promiseLoop.then(function (e) {
        return Promise.all(arr);
      });
    });
  };
};

exports.readArray = readArray;

var subBitsTotal = function subBitsTotal(bits, startIndex, length) {
  var result = 0;

  for (var i = 0; i < length; i++) {
    result += bits[startIndex + i] && Math.pow(2, length - i - 1);
  }

  return result;
};

var readBits = function readBits(schema) {
  return function (stream) {
    return readByte()(stream).then(function (byte) {
      // convert the byte to bit array
      var bits = new Array(8);

      for (var i = 0; i < 8; i++) {
        bits[7 - i] = !!(byte & 1 << i);
      } // convert the bit array to values based on the schema


      return Object.keys(schema).reduce(function (res, key) {
        var def = schema[key];

        if (def.length) {
          res[key] = subBitsTotal(bits, def.index, def.length);
        } else {
          res[key] = bits[def.index];
        }

        return res;
      }, {});
    });
  };
};

exports.readBits = readBits;

/***/ }),
/* 284 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(180);
var toAbsoluteIndex = __webpack_require__(168);
var toInteger = __webpack_require__(167);
var toLength = __webpack_require__(166);
var toObject = __webpack_require__(192);
var arraySpeciesCreate = __webpack_require__(223);
var createProperty = __webpack_require__(275);
var arrayMethodHasSpeciesSupport = __webpack_require__(278);
var arrayMethodUsesToLength = __webpack_require__(242);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(143);
var DOMIterables = __webpack_require__(287);
var ArrayIteratorMethods = __webpack_require__(135);
var createNonEnumerableProperty = __webpack_require__(148);
var wellKnownSymbol = __webpack_require__(142);

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),
/* 287 */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(284);

__webpack_require__(289);

__webpack_require__(135);

__webpack_require__(290);

__webpack_require__(291);

__webpack_require__(197);

__webpack_require__(292);

__webpack_require__(207);

__webpack_require__(211);

__webpack_require__(227);

__webpack_require__(229);

__webpack_require__(230);

__webpack_require__(231);

__webpack_require__(232);

__webpack_require__(233);

__webpack_require__(234);

__webpack_require__(235);

__webpack_require__(236);

__webpack_require__(237);

__webpack_require__(238);

__webpack_require__(239);

__webpack_require__(243);

__webpack_require__(244);

__webpack_require__(246);

__webpack_require__(247);

__webpack_require__(248);

__webpack_require__(249);

__webpack_require__(250);

__webpack_require__(251);

__webpack_require__(252);

__webpack_require__(253);

__webpack_require__(254);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(294));

var _createClass2 = _interopRequireDefault(__webpack_require__(295));

var _logger = _interopRequireDefault(__webpack_require__(296));

var _speedSampler = _interopRequireDefault(__webpack_require__(298));

var _loader = __webpack_require__(299);

var _fetchStreamLoader = _interopRequireDefault(__webpack_require__(307));

var _xhrMozChunkedLoader = _interopRequireDefault(__webpack_require__(321));

var _xhrMsstreamLoader = _interopRequireDefault(__webpack_require__(322));

var _xhrRangeLoader = _interopRequireDefault(__webpack_require__(323));

var _websocketLoader = _interopRequireDefault(__webpack_require__(324));

var _rangeSeekHandler = _interopRequireDefault(__webpack_require__(325));

var _paramSeekHandler = _interopRequireDefault(__webpack_require__(327));

var _exception = __webpack_require__(300);
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * DataSource: {
 *     url: string,
 *     filesize: number,
 *     cors: boolean,
 *     withCredentials: boolean
 * }
 * 
 */
// Manage IO Loaders


var IOController = /*#__PURE__*/function () {
  function IOController(dataSource, config, extraData) {
    (0, _classCallCheck2.default)(this, IOController);
    this.TAG = 'IOController';
    this._config = config;
    this._extraData = extraData;
    this._stashInitialSize = 1024 * 384; // default initial size: 384KB

    if (config.stashInitialSize != undefined && config.stashInitialSize > 0) {
      // apply from config
      this._stashInitialSize = config.stashInitialSize;
    }

    this._stashUsed = 0;
    this._stashSize = this._stashInitialSize;
    this._bufferSize = 1024 * 384; // 1024 * 1024 * 3;  // initial size: 3MB

    this._stashBuffer = new ArrayBuffer(this._bufferSize);
    this._stashByteStart = 0;
    this._enableStash = true;

    if (config.enableStashBuffer === false) {
      this._enableStash = false;
    }

    this._loader = null;
    this._loaderClass = null;
    this._seekHandler = null;
    this._dataSource = dataSource;
    this._isWebSocketURL = /wss?:\/\/(.+?)/.test(dataSource.url);
    this._refTotalLength = dataSource.filesize ? dataSource.filesize : null;
    this._totalLength = this._refTotalLength;
    this._fullRequestFlag = false;
    this._currentRange = null;
    this._redirectedURL = null;
    this._speedNormalized = 0;
    this._speedSampler = new _speedSampler.default();
    this._speedNormalizeList = [64, 128, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096];
    this._isEarlyEofReconnecting = false;
    this._paused = false;
    this._resumeFrom = 0;
    this._onDataArrival = null;
    this._onSeeked = null;
    this._onError = null;
    this._onComplete = null;
    this._onRedirect = null;
    this._onRecoveredEarlyEof = null;

    this._selectSeekHandler();

    this._selectLoader();

    this._createLoader();
  }

  (0, _createClass2.default)(IOController, [{
    key: "destroy",
    value: function destroy() {
      if (this._loader.isWorking()) {
        this._loader.abort();
      }

      this._loader.destroy();

      this._loader = null;
      this._loaderClass = null;
      this._dataSource = null;
      this._stashBuffer = null;
      this._stashUsed = this._stashSize = this._bufferSize = this._stashByteStart = 0;
      this._currentRange = null;
      this._speedSampler = null;
      this._isEarlyEofReconnecting = false;
      this._onDataArrival = null;
      this._onSeeked = null;
      this._onError = null;
      this._onComplete = null;
      this._onRedirect = null;
      this._onRecoveredEarlyEof = null;
      this._extraData = null;
    }
  }, {
    key: "isWorking",
    value: function isWorking() {
      return this._loader && this._loader.isWorking() && !this._paused;
    }
  }, {
    key: "isPaused",
    value: function isPaused() {
      return this._paused;
    }
  }, {
    key: "_selectSeekHandler",
    value: function _selectSeekHandler() {
      var config = this._config;

      if (config.seekType === 'range') {
        this._seekHandler = new _rangeSeekHandler.default(this._config.rangeLoadZeroStart);
      } else if (config.seekType === 'param') {
        var paramStart = config.seekParamStart || 'bstart';
        var paramEnd = config.seekParamEnd || 'bend';
        this._seekHandler = new _paramSeekHandler.default(paramStart, paramEnd);
      } else if (config.seekType === 'custom') {
        if (typeof config.customSeekHandler !== 'function') {
          throw new _exception.InvalidArgumentException('Custom seekType specified in config but invalid customSeekHandler!');
        }

        this._seekHandler = new config.customSeekHandler();
      } else {
        throw new _exception.InvalidArgumentException("Invalid seekType in config: ".concat(config.seekType));
      }
    }
  }, {
    key: "_selectLoader",
    value: function _selectLoader() {
      if (this._config.customLoader != null) {
        this._loaderClass = this._config.customLoader;
      } else if (this._isWebSocketURL) {
        this._loaderClass = _websocketLoader.default;
      } else if (this._config.loaderType == 'fetch' && _fetchStreamLoader.default.isSupported()) {
        this._loaderClass = _fetchStreamLoader.default;
      } else if (this._config.loaderType == 'fetch' && _xhrMozChunkedLoader.default.isSupported()) {
        this._loaderClass = _xhrMozChunkedLoader.default;
      } else if (_xhrRangeLoader.default.isSupported()) {
        this._loaderClass = _xhrRangeLoader.default;
      } else {
        throw new _exception.RuntimeException('Your browser doesn\'t support xhr with arraybuffer responseType!');
      }
    }
  }, {
    key: "_createLoader",
    value: function _createLoader() {
      this._loader = new this._loaderClass(this._seekHandler, this._config);

      if (this._loader.needStashBuffer === false) {
        this._enableStash = false;
      }

      this._loader.onContentLengthKnown = this._onContentLengthKnown.bind(this);
      this._loader.onURLRedirect = this._onURLRedirect.bind(this);
      this._loader.onDataArrival = this._onLoaderChunkArrival.bind(this);
      this._loader.onComplete = this._onLoaderComplete.bind(this);
      this._loader.onError = this._onLoaderError.bind(this);
    }
  }, {
    key: "open",
    value: function open(optionalFrom) {
      this._currentRange = {
        from: 0,
        to: -1
      };

      if (optionalFrom) {
        this._currentRange.from = optionalFrom;
      }

      this._speedSampler.reset();

      if (!optionalFrom) {
        this._fullRequestFlag = true;
      }

      this._loader.open(this._dataSource, Object.assign({}, this._currentRange));
    }
  }, {
    key: "abort",
    value: function abort() {
      this._loader.abort();

      if (this._paused) {
        this._paused = false;
        this._resumeFrom = 0;
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      if (this.isWorking()) {
        this._loader.abort();

        if (this._stashUsed !== 0) {
          this._resumeFrom = this._stashByteStart;
          this._currentRange.to = this._stashByteStart - 1;
        } else {
          this._resumeFrom = this._currentRange.to + 1;
        }

        this._stashUsed = 0;
        this._stashByteStart = 0;
        this._paused = true;
      }
    }
  }, {
    key: "resume",
    value: function resume() {
      if (this._paused) {
        this._paused = false;
        var bytes = this._resumeFrom;
        this._resumeFrom = 0;

        this._internalSeek(bytes, true);
      }
    }
  }, {
    key: "seek",
    value: function seek(bytes) {
      this._paused = false;
      this._stashUsed = 0;
      this._stashByteStart = 0;

      this._internalSeek(bytes, true);
    }
    /**
     * When seeking request is from media seeking, unconsumed stash data should be dropped
     * However, stash data shouldn't be dropped if seeking requested from http reconnection
     *
     * @dropUnconsumed: Ignore and discard all unconsumed data in stash buffer
     */

  }, {
    key: "_internalSeek",
    value: function _internalSeek(bytes, dropUnconsumed) {
      if (this._loader.isWorking()) {
        this._loader.abort();
      } // dispatch & flush stash buffer before seek


      this._flushStashBuffer(dropUnconsumed);

      this._loader.destroy();

      this._loader = null;
      var requestRange = {
        from: bytes,
        to: -1
      };
      this._currentRange = {
        from: requestRange.from,
        to: -1
      };

      this._speedSampler.reset();

      this._stashSize = this._stashInitialSize;

      this._createLoader();

      this._loader.open(this._dataSource, requestRange);

      if (this._onSeeked) {
        this._onSeeked();
      }
    }
  }, {
    key: "updateUrl",
    value: function updateUrl(url) {
      if (!url || typeof url !== 'string' || url.length === 0) {
        throw new _exception.InvalidArgumentException('Url must be a non-empty string!');
      }

      this._dataSource.url = url; // TODO: replace with new url
    }
  }, {
    key: "_expandBuffer",
    value: function _expandBuffer(expectedBytes) {
      var bufferNewSize = this._stashSize;

      while (bufferNewSize + 1024 * 1024 * 1 < expectedBytes) {
        bufferNewSize *= 2;
      }

      bufferNewSize += 1024 * 1024 * 1; // bufferSize = stashSize + 1MB

      if (bufferNewSize === this._bufferSize) {
        return;
      }

      var newBuffer = new ArrayBuffer(bufferNewSize);

      if (this._stashUsed > 0) {
        // copy existing data into new buffer
        var stashOldArray = new Uint8Array(this._stashBuffer, 0, this._stashUsed);
        var stashNewArray = new Uint8Array(newBuffer, 0, bufferNewSize);
        stashNewArray.set(stashOldArray, 0);
      }

      this._stashBuffer = newBuffer;
      this._bufferSize = bufferNewSize;
    }
  }, {
    key: "_normalizeSpeed",
    value: function _normalizeSpeed(input) {
      var list = this._speedNormalizeList;
      var last = list.length - 1;
      var mid = 0;
      var lbound = 0;
      var ubound = last;

      if (input < list[0]) {
        return list[0];
      } // binary search


      while (lbound <= ubound) {
        mid = lbound + Math.floor((ubound - lbound) / 2);

        if (mid === last || input >= list[mid] && input < list[mid + 1]) {
          return list[mid];
        } else if (list[mid] < input) {
          lbound = mid + 1;
        } else {
          ubound = mid - 1;
        }
      }
    }
  }, {
    key: "_adjustStashSize",
    value: function _adjustStashSize(normalized) {
      var stashSizeKB = 0;

      if (this._config.isLive) {
        // live stream: always use single normalized speed for size of stashSizeKB
        stashSizeKB = normalized;
      } else {
        if (normalized < 512) {
          stashSizeKB = normalized;
        } else if (normalized >= 512 && normalized <= 1024) {
          stashSizeKB = Math.floor(normalized * 1.5);
        } else {
          stashSizeKB = normalized * 2;
        }
      }

      if (stashSizeKB > 8192) {
        stashSizeKB = 8192;
      }

      var bufferSize = stashSizeKB * 1024 + 1024 * 1024 * 1; // stashSize + 1MB

      if (this._bufferSize < bufferSize) {
        this._expandBuffer(bufferSize);
      }

      this._stashSize = stashSizeKB * 1024;
    }
  }, {
    key: "_dispatchChunks",
    value: function _dispatchChunks(chunks, byteStart) {
      this._currentRange.to = byteStart + chunks.byteLength - 1;
      return this._onDataArrival(chunks, byteStart);
    }
  }, {
    key: "_onURLRedirect",
    value: function _onURLRedirect(redirectedURL) {
      this._redirectedURL = redirectedURL;

      if (this._onRedirect) {
        this._onRedirect(redirectedURL);
      }
    }
  }, {
    key: "_onContentLengthKnown",
    value: function _onContentLengthKnown(contentLength) {
      if (contentLength && this._fullRequestFlag) {
        this._totalLength = contentLength;
        this._fullRequestFlag = false;
      }
    }
  }, {
    key: "_onLoaderChunkArrival",
    value: function _onLoaderChunkArrival(chunk, byteStart, receivedLength) {
      if (!this._onDataArrival) {
        throw new _exception.IllegalStateException('IOController: No existing consumer (onDataArrival) callback!');
      }

      if (this._paused) {
        return;
      }

      if (this._isEarlyEofReconnecting) {
        // Auto-reconnect for EarlyEof succeed, notify to upper-layer by callback
        this._isEarlyEofReconnecting = false;

        if (this._onRecoveredEarlyEof) {
          this._onRecoveredEarlyEof();
        }
      }

      this._speedSampler.addBytes(chunk.byteLength); // adjust stash buffer size according to network speed dynamically


      var KBps = this._speedSampler.lastSecondKBps;

      if (KBps !== 0) {
        var normalized = this._normalizeSpeed(KBps);

        if (this._speedNormalized !== normalized) {
          this._speedNormalized = normalized;

          this._adjustStashSize(normalized);
        }
      }

      if (!this._enableStash) {
        // disable stash
        if (this._stashUsed === 0) {
          // dispatch chunk directly to consumer;
          // check ret value (consumed bytes) and stash unconsumed to stashBuffer
          var consumed = this._dispatchChunks(chunk, byteStart);

          if (consumed < chunk.byteLength) {
            // unconsumed data remain.
            var remain = chunk.byteLength - consumed;

            if (remain > this._bufferSize) {
              this._expandBuffer(remain);
            }

            var stashArray = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
            stashArray.set(new Uint8Array(chunk, consumed), 0);
            this._stashUsed += remain;
            this._stashByteStart = byteStart + consumed;
          }
        } else {
          // else: Merge chunk into stashBuffer, and dispatch stashBuffer to consumer.
          if (this._stashUsed + chunk.byteLength > this._bufferSize) {
            this._expandBuffer(this._stashUsed + chunk.byteLength);
          }

          var _stashArray = new Uint8Array(this._stashBuffer, 0, this._bufferSize);

          _stashArray.set(new Uint8Array(chunk), this._stashUsed);

          this._stashUsed += chunk.byteLength;

          var _consumed = this._dispatchChunks(this._stashBuffer.slice(0, this._stashUsed), this._stashByteStart);

          if (_consumed < this._stashUsed && _consumed > 0) {
            // unconsumed data remain
            var remainArray = new Uint8Array(this._stashBuffer, _consumed);

            _stashArray.set(remainArray, 0);
          }

          this._stashUsed -= _consumed;
          this._stashByteStart += _consumed;
        }
      } else {
        // enable stash
        if (this._stashUsed === 0 && this._stashByteStart === 0) {
          // seeked? or init chunk?
          // This is the first chunk after seek action
          this._stashByteStart = byteStart;
        }

        if (this._stashUsed + chunk.byteLength <= this._stashSize) {
          // just stash
          var _stashArray2 = new Uint8Array(this._stashBuffer, 0, this._stashSize);

          _stashArray2.set(new Uint8Array(chunk), this._stashUsed);

          this._stashUsed += chunk.byteLength;
        } else {
          // stashUsed + chunkSize > stashSize, size limit exceeded
          var _stashArray3 = new Uint8Array(this._stashBuffer, 0, this._bufferSize);

          if (this._stashUsed > 0) {
            // There're stash datas in buffer
            // dispatch the whole stashBuffer, and stash remain data
            // then append chunk to stashBuffer (stash)
            var buffer = this._stashBuffer.slice(0, this._stashUsed);

            var _consumed2 = this._dispatchChunks(buffer, this._stashByteStart);

            if (_consumed2 < buffer.byteLength) {
              if (_consumed2 > 0) {
                var _remainArray = new Uint8Array(buffer, _consumed2);

                _stashArray3.set(_remainArray, 0);

                this._stashUsed = _remainArray.byteLength;
                this._stashByteStart += _consumed2;
              }
            } else {
              this._stashUsed = 0;
              this._stashByteStart += _consumed2;
            }

            if (this._stashUsed + chunk.byteLength > this._bufferSize) {
              this._expandBuffer(this._stashUsed + chunk.byteLength);

              _stashArray3 = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
            }

            _stashArray3.set(new Uint8Array(chunk), this._stashUsed);

            this._stashUsed += chunk.byteLength;
          } else {
            // stash buffer empty, but chunkSize > stashSize (oh, holy shit)
            // dispatch chunk directly and stash remain data
            var _consumed3 = this._dispatchChunks(chunk, byteStart);

            if (_consumed3 < chunk.byteLength) {
              var _remain = chunk.byteLength - _consumed3;

              if (_remain > this._bufferSize) {
                this._expandBuffer(_remain);

                _stashArray3 = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
              }

              _stashArray3.set(new Uint8Array(chunk, _consumed3), 0);

              this._stashUsed += _remain;
              this._stashByteStart = byteStart + _consumed3;
            }
          }
        }
      }
    }
  }, {
    key: "_flushStashBuffer",
    value: function _flushStashBuffer(dropUnconsumed) {
      if (this._stashUsed > 0) {
        var buffer = this._stashBuffer.slice(0, this._stashUsed);

        var consumed = this._dispatchChunks(buffer, this._stashByteStart);

        var remain = buffer.byteLength - consumed;

        if (consumed < buffer.byteLength) {
          if (dropUnconsumed) {
            _logger.default.w(this.TAG, "".concat(remain, " bytes unconsumed data remain when flush buffer, dropped"));
          } else {
            if (consumed > 0) {
              var stashArray = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
              var remainArray = new Uint8Array(buffer, consumed);
              stashArray.set(remainArray, 0);
              this._stashUsed = remainArray.byteLength;
              this._stashByteStart += consumed;
            }

            return 0;
          }
        }

        this._stashUsed = 0;
        this._stashByteStart = 0;
        return remain;
      }

      return 0;
    }
  }, {
    key: "_onLoaderComplete",
    value: function _onLoaderComplete(from, to) {
      // Force-flush stash buffer, and drop unconsumed data
      this._flushStashBuffer(true);

      if (this._onComplete) {
        this._onComplete(this._extraData);
      }
    }
  }, {
    key: "_onLoaderError",
    value: function _onLoaderError(type, data) {
      _logger.default.e(this.TAG, "Loader error, code = ".concat(data.code, ", msg = ").concat(data.msg));

      this._flushStashBuffer(false);

      if (this._isEarlyEofReconnecting) {
        // Auto-reconnect for EarlyEof failed, throw UnrecoverableEarlyEof error to upper-layer
        this._isEarlyEofReconnecting = false;
        type = _loader.LoaderErrors.UNRECOVERABLE_EARLY_EOF;
      }

      switch (type) {
        case _loader.LoaderErrors.EARLY_EOF:
          {
            if (!this._config.isLive) {
              // Do internal http reconnect if not live stream
              if (this._totalLength) {
                var nextFrom = this._currentRange.to + 1;

                if (nextFrom < this._totalLength) {
                  _logger.default.w(this.TAG, 'Connection lost, trying reconnect...');

                  this._isEarlyEofReconnecting = true;

                  this._internalSeek(nextFrom, false);
                }

                return;
              } // else: We don't know totalLength, throw UnrecoverableEarlyEof

            } // live stream: throw UnrecoverableEarlyEof error to upper-layer


            type = _loader.LoaderErrors.UNRECOVERABLE_EARLY_EOF;
            break;
          }

        case _loader.LoaderErrors.UNRECOVERABLE_EARLY_EOF:
        case _loader.LoaderErrors.CONNECTING_TIMEOUT:
        case _loader.LoaderErrors.HTTP_STATUS_CODE_INVALID:
        case _loader.LoaderErrors.EXCEPTION:
          break;
      }

      if (this._onError) {
        this._onError(type, data);
      } else {
        throw new _exception.RuntimeException('IOException: ' + data.msg);
      }
    }
  }, {
    key: "status",
    get: function get() {
      return this._loader.status;
    }
  }, {
    key: "extraData",
    get: function get() {
      return this._extraData;
    },
    set: function set(data) {
      this._extraData = data;
    } // prototype: function onDataArrival(chunks: ArrayBuffer, byteStart: number): number

  }, {
    key: "onDataArrival",
    get: function get() {
      return this._onDataArrival;
    },
    set: function set(callback) {
      this._onDataArrival = callback;
    }
  }, {
    key: "onSeeked",
    get: function get() {
      return this._onSeeked;
    },
    set: function set(callback) {
      this._onSeeked = callback;
    } // prototype: function onError(type: number, info: {code: number, msg: string}): void

  }, {
    key: "onError",
    get: function get() {
      return this._onError;
    },
    set: function set(callback) {
      this._onError = callback;
    }
  }, {
    key: "onComplete",
    get: function get() {
      return this._onComplete;
    },
    set: function set(callback) {
      this._onComplete = callback;
    }
  }, {
    key: "onRedirect",
    get: function get() {
      return this._onRedirect;
    },
    set: function set(callback) {
      this._onRedirect = callback;
    }
  }, {
    key: "onRecoveredEarlyEof",
    get: function get() {
      return this._onRecoveredEarlyEof;
    },
    set: function set(callback) {
      this._onRecoveredEarlyEof = callback;
    }
  }, {
    key: "currentURL",
    get: function get() {
      return this._dataSource.url;
    }
  }, {
    key: "hasRedirect",
    get: function get() {
      return this._redirectedURL != null || this._dataSource.redirectedURL != undefined;
    }
  }, {
    key: "currentRedirectedURL",
    get: function get() {
      return this._redirectedURL || this._dataSource.redirectedURL;
    } // in KB/s

  }, {
    key: "currentSpeed",
    get: function get() {
      if (this._loaderClass === _xhrRangeLoader.default) {
        // SpeedSampler is inaccuracy if loader is RangeLoader
        return this._loader.currentSpeed;
      }

      return this._speedSampler.lastSecondKBps;
    }
  }, {
    key: "loaderType",
    get: function get() {
      return this._loader.type;
    }
  }]);
  return IOController;
}();

var _default = IOController;
exports.default = _default;

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(180);
var fails = __webpack_require__(138);
var isArray = __webpack_require__(224);
var isObject = __webpack_require__(153);
var toObject = __webpack_require__(192);
var toLength = __webpack_require__(166);
var createProperty = __webpack_require__(275);
var arraySpeciesCreate = __webpack_require__(223);
var arrayMethodHasSpeciesSupport = __webpack_require__(278);
var wellKnownSymbol = __webpack_require__(142);
var V8_VERSION = __webpack_require__(270);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(180);
var isObject = __webpack_require__(153);
var isArray = __webpack_require__(224);
var toAbsoluteIndex = __webpack_require__(168);
var toLength = __webpack_require__(166);
var toIndexedObject = __webpack_require__(136);
var createProperty = __webpack_require__(275);
var wellKnownSymbol = __webpack_require__(142);
var arrayMethodHasSpeciesSupport = __webpack_require__(278);
var arrayMethodUsesToLength = __webpack_require__(242);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(180);
var global = __webpack_require__(143);
var arrayBufferModule = __webpack_require__(198);
var setSpecies = __webpack_require__(225);

var ARRAY_BUFFER = 'ArrayBuffer';
var ArrayBuffer = arrayBufferModule[ARRAY_BUFFER];
var NativeArrayBuffer = global[ARRAY_BUFFER];

// `ArrayBuffer` constructor
// https://tc39.github.io/ecma262/#sec-arraybuffer-constructor
$({ global: true, forced: NativeArrayBuffer !== ArrayBuffer }, {
  ArrayBuffer: ArrayBuffer
});

setSpecies(ARRAY_BUFFER);


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(180);
var assign = __webpack_require__(293);

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(149);
var fails = __webpack_require__(138);
var objectKeys = __webpack_require__(163);
var getOwnPropertySymbolsModule = __webpack_require__(187);
var propertyIsEnumerableModule = __webpack_require__(182);
var toObject = __webpack_require__(192);
var IndexedObject = __webpack_require__(137);

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),
/* 294 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 295 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(284);

__webpack_require__(289);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(294));

var _createClass2 = _interopRequireDefault(__webpack_require__(295));

var _events = _interopRequireDefault(__webpack_require__(297));
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var Log = /*#__PURE__*/function () {
  function Log() {
    (0, _classCallCheck2.default)(this, Log);
  }

  (0, _createClass2.default)(Log, null, [{
    key: "e",
    value: function e(tag, msg) {
      if (!tag || Log.FORCE_GLOBAL_TAG) tag = Log.GLOBAL_TAG;
      var str = "[".concat(tag, "] > ").concat(msg);

      if (Log.ENABLE_CALLBACK) {
        Log.emitter.emit('log', 'error', str);
      }

      if (!Log.ENABLE_ERROR) {
        return;
      }

      if (console.error) {
        console.error(str);
      } else if (console.warn) {
        console.warn(str);
      } else {
        console.log(str);
      }
    }
  }, {
    key: "i",
    value: function i(tag, msg) {
      if (!tag || Log.FORCE_GLOBAL_TAG) tag = Log.GLOBAL_TAG;
      var str = "[".concat(tag, "] > ").concat(msg);

      if (Log.ENABLE_CALLBACK) {
        Log.emitter.emit('log', 'info', str);
      }

      if (!Log.ENABLE_INFO) {
        return;
      }

      if (console.info) {
        console.info(str);
      } else {
        console.log(str);
      }
    }
  }, {
    key: "w",
    value: function w(tag, msg) {
      if (!tag || Log.FORCE_GLOBAL_TAG) tag = Log.GLOBAL_TAG;
      var str = "[".concat(tag, "] > ").concat(msg);

      if (Log.ENABLE_CALLBACK) {
        Log.emitter.emit('log', 'warn', str);
      }

      if (!Log.ENABLE_WARN) {
        return;
      }

      if (console.warn) {
        console.warn(str);
      } else {
        console.log(str);
      }
    }
  }, {
    key: "d",
    value: function d(tag, msg) {
      if (!tag || Log.FORCE_GLOBAL_TAG) tag = Log.GLOBAL_TAG;
      var str = "[".concat(tag, "] > ").concat(msg);

      if (Log.ENABLE_CALLBACK) {
        Log.emitter.emit('log', 'debug', str);
      }

      if (!Log.ENABLE_DEBUG) {
        return;
      }

      if (console.debug) {
        console.debug(str);
      } else {
        console.log(str);
      }
    }
  }, {
    key: "v",
    value: function v(tag, msg) {
      if (!tag || Log.FORCE_GLOBAL_TAG) tag = Log.GLOBAL_TAG;
      var str = "[".concat(tag, "] > ").concat(msg);

      if (Log.ENABLE_CALLBACK) {
        Log.emitter.emit('log', 'verbose', str);
      }

      if (!Log.ENABLE_VERBOSE) {
        return;
      }

      console.log(str);
    }
  }]);
  return Log;
}();

Log.GLOBAL_TAG = 'flv.js';
Log.FORCE_GLOBAL_TAG = false;
Log.ENABLE_ERROR = true;
Log.ENABLE_INFO = true;
Log.ENABLE_WARN = true;
Log.ENABLE_DEBUG = true;
Log.ENABLE_VERBOSE = true;
Log.ENABLE_CALLBACK = false;
Log.emitter = new _events.default();
var _default = Log;
exports.default = _default;

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function eventListener() {
      if (errorListener !== undefined) {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };
    var errorListener;

    // Adding an error listener is not optional because
    // if an error is thrown on an event emitter we cannot
    // guarantee that the actual event we are waiting will
    // be fired. The result could be a silent way to create
    // memory or file descriptor leaks, which is something
    // we should avoid.
    if (name !== 'error') {
      errorListener = function errorListener(err) {
        emitter.removeListener(name, eventListener);
        reject(err);
      };

      emitter.once('error', errorListener);
    }

    emitter.once(name, eventListener);
  });
}


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(284);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(294));

var _createClass2 = _interopRequireDefault(__webpack_require__(295));
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Utility class to calculate realtime network I/O speed


var SpeedSampler = /*#__PURE__*/function () {
  function SpeedSampler() {
    (0, _classCallCheck2.default)(this, SpeedSampler); // milliseconds

    this._firstCheckpoint = 0;
    this._lastCheckpoint = 0;
    this._intervalBytes = 0;
    this._totalBytes = 0;
    this._lastSecondBytes = 0; // compatibility detection

    if (typeof self != 'undefined' && self.performance && self.performance.now) {
      this._now = self.performance.now.bind(self.performance);
    } else {
      this._now = Date.now;
    }
  }

  (0, _createClass2.default)(SpeedSampler, [{
    key: "reset",
    value: function reset() {
      this._firstCheckpoint = this._lastCheckpoint = 0;
      this._totalBytes = this._intervalBytes = 0;
      this._lastSecondBytes = 0;
    }
  }, {
    key: "addBytes",
    value: function addBytes(bytes) {
      if (this._firstCheckpoint === 0) {
        this._firstCheckpoint = this._now();
        this._lastCheckpoint = this._firstCheckpoint;
        this._intervalBytes += bytes;
        this._totalBytes += bytes;
      } else if (this._now() - this._lastCheckpoint < 1000) {
        this._intervalBytes += bytes;
        this._totalBytes += bytes;
      } else {
        // duration >= 1000
        this._lastSecondBytes = this._intervalBytes;
        this._intervalBytes = bytes;
        this._totalBytes += bytes;
        this._lastCheckpoint = this._now();
      }
    }
  }, {
    key: "currentKBps",
    get: function get() {
      this.addBytes(0);
      var durationSeconds = (this._now() - this._lastCheckpoint) / 1000;
      if (durationSeconds == 0) durationSeconds = 1;
      return this._intervalBytes / durationSeconds / 1024;
    }
  }, {
    key: "lastSecondKBps",
    get: function get() {
      this.addBytes(0);

      if (this._lastSecondBytes !== 0) {
        return this._lastSecondBytes / 1024;
      } else {
        // lastSecondBytes === 0
        if (this._now() - this._lastCheckpoint >= 500) {
          // if time interval since last checkpoint has exceeded 500ms
          // the speed is nearly accurate
          return this.currentKBps;
        } else {
          // We don't know
          return 0;
        }
      }
    }
  }, {
    key: "averageKBps",
    get: function get() {
      var durationSeconds = (this._now() - this._firstCheckpoint) / 1000;
      return this._totalBytes / durationSeconds / 1024;
    }
  }]);
  return SpeedSampler;
}();

var _default = SpeedSampler;
exports.default = _default;

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(284);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseLoader = exports.LoaderErrors = exports.LoaderStatus = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(294));

var _createClass2 = _interopRequireDefault(__webpack_require__(295));

var _exception = __webpack_require__(300);
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var LoaderStatus = {
  kIdle: 0,
  kConnecting: 1,
  kBuffering: 2,
  kError: 3,
  kComplete: 4
};
exports.LoaderStatus = LoaderStatus;
var LoaderErrors = {
  OK: 'OK',
  EXCEPTION: 'Exception',
  HTTP_STATUS_CODE_INVALID: 'HttpStatusCodeInvalid',
  CONNECTING_TIMEOUT: 'ConnectingTimeout',
  EARLY_EOF: 'EarlyEof',
  UNRECOVERABLE_EARLY_EOF: 'UnrecoverableEarlyEof'
};
/* Loader has callbacks which have following prototypes:
 *     function onContentLengthKnown(contentLength: number): void
 *     function onURLRedirect(url: string): void
 *     function onDataArrival(chunk: ArrayBuffer, byteStart: number, receivedLength: number): void
 *     function onError(errorType: number, errorInfo: {code: number, msg: string}): void
 *     function onComplete(rangeFrom: number, rangeTo: number): void
 */

exports.LoaderErrors = LoaderErrors;

var BaseLoader = /*#__PURE__*/function () {
  function BaseLoader(typeName) {
    (0, _classCallCheck2.default)(this, BaseLoader);
    this._type = typeName || 'undefined';
    this._status = LoaderStatus.kIdle;
    this._needStash = false; // callbacks

    this._onContentLengthKnown = null;
    this._onURLRedirect = null;
    this._onDataArrival = null;
    this._onError = null;
    this._onComplete = null;
  }

  (0, _createClass2.default)(BaseLoader, [{
    key: "destroy",
    value: function destroy() {
      this._status = LoaderStatus.kIdle;
      this._onContentLengthKnown = null;
      this._onURLRedirect = null;
      this._onDataArrival = null;
      this._onError = null;
      this._onComplete = null;
    }
  }, {
    key: "isWorking",
    value: function isWorking() {
      return this._status === LoaderStatus.kConnecting || this._status === LoaderStatus.kBuffering;
    }
  }, {
    key: "open",
    // pure virtual
    value: function open(dataSource, range) {
      throw new _exception.NotImplementedException('Unimplemented abstract function!');
    }
  }, {
    key: "abort",
    value: function abort() {
      throw new _exception.NotImplementedException('Unimplemented abstract function!');
    }
  }, {
    key: "type",
    get: function get() {
      return this._type;
    }
  }, {
    key: "status",
    get: function get() {
      return this._status;
    }
  }, {
    key: "needStashBuffer",
    get: function get() {
      return this._needStash;
    }
  }, {
    key: "onContentLengthKnown",
    get: function get() {
      return this._onContentLengthKnown;
    },
    set: function set(callback) {
      this._onContentLengthKnown = callback;
    }
  }, {
    key: "onURLRedirect",
    get: function get() {
      return this._onURLRedirect;
    },
    set: function set(callback) {
      this._onURLRedirect = callback;
    }
  }, {
    key: "onDataArrival",
    get: function get() {
      return this._onDataArrival;
    },
    set: function set(callback) {
      this._onDataArrival = callback;
    }
  }, {
    key: "onError",
    get: function get() {
      return this._onError;
    },
    set: function set(callback) {
      this._onError = callback;
    }
  }, {
    key: "onComplete",
    get: function get() {
      return this._onComplete;
    },
    set: function set(callback) {
      this._onComplete = callback;
    }
  }]);
  return BaseLoader;
}();

exports.BaseLoader = BaseLoader;

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(284);

__webpack_require__(301);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotImplementedException = exports.InvalidArgumentException = exports.IllegalStateException = exports.RuntimeException = void 0;

var _inherits2 = _interopRequireDefault(__webpack_require__(302));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(304));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(306));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(294));

var _createClass2 = _interopRequireDefault(__webpack_require__(295));

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf2.default)(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var RuntimeException = /*#__PURE__*/function () {
  function RuntimeException(message) {
    (0, _classCallCheck2.default)(this, RuntimeException);
    this._message = message;
  }

  (0, _createClass2.default)(RuntimeException, [{
    key: "toString",
    value: function toString() {
      return this.name + ': ' + this.message;
    }
  }, {
    key: "name",
    get: function get() {
      return 'RuntimeException';
    }
  }, {
    key: "message",
    get: function get() {
      return this._message;
    }
  }]);
  return RuntimeException;
}();

exports.RuntimeException = RuntimeException;

var IllegalStateException = /*#__PURE__*/function (_RuntimeException) {
  (0, _inherits2.default)(IllegalStateException, _RuntimeException);

  var _super = _createSuper(IllegalStateException);

  function IllegalStateException(message) {
    (0, _classCallCheck2.default)(this, IllegalStateException);
    return _super.call(this, message);
  }

  (0, _createClass2.default)(IllegalStateException, [{
    key: "name",
    get: function get() {
      return 'IllegalStateException';
    }
  }]);
  return IllegalStateException;
}(RuntimeException);

exports.IllegalStateException = IllegalStateException;

var InvalidArgumentException = /*#__PURE__*/function (_RuntimeException2) {
  (0, _inherits2.default)(InvalidArgumentException, _RuntimeException2);

  var _super2 = _createSuper(InvalidArgumentException);

  function InvalidArgumentException(message) {
    (0, _classCallCheck2.default)(this, InvalidArgumentException);
    return _super2.call(this, message);
  }

  (0, _createClass2.default)(InvalidArgumentException, [{
    key: "name",
    get: function get() {
      return 'InvalidArgumentException';
    }
  }]);
  return InvalidArgumentException;
}(RuntimeException);

exports.InvalidArgumentException = InvalidArgumentException;

var NotImplementedException = /*#__PURE__*/function (_RuntimeException3) {
  (0, _inherits2.default)(NotImplementedException, _RuntimeException3);

  var _super3 = _createSuper(NotImplementedException);

  function NotImplementedException(message) {
    (0, _classCallCheck2.default)(this, NotImplementedException);
    return _super3.call(this, message);
  }

  (0, _createClass2.default)(NotImplementedException, [{
    key: "name",
    get: function get() {
      return 'NotImplementedException';
    }
  }]);
  return NotImplementedException;
}(RuntimeException);

exports.NotImplementedException = NotImplementedException;

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(149);
var defineProperty = __webpack_require__(150).f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(303);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 303 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(134);

var assertThisInitialized = __webpack_require__(305);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 305 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 306 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(284);

__webpack_require__(207);

__webpack_require__(257);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(134));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(294));

var _get2 = _interopRequireDefault(__webpack_require__(308));

var _createClass2 = _interopRequireDefault(__webpack_require__(295));

var _inherits2 = _interopRequireDefault(__webpack_require__(302));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(304));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(306));

var _logger = _interopRequireDefault(__webpack_require__(296));

var _browser = _interopRequireDefault(__webpack_require__(310));

var _loader = __webpack_require__(299);

var _exception = __webpack_require__(300);

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf2.default)(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
/* fetch + stream IO loader. Currently working on chrome 43+.
 * fetch provides a better alternative http API to XMLHttpRequest
 *
 * fetch spec   https://fetch.spec.whatwg.org/
 * stream spec  https://streams.spec.whatwg.org/
 */


var FetchStreamLoader = /*#__PURE__*/function (_BaseLoader) {
  (0, _inherits2.default)(FetchStreamLoader, _BaseLoader);

  var _super = _createSuper(FetchStreamLoader);

  (0, _createClass2.default)(FetchStreamLoader, null, [{
    key: "isSupported",
    value: function isSupported() {
      try {
        // fetch + stream is broken on Microsoft Edge. Disable before build 15048.
        // see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8196907/
        // Fixed in Jan 10, 2017. Build 15048+ removed from blacklist.
        var isWorkWellEdge = _browser.default.msedge && _browser.default.version.minor >= 15048;
        var browserNotBlacklisted = _browser.default.msedge ? isWorkWellEdge : true;
        return typeof fetch != 'undefined' && typeof ReadableStream != 'undefined' && browserNotBlacklisted;
      } catch (e) {
        return false;
      }
    }
  }]);

  function FetchStreamLoader(seekHandler, config) {
    var _this;

    (0, _classCallCheck2.default)(this, FetchStreamLoader);
    _this = _super.call(this, 'fetch-stream-loader');
    _this.TAG = 'FetchStreamLoader';
    _this._seekHandler = seekHandler;
    _this._config = config;
    _this._needStash = true;
    _this._requestAbort = false;
    _this._contentLength = null;
    _this._receivedLength = 0;
    return _this;
  }

  (0, _createClass2.default)(FetchStreamLoader, [{
    key: "destroy",
    value: function destroy() {
      if (this.isWorking()) {
        this.abort();
      }

      (0, _get2.default)((0, _getPrototypeOf2.default)(FetchStreamLoader.prototype), "destroy", this).call(this);
    }
  }, {
    key: "open",
    value: function open(dataSource, range) {
      var _this2 = this;

      this._dataSource = dataSource;
      this._range = range;
      var sourceURL = dataSource.url;

      if (this._config.reuseRedirectedURL && dataSource.redirectedURL != undefined) {
        sourceURL = dataSource.redirectedURL;
      }

      var seekConfig = this._seekHandler.getConfig(sourceURL, range);

      var headers = new self.Headers();

      if ((0, _typeof2.default)(seekConfig.headers) === 'object') {
        var configHeaders = seekConfig.headers;

        for (var key in configHeaders) {
          if (configHeaders.hasOwnProperty(key)) {
            headers.append(key, configHeaders[key]);
          }
        }
      }

      var params = {
        method: 'GET',
        headers: headers,
        mode: 'cors',
        cache: 'default',
        // The default policy of Fetch API in the whatwg standard
        // Safari incorrectly indicates 'no-referrer' as default policy, fuck it
        referrerPolicy: 'no-referrer-when-downgrade'
      }; // add additional headers

      if ((0, _typeof2.default)(this._config.headers) === 'object') {
        for (var _key in this._config.headers) {
          headers.append(_key, this._config.headers[_key]);
        }
      } // cors is enabled by default


      if (dataSource.cors === false) {
        // no-cors means 'disregard cors policy', which can only be used in ServiceWorker
        params.mode = 'same-origin';
      } // withCredentials is disabled by default


      if (dataSource.withCredentials) {
        params.credentials = 'include';
      } // referrerPolicy from config


      if (dataSource.referrerPolicy) {
        params.referrerPolicy = dataSource.referrerPolicy;
      } // abort control


      if (self.AbortController) {
        this._abortController = new self.AbortController();
        params.signal = this._abortController.signal;
      }

      this._status = _loader.LoaderStatus.kConnecting;
      self.fetch(seekConfig.url, params).then(function (res) {
        if (_this2._requestAbort) {
          _this2._requestAbort = false;
          _this2._status = _loader.LoaderStatus.kIdle;
          res.body.cancel();
          return;
        }

        if (res.ok && res.status >= 200 && res.status <= 299) {
          if (res.url !== seekConfig.url) {
            if (_this2._onURLRedirect) {
              var redirectedURL = _this2._seekHandler.removeURLParameters(res.url);

              _this2._onURLRedirect(redirectedURL);
            }
          }

          var lengthHeader = res.headers.get('Content-Length');

          if (lengthHeader != null) {
            _this2._contentLength = parseInt(lengthHeader);

            if (_this2._contentLength !== 0) {
              if (_this2._onContentLengthKnown) {
                _this2._onContentLengthKnown(_this2._contentLength);
              }
            }
          }

          _this2._response = res;
          return _this2._pump.call(_this2, res.body.getReader());
        } else {
          _this2._status = _loader.LoaderStatus.kError;

          if (_this2._requestAbort) {
            return;
          }

          if (_this2._onError) {
            _this2._onError(_loader.LoaderErrors.HTTP_STATUS_CODE_INVALID, {
              code: res.status,
              msg: res.statusText
            });
          } else {
            throw new _exception.RuntimeException('FetchStreamLoader: Http code invalid, ' + res.status + ' ' + res.statusText);
          }
        }
      }).catch(function (e) {
        _this2._status = _loader.LoaderStatus.kError;

        if (_this2._requestAbort) {
          return;
        }

        if (_this2._onError) {
          _this2._onError(_loader.LoaderErrors.EXCEPTION, {
            code: -1,
            msg: e.message
          });
        } else {
          throw e;
        }
      });
    }
  }, {
    key: "abort",
    value: function abort() {
      this._requestAbort = true;

      if (this._response) {
        if (!this._response.body.locked) {
          this._response.body.cancel();
        } else {
          this._reader.cancel && this._reader.cancel();
        }
      }

      if (this._abortController) {
        this._abortController.abort();
      }
    }
  }, {
    key: "_pump",
    value: function _pump(reader) {
      var _this3 = this; // ReadableStreamReader


      this._reader = reader;
      return reader.read().then(function (result) {
        if (_this3._requestAbort === true) {
          _this3._requestAbort = false;
          _this3._status = _loader.LoaderStatus.kComplete;

          if (!result.done) {
            return reader.cancel();
          }
        } else if (result.done) {
          // First check received length
          if (_this3._contentLength !== null && _this3._receivedLength < _this3._contentLength) {
            // Report Early-EOF
            _this3._status = _loader.LoaderStatus.kError;
            var type = _loader.LoaderErrors.EARLY_EOF;
            var info = {
              code: -1,
              msg: 'Fetch stream meet Early-EOF'
            };

            if (_this3._onError) {
              _this3._onError(type, info);
            } else {
              throw new _exception.RuntimeException(info.msg);
            }
          } else {
            // OK. Download complete
            _this3._status = _loader.LoaderStatus.kComplete;

            if (_this3._onComplete) {
              _this3._onComplete(_this3._range.from, _this3._range.from + _this3._receivedLength - 1);
            }
          }
        } else {
          _this3._status = _loader.LoaderStatus.kBuffering;
          var chunk = result.value.buffer;
          var byteStart = _this3._range.from + _this3._receivedLength;
          _this3._receivedLength += chunk.byteLength;

          if (_this3._onDataArrival) {
            _this3._onDataArrival(chunk, byteStart, _this3._receivedLength);
          }

          _this3._pump(reader);
        }
      }).catch(function (e) {
        if (_this3._requestAbort === true) {
          return;
        }

        if (e.code === 11 && _browser.default.msedge) {
          // InvalidStateError on Microsoft Edge
          // Workaround: Edge may throw InvalidStateError after ReadableStreamReader.cancel() call
          // Ignore the unknown exception.
          // Related issue: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11265202/
          return;
        }

        _this3._status = _loader.LoaderStatus.kError;
        var type = 0;
        var info = null;

        if ((e.code === 19 || e.message === 'network error') && ( // NETWORK_ERR
        _this3._contentLength === null || _this3._contentLength !== null && _this3._receivedLength < _this3._contentLength)) {
          type = _loader.LoaderErrors.EARLY_EOF;
          info = {
            code: e.code,
            msg: 'Fetch stream meet Early-EOF'
          };
        } else {
          type = _loader.LoaderErrors.EXCEPTION;
          info = {
            code: e.code,
            msg: e.message
          };
        }

        if (_this3._onError) {
          _this3._onError(type, info);
        } else {
          throw new _exception.RuntimeException(info.msg);
        }
      });
    }
  }]);
  return FetchStreamLoader;
}(_loader.BaseLoader);

var _default = FetchStreamLoader;
exports.default = _default;

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(309);

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(306);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(311);

__webpack_require__(292);

__webpack_require__(312);

__webpack_require__(316);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var Browser = {};

function detect() {
  // modified from jquery-browser-plugin
  var ua = typeof self == 'undefined' ? "" : self.navigator.userAgent.toLowerCase();
  var match = /(edge)\/([\w.]+)/.exec(ua) || /(opr)[\/]([\w.]+)/.exec(ua) || /(chrome)[ \/]([\w.]+)/.exec(ua) || /(iemobile)[\/]([\w.]+)/.exec(ua) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf('trident') >= 0 && /(rv)(?::| )([\w.]+)/.exec(ua) || ua.indexOf('compatible') < 0 && /(firefox)[ \/]([\w.]+)/.exec(ua) || [];
  var platform_match = /(ipad)/.exec(ua) || /(ipod)/.exec(ua) || /(windows phone)/.exec(ua) || /(iphone)/.exec(ua) || /(kindle)/.exec(ua) || /(android)/.exec(ua) || /(windows)/.exec(ua) || /(mac)/.exec(ua) || /(linux)/.exec(ua) || /(cros)/.exec(ua) || [];
  var matched = {
    browser: match[5] || match[3] || match[1] || '',
    version: match[2] || match[4] || '0',
    majorVersion: match[4] || match[2] || '0',
    platform: platform_match[0] || ''
  };
  var browser = {};

  if (matched.browser) {
    browser[matched.browser] = true;
    var versionArray = matched.majorVersion.split('.');
    browser.version = {
      major: parseInt(matched.majorVersion, 10),
      string: matched.version
    };

    if (versionArray.length > 1) {
      browser.version.minor = parseInt(versionArray[1], 10);
    }

    if (versionArray.length > 2) {
      browser.version.build = parseInt(versionArray[2], 10);
    }
  }

  if (matched.platform) {
    browser[matched.platform] = true;
  }

  if (browser.chrome || browser.opr || browser.safari) {
    browser.webkit = true;
  } // MSIE. IE11 has 'rv' identifer


  if (browser.rv || browser.iemobile) {
    if (browser.rv) {
      delete browser.rv;
    }

    var msie = 'msie';
    matched.browser = msie;
    browser[msie] = true;
  } // Microsoft Edge


  if (browser.edge) {
    delete browser.edge;
    var msedge = 'msedge';
    matched.browser = msedge;
    browser[msedge] = true;
  } // Opera 15+


  if (browser.opr) {
    var opera = 'opera';
    matched.browser = opera;
    browser[opera] = true;
  } // Stock android browsers are marked as Safari


  if (browser.safari && browser.android) {
    var android = 'android';
    matched.browser = android;
    browser[android] = true;
  }

  browser.name = matched.browser;
  browser.platform = matched.platform;

  for (var key in Browser) {
    if (Browser.hasOwnProperty(key)) {
      delete Browser[key];
    }
  }

  Object.assign(Browser, browser);
}

detect();
var _default = Browser;
exports.default = _default;

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(180);
var $indexOf = __webpack_require__(165).indexOf;
var arrayMethodIsStrict = __webpack_require__(241);
var arrayMethodUsesToLength = __webpack_require__(242);

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(180);
var exec = __webpack_require__(313);

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(314);
var stickyHelpers = __webpack_require__(315);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(154);

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(138);

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(317);
var isRegExp = __webpack_require__(318);
var anObject = __webpack_require__(154);
var requireObjectCoercible = __webpack_require__(140);
var speciesConstructor = __webpack_require__(205);
var advanceStringIndex = __webpack_require__(319);
var toLength = __webpack_require__(166);
var callRegExpExec = __webpack_require__(320);
var regexpExec = __webpack_require__(313);
var fails = __webpack_require__(138);

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(312);
var redefine = __webpack_require__(183);
var fails = __webpack_require__(138);
var wellKnownSymbol = __webpack_require__(142);
var regexpExec = __webpack_require__(313);
var createNonEnumerableProperty = __webpack_require__(148);

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(153);
var classof = __webpack_require__(139);
var wellKnownSymbol = __webpack_require__(142);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(281).charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(139);
var regexpExec = __webpack_require__(313);

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(284);

__webpack_require__(301);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(134));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(294));

var _get2 = _interopRequireDefault(__webpack_require__(308));

var _createClass2 = _interopRequireDefault(__webpack_require__(295));

var _inherits2 = _interopRequireDefault(__webpack_require__(302));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(304));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(306));

var _logger = _interopRequireDefault(__webpack_require__(296));

var _loader = __webpack_require__(299);

var _exception = __webpack_require__(300);

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf2.default)(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
} // For FireFox browser which supports `xhr.responseType = 'moz-chunked-arraybuffer'`


var MozChunkedLoader = /*#__PURE__*/function (_BaseLoader) {
  (0, _inherits2.default)(MozChunkedLoader, _BaseLoader);

  var _super = _createSuper(MozChunkedLoader);

  (0, _createClass2.default)(MozChunkedLoader, null, [{
    key: "isSupported",
    value: function isSupported() {
      try {
        var xhr = new XMLHttpRequest(); // Firefox 37- requires .open() to be called before setting responseType

        xhr.open('GET', 'https://example.com', true);
        xhr.responseType = 'moz-chunked-arraybuffer';
        return xhr.responseType === 'moz-chunked-arraybuffer';
      } catch (e) {
        _logger.default.w('MozChunkedLoader', e.message);

        return false;
      }
    }
  }]);

  function MozChunkedLoader(seekHandler, config) {
    var _this;

    (0, _classCallCheck2.default)(this, MozChunkedLoader);
    _this = _super.call(this, 'xhr-moz-chunked-loader');
    _this.TAG = 'MozChunkedLoader';
    _this._seekHandler = seekHandler;
    _this._config = config;
    _this._needStash = true;
    _this._xhr = null;
    _this._requestAbort = false;
    _this._contentLength = null;
    _this._receivedLength = 0;
    return _this;
  }

  (0, _createClass2.default)(MozChunkedLoader, [{
    key: "destroy",
    value: function destroy() {
      if (this.isWorking()) {
        this.abort();
      }

      if (this._xhr) {
        this._xhr.onreadystatechange = null;
        this._xhr.onprogress = null;
        this._xhr.onloadend = null;
        this._xhr.onerror = null;
        this._xhr = null;
      }

      (0, _get2.default)((0, _getPrototypeOf2.default)(MozChunkedLoader.prototype), "destroy", this).call(this);
    }
  }, {
    key: "open",
    value: function open(dataSource, range) {
      this._dataSource = dataSource;
      this._range = range;
      var sourceURL = dataSource.url;

      if (this._config.reuseRedirectedURL && dataSource.redirectedURL != undefined) {
        sourceURL = dataSource.redirectedURL;
      }

      var seekConfig = this._seekHandler.getConfig(sourceURL, range);

      this._requestURL = seekConfig.url;
      var xhr = this._xhr = new XMLHttpRequest();
      xhr.open('GET', seekConfig.url, true);
      xhr.responseType = 'moz-chunked-arraybuffer';
      xhr.onreadystatechange = this._onReadyStateChange.bind(this);
      xhr.onprogress = this._onProgress.bind(this);
      xhr.onloadend = this._onLoadEnd.bind(this);
      xhr.onerror = this._onXhrError.bind(this); // cors is auto detected and enabled by xhr
      // withCredentials is disabled by default

      if (dataSource.withCredentials) {
        xhr.withCredentials = true;
      }

      if ((0, _typeof2.default)(seekConfig.headers) === 'object') {
        var headers = seekConfig.headers;

        for (var key in headers) {
          if (headers.hasOwnProperty(key)) {
            xhr.setRequestHeader(key, headers[key]);
          }
        }
      } // add additional headers


      if ((0, _typeof2.default)(this._config.headers) === 'object') {
        var _headers = this._config.headers;

        for (var _key in _headers) {
          if (_headers.hasOwnProperty(_key)) {
            xhr.setRequestHeader(_key, _headers[_key]);
          }
        }
      }

      this._status = _loader.LoaderStatus.kConnecting;
      xhr.send();
    }
  }, {
    key: "abort",
    value: function abort() {
      this._requestAbort = true;

      if (this._xhr) {
        this._xhr.abort();
      }

      this._status = _loader.LoaderStatus.kComplete;
    }
  }, {
    key: "_onReadyStateChange",
    value: function _onReadyStateChange(e) {
      var xhr = e.target;

      if (xhr.readyState === 2) {
        // HEADERS_RECEIVED
        if (xhr.responseURL != undefined && xhr.responseURL !== this._requestURL) {
          if (this._onURLRedirect) {
            var redirectedURL = this._seekHandler.removeURLParameters(xhr.responseURL);

            this._onURLRedirect(redirectedURL);
          }
        }

        if (xhr.status !== 0 && (xhr.status < 200 || xhr.status > 299)) {
          this._status = _loader.LoaderStatus.kError;

          if (this._onError) {
            this._onError(_loader.LoaderErrors.HTTP_STATUS_CODE_INVALID, {
              code: xhr.status,
              msg: xhr.statusText
            });
          } else {
            throw new _exception.RuntimeException('MozChunkedLoader: Http code invalid, ' + xhr.status + ' ' + xhr.statusText);
          }
        } else {
          this._status = _loader.LoaderStatus.kBuffering;
        }
      }
    }
  }, {
    key: "_onProgress",
    value: function _onProgress(e) {
      if (this._status === _loader.LoaderStatus.kError) {
        // Ignore error response
        return;
      }

      if (this._contentLength === null) {
        if (e.total !== null && e.total !== 0) {
          this._contentLength = e.total;

          if (this._onContentLengthKnown) {
            this._onContentLengthKnown(this._contentLength);
          }
        }
      }

      var chunk = e.target.response;
      var byteStart = this._range.from + this._receivedLength;
      this._receivedLength += chunk.byteLength;

      if (this._onDataArrival) {
        this._onDataArrival(chunk, byteStart, this._receivedLength);
      }
    }
  }, {
    key: "_onLoadEnd",
    value: function _onLoadEnd(e) {
      if (this._requestAbort === true) {
        this._requestAbort = false;
        return;
      } else if (this._status === _loader.LoaderStatus.kError) {
        return;
      }

      this._status = _loader.LoaderStatus.kComplete;

      if (this._onComplete) {
        this._onComplete(this._range.from, this._range.from + this._receivedLength - 1);
      }
    }
  }, {
    key: "_onXhrError",
    value: function _onXhrError(e) {
      this._status = _loader.LoaderStatus.kError;
      var type = 0;
      var info = null;

      if (this._contentLength && e.loaded < this._contentLength) {
        type = _loader.LoaderErrors.EARLY_EOF;
        info = {
          code: -1,
          msg: 'Moz-Chunked stream meet Early-Eof'
        };
      } else {
        type = _loader.LoaderErrors.EXCEPTION;
        info = {
          code: -1,
          msg: e.constructor.name + ' ' + e.type
        };
      }

      if (this._onError) {
        this._onError(type, info);
      } else {
        throw new _exception.RuntimeException(info.msg);
      }
    }
  }]);
  return MozChunkedLoader;
}(_loader.BaseLoader);

var _default = MozChunkedLoader;
exports.default = _default;

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(284);

__webpack_require__(290);

__webpack_require__(301);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(134));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(294));

var _get2 = _interopRequireDefault(__webpack_require__(308));

var _createClass2 = _interopRequireDefault(__webpack_require__(295));

var _inherits2 = _interopRequireDefault(__webpack_require__(302));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(304));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(306));

var _logger = _interopRequireDefault(__webpack_require__(296));

var _loader = __webpack_require__(299);

var _exception = __webpack_require__(300);

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf2.default)(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
/* Notice: ms-stream may cause IE/Edge browser crash if seek too frequently!!!
 * The browser may crash in wininet.dll. Disable for now.
 *
 * For IE11/Edge browser by microsoft which supports `xhr.responseType = 'ms-stream'`
 * Notice that ms-stream API sucks. The buffer is always expanding along with downloading.
 *
 * We need to abort the xhr if buffer size exceeded limit size (e.g. 16 MiB), then do reconnect.
 * in order to release previous ArrayBuffer to avoid memory leak
 *
 * Otherwise, the ArrayBuffer will increase to a terrible size that equals final file size.
 */


var MSStreamLoader = /*#__PURE__*/function (_BaseLoader) {
  (0, _inherits2.default)(MSStreamLoader, _BaseLoader);

  var _super = _createSuper(MSStreamLoader);

  (0, _createClass2.default)(MSStreamLoader, null, [{
    key: "isSupported",
    value: function isSupported() {
      try {
        if (typeof self.MSStream === 'undefined' || typeof self.MSStreamReader === 'undefined') {
          return false;
        }

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://example.com', true);
        xhr.responseType = 'ms-stream';
        return xhr.responseType === 'ms-stream';
      } catch (e) {
        _logger.default.w('MSStreamLoader', e.message);

        return false;
      }
    }
  }]);

  function MSStreamLoader(seekHandler, config) {
    var _this;

    (0, _classCallCheck2.default)(this, MSStreamLoader);
    _this = _super.call(this, 'xhr-msstream-loader');
    _this.TAG = 'MSStreamLoader';
    _this._seekHandler = seekHandler;
    _this._config = config;
    _this._needStash = true;
    _this._xhr = null;
    _this._reader = null; // MSStreamReader

    _this._totalRange = null;
    _this._currentRange = null;
    _this._currentRequestURL = null;
    _this._currentRedirectedURL = null;
    _this._contentLength = null;
    _this._receivedLength = 0;
    _this._bufferLimit = 16 * 1024 * 1024; // 16MB

    _this._lastTimeBufferSize = 0;
    _this._isReconnecting = false;
    return _this;
  }

  (0, _createClass2.default)(MSStreamLoader, [{
    key: "destroy",
    value: function destroy() {
      if (this.isWorking()) {
        this.abort();
      }

      if (this._reader) {
        this._reader.onprogress = null;
        this._reader.onload = null;
        this._reader.onerror = null;
        this._reader = null;
      }

      if (this._xhr) {
        this._xhr.onreadystatechange = null;
        this._xhr = null;
      }

      (0, _get2.default)((0, _getPrototypeOf2.default)(MSStreamLoader.prototype), "destroy", this).call(this);
    }
  }, {
    key: "open",
    value: function open(dataSource, range) {
      this._internalOpen(dataSource, range, false);
    }
  }, {
    key: "_internalOpen",
    value: function _internalOpen(dataSource, range, isSubrange) {
      this._dataSource = dataSource;

      if (!isSubrange) {
        this._totalRange = range;
      } else {
        this._currentRange = range;
      }

      var sourceURL = dataSource.url;

      if (this._config.reuseRedirectedURL) {
        if (this._currentRedirectedURL != undefined) {
          sourceURL = this._currentRedirectedURL;
        } else if (dataSource.redirectedURL != undefined) {
          sourceURL = dataSource.redirectedURL;
        }
      }

      var seekConfig = this._seekHandler.getConfig(sourceURL, range);

      this._currentRequestURL = seekConfig.url;
      var reader = this._reader = new self.MSStreamReader();
      reader.onprogress = this._msrOnProgress.bind(this);
      reader.onload = this._msrOnLoad.bind(this);
      reader.onerror = this._msrOnError.bind(this);
      var xhr = this._xhr = new XMLHttpRequest();
      xhr.open('GET', seekConfig.url, true);
      xhr.responseType = 'ms-stream';
      xhr.onreadystatechange = this._xhrOnReadyStateChange.bind(this);
      xhr.onerror = this._xhrOnError.bind(this);

      if (dataSource.withCredentials) {
        xhr.withCredentials = true;
      }

      if ((0, _typeof2.default)(seekConfig.headers) === 'object') {
        var headers = seekConfig.headers;

        for (var key in headers) {
          if (headers.hasOwnProperty(key)) {
            xhr.setRequestHeader(key, headers[key]);
          }
        }
      } // add additional headers


      if ((0, _typeof2.default)(this._config.headers) === 'object') {
        var _headers = this._config.headers;

        for (var _key in _headers) {
          if (_headers.hasOwnProperty(_key)) {
            xhr.setRequestHeader(_key, _headers[_key]);
          }
        }
      }

      if (this._isReconnecting) {
        this._isReconnecting = false;
      } else {
        this._status = _loader.LoaderStatus.kConnecting;
      }

      xhr.send();
    }
  }, {
    key: "abort",
    value: function abort() {
      this._internalAbort();

      this._status = _loader.LoaderStatus.kComplete;
    }
  }, {
    key: "_internalAbort",
    value: function _internalAbort() {
      if (this._reader) {
        if (this._reader.readyState === 1) {
          // LOADING
          this._reader.abort();
        }

        this._reader.onprogress = null;
        this._reader.onload = null;
        this._reader.onerror = null;
        this._reader = null;
      }

      if (this._xhr) {
        this._xhr.abort();

        this._xhr.onreadystatechange = null;
        this._xhr = null;
      }
    }
  }, {
    key: "_xhrOnReadyStateChange",
    value: function _xhrOnReadyStateChange(e) {
      var xhr = e.target;

      if (xhr.readyState === 2) {
        // HEADERS_RECEIVED
        if (xhr.status >= 200 && xhr.status <= 299) {
          this._status = _loader.LoaderStatus.kBuffering;

          if (xhr.responseURL != undefined) {
            var redirectedURL = this._seekHandler.removeURLParameters(xhr.responseURL);

            if (xhr.responseURL !== this._currentRequestURL && redirectedURL !== this._currentRedirectedURL) {
              this._currentRedirectedURL = redirectedURL;

              if (this._onURLRedirect) {
                this._onURLRedirect(redirectedURL);
              }
            }
          }

          var lengthHeader = xhr.getResponseHeader('Content-Length');

          if (lengthHeader != null && this._contentLength == null) {
            var length = parseInt(lengthHeader);

            if (length > 0) {
              this._contentLength = length;

              if (this._onContentLengthKnown) {
                this._onContentLengthKnown(this._contentLength);
              }
            }
          }
        } else {
          this._status = _loader.LoaderStatus.kError;

          if (this._onError) {
            this._onError(_loader.LoaderErrors.HTTP_STATUS_CODE_INVALID, {
              code: xhr.status,
              msg: xhr.statusText
            });
          } else {
            throw new _exception.RuntimeException('MSStreamLoader: Http code invalid, ' + xhr.status + ' ' + xhr.statusText);
          }
        }
      } else if (xhr.readyState === 3) {
        // LOADING
        if (xhr.status >= 200 && xhr.status <= 299) {
          this._status = _loader.LoaderStatus.kBuffering;
          var msstream = xhr.response;

          this._reader.readAsArrayBuffer(msstream);
        }
      }
    }
  }, {
    key: "_xhrOnError",
    value: function _xhrOnError(e) {
      this._status = _loader.LoaderStatus.kError;
      var type = _loader.LoaderErrors.EXCEPTION;
      var info = {
        code: -1,
        msg: e.constructor.name + ' ' + e.type
      };

      if (this._onError) {
        this._onError(type, info);
      } else {
        throw new _exception.RuntimeException(info.msg);
      }
    }
  }, {
    key: "_msrOnProgress",
    value: function _msrOnProgress(e) {
      var reader = e.target;
      var bigbuffer = reader.result;

      if (bigbuffer == null) {
        // result may be null, workaround for buggy M$
        this._doReconnectIfNeeded();

        return;
      }

      var slice = bigbuffer.slice(this._lastTimeBufferSize);
      this._lastTimeBufferSize = bigbuffer.byteLength;
      var byteStart = this._totalRange.from + this._receivedLength;
      this._receivedLength += slice.byteLength;

      if (this._onDataArrival) {
        this._onDataArrival(slice, byteStart, this._receivedLength);
      }

      if (bigbuffer.byteLength >= this._bufferLimit) {
        _logger.default.v(this.TAG, "MSStream buffer exceeded max size near ".concat(byteStart + slice.byteLength, ", reconnecting..."));

        this._doReconnectIfNeeded();
      }
    }
  }, {
    key: "_doReconnectIfNeeded",
    value: function _doReconnectIfNeeded() {
      if (this._contentLength == null || this._receivedLength < this._contentLength) {
        this._isReconnecting = true;
        this._lastTimeBufferSize = 0;

        this._internalAbort();

        var range = {
          from: this._totalRange.from + this._receivedLength,
          to: -1
        };

        this._internalOpen(this._dataSource, range, true);
      }
    }
  }, {
    key: "_msrOnLoad",
    value: function _msrOnLoad(e) {
      // actually it is onComplete event
      this._status = _loader.LoaderStatus.kComplete;

      if (this._onComplete) {
        this._onComplete(this._totalRange.from, this._totalRange.from + this._receivedLength - 1);
      }
    }
  }, {
    key: "_msrOnError",
    value: function _msrOnError(e) {
      this._status = _loader.LoaderStatus.kError;
      var type = 0;
      var info = null;

      if (this._contentLength && this._receivedLength < this._contentLength) {
        type = _loader.LoaderErrors.EARLY_EOF;
        info = {
          code: -1,
          msg: 'MSStream meet Early-Eof'
        };
      } else {
        type = _loader.LoaderErrors.EARLY_EOF;
        info = {
          code: -1,
          msg: e.constructor.name + ' ' + e.type
        };
      }

      if (this._onError) {
        this._onError(type, info);
      } else {
        throw new _exception.RuntimeException(info.msg);
      }
    }
  }]);
  return MSStreamLoader;
}(_loader.BaseLoader);

var _default = MSStreamLoader;
exports.default = _default;

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(284);

__webpack_require__(301);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(134));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(294));

var _get2 = _interopRequireDefault(__webpack_require__(308));

var _createClass2 = _interopRequireDefault(__webpack_require__(295));

var _inherits2 = _interopRequireDefault(__webpack_require__(302));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(304));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(306));

var _logger = _interopRequireDefault(__webpack_require__(296));

var _speedSampler = _interopRequireDefault(__webpack_require__(298));

var _loader = __webpack_require__(299);

var _exception = __webpack_require__(300);

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf2.default)(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
} // Universal IO Loader, implemented by adding Range header in xhr's request header


var RangeLoader = /*#__PURE__*/function (_BaseLoader) {
  (0, _inherits2.default)(RangeLoader, _BaseLoader);

  var _super = _createSuper(RangeLoader);

  (0, _createClass2.default)(RangeLoader, null, [{
    key: "isSupported",
    value: function isSupported() {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://example.com', true);
        xhr.responseType = 'arraybuffer';
        return xhr.responseType === 'arraybuffer';
      } catch (e) {
        _logger.default.w('RangeLoader', e.message);

        return false;
      }
    }
  }]);

  function RangeLoader(seekHandler, config) {
    var _this;

    (0, _classCallCheck2.default)(this, RangeLoader);
    _this = _super.call(this, 'xhr-range-loader');
    _this.TAG = 'RangeLoader';
    _this._seekHandler = seekHandler;
    _this._config = config;
    _this._needStash = false;
    _this._chunkSizeKBList = [128, 256, 384, 512 //768, 1024, 1536, 2048, 3072, 4096, 5120, 6144, 7168, 8192
    ];
    _this._currentChunkSizeKB = config.chunkSize || 384;
    _this._currentSpeedNormalized = 0;
    _this._zeroSpeedChunkCount = 0;
    _this._xhr = null;
    _this._speedSampler = new _speedSampler.default();
    _this._requestAbort = false;
    _this._waitForTotalLength = false;
    _this._totalLengthReceived = false;
    _this._currentRequestURL = null;
    _this._currentRedirectedURL = null;
    _this._currentRequestRange = null;
    _this._totalLength = null; // size of the entire file

    _this._contentLength = null; // Content-Length of entire request range

    _this._receivedLength = 0; // total received bytes

    _this._lastTimeLoaded = 0; // received bytes of current request sub-range

    return _this;
  }

  (0, _createClass2.default)(RangeLoader, [{
    key: "destroy",
    value: function destroy() {
      if (this.isWorking()) {
        this.abort();
      }

      if (this._xhr) {
        this._xhr.onreadystatechange = null;
        this._xhr.onprogress = null;
        this._xhr.onload = null;
        this._xhr.onerror = null;
        this._xhr = null;
      }

      (0, _get2.default)((0, _getPrototypeOf2.default)(RangeLoader.prototype), "destroy", this).call(this);
    }
  }, {
    key: "open",
    value: function open(dataSource, range) {
      this._dataSource = dataSource;
      this._range = range;
      this._status = _loader.LoaderStatus.kConnecting;
      var useRefTotalLength = false;

      if (this._dataSource.filesize != undefined && this._dataSource.filesize !== 0) {
        useRefTotalLength = true;
        this._totalLength = this._dataSource.filesize;
      }

      if (!this._totalLengthReceived && !useRefTotalLength) {
        // We need total filesize
        this._waitForTotalLength = true;

        this._internalOpen(this._dataSource, {
          from: 0,
          to: -1
        });
      } else {
        // We have filesize, start loading
        this._openSubRange();
      }
    }
  }, {
    key: "_openSubRange",
    value: function _openSubRange() {
      var chunkSize = this._currentChunkSizeKB * 1024;
      var from = this._range.from + this._receivedLength;
      var to = from + chunkSize;

      if (this._contentLength != null) {
        if (to - this._range.from >= this._contentLength) {
          to = this._range.from + this._contentLength - 1;
        }
      }

      this._currentRequestRange = {
        from: from,
        to: to
      };

      this._internalOpen(this._dataSource, this._currentRequestRange);
    }
  }, {
    key: "_internalOpen",
    value: function _internalOpen(dataSource, range) {
      this._lastTimeLoaded = 0;
      var sourceURL = dataSource.url;

      if (this._config.reuseRedirectedURL) {
        if (this._currentRedirectedURL != undefined) {
          sourceURL = this._currentRedirectedURL;
        } else if (dataSource.redirectedURL != undefined) {
          sourceURL = dataSource.redirectedURL;
        }
      }

      var seekConfig = this._seekHandler.getConfig(sourceURL, range);

      this._currentRequestURL = seekConfig.url;
      var xhr = this._xhr = new XMLHttpRequest();
      xhr.open('GET', seekConfig.url, true);
      xhr.responseType = 'arraybuffer';
      xhr.onreadystatechange = this._onReadyStateChange.bind(this);
      xhr.onprogress = this._onProgress.bind(this);
      xhr.onload = this._onLoad.bind(this);
      xhr.onerror = this._onXhrError.bind(this);

      if (dataSource.withCredentials) {
        xhr.withCredentials = true;
      }

      if ((0, _typeof2.default)(seekConfig.headers) === 'object') {
        var headers = seekConfig.headers;

        for (var key in headers) {
          if (headers.hasOwnProperty(key)) {
            xhr.setRequestHeader(key, headers[key]);
          }
        }
      } // add additional headers


      if ((0, _typeof2.default)(this._config.headers) === 'object') {
        var _headers = this._config.headers;

        for (var _key in _headers) {
          if (_headers.hasOwnProperty(_key)) {
            xhr.setRequestHeader(_key, _headers[_key]);
          }
        }
      }

      xhr.send();
    }
  }, {
    key: "abort",
    value: function abort() {
      this._requestAbort = true;

      this._internalAbort();

      this._status = _loader.LoaderStatus.kComplete;
    }
  }, {
    key: "_internalAbort",
    value: function _internalAbort() {
      if (this._xhr) {
        this._xhr.onreadystatechange = null;
        this._xhr.onprogress = null;
        this._xhr.onload = null;
        this._xhr.onerror = null;

        this._xhr.abort();

        this._xhr = null;
      }
    }
  }, {
    key: "_onReadyStateChange",
    value: function _onReadyStateChange(e) {
      var xhr = e.target;

      if (xhr.readyState === 2) {
        // HEADERS_RECEIVED
        if (xhr.responseURL != undefined) {
          // if the browser support this property
          var redirectedURL = this._seekHandler.removeURLParameters(xhr.responseURL);

          if (xhr.responseURL !== this._currentRequestURL && redirectedURL !== this._currentRedirectedURL) {
            this._currentRedirectedURL = redirectedURL;

            if (this._onURLRedirect) {
              this._onURLRedirect(redirectedURL);
            }
          }
        }

        if (xhr.status >= 200 && xhr.status <= 299) {
          if (this._waitForTotalLength) {
            return;
          }

          this._status = _loader.LoaderStatus.kBuffering;
        } else {
          this._status = _loader.LoaderStatus.kError;

          if (this._onError) {
            this._onError(_loader.LoaderErrors.HTTP_STATUS_CODE_INVALID, {
              code: xhr.status,
              msg: xhr.statusText
            });
          } else {
            throw new _exception.RuntimeException('RangeLoader: Http code invalid, ' + xhr.status + ' ' + xhr.statusText);
          }
        }
      }
    }
  }, {
    key: "_onProgress",
    value: function _onProgress(e) {
      if (this._status === _loader.LoaderStatus.kError) {
        // Ignore error response
        return;
      }

      if (this._contentLength === null) {
        var openNextRange = false;

        if (this._waitForTotalLength) {
          this._waitForTotalLength = false;
          this._totalLengthReceived = true;
          openNextRange = true;
          var total = e.total;

          this._internalAbort();

          if (total != null & total !== 0) {
            this._totalLength = total;
          }
        } // calculate currrent request range's contentLength


        if (this._range.to === -1) {
          this._contentLength = this._totalLength - this._range.from;
        } else {
          // to !== -1
          this._contentLength = this._range.to - this._range.from + 1;
        }

        if (openNextRange) {
          this._openSubRange();

          return;
        }

        if (this._onContentLengthKnown) {
          this._onContentLengthKnown(this._contentLength);
        }
      }

      var delta = e.loaded - this._lastTimeLoaded;
      this._lastTimeLoaded = e.loaded;

      this._speedSampler.addBytes(delta);
    }
  }, {
    key: "_normalizeSpeed",
    value: function _normalizeSpeed(input) {
      var list = this._chunkSizeKBList;
      var last = list.length - 1;
      var mid = 0;
      var lbound = 0;
      var ubound = last;

      if (input < list[0]) {
        return list[0];
      }

      while (lbound <= ubound) {
        mid = lbound + Math.floor((ubound - lbound) / 2);

        if (mid === last || input >= list[mid] && input < list[mid + 1]) {
          return list[mid];
        } else if (list[mid] < input) {
          lbound = mid + 1;
        } else {
          ubound = mid - 1;
        }
      }
    }
  }, {
    key: "_onLoad",
    value: function _onLoad(e) {
      if (this._status === _loader.LoaderStatus.kError) {
        // Ignore error response
        return;
      }

      if (this._waitForTotalLength) {
        this._waitForTotalLength = false;
        return;
      }

      this._lastTimeLoaded = 0;
      var KBps = this._speedSampler.lastSecondKBps;

      if (KBps === 0) {
        this._zeroSpeedChunkCount++;

        if (this._zeroSpeedChunkCount >= 3) {
          // Try get currentKBps after 3 chunks
          KBps = this._speedSampler.currentKBps;
        }
      }

      if (KBps !== 0) {
        var normalized = this._normalizeSpeed(KBps);

        if (this._currentSpeedNormalized !== normalized) {
          this._currentSpeedNormalized = normalized;
          this._currentChunkSizeKB = normalized;
        }
      }

      var chunk = e.target.response;
      var byteStart = this._range.from + this._receivedLength;
      this._receivedLength += chunk.byteLength;
      var reportComplete = false;

      if (this._contentLength != null && this._receivedLength < this._contentLength) {
        // continue load next chunk
        this._openSubRange();
      } else {
        reportComplete = true;
      } // dispatch received chunk


      if (this._onDataArrival) {
        this._onDataArrival(chunk, byteStart, this._receivedLength);
      }

      if (reportComplete) {
        this._status = _loader.LoaderStatus.kComplete;

        if (this._onComplete) {
          this._onComplete(this._range.from, this._range.from + this._receivedLength - 1);
        }
      }
    }
  }, {
    key: "_onXhrError",
    value: function _onXhrError(e) {
      this._status = _loader.LoaderStatus.kError;
      var type = 0;
      var info = null;

      if (this._contentLength && this._receivedLength > 0 && this._receivedLength < this._contentLength) {
        type = _loader.LoaderErrors.EARLY_EOF;
        info = {
          code: -1,
          msg: 'RangeLoader meet Early-Eof'
        };
      } else {
        type = _loader.LoaderErrors.EXCEPTION;
        info = {
          code: -1,
          msg: e.constructor.name + ' ' + e.type
        };
      }

      if (this._onError) {
        this._onError(type, info);
      } else {
        throw new _exception.RuntimeException(info.msg);
      }
    }
  }, {
    key: "currentSpeed",
    get: function get() {
      return this._speedSampler.lastSecondKBps;
    }
  }]);
  return RangeLoader;
}(_loader.BaseLoader);

var _default = RangeLoader;
exports.default = _default;

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(284);

__webpack_require__(291);

__webpack_require__(197);

__webpack_require__(301);

__webpack_require__(207);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(294));

var _get2 = _interopRequireDefault(__webpack_require__(308));

var _createClass2 = _interopRequireDefault(__webpack_require__(295));

var _inherits2 = _interopRequireDefault(__webpack_require__(302));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(304));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(306));

var _logger = _interopRequireDefault(__webpack_require__(296));

var _loader = __webpack_require__(299);

var _exception = __webpack_require__(300);

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf2.default)(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
} // For FLV over WebSocket live stream


var WebSocketLoader = /*#__PURE__*/function (_BaseLoader) {
  (0, _inherits2.default)(WebSocketLoader, _BaseLoader);

  var _super = _createSuper(WebSocketLoader);

  (0, _createClass2.default)(WebSocketLoader, null, [{
    key: "isSupported",
    value: function isSupported() {
      try {
        return typeof self.WebSocket !== 'undefined';
      } catch (e) {
        return false;
      }
    }
  }]);

  function WebSocketLoader() {
    var _this;

    (0, _classCallCheck2.default)(this, WebSocketLoader);
    _this = _super.call(this, 'websocket-loader');
    _this.TAG = 'WebSocketLoader';
    _this._needStash = true;
    _this._ws = null;
    _this._requestAbort = false;
    _this._receivedLength = 0;
    return _this;
  }

  (0, _createClass2.default)(WebSocketLoader, [{
    key: "destroy",
    value: function destroy() {
      if (this._ws) {
        this.abort();
      }

      (0, _get2.default)((0, _getPrototypeOf2.default)(WebSocketLoader.prototype), "destroy", this).call(this);
    }
  }, {
    key: "open",
    value: function open(dataSource) {
      try {
        var ws = this._ws = new self.WebSocket(dataSource.url);
        ws.binaryType = 'arraybuffer';
        ws.onopen = this._onWebSocketOpen.bind(this);
        ws.onclose = this._onWebSocketClose.bind(this);
        ws.onmessage = this._onWebSocketMessage.bind(this);
        ws.onerror = this._onWebSocketError.bind(this);
        this._status = _loader.LoaderStatus.kConnecting;
      } catch (e) {
        this._status = _loader.LoaderStatus.kError;
        var info = {
          code: e.code,
          msg: e.message
        };

        if (this._onError) {
          this._onError(_loader.LoaderErrors.EXCEPTION, info);
        } else {
          throw new _exception.RuntimeException(info.msg);
        }
      }
    }
  }, {
    key: "abort",
    value: function abort() {
      var ws = this._ws;

      if (ws && (ws.readyState === 0 || ws.readyState === 1)) {
        // CONNECTING || OPEN
        this._requestAbort = true;
        ws.close();
      }

      this._ws = null;
      this._status = _loader.LoaderStatus.kComplete;
    }
  }, {
    key: "_onWebSocketOpen",
    value: function _onWebSocketOpen(e) {
      this._status = _loader.LoaderStatus.kBuffering;
    }
  }, {
    key: "_onWebSocketClose",
    value: function _onWebSocketClose(e) {
      if (this._requestAbort === true) {
        this._requestAbort = false;
        return;
      }

      this._status = _loader.LoaderStatus.kComplete;

      if (this._onComplete) {
        this._onComplete(0, this._receivedLength - 1);
      }
    }
  }, {
    key: "_onWebSocketMessage",
    value: function _onWebSocketMessage(e) {
      var _this2 = this;

      if (e.data instanceof ArrayBuffer) {
        this._dispatchArrayBuffer(e.data);
      } else if (e.data instanceof Blob) {
        var reader = new FileReader();

        reader.onload = function () {
          _this2._dispatchArrayBuffer(reader.result);
        };

        reader.readAsArrayBuffer(e.data);
      } else {
        this._status = _loader.LoaderStatus.kError;
        var info = {
          code: -1,
          msg: 'Unsupported WebSocket message type: ' + e.data.constructor.name
        };

        if (this._onError) {
          this._onError(_loader.LoaderErrors.EXCEPTION, info);
        } else {
          throw new _exception.RuntimeException(info.msg);
        }
      }
    }
  }, {
    key: "_dispatchArrayBuffer",
    value: function _dispatchArrayBuffer(arraybuffer) {
      var chunk = arraybuffer;
      var byteStart = this._receivedLength;
      this._receivedLength += chunk.byteLength;

      if (this._onDataArrival) {
        this._onDataArrival(chunk, byteStart, this._receivedLength);
      }
    }
  }, {
    key: "_onWebSocketError",
    value: function _onWebSocketError(e) {
      this._status = _loader.LoaderStatus.kError;
      var info = {
        code: e.code,
        msg: e.message
      };

      if (this._onError) {
        this._onError(_loader.LoaderErrors.EXCEPTION, info);
      } else {
        throw new _exception.RuntimeException(info.msg);
      }
    }
  }]);
  return WebSocketLoader;
}(_loader.BaseLoader);

var _default = WebSocketLoader;
exports.default = _default;

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(284);

__webpack_require__(289);

__webpack_require__(207);

__webpack_require__(326);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(294));

var _createClass2 = _interopRequireDefault(__webpack_require__(295));
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var RangeSeekHandler = /*#__PURE__*/function () {
  function RangeSeekHandler(zeroStart) {
    (0, _classCallCheck2.default)(this, RangeSeekHandler);
    this._zeroStart = zeroStart || false;
  }

  (0, _createClass2.default)(RangeSeekHandler, [{
    key: "getConfig",
    value: function getConfig(url, range) {
      var headers = {};

      if (range.from !== 0 || range.to !== -1) {
        var param;

        if (range.to !== -1) {
          param = "bytes=".concat(range.from.toString(), "-").concat(range.to.toString());
        } else {
          param = "bytes=".concat(range.from.toString(), "-");
        }

        headers['Range'] = param;
      } else if (this._zeroStart) {
        headers['Range'] = 'bytes=0-';
      }

      return {
        url: url,
        headers: headers
      };
    }
  }, {
    key: "removeURLParameters",
    value: function removeURLParameters(seekedURL) {
      return seekedURL;
    }
  }]);
  return RangeSeekHandler;
}();

var _default = RangeSeekHandler;
exports.default = _default;

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(183);
var anObject = __webpack_require__(154);
var fails = __webpack_require__(138);
var flags = __webpack_require__(314);

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(284);

__webpack_require__(289);

__webpack_require__(311);

__webpack_require__(207);

__webpack_require__(312);

__webpack_require__(326);

__webpack_require__(316);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(294));

var _createClass2 = _interopRequireDefault(__webpack_require__(295));
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var ParamSeekHandler = /*#__PURE__*/function () {
  function ParamSeekHandler(paramStart, paramEnd) {
    (0, _classCallCheck2.default)(this, ParamSeekHandler);
    this._startName = paramStart;
    this._endName = paramEnd;
  }

  (0, _createClass2.default)(ParamSeekHandler, [{
    key: "getConfig",
    value: function getConfig(baseUrl, range) {
      var url = baseUrl;

      if (range.from !== 0 || range.to !== -1) {
        var needAnd = true;

        if (url.indexOf('?') === -1) {
          url += '?';
          needAnd = false;
        }

        if (needAnd) {
          url += '&';
        }

        url += "".concat(this._startName, "=").concat(range.from.toString());

        if (range.to !== -1) {
          url += "&".concat(this._endName, "=").concat(range.to.toString());
        }
      }

      return {
        url: url,
        headers: {}
      };
    }
  }, {
    key: "removeURLParameters",
    value: function removeURLParameters(seekedURL) {
      var baseURL = seekedURL.split('?')[0];
      var params = undefined;
      var queryIndex = seekedURL.indexOf('?');

      if (queryIndex !== -1) {
        params = seekedURL.substring(queryIndex + 1);
      }

      var resultParams = '';

      if (params != undefined && params.length > 0) {
        var pairs = params.split('&');

        for (var i = 0; i < pairs.length; i++) {
          var pair = pairs[i].split('=');
          var requireAnd = i > 0;

          if (pair[0] !== this._startName && pair[0] !== this._endName) {
            if (requireAnd) {
              resultParams += '&';
            }

            resultParams += pairs[i];
          }
        }
      }

      return resultParams.length === 0 ? baseURL : baseURL + '?' + resultParams;
    }
  }]);
  return ParamSeekHandler;
}();

var _default = ParamSeekHandler;
exports.default = _default;

/***/ }),
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deinterlace", function() { return deinterlace; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(329);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(331);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(332);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Deinterlace function from https://github.com/shachaf/jsgif
 */
var deinterlace = function deinterlace(pixels, width) {
  var newPixels = new Array(pixels.length);
  var rows = pixels.length / width;

  var cpRow = function cpRow(toRow, fromRow) {
    var fromPixels = pixels.slice(fromRow * width, (fromRow + 1) * width);
    newPixels.splice.apply(newPixels, [toRow * width, width].concat(fromPixels));
  }; // See appendix E.


  var offsets = [0, 4, 2, 1];
  var steps = [8, 8, 4, 2];
  var fromRow = 0;

  for (var pass = 0; pass < 4; pass++) {
    for (var toRow = offsets[pass]; toRow < rows; toRow += steps[pass]) {
      cpRow(toRow, fromRow);
      fromRow++;
    }
  }

  return newPixels;
};

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(27);
var fails = __webpack_require__(7);
var isArray = __webpack_require__(57);
var isObject = __webpack_require__(11);
var toObject = __webpack_require__(47);
var toLength = __webpack_require__(41);
var createProperty = __webpack_require__(330);
var arraySpeciesCreate = __webpack_require__(56);
var arrayMethodHasSpeciesSupport = __webpack_require__(61);
var wellKnownSymbol = __webpack_require__(58);
var V8_VERSION = __webpack_require__(62);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(13);
var definePropertyModule = __webpack_require__(8);
var createPropertyDescriptor = __webpack_require__(14);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(27);
var isObject = __webpack_require__(11);
var isArray = __webpack_require__(57);
var toAbsoluteIndex = __webpack_require__(43);
var toLength = __webpack_require__(41);
var toIndexedObject = __webpack_require__(30);
var createProperty = __webpack_require__(330);
var wellKnownSymbol = __webpack_require__(58);
var arrayMethodHasSpeciesSupport = __webpack_require__(61);
var arrayMethodUsesToLength = __webpack_require__(63);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(27);
var toAbsoluteIndex = __webpack_require__(43);
var toInteger = __webpack_require__(42);
var toLength = __webpack_require__(41);
var toObject = __webpack_require__(47);
var arraySpeciesCreate = __webpack_require__(56);
var createProperty = __webpack_require__(330);
var arrayMethodHasSpeciesSupport = __webpack_require__(61);
var arrayMethodUsesToLength = __webpack_require__(63);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),
/* 333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lzw", function() { return lzw; });
/**
 * javascript port of java LZW decompression
 * Original java author url: https://gist.github.com/devunwired/4479231
 */
var lzw = function lzw(minCodeSize, data, pixelCount) {
  var MAX_STACK_SIZE = 4096;
  var nullCode = -1;
  var npix = pixelCount;
  var available, clear, code_mask, code_size, end_of_information, in_code, old_code, bits, code, i, datum, data_size, first, top, bi, pi;
  var dstPixels = new Array(pixelCount);
  var prefix = new Array(MAX_STACK_SIZE);
  var suffix = new Array(MAX_STACK_SIZE);
  var pixelStack = new Array(MAX_STACK_SIZE + 1); // Initialize GIF data stream decoder.

  data_size = minCodeSize;
  clear = 1 << data_size;
  end_of_information = clear + 1;
  available = clear + 2;
  old_code = nullCode;
  code_size = data_size + 1;
  code_mask = (1 << code_size) - 1;

  for (code = 0; code < clear; code++) {
    prefix[code] = 0;
    suffix[code] = code;
  } // Decode GIF pixel stream.


  var datum, bits, count, first, top, pi, bi;
  datum = bits = count = first = top = pi = bi = 0;

  for (i = 0; i < npix;) {
    if (top === 0) {
      if (bits < code_size) {
        // get the next byte
        datum += data[bi] << bits;
        bits += 8;
        bi++;
        continue;
      } // Get the next code.


      code = datum & code_mask;
      datum >>= code_size;
      bits -= code_size; // Interpret the code

      if (code > available || code == end_of_information) {
        break;
      }

      if (code == clear) {
        // Reset decoder.
        code_size = data_size + 1;
        code_mask = (1 << code_size) - 1;
        available = clear + 2;
        old_code = nullCode;
        continue;
      }

      if (old_code == nullCode) {
        pixelStack[top++] = suffix[code];
        old_code = code;
        first = code;
        continue;
      }

      in_code = code;

      if (code == available) {
        pixelStack[top++] = first;
        code = old_code;
      }

      while (code > clear) {
        pixelStack[top++] = suffix[code];
        code = prefix[code];
      }

      first = suffix[code] & 0xff;
      pixelStack[top++] = first; // add a new string to the table, but only if space is available
      // if not, just continue with current table until a clear code is found
      // (deferred clear code implementation as per GIF spec)

      if (available < MAX_STACK_SIZE) {
        prefix[available] = old_code;
        suffix[available] = first;
        available++;

        if ((available & code_mask) === 0 && available < MAX_STACK_SIZE) {
          code_size++;
          code_mask += available;
        }
      }

      old_code = in_code;
    } // Pop a pixel off the pixel stack.


    top--;
    dstPixels[pi++] = pixelStack[top];
    i++;
  }

  for (i = pi; i < npix; i++) {
    dstPixels[i] = 0; // clear missing pixels
  }

  return dstPixels;
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=demo.build.js.map