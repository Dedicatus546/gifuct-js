"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array-buffer.slice");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.typed-array.uint8-array");

require("core-js/modules/es.typed-array.uint8-clamped-array");

require("core-js/modules/es.typed-array.copy-within");

require("core-js/modules/es.typed-array.every");

require("core-js/modules/es.typed-array.fill");

require("core-js/modules/es.typed-array.filter");

require("core-js/modules/es.typed-array.find");

require("core-js/modules/es.typed-array.find-index");

require("core-js/modules/es.typed-array.for-each");

require("core-js/modules/es.typed-array.includes");

require("core-js/modules/es.typed-array.index-of");

require("core-js/modules/es.typed-array.iterator");

require("core-js/modules/es.typed-array.join");

require("core-js/modules/es.typed-array.last-index-of");

require("core-js/modules/es.typed-array.map");

require("core-js/modules/es.typed-array.reduce");

require("core-js/modules/es.typed-array.reduce-right");

require("core-js/modules/es.typed-array.reverse");

require("core-js/modules/es.typed-array.set");

require("core-js/modules/es.typed-array.slice");

require("core-js/modules/es.typed-array.some");

require("core-js/modules/es.typed-array.sort");

require("core-js/modules/es.typed-array.subarray");

require("core-js/modules/es.typed-array.to-locale-string");

require("core-js/modules/es.typed-array.to-string");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "GIF", {
  enumerable: true,
  get: function get() {
    return _gif["default"];
  }
});
Object.defineProperty(exports, "SchemaFactory", {
  enumerable: true,
  get: function get() {
    return _gif.SchemaFactory;
  }
});
exports.ChunkedParser = exports.Parser = exports.decompressFrames = exports.decompressFrame = exports.parseGIFChunked = exports.parseGIF = void 0;

var _gif = _interopRequireWildcard(require("js-binary-schema-parser/lib/schemas/gif"));

var _jsBinarySchemaParser = require("js-binary-schema-parser");

var Parser = _interopRequireWildcard(require("js-binary-schema-parser/lib/parsers/uint8"));

exports.Parser = Parser;

var ChunkedParser = _interopRequireWildcard(require("js-binary-schema-parser/lib/parsers/chunked-uint8"));

exports.ChunkedParser = ChunkedParser;

var _deinterlace = require("./deinterlace");

var _lzw = require("./lzw");

var parseGIF = function parseGIF(arrayBuffer) {
  var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var byteData = new Uint8Array(arrayBuffer);
  var result = {};
  return (0, _jsBinarySchemaParser.parse)(Parser.buildStream(byteData), _gif["default"], result, result, events);
};

exports.parseGIF = parseGIF;

var parseGIFChunked = function parseGIFChunked(stream, parser) {
  var events = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var result = {};
  var GIF = (0, _gif.SchemaFactory)(parser);
  return (0, _jsBinarySchemaParser.parse)(stream, GIF, result, result, events);
};

exports.parseGIFChunked = parseGIFChunked;

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

  var pixels = (0, _lzw.lzw)(image.data.minCodeSize, image.data.blocks, totalPixels); // deal with interlacing if necessary

  if (image.descriptor.lct.interlaced) {
    pixels = (0, _deinterlace.deinterlace)(pixels, image.descriptor.width);
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

exports.decompressFrame = decompressFrame;

var decompressFrames = function decompressFrames(parsedGif, buildImagePatches) {
  return parsedGif.frames.filter(function (f) {
    return f.image;
  }).map(function (f) {
    return decompressFrame(f, parsedGif.gct, buildImagePatches);
  });
};

exports.decompressFrames = decompressFrames;