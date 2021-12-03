(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-flux"] = factory();
	else
		root["vue-flux"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "02eb":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0301");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("1365bb3f", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "0301":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-flux .preloader{position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1}.vue-flux .preloader .spinner{position:absolute;top:50%;left:50%;margin-top:-40px;margin-left:-40px;width:80px;height:80px;z-index:14}.vue-flux .preloader .spinner .pct{position:absolute;right:0;left:0;height:80px;line-height:80px;text-align:center;font-weight:700;z-index:1}.vue-flux .preloader .spinner .border{box-sizing:border-box;width:100%;height:100%;border:14px solid #f3f3f3;border-top-color:#3498db;border-bottom-color:#3498db;border-radius:50%;background-color:#f3f3f3;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}@-webkit-keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

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

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyNames = __webpack_require__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0cdd":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".flux-parallax img{position:absolute;visibility:hidden}.flux-parallax :not(.image){z-index:1}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "1148":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = ''.repeat || function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "1276":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var isRegExp = __webpack_require__("44e7");
var anObject = __webpack_require__("825a");
var requireObjectCoercible = __webpack_require__("1d80");
var speciesConstructor = __webpack_require__("4840");
var advanceStringIndex = __webpack_require__("8aa5");
var toLength = __webpack_require__("50c4");
var callRegExpExec = __webpack_require__("14c3");
var regexpExec = __webpack_require__("9263");
var fails = __webpack_require__("d039");

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
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
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

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
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

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "19aa":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

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

/***/ "1cdc":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "1d36":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlux_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("91c3");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlux_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlux_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

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

/***/ "1dec":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxPreloader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("02eb");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxPreloader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxPreloader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2266":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var bind = __webpack_require__("0366");
var getIteratorMethod = __webpack_require__("35a1");
var iteratorClose = __webpack_require__("2a62");

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

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

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

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

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

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "25f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__("6eeb");
var anObject = __webpack_require__("825a");
var fails = __webpack_require__("d039");
var flags = __webpack_require__("ad6d");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
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

/***/ "2626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var definePropertyModule = __webpack_require__("9bf2");
var wellKnownSymbol = __webpack_require__("b622");
var DESCRIPTORS = __webpack_require__("83ab");

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

/***/ "281b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxParallax_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e3c4");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxParallax_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxParallax_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2a62":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ "2ae5":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-flux{position:relative}.vue-flux .flux-transition{position:absolute}.vue-flux .complements,.vue-flux>.flux-image{position:absolute;top:0;left:0}.vue-flux .complements{right:0;bottom:0;display:flex;flex-direction:column;justify-content:space-between;z-index:45}.vue-flux .complements .remainder{flex-basis:50%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "2c75":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-flux .flux-button{padding:0;width:6%;min-width:26px;min-height:26px;max-width:40px;max-height:40px}.flux-button{border:0;cursor:pointer;background-color:transparent}.flux-button:hover>svg line,.flux-button:hover>svg polyline{stroke:#ff0}.flux-button:hover>svg polygon,.flux-button:hover>svg rect{fill:#ff0}.flux-button>svg{width:100%}.flux-button>svg *{cursor:pointer}.flux-button>svg>circle{fill:rgba(0,0,0,.7)}.flux-button>svg line,.flux-button>svg polygon,.flux-button>svg polyline,.flux-button>svg rect{stroke-linecap:round;stroke-linejoin:round;stroke:#fff;stroke-width:14;fill:none}.flux-button>svg polygon,.flux-button>svg rect{fill:#fff;stroke-width:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "2cf4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var fails = __webpack_require__("d039");
var bind = __webpack_require__("0366");
var html = __webpack_require__("1be4");
var createElement = __webpack_require__("cc12");
var IS_IOS = __webpack_require__("1cdc");
var IS_NODE = __webpack_require__("605d");

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

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

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

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "34fa":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-flux .flux-pagination{flex:none;margin-bottom:.5%}.vue-flux .flux-pagination ul{display:flex;flex-wrap:wrap;justify-content:center;margin:0;padding:0;list-style-type:none;text-align:center;position:relative}.vue-flux .flux-pagination li{display:block;margin:0 1% 1.5% 1%;cursor:pointer;width:2%;height:0;min-width:10px;min-height:10px;padding-bottom:2%;position:relative;box-sizing:border-box}.vue-flux .flux-pagination .pagination-item{position:absolute;top:0;left:0;right:0;bottom:0;box-sizing:border-box;border:2px solid #fff;border-radius:50%;background-color:rgba(0,0,0,.7);transition:background-color .2s ease-in,border .2s ease-in}.vue-flux .flux-pagination .pagination-item:hover{border-color:#000;background-color:#fff}.vue-flux .flux-pagination .pagination-item.active{border-color:#fff;background-color:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
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

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
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

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "402f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("9281");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("ab409638", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "408a":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = function (value) {
  if (typeof value != 'number' && classof(value) != 'Number') {
    throw TypeError('Incorrect invocation');
  }
  return +value;
};


/***/ }),

/***/ "4160":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var forEach = __webpack_require__("17c2");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

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

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
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

/***/ "44de":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "4840":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aFunction = __webpack_require__("1c0b");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

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
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("0366");
var toObject = __webpack_require__("7b0b");
var callWithSafeIterationClosing = __webpack_require__("9bdd");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var getIteratorMethod = __webpack_require__("35a1");

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
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

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.8.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5a88":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("71c9");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "5c6c":
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

/***/ "605d":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var global = __webpack_require__("da84");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "60da":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var objectKeys = __webpack_require__("df75");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
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

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

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
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
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

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

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

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

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

/***/ "6fc2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxPagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c084");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxPagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxPagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

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

/***/ "71c9":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("86b3");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("3b7dfa82", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var has = __webpack_require__("5135");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "7839":
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

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7b93":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-flux .flux-caption{flex:none;width:100%;font-size:.8rem;line-height:1.1rem;padding:6px;box-sizing:border-box;color:#fff;text-align:center;background-color:rgba(0,0,0,.65);opacity:0}.vue-flux .flux-caption.visible{opacity:1;transition:opacity .3s ease-in}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

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
// https://tc39.es/ecma262/#sec-object.create
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

/***/ "7db0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $find = __webpack_require__("b727").find;
var addToUnscopables = __webpack_require__("44d2");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

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

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "86b3":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-flux .flux-index{flex:none;margin-bottom:2%;font-size:0;text-align:center}.vue-flux .flux-index .fade-enter,.vue-flux .flux-index .fade-leave-to{opacity:0}.vue-flux .flux-index .fade-enter-active,.vue-flux .flux-index .fade-leave-active{transition:opacity .3s ease-in}.vue-flux .flux-index nav{position:absolute;top:0;left:0;right:0;bottom:0;display:block;margin:0;overflow:hidden;visibility:hidden}.vue-flux .flux-index nav.visible{z-index:101;visibility:visible}.vue-flux .flux-index ul{display:block;height:100%;margin:0;margin-top:100%;padding:24px 0 0 24px;list-style-type:none;text-align:center;overflow-y:auto;background-color:#000;transition:all .5s linear;font-size:0}.vue-flux .flux-index li{position:relative;display:inline-block;box-sizing:content-box;margin:0 24px 24px 0;cursor:pointer;transition:all .3s ease}.vue-flux .flux-index li:hover{box-shadow:0 0 3px 2px hsla(0,0%,100%,.6)}.vue-flux .flux-index li.current{cursor:auto;border:1px solid #fff;box-shadow:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "87af":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxCaption_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b2bc");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxCaption_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxCaption_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "8ca2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("af58");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "91c3":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2ae5");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("133e195e", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");

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

/***/ "9281":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".flux-transition{position:relative}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "939f":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-flux .flux-controls{flex:none;display:flex;justify-content:space-between}.vue-flux .flux-controls.fade-enter,.vue-flux .flux-controls.fade-leave-to{opacity:0}.vue-flux .flux-controls.fade-enter-active,.vue-flux .flux-controls.fade-leave-active{transition:opacity .3s ease-in}.vue-flux .flux-controls .prev{margin-left:4%}.vue-flux .flux-controls .next{margin-right:4%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

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

/***/ "96cf":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

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
// https://tc39.es/ecma262/#sec-array.prototype.concat
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

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var iteratorClose = __webpack_require__("2a62");

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

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
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

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("d039");

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

/***/ "a4b4":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineWellKnownSymbol = __webpack_require__("746f");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a53f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("939f");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("513619ea", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "a630":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var from = __webpack_require__("4df4");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a79d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IS_PURE = __webpack_require__("c430");
var NativePromise = __webpack_require__("fea9");
var fails = __webpack_require__("d039");
var getBuiltIn = __webpack_require__("d066");
var speciesConstructor = __webpack_require__("4840");
var promiseResolve = __webpack_require__("cdf9");
var redefine = __webpack_require__("6eeb");

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromise && fails(function () {
  NativePromise.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = typeof onFinally == 'function';
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// patch native Promise.prototype for native async functions
if (!IS_PURE && typeof NativePromise == 'function' && !NativePromise.prototype['finally']) {
  redefine(NativePromise.prototype, 'finally', getBuiltIn('Promise').prototype['finally']);
}


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
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

/***/ "ae40":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");

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

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");
var getPrototypeOf = __webpack_require__("e163");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
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

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "af58":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2c75");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("d6caf144", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
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

/***/ "b2bc":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7b93");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("3113e73f", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "b575":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var macrotask = __webpack_require__("2cf4").set;
var IS_IOS = __webpack_require__("1cdc");
var IS_WEBOS_WEBKIT = __webpack_require__("a4b4");
var IS_NODE = __webpack_require__("605d");

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
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
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

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

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

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b680":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toInteger = __webpack_require__("a691");
var thisNumberValue = __webpack_require__("408a");
var repeat = __webpack_require__("1148");
var fails = __webpack_require__("d039");

var nativeToFixed = 1.0.toFixed;
var floor = Math.floor;

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var FORCED = nativeToFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed.call({});
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  // eslint-disable-next-line max-statements
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toInteger(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    var multiply = function (n, c) {
      var index = -1;
      var c2 = c;
      while (++index < 6) {
        c2 += n * data[index];
        data[index] = c2 % 1e7;
        c2 = floor(c2 / 1e7);
      }
    };

    var divide = function (n) {
      var index = 6;
      var c = 0;
      while (--index >= 0) {
        c += data[index];
        data[index] = floor(c / n);
        c = (c % n) * 1e7;
      }
    };

    var dataToString = function () {
      var index = 6;
      var s = '';
      while (--index >= 0) {
        if (s !== '' || index === 0 || data[index] !== 0) {
          var t = String(data[index]);
          s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
        }
      } return s;
    };

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        result = dataToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        result = dataToString() + repeat.call('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat.call('0', fractDigits - k) + result
        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

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
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
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

/***/ "c084":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("34fa");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("2aa56e5a", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8ba":
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

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

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

/***/ "caad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $includes = __webpack_require__("4d64").includes;
var addToUnscopables = __webpack_require__("44d2");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cca6":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var assign = __webpack_require__("60da");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "cdf9":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isObject = __webpack_require__("861d");
var newPromiseCapability = __webpack_require__("f069");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d28b":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("746f");

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
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

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var regexpExec = __webpack_require__("9263");
var createNonEnumerableProperty = __webpack_require__("9112");

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

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "da84":
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dbb4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var ownKeys = __webpack_require__("56ef");
var toIndexedObject = __webpack_require__("fc6a");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var createProperty = __webpack_require__("8418");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

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

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var has = __webpack_require__("5135");
var isObject = __webpack_require__("861d");
var defineProperty = __webpack_require__("9bf2").f;
var copyConstructorProperties = __webpack_require__("e893");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
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
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e2cc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("6eeb");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "e3c4":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0cdd");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("f8a77fb0", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "e439":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
var DESCRIPTORS = __webpack_require__("83ab");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e667":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "e671":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxTransition_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("402f");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxTransition_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxTransition_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e6cf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IS_PURE = __webpack_require__("c430");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var NativePromise = __webpack_require__("fea9");
var redefine = __webpack_require__("6eeb");
var redefineAll = __webpack_require__("e2cc");
var setToStringTag = __webpack_require__("d44e");
var setSpecies = __webpack_require__("2626");
var isObject = __webpack_require__("861d");
var aFunction = __webpack_require__("1c0b");
var anInstance = __webpack_require__("19aa");
var inspectSource = __webpack_require__("8925");
var iterate = __webpack_require__("2266");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var speciesConstructor = __webpack_require__("4840");
var task = __webpack_require__("2cf4").set;
var microtask = __webpack_require__("b575");
var promiseResolve = __webpack_require__("cdf9");
var hostReportErrors = __webpack_require__("44de");
var newPromiseCapabilityModule = __webpack_require__("f069");
var perform = __webpack_require__("e667");
var InternalStateModule = __webpack_require__("69f3");
var isForced = __webpack_require__("94ca");
var wellKnownSymbol = __webpack_require__("b622");
var IS_NODE = __webpack_require__("605d");
var V8_VERSION = __webpack_require__("2d00");

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
    // https://tc39.es/ecma262/#sec-promise.prototype.then
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
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
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
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
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
  // https://tc39.es/ecma262/#sec-promise.race
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

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

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

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "f069":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("1c0b");

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

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

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

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "f83b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxControls_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a53f");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxControls_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxControls_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "FluxButton", function() { return /* reexport */ FluxButton; });
__webpack_require__.d(__webpack_exports__, "FluxCube", function() { return /* reexport */ FluxCube; });
__webpack_require__.d(__webpack_exports__, "FluxGrid", function() { return /* reexport */ FluxGrid; });
__webpack_require__.d(__webpack_exports__, "FluxImage", function() { return /* reexport */ FluxImage; });
__webpack_require__.d(__webpack_exports__, "FluxParallax", function() { return /* reexport */ FluxParallax; });
__webpack_require__.d(__webpack_exports__, "FluxTransition", function() { return /* reexport */ FluxTransition; });
__webpack_require__.d(__webpack_exports__, "FluxVortex", function() { return /* reexport */ FluxVortex; });
__webpack_require__.d(__webpack_exports__, "FluxWrapper", function() { return /* reexport */ FluxWrapper; });
__webpack_require__.d(__webpack_exports__, "VueFlux", function() { return /* reexport */ VueFlux; });
__webpack_require__.d(__webpack_exports__, "FluxCaption", function() { return /* reexport */ FluxCaption; });
__webpack_require__.d(__webpack_exports__, "FluxControls", function() { return /* reexport */ FluxControls; });
__webpack_require__.d(__webpack_exports__, "FluxIndex", function() { return /* reexport */ FluxIndex; });
__webpack_require__.d(__webpack_exports__, "FluxPagination", function() { return /* reexport */ FluxPagination; });
__webpack_require__.d(__webpack_exports__, "FluxPreloader", function() { return /* reexport */ FluxPreloader; });
__webpack_require__.d(__webpack_exports__, "BaseComplement", function() { return /* reexport */ BaseComplement; });
__webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return /* reexport */ BaseComponent; });
__webpack_require__.d(__webpack_exports__, "BaseTransition", function() { return /* reexport */ BaseTransition; });

// NAMESPACE OBJECT: ./src/transitions/index.js
var transitions_namespaceObject = {};
__webpack_require__.r(transitions_namespaceObject);
__webpack_require__.d(transitions_namespaceObject, "TransitionFade", function() { return fade; });
__webpack_require__.d(transitions_namespaceObject, "TransitionKenburn", function() { return kenburn; });
__webpack_require__.d(transitions_namespaceObject, "TransitionSwipe", function() { return swipe; });
__webpack_require__.d(transitions_namespaceObject, "TransitionSlide", function() { return slide; });
__webpack_require__.d(transitions_namespaceObject, "TransitionWaterfall", function() { return waterfall; });
__webpack_require__.d(transitions_namespaceObject, "TransitionZip", function() { return zip; });
__webpack_require__.d(transitions_namespaceObject, "TransitionBlinds2d", function() { return blinds2d; });
__webpack_require__.d(transitions_namespaceObject, "TransitionBlocks1", function() { return blocks1; });
__webpack_require__.d(transitions_namespaceObject, "TransitionBlocks2", function() { return blocks2; });
__webpack_require__.d(transitions_namespaceObject, "TransitionConcentric", function() { return concentric; });
__webpack_require__.d(transitions_namespaceObject, "TransitionWarp", function() { return warp; });
__webpack_require__.d(transitions_namespaceObject, "TransitionCamera", function() { return camera; });
__webpack_require__.d(transitions_namespaceObject, "TransitionCube", function() { return cube; });
__webpack_require__.d(transitions_namespaceObject, "TransitionBook", function() { return book; });
__webpack_require__.d(transitions_namespaceObject, "TransitionFall", function() { return fall; });
__webpack_require__.d(transitions_namespaceObject, "TransitionWave", function() { return wave; });
__webpack_require__.d(transitions_namespaceObject, "TransitionBlinds3d", function() { return blinds3d; });
__webpack_require__.d(transitions_namespaceObject, "TransitionRound1", function() { return round1; });
__webpack_require__.d(transitions_namespaceObject, "TransitionRound2", function() { return round2; });
__webpack_require__.d(transitions_namespaceObject, "TransitionExplode", function() { return explode; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var setPublicPath_src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (setPublicPath_src) {
    __webpack_require__.p = setPublicPath_src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxButton.vue?vue&type=template&id=b4c731a6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"flux-button",staticStyle:{"outline":"0"},attrs:{"type":"button"},on:{"click":function($event){return _vm.$emit('click')}}},[_c('svg',{attrs:{"viewBox":"0 0 100 100","xmlns":"http://www.w3.org/2000/svg","version":"1.1"}},[_c('circle',{attrs:{"cx":"50","cy":"50","r":"49"}}),_c('svg',{attrs:{"viewBox":"-20 -20 140 140"}},[_vm._t("default")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FluxButton.vue?vue&type=template&id=b4c731a6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FluxButtonvue_type_script_lang_js_ = ({
  name: 'FluxButton'
});
// CONCATENATED MODULE: ./src/components/FluxButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FluxButtonvue_type_script_lang_js_ = (FluxButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/FluxButton.vue?vue&type=style&index=0&lang=scss&
var FluxButtonvue_type_style_index_0_lang_scss_ = __webpack_require__("8ca2");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/FluxButton.vue






/* normalize component */

var component = normalizeComponent(
  components_FluxButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FluxButton = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxCube.vue?vue&type=template&id=24c25ac4&
var FluxCubevue_type_template_id_24c25ac4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"cube",style:(_vm.style)},_vm._l((_vm.sides),function(side){return _c('flux-image',{key:side.name,ref:side.name,refInFor:true,style:(side.style),attrs:{"size":side.size,"view-size":side.viewSize,"image":side.img,"color":side.color,"offset":side.offset}})}),1)}
var FluxCubevue_type_template_id_24c25ac4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FluxCube.vue?vue&type=template&id=24c25ac4&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("e439");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("dbb4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js









function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("d28b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("a630");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js







function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js








function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxImage.vue?vue&type=template&id=3a2a1544&
var FluxImagevue_type_template_id_3a2a1544_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flux-image",style:(_vm.style)})}
var FluxImagevue_type_template_id_3a2a1544_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FluxImage.vue?vue&type=template&id=3a2a1544&

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
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
// CONCATENATED MODULE: ./src/libraries/Dom.js



var Dom_Dom = /*#__PURE__*/function () {
  function Dom(node) {
    _classCallCheck(this, Dom);

    this.node = node;
  }

  _createClass(Dom, [{
    key: "getWidth",
    value: function getWidth() {
      var width = getComputedStyle(this.node).width;
      return parseFloat(width);
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      var height = getComputedStyle(this.node).height;
      return parseFloat(height);
    }
  }, {
    key: "size",
    get: function get() {
      return {
        width: this.getWidth(),
        height: this.getHeight()
      };
    }
  }], [{
    key: "sizeFrom",
    value: function sizeFrom(node) {
      return new Dom(node).size;
    }
  }]);

  return Dom;
}();


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// CONCATENATED MODULE: ./src/libraries/Img.js






var Img_Img = /*#__PURE__*/function () {
  function Img(src, i) {
    _classCallCheck(this, Img);

    _defineProperty(this, "status", void 0);

    _defineProperty(this, "initIndex", void 0);

    _defineProperty(this, "index", void 0);

    _defineProperty(this, "aspectRatio", void 0);

    _defineProperty(this, "size", void 0);

    this.src = src;
    this.initIndex = i;
  }

  _createClass(Img, [{
    key: "load",
    value: function load() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (_this.status) return _this.status === 'loaded' ? resolve() : reject("Image ".concat(_this.src, " could not be loaded"));
        var img = new Image();

        img.onload = function () {
          _this.size = {
            width: img.naturalWidth || img.width,
            height: img.naturalHeight || img.height
          };
          _this.aspectRatio = _this.size.width / _this.size.height;
          _this.status = 'loaded';
          resolve();
        };

        img.onerror = function () {
          _this.status = 'error';
          reject("Image ".concat(_this.src, " could not be loaded"));
        };

        img.src = _this.src;
      });
    }
  }, {
    key: "getCoverProps",
    value: function getCoverProps(viewSize) {
      if (!viewSize || this.status !== 'loaded') return undefined;
      var view = {
        size: viewSize,
        aspectRatio: viewSize.width / viewSize.height
      };
      var cover = {
        size: this.getCoverSize(view)
      };
      cover.position = this.getCoverPosition(view, cover.size);
      return cover;
    }
  }, {
    key: "getCoverSize",
    value: function getCoverSize(view) {
      if (this.aspectRatio <= view.aspectRatio) {
        return {
          width: view.size.width,
          height: view.size.width / this.aspectRatio
        };
      }

      return {
        width: this.aspectRatio * view.size.height,
        height: view.size.height
      };
    }
  }, {
    key: "getCoverPosition",
    value: function getCoverPosition(view, coverSize) {
      if (this.aspectRatio <= view.aspectRatio) {
        return {
          top: (view.size.height - coverSize.height) / 2,
          left: 0
        };
      }

      return {
        top: 0,
        left: (view.size.width - coverSize.width) / 2
      };
    }
  }]);

  return Img;
}();


// CONCATENATED MODULE: ./src/mixins/BaseComponent.js



/* harmony default export */ var BaseComponent = ({
  props: {
    color: String,
    colors: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    image: [String, Object],
    images: Object,
    size: {
      type: Object
    },
    viewSize: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    offset: Object,
    offsets: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    css: Object
  },
  data: function data() {
    return {
      img: undefined,
      imgs: undefined,
      baseStyle: {}
    };
  },
  computed: {
    domSize: function domSize() {
      return Dom_Dom.sizeFrom(this.$el);
    },
    sizeStyle: function sizeStyle() {
      if (!this.size) return {};
      var size = this.size;
      var _this$viewSize = this.viewSize,
          _this$viewSize$width = _this$viewSize.width,
          width = _this$viewSize$width === void 0 ? size.width : _this$viewSize$width,
          _this$viewSize$height = _this$viewSize.height,
          height = _this$viewSize$height === void 0 ? size.height : _this$viewSize$height;
      return {
        width: width + 'px',
        height: height + 'px'
      };
    },
    style: function style() {
      return _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, this.sizeStyle), this.colorStyle), this.imageStyle), this.css), this.baseStyle);
    }
  },
  watch: {
    image: function image() {
      this.initImg();
    },
    images: function images() {
      this.initImgs();
    }
  },
  created: function created() {
    this.initImg();
    this.initImgs();
  },
  methods: {
    initImg: function initImg() {
      if (!this.image) return this.img = undefined;
      if (this.image.src) return this.img = this.image;
      this.img = new Img_Img(this.image);
      this.img.load();
    },
    initImgs: function initImgs() {
      if (!this.images) return this.imgs = undefined;
      var img;
      var imgs = {};

      for (var side in this.images) {
        img = this.images[side];

        if (!img.src) {
          img = new Img_Img(img);
          img.load();
        }

        imgs[side] = img;
      }

      this.imgs = imgs;
    },
    setCss: function setCss(css) {
      this.baseStyle = _objectSpread2(_objectSpread2({}, this.baseStyle), css);
    },
    transform: function transform(css) {
      this.$el.clientHeight;
      this.setCss(css);
    },
    show: function show() {
      this.setCss({
        visibility: 'visible'
      });
    },
    hide: function hide() {
      this.setCss({
        visibility: 'hidden'
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxImage.vue?vue&type=script&lang=js&

//
//
//
//

/* harmony default export */ var FluxImagevue_type_script_lang_js_ = ({
  name: 'FluxImage',
  mixins: [BaseComponent],
  data: function data() {
    return {
      baseStyle: {
        overflow: 'hidden'
      }
    };
  },
  computed: {
    colorStyle: function colorStyle() {
      if (!this.color) return {};
      return {
        backgroundColor: this.color
      };
    },
    imageStyle: function imageStyle() {
      var img = this.img;
      if (!img || img.status !== 'loaded') return {};

      var _img$getCoverProps = img.getCoverProps(this.size || this.domSize),
          size = _img$getCoverProps.size,
          position = _img$getCoverProps.position;

      if (this.offset) {
        for (var _i = 0, _arr = ['top', 'left']; _i < _arr.length; _i++) {
          var side = _arr[_i];
          position[side] -= this.offset[side] || 0;
        }
      }

      return {
        backgroundImage: "url(".concat(this.img.src, ")"),
        backgroundSize: "".concat(size.width, "px ").concat(size.height, "px"),
        backgroundPosition: "".concat(position.left, "px ").concat(position.top, "px"),
        backgroundRepeat: 'no-repeat'
      };
    }
  }
});
// CONCATENATED MODULE: ./src/components/FluxImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FluxImagevue_type_script_lang_js_ = (FluxImagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FluxImage.vue





/* normalize component */

var FluxImage_component = normalizeComponent(
  components_FluxImagevue_type_script_lang_js_,
  FluxImagevue_type_template_id_3a2a1544_render,
  FluxImagevue_type_template_id_3a2a1544_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FluxImage = (FluxImage_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxCube.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var rotate = {
  x: {
    top: '90',
    bottom: '-90'
  },
  y: {
    back: '180',
    backr: '180',
    backl: '-180',
    left: '-90',
    right: '90'
  }
};
var translate = {
  x: {
    left: '-50',
    right: '50'
  },
  y: {
    top: '-50',
    bottom: '50'
  }
};
/* harmony default export */ var FluxCubevue_type_script_lang_js_ = ({
  name: 'FluxCube',
  components: {
    FluxImage: FluxImage
  },
  mixins: [BaseComponent],
  props: {
    depth: {
      type: Number,
      default: 0
    },
    sidesCss: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      sideNames: ['front', 'back', 'top', 'bottom', 'left', 'right'],
      baseStyle: {
        transformStyle: 'preserve-3d'
      }
    };
  },
  computed: {
    sides: function sides() {
      var side;
      var sides = {};

      var _iterator = _createForOfIteratorHelper(this.definedSides),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var sideName = _step.value;
          side = {
            name: sideName,
            img: this.imgs[sideName],
            color: this.colors[sideName] || this.color,
            offset: this.offsets[sideName] || this.offset
          };
          side.size = _objectSpread2({}, this.size);
          side.viewSize = _objectSpread2({}, this.viewSize);

          if (['left', 'right'].includes(sideName)) {
            side.viewSize.width = this.depth;
            side.size.width = this.depth;
          }

          if (['top', 'bottom'].includes(sideName)) {
            side.viewSize.height = this.depth;
            side.size.height = this.depth;
          }

          side.style = _objectSpread2(_objectSpread2({}, this.sidesCss[sideName]), {}, {
            position: 'absolute',
            transform: this.getTransform(sideName),
            backfaceVisibility: 'hidden'
          });
          sides[sideName] = side;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return sides;
    },
    definedSides: function definedSides() {
      var _this = this;

      return this.sideNames.filter(function (side) {
        return _this.sideDefined(side);
      });
    },
    translateZ: function translateZ() {
      var _this$size = this.size,
          width = _this$size.width,
          height = _this$size.height,
          _this$viewSize = this.viewSize,
          viewWidth = _this$viewSize.width,
          viewHeight = _this$viewSize.height,
          depth = this.depth;
      var halfDepth = depth / 2;
      return {
        top: halfDepth,
        bottom: viewHeight ? viewHeight - halfDepth : height - halfDepth,
        left: halfDepth,
        right: viewWidth ? viewWidth - halfDepth : width - halfDepth,
        back: depth
      };
    }
  },
  methods: {
    sideDefined: function sideDefined(side) {
      if (this.images[side] || this.colors[side]) return true;
      return false;
    },
    getSide: function getSide(side) {
      return this.$refs[side];
    },
    getTransform: function getTransform(side) {
      var rx = rotate.x[side] || 0;
      var ry = rotate.y[side] || 0;
      var tx = translate.x[side] || 0;
      var ty = translate.y[side] || 0;
      var tz = this.translateZ[side] || 0;
      return "rotateX(".concat(rx, "deg) rotateY(").concat(ry, "deg) translate3d(").concat(tx, "%, ").concat(ty, "%, ").concat(tz, "px)");
    },
    turn: function turn(side) {
      this.transform({
        transform: this.getTransform(side)
      });
    },
    turnTop: function turnTop() {
      this.turn('top');
    },
    turnBack: function turnBack() {
      this.turn('back');
    },
    turnBottom: function turnBottom() {
      this.turn('bottom');
    },
    turnLeft: function turnLeft() {
      this.turn('left');
    },
    turnRight: function turnRight() {
      this.turn('right');
    }
  }
});
// CONCATENATED MODULE: ./src/components/FluxCube.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FluxCubevue_type_script_lang_js_ = (FluxCubevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FluxCube.vue





/* normalize component */

var FluxCube_component = normalizeComponent(
  components_FluxCubevue_type_script_lang_js_,
  FluxCubevue_type_template_id_24c25ac4_render,
  FluxCubevue_type_template_id_24c25ac4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FluxCube = (FluxCube_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxGrid.vue?vue&type=template&id=5291172a&
var FluxGridvue_type_template_id_5291172a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"grid",style:(_vm.style)},_vm._l((_vm.tiles),function(tile,index){return _c(_vm.component,{key:index,ref:"tiles",refInFor:true,tag:"component",attrs:{"size":_vm.size,"view-size":tile.viewSize,"color":_vm.color,"colors":_vm.colors,"image":_vm.img,"images":_vm.imgs,"offset":tile.offset,"depth":_vm.depth,"css":tile.css,"sides-css":tile.sidesCss}})}),1)}
var FluxGridvue_type_template_id_5291172a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FluxGrid.vue?vue&type=template&id=5291172a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxGrid.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var FluxGridvue_type_script_lang_js_ = ({
  name: 'FluxGrid',
  components: {
    FluxCube: FluxCube,
    FluxImage: FluxImage
  },
  mixins: [BaseComponent],
  props: {
    rows: {
      type: Number,
      default: 1
    },
    cols: {
      type: Number,
      default: 1
    },
    depth: {
      type: Number,
      default: 0
    },
    tileCss: Object
  },
  data: function data() {
    return {
      baseStyle: {
        position: 'relative'
      }
    };
  },
  computed: {
    component: function component() {
      return this.images ? 'FluxCube' : 'FluxImage';
    },
    numRows: function numRows() {
      return Math.ceil(parseFloat(this.rows));
    },
    numCols: function numCols() {
      return Math.ceil(parseFloat(this.cols));
    },
    numTiles: function numTiles() {
      return this.numRows * this.numCols;
    },
    tileSize: function tileSize() {
      return {
        width: Math.floor(this.size.width / this.numCols),
        height: Math.floor(this.size.height / this.numRows)
      };
    },
    tiles: function tiles() {
      var tile;
      var tiles = [];

      for (var i = 0; i < this.numTiles; i++) {
        tile = {
          row: this.getRowNumber(i),
          col: this.getColNumber(i)
        };
        var _this$tileSize = this.tileSize,
            width = _this$tileSize.width,
            height = _this$tileSize.height;
        if (tile.row + 1 === this.numRows) height = this.size.height - tile.row * height;
        if (tile.col + 1 === this.numCols) width = this.size.width - tile.col * width;
        tile.viewSize = {
          width: width,
          height: height
        };
        tile.offset = {
          top: tile.row * this.tileSize.height,
          left: tile.col * this.tileSize.width
        };
        tile.css = _objectSpread2(_objectSpread2({}, this.tileCss), {}, {
          position: 'absolute',
          left: tile.offset.left + 'px',
          top: tile.offset.top + 'px',
          zIndex: i + 1 < this.numTiles / 2 ? i + 1 : this.numTiles - i
        });
        tiles.push(tile);
      }

      return tiles;
    }
  },
  methods: {
    getRowNumber: function getRowNumber(i) {
      return Math.floor(i / this.numCols);
    },
    getColNumber: function getColNumber(i) {
      return i % this.numCols;
    },
    transform: function transform(func) {
      this.$refs.tiles.forEach(function (tile, i) {
        return func(tile, i);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/FluxGrid.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FluxGridvue_type_script_lang_js_ = (FluxGridvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FluxGrid.vue





/* normalize component */

var FluxGrid_component = normalizeComponent(
  components_FluxGridvue_type_script_lang_js_,
  FluxGridvue_type_template_id_5291172a_render,
  FluxGridvue_type_template_id_5291172a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FluxGrid = (FluxGrid_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxParallax.vue?vue&type=template&id=43b11d74&
var FluxParallaxvue_type_template_id_43b11d74_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"parallax",style:(_vm.style)},[(_vm.type === 'fixed' && !_vm.ios)?_c('div',{style:(_vm.fixedParentStyle)},[_c('div',{staticClass:"image",style:(_vm.fixedChildStyle)})]):_vm._e(),_vm._t("default")],2)}
var FluxParallaxvue_type_template_id_43b11d74_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FluxParallax.vue?vue&type=template&id=43b11d74&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__("b680");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxParallax.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FluxParallaxvue_type_script_lang_js_ = ({
  name: 'FluxParallax',
  props: {
    src: {
      type: String,
      required: true
    },

    /* eslint-disable vue/require-prop-types */
    holder: {
      default: function _default() {
        return window;
      }
    },
    type: {
      default: 'relative'
    },
    offset: {
      type: [Number, String],
      default: '100%'
    }
  },
  data: function data() {
    return {
      ios: false,
      loaded: false,
      view: {
        width: undefined,
        height: undefined
      },
      parallax: {
        top: undefined,
        width: undefined,
        height: undefined
      },
      background: {
        top: undefined,
        left: undefined,
        width: undefined,
        height: undefined
      },
      image: {
        src: undefined,
        width: undefined,
        height: undefined
      },
      style: {
        position: 'relative'
      },
      fixedParentStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        clip: 'rect(auto auto auto auto)'
      }
    };
  },
  computed: {
    parallaxSize: function parallaxSize() {
      return {
        width: this.$refs.parallax.clientWidth,
        height: this.$refs.parallax.clientHeight
      };
    },
    offsetHeight: function offsetHeight() {
      var height;

      if (/^[0-9]+px$/.test(this.offset)) {
        height = {
          px: parseFloat(this.offset),
          pct: height.px * 100 / this.background.height
        };
      } else if (/^[0-9]+%$/.test(this.offset)) {
        height = {
          px: Math.ceil(this.parallaxSize.height * parseFloat(this.offset) / 100),
          pct: parseFloat(parseFloat(this.offset))
        };
      }

      return height;
    },
    backgroundHeight: function backgroundHeight() {
      if (this.ios) return this.view.height;
      return this.parallaxSize.height + this.offsetHeight.px;
    },
    remainderHeight: function remainderHeight() {
      return this.background.height - this.backgroundHeight;
    },
    fixedChildStyle: function fixedChildStyle() {
      return {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: "url(\"".concat(this.src, "\") no-repeat center center fixed"),
        backgroundSize: "".concat(this.background.width, "px ").concat(this.background.height, "px")
      };
    },
    handle: function handle() {
      return {
        visible: this.handleVisible,
        relative: this.handleRelative,
        fixed: this.handleFixed
      };
    }
  },
  created: function created() {
    this.ios = (/iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) && !window.MSStream;
    this.setProperties();
  },
  mounted: function mounted() {
    var _this = this;

    this.setCss({
      background: "url(\"".concat(this.src, "\") no-repeat")
    });
    window.addEventListener('resize', this.resize, {
      passive: true
    });

    if (this.type !== 'fixed' || this.ios) {
      setTimeout(function () {
        _this.holder.addEventListener('scroll', _this.handleScroll, {
          passive: true
        });
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.resize);
    this.holder.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    setProperties: function setProperties() {
      var _this2 = this;

      var img = new Image();

      img.onload = function () {
        _this2.image = _objectSpread2(_objectSpread2({}, _this2.image), {}, {
          src: img.src,
          width: img.naturalWidth || img.width,
          height: img.naturalHeight || img.height
        });
        _this2.loaded = true;

        _this2.resize();
      };

      img.onerror = function () {
        console.warn("Image ".concat(_this2.src, " could not be loaded"));
      };

      img.src = this.src;
    },
    resize: function resize() {
      this.view.width = this.holder.scrollWidth || this.holder.innerWidth;
      this.view.height = this.holder.scrollHeight || this.holder.innerHeight;
      this.parallax = _objectSpread2(_objectSpread2(_objectSpread2({}, this.parallax), this.parallaxSize), {}, {
        top: this.$refs.parallax.offsetTop
      });
      var imageRatio = this.image.height / this.image.width;
      var viewRatio = this.view.height / this.view.width;

      if (imageRatio >= viewRatio && !this.ios) {
        this.background.width = this.view.width;
        this.background.height = Math.floor(this.view.width * this.image.height / this.image.width);
      } else {
        this.background.height = this.view.height;
        this.background.width = Math.floor(this.background.height * this.image.width / this.image.height);
      }

      this.setCss({
        backgroundSize: "".concat(this.background.width, "px ").concat(this.background.height, "px"),
        backgroundPosition: "center 0"
      });
      this.handleScroll();
    },
    setCss: function setCss(css) {
      this.style = _objectSpread2(_objectSpread2({}, this.style), css);
    },
    moveBackgroundByPct: function moveBackgroundByPct(pct) {
      if (this.remainderHeight > 0) pct = pct * this.offsetHeight.pct / 100 + 50 - this.offsetHeight.pct / 2;
      this.setCss({
        backgroundPositionY: pct.toFixed(2) + '%'
      });
    },
    handleScroll: function handleScroll() {
      if (this.loaded === false || !this.ios && this.type === 'fixed') return;
      var scrollTop = this.holder.scrollY || this.holder.scrollTop || this.holder.pageYOffset || 0;
      if (this.holder !== window) return this.handleRelative(scrollTop);
      if (scrollTop + this.view.height < this.parallax.top) return;
      if (scrollTop > this.parallax.top + this.parallax.height) return;
      var positionY = scrollTop - this.parallax.top + this.view.height;
      this.handle[this.type](positionY);
    },
    handleVisible: function handleVisible(positionY) {
      var pct = 0;
      if (positionY < this.parallax.height) pct = 0;else if (positionY > this.view.height) pct = 100;else pct = (positionY - this.parallax.height) * 100 / (this.view.height - this.parallax.height);
      this.moveBackgroundByPct(pct);
    },
    handleRelative: function handleRelative(positionY) {
      var pct;
      if (this.holder === window) pct = positionY * 100 / (this.view.height + this.parallax.height);else pct = positionY * 100 / (this.view.height - this.holder.clientHeight);
      this.moveBackgroundByPct(pct);
    },
    handleFixed: function handleFixed(positionY) {
      this.setCss({
        backgroundPositionY: positionY - this.view.height + 'px'
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/FluxParallax.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FluxParallaxvue_type_script_lang_js_ = (FluxParallaxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/FluxParallax.vue?vue&type=style&index=0&lang=scss&
var FluxParallaxvue_type_style_index_0_lang_scss_ = __webpack_require__("281b");

// CONCATENATED MODULE: ./src/components/FluxParallax.vue






/* normalize component */

var FluxParallax_component = normalizeComponent(
  components_FluxParallaxvue_type_script_lang_js_,
  FluxParallaxvue_type_template_id_43b11d74_render,
  FluxParallaxvue_type_template_id_43b11d74_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FluxParallax = (FluxParallax_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxTransition.vue?vue&type=template&id=63dba382&
var FluxTransitionvue_type_template_id_63dba382_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"mask",staticClass:"flux-transition",style:(_vm.style)},[(_vm.componentName)?_c(_vm.componentName,{ref:"transition",tag:"component",attrs:{"size":_vm.size,"from":_vm.from,"to":_vm.to,"current":_vm.current,"options":_vm.options,"images":_vm.images}}):_vm._e()],1)}
var FluxTransitionvue_type_template_id_63dba382_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FluxTransition.vue?vue&type=template&id=63dba382&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/fade.vue?vue&type=template&id=c41f9e40&
var fadevue_type_template_id_c41f9e40_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('flux-image',{ref:"from",attrs:{"image":_vm.from,"size":_vm.size,"css":_vm.imageCss}})}
var fadevue_type_template_id_c41f9e40_staticRenderFns = []


// CONCATENATED MODULE: ./src/transitions/fade.vue?vue&type=template&id=c41f9e40&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// CONCATENATED MODULE: ./src/mixins/BaseTransition.js


/* harmony default export */ var BaseTransition = ({
  data: function data() {
    return {
      totalDuration: 1
    };
  },
  props: {
    size: Object,
    from: {
      type: [String, Object],
      required: true
    },
    to: [String, Object],
    current: Object,
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {
    mask: function mask() {
      return this.$parent.baseStyle;
    }
  },
  created: function created() {
    Object.assign(this, {
      direction: 'next'
    }, this.options);
    var direction = this.direction;
    var setup = {
      prev: this.setupPrev,
      next: this.setupNext
    };
    setup[direction] && setup[direction]();
  },
  played: function played() {
    var direction = this.direction;
    var play = {
      prev: this.playPrev,
      next: this.playNext
    };
    play[direction] && play[direction]();
  },
  methods: {
    getDelay: function getDelay(i) {
      var direction = this.direction;
      var getDelay = {
        prev: this.getDelayPrev,
        next: this.getDelayNext
      };
      return getDelay[direction](i);
    },
    getReadyness: function getReadyness() {
      var min = 80;

      var getNumChilds = function getNumChilds(el) {
        var numChilds = el.$children.length;

        var _iterator = _createForOfIteratorHelper(el.$children),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var child = _step.value;
            numChilds += getNumChilds(child);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return numChilds;
      };

      var time = getNumChilds(this) * 3;
      return time < min ? min : time;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/fade.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//


/* harmony default export */ var fadevue_type_script_lang_js_ = ({
  name: 'TransitionFade',
  components: {
    FluxImage: FluxImage
  },
  mixins: [BaseTransition],
  data: function data() {
    return {
      totalDuration: 1200,
      easing: 'ease-in',
      imageCss: {
        zIndex: 1
      }
    };
  },
  played: function played() {
    this.$refs.from.transform({
      transition: "opacity ".concat(this.totalDuration, "ms ").concat(this.easing),
      opacity: 0
    });
  }
});
// CONCATENATED MODULE: ./src/transitions/fade.vue?vue&type=script&lang=js&
 /* harmony default export */ var transitions_fadevue_type_script_lang_js_ = (fadevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/transitions/fade.vue





/* normalize component */

var fade_component = normalizeComponent(
  transitions_fadevue_type_script_lang_js_,
  fadevue_type_template_id_c41f9e40_render,
  fadevue_type_template_id_c41f9e40_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var fade = (fade_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/kenburn.vue?vue&type=template&id=289f436c&
var kenburnvue_type_template_id_289f436c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('flux-image',{ref:"image",attrs:{"image":_vm.from,"size":_vm.size,"css":_vm.css}})}
var kenburnvue_type_template_id_289f436c_staticRenderFns = []


// CONCATENATED MODULE: ./src/transitions/kenburn.vue?vue&type=template&id=289f436c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/kenburn.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//


/* harmony default export */ var kenburnvue_type_script_lang_js_ = ({
  name: 'TransitionKenburn',
  components: {
    FluxImage: FluxImage
  },
  mixins: [BaseTransition],
  data: function data() {
    return {
      totalDuration: 1500,
      easing: 'linear',
      transform: {},
      css: {}
    };
  },
  created: function created() {
    this.transform = this.getTransform();
    this.css.transformOrigin = this.transform.originX + ' ' + this.transform.originY;
  },
  played: function played() {
    this.$refs.image.transform({
      transition: "all ".concat(this.totalDuration, "ms ").concat(this.easing),
      transform: "scale(".concat(this.transform.scale, ") translate(").concat(this.transform.translateX, ", ").concat(this.transform.translateY, ")"),
      opacity: 0
    });
  },
  methods: {
    getTransform: function getTransform() {
      var origin = Math.floor(Math.random() * 4 + 1);

      if (origin === 1) {
        return {
          scale: '1.7',
          translateX: '-35%',
          translateY: '-35%',
          originX: 'top',
          originY: 'left'
        };
      }

      if (origin === 2) {
        return {
          scale: '1.7',
          translateX: '35%',
          translateY: '-35%',
          originX: 'top',
          originY: 'right'
        };
      }

      if (origin === 3) {
        return {
          scale: '1.7',
          translateX: '-35%',
          translateY: '35%',
          originX: 'bottom',
          originY: 'left'
        };
      }

      return {
        scale: '1.7',
        translateX: '35%',
        translateY: '35%',
        originX: 'bottom',
        originY: 'right'
      };
    }
  }
});
// CONCATENATED MODULE: ./src/transitions/kenburn.vue?vue&type=script&lang=js&
 /* harmony default export */ var transitions_kenburnvue_type_script_lang_js_ = (kenburnvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/transitions/kenburn.vue





/* normalize component */

var kenburn_component = normalizeComponent(
  transitions_kenburnvue_type_script_lang_js_,
  kenburnvue_type_template_id_289f436c_render,
  kenburnvue_type_template_id_289f436c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var kenburn = (kenburn_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/swipe.vue?vue&type=template&id=06014f99&
var swipevue_type_template_id_06014f99_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('flux-wrapper',{ref:"wrapper",attrs:{"size":_vm.size,"css":_vm.wrapperCss}},[_c('flux-image',{ref:"image",attrs:{"image":_vm.from,"size":_vm.size,"css":_vm.imageCss}})],1)}
var swipevue_type_template_id_06014f99_staticRenderFns = []


// CONCATENATED MODULE: ./src/transitions/swipe.vue?vue&type=template&id=06014f99&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxWrapper.vue?vue&type=template&id=740fc428&
var FluxWrappervue_type_template_id_740fc428_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"wrapper",style:(_vm.style)},[_vm._t("default")],2)}
var FluxWrappervue_type_template_id_740fc428_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FluxWrapper.vue?vue&type=template&id=740fc428&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxWrapper.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var FluxWrappervue_type_script_lang_js_ = ({
  name: 'FluxWrapper',
  mixins: [BaseComponent],
  data: function data() {
    return {
      baseStyle: {
        overflow: 'hidden'
      }
    };
  }
});
// CONCATENATED MODULE: ./src/components/FluxWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FluxWrappervue_type_script_lang_js_ = (FluxWrappervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FluxWrapper.vue





/* normalize component */

var FluxWrapper_component = normalizeComponent(
  components_FluxWrappervue_type_script_lang_js_,
  FluxWrappervue_type_template_id_740fc428_render,
  FluxWrappervue_type_template_id_740fc428_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FluxWrapper = (FluxWrapper_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/swipe.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var swipevue_type_script_lang_js_ = ({
  name: 'TransitionSwipe',
  components: {
    FluxWrapper: FluxWrapper,
    FluxImage: FluxImage
  },
  mixins: [BaseTransition],
  data: function data() {
    return {
      totalDuration: 1400,
      easing: 'ease-in-out',
      wrapperCss: {
        position: 'absolute',
        top: 0,
        display: 'flex',
        flexWrap: 'nowrap'
      },
      imageCss: {
        flex: '0 0 auto'
      }
    };
  },
  played: function played() {
    this.$refs.wrapper.transform({
      transition: "width ".concat(this.totalDuration, "ms ").concat(this.easing),
      width: 0
    });
  },
  methods: {
    setupPrev: function setupPrev() {
      this.wrapperCss = _objectSpread2(_objectSpread2({}, this.wrapperCss), {}, {
        right: 0,
        justifyContent: 'flex-end'
      });
    },
    setupNext: function setupNext() {
      this.wrapperCss = _objectSpread2(_objectSpread2({}, this.wrapperCss), {}, {
        left: 0,
        justifyContent: 'flex-start'
      });
    }
  }
});
// CONCATENATED MODULE: ./src/transitions/swipe.vue?vue&type=script&lang=js&
 /* harmony default export */ var transitions_swipevue_type_script_lang_js_ = (swipevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/transitions/swipe.vue





/* normalize component */

var swipe_component = normalizeComponent(
  transitions_swipevue_type_script_lang_js_,
  swipevue_type_template_id_06014f99_render,
  swipevue_type_template_id_06014f99_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var swipe = (swipe_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/slide.vue?vue&type=template&id=a5391836&
var slidevue_type_template_id_a5391836_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('flux-wrapper',{ref:"wrapper",attrs:{"size":_vm.wrapperSize,"css":_vm.wrapperCss}},[_c('flux-image',{ref:"left",attrs:{"image":_vm.left,"size":_vm.size}}),_c('flux-image',{ref:"right",attrs:{"image":_vm.right,"size":_vm.size}})],1)}
var slidevue_type_template_id_a5391836_staticRenderFns = []


// CONCATENATED MODULE: ./src/transitions/slide.vue?vue&type=template&id=a5391836&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/slide.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var slidevue_type_script_lang_js_ = ({
  name: 'TransitionSlide',
  components: {
    FluxWrapper: FluxWrapper,
    FluxImage: FluxImage
  },
  mixins: [BaseTransition],
  data: function data() {
    return {
      totalDuration: 1400,
      easing: 'ease-in-out',
      left: undefined,
      right: undefined,
      wrapperSize: {},
      wrapperCss: {
        display: 'flex',
        flexWrap: 'nowrap'
      }
    };
  },
  computed: {
    transition: function transition() {
      return "transform ".concat(this.totalDuration, "ms ").concat(this.easing);
    }
  },
  created: function created() {
    this.wrapperSize = {
      width: this.size.width * 2,
      height: this.size.height
    };
  },
  methods: {
    setupPrev: function setupPrev() {
      this.left = this.to;
      this.right = this.from;
      this.wrapperCss.transform = 'translateX(-50%)';
    },
    setupNext: function setupNext() {
      this.left = this.from;
      this.right = this.to;
    },
    playPrev: function playPrev() {
      this.$refs.wrapper.transform({
        transition: this.transition,
        transform: 'translateX(0)'
      });
    },
    playNext: function playNext() {
      this.$refs.wrapper.transform({
        transition: this.transition,
        transform: 'translateX(-50%)'
      });
    }
  }
});
// CONCATENATED MODULE: ./src/transitions/slide.vue?vue&type=script&lang=js&
 /* harmony default export */ var transitions_slidevue_type_script_lang_js_ = (slidevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/transitions/slide.vue





/* normalize component */

var slide_component = normalizeComponent(
  transitions_slidevue_type_script_lang_js_,
  slidevue_type_template_id_a5391836_render,
  slidevue_type_template_id_a5391836_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var slide = (slide_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/waterfall.vue?vue&type=template&id=6c67db5d&
var waterfallvue_type_template_id_6c67db5d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('flux-grid',{ref:"grid",attrs:{"rows":_vm.rows,"cols":_vm.cols,"size":_vm.size,"image":_vm.from}})}
var waterfallvue_type_template_id_6c67db5d_staticRenderFns = []


// CONCATENATED MODULE: ./src/transitions/waterfall.vue?vue&type=template&id=6c67db5d&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/waterfall.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var waterfallvue_type_script_lang_js_ = ({
  name: 'TransitionWaterfall',
  components: {
    FluxGrid: FluxGrid
  },
  mixins: [BaseTransition],
  data: function data() {
    return {
      rows: 1,
      cols: 10,
      tileDuration: 600,
      totalDuration: 0,
      easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      tileDelay: 90
    };
  },
  created: function created() {
    this.totalDuration = this.tileDelay * this.cols + this.tileDuration;
  },
  played: function played() {
    var _this = this;

    this.$refs.grid.transform(function (tile, i) {
      tile.transform({
        transition: "all ".concat(_this.tileDuration, "ms ").concat(_this.easing, " ").concat(_this.getDelay(i), "ms"),
        opacity: '0.1',
        transform: "translateY(100%)"
      });
    });
  },
  methods: {
    getDelayPrev: function getDelayPrev(i) {
      return (this.cols - i - 1) * this.tileDelay;
    },
    getDelayNext: function getDelayNext(i) {
      return i * this.tileDelay;
    }
  }
});
// CONCATENATED MODULE: ./src/transitions/waterfall.vue?vue&type=script&lang=js&
 /* harmony default export */ var transitions_waterfallvue_type_script_lang_js_ = (waterfallvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/transitions/waterfall.vue





/* normalize component */

var waterfall_component = normalizeComponent(
  transitions_waterfallvue_type_script_lang_js_,
  waterfallvue_type_template_id_6c67db5d_render,
  waterfallvue_type_template_id_6c67db5d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var waterfall = (waterfall_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/zip.vue?vue&type=template&id=463ac8eb&
var zipvue_type_template_id_463ac8eb_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('flux-grid',{ref:"grid",attrs:{"rows":_vm.rows,"cols":_vm.cols,"size":_vm.size,"image":_vm.from}})}
var zipvue_type_template_id_463ac8eb_staticRenderFns = []


// CONCATENATED MODULE: ./src/transitions/zip.vue?vue&type=template&id=463ac8eb&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/zip.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var zipvue_type_script_lang_js_ = ({
  name: 'TransitionZip',
  components: {
    FluxGrid: FluxGrid
  },
  mixins: [BaseTransition],
  data: function data() {
    return {
      rows: 1,
      cols: 10,
      tileDuration: 600,
      totalDuration: 0,
      easing: 'ease-in',
      tileDelay: 80
    };
  },
  created: function created() {
    this.totalDuration = this.tileDelay * this.cols + this.tileDuration;
  },
  played: function played() {
    var _this = this;

    this.$refs.grid.transform(function (tile, i) {
      tile.transform({
        transition: "all ".concat(_this.tileDuration, "ms ").concat(_this.easing, " ").concat(_this.getDelay(i), "ms"),
        opacity: '0.1',
        transform: "translateY(".concat(i % 2 ? '-' : '', "100%)")
      });
    });
  },
  methods: {
    getDelayPrev: function getDelayPrev(i) {
      return (this.cols - i - 1) * this.tileDelay;
    },
    getDelayNext: function getDelayNext(i) {
      return i * this.tileDelay;
    }
  }
});
// CONCATENATED MODULE: ./src/transitions/zip.vue?vue&type=script&lang=js&
 /* harmony default export */ var transitions_zipvue_type_script_lang_js_ = (zipvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/transitions/zip.vue





/* normalize component */

var zip_component = normalizeComponent(
  transitions_zipvue_type_script_lang_js_,
  zipvue_type_template_id_463ac8eb_render,
  zipvue_type_template_id_463ac8eb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var zip = (zip_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/blinds2d.vue?vue&type=template&id=628854c0&
var blinds2dvue_type_template_id_628854c0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('flux-grid',{ref:"grid",attrs:{"rows":_vm.rows,"cols":_vm.cols,"size":_vm.size,"image":_vm.from}})}
var blinds2dvue_type_template_id_628854c0_staticRenderFns = []


// CONCATENATED MODULE: ./src/transitions/blinds2d.vue?vue&type=template&id=628854c0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/blinds2d.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var blinds2dvue_type_script_lang_js_ = ({
  name: 'TransitionBlinds2d',
  components: {
    FluxGrid: FluxGrid
  },
  mixins: [BaseTransition],
  data: function data() {
    return {
      rows: 1,
      cols: 10,
      tileDuration: 800,
      totalDuration: 0,
      easing: 'linear',
      tileDelay: 100
    };
  },
  created: function created() {
    this.totalDuration = this.tileDelay * this.cols + this.tileDuration;
  },
  played: function played() {
    var _this = this;

    this.$refs.grid.transform(function (tile, i) {
      tile.transform({
        transition: "all ".concat(_this.tileDuration, "ms ").concat(_this.easing, " ").concat(_this.getDelay(i), "ms"),
        opacity: '0.1',
        transform: 'scaleX(0)'
      });
    });
  },
  methods: {
    getDelayPrev: function getDelayPrev(i) {
      return (this.cols - i - 1) * this.tileDelay;
    },
    getDelayNext: function getDelayNext(i) {
      return i * this.tileDelay;
    }
  }
});
// CONCATENATED MODULE: ./src/transitions/blinds2d.vue?vue&type=script&lang=js&
 /* harmony default export */ var transitions_blinds2dvue_type_script_lang_js_ = (blinds2dvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/transitions/blinds2d.vue





/* normalize component */

var blinds2d_component = normalizeComponent(
  transitions_blinds2dvue_type_script_lang_js_,
  blinds2dvue_type_template_id_628854c0_render,
  blinds2dvue_type_template_id_628854c0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var blinds2d = (blinds2d_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/blocks1.vue?vue&type=template&id=1c8a3897&
var blocks1vue_type_template_id_1c8a3897_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('flux-grid',{ref:"grid",attrs:{"rows":_vm.rows,"cols":_vm.cols,"size":_vm.size,"image":_vm.from}})}
var blocks1vue_type_template_id_1c8a3897_staticRenderFns = []


// CONCATENATED MODULE: ./src/transitions/blocks1.vue?vue&type=template&id=1c8a3897&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/blocks1.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var blocks1vue_type_script_lang_js_ = ({
  name: 'TransitionBlocks1',
  components: {
    FluxGrid: FluxGrid
  },
  mixins: [BaseTransition],
  data: function data() {
    return {
      rows: 8,
      cols: 8,
      tileDuration: 300,
      totalDuration: 0,
      easing: 'linear',
      tileDelay: 1000
    };
  },
  created: function created() {
    if (!this.options.rows) {
      var divider = this.size.width / this.cols;
      this.rows = Math.floor(this.size.height / divider);
    }

    this.totalDuration = this.tileDelay + this.tileDuration;
  },
  played: function played() {
    var _this = this;

    this.$refs.grid.transform(function (tile, i) {
      tile.transform({
        transition: "all ".concat(_this.tileDuration, "ms ").concat(_this.easing, " ").concat(_this.getDelay(i), "ms"),
        opacity: '0',
        transform: 'scale(0.3, 0.3)'
      });
    });
  },
  methods: {
    getDelay: function getDelay() {
      var delay = Math.random() * this.tileDelay;
      return Math.floor(delay);
    }
  }
});
// CONCATENATED MODULE: ./src/transitions/blocks1.vue?vue&type=script&lang=js&
 /* harmony default export */ var transitions_blocks1vue_type_script_lang_js_ = (blocks1vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/transitions/blocks1.vue





/* normalize component */

var blocks1_component = normalizeComponent(
  transitions_blocks1vue_type_script_lang_js_,
  blocks1vue_type_template_id_1c8a3897_render,
  blocks1vue_type_template_id_1c8a3897_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var blocks1 = (blocks1_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/blocks2.vue?vue&type=template&id=3daf819e&
var blocks2vue_type_template_id_3daf819e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('flux-grid',{ref:"grid",attrs:{"rows":_vm.rows,"cols":_vm.cols,"size":_vm.size,"image":_vm.gridImage,"tile-css":_vm.tileCss,"css":_vm.gridCss}}),(_vm.backgroundImage)?_c('flux-image',{ref:"background",attrs:{"size":_vm.size,"image":_vm.backgroundImage,"css":_vm.backgroundCss}}):_vm._e()],1)}
var blocks2vue_type_template_id_3daf819e_staticRenderFns = []


// CONCATENATED MODULE: ./src/transitions/blocks2.vue?vue&type=template&id=3daf819e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/blocks2.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var blocks2vue_type_script_lang_js_ = ({
  name: 'TransitionBlocks2',
  components: {
    FluxGrid: FluxGrid,
    FluxImage: FluxImage
  },
  mixins: [BaseTransition],
  data: function data() {
    return {
      rows: 8,
      cols: 8,
      tileDuration: 800,
      totalDuration: 0,
      easing: 'ease',
      tileDelay: 80,
      gridImage: undefined,
      tileCss: {},
      gridCss: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 2
      },
      backgroundImage: undefined,
      backgroundCss: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1
      }
    };
  },
  created: function created() {
    if (!this.options.rows) {
      var divider = this.size.width / this.cols;
      this.rows = Math.floor(this.size.height / divider);
    }

    this.totalDuration = this.tileDelay * (this.rows + this.cols) + this.tileDuration;
  },
  methods: {
    setupPrev: function setupPrev() {
      this.gridImage = this.to;
      this.backgroundImage = this.from;
      this.tileCss = {
        opacity: 0,
        transform: 'scale(0.3)'
      };
    },
    setupNext: function setupNext() {
      this.gridImage = this.from;
    },
    playPrev: function playPrev() {
      var _this = this;

      this.$refs.grid.transform(function (tile, i) {
        tile.transform({
          transition: "all ".concat(_this.tileDuration, "ms ").concat(_this.easing, " ").concat(_this.getDelay(i, 'prev'), "ms"),
          opacity: 1,
          transform: 'scale(1)'
        });
      });
    },
    playNext: function playNext() {
      var _this2 = this;

      this.$refs.grid.transform(function (tile, i) {
        tile.transform({
          transition: "all ".concat(_this2.tileDuration, "ms ").concat(_this2.easing, " ").concat(_this2.getDelay(i, 'next'), "ms"),
          opacity: 0,
          transform: 'scale(0.3)'
        });
      });
    },
    getDelay: function getDelay(i, direction) {
      var row = this.$refs.grid.getRowNumber(i);
      var col = this.$refs.grid.getColNumber(i);
      var delay = col + row;
      if (direction === 'prev') delay = this.rows + this.cols - delay - 1;
      return delay * this.tileDelay;
    }
  }
});
// CONCATENATED MODULE: ./src/transitions/blocks2.vue?vue&type=script&lang=js&
 /* harmony default export */ var transitions_blocks2vue_type_script_lang_js_ = (blocks2vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/transitions/blocks2.vue





/* normalize component */

var blocks2_component = normalizeComponent(
  transitions_blocks2vue_type_script_lang_js_,
  blocks2vue_type_template_id_3daf819e_render,
  blocks2vue_type_template_id_3daf819e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var blocks2 = (blocks2_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/concentric.vue?vue&type=template&id=30afc47f&
var concentricvue_type_template_id_30afc47f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('flux-vortex',{ref:"vortex",attrs:{"size":_vm.size,"circles":_vm.circles,"image":_vm.from}})}
var concentricvue_type_template_id_30afc47f_staticRenderFns = []


// CONCATENATED MODULE: ./src/transitions/concentric.vue?vue&type=template&id=30afc47f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxVortex.vue?vue&type=template&id=40d6bbad&
var FluxVortexvue_type_template_id_40d6bbad_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"vortex",style:(_vm.style)},_vm._l((_vm.tiles),function(tile,index){return _c('flux-image',{key:index,ref:"tiles",refInFor:true,attrs:{"size":_vm.size,"image":_vm.img,"offset":tile.offset,"css":tile.css}})}),1)}
var FluxVortexvue_type_template_id_40d6bbad_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FluxVortex.vue?vue&type=template&id=40d6bbad&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxVortex.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var FluxVortexvue_type_script_lang_js_ = ({
  name: 'FluxVortex',
  components: {
    FluxImage: FluxImage
  },
  mixins: [BaseComponent],
  props: {
    circles: {
      type: Number,
      default: 1
    },
    tileCss: Object
  },
  data: function data() {
    return {
      baseStyle: {
        position: 'relative',
        overflow: 'hidden'
      }
    };
  },
  computed: {
    numCircles: function numCircles() {
      return Math.round(parseFloat(this.circles));
    },
    diag: function diag() {
      var _this$size = this.size,
          width = _this$size.width,
          height = _this$size.height;
      return Math.ceil(Math.sqrt(width * width + height * height));
    },
    radius: function radius() {
      return Math.ceil(this.diag / 2 / this.numCircles);
    },
    topGap: function topGap() {
      return Math.ceil(this.size.height / 2 - this.radius * this.numCircles);
    },
    leftGap: function leftGap() {
      return Math.ceil(this.size.width / 2 - this.radius * this.numCircles);
    },
    tiles: function tiles() {
      var tile;
      var tiles = [];

      for (var i = 0; i < this.numCircles; i++) {
        var size = (this.numCircles - i) * this.radius * 2;
        var gap = this.radius * i;
        tile = {
          offset: {
            top: this.topGap + gap,
            left: this.leftGap + gap
          }
        };
        tile.css = _objectSpread2(_objectSpread2({}, this.tileCss), {}, {
          position: 'absolute',
          left: tile.offset.left + 'px',
          top: tile.offset.top + 'px',
          width: size + 'px',
          height: size + 'px',
          backgroundRepeat: 'repeat',
          borderRadius: '50%',
          zIndex: i
        });
        tiles.push(tile);
      }

      return tiles;
    }
  },
  methods: {
    transform: function transform(func) {
      this.$refs.tiles.forEach(function (tile, i) {
        return func(tile, i);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/FluxVortex.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FluxVortexvue_type_script_lang_js_ = (FluxVortexvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FluxVortex.vue





/* normalize component */

var FluxVortex_component = normalizeComponent(
  components_FluxVortexvue_type_script_lang_js_,
  FluxVortexvue_type_template_id_40d6bbad_render,
  FluxVortexvue_type_template_id_40d6bbad_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FluxVortex = (FluxVortex_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/concentric.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//


/* harmony default export */ var concentricvue_type_script_lang_js_ = ({
  name: 'TransitionConcentric',
  components: {
    FluxVortex: FluxVortex
  },
  mixins: [BaseTransition],
  data: function data() {
    return {
      circles: 7,
      tileDuration: 800,
      totalDuration: 0,
      easing: 'linear',
      tileDelay: 150
    };
  },
  created: function created() {
    this.totalDuration = this.tileDelay * this.circles + this.tileDuration;
  },
  played: function played() {
    var _this = this;

    var deg = this.direction === 'next' ? '90' : '-90';
    this.$refs.vortex.transform(function (tile, i) {
      tile.transform({
        transition: "all ".concat(_this.tileDuration, "ms ").concat(_this.easing, " ").concat(_this.getDelay(i), "ms"),
        opacity: '0',
        transform: "rotateZ(".concat(deg, "deg)")
      });
    });
  },
  methods: {
    getDelay: function getDelay(i) {
      return i * this.tileDelay;
    }
  }
});
// CONCATENATED MODULE: ./src/transitions/concentric.vue?vue&type=script&lang=js&
 /* harmony default export */ var transitions_concentricvue_type_script_lang_js_ = (concentricvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/transitions/concentric.vue





/* normalize component */

var concentric_component = normalizeComponent(
  transitions_concentricvue_type_script_lang_js_,
  concentricvue_type_template_id_30afc47f_render,
  concentricvue_type_template_id_30afc47f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var concentric = (concentric_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/warp.vue?vue&type=template&id=94ad3c3e&
var warpvue_type_template_id_94ad3c3e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('flux-vortex',{ref:"vortex",attrs:{"size":_vm.size,"circles":_vm.circles,"image":_vm.from}})}
var warpvue_type_template_id_94ad3c3e_staticRenderFns = []


// CONCATENATED MODULE: ./src/transitions/warp.vue?vue&type=template&id=94ad3c3e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/warp.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//


/* harmony default export */ var warpvue_type_script_lang_js_ = ({
  name: 'TransitionWarp',
  components: {
    FluxVortex: FluxVortex
  },
  mixins: [BaseTransition],
  data: function data() {
    return {
      circles: 7,
      tileDuration: 800,
      totalDuration: 0,
      easing: 'linear',
      tileDelay: 150
    };
  },
  created: function created() {
    this.totalDuration = this.tileDelay * this.circles + this.tileDuration;
  },
  played: function played() {
    var _this = this;

    this.$refs.vortex.transform(function (tile, i) {
      tile.transform({
        transition: "all ".concat(_this.tileDuration, "ms ").concat(_this.easing, " ").concat(_this.getDelay(i), "ms"),
        opacity: '0',
        transform: "rotateZ(".concat(_this.getDeg(i), "deg)")
      });
    });
  },
  methods: {
    getDelayPrev: function getDelayPrev(i) {
      return (this.circles - i - 1) * this.tileDelay;
    },
    getDelayNext: function getDelayNext(i) {
      return i * this.tileDelay;
    },
    getDeg: function getDeg(i) {
      return i % 2 === 0 ? '-90' : '90';
    }
  }
});
// CONCATENATED MODULE: ./src/transitions/warp.vue?vue&type=script&lang=js&
 /* harmony default export */ var transitions_warpvue_type_script_lang_js_ = (warpvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/transitions/warp.vue





/* normalize component */

var warp_component = normalizeComponent(
  transitions_warpvue_type_script_lang_js_,
  warpvue_type_template_id_94ad3c3e_render,
  warpvue_type_template_id_94ad3c3e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var warp = (warp_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/camera.vue?vue&type=template&id=a5a5fd86&
var cameravue_type_template_id_a5a5fd86_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('flux-wrapper',{ref:"wrapper",attrs:{"size":_vm.wrapperSize,"css":_vm.wrapperCss}},[_c('flux-image',{ref:"image",attrs:{"image":_vm.image,"size":_vm.size,"css":_vm.imageCss}})],1)}
var cameravue_type_template_id_a5a5fd86_staticRenderFns = []


// CONCATENATED MODULE: ./src/transitions/camera.vue?vue&type=template&id=a5a5fd86&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/camera.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var cameravue_type_script_lang_js_ = ({
  name: 'TransitionCamera',
  components: {
    FluxWrapper: FluxWrapper,
    FluxImage: FluxImage
  },
  mixins: [BaseTransition],
  data: function data() {
    return {
      circles: 2,
      totalDuration: 900,
      easing: 'cubic-bezier(0.385, 0, 0.795, 0.560)',
      backgroundColor: '#111',
      image: undefined,
      diag: undefined,
      wrapperSize: {},
      wrapperCss: {
        boxSizing: 'border-box',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: '50%'
      },
      imageCss: {
        alignSelf: 'center',
        flex: 'none'
      }
    };
  },
  created: function created() {
    this.image = this.from;
    var _this$size = this.size,
        width = _this$size.width,
        height = _this$size.height;
    var diag = this.diag = Math.ceil(Math.sqrt(width * width + height * height));
    this.wrapperSize = {
      width: diag,
      height: diag
    };
    this.wrapperCss = _objectSpread2(_objectSpread2({}, this.wrapperCss), {}, {
      border: '0 solid ' + this.backgroundColor,
      top: (height - diag) / 2 + 'px',
      left: (width - diag) / 2 + 'px'
    });
  },
  played: function played() {
    var _this = this;

    this.$refs.wrapper.transform({
      transition: "all ".concat(this.totalDuration / 2 - 50, "ms ").concat(this.easing, " 0ms"),
      borderWidth: this.diag / 2 + 'px'
    });
    setTimeout(function () {
      _this.$refs.image.hide();

      _this.$refs.wrapper.transform({
        transition: "all ".concat(_this.totalDuration / 2 - 50, "ms ").concat(_this.easing, " 0ms"),
        borderWidth: 0
      });
    }, this.totalDuration / 2 + 50);
  }
});
// CONCATENATED MODULE: ./src/transitions/camera.vue?vue&type=script&lang=js&
 /* harmony default export */ var transitions_cameravue_type_script_lang_js_ = (cameravue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/transitions/camera.vue





/* normalize component */

var camera_component = normalizeComponent(
  transitions_cameravue_type_script_lang_js_,
  cameravue_type_template_id_a5a5fd86_render,
  cameravue_type_template_id_a5a5fd86_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var camera = (camera_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/cube.vue?vue&type=template&id=665bbc34&
var cubevue_type_template_id_665bbc34_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('flux-cube',{ref:"cube",attrs:{"images":_vm.images,"size":_vm.size,"depth":_vm.size.width,"css":_vm.cubeCss}})}
var cubevue_type_template_id_665bbc34_staticRenderFns = []


// CONCATENATED MODULE: ./src/transitions/cube.vue?vue&type=template&id=665bbc34&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/cube.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var cubevue_type_script_lang_js_ = ({
  name: 'TransitionCube',
  components: {
    FluxCube: FluxCube
  },
  mixins: [BaseTransition],
  data: function data() {
    return {
      totalDuration: 1400,
      easing: 'ease-out',
      images: undefined,
      cubeCss: {}
    };
  },
  created: function created() {
    Object.assign(this.mask, {
      perspective: '1600px',
      overflow: 'visible'
    });
    this.cubeCss.transition = "all ".concat(this.totalDuration, "ms ").concat(this.easing);
    this.images = {
      front: this.from,
      left: this.to,
      right: this.to
    };
  },
  played: function played() {
    if (this.current) this.current.hide();
    var sides = {
      next: 'left',
      prev: 'right'
    };
    this.$refs.cube.turn(sides[this.direction]);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.current) this.current.show();
  }
});
// CONCATENATED MODULE: ./src/transitions/cube.vue?vue&type=script&lang=js&
 /* harmony default export */ var transitions_cubevue_type_script_lang_js_ = (cubevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/transitions/cube.vue





/* normalize component */

var cube_component = normalizeComponent(
  transitions_cubevue_type_script_lang_js_,
  cubevue_type_template_id_665bbc34_render,
  cubevue_type_template_id_665bbc34_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var cube = (cube_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/book.vue?vue&type=template&id=032ee26e&
var bookvue_type_template_id_032ee26e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('flux-image',{ref:"from",attrs:{"image":_vm.from,"size":_vm.size,"view-size":_vm.viewSize,"offset":_vm.image.offset,"css":_vm.image.css}}),_c('flux-cube',{ref:"cube",attrs:{"images":_vm.cube.images,"size":_vm.size,"view-size":_vm.viewSize,"offsets":_vm.cube.offsets,"sides-css":_vm.cube.sidesCss,"css":_vm.cube.css}})],1)}
var bookvue_type_template_id_032ee26e_staticRenderFns = []


// CONCATENATED MODULE: ./src/transitions/book.vue?vue&type=template&id=032ee26e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/book.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var bookvue_type_script_lang_js_ = ({
  name: 'TransitionBook',
  components: {
    FluxCube: FluxCube,
    FluxImage: FluxImage
  },
  mixins: [BaseTransition],
  data: function data() {
    return {
      totalDuration: 1200,
      easing: 'ease-out',
      viewSize: {},
      image: {
        offset: {},
        css: {
          position: 'absolute',
          top: 0,
          left: 0
        }
      },
      cube: {
        images: {},
        offsets: {},
        css: {
          position: 'absolute',
          top: 0,
          left: 0
        }
      }
    };
  },
  computed: {
    halfWidth: function halfWidth() {
      return Math.ceil(this.size.width / 2);
    },
    halfWidthPx: function halfWidthPx() {
      return this.halfWidth + 'px';
    }
  },
  created: function created() {
    Object.assign(this.mask, {
      perspective: '1600px',
      overflow: 'visible'
    });
    this.viewSize = {
      width: Math.ceil(this.size.width / 2),
      height: this.size.height
    };
    this.cube.images = {
      front: this.from,
      back: this.to
    };
  },
  played: function played() {
    this.$refs.cube.transform({
      transition: "transform ".concat(this.totalDuration, "ms ").concat(this.easing),
      transform: "rotateY(".concat(this.getDeg(), "deg)")
    });
  },
  methods: {
    setupPrev: function setupPrev() {
      this.image.offset.left = this.halfWidth;
      this.image.css.left = this.halfWidthPx;
      this.cube.offsets.back = {
        left: this.halfWidth
      };
      this.cube.css = _objectSpread2(_objectSpread2({}, this.cube.css), {}, {
        transformOrigin: 'right center'
      });
    },
    setupNext: function setupNext() {
      this.cube.offsets.front = {
        left: this.halfWidth
      };
      this.cube.css = _objectSpread2(_objectSpread2({}, this.cube.css), {}, {
        left: this.halfWidthPx,
        transformOrigin: 'left center'
      });
    },
    getDeg: function getDeg() {
      var sides = {
        next: '-180',
        prev: '180'
      };
      return sides[this.direction];
    }
  }
});
// CONCATENATED MODULE: ./src/transitions/book.vue?vue&type=script&lang=js&
 /* harmony default export */ var transitions_bookvue_type_script_lang_js_ = (bookvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/transitions/book.vue





/* normalize component */

var book_component = normalizeComponent(
  transitions_bookvue_type_script_lang_js_,
  bookvue_type_template_id_032ee26e_render,
  bookvue_type_template_id_032ee26e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var book = (book_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/fall.vue?vue&type=template&id=1bf2ee3a&
var fallvue_type_template_id_1bf2ee3a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('flux-image',{ref:"image",style:(_vm.style),attrs:{"image":_vm.from,"size":_vm.size}})}
var fallvue_type_template_id_1bf2ee3a_staticRenderFns = []


// CONCATENATED MODULE: ./src/transitions/fall.vue?vue&type=template&id=1bf2ee3a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/fall.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//


/* harmony default export */ var fallvue_type_script_lang_js_ = ({
  name: 'TransitionFall',
  components: {
    FluxImage: FluxImage
  },
  mixins: [BaseTransition],
  data: function data() {
    return {
      totalDuration: 1600,
      easing: 'ease-in',
      style: {
        transformOrigin: 'center bottom'
      }
    };
  },
  created: function created() {
    Object.assign(this.mask, {
      perspective: '1600px',
      overflow: 'visible'
    });
  },
  played: function played() {
    this.$refs.image.transform({
      transition: "transform ".concat(this.totalDuration, "ms ").concat(this.easing),
      transform: 'rotateX(-83deg)'
    });
  }
});
// CONCATENATED MODULE: ./src/transitions/fall.vue?vue&type=script&lang=js&
 /* harmony default export */ var transitions_fallvue_type_script_lang_js_ = (fallvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/transitions/fall.vue





/* normalize component */

var fall_component = normalizeComponent(
  transitions_fallvue_type_script_lang_js_,
  fallvue_type_template_id_1bf2ee3a_render,
  fallvue_type_template_id_1bf2ee3a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var fall = (fall_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/wave.vue?vue&type=template&id=a3b0d294&
var wavevue_type_template_id_a3b0d294_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('flux-grid',{ref:"grid",attrs:{"rows":_vm.rows,"cols":_vm.cols,"size":_vm.size,"images":_vm.images,"colors":_vm.colors,"depth":_vm.size.height,"css":_vm.gridCss}})}
var wavevue_type_template_id_a3b0d294_staticRenderFns = []


// CONCATENATED MODULE: ./src/transitions/wave.vue?vue&type=template&id=a3b0d294&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/wave.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var wavevue_type_script_lang_js_ = ({
  name: 'TransitionWave',
  components: {
    FluxGrid: FluxGrid
  },
  mixins: [BaseTransition],
  data: function data() {
    return {
      rows: 1,
      cols: 8,
      tileDuration: 900,
      totalDuration: 0,
      easing: 'cubic-bezier(0.3, -0.3, 0.735, 0.285)',
      tileDelay: 110,
      sideColor: '#333',
      gridCss: {
        overflow: 'visible',
        perspective: '1200px'
      },
      images: {},
      colors: {}
    };
  },
  created: function created() {
    this.mask.overflow = 'visible';
    this.totalDuration = this.tileDelay * this.cols + this.tileDuration;
    this.images = {
      front: this.from,
      top: this.to
    };
  },
  played: function played() {
    var _this = this;

    if (this.current) this.current.hide();
    this.colors = {
      left: this.sideColor,
      right: this.sideColor
    };
    this.$refs.grid.transform(function (tile, i) {
      tile.setCss({
        transition: "all ".concat(_this.tileDuration, "ms ").concat(_this.easing, " ").concat(_this.getDelay(i), "ms")
      });
      tile.turnBottom();
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.current) this.current.show();
  },
  methods: {
    getDelayPrev: function getDelayPrev(i) {
      return (this.cols - i - 1) * this.tileDelay;
    },
    getDelayNext: function getDelayNext(i) {
      return i * this.tileDelay;
    }
  }
});
// CONCATENATED MODULE: ./src/transitions/wave.vue?vue&type=script&lang=js&
 /* harmony default export */ var transitions_wavevue_type_script_lang_js_ = (wavevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/transitions/wave.vue





/* normalize component */

var wave_component = normalizeComponent(
  transitions_wavevue_type_script_lang_js_,
  wavevue_type_template_id_a3b0d294_render,
  wavevue_type_template_id_a3b0d294_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var wave = (wave_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/blinds3d.vue?vue&type=template&id=1bfd13ec&
var blinds3dvue_type_template_id_1bfd13ec_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('flux-grid',{ref:"grid",attrs:{"rows":_vm.rows,"cols":_vm.cols,"size":_vm.size,"images":_vm.images,"css":_vm.gridCss}})}
var blinds3dvue_type_template_id_1bfd13ec_staticRenderFns = []


// CONCATENATED MODULE: ./src/transitions/blinds3d.vue?vue&type=template&id=1bfd13ec&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/blinds3d.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var blinds3dvue_type_script_lang_js_ = ({
  name: 'TransitionBlinds3d',
  components: {
    FluxGrid: FluxGrid
  },
  mixins: [BaseTransition],
  data: function data() {
    return {
      rows: 1,
      cols: 6,
      tileDuration: 800,
      totalDuration: 0,
      easing: 'ease-out',
      tileDelay: 150,
      gridCss: {
        perspective: '800px'
      },
      images: undefined
    };
  },
  created: function created() {
    this.mask.overflow = 'visible';
    this.totalDuration = this.tileDelay * this.cols + this.tileDuration;
    this.images = {
      front: this.from,
      back: this.to
    };
  },
  played: function played() {
    var _this = this;

    if (this.current) this.current.hide();
    var sides = {
      prev: 'backl',
      next: 'backr'
    };
    this.$refs.grid.transform(function (tile, i) {
      tile.setCss({
        transition: "all ".concat(_this.tileDuration, "ms ").concat(_this.easing, " ").concat(_this.getDelay(i), "ms")
      });
      tile.turn(sides[_this.direction]);
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.current) this.current.show();
  },
  methods: {
    getDelayPrev: function getDelayPrev(i) {
      return (this.cols - i - 1) * this.tileDelay;
    },
    getDelayNext: function getDelayNext(i) {
      return i * this.tileDelay;
    }
  }
});
// CONCATENATED MODULE: ./src/transitions/blinds3d.vue?vue&type=script&lang=js&
 /* harmony default export */ var transitions_blinds3dvue_type_script_lang_js_ = (blinds3dvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/transitions/blinds3d.vue





/* normalize component */

var blinds3d_component = normalizeComponent(
  transitions_blinds3dvue_type_script_lang_js_,
  blinds3dvue_type_template_id_1bfd13ec_render,
  blinds3dvue_type_template_id_1bfd13ec_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var blinds3d = (blinds3d_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/round1.vue?vue&type=template&id=7b63ad34&
var round1vue_type_template_id_7b63ad34_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('flux-grid',{ref:"grid",attrs:{"rows":_vm.rows,"cols":_vm.cols,"size":_vm.size,"images":_vm.images,"css":_vm.gridCss}})}
var round1vue_type_template_id_7b63ad34_staticRenderFns = []


// CONCATENATED MODULE: ./src/transitions/round1.vue?vue&type=template&id=7b63ad34&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/round1.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var round1vue_type_script_lang_js_ = ({
  name: 'TransitionRound1',
  components: {
    FluxGrid: FluxGrid
  },
  mixins: [BaseTransition],
  data: function data() {
    return {
      rows: 8,
      cols: 8,
      tileDuration: 800,
      totalDuration: 0,
      easing: 'ease-out',
      tileDelay: 150,
      images: undefined,
      gridCss: {
        perspective: '800px'
      }
    };
  },
  created: function created() {
    this.mask.overflow = 'visible';

    if (!this.options.rows) {
      var divider = this.size.width / this.cols;
      this.rows = Math.floor(this.size.height / divider);
    }

    var multiplier = this.rows > this.cols ? this.rows : this.cols;
    this.totalDuration = this.tileDelay * multiplier * 2;
    this.images = {
      front: this.from,
      back: this.to
    };
  },
  played: function played() {
    var _this = this;

    if (this.current) this.current.hide();
    var sides = {
      prev: 'backl',
      next: 'backr'
    };
    this.$refs.grid.transform(function (tile, i) {
      tile.setCss({
        transition: "all ".concat(_this.tileDuration, "ms ").concat(_this.easing, " ").concat(_this.getDelay(i), "ms")
      });
      tile.turn(sides[_this.direction]);
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.current) this.current.show();
  },
  methods: {
    getDelay: function getDelay(i) {
      var grid = this.$refs.grid;
      var row = grid.getRowNumber(i);
      var col = grid.getColNumber(i);
      var delay = col + row;
      if (this.direction === 'prev') delay = this.rows + this.cols - delay - 1;
      return delay * this.tileDelay;
    }
  }
});
// CONCATENATED MODULE: ./src/transitions/round1.vue?vue&type=script&lang=js&
 /* harmony default export */ var transitions_round1vue_type_script_lang_js_ = (round1vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/transitions/round1.vue





/* normalize component */

var round1_component = normalizeComponent(
  transitions_round1vue_type_script_lang_js_,
  round1vue_type_template_id_7b63ad34_render,
  round1vue_type_template_id_7b63ad34_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var round1 = (round1_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/round2.vue?vue&type=template&id=c28a0cc6&
var round2vue_type_template_id_c28a0cc6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('flux-grid',{ref:"grid",attrs:{"rows":_vm.rows,"cols":_vm.cols,"size":_vm.size,"depth":0,"image":_vm.from,"css":_vm.gridCss,"tile-css":_vm.tileCss}})}
var round2vue_type_template_id_c28a0cc6_staticRenderFns = []


// CONCATENATED MODULE: ./src/transitions/round2.vue?vue&type=template&id=c28a0cc6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/round2.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var round2vue_type_script_lang_js_ = ({
  name: 'TransitionRound2',
  components: {
    FluxGrid: FluxGrid
  },
  mixins: [BaseTransition],
  data: function data() {
    return {
      rows: 9,
      cols: 9,
      tileDuration: 800,
      totalDuration: 0,
      rotateX: '-540',
      easing: 'linear',
      tileDelay: 100,
      gridCss: {
        perspective: '1200px'
      },
      tileCss: {
        backfaceVisibility: 'hidden'
      }
    };
  },
  created: function created() {
    this.mask.overflow = 'visible';

    if (!this.options.rows) {
      var divider = this.size.width / this.cols;
      this.rows = Math.floor(this.size.height / divider);
    }

    this.totalDuration = (this.cols / 2 + this.rows) * (this.tileDelay * 2);
  },
  played: function played() {
    var _this = this;

    this.$refs.grid.transform(function (tile, i) {
      tile.transform({
        transition: "all ".concat(_this.tileDuration, "ms ").concat(_this.easing, " ").concat(_this.getDelay(i), "ms"),
        opacity: '0',
        transform: "rotateY(".concat(_this.rotateX, "deg)")
      });
    });
  },
  methods: {
    getDelay: function getDelay(i) {
      var grid = this.$refs.grid;
      var row = grid.getRowNumber(i);
      var col = grid.getColNumber(i);
      var rowDelay, colDelay;

      if (this.direction === 'prev') {
        rowDelay = Math.abs(this.rows / 2 - 0.5 - row);
        colDelay = Math.abs(this.cols - col);
      } else {
        rowDelay = Math.abs(this.rows / 2 - 0.5 - row);
        colDelay = Math.abs(col);
      }

      var delay = rowDelay + colDelay - 1;
      return delay * this.tileDelay;
    }
  }
});
// CONCATENATED MODULE: ./src/transitions/round2.vue?vue&type=script&lang=js&
 /* harmony default export */ var transitions_round2vue_type_script_lang_js_ = (round2vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/transitions/round2.vue





/* normalize component */

var round2_component = normalizeComponent(
  transitions_round2vue_type_script_lang_js_,
  round2vue_type_template_id_c28a0cc6_render,
  round2vue_type_template_id_c28a0cc6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var round2 = (round2_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/explode.vue?vue&type=template&id=494733cf&
var explodevue_type_template_id_494733cf_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('flux-grid',{ref:"grid",attrs:{"rows":_vm.rows,"cols":_vm.cols,"size":_vm.size,"image":_vm.from,"css":_vm.cssGrid}})}
var explodevue_type_template_id_494733cf_staticRenderFns = []


// CONCATENATED MODULE: ./src/transitions/explode.vue?vue&type=template&id=494733cf&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/transitions/explode.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var explodevue_type_script_lang_js_ = ({
  name: 'TransitionExplode',
  components: {
    FluxGrid: FluxGrid
  },
  mixins: [BaseTransition],
  data: function data() {
    return {
      rows: 9,
      cols: 9,
      tileDuration: 300,
      totalDuration: 0,
      easing: 'linear',
      tileDelay: 100,
      cssGrid: {
        overflow: 'visible'
      }
    };
  },
  created: function created() {
    this.mask.overflow = 'visible';

    if (!this.options.rows) {
      var divider = this.size.width / this.cols;
      this.rows = Math.floor(this.size.height / divider);
    }

    this.totalDuration = (this.cols / 2 + this.rows / 2) * (this.tileDelay * 2);
  },
  played: function played() {
    var _this = this;

    this.$refs.grid.transform(function (tile, i) {
      tile.transform({
        transition: "all ".concat(_this.tileDuration, "ms ").concat(_this.easing, " ").concat(_this.getDelay(i), "ms"),
        borderRadius: '100%',
        opacity: '0',
        transform: 'scale(1.6, 1.6)'
      });
    });
  },
  methods: {
    getDelay: function getDelay(i) {
      var grid = this.$refs.grid;
      var row = grid.getRowNumber(i);
      var col = grid.getColNumber(i);
      var rowDelay = Math.abs(this.rows / 2 - 0.5 - row);
      var colDelay = Math.abs(this.cols / 2 - 0.5 - col);
      var delay = rowDelay + colDelay - 1;
      return delay * this.tileDelay;
    }
  }
});
// CONCATENATED MODULE: ./src/transitions/explode.vue?vue&type=script&lang=js&
 /* harmony default export */ var transitions_explodevue_type_script_lang_js_ = (explodevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/transitions/explode.vue





/* normalize component */

var explode_component = normalizeComponent(
  transitions_explodevue_type_script_lang_js_,
  explodevue_type_template_id_494733cf_render,
  explodevue_type_template_id_494733cf_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var explode = (explode_component.exports);
// CONCATENATED MODULE: ./src/transitions/index.js




















// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxTransition.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var FluxTransitionvue_type_script_lang_js_ = ({
  name: 'FluxTransition',
  components: _objectSpread2({}, transitions_namespaceObject),
  props: {
    size: {
      type: Object,
      required: true
    },
    transition: {
      type: [String, Object],
      required: true
    },
    from: {
      type: [String, Object],
      required: true
    },
    to: {
      type: [String, Object],
      required: true
    },
    current: Object,
    options: Object,
    images: Array
  },
  data: function data() {
    return {
      baseStyle: {
        overflow: 'hidden',
        perspective: 'none',
        zIndex: 3
      }
    };
  },
  computed: {
    style: function style() {
      var _this$size = this.size,
          width = _this$size.width,
          height = _this$size.height;
      return _objectSpread2(_objectSpread2({}, this.baseStyle), {}, {
        width: width + 'px',
        height: height + 'px'
      });
    },
    componentName: function componentName() {
      if (this.transition.component) {
        if (this.transition.name) return this.transition.name;
        var vfURL = 'https://ragnarlotus.github.com/vue-flux-docs/documentation-6/Components/VueFlux';
        throw new ReferenceError("Transition undefined, check ".concat(vfURL));
      }

      var name = this.transition.name || this.transition;
      name = 'Transition' + name[0].toUpperCase() + name.slice(1);

      if (name in transitions_namespaceObject === false) {
        name = this.transition.name || this.transition;
        throw new ReferenceError("Transition ".concat(name, " does not exist"));
      }

      return name;
    }
  },
  created: function created() {
    if (this.transition.component) this.$options.components[this.componentName] = this.transition.component;
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      _this.$emit('ready');
    }, this.$refs.transition.getReadyness());
  },
  methods: {
    start: function start() {
      var _this2 = this;

      this.$refs.transition.$options.played.call(this.$refs.transition);
      this.$emit('start', {
        transition: this.transition,
        from: this.from,
        to: this.to,
        options: this.options
      });
      setTimeout(function () {
        _this2.end();
      }, this.getDuration());
    },
    end: function end() {
      this.$emit('end', {
        transition: this.transition,
        from: this.from,
        to: this.to,
        options: this.options
      });
    },
    getDuration: function getDuration() {
      if (!this.$refs.transition) return 1;
      return this.$refs.transition.totalDuration;
    }
  }
});
// CONCATENATED MODULE: ./src/components/FluxTransition.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FluxTransitionvue_type_script_lang_js_ = (FluxTransitionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/FluxTransition.vue?vue&type=style&index=0&lang=scss&
var FluxTransitionvue_type_style_index_0_lang_scss_ = __webpack_require__("e671");

// CONCATENATED MODULE: ./src/components/FluxTransition.vue






/* normalize component */

var FluxTransition_component = normalizeComponent(
  components_FluxTransitionvue_type_script_lang_js_,
  FluxTransitionvue_type_template_id_63dba382_render,
  FluxTransitionvue_type_template_id_63dba382_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FluxTransition = (FluxTransition_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VueFlux.vue?vue&type=template&id=91489c50&
var VueFluxvue_type_template_id_91489c50_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"container",staticClass:"vue-flux",style:(_vm.style),on:{"mousemove":function($event){return _vm.toggleMouseOver(true)},"mouseleave":function($event){return _vm.toggleMouseOver(false)},"dblclick":function($event){return _vm.Display.toggleFullScreen()},"touchstart":function($event){return _vm.Touches.start($event)},"touchend":function($event){return _vm.Touches.end($event)}}},[(_vm.Transitions.current)?_c('flux-transition',{ref:"transition",attrs:{"transition":_vm.Transitions.current,"size":_vm.size,"from":_vm.Transitions.from,"to":_vm.Transitions.to,"current":_vm.$refs.image,"options":_vm.Transitions.current.options,"images":_vm.Images.imgs},on:{"ready":function($event){return _vm.Transitions.ready()},"start":function($event){return _vm.Transitions.start()},"end":function($event){return _vm.Transitions.end()}}}):_vm._e(),(_vm.Images.current)?_c('flux-image',{ref:"image",attrs:{"size":_vm.size,"image":_vm.Images.current}}):_vm._e(),(_vm.size)?_c('div',{staticClass:"complements"},[_vm._t("preloader"),_vm._t("caption"),_c('div',{staticClass:"remainder upper"}),_vm._t("controls"),_c('div',{staticClass:"remainder lower"}),_vm._t("index"),(_vm.loaded)?_vm._t("pagination"):_vm._e(),_vm._t("description")],2):_vm._e()],1)}
var VueFluxvue_type_template_id_91489c50_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VueFlux.vue?vue&type=template&id=91489c50&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js







function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("7db0");

// CONCATENATED MODULE: ./src/controllers/Display.js






var Display_DisplayController = /*#__PURE__*/function () {
  function DisplayController(vf) {
    _classCallCheck(this, DisplayController);

    this.vf = vf;
  }

  _createClass(DisplayController, [{
    key: "toggleFullScreen",
    value: function toggleFullScreen() {
      this.inFullScreen ? this.exitFullScreen() : this.enterFullScreen();
    }
  }, {
    key: "enterFullScreen",
    value: function () {
      var _enterFullScreen = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var vf, methods, element;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                vf = this.vf;

                if (this.vf.config.allowFullscreen) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                methods = ['requestFullscreen', 'mozRequestFullScreen', 'webkitRequestFullscreen', 'msRequestFullscreen'];
                element = vf.$refs.container;
                methods.find(function (method) {
                  return method in element ? element[method]() || true : false;
                });
                vf.$emit('fullscreen-enter');

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function enterFullScreen() {
        return _enterFullScreen.apply(this, arguments);
      }

      return enterFullScreen;
    }()
  }, {
    key: "exitFullScreen",
    value: function () {
      var _exitFullScreen = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var vf, methods;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                vf = this.vf;
                methods = ['exitFullscreen', 'mozCancelFullScreen', 'webkitExitFullscreen', 'msExitFullscreen'];
                methods.find(function (method) {
                  return method in document ? document[method]() || true : false;
                });
                vf.$emit('fullscreen-exit');

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function exitFullScreen() {
        return _exitFullScreen.apply(this, arguments);
      }

      return exitFullScreen;
    }()
  }, {
    key: "inFullScreen",
    get: function get() {
      var props = ['fullscreenElement', 'webkitFullscreenElement', 'mozFullScreenElement', 'msFullscreenElement'];
      return !!document[props.find(function (prop) {
        return prop in document;
      })];
    }
  }]);

  return DisplayController;
}();


// CONCATENATED MODULE: ./src/controllers/Timers.js






var Timers_TimersController = /*#__PURE__*/function () {
  function TimersController() {
    _classCallCheck(this, TimersController);

    this.timers = {};
  }

  _createClass(TimersController, [{
    key: "set",
    value: function set(timer, time, cb) {
      this.clear(timer);
      this.timers[timer] = setTimeout(cb, time);
    }
  }, {
    key: "clear",
    value: function clear(timer) {
      var _this = this;

      var timers = timer ? [timer] : Object.keys(this.timers);
      timers.forEach(function (timer) {
        clearTimeout(_this.timers[timer]);
        _this.timers[timer] = undefined;
      });
    }
  }]);

  return TimersController;
}();


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// CONCATENATED MODULE: ./src/controllers/Transitions.js







var Transitions_TransitionsController = /*#__PURE__*/function () {
  function TransitionsController(vf) {
    _classCallCheck(this, TransitionsController);

    this.vf = vf;
    this.reset(true);
  }

  _createClass(TransitionsController, [{
    key: "reset",
    value: function reset() {
      var hard = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (hard) {
        this.last = undefined;
        this.transitions = [];
      }

      this.current = undefined;
      this.from = undefined;
      this.to = undefined;
    }
  }, {
    key: "update",
    value: function update(transitions) {
      this.reset(true);
      this.transitions = transitions.map(function (transition, i) {
        return {
          index: i,
          name: transition.name || transition,
          options: transition.options || {}
        };
      });
      this.last = this.transitions[this.transitions.length - 1];
      this.vf.$emit('transitions-updated');
    }
  }, {
    key: "run",
    value: function run(transition, from, to, direction) {
      this.vf.Timers.clear('transition');

      if (transition) {
        var name = transition.name || transition;
        var found = this.transitions.find(function (each) {
          return each.name === name;
        });
        if (!found) throw new ReferenceError("Transition ".concat(transition, " not found"));
        var options = transition.options || undefined;
        transition = JSON.parse(JSON.stringify(found));

        if (options) {
          Object.assign(transition.options, options);
        }
      } else {
        transition = JSON.parse(JSON.stringify(this.next));
      }

      if (!transition.options.direction) {
        if (!direction) direction = from.index < to.index ? 'next' : 'prev';
        transition.options.direction = direction;
      }

      this.from = from;
      this.to = to;
      this.current = transition;
    }
  }, {
    key: "ready",
    value: function ready() {
      this.vf.$refs.transition.start();
    }
  }, {
    key: "start",
    value: function start() {
      this.vf.Images.current = this.to;
      this.vf.$emit('transition-start', {
        transition: this.current,
        from: this.from,
        to: this.to
      });
    }
  }, {
    key: "end",
    value: function end() {
      var _this = this;

      var cancel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var vf = this.vf;
      this.last = this.current;
      this.reset();
      vf.$nextTick(function () {
        vf.Images.last = vf.Images.current;

        if (!vf.config.infinite && vf.Images.next.index === 0) {
          vf.stop();
          return;
        }

        if (vf.config.autoplay) {
          vf.Timers.set('transition', vf.config.delay, function () {
            vf.show();
          });
        }

        vf.$emit(cancel ? 'transition-cancel' : 'transition-end', {
          transition: _this.current,
          from: _this.from,
          to: _this.to
        });
      });
    }
  }, {
    key: "current",
    get: function get() {
      return this.$current;
    },
    set: function set(transition) {
      if (this.current) this.last = this.current;
      this.$current = transition;
    }
  }, {
    key: "next",
    get: function get() {
      var index = this.last.index + 1;
      if (index >= this.transitions.length) index = 0;
      return this.transitions[index];
    }
  }]);

  return TransitionsController;
}();


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.finally.js
var es_promise_finally = __webpack_require__("a79d");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js








function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// CONCATENATED MODULE: ./src/controllers/Images.js














var Images_ImagesController = /*#__PURE__*/function () {
  function ImagesController(vf) {
    _classCallCheck(this, ImagesController);

    _defineProperty(this, "$current", void 0);

    _defineProperty(this, "$last", void 0);

    this.vf = vf;
    this.reset(true);
  }

  _createClass(ImagesController, [{
    key: "reset",
    value: function reset() {
      var hard = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (hard) this.$last = undefined;
      this.srcs = [];
      this.imgs = [];
      this.loading = [];
      this.loaded = {
        current: 0,
        success: 0,
        error: 0,
        total: 0
      };
      this.progress = 0;
      this.toPreload = 0;
      this.toLazyload = 0;
      this.preloading = false;
      this.lazyloading = false;
      this.$current = undefined;
    }
  }, {
    key: "update",
    value: function update(srcs) {
      this.reset();
      this.srcs = _toConsumableArray(srcs);
      var config = this.vf.config;
      this.toPreload = config.lazyLoad ? config.lazyLoadAfter : this.srcs.length;

      if (this.toPreload >= this.srcs.length) {
        this.toPreload = this.srcs.length;
      } else {
        this.toLazyload = this.srcs.length - this.toPreload;
      }

      this.preloadStart();
    }
  }, {
    key: "preloadStart",
    value: function preloadStart() {
      var _this = this;

      var vf = this.vf,
          loaded = this.loaded;
      this.preloading = true;
      vf.$emit('images-preload-start');
      var toLoad = this.toPreload - loaded.success;
      this.loading = this.srcs.slice(loaded.total, loaded.total + toLoad);
      this.loaded.current = 0;
      this.loading.forEach(function (src, i) {
        return _this.addImg(src, i, loaded.total);
      });
    }
  }, {
    key: "preloadEnd",
    value: function preloadEnd() {
      var vf = this.vf;
      this.addLoadedSuccessfully();
      if (this.loaded.success < this.toPreload && this.loaded.total < this.toPreload) return this.preloadStart();
      this.updateIndexes();
      this.preloading = false;
      vf.$emit('images-preload-end');
      if (this.loaded.total < this.srcs.length) this.lazyLoadStart();
      vf.init();
    }
  }, {
    key: "lazyLoadStart",
    value: function lazyLoadStart() {
      var _this2 = this;

      var vf = this.vf,
          loaded = this.loaded;
      this.lazyloading = true;
      vf.$emit('images-lazy-load-start');
      this.loading = this.srcs.slice(loaded.total);
      this.loaded.current = 0;
      this.loading.forEach(function (src, i) {
        return _this2.addImg(src, i, loaded.total);
      });
    }
  }, {
    key: "lazyLoadEnd",
    value: function lazyLoadEnd() {
      this.addLoadedSuccessfully();
      this.updateIndexes();
      this.lazyloading = false;
      this.vf.$emit('images-lazy-load-end');
    }
  }, {
    key: "addImg",
    value: function addImg(src, i, totalLoaded) {
      var _this3 = this;

      var config = this.vf.config;
      var img = this.loading[i] = new Img_Img(config.path + src, i + totalLoaded);
      return img.load().then(function () {
        _this3.loadSuccess(img);
      }).catch(function (error) {
        _this3.loadError(error);
      }).finally(function () {
        _this3.loaded.current++;
        _this3.loaded.total++;
        if (_this3.preloading) _this3.updateProgress();
        if (_this3.loaded.current === _this3.loading.length) _this3.preloading ? _this3.preloadEnd() : _this3.lazyLoadEnd();
      });
    }
  }, {
    key: "loadSuccess",
    value: function loadSuccess() {
      this.loaded.success++;

      if (this.preloading && !this.current) {
        var _iterator = _createForOfIteratorHelper(this.loading),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var img = _step.value;
            if (img.status === 'error') continue;
            if (img.status === 'loaded') this.current = img;
            break;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  }, {
    key: "loadError",
    value: function loadError(error) {
      this.loaded.error++; // eslint-disable-next-line

      console.warn(error);
    }
  }, {
    key: "updateProgress",
    value: function updateProgress() {
      this.progress = Math.ceil(this.loaded.success * 100 / this.toPreload) || 0;
    }
  }, {
    key: "addLoadedSuccessfully",
    value: function addLoadedSuccessfully() {
      var _this$imgs;

      var loaded = this.loading.filter(function (img) {
        return img.status === 'loaded';
      });

      (_this$imgs = this.imgs).push.apply(_this$imgs, _toConsumableArray(loaded));

      this.loading = [];
      this.loaded.current = 0;
    }
  }, {
    key: "updateIndexes",
    value: function updateIndexes() {
      this.imgs.forEach(function (img, i) {
        return img.index = i;
      });
    }
  }, {
    key: "getByIndex",
    value: function getByIndex(index) {
      if (index === 'next') return this.next;
      if (index === 'prev') return this.prev;
      if (!this.imgs[index]) throw new ReferenceError("Image ".concat(index, " not found"));
      return this.imgs[index];
    }
  }, {
    key: "prev",
    get: function get() {
      var index = this.$current.index - 1;
      if (index < 0) index = this.imgs.length - 1;
      return this.imgs[index];
    }
  }, {
    key: "last",
    get: function get() {
      return this.$last;
    },
    set: function set(image) {
      this.$last = image;
    }
  }, {
    key: "current",
    get: function get() {
      return this.$current;
    },
    set: function set(image) {
      if (this.$current) this.last = this.$current;
      this.$current = image;
    }
  }, {
    key: "next",
    get: function get() {
      var index = this.$current.index + 1;
      if (index >= this.imgs.length) index = 0;
      return this.imgs[index];
    }
  }]);

  return ImagesController;
}();


// CONCATENATED MODULE: ./src/controllers/Touches.js



var Touches_TouchesController = /*#__PURE__*/function () {
  function TouchesController(vf) {
    _classCallCheck(this, TouchesController);

    this.vf = vf;
    this.startX = 0;
    this.startY = 0;
    this.startTime = 0;
    this.endTime = 0;
    this.prevTouchTime = 0; // Max distance in pixels from start until end

    this.tapThreshold = 5; // Max time in ms from first to second tap

    this.doubleTapThreshold = 200; // Distance in percentage to trigger slide

    this.slideTrigger = 0.3;
  }

  _createClass(TouchesController, [{
    key: "start",
    value: function start(event) {
      if (!this.vf.config.enableGestures) return;
      this.startTime = Date.now();
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    }
  }, {
    key: "end",
    value: function end(event) {
      var vf = this.vf;
      this.prevTouchTime = this.endTime;
      this.endTime = Date.now();
      var offsetX = event.changedTouches[0].clientX - this.startX;
      var offsetY = event.changedTouches[0].clientY - this.startY;

      if (this.tap(offsetX, offsetY)) {
        vf.toggleMouseOver(true);
        return;
      }

      if (!vf.config.enableGestures) return;
      if (this.slideRight(offsetX)) vf.show('prev');else if (this.slideLeft(offsetX)) vf.show('next');
    }
  }, {
    key: "tap",
    value: function tap(offsetX, offsetY) {
      return Math.abs(offsetX) < this.tapThreshold && Math.abs(offsetY) < this.tapThreshold;
    }
  }, {
    key: "doubleTap",
    value: function doubleTap() {
      return this.endTime - this.prevTouchTime < this.doubleTapThreshold;
    }
  }, {
    key: "slideLeft",
    value: function slideLeft(offsetX) {
      return offsetX < 0 && offsetX < -(this.vf.size.width * this.slideTrigger);
    }
  }, {
    key: "slideRight",
    value: function slideRight(offsetX) {
      return offsetX > 0 && offsetX > this.vf.size.width * this.slideTrigger;
    }
  }, {
    key: "slideUp",
    value: function slideUp(offsetY) {
      return offsetY < 0 && offsetY < -(this.vf.size.height * this.slideTrigger);
    }
  }, {
    key: "slideDown",
    value: function slideDown(offsetY) {
      return offsetY > 0 && offsetY > this.vf.size.height * this.slideTrigger;
    }
  }]);

  return TouchesController;
}();


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VueFlux.vue?vue&type=script&lang=js&







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Libraries
 // Controllers





 // Components



/* harmony default export */ var VueFluxvue_type_script_lang_js_ = ({
  name: 'VueFlux',
  components: {
    FluxImage: FluxImage,
    FluxTransition: FluxTransition
  },
  props: {
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    transitions: {
      type: Array,
      required: true
    },
    images: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    captions: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      config: {
        allowFullscreen: false,
        allowToSkipTransition: true,
        aspectRatio: '16:9',
        autohideTime: 2500,
        autoplay: false,
        bindKeys: false,
        delay: 5000,
        enableGestures: false,
        infinite: true,
        lazyLoad: true,
        lazyLoadAfter: 3,
        path: ''
      },
      size: undefined,
      loaded: false,
      mouseOver: false,
      Display: undefined,
      Timers: undefined,
      Transitions: undefined,
      Touches: undefined,
      Images: undefined
    };
  },
  computed: {
    style: function style() {
      if (!this.size) return {};

      if (this.Display.inFullScreen) {
        return {
          width: '100% !important',
          height: '100% !important'
        };
      }

      var _this$size = this.size,
          width = _this$size.width,
          height = _this$size.height;
      return {
        width: width ? width + 'px' : 'auto',
        height: height ? height + 'px' : 'auto'
      };
    }
  },
  watch: {
    options: {
      handler: function handler() {
        this.updateOptions();
      },
      deep: true
    },
    transitions: function transitions() {
      var wasPlaying = this.config.autoplay;
      this.stop(true);
      this.Transitions.update(this.transitions);
      wasPlaying && this.play();
    },
    images: function images() {
      var wasPlaying = this.config.autoplay;
      this.stop(true);
      this.loaded = false;
      this.Images.update(this.images);
      wasPlaying && this.play();
    }
  },
  created: function created() {
    this.Display = new Display_DisplayController(this);
    this.Timers = new Timers_TimersController(this);
    this.Images = new Images_ImagesController(this);
    this.Touches = new Touches_TouchesController(this);
    this.Transitions = new Transitions_TransitionsController(this);
    this.updateOptions();
    this.$emit('created');
  },
  mounted: function mounted() {
    this.resize();
    this.Images.update(this.images);
    this.Transitions.update(this.transitions);
    this.$emit('mounted');
  },
  beforeDestroy: function beforeDestroy() {
    this.removeListeners();
    this.Timers.clear();
    this.$emit('destroyed');
  },
  methods: {
    updateOptions: function updateOptions() {
      Object.assign(this.config, this.options);
      if (this.config.autohideTime === 0) this.mouseOver = true;
      this.removeListeners();
      window.addEventListener('resize', this.resize, {
        passive: true
      });

      if (this.config.bindKeys) {
        window.addEventListener('keydown', this.keydown, {
          passive: true
        });
      }

      this.$emit('options-updated');
    },
    resize: function resize() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var size, _this$config$aspectRa, _this$config$aspectRa2, arWidth, arHeight;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.$refs.container) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                if (_this.Transitions.current) _this.Transitions.end(true);
                _this.size = undefined;
                _context.next = 6;
                return _this.$nextTick();

              case 6:
                size = Dom_Dom.sizeFrom(_this.$refs.container);

                if (!size.height) {
                  _this$config$aspectRa = _this.config.aspectRatio.split(':'), _this$config$aspectRa2 = _slicedToArray(_this$config$aspectRa, 2), arWidth = _this$config$aspectRa2[0], arHeight = _this$config$aspectRa2[1];
                  size.height = size.width / arWidth * arHeight;
                }

                _this.size = size;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    init: function init() {
      this.loaded = true;
      if (this.config.autoplay === true) this.play();
      this.$emit('ready');
    },
    toggleMouseOver: function toggleMouseOver(over) {
      var _this2 = this;

      if (this.config.autohideTime === 0) return;
      this.Timers.clear('mouseOver');
      this.mouseOver = over;

      if (this.mouseOver) {
        this.Timers.set('mouseOver', this.config.autohideTime, function () {
          _this2.mouseOver = false;
        });
      } else {
        this.mouseOver = false;
        this.Timers.clear('mouseOver');
      }
    },
    toggleFullScreen: function toggleFullScreen() {
      this.Display.toggleFullScreen();
    },
    play: function play() {
      var _this3 = this;

      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'next';
      var delay = arguments.length > 1 ? arguments[1] : undefined;
      this.config.autoplay = true;

      if (!this.Transitions.current) {
        this.Timers.set('transition', delay || this.config.delay, function () {
          _this3.show(index);
        });
      }

      this.$emit('play', {
        index: index
      });
    },
    stop: function stop(cancelTransition) {
      this.config.autoplay = false;
      this.Timers.clear('transition');
      if (this.Transitions.current && cancelTransition) this.Transitions.end(true);
      this.$emit('stop');
    },
    show: function show() {
      var _this4 = this;

      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'next';
      var transition = arguments.length > 1 ? arguments[1] : undefined;
      if (!this.loaded || !this.$refs.image) return;

      if (this.Transitions.current) {
        if (this.config.allowToSkipTransition) {
          this.Transitions.end(true);
          this.$nextTick(function () {
            _this4.show(index, transition);
          });
        }

        return;
      }

      var from = this.Images.current;
      var to = this.Images.getByIndex(index);
      var direction = ['prev', 'next'].includes(index) ? index : undefined;
      this.Transitions.run(transition, from, to, direction);
      this.$emit('show', {
        transition: transition,
        from: from,
        to: to,
        direction: direction
      });
    },
    keydown: function keydown(event) {
      if (/ArrowLeft|Left/.test(event.key)) this.show('prev');else if (/ArrowRight|Right/.test(event.key)) this.show('next');
    },
    removeListeners: function removeListeners() {
      window.removeEventListener('resize', this.resize);
      window.removeEventListener('keydown', this.keydown);
    }
  }
});
// CONCATENATED MODULE: ./src/components/VueFlux.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VueFluxvue_type_script_lang_js_ = (VueFluxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/VueFlux.vue?vue&type=style&index=0&lang=scss&
var VueFluxvue_type_style_index_0_lang_scss_ = __webpack_require__("1d36");

// CONCATENATED MODULE: ./src/components/VueFlux.vue






/* normalize component */

var VueFlux_component = normalizeComponent(
  components_VueFluxvue_type_script_lang_js_,
  VueFluxvue_type_template_id_91489c50_render,
  VueFluxvue_type_template_id_91489c50_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VueFlux = (VueFlux_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/complements/FluxCaption.vue?vue&type=template&id=fd3a995a&
var FluxCaptionvue_type_template_id_fd3a995a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.caption)?_c('div',{class:_vm.htmlClass},[_vm._t("default",[_vm._v(" "+_vm._s(_vm.getCaptionText())+" ")],{"caption":_vm.caption,"text":_vm.getCaptionText()})],2):_vm._e()}
var FluxCaptionvue_type_template_id_fd3a995a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/complements/FluxCaption.vue?vue&type=template&id=fd3a995a&

// CONCATENATED MODULE: ./src/mixins/BaseComplement.js

/* harmony default export */ var BaseComplement = ({
  props: {
    slider: Object
  },
  computed: {
    vf: function vf() {
      if (this.slider) return this.slider;
      if (this.$parent.$options.name === 'VueFlux') return this.$parent;
      throw new ReferenceError('slider not referenced, check https://ragnarlotus.github.com/vue-flux-docs/ for help');
    },
    captions: function captions() {
      return this.vf && this.vf.captions ? this.vf.captions : {};
    },
    Transitions: function Transitions() {
      return this.vf.Transitions;
    },
    Images: function Images() {
      return this.vf.Images;
    }
  },
  methods: {
    getCaption: function getCaption(index) {
      if (index === undefined) index = this.Images.current ? this.Images.current.initIndex : '';
      return this.captions[index] || '';
    },
    getCaptionText: function getCaptionText(index) {
      var caption = this.getCaption(index);
      return caption.text || caption || '';
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/complements/FluxCaption.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var FluxCaptionvue_type_script_lang_js_ = ({
  name: 'FluxCaption',
  mixins: [BaseComplement],
  computed: {
    caption: function caption() {
      if (!this.vf) return '';
      if (!this.vf.loaded) return '';
      return this.getCaption();
    },
    htmlClass: function htmlClass() {
      var css = ['flux-caption'];
      if (!this.Transitions.current) css.push('visible');
      return css;
    }
  }
});
// CONCATENATED MODULE: ./src/components/complements/FluxCaption.vue?vue&type=script&lang=js&
 /* harmony default export */ var complements_FluxCaptionvue_type_script_lang_js_ = (FluxCaptionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/complements/FluxCaption.vue?vue&type=style&index=0&lang=scss&
var FluxCaptionvue_type_style_index_0_lang_scss_ = __webpack_require__("87af");

// CONCATENATED MODULE: ./src/components/complements/FluxCaption.vue






/* normalize component */

var FluxCaption_component = normalizeComponent(
  complements_FluxCaptionvue_type_script_lang_js_,
  FluxCaptionvue_type_template_id_fd3a995a_render,
  FluxCaptionvue_type_template_id_fd3a995a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FluxCaption = (FluxCaption_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/complements/FluxControls.vue?vue&type=template&id=ccbbd11a&
var FluxControlsvue_type_template_id_ccbbd11a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[(_vm.display)?_c('div',{staticClass:"flux-controls"},[_c('flux-button',{staticClass:"prev top left",on:{"click":function($event){return _vm.vf.show('prev')}}},[_c('polyline',{attrs:{"points":"64,18 22,50 64,82"}})]),(!_vm.vf.config.autoplay)?_c('flux-button',{staticClass:"play",on:{"click":function($event){return _vm.vf.play('next', 1)}}},[_c('polygon',{attrs:{"points":"32,12 82,50 32,88"}})]):_vm._e(),(_vm.vf.config.autoplay)?_c('flux-button',{staticClass:"pause",on:{"click":function($event){return _vm.vf.stop()}}},[_c('line',{attrs:{"x1":"32","y1":"22","x2":"32","y2":"78"}}),_c('line',{attrs:{"x1":"68","y1":"22","x2":"68","y2":"78"}})]):_vm._e(),_c('flux-button',{staticClass:"next top right",on:{"click":function($event){return _vm.vf.show('next')}}},[_c('polyline',{attrs:{"points":"36,18 78,50 36,82"}})])],1):_vm._e()])}
var FluxControlsvue_type_template_id_ccbbd11a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/complements/FluxControls.vue?vue&type=template&id=ccbbd11a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/complements/FluxControls.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var FluxControlsvue_type_script_lang_js_ = ({
  name: 'FluxControls',
  components: {
    FluxButton: FluxButton
  },
  mixins: [BaseComplement],
  computed: {
    display: function display() {
      if (!this.vf) return false;
      if (!this.vf.loaded) return false;
      if (!this.vf.mouseOver) return false;
      return true;
    }
  }
});
// CONCATENATED MODULE: ./src/components/complements/FluxControls.vue?vue&type=script&lang=js&
 /* harmony default export */ var complements_FluxControlsvue_type_script_lang_js_ = (FluxControlsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/complements/FluxControls.vue?vue&type=style&index=0&lang=scss&
var FluxControlsvue_type_style_index_0_lang_scss_ = __webpack_require__("f83b");

// CONCATENATED MODULE: ./src/components/complements/FluxControls.vue






/* normalize component */

var FluxControls_component = normalizeComponent(
  complements_FluxControlsvue_type_script_lang_js_,
  FluxControlsvue_type_template_id_ccbbd11a_render,
  FluxControlsvue_type_template_id_ccbbd11a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FluxControls = (FluxControls_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/complements/FluxIndex.vue?vue&type=template&id=aa10287e&
var FluxIndexvue_type_template_id_aa10287e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.display)?_c('div',{staticClass:"flux-index"},[_c('transition',{attrs:{"name":"fade"}},[(_vm.displayButton)?_c('flux-button',{staticClass:"toggle bottom left",on:{"click":function($event){return _vm.showIndex($event)}}},_vm._l((_vm.coords),function(coord,i){return _c('rect',{key:i,attrs:{"x":coord.x,"y":coord.y,"width":_vm.buttonRectSize +'px',"height":_vm.buttonRectSize +'px'}})}),0):_vm._e()],1),_c('nav',{class:_vm.listClass,on:{"click":function($event){return _vm.hideIndex()}}},[_c('ul',{ref:"index"},_vm._l((_vm.images),function(image,i){return _c('li',{key:i,class:_vm.thumbClass(i),on:{"click":function($event){return _vm.showImage(i)}}},[_c('flux-image',{ref:"thumbs",refInFor:true,attrs:{"image":_vm.images[i],"size":_vm.thumbSize,"title":_vm.getCaptionText(image.initIndex)}})],1)}),0)])],1):_vm._e()}
var FluxIndexvue_type_template_id_aa10287e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/complements/FluxIndex.vue?vue&type=template&id=aa10287e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/complements/FluxIndex.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var FluxIndexvue_type_script_lang_js_ = ({
  name: 'FluxIndex',
  components: {
    FluxButton: FluxButton,
    FluxImage: FluxImage
  },
  mixins: [BaseComplement],
  props: {
    buttonRows: {
      type: Number,
      default: 3
    },
    buttonCols: {
      type: Number,
      default: 3
    },
    buttonRectSize: {
      type: Number,
      default: 12
    },
    buttonPadding: {
      type: Number,
      default: 6
    }
  },
  data: function data() {
    return {
      visible: false,
      rectSize: 14,
      delay: 500,
      coords: []
    };
  },
  computed: {
    images: function images() {
      if (!this.vf) return [];
      return this.Images.imgs;
    },
    display: function display() {
      return this.vf && this.vf.loaded;
    },
    displayButton: function displayButton() {
      return this.vf.mouseOver;
    },
    listClass: function listClass() {
      var listClass = '';
      if (this.visible) listClass += 'visible';
      if (this.vf.mouseOver) listClass += ' mouse-over';
      return listClass;
    },
    thumbSize: function thumbSize() {
      var _this$vf$size = this.vf.size,
          width = _this$vf$size.width,
          height = _this$vf$size.height;
      width = width / 4.2;
      height = height / 4.2;

      if (width > 160) {
        var _this$vf$config$aspec = this.vf.config.aspectRatio.split(':'),
            _this$vf$config$aspec2 = _slicedToArray(_this$vf$config$aspec, 2),
            arWidth = _this$vf$config$aspec2[0],
            arHeight = _this$vf$config$aspec2[1];

        width = 160;
        height = width * arHeight / arWidth;
      }

      return {
        width: width,
        height: height
      };
    }
  },
  created: function created() {
    var rowsGap = (100 - this.buttonPadding * 2 - this.rectSize * this.buttonRows) / (this.buttonRows + 1);
    var colsGap = (100 - this.buttonPadding * 2 - this.rectSize * this.buttonCols) / (this.buttonCols + 1);

    for (var r = 0; r < this.buttonRows; r++) {
      for (var c = 0; c < this.buttonCols; c++) {
        this.coords.push({
          x: this.buttonPadding + rowsGap + rowsGap * r + this.rectSize * r,
          y: this.buttonPadding + colsGap + colsGap * c + this.rectSize * c
        });
      }
    }
  },
  methods: {
    showIndex: function showIndex() {
      this.vf.stop();
      this.visible = true;
      var index = this.$refs.index;
      this.$nextTick(function () {
        index.clientHeight;
        index.style.marginTop = 0;
      });
    },
    hideIndex: function hideIndex(imageIndex) {
      var _this = this;

      var index = this.$refs.index;
      index.clientHeight;
      index.style.marginTop = '100%';
      setTimeout(function () {
        _this.visible = false;
        if (imageIndex !== undefined) _this.showImage(imageIndex);
      }, this.delay);
    },
    thumbClass: function thumbClass(imageIndex) {
      return this.Images.current && this.Images.current.index === imageIndex ? 'current' : '';
    },
    showImage: function showImage(imageIndex) {
      if (this.visible) {
        this.hideIndex(imageIndex);
        return;
      }

      if (this.Images.current.index !== imageIndex) this.vf.show(imageIndex);
    }
  }
});
// CONCATENATED MODULE: ./src/components/complements/FluxIndex.vue?vue&type=script&lang=js&
 /* harmony default export */ var complements_FluxIndexvue_type_script_lang_js_ = (FluxIndexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/complements/FluxIndex.vue?vue&type=style&index=0&lang=scss&
var FluxIndexvue_type_style_index_0_lang_scss_ = __webpack_require__("5a88");

// CONCATENATED MODULE: ./src/components/complements/FluxIndex.vue






/* normalize component */

var FluxIndex_component = normalizeComponent(
  complements_FluxIndexvue_type_script_lang_js_,
  FluxIndexvue_type_template_id_aa10287e_render,
  FluxIndexvue_type_template_id_aa10287e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FluxIndex = (FluxIndex_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/complements/FluxPagination.vue?vue&type=template&id=08a63c70&
var FluxPaginationvue_type_template_id_08a63c70_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.display)?_c('nav',{staticClass:"flux-pagination"},[_c('ul',_vm._l((_vm.Images.imgs),function(img,index){return _c('li',{key:index},[_vm._t("default",[_c('span',{staticClass:"pagination-item",class:_vm.getClass(index),attrs:{"title":_vm.getCaptionText(img.initIndex)},on:{"click":function($event){return _vm.show(index)}}})],{"item":_vm.getItem(img, index)})],2)}),0)]):_vm._e()}
var FluxPaginationvue_type_template_id_08a63c70_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/complements/FluxPagination.vue?vue&type=template&id=08a63c70&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/complements/FluxPagination.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var FluxPaginationvue_type_script_lang_js_ = ({
  name: 'FluxPagination',
  mixins: [BaseComplement],
  computed: {
    display: function display() {
      if (!this.vf) return false;
      return true;
    }
  },
  methods: {
    getItem: function getItem(img, index) {
      return {
        index: index,
        title: this.getCaptionText(img.initIndex),
        onClick: this.show,
        active: this.getClass(index) === 'active'
      };
    },
    getClass: function getClass(i) {
      if (this.Transitions.current !== undefined && this.Transitions.from.index === i) return 'active';
      if (!this.Images.current) return '';
      if (this.Transitions.current === undefined && this.Images.current.index === i) return 'active';
      return '';
    },
    show: function show(index, event) {
      this.vf.show(index);
      if (event) event.preventDefault();
    }
  }
});
// CONCATENATED MODULE: ./src/components/complements/FluxPagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var complements_FluxPaginationvue_type_script_lang_js_ = (FluxPaginationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/complements/FluxPagination.vue?vue&type=style&index=0&lang=scss&
var FluxPaginationvue_type_style_index_0_lang_scss_ = __webpack_require__("6fc2");

// CONCATENATED MODULE: ./src/components/complements/FluxPagination.vue






/* normalize component */

var FluxPagination_component = normalizeComponent(
  complements_FluxPaginationvue_type_script_lang_js_,
  FluxPaginationvue_type_template_id_08a63c70_render,
  FluxPaginationvue_type_template_id_08a63c70_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FluxPagination = (FluxPagination_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abee057e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/complements/FluxPreloader.vue?vue&type=template&id=178d9fef&
var FluxPreloadervue_type_template_id_178d9fef_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"preloader"},[_vm._t("spinner",[(_vm.displaySpinner)?_c('div',{staticClass:"spinner"},[_c('div',{staticClass:"pct"},[_vm._v(" "+_vm._s(_vm.Images.progress)+"% ")]),_c('div',{staticClass:"border"})]):_vm._e()])],2)}
var FluxPreloadervue_type_template_id_178d9fef_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/complements/FluxPreloader.vue?vue&type=template&id=178d9fef&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/complements/FluxPreloader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var FluxPreloadervue_type_script_lang_js_ = ({
  name: 'FluxPreloader',
  mixins: [BaseComplement],
  props: {
    spinner: {
      type: Boolean,
      default: true
    },
    transition: {
      type: Object,
      default: undefined
    }
  },
  data: function data() {
    return {
      transitionName: undefined,
      imageCss: {
        zIndex: 13
      }
    };
  },
  computed: {
    displaySpinner: function displaySpinner() {
      return this.spinner && this.vf.Images.preloading;
    }
  },
  watch: {
    'vf.images': function vfImages() {
      var Images = this.Images,
          Transitions = this.Transitions;
      if (Images.last && !Transitions.current) Images.current = Images.last;
    },
    'vf.Images.preloading': function vfImagesPreloading(preloading) {
      var Images = this.Images;
      if (!Images.last || preloading) return;
      if (Images.current === Images.last) this.transitionStart();
    }
  },
  methods: {
    transitionStart: function transitionStart() {
      var Images = this.Images,
          Transitions = this.Transitions;
      if (Transitions.current) Transitions.end(true);
      Transitions.run(this.transition, Images.current, Images.imgs[0], 'next');
    }
  }
});
// CONCATENATED MODULE: ./src/components/complements/FluxPreloader.vue?vue&type=script&lang=js&
 /* harmony default export */ var complements_FluxPreloadervue_type_script_lang_js_ = (FluxPreloadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/complements/FluxPreloader.vue?vue&type=style&index=0&lang=scss&
var FluxPreloadervue_type_style_index_0_lang_scss_ = __webpack_require__("1dec");

// CONCATENATED MODULE: ./src/components/complements/FluxPreloader.vue






/* normalize component */

var FluxPreloader_component = normalizeComponent(
  complements_FluxPreloadervue_type_script_lang_js_,
  FluxPreloadervue_type_template_id_178d9fef_render,
  FluxPreloadervue_type_template_id_178d9fef_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FluxPreloader = (FluxPreloader_component.exports);
// CONCATENATED MODULE: ./src/components/index.js
// Components








 // Complements





 // Mixins




// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");
var toIndexedObject = __webpack_require__("fc6a");
var createProperty = __webpack_require__("8418");
var wellKnownSymbol = __webpack_require__("b622");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
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

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbc":
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

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "fea9":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global.Promise;


/***/ })

/******/ });
});
//# sourceMappingURL=vue-flux.umd.js.map