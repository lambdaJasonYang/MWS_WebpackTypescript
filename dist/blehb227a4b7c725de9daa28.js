/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@yomguithereal/helpers/extend.js":
/*!*******************************************************!*\
  !*** ./node_modules/@yomguithereal/helpers/extend.js ***!
  \*******************************************************/
/***/ ((module) => {

/**
 * Extend function
 * ================
 *
 * Function used to push a bunch of values into an array at once.
 *
 * Its strategy is to mutate target array's length then setting the new indices
 * to be the values to add.
 *
 * A benchmark proved that it is faster than the following strategies:
 *   1) `array.push.apply(array, values)`.
 *   2) A loop of pushes.
 *   3) `array = array.concat(values)`, obviously.
 *
 * Intuitively, this is correct because when adding a lot of elements, the
 * chosen strategies does not need to handle the `arguments` object to
 * execute #.apply's variadicity and because the array know its final length
 * at the beginning, avoiding potential multiple reallocations of the underlying
 * contiguous array. Some engines may be able to optimize the loop of push
 * operations but empirically they don't seem to do so.
 */

/**
 * Extends the target array with the given values.
 *
 * @param  {array} array  - Target array.
 * @param  {array} values - Values to add.
 */
module.exports = function extend(array, values) {
  var l2 = values.length;

  if (l2 === 0)
    return;

  var l1 = array.length;

  array.length += l2;

  for (var i = 0; i < l2; i++)
    array[l1 + i] = values[i];
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1 {\n  font: 100% Helvetica, sans-serif;\n  color: rgb(68, 184, 41);\n}\n\nbody {\n  font: 200% Helvetica, sans-serif;\n  color: rgb(68, 184, 41);\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAGA;EACE,gCAAA;EACA,uBAJc;AAEhB;;AAKA;EACE,gCAAA;EACA,uBATc;AAOhB","sourcesContent":["$font-stack: Helvetica, sans-serif;\n$primary-color: rgb(68, 184, 41);\n\nh1 {\n  font: 100% $font-stack;\n  color: $primary-color;\n}\n\nbody {\n  font: 200% $font-stack;\n  color: $primary-color;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ ((module) => {

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
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ "./node_modules/graphology-utils/is-graph.js":
/*!***************************************************!*\
  !*** ./node_modules/graphology-utils/is-graph.js ***!
  \***************************************************/
/***/ ((module) => {

/**
 * Graphology isGraph
 * ===================
 *
 * Very simple function aiming at ensuring the given variable is a
 * graphology instance.
 */

/**
 * Checking the value is a graphology instance.
 *
 * @param  {any}     value - Target value.
 * @return {boolean}
 */
module.exports = function isGraph(value) {
  return (
    value !== null &&
    typeof value === 'object' &&
    typeof value.addUndirectedEdgeWithKey === 'function' &&
    typeof value.dropNode === 'function' &&
    typeof value.multi === 'boolean'
  );
};


/***/ }),

/***/ "./node_modules/graphology/dist/graphology.umd.min.js":
/*!************************************************************!*\
  !*** ./node_modules/graphology/dist/graphology.umd.min.js ***!
  \************************************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,r(t,e)}function n(t){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}function r(t,e){return r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(t,e)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function o(t,e,n){return o=i()?Reflect.construct:function(t,e,n){var i=[null];i.push.apply(i,e);var o=new(Function.bind.apply(t,i));return n&&r(o,n.prototype),o},o.apply(null,arguments)}function a(t){var e="function"==typeof Map?new Map:void 0;return a=function(t){if(null===t||(i=t,-1===Function.toString.call(i).indexOf("[native code]")))return t;var i;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,a)}function a(){return o(t,arguments,n(this).constructor)}return a.prototype=Object.create(t.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),r(a,t)},a(t)}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var c=function(){for(var t=arguments[0],e=1,n=arguments.length;e<n;e++)if(arguments[e])for(var r in arguments[e])t[r]=arguments[e][r];return t};function s(t,e,n,r){var i=t._nodes.get(e),o=null;return i?o="mixed"===r?i.out&&i.out[n]||i.undirected&&i.undirected[n]:"directed"===r?i.out&&i.out[n]:i.undirected&&i.undirected[n]:o}function d(e){return null!==e&&"object"===t(e)&&"function"==typeof e.addUndirectedEdgeWithKey&&"function"==typeof e.dropNode}function h(e){return"object"===t(e)&&null!==e&&e.constructor===Object}function p(t){var e;for(e in t)return!1;return!0}function f(t,e,n){Object.defineProperty(t,e,{enumerable:!1,configurable:!1,writable:!0,value:n})}function l(t,e,n){var r={enumerable:!0,configurable:!0};"function"==typeof n?r.get=n:(r.value=n,r.writable=!1),Object.defineProperty(t,e,r)}function g(t){return!!h(t)&&!(t.attributes&&!Array.isArray(t.attributes))}"function"==typeof Object.assign&&(c=Object.assign);var y,w={exports:{}},v="object"==typeof Reflect?Reflect:null,b=v&&"function"==typeof v.apply?v.apply:function(t,e,n){return Function.prototype.apply.call(t,e,n)};y=v&&"function"==typeof v.ownKeys?v.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var m=Number.isNaN||function(t){return t!=t};function k(){k.init.call(this)}w.exports=k,w.exports.once=function(t,e){return new Promise((function(n,r){function i(n){t.removeListener(e,o),r(n)}function o(){"function"==typeof t.removeListener&&t.removeListener("error",i),n([].slice.call(arguments))}N(t,e,o,{once:!0}),"error"!==e&&function(t,e,n){"function"==typeof t.on&&N(t,"error",e,n)}(t,i,{once:!0})}))},k.EventEmitter=k,k.prototype._events=void 0,k.prototype._eventsCount=0,k.prototype._maxListeners=void 0;var _=10;function G(t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}function x(t){return void 0===t._maxListeners?k.defaultMaxListeners:t._maxListeners}function E(t,e,n,r){var i,o,a,u;if(G(n),void 0===(o=t._events)?(o=t._events=Object.create(null),t._eventsCount=0):(void 0!==o.newListener&&(t.emit("newListener",e,n.listener?n.listener:n),o=t._events),a=o[e]),void 0===a)a=o[e]=n,++t._eventsCount;else if("function"==typeof a?a=o[e]=r?[n,a]:[a,n]:r?a.unshift(n):a.push(n),(i=x(t))>0&&a.length>i&&!a.warned){a.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=t,c.type=e,c.count=a.length,u=c,console&&console.warn&&console.warn(u)}return t}function A(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function S(t,e,n){var r={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},i=A.bind(r);return i.listener=n,r.wrapFn=i,i}function D(t,e,n){var r=t._events;if(void 0===r)return[];var i=r[e];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}(i):U(i,i.length)}function L(t){var e=this._events;if(void 0!==e){var n=e[t];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function U(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t[r];return n}function N(t,e,n,r){if("function"==typeof t.on)r.once?t.once(e,n):t.on(e,n);else{if("function"!=typeof t.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t);t.addEventListener(e,(function i(o){r.once&&t.removeEventListener(e,i),n(o)}))}}function j(t){if("function"!=typeof t)throw new Error("obliterator/iterator: expecting a function!");this.next=t}Object.defineProperty(k,"defaultMaxListeners",{enumerable:!0,get:function(){return _},set:function(t){if("number"!=typeof t||t<0||m(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");_=t}}),k.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},k.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||m(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},k.prototype.getMaxListeners=function(){return x(this)},k.prototype.emit=function(t){for(var e=[],n=1;n<arguments.length;n++)e.push(arguments[n]);var r="error"===t,i=this._events;if(void 0!==i)r=r&&void 0===i.error;else if(!r)return!1;if(r){var o;if(e.length>0&&(o=e[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var u=i[t];if(void 0===u)return!1;if("function"==typeof u)b(u,this,e);else{var c=u.length,s=U(u,c);for(n=0;n<c;++n)b(s[n],this,e)}return!0},k.prototype.addListener=function(t,e){return E(this,t,e,!1)},k.prototype.on=k.prototype.addListener,k.prototype.prependListener=function(t,e){return E(this,t,e,!0)},k.prototype.once=function(t,e){return G(e),this.on(t,S(this,t,e)),this},k.prototype.prependOnceListener=function(t,e){return G(e),this.prependListener(t,S(this,t,e)),this},k.prototype.removeListener=function(t,e){var n,r,i,o,a;if(G(e),void 0===(r=this._events))return this;if(void 0===(n=r[t]))return this;if(n===e||n.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete r[t],r.removeListener&&this.emit("removeListener",t,n.listener||e));else if("function"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===e||n[o].listener===e){a=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(n,i),1===n.length&&(r[t]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",t,a||e)}return this},k.prototype.off=k.prototype.removeListener,k.prototype.removeAllListeners=function(t){var e,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[t]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=n[t]))this.removeListener(t,e);else if(void 0!==e)for(r=e.length-1;r>=0;r--)this.removeListener(t,e[r]);return this},k.prototype.listeners=function(t){return D(this,t,!0)},k.prototype.rawListeners=function(t){return D(this,t,!1)},k.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):L.call(t,e)},k.prototype.listenerCount=L,k.prototype.eventNames=function(){return this._eventsCount>0?y(this._events):[]},"undefined"!=typeof Symbol&&(j.prototype[Symbol.iterator]=function(){return this}),j.of=function(){var t=arguments,e=t.length,n=0;return new j((function(){return n>=e?{done:!0}:{done:!1,value:t[n++]}}))},j.empty=function(){return new j((function(){return{done:!0}}))},j.fromSequence=function(t){var e=0,n=t.length;return new j((function(){return e>=n?{done:!0}:{done:!1,value:t[e++]}}))},j.is=function(t){return t instanceof j||"object"==typeof t&&null!==t&&"function"==typeof t.next};var O=j,C={};C.ARRAY_BUFFER_SUPPORT="undefined"!=typeof ArrayBuffer,C.SYMBOL_SUPPORT="undefined"!=typeof Symbol;var z=O,M=C,W=M.ARRAY_BUFFER_SUPPORT,P=M.SYMBOL_SUPPORT;var R=function(t){var e=function(t){return"string"==typeof t||Array.isArray(t)||W&&ArrayBuffer.isView(t)?z.fromSequence(t):"object"!=typeof t||null===t?null:P&&"function"==typeof t[Symbol.iterator]?t[Symbol.iterator]():"function"==typeof t.next?t:null}(t);if(!e)throw new Error("obliterator: target is not iterable nor a valid iterator.");return e},K=R,T=function(t,e){for(var n,r=arguments.length>1?e:1/0,i=r!==1/0?new Array(r):[],o=0,a=K(t);;){if(o===r)return i;if((n=a.next()).done)return o!==e&&(i.length=o),i;i[o++]=n.value}},B=function(t){function n(e){var n;return(n=t.call(this)||this).name="GraphError",n.message=e,n}return e(n,t),n}(a(Error)),F=function(t){function n(e){var r;return(r=t.call(this,e)||this).name="InvalidArgumentsGraphError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(u(r),n.prototype.constructor),r}return e(n,t),n}(B),I=function(t){function n(e){var r;return(r=t.call(this,e)||this).name="NotFoundGraphError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(u(r),n.prototype.constructor),r}return e(n,t),n}(B),Y=function(t){function n(e){var r;return(r=t.call(this,e)||this).name="UsageGraphError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(u(r),n.prototype.constructor),r}return e(n,t),n}(B);function q(t,e){this.key=t,this.attributes=e,this.clear()}function J(t,e){this.key=t,this.attributes=e,this.clear()}function V(t,e){this.key=t,this.attributes=e,this.clear()}function H(t,e,n,r,i){this.key=e,this.attributes=i,this.undirected=t,this.source=n,this.target=r}q.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.undirectedDegree=0,this.in={},this.out={},this.undirected={}},J.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.in={},this.out={}},V.prototype.clear=function(){this.undirectedDegree=0,this.undirected={}},H.prototype.attach=function(){var t="out",e="in";this.undirected&&(t=e="undirected");var n=this.source.key,r=this.target.key;this.source[t][r]=this,this.undirected&&n===r||(this.target[e][n]=this)},H.prototype.attachMulti=function(){var t="out",e="in",n=this.source.key,r=this.target.key;this.undirected&&(t=e="undirected");var i=this.source[t],o=i[r];if(void 0===o)return i[r]=this,void(this.undirected&&n===r||(this.target[e][n]=this));o.previous=this,this.next=o,i[r]=this,this.target[e][n]=this},H.prototype.detach=function(){var t=this.source.key,e=this.target.key,n="out",r="in";this.undirected&&(n=r="undirected"),delete this.source[n][e],delete this.target[r][t]},H.prototype.detachMulti=function(){var t=this.source.key,e=this.target.key,n="out",r="in";this.undirected&&(n=r="undirected"),void 0===this.previous?void 0===this.next?(delete this.source[n][e],delete this.target[r][t]):(this.next.previous=void 0,this.source[n][e]=this.next,this.target[r][t]=this.next):(this.previous.next=this.next,void 0!==this.next&&(this.next.previous=this.previous))};function Q(t,e,n,r,i,o,a){var u,c,s,d;if(r=""+r,0===n){if(!(u=t._nodes.get(r)))throw new I("Graph.".concat(e,': could not find the "').concat(r,'" node in the graph.'));s=i,d=o}else if(3===n){if(i=""+i,!(c=t._edges.get(i)))throw new I("Graph.".concat(e,': could not find the "').concat(i,'" edge in the graph.'));var h=c.source.key,p=c.target.key;if(r===h)u=c.target;else{if(r!==p)throw new I("Graph.".concat(e,': the "').concat(r,'" node is not attached to the "').concat(i,'" edge (').concat(h,", ").concat(p,")."));u=c.source}s=o,d=a}else{if(!(c=t._edges.get(r)))throw new I("Graph.".concat(e,': could not find the "').concat(r,'" edge in the graph.'));u=1===n?c.source:c.target,s=i,d=o}return[u,s,d]}var X=[{name:function(t){return"get".concat(t,"Attribute")},attacher:function(t,e,n){t.prototype[e]=function(t,r,i){var o=Q(this,e,n,t,r,i),a=o[0],u=o[1];return a.attributes[u]}}},{name:function(t){return"get".concat(t,"Attributes")},attacher:function(t,e,n){t.prototype[e]=function(t,r){return Q(this,e,n,t,r)[0].attributes}}},{name:function(t){return"has".concat(t,"Attribute")},attacher:function(t,e,n){t.prototype[e]=function(t,r,i){var o=Q(this,e,n,t,r,i),a=o[0],u=o[1];return a.attributes.hasOwnProperty(u)}}},{name:function(t){return"set".concat(t,"Attribute")},attacher:function(t,e,n){t.prototype[e]=function(t,r,i,o){var a=Q(this,e,n,t,r,i,o),u=a[0],c=a[1],s=a[2];return u.attributes[c]=s,this.emit("nodeAttributesUpdated",{key:u.key,type:"set",attributes:u.attributes,name:c}),this}}},{name:function(t){return"update".concat(t,"Attribute")},attacher:function(t,e,n){t.prototype[e]=function(t,r,i,o){var a=Q(this,e,n,t,r,i,o),u=a[0],c=a[1],s=a[2];if("function"!=typeof s)throw new F("Graph.".concat(e,": updater should be a function."));var d=u.attributes,h=s(d[c]);return d[c]=h,this.emit("nodeAttributesUpdated",{key:u.key,type:"set",attributes:u.attributes,name:c}),this}}},{name:function(t){return"remove".concat(t,"Attribute")},attacher:function(t,e,n){t.prototype[e]=function(t,r,i){var o=Q(this,e,n,t,r,i),a=o[0],u=o[1];return delete a.attributes[u],this.emit("nodeAttributesUpdated",{key:a.key,type:"remove",attributes:a.attributes,name:u}),this}}},{name:function(t){return"replace".concat(t,"Attributes")},attacher:function(t,e,n){t.prototype[e]=function(t,r,i){var o=Q(this,e,n,t,r,i),a=o[0],u=o[1];if(!h(u))throw new F("Graph.".concat(e,": provided attributes are not a plain object."));return a.attributes=u,this.emit("nodeAttributesUpdated",{key:a.key,type:"replace",attributes:a.attributes}),this}}},{name:function(t){return"merge".concat(t,"Attributes")},attacher:function(t,e,n){t.prototype[e]=function(t,r,i){var o=Q(this,e,n,t,r,i),a=o[0],u=o[1];if(!h(u))throw new F("Graph.".concat(e,": provided attributes are not a plain object."));return c(a.attributes,u),this.emit("nodeAttributesUpdated",{key:a.key,type:"merge",attributes:a.attributes,data:u}),this}}},{name:function(t){return"update".concat(t,"Attributes")},attacher:function(t,e,n){t.prototype[e]=function(t,r,i){var o=Q(this,e,n,t,r,i),a=o[0],u=o[1];if("function"!=typeof u)throw new F("Graph.".concat(e,": provided updater is not a function."));return a.attributes=u(a.attributes),this.emit("nodeAttributesUpdated",{key:a.key,type:"update",attributes:a.attributes}),this}}}];var Z=[{name:function(t){return"get".concat(t,"Attribute")},attacher:function(t,e,n){t.prototype[e]=function(t,r){var i;if("mixed"!==this.type&&"mixed"!==n&&n!==this.type)throw new Y("Graph.".concat(e,": cannot find this type of edges in your ").concat(this.type," graph."));if(arguments.length>2){if(this.multi)throw new Y("Graph.".concat(e,": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));var o=""+t,a=""+r;if(r=arguments[2],!(i=s(this,o,a,n)))throw new I("Graph.".concat(e,': could not find an edge for the given path ("').concat(o,'" - "').concat(a,'").'))}else{if("mixed"!==n)throw new Y("Graph.".concat(e,": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));if(t=""+t,!(i=this._edges.get(t)))throw new I("Graph.".concat(e,': could not find the "').concat(t,'" edge in the graph.'))}return i.attributes[r]}}},{name:function(t){return"get".concat(t,"Attributes")},attacher:function(t,e,n){t.prototype[e]=function(t){var r;if("mixed"!==this.type&&"mixed"!==n&&n!==this.type)throw new Y("Graph.".concat(e,": cannot find this type of edges in your ").concat(this.type," graph."));if(arguments.length>1){if(this.multi)throw new Y("Graph.".concat(e,": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));var i=""+t,o=""+arguments[1];if(!(r=s(this,i,o,n)))throw new I("Graph.".concat(e,': could not find an edge for the given path ("').concat(i,'" - "').concat(o,'").'))}else{if("mixed"!==n)throw new Y("Graph.".concat(e,": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));if(t=""+t,!(r=this._edges.get(t)))throw new I("Graph.".concat(e,': could not find the "').concat(t,'" edge in the graph.'))}return r.attributes}}},{name:function(t){return"has".concat(t,"Attribute")},attacher:function(t,e,n){t.prototype[e]=function(t,r){var i;if("mixed"!==this.type&&"mixed"!==n&&n!==this.type)throw new Y("Graph.".concat(e,": cannot find this type of edges in your ").concat(this.type," graph."));if(arguments.length>2){if(this.multi)throw new Y("Graph.".concat(e,": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));var o=""+t,a=""+r;if(r=arguments[2],!(i=s(this,o,a,n)))throw new I("Graph.".concat(e,': could not find an edge for the given path ("').concat(o,'" - "').concat(a,'").'))}else{if("mixed"!==n)throw new Y("Graph.".concat(e,": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));if(t=""+t,!(i=this._edges.get(t)))throw new I("Graph.".concat(e,': could not find the "').concat(t,'" edge in the graph.'))}return i.attributes.hasOwnProperty(r)}}},{name:function(t){return"set".concat(t,"Attribute")},attacher:function(t,e,n){t.prototype[e]=function(t,r,i){var o;if("mixed"!==this.type&&"mixed"!==n&&n!==this.type)throw new Y("Graph.".concat(e,": cannot find this type of edges in your ").concat(this.type," graph."));if(arguments.length>3){if(this.multi)throw new Y("Graph.".concat(e,": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));var a=""+t,u=""+r;if(r=arguments[2],i=arguments[3],!(o=s(this,a,u,n)))throw new I("Graph.".concat(e,': could not find an edge for the given path ("').concat(a,'" - "').concat(u,'").'))}else{if("mixed"!==n)throw new Y("Graph.".concat(e,": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));if(t=""+t,!(o=this._edges.get(t)))throw new I("Graph.".concat(e,': could not find the "').concat(t,'" edge in the graph.'))}return o.attributes[r]=i,this.emit("edgeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:r}),this}}},{name:function(t){return"update".concat(t,"Attribute")},attacher:function(t,e,n){t.prototype[e]=function(t,r,i){var o;if("mixed"!==this.type&&"mixed"!==n&&n!==this.type)throw new Y("Graph.".concat(e,": cannot find this type of edges in your ").concat(this.type," graph."));if(arguments.length>3){if(this.multi)throw new Y("Graph.".concat(e,": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));var a=""+t,u=""+r;if(r=arguments[2],i=arguments[3],!(o=s(this,a,u,n)))throw new I("Graph.".concat(e,': could not find an edge for the given path ("').concat(a,'" - "').concat(u,'").'))}else{if("mixed"!==n)throw new Y("Graph.".concat(e,": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));if(t=""+t,!(o=this._edges.get(t)))throw new I("Graph.".concat(e,': could not find the "').concat(t,'" edge in the graph.'))}if("function"!=typeof i)throw new F("Graph.".concat(e,": updater should be a function."));return o.attributes[r]=i(o.attributes[r]),this.emit("edgeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:r}),this}}},{name:function(t){return"remove".concat(t,"Attribute")},attacher:function(t,e,n){t.prototype[e]=function(t,r){var i;if("mixed"!==this.type&&"mixed"!==n&&n!==this.type)throw new Y("Graph.".concat(e,": cannot find this type of edges in your ").concat(this.type," graph."));if(arguments.length>2){if(this.multi)throw new Y("Graph.".concat(e,": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));var o=""+t,a=""+r;if(r=arguments[2],!(i=s(this,o,a,n)))throw new I("Graph.".concat(e,': could not find an edge for the given path ("').concat(o,'" - "').concat(a,'").'))}else{if("mixed"!==n)throw new Y("Graph.".concat(e,": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));if(t=""+t,!(i=this._edges.get(t)))throw new I("Graph.".concat(e,': could not find the "').concat(t,'" edge in the graph.'))}return delete i.attributes[r],this.emit("edgeAttributesUpdated",{key:i.key,type:"remove",attributes:i.attributes,name:r}),this}}},{name:function(t){return"replace".concat(t,"Attributes")},attacher:function(t,e,n){t.prototype[e]=function(t,r){var i;if("mixed"!==this.type&&"mixed"!==n&&n!==this.type)throw new Y("Graph.".concat(e,": cannot find this type of edges in your ").concat(this.type," graph."));if(arguments.length>2){if(this.multi)throw new Y("Graph.".concat(e,": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));var o=""+t,a=""+r;if(r=arguments[2],!(i=s(this,o,a,n)))throw new I("Graph.".concat(e,': could not find an edge for the given path ("').concat(o,'" - "').concat(a,'").'))}else{if("mixed"!==n)throw new Y("Graph.".concat(e,": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));if(t=""+t,!(i=this._edges.get(t)))throw new I("Graph.".concat(e,': could not find the "').concat(t,'" edge in the graph.'))}if(!h(r))throw new F("Graph.".concat(e,": provided attributes are not a plain object."));return i.attributes=r,this.emit("edgeAttributesUpdated",{key:i.key,type:"replace",attributes:i.attributes}),this}}},{name:function(t){return"merge".concat(t,"Attributes")},attacher:function(t,e,n){t.prototype[e]=function(t,r){var i;if("mixed"!==this.type&&"mixed"!==n&&n!==this.type)throw new Y("Graph.".concat(e,": cannot find this type of edges in your ").concat(this.type," graph."));if(arguments.length>2){if(this.multi)throw new Y("Graph.".concat(e,": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));var o=""+t,a=""+r;if(r=arguments[2],!(i=s(this,o,a,n)))throw new I("Graph.".concat(e,': could not find an edge for the given path ("').concat(o,'" - "').concat(a,'").'))}else{if("mixed"!==n)throw new Y("Graph.".concat(e,": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));if(t=""+t,!(i=this._edges.get(t)))throw new I("Graph.".concat(e,': could not find the "').concat(t,'" edge in the graph.'))}if(!h(r))throw new F("Graph.".concat(e,": provided attributes are not a plain object."));return c(i.attributes,r),this.emit("edgeAttributesUpdated",{key:i.key,type:"merge",attributes:i.attributes,data:r}),this}}},{name:function(t){return"update".concat(t,"Attributes")},attacher:function(t,e,n){t.prototype[e]=function(t,r){var i;if("mixed"!==this.type&&"mixed"!==n&&n!==this.type)throw new Y("Graph.".concat(e,": cannot find this type of edges in your ").concat(this.type," graph."));if(arguments.length>2){if(this.multi)throw new Y("Graph.".concat(e,": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));var o=""+t,a=""+r;if(r=arguments[2],!(i=s(this,o,a,n)))throw new I("Graph.".concat(e,': could not find an edge for the given path ("').concat(o,'" - "').concat(a,'").'))}else{if("mixed"!==n)throw new Y("Graph.".concat(e,": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));if(t=""+t,!(i=this._edges.get(t)))throw new I("Graph.".concat(e,': could not find the "').concat(t,'" edge in the graph.'))}if("function"!=typeof r)throw new F("Graph.".concat(e,": provided updater is not a function."));return i.attributes=r(i.attributes),this.emit("edgeAttributesUpdated",{key:i.key,type:"update",attributes:i.attributes}),this}}}];var $=O,tt=R,et=function(){var t=arguments,e=null,n=-1;return new $((function(){for(var r=null;;){if(null===e){if(++n>=t.length)return{done:!0};e=tt(t[n])}if(!0!==(r=e.next()).done)break;e=null}return r}))},nt=[{name:"edges",type:"mixed"},{name:"inEdges",type:"directed",direction:"in"},{name:"outEdges",type:"directed",direction:"out"},{name:"inboundEdges",type:"mixed",direction:"in"},{name:"outboundEdges",type:"mixed",direction:"out"},{name:"directedEdges",type:"directed"},{name:"undirectedEdges",type:"undirected"}];function rt(t,e,n,r){var i=!1;for(var o in e)if(o!==r){var a=e[o];if(i=n(a.key,a.attributes,a.source.key,a.target.key,a.source.attributes,a.target.attributes,a.undirected),t&&i)return a.key}}function it(t,e,n,r){var i,o,a,u=!1;for(var c in e)if(c!==r){i=e[c];do{if(o=i.source,a=i.target,u=n(i.key,i.attributes,o.key,a.key,o.attributes,a.attributes,i.undirected),t&&u)return i.key;i=i.next}while(void 0!==i)}}function ot(t,e){var n,r=Object.keys(t),i=r.length,o=0;return new O((function(){do{if(n)n=n.next;else{if(o>=i)return{done:!0};var a=r[o++];if(a===e){n=void 0;continue}n=t[a]}}while(!n);return{done:!1,value:{edge:n.key,attributes:n.attributes,source:n.source.key,target:n.target.key,sourceAttributes:n.source.attributes,targetAttributes:n.target.attributes,undirected:n.undirected}}}))}function at(t,e,n,r){var i=e[n];if(i){var o=i.source,a=i.target;return r(i.key,i.attributes,o.key,a.key,o.attributes,a.attributes,i.undirected)&&t?i.key:void 0}}function ut(t,e,n,r){var i=e[n];if(i){var o=!1;do{if(o=r(i.key,i.attributes,i.source.key,i.target.key,i.source.attributes,i.target.attributes,i.undirected),t&&o)return i.key;i=i.next}while(void 0!==i)}}function ct(t,e){var n=t[e];return void 0!==n.next?new O((function(){if(!n)return{done:!0};var t={edge:n.key,attributes:n.attributes,source:n.source.key,target:n.target.key,sourceAttributes:n.source.attributes,targetAttributes:n.target.attributes,undirected:n.undirected};return n=n.next,{done:!1,value:t}})):O.of({edge:n.key,attributes:n.attributes,source:n.source.key,target:n.target.key,sourceAttributes:n.source.attributes,targetAttributes:n.target.attributes,undirected:n.undirected})}function st(t,e){if(0===t.size)return[];if("mixed"===e||e===t.type)return"function"==typeof Array.from?Array.from(t._edges.keys()):T(t._edges.keys(),t._edges.size);for(var n,r,i="undirected"===e?t.undirectedSize:t.directedSize,o=new Array(i),a="undirected"===e,u=t._edges.values(),c=0;!0!==(n=u.next()).done;)(r=n.value).undirected===a&&(o[c++]=r.key);return o}function dt(t,e,n,r){if(0!==e.size)for(var i,o,a="mixed"!==n&&n!==e.type,u="undirected"===n,c=!1,s=e._edges.values();!0!==(i=s.next()).done;)if(o=i.value,!a||o.undirected===u){var d=o,h=d.key,p=d.attributes,f=d.source,l=d.target;if(c=r(h,p,f.key,l.key,f.attributes,l.attributes,o.undirected),t&&c)return h}}function ht(t,e){if(0===t.size)return O.empty();var n="mixed"!==e&&e!==t.type,r="undirected"===e,i=t._edges.values();return new O((function(){for(var t,e;;){if((t=i.next()).done)return t;if(e=t.value,!n||e.undirected===r)break}return{value:{edge:e.key,attributes:e.attributes,source:e.source.key,target:e.target.key,sourceAttributes:e.source.attributes,targetAttributes:e.target.attributes,undirected:e.undirected},done:!1}}))}function pt(t,e,n,r,i,o){var a,u=e?it:rt;if("undirected"!==n){if("out"!==r&&(a=u(t,i.in,o),t&&a))return a;if("in"!==r&&(a=u(t,i.out,o,r?void 0:i.key),t&&a))return a}if("directed"!==n&&(a=u(t,i.undirected,o),t&&a))return a}function ft(t,e,n,r){var i=[];return pt(!1,t,e,n,r,(function(t){i.push(t)})),i}function lt(t,e,n){var r=O.empty();return"undirected"!==t&&("out"!==e&&void 0!==n.in&&(r=et(r,ot(n.in))),"in"!==e&&void 0!==n.out&&(r=et(r,ot(n.out,e?void 0:n.key)))),"directed"!==t&&void 0!==n.undirected&&(r=et(r,ot(n.undirected))),r}function gt(t,e,n,r,i,o,a){var u,c=n?ut:at;if("undirected"!==e){if(void 0!==i.in&&"out"!==r&&(u=c(t,i.in,o,a),t&&u))return u;if(void 0!==i.out&&"in"!==r&&(r||i.key!==o)&&(u=c(t,i.out,o,a),t&&u))return u}if("directed"!==e&&void 0!==i.undirected&&(u=c(t,i.undirected,o,a),t&&u))return u}function yt(t,e,n,r,i){var o=[];return gt(!1,t,e,n,r,i,(function(t){o.push(t)})),o}function wt(t,e,n,r){var i=O.empty();return"undirected"!==t&&(void 0!==n.in&&"out"!==e&&r in n.in&&(i=et(i,ct(n.in,r))),void 0!==n.out&&"in"!==e&&r in n.out&&(e||n.key!==r)&&(i=et(i,ct(n.out,r)))),"directed"!==t&&void 0!==n.undirected&&r in n.undirected&&(i=et(i,ct(n.undirected,r))),i}var vt=[{name:"neighbors",type:"mixed"},{name:"inNeighbors",type:"directed",direction:"in"},{name:"outNeighbors",type:"directed",direction:"out"},{name:"inboundNeighbors",type:"mixed",direction:"in"},{name:"outboundNeighbors",type:"mixed",direction:"out"},{name:"directedNeighbors",type:"directed"},{name:"undirectedNeighbors",type:"undirected"}];function bt(){this.A=null,this.B=null}function mt(t,e,n,r,i){for(var o in r){var a=r[o],u=a.source,c=a.target,s=u===n?c:u;if(!e||!e.has(s.key)){var d=i(s.key,s.attributes);if(t&&d)return s.key}}}function kt(t,e,n,r,i){if("mixed"!==e){if("undirected"===e)return mt(t,null,r,r.undirected,i);if("string"==typeof n)return mt(t,null,r,r[n],i)}var o,a=new bt;if("undirected"!==e){if("out"!==n){if(o=mt(t,null,r,r.in,i),t&&o)return o;a.wrap(r.in)}if("in"!==n){if(o=mt(t,a,r,r.out,i),t&&o)return o;a.wrap(r.out)}}if("directed"!==e&&(o=mt(t,a,r,r.undirected,i),t&&o))return o}function _t(t,e,n){var r=Object.keys(n),i=r.length,o=0;return new O((function(){var a=null;do{if(o>=i)return t&&t.wrap(n),{done:!0};var u=n[r[o++]],c=u.source,s=u.target;a=c===e?s:c,t&&t.has(a.key)&&(a=null)}while(null===a);return{done:!1,value:{neighbor:a.key,attributes:a.attributes}}}))}function Gt(t,e){var n=e.name,r=e.type,i=e.direction;t.prototype[n]=function(t){if("mixed"!==r&&"mixed"!==this.type&&r!==this.type)return[];t=""+t;var e=this._nodes.get(t);if(void 0===e)throw new I("Graph.".concat(n,': could not find the "').concat(t,'" node in the graph.'));return function(t,e,n){if("mixed"!==t){if("undirected"===t)return Object.keys(n.undirected);if("string"==typeof e)return Object.keys(n[e])}var r=[];return kt(!1,t,e,n,(function(t){r.push(t)})),r}("mixed"===r?this.type:r,i,e)}}function xt(t,e){var n=e.name,r=e.type,i=e.direction,o=n.slice(0,-1)+"Entries";t.prototype[o]=function(t){if("mixed"!==r&&"mixed"!==this.type&&r!==this.type)return O.empty();t=""+t;var e=this._nodes.get(t);if(void 0===e)throw new I("Graph.".concat(o,': could not find the "').concat(t,'" node in the graph.'));return function(t,e,n){if("mixed"!==t){if("undirected"===t)return _t(null,n,n.undirected);if("string"==typeof e)return _t(null,n,n[e])}var r=O.empty(),i=new bt;return"undirected"!==t&&("out"!==e&&(r=et(r,_t(i,n,n.in))),"in"!==e&&(r=et(r,_t(i,n,n.out)))),"directed"!==t&&(r=et(r,_t(i,n,n.undirected))),r}("mixed"===r?this.type:r,i,e)}}function Et(t,e,n,r,i){for(var o,a,u,c,s,d,h,p=r._nodes.values(),f=r.type;!0!==(o=p.next()).done;){var l=!1;if(a=o.value,"undirected"!==f)for(u in c=a.out){s=c[u];do{if(d=s.target,l=!0,h=i(a.key,d.key,a.attributes,d.attributes,s.key,s.attributes,s.undirected),t&&h)return s;s=s.next}while(s)}if("directed"!==f)for(u in c=a.undirected)if(!(e&&a.key>u)){s=c[u];do{if((d=s.target).key!==u&&(d=s.source),l=!0,h=i(a.key,d.key,a.attributes,d.attributes,s.key,s.attributes,s.undirected),t&&h)return s;s=s.next}while(s)}if(n&&!l&&(h=i(a.key,null,a.attributes,null,null,null,null),t&&h))return null}}function At(t){if(!h(t))throw new F('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');if(!("key"in t))throw new F("Graph.import: serialized node is missing its key.");if("attributes"in t&&(!h(t.attributes)||null===t.attributes))throw new F("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.")}function St(t){if(!h(t))throw new F('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');if(!("source"in t))throw new F("Graph.import: serialized edge is missing its source.");if(!("target"in t))throw new F("Graph.import: serialized edge is missing its target.");if("attributes"in t&&(!h(t.attributes)||null===t.attributes))throw new F("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");if("undirected"in t&&"boolean"!=typeof t.undirected)throw new F("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.")}bt.prototype.wrap=function(t){null===this.A?this.A=t:null===this.B&&(this.B=t)},bt.prototype.has=function(t){return null!==this.A&&t in this.A||null!==this.B&&t in this.B};var Dt,Lt=(Dt=255&Math.floor(256*Math.random()),function(){return Dt++}),Ut=new Set(["directed","undirected","mixed"]),Nt=new Set(["domain","_events","_eventsCount","_maxListeners"]),jt={allowSelfLoops:!0,multi:!1,type:"mixed"};function Ot(t,e,n){var r=new t.NodeDataClass(e,n);return t._nodes.set(e,r),t.emit("nodeAdded",{key:e,attributes:n}),r}function Ct(t,e,n,r,i,o,a,u){if(!r&&"undirected"===t.type)throw new Y("Graph.".concat(e,": you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead."));if(r&&"directed"===t.type)throw new Y("Graph.".concat(e,": you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead."));if(u&&!h(u))throw new F("Graph.".concat(e,': invalid attributes. Expecting an object but got "').concat(u,'"'));if(o=""+o,a=""+a,u=u||{},!t.allowSelfLoops&&o===a)throw new Y("Graph.".concat(e,': source & target are the same ("').concat(o,"\"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false."));var c=t._nodes.get(o),s=t._nodes.get(a);if(!c)throw new I("Graph.".concat(e,': source node "').concat(o,'" not found.'));if(!s)throw new I("Graph.".concat(e,': target node "').concat(a,'" not found.'));var d={key:null,undirected:r,source:o,target:a,attributes:u};if(n)i=t._edgeKeyGenerator();else if(i=""+i,t._edges.has(i))throw new Y("Graph.".concat(e,': the "').concat(i,'" edge already exists in the graph.'));if(!t.multi&&(r?void 0!==c.undirected[a]:void 0!==c.out[a]))throw new Y("Graph.".concat(e,': an edge linking "').concat(o,'" to "').concat(a,"\" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option."));var p=new H(r,i,c,s,u);t._edges.set(i,p);var f=o===a;return r?(c.undirectedDegree++,s.undirectedDegree++,f&&t._undirectedSelfLoopCount++):(c.outDegree++,s.inDegree++,f&&t._directedSelfLoopCount++),t.multi?p.attachMulti():p.attach(),r?t._undirectedSize++:t._directedSize++,d.key=i,t.emit("edgeAdded",d),i}function zt(t,e,n,r,i,o,a,u,s){if(!r&&"undirected"===t.type)throw new Y("Graph.".concat(e,": you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead."));if(r&&"directed"===t.type)throw new Y("Graph.".concat(e,": you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead."));if(u)if(s){if("function"!=typeof u)throw new F("Graph.".concat(e,': invalid updater function. Expecting a function but got "').concat(u,'"'))}else if(!h(u))throw new F("Graph.".concat(e,': invalid attributes. Expecting an object but got "').concat(u,'"'));var d;if(o=""+o,a=""+a,s&&(d=u,u=void 0),!t.allowSelfLoops&&o===a)throw new Y("Graph.".concat(e,': source & target are the same ("').concat(o,"\"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false."));var p,f,l=t._nodes.get(o),g=t._nodes.get(a);if(!n&&(p=t._edges.get(i))){if(!(p.source.key===o&&p.target.key===a||r&&p.source.key===a&&p.target.key===o))throw new Y("Graph.".concat(e,': inconsistency detected when attempting to merge the "').concat(i,'" edge with "').concat(o,'" source & "').concat(a,'" target vs. ("').concat(p.source.key,'", "').concat(p.target.key,'").'));f=p}if(f||t.multi||!l||(f=r?l.undirected[a]:l.out[a]),f){var y=[f.key,!1,!1,!1];if(s?!d:!u)return y;if(s){var w=f.attributes;f.attributes=d(w),t.emit("edgeAttributesUpdated",{type:"replace",key:f.key,attributes:f.attributes})}else c(f.attributes,u),t.emit("edgeAttributesUpdated",{type:"merge",key:f.key,attributes:f.attributes,data:u});return y}u=u||{},s&&d&&(u=d(u));var v={key:null,undirected:r,source:o,target:a,attributes:u};if(n)i=t._edgeKeyGenerator();else if(i=""+i,t._edges.has(i))throw new Y("Graph.".concat(e,': the "').concat(i,'" edge already exists in the graph.'));var b=!1,m=!1;l||(l=Ot(t,o,{}),b=!0,o===a&&(g=l,m=!0)),g||(g=Ot(t,a,{}),m=!0),p=new H(r,i,l,g,u),t._edges.set(i,p);var k=o===a;return r?(l.undirectedDegree++,g.undirectedDegree++,k&&t._undirectedSelfLoopCount++):(l.outDegree++,g.inDegree++,k&&t._directedSelfLoopCount++),t.multi?p.attachMulti():p.attach(),r?t._undirectedSize++:t._directedSize++,v.key=i,t.emit("edgeAdded",v),[i,!0,b,m]}function Mt(t,e){t._edges.delete(e.key);var n=e.source,r=e.target,i=e.attributes,o=e.undirected,a=n===r;o?(n.undirectedDegree--,r.undirectedDegree--,a&&t._undirectedSelfLoopCount--):(n.outDegree--,r.inDegree--,a&&t._directedSelfLoopCount--),t.multi?e.detachMulti():e.detach(),o?t._undirectedSize--:t._directedSize--,t.emit("edgeDropped",{key:e.key,attributes:i,source:n.key,target:r.key,undirected:o})}var Wt=function(n){function r(t){var e;if(e=n.call(this)||this,"boolean"!=typeof(t=c({},jt,t)).multi)throw new F("Graph.constructor: invalid 'multi' option. Expecting a boolean but got \"".concat(t.multi,'".'));if(!Ut.has(t.type))throw new F('Graph.constructor: invalid \'type\' option. Should be one of "mixed", "directed" or "undirected" but got "'.concat(t.type,'".'));if("boolean"!=typeof t.allowSelfLoops)throw new F("Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got \"".concat(t.allowSelfLoops,'".'));var r="mixed"===t.type?q:"directed"===t.type?J:V;f(u(e),"NodeDataClass",r);var i="geid_"+Lt()+"_",o=0;return f(u(e),"_attributes",{}),f(u(e),"_nodes",new Map),f(u(e),"_edges",new Map),f(u(e),"_directedSize",0),f(u(e),"_undirectedSize",0),f(u(e),"_directedSelfLoopCount",0),f(u(e),"_undirectedSelfLoopCount",0),f(u(e),"_edgeKeyGenerator",(function(){var t;do{t=i+o++}while(e._edges.has(t));return t})),f(u(e),"_options",t),Nt.forEach((function(t){return f(u(e),t,e[t])})),l(u(e),"order",(function(){return e._nodes.size})),l(u(e),"size",(function(){return e._edges.size})),l(u(e),"directedSize",(function(){return e._directedSize})),l(u(e),"undirectedSize",(function(){return e._undirectedSize})),l(u(e),"selfLoopCount",(function(){return e._directedSelfLoopCount+e._undirectedSelfLoopCount})),l(u(e),"directedSelfLoopCount",(function(){return e._directedSelfLoopCount})),l(u(e),"undirectedSelfLoopCount",(function(){return e._undirectedSelfLoopCount})),l(u(e),"multi",e._options.multi),l(u(e),"type",e._options.type),l(u(e),"allowSelfLoops",e._options.allowSelfLoops),l(u(e),"implementation",(function(){return"graphology"})),e}e(r,n);var i=r.prototype;return i._resetInstanceCounters=function(){this._directedSize=0,this._undirectedSize=0,this._directedSelfLoopCount=0,this._undirectedSelfLoopCount=0},i.hasNode=function(t){return this._nodes.has(""+t)},i.hasDirectedEdge=function(t,e){if("undirected"===this.type)return!1;if(1===arguments.length){var n=""+t,r=this._edges.get(n);return!!r&&!r.undirected}if(2===arguments.length){t=""+t,e=""+e;var i=this._nodes.get(t);if(!i)return!1;var o=i.out[e];return!!o&&(!this.multi||!!o.size)}throw new F("Graph.hasDirectedEdge: invalid arity (".concat(arguments.length,", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."))},i.hasUndirectedEdge=function(t,e){if("directed"===this.type)return!1;if(1===arguments.length){var n=""+t,r=this._edges.get(n);return!!r&&r.undirected}if(2===arguments.length){t=""+t,e=""+e;var i=this._nodes.get(t);if(!i)return!1;var o=i.undirected[e];return!!o&&(!this.multi||!!o.size)}throw new F("Graph.hasDirectedEdge: invalid arity (".concat(arguments.length,", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."))},i.hasEdge=function(t,e){if(1===arguments.length){var n=""+t;return this._edges.has(n)}if(2===arguments.length){t=""+t,e=""+e;var r=this._nodes.get(t);if(!r)return!1;var i=void 0!==r.out&&r.out[e];return i||(i=void 0!==r.undirected&&r.undirected[e]),!!i&&(!this.multi||!!i.size)}throw new F("Graph.hasEdge: invalid arity (".concat(arguments.length,", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."))},i.directedEdge=function(t,e){if("undirected"!==this.type){if(t=""+t,e=""+e,this.multi)throw new Y("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");var n=this._nodes.get(t);if(!n)throw new I('Graph.directedEdge: could not find the "'.concat(t,'" source node in the graph.'));if(!this._nodes.has(e))throw new I('Graph.directedEdge: could not find the "'.concat(e,'" target node in the graph.'));var r=n.out&&n.out[e]||void 0;return r?r.key:void 0}},i.undirectedEdge=function(t,e){if("directed"!==this.type){if(t=""+t,e=""+e,this.multi)throw new Y("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");var n=this._nodes.get(t);if(!n)throw new I('Graph.undirectedEdge: could not find the "'.concat(t,'" source node in the graph.'));if(!this._nodes.has(e))throw new I('Graph.undirectedEdge: could not find the "'.concat(e,'" target node in the graph.'));var r=n.undirected&&n.undirected[e]||void 0;return r?r.key:void 0}},i.edge=function(t,e){if(this.multi)throw new Y("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");t=""+t,e=""+e;var n=this._nodes.get(t);if(!n)throw new I('Graph.edge: could not find the "'.concat(t,'" source node in the graph.'));if(!this._nodes.has(e))throw new I('Graph.edge: could not find the "'.concat(e,'" target node in the graph.'));var r=n.out&&n.out[e]||n.undirected&&n.undirected[e]||void 0;if(r)return r.key},i.areDirectedNeighbors=function(t,e){t=""+t,e=""+e;var n=this._nodes.get(t);if(!n)throw new I('Graph.areDirectedNeighbors: could not find the "'.concat(t,'" node in the graph.'));return"undirected"!==this.type&&(e in n.in||e in n.out)},i.areOutNeighbors=function(t,e){t=""+t,e=""+e;var n=this._nodes.get(t);if(!n)throw new I('Graph.areOutNeighbors: could not find the "'.concat(t,'" node in the graph.'));return"undirected"!==this.type&&e in n.out},i.areInNeighbors=function(t,e){t=""+t,e=""+e;var n=this._nodes.get(t);if(!n)throw new I('Graph.areInNeighbors: could not find the "'.concat(t,'" node in the graph.'));return"undirected"!==this.type&&e in n.in},i.areUndirectedNeighbors=function(t,e){t=""+t,e=""+e;var n=this._nodes.get(t);if(!n)throw new I('Graph.areUndirectedNeighbors: could not find the "'.concat(t,'" node in the graph.'));return"directed"!==this.type&&e in n.undirected},i.areNeighbors=function(t,e){t=""+t,e=""+e;var n=this._nodes.get(t);if(!n)throw new I('Graph.areNeighbors: could not find the "'.concat(t,'" node in the graph.'));return"undirected"!==this.type&&(e in n.in||e in n.out)||"directed"!==this.type&&e in n.undirected},i.areInboundNeighbors=function(t,e){t=""+t,e=""+e;var n=this._nodes.get(t);if(!n)throw new I('Graph.areInboundNeighbors: could not find the "'.concat(t,'" node in the graph.'));return"undirected"!==this.type&&e in n.in||"directed"!==this.type&&e in n.undirected},i.areOutboundNeighbors=function(t,e){t=""+t,e=""+e;var n=this._nodes.get(t);if(!n)throw new I('Graph.areOutboundNeighbors: could not find the "'.concat(t,'" node in the graph.'));return"undirected"!==this.type&&e in n.out||"directed"!==this.type&&e in n.undirected},i.inDegree=function(t){t=""+t;var e=this._nodes.get(t);if(!e)throw new I('Graph.inDegree: could not find the "'.concat(t,'" node in the graph.'));return"undirected"===this.type?0:e.inDegree},i.outDegree=function(t){t=""+t;var e=this._nodes.get(t);if(!e)throw new I('Graph.outDegree: could not find the "'.concat(t,'" node in the graph.'));return"undirected"===this.type?0:e.outDegree},i.directedDegree=function(t){t=""+t;var e=this._nodes.get(t);if(!e)throw new I('Graph.directedDegree: could not find the "'.concat(t,'" node in the graph.'));return"undirected"===this.type?0:e.inDegree+e.outDegree},i.undirectedDegree=function(t){t=""+t;var e=this._nodes.get(t);if(!e)throw new I('Graph.undirectedDegree: could not find the "'.concat(t,'" node in the graph.'));return"directed"===this.type?0:e.undirectedDegree},i.inboundDegree=function(t){t=""+t;var e=this._nodes.get(t);if(!e)throw new I('Graph.inboundDegree: could not find the "'.concat(t,'" node in the graph.'));var n=0;return"directed"!==this.type&&(n+=e.undirectedDegree),"undirected"!==this.type&&(n+=e.inDegree),n},i.outboundDegree=function(t){t=""+t;var e=this._nodes.get(t);if(!e)throw new I('Graph.outboundDegree: could not find the "'.concat(t,'" node in the graph.'));var n=0;return"directed"!==this.type&&(n+=e.undirectedDegree),"undirected"!==this.type&&(n+=e.outDegree),n},i.degree=function(t){t=""+t;var e=this._nodes.get(t);if(!e)throw new I('Graph.degree: could not find the "'.concat(t,'" node in the graph.'));var n=0;return"directed"!==this.type&&(n+=e.undirectedDegree),"undirected"!==this.type&&(n+=e.inDegree+e.outDegree),n},i.inDegreeWithoutSelfLoops=function(t){t=""+t;var e=this._nodes.get(t);if(!e)throw new I('Graph.inDegreeWithoutSelfLoops: could not find the "'.concat(t,'" node in the graph.'));if("undirected"===this.type)return 0;var n=e.in[t],r=n?this.multi?n.size:1:0;return e.inDegree-r},i.outDegreeWithoutSelfLoops=function(t){t=""+t;var e=this._nodes.get(t);if(!e)throw new I('Graph.outDegreeWithoutSelfLoops: could not find the "'.concat(t,'" node in the graph.'));if("undirected"===this.type)return 0;var n=e.out[t],r=n?this.multi?n.size:1:0;return e.outDegree-r},i.directedDegreeWithoutSelfLoops=function(t){t=""+t;var e=this._nodes.get(t);if(!e)throw new I('Graph.directedDegreeWithoutSelfLoops: could not find the "'.concat(t,'" node in the graph.'));if("undirected"===this.type)return 0;var n=e.out[t],r=n?this.multi?n.size:1:0;return e.inDegree+e.outDegree-2*r},i.undirectedDegreeWithoutSelfLoops=function(t){t=""+t;var e=this._nodes.get(t);if(!e)throw new I('Graph.undirectedDegreeWithoutSelfLoops: could not find the "'.concat(t,'" node in the graph.'));if("directed"===this.type)return 0;var n=e.undirected[t],r=n?this.multi?n.size:1:0;return e.undirectedDegree-2*r},i.inboundDegreeWithoutSelfLoops=function(t){t=""+t;var e,n=this._nodes.get(t);if(!n)throw new I('Graph.inboundDegreeWithoutSelfLoops: could not find the "'.concat(t,'" node in the graph.'));var r=0,i=0;return"directed"!==this.type&&(r+=n.undirectedDegree,i+=2*((e=n.undirected[t])?this.multi?e.size:1:0)),"undirected"!==this.type&&(r+=n.inDegree,i+=(e=n.out[t])?this.multi?e.size:1:0),r-i},i.outboundDegreeWithoutSelfLoops=function(t){t=""+t;var e,n=this._nodes.get(t);if(!n)throw new I('Graph.outboundDegreeWithoutSelfLoops: could not find the "'.concat(t,'" node in the graph.'));var r=0,i=0;return"directed"!==this.type&&(r+=n.undirectedDegree,i+=2*((e=n.undirected[t])?this.multi?e.size:1:0)),"undirected"!==this.type&&(r+=n.outDegree,i+=(e=n.in[t])?this.multi?e.size:1:0),r-i},i.degreeWithoutSelfLoops=function(t){t=""+t;var e,n=this._nodes.get(t);if(!n)throw new I('Graph.degreeWithoutSelfLoops: could not find the "'.concat(t,'" node in the graph.'));var r=0,i=0;return"directed"!==this.type&&(r+=n.undirectedDegree,i+=2*((e=n.undirected[t])?this.multi?e.size:1:0)),"undirected"!==this.type&&(r+=n.inDegree+n.outDegree,i+=2*((e=n.out[t])?this.multi?e.size:1:0)),r-i},i.source=function(t){t=""+t;var e=this._edges.get(t);if(!e)throw new I('Graph.source: could not find the "'.concat(t,'" edge in the graph.'));return e.source.key},i.target=function(t){t=""+t;var e=this._edges.get(t);if(!e)throw new I('Graph.target: could not find the "'.concat(t,'" edge in the graph.'));return e.target.key},i.extremities=function(t){t=""+t;var e=this._edges.get(t);if(!e)throw new I('Graph.extremities: could not find the "'.concat(t,'" edge in the graph.'));return[e.source.key,e.target.key]},i.opposite=function(t,e){t=""+t,e=""+e;var n=this._edges.get(e);if(!n)throw new I('Graph.opposite: could not find the "'.concat(e,'" edge in the graph.'));var r=n.source.key,i=n.target.key;if(t===r)return i;if(t===i)return r;throw new I('Graph.opposite: the "'.concat(t,'" node is not attached to the "').concat(e,'" edge (').concat(r,", ").concat(i,")."))},i.hasExtremity=function(t,e){t=""+t,e=""+e;var n=this._edges.get(t);if(!n)throw new I('Graph.hasExtremity: could not find the "'.concat(t,'" edge in the graph.'));return n.source.key===e||n.target.key===e},i.isUndirected=function(t){t=""+t;var e=this._edges.get(t);if(!e)throw new I('Graph.isUndirected: could not find the "'.concat(t,'" edge in the graph.'));return e.undirected},i.isDirected=function(t){t=""+t;var e=this._edges.get(t);if(!e)throw new I('Graph.isDirected: could not find the "'.concat(t,'" edge in the graph.'));return!e.undirected},i.isSelfLoop=function(t){t=""+t;var e=this._edges.get(t);if(!e)throw new I('Graph.isSelfLoop: could not find the "'.concat(t,'" edge in the graph.'));return e.source===e.target},i.addNode=function(t,e){var n=function(t,e,n){if(n&&!h(n))throw new F('Graph.addNode: invalid attributes. Expecting an object but got "'.concat(n,'"'));if(e=""+e,n=n||{},t._nodes.has(e))throw new Y('Graph.addNode: the "'.concat(e,'" node already exist in the graph.'));var r=new t.NodeDataClass(e,n);return t._nodes.set(e,r),t.emit("nodeAdded",{key:e,attributes:n}),r}(this,t,e);return n.key},i.mergeNode=function(t,e){if(e&&!h(e))throw new F('Graph.mergeNode: invalid attributes. Expecting an object but got "'.concat(e,'"'));t=""+t,e=e||{};var n=this._nodes.get(t);return n?(e&&(c(n.attributes,e),this.emit("nodeAttributesUpdated",{type:"merge",key:t,attributes:n.attributes,data:e})),[t,!1]):(n=new this.NodeDataClass(t,e),this._nodes.set(t,n),this.emit("nodeAdded",{key:t,attributes:e}),[t,!0])},i.updateNode=function(t,e){if(e&&"function"!=typeof e)throw new F('Graph.updateNode: invalid updater function. Expecting a function but got "'.concat(e,'"'));t=""+t;var n=this._nodes.get(t);if(n){if(e){var r=n.attributes;n.attributes=e(r),this.emit("nodeAttributesUpdated",{type:"replace",key:t,attributes:n.attributes})}return[t,!1]}var i=e?e({}):{};return n=new this.NodeDataClass(t,i),this._nodes.set(t,n),this.emit("nodeAdded",{key:t,attributes:i}),[t,!0]},i.dropNode=function(t){t=""+t;var e,n=this._nodes.get(t);if(!n)throw new I('Graph.dropNode: could not find the "'.concat(t,'" node in the graph.'));if("undirected"!==this.type){for(var r in n.out){e=n.out[r];do{Mt(this,e),e=e.next}while(e)}for(var i in n.in){e=n.in[i];do{Mt(this,e),e=e.next}while(e)}}if("directed"!==this.type)for(var o in n.undirected){e=n.undirected[o];do{Mt(this,e),e=e.next}while(e)}this._nodes.delete(t),this.emit("nodeDropped",{key:t,attributes:n.attributes})},i.dropEdge=function(t){var e;if(arguments.length>1){var n=""+arguments[0],r=""+arguments[1];if(!(e=s(this,n,r,this.type)))throw new I('Graph.dropEdge: could not find the "'.concat(n,'" -> "').concat(r,'" edge in the graph.'))}else if(t=""+t,!(e=this._edges.get(t)))throw new I('Graph.dropEdge: could not find the "'.concat(t,'" edge in the graph.'));return Mt(this,e),this},i.dropDirectedEdge=function(t,e){if(arguments.length<2)throw new Y("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new Y("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");var n=s(this,t=""+t,e=""+e,"directed");if(!n)throw new I('Graph.dropDirectedEdge: could not find a "'.concat(t,'" -> "').concat(e,'" edge in the graph.'));return Mt(this,n),this},i.dropUndirectedEdge=function(t,e){if(arguments.length<2)throw new Y("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new Y("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");var n=s(this,t,e,"undirected");if(!n)throw new I('Graph.dropUndirectedEdge: could not find a "'.concat(t,'" -> "').concat(e,'" edge in the graph.'));return Mt(this,n),this},i.clear=function(){this._edges.clear(),this._nodes.clear(),this._resetInstanceCounters(),this.emit("cleared")},i.clearEdges=function(){for(var t,e=this._nodes.values();!0!==(t=e.next()).done;)t.value.clear();this._edges.clear(),this._resetInstanceCounters(),this.emit("edgesCleared")},i.getAttribute=function(t){return this._attributes[t]},i.getAttributes=function(){return this._attributes},i.hasAttribute=function(t){return this._attributes.hasOwnProperty(t)},i.setAttribute=function(t,e){return this._attributes[t]=e,this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:t}),this},i.updateAttribute=function(t,e){if("function"!=typeof e)throw new F("Graph.updateAttribute: updater should be a function.");var n=this._attributes[t];return this._attributes[t]=e(n),this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:t}),this},i.removeAttribute=function(t){return delete this._attributes[t],this.emit("attributesUpdated",{type:"remove",attributes:this._attributes,name:t}),this},i.replaceAttributes=function(t){if(!h(t))throw new F("Graph.replaceAttributes: provided attributes are not a plain object.");return this._attributes=t,this.emit("attributesUpdated",{type:"replace",attributes:this._attributes}),this},i.mergeAttributes=function(t){if(!h(t))throw new F("Graph.mergeAttributes: provided attributes are not a plain object.");return c(this._attributes,t),this.emit("attributesUpdated",{type:"merge",attributes:this._attributes,data:t}),this},i.updateAttributes=function(t){if("function"!=typeof t)throw new F("Graph.updateAttributes: provided updater is not a function.");return this._attributes=t(this._attributes),this.emit("attributesUpdated",{type:"update",attributes:this._attributes}),this},i.updateEachNodeAttributes=function(t,e){if("function"!=typeof t)throw new F("Graph.updateEachNodeAttributes: expecting an updater function.");if(e&&!g(e))throw new F("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");for(var n,r,i=this._nodes.values();!0!==(n=i.next()).done;)(r=n.value).attributes=t(r.key,r.attributes);this.emit("eachNodeAttributesUpdated",{hints:e||null})},i.updateEachEdgeAttributes=function(t,e){if("function"!=typeof t)throw new F("Graph.updateEachEdgeAttributes: expecting an updater function.");if(e&&!g(e))throw new F("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");for(var n,r,i,o,a=this._edges.values();!0!==(n=a.next()).done;)i=(r=n.value).source,o=r.target,r.attributes=t(r.key,r.attributes,i.key,o.key,i.attributes,o.attributes,r.undirected);this.emit("eachEdgeAttributesUpdated",{hints:e||null})},i.forEachAdjacencyEntry=function(t){if("function"!=typeof t)throw new F("Graph.forEachAdjacencyEntry: expecting a callback.");Et(!1,!1,!1,this,t)},i.forEachAdjacencyEntryWithOrphans=function(t){if("function"!=typeof t)throw new F("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");Et(!1,!1,!0,this,t)},i.forEachAssymetricAdjacencyEntry=function(t){if("function"!=typeof t)throw new F("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");Et(!1,!0,!1,this,t)},i.forEachAssymetricAdjacencyEntryWithOrphans=function(t){if("function"!=typeof t)throw new F("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");Et(!1,!0,!0,this,t)},i.nodes=function(){return"function"==typeof Array.from?Array.from(this._nodes.keys()):T(this._nodes.keys(),this._nodes.size)},i.forEachNode=function(t){if("function"!=typeof t)throw new F("Graph.forEachNode: expecting a callback.");for(var e,n,r=this._nodes.values();!0!==(e=r.next()).done;)t((n=e.value).key,n.attributes)},i.findNode=function(t){if("function"!=typeof t)throw new F("Graph.findNode: expecting a callback.");for(var e,n,r=this._nodes.values();!0!==(e=r.next()).done;)if(t((n=e.value).key,n.attributes))return n.key},i.mapNodes=function(t){if("function"!=typeof t)throw new F("Graph.mapNode: expecting a callback.");for(var e,n,r=this._nodes.values(),i=new Array(this.order),o=0;!0!==(e=r.next()).done;)n=e.value,i[o++]=t(n.key,n.attributes);return i},i.someNode=function(t){if("function"!=typeof t)throw new F("Graph.someNode: expecting a callback.");for(var e,n,r=this._nodes.values();!0!==(e=r.next()).done;)if(t((n=e.value).key,n.attributes))return!0;return!1},i.everyNode=function(t){if("function"!=typeof t)throw new F("Graph.everyNode: expecting a callback.");for(var e,n,r=this._nodes.values();!0!==(e=r.next()).done;)if(!t((n=e.value).key,n.attributes))return!1;return!0},i.filterNodes=function(t){if("function"!=typeof t)throw new F("Graph.filterNodes: expecting a callback.");for(var e,n,r=this._nodes.values(),i=[];!0!==(e=r.next()).done;)t((n=e.value).key,n.attributes)&&i.push(n.key);return i},i.reduceNodes=function(t,e){if("function"!=typeof t)throw new F("Graph.reduceNodes: expecting a callback.");if(arguments.length<2)throw new F("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");for(var n,r,i=e,o=this._nodes.values();!0!==(n=o.next()).done;)i=t(i,(r=n.value).key,r.attributes);return i},i.nodeEntries=function(){var t=this._nodes.values();return new O((function(){var e=t.next();if(e.done)return e;var n=e.value;return{value:{node:n.key,attributes:n.attributes},done:!1}}))},i.export=function(){var t=new Array(this._nodes.size),e=0;this._nodes.forEach((function(n,r){t[e++]=function(t,e){var n={key:t};return p(e.attributes)||(n.attributes=c({},e.attributes)),n}(r,n)}));var n=new Array(this._edges.size);return e=0,this._edges.forEach((function(t,r){n[e++]=function(t,e){var n={key:t,source:e.source.key,target:e.target.key};return p(e.attributes)||(n.attributes=c({},e.attributes)),e.undirected&&(n.undirected=!0),n}(r,t)})),{options:{type:this.type,multi:this.multi,allowSelfLoops:this.allowSelfLoops},attributes:this.getAttributes(),nodes:t,edges:n}},i.import=function(t){var e,n,r,i,o,a=this,u=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(d(t))return t.forEachNode((function(t,e){u?a.mergeNode(t,e):a.addNode(t,e)})),t.forEachEdge((function(t,e,n,r,i,o,c){u?c?a.mergeUndirectedEdgeWithKey(t,n,r,e):a.mergeDirectedEdgeWithKey(t,n,r,e):c?a.addUndirectedEdgeWithKey(t,n,r,e):a.addDirectedEdgeWithKey(t,n,r,e)})),this;if(!h(t))throw new F("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");if(t.attributes){if(!h(t.attributes))throw new F("Graph.import: invalid attributes. Expecting a plain object.");u?this.mergeAttributes(t.attributes):this.replaceAttributes(t.attributes)}if(t.nodes){if(r=t.nodes,!Array.isArray(r))throw new F("Graph.import: invalid nodes. Expecting an array.");for(e=0,n=r.length;e<n;e++){At(i=r[e]);var c=i,s=c.key,p=c.attributes;u?this.mergeNode(s,p):this.addNode(s,p)}}if(t.edges){if(r=t.edges,!Array.isArray(r))throw new F("Graph.import: invalid edges. Expecting an array.");for(e=0,n=r.length;e<n;e++){St(o=r[e]);var f=o,l=f.source,g=f.target,y=f.attributes,w=f.undirected,v=void 0!==w&&w;"key"in o?(u?v?this.mergeUndirectedEdgeWithKey:this.mergeDirectedEdgeWithKey:v?this.addUndirectedEdgeWithKey:this.addDirectedEdgeWithKey).call(this,o.key,l,g,y):(u?v?this.mergeUndirectedEdge:this.mergeDirectedEdge:v?this.addUndirectedEdge:this.addDirectedEdge).call(this,l,g,y)}}return this},i.nullCopy=function(t){var e=new r(c({},this._options,t));return e.replaceAttributes(c({},this.getAttributes())),e},i.emptyCopy=function(t){var e=this.nullCopy(t);return this._nodes.forEach((function(t,n){var r=c({},t.attributes);t=new e.NodeDataClass(n,r),e._nodes.set(n,t)})),e},i.copy=function(t){if("string"==typeof(t=t||{}).type&&t.type!==this.type&&"mixed"!==t.type)throw new Y('Graph.copy: cannot create an incompatible copy from "'.concat(this.type,'" type to "').concat(t.type,'" because this would mean losing information about the current graph.'));if("boolean"==typeof t.multi&&t.multi!==this.multi&&!0!==t.multi)throw new Y("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");if("boolean"==typeof t.allowSelfLoops&&t.allowSelfLoops!==this.allowSelfLoops&&!0!==t.allowSelfLoops)throw new Y("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");for(var e,n,r=this.emptyCopy(t),i=this._edges.values();!0!==(e=i.next()).done;)Ct(r,"copy",!1,(n=e.value).undirected,n.key,n.source.key,n.target.key,c({},n.attributes));return r},i.toJSON=function(){return this.export()},i.toString=function(){return"[object Graph]"},i.inspect=function(){var e=this,n={};this._nodes.forEach((function(t,e){n[e]=t.attributes}));var r={},i={};this._edges.forEach((function(t,n){var o,a=t.undirected?"--":"->",u="",c=t.source.key,s=t.target.key;t.undirected&&c>s&&(o=c,c=s,s=o);var d="(".concat(c,")").concat(a,"(").concat(s,")");n.startsWith("geid_")?e.multi&&(void 0===i[d]?i[d]=0:i[d]++,u+="".concat(i[d],". ")):u+="[".concat(n,"]: "),r[u+=d]=t.attributes}));var o={};for(var a in this)this.hasOwnProperty(a)&&!Nt.has(a)&&"function"!=typeof this[a]&&"symbol"!==t(a)&&(o[a]=this[a]);return o.attributes=this._attributes,o.nodes=n,o.edges=r,f(o,"constructor",this.constructor),o},r}(w.exports.EventEmitter);"undefined"!=typeof Symbol&&(Wt.prototype[Symbol.for("nodejs.util.inspect.custom")]=Wt.prototype.inspect),[{name:function(t){return"".concat(t,"Edge")},generateKey:!0},{name:function(t){return"".concat(t,"DirectedEdge")},generateKey:!0,type:"directed"},{name:function(t){return"".concat(t,"UndirectedEdge")},generateKey:!0,type:"undirected"},{name:function(t){return"".concat(t,"EdgeWithKey")}},{name:function(t){return"".concat(t,"DirectedEdgeWithKey")},type:"directed"},{name:function(t){return"".concat(t,"UndirectedEdgeWithKey")},type:"undirected"}].forEach((function(t){["add","merge","update"].forEach((function(e){var n=t.name(e),r="add"===e?Ct:zt;t.generateKey?Wt.prototype[n]=function(i,o,a){return r(this,n,!0,"undirected"===(t.type||this.type),null,i,o,a,"update"===e)}:Wt.prototype[n]=function(i,o,a,u){return r(this,n,!1,"undirected"===(t.type||this.type),i,o,a,u,"update"===e)}}))})),function(t){X.forEach((function(e){var n=e.name,r=e.attacher;r(t,n("Node"),0),r(t,n("Source"),1),r(t,n("Target"),2),r(t,n("Opposite"),3)}))}(Wt),function(t){Z.forEach((function(e){var n=e.name,r=e.attacher;r(t,n("Edge"),"mixed"),r(t,n("DirectedEdge"),"directed"),r(t,n("UndirectedEdge"),"undirected")}))}(Wt),function(t){nt.forEach((function(e){!function(t,e){var n=e.name,r=e.type,i=e.direction;t.prototype[n]=function(t,e){if("mixed"!==r&&"mixed"!==this.type&&r!==this.type)return[];if(!arguments.length)return st(this,r);if(1===arguments.length){t=""+t;var o=this._nodes.get(t);if(void 0===o)throw new I("Graph.".concat(n,': could not find the "').concat(t,'" node in the graph.'));return ft(this.multi,"mixed"===r?this.type:r,i,o)}if(2===arguments.length){t=""+t,e=""+e;var a=this._nodes.get(t);if(!a)throw new I("Graph.".concat(n,':  could not find the "').concat(t,'" source node in the graph.'));if(!this._nodes.has(e))throw new I("Graph.".concat(n,':  could not find the "').concat(e,'" target node in the graph.'));return yt(r,this.multi,i,a,e)}throw new F("Graph.".concat(n,": too many arguments (expecting 0, 1 or 2 and got ").concat(arguments.length,")."))}}(t,e),function(t,e){var n=e.name,r=e.type,i=e.direction,o="forEach"+n[0].toUpperCase()+n.slice(1,-1);t.prototype[o]=function(t,e,n){if("mixed"===r||"mixed"===this.type||r===this.type){if(1===arguments.length)return dt(!1,this,r,n=t);if(2===arguments.length){t=""+t,n=e;var a=this._nodes.get(t);if(void 0===a)throw new I("Graph.".concat(o,': could not find the "').concat(t,'" node in the graph.'));return pt(!1,this.multi,"mixed"===r?this.type:r,i,a,n)}if(3===arguments.length){t=""+t,e=""+e;var u=this._nodes.get(t);if(!u)throw new I("Graph.".concat(o,':  could not find the "').concat(t,'" source node in the graph.'));if(!this._nodes.has(e))throw new I("Graph.".concat(o,':  could not find the "').concat(e,'" target node in the graph.'));return gt(!1,r,this.multi,i,u,e,n)}throw new F("Graph.".concat(o,": too many arguments (expecting 1, 2 or 3 and got ").concat(arguments.length,")."))}};var a="map"+n[0].toUpperCase()+n.slice(1);t.prototype[a]=function(){var t,e=Array.prototype.slice.call(arguments),n=e.pop();if(0===e.length){var i=0;"directed"!==r&&(i+=this.undirectedSize),"undirected"!==r&&(i+=this.directedSize),t=new Array(i);var a=0;e.push((function(e,r,i,o,u,c,s){t[a++]=n(e,r,i,o,u,c,s)}))}else t=[],e.push((function(e,r,i,o,a,u,c){t.push(n(e,r,i,o,a,u,c))}));return this[o].apply(this,e),t};var u="filter"+n[0].toUpperCase()+n.slice(1);t.prototype[u]=function(){var t=Array.prototype.slice.call(arguments),e=t.pop(),n=[];return t.push((function(t,r,i,o,a,u,c){e(t,r,i,o,a,u,c)&&n.push(t)})),this[o].apply(this,t),n};var c="reduce"+n[0].toUpperCase()+n.slice(1);t.prototype[c]=function(){var t,e,n=Array.prototype.slice.call(arguments);if(n.length<2||n.length>4)throw new F("Graph.".concat(c,": invalid number of arguments (expecting 2, 3 or 4 and got ").concat(n.length,")."));if("function"==typeof n[n.length-1]&&"function"!=typeof n[n.length-2])throw new F("Graph.".concat(c,": missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array."));2===n.length?(t=n[0],e=n[1],n=[]):3===n.length?(t=n[1],e=n[2],n=[n[0]]):4===n.length&&(t=n[2],e=n[3],n=[n[0],n[1]]);var r=e;return n.push((function(e,n,i,o,a,u,c){r=t(r,e,n,i,o,a,u,c)})),this[o].apply(this,n),r}}(t,e),function(t,e){var n=e.name,r=e.type,i=e.direction,o="find"+n[0].toUpperCase()+n.slice(1,-1);t.prototype[o]=function(t,e,n){if("mixed"!==r&&"mixed"!==this.type&&r!==this.type)return!1;if(1===arguments.length)return dt(!0,this,r,n=t);if(2===arguments.length){t=""+t,n=e;var a=this._nodes.get(t);if(void 0===a)throw new I("Graph.".concat(o,': could not find the "').concat(t,'" node in the graph.'));return pt(!0,this.multi,"mixed"===r?this.type:r,i,a,n)}if(3===arguments.length){t=""+t,e=""+e;var u=this._nodes.get(t);if(!u)throw new I("Graph.".concat(o,':  could not find the "').concat(t,'" source node in the graph.'));if(!this._nodes.has(e))throw new I("Graph.".concat(o,':  could not find the "').concat(e,'" target node in the graph.'));return gt(!0,r,this.multi,i,u,e,n)}throw new F("Graph.".concat(o,": too many arguments (expecting 1, 2 or 3 and got ").concat(arguments.length,")."))};var a="some"+n[0].toUpperCase()+n.slice(1,-1);t.prototype[a]=function(){var t=Array.prototype.slice.call(arguments),e=t.pop();return t.push((function(t,n,r,i,o,a,u){return e(t,n,r,i,o,a,u)})),!!this[o].apply(this,t)};var u="every"+n[0].toUpperCase()+n.slice(1,-1);t.prototype[u]=function(){var t=Array.prototype.slice.call(arguments),e=t.pop();return t.push((function(t,n,r,i,o,a,u){return!e(t,n,r,i,o,a,u)})),!this[o].apply(this,t)}}(t,e),function(t,e){var n=e.name,r=e.type,i=e.direction,o=n.slice(0,-1)+"Entries";t.prototype[o]=function(t,e){if("mixed"!==r&&"mixed"!==this.type&&r!==this.type)return O.empty();if(!arguments.length)return ht(this,r);if(1===arguments.length){t=""+t;var n=this._nodes.get(t);if(!n)throw new I("Graph.".concat(o,': could not find the "').concat(t,'" node in the graph.'));return lt(r,i,n)}if(2===arguments.length){t=""+t,e=""+e;var a=this._nodes.get(t);if(!a)throw new I("Graph.".concat(o,':  could not find the "').concat(t,'" source node in the graph.'));if(!this._nodes.has(e))throw new I("Graph.".concat(o,':  could not find the "').concat(e,'" target node in the graph.'));return wt(r,i,a,e)}throw new F("Graph.".concat(o,": too many arguments (expecting 0, 1 or 2 and got ").concat(arguments.length,")."))}}(t,e)}))}(Wt),function(t){vt.forEach((function(e){Gt(t,e),function(t,e){var n=e.name,r=e.type,i=e.direction,o="forEach"+n[0].toUpperCase()+n.slice(1,-1);t.prototype[o]=function(t,e){if("mixed"===r||"mixed"===this.type||r===this.type){t=""+t;var n=this._nodes.get(t);if(void 0===n)throw new I("Graph.".concat(o,': could not find the "').concat(t,'" node in the graph.'));kt(!1,"mixed"===r?this.type:r,i,n,e)}};var a="map"+n[0].toUpperCase()+n.slice(1);t.prototype[a]=function(t,e){var n=[];return this[o](t,(function(t,r){n.push(e(t,r))})),n};var u="filter"+n[0].toUpperCase()+n.slice(1);t.prototype[u]=function(t,e){var n=[];return this[o](t,(function(t,r){e(t,r)&&n.push(t)})),n};var c="reduce"+n[0].toUpperCase()+n.slice(1);t.prototype[c]=function(t,e,n){if(arguments.length<3)throw new F("Graph.".concat(c,": missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array."));var r=n;return this[o](t,(function(t,n){r=e(r,t,n)})),r}}(t,e),function(t,e){var n=e.name,r=e.type,i=e.direction,o=n[0].toUpperCase()+n.slice(1,-1),a="find"+o;t.prototype[a]=function(t,e){if("mixed"===r||"mixed"===this.type||r===this.type){t=""+t;var n=this._nodes.get(t);if(void 0===n)throw new I("Graph.".concat(a,': could not find the "').concat(t,'" node in the graph.'));return kt(!0,"mixed"===r?this.type:r,i,n,e)}};var u="some"+o;t.prototype[u]=function(t,e){return!!this[a](t,e)};var c="every"+o;t.prototype[c]=function(t,e){return!this[a](t,(function(t,n){return!e(t,n)}))}}(t,e),xt(t,e)}))}(Wt);var Pt=function(t){function n(e){var n=c({type:"directed"},e);if("multi"in n&&!1!==n.multi)throw new F("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if("directed"!==n.type)throw new F('DirectedGraph.from: inconsistent "'+n.type+'" type in given options!');return t.call(this,n)||this}return e(n,t),n}(Wt),Rt=function(t){function n(e){var n=c({type:"undirected"},e);if("multi"in n&&!1!==n.multi)throw new F("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if("undirected"!==n.type)throw new F('UndirectedGraph.from: inconsistent "'+n.type+'" type in given options!');return t.call(this,n)||this}return e(n,t),n}(Wt),Kt=function(t){function n(e){var n=c({multi:!0},e);if("multi"in n&&!0!==n.multi)throw new F("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");return t.call(this,n)||this}return e(n,t),n}(Wt),Tt=function(t){function n(e){var n=c({type:"directed",multi:!0},e);if("multi"in n&&!0!==n.multi)throw new F("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if("directed"!==n.type)throw new F('MultiDirectedGraph.from: inconsistent "'+n.type+'" type in given options!');return t.call(this,n)||this}return e(n,t),n}(Wt),Bt=function(t){function n(e){var n=c({type:"undirected",multi:!0},e);if("multi"in n&&!0!==n.multi)throw new F("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if("undirected"!==n.type)throw new F('MultiUndirectedGraph.from: inconsistent "'+n.type+'" type in given options!');return t.call(this,n)||this}return e(n,t),n}(Wt);function Ft(t){t.from=function(e,n){var r=c({},e.options,n),i=new t(r);return i.import(e),i}}return Ft(Wt),Ft(Pt),Ft(Rt),Ft(Kt),Ft(Tt),Ft(Bt),Wt.Graph=Wt,Wt.DirectedGraph=Pt,Wt.UndirectedGraph=Rt,Wt.MultiGraph=Kt,Wt.MultiDirectedGraph=Tt,Wt.MultiUndirectedGraph=Bt,Wt.InvalidArgumentsGraphError=F,Wt.NotFoundGraphError=I,Wt.UsageGraphError=Y,Wt}));
//# sourceMappingURL=graphology.umd.min.js.map


/***/ }),

/***/ "./node_modules/sigma/core/camera.js":
/*!*******************************************!*\
  !*** ./node_modules/sigma/core/camera.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Sigma.js Camera Class
 * ======================
 *
 * Class designed to store camera information & used to update it.
 * @module
 */
var animate_1 = __webpack_require__(/*! ../utils/animate */ "./node_modules/sigma/utils/animate.js");
var easings_1 = __importDefault(__webpack_require__(/*! ../utils/easings */ "./node_modules/sigma/utils/easings.js"));
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/sigma/utils/index.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/sigma/types.js");
/**
 * Defaults.
 */
var DEFAULT_ZOOMING_RATIO = 1.5;
/**
 * Camera class
 *
 * @constructor
 */
var Camera = /** @class */ (function (_super) {
    __extends(Camera, _super);
    function Camera() {
        var _this = _super.call(this) || this;
        _this.x = 0.5;
        _this.y = 0.5;
        _this.angle = 0;
        _this.ratio = 1;
        _this.minRatio = null;
        _this.maxRatio = null;
        _this.nextFrame = null;
        _this.previousState = null;
        _this.enabled = true;
        // State
        _this.previousState = _this.getState();
        return _this;
    }
    /**
     * Static method used to create a Camera object with a given state.
     *
     * @param state
     * @return {Camera}
     */
    Camera.from = function (state) {
        var camera = new Camera();
        return camera.setState(state);
    };
    /**
     * Method used to enable the camera.
     *
     * @return {Camera}
     */
    Camera.prototype.enable = function () {
        this.enabled = true;
        return this;
    };
    /**
     * Method used to disable the camera.
     *
     * @return {Camera}
     */
    Camera.prototype.disable = function () {
        this.enabled = false;
        return this;
    };
    /**
     * Method used to retrieve the camera's current state.
     *
     * @return {object}
     */
    Camera.prototype.getState = function () {
        return {
            x: this.x,
            y: this.y,
            angle: this.angle,
            ratio: this.ratio,
        };
    };
    /**
     * Method used to check whether the camera has the given state.
     *
     * @return {object}
     */
    Camera.prototype.hasState = function (state) {
        return this.x === state.x && this.y === state.y && this.ratio === state.ratio && this.angle === state.angle;
    };
    /**
     * Method used to retrieve the camera's previous state.
     *
     * @return {object}
     */
    Camera.prototype.getPreviousState = function () {
        var state = this.previousState;
        if (!state)
            return null;
        return {
            x: state.x,
            y: state.y,
            angle: state.angle,
            ratio: state.ratio,
        };
    };
    /**
     * Method used to check minRatio and maxRatio values.
     *
     * @param ratio
     * @return {number}
     */
    Camera.prototype.getBoundedRatio = function (ratio) {
        var r = ratio;
        if (typeof this.minRatio === "number")
            r = Math.max(r, this.minRatio);
        if (typeof this.maxRatio === "number")
            r = Math.min(r, this.maxRatio);
        return r;
    };
    /**
     * Method used to check various things to return a legit state candidate.
     *
     * @param state
     * @return {object}
     */
    Camera.prototype.validateState = function (state) {
        var validatedState = {};
        if (typeof state.x === "number")
            validatedState.x = state.x;
        if (typeof state.y === "number")
            validatedState.y = state.y;
        if (typeof state.angle === "number")
            validatedState.angle = state.angle;
        if (typeof state.ratio === "number")
            validatedState.ratio = this.getBoundedRatio(state.ratio);
        return validatedState;
    };
    /**
     * Method used to check whether the camera is currently being animated.
     *
     * @return {boolean}
     */
    Camera.prototype.isAnimated = function () {
        return !!this.nextFrame;
    };
    /**
     * Method used to set the camera's state.
     *
     * @param  {object} state - New state.
     * @return {Camera}
     */
    Camera.prototype.setState = function (state) {
        if (!this.enabled)
            return this;
        // TODO: update by function
        // Keeping track of last state
        this.previousState = this.getState();
        var validState = this.validateState(state);
        if (typeof validState.x === "number")
            this.x = validState.x;
        if (typeof validState.y === "number")
            this.y = validState.y;
        if (typeof validState.angle === "number")
            this.angle = validState.angle;
        if (typeof validState.ratio === "number")
            this.ratio = validState.ratio;
        // Emitting
        if (!this.hasState(this.previousState))
            this.emit("updated", this.getState());
        return this;
    };
    /**
     * Method used to update the camera's state using a function.
     *
     * @param  {function} updater - Updated function taking current state and
     *                              returning next state.
     * @return {Camera}
     */
    Camera.prototype.updateState = function (updater) {
        this.setState(updater(this.getState()));
        return this;
    };
    /**
     * Method used to animate the camera.
     *
     * @param  {object}                    state      - State to reach eventually.
     * @param  {object}                    opts       - Options:
     * @param  {number}                      duration - Duration of the animation.
     * @param  {string | number => number}   easing   - Easing function or name of an existing one
     * @param  {function}                  callback   - Callback
     */
    Camera.prototype.animate = function (state, opts, callback) {
        var _this = this;
        if (!this.enabled)
            return;
        var options = Object.assign({}, animate_1.ANIMATE_DEFAULTS, opts);
        var validState = this.validateState(state);
        var easing = typeof options.easing === "function" ? options.easing : easings_1.default[options.easing];
        // State
        var start = Date.now(), initialState = this.getState();
        // Function performing the animation
        var fn = function () {
            var t = (Date.now() - start) / options.duration;
            // The animation is over:
            if (t >= 1) {
                _this.nextFrame = null;
                _this.setState(validState);
                if (_this.animationCallback) {
                    _this.animationCallback.call(null);
                    _this.animationCallback = undefined;
                }
                return;
            }
            var coefficient = easing(t);
            var newState = {};
            if (typeof validState.x === "number")
                newState.x = initialState.x + (validState.x - initialState.x) * coefficient;
            if (typeof validState.y === "number")
                newState.y = initialState.y + (validState.y - initialState.y) * coefficient;
            if (typeof validState.angle === "number")
                newState.angle = initialState.angle + (validState.angle - initialState.angle) * coefficient;
            if (typeof validState.ratio === "number")
                newState.ratio = initialState.ratio + (validState.ratio - initialState.ratio) * coefficient;
            _this.setState(newState);
            _this.nextFrame = (0, utils_1.requestFrame)(fn);
        };
        if (this.nextFrame) {
            (0, utils_1.cancelFrame)(this.nextFrame);
            if (this.animationCallback)
                this.animationCallback.call(null);
            this.nextFrame = (0, utils_1.requestFrame)(fn);
        }
        else {
            fn();
        }
        this.animationCallback = callback;
    };
    /**
     * Method used to zoom the camera.
     *
     * @param  {number|object} factorOrOptions - Factor or options.
     * @return {function}
     */
    Camera.prototype.animatedZoom = function (factorOrOptions) {
        if (!factorOrOptions) {
            this.animate({ ratio: this.ratio / DEFAULT_ZOOMING_RATIO });
        }
        else {
            if (typeof factorOrOptions === "number")
                return this.animate({ ratio: this.ratio / factorOrOptions });
            else
                this.animate({
                    ratio: this.ratio / (factorOrOptions.factor || DEFAULT_ZOOMING_RATIO),
                }, factorOrOptions);
        }
    };
    /**
     * Method used to unzoom the camera.
     *
     * @param  {number|object} factorOrOptions - Factor or options.
     */
    Camera.prototype.animatedUnzoom = function (factorOrOptions) {
        if (!factorOrOptions) {
            this.animate({ ratio: this.ratio * DEFAULT_ZOOMING_RATIO });
        }
        else {
            if (typeof factorOrOptions === "number")
                return this.animate({ ratio: this.ratio * factorOrOptions });
            else
                this.animate({
                    ratio: this.ratio * (factorOrOptions.factor || DEFAULT_ZOOMING_RATIO),
                }, factorOrOptions);
        }
    };
    /**
     * Method used to reset the camera.
     *
     * @param  {object} options - Options.
     */
    Camera.prototype.animatedReset = function (options) {
        this.animate({
            x: 0.5,
            y: 0.5,
            ratio: 1,
            angle: 0,
        }, options);
    };
    /**
     * Returns a new Camera instance, with the same state as the current camera.
     *
     * @return {Camera}
     */
    Camera.prototype.copy = function () {
        return Camera.from(this.getState());
    };
    return Camera;
}(types_1.TypedEventEmitter));
exports["default"] = Camera;


/***/ }),

/***/ "./node_modules/sigma/core/captors/captor.js":
/*!***************************************************!*\
  !*** ./node_modules/sigma/core/captors/captor.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getWheelDelta = exports.getTouchCoords = exports.getTouchesArray = exports.getWheelCoords = exports.getMouseCoords = exports.getPosition = void 0;
/**
 * Sigma.js Captor Class
 * ======================
 * @module
 */
var types_1 = __webpack_require__(/*! ../../types */ "./node_modules/sigma/types.js");
/**
 * Captor utils functions
 * ======================
 */
/**
 * Extract the local X and Y coordinates from a mouse event or touch object. If
 * a DOM element is given, it uses this element's offset to compute the position
 * (this allows using events that are not bound to the container itself and
 * still have a proper position).
 *
 * @param  {event}       e - A mouse event or touch object.
 * @param  {HTMLElement} dom - A DOM element to compute offset relatively to.
 * @return {number}      The local Y value of the mouse.
 */
function getPosition(e, dom) {
    var bbox = dom.getBoundingClientRect();
    return {
        x: e.clientX - bbox.left,
        y: e.clientY - bbox.top,
    };
}
exports.getPosition = getPosition;
/**
 * Convert mouse coords to sigma coords.
 *
 * @param  {event}       e   - A mouse event or touch object.
 * @param  {HTMLElement} dom - A DOM element to compute offset relatively to.
 * @return {object}
 */
function getMouseCoords(e, dom) {
    var res = __assign(__assign({}, getPosition(e, dom)), { sigmaDefaultPrevented: false, preventSigmaDefault: function () {
            res.sigmaDefaultPrevented = true;
        }, original: e });
    return res;
}
exports.getMouseCoords = getMouseCoords;
/**
 * Convert mouse wheel event coords to sigma coords.
 *
 * @param  {event}       e   - A wheel mouse event.
 * @param  {HTMLElement} dom - A DOM element to compute offset relatively to.
 * @return {object}
 */
function getWheelCoords(e, dom) {
    return __assign(__assign({}, getMouseCoords(e, dom)), { delta: getWheelDelta(e) });
}
exports.getWheelCoords = getWheelCoords;
var MAX_TOUCHES = 2;
function getTouchesArray(touches) {
    var arr = [];
    for (var i = 0, l = Math.min(touches.length, MAX_TOUCHES); i < l; i++)
        arr.push(touches[i]);
    return arr;
}
exports.getTouchesArray = getTouchesArray;
/**
 * Convert touch coords to sigma coords.
 *
 * @param  {event}       e   - A touch event.
 * @param  {HTMLElement} dom - A DOM element to compute offset relatively to.
 * @return {object}
 */
function getTouchCoords(e, dom) {
    return {
        touches: getTouchesArray(e.touches).map(function (touch) { return getPosition(touch, dom); }),
        original: e,
    };
}
exports.getTouchCoords = getTouchCoords;
/**
 * Extract the wheel delta from a mouse event or touch object.
 *
 * @param  {event}  e - A mouse event or touch object.
 * @return {number}     The wheel delta of the mouse.
 */
function getWheelDelta(e) {
    // TODO: check those ratios again to ensure a clean Chrome/Firefox compat
    if (typeof e.deltaY !== "undefined")
        return (e.deltaY * -3) / 360;
    if (typeof e.detail !== "undefined")
        return e.detail / -9;
    throw new Error("Captor: could not extract delta from event.");
}
exports.getWheelDelta = getWheelDelta;
/**
 * Abstract class representing a captor like the user's mouse or touch controls.
 */
var Captor = /** @class */ (function (_super) {
    __extends(Captor, _super);
    function Captor(container, renderer) {
        var _this = _super.call(this) || this;
        // Properties
        _this.container = container;
        _this.renderer = renderer;
        return _this;
    }
    return Captor;
}(types_1.TypedEventEmitter));
exports["default"] = Captor;


/***/ }),

/***/ "./node_modules/sigma/core/captors/mouse.js":
/*!**************************************************!*\
  !*** ./node_modules/sigma/core/captors/mouse.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var captor_1 = __importStar(__webpack_require__(/*! ./captor */ "./node_modules/sigma/core/captors/captor.js"));
/**
 * Constants.
 */
var DRAG_TIMEOUT = 100;
var DRAGGED_EVENTS_TOLERANCE = 3;
var MOUSE_INERTIA_DURATION = 200;
var MOUSE_INERTIA_RATIO = 3;
var MOUSE_ZOOM_DURATION = 250;
var ZOOMING_RATIO = 1.7;
var DOUBLE_CLICK_TIMEOUT = 300;
var DOUBLE_CLICK_ZOOMING_RATIO = 2.2;
var DOUBLE_CLICK_ZOOMING_DURATION = 200;
/**
 * Mouse captor class.
 *
 * @constructor
 */
var MouseCaptor = /** @class */ (function (_super) {
    __extends(MouseCaptor, _super);
    function MouseCaptor(container, renderer) {
        var _this = _super.call(this, container, renderer) || this;
        // State
        _this.enabled = true;
        _this.draggedEvents = 0;
        _this.downStartTime = null;
        _this.lastMouseX = null;
        _this.lastMouseY = null;
        _this.isMouseDown = false;
        _this.isMoving = false;
        _this.movingTimeout = null;
        _this.startCameraState = null;
        _this.clicks = 0;
        _this.doubleClickTimeout = null;
        _this.currentWheelDirection = 0;
        // Binding methods
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleRightClick = _this.handleRightClick.bind(_this);
        _this.handleDown = _this.handleDown.bind(_this);
        _this.handleUp = _this.handleUp.bind(_this);
        _this.handleMove = _this.handleMove.bind(_this);
        _this.handleWheel = _this.handleWheel.bind(_this);
        _this.handleOut = _this.handleOut.bind(_this);
        // Binding events
        container.addEventListener("click", _this.handleClick, false);
        container.addEventListener("contextmenu", _this.handleRightClick, false);
        container.addEventListener("mousedown", _this.handleDown, false);
        container.addEventListener("wheel", _this.handleWheel, false);
        container.addEventListener("mouseout", _this.handleOut, false);
        document.addEventListener("mousemove", _this.handleMove, false);
        document.addEventListener("mouseup", _this.handleUp, false);
        return _this;
    }
    MouseCaptor.prototype.kill = function () {
        var container = this.container;
        container.removeEventListener("click", this.handleClick);
        container.removeEventListener("contextmenu", this.handleRightClick);
        container.removeEventListener("mousedown", this.handleDown);
        container.removeEventListener("wheel", this.handleWheel);
        container.removeEventListener("mouseout", this.handleOut);
        document.removeEventListener("mousemove", this.handleMove);
        document.removeEventListener("mouseup", this.handleUp);
    };
    MouseCaptor.prototype.handleClick = function (e) {
        var _this = this;
        if (!this.enabled)
            return;
        this.clicks++;
        if (this.clicks === 2) {
            this.clicks = 0;
            if (typeof this.doubleClickTimeout === "number") {
                clearTimeout(this.doubleClickTimeout);
                this.doubleClickTimeout = null;
            }
            return this.handleDoubleClick(e);
        }
        setTimeout(function () {
            _this.clicks = 0;
            _this.doubleClickTimeout = null;
        }, DOUBLE_CLICK_TIMEOUT);
        // NOTE: this is here to prevent click events on drag
        if (this.draggedEvents < DRAGGED_EVENTS_TOLERANCE)
            this.emit("click", (0, captor_1.getMouseCoords)(e, this.container));
    };
    MouseCaptor.prototype.handleRightClick = function (e) {
        if (!this.enabled)
            return;
        this.emit("rightClick", (0, captor_1.getMouseCoords)(e, this.container));
    };
    MouseCaptor.prototype.handleDoubleClick = function (e) {
        if (!this.enabled)
            return;
        e.preventDefault();
        e.stopPropagation();
        var mouseCoords = (0, captor_1.getMouseCoords)(e, this.container);
        this.emit("doubleClick", mouseCoords);
        if (mouseCoords.sigmaDefaultPrevented)
            return;
        // default behavior
        var camera = this.renderer.getCamera();
        var newRatio = camera.getBoundedRatio(camera.getState().ratio / DOUBLE_CLICK_ZOOMING_RATIO);
        camera.animate(this.renderer.getViewportZoomedState((0, captor_1.getPosition)(e, this.container), newRatio), {
            easing: "quadraticInOut",
            duration: DOUBLE_CLICK_ZOOMING_DURATION,
        });
    };
    MouseCaptor.prototype.handleDown = function (e) {
        if (!this.enabled)
            return;
        // We only start dragging on left button
        if (e.button === 0) {
            this.startCameraState = this.renderer.getCamera().getState();
            var _a = (0, captor_1.getPosition)(e, this.container), x = _a.x, y = _a.y;
            this.lastMouseX = x;
            this.lastMouseY = y;
            this.draggedEvents = 0;
            this.downStartTime = Date.now();
            this.isMouseDown = true;
        }
        this.emit("mousedown", (0, captor_1.getMouseCoords)(e, this.container));
    };
    MouseCaptor.prototype.handleUp = function (e) {
        var _this = this;
        if (!this.enabled || !this.isMouseDown)
            return;
        var camera = this.renderer.getCamera();
        this.isMouseDown = false;
        if (typeof this.movingTimeout === "number") {
            clearTimeout(this.movingTimeout);
            this.movingTimeout = null;
        }
        var _a = (0, captor_1.getPosition)(e, this.container), x = _a.x, y = _a.y;
        var cameraState = camera.getState(), previousCameraState = camera.getPreviousState() || { x: 0, y: 0 };
        if (this.isMoving) {
            camera.animate({
                x: cameraState.x + MOUSE_INERTIA_RATIO * (cameraState.x - previousCameraState.x),
                y: cameraState.y + MOUSE_INERTIA_RATIO * (cameraState.y - previousCameraState.y),
            }, {
                duration: MOUSE_INERTIA_DURATION,
                easing: "quadraticOut",
            });
        }
        else if (this.lastMouseX !== x || this.lastMouseY !== y) {
            camera.setState({
                x: cameraState.x,
                y: cameraState.y,
            });
        }
        this.isMoving = false;
        setTimeout(function () {
            _this.draggedEvents = 0;
            // NOTE: this refresh is here to make sure `hideEdgesOnMove` can work
            // when someone releases camera pan drag after having stopped moving.
            // See commit: https://github.com/jacomyal/sigma.js/commit/cfd9197f70319109db6b675dd7c82be493ca95a2
            // See also issue: https://github.com/jacomyal/sigma.js/issues/1290
            // It could be possible to render instead of scheduling a refresh but for
            // now it seems good enough.
            _this.renderer.refresh();
        }, 0);
        this.emit("mouseup", (0, captor_1.getMouseCoords)(e, this.container));
    };
    MouseCaptor.prototype.handleMove = function (e) {
        var _this = this;
        if (!this.enabled)
            return;
        var mouseCoords = (0, captor_1.getMouseCoords)(e, this.container);
        // Always trigger a "mousemovebody" event, so that it is possible to develop
        // a drag-and-drop effect that works even when the mouse is out of the
        // container:
        this.emit("mousemovebody", mouseCoords);
        // Only trigger the "mousemove" event when the mouse is actually hovering
        // the container, to avoid weirdly hovering nodes and/or edges when the
        // mouse is not hover the container:
        if (e.target === this.container) {
            this.emit("mousemove", mouseCoords);
        }
        if (mouseCoords.sigmaDefaultPrevented)
            return;
        // Handle the case when "isMouseDown" all the time, to allow dragging the
        // stage while the mouse is not hover the container:
        if (this.isMouseDown) {
            this.isMoving = true;
            this.draggedEvents++;
            if (typeof this.movingTimeout === "number") {
                clearTimeout(this.movingTimeout);
            }
            this.movingTimeout = window.setTimeout(function () {
                _this.movingTimeout = null;
                _this.isMoving = false;
            }, DRAG_TIMEOUT);
            var camera = this.renderer.getCamera();
            var _a = (0, captor_1.getPosition)(e, this.container), eX = _a.x, eY = _a.y;
            var lastMouse = this.renderer.viewportToFramedGraph({
                x: this.lastMouseX,
                y: this.lastMouseY,
            });
            var mouse = this.renderer.viewportToFramedGraph({ x: eX, y: eY });
            var offsetX = lastMouse.x - mouse.x, offsetY = lastMouse.y - mouse.y;
            var cameraState = camera.getState();
            var x = cameraState.x + offsetX, y = cameraState.y + offsetY;
            camera.setState({ x: x, y: y });
            this.lastMouseX = eX;
            this.lastMouseY = eY;
            e.preventDefault();
            e.stopPropagation();
        }
    };
    MouseCaptor.prototype.handleWheel = function (e) {
        var _this = this;
        if (!this.enabled)
            return;
        e.preventDefault();
        e.stopPropagation();
        var delta = (0, captor_1.getWheelDelta)(e);
        if (!delta)
            return;
        var wheelCoords = (0, captor_1.getWheelCoords)(e, this.container);
        this.emit("wheel", wheelCoords);
        if (wheelCoords.sigmaDefaultPrevented)
            return;
        // Default behavior
        var ratioDiff = delta > 0 ? 1 / ZOOMING_RATIO : ZOOMING_RATIO;
        var camera = this.renderer.getCamera();
        var newRatio = camera.getBoundedRatio(camera.getState().ratio * ratioDiff);
        var wheelDirection = delta > 0 ? 1 : -1;
        var now = Date.now();
        // Cancel events that are too close too each other and in the same direction:
        if (this.currentWheelDirection === wheelDirection &&
            this.lastWheelTriggerTime &&
            now - this.lastWheelTriggerTime < MOUSE_ZOOM_DURATION / 5) {
            return;
        }
        camera.animate(this.renderer.getViewportZoomedState((0, captor_1.getPosition)(e, this.container), newRatio), {
            easing: "quadraticOut",
            duration: MOUSE_ZOOM_DURATION,
        }, function () {
            _this.currentWheelDirection = 0;
        });
        this.currentWheelDirection = wheelDirection;
        this.lastWheelTriggerTime = now;
    };
    MouseCaptor.prototype.handleOut = function () {
        // TODO: dispatch event
    };
    return MouseCaptor;
}(captor_1.default));
exports["default"] = MouseCaptor;


/***/ }),

/***/ "./node_modules/sigma/core/captors/touch.js":
/*!**************************************************!*\
  !*** ./node_modules/sigma/core/captors/touch.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var captor_1 = __importStar(__webpack_require__(/*! ./captor */ "./node_modules/sigma/core/captors/captor.js"));
var DRAG_TIMEOUT = 200;
var TOUCH_INERTIA_RATIO = 3;
var TOUCH_INERTIA_DURATION = 200;
/**
 * Touch captor class.
 *
 * @constructor
 */
var TouchCaptor = /** @class */ (function (_super) {
    __extends(TouchCaptor, _super);
    function TouchCaptor(container, renderer) {
        var _this = _super.call(this, container, renderer) || this;
        _this.enabled = true;
        _this.isMoving = false;
        _this.hasMoved = false;
        _this.touchMode = 0; // number of touches down
        _this.startTouchesPositions = [];
        // Binding methods:
        _this.handleStart = _this.handleStart.bind(_this);
        _this.handleLeave = _this.handleLeave.bind(_this);
        _this.handleMove = _this.handleMove.bind(_this);
        // Binding events
        container.addEventListener("touchstart", _this.handleStart, false);
        container.addEventListener("touchend", _this.handleLeave, false);
        container.addEventListener("touchcancel", _this.handleLeave, false);
        container.addEventListener("touchmove", _this.handleMove, false);
        return _this;
    }
    TouchCaptor.prototype.kill = function () {
        var container = this.container;
        container.removeEventListener("touchstart", this.handleStart);
        container.removeEventListener("touchend", this.handleLeave);
        container.removeEventListener("touchcancel", this.handleLeave);
        container.removeEventListener("touchmove", this.handleMove);
    };
    TouchCaptor.prototype.getDimensions = function () {
        return {
            width: this.container.offsetWidth,
            height: this.container.offsetHeight,
        };
    };
    TouchCaptor.prototype.dispatchRelatedMouseEvent = function (type, e, touch, emitter) {
        var mousePosition = touch || e.touches[0];
        var mouseEvent = new MouseEvent(type, {
            clientX: mousePosition.clientX,
            clientY: mousePosition.clientY,
            altKey: e.altKey,
            ctrlKey: e.ctrlKey,
        });
        mouseEvent.isFakeSigmaMouseEvent = true;
        (emitter || this.container).dispatchEvent(mouseEvent);
    };
    TouchCaptor.prototype.handleStart = function (e) {
        var _this = this;
        if (!this.enabled)
            return;
        // Prevent default to avoid default browser behaviors...
        e.preventDefault();
        // ...but simulate mouse behavior anyway, to get the MouseCaptor working as well:
        if (e.touches.length === 1)
            this.dispatchRelatedMouseEvent("mousedown", e);
        var touches = (0, captor_1.getTouchesArray)(e.touches);
        this.touchMode = touches.length;
        this.startCameraState = this.renderer.getCamera().getState();
        this.startTouchesPositions = touches.map(function (touch) { return (0, captor_1.getPosition)(touch, _this.container); });
        this.lastTouches = touches;
        this.lastTouchesPositions = this.startTouchesPositions;
        // When there are two touches down, let's record distance and angle as well:
        if (this.touchMode === 2) {
            var _a = __read(this.startTouchesPositions, 2), _b = _a[0], x0 = _b.x, y0 = _b.y, _c = _a[1], x1 = _c.x, y1 = _c.y;
            this.startTouchesAngle = Math.atan2(y1 - y0, x1 - x0);
            this.startTouchesDistance = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));
        }
        this.emit("touchdown", (0, captor_1.getTouchCoords)(e, this.container));
    };
    TouchCaptor.prototype.handleLeave = function (e) {
        if (!this.enabled)
            return;
        // Prevent default to avoid default browser behaviors...
        e.preventDefault();
        // ...but simulate mouse behavior anyway, to get the MouseCaptor working as well:
        if (e.touches.length === 0 && this.lastTouches && this.lastTouches.length) {
            this.dispatchRelatedMouseEvent("mouseup", e, this.lastTouches[0], document);
            // ... and only click if no move was made
            if (!this.hasMoved) {
                this.dispatchRelatedMouseEvent("click", e, this.lastTouches[0]);
            }
        }
        if (this.movingTimeout) {
            this.isMoving = false;
            clearTimeout(this.movingTimeout);
        }
        switch (this.touchMode) {
            case 2:
                if (e.touches.length === 1) {
                    this.handleStart(e);
                    e.preventDefault();
                    break;
                }
            /* falls through */
            case 1:
                // TODO
                // Dispatch event
                if (this.isMoving) {
                    var camera = this.renderer.getCamera();
                    var cameraState = camera.getState(), previousCameraState = camera.getPreviousState() || { x: 0, y: 0 };
                    camera.animate({
                        x: cameraState.x + TOUCH_INERTIA_RATIO * (cameraState.x - previousCameraState.x),
                        y: cameraState.y + TOUCH_INERTIA_RATIO * (cameraState.y - previousCameraState.y),
                    }, {
                        duration: TOUCH_INERTIA_DURATION,
                        easing: "quadraticOut",
                    });
                }
                this.hasMoved = false;
                this.isMoving = false;
                this.touchMode = 0;
                break;
        }
        this.emit("touchup", (0, captor_1.getTouchCoords)(e, this.container));
    };
    TouchCaptor.prototype.handleMove = function (e) {
        var _a;
        var _this = this;
        if (!this.enabled)
            return;
        // Prevent default to avoid default browser behaviors...
        e.preventDefault();
        // ...but simulate mouse behavior anyway, to get the MouseCaptor working as well:
        if (e.touches.length === 1)
            this.dispatchRelatedMouseEvent("mousemove", e);
        var touches = (0, captor_1.getTouchesArray)(e.touches);
        var touchesPositions = touches.map(function (touch) { return (0, captor_1.getPosition)(touch, _this.container); });
        this.lastTouches = touches;
        this.lastTouchesPositions = touchesPositions;
        // If a move was initiated at some point and we get back to startpoint,
        // we should still consider that we did move (which also happens after a
        // multiple touch when only one touch remains in which case handleStart
        // is recalled within handleLeave).
        // Now, some mobile browsers report zero-distance moves so we also check that
        // one of the touches did actually move from the origin position.
        this.hasMoved || (this.hasMoved = touchesPositions.some(function (position, idx) {
            var startPosition = _this.startTouchesPositions[idx];
            return position.x !== startPosition.x || position.y !== startPosition.y;
        }));
        // If there was no move, do not trigger touch moves behavior
        if (!this.hasMoved) {
            return;
        }
        this.isMoving = true;
        if (this.movingTimeout)
            clearTimeout(this.movingTimeout);
        this.movingTimeout = window.setTimeout(function () {
            _this.isMoving = false;
        }, DRAG_TIMEOUT);
        var camera = this.renderer.getCamera();
        var startCameraState = this.startCameraState;
        switch (this.touchMode) {
            case 1: {
                var _b = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0]), xStart = _b.x, yStart = _b.y;
                var _c = this.renderer.viewportToFramedGraph(touchesPositions[0]), x = _c.x, y = _c.y;
                camera.setState({
                    x: startCameraState.x + xStart - x,
                    y: startCameraState.y + yStart - y,
                });
                break;
            }
            case 2: {
                /**
                 * Here is the thinking here:
                 *
                 * 1. We can find the new angle and ratio, by comparing the vector from "touch one" to "touch two" at the start
                 *    of the d'n'd and now
                 *
                 * 2. We can use `Camera#viewportToGraph` inside formula to retrieve the new camera position, using the graph
                 *    position of a touch at the beginning of the d'n'd (using `startCamera.viewportToGraph`) and the viewport
                 *    position of this same touch now
                 */
                var newCameraState = {};
                var _d = touchesPositions[0], x0 = _d.x, y0 = _d.y;
                var _e = touchesPositions[1], x1 = _e.x, y1 = _e.y;
                var angleDiff = Math.atan2(y1 - y0, x1 - x0) - this.startTouchesAngle;
                var ratioDiff = Math.hypot(y1 - y0, x1 - x0) / this.startTouchesDistance;
                // 1.
                var newRatio = camera.getBoundedRatio(startCameraState.ratio / ratioDiff);
                newCameraState.ratio = newRatio;
                newCameraState.angle = startCameraState.angle + angleDiff;
                // 2.
                var dimensions = this.getDimensions();
                var touchGraphPosition = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0], { cameraState: startCameraState });
                var smallestDimension = Math.min(dimensions.width, dimensions.height);
                var dx = smallestDimension / dimensions.width;
                var dy = smallestDimension / dimensions.height;
                var ratio = newRatio / smallestDimension;
                // Align with center of the graph:
                var x = x0 - smallestDimension / 2 / dx;
                var y = y0 - smallestDimension / 2 / dy;
                // Rotate:
                _a = __read([
                    x * Math.cos(-newCameraState.angle) - y * Math.sin(-newCameraState.angle),
                    y * Math.cos(-newCameraState.angle) + x * Math.sin(-newCameraState.angle),
                ], 2), x = _a[0], y = _a[1];
                newCameraState.x = touchGraphPosition.x - x * ratio;
                newCameraState.y = touchGraphPosition.y + y * ratio;
                camera.setState(newCameraState);
                break;
            }
        }
        this.emit("touchmove", (0, captor_1.getTouchCoords)(e, this.container));
    };
    return TouchCaptor;
}(captor_1.default));
exports["default"] = TouchCaptor;


/***/ }),

/***/ "./node_modules/sigma/core/labels.js":
/*!*******************************************!*\
  !*** ./node_modules/sigma/core/labels.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.edgeLabelsToDisplayFromNodes = exports.LabelGrid = void 0;
/**
 * Class representing a single candidate for the label grid selection.
 *
 * It also describes a deterministic way to compare two candidates to assess
 * which one is better.
 */
var LabelCandidate = /** @class */ (function () {
    function LabelCandidate(key, size) {
        this.key = key;
        this.size = size;
    }
    LabelCandidate.compare = function (first, second) {
        // First we compare by size
        if (first.size > second.size)
            return -1;
        if (first.size < second.size)
            return 1;
        // Then since no two nodes can have the same key, we use it to
        // deterministically tie-break by key
        if (first.key > second.key)
            return 1;
        // NOTE: this comparator cannot return 0
        return -1;
    };
    return LabelCandidate;
}());
/**
 * Class representing a 2D spatial grid divided into constant-size cells.
 */
var LabelGrid = /** @class */ (function () {
    function LabelGrid() {
        this.width = 0;
        this.height = 0;
        this.cellSize = 0;
        this.columns = 0;
        this.rows = 0;
        this.cells = {};
    }
    LabelGrid.prototype.resizeAndClear = function (dimensions, cellSize) {
        this.width = dimensions.width;
        this.height = dimensions.height;
        this.cellSize = cellSize;
        this.columns = Math.ceil(dimensions.width / cellSize);
        this.rows = Math.ceil(dimensions.height / cellSize);
        this.cells = {};
    };
    LabelGrid.prototype.getIndex = function (pos) {
        var xIndex = Math.floor(pos.x / this.cellSize);
        var yIndex = Math.floor(pos.y / this.cellSize);
        return yIndex * this.columns + xIndex;
    };
    LabelGrid.prototype.add = function (key, size, pos) {
        var candidate = new LabelCandidate(key, size);
        var index = this.getIndex(pos);
        var cell = this.cells[index];
        if (!cell) {
            cell = [];
            this.cells[index] = cell;
        }
        cell.push(candidate);
    };
    LabelGrid.prototype.organize = function () {
        for (var k in this.cells) {
            var cell = this.cells[k];
            cell.sort(LabelCandidate.compare);
        }
    };
    LabelGrid.prototype.getLabelsToDisplay = function (ratio, density) {
        // TODO: work on visible nodes to optimize? ^ -> threshold outside so that memoization works?
        // TODO: adjust threshold lower, but increase cells a bit?
        // TODO: hunt for geom issue in disguise
        // TODO: memoize while ratio does not move. method to force recompute
        var cellArea = this.cellSize * this.cellSize;
        var scaledCellArea = cellArea / ratio / ratio;
        var scaledDensity = (scaledCellArea * density) / cellArea;
        var labelsToDisplayPerCell = Math.ceil(scaledDensity);
        var labels = [];
        for (var k in this.cells) {
            var cell = this.cells[k];
            for (var i = 0; i < Math.min(labelsToDisplayPerCell, cell.length); i++) {
                labels.push(cell[i].key);
            }
        }
        return labels;
    };
    return LabelGrid;
}());
exports.LabelGrid = LabelGrid;
/**
 * Label heuristic selecting edge labels to display, based on displayed node
 * labels
 *
 * @param  {object} params                 - Parameters:
 * @param  {Set}      displayedNodeLabels  - Currently displayed node labels.
 * @param  {Set}      highlightedNodes     - Highlighted nodes.
 * @param  {Graph}    graph                - The rendered graph.
 * @param  {string}   hoveredNode          - Hovered node (optional)
 * @return {Array}                         - The selected labels.
 */
function edgeLabelsToDisplayFromNodes(params) {
    var graph = params.graph, hoveredNode = params.hoveredNode, highlightedNodes = params.highlightedNodes, displayedNodeLabels = params.displayedNodeLabels;
    var worthyEdges = [];
    // TODO: the code below can be optimized using #.forEach and batching the code per adj
    // We should display an edge's label if:
    //   - Any of its extremities is highlighted or hovered
    //   - Both of its extremities has its label shown
    graph.forEachEdge(function (edge, _, source, target) {
        if (source === hoveredNode ||
            target === hoveredNode ||
            highlightedNodes.has(source) ||
            highlightedNodes.has(target) ||
            (displayedNodeLabels.has(source) && displayedNodeLabels.has(target))) {
            worthyEdges.push(edge);
        }
    });
    return worthyEdges;
}
exports.edgeLabelsToDisplayFromNodes = edgeLabelsToDisplayFromNodes;


/***/ }),

/***/ "./node_modules/sigma/core/quadtree.js":
/*!*********************************************!*\
  !*** ./node_modules/sigma/core/quadtree.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rectangleCollidesWithQuad = exports.squareCollidesWithQuad = exports.getCircumscribedAlignedRectangle = exports.isRectangleAligned = void 0;
/**
 * Sigma.js Quad Tree Class
 * =========================
 *
 * Class implementing the quad tree data structure used to solve hovers and
 * determine which elements are currently in the scope of the camera so that
 * we don't waste time rendering things the user cannot see anyway.
 * @module
 */
/* eslint no-nested-ternary: 0 */
/* eslint no-constant-condition: 0 */
var extend_1 = __importDefault(__webpack_require__(/*! @yomguithereal/helpers/extend */ "./node_modules/@yomguithereal/helpers/extend.js"));
/**
 * Notes:
 *
 *   - a square can be represented as topleft + width, saying for the quad blocks,
 *     to reduce overall memory usage (which is already pretty low).
 *   - this implementation of a quadtree is often called a MX-CIF quadtree.
 *   - we could explore spatial hashing (hilbert quadtrees, notably).
 */
/**
 * Constants.
 *
 * Note that since we are representing a static 4-ary tree, the indices of the
 * quadrants are the following:
 *   - TOP_LEFT:     4i + b
 *   - TOP_RIGHT:    4i + 2b
 *   - BOTTOM_LEFT:  4i + 3b
 *   - BOTTOM_RIGHT: 4i + 4b
 */
var BLOCKS = 4;
var MAX_LEVEL = 5;
// Outside block is max block index + 1, i.e.:
// BLOCKS * ((4 * (4 ** MAX_LEVEL) - 1) / 3)
var OUTSIDE_BLOCK = 5460;
var X_OFFSET = 0;
var Y_OFFSET = 1;
var WIDTH_OFFSET = 2;
var HEIGHT_OFFSET = 3;
var TOP_LEFT = 1;
var TOP_RIGHT = 2;
var BOTTOM_LEFT = 3;
var BOTTOM_RIGHT = 4;
var hasWarnedTooMuchOutside = false;
/**
 * Geometry helpers.
 */
/**
 * Function returning whether the given rectangle is axis-aligned.
 *
 * @param  {Rectangle} rect
 * @return {boolean}
 */
function isRectangleAligned(rect) {
    return rect.x1 === rect.x2 || rect.y1 === rect.y2;
}
exports.isRectangleAligned = isRectangleAligned;
/**
 * Function returning the smallest rectangle that contains the given rectangle, and that is aligned with the axis.
 *
 * @param {Rectangle} rect
 * @return {Rectangle}
 */
function getCircumscribedAlignedRectangle(rect) {
    var width = Math.sqrt(Math.pow(rect.x2 - rect.x1, 2) + Math.pow(rect.y2 - rect.y1, 2));
    var heightVector = {
        x: ((rect.y1 - rect.y2) * rect.height) / width,
        y: ((rect.x2 - rect.x1) * rect.height) / width,
    };
    // Compute all corners:
    var tl = { x: rect.x1, y: rect.y1 };
    var tr = { x: rect.x2, y: rect.y2 };
    var bl = {
        x: rect.x1 + heightVector.x,
        y: rect.y1 + heightVector.y,
    };
    var br = {
        x: rect.x2 + heightVector.x,
        y: rect.y2 + heightVector.y,
    };
    var xL = Math.min(tl.x, tr.x, bl.x, br.x);
    var xR = Math.max(tl.x, tr.x, bl.x, br.x);
    var yT = Math.min(tl.y, tr.y, bl.y, br.y);
    var yB = Math.max(tl.y, tr.y, bl.y, br.y);
    return {
        x1: xL,
        y1: yT,
        x2: xR,
        y2: yT,
        height: yB - yT,
    };
}
exports.getCircumscribedAlignedRectangle = getCircumscribedAlignedRectangle;
/**
 *
 * @param x1
 * @param y1
 * @param w
 * @param qx
 * @param qy
 * @param qw
 * @param qh
 */
function squareCollidesWithQuad(x1, y1, w, qx, qy, qw, qh) {
    return x1 < qx + qw && x1 + w > qx && y1 < qy + qh && y1 + w > qy;
}
exports.squareCollidesWithQuad = squareCollidesWithQuad;
function rectangleCollidesWithQuad(x1, y1, w, h, qx, qy, qw, qh) {
    return x1 < qx + qw && x1 + w > qx && y1 < qy + qh && y1 + h > qy;
}
exports.rectangleCollidesWithQuad = rectangleCollidesWithQuad;
function pointIsInQuad(x, y, qx, qy, qw, qh) {
    var xmp = qx + qw / 2, ymp = qy + qh / 2, top = y < ymp, left = x < xmp;
    return top ? (left ? TOP_LEFT : TOP_RIGHT) : left ? BOTTOM_LEFT : BOTTOM_RIGHT;
}
/**
 * Helper functions that are not bound to the class so an external user
 * cannot mess with them.
 */
function buildQuadrants(maxLevel, data) {
    // [block, level]
    var stack = [0, 0];
    while (stack.length) {
        var level = stack.pop(), block = stack.pop();
        var topLeftBlock = 4 * block + BLOCKS, topRightBlock = 4 * block + 2 * BLOCKS, bottomLeftBlock = 4 * block + 3 * BLOCKS, bottomRightBlock = 4 * block + 4 * BLOCKS;
        var x = data[block + X_OFFSET], y = data[block + Y_OFFSET], width = data[block + WIDTH_OFFSET], height = data[block + HEIGHT_OFFSET], hw = width / 2, hh = height / 2;
        data[topLeftBlock + X_OFFSET] = x;
        data[topLeftBlock + Y_OFFSET] = y;
        data[topLeftBlock + WIDTH_OFFSET] = hw;
        data[topLeftBlock + HEIGHT_OFFSET] = hh;
        data[topRightBlock + X_OFFSET] = x + hw;
        data[topRightBlock + Y_OFFSET] = y;
        data[topRightBlock + WIDTH_OFFSET] = hw;
        data[topRightBlock + HEIGHT_OFFSET] = hh;
        data[bottomLeftBlock + X_OFFSET] = x;
        data[bottomLeftBlock + Y_OFFSET] = y + hh;
        data[bottomLeftBlock + WIDTH_OFFSET] = hw;
        data[bottomLeftBlock + HEIGHT_OFFSET] = hh;
        data[bottomRightBlock + X_OFFSET] = x + hw;
        data[bottomRightBlock + Y_OFFSET] = y + hh;
        data[bottomRightBlock + WIDTH_OFFSET] = hw;
        data[bottomRightBlock + HEIGHT_OFFSET] = hh;
        if (level < maxLevel - 1) {
            stack.push(bottomRightBlock, level + 1);
            stack.push(bottomLeftBlock, level + 1);
            stack.push(topRightBlock, level + 1);
            stack.push(topLeftBlock, level + 1);
        }
    }
}
function insertNode(maxLevel, data, containers, key, x, y, size) {
    var x1 = x - size, y1 = y - size, w = size * 2;
    var level = 0, block = 0;
    while (true) {
        // If we reached max level
        if (level >= maxLevel) {
            containers[block] = containers[block] || [];
            containers[block].push(key);
            return;
        }
        var topLeftBlock = 4 * block + BLOCKS, topRightBlock = 4 * block + 2 * BLOCKS, bottomLeftBlock = 4 * block + 3 * BLOCKS, bottomRightBlock = 4 * block + 4 * BLOCKS;
        var collidingWithTopLeft = squareCollidesWithQuad(x1, y1, w, data[topLeftBlock + X_OFFSET], data[topLeftBlock + Y_OFFSET], data[topLeftBlock + WIDTH_OFFSET], data[topLeftBlock + HEIGHT_OFFSET]);
        var collidingWithTopRight = squareCollidesWithQuad(x1, y1, w, data[topRightBlock + X_OFFSET], data[topRightBlock + Y_OFFSET], data[topRightBlock + WIDTH_OFFSET], data[topRightBlock + HEIGHT_OFFSET]);
        var collidingWithBottomLeft = squareCollidesWithQuad(x1, y1, w, data[bottomLeftBlock + X_OFFSET], data[bottomLeftBlock + Y_OFFSET], data[bottomLeftBlock + WIDTH_OFFSET], data[bottomLeftBlock + HEIGHT_OFFSET]);
        var collidingWithBottomRight = squareCollidesWithQuad(x1, y1, w, data[bottomRightBlock + X_OFFSET], data[bottomRightBlock + Y_OFFSET], data[bottomRightBlock + WIDTH_OFFSET], data[bottomRightBlock + HEIGHT_OFFSET]);
        var collisions = [
            collidingWithTopLeft,
            collidingWithTopRight,
            collidingWithBottomLeft,
            collidingWithBottomRight,
        ].reduce(function (acc, current) {
            if (current)
                return acc + 1;
            else
                return acc;
        }, 0);
        // If we have no collision at root level, inject node in the outside block
        if (collisions === 0 && level === 0) {
            containers[OUTSIDE_BLOCK].push(key);
            if (!hasWarnedTooMuchOutside && containers[OUTSIDE_BLOCK].length >= 5) {
                hasWarnedTooMuchOutside = true;
                console.warn("sigma/quadtree.insertNode: At least 5 nodes are outside the global quadtree zone. " +
                    "You might have a problem with the normalization function or the custom bounding box.");
            }
            return;
        }
        // If we don't have at least a collision but deeper, there is an issue
        if (collisions === 0)
            throw new Error("sigma/quadtree.insertNode: no collision (level: ".concat(level, ", key: ").concat(key, ", x: ").concat(x, ", y: ").concat(y, ", size: ").concat(size, ")."));
        // If we have 3 collisions, we have a geometry problem obviously
        if (collisions === 3)
            throw new Error("sigma/quadtree.insertNode: 3 impossible collisions (level: ".concat(level, ", key: ").concat(key, ", x: ").concat(x, ", y: ").concat(y, ", size: ").concat(size, ")."));
        // If we have more that one collision, we stop here and store the node
        // in the relevant containers
        if (collisions > 1) {
            containers[block] = containers[block] || [];
            containers[block].push(key);
            return;
        }
        else {
            level++;
        }
        // Else we recurse into the correct quads
        if (collidingWithTopLeft)
            block = topLeftBlock;
        if (collidingWithTopRight)
            block = topRightBlock;
        if (collidingWithBottomLeft)
            block = bottomLeftBlock;
        if (collidingWithBottomRight)
            block = bottomRightBlock;
    }
}
function getNodesInAxisAlignedRectangleArea(maxLevel, data, containers, x1, y1, w, h) {
    // [block, level]
    var stack = [0, 0];
    var collectedNodes = [];
    var container;
    while (stack.length) {
        var level = stack.pop(), block = stack.pop();
        // Collecting nodes
        container = containers[block];
        if (container)
            (0, extend_1.default)(collectedNodes, container);
        // If we reached max level
        if (level >= maxLevel)
            continue;
        var topLeftBlock = 4 * block + BLOCKS, topRightBlock = 4 * block + 2 * BLOCKS, bottomLeftBlock = 4 * block + 3 * BLOCKS, bottomRightBlock = 4 * block + 4 * BLOCKS;
        var collidingWithTopLeft = rectangleCollidesWithQuad(x1, y1, w, h, data[topLeftBlock + X_OFFSET], data[topLeftBlock + Y_OFFSET], data[topLeftBlock + WIDTH_OFFSET], data[topLeftBlock + HEIGHT_OFFSET]);
        var collidingWithTopRight = rectangleCollidesWithQuad(x1, y1, w, h, data[topRightBlock + X_OFFSET], data[topRightBlock + Y_OFFSET], data[topRightBlock + WIDTH_OFFSET], data[topRightBlock + HEIGHT_OFFSET]);
        var collidingWithBottomLeft = rectangleCollidesWithQuad(x1, y1, w, h, data[bottomLeftBlock + X_OFFSET], data[bottomLeftBlock + Y_OFFSET], data[bottomLeftBlock + WIDTH_OFFSET], data[bottomLeftBlock + HEIGHT_OFFSET]);
        var collidingWithBottomRight = rectangleCollidesWithQuad(x1, y1, w, h, data[bottomRightBlock + X_OFFSET], data[bottomRightBlock + Y_OFFSET], data[bottomRightBlock + WIDTH_OFFSET], data[bottomRightBlock + HEIGHT_OFFSET]);
        if (collidingWithTopLeft)
            stack.push(topLeftBlock, level + 1);
        if (collidingWithTopRight)
            stack.push(topRightBlock, level + 1);
        if (collidingWithBottomLeft)
            stack.push(bottomLeftBlock, level + 1);
        if (collidingWithBottomRight)
            stack.push(bottomRightBlock, level + 1);
    }
    return collectedNodes;
}
/**
 * QuadTree class.
 *
 * @constructor
 * @param {object} boundaries - The graph boundaries.
 */
var QuadTree = /** @class */ (function () {
    function QuadTree(params) {
        var _a;
        if (params === void 0) { params = {}; }
        this.containers = (_a = {}, _a[OUTSIDE_BLOCK] = [], _a);
        this.cache = null;
        this.lastRectangle = null;
        // Allocating the underlying byte array
        var L = Math.pow(4, MAX_LEVEL);
        this.data = new Float32Array(BLOCKS * ((4 * L - 1) / 3));
        if (params.boundaries)
            this.resize(params.boundaries);
        else
            this.resize({
                x: 0,
                y: 0,
                width: 1,
                height: 1,
            });
    }
    QuadTree.prototype.add = function (key, x, y, size) {
        insertNode(MAX_LEVEL, this.data, this.containers, key, x, y, size);
        return this;
    };
    QuadTree.prototype.resize = function (boundaries) {
        this.clear();
        // Building the quadrants
        this.data[X_OFFSET] = boundaries.x;
        this.data[Y_OFFSET] = boundaries.y;
        this.data[WIDTH_OFFSET] = boundaries.width;
        this.data[HEIGHT_OFFSET] = boundaries.height;
        buildQuadrants(MAX_LEVEL, this.data);
    };
    QuadTree.prototype.clear = function () {
        var _a;
        this.containers = (_a = {}, _a[OUTSIDE_BLOCK] = [], _a);
        return this;
    };
    QuadTree.prototype.point = function (x, y) {
        var nodes = this.containers[OUTSIDE_BLOCK].slice();
        var block = 0, level = 0;
        do {
            if (this.containers[block])
                (0, extend_1.default)(nodes, this.containers[block]);
            var quad = pointIsInQuad(x, y, this.data[block + X_OFFSET], this.data[block + Y_OFFSET], this.data[block + WIDTH_OFFSET], this.data[block + HEIGHT_OFFSET]);
            block = 4 * block + quad * BLOCKS;
            level++;
        } while (level <= MAX_LEVEL);
        return nodes;
    };
    QuadTree.prototype.rectangle = function (x1, y1, x2, y2, height) {
        var lr = this.lastRectangle;
        if (lr && x1 === lr.x1 && x2 === lr.x2 && y1 === lr.y1 && y2 === lr.y2 && height === lr.height) {
            return this.cache;
        }
        this.lastRectangle = {
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,
            height: height,
        };
        // If the rectangle is shifted, we use the smallest aligned rectangle that contains the shifted one:
        if (!isRectangleAligned(this.lastRectangle))
            this.lastRectangle = getCircumscribedAlignedRectangle(this.lastRectangle);
        this.cache = getNodesInAxisAlignedRectangleArea(MAX_LEVEL, this.data, this.containers, x1, y1, Math.abs(x1 - x2) || Math.abs(y1 - y2), height);
        // Add all the nodes in the outside block, since they might be relevant, and since they should be very few:
        (0, extend_1.default)(this.cache, this.containers[OUTSIDE_BLOCK]);
        return this.cache;
    };
    return QuadTree;
}());
exports["default"] = QuadTree;


/***/ }),

/***/ "./node_modules/sigma/index.js":
/*!*************************************!*\
  !*** ./node_modules/sigma/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sigma = exports.MouseCaptor = exports.QuadTree = exports.Camera = void 0;
/**
 * Sigma.js Library Endpoint
 * =========================
 *
 * The library endpoint.
 * @module
 */
var sigma_1 = __importDefault(__webpack_require__(/*! ./sigma */ "./node_modules/sigma/sigma.js"));
exports.Sigma = sigma_1.default;
var camera_1 = __importDefault(__webpack_require__(/*! ./core/camera */ "./node_modules/sigma/core/camera.js"));
exports.Camera = camera_1.default;
var quadtree_1 = __importDefault(__webpack_require__(/*! ./core/quadtree */ "./node_modules/sigma/core/quadtree.js"));
exports.QuadTree = quadtree_1.default;
var mouse_1 = __importDefault(__webpack_require__(/*! ./core/captors/mouse */ "./node_modules/sigma/core/captors/mouse.js"));
exports.MouseCaptor = mouse_1.default;
exports["default"] = sigma_1.default;


/***/ }),

/***/ "./node_modules/sigma/rendering/canvas/edge-label.js":
/*!***********************************************************!*\
  !*** ./node_modules/sigma/rendering/canvas/edge-label.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function drawEdgeLabel(context, edgeData, sourceData, targetData, settings) {
    var size = settings.edgeLabelSize, font = settings.edgeLabelFont, weight = settings.edgeLabelWeight, color = settings.edgeLabelColor.attribute
        ? edgeData[settings.edgeLabelColor.attribute] || settings.edgeLabelColor.color || "#000"
        : settings.edgeLabelColor.color;
    var label = edgeData.label;
    if (!label)
        return;
    context.fillStyle = color;
    context.font = "".concat(weight, " ").concat(size, "px ").concat(font);
    // Computing positions without considering nodes sizes:
    var sSize = sourceData.size;
    var tSize = targetData.size;
    var sx = sourceData.x;
    var sy = sourceData.y;
    var tx = targetData.x;
    var ty = targetData.y;
    var cx = (sx + tx) / 2;
    var cy = (sy + ty) / 2;
    var dx = tx - sx;
    var dy = ty - sy;
    var d = Math.sqrt(dx * dx + dy * dy);
    if (d < sSize + tSize)
        return;
    // Adding nodes sizes:
    sx += (dx * sSize) / d;
    sy += (dy * sSize) / d;
    tx -= (dx * tSize) / d;
    ty -= (dy * tSize) / d;
    cx = (sx + tx) / 2;
    cy = (sy + ty) / 2;
    dx = tx - sx;
    dy = ty - sy;
    d = Math.sqrt(dx * dx + dy * dy);
    // Handling ellipsis
    var textLength = context.measureText(label).width;
    if (textLength > d) {
        var ellipsis = "…";
        label = label + ellipsis;
        textLength = context.measureText(label).width;
        while (textLength > d && label.length > 1) {
            label = label.slice(0, -2) + ellipsis;
            textLength = context.measureText(label).width;
        }
        if (label.length < 4)
            return;
    }
    var angle;
    if (dx > 0) {
        if (dy > 0)
            angle = Math.acos(dx / d);
        else
            angle = Math.asin(dy / d);
    }
    else {
        if (dy > 0)
            angle = Math.acos(dx / d) + Math.PI;
        else
            angle = Math.asin(dx / d) + Math.PI / 2;
    }
    context.save();
    context.translate(cx, cy);
    context.rotate(angle);
    context.fillText(label, -textLength / 2, edgeData.size / 2 + size);
    context.restore();
}
exports["default"] = drawEdgeLabel;


/***/ }),

/***/ "./node_modules/sigma/rendering/canvas/hover.js":
/*!******************************************************!*\
  !*** ./node_modules/sigma/rendering/canvas/hover.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var label_1 = __importDefault(__webpack_require__(/*! ./label */ "./node_modules/sigma/rendering/canvas/label.js"));
/**
 * Draw an hovered node.
 * - if there is no label => display a shadow on the node
 * - if the label box is bigger than node size => display a label box that contains the node with a shadow
 * - else node with shadow and the label box
 */
function drawHover(context, data, settings) {
    var size = settings.labelSize, font = settings.labelFont, weight = settings.labelWeight;
    context.font = "".concat(weight, " ").concat(size, "px ").concat(font);
    // Then we draw the label background
    context.fillStyle = "#FFF";
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.shadowBlur = 8;
    context.shadowColor = "#000";
    var PADDING = 2;
    if (typeof data.label === "string") {
        var textWidth = context.measureText(data.label).width, boxWidth = Math.round(textWidth + 5), boxHeight = Math.round(size + 2 * PADDING), radius = Math.max(data.size, size / 2) + PADDING;
        var angleRadian = Math.asin(boxHeight / 2 / radius);
        var xDeltaCoord = Math.sqrt(Math.abs(Math.pow(radius, 2) - Math.pow(boxHeight / 2, 2)));
        context.beginPath();
        context.moveTo(data.x + xDeltaCoord, data.y + boxHeight / 2);
        context.lineTo(data.x + radius + boxWidth, data.y + boxHeight / 2);
        context.lineTo(data.x + radius + boxWidth, data.y - boxHeight / 2);
        context.lineTo(data.x + xDeltaCoord, data.y - boxHeight / 2);
        context.arc(data.x, data.y, radius, angleRadian, -angleRadian);
        context.closePath();
        context.fill();
    }
    else {
        context.beginPath();
        context.arc(data.x, data.y, data.size + PADDING, 0, Math.PI * 2);
        context.closePath();
        context.fill();
    }
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.shadowBlur = 0;
    // And finally we draw the label
    (0, label_1.default)(context, data, settings);
}
exports["default"] = drawHover;


/***/ }),

/***/ "./node_modules/sigma/rendering/canvas/label.js":
/*!******************************************************!*\
  !*** ./node_modules/sigma/rendering/canvas/label.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function drawLabel(context, data, settings) {
    if (!data.label)
        return;
    var size = settings.labelSize, font = settings.labelFont, weight = settings.labelWeight, color = settings.labelColor.attribute
        ? data[settings.labelColor.attribute] || settings.labelColor.color || "#000"
        : settings.labelColor.color;
    context.fillStyle = color;
    context.font = "".concat(weight, " ").concat(size, "px ").concat(font);
    context.fillText(data.label, data.x + data.size + 3, data.y + size / 3);
}
exports["default"] = drawLabel;


/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/programs/common/edge.js":
/*!********************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/programs/common/edge.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createEdgeCompoundProgram = exports.AbstractEdgeProgram = void 0;
/**
 * Sigma.js WebGL Abstract Edge Program
 * =====================================
 *
 * @module
 */
var program_1 = __webpack_require__(/*! ./program */ "./node_modules/sigma/rendering/webgl/programs/common/program.js");
/**
 * Edge Program class.
 *
 * @constructor
 */
var AbstractEdgeProgram = /** @class */ (function (_super) {
    __extends(AbstractEdgeProgram, _super);
    function AbstractEdgeProgram(gl, vertexShaderSource, fragmentShaderSource, points, attributes) {
        return _super.call(this, gl, vertexShaderSource, fragmentShaderSource, points, attributes) || this;
    }
    return AbstractEdgeProgram;
}(program_1.AbstractProgram));
exports.AbstractEdgeProgram = AbstractEdgeProgram;
function createEdgeCompoundProgram(programClasses) {
    return /** @class */ (function () {
        function EdgeCompoundProgram(gl, renderer) {
            this.programs = programClasses.map(function (ProgramClass) { return new ProgramClass(gl, renderer); });
        }
        EdgeCompoundProgram.prototype.bufferData = function () {
            this.programs.forEach(function (program) { return program.bufferData(); });
        };
        EdgeCompoundProgram.prototype.allocate = function (capacity) {
            this.programs.forEach(function (program) { return program.allocate(capacity); });
        };
        EdgeCompoundProgram.prototype.bind = function () {
            // nothing todo, it's already done in each program constructor
        };
        EdgeCompoundProgram.prototype.computeIndices = function () {
            this.programs.forEach(function (program) { return program.computeIndices(); });
        };
        EdgeCompoundProgram.prototype.render = function (params) {
            this.programs.forEach(function (program) {
                program.bind();
                program.bufferData();
                program.render(params);
            });
        };
        EdgeCompoundProgram.prototype.process = function (sourceData, targetData, data, hidden, offset) {
            this.programs.forEach(function (program) { return program.process(sourceData, targetData, data, hidden, offset); });
        };
        return EdgeCompoundProgram;
    }());
}
exports.createEdgeCompoundProgram = createEdgeCompoundProgram;


/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/programs/common/node.js":
/*!********************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/programs/common/node.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createNodeCompoundProgram = exports.AbstractNodeProgram = void 0;
/**
 * Sigma.js WebGL Abstract Node Program
 * =====================================
 *
 * @module
 */
var program_1 = __webpack_require__(/*! ./program */ "./node_modules/sigma/rendering/webgl/programs/common/program.js");
/**
 * Node Program class.
 *
 * @constructor
 */
var AbstractNodeProgram = /** @class */ (function (_super) {
    __extends(AbstractNodeProgram, _super);
    function AbstractNodeProgram(gl, vertexShaderSource, fragmentShaderSource, points, attributes) {
        var _this = _super.call(this, gl, vertexShaderSource, fragmentShaderSource, points, attributes) || this;
        // Locations
        _this.positionLocation = gl.getAttribLocation(_this.program, "a_position");
        _this.sizeLocation = gl.getAttribLocation(_this.program, "a_size");
        _this.colorLocation = gl.getAttribLocation(_this.program, "a_color");
        // Uniform Location
        var matrixLocation = gl.getUniformLocation(_this.program, "u_matrix");
        if (matrixLocation === null)
            throw new Error("AbstractNodeProgram: error while getting matrixLocation");
        _this.matrixLocation = matrixLocation;
        var ratioLocation = gl.getUniformLocation(_this.program, "u_ratio");
        if (ratioLocation === null)
            throw new Error("AbstractNodeProgram: error while getting ratioLocation");
        _this.ratioLocation = ratioLocation;
        var scaleLocation = gl.getUniformLocation(_this.program, "u_scale");
        if (scaleLocation === null)
            throw new Error("AbstractNodeProgram: error while getting scaleLocation");
        _this.scaleLocation = scaleLocation;
        return _this;
    }
    AbstractNodeProgram.prototype.bind = function () {
        var gl = this.gl;
        gl.enableVertexAttribArray(this.positionLocation);
        gl.enableVertexAttribArray(this.sizeLocation);
        gl.enableVertexAttribArray(this.colorLocation);
        gl.vertexAttribPointer(this.positionLocation, 2, gl.FLOAT, false, this.attributes * Float32Array.BYTES_PER_ELEMENT, 0);
        gl.vertexAttribPointer(this.sizeLocation, 1, gl.FLOAT, false, this.attributes * Float32Array.BYTES_PER_ELEMENT, 8);
        gl.vertexAttribPointer(this.colorLocation, 4, gl.UNSIGNED_BYTE, true, this.attributes * Float32Array.BYTES_PER_ELEMENT, 12);
    };
    return AbstractNodeProgram;
}(program_1.AbstractProgram));
exports.AbstractNodeProgram = AbstractNodeProgram;
/**
 * Helper function combining two or more programs into a single compound one.
 * Note that this is more a quick & easy way to combine program than a really
 * performant option. More performant programs can be written entirely.
 *
 * @param  {array}    programClasses - Program classes to combine.
 * @return {function}
 */
function createNodeCompoundProgram(programClasses) {
    return /** @class */ (function () {
        function NodeCompoundProgram(gl, renderer) {
            this.programs = programClasses.map(function (ProgramClass) { return new ProgramClass(gl, renderer); });
        }
        NodeCompoundProgram.prototype.bufferData = function () {
            this.programs.forEach(function (program) { return program.bufferData(); });
        };
        NodeCompoundProgram.prototype.allocate = function (capacity) {
            this.programs.forEach(function (program) { return program.allocate(capacity); });
        };
        NodeCompoundProgram.prototype.bind = function () {
            // nothing todo, it's already done in each program constructor
        };
        NodeCompoundProgram.prototype.render = function (params) {
            this.programs.forEach(function (program) {
                program.bind();
                program.bufferData();
                program.render(params);
            });
        };
        NodeCompoundProgram.prototype.process = function (data, hidden, offset) {
            this.programs.forEach(function (program) { return program.process(data, hidden, offset); });
        };
        return NodeCompoundProgram;
    }());
}
exports.createNodeCompoundProgram = createNodeCompoundProgram;


/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/programs/common/program.js":
/*!***********************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/programs/common/program.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractProgram = void 0;
/**
 * Sigma.js WebGL Renderer Program
 * ================================
 *
 * Class representing a single WebGL program used by sigma's WebGL renderer.
 * @module
 */
var utils_1 = __webpack_require__(/*! ../../shaders/utils */ "./node_modules/sigma/rendering/webgl/shaders/utils.js");
/**
 * Abstract Program class.
 *
 * @constructor
 */
var AbstractProgram = /** @class */ (function () {
    function AbstractProgram(gl, vertexShaderSource, fragmentShaderSource, points, attributes) {
        this.array = new Float32Array();
        this.points = points;
        this.attributes = attributes;
        this.gl = gl;
        this.vertexShaderSource = vertexShaderSource;
        this.fragmentShaderSource = fragmentShaderSource;
        var buffer = gl.createBuffer();
        if (buffer === null)
            throw new Error("AbstractProgram: error while creating the buffer");
        this.buffer = buffer;
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        this.vertexShader = (0, utils_1.loadVertexShader)(gl, this.vertexShaderSource);
        this.fragmentShader = (0, utils_1.loadFragmentShader)(gl, this.fragmentShaderSource);
        this.program = (0, utils_1.loadProgram)(gl, [this.vertexShader, this.fragmentShader]);
    }
    AbstractProgram.prototype.bufferData = function () {
        var gl = this.gl;
        gl.bufferData(gl.ARRAY_BUFFER, this.array, gl.DYNAMIC_DRAW);
    };
    AbstractProgram.prototype.allocate = function (capacity) {
        this.array = new Float32Array(this.points * this.attributes * capacity);
    };
    AbstractProgram.prototype.hasNothingToRender = function () {
        return this.array.length === 0;
    };
    return AbstractProgram;
}());
exports.AbstractProgram = AbstractProgram;


/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/programs/edge.arrow.js":
/*!*******************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/programs/edge.arrow.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Sigma.js WebGL Renderer Edge Arrow Program
 * ===========================================
 *
 * Compound program rendering edges as an arrow from the source to the target.
 * @module
 */
var edge_1 = __webpack_require__(/*! ./common/edge */ "./node_modules/sigma/rendering/webgl/programs/common/edge.js");
var edge_arrowHead_1 = __importDefault(__webpack_require__(/*! ./edge.arrowHead */ "./node_modules/sigma/rendering/webgl/programs/edge.arrowHead.js"));
var edge_clamped_1 = __importDefault(__webpack_require__(/*! ./edge.clamped */ "./node_modules/sigma/rendering/webgl/programs/edge.clamped.js"));
var EdgeArrowProgram = (0, edge_1.createEdgeCompoundProgram)([edge_clamped_1.default, edge_arrowHead_1.default]);
exports["default"] = EdgeArrowProgram;


/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/programs/edge.arrowHead.js":
/*!***********************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/programs/edge.arrowHead.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(/*! ../../../utils */ "./node_modules/sigma/utils/index.js");
var edge_arrowHead_vert_glsl_1 = __importDefault(__webpack_require__(/*! ../shaders/edge.arrowHead.vert.glsl.js */ "./node_modules/sigma/rendering/webgl/shaders/edge.arrowHead.vert.glsl.js"));
var edge_arrowHead_frag_glsl_1 = __importDefault(__webpack_require__(/*! ../shaders/edge.arrowHead.frag.glsl.js */ "./node_modules/sigma/rendering/webgl/shaders/edge.arrowHead.frag.glsl.js"));
var edge_1 = __webpack_require__(/*! ./common/edge */ "./node_modules/sigma/rendering/webgl/programs/common/edge.js");
var POINTS = 3, ATTRIBUTES = 9, STRIDE = POINTS * ATTRIBUTES;
var EdgeArrowHeadProgram = /** @class */ (function (_super) {
    __extends(EdgeArrowHeadProgram, _super);
    function EdgeArrowHeadProgram(gl) {
        var _this = _super.call(this, gl, edge_arrowHead_vert_glsl_1.default, edge_arrowHead_frag_glsl_1.default, POINTS, ATTRIBUTES) || this;
        // Locations
        _this.positionLocation = gl.getAttribLocation(_this.program, "a_position");
        _this.colorLocation = gl.getAttribLocation(_this.program, "a_color");
        _this.normalLocation = gl.getAttribLocation(_this.program, "a_normal");
        _this.radiusLocation = gl.getAttribLocation(_this.program, "a_radius");
        _this.barycentricLocation = gl.getAttribLocation(_this.program, "a_barycentric");
        // Uniform locations
        var matrixLocation = gl.getUniformLocation(_this.program, "u_matrix");
        if (matrixLocation === null)
            throw new Error("EdgeArrowHeadProgram: error while getting matrixLocation");
        _this.matrixLocation = matrixLocation;
        var sqrtZoomRatioLocation = gl.getUniformLocation(_this.program, "u_sqrtZoomRatio");
        if (sqrtZoomRatioLocation === null)
            throw new Error("EdgeArrowHeadProgram: error while getting sqrtZoomRatioLocation");
        _this.sqrtZoomRatioLocation = sqrtZoomRatioLocation;
        var correctionRatioLocation = gl.getUniformLocation(_this.program, "u_correctionRatio");
        if (correctionRatioLocation === null)
            throw new Error("EdgeArrowHeadProgram: error while getting correctionRatioLocation");
        _this.correctionRatioLocation = correctionRatioLocation;
        _this.bind();
        return _this;
    }
    EdgeArrowHeadProgram.prototype.bind = function () {
        var gl = this.gl;
        // Bindings
        gl.enableVertexAttribArray(this.positionLocation);
        gl.enableVertexAttribArray(this.normalLocation);
        gl.enableVertexAttribArray(this.radiusLocation);
        gl.enableVertexAttribArray(this.colorLocation);
        gl.enableVertexAttribArray(this.barycentricLocation);
        gl.vertexAttribPointer(this.positionLocation, 2, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 0);
        gl.vertexAttribPointer(this.normalLocation, 2, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 8);
        gl.vertexAttribPointer(this.radiusLocation, 1, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 16);
        gl.vertexAttribPointer(this.colorLocation, 4, gl.UNSIGNED_BYTE, true, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 20);
        // TODO: maybe we can optimize here by packing this in a bit mask
        gl.vertexAttribPointer(this.barycentricLocation, 3, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 24);
    };
    EdgeArrowHeadProgram.prototype.computeIndices = function () {
        // nothing to do
    };
    EdgeArrowHeadProgram.prototype.process = function (sourceData, targetData, data, hidden, offset) {
        if (hidden) {
            for (var i_1 = offset * STRIDE, l = i_1 + STRIDE; i_1 < l; i_1++)
                this.array[i_1] = 0;
            return;
        }
        var thickness = data.size || 1, radius = targetData.size || 1, x1 = sourceData.x, y1 = sourceData.y, x2 = targetData.x, y2 = targetData.y, color = (0, utils_1.floatColor)(data.color);
        // Computing normals
        var dx = x2 - x1, dy = y2 - y1;
        var len = dx * dx + dy * dy, n1 = 0, n2 = 0;
        if (len) {
            len = 1 / Math.sqrt(len);
            n1 = -dy * len * thickness;
            n2 = dx * len * thickness;
        }
        var i = POINTS * ATTRIBUTES * offset;
        var array = this.array;
        // First point
        array[i++] = x2;
        array[i++] = y2;
        array[i++] = -n1;
        array[i++] = -n2;
        array[i++] = radius;
        array[i++] = color;
        array[i++] = 1;
        array[i++] = 0;
        array[i++] = 0;
        // Second point
        array[i++] = x2;
        array[i++] = y2;
        array[i++] = -n1;
        array[i++] = -n2;
        array[i++] = radius;
        array[i++] = color;
        array[i++] = 0;
        array[i++] = 1;
        array[i++] = 0;
        // Third point
        array[i++] = x2;
        array[i++] = y2;
        array[i++] = -n1;
        array[i++] = -n2;
        array[i++] = radius;
        array[i++] = color;
        array[i++] = 0;
        array[i++] = 0;
        array[i] = 1;
    };
    EdgeArrowHeadProgram.prototype.render = function (params) {
        if (this.hasNothingToRender())
            return;
        var gl = this.gl;
        var program = this.program;
        gl.useProgram(program);
        // Binding uniforms
        gl.uniformMatrix3fv(this.matrixLocation, false, params.matrix);
        gl.uniform1f(this.sqrtZoomRatioLocation, Math.sqrt(params.ratio));
        gl.uniform1f(this.correctionRatioLocation, params.correctionRatio);
        // Drawing:
        gl.drawArrays(gl.TRIANGLES, 0, this.array.length / ATTRIBUTES);
    };
    return EdgeArrowHeadProgram;
}(edge_1.AbstractEdgeProgram));
exports["default"] = EdgeArrowHeadProgram;


/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/programs/edge.clamped.js":
/*!*********************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/programs/edge.clamped.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var edge_1 = __webpack_require__(/*! ./common/edge */ "./node_modules/sigma/rendering/webgl/programs/common/edge.js");
var utils_1 = __webpack_require__(/*! ../../../utils */ "./node_modules/sigma/utils/index.js");
var edge_clamped_vert_glsl_1 = __importDefault(__webpack_require__(/*! ../shaders/edge.clamped.vert.glsl.js */ "./node_modules/sigma/rendering/webgl/shaders/edge.clamped.vert.glsl.js"));
var edge_frag_glsl_1 = __importDefault(__webpack_require__(/*! ../shaders/edge.frag.glsl.js */ "./node_modules/sigma/rendering/webgl/shaders/edge.frag.glsl.js"));
var POINTS = 4, ATTRIBUTES = 6, STRIDE = POINTS * ATTRIBUTES;
var EdgeClampedProgram = /** @class */ (function (_super) {
    __extends(EdgeClampedProgram, _super);
    function EdgeClampedProgram(gl) {
        var _this = _super.call(this, gl, edge_clamped_vert_glsl_1.default, edge_frag_glsl_1.default, POINTS, ATTRIBUTES) || this;
        // Initializing indices buffer
        var indicesBuffer = gl.createBuffer();
        if (indicesBuffer === null)
            throw new Error("EdgeClampedProgram: error while getting resolutionLocation");
        _this.indicesBuffer = indicesBuffer;
        // Locations:
        _this.positionLocation = gl.getAttribLocation(_this.program, "a_position");
        _this.colorLocation = gl.getAttribLocation(_this.program, "a_color");
        _this.normalLocation = gl.getAttribLocation(_this.program, "a_normal");
        _this.radiusLocation = gl.getAttribLocation(_this.program, "a_radius");
        // Uniform locations
        var matrixLocation = gl.getUniformLocation(_this.program, "u_matrix");
        if (matrixLocation === null)
            throw new Error("EdgeClampedProgram: error while getting matrixLocation");
        _this.matrixLocation = matrixLocation;
        var sqrtZoomRatioLocation = gl.getUniformLocation(_this.program, "u_sqrtZoomRatio");
        if (sqrtZoomRatioLocation === null)
            throw new Error("EdgeClampedProgram: error while getting cameraRatioLocation");
        _this.sqrtZoomRatioLocation = sqrtZoomRatioLocation;
        var correctionRatioLocation = gl.getUniformLocation(_this.program, "u_correctionRatio");
        if (correctionRatioLocation === null)
            throw new Error("EdgeClampedProgram: error while getting viewportRatioLocation");
        _this.correctionRatioLocation = correctionRatioLocation;
        // Enabling the OES_element_index_uint extension
        // NOTE: on older GPUs, this means that really large graphs won't
        // have all their edges rendered. But it seems that the
        // `OES_element_index_uint` is quite everywhere so we'll handle
        // the potential issue if it really arises.
        // NOTE: when using webgl2, the extension is enabled by default
        _this.canUse32BitsIndices = (0, utils_1.canUse32BitsIndices)(gl);
        _this.IndicesArray = _this.canUse32BitsIndices ? Uint32Array : Uint16Array;
        _this.indicesArray = new _this.IndicesArray();
        _this.indicesType = _this.canUse32BitsIndices ? gl.UNSIGNED_INT : gl.UNSIGNED_SHORT;
        _this.bind();
        return _this;
    }
    EdgeClampedProgram.prototype.bind = function () {
        var gl = this.gl;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indicesBuffer);
        // Bindings
        gl.enableVertexAttribArray(this.positionLocation);
        gl.enableVertexAttribArray(this.normalLocation);
        gl.enableVertexAttribArray(this.colorLocation);
        gl.enableVertexAttribArray(this.radiusLocation);
        gl.vertexAttribPointer(this.positionLocation, 2, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 0);
        gl.vertexAttribPointer(this.normalLocation, 2, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 8);
        gl.vertexAttribPointer(this.colorLocation, 4, gl.UNSIGNED_BYTE, true, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 16);
        gl.vertexAttribPointer(this.radiusLocation, 1, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 20);
    };
    EdgeClampedProgram.prototype.process = function (sourceData, targetData, data, hidden, offset) {
        if (hidden) {
            for (var i_1 = offset * STRIDE, l = i_1 + STRIDE; i_1 < l; i_1++)
                this.array[i_1] = 0;
            return;
        }
        var thickness = data.size || 1, x1 = sourceData.x, y1 = sourceData.y, x2 = targetData.x, y2 = targetData.y, radius = targetData.size || 1, color = (0, utils_1.floatColor)(data.color);
        // Computing normals
        var dx = x2 - x1, dy = y2 - y1;
        var len = dx * dx + dy * dy, n1 = 0, n2 = 0;
        if (len) {
            len = 1 / Math.sqrt(len);
            n1 = -dy * len * thickness;
            n2 = dx * len * thickness;
        }
        var i = POINTS * ATTRIBUTES * offset;
        var array = this.array;
        // First point
        array[i++] = x1;
        array[i++] = y1;
        array[i++] = n1;
        array[i++] = n2;
        array[i++] = color;
        array[i++] = 0;
        // First point flipped
        array[i++] = x1;
        array[i++] = y1;
        array[i++] = -n1;
        array[i++] = -n2;
        array[i++] = color;
        array[i++] = 0;
        // Second point
        array[i++] = x2;
        array[i++] = y2;
        array[i++] = n1;
        array[i++] = n2;
        array[i++] = color;
        array[i++] = radius;
        // Second point flipped
        array[i++] = x2;
        array[i++] = y2;
        array[i++] = -n1;
        array[i++] = -n2;
        array[i++] = color;
        array[i] = -radius;
    };
    EdgeClampedProgram.prototype.computeIndices = function () {
        var l = this.array.length / ATTRIBUTES;
        var size = l + l / 2;
        var indices = new this.IndicesArray(size);
        for (var i = 0, c = 0; i < l; i += 4) {
            indices[c++] = i;
            indices[c++] = i + 1;
            indices[c++] = i + 2;
            indices[c++] = i + 2;
            indices[c++] = i + 1;
            indices[c++] = i + 3;
        }
        this.indicesArray = indices;
    };
    EdgeClampedProgram.prototype.bufferData = function () {
        _super.prototype.bufferData.call(this);
        // Indices data
        var gl = this.gl;
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indicesArray, gl.STATIC_DRAW);
    };
    EdgeClampedProgram.prototype.render = function (params) {
        if (this.hasNothingToRender())
            return;
        var gl = this.gl;
        var program = this.program;
        gl.useProgram(program);
        // Binding uniforms
        gl.uniformMatrix3fv(this.matrixLocation, false, params.matrix);
        gl.uniform1f(this.sqrtZoomRatioLocation, Math.sqrt(params.ratio));
        gl.uniform1f(this.correctionRatioLocation, params.correctionRatio);
        // Drawing:
        gl.drawElements(gl.TRIANGLES, this.indicesArray.length, this.indicesType, 0);
    };
    return EdgeClampedProgram;
}(edge_1.AbstractEdgeProgram));
exports["default"] = EdgeClampedProgram;


/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/programs/edge.js":
/*!*************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/programs/edge.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Sigma.js WebGL Renderer Edge Program
 * =====================================
 *
 * Program rendering edges as thick lines using four points translated
 * orthogonally from the source & target's centers by half thickness.
 *
 * Rendering two triangles by using only four points is made possible through
 * the use of indices.
 *
 * This method should be faster than the 6 points / 2 triangles approach and
 * should handle thickness better than with gl.LINES.
 *
 * This version of the shader balances geometry computation evenly between
 * the CPU & GPU (normals are computed on the CPU side).
 * @module
 */
var utils_1 = __webpack_require__(/*! ../../../utils */ "./node_modules/sigma/utils/index.js");
var edge_vert_glsl_1 = __importDefault(__webpack_require__(/*! ../shaders/edge.vert.glsl.js */ "./node_modules/sigma/rendering/webgl/shaders/edge.vert.glsl.js"));
var edge_frag_glsl_1 = __importDefault(__webpack_require__(/*! ../shaders/edge.frag.glsl.js */ "./node_modules/sigma/rendering/webgl/shaders/edge.frag.glsl.js"));
var edge_1 = __webpack_require__(/*! ./common/edge */ "./node_modules/sigma/rendering/webgl/programs/common/edge.js");
var POINTS = 4, ATTRIBUTES = 5, STRIDE = POINTS * ATTRIBUTES;
var EdgeProgram = /** @class */ (function (_super) {
    __extends(EdgeProgram, _super);
    function EdgeProgram(gl) {
        var _this = _super.call(this, gl, edge_vert_glsl_1.default, edge_frag_glsl_1.default, POINTS, ATTRIBUTES) || this;
        // Initializing indices buffer
        var indicesBuffer = gl.createBuffer();
        if (indicesBuffer === null)
            throw new Error("EdgeProgram: error while creating indicesBuffer");
        _this.indicesBuffer = indicesBuffer;
        // Locations
        _this.positionLocation = gl.getAttribLocation(_this.program, "a_position");
        _this.colorLocation = gl.getAttribLocation(_this.program, "a_color");
        _this.normalLocation = gl.getAttribLocation(_this.program, "a_normal");
        var matrixLocation = gl.getUniformLocation(_this.program, "u_matrix");
        if (matrixLocation === null)
            throw new Error("EdgeProgram: error while getting matrixLocation");
        _this.matrixLocation = matrixLocation;
        var correctionRatioLocation = gl.getUniformLocation(_this.program, "u_correctionRatio");
        if (correctionRatioLocation === null)
            throw new Error("EdgeProgram: error while getting correctionRatioLocation");
        _this.correctionRatioLocation = correctionRatioLocation;
        var sqrtZoomRatioLocation = gl.getUniformLocation(_this.program, "u_sqrtZoomRatio");
        if (sqrtZoomRatioLocation === null)
            throw new Error("EdgeProgram: error while getting sqrtZoomRatioLocation");
        _this.sqrtZoomRatioLocation = sqrtZoomRatioLocation;
        // Enabling the OES_element_index_uint extension
        // NOTE: on older GPUs, this means that really large graphs won't
        // have all their edges rendered. But it seems that the
        // `OES_element_index_uint` is quite everywhere so we'll handle
        // the potential issue if it really arises.
        // NOTE: when using webgl2, the extension is enabled by default
        _this.canUse32BitsIndices = (0, utils_1.canUse32BitsIndices)(gl);
        _this.IndicesArray = _this.canUse32BitsIndices ? Uint32Array : Uint16Array;
        _this.indicesArray = new _this.IndicesArray();
        _this.indicesType = _this.canUse32BitsIndices ? gl.UNSIGNED_INT : gl.UNSIGNED_SHORT;
        _this.bind();
        return _this;
    }
    EdgeProgram.prototype.bind = function () {
        var gl = this.gl;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indicesBuffer);
        // Bindings
        gl.enableVertexAttribArray(this.positionLocation);
        gl.enableVertexAttribArray(this.normalLocation);
        gl.enableVertexAttribArray(this.colorLocation);
        gl.vertexAttribPointer(this.positionLocation, 2, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 0);
        gl.vertexAttribPointer(this.normalLocation, 2, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 8);
        gl.vertexAttribPointer(this.colorLocation, 4, gl.UNSIGNED_BYTE, true, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 16);
    };
    EdgeProgram.prototype.computeIndices = function () {
        var l = this.array.length / ATTRIBUTES;
        var size = l + l / 2;
        var indices = new this.IndicesArray(size);
        for (var i = 0, c = 0; i < l; i += 4) {
            indices[c++] = i;
            indices[c++] = i + 1;
            indices[c++] = i + 2;
            indices[c++] = i + 2;
            indices[c++] = i + 1;
            indices[c++] = i + 3;
        }
        this.indicesArray = indices;
    };
    EdgeProgram.prototype.bufferData = function () {
        _super.prototype.bufferData.call(this);
        // Indices data
        var gl = this.gl;
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indicesArray, gl.STATIC_DRAW);
    };
    EdgeProgram.prototype.process = function (sourceData, targetData, data, hidden, offset) {
        if (hidden) {
            for (var i_1 = offset * STRIDE, l = i_1 + STRIDE; i_1 < l; i_1++)
                this.array[i_1] = 0;
            return;
        }
        var thickness = data.size || 1, x1 = sourceData.x, y1 = sourceData.y, x2 = targetData.x, y2 = targetData.y, color = (0, utils_1.floatColor)(data.color);
        // Computing normals
        var dx = x2 - x1, dy = y2 - y1;
        var len = dx * dx + dy * dy, n1 = 0, n2 = 0;
        if (len) {
            len = 1 / Math.sqrt(len);
            n1 = -dy * len * thickness;
            n2 = dx * len * thickness;
        }
        var i = POINTS * ATTRIBUTES * offset;
        var array = this.array;
        // First point
        array[i++] = x1;
        array[i++] = y1;
        array[i++] = n1;
        array[i++] = n2;
        array[i++] = color;
        // First point flipped
        array[i++] = x1;
        array[i++] = y1;
        array[i++] = -n1;
        array[i++] = -n2;
        array[i++] = color;
        // Second point
        array[i++] = x2;
        array[i++] = y2;
        array[i++] = n1;
        array[i++] = n2;
        array[i++] = color;
        // Second point flipped
        array[i++] = x2;
        array[i++] = y2;
        array[i++] = -n1;
        array[i++] = -n2;
        array[i] = color;
    };
    EdgeProgram.prototype.render = function (params) {
        if (this.hasNothingToRender())
            return;
        var gl = this.gl;
        var program = this.program;
        gl.useProgram(program);
        gl.uniformMatrix3fv(this.matrixLocation, false, params.matrix);
        gl.uniform1f(this.sqrtZoomRatioLocation, Math.sqrt(params.ratio));
        gl.uniform1f(this.correctionRatioLocation, params.correctionRatio);
        // Drawing:
        gl.drawElements(gl.TRIANGLES, this.indicesArray.length, this.indicesType, 0);
    };
    return EdgeProgram;
}(edge_1.AbstractEdgeProgram));
exports["default"] = EdgeProgram;


/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/programs/node.fast.js":
/*!******************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/programs/node.fast.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(/*! ../../../utils */ "./node_modules/sigma/utils/index.js");
var node_fast_vert_glsl_1 = __importDefault(__webpack_require__(/*! ../shaders/node.fast.vert.glsl.js */ "./node_modules/sigma/rendering/webgl/shaders/node.fast.vert.glsl.js"));
var node_fast_frag_glsl_1 = __importDefault(__webpack_require__(/*! ../shaders/node.fast.frag.glsl.js */ "./node_modules/sigma/rendering/webgl/shaders/node.fast.frag.glsl.js"));
var node_1 = __webpack_require__(/*! ./common/node */ "./node_modules/sigma/rendering/webgl/programs/common/node.js");
var POINTS = 1, ATTRIBUTES = 4;
var NodeFastProgram = /** @class */ (function (_super) {
    __extends(NodeFastProgram, _super);
    function NodeFastProgram(gl) {
        var _this = _super.call(this, gl, node_fast_vert_glsl_1.default, node_fast_frag_glsl_1.default, POINTS, ATTRIBUTES) || this;
        _this.bind();
        return _this;
    }
    NodeFastProgram.prototype.process = function (data, hidden, offset) {
        var array = this.array;
        var i = offset * POINTS * ATTRIBUTES;
        if (hidden) {
            array[i++] = 0;
            array[i++] = 0;
            array[i++] = 0;
            array[i++] = 0;
            return;
        }
        var color = (0, utils_1.floatColor)(data.color);
        array[i++] = data.x;
        array[i++] = data.y;
        array[i++] = data.size;
        array[i] = color;
    };
    NodeFastProgram.prototype.render = function (params) {
        if (this.hasNothingToRender())
            return;
        var gl = this.gl;
        var program = this.program;
        gl.useProgram(program);
        gl.uniform1f(this.ratioLocation, 1 / Math.sqrt(params.ratio));
        gl.uniform1f(this.scaleLocation, params.scalingRatio);
        gl.uniformMatrix3fv(this.matrixLocation, false, params.matrix);
        gl.drawArrays(gl.POINTS, 0, this.array.length / ATTRIBUTES);
    };
    return NodeFastProgram;
}(node_1.AbstractNodeProgram));
exports["default"] = NodeFastProgram;


/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/shaders/edge.arrowHead.frag.glsl.js":
/*!********************************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/shaders/edge.arrowHead.frag.glsl.js ***!
  \********************************************************************************/
/***/ ((module) => {

(()=>{"use strict";var e={d:(o,r)=>{for(var t in r)e.o(r,t)&&!e.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:r[t]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};e.r(o),e.d(o,{default:()=>r});const r="precision mediump float;\n\nvarying vec4 v_color;\n\nvoid main(void) {\n  gl_FragColor = v_color;\n}\n";module.exports=o})();

/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/shaders/edge.arrowHead.vert.glsl.js":
/*!********************************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/shaders/edge.arrowHead.vert.glsl.js ***!
  \********************************************************************************/
/***/ ((module) => {

(()=>{"use strict";var a={d:(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},o:(a,e)=>Object.prototype.hasOwnProperty.call(a,e),r:a=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}},e={};a.r(e),a.d(e,{default:()=>t});const t="attribute vec2 a_position;\nattribute vec2 a_normal;\nattribute float a_radius;\nattribute vec4 a_color;\nattribute vec3 a_barycentric;\n\nuniform mat3 u_matrix;\nuniform float u_sqrtZoomRatio;\nuniform float u_correctionRatio;\n\nvarying vec4 v_color;\n\nconst float minThickness = 1.7;\nconst float bias = 255.0 / 254.0;\nconst float arrowHeadWidthLengthRatio = 0.66;\nconst float arrowHeadLengthThicknessRatio = 2.5;\n\nvoid main() {\n  float normalLength = length(a_normal);\n  vec2 unitNormal = a_normal / normalLength;\n\n  // These first computations are taken from edge.vert.glsl and\n  // edge.clamped.vert.glsl. Please read it to get better comments on what's\n  // happening:\n  float pixelsThickness = max(normalLength, minThickness * u_sqrtZoomRatio);\n  float webGLThickness = pixelsThickness * u_correctionRatio;\n  float adaptedWebGLThickness = webGLThickness * u_sqrtZoomRatio;\n  float adaptedWebGLNodeRadius = a_radius * 2.0 * u_correctionRatio * u_sqrtZoomRatio;\n  float adaptedWebGLArrowHeadLength = adaptedWebGLThickness * 2.0 * arrowHeadLengthThicknessRatio;\n  float adaptedWebGLArrowHeadHalfWidth = adaptedWebGLArrowHeadLength * arrowHeadWidthLengthRatio / 2.0;\n\n  float da = a_barycentric.x;\n  float db = a_barycentric.y;\n  float dc = a_barycentric.z;\n\n  vec2 delta = vec2(\n      da * (adaptedWebGLNodeRadius * unitNormal.y)\n    + db * ((adaptedWebGLNodeRadius + adaptedWebGLArrowHeadLength) * unitNormal.y + adaptedWebGLArrowHeadHalfWidth * unitNormal.x)\n    + dc * ((adaptedWebGLNodeRadius + adaptedWebGLArrowHeadLength) * unitNormal.y - adaptedWebGLArrowHeadHalfWidth * unitNormal.x),\n\n      da * (-adaptedWebGLNodeRadius * unitNormal.x)\n    + db * (-(adaptedWebGLNodeRadius + adaptedWebGLArrowHeadLength) * unitNormal.x + adaptedWebGLArrowHeadHalfWidth * unitNormal.y)\n    + dc * (-(adaptedWebGLNodeRadius + adaptedWebGLArrowHeadLength) * unitNormal.x - adaptedWebGLArrowHeadHalfWidth * unitNormal.y)\n  );\n\n  vec2 position = (u_matrix * vec3(a_position + delta, 1)).xy;\n\n  gl_Position = vec4(position, 0, 1);\n\n  // Extract the color:\n  v_color = a_color;\n  v_color.a *= bias;\n}\n";module.exports=e})();

/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/shaders/edge.clamped.vert.glsl.js":
/*!******************************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/shaders/edge.clamped.vert.glsl.js ***!
  \******************************************************************************/
/***/ ((module) => {

(()=>{"use strict";var e={d:(o,n)=>{for(var t in n)e.o(n,t)&&!e.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:n[t]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};e.r(o),e.d(o,{default:()=>n});const n="attribute vec4 a_color;\nattribute vec2 a_normal;\nattribute vec2 a_position;\nattribute float a_radius;\n\nuniform mat3 u_matrix;\nuniform float u_sqrtZoomRatio;\nuniform float u_correctionRatio;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float minThickness = 1.7;\nconst float bias = 255.0 / 254.0;\nconst float arrowHeadLengthThicknessRatio = 2.5;\n\nvoid main() {\n  float normalLength = length(a_normal);\n  vec2 unitNormal = a_normal / normalLength;\n\n  // These first computations are taken from edge.vert.glsl. Please read it to\n  // get better comments on what's happening:\n  float pixelsThickness = max(normalLength, minThickness * u_sqrtZoomRatio);\n  float webGLThickness = pixelsThickness * u_correctionRatio;\n  float adaptedWebGLThickness = webGLThickness * u_sqrtZoomRatio;\n\n  // Here, we move the point to leave space for the arrow head:\n  float direction = sign(a_radius);\n  float adaptedWebGLNodeRadius = direction * a_radius * 2.0 * u_correctionRatio * u_sqrtZoomRatio;\n  float adaptedWebGLArrowHeadLength = adaptedWebGLThickness * 2.0 * arrowHeadLengthThicknessRatio;\n\n  vec2 compensationVector = vec2(-direction * unitNormal.y, direction * unitNormal.x) * (adaptedWebGLNodeRadius + adaptedWebGLArrowHeadLength);\n\n  // Here is the proper position of the vertex\n  gl_Position = vec4((u_matrix * vec3(a_position + unitNormal * adaptedWebGLThickness + compensationVector, 1)).xy, 0, 1);\n\n  v_thickness = webGLThickness / u_sqrtZoomRatio;\n\n  v_normal = unitNormal;\n  v_color = a_color;\n  v_color.a *= bias;\n}\n";module.exports=o})();

/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/shaders/edge.frag.glsl.js":
/*!**********************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/shaders/edge.frag.glsl.js ***!
  \**********************************************************************/
/***/ ((module) => {

(()=>{"use strict";var e={d:(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};e.r(n),e.d(n,{default:()=>t});const t="precision mediump float;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float feather = 0.001;\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  float dist = length(v_normal) * v_thickness;\n\n  float t = smoothstep(\n    v_thickness - feather,\n    v_thickness,\n    dist\n  );\n\n  gl_FragColor = mix(v_color, transparent, t);\n}\n";module.exports=n})();

/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/shaders/edge.vert.glsl.js":
/*!**********************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/shaders/edge.vert.glsl.js ***!
  \**********************************************************************/
/***/ ((module) => {

(()=>{"use strict";var e={d:(n,o)=>{for(var t in o)e.o(o,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:o[t]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};e.r(n),e.d(n,{default:()=>o});const o='attribute vec4 a_color;\nattribute vec2 a_normal;\nattribute vec2 a_position;\n\nuniform mat3 u_matrix;\nuniform float u_sqrtZoomRatio;\nuniform float u_correctionRatio;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float minThickness = 1.7;\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float normalLength = length(a_normal);\n  vec2 unitNormal = a_normal / normalLength;\n\n  // We require edges to be at least `minThickness` pixels thick *on screen*\n  // (so we need to compensate the SQRT zoom ratio):\n  float pixelsThickness = max(normalLength, minThickness * u_sqrtZoomRatio);\n\n  // Then, we need to retrieve the normalized thickness of the edge in the WebGL\n  // referential (in a ([0, 1], [0, 1]) space), using our "magic" correction\n  // ratio:\n  float webGLThickness = pixelsThickness * u_correctionRatio;\n\n  // Finally, we adapt the edge thickness to the "SQRT rule" in sigma (so that\n  // items are not too big when zoomed in, and not too small when zoomed out).\n  // The exact computation should be `adapted = value * zoom / sqrt(zoom)`, but\n  // it\'s simpler like this:\n  float adaptedWebGLThickness = webGLThickness * u_sqrtZoomRatio;\n\n  // Here is the proper position of the vertex\n  gl_Position = vec4((u_matrix * vec3(a_position + unitNormal * adaptedWebGLThickness, 1)).xy, 0, 1);\n\n  // For the fragment shader though, we need a thickness that takes the "magic"\n  // correction ratio into account (as in webGLThickness), but so that the\n  // antialiasing effect does not depend on the zoom level. So here\'s yet\n  // another thickness version:\n  v_thickness = webGLThickness / u_sqrtZoomRatio;\n\n  v_normal = unitNormal;\n  v_color = a_color;\n  v_color.a *= bias;\n}\n';module.exports=n})();

/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/shaders/node.fast.frag.glsl.js":
/*!***************************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/shaders/node.fast.frag.glsl.js ***!
  \***************************************************************************/
/***/ ((module) => {

(()=>{"use strict";var e={d:(n,o)=>{for(var t in o)e.o(o,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:o[t]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};e.r(n),e.d(n,{default:()=>o});const o="precision mediump float;\n\nvarying vec4 v_color;\nvarying float v_border;\n\nconst float radius = 0.5;\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  vec2 m = gl_PointCoord - vec2(0.5, 0.5);\n  float dist = radius - length(m);\n\n  float t = 0.0;\n  if (dist > v_border)\n    t = 1.0;\n  else if (dist > 0.0)\n    t = dist / v_border;\n\n  gl_FragColor = mix(transparent, v_color, t);\n}\n";module.exports=n})();

/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/shaders/node.fast.vert.glsl.js":
/*!***************************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/shaders/node.fast.vert.glsl.js ***!
  \***************************************************************************/
/***/ ((module) => {

(()=>{"use strict";var o={d:(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o:(o,t)=>Object.prototype.hasOwnProperty.call(o,t),r:o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},t={};o.r(t),o.d(t,{default:()=>e});const e="attribute vec2 a_position;\nattribute float a_size;\nattribute vec4 a_color;\n\nuniform float u_ratio;\nuniform float u_scale;\nuniform mat3 u_matrix;\n\nvarying vec4 v_color;\nvarying float v_border;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  gl_Position = vec4(\n    (u_matrix * vec3(a_position, 1)).xy,\n    0,\n    1\n  );\n\n  // Multiply the point size twice:\n  //  - x SCALING_RATIO to correct the canvas scaling\n  //  - x 2 to correct the formulae\n  gl_PointSize = a_size * u_ratio * u_scale * 2.0;\n\n  v_border = (1.0 / u_ratio) * (0.5 / a_size);\n\n  // Extract the color:\n  v_color = a_color;\n  v_color.a *= bias;\n}\n";module.exports=t})();

/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/shaders/utils.js":
/*!*************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/shaders/utils.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Sigma.js Shader Utils
 * ======================
 *
 * Code used to load sigma's shaders.
 * @module
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadProgram = exports.loadFragmentShader = exports.loadVertexShader = void 0;
/**
 * Function used to load a shader.
 */
function loadShader(type, gl, source) {
    var glType = type === "VERTEX" ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER;
    // Creating the shader
    var shader = gl.createShader(glType);
    if (shader === null) {
        throw new Error("loadShader: error while creating the shader");
    }
    // Loading source
    gl.shaderSource(shader, source);
    // Compiling the shader
    gl.compileShader(shader);
    // Retrieving compilation status
    var successfullyCompiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    // Throwing if something went awry
    if (!successfullyCompiled) {
        var infoLog = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        throw new Error("loadShader: error while compiling the shader:\n".concat(infoLog, "\n").concat(source));
    }
    return shader;
}
function loadVertexShader(gl, source) {
    return loadShader("VERTEX", gl, source);
}
exports.loadVertexShader = loadVertexShader;
function loadFragmentShader(gl, source) {
    return loadShader("FRAGMENT", gl, source);
}
exports.loadFragmentShader = loadFragmentShader;
/**
 * Function used to load a program.
 */
function loadProgram(gl, shaders) {
    var program = gl.createProgram();
    if (program === null) {
        throw new Error("loadProgram: error while creating the program.");
    }
    var i, l;
    // Attaching the shaders
    for (i = 0, l = shaders.length; i < l; i++)
        gl.attachShader(program, shaders[i]);
    gl.linkProgram(program);
    // Checking status
    var successfullyLinked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!successfullyLinked) {
        gl.deleteProgram(program);
        throw new Error("loadProgram: error while linking the program.");
    }
    return program;
}
exports.loadProgram = loadProgram;


/***/ }),

/***/ "./node_modules/sigma/settings.js":
/*!****************************************!*\
  !*** ./node_modules/sigma/settings.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveSettings = exports.validateSettings = exports.DEFAULT_EDGE_PROGRAM_CLASSES = exports.DEFAULT_NODE_PROGRAM_CLASSES = exports.DEFAULT_SETTINGS = void 0;
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/sigma/utils/index.js");
var label_1 = __importDefault(__webpack_require__(/*! ./rendering/canvas/label */ "./node_modules/sigma/rendering/canvas/label.js"));
var hover_1 = __importDefault(__webpack_require__(/*! ./rendering/canvas/hover */ "./node_modules/sigma/rendering/canvas/hover.js"));
var edge_label_1 = __importDefault(__webpack_require__(/*! ./rendering/canvas/edge-label */ "./node_modules/sigma/rendering/canvas/edge-label.js"));
var node_fast_1 = __importDefault(__webpack_require__(/*! ./rendering/webgl/programs/node.fast */ "./node_modules/sigma/rendering/webgl/programs/node.fast.js"));
var edge_1 = __importDefault(__webpack_require__(/*! ./rendering/webgl/programs/edge */ "./node_modules/sigma/rendering/webgl/programs/edge.js"));
var edge_arrow_1 = __importDefault(__webpack_require__(/*! ./rendering/webgl/programs/edge.arrow */ "./node_modules/sigma/rendering/webgl/programs/edge.arrow.js"));
exports.DEFAULT_SETTINGS = {
    // Performance
    hideEdgesOnMove: false,
    hideLabelsOnMove: false,
    renderLabels: true,
    renderEdgeLabels: false,
    enableEdgeClickEvents: false,
    enableEdgeWheelEvents: false,
    enableEdgeHoverEvents: false,
    // Component rendering
    defaultNodeColor: "#999",
    defaultNodeType: "circle",
    defaultEdgeColor: "#ccc",
    defaultEdgeType: "line",
    labelFont: "Arial",
    labelSize: 14,
    labelWeight: "normal",
    labelColor: { color: "#000" },
    edgeLabelFont: "Arial",
    edgeLabelSize: 14,
    edgeLabelWeight: "normal",
    edgeLabelColor: { attribute: "color" },
    stagePadding: 30,
    // Labels
    labelDensity: 1,
    labelGridCellSize: 100,
    labelRenderedSizeThreshold: 6,
    // Reducers
    nodeReducer: null,
    edgeReducer: null,
    // Features
    zIndex: false,
    minCameraRatio: null,
    maxCameraRatio: null,
    // Renderers
    labelRenderer: label_1.default,
    hoverRenderer: hover_1.default,
    edgeLabelRenderer: edge_label_1.default,
    // Lifecycle
    allowInvalidContainer: false,
    // Program classes
    nodeProgramClasses: {},
    nodeHoverProgramClasses: {},
    edgeProgramClasses: {},
};
exports.DEFAULT_NODE_PROGRAM_CLASSES = {
    circle: node_fast_1.default,
};
exports.DEFAULT_EDGE_PROGRAM_CLASSES = {
    arrow: edge_arrow_1.default,
    line: edge_1.default,
};
function validateSettings(settings) {
    if (typeof settings.labelDensity !== "number" || settings.labelDensity < 0) {
        throw new Error("Settings: invalid `labelDensity`. Expecting a positive number.");
    }
    var minCameraRatio = settings.minCameraRatio, maxCameraRatio = settings.maxCameraRatio;
    if (typeof minCameraRatio === "number" && typeof maxCameraRatio === "number" && maxCameraRatio < minCameraRatio) {
        throw new Error("Settings: invalid camera ratio boundaries. Expecting `maxCameraRatio` to be greater than `minCameraRatio`.");
    }
}
exports.validateSettings = validateSettings;
function resolveSettings(settings) {
    var resolvedSettings = (0, utils_1.assign)({}, exports.DEFAULT_SETTINGS, settings);
    resolvedSettings.nodeProgramClasses = (0, utils_1.assign)({}, exports.DEFAULT_NODE_PROGRAM_CLASSES, resolvedSettings.nodeProgramClasses);
    resolvedSettings.edgeProgramClasses = (0, utils_1.assign)({}, exports.DEFAULT_EDGE_PROGRAM_CLASSES, resolvedSettings.edgeProgramClasses);
    return resolvedSettings;
}
exports.resolveSettings = resolveSettings;


/***/ }),

/***/ "./node_modules/sigma/sigma.js":
/*!*************************************!*\
  !*** ./node_modules/sigma/sigma.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var extend_1 = __importDefault(__webpack_require__(/*! @yomguithereal/helpers/extend */ "./node_modules/@yomguithereal/helpers/extend.js"));
var camera_1 = __importDefault(__webpack_require__(/*! ./core/camera */ "./node_modules/sigma/core/camera.js"));
var mouse_1 = __importDefault(__webpack_require__(/*! ./core/captors/mouse */ "./node_modules/sigma/core/captors/mouse.js"));
var quadtree_1 = __importDefault(__webpack_require__(/*! ./core/quadtree */ "./node_modules/sigma/core/quadtree.js"));
var types_1 = __webpack_require__(/*! ./types */ "./node_modules/sigma/types.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/sigma/utils/index.js");
var labels_1 = __webpack_require__(/*! ./core/labels */ "./node_modules/sigma/core/labels.js");
var settings_1 = __webpack_require__(/*! ./settings */ "./node_modules/sigma/settings.js");
var touch_1 = __importDefault(__webpack_require__(/*! ./core/captors/touch */ "./node_modules/sigma/core/captors/touch.js"));
var matrices_1 = __webpack_require__(/*! ./utils/matrices */ "./node_modules/sigma/utils/matrices.js");
var edge_collisions_1 = __webpack_require__(/*! ./utils/edge-collisions */ "./node_modules/sigma/utils/edge-collisions.js");
/**
 * Constants.
 */
var X_LABEL_MARGIN = 150;
var Y_LABEL_MARGIN = 50;
/**
 * Important functions.
 */
function applyNodeDefaults(settings, key, data) {
    if (!data.hasOwnProperty("x") || !data.hasOwnProperty("y"))
        throw new Error("Sigma: could not find a valid position (x, y) for node \"".concat(key, "\". All your nodes must have a number \"x\" and \"y\". Maybe your forgot to apply a layout or your \"nodeReducer\" is not returning the correct data?"));
    if (!data.color)
        data.color = settings.defaultNodeColor;
    if (!data.label && data.label !== "")
        data.label = null;
    if (data.label !== undefined && data.label !== null)
        data.label = "" + data.label;
    else
        data.label = null;
    if (!data.size)
        data.size = 2;
    if (!data.hasOwnProperty("hidden"))
        data.hidden = false;
    if (!data.hasOwnProperty("highlighted"))
        data.highlighted = false;
    if (!data.hasOwnProperty("forceLabel"))
        data.forceLabel = false;
    if (!data.type || data.type === "")
        data.type = settings.defaultNodeType;
    if (!data.zIndex)
        data.zIndex = 0;
    return data;
}
function applyEdgeDefaults(settings, key, data) {
    if (!data.color)
        data.color = settings.defaultEdgeColor;
    if (!data.label)
        data.label = "";
    if (!data.size)
        data.size = 0.5;
    if (!data.hasOwnProperty("hidden"))
        data.hidden = false;
    if (!data.hasOwnProperty("forceLabel"))
        data.forceLabel = false;
    if (!data.type || data.type === "")
        data.type = settings.defaultEdgeType;
    if (!data.zIndex)
        data.zIndex = 0;
    return data;
}
/**
 * Main class.
 *
 * @constructor
 * @param {Graph}       graph     - Graph to render.
 * @param {HTMLElement} container - DOM container in which to render.
 * @param {object}      settings  - Optional settings.
 */
var Sigma = /** @class */ (function (_super) {
    __extends(Sigma, _super);
    function Sigma(graph, container, settings) {
        if (settings === void 0) { settings = {}; }
        var _this = _super.call(this) || this;
        _this.elements = {};
        _this.canvasContexts = {};
        _this.webGLContexts = {};
        _this.activeListeners = {};
        _this.quadtree = new quadtree_1.default();
        _this.labelGrid = new labels_1.LabelGrid();
        _this.nodeDataCache = {};
        _this.edgeDataCache = {};
        _this.nodesWithForcedLabels = [];
        _this.edgesWithForcedLabels = [];
        _this.nodeExtent = { x: [0, 1], y: [0, 1] };
        _this.matrix = (0, matrices_1.identity)();
        _this.invMatrix = (0, matrices_1.identity)();
        _this.correctionRatio = 1;
        _this.customBBox = null;
        _this.normalizationFunction = (0, utils_1.createNormalizationFunction)({
            x: [0, 1],
            y: [0, 1],
        });
        // Cache:
        _this.cameraSizeRatio = 1;
        // Starting dimensions and pixel ratio
        _this.width = 0;
        _this.height = 0;
        _this.pixelRatio = (0, utils_1.getPixelRatio)();
        // State
        _this.displayedLabels = new Set();
        _this.highlightedNodes = new Set();
        _this.hoveredNode = null;
        _this.hoveredEdge = null;
        _this.renderFrame = null;
        _this.renderHighlightedNodesFrame = null;
        _this.needToProcess = false;
        _this.needToSoftProcess = false;
        _this.checkEdgesEventsFrame = null;
        // Programs
        _this.nodePrograms = {};
        _this.nodeHoverPrograms = {};
        _this.edgePrograms = {};
        // Resolving settings
        _this.settings = (0, settings_1.resolveSettings)(settings);
        // Validating
        (0, settings_1.validateSettings)(_this.settings);
        (0, utils_1.validateGraph)(graph);
        if (!(container instanceof HTMLElement))
            throw new Error("Sigma: container should be an html element.");
        // Properties
        _this.graph = graph;
        _this.container = container;
        // Initializing contexts
        _this.createWebGLContext("edges", { preserveDrawingBuffer: true });
        _this.createCanvasContext("edgeLabels");
        _this.createWebGLContext("nodes");
        _this.createCanvasContext("labels");
        _this.createCanvasContext("hovers");
        _this.createWebGLContext("hoverNodes");
        _this.createCanvasContext("mouse");
        // Blending
        for (var key in _this.webGLContexts) {
            var gl = _this.webGLContexts[key];
            gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            gl.enable(gl.BLEND);
        }
        // Loading programs
        for (var type in _this.settings.nodeProgramClasses) {
            var NodeProgramClass = _this.settings.nodeProgramClasses[type];
            _this.nodePrograms[type] = new NodeProgramClass(_this.webGLContexts.nodes, _this);
            var NodeHoverProgram = NodeProgramClass;
            if (type in _this.settings.nodeHoverProgramClasses) {
                NodeHoverProgram = _this.settings.nodeHoverProgramClasses[type];
            }
            _this.nodeHoverPrograms[type] = new NodeHoverProgram(_this.webGLContexts.hoverNodes, _this);
        }
        for (var type in _this.settings.edgeProgramClasses) {
            var EdgeProgramClass = _this.settings.edgeProgramClasses[type];
            _this.edgePrograms[type] = new EdgeProgramClass(_this.webGLContexts.edges, _this);
        }
        // Initial resize
        _this.resize();
        // Initializing the camera
        _this.camera = new camera_1.default();
        // Binding camera events
        _this.bindCameraHandlers();
        // Initializing captors
        _this.mouseCaptor = new mouse_1.default(_this.elements.mouse, _this);
        _this.touchCaptor = new touch_1.default(_this.elements.mouse, _this);
        // Binding event handlers
        _this.bindEventHandlers();
        // Binding graph handlers
        _this.bindGraphHandlers();
        // Trigger eventual settings-related things
        _this.handleSettingsUpdate();
        // Processing data for the first time & render
        _this.process();
        _this.render();
        return _this;
    }
    /**---------------------------------------------------------------------------
     * Internal methods.
     **---------------------------------------------------------------------------
     */
    /**
     * Internal function used to create a canvas element.
     * @param  {string} id - Context's id.
     * @return {Sigma}
     */
    Sigma.prototype.createCanvas = function (id) {
        var canvas = (0, utils_1.createElement)("canvas", {
            position: "absolute",
        }, {
            class: "sigma-".concat(id),
        });
        this.elements[id] = canvas;
        this.container.appendChild(canvas);
        return canvas;
    };
    /**
     * Internal function used to create a canvas context and add the relevant
     * DOM elements.
     *
     * @param  {string} id - Context's id.
     * @return {Sigma}
     */
    Sigma.prototype.createCanvasContext = function (id) {
        var canvas = this.createCanvas(id);
        var contextOptions = {
            preserveDrawingBuffer: false,
            antialias: false,
        };
        this.canvasContexts[id] = canvas.getContext("2d", contextOptions);
        return this;
    };
    /**
     * Internal function used to create a canvas context and add the relevant
     * DOM elements.
     *
     * @param  {string}  id      - Context's id.
     * @param  {object?} options - #getContext params to override (optional)
     * @return {Sigma}
     */
    Sigma.prototype.createWebGLContext = function (id, options) {
        var canvas = this.createCanvas(id);
        var contextOptions = __assign({ preserveDrawingBuffer: false, antialias: false }, (options || {}));
        var context;
        // First we try webgl2 for an easy performance boost
        context = canvas.getContext("webgl2", contextOptions);
        // Else we fall back to webgl
        if (!context)
            context = canvas.getContext("webgl", contextOptions);
        // Edge, I am looking right at you...
        if (!context)
            context = canvas.getContext("experimental-webgl", contextOptions);
        this.webGLContexts[id] = context;
        return this;
    };
    /**
     * Method binding camera handlers.
     *
     * @return {Sigma}
     */
    Sigma.prototype.bindCameraHandlers = function () {
        var _this = this;
        this.activeListeners.camera = function () {
            _this._scheduleRefresh();
        };
        this.camera.on("updated", this.activeListeners.camera);
        return this;
    };
    /**
     * Method that checks whether or not a node collides with a given position.
     */
    Sigma.prototype.mouseIsOnNode = function (_a, _b, size) {
        var x = _a.x, y = _a.y;
        var nodeX = _b.x, nodeY = _b.y;
        return (x > nodeX - size &&
            x < nodeX + size &&
            y > nodeY - size &&
            y < nodeY + size &&
            Math.sqrt(Math.pow(x - nodeX, 2) + Math.pow(y - nodeY, 2)) < size);
    };
    /**
     * Method that returns all nodes in quad at a given position.
     */
    Sigma.prototype.getQuadNodes = function (position) {
        var mouseGraphPosition = this.viewportToFramedGraph(position);
        return this.quadtree.point(mouseGraphPosition.x, 1 - mouseGraphPosition.y);
    };
    /**
     * Method that returns the closest node to a given position.
     */
    Sigma.prototype.getNodeAtPosition = function (position) {
        var x = position.x, y = position.y;
        var quadNodes = this.getQuadNodes(position);
        // We will hover the node whose center is closest to mouse
        var minDistance = Infinity, nodeAtPosition = null;
        for (var i = 0, l = quadNodes.length; i < l; i++) {
            var node = quadNodes[i];
            var data = this.nodeDataCache[node];
            var nodePosition = this.framedGraphToViewport(data);
            var size = this.scaleSize(data.size);
            if (!data.hidden && this.mouseIsOnNode(position, nodePosition, size)) {
                var distance = Math.sqrt(Math.pow(x - nodePosition.x, 2) + Math.pow(y - nodePosition.y, 2));
                // TODO: sort by min size also for cases where center is the same
                if (distance < minDistance) {
                    minDistance = distance;
                    nodeAtPosition = node;
                }
            }
        }
        return nodeAtPosition;
    };
    /**
     * Method binding event handlers.
     *
     * @return {Sigma}
     */
    Sigma.prototype.bindEventHandlers = function () {
        var _this = this;
        // Handling window resize
        this.activeListeners.handleResize = function () {
            _this.needToSoftProcess = true;
            _this._scheduleRefresh();
        };
        window.addEventListener("resize", this.activeListeners.handleResize);
        // Handling mouse move
        this.activeListeners.handleMove = function (e) {
            var baseEvent = {
                event: e,
                preventSigmaDefault: function () {
                    e.preventSigmaDefault();
                },
            };
            var nodeToHover = _this.getNodeAtPosition(e);
            if (nodeToHover && _this.hoveredNode !== nodeToHover && !_this.nodeDataCache[nodeToHover].hidden) {
                // Handling passing from one node to the other directly
                if (_this.hoveredNode)
                    _this.emit("leaveNode", __assign(__assign({}, baseEvent), { node: _this.hoveredNode }));
                _this.hoveredNode = nodeToHover;
                _this.emit("enterNode", __assign(__assign({}, baseEvent), { node: nodeToHover }));
                _this.scheduleHighlightedNodesRender();
                return;
            }
            // Checking if the hovered node is still hovered
            if (_this.hoveredNode) {
                var data = _this.nodeDataCache[_this.hoveredNode];
                var pos = _this.framedGraphToViewport(data);
                var size = _this.scaleSize(data.size);
                if (!_this.mouseIsOnNode(e, pos, size)) {
                    var node = _this.hoveredNode;
                    _this.hoveredNode = null;
                    _this.emit("leaveNode", __assign(__assign({}, baseEvent), { node: node }));
                    _this.scheduleHighlightedNodesRender();
                    return;
                }
            }
            if (_this.settings.enableEdgeHoverEvents === true) {
                _this.checkEdgeHoverEvents(baseEvent);
            }
            else if (_this.settings.enableEdgeHoverEvents === "debounce") {
                if (!_this.checkEdgesEventsFrame)
                    _this.checkEdgesEventsFrame = (0, utils_1.requestFrame)(function () {
                        _this.checkEdgeHoverEvents(baseEvent);
                        _this.checkEdgesEventsFrame = null;
                    });
            }
        };
        // Handling click
        var createMouseListener = function (eventType) {
            return function (e) {
                var baseEvent = {
                    event: e,
                    preventSigmaDefault: function () {
                        e.preventSigmaDefault();
                    },
                };
                var isFakeSigmaMouseEvent = e.original.isFakeSigmaMouseEvent;
                var nodeAtPosition = isFakeSigmaMouseEvent ? _this.getNodeAtPosition(e) : _this.hoveredNode;
                if (nodeAtPosition)
                    return _this.emit("".concat(eventType, "Node"), __assign(__assign({}, baseEvent), { node: nodeAtPosition }));
                if (eventType === "wheel" ? _this.settings.enableEdgeWheelEvents : _this.settings.enableEdgeClickEvents) {
                    var edge = _this.getEdgeAtPoint(e.x, e.y);
                    if (edge)
                        return _this.emit("".concat(eventType, "Edge"), __assign(__assign({}, baseEvent), { edge: edge }));
                }
                return _this.emit("".concat(eventType, "Stage"), baseEvent);
            };
        };
        this.activeListeners.handleClick = createMouseListener("click");
        this.activeListeners.handleRightClick = createMouseListener("rightClick");
        this.activeListeners.handleDoubleClick = createMouseListener("doubleClick");
        this.activeListeners.handleWheel = createMouseListener("wheel");
        this.activeListeners.handleDown = createMouseListener("down");
        this.mouseCaptor.on("mousemove", this.activeListeners.handleMove);
        this.mouseCaptor.on("click", this.activeListeners.handleClick);
        this.mouseCaptor.on("rightClick", this.activeListeners.handleRightClick);
        this.mouseCaptor.on("doubleClick", this.activeListeners.handleDoubleClick);
        this.mouseCaptor.on("wheel", this.activeListeners.handleWheel);
        this.mouseCaptor.on("mousedown", this.activeListeners.handleDown);
        // TODO
        // Deal with Touch captor events
        return this;
    };
    /**
     * Method binding graph handlers
     *
     * @return {Sigma}
     */
    Sigma.prototype.bindGraphHandlers = function () {
        var _this = this;
        var graph = this.graph;
        this.activeListeners.graphUpdate = function () {
            _this.needToProcess = true;
            _this._scheduleRefresh();
        };
        this.activeListeners.softGraphUpdate = function () {
            _this.needToSoftProcess = true;
            _this._scheduleRefresh();
        };
        this.activeListeners.dropNodeGraphUpdate = function (e) {
            delete _this.nodeDataCache[e.key];
            if (_this.hoveredNode === e.key)
                _this.hoveredNode = null;
            _this.activeListeners.graphUpdate();
        };
        this.activeListeners.dropEdgeGraphUpdate = function (e) {
            delete _this.edgeDataCache[e.key];
            if (_this.hoveredEdge === e.key)
                _this.hoveredEdge = null;
            _this.activeListeners.graphUpdate();
        };
        this.activeListeners.clearEdgesGraphUpdate = function () {
            _this.edgeDataCache = {};
            _this.hoveredEdge = null;
            _this.activeListeners.graphUpdate();
        };
        this.activeListeners.clearGraphUpdate = function () {
            _this.nodeDataCache = {};
            _this.hoveredNode = null;
            _this.activeListeners.clearEdgesGraphUpdate();
        };
        graph.on("nodeAdded", this.activeListeners.graphUpdate);
        graph.on("nodeDropped", this.activeListeners.dropNodeGraphUpdate);
        graph.on("nodeAttributesUpdated", this.activeListeners.softGraphUpdate);
        graph.on("eachNodeAttributesUpdated", this.activeListeners.graphUpdate);
        graph.on("edgeAdded", this.activeListeners.graphUpdate);
        graph.on("edgeDropped", this.activeListeners.dropEdgeGraphUpdate);
        graph.on("edgeAttributesUpdated", this.activeListeners.softGraphUpdate);
        graph.on("eachEdgeAttributesUpdated", this.activeListeners.graphUpdate);
        graph.on("edgesCleared", this.activeListeners.clearEdgesGraphUpdate);
        graph.on("cleared", this.activeListeners.clearGraphUpdate);
        return this;
    };
    /**
     * Method used to unbind handlers from the graph.
     *
     * @return {undefined}
     */
    Sigma.prototype.unbindGraphHandlers = function () {
        var graph = this.graph;
        graph.removeListener("nodeAdded", this.activeListeners.graphUpdate);
        graph.removeListener("nodeDropped", this.activeListeners.dropNodeGraphUpdate);
        graph.removeListener("nodeAttributesUpdated", this.activeListeners.softGraphUpdate);
        graph.removeListener("eachNodeAttributesUpdated", this.activeListeners.graphUpdate);
        graph.removeListener("edgeAdded", this.activeListeners.graphUpdate);
        graph.removeListener("edgeDropped", this.activeListeners.dropEdgeGraphUpdate);
        graph.removeListener("edgeAttributesUpdated", this.activeListeners.softGraphUpdate);
        graph.removeListener("eachEdgeAttributesUpdated", this.activeListeners.graphUpdate);
        graph.removeListener("edgesCleared", this.activeListeners.clearEdgesGraphUpdate);
        graph.removeListener("cleared", this.activeListeners.clearGraphUpdate);
    };
    /**
     * Method dealing with "leaveEdge" and "enterEdge" events.
     *
     * @return {Sigma}
     */
    Sigma.prototype.checkEdgeHoverEvents = function (payload) {
        var edgeToHover = this.hoveredNode ? null : this.getEdgeAtPoint(payload.event.x, payload.event.y);
        if (edgeToHover !== this.hoveredEdge) {
            if (this.hoveredEdge)
                this.emit("leaveEdge", __assign(__assign({}, payload), { edge: this.hoveredEdge }));
            if (edgeToHover)
                this.emit("enterEdge", __assign(__assign({}, payload), { edge: edgeToHover }));
            this.hoveredEdge = edgeToHover;
        }
        return this;
    };
    /**
     * Method looking for an edge colliding with a given point at (x, y). Returns
     * the key of the edge if any, or null else.
     */
    Sigma.prototype.getEdgeAtPoint = function (x, y) {
        var e_1, _a;
        var _this = this;
        var _b = this, edgeDataCache = _b.edgeDataCache, nodeDataCache = _b.nodeDataCache;
        // Check first that pixel is colored:
        // Note that mouse positions must be corrected by pixel ratio to correctly
        // index the drawing buffer.
        if (!(0, edge_collisions_1.isPixelColored)(this.webGLContexts.edges, x * this.pixelRatio, y * this.pixelRatio))
            return null;
        // Check for each edge if it collides with the point:
        var _c = this.viewportToGraph({ x: x, y: y }), graphX = _c.x, graphY = _c.y;
        // To translate edge thicknesses to the graph system, we observe by how much
        // the length of a non-null edge is transformed to between the graph system
        // and the viewport system:
        var transformationRatio = 0;
        this.graph.someEdge(function (key, _, sourceId, targetId, _a, _b) {
            var xs = _a.x, ys = _a.y;
            var xt = _b.x, yt = _b.y;
            if (edgeDataCache[key].hidden || nodeDataCache[sourceId].hidden || nodeDataCache[targetId].hidden)
                return false;
            if (xs !== xt || ys !== yt) {
                var graphLength = Math.sqrt(Math.pow(xt - xs, 2) + Math.pow(yt - ys, 2));
                var _c = _this.graphToViewport({ x: xs, y: ys }), vp_xs = _c.x, vp_ys = _c.y;
                var _d = _this.graphToViewport({ x: xt, y: yt }), vp_xt = _d.x, vp_yt = _d.y;
                var viewportLength = Math.sqrt(Math.pow(vp_xt - vp_xs, 2) + Math.pow(vp_yt - vp_ys, 2));
                transformationRatio = graphLength / viewportLength;
                return true;
            }
        });
        // If no non-null edge has been found, return null:
        if (!transformationRatio)
            return null;
        // Now we can look for matching edges:
        var edges = this.graph.filterEdges(function (key, edgeAttributes, sourceId, targetId, sourcePosition, targetPosition) {
            if (edgeDataCache[key].hidden || nodeDataCache[sourceId].hidden || nodeDataCache[targetId].hidden)
                return false;
            if ((0, edge_collisions_1.doEdgeCollideWithPoint)(graphX, graphY, sourcePosition.x, sourcePosition.y, targetPosition.x, targetPosition.y, 
            // Adapt the edge size to the zoom ratio:
            (edgeDataCache[key].size * transformationRatio) / _this.cameraSizeRatio)) {
                return true;
            }
        });
        if (edges.length === 0)
            return null; // no edges found
        // if none of the edges have a zIndex, selected the most recently created one to match the rendering order
        var selectedEdge = edges[edges.length - 1];
        // otherwise select edge with highest zIndex
        var highestZIndex = -Infinity;
        try {
            for (var edges_1 = __values(edges), edges_1_1 = edges_1.next(); !edges_1_1.done; edges_1_1 = edges_1.next()) {
                var edge = edges_1_1.value;
                var zIndex = this.graph.getEdgeAttribute(edge, "zIndex");
                if (zIndex >= highestZIndex) {
                    selectedEdge = edge;
                    highestZIndex = zIndex;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (edges_1_1 && !edges_1_1.done && (_a = edges_1.return)) _a.call(edges_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return selectedEdge;
    };
    /**
     * Method used to process the whole graph's data.
     *
     * @return {Sigma}
     */
    Sigma.prototype.process = function (keepArrays) {
        var _this = this;
        if (keepArrays === void 0) { keepArrays = false; }
        var graph = this.graph;
        var settings = this.settings;
        var dimensions = this.getDimensions();
        var nodeZExtent = [Infinity, -Infinity];
        var edgeZExtent = [Infinity, -Infinity];
        // Clearing the quad
        this.quadtree.clear();
        // Resetting the label grid
        // TODO: it's probably better to do this explicitly or on resizes for layout and anims
        this.labelGrid.resizeAndClear(dimensions, settings.labelGridCellSize);
        // Clear the highlightedNodes
        this.highlightedNodes = new Set();
        // Computing extents
        this.nodeExtent = (0, utils_1.graphExtent)(graph);
        // Resetting `forceLabel` indices
        this.nodesWithForcedLabels = [];
        this.edgesWithForcedLabels = [];
        // NOTE: it is important to compute this matrix after computing the node's extent
        // because #.getGraphDimensions relies on it
        var nullCamera = new camera_1.default();
        var nullCameraMatrix = (0, utils_1.matrixFromCamera)(nullCamera.getState(), this.getDimensions(), this.getGraphDimensions(), this.getSetting("stagePadding") || 0);
        // Rescaling function
        this.normalizationFunction = (0, utils_1.createNormalizationFunction)(this.customBBox || this.nodeExtent);
        var nodesPerPrograms = {};
        var nodes = graph.nodes();
        for (var i = 0, l = nodes.length; i < l; i++) {
            var node = nodes[i];
            // Node display data resolution:
            //   1. First we get the node's attributes
            //   2. We optionally reduce them using the function provided by the user
            //      Note that this function must return a total object and won't be merged
            //   3. We apply our defaults, while running some vital checks
            //   4. We apply the normalization function
            // We shallow copy node data to avoid dangerous behaviors from reducers
            var attr = Object.assign({}, graph.getNodeAttributes(node));
            if (settings.nodeReducer)
                attr = settings.nodeReducer(node, attr);
            var data = applyNodeDefaults(this.settings, node, attr);
            nodesPerPrograms[data.type] = (nodesPerPrograms[data.type] || 0) + 1;
            this.nodeDataCache[node] = data;
            this.normalizationFunction.applyTo(data);
            if (data.forceLabel)
                this.nodesWithForcedLabels.push(node);
            if (this.settings.zIndex) {
                if (data.zIndex < nodeZExtent[0])
                    nodeZExtent[0] = data.zIndex;
                if (data.zIndex > nodeZExtent[1])
                    nodeZExtent[1] = data.zIndex;
            }
        }
        for (var type in this.nodePrograms) {
            if (!this.nodePrograms.hasOwnProperty(type)) {
                throw new Error("Sigma: could not find a suitable program for node type \"".concat(type, "\"!"));
            }
            if (!keepArrays)
                this.nodePrograms[type].allocate(nodesPerPrograms[type] || 0);
            // We reset that count here, so that we can reuse it while calling the Program#process methods:
            nodesPerPrograms[type] = 0;
        }
        // Handling node z-index
        // TODO: z-index needs us to compute display data before hand
        if (this.settings.zIndex && nodeZExtent[0] !== nodeZExtent[1])
            nodes = (0, utils_1.zIndexOrdering)(nodeZExtent, function (node) { return _this.nodeDataCache[node].zIndex; }, nodes);
        for (var i = 0, l = nodes.length; i < l; i++) {
            var node = nodes[i];
            var data = this.nodeDataCache[node];
            this.quadtree.add(node, data.x, 1 - data.y, data.size / this.width);
            if (typeof data.label === "string" && !data.hidden)
                this.labelGrid.add(node, data.size, this.framedGraphToViewport(data, { matrix: nullCameraMatrix }));
            var nodeProgram = this.nodePrograms[data.type];
            if (!nodeProgram)
                throw new Error("Sigma: could not find a suitable program for node type \"".concat(data.type, "\"!"));
            nodeProgram.process(data, data.hidden, nodesPerPrograms[data.type]++);
            // Save the node in the highlighted set if needed
            if (data.highlighted && !data.hidden)
                this.highlightedNodes.add(node);
        }
        this.labelGrid.organize();
        var edgesPerPrograms = {};
        var edges = graph.edges();
        for (var i = 0, l = edges.length; i < l; i++) {
            var edge = edges[i];
            // Edge display data resolution:
            //   1. First we get the edge's attributes
            //   2. We optionally reduce them using the function provided by the user
            //      Note that this function must return a total object and won't be merged
            //   3. We apply our defaults, while running some vital checks
            // We shallow copy edge data to avoid dangerous behaviors from reducers
            var attr = Object.assign({}, graph.getEdgeAttributes(edge));
            if (settings.edgeReducer)
                attr = settings.edgeReducer(edge, attr);
            var data = applyEdgeDefaults(this.settings, edge, attr);
            edgesPerPrograms[data.type] = (edgesPerPrograms[data.type] || 0) + 1;
            this.edgeDataCache[edge] = data;
            if (data.forceLabel && !data.hidden)
                this.edgesWithForcedLabels.push(edge);
            if (this.settings.zIndex) {
                if (data.zIndex < edgeZExtent[0])
                    edgeZExtent[0] = data.zIndex;
                if (data.zIndex > edgeZExtent[1])
                    edgeZExtent[1] = data.zIndex;
            }
        }
        for (var type in this.edgePrograms) {
            if (!this.edgePrograms.hasOwnProperty(type)) {
                throw new Error("Sigma: could not find a suitable program for edge type \"".concat(type, "\"!"));
            }
            if (!keepArrays)
                this.edgePrograms[type].allocate(edgesPerPrograms[type] || 0);
            // We reset that count here, so that we can reuse it while calling the Program#process methods:
            edgesPerPrograms[type] = 0;
        }
        // Handling edge z-index
        if (this.settings.zIndex && edgeZExtent[0] !== edgeZExtent[1])
            edges = (0, utils_1.zIndexOrdering)(edgeZExtent, function (edge) { return _this.edgeDataCache[edge].zIndex; }, edges);
        for (var i = 0, l = edges.length; i < l; i++) {
            var edge = edges[i];
            var data = this.edgeDataCache[edge];
            var extremities = graph.extremities(edge), sourceData = this.nodeDataCache[extremities[0]], targetData = this.nodeDataCache[extremities[1]];
            var hidden = data.hidden || sourceData.hidden || targetData.hidden;
            this.edgePrograms[data.type].process(sourceData, targetData, data, hidden, edgesPerPrograms[data.type]++);
        }
        for (var type in this.edgePrograms) {
            var program = this.edgePrograms[type];
            if (!keepArrays && typeof program.computeIndices === "function")
                program.computeIndices();
        }
        return this;
    };
    /**
     * Method that backports potential settings updates where it's needed.
     * @private
     */
    Sigma.prototype.handleSettingsUpdate = function () {
        this.camera.minRatio = this.settings.minCameraRatio;
        this.camera.maxRatio = this.settings.maxCameraRatio;
        this.camera.setState(this.camera.validateState(this.camera.getState()));
        return this;
    };
    /**
     * Method that decides whether to reprocess graph or not, and then render the
     * graph.
     *
     * @return {Sigma}
     */
    Sigma.prototype._refresh = function () {
        // Do we need to process data?
        if (this.needToProcess) {
            this.process();
        }
        else if (this.needToSoftProcess) {
            this.process(true);
        }
        // Resetting state
        this.needToProcess = false;
        this.needToSoftProcess = false;
        // Rendering
        this.render();
        return this;
    };
    /**
     * Method that schedules a `_refresh` call if none has been scheduled yet. It
     * will then be processed next available frame.
     *
     * @return {Sigma}
     */
    Sigma.prototype._scheduleRefresh = function () {
        var _this = this;
        if (!this.renderFrame) {
            this.renderFrame = (0, utils_1.requestFrame)(function () {
                _this._refresh();
                _this.renderFrame = null;
            });
        }
        return this;
    };
    /**
     * Method used to render labels.
     *
     * @return {Sigma}
     */
    Sigma.prototype.renderLabels = function () {
        if (!this.settings.renderLabels)
            return this;
        var cameraState = this.camera.getState();
        // Selecting labels to draw
        var labelsToDisplay = this.labelGrid.getLabelsToDisplay(cameraState.ratio, this.settings.labelDensity);
        (0, extend_1.default)(labelsToDisplay, this.nodesWithForcedLabels);
        this.displayedLabels = new Set();
        // Drawing labels
        var context = this.canvasContexts.labels;
        for (var i = 0, l = labelsToDisplay.length; i < l; i++) {
            var node = labelsToDisplay[i];
            var data = this.nodeDataCache[node];
            // If the node was already drawn (like if it is eligible AND has
            // `forceLabel`), we don't want to draw it again
            // NOTE: we can do better probably
            if (this.displayedLabels.has(node))
                continue;
            // If the node is hidden, we don't need to display its label obviously
            if (data.hidden)
                continue;
            var _a = this.framedGraphToViewport(data), x = _a.x, y = _a.y;
            // NOTE: we can cache the labels we need to render until the camera's ratio changes
            var size = this.scaleSize(data.size);
            // Is node big enough?
            if (!data.forceLabel && size < this.settings.labelRenderedSizeThreshold)
                continue;
            // Is node actually on screen (with some margin)
            // NOTE: we used to rely on the quadtree for this, but the coordinates
            // conversion make it unreliable and at that point we already converted
            // to viewport coordinates and since the label grid already culls the
            // number of potential labels to display this looks like a good
            // performance compromise.
            // NOTE: labelGrid.getLabelsToDisplay could probably optimize by not
            // considering cells obviously outside of the range of the current
            // view rectangle.
            if (x < -X_LABEL_MARGIN ||
                x > this.width + X_LABEL_MARGIN ||
                y < -Y_LABEL_MARGIN ||
                y > this.height + Y_LABEL_MARGIN)
                continue;
            // Because displayed edge labels depend directly on actually rendered node
            // labels, we need to only add to this.displayedLabels nodes whose label
            // is rendered.
            // This makes this.displayedLabels depend on viewport, which might become
            // an issue once we start memoizing getLabelsToDisplay.
            this.displayedLabels.add(node);
            this.settings.labelRenderer(context, __assign(__assign({ key: node }, data), { size: size, x: x, y: y }), this.settings);
        }
        return this;
    };
    /**
     * Method used to render edge labels, based on which node labels were
     * rendered.
     *
     * @return {Sigma}
     */
    Sigma.prototype.renderEdgeLabels = function () {
        if (!this.settings.renderEdgeLabels)
            return this;
        var context = this.canvasContexts.edgeLabels;
        // Clearing
        context.clearRect(0, 0, this.width, this.height);
        var edgeLabelsToDisplay = (0, labels_1.edgeLabelsToDisplayFromNodes)({
            graph: this.graph,
            hoveredNode: this.hoveredNode,
            displayedNodeLabels: this.displayedLabels,
            highlightedNodes: this.highlightedNodes,
        }).concat(this.edgesWithForcedLabels);
        var displayedLabels = new Set();
        for (var i = 0, l = edgeLabelsToDisplay.length; i < l; i++) {
            var edge = edgeLabelsToDisplay[i], extremities = this.graph.extremities(edge), sourceData = this.nodeDataCache[extremities[0]], targetData = this.nodeDataCache[extremities[1]], edgeData = this.edgeDataCache[edge];
            // If the edge was already drawn (like if it is eligible AND has
            // `forceLabel`), we don't want to draw it again
            if (displayedLabels.has(edge))
                continue;
            // If the edge is hidden we don't need to display its label
            // NOTE: the test on sourceData & targetData is probably paranoid at this point?
            if (edgeData.hidden || sourceData.hidden || targetData.hidden) {
                continue;
            }
            this.settings.edgeLabelRenderer(context, __assign(__assign({ key: edge }, edgeData), { size: this.scaleSize(edgeData.size) }), __assign(__assign(__assign({ key: extremities[0] }, sourceData), this.framedGraphToViewport(sourceData)), { size: this.scaleSize(sourceData.size) }), __assign(__assign(__assign({ key: extremities[1] }, targetData), this.framedGraphToViewport(targetData)), { size: this.scaleSize(targetData.size) }), this.settings);
            displayedLabels.add(edge);
        }
        return this;
    };
    /**
     * Method used to render the highlighted nodes.
     *
     * @return {Sigma}
     */
    Sigma.prototype.renderHighlightedNodes = function () {
        var _this = this;
        var context = this.canvasContexts.hovers;
        // Clearing
        context.clearRect(0, 0, this.width, this.height);
        // Rendering
        var render = function (node) {
            var data = _this.nodeDataCache[node];
            var _a = _this.framedGraphToViewport(data), x = _a.x, y = _a.y;
            var size = _this.scaleSize(data.size);
            _this.settings.hoverRenderer(context, __assign(__assign({ key: node }, data), { size: size, x: x, y: y }), _this.settings);
        };
        var nodesToRender = [];
        if (this.hoveredNode && !this.nodeDataCache[this.hoveredNode].hidden) {
            nodesToRender.push(this.hoveredNode);
        }
        this.highlightedNodes.forEach(function (node) {
            // The hovered node has already been highlighted
            if (node !== _this.hoveredNode)
                nodesToRender.push(node);
        });
        // Draw labels:
        nodesToRender.forEach(function (node) { return render(node); });
        // Draw WebGL nodes on top of the labels:
        var nodesPerPrograms = {};
        // 1. Count nodes per type:
        nodesToRender.forEach(function (node) {
            var type = _this.nodeDataCache[node].type;
            nodesPerPrograms[type] = (nodesPerPrograms[type] || 0) + 1;
        });
        // 2. Allocate for each type for the proper number of nodes
        for (var type in this.nodeHoverPrograms) {
            this.nodeHoverPrograms[type].allocate(nodesPerPrograms[type] || 0);
            // Also reset count, to use when rendering:
            nodesPerPrograms[type] = 0;
        }
        // 3. Process all nodes to render:
        nodesToRender.forEach(function (node) {
            var data = _this.nodeDataCache[node];
            _this.nodeHoverPrograms[data.type].process(data, data.hidden, nodesPerPrograms[data.type]++);
        });
        // 4. Clear hovered nodes layer:
        this.webGLContexts.hoverNodes.clear(this.webGLContexts.hoverNodes.COLOR_BUFFER_BIT);
        // 5. Render:
        for (var type in this.nodeHoverPrograms) {
            var program = this.nodeHoverPrograms[type];
            program.bind();
            program.bufferData();
            program.render({
                matrix: this.matrix,
                width: this.width,
                height: this.height,
                ratio: this.camera.ratio,
                correctionRatio: this.correctionRatio / this.camera.ratio,
                scalingRatio: this.pixelRatio,
            });
        }
    };
    /**
     * Method used to schedule a hover render.
     *
     */
    Sigma.prototype.scheduleHighlightedNodesRender = function () {
        var _this = this;
        if (this.renderHighlightedNodesFrame || this.renderFrame)
            return;
        this.renderHighlightedNodesFrame = (0, utils_1.requestFrame)(function () {
            // Resetting state
            _this.renderHighlightedNodesFrame = null;
            // Rendering
            _this.renderHighlightedNodes();
            _this.renderEdgeLabels();
        });
    };
    /**
     * Method used to render.
     *
     * @return {Sigma}
     */
    Sigma.prototype.render = function () {
        var _this = this;
        this.emit("beforeRender");
        var exitRender = function () {
            _this.emit("afterRender");
            return _this;
        };
        // If a render was scheduled, we cancel it
        if (this.renderFrame) {
            (0, utils_1.cancelFrame)(this.renderFrame);
            this.renderFrame = null;
            this.needToProcess = false;
            this.needToSoftProcess = false;
        }
        // First we need to resize
        this.resize();
        // Clearing the canvases
        this.clear();
        // Recomputing useful camera-related values:
        this.updateCachedValues();
        // If we have no nodes we can stop right there
        if (!this.graph.order)
            return exitRender();
        // TODO: improve this heuristic or move to the captor itself?
        // TODO: deal with the touch captor here as well
        var mouseCaptor = this.mouseCaptor;
        var moving = this.camera.isAnimated() ||
            mouseCaptor.isMoving ||
            mouseCaptor.draggedEvents ||
            mouseCaptor.currentWheelDirection;
        // Then we need to extract a matrix from the camera
        var cameraState = this.camera.getState();
        var viewportDimensions = this.getDimensions();
        var graphDimensions = this.getGraphDimensions();
        var padding = this.getSetting("stagePadding") || 0;
        this.matrix = (0, utils_1.matrixFromCamera)(cameraState, viewportDimensions, graphDimensions, padding);
        this.invMatrix = (0, utils_1.matrixFromCamera)(cameraState, viewportDimensions, graphDimensions, padding, true);
        this.correctionRatio = (0, utils_1.getMatrixImpact)(this.matrix, cameraState, viewportDimensions);
        // Drawing nodes
        for (var type in this.nodePrograms) {
            var program = this.nodePrograms[type];
            program.bind();
            program.bufferData();
            program.render({
                matrix: this.matrix,
                width: this.width,
                height: this.height,
                ratio: cameraState.ratio,
                correctionRatio: this.correctionRatio / cameraState.ratio,
                scalingRatio: this.pixelRatio,
            });
        }
        // Drawing edges
        if (!this.settings.hideEdgesOnMove || !moving) {
            for (var type in this.edgePrograms) {
                var program = this.edgePrograms[type];
                program.bind();
                program.bufferData();
                program.render({
                    matrix: this.matrix,
                    width: this.width,
                    height: this.height,
                    ratio: cameraState.ratio,
                    correctionRatio: this.correctionRatio / cameraState.ratio,
                    scalingRatio: this.pixelRatio,
                });
            }
        }
        // Do not display labels on move per setting
        if (this.settings.hideLabelsOnMove && moving)
            return exitRender();
        this.renderLabels();
        this.renderEdgeLabels();
        this.renderHighlightedNodes();
        return exitRender();
    };
    /**
     * Internal method used to update expensive and therefore cached values
     * each time the camera state is updated.
     */
    Sigma.prototype.updateCachedValues = function () {
        var ratio = this.camera.getState().ratio;
        this.cameraSizeRatio = Math.sqrt(ratio);
    };
    /**---------------------------------------------------------------------------
     * Public API.
     **---------------------------------------------------------------------------
     */
    /**
     * Method returning the renderer's camera.
     *
     * @return {Camera}
     */
    Sigma.prototype.getCamera = function () {
        return this.camera;
    };
    /**
     * Method returning the container DOM element.
     *
     * @return {HTMLElement}
     */
    Sigma.prototype.getContainer = function () {
        return this.container;
    };
    /**
     * Method returning the renderer's graph.
     *
     * @return {Graph}
     */
    Sigma.prototype.getGraph = function () {
        return this.graph;
    };
    /**
     * Method used to set the renderer's graph.
     *
     * @return {Graph}
     */
    Sigma.prototype.setGraph = function (graph) {
        if (graph === this.graph)
            return;
        // Unbinding handlers on the current graph
        this.unbindGraphHandlers();
        // Clearing the graph data caches
        this.nodeDataCache = {};
        this.edgeDataCache = {};
        // Cleaning renderer state tied to the current graph
        this.displayedLabels.clear();
        this.highlightedNodes.clear();
        this.hoveredNode = null;
        this.hoveredEdge = null;
        this.nodesWithForcedLabels.length = 0;
        this.edgesWithForcedLabels.length = 0;
        if (this.checkEdgesEventsFrame !== null) {
            (0, utils_1.cancelFrame)(this.checkEdgesEventsFrame);
            this.checkEdgesEventsFrame = null;
        }
        // Installing new graph
        this.graph = graph;
        // Binding new handlers
        this.bindGraphHandlers();
        // Re-rendering now to avoid discrepancies from now to next frame
        this.process();
        this.render();
    };
    /**
     * Method returning the mouse captor.
     *
     * @return {MouseCaptor}
     */
    Sigma.prototype.getMouseCaptor = function () {
        return this.mouseCaptor;
    };
    /**
     * Method returning the touch captor.
     *
     * @return {TouchCaptor}
     */
    Sigma.prototype.getTouchCaptor = function () {
        return this.touchCaptor;
    };
    /**
     * Method returning the current renderer's dimensions.
     *
     * @return {Dimensions}
     */
    Sigma.prototype.getDimensions = function () {
        return { width: this.width, height: this.height };
    };
    /**
     * Method returning the current graph's dimensions.
     *
     * @return {Dimensions}
     */
    Sigma.prototype.getGraphDimensions = function () {
        var extent = this.customBBox || this.nodeExtent;
        return {
            width: extent.x[1] - extent.x[0] || 1,
            height: extent.y[1] - extent.y[0] || 1,
        };
    };
    /**
     * Method used to get all the sigma node attributes.
     * It's usefull for example to get the position of a node
     * and to get values that are set by the nodeReducer
     *
     * @param  {string} key - The node's key.
     * @return {NodeDisplayData | undefined} A copy of the desired node's attribute or undefined if not found
     */
    Sigma.prototype.getNodeDisplayData = function (key) {
        var node = this.nodeDataCache[key];
        return node ? Object.assign({}, node) : undefined;
    };
    /**
     * Method used to get all the sigma edge attributes.
     * It's usefull for example to get values that are set by the edgeReducer.
     *
     * @param  {string} key - The edge's key.
     * @return {EdgeDisplayData | undefined} A copy of the desired edge's attribute or undefined if not found
     */
    Sigma.prototype.getEdgeDisplayData = function (key) {
        var edge = this.edgeDataCache[key];
        return edge ? Object.assign({}, edge) : undefined;
    };
    /**
     * Method returning a copy of the settings collection.
     *
     * @return {Settings} A copy of the settings collection.
     */
    Sigma.prototype.getSettings = function () {
        return __assign({}, this.settings);
    };
    /**
     * Method returning the current value for a given setting key.
     *
     * @param  {string} key - The setting key to get.
     * @return {any} The value attached to this setting key or undefined if not found
     */
    Sigma.prototype.getSetting = function (key) {
        return this.settings[key];
    };
    /**
     * Method setting the value of a given setting key. Note that this will schedule
     * a new render next frame.
     *
     * @param  {string} key - The setting key to set.
     * @param  {any}    value - The value to set.
     * @return {Sigma}
     */
    Sigma.prototype.setSetting = function (key, value) {
        this.settings[key] = value;
        (0, settings_1.validateSettings)(this.settings);
        this.handleSettingsUpdate();
        this.needToProcess = true; // TODO: some keys may work with only needToSoftProcess or even nothing
        this._scheduleRefresh();
        return this;
    };
    /**
     * Method updating the value of a given setting key using the provided function.
     * Note that this will schedule a new render next frame.
     *
     * @param  {string}   key     - The setting key to set.
     * @param  {function} updater - The update function.
     * @return {Sigma}
     */
    Sigma.prototype.updateSetting = function (key, updater) {
        this.settings[key] = updater(this.settings[key]);
        (0, settings_1.validateSettings)(this.settings);
        this.handleSettingsUpdate();
        this.needToProcess = true; // TODO: some keys may work with only needToSoftProcess or even nothing
        this._scheduleRefresh();
        return this;
    };
    /**
     * Method used to resize the renderer.
     *
     * @return {Sigma}
     */
    Sigma.prototype.resize = function () {
        var previousWidth = this.width, previousHeight = this.height;
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.pixelRatio = (0, utils_1.getPixelRatio)();
        if (this.width === 0) {
            if (this.settings.allowInvalidContainer)
                this.width = 1;
            else
                throw new Error("Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.");
        }
        if (this.height === 0) {
            if (this.settings.allowInvalidContainer)
                this.height = 1;
            else
                throw new Error("Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.");
        }
        // If nothing has changed, we can stop right here
        if (previousWidth === this.width && previousHeight === this.height)
            return this;
        this.emit("resize");
        // Sizing dom elements
        for (var id in this.elements) {
            var element = this.elements[id];
            element.style.width = this.width + "px";
            element.style.height = this.height + "px";
        }
        // Sizing canvas contexts
        for (var id in this.canvasContexts) {
            this.elements[id].setAttribute("width", this.width * this.pixelRatio + "px");
            this.elements[id].setAttribute("height", this.height * this.pixelRatio + "px");
            if (this.pixelRatio !== 1)
                this.canvasContexts[id].scale(this.pixelRatio, this.pixelRatio);
        }
        // Sizing WebGL contexts
        for (var id in this.webGLContexts) {
            this.elements[id].setAttribute("width", this.width * this.pixelRatio + "px");
            this.elements[id].setAttribute("height", this.height * this.pixelRatio + "px");
            this.webGLContexts[id].viewport(0, 0, this.width * this.pixelRatio, this.height * this.pixelRatio);
        }
        return this;
    };
    /**
     * Method used to clear all the canvases.
     *
     * @return {Sigma}
     */
    Sigma.prototype.clear = function () {
        this.webGLContexts.nodes.clear(this.webGLContexts.nodes.COLOR_BUFFER_BIT);
        this.webGLContexts.edges.clear(this.webGLContexts.edges.COLOR_BUFFER_BIT);
        this.webGLContexts.hoverNodes.clear(this.webGLContexts.hoverNodes.COLOR_BUFFER_BIT);
        this.canvasContexts.labels.clearRect(0, 0, this.width, this.height);
        this.canvasContexts.hovers.clearRect(0, 0, this.width, this.height);
        this.canvasContexts.edgeLabels.clearRect(0, 0, this.width, this.height);
        return this;
    };
    /**
     * Method used to refresh all computed data.
     *
     * @return {Sigma}
     */
    Sigma.prototype.refresh = function () {
        this.needToProcess = true;
        this._refresh();
        return this;
    };
    /**
     * Method used to refresh all computed data, at the next available frame.
     * If this method has already been called this frame, then it will only render once at the next available frame.
     *
     * @return {Sigma}
     */
    Sigma.prototype.scheduleRefresh = function () {
        this.needToProcess = true;
        this._scheduleRefresh();
        return this;
    };
    /**
     * Method used to (un)zoom, while preserving the position of a viewport point.
     * Used for instance to zoom "on the mouse cursor".
     *
     * @param viewportTarget
     * @param newRatio
     * @return {CameraState}
     */
    Sigma.prototype.getViewportZoomedState = function (viewportTarget, newRatio) {
        var _a = this.camera.getState(), ratio = _a.ratio, angle = _a.angle, x = _a.x, y = _a.y;
        // TODO: handle max zoom
        var ratioDiff = newRatio / ratio;
        var center = {
            x: this.width / 2,
            y: this.height / 2,
        };
        var graphMousePosition = this.viewportToFramedGraph(viewportTarget);
        var graphCenterPosition = this.viewportToFramedGraph(center);
        return {
            angle: angle,
            x: (graphMousePosition.x - graphCenterPosition.x) * (1 - ratioDiff) + x,
            y: (graphMousePosition.y - graphCenterPosition.y) * (1 - ratioDiff) + y,
            ratio: newRatio,
        };
    };
    /**
     * Method returning the abstract rectangle containing the graph according
     * to the camera's state.
     *
     * @return {object} - The view's rectangle.
     */
    Sigma.prototype.viewRectangle = function () {
        // TODO: reduce relative margin?
        var marginX = (0 * this.width) / 8, marginY = (0 * this.height) / 8;
        var p1 = this.viewportToFramedGraph({ x: 0 - marginX, y: 0 - marginY }), p2 = this.viewportToFramedGraph({ x: this.width + marginX, y: 0 - marginY }), h = this.viewportToFramedGraph({ x: 0, y: this.height + marginY });
        return {
            x1: p1.x,
            y1: p1.y,
            x2: p2.x,
            y2: p2.y,
            height: p2.y - h.y,
        };
    };
    /**
     * Method returning the coordinates of a point from the framed graph system to the viewport system. It allows
     * overriding anything that is used to get the translation matrix, or even the matrix itself.
     *
     * Be careful if overriding dimensions, padding or cameraState, as the computation of the matrix is not the lightest
     * of computations.
     */
    Sigma.prototype.framedGraphToViewport = function (coordinates, override) {
        if (override === void 0) { override = {}; }
        var recomputeMatrix = !!override.cameraState || !!override.viewportDimensions || !!override.graphDimensions;
        var matrix = override.matrix
            ? override.matrix
            : recomputeMatrix
                ? (0, utils_1.matrixFromCamera)(override.cameraState || this.camera.getState(), override.viewportDimensions || this.getDimensions(), override.graphDimensions || this.getGraphDimensions(), override.padding || this.getSetting("stagePadding") || 0)
                : this.matrix;
        var viewportPos = (0, matrices_1.multiplyVec2)(matrix, coordinates);
        return {
            x: ((1 + viewportPos.x) * this.width) / 2,
            y: ((1 - viewportPos.y) * this.height) / 2,
        };
    };
    /**
     * Method returning the coordinates of a point from the viewport system to the framed graph system. It allows
     * overriding anything that is used to get the translation matrix, or even the matrix itself.
     *
     * Be careful if overriding dimensions, padding or cameraState, as the computation of the matrix is not the lightest
     * of computations.
     */
    Sigma.prototype.viewportToFramedGraph = function (coordinates, override) {
        if (override === void 0) { override = {}; }
        var recomputeMatrix = !!override.cameraState || !!override.viewportDimensions || !override.graphDimensions;
        var invMatrix = override.matrix
            ? override.matrix
            : recomputeMatrix
                ? (0, utils_1.matrixFromCamera)(override.cameraState || this.camera.getState(), override.viewportDimensions || this.getDimensions(), override.graphDimensions || this.getGraphDimensions(), override.padding || this.getSetting("stagePadding") || 0, true)
                : this.invMatrix;
        var res = (0, matrices_1.multiplyVec2)(invMatrix, {
            x: (coordinates.x / this.width) * 2 - 1,
            y: 1 - (coordinates.y / this.height) * 2,
        });
        if (isNaN(res.x))
            res.x = 0;
        if (isNaN(res.y))
            res.y = 0;
        return res;
    };
    /**
     * Method used to translate a point's coordinates from the viewport system (pixel distance from the top-left of the
     * stage) to the graph system (the reference system of data as they are in the given graph instance).
     *
     * This method accepts an optional camera which can be useful if you need to translate coordinates
     * based on a different view than the one being currently being displayed on screen.
     *
     * @param {Coordinates}                  viewportPoint
     * @param {CoordinateConversionOverride} override
     */
    Sigma.prototype.viewportToGraph = function (viewportPoint, override) {
        if (override === void 0) { override = {}; }
        return this.normalizationFunction.inverse(this.viewportToFramedGraph(viewportPoint, override));
    };
    /**
     * Method used to translate a point's coordinates from the graph system (the reference system of data as they are in
     * the given graph instance) to the viewport system (pixel distance from the top-left of the stage).
     *
     * This method accepts an optional camera which can be useful if you need to translate coordinates
     * based on a different view than the one being currently being displayed on screen.
     *
     * @param {Coordinates}                  graphPoint
     * @param {CoordinateConversionOverride} override
     */
    Sigma.prototype.graphToViewport = function (graphPoint, override) {
        if (override === void 0) { override = {}; }
        return this.framedGraphToViewport(this.normalizationFunction(graphPoint), override);
    };
    /**
     * Method returning the graph's bounding box.
     *
     * @return {{ x: Extent, y: Extent }}
     */
    Sigma.prototype.getBBox = function () {
        return (0, utils_1.graphExtent)(this.graph);
    };
    /**
     * Method returning the graph's custom bounding box, if any.
     *
     * @return {{ x: Extent, y: Extent } | null}
     */
    Sigma.prototype.getCustomBBox = function () {
        return this.customBBox;
    };
    /**
     * Method used to override the graph's bounding box with a custom one. Give `null` as the argument to stop overriding.
     *
     * @return {Sigma}
     */
    Sigma.prototype.setCustomBBox = function (customBBox) {
        this.customBBox = customBBox;
        this._scheduleRefresh();
        return this;
    };
    /**
     * Method used to shut the container & release event listeners.
     *
     * @return {undefined}
     */
    Sigma.prototype.kill = function () {
        // Emitting "kill" events so that plugins and such can cleanup
        this.emit("kill");
        // Releasing events
        this.removeAllListeners();
        // Releasing camera handlers
        this.camera.removeListener("updated", this.activeListeners.camera);
        // Releasing DOM events & captors
        window.removeEventListener("resize", this.activeListeners.handleResize);
        this.mouseCaptor.kill();
        this.touchCaptor.kill();
        // Releasing graph handlers
        this.unbindGraphHandlers();
        // Releasing cache & state
        this.quadtree = new quadtree_1.default();
        this.nodeDataCache = {};
        this.edgeDataCache = {};
        this.nodesWithForcedLabels = [];
        this.edgesWithForcedLabels = [];
        this.highlightedNodes.clear();
        // Clearing frames
        if (this.renderFrame) {
            (0, utils_1.cancelFrame)(this.renderFrame);
            this.renderFrame = null;
        }
        if (this.renderHighlightedNodesFrame) {
            (0, utils_1.cancelFrame)(this.renderHighlightedNodesFrame);
            this.renderHighlightedNodesFrame = null;
        }
        // Destroying canvases
        var container = this.container;
        while (container.firstChild)
            container.removeChild(container.firstChild);
    };
    /**
     * Method used to scale the given size according to the camera's ratio, i.e.
     * zooming state.
     *
     * @param  {number} size - The size to scale (node size, edge thickness etc.).
     * @return {number}      - The scaled size.
     */
    Sigma.prototype.scaleSize = function (size) {
        return size / this.cameraSizeRatio;
    };
    /**
     * Method that returns the collection of all used canvases.
     * At the moment, the instantiated canvases are the following, and in the
     * following order in the DOM:
     * - `edges`
     * - `nodes`
     * - `edgeLabels`
     * - `labels`
     * - `hovers`
     * - `hoverNodes`
     * - `mouse`
     *
     * @return {PlainObject<HTMLCanvasElement>} - The collection of canvases.
     */
    Sigma.prototype.getCanvases = function () {
        return __assign({}, this.elements);
    };
    return Sigma;
}(types_1.TypedEventEmitter));
exports["default"] = Sigma;


/***/ }),

/***/ "./node_modules/sigma/types.js":
/*!*************************************!*\
  !*** ./node_modules/sigma/types.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TypedEventEmitter = void 0;
/**
 * Sigma.js Types
 * ===============
 *
 * Various type declarations used throughout the library.
 * @module
 */
var events_1 = __webpack_require__(/*! events */ "./node_modules/events/events.js");
var TypedEventEmitter = /** @class */ (function (_super) {
    __extends(TypedEventEmitter, _super);
    function TypedEventEmitter() {
        var _this = _super.call(this) || this;
        _this.rawEmitter = _this;
        return _this;
    }
    return TypedEventEmitter;
}(events_1.EventEmitter));
exports.TypedEventEmitter = TypedEventEmitter;


/***/ }),

/***/ "./node_modules/sigma/utils/animate.js":
/*!*********************************************!*\
  !*** ./node_modules/sigma/utils/animate.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.animateNodes = exports.ANIMATE_DEFAULTS = void 0;
var index_1 = __webpack_require__(/*! ./index */ "./node_modules/sigma/utils/index.js");
var easings_1 = __importDefault(__webpack_require__(/*! ./easings */ "./node_modules/sigma/utils/easings.js"));
exports.ANIMATE_DEFAULTS = {
    easing: "quadraticInOut",
    duration: 150,
};
/**
 * Function used to animate the nodes.
 */
function animateNodes(graph, targets, opts, callback) {
    var options = Object.assign({}, exports.ANIMATE_DEFAULTS, opts);
    var easing = typeof options.easing === "function" ? options.easing : easings_1.default[options.easing];
    var start = Date.now();
    var startPositions = {};
    for (var node in targets) {
        var attrs = targets[node];
        startPositions[node] = {};
        for (var k in attrs)
            startPositions[node][k] = graph.getNodeAttribute(node, k);
    }
    var frame = null;
    var step = function () {
        frame = null;
        var p = (Date.now() - start) / options.duration;
        if (p >= 1) {
            // Animation is done
            for (var node in targets) {
                var attrs = targets[node];
                // We use given values to avoid precision issues and for convenience
                for (var k in attrs)
                    graph.setNodeAttribute(node, k, attrs[k]);
            }
            if (typeof callback === "function")
                callback();
            return;
        }
        p = easing(p);
        for (var node in targets) {
            var attrs = targets[node];
            var s = startPositions[node];
            for (var k in attrs)
                graph.setNodeAttribute(node, k, attrs[k] * p + s[k] * (1 - p));
        }
        frame = (0, index_1.requestFrame)(step);
    };
    step();
    return function () {
        if (frame)
            (0, index_1.cancelFrame)(frame);
    };
}
exports.animateNodes = animateNodes;


/***/ }),

/***/ "./node_modules/sigma/utils/data.js":
/*!******************************************!*\
  !*** ./node_modules/sigma/utils/data.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HTML_COLORS = void 0;
exports.HTML_COLORS = {
    black: "#000000",
    silver: "#C0C0C0",
    gray: "#808080",
    grey: "#808080",
    white: "#FFFFFF",
    maroon: "#800000",
    red: "#FF0000",
    purple: "#800080",
    fuchsia: "#FF00FF",
    green: "#008000",
    lime: "#00FF00",
    olive: "#808000",
    yellow: "#FFFF00",
    navy: "#000080",
    blue: "#0000FF",
    teal: "#008080",
    aqua: "#00FFFF",
    darkblue: "#00008B",
    mediumblue: "#0000CD",
    darkgreen: "#006400",
    darkcyan: "#008B8B",
    deepskyblue: "#00BFFF",
    darkturquoise: "#00CED1",
    mediumspringgreen: "#00FA9A",
    springgreen: "#00FF7F",
    cyan: "#00FFFF",
    midnightblue: "#191970",
    dodgerblue: "#1E90FF",
    lightseagreen: "#20B2AA",
    forestgreen: "#228B22",
    seagreen: "#2E8B57",
    darkslategray: "#2F4F4F",
    darkslategrey: "#2F4F4F",
    limegreen: "#32CD32",
    mediumseagreen: "#3CB371",
    turquoise: "#40E0D0",
    royalblue: "#4169E1",
    steelblue: "#4682B4",
    darkslateblue: "#483D8B",
    mediumturquoise: "#48D1CC",
    indigo: "#4B0082",
    darkolivegreen: "#556B2F",
    cadetblue: "#5F9EA0",
    cornflowerblue: "#6495ED",
    rebeccapurple: "#663399",
    mediumaquamarine: "#66CDAA",
    dimgray: "#696969",
    dimgrey: "#696969",
    slateblue: "#6A5ACD",
    olivedrab: "#6B8E23",
    slategray: "#708090",
    slategrey: "#708090",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    mediumslateblue: "#7B68EE",
    lawngreen: "#7CFC00",
    chartreuse: "#7FFF00",
    aquamarine: "#7FFFD4",
    skyblue: "#87CEEB",
    lightskyblue: "#87CEFA",
    blueviolet: "#8A2BE2",
    darkred: "#8B0000",
    darkmagenta: "#8B008B",
    saddlebrown: "#8B4513",
    darkseagreen: "#8FBC8F",
    lightgreen: "#90EE90",
    mediumpurple: "#9370DB",
    darkviolet: "#9400D3",
    palegreen: "#98FB98",
    darkorchid: "#9932CC",
    yellowgreen: "#9ACD32",
    sienna: "#A0522D",
    brown: "#A52A2A",
    darkgray: "#A9A9A9",
    darkgrey: "#A9A9A9",
    lightblue: "#ADD8E6",
    greenyellow: "#ADFF2F",
    paleturquoise: "#AFEEEE",
    lightsteelblue: "#B0C4DE",
    powderblue: "#B0E0E6",
    firebrick: "#B22222",
    darkgoldenrod: "#B8860B",
    mediumorchid: "#BA55D3",
    rosybrown: "#BC8F8F",
    darkkhaki: "#BDB76B",
    mediumvioletred: "#C71585",
    indianred: "#CD5C5C",
    peru: "#CD853F",
    chocolate: "#D2691E",
    tan: "#D2B48C",
    lightgray: "#D3D3D3",
    lightgrey: "#D3D3D3",
    thistle: "#D8BFD8",
    orchid: "#DA70D6",
    goldenrod: "#DAA520",
    palevioletred: "#DB7093",
    crimson: "#DC143C",
    gainsboro: "#DCDCDC",
    plum: "#DDA0DD",
    burlywood: "#DEB887",
    lightcyan: "#E0FFFF",
    lavender: "#E6E6FA",
    darksalmon: "#E9967A",
    violet: "#EE82EE",
    palegoldenrod: "#EEE8AA",
    lightcoral: "#F08080",
    khaki: "#F0E68C",
    aliceblue: "#F0F8FF",
    honeydew: "#F0FFF0",
    azure: "#F0FFFF",
    sandybrown: "#F4A460",
    wheat: "#F5DEB3",
    beige: "#F5F5DC",
    whitesmoke: "#F5F5F5",
    mintcream: "#F5FFFA",
    ghostwhite: "#F8F8FF",
    salmon: "#FA8072",
    antiquewhite: "#FAEBD7",
    linen: "#FAF0E6",
    lightgoldenrodyellow: "#FAFAD2",
    oldlace: "#FDF5E6",
    magenta: "#FF00FF",
    deeppink: "#FF1493",
    orangered: "#FF4500",
    tomato: "#FF6347",
    hotpink: "#FF69B4",
    coral: "#FF7F50",
    darkorange: "#FF8C00",
    lightsalmon: "#FFA07A",
    orange: "#FFA500",
    lightpink: "#FFB6C1",
    pink: "#FFC0CB",
    gold: "#FFD700",
    peachpuff: "#FFDAB9",
    navajowhite: "#FFDEAD",
    moccasin: "#FFE4B5",
    bisque: "#FFE4C4",
    mistyrose: "#FFE4E1",
    blanchedalmond: "#FFEBCD",
    papayawhip: "#FFEFD5",
    lavenderblush: "#FFF0F5",
    seashell: "#FFF5EE",
    cornsilk: "#FFF8DC",
    lemonchiffon: "#FFFACD",
    floralwhite: "#FFFAF0",
    snow: "#FFFAFA",
    lightyellow: "#FFFFE0",
    ivory: "#FFFFF0",
};


/***/ }),

/***/ "./node_modules/sigma/utils/easings.js":
/*!*********************************************!*\
  !*** ./node_modules/sigma/utils/easings.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cubicInOut = exports.cubicOut = exports.cubicIn = exports.quadraticInOut = exports.quadraticOut = exports.quadraticIn = exports.linear = void 0;
/**
 * Sigma.js Easings
 * =================
 *
 * Handy collection of easing functions.
 * @module
 */
var linear = function (k) { return k; };
exports.linear = linear;
var quadraticIn = function (k) { return k * k; };
exports.quadraticIn = quadraticIn;
var quadraticOut = function (k) { return k * (2 - k); };
exports.quadraticOut = quadraticOut;
var quadraticInOut = function (k) {
    if ((k *= 2) < 1)
        return 0.5 * k * k;
    return -0.5 * (--k * (k - 2) - 1);
};
exports.quadraticInOut = quadraticInOut;
var cubicIn = function (k) { return k * k * k; };
exports.cubicIn = cubicIn;
var cubicOut = function (k) { return --k * k * k + 1; };
exports.cubicOut = cubicOut;
var cubicInOut = function (k) {
    if ((k *= 2) < 1)
        return 0.5 * k * k * k;
    return 0.5 * ((k -= 2) * k * k + 2);
};
exports.cubicInOut = cubicInOut;
var easings = {
    linear: exports.linear,
    quadraticIn: exports.quadraticIn,
    quadraticOut: exports.quadraticOut,
    quadraticInOut: exports.quadraticInOut,
    cubicIn: exports.cubicIn,
    cubicOut: exports.cubicOut,
    cubicInOut: exports.cubicInOut,
};
exports["default"] = easings;


/***/ }),

/***/ "./node_modules/sigma/utils/edge-collisions.js":
/*!*****************************************************!*\
  !*** ./node_modules/sigma/utils/edge-collisions.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.doEdgeCollideWithPoint = exports.isPixelColored = void 0;
/**
 * This helper returns true is the pixel at (x,y) in the given WebGL context is
 * colored, and false else.
 */
function isPixelColored(gl, x, y) {
    var pixels = new Uint8Array(4);
    gl.readPixels(x, gl.drawingBufferHeight - y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
    return pixels[3] > 0;
}
exports.isPixelColored = isPixelColored;
/**
 * This helper checks whether or not a point (x, y) collides with an
 * edge, connecting a source (xS, yS) to a target (xT, yT) with a thickness in
 * pixels.
 */
function doEdgeCollideWithPoint(x, y, xS, yS, xT, yT, thickness) {
    // Check first if point is out of the rectangle which opposite corners are the
    // source and the target, rectangle we expand by `thickness` in every
    // directions:
    if (x < xS - thickness && x < xT - thickness)
        return false;
    if (y < yS - thickness && y < yT - thickness)
        return false;
    if (x > xS + thickness && x > xT + thickness)
        return false;
    if (y > yS + thickness && y > yT + thickness)
        return false;
    // Check actual collision now: Since we now the point is in this big rectangle
    // we "just" need to check that the distance between the point and the line
    // connecting the source and the target is less than `thickness`:
    // https://en.wikipedia.org/wiki/Distance_from_a_point_to_a_line
    var distance = Math.abs((xT - xS) * (yS - y) - (xS - x) * (yT - yS)) / Math.sqrt(Math.pow(xT - xS, 2) + Math.pow(yT - yS, 2));
    return distance < thickness / 2;
}
exports.doEdgeCollideWithPoint = doEdgeCollideWithPoint;


/***/ }),

/***/ "./node_modules/sigma/utils/index.js":
/*!*******************************************!*\
  !*** ./node_modules/sigma/utils/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateGraph = exports.canUse32BitsIndices = exports.extractPixel = exports.getMatrixImpact = exports.matrixFromCamera = exports.getCorrectionRatio = exports.floatColor = exports.floatArrayColor = exports.parseColor = exports.zIndexOrdering = exports.createNormalizationFunction = exports.graphExtent = exports.getPixelRatio = exports.createElement = exports.cancelFrame = exports.requestFrame = exports.assignDeep = exports.assign = exports.isPlainObject = void 0;
var is_graph_1 = __importDefault(__webpack_require__(/*! graphology-utils/is-graph */ "./node_modules/graphology-utils/is-graph.js"));
var matrices_1 = __webpack_require__(/*! ./matrices */ "./node_modules/sigma/utils/matrices.js");
var data_1 = __webpack_require__(/*! ./data */ "./node_modules/sigma/utils/data.js");
/**
 * Checks whether the given value is a plain object.
 *
 * @param  {mixed}   value - Target value.
 * @return {boolean}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function isPlainObject(value) {
    return typeof value === "object" && value !== null && value.constructor === Object;
}
exports.isPlainObject = isPlainObject;
/**
 * Helper to use Object.assign with more than two objects.
 *
 * @param  {object} target       - First object.
 * @param  {object} [...objects] - Objects to merge.
 * @return {object}
 */
function assign(target) {
    var objects = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        objects[_i - 1] = arguments[_i];
    }
    target = target || {};
    for (var i = 0, l = objects.length; i < l; i++) {
        var o = objects[i];
        if (!o)
            continue;
        Object.assign(target, o);
    }
    return target;
}
exports.assign = assign;
/**
 * Very simple recursive Object.assign-like function.
 *
 * @param  {object} target       - First object.
 * @param  {object} [...objects] - Objects to merge.
 * @return {object}
 */
function assignDeep(target) {
    var objects = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        objects[_i - 1] = arguments[_i];
    }
    target = target || {};
    for (var i = 0, l = objects.length; i < l; i++) {
        var o = objects[i];
        if (!o)
            continue;
        for (var k in o) {
            if (isPlainObject(o[k])) {
                target[k] = assignDeep(target[k], o[k]);
            }
            else {
                target[k] = o[k];
            }
        }
    }
    return target;
}
exports.assignDeep = assignDeep;
/**
 * Just some dirty trick to make requestAnimationFrame and cancelAnimationFrame "work" in Node.js, for unit tests:
 */
exports.requestFrame = typeof requestAnimationFrame !== "undefined"
    ? function (callback) { return requestAnimationFrame(callback); }
    : function (callback) { return setTimeout(callback, 0); };
exports.cancelFrame = typeof cancelAnimationFrame !== "undefined"
    ? function (requestID) { return cancelAnimationFrame(requestID); }
    : function (requestID) { return clearTimeout(requestID); };
/**
 * Function used to create DOM elements easily.
 *
 * @param  {string} tag        - Tag name of the element to create.
 * @param  {object} style      - Styles map.
 * @param  {object} attributes - Attributes map.
 * @return {HTMLElement}
 */
function createElement(tag, style, attributes) {
    var element = document.createElement(tag);
    if (style) {
        for (var k in style) {
            element.style[k] = style[k];
        }
    }
    if (attributes) {
        for (var k in attributes) {
            element.setAttribute(k, attributes[k]);
        }
    }
    return element;
}
exports.createElement = createElement;
/**
 * Function returning the browser's pixel ratio.
 *
 * @return {number}
 */
function getPixelRatio() {
    if (typeof window.devicePixelRatio !== "undefined")
        return window.devicePixelRatio;
    return 1;
}
exports.getPixelRatio = getPixelRatio;
/**
 * Function returning the graph's node extent in x & y.
 *
 * @param  {Graph}
 * @return {object}
 */
function graphExtent(graph) {
    if (!graph.order)
        return { x: [0, 1], y: [0, 1] };
    var xMin = Infinity;
    var xMax = -Infinity;
    var yMin = Infinity;
    var yMax = -Infinity;
    graph.forEachNode(function (_, attr) {
        var x = attr.x, y = attr.y;
        if (x < xMin)
            xMin = x;
        if (x > xMax)
            xMax = x;
        if (y < yMin)
            yMin = y;
        if (y > yMax)
            yMax = y;
    });
    return { x: [xMin, xMax], y: [yMin, yMax] };
}
exports.graphExtent = graphExtent;
function createNormalizationFunction(extent) {
    var _a = __read(extent.x, 2), minX = _a[0], maxX = _a[1], _b = __read(extent.y, 2), minY = _b[0], maxY = _b[1];
    var ratio = Math.max(maxX - minX, maxY - minY), dX = (maxX + minX) / 2, dY = (maxY + minY) / 2;
    if (ratio === 0 || Math.abs(ratio) === Infinity || isNaN(ratio))
        ratio = 1;
    if (isNaN(dX))
        dX = 0;
    if (isNaN(dY))
        dY = 0;
    var fn = function (data) {
        return {
            x: 0.5 + (data.x - dX) / ratio,
            y: 0.5 + (data.y - dY) / ratio,
        };
    };
    // TODO: possibility to apply this in batch over array of indices
    fn.applyTo = function (data) {
        data.x = 0.5 + (data.x - dX) / ratio;
        data.y = 0.5 + (data.y - dY) / ratio;
    };
    fn.inverse = function (data) {
        return {
            x: dX + ratio * (data.x - 0.5),
            y: dY + ratio * (data.y - 0.5),
        };
    };
    fn.ratio = ratio;
    return fn;
}
exports.createNormalizationFunction = createNormalizationFunction;
/**
 * Function ordering the given elements in reverse z-order so they drawn
 * the correct way.
 *
 * @param  {number}   extent   - [min, max] z values.
 * @param  {function} getter   - Z attribute getter function.
 * @param  {array}    elements - The array to sort.
 * @return {array} - The sorted array.
 */
function zIndexOrdering(extent, getter, elements) {
    // If k is > n, we'll use a standard sort
    return elements.sort(function (a, b) {
        var zA = getter(a) || 0, zB = getter(b) || 0;
        if (zA < zB)
            return -1;
        if (zA > zB)
            return 1;
        return 0;
    });
    // TODO: counting sort optimization
}
exports.zIndexOrdering = zIndexOrdering;
/**
 * WebGL utils
 * ===========
 */
/**
 * Memoized function returning a float-encoded color from various string
 * formats describing colors.
 */
var INT8 = new Int8Array(4);
var INT32 = new Int32Array(INT8.buffer, 0, 1);
var FLOAT32 = new Float32Array(INT8.buffer, 0, 1);
var RGBA_TEST_REGEX = /^\s*rgba?\s*\(/;
var RGBA_EXTRACT_REGEX = /^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;
function parseColor(val) {
    var r = 0; // byte
    var g = 0; // byte
    var b = 0; // byte
    var a = 1; // float
    // Handling hexadecimal notation
    if (val[0] === "#") {
        if (val.length === 4) {
            r = parseInt(val.charAt(1) + val.charAt(1), 16);
            g = parseInt(val.charAt(2) + val.charAt(2), 16);
            b = parseInt(val.charAt(3) + val.charAt(3), 16);
        }
        else {
            r = parseInt(val.charAt(1) + val.charAt(2), 16);
            g = parseInt(val.charAt(3) + val.charAt(4), 16);
            b = parseInt(val.charAt(5) + val.charAt(6), 16);
        }
        if (val.length === 9) {
            a = parseInt(val.charAt(7) + val.charAt(8), 16) / 255;
        }
    }
    // Handling rgb notation
    else if (RGBA_TEST_REGEX.test(val)) {
        var match = val.match(RGBA_EXTRACT_REGEX);
        if (match) {
            r = +match[1];
            g = +match[2];
            b = +match[3];
            if (match[4])
                a = +match[4];
        }
    }
    return { r: r, g: g, b: b, a: a };
}
exports.parseColor = parseColor;
var FLOAT_COLOR_CACHE = {};
for (var htmlColor in data_1.HTML_COLORS) {
    FLOAT_COLOR_CACHE[htmlColor] = floatColor(data_1.HTML_COLORS[htmlColor]);
    // Replicating cache for hex values for free
    FLOAT_COLOR_CACHE[data_1.HTML_COLORS[htmlColor]] = FLOAT_COLOR_CACHE[htmlColor];
}
function floatArrayColor(val) {
    val = data_1.HTML_COLORS[val] || val;
    // NOTE: this variant is not cached because it is mostly used for uniforms
    var _a = parseColor(val), r = _a.r, g = _a.g, b = _a.b, a = _a.a;
    return new Float32Array([r / 255, g / 255, b / 255, a]);
}
exports.floatArrayColor = floatArrayColor;
function floatColor(val) {
    // If the color is already computed, we yield it
    if (typeof FLOAT_COLOR_CACHE[val] !== "undefined")
        return FLOAT_COLOR_CACHE[val];
    var parsed = parseColor(val);
    var r = parsed.r, g = parsed.g, b = parsed.b;
    var a = parsed.a;
    a = (a * 255) | 0;
    INT32[0] = ((a << 24) | (b << 16) | (g << 8) | r) & 0xfeffffff;
    var color = FLOAT32[0];
    FLOAT_COLOR_CACHE[val] = color;
    return color;
}
exports.floatColor = floatColor;
/**
 * In sigma, the graph is normalized into a [0, 1], [0, 1] square, before being given to the various renderers. This
 * helps dealing with quadtree in particular.
 * But at some point, we need to rescale it so that it takes the best place in the screen, ie. we always want to see two
 * nodes "touching" opposite sides of the graph, with the camera being at its default state.
 *
 * This function determines this ratio.
 */
function getCorrectionRatio(viewportDimensions, graphDimensions) {
    var viewportRatio = viewportDimensions.height / viewportDimensions.width;
    var graphRatio = graphDimensions.height / graphDimensions.width;
    // If the stage and the graphs are in different directions (such as the graph being wider that tall while the stage
    // is taller than wide), we can stop here to have indeed nodes touching opposite sides:
    if ((viewportRatio < 1 && graphRatio > 1) || (viewportRatio > 1 && graphRatio < 1)) {
        return 1;
    }
    // Else, we need to fit the graph inside the stage:
    // 1. If the graph is "squarer" (ie. with a ratio closer to 1), we need to make the largest sides touch;
    // 2. If the stage is "squarer", we need to make the smallest sides touch.
    return Math.min(Math.max(graphRatio, 1 / graphRatio), Math.max(1 / viewportRatio, viewportRatio));
}
exports.getCorrectionRatio = getCorrectionRatio;
/**
 * Function returning a matrix from the current state of the camera.
 */
// TODO: it's possible to optimize this drastically!
function matrixFromCamera(state, viewportDimensions, graphDimensions, padding, inverse) {
    var angle = state.angle, ratio = state.ratio, x = state.x, y = state.y;
    var width = viewportDimensions.width, height = viewportDimensions.height;
    var matrix = (0, matrices_1.identity)();
    var smallestDimension = Math.min(width, height) - 2 * padding;
    var correctionRatio = getCorrectionRatio(viewportDimensions, graphDimensions);
    if (!inverse) {
        (0, matrices_1.multiply)(matrix, (0, matrices_1.scale)((0, matrices_1.identity)(), 2 * (smallestDimension / width) * correctionRatio, 2 * (smallestDimension / height) * correctionRatio));
        (0, matrices_1.multiply)(matrix, (0, matrices_1.rotate)((0, matrices_1.identity)(), -angle));
        (0, matrices_1.multiply)(matrix, (0, matrices_1.scale)((0, matrices_1.identity)(), 1 / ratio));
        (0, matrices_1.multiply)(matrix, (0, matrices_1.translate)((0, matrices_1.identity)(), -x, -y));
    }
    else {
        (0, matrices_1.multiply)(matrix, (0, matrices_1.translate)((0, matrices_1.identity)(), x, y));
        (0, matrices_1.multiply)(matrix, (0, matrices_1.scale)((0, matrices_1.identity)(), ratio));
        (0, matrices_1.multiply)(matrix, (0, matrices_1.rotate)((0, matrices_1.identity)(), angle));
        (0, matrices_1.multiply)(matrix, (0, matrices_1.scale)((0, matrices_1.identity)(), width / smallestDimension / 2 / correctionRatio, height / smallestDimension / 2 / correctionRatio));
    }
    return matrix;
}
exports.matrixFromCamera = matrixFromCamera;
/**
 * All these transformations we apply on the matrix to get it rescale the graph
 * as we want make it very hard to get pixel-perfect distances in WebGL. This
 * function returns a factor that properly cancels the matrix effect on lengths.
 *
 * [jacomyal]
 * To be fully honest, I can't really explain happens here... I notice that the
 * following ratio works (ie. it correctly compensates the matrix impact on all
 * camera states I could try):
 * > `R = size(V) / size(M * V) / W`
 * as long as `M * V` is in the direction of W (ie. parallel to (Ox)). It works
 * as well with H and a vector that transforms into something parallel to (Oy).
 *
 * Also, note that we use `angle` and not `-angle` (that would seem logical,
 * since we want to anticipate the rotation), because of the fact that in WebGL,
 * the image is vertically swapped.
 */
function getMatrixImpact(matrix, cameraState, viewportDimensions) {
    var _a = (0, matrices_1.multiplyVec2)(matrix, { x: Math.cos(cameraState.angle), y: Math.sin(cameraState.angle) }, 0), x = _a.x, y = _a.y;
    return 1 / Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) / viewportDimensions.width;
}
exports.getMatrixImpact = getMatrixImpact;
/**
 * Function extracting the color at the given pixel.
 */
function extractPixel(gl, x, y, array) {
    var data = array || new Uint8Array(4);
    gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, data);
    return data;
}
exports.extractPixel = extractPixel;
/**
 * Function used to know whether given webgl context can use 32 bits indices.
 */
function canUse32BitsIndices(gl) {
    var webgl2 = typeof WebGL2RenderingContext !== "undefined" && gl instanceof WebGL2RenderingContext;
    return webgl2 || !!gl.getExtension("OES_element_index_uint");
}
exports.canUse32BitsIndices = canUse32BitsIndices;
/**
 * Check if the graph variable is a valid graph, and if sigma can render it.
 */
function validateGraph(graph) {
    // check if it's a valid graphology instance
    if (!(0, is_graph_1.default)(graph))
        throw new Error("Sigma: invalid graph instance.");
    // check if nodes have x/y attributes
    graph.forEachNode(function (key, attributes) {
        if (!Number.isFinite(attributes.x) || !Number.isFinite(attributes.y)) {
            throw new Error("Sigma: Coordinates of node ".concat(key, " are invalid. A node must have a numeric 'x' and 'y' attribute."));
        }
    });
}
exports.validateGraph = validateGraph;


/***/ }),

/***/ "./node_modules/sigma/utils/matrices.js":
/*!**********************************************!*\
  !*** ./node_modules/sigma/utils/matrices.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.multiplyVec2 = exports.multiply = exports.translate = exports.rotate = exports.scale = exports.identity = void 0;
function identity() {
    return Float32Array.of(1, 0, 0, 0, 1, 0, 0, 0, 1);
}
exports.identity = identity;
// TODO: optimize
function scale(m, x, y) {
    m[0] = x;
    m[4] = typeof y === "number" ? y : x;
    return m;
}
exports.scale = scale;
function rotate(m, r) {
    var s = Math.sin(r), c = Math.cos(r);
    m[0] = c;
    m[1] = s;
    m[3] = -s;
    m[4] = c;
    return m;
}
exports.rotate = rotate;
function translate(m, x, y) {
    m[6] = x;
    m[7] = y;
    return m;
}
exports.translate = translate;
function multiply(a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    var b00 = b[0], b01 = b[1], b02 = b[2];
    var b10 = b[3], b11 = b[4], b12 = b[5];
    var b20 = b[6], b21 = b[7], b22 = b[8];
    a[0] = b00 * a00 + b01 * a10 + b02 * a20;
    a[1] = b00 * a01 + b01 * a11 + b02 * a21;
    a[2] = b00 * a02 + b01 * a12 + b02 * a22;
    a[3] = b10 * a00 + b11 * a10 + b12 * a20;
    a[4] = b10 * a01 + b11 * a11 + b12 * a21;
    a[5] = b10 * a02 + b11 * a12 + b12 * a22;
    a[6] = b20 * a00 + b21 * a10 + b22 * a20;
    a[7] = b20 * a01 + b21 * a11 + b22 * a21;
    a[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return a;
}
exports.multiply = multiply;
function multiplyVec2(a, b, z) {
    if (z === void 0) { z = 1; }
    var a00 = a[0];
    var a01 = a[1];
    var a10 = a[3];
    var a11 = a[4];
    var a20 = a[6];
    var a21 = a[7];
    var b0 = b.x;
    var b1 = b.y;
    return { x: b0 * a00 + b1 * a10 + a20 * z, y: b0 * a01 + b1 * a11 + a21 * z };
}
exports.multiplyVec2 = multiplyVec2;


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/mystuff.ts":
/*!************************!*\
  !*** ./src/mystuff.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var sayhello = function (mystr) {
    return "".concat(mystr, " hello!");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sayhello);


/***/ }),

/***/ "./src/assets/smiley.svg":
/*!*******************************!*\
  !*** ./src/assets/smiley.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "smiley.svg";

/***/ }),

/***/ "./src/assets/data.json":
/*!******************************!*\
  !*** ./src/assets/data.json ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"nodes":[{"key":"0.0","attributes":{"x":268.72385,"y":91.18155,"size":22.714287,"label":"Myriel","color":"#D8482D"}},{"key":"1.0","attributes":{"x":296.39902,"y":57.118374,"size":15,"label":"Napoleon","color":"#B30000"}},{"key":"2.0","attributes":{"x":248.45229,"y":52.22656,"size":16.714285,"label":"MlleBaptistine","color":"#BB100A"}},{"key":"3.0","attributes":{"x":224.83313,"y":98.01885,"size":16.714285,"label":"MmeMagloire","color":"#BB100A"}},{"key":"4.0","attributes":{"x":270.9098,"y":149.2961,"size":15,"label":"CountessDeLo","color":"#B30000"}},{"key":"5.0","attributes":{"x":318.6509,"y":85.41602,"size":15,"label":"Geborand","color":"#B30000"}},{"key":"6.0","attributes":{"x":330.3126,"y":117.94921,"size":15,"label":"Champtercier","color":"#B30000"}},{"key":"7.0","attributes":{"x":310.513,"y":155.66956,"size":15,"label":"Cravatte","color":"#B30000"}},{"key":"8.0","attributes":{"x":295.74683,"y":124.78035,"size":15,"label":"Count","color":"#B30000"}},{"key":"9.0","attributes":{"x":241.03372,"y":131.8897,"size":15,"label":"OldMan","color":"#B30000"}}],"edges":[{"key":"0","source":"1.0","target":"0.0","attributes":{"size":1}},{"key":"1","source":"2.0","target":"0.0","attributes":{"size":8}},{"key":"2","source":"3.0","target":"0.0","attributes":{"size":10}},{"key":"3","source":"3.0","target":"2.0","attributes":{"size":6}},{"key":"4","source":"4.0","target":"0.0","attributes":{"size":1}},{"key":"5","source":"5.0","target":"0.0","attributes":{"size":1}},{"key":"6","source":"6.0","target":"0.0","attributes":{"size":1}},{"key":"7","source":"7.0","target":"0.0","attributes":{"size":1}},{"key":"8","source":"8.0","target":"0.0","attributes":{"size":2}},{"key":"9","source":"9.0","target":"0.0","attributes":{"size":1}}]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphology__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphology */ "./node_modules/graphology/dist/graphology.umd.min.js");
/* harmony import */ var graphology__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphology__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sigma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sigma */ "./node_modules/sigma/index.js");
/* harmony import */ var sigma__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sigma__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _assets_smiley_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/smiley.svg */ "./src/assets/smiley.svg");
/* harmony import */ var _mystuff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mystuff */ "./src/mystuff.ts");
/* harmony import */ var _assets_data_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/data.json */ "./src/assets/data.json");


//with node_modules we dont need to write out the path, just the name of the package

 //Add svg type to custom.d.ts for this import to work
 //shorthand for mystuff.ts
//Our own(not from node_modules) js code uses relative path meaning 
//we have to write `./someJslib` instead of just `someJslib`
//Notice even though the function name is `sayhello` from `export default sayhello;` in `mystuff.js`
//we are allowed to rename the import as `hello`
 //`Add "resolveJsonModule": true` in tsconfig.json for this import to work
document.querySelector("h1").innerText = (0,_mystuff__WEBPACK_IMPORTED_MODULE_4__["default"])("Bob");
var somePicHTML = document.querySelector("#somePic");
somePicHTML.src = _assets_smiley_svg__WEBPACK_IMPORTED_MODULE_3__;
var randNum = function () {
    return Math.floor(Math.random() * (10 - 0 + 1));
};
// First graph - adding node manually
var graph = new (graphology__WEBPACK_IMPORTED_MODULE_0___default())();
graph.addNode("Home", { x: randNum(), y: randNum(), size: 5, label: "HomedAd", color: "purple", URL: "/#" });
graph.addNode("Programming", { x: randNum(), y: randNum(), size: 5, label: "Prog", color: "red", URL: "/tags/prog.html" });
graph.addEdge("Home", "Programming");
var container = document.getElementById("sigma-container");
var settingsSigma = {
    labelRenderedSizeThreshold: 1,
};
var renderer = new (sigma__WEBPACK_IMPORTED_MODULE_1___default())(graph, container, settingsSigma);
//the ! in `container!` asserts that `container` is non-null (this stops the IDE warnings)
//2nd Graph - importing nodes with json
var graph2 = new (graphology__WEBPACK_IMPORTED_MODULE_0___default())();
graph2.import(_assets_data_json__WEBPACK_IMPORTED_MODULE_5__);
var container2 = document.getElementById("sigma-container2");
var settingsSigma2 = {
    labelRenderedSizeThreshold: 1,
};
var renderer2 = new (sigma__WEBPACK_IMPORTED_MODULE_1___default())(graph2, container2, settingsSigma2);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxlaGIyMjdhNGI3YzcyNWRlOWRhYTI4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw4Q0FBOEMscUNBQXFDLDRCQUE0QixHQUFHLFVBQVUscUNBQXFDLDRCQUE0QixHQUFHLE9BQU8sdUZBQXVGLFdBQVcsV0FBVyxPQUFPLEtBQUssV0FBVyxXQUFXLDZEQUE2RCxtQ0FBbUMsUUFBUSwyQkFBMkIsMEJBQTBCLEdBQUcsVUFBVSwyQkFBMkIsMEJBQTBCLEdBQUcsbUJBQW1CO0FBQzNrQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBLGtDQUFrQyxRQUFRO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsdUNBQXVDLFFBQVE7QUFDL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVMseUJBQXlCO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhEQUE4RCxZQUFZO0FBQzFFO0FBQ0EsOERBQThELFlBQVk7QUFDMUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxZQUFZO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNoZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN0QkEsZUFBZSxLQUFvRCxvQkFBb0IsQ0FBb0gsQ0FBQyxrQkFBa0IsYUFBYSxjQUFjLGlGQUFpRixnQkFBZ0IsYUFBYSxvR0FBb0csTUFBTSxnQkFBZ0Isd0VBQXdFLGNBQWMsaUVBQWlFLDZDQUE2QyxNQUFNLGdCQUFnQiw4Q0FBOEMsdUJBQXVCLFFBQVEsYUFBYSw0REFBNEQsbUNBQW1DLHFDQUFxQyxJQUFJLGdGQUFnRixPQUFPLFNBQVMsVUFBVSxrQkFBa0IsK0NBQStDLGFBQWEsa0JBQWtCLG9DQUFvQyw2QkFBNkIseUJBQXlCLGNBQWMsNENBQTRDLHFCQUFxQixvRkFBb0YsTUFBTSxrR0FBa0csZUFBZSw0QkFBNEIsV0FBVyxhQUFhLDBDQUEwQyw4Q0FBOEMsYUFBYSxtREFBbUQsU0FBUyxNQUFNLGNBQWMsb0dBQW9HLFNBQVMsaUJBQWlCLDhDQUE4QyxJQUFJLG1FQUFtRSxVQUFVLG9CQUFvQiw2QkFBNkIscUlBQXFJLGNBQWMsK0dBQStHLGNBQWMsd0RBQXdELGNBQWMsTUFBTSxvQkFBb0IsU0FBUyxrQkFBa0IsMkJBQTJCLGtEQUFrRCxFQUFFLGtCQUFrQixPQUFPLCtCQUErQixvRkFBb0YsY0FBYyw0REFBNEQsb0RBQW9ELFNBQVMsV0FBVyxpR0FBaUcsNkNBQTZDLHFGQUFxRiw2RUFBNkUsYUFBYSxzQ0FBc0MsZ0NBQWdDLGFBQWEsYUFBYSxrQkFBa0IseUNBQXlDLGtDQUFrQyxjQUFjLDJCQUEyQixhQUFhLDZGQUE2RixTQUFTLFFBQVEsK0JBQStCLDBDQUEwQyxNQUFNLFFBQVEsRUFBRSxHQUFHLHlHQUF5RyxTQUFTLGNBQWMseUhBQXlILGNBQWMsc0VBQXNFLG9CQUFvQixZQUFZLHNOQUFzTiw4R0FBOEcsWUFBWSwySkFBMkosc0hBQXNILFNBQVMsYUFBYSxzTEFBc0wsa0JBQWtCLE9BQU8sa0RBQWtELGFBQWEsaUNBQWlDLGtCQUFrQixnQkFBZ0IsdUJBQXVCLFdBQVcsOEVBQThFLGtDQUFrQyxXQUFXLDZCQUE2QixTQUFTLGtCQUFrQixjQUFjLG1CQUFtQixlQUFlLFdBQVcsaUNBQWlDLDhCQUE4QixTQUFTLGdCQUFnQiwyQkFBMkIsSUFBSSxjQUFjLFNBQVMsb0JBQW9CLHdEQUF3RCxLQUFLLDZJQUE2SSxvQ0FBb0Msd0NBQXdDLElBQUksY0FBYyx1RkFBdUYsWUFBWSwrQ0FBK0MsNkJBQTZCLFNBQVMsaUJBQWlCLCtKQUErSixLQUFLLG9CQUFvQixnTEFBZ0wseUNBQXlDLDZJQUE2SSxpQ0FBaUMsd0NBQXdDLGVBQWUsOEJBQThCLGlCQUFpQixtQkFBbUIseUJBQXlCLGlDQUFpQyxvQ0FBb0Msb0JBQW9CLE1BQU0sTUFBTSxtREFBbUQsOERBQThELG9CQUFvQixXQUFXLHVCQUF1QixvQ0FBb0MsS0FBSyx3QkFBd0IsUUFBUSxJQUFJLG1CQUFtQixTQUFTLHVDQUF1QyxzQkFBc0Isa0ZBQWtGLHNCQUFzQixnQ0FBZ0Msd0NBQXdDLCtDQUErQyxxREFBcUQsMENBQTBDLGNBQWMsOENBQThDLGlDQUFpQyw2SkFBNkosOEJBQThCLHNCQUFzQixLQUFLLG9DQUFvQyxvQkFBb0IsTUFBTSxtQkFBbUIsOEJBQThCLEtBQUssYUFBYSxnQkFBZ0IsUUFBUSw4RkFBOEYsWUFBWSx1RkFBdUYsVUFBVSx5Q0FBeUMsME1BQTBNLHlCQUF5Qix1QkFBdUIsUUFBUSxXQUFXLDREQUE0RCwyR0FBMkcsdURBQXVELG9DQUFvQyxLQUFLLGdDQUFnQyxZQUFZLG1DQUFtQyxvQkFBb0Isc0NBQXNDLG9CQUFvQiwrQkFBK0Isd0VBQXdFLCtEQUErRCw4Q0FBOEMsc0VBQXNFLFlBQVksa0JBQWtCLCtCQUErQix5QkFBeUIsYUFBYSxRQUFRLEVBQUUsc0JBQXNCLEdBQUcsb0JBQW9CLHlCQUF5QixPQUFPLFNBQVMsR0FBRyw0QkFBNEIsbUJBQW1CLHlCQUF5QixhQUFhLFFBQVEsRUFBRSxzQkFBc0IsR0FBRyxrQkFBa0IsZ0ZBQWdGLGFBQWEsbUdBQW1HLHdEQUF3RCxrQkFBa0Isa0JBQWtCLHdOQUF3TixJQUFJLG1GQUFtRixTQUFTLHFCQUFxQiwyRUFBMkUsRUFBRSxrQkFBa0Isa0RBQWtELGdCQUFnQixlQUFlLGNBQWMsTUFBTSw2REFBNkQsZ0JBQWdCLHlCQUF5QixjQUFjLE1BQU0scUtBQXFLLGdCQUFnQixrQkFBa0IsY0FBYyxNQUFNLDZKQUE2SixnQkFBZ0Isa0JBQWtCLGNBQWMsTUFBTSwwSkFBMEosZ0JBQWdCLElBQUksZ0JBQWdCLDBDQUEwQyxnQkFBZ0IsMENBQTBDLGdCQUFnQiwwQ0FBMEMsc0JBQXNCLDJFQUEyRSw2QkFBNkIsbUVBQW1FLFlBQVksb0JBQW9CLDhCQUE4QiwyQ0FBMkMsYUFBYSw4QkFBOEIsMkNBQTJDLCtCQUErQixtQkFBbUIsb0NBQW9DLHdDQUF3Qyx3RUFBd0Usb0NBQW9DLHVEQUF1RCxvQ0FBb0MsNEJBQTRCLHNGQUFzRiw2REFBNkQsK0JBQStCLHVEQUF1RCxzRkFBc0Ysb0NBQW9DLHVEQUF1RCw2U0FBNlMsMEJBQTBCLFlBQVksaUJBQWlCLGtIQUFrSCxRQUFRLGVBQWUseUhBQXlILGtDQUFrQyxvQkFBb0IsS0FBSyxrSkFBa0osV0FBVyxRQUFRLEtBQUssa0hBQWtILGtDQUFrQyxjQUFjLFFBQVEsaUJBQWlCLGtDQUFrQywwQkFBMEIsK0JBQStCLHNDQUFzQyx5QkFBeUIsRUFBRSxpQkFBaUIsbUNBQW1DLDBCQUEwQiw2QkFBNkIsdUNBQXVDLEVBQUUsaUJBQWlCLGtDQUFrQywwQkFBMEIsK0JBQStCLHNDQUFzQyx3Q0FBd0MsRUFBRSxpQkFBaUIsa0NBQWtDLDBCQUEwQixpQ0FBaUMsK0NBQStDLDREQUE0RCxvREFBb0QsU0FBUyxFQUFFLGlCQUFpQixxQ0FBcUMsMEJBQTBCLGlDQUFpQywrQ0FBK0MsMEZBQTBGLDZCQUE2QixpREFBaUQsb0RBQW9ELFNBQVMsRUFBRSxpQkFBaUIscUNBQXFDLDBCQUEwQiwrQkFBK0Isc0NBQXNDLGlFQUFpRSx1REFBdUQsU0FBUyxFQUFFLGlCQUFpQix1Q0FBdUMsMEJBQTBCLCtCQUErQixzQ0FBc0MseUZBQXlGLHlEQUF5RCxpREFBaUQsU0FBUyxFQUFFLGlCQUFpQixxQ0FBcUMsMEJBQTBCLCtCQUErQixzQ0FBc0MseUZBQXlGLDREQUE0RCxzREFBc0QsU0FBUyxFQUFFLGlCQUFpQixzQ0FBc0MsMEJBQTBCLCtCQUErQixzQ0FBc0MsZ0dBQWdHLHVFQUF1RSxnREFBZ0QsU0FBUyxFQUFFLFFBQVEsaUJBQWlCLGtDQUFrQywwQkFBMEIsNkJBQTZCLE1BQU0sMkpBQTJKLHVCQUF1Qiw2REFBNkQsZUFBZSwwSEFBMEgsa0JBQWtCLHdKQUF3SixLQUFLLDRMQUE0TCw0SEFBNEgseUJBQXlCLEVBQUUsaUJBQWlCLG1DQUFtQywwQkFBMEIsMkJBQTJCLE1BQU0sMkpBQTJKLHVCQUF1Qiw2REFBNkQsZUFBZSwwSEFBMEgsNkJBQTZCLHlJQUF5SSxLQUFLLDRMQUE0TCw0SEFBNEgsc0JBQXNCLEVBQUUsaUJBQWlCLGtDQUFrQywwQkFBMEIsNkJBQTZCLE1BQU0sMkpBQTJKLHVCQUF1Qiw2REFBNkQsZUFBZSwwSEFBMEgsa0JBQWtCLHdKQUF3SixLQUFLLDRMQUE0TCw0SEFBNEgsd0NBQXdDLEVBQUUsaUJBQWlCLGtDQUFrQywwQkFBMEIsK0JBQStCLE1BQU0sMkpBQTJKLHVCQUF1Qiw2REFBNkQsZUFBZSwwSEFBMEgsa0JBQWtCLHVLQUF1SyxLQUFLLDRMQUE0TCw0SEFBNEgsNERBQTRELG9EQUFvRCxTQUFTLEVBQUUsaUJBQWlCLHFDQUFxQywwQkFBMEIsK0JBQStCLE1BQU0sMkpBQTJKLHVCQUF1Qiw2REFBNkQsZUFBZSwwSEFBMEgsa0JBQWtCLHVLQUF1SyxLQUFLLDRMQUE0TCw0SEFBNEgsMEZBQTBGLDZFQUE2RSxvREFBb0QsU0FBUyxFQUFFLGlCQUFpQixxQ0FBcUMsMEJBQTBCLDZCQUE2QixNQUFNLDJKQUEySix1QkFBdUIsNkRBQTZELGVBQWUsMEhBQTBILGtCQUFrQix3SkFBd0osS0FBSyw0TEFBNEwsNEhBQTRILGlFQUFpRSx1REFBdUQsU0FBUyxFQUFFLGlCQUFpQix1Q0FBdUMsMEJBQTBCLDZCQUE2QixNQUFNLDJKQUEySix1QkFBdUIsNkRBQTZELGVBQWUsMEhBQTBILGtCQUFrQix3SkFBd0osS0FBSyw0TEFBNEwsNEhBQTRILHlGQUF5Rix5REFBeUQsaURBQWlELFNBQVMsRUFBRSxpQkFBaUIscUNBQXFDLDBCQUEwQiw2QkFBNkIsTUFBTSwySkFBMkosdUJBQXVCLDZEQUE2RCxlQUFlLDBIQUEwSCxrQkFBa0Isd0pBQXdKLEtBQUssNExBQTRMLDRIQUE0SCx5RkFBeUYsNERBQTRELHNEQUFzRCxTQUFTLEVBQUUsaUJBQWlCLHNDQUFzQywwQkFBMEIsNkJBQTZCLE1BQU0sMkpBQTJKLHVCQUF1Qiw2REFBNkQsZUFBZSwwSEFBMEgsa0JBQWtCLHdKQUF3SixLQUFLLDRMQUE0TCw0SEFBNEgsZ0dBQWdHLHVFQUF1RSxnREFBZ0QsU0FBUyxFQUFFLDJCQUEyQiw0QkFBNEIseUJBQXlCLGdCQUFnQixFQUFFLGFBQWEsd0JBQXdCLFNBQVMsV0FBVyxnQ0FBZ0MsT0FBTyxTQUFTLEdBQUcsTUFBTSwwQkFBMEIsRUFBRSw4Q0FBOEMsRUFBRSxnREFBZ0QsRUFBRSxnREFBZ0QsRUFBRSxrREFBa0QsRUFBRSxxQ0FBcUMsRUFBRSx5Q0FBeUMsRUFBRSxxQkFBcUIsU0FBUyx5QkFBeUIsV0FBVyw2SEFBNkgscUJBQXFCLGVBQWUseUJBQXlCLE9BQU8sR0FBRyxzSEFBc0gsU0FBUyxtQkFBbUIsaUJBQWlCLHNDQUFzQyx5QkFBeUIsR0FBRyxjQUFjLEtBQUssZUFBZSxTQUFTLGFBQWEsVUFBVSxTQUFTLFNBQVMsUUFBUSxVQUFVLE9BQU8sZUFBZSwrS0FBK0ssR0FBRyxxQkFBcUIsV0FBVyxNQUFNLDBCQUEwQixpR0FBaUcscUJBQXFCLFdBQVcsTUFBTSxTQUFTLEdBQUcsNEhBQTRILFNBQVMsbUJBQW1CLGlCQUFpQixXQUFXLHlDQUF5QyxhQUFhLFNBQVMsT0FBTyw4S0FBOEssaUJBQWlCLGlCQUFpQixTQUFTLDZLQUE2SyxFQUFFLGlCQUFpQix1QkFBdUIsNEhBQTRILHlIQUF5SCx1QkFBdUIsNENBQTRDLFNBQVMscUJBQXFCLGdHQUFnRyx1QkFBdUIsb0NBQW9DLHFEQUFxRCw4RUFBOEUsaUJBQWlCLCtCQUErQixxRUFBcUUseUJBQXlCLGFBQWEsRUFBRSw4QkFBOEIsd0NBQXdDLE9BQU8sT0FBTyw2S0FBNkssVUFBVSxHQUFHLHlCQUF5QixnQkFBZ0IscUJBQXFCLDRDQUE0QywyREFBMkQseURBQXlELHFCQUFxQixTQUFTLGtDQUFrQyxVQUFVLEtBQUssbUJBQW1CLGdCQUFnQix3TUFBd00sMkJBQTJCLGdCQUFnQixxQkFBcUIsNkRBQTZELDhFQUE4RSxrRkFBa0YsdUJBQXVCLFNBQVMsb0NBQW9DLFVBQVUsS0FBSyxxQkFBcUIsZ0JBQWdCLHlQQUF5UCxTQUFTLDhCQUE4QixFQUFFLGtEQUFrRCxFQUFFLG9EQUFvRCxFQUFFLG9EQUFvRCxFQUFFLHNEQUFzRCxFQUFFLHlDQUF5QyxFQUFFLDZDQUE2QyxFQUFFLGNBQWMsd0JBQXdCLHVCQUF1QixnQkFBZ0IsNkNBQTZDLHNCQUFzQiw0QkFBNEIsdUJBQXVCLHVCQUF1QixnQkFBZ0IsdURBQXVELGlEQUFpRCxlQUFlLHFCQUFxQixjQUFjLHVDQUF1QyxhQUFhLGFBQWEscUNBQXFDLGVBQWUsOERBQThELG1CQUFtQixvQ0FBb0MseUJBQXlCLFdBQVcsR0FBRyw2QkFBNkIsU0FBUyxzQ0FBc0Msc0NBQXNDLGdCQUFnQixPQUFPLGVBQWUseUNBQXlDLEdBQUcsaUJBQWlCLG9DQUFvQywyQkFBMkIsNERBQTRELE9BQU8seUJBQXlCLHdHQUF3Ryx1QkFBdUIsZ0JBQWdCLHFEQUFxRCwrQ0FBK0MsU0FBUyxnQ0FBZ0MsVUFBVSxLQUFLLCtCQUErQixpQkFBaUIsOERBQThELDJCQUEyQixvRUFBb0UsT0FBTyx5QkFBeUIsd0dBQXdHLHVCQUF1QixnQkFBZ0IsbURBQW1ELDZDQUE2Qyx5QkFBeUIsK0lBQStJLCtCQUErQix1QkFBdUIsbURBQW1ELHVCQUF1QixFQUFFLFNBQVMsZ0RBQWdELE9BQU8sR0FBRyw0R0FBNEcsU0FBUyxTQUFTLDREQUE0RCxPQUFPLEdBQUcsb0lBQW9JLFNBQVMsU0FBUywrRUFBK0UsZUFBZSwwSUFBMEksaUZBQWlGLG9LQUFvSyxlQUFlLHdKQUF3Six1RkFBdUYsdUZBQXVGLG9LQUFvSyw4SkFBOEosOEJBQThCLGlEQUFpRCw4QkFBOEIsK0RBQStELDJEQUEyRCxZQUFZLG9IQUFvSCx5Q0FBeUMsbUJBQW1CLCtCQUErQiw2Q0FBNkMsbUJBQW1CLElBQUksNkJBQTZCLDBLQUEwSyxxS0FBcUssZ0hBQWdILHdCQUF3Qiw2TUFBNk0sd0NBQXdDLGlGQUFpRixpRkFBaUYsT0FBTyxzREFBc0QsNkJBQTZCLHlIQUF5SCwrUkFBK1IsdUJBQXVCLGtCQUFrQixZQUFZLDJQQUEyUCwrQkFBK0Isa01BQWtNLDZMQUE2TCxXQUFXLG1JQUFtSSxrSEFBa0gsTUFBTSwrT0FBK08sNENBQTRDLDRCQUE0QixnVEFBZ1QsSUFBSSxxREFBcUQsdUJBQXVCLG9CQUFvQixNQUFNLG1CQUFtQixrREFBa0QsaURBQWlELEVBQUUsdURBQXVELHNEQUFzRCxFQUFFLFNBQVMsT0FBTyxnQkFBZ0IsT0FBTyxzREFBc0QsNkJBQTZCLHlIQUF5SCxjQUFjLGVBQWUseUNBQXlDLDZDQUE2QyxZQUFZLG9RQUFvUSxpQkFBaUIsdUJBQXVCLGdFQUFnRSwwT0FBME8sOERBQThELEVBQUUsbUJBQW1CLGNBQWMsTUFBTSxnREFBZ0QsNEhBQTRILGlLQUFpSyxzS0FBc0ssaURBQWlELDBCQUEwQiwyQkFBMkIsOEJBQThCLHlOQUF5TixNQUFNLEdBQUcsUUFBUSx1QkFBdUIsU0FBUyxnREFBZ0Qsc0JBQXNCLDhCQUE4QixxQkFBcUIsNkJBQTZCLHFCQUFxQixxQ0FBcUMsdUJBQXVCLHVDQUF1Qyx5QkFBeUIsc0NBQXNDLDJEQUEyRCw4Q0FBOEMsZ0NBQWdDLGdEQUFnRCxrQ0FBa0MsMEpBQTBKLG1CQUFtQixLQUFLLE9BQU8sa0JBQWtCLDJDQUEyQywwR0FBMEcsdUJBQXVCLDZCQUE2QixpQ0FBaUMscUNBQXFDLHlCQUF5QixnQ0FBZ0MseUJBQXlCLHlCQUF5QixjQUFjLHlCQUF5QixlQUFlLGVBQWUsbUNBQW1DLHNNQUFzTSxtQ0FBbUMsbUNBQW1DLHlCQUF5QixnQ0FBZ0Msd0JBQXdCLHlCQUF5QixjQUFjLHlCQUF5QixlQUFlLHNCQUFzQixtQ0FBbUMsc01BQXNNLHlCQUF5Qix5QkFBeUIsV0FBVywwQkFBMEIseUJBQXlCLGNBQWMseUJBQXlCLGVBQWUsK0JBQStCLGtGQUFrRiw4TEFBOEwsOEJBQThCLDZCQUE2QixvTUFBb00seUJBQXlCLHNHQUFzRyx1SEFBdUgsOEJBQThCLHVCQUF1QixnQ0FBZ0MsMkJBQTJCLHdNQUF3TSx5QkFBeUIsd0dBQXdHLHlIQUF5SCw0Q0FBNEMsdUJBQXVCLHNCQUFzQixzS0FBc0ssY0FBYyx5QkFBeUIsOEZBQThGLCtHQUErRyw2REFBNkQsa0JBQWtCLHNDQUFzQyxjQUFjLHlCQUF5Qix1R0FBdUcsd0RBQXdELGlDQUFpQyxjQUFjLHlCQUF5QixrR0FBa0csMkNBQTJDLGdDQUFnQyxjQUFjLHlCQUF5QixpR0FBaUcsMENBQTBDLHdDQUF3QyxjQUFjLHlCQUF5Qix5R0FBeUcsZ0RBQWdELDhCQUE4QixjQUFjLHlCQUF5QiwrRkFBK0YsbUdBQW1HLHFDQUFxQyxjQUFjLHlCQUF5QixzR0FBc0cscUZBQXFGLHNDQUFzQyxjQUFjLHlCQUF5Qix1R0FBdUcsc0ZBQXNGLHdCQUF3QixPQUFPLHlCQUF5QiwyRkFBMkYsNENBQTRDLHlCQUF5QixPQUFPLHlCQUF5Qiw0RkFBNEYsNkNBQTZDLDhCQUE4QixPQUFPLHlCQUF5QixpR0FBaUcsd0RBQXdELGdDQUFnQyxPQUFPLHlCQUF5QixtR0FBbUcsa0RBQWtELDZCQUE2QixPQUFPLHlCQUF5QixnR0FBZ0csUUFBUSxrR0FBa0csOEJBQThCLE9BQU8seUJBQXlCLGlHQUFpRyxRQUFRLG1HQUFtRyxzQkFBc0IsT0FBTyx5QkFBeUIseUZBQXlGLFFBQVEsOEdBQThHLHdDQUF3QyxPQUFPLHlCQUF5QiwyR0FBMkcscUNBQXFDLHdDQUF3QyxvQkFBb0IseUNBQXlDLE9BQU8seUJBQXlCLDRHQUE0RyxxQ0FBcUMseUNBQXlDLHFCQUFxQiw4Q0FBOEMsT0FBTyx5QkFBeUIsaUhBQWlILHFDQUFxQyx5Q0FBeUMsa0NBQWtDLGdEQUFnRCxPQUFPLHlCQUF5QixtSEFBbUgsbUNBQW1DLGdEQUFnRCw4QkFBOEIsNkNBQTZDLE9BQU8sMkJBQTJCLGdIQUFnSCxZQUFZLDJMQUEyTCw4Q0FBOEMsT0FBTywyQkFBMkIsaUhBQWlILFlBQVksMkxBQTJMLHNDQUFzQyxPQUFPLDJCQUEyQix5R0FBeUcsWUFBWSwyTUFBMk0sc0JBQXNCLE9BQU8seUJBQXlCLHlGQUF5RixvQkFBb0Isc0JBQXNCLE9BQU8seUJBQXlCLHlGQUF5RixvQkFBb0IsMkJBQTJCLE9BQU8seUJBQXlCLDhGQUE4RixrQ0FBa0MsMEJBQTBCLGNBQWMseUJBQXlCLDJGQUEyRixrQ0FBa0Msa0JBQWtCLGtCQUFrQixvSUFBb0ksOEJBQThCLGNBQWMseUJBQXlCLCtGQUErRiwwQ0FBMEMsNEJBQTRCLE9BQU8seUJBQXlCLCtGQUErRixvQkFBb0IsMEJBQTBCLE9BQU8seUJBQXlCLDZGQUE2RixvQkFBb0IsMEJBQTBCLE9BQU8seUJBQXlCLDZGQUE2RiwyQkFBMkIseUJBQXlCLHNCQUFzQiwwR0FBMEcsaUJBQWlCLG9HQUFvRywrQkFBK0IsNkNBQTZDLG1CQUFtQixJQUFJLFdBQVcsYUFBYSwyQkFBMkIsNEdBQTRHLGVBQWUseUJBQXlCLG1FQUFtRSxrREFBa0Qsc0ZBQXNGLG1CQUFtQixVQUFVLDRCQUE0QixtSUFBbUksT0FBTyx5QkFBeUIsTUFBTSxNQUFNLG1CQUFtQixxREFBcUQsNkNBQTZDLEVBQUUsYUFBYSxZQUFZLEtBQUssaUZBQWlGLG1CQUFtQixTQUFTLHdCQUF3QixPQUFPLDJCQUEyQiwyRkFBMkYsNkJBQTZCLG9CQUFvQixXQUFXLEdBQUcsb0JBQW9CLFNBQVMsbUJBQW1CLFVBQVUsR0FBRyxvQkFBb0IsVUFBVSxxREFBcUQsa0JBQWtCLEdBQUcsb0JBQW9CLFNBQVMsK0NBQStDLDhCQUE4QixFQUFFLHdCQUF3QixNQUFNLHVCQUF1Qix3Q0FBd0Msc0lBQXNJLDRIQUE0SCx1QkFBdUIsa0NBQWtDLG1OQUFtTixpRUFBaUUsZUFBZSxnSUFBZ0ksdUNBQXVDLG9IQUFvSCx1QkFBdUIsb0NBQW9DLDZNQUE2TSxtRUFBbUUsZUFBZSxnSUFBZ0ksK0JBQStCLHNIQUFzSCx1QkFBdUIsb0JBQW9CLDJGQUEyRix5QkFBeUIsaUNBQWlDLHVCQUF1QixpQkFBaUIsNEVBQTRFLDRCQUE0QiwyQkFBMkIsNEJBQTRCLHdCQUF3Qiw0QkFBNEIsMENBQTBDLDhCQUE4Qiw0REFBNEQsOENBQThDLE9BQU8saUNBQWlDLDRGQUE0RiwwQkFBMEIsK0RBQStELDhDQUE4QyxPQUFPLCtCQUErQixpRUFBaUUsaURBQWlELE9BQU8saUNBQWlDLDZGQUE2Rix5REFBeUQsMkNBQTJDLE9BQU8sK0JBQStCLDJGQUEyRiw0REFBNEQsZ0RBQWdELE9BQU8sZ0NBQWdDLG1HQUFtRywyRUFBMkUsMENBQTBDLE9BQU8sMENBQTBDLHNHQUFzRyx5SEFBeUgsc0JBQXNCLEdBQUcsbUNBQW1DLHVCQUF1Qiw4Q0FBOEMsdUNBQXVDLGNBQWMsRUFBRSwwQ0FBMEMsc0dBQXNHLHlIQUF5SCxzQkFBc0IsR0FBRyx1Q0FBdUMsdUJBQXVCLHVIQUF1SCx1Q0FBdUMsY0FBYyxFQUFFLHFDQUFxQywwRkFBMEYsb0JBQW9CLGdEQUFnRCxxR0FBcUcsb0JBQW9CLCtDQUErQyxvR0FBb0csb0JBQW9CLDBEQUEwRCwrR0FBK0csb0JBQW9CLG9CQUFvQiwwR0FBMEcsMkJBQTJCLGdGQUFnRixtQ0FBbUMsdUJBQXVCLGlDQUFpQyx3QkFBd0IsNkVBQTZFLG1DQUFtQyx1QkFBdUIsaURBQWlELHdCQUF3Qiw0RUFBNEUsK0RBQStELHVCQUF1Qix3Q0FBd0MsU0FBUyx3QkFBd0IsNkVBQTZFLG1DQUFtQyx1QkFBdUIsNkNBQTZDLFNBQVMseUJBQXlCLDhFQUE4RSxtQ0FBbUMsdUJBQXVCLDhDQUE4QyxTQUFTLDJCQUEyQixnRkFBZ0Ysd0NBQXdDLHVCQUF1QixnREFBZ0QsU0FBUyw2QkFBNkIsZ0ZBQWdGLHVQQUF1UCx1Q0FBdUMsdUJBQXVCLHFDQUFxQyxTQUFTLDBCQUEwQiwyQkFBMkIseUJBQXlCLGVBQWUsbUJBQW1CLGNBQWMsT0FBTyxPQUFPLG1DQUFtQyxVQUFVLEdBQUcscUJBQXFCLHNDQUFzQyxtQ0FBbUMscUJBQXFCLE9BQU8sT0FBTywwQ0FBMEMsa0JBQWtCLE1BQU0sR0FBRyxrQ0FBa0MsOENBQThDLHFCQUFxQixPQUFPLCtDQUErQywwQ0FBMEMsa0RBQWtELE1BQU0sSUFBSSxTQUFTLG1FQUFtRSxrREFBa0Qsc0JBQXNCLCtFQUErRSw0Q0FBNEMsa0NBQWtDLDBDQUEwQyxzSkFBc0osUUFBUSwwSEFBMEgsaUJBQWlCLCtGQUErRiwwRUFBMEUsWUFBWSwrRkFBK0YsbUJBQW1CLElBQUksS0FBSyxXQUFXLCtCQUErQix5Q0FBeUMsWUFBWSwrRkFBK0YsbUJBQW1CLElBQUksS0FBSyxXQUFXLDRFQUE0RSx1UkFBdVIsWUFBWSx3QkFBd0IsZ0JBQWdCLG1CQUFtQiwrQkFBK0IsMEJBQTBCLHlCQUF5Qix1QkFBdUIsMENBQTBDLFVBQVUsZUFBZSw2Q0FBNkMsS0FBSyxvQkFBb0IsMkJBQTJCLHlPQUF5TyxnUEFBZ1AsNlJBQTZSLHVEQUF1RCx1QkFBdUIsMkVBQTJFLGdCQUFnQixTQUFTLHFCQUFxQixxQkFBcUIsdUJBQXVCLHVCQUF1QixzQkFBc0IsZ0JBQWdCLG1DQUFtQyxrQkFBa0IsR0FBRyxRQUFRLE1BQU0sbUNBQW1DLGtFQUFrRSxpQ0FBaUMsb0RBQW9ELGlJQUFpSSxHQUFHLFNBQVMsa0hBQWtILCtGQUErRixHQUFHLHlCQUF5Qiw0R0FBNEcsaUJBQWlCLDBCQUEwQixnQkFBZ0IsRUFBRSxpQkFBaUIsa0NBQWtDLGdDQUFnQyxFQUFFLGlCQUFpQixvQ0FBb0Msa0NBQWtDLEVBQUUsaUJBQWlCLGtDQUFrQyxFQUFFLGlCQUFpQix5Q0FBeUMsaUJBQWlCLEVBQUUsaUJBQWlCLDJDQUEyQyxtQkFBbUIsdUJBQXVCLDhDQUE4QyxrQ0FBa0MsOENBQThDLCtFQUErRSxtQ0FBbUMsNkVBQTZFLEdBQUcsZUFBZSx1QkFBdUIsMEJBQTBCLDRFQUE0RSxHQUFHLGlCQUFpQix1QkFBdUIsMEJBQTBCLCtGQUErRixHQUFHLGlCQUFpQix3QkFBd0IsZUFBZSxvQ0FBb0MsNkJBQTZCLDREQUE0RCx1Q0FBdUMseUJBQXlCLE9BQU8seUJBQXlCLHdHQUF3RyxrREFBa0QseUJBQXlCLGNBQWMseUJBQXlCLHdHQUF3Ryx5SEFBeUgsOEJBQThCLG9IQUFvSCxvQkFBb0IsaUZBQWlGLCtCQUErQixvREFBb0QsaURBQWlELHlCQUF5QixXQUFXLHlCQUF5Qix3R0FBd0csdURBQXVELHlCQUF5QixjQUFjLHlCQUF5Qix3R0FBd0cseUhBQXlILG1DQUFtQyxxSEFBcUgsMENBQTBDLDBCQUEwQix3REFBd0QsaUJBQWlCLFFBQVEsaUdBQWlHLFFBQVEsZ0NBQWdDLHdCQUF3QixHQUFHLDBDQUEwQyx5QkFBeUIsR0FBRyxnQ0FBZ0MsNkNBQTZDLDBCQUEwQiwyREFBMkQsdUNBQXVDLDRCQUE0Qiw0QkFBNEIsNkNBQTZDLDBCQUEwQixnREFBZ0QsOElBQThJLHlTQUF5UyxvSEFBb0gsUUFBUSx1Q0FBdUMscUJBQXFCLDRCQUE0QixvQkFBb0IsOEVBQThFLCtCQUErQiw0REFBNEQsaURBQWlELHlCQUF5QixXQUFXLHlCQUF5Qix3R0FBd0csdURBQXVELHlCQUF5QixjQUFjLHlCQUF5Qix3R0FBd0cseUhBQXlILG1DQUFtQyxvSEFBb0gsOENBQThDLDBCQUEwQixzREFBc0QsdUNBQXVDLHdCQUF3Qiw0QkFBNEIsK0NBQStDLDBCQUEwQixzREFBc0QsdUNBQXVDLHdCQUF3QiwyQkFBMkIsb0JBQW9CLDhEQUE4RCw2QkFBNkIsb0VBQW9FLHVDQUF1Qyx5QkFBeUIsT0FBTyx5QkFBeUIsZ0dBQWdHLGlCQUFpQix5QkFBeUIsY0FBYyx5QkFBeUIsd0dBQXdHLHlIQUF5SCxtQkFBbUIsb0hBQW9ILE1BQU0sR0FBRyxpQkFBaUIsd0JBQXdCLHNCQUFzQixpRkFBaUYsNkJBQTZCLG9EQUFvRCxPQUFPLHlCQUF5Qix3R0FBd0csdUNBQXVDLDBDQUEwQyw2QkFBNkIsU0FBUyxnQ0FBZ0MsZUFBZSxNQUFNLDZDQUE2Qyw2QkFBNkIsU0FBUyxnQ0FBZ0Msa0JBQWtCLE1BQU0sNkNBQTZDLCtCQUErQix5UEFBeVAsUUFBUSxnQ0FBZ0MsV0FBVyxNQUFNLG9CQUFvQixrRkFBa0YsNkJBQTZCLG9EQUFvRCxPQUFPLHlCQUF5Qix3R0FBd0csOENBQThDLGVBQWUsNkJBQTZCLHNCQUFzQixnQkFBZ0IsNkJBQTZCLGdDQUFnQyxjQUFjLElBQUksY0FBYyxHQUFHLEtBQUssbUJBQW1CLGNBQWMsU0FBUyxnQkFBZ0IsSUFBSSx5SUFBeUksMkdBQTJHLDRCQUE0QixnQkFBZ0Isb0JBQW9CLGNBQWMsU0FBUyxrQkFBa0IsSUFBSSwySUFBMkksK0dBQStHLDRCQUE0QixnQkFBZ0Isb0JBQW9CLGNBQWMsU0FBUyxTQUFTLElBQUksdUlBQXVJLDRCQUE0QixnQkFBZ0Isb0JBQW9CLGNBQWMsU0FBUyx5QkFBeUIsSUFBSSwrSUFBK0ksZ0hBQWdILDRCQUE0QixnQkFBZ0Isb0JBQW9CLGNBQWMsU0FBUywyQkFBMkIsSUFBSSxpSkFBaUosb0hBQW9ILDRCQUE0QixnQkFBZ0IsS0FBSyxlQUFlLHFCQUFxQixVQUFVLHlCQUF5QixzQkFBc0IsNFBBQTRQO0FBQ3pueEU7Ozs7Ozs7Ozs7OztBQ0RhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0Isc0NBQXNDLGtCQUFrQjtBQUN2Riw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbUJBQU8sQ0FBQywrREFBa0I7QUFDMUMsZ0NBQWdDLG1CQUFPLENBQUMsK0RBQWtCO0FBQzFELGNBQWMsbUJBQU8sQ0FBQyxxREFBVTtBQUNoQyxjQUFjLG1CQUFPLENBQUMsK0NBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsVUFBVTtBQUMxQjtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJCQUEyQjtBQUMzQyxnQkFBZ0IsMkJBQTJCO0FBQzNDLGdCQUFnQiw2QkFBNkI7QUFDN0MsZ0JBQWdCLDZCQUE2QjtBQUM3QyxnQkFBZ0IsMkJBQTJCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixlQUFlO0FBQy9CLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMkNBQTJDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxxQ0FBcUM7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZUFBZTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMkNBQTJDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxxQ0FBcUM7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGtCQUFlOzs7Ozs7Ozs7Ozs7QUMxVEY7QUFDYjtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQixzQ0FBc0Msa0JBQWtCO0FBQ3ZGLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxxQkFBcUIsR0FBRyxzQkFBc0IsR0FBRyx1QkFBdUIsR0FBRyxzQkFBc0IsR0FBRyxzQkFBc0IsR0FBRyxtQkFBbUI7QUFDaEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxrREFBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksYUFBYTtBQUN6QixZQUFZLGFBQWE7QUFDekIsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCLFlBQVksYUFBYTtBQUN6QixZQUFZO0FBQ1o7QUFDQTtBQUNBLGtDQUFrQywwQkFBMEI7QUFDNUQ7QUFDQSxTQUFTLGVBQWU7QUFDeEI7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxZQUFZLGFBQWE7QUFDekIsWUFBWSxhQUFhO0FBQ3pCLFlBQVk7QUFDWjtBQUNBO0FBQ0EsK0JBQStCLDZCQUE2Qix5QkFBeUI7QUFDckY7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsK0RBQStELE9BQU87QUFDdEU7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFlBQVksYUFBYTtBQUN6QixZQUFZLGFBQWE7QUFDekIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxpQ0FBaUM7QUFDcEc7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQixZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGtCQUFlOzs7Ozs7Ozs7Ozs7QUNySUY7QUFDYjtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQixzQ0FBc0Msa0JBQWtCO0FBQ3ZGLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsbUNBQW1DLG9DQUFvQyxnQkFBZ0I7QUFDdkYsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwwQ0FBMEMsNEJBQTRCO0FBQ3RFLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw0QkFBNEIsbUJBQU8sQ0FBQyw2REFBVTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtHQUFrRztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYiw4REFBOEQsY0FBYztBQUM1RTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNB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QUM3RyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQztBQUMzSCxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxhQUFhLENBQUMsQ0FBQztBQUVwQyxJQUFNLFNBQVMsR0FBMEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3BGLElBQU0sYUFBYSxHQUFHO0lBQ2xCLDBCQUEwQixFQUFFLENBQUM7Q0FDOUI7QUFFSCxJQUFNLFFBQVEsR0FBRyxJQUFJLDhDQUFLLENBQUMsS0FBSyxFQUFDLFNBQVUsRUFBQyxhQUFhLENBQUMsQ0FBQztBQUMzRCwwRkFBMEY7QUFHMUYsdUNBQXVDO0FBRXZDLElBQU0sTUFBTSxHQUFHLElBQUksbURBQUssRUFBRSxDQUFDO0FBSTNCLE1BQU0sQ0FBQyxNQUFNLENBQUMsOENBQUksQ0FBQztBQUVuQixJQUFNLFVBQVUsR0FBMEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3RGLElBQU0sY0FBYyxHQUFHO0lBQ25CLDBCQUEwQixFQUFFLENBQUM7Q0FDOUI7QUFFSCxJQUFNLFNBQVMsR0FBRyxJQUFJLDhDQUFLLENBQUMsTUFBTSxFQUFDLFVBQVcsRUFBQyxjQUFjLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dvbGZyYW1zaWdtYS8uL25vZGVfbW9kdWxlcy9AeW9tZ3VpdGhlcmVhbC9oZWxwZXJzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly93b2xmcmFtc2lnbWEvLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly93b2xmcmFtc2lnbWEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dvbGZyYW1zaWdtYS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dvbGZyYW1zaWdtYS8uL25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovL3dvbGZyYW1zaWdtYS8uL25vZGVfbW9kdWxlcy9ncmFwaG9sb2d5LXV0aWxzL2lzLWdyYXBoLmpzIiwid2VicGFjazovL3dvbGZyYW1zaWdtYS8uL25vZGVfbW9kdWxlcy9ncmFwaG9sb2d5L2Rpc3QvZ3JhcGhvbG9neS51bWQubWluLmpzIiwid2VicGFjazovL3dvbGZyYW1zaWdtYS8uL25vZGVfbW9kdWxlcy9zaWdtYS9jb3JlL2NhbWVyYS5qcyIsIndlYnBhY2s6Ly93b2xmcmFtc2lnbWEvLi9ub2RlX21vZHVsZXMvc2lnbWEvY29yZS9jYXB0b3JzL2NhcHRvci5qcyIsIndlYnBhY2s6Ly93b2xmcmFtc2lnbWEvLi9ub2RlX21vZHVsZXMvc2lnbWEvY29yZS9jYXB0b3JzL21vdXNlLmpzIiwid2VicGFjazovL3dvbGZyYW1zaWdtYS8uL25vZGVfbW9kdWxlcy9zaWdtYS9jb3JlL2NhcHRvcnMvdG91Y2guanMiLCJ3ZWJwYWNrOi8vd29sZnJhbXNpZ21hLy4vbm9kZV9tb2R1bGVzL3NpZ21hL2NvcmUvbGFiZWxzLmpzIiwid2VicGFjazovL3dvbGZyYW1zaWdtYS8uL25vZGVfbW9kdWxlcy9zaWdtYS9jb3JlL3F1YWR0cmVlLmpzIiwid2VicGFjazovL3dvbGZyYW1zaWdtYS8uL25vZGVfbW9kdWxlcy9zaWdtYS9pbmRleC5qcyIsIndlYnBhY2s6Ly93b2xmcmFtc2lnbWEvLi9ub2RlX21vZHVsZXMvc2lnbWEvcmVuZGVyaW5nL2NhbnZhcy9lZGdlLWxhYmVsLmpzIiwid2VicGFjazovL3dvbGZyYW1zaWdtYS8uL25vZGVfbW9kdWxlcy9zaWdtYS9yZW5kZXJpbmcvY2FudmFzL2hvdmVyLmpzIiwid2VicGFjazovL3dvbGZyYW1zaWdtYS8uL25vZGVfbW9kdWxlcy9zaWdtYS9yZW5kZXJpbmcvY2FudmFzL2xhYmVsLmpzIiwid2VicGFjazovL3dvbGZyYW1zaWdtYS8uL25vZGVfbW9kdWxlcy9zaWdtYS9yZW5kZXJpbmcvd2ViZ2wvcHJvZ3JhbXMvY29tbW9uL2VkZ2UuanMiLCJ3ZWJwYWNrOi8vd29sZnJhbXNpZ21hLy4vbm9kZV9tb2R1bGVzL3NpZ21hL3JlbmRlcmluZy93ZWJnbC9wcm9ncmFtcy9jb21tb24vbm9kZS5qcyIsIndlYnBhY2s6Ly93b2xmcmFtc2lnbWEvLi9ub2RlX21vZHVsZXMvc2lnbWEvcmVuZGVyaW5nL3dlYmdsL3Byb2dyYW1zL2NvbW1vbi9wcm9ncmFtLmpzIiwid2VicGFjazovL3dvbGZyYW1zaWdtYS8uL25vZGVfbW9kdWxlcy9zaWdtYS9yZW5kZXJpbmcvd2ViZ2wvcHJvZ3JhbXMvZWRnZS5hcnJvdy5qcyIsIndlYnBhY2s6Ly93b2xmcmFtc2lnbWEvLi9ub2RlX21vZHVsZXMvc2lnbWEvcmVuZGVyaW5nL3dlYmdsL3Byb2dyYW1zL2VkZ2UuYXJyb3dIZWFkLmpzIiwid2VicGFjazovL3dvbGZyYW1zaWdtYS8uL25vZGVfbW9kdWxlcy9zaWdtYS9yZW5kZXJpbmcvd2ViZ2wvcHJvZ3JhbXMvZWRnZS5jbGFtcGVkLmpzIiwid2VicGFjazovL3dvbGZyYW1zaWdtYS8uL25vZGVfbW9kdWxlcy9zaWdtYS9yZW5kZXJpbmcvd2ViZ2wvcHJvZ3JhbXMvZWRnZS5qcyIsIndlYnBhY2s6Ly93b2xmcmFtc2lnbWEvLi9ub2RlX21vZHVsZXMvc2lnbWEvcmVuZGVyaW5nL3dlYmdsL3Byb2dyYW1zL25vZGUuZmFzdC5qcyIsIndlYnBhY2s6Ly93b2xmcmFtc2lnbWEvLi9ub2RlX21vZHVsZXMvc2lnbWEvcmVuZGVyaW5nL3dlYmdsL3NoYWRlcnMvZWRnZS5hcnJvd0hlYWQuZnJhZy5nbHNsLmpzIiwid2VicGFjazovL3dvbGZyYW1zaWdtYS8uL25vZGVfbW9kdWxlcy9zaWdtYS9yZW5kZXJpbmcvd2ViZ2wvc2hhZGVycy9lZGdlLmFycm93SGVhZC52ZXJ0Lmdsc2wuanMiLCJ3ZWJwYWNrOi8vd29sZnJhbXNpZ21hLy4vbm9kZV9tb2R1bGVzL3NpZ21hL3JlbmRlcmluZy93ZWJnbC9zaGFkZXJzL2VkZ2UuY2xhbXBlZC52ZXJ0Lmdsc2wuanMiLCJ3ZWJwYWNrOi8vd29sZnJhbXNpZ21hLy4vbm9kZV9tb2R1bGVzL3NpZ21hL3JlbmRlcmluZy93ZWJnbC9zaGFkZXJzL2VkZ2UuZnJhZy5nbHNsLmpzIiwid2VicGFjazovL3dvbGZyYW1zaWdtYS8uL25vZGVfbW9kdWxlcy9zaWdtYS9yZW5kZXJpbmcvd2ViZ2wvc2hhZGVycy9lZGdlLnZlcnQuZ2xzbC5qcyIsIndlYnBhY2s6Ly93b2xmcmFtc2lnbWEvLi9ub2RlX21vZHVsZXMvc2lnbWEvcmVuZGVyaW5nL3dlYmdsL3NoYWRlcnMvbm9kZS5mYXN0LmZyYWcuZ2xzbC5qcyIsIndlYnBhY2s6Ly93b2xmcmFtc2lnbWEvLi9ub2RlX21vZHVsZXMvc2lnbWEvcmVuZGVyaW5nL3dlYmdsL3NoYWRlcnMvbm9kZS5mYXN0LnZlcnQuZ2xzbC5qcyIsIndlYnBhY2s6Ly93b2xmcmFtc2lnbWEvLi9ub2RlX21vZHVsZXMvc2lnbWEvcmVuZGVyaW5nL3dlYmdsL3NoYWRlcnMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vd29sZnJhbXNpZ21hLy4vbm9kZV9tb2R1bGVzL3NpZ21hL3NldHRpbmdzLmpzIiwid2VicGFjazovL3dvbGZyYW1zaWdtYS8uL25vZGVfbW9kdWxlcy9zaWdtYS9zaWdtYS5qcyIsIndlYnBhY2s6Ly93b2xmcmFtc2lnbWEvLi9ub2RlX21vZHVsZXMvc2lnbWEvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vd29sZnJhbXNpZ21hLy4vbm9kZV9tb2R1bGVzL3NpZ21hL3V0aWxzL2FuaW1hdGUuanMiLCJ3ZWJwYWNrOi8vd29sZnJhbXNpZ21hLy4vbm9kZV9tb2R1bGVzL3NpZ21hL3V0aWxzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vd29sZnJhbXNpZ21hLy4vbm9kZV9tb2R1bGVzL3NpZ21hL3V0aWxzL2Vhc2luZ3MuanMiLCJ3ZWJwYWNrOi8vd29sZnJhbXNpZ21hLy4vbm9kZV9tb2R1bGVzL3NpZ21hL3V0aWxzL2VkZ2UtY29sbGlzaW9ucy5qcyIsIndlYnBhY2s6Ly93b2xmcmFtc2lnbWEvLi9ub2RlX21vZHVsZXMvc2lnbWEvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd29sZnJhbXNpZ21hLy4vbm9kZV9tb2R1bGVzL3NpZ21hL3V0aWxzL21hdHJpY2VzLmpzIiwid2VicGFjazovL3dvbGZyYW1zaWdtYS8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzY5YzciLCJ3ZWJwYWNrOi8vd29sZnJhbXNpZ21hLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dvbGZyYW1zaWdtYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd29sZnJhbXNpZ21hLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dvbGZyYW1zaWdtYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93b2xmcmFtc2lnbWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93b2xmcmFtc2lnbWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93b2xmcmFtc2lnbWEvLi9zcmMvbXlzdHVmZi50cyIsIndlYnBhY2s6Ly93b2xmcmFtc2lnbWEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd29sZnJhbXNpZ21hL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dvbGZyYW1zaWdtYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd29sZnJhbXNpZ21hL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd29sZnJhbXNpZ21hL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd29sZnJhbXNpZ21hL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd29sZnJhbXNpZ21hL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dvbGZyYW1zaWdtYS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd29sZnJhbXNpZ21hLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRXh0ZW5kIGZ1bmN0aW9uXG4gKiA9PT09PT09PT09PT09PT09XG4gKlxuICogRnVuY3Rpb24gdXNlZCB0byBwdXNoIGEgYnVuY2ggb2YgdmFsdWVzIGludG8gYW4gYXJyYXkgYXQgb25jZS5cbiAqXG4gKiBJdHMgc3RyYXRlZ3kgaXMgdG8gbXV0YXRlIHRhcmdldCBhcnJheSdzIGxlbmd0aCB0aGVuIHNldHRpbmcgdGhlIG5ldyBpbmRpY2VzXG4gKiB0byBiZSB0aGUgdmFsdWVzIHRvIGFkZC5cbiAqXG4gKiBBIGJlbmNobWFyayBwcm92ZWQgdGhhdCBpdCBpcyBmYXN0ZXIgdGhhbiB0aGUgZm9sbG93aW5nIHN0cmF0ZWdpZXM6XG4gKiAgIDEpIGBhcnJheS5wdXNoLmFwcGx5KGFycmF5LCB2YWx1ZXMpYC5cbiAqICAgMikgQSBsb29wIG9mIHB1c2hlcy5cbiAqICAgMykgYGFycmF5ID0gYXJyYXkuY29uY2F0KHZhbHVlcylgLCBvYnZpb3VzbHkuXG4gKlxuICogSW50dWl0aXZlbHksIHRoaXMgaXMgY29ycmVjdCBiZWNhdXNlIHdoZW4gYWRkaW5nIGEgbG90IG9mIGVsZW1lbnRzLCB0aGVcbiAqIGNob3NlbiBzdHJhdGVnaWVzIGRvZXMgbm90IG5lZWQgdG8gaGFuZGxlIHRoZSBgYXJndW1lbnRzYCBvYmplY3QgdG9cbiAqIGV4ZWN1dGUgIy5hcHBseSdzIHZhcmlhZGljaXR5IGFuZCBiZWNhdXNlIHRoZSBhcnJheSBrbm93IGl0cyBmaW5hbCBsZW5ndGhcbiAqIGF0IHRoZSBiZWdpbm5pbmcsIGF2b2lkaW5nIHBvdGVudGlhbCBtdWx0aXBsZSByZWFsbG9jYXRpb25zIG9mIHRoZSB1bmRlcmx5aW5nXG4gKiBjb250aWd1b3VzIGFycmF5LiBTb21lIGVuZ2luZXMgbWF5IGJlIGFibGUgdG8gb3B0aW1pemUgdGhlIGxvb3Agb2YgcHVzaFxuICogb3BlcmF0aW9ucyBidXQgZW1waXJpY2FsbHkgdGhleSBkb24ndCBzZWVtIHRvIGRvIHNvLlxuICovXG5cbi8qKlxuICogRXh0ZW5kcyB0aGUgdGFyZ2V0IGFycmF5IHdpdGggdGhlIGdpdmVuIHZhbHVlcy5cbiAqXG4gKiBAcGFyYW0gIHthcnJheX0gYXJyYXkgIC0gVGFyZ2V0IGFycmF5LlxuICogQHBhcmFtICB7YXJyYXl9IHZhbHVlcyAtIFZhbHVlcyB0byBhZGQuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXh0ZW5kKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGwyID0gdmFsdWVzLmxlbmd0aDtcblxuICBpZiAobDIgPT09IDApXG4gICAgcmV0dXJuO1xuXG4gIHZhciBsMSA9IGFycmF5Lmxlbmd0aDtcblxuICBhcnJheS5sZW5ndGggKz0gbDI7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsMjsgaSsrKVxuICAgIGFycmF5W2wxICsgaV0gPSB2YWx1ZXNbaV07XG59O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJoMSB7XFxuICBmb250OiAxMDAlIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiByZ2IoNjgsIDE4NCwgNDEpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQ6IDIwMCUgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYig2OCwgMTg0LCA0MSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsZ0NBQUE7RUFDQSx1QkFKYztBQUVoQjs7QUFLQTtFQUNFLGdDQUFBO0VBQ0EsdUJBVGM7QUFPaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGZvbnQtc3RhY2s6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4kcHJpbWFyeS1jb2xvcjogcmdiKDY4LCAxODQsIDQxKTtcXG5cXG5oMSB7XFxuICBmb250OiAxMDAlICRmb250LXN0YWNrO1xcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQ6IDIwMCUgJGZvbnQtc3RhY2s7XFxuICBjb2xvcjogJHByaW1hcnktY29sb3I7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbm1vZHVsZS5leHBvcnRzLm9uY2UgPSBvbmNlO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuZnVuY3Rpb24gY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gX2dldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gX2dldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9IF9nZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5jYWxsKHRoaXMudGFyZ2V0KTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5hcHBseSh0aGlzLnRhcmdldCwgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gb25jZShlbWl0dGVyLCBuYW1lKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZnVuY3Rpb24gZXJyb3JMaXN0ZW5lcihlcnIpIHtcbiAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIobmFtZSwgcmVzb2x2ZXIpO1xuICAgICAgcmVqZWN0KGVycik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZXIoKSB7XG4gICAgICBpZiAodHlwZW9mIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBlcnJvckxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICB9O1xuXG4gICAgZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsIG5hbWUsIHJlc29sdmVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgaWYgKG5hbWUgIT09ICdlcnJvcicpIHtcbiAgICAgIGFkZEVycm9ySGFuZGxlcklmRXZlbnRFbWl0dGVyKGVtaXR0ZXIsIGVycm9yTGlzdGVuZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlcihlbWl0dGVyLCBoYW5kbGVyLCBmbGFncykge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIub24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgJ2Vycm9yJywgaGFuZGxlciwgZmxhZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCBuYW1lLCBsaXN0ZW5lciwgZmxhZ3MpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLm9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKGZsYWdzLm9uY2UpIHtcbiAgICAgIGVtaXR0ZXIub25jZShuYW1lLCBsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtaXR0ZXIub24obmFtZSwgbGlzdGVuZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgZW1pdHRlci5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gRXZlbnRUYXJnZXQgZG9lcyBub3QgaGF2ZSBgZXJyb3JgIGV2ZW50IHNlbWFudGljcyBsaWtlIE5vZGVcbiAgICAvLyBFdmVudEVtaXR0ZXJzLCB3ZSBkbyBub3QgbGlzdGVuIGZvciBgZXJyb3JgIGV2ZW50cyBoZXJlLlxuICAgIGVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBmdW5jdGlvbiB3cmFwTGlzdGVuZXIoYXJnKSB7XG4gICAgICAvLyBJRSBkb2VzIG5vdCBoYXZlIGJ1aWx0aW4gYHsgb25jZTogdHJ1ZSB9YCBzdXBwb3J0IHNvIHdlXG4gICAgICAvLyBoYXZlIHRvIGRvIGl0IG1hbnVhbGx5LlxuICAgICAgaWYgKGZsYWdzLm9uY2UpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIHdyYXBMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICBsaXN0ZW5lcihhcmcpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImVtaXR0ZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRXZlbnRFbWl0dGVyLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgZW1pdHRlcik7XG4gIH1cbn1cbiIsIi8qKlxuICogR3JhcGhvbG9neSBpc0dyYXBoXG4gKiA9PT09PT09PT09PT09PT09PT09XG4gKlxuICogVmVyeSBzaW1wbGUgZnVuY3Rpb24gYWltaW5nIGF0IGVuc3VyaW5nIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhXG4gKiBncmFwaG9sb2d5IGluc3RhbmNlLlxuICovXG5cbi8qKlxuICogQ2hlY2tpbmcgdGhlIHZhbHVlIGlzIGEgZ3JhcGhvbG9neSBpbnN0YW5jZS5cbiAqXG4gKiBAcGFyYW0gIHthbnl9ICAgICB2YWx1ZSAtIFRhcmdldCB2YWx1ZS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNHcmFwaCh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHZhbHVlICE9PSBudWxsICYmXG4gICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgIHR5cGVvZiB2YWx1ZS5hZGRVbmRpcmVjdGVkRWRnZVdpdGhLZXkgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgdmFsdWUuZHJvcE5vZGUgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgdmFsdWUubXVsdGkgPT09ICdib29sZWFuJ1xuICApO1xufTtcbiIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOih0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6dHx8c2VsZikuZ3JhcGhvbG9neT1lKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdChlKXtyZXR1cm4gdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZ0LmNvbnN0cnVjdG9yPT09U3ltYm9sJiZ0IT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiB0fSx0KGUpfWZ1bmN0aW9uIGUodCxlKXt0LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUucHJvdG90eXBlKSx0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj10LHIodCxlKX1mdW5jdGlvbiBuKHQpe3JldHVybiBuPU9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3QuZ2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24odCl7cmV0dXJuIHQuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YodCl9LG4odCl9ZnVuY3Rpb24gcih0LGUpe3JldHVybiByPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5fX3Byb3RvX189ZSx0fSxyKHQsZSl9ZnVuY3Rpb24gaSgpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBSZWZsZWN0fHwhUmVmbGVjdC5jb25zdHJ1Y3QpcmV0dXJuITE7aWYoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSlyZXR1cm4hMTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm94eSlyZXR1cm4hMDt0cnl7cmV0dXJuIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLFtdLChmdW5jdGlvbigpe30pKSksITB9Y2F0Y2godCl7cmV0dXJuITF9fWZ1bmN0aW9uIG8odCxlLG4pe3JldHVybiBvPWkoKT9SZWZsZWN0LmNvbnN0cnVjdDpmdW5jdGlvbih0LGUsbil7dmFyIGk9W251bGxdO2kucHVzaC5hcHBseShpLGUpO3ZhciBvPW5ldyhGdW5jdGlvbi5iaW5kLmFwcGx5KHQsaSkpO3JldHVybiBuJiZyKG8sbi5wcm90b3R5cGUpLG99LG8uYXBwbHkobnVsbCxhcmd1bWVudHMpfWZ1bmN0aW9uIGEodCl7dmFyIGU9XCJmdW5jdGlvblwiPT10eXBlb2YgTWFwP25ldyBNYXA6dm9pZCAwO3JldHVybiBhPWZ1bmN0aW9uKHQpe2lmKG51bGw9PT10fHwoaT10LC0xPT09RnVuY3Rpb24udG9TdHJpbmcuY2FsbChpKS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKSkpcmV0dXJuIHQ7dmFyIGk7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7aWYodm9pZCAwIT09ZSl7aWYoZS5oYXModCkpcmV0dXJuIGUuZ2V0KHQpO2Uuc2V0KHQsYSl9ZnVuY3Rpb24gYSgpe3JldHVybiBvKHQsYXJndW1lbnRzLG4odGhpcykuY29uc3RydWN0b3IpfXJldHVybiBhLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6YSxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSxyKGEsdCl9LGEodCl9ZnVuY3Rpb24gdSh0KXtpZih2b2lkIDA9PT10KXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4gdH12YXIgYz1mdW5jdGlvbigpe2Zvcih2YXIgdD1hcmd1bWVudHNbMF0sZT0xLG49YXJndW1lbnRzLmxlbmd0aDtlPG47ZSsrKWlmKGFyZ3VtZW50c1tlXSlmb3IodmFyIHIgaW4gYXJndW1lbnRzW2VdKXRbcl09YXJndW1lbnRzW2VdW3JdO3JldHVybiB0fTtmdW5jdGlvbiBzKHQsZSxuLHIpe3ZhciBpPXQuX25vZGVzLmdldChlKSxvPW51bGw7cmV0dXJuIGk/bz1cIm1peGVkXCI9PT1yP2kub3V0JiZpLm91dFtuXXx8aS51bmRpcmVjdGVkJiZpLnVuZGlyZWN0ZWRbbl06XCJkaXJlY3RlZFwiPT09cj9pLm91dCYmaS5vdXRbbl06aS51bmRpcmVjdGVkJiZpLnVuZGlyZWN0ZWRbbl06b31mdW5jdGlvbiBkKGUpe3JldHVybiBudWxsIT09ZSYmXCJvYmplY3RcIj09PXQoZSkmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGUuYWRkVW5kaXJlY3RlZEVkZ2VXaXRoS2V5JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmRyb3BOb2RlfWZ1bmN0aW9uIGgoZSl7cmV0dXJuXCJvYmplY3RcIj09PXQoZSkmJm51bGwhPT1lJiZlLmNvbnN0cnVjdG9yPT09T2JqZWN0fWZ1bmN0aW9uIHAodCl7dmFyIGU7Zm9yKGUgaW4gdClyZXR1cm4hMTtyZXR1cm4hMH1mdW5jdGlvbiBmKHQsZSxuKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMSx3cml0YWJsZTohMCx2YWx1ZTpufSl9ZnVuY3Rpb24gbCh0LGUsbil7dmFyIHI9e2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP3IuZ2V0PW46KHIudmFsdWU9bixyLndyaXRhYmxlPSExKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHIpfWZ1bmN0aW9uIGcodCl7cmV0dXJuISFoKHQpJiYhKHQuYXR0cmlidXRlcyYmIUFycmF5LmlzQXJyYXkodC5hdHRyaWJ1dGVzKSl9XCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LmFzc2lnbiYmKGM9T2JqZWN0LmFzc2lnbik7dmFyIHksdz17ZXhwb3J0czp7fX0sdj1cIm9iamVjdFwiPT10eXBlb2YgUmVmbGVjdD9SZWZsZWN0Om51bGwsYj12JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB2LmFwcGx5P3YuYXBwbHk6ZnVuY3Rpb24odCxlLG4pe3JldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0LGUsbil9O3k9diYmXCJmdW5jdGlvblwiPT10eXBlb2Ygdi5vd25LZXlzP3Yub3duS2V5czpPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzP2Z1bmN0aW9uKHQpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0KS5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0KSl9OmZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0KX07dmFyIG09TnVtYmVyLmlzTmFOfHxmdW5jdGlvbih0KXtyZXR1cm4gdCE9dH07ZnVuY3Rpb24gaygpe2suaW5pdC5jYWxsKHRoaXMpfXcuZXhwb3J0cz1rLHcuZXhwb3J0cy5vbmNlPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbihuLHIpe2Z1bmN0aW9uIGkobil7dC5yZW1vdmVMaXN0ZW5lcihlLG8pLHIobil9ZnVuY3Rpb24gbygpe1wiZnVuY3Rpb25cIj09dHlwZW9mIHQucmVtb3ZlTGlzdGVuZXImJnQucmVtb3ZlTGlzdGVuZXIoXCJlcnJvclwiLGkpLG4oW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKX1OKHQsZSxvLHtvbmNlOiEwfSksXCJlcnJvclwiIT09ZSYmZnVuY3Rpb24odCxlLG4pe1wiZnVuY3Rpb25cIj09dHlwZW9mIHQub24mJk4odCxcImVycm9yXCIsZSxuKX0odCxpLHtvbmNlOiEwfSl9KSl9LGsuRXZlbnRFbWl0dGVyPWssay5wcm90b3R5cGUuX2V2ZW50cz12b2lkIDAsay5wcm90b3R5cGUuX2V2ZW50c0NvdW50PTAsay5wcm90b3R5cGUuX21heExpc3RlbmVycz12b2lkIDA7dmFyIF89MTA7ZnVuY3Rpb24gRyh0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcrdHlwZW9mIHQpfWZ1bmN0aW9uIHgodCl7cmV0dXJuIHZvaWQgMD09PXQuX21heExpc3RlbmVycz9rLmRlZmF1bHRNYXhMaXN0ZW5lcnM6dC5fbWF4TGlzdGVuZXJzfWZ1bmN0aW9uIEUodCxlLG4scil7dmFyIGksbyxhLHU7aWYoRyhuKSx2b2lkIDA9PT0obz10Ll9ldmVudHMpPyhvPXQuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpLHQuX2V2ZW50c0NvdW50PTApOih2b2lkIDAhPT1vLm5ld0xpc3RlbmVyJiYodC5lbWl0KFwibmV3TGlzdGVuZXJcIixlLG4ubGlzdGVuZXI/bi5saXN0ZW5lcjpuKSxvPXQuX2V2ZW50cyksYT1vW2VdKSx2b2lkIDA9PT1hKWE9b1tlXT1uLCsrdC5fZXZlbnRzQ291bnQ7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2E9b1tlXT1yP1tuLGFdOlthLG5dOnI/YS51bnNoaWZ0KG4pOmEucHVzaChuKSwoaT14KHQpKT4wJiZhLmxlbmd0aD5pJiYhYS53YXJuZWQpe2Eud2FybmVkPSEwO3ZhciBjPW5ldyBFcnJvcihcIlBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gXCIrYS5sZW5ndGgrXCIgXCIrU3RyaW5nKGUpK1wiIGxpc3RlbmVycyBhZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXRcIik7Yy5uYW1lPVwiTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nXCIsYy5lbWl0dGVyPXQsYy50eXBlPWUsYy5jb3VudD1hLmxlbmd0aCx1PWMsY29uc29sZSYmY29uc29sZS53YXJuJiZjb25zb2xlLndhcm4odSl9cmV0dXJuIHR9ZnVuY3Rpb24gQSgpe2lmKCF0aGlzLmZpcmVkKXJldHVybiB0aGlzLnRhcmdldC5yZW1vdmVMaXN0ZW5lcih0aGlzLnR5cGUsdGhpcy53cmFwRm4pLHRoaXMuZmlyZWQ9ITAsMD09PWFyZ3VtZW50cy5sZW5ndGg/dGhpcy5saXN0ZW5lci5jYWxsKHRoaXMudGFyZ2V0KTp0aGlzLmxpc3RlbmVyLmFwcGx5KHRoaXMudGFyZ2V0LGFyZ3VtZW50cyl9ZnVuY3Rpb24gUyh0LGUsbil7dmFyIHI9e2ZpcmVkOiExLHdyYXBGbjp2b2lkIDAsdGFyZ2V0OnQsdHlwZTplLGxpc3RlbmVyOm59LGk9QS5iaW5kKHIpO3JldHVybiBpLmxpc3RlbmVyPW4sci53cmFwRm49aSxpfWZ1bmN0aW9uIEQodCxlLG4pe3ZhciByPXQuX2V2ZW50cztpZih2b2lkIDA9PT1yKXJldHVybltdO3ZhciBpPXJbZV07cmV0dXJuIHZvaWQgMD09PWk/W106XCJmdW5jdGlvblwiPT10eXBlb2YgaT9uP1tpLmxpc3RlbmVyfHxpXTpbaV06bj9mdW5jdGlvbih0KXtmb3IodmFyIGU9bmV3IEFycmF5KHQubGVuZ3RoKSxuPTA7bjxlLmxlbmd0aDsrK24pZVtuXT10W25dLmxpc3RlbmVyfHx0W25dO3JldHVybiBlfShpKTpVKGksaS5sZW5ndGgpfWZ1bmN0aW9uIEwodCl7dmFyIGU9dGhpcy5fZXZlbnRzO2lmKHZvaWQgMCE9PWUpe3ZhciBuPWVbdF07aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgbilyZXR1cm4gMTtpZih2b2lkIDAhPT1uKXJldHVybiBuLmxlbmd0aH1yZXR1cm4gMH1mdW5jdGlvbiBVKHQsZSl7Zm9yKHZhciBuPW5ldyBBcnJheShlKSxyPTA7cjxlOysrciluW3JdPXRbcl07cmV0dXJuIG59ZnVuY3Rpb24gTih0LGUsbixyKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB0Lm9uKXIub25jZT90Lm9uY2UoZSxuKTp0Lm9uKGUsbik7ZWxzZXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0LmFkZEV2ZW50TGlzdGVuZXIpdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwiZW1pdHRlclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBFdmVudEVtaXR0ZXIuIFJlY2VpdmVkIHR5cGUgJyt0eXBlb2YgdCk7dC5hZGRFdmVudExpc3RlbmVyKGUsKGZ1bmN0aW9uIGkobyl7ci5vbmNlJiZ0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZSxpKSxuKG8pfSkpfX1mdW5jdGlvbiBqKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgbmV3IEVycm9yKFwib2JsaXRlcmF0b3IvaXRlcmF0b3I6IGV4cGVjdGluZyBhIGZ1bmN0aW9uIVwiKTt0aGlzLm5leHQ9dH1PYmplY3QuZGVmaW5lUHJvcGVydHkoayxcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gX30sc2V0OmZ1bmN0aW9uKHQpe2lmKFwibnVtYmVyXCIhPXR5cGVvZiB0fHx0PDB8fG0odCkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnK3QrXCIuXCIpO189dH19KSxrLmluaXQ9ZnVuY3Rpb24oKXt2b2lkIDAhPT10aGlzLl9ldmVudHMmJnRoaXMuX2V2ZW50cyE9PU9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzfHwodGhpcy5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCksdGhpcy5fZXZlbnRzQ291bnQ9MCksdGhpcy5fbWF4TGlzdGVuZXJzPXRoaXMuX21heExpc3RlbmVyc3x8dm9pZCAwfSxrLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnM9ZnVuY3Rpb24odCl7aWYoXCJudW1iZXJcIiE9dHlwZW9mIHR8fHQ8MHx8bSh0KSl0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcrdCtcIi5cIik7cmV0dXJuIHRoaXMuX21heExpc3RlbmVycz10LHRoaXN9LGsucHJvdG90eXBlLmdldE1heExpc3RlbmVycz1mdW5jdGlvbigpe3JldHVybiB4KHRoaXMpfSxrLnByb3RvdHlwZS5lbWl0PWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1bXSxuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyllLnB1c2goYXJndW1lbnRzW25dKTt2YXIgcj1cImVycm9yXCI9PT10LGk9dGhpcy5fZXZlbnRzO2lmKHZvaWQgMCE9PWkpcj1yJiZ2b2lkIDA9PT1pLmVycm9yO2Vsc2UgaWYoIXIpcmV0dXJuITE7aWYocil7dmFyIG87aWYoZS5sZW5ndGg+MCYmKG89ZVswXSksbyBpbnN0YW5jZW9mIEVycm9yKXRocm93IG87dmFyIGE9bmV3IEVycm9yKFwiVW5oYW5kbGVkIGVycm9yLlwiKyhvP1wiIChcIitvLm1lc3NhZ2UrXCIpXCI6XCJcIikpO3Rocm93IGEuY29udGV4dD1vLGF9dmFyIHU9aVt0XTtpZih2b2lkIDA9PT11KXJldHVybiExO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHUpYih1LHRoaXMsZSk7ZWxzZXt2YXIgYz11Lmxlbmd0aCxzPVUodSxjKTtmb3Iobj0wO248YzsrK24pYihzW25dLHRoaXMsZSl9cmV0dXJuITB9LGsucHJvdG90eXBlLmFkZExpc3RlbmVyPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIEUodGhpcyx0LGUsITEpfSxrLnByb3RvdHlwZS5vbj1rLnByb3RvdHlwZS5hZGRMaXN0ZW5lcixrLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gRSh0aGlzLHQsZSwhMCl9LGsucHJvdG90eXBlLm9uY2U9ZnVuY3Rpb24odCxlKXtyZXR1cm4gRyhlKSx0aGlzLm9uKHQsUyh0aGlzLHQsZSkpLHRoaXN9LGsucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gRyhlKSx0aGlzLnByZXBlbmRMaXN0ZW5lcih0LFModGhpcyx0LGUpKSx0aGlzfSxrLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcj1mdW5jdGlvbih0LGUpe3ZhciBuLHIsaSxvLGE7aWYoRyhlKSx2b2lkIDA9PT0ocj10aGlzLl9ldmVudHMpKXJldHVybiB0aGlzO2lmKHZvaWQgMD09PShuPXJbdF0pKXJldHVybiB0aGlzO2lmKG49PT1lfHxuLmxpc3RlbmVyPT09ZSkwPT0tLXRoaXMuX2V2ZW50c0NvdW50P3RoaXMuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpOihkZWxldGUgclt0XSxyLnJlbW92ZUxpc3RlbmVyJiZ0aGlzLmVtaXQoXCJyZW1vdmVMaXN0ZW5lclwiLHQsbi5saXN0ZW5lcnx8ZSkpO2Vsc2UgaWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygbil7Zm9yKGk9LTEsbz1uLmxlbmd0aC0xO28+PTA7by0tKWlmKG5bb109PT1lfHxuW29dLmxpc3RlbmVyPT09ZSl7YT1uW29dLmxpc3RlbmVyLGk9bzticmVha31pZihpPDApcmV0dXJuIHRoaXM7MD09PWk/bi5zaGlmdCgpOmZ1bmN0aW9uKHQsZSl7Zm9yKDtlKzE8dC5sZW5ndGg7ZSsrKXRbZV09dFtlKzFdO3QucG9wKCl9KG4saSksMT09PW4ubGVuZ3RoJiYoclt0XT1uWzBdKSx2b2lkIDAhPT1yLnJlbW92ZUxpc3RlbmVyJiZ0aGlzLmVtaXQoXCJyZW1vdmVMaXN0ZW5lclwiLHQsYXx8ZSl9cmV0dXJuIHRoaXN9LGsucHJvdG90eXBlLm9mZj1rLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcixrLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnM9ZnVuY3Rpb24odCl7dmFyIGUsbixyO2lmKHZvaWQgMD09PShuPXRoaXMuX2V2ZW50cykpcmV0dXJuIHRoaXM7aWYodm9pZCAwPT09bi5yZW1vdmVMaXN0ZW5lcilyZXR1cm4gMD09PWFyZ3VtZW50cy5sZW5ndGg/KHRoaXMuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpLHRoaXMuX2V2ZW50c0NvdW50PTApOnZvaWQgMCE9PW5bdF0mJigwPT0tLXRoaXMuX2V2ZW50c0NvdW50P3RoaXMuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpOmRlbGV0ZSBuW3RdKSx0aGlzO2lmKDA9PT1hcmd1bWVudHMubGVuZ3RoKXt2YXIgaSxvPU9iamVjdC5rZXlzKG4pO2ZvcihyPTA7cjxvLmxlbmd0aDsrK3IpXCJyZW1vdmVMaXN0ZW5lclwiIT09KGk9b1tyXSkmJnRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGkpO3JldHVybiB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhcInJlbW92ZUxpc3RlbmVyXCIpLHRoaXMuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpLHRoaXMuX2V2ZW50c0NvdW50PTAsdGhpc31pZihcImZ1bmN0aW9uXCI9PXR5cGVvZihlPW5bdF0pKXRoaXMucmVtb3ZlTGlzdGVuZXIodCxlKTtlbHNlIGlmKHZvaWQgMCE9PWUpZm9yKHI9ZS5sZW5ndGgtMTtyPj0wO3ItLSl0aGlzLnJlbW92ZUxpc3RlbmVyKHQsZVtyXSk7cmV0dXJuIHRoaXN9LGsucHJvdG90eXBlLmxpc3RlbmVycz1mdW5jdGlvbih0KXtyZXR1cm4gRCh0aGlzLHQsITApfSxrLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnM9ZnVuY3Rpb24odCl7cmV0dXJuIEQodGhpcyx0LCExKX0say5saXN0ZW5lckNvdW50PWZ1bmN0aW9uKHQsZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdC5saXN0ZW5lckNvdW50P3QubGlzdGVuZXJDb3VudChlKTpMLmNhbGwodCxlKX0say5wcm90b3R5cGUubGlzdGVuZXJDb3VudD1MLGsucHJvdG90eXBlLmV2ZW50TmFtZXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZXZlbnRzQ291bnQ+MD95KHRoaXMuX2V2ZW50cyk6W119LFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJihqLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KSxqLm9mPWZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLGU9dC5sZW5ndGgsbj0wO3JldHVybiBuZXcgaigoZnVuY3Rpb24oKXtyZXR1cm4gbj49ZT97ZG9uZTohMH06e2RvbmU6ITEsdmFsdWU6dFtuKytdfX0pKX0sai5lbXB0eT1mdW5jdGlvbigpe3JldHVybiBuZXcgaigoZnVuY3Rpb24oKXtyZXR1cm57ZG9uZTohMH19KSl9LGouZnJvbVNlcXVlbmNlPWZ1bmN0aW9uKHQpe3ZhciBlPTAsbj10Lmxlbmd0aDtyZXR1cm4gbmV3IGooKGZ1bmN0aW9uKCl7cmV0dXJuIGU+PW4/e2RvbmU6ITB9Ontkb25lOiExLHZhbHVlOnRbZSsrXX19KSl9LGouaXM9ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBqfHxcIm9iamVjdFwiPT10eXBlb2YgdCYmbnVsbCE9PXQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQubmV4dH07dmFyIE89aixDPXt9O0MuQVJSQVlfQlVGRkVSX1NVUFBPUlQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIEFycmF5QnVmZmVyLEMuU1lNQk9MX1NVUFBPUlQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbDt2YXIgej1PLE09QyxXPU0uQVJSQVlfQlVGRkVSX1NVUFBPUlQsUD1NLlNZTUJPTF9TVVBQT1JUO3ZhciBSPWZ1bmN0aW9uKHQpe3ZhciBlPWZ1bmN0aW9uKHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0fHxBcnJheS5pc0FycmF5KHQpfHxXJiZBcnJheUJ1ZmZlci5pc1ZpZXcodCk/ei5mcm9tU2VxdWVuY2UodCk6XCJvYmplY3RcIiE9dHlwZW9mIHR8fG51bGw9PT10P251bGw6UCYmXCJmdW5jdGlvblwiPT10eXBlb2YgdFtTeW1ib2wuaXRlcmF0b3JdP3RbU3ltYm9sLml0ZXJhdG9yXSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIHQubmV4dD90Om51bGx9KHQpO2lmKCFlKXRocm93IG5ldyBFcnJvcihcIm9ibGl0ZXJhdG9yOiB0YXJnZXQgaXMgbm90IGl0ZXJhYmxlIG5vciBhIHZhbGlkIGl0ZXJhdG9yLlwiKTtyZXR1cm4gZX0sSz1SLFQ9ZnVuY3Rpb24odCxlKXtmb3IodmFyIG4scj1hcmd1bWVudHMubGVuZ3RoPjE/ZToxLzAsaT1yIT09MS8wP25ldyBBcnJheShyKTpbXSxvPTAsYT1LKHQpOzspe2lmKG89PT1yKXJldHVybiBpO2lmKChuPWEubmV4dCgpKS5kb25lKXJldHVybiBvIT09ZSYmKGkubGVuZ3RoPW8pLGk7aVtvKytdPW4udmFsdWV9fSxCPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIG4oZSl7dmFyIG47cmV0dXJuKG49dC5jYWxsKHRoaXMpfHx0aGlzKS5uYW1lPVwiR3JhcGhFcnJvclwiLG4ubWVzc2FnZT1lLG59cmV0dXJuIGUobix0KSxufShhKEVycm9yKSksRj1mdW5jdGlvbih0KXtmdW5jdGlvbiBuKGUpe3ZhciByO3JldHVybihyPXQuY2FsbCh0aGlzLGUpfHx0aGlzKS5uYW1lPVwiSW52YWxpZEFyZ3VtZW50c0dyYXBoRXJyb3JcIixcImZ1bmN0aW9uXCI9PXR5cGVvZiBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSYmRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodShyKSxuLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcikscn1yZXR1cm4gZShuLHQpLG59KEIpLEk9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gbihlKXt2YXIgcjtyZXR1cm4ocj10LmNhbGwodGhpcyxlKXx8dGhpcykubmFtZT1cIk5vdEZvdW5kR3JhcGhFcnJvclwiLFwiZnVuY3Rpb25cIj09dHlwZW9mIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlJiZFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh1KHIpLG4ucHJvdG90eXBlLmNvbnN0cnVjdG9yKSxyfXJldHVybiBlKG4sdCksbn0oQiksWT1mdW5jdGlvbih0KXtmdW5jdGlvbiBuKGUpe3ZhciByO3JldHVybihyPXQuY2FsbCh0aGlzLGUpfHx0aGlzKS5uYW1lPVwiVXNhZ2VHcmFwaEVycm9yXCIsXCJmdW5jdGlvblwiPT10eXBlb2YgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UmJkVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHUociksbi5wcm90b3R5cGUuY29uc3RydWN0b3IpLHJ9cmV0dXJuIGUobix0KSxufShCKTtmdW5jdGlvbiBxKHQsZSl7dGhpcy5rZXk9dCx0aGlzLmF0dHJpYnV0ZXM9ZSx0aGlzLmNsZWFyKCl9ZnVuY3Rpb24gSih0LGUpe3RoaXMua2V5PXQsdGhpcy5hdHRyaWJ1dGVzPWUsdGhpcy5jbGVhcigpfWZ1bmN0aW9uIFYodCxlKXt0aGlzLmtleT10LHRoaXMuYXR0cmlidXRlcz1lLHRoaXMuY2xlYXIoKX1mdW5jdGlvbiBIKHQsZSxuLHIsaSl7dGhpcy5rZXk9ZSx0aGlzLmF0dHJpYnV0ZXM9aSx0aGlzLnVuZGlyZWN0ZWQ9dCx0aGlzLnNvdXJjZT1uLHRoaXMudGFyZ2V0PXJ9cS5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLmluRGVncmVlPTAsdGhpcy5vdXREZWdyZWU9MCx0aGlzLnVuZGlyZWN0ZWREZWdyZWU9MCx0aGlzLmluPXt9LHRoaXMub3V0PXt9LHRoaXMudW5kaXJlY3RlZD17fX0sSi5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLmluRGVncmVlPTAsdGhpcy5vdXREZWdyZWU9MCx0aGlzLmluPXt9LHRoaXMub3V0PXt9fSxWLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMudW5kaXJlY3RlZERlZ3JlZT0wLHRoaXMudW5kaXJlY3RlZD17fX0sSC5wcm90b3R5cGUuYXR0YWNoPWZ1bmN0aW9uKCl7dmFyIHQ9XCJvdXRcIixlPVwiaW5cIjt0aGlzLnVuZGlyZWN0ZWQmJih0PWU9XCJ1bmRpcmVjdGVkXCIpO3ZhciBuPXRoaXMuc291cmNlLmtleSxyPXRoaXMudGFyZ2V0LmtleTt0aGlzLnNvdXJjZVt0XVtyXT10aGlzLHRoaXMudW5kaXJlY3RlZCYmbj09PXJ8fCh0aGlzLnRhcmdldFtlXVtuXT10aGlzKX0sSC5wcm90b3R5cGUuYXR0YWNoTXVsdGk9ZnVuY3Rpb24oKXt2YXIgdD1cIm91dFwiLGU9XCJpblwiLG49dGhpcy5zb3VyY2Uua2V5LHI9dGhpcy50YXJnZXQua2V5O3RoaXMudW5kaXJlY3RlZCYmKHQ9ZT1cInVuZGlyZWN0ZWRcIik7dmFyIGk9dGhpcy5zb3VyY2VbdF0sbz1pW3JdO2lmKHZvaWQgMD09PW8pcmV0dXJuIGlbcl09dGhpcyx2b2lkKHRoaXMudW5kaXJlY3RlZCYmbj09PXJ8fCh0aGlzLnRhcmdldFtlXVtuXT10aGlzKSk7by5wcmV2aW91cz10aGlzLHRoaXMubmV4dD1vLGlbcl09dGhpcyx0aGlzLnRhcmdldFtlXVtuXT10aGlzfSxILnByb3RvdHlwZS5kZXRhY2g9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnNvdXJjZS5rZXksZT10aGlzLnRhcmdldC5rZXksbj1cIm91dFwiLHI9XCJpblwiO3RoaXMudW5kaXJlY3RlZCYmKG49cj1cInVuZGlyZWN0ZWRcIiksZGVsZXRlIHRoaXMuc291cmNlW25dW2VdLGRlbGV0ZSB0aGlzLnRhcmdldFtyXVt0XX0sSC5wcm90b3R5cGUuZGV0YWNoTXVsdGk9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnNvdXJjZS5rZXksZT10aGlzLnRhcmdldC5rZXksbj1cIm91dFwiLHI9XCJpblwiO3RoaXMudW5kaXJlY3RlZCYmKG49cj1cInVuZGlyZWN0ZWRcIiksdm9pZCAwPT09dGhpcy5wcmV2aW91cz92b2lkIDA9PT10aGlzLm5leHQ/KGRlbGV0ZSB0aGlzLnNvdXJjZVtuXVtlXSxkZWxldGUgdGhpcy50YXJnZXRbcl1bdF0pOih0aGlzLm5leHQucHJldmlvdXM9dm9pZCAwLHRoaXMuc291cmNlW25dW2VdPXRoaXMubmV4dCx0aGlzLnRhcmdldFtyXVt0XT10aGlzLm5leHQpOih0aGlzLnByZXZpb3VzLm5leHQ9dGhpcy5uZXh0LHZvaWQgMCE9PXRoaXMubmV4dCYmKHRoaXMubmV4dC5wcmV2aW91cz10aGlzLnByZXZpb3VzKSl9O2Z1bmN0aW9uIFEodCxlLG4scixpLG8sYSl7dmFyIHUsYyxzLGQ7aWYocj1cIlwiK3IsMD09PW4pe2lmKCEodT10Ll9ub2Rlcy5nZXQocikpKXRocm93IG5ldyBJKFwiR3JhcGguXCIuY29uY2F0KGUsJzogY291bGQgbm90IGZpbmQgdGhlIFwiJykuY29uY2F0KHIsJ1wiIG5vZGUgaW4gdGhlIGdyYXBoLicpKTtzPWksZD1vfWVsc2UgaWYoMz09PW4pe2lmKGk9XCJcIitpLCEoYz10Ll9lZGdlcy5nZXQoaSkpKXRocm93IG5ldyBJKFwiR3JhcGguXCIuY29uY2F0KGUsJzogY291bGQgbm90IGZpbmQgdGhlIFwiJykuY29uY2F0KGksJ1wiIGVkZ2UgaW4gdGhlIGdyYXBoLicpKTt2YXIgaD1jLnNvdXJjZS5rZXkscD1jLnRhcmdldC5rZXk7aWYocj09PWgpdT1jLnRhcmdldDtlbHNle2lmKHIhPT1wKXRocm93IG5ldyBJKFwiR3JhcGguXCIuY29uY2F0KGUsJzogdGhlIFwiJykuY29uY2F0KHIsJ1wiIG5vZGUgaXMgbm90IGF0dGFjaGVkIHRvIHRoZSBcIicpLmNvbmNhdChpLCdcIiBlZGdlICgnKS5jb25jYXQoaCxcIiwgXCIpLmNvbmNhdChwLFwiKS5cIikpO3U9Yy5zb3VyY2V9cz1vLGQ9YX1lbHNle2lmKCEoYz10Ll9lZGdlcy5nZXQocikpKXRocm93IG5ldyBJKFwiR3JhcGguXCIuY29uY2F0KGUsJzogY291bGQgbm90IGZpbmQgdGhlIFwiJykuY29uY2F0KHIsJ1wiIGVkZ2UgaW4gdGhlIGdyYXBoLicpKTt1PTE9PT1uP2Muc291cmNlOmMudGFyZ2V0LHM9aSxkPW99cmV0dXJuW3UscyxkXX12YXIgWD1be25hbWU6ZnVuY3Rpb24odCl7cmV0dXJuXCJnZXRcIi5jb25jYXQodCxcIkF0dHJpYnV0ZVwiKX0sYXR0YWNoZXI6ZnVuY3Rpb24odCxlLG4pe3QucHJvdG90eXBlW2VdPWZ1bmN0aW9uKHQscixpKXt2YXIgbz1RKHRoaXMsZSxuLHQscixpKSxhPW9bMF0sdT1vWzFdO3JldHVybiBhLmF0dHJpYnV0ZXNbdV19fX0se25hbWU6ZnVuY3Rpb24odCl7cmV0dXJuXCJnZXRcIi5jb25jYXQodCxcIkF0dHJpYnV0ZXNcIil9LGF0dGFjaGVyOmZ1bmN0aW9uKHQsZSxuKXt0LnByb3RvdHlwZVtlXT1mdW5jdGlvbih0LHIpe3JldHVybiBRKHRoaXMsZSxuLHQscilbMF0uYXR0cmlidXRlc319fSx7bmFtZTpmdW5jdGlvbih0KXtyZXR1cm5cImhhc1wiLmNvbmNhdCh0LFwiQXR0cmlidXRlXCIpfSxhdHRhY2hlcjpmdW5jdGlvbih0LGUsbil7dC5wcm90b3R5cGVbZV09ZnVuY3Rpb24odCxyLGkpe3ZhciBvPVEodGhpcyxlLG4sdCxyLGkpLGE9b1swXSx1PW9bMV07cmV0dXJuIGEuYXR0cmlidXRlcy5oYXNPd25Qcm9wZXJ0eSh1KX19fSx7bmFtZTpmdW5jdGlvbih0KXtyZXR1cm5cInNldFwiLmNvbmNhdCh0LFwiQXR0cmlidXRlXCIpfSxhdHRhY2hlcjpmdW5jdGlvbih0LGUsbil7dC5wcm90b3R5cGVbZV09ZnVuY3Rpb24odCxyLGksbyl7dmFyIGE9USh0aGlzLGUsbix0LHIsaSxvKSx1PWFbMF0sYz1hWzFdLHM9YVsyXTtyZXR1cm4gdS5hdHRyaWJ1dGVzW2NdPXMsdGhpcy5lbWl0KFwibm9kZUF0dHJpYnV0ZXNVcGRhdGVkXCIse2tleTp1LmtleSx0eXBlOlwic2V0XCIsYXR0cmlidXRlczp1LmF0dHJpYnV0ZXMsbmFtZTpjfSksdGhpc319fSx7bmFtZTpmdW5jdGlvbih0KXtyZXR1cm5cInVwZGF0ZVwiLmNvbmNhdCh0LFwiQXR0cmlidXRlXCIpfSxhdHRhY2hlcjpmdW5jdGlvbih0LGUsbil7dC5wcm90b3R5cGVbZV09ZnVuY3Rpb24odCxyLGksbyl7dmFyIGE9USh0aGlzLGUsbix0LHIsaSxvKSx1PWFbMF0sYz1hWzFdLHM9YVsyXTtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBzKXRocm93IG5ldyBGKFwiR3JhcGguXCIuY29uY2F0KGUsXCI6IHVwZGF0ZXIgc2hvdWxkIGJlIGEgZnVuY3Rpb24uXCIpKTt2YXIgZD11LmF0dHJpYnV0ZXMsaD1zKGRbY10pO3JldHVybiBkW2NdPWgsdGhpcy5lbWl0KFwibm9kZUF0dHJpYnV0ZXNVcGRhdGVkXCIse2tleTp1LmtleSx0eXBlOlwic2V0XCIsYXR0cmlidXRlczp1LmF0dHJpYnV0ZXMsbmFtZTpjfSksdGhpc319fSx7bmFtZTpmdW5jdGlvbih0KXtyZXR1cm5cInJlbW92ZVwiLmNvbmNhdCh0LFwiQXR0cmlidXRlXCIpfSxhdHRhY2hlcjpmdW5jdGlvbih0LGUsbil7dC5wcm90b3R5cGVbZV09ZnVuY3Rpb24odCxyLGkpe3ZhciBvPVEodGhpcyxlLG4sdCxyLGkpLGE9b1swXSx1PW9bMV07cmV0dXJuIGRlbGV0ZSBhLmF0dHJpYnV0ZXNbdV0sdGhpcy5lbWl0KFwibm9kZUF0dHJpYnV0ZXNVcGRhdGVkXCIse2tleTphLmtleSx0eXBlOlwicmVtb3ZlXCIsYXR0cmlidXRlczphLmF0dHJpYnV0ZXMsbmFtZTp1fSksdGhpc319fSx7bmFtZTpmdW5jdGlvbih0KXtyZXR1cm5cInJlcGxhY2VcIi5jb25jYXQodCxcIkF0dHJpYnV0ZXNcIil9LGF0dGFjaGVyOmZ1bmN0aW9uKHQsZSxuKXt0LnByb3RvdHlwZVtlXT1mdW5jdGlvbih0LHIsaSl7dmFyIG89USh0aGlzLGUsbix0LHIsaSksYT1vWzBdLHU9b1sxXTtpZighaCh1KSl0aHJvdyBuZXcgRihcIkdyYXBoLlwiLmNvbmNhdChlLFwiOiBwcm92aWRlZCBhdHRyaWJ1dGVzIGFyZSBub3QgYSBwbGFpbiBvYmplY3QuXCIpKTtyZXR1cm4gYS5hdHRyaWJ1dGVzPXUsdGhpcy5lbWl0KFwibm9kZUF0dHJpYnV0ZXNVcGRhdGVkXCIse2tleTphLmtleSx0eXBlOlwicmVwbGFjZVwiLGF0dHJpYnV0ZXM6YS5hdHRyaWJ1dGVzfSksdGhpc319fSx7bmFtZTpmdW5jdGlvbih0KXtyZXR1cm5cIm1lcmdlXCIuY29uY2F0KHQsXCJBdHRyaWJ1dGVzXCIpfSxhdHRhY2hlcjpmdW5jdGlvbih0LGUsbil7dC5wcm90b3R5cGVbZV09ZnVuY3Rpb24odCxyLGkpe3ZhciBvPVEodGhpcyxlLG4sdCxyLGkpLGE9b1swXSx1PW9bMV07aWYoIWgodSkpdGhyb3cgbmV3IEYoXCJHcmFwaC5cIi5jb25jYXQoZSxcIjogcHJvdmlkZWQgYXR0cmlidXRlcyBhcmUgbm90IGEgcGxhaW4gb2JqZWN0LlwiKSk7cmV0dXJuIGMoYS5hdHRyaWJ1dGVzLHUpLHRoaXMuZW1pdChcIm5vZGVBdHRyaWJ1dGVzVXBkYXRlZFwiLHtrZXk6YS5rZXksdHlwZTpcIm1lcmdlXCIsYXR0cmlidXRlczphLmF0dHJpYnV0ZXMsZGF0YTp1fSksdGhpc319fSx7bmFtZTpmdW5jdGlvbih0KXtyZXR1cm5cInVwZGF0ZVwiLmNvbmNhdCh0LFwiQXR0cmlidXRlc1wiKX0sYXR0YWNoZXI6ZnVuY3Rpb24odCxlLG4pe3QucHJvdG90eXBlW2VdPWZ1bmN0aW9uKHQscixpKXt2YXIgbz1RKHRoaXMsZSxuLHQscixpKSxhPW9bMF0sdT1vWzFdO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHUpdGhyb3cgbmV3IEYoXCJHcmFwaC5cIi5jb25jYXQoZSxcIjogcHJvdmlkZWQgdXBkYXRlciBpcyBub3QgYSBmdW5jdGlvbi5cIikpO3JldHVybiBhLmF0dHJpYnV0ZXM9dShhLmF0dHJpYnV0ZXMpLHRoaXMuZW1pdChcIm5vZGVBdHRyaWJ1dGVzVXBkYXRlZFwiLHtrZXk6YS5rZXksdHlwZTpcInVwZGF0ZVwiLGF0dHJpYnV0ZXM6YS5hdHRyaWJ1dGVzfSksdGhpc319fV07dmFyIFo9W3tuYW1lOmZ1bmN0aW9uKHQpe3JldHVyblwiZ2V0XCIuY29uY2F0KHQsXCJBdHRyaWJ1dGVcIil9LGF0dGFjaGVyOmZ1bmN0aW9uKHQsZSxuKXt0LnByb3RvdHlwZVtlXT1mdW5jdGlvbih0LHIpe3ZhciBpO2lmKFwibWl4ZWRcIiE9PXRoaXMudHlwZSYmXCJtaXhlZFwiIT09biYmbiE9PXRoaXMudHlwZSl0aHJvdyBuZXcgWShcIkdyYXBoLlwiLmNvbmNhdChlLFwiOiBjYW5ub3QgZmluZCB0aGlzIHR5cGUgb2YgZWRnZXMgaW4geW91ciBcIikuY29uY2F0KHRoaXMudHlwZSxcIiBncmFwaC5cIikpO2lmKGFyZ3VtZW50cy5sZW5ndGg+Mil7aWYodGhpcy5tdWx0aSl0aHJvdyBuZXcgWShcIkdyYXBoLlwiLmNvbmNhdChlLFwiOiBjYW5ub3QgdXNlIGEge3NvdXJjZSx0YXJnZXR9IGNvbWJvIHdoZW4gYXNraW5nIGFib3V0IGFuIGVkZ2UncyBhdHRyaWJ1dGVzIGluIGEgTXVsdGlHcmFwaCBzaW5jZSB3ZSBjYW5ub3QgaW5mZXIgdGhlIG9uZSB5b3Ugd2FudCBpbmZvcm1hdGlvbiBhYm91dC5cIikpO3ZhciBvPVwiXCIrdCxhPVwiXCIrcjtpZihyPWFyZ3VtZW50c1syXSwhKGk9cyh0aGlzLG8sYSxuKSkpdGhyb3cgbmV3IEkoXCJHcmFwaC5cIi5jb25jYXQoZSwnOiBjb3VsZCBub3QgZmluZCBhbiBlZGdlIGZvciB0aGUgZ2l2ZW4gcGF0aCAoXCInKS5jb25jYXQobywnXCIgLSBcIicpLmNvbmNhdChhLCdcIikuJykpfWVsc2V7aWYoXCJtaXhlZFwiIT09bil0aHJvdyBuZXcgWShcIkdyYXBoLlwiLmNvbmNhdChlLFwiOiBjYWxsaW5nIHRoaXMgbWV0aG9kIHdpdGggb25seSBhIGtleSAodnMuIGEgc291cmNlIGFuZCB0YXJnZXQpIGRvZXMgbm90IG1ha2Ugc2Vuc2Ugc2luY2UgYW4gZWRnZSB3aXRoIHRoaXMga2V5IGNvdWxkIGhhdmUgdGhlIG90aGVyIHR5cGUuXCIpKTtpZih0PVwiXCIrdCwhKGk9dGhpcy5fZWRnZXMuZ2V0KHQpKSl0aHJvdyBuZXcgSShcIkdyYXBoLlwiLmNvbmNhdChlLCc6IGNvdWxkIG5vdCBmaW5kIHRoZSBcIicpLmNvbmNhdCh0LCdcIiBlZGdlIGluIHRoZSBncmFwaC4nKSl9cmV0dXJuIGkuYXR0cmlidXRlc1tyXX19fSx7bmFtZTpmdW5jdGlvbih0KXtyZXR1cm5cImdldFwiLmNvbmNhdCh0LFwiQXR0cmlidXRlc1wiKX0sYXR0YWNoZXI6ZnVuY3Rpb24odCxlLG4pe3QucHJvdG90eXBlW2VdPWZ1bmN0aW9uKHQpe3ZhciByO2lmKFwibWl4ZWRcIiE9PXRoaXMudHlwZSYmXCJtaXhlZFwiIT09biYmbiE9PXRoaXMudHlwZSl0aHJvdyBuZXcgWShcIkdyYXBoLlwiLmNvbmNhdChlLFwiOiBjYW5ub3QgZmluZCB0aGlzIHR5cGUgb2YgZWRnZXMgaW4geW91ciBcIikuY29uY2F0KHRoaXMudHlwZSxcIiBncmFwaC5cIikpO2lmKGFyZ3VtZW50cy5sZW5ndGg+MSl7aWYodGhpcy5tdWx0aSl0aHJvdyBuZXcgWShcIkdyYXBoLlwiLmNvbmNhdChlLFwiOiBjYW5ub3QgdXNlIGEge3NvdXJjZSx0YXJnZXR9IGNvbWJvIHdoZW4gYXNraW5nIGFib3V0IGFuIGVkZ2UncyBhdHRyaWJ1dGVzIGluIGEgTXVsdGlHcmFwaCBzaW5jZSB3ZSBjYW5ub3QgaW5mZXIgdGhlIG9uZSB5b3Ugd2FudCBpbmZvcm1hdGlvbiBhYm91dC5cIikpO3ZhciBpPVwiXCIrdCxvPVwiXCIrYXJndW1lbnRzWzFdO2lmKCEocj1zKHRoaXMsaSxvLG4pKSl0aHJvdyBuZXcgSShcIkdyYXBoLlwiLmNvbmNhdChlLCc6IGNvdWxkIG5vdCBmaW5kIGFuIGVkZ2UgZm9yIHRoZSBnaXZlbiBwYXRoIChcIicpLmNvbmNhdChpLCdcIiAtIFwiJykuY29uY2F0KG8sJ1wiKS4nKSl9ZWxzZXtpZihcIm1peGVkXCIhPT1uKXRocm93IG5ldyBZKFwiR3JhcGguXCIuY29uY2F0KGUsXCI6IGNhbGxpbmcgdGhpcyBtZXRob2Qgd2l0aCBvbmx5IGEga2V5ICh2cy4gYSBzb3VyY2UgYW5kIHRhcmdldCkgZG9lcyBub3QgbWFrZSBzZW5zZSBzaW5jZSBhbiBlZGdlIHdpdGggdGhpcyBrZXkgY291bGQgaGF2ZSB0aGUgb3RoZXIgdHlwZS5cIikpO2lmKHQ9XCJcIit0LCEocj10aGlzLl9lZGdlcy5nZXQodCkpKXRocm93IG5ldyBJKFwiR3JhcGguXCIuY29uY2F0KGUsJzogY291bGQgbm90IGZpbmQgdGhlIFwiJykuY29uY2F0KHQsJ1wiIGVkZ2UgaW4gdGhlIGdyYXBoLicpKX1yZXR1cm4gci5hdHRyaWJ1dGVzfX19LHtuYW1lOmZ1bmN0aW9uKHQpe3JldHVyblwiaGFzXCIuY29uY2F0KHQsXCJBdHRyaWJ1dGVcIil9LGF0dGFjaGVyOmZ1bmN0aW9uKHQsZSxuKXt0LnByb3RvdHlwZVtlXT1mdW5jdGlvbih0LHIpe3ZhciBpO2lmKFwibWl4ZWRcIiE9PXRoaXMudHlwZSYmXCJtaXhlZFwiIT09biYmbiE9PXRoaXMudHlwZSl0aHJvdyBuZXcgWShcIkdyYXBoLlwiLmNvbmNhdChlLFwiOiBjYW5ub3QgZmluZCB0aGlzIHR5cGUgb2YgZWRnZXMgaW4geW91ciBcIikuY29uY2F0KHRoaXMudHlwZSxcIiBncmFwaC5cIikpO2lmKGFyZ3VtZW50cy5sZW5ndGg+Mil7aWYodGhpcy5tdWx0aSl0aHJvdyBuZXcgWShcIkdyYXBoLlwiLmNvbmNhdChlLFwiOiBjYW5ub3QgdXNlIGEge3NvdXJjZSx0YXJnZXR9IGNvbWJvIHdoZW4gYXNraW5nIGFib3V0IGFuIGVkZ2UncyBhdHRyaWJ1dGVzIGluIGEgTXVsdGlHcmFwaCBzaW5jZSB3ZSBjYW5ub3QgaW5mZXIgdGhlIG9uZSB5b3Ugd2FudCBpbmZvcm1hdGlvbiBhYm91dC5cIikpO3ZhciBvPVwiXCIrdCxhPVwiXCIrcjtpZihyPWFyZ3VtZW50c1syXSwhKGk9cyh0aGlzLG8sYSxuKSkpdGhyb3cgbmV3IEkoXCJHcmFwaC5cIi5jb25jYXQoZSwnOiBjb3VsZCBub3QgZmluZCBhbiBlZGdlIGZvciB0aGUgZ2l2ZW4gcGF0aCAoXCInKS5jb25jYXQobywnXCIgLSBcIicpLmNvbmNhdChhLCdcIikuJykpfWVsc2V7aWYoXCJtaXhlZFwiIT09bil0aHJvdyBuZXcgWShcIkdyYXBoLlwiLmNvbmNhdChlLFwiOiBjYWxsaW5nIHRoaXMgbWV0aG9kIHdpdGggb25seSBhIGtleSAodnMuIGEgc291cmNlIGFuZCB0YXJnZXQpIGRvZXMgbm90IG1ha2Ugc2Vuc2Ugc2luY2UgYW4gZWRnZSB3aXRoIHRoaXMga2V5IGNvdWxkIGhhdmUgdGhlIG90aGVyIHR5cGUuXCIpKTtpZih0PVwiXCIrdCwhKGk9dGhpcy5fZWRnZXMuZ2V0KHQpKSl0aHJvdyBuZXcgSShcIkdyYXBoLlwiLmNvbmNhdChlLCc6IGNvdWxkIG5vdCBmaW5kIHRoZSBcIicpLmNvbmNhdCh0LCdcIiBlZGdlIGluIHRoZSBncmFwaC4nKSl9cmV0dXJuIGkuYXR0cmlidXRlcy5oYXNPd25Qcm9wZXJ0eShyKX19fSx7bmFtZTpmdW5jdGlvbih0KXtyZXR1cm5cInNldFwiLmNvbmNhdCh0LFwiQXR0cmlidXRlXCIpfSxhdHRhY2hlcjpmdW5jdGlvbih0LGUsbil7dC5wcm90b3R5cGVbZV09ZnVuY3Rpb24odCxyLGkpe3ZhciBvO2lmKFwibWl4ZWRcIiE9PXRoaXMudHlwZSYmXCJtaXhlZFwiIT09biYmbiE9PXRoaXMudHlwZSl0aHJvdyBuZXcgWShcIkdyYXBoLlwiLmNvbmNhdChlLFwiOiBjYW5ub3QgZmluZCB0aGlzIHR5cGUgb2YgZWRnZXMgaW4geW91ciBcIikuY29uY2F0KHRoaXMudHlwZSxcIiBncmFwaC5cIikpO2lmKGFyZ3VtZW50cy5sZW5ndGg+Myl7aWYodGhpcy5tdWx0aSl0aHJvdyBuZXcgWShcIkdyYXBoLlwiLmNvbmNhdChlLFwiOiBjYW5ub3QgdXNlIGEge3NvdXJjZSx0YXJnZXR9IGNvbWJvIHdoZW4gYXNraW5nIGFib3V0IGFuIGVkZ2UncyBhdHRyaWJ1dGVzIGluIGEgTXVsdGlHcmFwaCBzaW5jZSB3ZSBjYW5ub3QgaW5mZXIgdGhlIG9uZSB5b3Ugd2FudCBpbmZvcm1hdGlvbiBhYm91dC5cIikpO3ZhciBhPVwiXCIrdCx1PVwiXCIrcjtpZihyPWFyZ3VtZW50c1syXSxpPWFyZ3VtZW50c1szXSwhKG89cyh0aGlzLGEsdSxuKSkpdGhyb3cgbmV3IEkoXCJHcmFwaC5cIi5jb25jYXQoZSwnOiBjb3VsZCBub3QgZmluZCBhbiBlZGdlIGZvciB0aGUgZ2l2ZW4gcGF0aCAoXCInKS5jb25jYXQoYSwnXCIgLSBcIicpLmNvbmNhdCh1LCdcIikuJykpfWVsc2V7aWYoXCJtaXhlZFwiIT09bil0aHJvdyBuZXcgWShcIkdyYXBoLlwiLmNvbmNhdChlLFwiOiBjYWxsaW5nIHRoaXMgbWV0aG9kIHdpdGggb25seSBhIGtleSAodnMuIGEgc291cmNlIGFuZCB0YXJnZXQpIGRvZXMgbm90IG1ha2Ugc2Vuc2Ugc2luY2UgYW4gZWRnZSB3aXRoIHRoaXMga2V5IGNvdWxkIGhhdmUgdGhlIG90aGVyIHR5cGUuXCIpKTtpZih0PVwiXCIrdCwhKG89dGhpcy5fZWRnZXMuZ2V0KHQpKSl0aHJvdyBuZXcgSShcIkdyYXBoLlwiLmNvbmNhdChlLCc6IGNvdWxkIG5vdCBmaW5kIHRoZSBcIicpLmNvbmNhdCh0LCdcIiBlZGdlIGluIHRoZSBncmFwaC4nKSl9cmV0dXJuIG8uYXR0cmlidXRlc1tyXT1pLHRoaXMuZW1pdChcImVkZ2VBdHRyaWJ1dGVzVXBkYXRlZFwiLHtrZXk6by5rZXksdHlwZTpcInNldFwiLGF0dHJpYnV0ZXM6by5hdHRyaWJ1dGVzLG5hbWU6cn0pLHRoaXN9fX0se25hbWU6ZnVuY3Rpb24odCl7cmV0dXJuXCJ1cGRhdGVcIi5jb25jYXQodCxcIkF0dHJpYnV0ZVwiKX0sYXR0YWNoZXI6ZnVuY3Rpb24odCxlLG4pe3QucHJvdG90eXBlW2VdPWZ1bmN0aW9uKHQscixpKXt2YXIgbztpZihcIm1peGVkXCIhPT10aGlzLnR5cGUmJlwibWl4ZWRcIiE9PW4mJm4hPT10aGlzLnR5cGUpdGhyb3cgbmV3IFkoXCJHcmFwaC5cIi5jb25jYXQoZSxcIjogY2Fubm90IGZpbmQgdGhpcyB0eXBlIG9mIGVkZ2VzIGluIHlvdXIgXCIpLmNvbmNhdCh0aGlzLnR5cGUsXCIgZ3JhcGguXCIpKTtpZihhcmd1bWVudHMubGVuZ3RoPjMpe2lmKHRoaXMubXVsdGkpdGhyb3cgbmV3IFkoXCJHcmFwaC5cIi5jb25jYXQoZSxcIjogY2Fubm90IHVzZSBhIHtzb3VyY2UsdGFyZ2V0fSBjb21ibyB3aGVuIGFza2luZyBhYm91dCBhbiBlZGdlJ3MgYXR0cmlidXRlcyBpbiBhIE11bHRpR3JhcGggc2luY2Ugd2UgY2Fubm90IGluZmVyIHRoZSBvbmUgeW91IHdhbnQgaW5mb3JtYXRpb24gYWJvdXQuXCIpKTt2YXIgYT1cIlwiK3QsdT1cIlwiK3I7aWYocj1hcmd1bWVudHNbMl0saT1hcmd1bWVudHNbM10sIShvPXModGhpcyxhLHUsbikpKXRocm93IG5ldyBJKFwiR3JhcGguXCIuY29uY2F0KGUsJzogY291bGQgbm90IGZpbmQgYW4gZWRnZSBmb3IgdGhlIGdpdmVuIHBhdGggKFwiJykuY29uY2F0KGEsJ1wiIC0gXCInKS5jb25jYXQodSwnXCIpLicpKX1lbHNle2lmKFwibWl4ZWRcIiE9PW4pdGhyb3cgbmV3IFkoXCJHcmFwaC5cIi5jb25jYXQoZSxcIjogY2FsbGluZyB0aGlzIG1ldGhvZCB3aXRoIG9ubHkgYSBrZXkgKHZzLiBhIHNvdXJjZSBhbmQgdGFyZ2V0KSBkb2VzIG5vdCBtYWtlIHNlbnNlIHNpbmNlIGFuIGVkZ2Ugd2l0aCB0aGlzIGtleSBjb3VsZCBoYXZlIHRoZSBvdGhlciB0eXBlLlwiKSk7aWYodD1cIlwiK3QsIShvPXRoaXMuX2VkZ2VzLmdldCh0KSkpdGhyb3cgbmV3IEkoXCJHcmFwaC5cIi5jb25jYXQoZSwnOiBjb3VsZCBub3QgZmluZCB0aGUgXCInKS5jb25jYXQodCwnXCIgZWRnZSBpbiB0aGUgZ3JhcGguJykpfWlmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGkpdGhyb3cgbmV3IEYoXCJHcmFwaC5cIi5jb25jYXQoZSxcIjogdXBkYXRlciBzaG91bGQgYmUgYSBmdW5jdGlvbi5cIikpO3JldHVybiBvLmF0dHJpYnV0ZXNbcl09aShvLmF0dHJpYnV0ZXNbcl0pLHRoaXMuZW1pdChcImVkZ2VBdHRyaWJ1dGVzVXBkYXRlZFwiLHtrZXk6by5rZXksdHlwZTpcInNldFwiLGF0dHJpYnV0ZXM6by5hdHRyaWJ1dGVzLG5hbWU6cn0pLHRoaXN9fX0se25hbWU6ZnVuY3Rpb24odCl7cmV0dXJuXCJyZW1vdmVcIi5jb25jYXQodCxcIkF0dHJpYnV0ZVwiKX0sYXR0YWNoZXI6ZnVuY3Rpb24odCxlLG4pe3QucHJvdG90eXBlW2VdPWZ1bmN0aW9uKHQscil7dmFyIGk7aWYoXCJtaXhlZFwiIT09dGhpcy50eXBlJiZcIm1peGVkXCIhPT1uJiZuIT09dGhpcy50eXBlKXRocm93IG5ldyBZKFwiR3JhcGguXCIuY29uY2F0KGUsXCI6IGNhbm5vdCBmaW5kIHRoaXMgdHlwZSBvZiBlZGdlcyBpbiB5b3VyIFwiKS5jb25jYXQodGhpcy50eXBlLFwiIGdyYXBoLlwiKSk7aWYoYXJndW1lbnRzLmxlbmd0aD4yKXtpZih0aGlzLm11bHRpKXRocm93IG5ldyBZKFwiR3JhcGguXCIuY29uY2F0KGUsXCI6IGNhbm5vdCB1c2UgYSB7c291cmNlLHRhcmdldH0gY29tYm8gd2hlbiBhc2tpbmcgYWJvdXQgYW4gZWRnZSdzIGF0dHJpYnV0ZXMgaW4gYSBNdWx0aUdyYXBoIHNpbmNlIHdlIGNhbm5vdCBpbmZlciB0aGUgb25lIHlvdSB3YW50IGluZm9ybWF0aW9uIGFib3V0LlwiKSk7dmFyIG89XCJcIit0LGE9XCJcIityO2lmKHI9YXJndW1lbnRzWzJdLCEoaT1zKHRoaXMsbyxhLG4pKSl0aHJvdyBuZXcgSShcIkdyYXBoLlwiLmNvbmNhdChlLCc6IGNvdWxkIG5vdCBmaW5kIGFuIGVkZ2UgZm9yIHRoZSBnaXZlbiBwYXRoIChcIicpLmNvbmNhdChvLCdcIiAtIFwiJykuY29uY2F0KGEsJ1wiKS4nKSl9ZWxzZXtpZihcIm1peGVkXCIhPT1uKXRocm93IG5ldyBZKFwiR3JhcGguXCIuY29uY2F0KGUsXCI6IGNhbGxpbmcgdGhpcyBtZXRob2Qgd2l0aCBvbmx5IGEga2V5ICh2cy4gYSBzb3VyY2UgYW5kIHRhcmdldCkgZG9lcyBub3QgbWFrZSBzZW5zZSBzaW5jZSBhbiBlZGdlIHdpdGggdGhpcyBrZXkgY291bGQgaGF2ZSB0aGUgb3RoZXIgdHlwZS5cIikpO2lmKHQ9XCJcIit0LCEoaT10aGlzLl9lZGdlcy5nZXQodCkpKXRocm93IG5ldyBJKFwiR3JhcGguXCIuY29uY2F0KGUsJzogY291bGQgbm90IGZpbmQgdGhlIFwiJykuY29uY2F0KHQsJ1wiIGVkZ2UgaW4gdGhlIGdyYXBoLicpKX1yZXR1cm4gZGVsZXRlIGkuYXR0cmlidXRlc1tyXSx0aGlzLmVtaXQoXCJlZGdlQXR0cmlidXRlc1VwZGF0ZWRcIix7a2V5Omkua2V5LHR5cGU6XCJyZW1vdmVcIixhdHRyaWJ1dGVzOmkuYXR0cmlidXRlcyxuYW1lOnJ9KSx0aGlzfX19LHtuYW1lOmZ1bmN0aW9uKHQpe3JldHVyblwicmVwbGFjZVwiLmNvbmNhdCh0LFwiQXR0cmlidXRlc1wiKX0sYXR0YWNoZXI6ZnVuY3Rpb24odCxlLG4pe3QucHJvdG90eXBlW2VdPWZ1bmN0aW9uKHQscil7dmFyIGk7aWYoXCJtaXhlZFwiIT09dGhpcy50eXBlJiZcIm1peGVkXCIhPT1uJiZuIT09dGhpcy50eXBlKXRocm93IG5ldyBZKFwiR3JhcGguXCIuY29uY2F0KGUsXCI6IGNhbm5vdCBmaW5kIHRoaXMgdHlwZSBvZiBlZGdlcyBpbiB5b3VyIFwiKS5jb25jYXQodGhpcy50eXBlLFwiIGdyYXBoLlwiKSk7aWYoYXJndW1lbnRzLmxlbmd0aD4yKXtpZih0aGlzLm11bHRpKXRocm93IG5ldyBZKFwiR3JhcGguXCIuY29uY2F0KGUsXCI6IGNhbm5vdCB1c2UgYSB7c291cmNlLHRhcmdldH0gY29tYm8gd2hlbiBhc2tpbmcgYWJvdXQgYW4gZWRnZSdzIGF0dHJpYnV0ZXMgaW4gYSBNdWx0aUdyYXBoIHNpbmNlIHdlIGNhbm5vdCBpbmZlciB0aGUgb25lIHlvdSB3YW50IGluZm9ybWF0aW9uIGFib3V0LlwiKSk7dmFyIG89XCJcIit0LGE9XCJcIityO2lmKHI9YXJndW1lbnRzWzJdLCEoaT1zKHRoaXMsbyxhLG4pKSl0aHJvdyBuZXcgSShcIkdyYXBoLlwiLmNvbmNhdChlLCc6IGNvdWxkIG5vdCBmaW5kIGFuIGVkZ2UgZm9yIHRoZSBnaXZlbiBwYXRoIChcIicpLmNvbmNhdChvLCdcIiAtIFwiJykuY29uY2F0KGEsJ1wiKS4nKSl9ZWxzZXtpZihcIm1peGVkXCIhPT1uKXRocm93IG5ldyBZKFwiR3JhcGguXCIuY29uY2F0KGUsXCI6IGNhbGxpbmcgdGhpcyBtZXRob2Qgd2l0aCBvbmx5IGEga2V5ICh2cy4gYSBzb3VyY2UgYW5kIHRhcmdldCkgZG9lcyBub3QgbWFrZSBzZW5zZSBzaW5jZSBhbiBlZGdlIHdpdGggdGhpcyBrZXkgY291bGQgaGF2ZSB0aGUgb3RoZXIgdHlwZS5cIikpO2lmKHQ9XCJcIit0LCEoaT10aGlzLl9lZGdlcy5nZXQodCkpKXRocm93IG5ldyBJKFwiR3JhcGguXCIuY29uY2F0KGUsJzogY291bGQgbm90IGZpbmQgdGhlIFwiJykuY29uY2F0KHQsJ1wiIGVkZ2UgaW4gdGhlIGdyYXBoLicpKX1pZighaChyKSl0aHJvdyBuZXcgRihcIkdyYXBoLlwiLmNvbmNhdChlLFwiOiBwcm92aWRlZCBhdHRyaWJ1dGVzIGFyZSBub3QgYSBwbGFpbiBvYmplY3QuXCIpKTtyZXR1cm4gaS5hdHRyaWJ1dGVzPXIsdGhpcy5lbWl0KFwiZWRnZUF0dHJpYnV0ZXNVcGRhdGVkXCIse2tleTppLmtleSx0eXBlOlwicmVwbGFjZVwiLGF0dHJpYnV0ZXM6aS5hdHRyaWJ1dGVzfSksdGhpc319fSx7bmFtZTpmdW5jdGlvbih0KXtyZXR1cm5cIm1lcmdlXCIuY29uY2F0KHQsXCJBdHRyaWJ1dGVzXCIpfSxhdHRhY2hlcjpmdW5jdGlvbih0LGUsbil7dC5wcm90b3R5cGVbZV09ZnVuY3Rpb24odCxyKXt2YXIgaTtpZihcIm1peGVkXCIhPT10aGlzLnR5cGUmJlwibWl4ZWRcIiE9PW4mJm4hPT10aGlzLnR5cGUpdGhyb3cgbmV3IFkoXCJHcmFwaC5cIi5jb25jYXQoZSxcIjogY2Fubm90IGZpbmQgdGhpcyB0eXBlIG9mIGVkZ2VzIGluIHlvdXIgXCIpLmNvbmNhdCh0aGlzLnR5cGUsXCIgZ3JhcGguXCIpKTtpZihhcmd1bWVudHMubGVuZ3RoPjIpe2lmKHRoaXMubXVsdGkpdGhyb3cgbmV3IFkoXCJHcmFwaC5cIi5jb25jYXQoZSxcIjogY2Fubm90IHVzZSBhIHtzb3VyY2UsdGFyZ2V0fSBjb21ibyB3aGVuIGFza2luZyBhYm91dCBhbiBlZGdlJ3MgYXR0cmlidXRlcyBpbiBhIE11bHRpR3JhcGggc2luY2Ugd2UgY2Fubm90IGluZmVyIHRoZSBvbmUgeW91IHdhbnQgaW5mb3JtYXRpb24gYWJvdXQuXCIpKTt2YXIgbz1cIlwiK3QsYT1cIlwiK3I7aWYocj1hcmd1bWVudHNbMl0sIShpPXModGhpcyxvLGEsbikpKXRocm93IG5ldyBJKFwiR3JhcGguXCIuY29uY2F0KGUsJzogY291bGQgbm90IGZpbmQgYW4gZWRnZSBmb3IgdGhlIGdpdmVuIHBhdGggKFwiJykuY29uY2F0KG8sJ1wiIC0gXCInKS5jb25jYXQoYSwnXCIpLicpKX1lbHNle2lmKFwibWl4ZWRcIiE9PW4pdGhyb3cgbmV3IFkoXCJHcmFwaC5cIi5jb25jYXQoZSxcIjogY2FsbGluZyB0aGlzIG1ldGhvZCB3aXRoIG9ubHkgYSBrZXkgKHZzLiBhIHNvdXJjZSBhbmQgdGFyZ2V0KSBkb2VzIG5vdCBtYWtlIHNlbnNlIHNpbmNlIGFuIGVkZ2Ugd2l0aCB0aGlzIGtleSBjb3VsZCBoYXZlIHRoZSBvdGhlciB0eXBlLlwiKSk7aWYodD1cIlwiK3QsIShpPXRoaXMuX2VkZ2VzLmdldCh0KSkpdGhyb3cgbmV3IEkoXCJHcmFwaC5cIi5jb25jYXQoZSwnOiBjb3VsZCBub3QgZmluZCB0aGUgXCInKS5jb25jYXQodCwnXCIgZWRnZSBpbiB0aGUgZ3JhcGguJykpfWlmKCFoKHIpKXRocm93IG5ldyBGKFwiR3JhcGguXCIuY29uY2F0KGUsXCI6IHByb3ZpZGVkIGF0dHJpYnV0ZXMgYXJlIG5vdCBhIHBsYWluIG9iamVjdC5cIikpO3JldHVybiBjKGkuYXR0cmlidXRlcyxyKSx0aGlzLmVtaXQoXCJlZGdlQXR0cmlidXRlc1VwZGF0ZWRcIix7a2V5Omkua2V5LHR5cGU6XCJtZXJnZVwiLGF0dHJpYnV0ZXM6aS5hdHRyaWJ1dGVzLGRhdGE6cn0pLHRoaXN9fX0se25hbWU6ZnVuY3Rpb24odCl7cmV0dXJuXCJ1cGRhdGVcIi5jb25jYXQodCxcIkF0dHJpYnV0ZXNcIil9LGF0dGFjaGVyOmZ1bmN0aW9uKHQsZSxuKXt0LnByb3RvdHlwZVtlXT1mdW5jdGlvbih0LHIpe3ZhciBpO2lmKFwibWl4ZWRcIiE9PXRoaXMudHlwZSYmXCJtaXhlZFwiIT09biYmbiE9PXRoaXMudHlwZSl0aHJvdyBuZXcgWShcIkdyYXBoLlwiLmNvbmNhdChlLFwiOiBjYW5ub3QgZmluZCB0aGlzIHR5cGUgb2YgZWRnZXMgaW4geW91ciBcIikuY29uY2F0KHRoaXMudHlwZSxcIiBncmFwaC5cIikpO2lmKGFyZ3VtZW50cy5sZW5ndGg+Mil7aWYodGhpcy5tdWx0aSl0aHJvdyBuZXcgWShcIkdyYXBoLlwiLmNvbmNhdChlLFwiOiBjYW5ub3QgdXNlIGEge3NvdXJjZSx0YXJnZXR9IGNvbWJvIHdoZW4gYXNraW5nIGFib3V0IGFuIGVkZ2UncyBhdHRyaWJ1dGVzIGluIGEgTXVsdGlHcmFwaCBzaW5jZSB3ZSBjYW5ub3QgaW5mZXIgdGhlIG9uZSB5b3Ugd2FudCBpbmZvcm1hdGlvbiBhYm91dC5cIikpO3ZhciBvPVwiXCIrdCxhPVwiXCIrcjtpZihyPWFyZ3VtZW50c1syXSwhKGk9cyh0aGlzLG8sYSxuKSkpdGhyb3cgbmV3IEkoXCJHcmFwaC5cIi5jb25jYXQoZSwnOiBjb3VsZCBub3QgZmluZCBhbiBlZGdlIGZvciB0aGUgZ2l2ZW4gcGF0aCAoXCInKS5jb25jYXQobywnXCIgLSBcIicpLmNvbmNhdChhLCdcIikuJykpfWVsc2V7aWYoXCJtaXhlZFwiIT09bil0aHJvdyBuZXcgWShcIkdyYXBoLlwiLmNvbmNhdChlLFwiOiBjYWxsaW5nIHRoaXMgbWV0aG9kIHdpdGggb25seSBhIGtleSAodnMuIGEgc291cmNlIGFuZCB0YXJnZXQpIGRvZXMgbm90IG1ha2Ugc2Vuc2Ugc2luY2UgYW4gZWRnZSB3aXRoIHRoaXMga2V5IGNvdWxkIGhhdmUgdGhlIG90aGVyIHR5cGUuXCIpKTtpZih0PVwiXCIrdCwhKGk9dGhpcy5fZWRnZXMuZ2V0KHQpKSl0aHJvdyBuZXcgSShcIkdyYXBoLlwiLmNvbmNhdChlLCc6IGNvdWxkIG5vdCBmaW5kIHRoZSBcIicpLmNvbmNhdCh0LCdcIiBlZGdlIGluIHRoZSBncmFwaC4nKSl9aWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygcil0aHJvdyBuZXcgRihcIkdyYXBoLlwiLmNvbmNhdChlLFwiOiBwcm92aWRlZCB1cGRhdGVyIGlzIG5vdCBhIGZ1bmN0aW9uLlwiKSk7cmV0dXJuIGkuYXR0cmlidXRlcz1yKGkuYXR0cmlidXRlcyksdGhpcy5lbWl0KFwiZWRnZUF0dHJpYnV0ZXNVcGRhdGVkXCIse2tleTppLmtleSx0eXBlOlwidXBkYXRlXCIsYXR0cmlidXRlczppLmF0dHJpYnV0ZXN9KSx0aGlzfX19XTt2YXIgJD1PLHR0PVIsZXQ9ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMsZT1udWxsLG49LTE7cmV0dXJuIG5ldyAkKChmdW5jdGlvbigpe2Zvcih2YXIgcj1udWxsOzspe2lmKG51bGw9PT1lKXtpZigrK24+PXQubGVuZ3RoKXJldHVybntkb25lOiEwfTtlPXR0KHRbbl0pfWlmKCEwIT09KHI9ZS5uZXh0KCkpLmRvbmUpYnJlYWs7ZT1udWxsfXJldHVybiByfSkpfSxudD1be25hbWU6XCJlZGdlc1wiLHR5cGU6XCJtaXhlZFwifSx7bmFtZTpcImluRWRnZXNcIix0eXBlOlwiZGlyZWN0ZWRcIixkaXJlY3Rpb246XCJpblwifSx7bmFtZTpcIm91dEVkZ2VzXCIsdHlwZTpcImRpcmVjdGVkXCIsZGlyZWN0aW9uOlwib3V0XCJ9LHtuYW1lOlwiaW5ib3VuZEVkZ2VzXCIsdHlwZTpcIm1peGVkXCIsZGlyZWN0aW9uOlwiaW5cIn0se25hbWU6XCJvdXRib3VuZEVkZ2VzXCIsdHlwZTpcIm1peGVkXCIsZGlyZWN0aW9uOlwib3V0XCJ9LHtuYW1lOlwiZGlyZWN0ZWRFZGdlc1wiLHR5cGU6XCJkaXJlY3RlZFwifSx7bmFtZTpcInVuZGlyZWN0ZWRFZGdlc1wiLHR5cGU6XCJ1bmRpcmVjdGVkXCJ9XTtmdW5jdGlvbiBydCh0LGUsbixyKXt2YXIgaT0hMTtmb3IodmFyIG8gaW4gZSlpZihvIT09cil7dmFyIGE9ZVtvXTtpZihpPW4oYS5rZXksYS5hdHRyaWJ1dGVzLGEuc291cmNlLmtleSxhLnRhcmdldC5rZXksYS5zb3VyY2UuYXR0cmlidXRlcyxhLnRhcmdldC5hdHRyaWJ1dGVzLGEudW5kaXJlY3RlZCksdCYmaSlyZXR1cm4gYS5rZXl9fWZ1bmN0aW9uIGl0KHQsZSxuLHIpe3ZhciBpLG8sYSx1PSExO2Zvcih2YXIgYyBpbiBlKWlmKGMhPT1yKXtpPWVbY107ZG97aWYobz1pLnNvdXJjZSxhPWkudGFyZ2V0LHU9bihpLmtleSxpLmF0dHJpYnV0ZXMsby5rZXksYS5rZXksby5hdHRyaWJ1dGVzLGEuYXR0cmlidXRlcyxpLnVuZGlyZWN0ZWQpLHQmJnUpcmV0dXJuIGkua2V5O2k9aS5uZXh0fXdoaWxlKHZvaWQgMCE9PWkpfX1mdW5jdGlvbiBvdCh0LGUpe3ZhciBuLHI9T2JqZWN0LmtleXModCksaT1yLmxlbmd0aCxvPTA7cmV0dXJuIG5ldyBPKChmdW5jdGlvbigpe2Rve2lmKG4pbj1uLm5leHQ7ZWxzZXtpZihvPj1pKXJldHVybntkb25lOiEwfTt2YXIgYT1yW28rK107aWYoYT09PWUpe249dm9pZCAwO2NvbnRpbnVlfW49dFthXX19d2hpbGUoIW4pO3JldHVybntkb25lOiExLHZhbHVlOntlZGdlOm4ua2V5LGF0dHJpYnV0ZXM6bi5hdHRyaWJ1dGVzLHNvdXJjZTpuLnNvdXJjZS5rZXksdGFyZ2V0Om4udGFyZ2V0LmtleSxzb3VyY2VBdHRyaWJ1dGVzOm4uc291cmNlLmF0dHJpYnV0ZXMsdGFyZ2V0QXR0cmlidXRlczpuLnRhcmdldC5hdHRyaWJ1dGVzLHVuZGlyZWN0ZWQ6bi51bmRpcmVjdGVkfX19KSl9ZnVuY3Rpb24gYXQodCxlLG4scil7dmFyIGk9ZVtuXTtpZihpKXt2YXIgbz1pLnNvdXJjZSxhPWkudGFyZ2V0O3JldHVybiByKGkua2V5LGkuYXR0cmlidXRlcyxvLmtleSxhLmtleSxvLmF0dHJpYnV0ZXMsYS5hdHRyaWJ1dGVzLGkudW5kaXJlY3RlZCkmJnQ/aS5rZXk6dm9pZCAwfX1mdW5jdGlvbiB1dCh0LGUsbixyKXt2YXIgaT1lW25dO2lmKGkpe3ZhciBvPSExO2Rve2lmKG89cihpLmtleSxpLmF0dHJpYnV0ZXMsaS5zb3VyY2Uua2V5LGkudGFyZ2V0LmtleSxpLnNvdXJjZS5hdHRyaWJ1dGVzLGkudGFyZ2V0LmF0dHJpYnV0ZXMsaS51bmRpcmVjdGVkKSx0JiZvKXJldHVybiBpLmtleTtpPWkubmV4dH13aGlsZSh2b2lkIDAhPT1pKX19ZnVuY3Rpb24gY3QodCxlKXt2YXIgbj10W2VdO3JldHVybiB2b2lkIDAhPT1uLm5leHQ/bmV3IE8oKGZ1bmN0aW9uKCl7aWYoIW4pcmV0dXJue2RvbmU6ITB9O3ZhciB0PXtlZGdlOm4ua2V5LGF0dHJpYnV0ZXM6bi5hdHRyaWJ1dGVzLHNvdXJjZTpuLnNvdXJjZS5rZXksdGFyZ2V0Om4udGFyZ2V0LmtleSxzb3VyY2VBdHRyaWJ1dGVzOm4uc291cmNlLmF0dHJpYnV0ZXMsdGFyZ2V0QXR0cmlidXRlczpuLnRhcmdldC5hdHRyaWJ1dGVzLHVuZGlyZWN0ZWQ6bi51bmRpcmVjdGVkfTtyZXR1cm4gbj1uLm5leHQse2RvbmU6ITEsdmFsdWU6dH19KSk6Ty5vZih7ZWRnZTpuLmtleSxhdHRyaWJ1dGVzOm4uYXR0cmlidXRlcyxzb3VyY2U6bi5zb3VyY2Uua2V5LHRhcmdldDpuLnRhcmdldC5rZXksc291cmNlQXR0cmlidXRlczpuLnNvdXJjZS5hdHRyaWJ1dGVzLHRhcmdldEF0dHJpYnV0ZXM6bi50YXJnZXQuYXR0cmlidXRlcyx1bmRpcmVjdGVkOm4udW5kaXJlY3RlZH0pfWZ1bmN0aW9uIHN0KHQsZSl7aWYoMD09PXQuc2l6ZSlyZXR1cm5bXTtpZihcIm1peGVkXCI9PT1lfHxlPT09dC50eXBlKXJldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIEFycmF5LmZyb20/QXJyYXkuZnJvbSh0Ll9lZGdlcy5rZXlzKCkpOlQodC5fZWRnZXMua2V5cygpLHQuX2VkZ2VzLnNpemUpO2Zvcih2YXIgbixyLGk9XCJ1bmRpcmVjdGVkXCI9PT1lP3QudW5kaXJlY3RlZFNpemU6dC5kaXJlY3RlZFNpemUsbz1uZXcgQXJyYXkoaSksYT1cInVuZGlyZWN0ZWRcIj09PWUsdT10Ll9lZGdlcy52YWx1ZXMoKSxjPTA7ITAhPT0obj11Lm5leHQoKSkuZG9uZTspKHI9bi52YWx1ZSkudW5kaXJlY3RlZD09PWEmJihvW2MrK109ci5rZXkpO3JldHVybiBvfWZ1bmN0aW9uIGR0KHQsZSxuLHIpe2lmKDAhPT1lLnNpemUpZm9yKHZhciBpLG8sYT1cIm1peGVkXCIhPT1uJiZuIT09ZS50eXBlLHU9XCJ1bmRpcmVjdGVkXCI9PT1uLGM9ITEscz1lLl9lZGdlcy52YWx1ZXMoKTshMCE9PShpPXMubmV4dCgpKS5kb25lOylpZihvPWkudmFsdWUsIWF8fG8udW5kaXJlY3RlZD09PXUpe3ZhciBkPW8saD1kLmtleSxwPWQuYXR0cmlidXRlcyxmPWQuc291cmNlLGw9ZC50YXJnZXQ7aWYoYz1yKGgscCxmLmtleSxsLmtleSxmLmF0dHJpYnV0ZXMsbC5hdHRyaWJ1dGVzLG8udW5kaXJlY3RlZCksdCYmYylyZXR1cm4gaH19ZnVuY3Rpb24gaHQodCxlKXtpZigwPT09dC5zaXplKXJldHVybiBPLmVtcHR5KCk7dmFyIG49XCJtaXhlZFwiIT09ZSYmZSE9PXQudHlwZSxyPVwidW5kaXJlY3RlZFwiPT09ZSxpPXQuX2VkZ2VzLnZhbHVlcygpO3JldHVybiBuZXcgTygoZnVuY3Rpb24oKXtmb3IodmFyIHQsZTs7KXtpZigodD1pLm5leHQoKSkuZG9uZSlyZXR1cm4gdDtpZihlPXQudmFsdWUsIW58fGUudW5kaXJlY3RlZD09PXIpYnJlYWt9cmV0dXJue3ZhbHVlOntlZGdlOmUua2V5LGF0dHJpYnV0ZXM6ZS5hdHRyaWJ1dGVzLHNvdXJjZTplLnNvdXJjZS5rZXksdGFyZ2V0OmUudGFyZ2V0LmtleSxzb3VyY2VBdHRyaWJ1dGVzOmUuc291cmNlLmF0dHJpYnV0ZXMsdGFyZ2V0QXR0cmlidXRlczplLnRhcmdldC5hdHRyaWJ1dGVzLHVuZGlyZWN0ZWQ6ZS51bmRpcmVjdGVkfSxkb25lOiExfX0pKX1mdW5jdGlvbiBwdCh0LGUsbixyLGksbyl7dmFyIGEsdT1lP2l0OnJ0O2lmKFwidW5kaXJlY3RlZFwiIT09bil7aWYoXCJvdXRcIiE9PXImJihhPXUodCxpLmluLG8pLHQmJmEpKXJldHVybiBhO2lmKFwiaW5cIiE9PXImJihhPXUodCxpLm91dCxvLHI/dm9pZCAwOmkua2V5KSx0JiZhKSlyZXR1cm4gYX1pZihcImRpcmVjdGVkXCIhPT1uJiYoYT11KHQsaS51bmRpcmVjdGVkLG8pLHQmJmEpKXJldHVybiBhfWZ1bmN0aW9uIGZ0KHQsZSxuLHIpe3ZhciBpPVtdO3JldHVybiBwdCghMSx0LGUsbixyLChmdW5jdGlvbih0KXtpLnB1c2godCl9KSksaX1mdW5jdGlvbiBsdCh0LGUsbil7dmFyIHI9Ty5lbXB0eSgpO3JldHVyblwidW5kaXJlY3RlZFwiIT09dCYmKFwib3V0XCIhPT1lJiZ2b2lkIDAhPT1uLmluJiYocj1ldChyLG90KG4uaW4pKSksXCJpblwiIT09ZSYmdm9pZCAwIT09bi5vdXQmJihyPWV0KHIsb3Qobi5vdXQsZT92b2lkIDA6bi5rZXkpKSkpLFwiZGlyZWN0ZWRcIiE9PXQmJnZvaWQgMCE9PW4udW5kaXJlY3RlZCYmKHI9ZXQocixvdChuLnVuZGlyZWN0ZWQpKSkscn1mdW5jdGlvbiBndCh0LGUsbixyLGksbyxhKXt2YXIgdSxjPW4/dXQ6YXQ7aWYoXCJ1bmRpcmVjdGVkXCIhPT1lKXtpZih2b2lkIDAhPT1pLmluJiZcIm91dFwiIT09ciYmKHU9Yyh0LGkuaW4sbyxhKSx0JiZ1KSlyZXR1cm4gdTtpZih2b2lkIDAhPT1pLm91dCYmXCJpblwiIT09ciYmKHJ8fGkua2V5IT09bykmJih1PWModCxpLm91dCxvLGEpLHQmJnUpKXJldHVybiB1fWlmKFwiZGlyZWN0ZWRcIiE9PWUmJnZvaWQgMCE9PWkudW5kaXJlY3RlZCYmKHU9Yyh0LGkudW5kaXJlY3RlZCxvLGEpLHQmJnUpKXJldHVybiB1fWZ1bmN0aW9uIHl0KHQsZSxuLHIsaSl7dmFyIG89W107cmV0dXJuIGd0KCExLHQsZSxuLHIsaSwoZnVuY3Rpb24odCl7by5wdXNoKHQpfSkpLG99ZnVuY3Rpb24gd3QodCxlLG4scil7dmFyIGk9Ty5lbXB0eSgpO3JldHVyblwidW5kaXJlY3RlZFwiIT09dCYmKHZvaWQgMCE9PW4uaW4mJlwib3V0XCIhPT1lJiZyIGluIG4uaW4mJihpPWV0KGksY3Qobi5pbixyKSkpLHZvaWQgMCE9PW4ub3V0JiZcImluXCIhPT1lJiZyIGluIG4ub3V0JiYoZXx8bi5rZXkhPT1yKSYmKGk9ZXQoaSxjdChuLm91dCxyKSkpKSxcImRpcmVjdGVkXCIhPT10JiZ2b2lkIDAhPT1uLnVuZGlyZWN0ZWQmJnIgaW4gbi51bmRpcmVjdGVkJiYoaT1ldChpLGN0KG4udW5kaXJlY3RlZCxyKSkpLGl9dmFyIHZ0PVt7bmFtZTpcIm5laWdoYm9yc1wiLHR5cGU6XCJtaXhlZFwifSx7bmFtZTpcImluTmVpZ2hib3JzXCIsdHlwZTpcImRpcmVjdGVkXCIsZGlyZWN0aW9uOlwiaW5cIn0se25hbWU6XCJvdXROZWlnaGJvcnNcIix0eXBlOlwiZGlyZWN0ZWRcIixkaXJlY3Rpb246XCJvdXRcIn0se25hbWU6XCJpbmJvdW5kTmVpZ2hib3JzXCIsdHlwZTpcIm1peGVkXCIsZGlyZWN0aW9uOlwiaW5cIn0se25hbWU6XCJvdXRib3VuZE5laWdoYm9yc1wiLHR5cGU6XCJtaXhlZFwiLGRpcmVjdGlvbjpcIm91dFwifSx7bmFtZTpcImRpcmVjdGVkTmVpZ2hib3JzXCIsdHlwZTpcImRpcmVjdGVkXCJ9LHtuYW1lOlwidW5kaXJlY3RlZE5laWdoYm9yc1wiLHR5cGU6XCJ1bmRpcmVjdGVkXCJ9XTtmdW5jdGlvbiBidCgpe3RoaXMuQT1udWxsLHRoaXMuQj1udWxsfWZ1bmN0aW9uIG10KHQsZSxuLHIsaSl7Zm9yKHZhciBvIGluIHIpe3ZhciBhPXJbb10sdT1hLnNvdXJjZSxjPWEudGFyZ2V0LHM9dT09PW4/Yzp1O2lmKCFlfHwhZS5oYXMocy5rZXkpKXt2YXIgZD1pKHMua2V5LHMuYXR0cmlidXRlcyk7aWYodCYmZClyZXR1cm4gcy5rZXl9fX1mdW5jdGlvbiBrdCh0LGUsbixyLGkpe2lmKFwibWl4ZWRcIiE9PWUpe2lmKFwidW5kaXJlY3RlZFwiPT09ZSlyZXR1cm4gbXQodCxudWxsLHIsci51bmRpcmVjdGVkLGkpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBuKXJldHVybiBtdCh0LG51bGwscixyW25dLGkpfXZhciBvLGE9bmV3IGJ0O2lmKFwidW5kaXJlY3RlZFwiIT09ZSl7aWYoXCJvdXRcIiE9PW4pe2lmKG89bXQodCxudWxsLHIsci5pbixpKSx0JiZvKXJldHVybiBvO2Eud3JhcChyLmluKX1pZihcImluXCIhPT1uKXtpZihvPW10KHQsYSxyLHIub3V0LGkpLHQmJm8pcmV0dXJuIG87YS53cmFwKHIub3V0KX19aWYoXCJkaXJlY3RlZFwiIT09ZSYmKG89bXQodCxhLHIsci51bmRpcmVjdGVkLGkpLHQmJm8pKXJldHVybiBvfWZ1bmN0aW9uIF90KHQsZSxuKXt2YXIgcj1PYmplY3Qua2V5cyhuKSxpPXIubGVuZ3RoLG89MDtyZXR1cm4gbmV3IE8oKGZ1bmN0aW9uKCl7dmFyIGE9bnVsbDtkb3tpZihvPj1pKXJldHVybiB0JiZ0LndyYXAobikse2RvbmU6ITB9O3ZhciB1PW5bcltvKytdXSxjPXUuc291cmNlLHM9dS50YXJnZXQ7YT1jPT09ZT9zOmMsdCYmdC5oYXMoYS5rZXkpJiYoYT1udWxsKX13aGlsZShudWxsPT09YSk7cmV0dXJue2RvbmU6ITEsdmFsdWU6e25laWdoYm9yOmEua2V5LGF0dHJpYnV0ZXM6YS5hdHRyaWJ1dGVzfX19KSl9ZnVuY3Rpb24gR3QodCxlKXt2YXIgbj1lLm5hbWUscj1lLnR5cGUsaT1lLmRpcmVjdGlvbjt0LnByb3RvdHlwZVtuXT1mdW5jdGlvbih0KXtpZihcIm1peGVkXCIhPT1yJiZcIm1peGVkXCIhPT10aGlzLnR5cGUmJnIhPT10aGlzLnR5cGUpcmV0dXJuW107dD1cIlwiK3Q7dmFyIGU9dGhpcy5fbm9kZXMuZ2V0KHQpO2lmKHZvaWQgMD09PWUpdGhyb3cgbmV3IEkoXCJHcmFwaC5cIi5jb25jYXQobiwnOiBjb3VsZCBub3QgZmluZCB0aGUgXCInKS5jb25jYXQodCwnXCIgbm9kZSBpbiB0aGUgZ3JhcGguJykpO3JldHVybiBmdW5jdGlvbih0LGUsbil7aWYoXCJtaXhlZFwiIT09dCl7aWYoXCJ1bmRpcmVjdGVkXCI9PT10KXJldHVybiBPYmplY3Qua2V5cyhuLnVuZGlyZWN0ZWQpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBPYmplY3Qua2V5cyhuW2VdKX12YXIgcj1bXTtyZXR1cm4ga3QoITEsdCxlLG4sKGZ1bmN0aW9uKHQpe3IucHVzaCh0KX0pKSxyfShcIm1peGVkXCI9PT1yP3RoaXMudHlwZTpyLGksZSl9fWZ1bmN0aW9uIHh0KHQsZSl7dmFyIG49ZS5uYW1lLHI9ZS50eXBlLGk9ZS5kaXJlY3Rpb24sbz1uLnNsaWNlKDAsLTEpK1wiRW50cmllc1wiO3QucHJvdG90eXBlW29dPWZ1bmN0aW9uKHQpe2lmKFwibWl4ZWRcIiE9PXImJlwibWl4ZWRcIiE9PXRoaXMudHlwZSYmciE9PXRoaXMudHlwZSlyZXR1cm4gTy5lbXB0eSgpO3Q9XCJcIit0O3ZhciBlPXRoaXMuX25vZGVzLmdldCh0KTtpZih2b2lkIDA9PT1lKXRocm93IG5ldyBJKFwiR3JhcGguXCIuY29uY2F0KG8sJzogY291bGQgbm90IGZpbmQgdGhlIFwiJykuY29uY2F0KHQsJ1wiIG5vZGUgaW4gdGhlIGdyYXBoLicpKTtyZXR1cm4gZnVuY3Rpb24odCxlLG4pe2lmKFwibWl4ZWRcIiE9PXQpe2lmKFwidW5kaXJlY3RlZFwiPT09dClyZXR1cm4gX3QobnVsbCxuLG4udW5kaXJlY3RlZCk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpcmV0dXJuIF90KG51bGwsbixuW2VdKX12YXIgcj1PLmVtcHR5KCksaT1uZXcgYnQ7cmV0dXJuXCJ1bmRpcmVjdGVkXCIhPT10JiYoXCJvdXRcIiE9PWUmJihyPWV0KHIsX3QoaSxuLG4uaW4pKSksXCJpblwiIT09ZSYmKHI9ZXQocixfdChpLG4sbi5vdXQpKSkpLFwiZGlyZWN0ZWRcIiE9PXQmJihyPWV0KHIsX3QoaSxuLG4udW5kaXJlY3RlZCkpKSxyfShcIm1peGVkXCI9PT1yP3RoaXMudHlwZTpyLGksZSl9fWZ1bmN0aW9uIEV0KHQsZSxuLHIsaSl7Zm9yKHZhciBvLGEsdSxjLHMsZCxoLHA9ci5fbm9kZXMudmFsdWVzKCksZj1yLnR5cGU7ITAhPT0obz1wLm5leHQoKSkuZG9uZTspe3ZhciBsPSExO2lmKGE9by52YWx1ZSxcInVuZGlyZWN0ZWRcIiE9PWYpZm9yKHUgaW4gYz1hLm91dCl7cz1jW3VdO2Rve2lmKGQ9cy50YXJnZXQsbD0hMCxoPWkoYS5rZXksZC5rZXksYS5hdHRyaWJ1dGVzLGQuYXR0cmlidXRlcyxzLmtleSxzLmF0dHJpYnV0ZXMscy51bmRpcmVjdGVkKSx0JiZoKXJldHVybiBzO3M9cy5uZXh0fXdoaWxlKHMpfWlmKFwiZGlyZWN0ZWRcIiE9PWYpZm9yKHUgaW4gYz1hLnVuZGlyZWN0ZWQpaWYoIShlJiZhLmtleT51KSl7cz1jW3VdO2Rve2lmKChkPXMudGFyZ2V0KS5rZXkhPT11JiYoZD1zLnNvdXJjZSksbD0hMCxoPWkoYS5rZXksZC5rZXksYS5hdHRyaWJ1dGVzLGQuYXR0cmlidXRlcyxzLmtleSxzLmF0dHJpYnV0ZXMscy51bmRpcmVjdGVkKSx0JiZoKXJldHVybiBzO3M9cy5uZXh0fXdoaWxlKHMpfWlmKG4mJiFsJiYoaD1pKGEua2V5LG51bGwsYS5hdHRyaWJ1dGVzLG51bGwsbnVsbCxudWxsLG51bGwpLHQmJmgpKXJldHVybiBudWxsfX1mdW5jdGlvbiBBdCh0KXtpZighaCh0KSl0aHJvdyBuZXcgRignR3JhcGguaW1wb3J0OiBpbnZhbGlkIHNlcmlhbGl6ZWQgbm9kZS4gQSBzZXJpYWxpemVkIG5vZGUgc2hvdWxkIGJlIGEgcGxhaW4gb2JqZWN0IHdpdGggYXQgbGVhc3QgYSBcImtleVwiIHByb3BlcnR5LicpO2lmKCEoXCJrZXlcImluIHQpKXRocm93IG5ldyBGKFwiR3JhcGguaW1wb3J0OiBzZXJpYWxpemVkIG5vZGUgaXMgbWlzc2luZyBpdHMga2V5LlwiKTtpZihcImF0dHJpYnV0ZXNcImluIHQmJighaCh0LmF0dHJpYnV0ZXMpfHxudWxsPT09dC5hdHRyaWJ1dGVzKSl0aHJvdyBuZXcgRihcIkdyYXBoLmltcG9ydDogaW52YWxpZCBhdHRyaWJ1dGVzLiBBdHRyaWJ1dGVzIHNob3VsZCBiZSBhIHBsYWluIG9iamVjdCwgbnVsbCBvciBvbWl0dGVkLlwiKX1mdW5jdGlvbiBTdCh0KXtpZighaCh0KSl0aHJvdyBuZXcgRignR3JhcGguaW1wb3J0OiBpbnZhbGlkIHNlcmlhbGl6ZWQgZWRnZS4gQSBzZXJpYWxpemVkIGVkZ2Ugc2hvdWxkIGJlIGEgcGxhaW4gb2JqZWN0IHdpdGggYXQgbGVhc3QgYSBcInNvdXJjZVwiICYgXCJ0YXJnZXRcIiBwcm9wZXJ0eS4nKTtpZighKFwic291cmNlXCJpbiB0KSl0aHJvdyBuZXcgRihcIkdyYXBoLmltcG9ydDogc2VyaWFsaXplZCBlZGdlIGlzIG1pc3NpbmcgaXRzIHNvdXJjZS5cIik7aWYoIShcInRhcmdldFwiaW4gdCkpdGhyb3cgbmV3IEYoXCJHcmFwaC5pbXBvcnQ6IHNlcmlhbGl6ZWQgZWRnZSBpcyBtaXNzaW5nIGl0cyB0YXJnZXQuXCIpO2lmKFwiYXR0cmlidXRlc1wiaW4gdCYmKCFoKHQuYXR0cmlidXRlcyl8fG51bGw9PT10LmF0dHJpYnV0ZXMpKXRocm93IG5ldyBGKFwiR3JhcGguaW1wb3J0OiBpbnZhbGlkIGF0dHJpYnV0ZXMuIEF0dHJpYnV0ZXMgc2hvdWxkIGJlIGEgcGxhaW4gb2JqZWN0LCBudWxsIG9yIG9taXR0ZWQuXCIpO2lmKFwidW5kaXJlY3RlZFwiaW4gdCYmXCJib29sZWFuXCIhPXR5cGVvZiB0LnVuZGlyZWN0ZWQpdGhyb3cgbmV3IEYoXCJHcmFwaC5pbXBvcnQ6IGludmFsaWQgdW5kaXJlY3RlZG5lc3MgaW5mb3JtYXRpb24uIFVuZGlyZWN0ZWQgc2hvdWxkIGJlIGJvb2xlYW4gb3Igb21pdHRlZC5cIil9YnQucHJvdG90eXBlLndyYXA9ZnVuY3Rpb24odCl7bnVsbD09PXRoaXMuQT90aGlzLkE9dDpudWxsPT09dGhpcy5CJiYodGhpcy5CPXQpfSxidC5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsIT09dGhpcy5BJiZ0IGluIHRoaXMuQXx8bnVsbCE9PXRoaXMuQiYmdCBpbiB0aGlzLkJ9O3ZhciBEdCxMdD0oRHQ9MjU1Jk1hdGguZmxvb3IoMjU2Kk1hdGgucmFuZG9tKCkpLGZ1bmN0aW9uKCl7cmV0dXJuIER0Kyt9KSxVdD1uZXcgU2V0KFtcImRpcmVjdGVkXCIsXCJ1bmRpcmVjdGVkXCIsXCJtaXhlZFwiXSksTnQ9bmV3IFNldChbXCJkb21haW5cIixcIl9ldmVudHNcIixcIl9ldmVudHNDb3VudFwiLFwiX21heExpc3RlbmVyc1wiXSksanQ9e2FsbG93U2VsZkxvb3BzOiEwLG11bHRpOiExLHR5cGU6XCJtaXhlZFwifTtmdW5jdGlvbiBPdCh0LGUsbil7dmFyIHI9bmV3IHQuTm9kZURhdGFDbGFzcyhlLG4pO3JldHVybiB0Ll9ub2Rlcy5zZXQoZSxyKSx0LmVtaXQoXCJub2RlQWRkZWRcIix7a2V5OmUsYXR0cmlidXRlczpufSkscn1mdW5jdGlvbiBDdCh0LGUsbixyLGksbyxhLHUpe2lmKCFyJiZcInVuZGlyZWN0ZWRcIj09PXQudHlwZSl0aHJvdyBuZXcgWShcIkdyYXBoLlwiLmNvbmNhdChlLFwiOiB5b3UgY2Fubm90IGFkZCBhIGRpcmVjdGVkIGVkZ2UgdG8gYW4gdW5kaXJlY3RlZCBncmFwaC4gVXNlIHRoZSAjLmFkZEVkZ2Ugb3IgIy5hZGRVbmRpcmVjdGVkRWRnZSBpbnN0ZWFkLlwiKSk7aWYociYmXCJkaXJlY3RlZFwiPT09dC50eXBlKXRocm93IG5ldyBZKFwiR3JhcGguXCIuY29uY2F0KGUsXCI6IHlvdSBjYW5ub3QgYWRkIGFuIHVuZGlyZWN0ZWQgZWRnZSB0byBhIGRpcmVjdGVkIGdyYXBoLiBVc2UgdGhlICMuYWRkRWRnZSBvciAjLmFkZERpcmVjdGVkRWRnZSBpbnN0ZWFkLlwiKSk7aWYodSYmIWgodSkpdGhyb3cgbmV3IEYoXCJHcmFwaC5cIi5jb25jYXQoZSwnOiBpbnZhbGlkIGF0dHJpYnV0ZXMuIEV4cGVjdGluZyBhbiBvYmplY3QgYnV0IGdvdCBcIicpLmNvbmNhdCh1LCdcIicpKTtpZihvPVwiXCIrbyxhPVwiXCIrYSx1PXV8fHt9LCF0LmFsbG93U2VsZkxvb3BzJiZvPT09YSl0aHJvdyBuZXcgWShcIkdyYXBoLlwiLmNvbmNhdChlLCc6IHNvdXJjZSAmIHRhcmdldCBhcmUgdGhlIHNhbWUgKFwiJykuY29uY2F0KG8sXCJcXFwiKSwgdGh1cyBjcmVhdGluZyBhIGxvb3AgZXhwbGljaXRseSBmb3JiaWRkZW4gYnkgdGhpcyBncmFwaCAnYWxsb3dTZWxmTG9vcHMnIG9wdGlvbiBzZXQgdG8gZmFsc2UuXCIpKTt2YXIgYz10Ll9ub2Rlcy5nZXQobykscz10Ll9ub2Rlcy5nZXQoYSk7aWYoIWMpdGhyb3cgbmV3IEkoXCJHcmFwaC5cIi5jb25jYXQoZSwnOiBzb3VyY2Ugbm9kZSBcIicpLmNvbmNhdChvLCdcIiBub3QgZm91bmQuJykpO2lmKCFzKXRocm93IG5ldyBJKFwiR3JhcGguXCIuY29uY2F0KGUsJzogdGFyZ2V0IG5vZGUgXCInKS5jb25jYXQoYSwnXCIgbm90IGZvdW5kLicpKTt2YXIgZD17a2V5Om51bGwsdW5kaXJlY3RlZDpyLHNvdXJjZTpvLHRhcmdldDphLGF0dHJpYnV0ZXM6dX07aWYobilpPXQuX2VkZ2VLZXlHZW5lcmF0b3IoKTtlbHNlIGlmKGk9XCJcIitpLHQuX2VkZ2VzLmhhcyhpKSl0aHJvdyBuZXcgWShcIkdyYXBoLlwiLmNvbmNhdChlLCc6IHRoZSBcIicpLmNvbmNhdChpLCdcIiBlZGdlIGFscmVhZHkgZXhpc3RzIGluIHRoZSBncmFwaC4nKSk7aWYoIXQubXVsdGkmJihyP3ZvaWQgMCE9PWMudW5kaXJlY3RlZFthXTp2b2lkIDAhPT1jLm91dFthXSkpdGhyb3cgbmV3IFkoXCJHcmFwaC5cIi5jb25jYXQoZSwnOiBhbiBlZGdlIGxpbmtpbmcgXCInKS5jb25jYXQobywnXCIgdG8gXCInKS5jb25jYXQoYSxcIlxcXCIgYWxyZWFkeSBleGlzdHMuIElmIHlvdSByZWFsbHkgd2FudCB0byBhZGQgbXVsdGlwbGUgZWRnZXMgbGlua2luZyB0aG9zZSBub2RlcywgeW91IHNob3VsZCBjcmVhdGUgYSBtdWx0aSBncmFwaCBieSB1c2luZyB0aGUgJ211bHRpJyBvcHRpb24uXCIpKTt2YXIgcD1uZXcgSChyLGksYyxzLHUpO3QuX2VkZ2VzLnNldChpLHApO3ZhciBmPW89PT1hO3JldHVybiByPyhjLnVuZGlyZWN0ZWREZWdyZWUrKyxzLnVuZGlyZWN0ZWREZWdyZWUrKyxmJiZ0Ll91bmRpcmVjdGVkU2VsZkxvb3BDb3VudCsrKTooYy5vdXREZWdyZWUrKyxzLmluRGVncmVlKyssZiYmdC5fZGlyZWN0ZWRTZWxmTG9vcENvdW50KyspLHQubXVsdGk/cC5hdHRhY2hNdWx0aSgpOnAuYXR0YWNoKCkscj90Ll91bmRpcmVjdGVkU2l6ZSsrOnQuX2RpcmVjdGVkU2l6ZSsrLGQua2V5PWksdC5lbWl0KFwiZWRnZUFkZGVkXCIsZCksaX1mdW5jdGlvbiB6dCh0LGUsbixyLGksbyxhLHUscyl7aWYoIXImJlwidW5kaXJlY3RlZFwiPT09dC50eXBlKXRocm93IG5ldyBZKFwiR3JhcGguXCIuY29uY2F0KGUsXCI6IHlvdSBjYW5ub3QgbWVyZ2UvdXBkYXRlIGEgZGlyZWN0ZWQgZWRnZSB0byBhbiB1bmRpcmVjdGVkIGdyYXBoLiBVc2UgdGhlICMubWVyZ2VFZGdlLyMudXBkYXRlRWRnZSBvciAjLmFkZFVuZGlyZWN0ZWRFZGdlIGluc3RlYWQuXCIpKTtpZihyJiZcImRpcmVjdGVkXCI9PT10LnR5cGUpdGhyb3cgbmV3IFkoXCJHcmFwaC5cIi5jb25jYXQoZSxcIjogeW91IGNhbm5vdCBtZXJnZS91cGRhdGUgYW4gdW5kaXJlY3RlZCBlZGdlIHRvIGEgZGlyZWN0ZWQgZ3JhcGguIFVzZSB0aGUgIy5tZXJnZUVkZ2UvIy51cGRhdGVFZGdlIG9yICMuYWRkRGlyZWN0ZWRFZGdlIGluc3RlYWQuXCIpKTtpZih1KWlmKHMpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHUpdGhyb3cgbmV3IEYoXCJHcmFwaC5cIi5jb25jYXQoZSwnOiBpbnZhbGlkIHVwZGF0ZXIgZnVuY3Rpb24uIEV4cGVjdGluZyBhIGZ1bmN0aW9uIGJ1dCBnb3QgXCInKS5jb25jYXQodSwnXCInKSl9ZWxzZSBpZighaCh1KSl0aHJvdyBuZXcgRihcIkdyYXBoLlwiLmNvbmNhdChlLCc6IGludmFsaWQgYXR0cmlidXRlcy4gRXhwZWN0aW5nIGFuIG9iamVjdCBidXQgZ290IFwiJykuY29uY2F0KHUsJ1wiJykpO3ZhciBkO2lmKG89XCJcIitvLGE9XCJcIithLHMmJihkPXUsdT12b2lkIDApLCF0LmFsbG93U2VsZkxvb3BzJiZvPT09YSl0aHJvdyBuZXcgWShcIkdyYXBoLlwiLmNvbmNhdChlLCc6IHNvdXJjZSAmIHRhcmdldCBhcmUgdGhlIHNhbWUgKFwiJykuY29uY2F0KG8sXCJcXFwiKSwgdGh1cyBjcmVhdGluZyBhIGxvb3AgZXhwbGljaXRseSBmb3JiaWRkZW4gYnkgdGhpcyBncmFwaCAnYWxsb3dTZWxmTG9vcHMnIG9wdGlvbiBzZXQgdG8gZmFsc2UuXCIpKTt2YXIgcCxmLGw9dC5fbm9kZXMuZ2V0KG8pLGc9dC5fbm9kZXMuZ2V0KGEpO2lmKCFuJiYocD10Ll9lZGdlcy5nZXQoaSkpKXtpZighKHAuc291cmNlLmtleT09PW8mJnAudGFyZ2V0LmtleT09PWF8fHImJnAuc291cmNlLmtleT09PWEmJnAudGFyZ2V0LmtleT09PW8pKXRocm93IG5ldyBZKFwiR3JhcGguXCIuY29uY2F0KGUsJzogaW5jb25zaXN0ZW5jeSBkZXRlY3RlZCB3aGVuIGF0dGVtcHRpbmcgdG8gbWVyZ2UgdGhlIFwiJykuY29uY2F0KGksJ1wiIGVkZ2Ugd2l0aCBcIicpLmNvbmNhdChvLCdcIiBzb3VyY2UgJiBcIicpLmNvbmNhdChhLCdcIiB0YXJnZXQgdnMuIChcIicpLmNvbmNhdChwLnNvdXJjZS5rZXksJ1wiLCBcIicpLmNvbmNhdChwLnRhcmdldC5rZXksJ1wiKS4nKSk7Zj1wfWlmKGZ8fHQubXVsdGl8fCFsfHwoZj1yP2wudW5kaXJlY3RlZFthXTpsLm91dFthXSksZil7dmFyIHk9W2Yua2V5LCExLCExLCExXTtpZihzPyFkOiF1KXJldHVybiB5O2lmKHMpe3ZhciB3PWYuYXR0cmlidXRlcztmLmF0dHJpYnV0ZXM9ZCh3KSx0LmVtaXQoXCJlZGdlQXR0cmlidXRlc1VwZGF0ZWRcIix7dHlwZTpcInJlcGxhY2VcIixrZXk6Zi5rZXksYXR0cmlidXRlczpmLmF0dHJpYnV0ZXN9KX1lbHNlIGMoZi5hdHRyaWJ1dGVzLHUpLHQuZW1pdChcImVkZ2VBdHRyaWJ1dGVzVXBkYXRlZFwiLHt0eXBlOlwibWVyZ2VcIixrZXk6Zi5rZXksYXR0cmlidXRlczpmLmF0dHJpYnV0ZXMsZGF0YTp1fSk7cmV0dXJuIHl9dT11fHx7fSxzJiZkJiYodT1kKHUpKTt2YXIgdj17a2V5Om51bGwsdW5kaXJlY3RlZDpyLHNvdXJjZTpvLHRhcmdldDphLGF0dHJpYnV0ZXM6dX07aWYobilpPXQuX2VkZ2VLZXlHZW5lcmF0b3IoKTtlbHNlIGlmKGk9XCJcIitpLHQuX2VkZ2VzLmhhcyhpKSl0aHJvdyBuZXcgWShcIkdyYXBoLlwiLmNvbmNhdChlLCc6IHRoZSBcIicpLmNvbmNhdChpLCdcIiBlZGdlIGFscmVhZHkgZXhpc3RzIGluIHRoZSBncmFwaC4nKSk7dmFyIGI9ITEsbT0hMTtsfHwobD1PdCh0LG8se30pLGI9ITAsbz09PWEmJihnPWwsbT0hMCkpLGd8fChnPU90KHQsYSx7fSksbT0hMCkscD1uZXcgSChyLGksbCxnLHUpLHQuX2VkZ2VzLnNldChpLHApO3ZhciBrPW89PT1hO3JldHVybiByPyhsLnVuZGlyZWN0ZWREZWdyZWUrKyxnLnVuZGlyZWN0ZWREZWdyZWUrKyxrJiZ0Ll91bmRpcmVjdGVkU2VsZkxvb3BDb3VudCsrKToobC5vdXREZWdyZWUrKyxnLmluRGVncmVlKyssayYmdC5fZGlyZWN0ZWRTZWxmTG9vcENvdW50KyspLHQubXVsdGk/cC5hdHRhY2hNdWx0aSgpOnAuYXR0YWNoKCkscj90Ll91bmRpcmVjdGVkU2l6ZSsrOnQuX2RpcmVjdGVkU2l6ZSsrLHYua2V5PWksdC5lbWl0KFwiZWRnZUFkZGVkXCIsdiksW2ksITAsYixtXX1mdW5jdGlvbiBNdCh0LGUpe3QuX2VkZ2VzLmRlbGV0ZShlLmtleSk7dmFyIG49ZS5zb3VyY2Uscj1lLnRhcmdldCxpPWUuYXR0cmlidXRlcyxvPWUudW5kaXJlY3RlZCxhPW49PT1yO28/KG4udW5kaXJlY3RlZERlZ3JlZS0tLHIudW5kaXJlY3RlZERlZ3JlZS0tLGEmJnQuX3VuZGlyZWN0ZWRTZWxmTG9vcENvdW50LS0pOihuLm91dERlZ3JlZS0tLHIuaW5EZWdyZWUtLSxhJiZ0Ll9kaXJlY3RlZFNlbGZMb29wQ291bnQtLSksdC5tdWx0aT9lLmRldGFjaE11bHRpKCk6ZS5kZXRhY2goKSxvP3QuX3VuZGlyZWN0ZWRTaXplLS06dC5fZGlyZWN0ZWRTaXplLS0sdC5lbWl0KFwiZWRnZURyb3BwZWRcIix7a2V5OmUua2V5LGF0dHJpYnV0ZXM6aSxzb3VyY2U6bi5rZXksdGFyZ2V0OnIua2V5LHVuZGlyZWN0ZWQ6b30pfXZhciBXdD1mdW5jdGlvbihuKXtmdW5jdGlvbiByKHQpe3ZhciBlO2lmKGU9bi5jYWxsKHRoaXMpfHx0aGlzLFwiYm9vbGVhblwiIT10eXBlb2YodD1jKHt9LGp0LHQpKS5tdWx0aSl0aHJvdyBuZXcgRihcIkdyYXBoLmNvbnN0cnVjdG9yOiBpbnZhbGlkICdtdWx0aScgb3B0aW9uLiBFeHBlY3RpbmcgYSBib29sZWFuIGJ1dCBnb3QgXFxcIlwiLmNvbmNhdCh0Lm11bHRpLCdcIi4nKSk7aWYoIVV0Lmhhcyh0LnR5cGUpKXRocm93IG5ldyBGKCdHcmFwaC5jb25zdHJ1Y3RvcjogaW52YWxpZCBcXCd0eXBlXFwnIG9wdGlvbi4gU2hvdWxkIGJlIG9uZSBvZiBcIm1peGVkXCIsIFwiZGlyZWN0ZWRcIiBvciBcInVuZGlyZWN0ZWRcIiBidXQgZ290IFwiJy5jb25jYXQodC50eXBlLCdcIi4nKSk7aWYoXCJib29sZWFuXCIhPXR5cGVvZiB0LmFsbG93U2VsZkxvb3BzKXRocm93IG5ldyBGKFwiR3JhcGguY29uc3RydWN0b3I6IGludmFsaWQgJ2FsbG93U2VsZkxvb3BzJyBvcHRpb24uIEV4cGVjdGluZyBhIGJvb2xlYW4gYnV0IGdvdCBcXFwiXCIuY29uY2F0KHQuYWxsb3dTZWxmTG9vcHMsJ1wiLicpKTt2YXIgcj1cIm1peGVkXCI9PT10LnR5cGU/cTpcImRpcmVjdGVkXCI9PT10LnR5cGU/SjpWO2YodShlKSxcIk5vZGVEYXRhQ2xhc3NcIixyKTt2YXIgaT1cImdlaWRfXCIrTHQoKStcIl9cIixvPTA7cmV0dXJuIGYodShlKSxcIl9hdHRyaWJ1dGVzXCIse30pLGYodShlKSxcIl9ub2Rlc1wiLG5ldyBNYXApLGYodShlKSxcIl9lZGdlc1wiLG5ldyBNYXApLGYodShlKSxcIl9kaXJlY3RlZFNpemVcIiwwKSxmKHUoZSksXCJfdW5kaXJlY3RlZFNpemVcIiwwKSxmKHUoZSksXCJfZGlyZWN0ZWRTZWxmTG9vcENvdW50XCIsMCksZih1KGUpLFwiX3VuZGlyZWN0ZWRTZWxmTG9vcENvdW50XCIsMCksZih1KGUpLFwiX2VkZ2VLZXlHZW5lcmF0b3JcIiwoZnVuY3Rpb24oKXt2YXIgdDtkb3t0PWkrbysrfXdoaWxlKGUuX2VkZ2VzLmhhcyh0KSk7cmV0dXJuIHR9KSksZih1KGUpLFwiX29wdGlvbnNcIix0KSxOdC5mb3JFYWNoKChmdW5jdGlvbih0KXtyZXR1cm4gZih1KGUpLHQsZVt0XSl9KSksbCh1KGUpLFwib3JkZXJcIiwoZnVuY3Rpb24oKXtyZXR1cm4gZS5fbm9kZXMuc2l6ZX0pKSxsKHUoZSksXCJzaXplXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGUuX2VkZ2VzLnNpemV9KSksbCh1KGUpLFwiZGlyZWN0ZWRTaXplXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGUuX2RpcmVjdGVkU2l6ZX0pKSxsKHUoZSksXCJ1bmRpcmVjdGVkU2l6ZVwiLChmdW5jdGlvbigpe3JldHVybiBlLl91bmRpcmVjdGVkU2l6ZX0pKSxsKHUoZSksXCJzZWxmTG9vcENvdW50XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGUuX2RpcmVjdGVkU2VsZkxvb3BDb3VudCtlLl91bmRpcmVjdGVkU2VsZkxvb3BDb3VudH0pKSxsKHUoZSksXCJkaXJlY3RlZFNlbGZMb29wQ291bnRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gZS5fZGlyZWN0ZWRTZWxmTG9vcENvdW50fSkpLGwodShlKSxcInVuZGlyZWN0ZWRTZWxmTG9vcENvdW50XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGUuX3VuZGlyZWN0ZWRTZWxmTG9vcENvdW50fSkpLGwodShlKSxcIm11bHRpXCIsZS5fb3B0aW9ucy5tdWx0aSksbCh1KGUpLFwidHlwZVwiLGUuX29wdGlvbnMudHlwZSksbCh1KGUpLFwiYWxsb3dTZWxmTG9vcHNcIixlLl9vcHRpb25zLmFsbG93U2VsZkxvb3BzKSxsKHUoZSksXCJpbXBsZW1lbnRhdGlvblwiLChmdW5jdGlvbigpe3JldHVyblwiZ3JhcGhvbG9neVwifSkpLGV9ZShyLG4pO3ZhciBpPXIucHJvdG90eXBlO3JldHVybiBpLl9yZXNldEluc3RhbmNlQ291bnRlcnM9ZnVuY3Rpb24oKXt0aGlzLl9kaXJlY3RlZFNpemU9MCx0aGlzLl91bmRpcmVjdGVkU2l6ZT0wLHRoaXMuX2RpcmVjdGVkU2VsZkxvb3BDb3VudD0wLHRoaXMuX3VuZGlyZWN0ZWRTZWxmTG9vcENvdW50PTB9LGkuaGFzTm9kZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fbm9kZXMuaGFzKFwiXCIrdCl9LGkuaGFzRGlyZWN0ZWRFZGdlPWZ1bmN0aW9uKHQsZSl7aWYoXCJ1bmRpcmVjdGVkXCI9PT10aGlzLnR5cGUpcmV0dXJuITE7aWYoMT09PWFyZ3VtZW50cy5sZW5ndGgpe3ZhciBuPVwiXCIrdCxyPXRoaXMuX2VkZ2VzLmdldChuKTtyZXR1cm4hIXImJiFyLnVuZGlyZWN0ZWR9aWYoMj09PWFyZ3VtZW50cy5sZW5ndGgpe3Q9XCJcIit0LGU9XCJcIitlO3ZhciBpPXRoaXMuX25vZGVzLmdldCh0KTtpZighaSlyZXR1cm4hMTt2YXIgbz1pLm91dFtlXTtyZXR1cm4hIW8mJighdGhpcy5tdWx0aXx8ISFvLnNpemUpfXRocm93IG5ldyBGKFwiR3JhcGguaGFzRGlyZWN0ZWRFZGdlOiBpbnZhbGlkIGFyaXR5IChcIi5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCxcIiwgaW5zdGVhZCBvZiAxIG9yIDIpLiBZb3UgY2FuIGVpdGhlciBhc2sgZm9yIGFuIGVkZ2UgaWQgb3IgZm9yIHRoZSBleGlzdGVuY2Ugb2YgYW4gZWRnZSBiZXR3ZWVuIGEgc291cmNlICYgYSB0YXJnZXQuXCIpKX0saS5oYXNVbmRpcmVjdGVkRWRnZT1mdW5jdGlvbih0LGUpe2lmKFwiZGlyZWN0ZWRcIj09PXRoaXMudHlwZSlyZXR1cm4hMTtpZigxPT09YXJndW1lbnRzLmxlbmd0aCl7dmFyIG49XCJcIit0LHI9dGhpcy5fZWRnZXMuZ2V0KG4pO3JldHVybiEhciYmci51bmRpcmVjdGVkfWlmKDI9PT1hcmd1bWVudHMubGVuZ3RoKXt0PVwiXCIrdCxlPVwiXCIrZTt2YXIgaT10aGlzLl9ub2Rlcy5nZXQodCk7aWYoIWkpcmV0dXJuITE7dmFyIG89aS51bmRpcmVjdGVkW2VdO3JldHVybiEhbyYmKCF0aGlzLm11bHRpfHwhIW8uc2l6ZSl9dGhyb3cgbmV3IEYoXCJHcmFwaC5oYXNEaXJlY3RlZEVkZ2U6IGludmFsaWQgYXJpdHkgKFwiLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoLFwiLCBpbnN0ZWFkIG9mIDEgb3IgMikuIFlvdSBjYW4gZWl0aGVyIGFzayBmb3IgYW4gZWRnZSBpZCBvciBmb3IgdGhlIGV4aXN0ZW5jZSBvZiBhbiBlZGdlIGJldHdlZW4gYSBzb3VyY2UgJiBhIHRhcmdldC5cIikpfSxpLmhhc0VkZ2U9ZnVuY3Rpb24odCxlKXtpZigxPT09YXJndW1lbnRzLmxlbmd0aCl7dmFyIG49XCJcIit0O3JldHVybiB0aGlzLl9lZGdlcy5oYXMobil9aWYoMj09PWFyZ3VtZW50cy5sZW5ndGgpe3Q9XCJcIit0LGU9XCJcIitlO3ZhciByPXRoaXMuX25vZGVzLmdldCh0KTtpZighcilyZXR1cm4hMTt2YXIgaT12b2lkIDAhPT1yLm91dCYmci5vdXRbZV07cmV0dXJuIGl8fChpPXZvaWQgMCE9PXIudW5kaXJlY3RlZCYmci51bmRpcmVjdGVkW2VdKSwhIWkmJighdGhpcy5tdWx0aXx8ISFpLnNpemUpfXRocm93IG5ldyBGKFwiR3JhcGguaGFzRWRnZTogaW52YWxpZCBhcml0eSAoXCIuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGgsXCIsIGluc3RlYWQgb2YgMSBvciAyKS4gWW91IGNhbiBlaXRoZXIgYXNrIGZvciBhbiBlZGdlIGlkIG9yIGZvciB0aGUgZXhpc3RlbmNlIG9mIGFuIGVkZ2UgYmV0d2VlbiBhIHNvdXJjZSAmIGEgdGFyZ2V0LlwiKSl9LGkuZGlyZWN0ZWRFZGdlPWZ1bmN0aW9uKHQsZSl7aWYoXCJ1bmRpcmVjdGVkXCIhPT10aGlzLnR5cGUpe2lmKHQ9XCJcIit0LGU9XCJcIitlLHRoaXMubXVsdGkpdGhyb3cgbmV3IFkoXCJHcmFwaC5kaXJlY3RlZEVkZ2U6IHRoaXMgbWV0aG9kIGlzIGlycmVsZXZhbnQgd2l0aCBtdWx0aWdyYXBocyBzaW5jZSB0aGVyZSBtaWdodCBiZSBtdWx0aXBsZSBlZGdlcyBiZXR3ZWVuIHNvdXJjZSAmIHRhcmdldC4gU2VlICMuZGlyZWN0ZWRFZGdlcyBpbnN0ZWFkLlwiKTt2YXIgbj10aGlzLl9ub2Rlcy5nZXQodCk7aWYoIW4pdGhyb3cgbmV3IEkoJ0dyYXBoLmRpcmVjdGVkRWRnZTogY291bGQgbm90IGZpbmQgdGhlIFwiJy5jb25jYXQodCwnXCIgc291cmNlIG5vZGUgaW4gdGhlIGdyYXBoLicpKTtpZighdGhpcy5fbm9kZXMuaGFzKGUpKXRocm93IG5ldyBJKCdHcmFwaC5kaXJlY3RlZEVkZ2U6IGNvdWxkIG5vdCBmaW5kIHRoZSBcIicuY29uY2F0KGUsJ1wiIHRhcmdldCBub2RlIGluIHRoZSBncmFwaC4nKSk7dmFyIHI9bi5vdXQmJm4ub3V0W2VdfHx2b2lkIDA7cmV0dXJuIHI/ci5rZXk6dm9pZCAwfX0saS51bmRpcmVjdGVkRWRnZT1mdW5jdGlvbih0LGUpe2lmKFwiZGlyZWN0ZWRcIiE9PXRoaXMudHlwZSl7aWYodD1cIlwiK3QsZT1cIlwiK2UsdGhpcy5tdWx0aSl0aHJvdyBuZXcgWShcIkdyYXBoLnVuZGlyZWN0ZWRFZGdlOiB0aGlzIG1ldGhvZCBpcyBpcnJlbGV2YW50IHdpdGggbXVsdGlncmFwaHMgc2luY2UgdGhlcmUgbWlnaHQgYmUgbXVsdGlwbGUgZWRnZXMgYmV0d2VlbiBzb3VyY2UgJiB0YXJnZXQuIFNlZSAjLnVuZGlyZWN0ZWRFZGdlcyBpbnN0ZWFkLlwiKTt2YXIgbj10aGlzLl9ub2Rlcy5nZXQodCk7aWYoIW4pdGhyb3cgbmV3IEkoJ0dyYXBoLnVuZGlyZWN0ZWRFZGdlOiBjb3VsZCBub3QgZmluZCB0aGUgXCInLmNvbmNhdCh0LCdcIiBzb3VyY2Ugbm9kZSBpbiB0aGUgZ3JhcGguJykpO2lmKCF0aGlzLl9ub2Rlcy5oYXMoZSkpdGhyb3cgbmV3IEkoJ0dyYXBoLnVuZGlyZWN0ZWRFZGdlOiBjb3VsZCBub3QgZmluZCB0aGUgXCInLmNvbmNhdChlLCdcIiB0YXJnZXQgbm9kZSBpbiB0aGUgZ3JhcGguJykpO3ZhciByPW4udW5kaXJlY3RlZCYmbi51bmRpcmVjdGVkW2VdfHx2b2lkIDA7cmV0dXJuIHI/ci5rZXk6dm9pZCAwfX0saS5lZGdlPWZ1bmN0aW9uKHQsZSl7aWYodGhpcy5tdWx0aSl0aHJvdyBuZXcgWShcIkdyYXBoLmVkZ2U6IHRoaXMgbWV0aG9kIGlzIGlycmVsZXZhbnQgd2l0aCBtdWx0aWdyYXBocyBzaW5jZSB0aGVyZSBtaWdodCBiZSBtdWx0aXBsZSBlZGdlcyBiZXR3ZWVuIHNvdXJjZSAmIHRhcmdldC4gU2VlICMuZWRnZXMgaW5zdGVhZC5cIik7dD1cIlwiK3QsZT1cIlwiK2U7dmFyIG49dGhpcy5fbm9kZXMuZ2V0KHQpO2lmKCFuKXRocm93IG5ldyBJKCdHcmFwaC5lZGdlOiBjb3VsZCBub3QgZmluZCB0aGUgXCInLmNvbmNhdCh0LCdcIiBzb3VyY2Ugbm9kZSBpbiB0aGUgZ3JhcGguJykpO2lmKCF0aGlzLl9ub2Rlcy5oYXMoZSkpdGhyb3cgbmV3IEkoJ0dyYXBoLmVkZ2U6IGNvdWxkIG5vdCBmaW5kIHRoZSBcIicuY29uY2F0KGUsJ1wiIHRhcmdldCBub2RlIGluIHRoZSBncmFwaC4nKSk7dmFyIHI9bi5vdXQmJm4ub3V0W2VdfHxuLnVuZGlyZWN0ZWQmJm4udW5kaXJlY3RlZFtlXXx8dm9pZCAwO2lmKHIpcmV0dXJuIHIua2V5fSxpLmFyZURpcmVjdGVkTmVpZ2hib3JzPWZ1bmN0aW9uKHQsZSl7dD1cIlwiK3QsZT1cIlwiK2U7dmFyIG49dGhpcy5fbm9kZXMuZ2V0KHQpO2lmKCFuKXRocm93IG5ldyBJKCdHcmFwaC5hcmVEaXJlY3RlZE5laWdoYm9yczogY291bGQgbm90IGZpbmQgdGhlIFwiJy5jb25jYXQodCwnXCIgbm9kZSBpbiB0aGUgZ3JhcGguJykpO3JldHVyblwidW5kaXJlY3RlZFwiIT09dGhpcy50eXBlJiYoZSBpbiBuLmlufHxlIGluIG4ub3V0KX0saS5hcmVPdXROZWlnaGJvcnM9ZnVuY3Rpb24odCxlKXt0PVwiXCIrdCxlPVwiXCIrZTt2YXIgbj10aGlzLl9ub2Rlcy5nZXQodCk7aWYoIW4pdGhyb3cgbmV3IEkoJ0dyYXBoLmFyZU91dE5laWdoYm9yczogY291bGQgbm90IGZpbmQgdGhlIFwiJy5jb25jYXQodCwnXCIgbm9kZSBpbiB0aGUgZ3JhcGguJykpO3JldHVyblwidW5kaXJlY3RlZFwiIT09dGhpcy50eXBlJiZlIGluIG4ub3V0fSxpLmFyZUluTmVpZ2hib3JzPWZ1bmN0aW9uKHQsZSl7dD1cIlwiK3QsZT1cIlwiK2U7dmFyIG49dGhpcy5fbm9kZXMuZ2V0KHQpO2lmKCFuKXRocm93IG5ldyBJKCdHcmFwaC5hcmVJbk5laWdoYm9yczogY291bGQgbm90IGZpbmQgdGhlIFwiJy5jb25jYXQodCwnXCIgbm9kZSBpbiB0aGUgZ3JhcGguJykpO3JldHVyblwidW5kaXJlY3RlZFwiIT09dGhpcy50eXBlJiZlIGluIG4uaW59LGkuYXJlVW5kaXJlY3RlZE5laWdoYm9ycz1mdW5jdGlvbih0LGUpe3Q9XCJcIit0LGU9XCJcIitlO3ZhciBuPXRoaXMuX25vZGVzLmdldCh0KTtpZighbil0aHJvdyBuZXcgSSgnR3JhcGguYXJlVW5kaXJlY3RlZE5laWdoYm9yczogY291bGQgbm90IGZpbmQgdGhlIFwiJy5jb25jYXQodCwnXCIgbm9kZSBpbiB0aGUgZ3JhcGguJykpO3JldHVyblwiZGlyZWN0ZWRcIiE9PXRoaXMudHlwZSYmZSBpbiBuLnVuZGlyZWN0ZWR9LGkuYXJlTmVpZ2hib3JzPWZ1bmN0aW9uKHQsZSl7dD1cIlwiK3QsZT1cIlwiK2U7dmFyIG49dGhpcy5fbm9kZXMuZ2V0KHQpO2lmKCFuKXRocm93IG5ldyBJKCdHcmFwaC5hcmVOZWlnaGJvcnM6IGNvdWxkIG5vdCBmaW5kIHRoZSBcIicuY29uY2F0KHQsJ1wiIG5vZGUgaW4gdGhlIGdyYXBoLicpKTtyZXR1cm5cInVuZGlyZWN0ZWRcIiE9PXRoaXMudHlwZSYmKGUgaW4gbi5pbnx8ZSBpbiBuLm91dCl8fFwiZGlyZWN0ZWRcIiE9PXRoaXMudHlwZSYmZSBpbiBuLnVuZGlyZWN0ZWR9LGkuYXJlSW5ib3VuZE5laWdoYm9ycz1mdW5jdGlvbih0LGUpe3Q9XCJcIit0LGU9XCJcIitlO3ZhciBuPXRoaXMuX25vZGVzLmdldCh0KTtpZighbil0aHJvdyBuZXcgSSgnR3JhcGguYXJlSW5ib3VuZE5laWdoYm9yczogY291bGQgbm90IGZpbmQgdGhlIFwiJy5jb25jYXQodCwnXCIgbm9kZSBpbiB0aGUgZ3JhcGguJykpO3JldHVyblwidW5kaXJlY3RlZFwiIT09dGhpcy50eXBlJiZlIGluIG4uaW58fFwiZGlyZWN0ZWRcIiE9PXRoaXMudHlwZSYmZSBpbiBuLnVuZGlyZWN0ZWR9LGkuYXJlT3V0Ym91bmROZWlnaGJvcnM9ZnVuY3Rpb24odCxlKXt0PVwiXCIrdCxlPVwiXCIrZTt2YXIgbj10aGlzLl9ub2Rlcy5nZXQodCk7aWYoIW4pdGhyb3cgbmV3IEkoJ0dyYXBoLmFyZU91dGJvdW5kTmVpZ2hib3JzOiBjb3VsZCBub3QgZmluZCB0aGUgXCInLmNvbmNhdCh0LCdcIiBub2RlIGluIHRoZSBncmFwaC4nKSk7cmV0dXJuXCJ1bmRpcmVjdGVkXCIhPT10aGlzLnR5cGUmJmUgaW4gbi5vdXR8fFwiZGlyZWN0ZWRcIiE9PXRoaXMudHlwZSYmZSBpbiBuLnVuZGlyZWN0ZWR9LGkuaW5EZWdyZWU9ZnVuY3Rpb24odCl7dD1cIlwiK3Q7dmFyIGU9dGhpcy5fbm9kZXMuZ2V0KHQpO2lmKCFlKXRocm93IG5ldyBJKCdHcmFwaC5pbkRlZ3JlZTogY291bGQgbm90IGZpbmQgdGhlIFwiJy5jb25jYXQodCwnXCIgbm9kZSBpbiB0aGUgZ3JhcGguJykpO3JldHVyblwidW5kaXJlY3RlZFwiPT09dGhpcy50eXBlPzA6ZS5pbkRlZ3JlZX0saS5vdXREZWdyZWU9ZnVuY3Rpb24odCl7dD1cIlwiK3Q7dmFyIGU9dGhpcy5fbm9kZXMuZ2V0KHQpO2lmKCFlKXRocm93IG5ldyBJKCdHcmFwaC5vdXREZWdyZWU6IGNvdWxkIG5vdCBmaW5kIHRoZSBcIicuY29uY2F0KHQsJ1wiIG5vZGUgaW4gdGhlIGdyYXBoLicpKTtyZXR1cm5cInVuZGlyZWN0ZWRcIj09PXRoaXMudHlwZT8wOmUub3V0RGVncmVlfSxpLmRpcmVjdGVkRGVncmVlPWZ1bmN0aW9uKHQpe3Q9XCJcIit0O3ZhciBlPXRoaXMuX25vZGVzLmdldCh0KTtpZighZSl0aHJvdyBuZXcgSSgnR3JhcGguZGlyZWN0ZWREZWdyZWU6IGNvdWxkIG5vdCBmaW5kIHRoZSBcIicuY29uY2F0KHQsJ1wiIG5vZGUgaW4gdGhlIGdyYXBoLicpKTtyZXR1cm5cInVuZGlyZWN0ZWRcIj09PXRoaXMudHlwZT8wOmUuaW5EZWdyZWUrZS5vdXREZWdyZWV9LGkudW5kaXJlY3RlZERlZ3JlZT1mdW5jdGlvbih0KXt0PVwiXCIrdDt2YXIgZT10aGlzLl9ub2Rlcy5nZXQodCk7aWYoIWUpdGhyb3cgbmV3IEkoJ0dyYXBoLnVuZGlyZWN0ZWREZWdyZWU6IGNvdWxkIG5vdCBmaW5kIHRoZSBcIicuY29uY2F0KHQsJ1wiIG5vZGUgaW4gdGhlIGdyYXBoLicpKTtyZXR1cm5cImRpcmVjdGVkXCI9PT10aGlzLnR5cGU/MDplLnVuZGlyZWN0ZWREZWdyZWV9LGkuaW5ib3VuZERlZ3JlZT1mdW5jdGlvbih0KXt0PVwiXCIrdDt2YXIgZT10aGlzLl9ub2Rlcy5nZXQodCk7aWYoIWUpdGhyb3cgbmV3IEkoJ0dyYXBoLmluYm91bmREZWdyZWU6IGNvdWxkIG5vdCBmaW5kIHRoZSBcIicuY29uY2F0KHQsJ1wiIG5vZGUgaW4gdGhlIGdyYXBoLicpKTt2YXIgbj0wO3JldHVyblwiZGlyZWN0ZWRcIiE9PXRoaXMudHlwZSYmKG4rPWUudW5kaXJlY3RlZERlZ3JlZSksXCJ1bmRpcmVjdGVkXCIhPT10aGlzLnR5cGUmJihuKz1lLmluRGVncmVlKSxufSxpLm91dGJvdW5kRGVncmVlPWZ1bmN0aW9uKHQpe3Q9XCJcIit0O3ZhciBlPXRoaXMuX25vZGVzLmdldCh0KTtpZighZSl0aHJvdyBuZXcgSSgnR3JhcGgub3V0Ym91bmREZWdyZWU6IGNvdWxkIG5vdCBmaW5kIHRoZSBcIicuY29uY2F0KHQsJ1wiIG5vZGUgaW4gdGhlIGdyYXBoLicpKTt2YXIgbj0wO3JldHVyblwiZGlyZWN0ZWRcIiE9PXRoaXMudHlwZSYmKG4rPWUudW5kaXJlY3RlZERlZ3JlZSksXCJ1bmRpcmVjdGVkXCIhPT10aGlzLnR5cGUmJihuKz1lLm91dERlZ3JlZSksbn0saS5kZWdyZWU9ZnVuY3Rpb24odCl7dD1cIlwiK3Q7dmFyIGU9dGhpcy5fbm9kZXMuZ2V0KHQpO2lmKCFlKXRocm93IG5ldyBJKCdHcmFwaC5kZWdyZWU6IGNvdWxkIG5vdCBmaW5kIHRoZSBcIicuY29uY2F0KHQsJ1wiIG5vZGUgaW4gdGhlIGdyYXBoLicpKTt2YXIgbj0wO3JldHVyblwiZGlyZWN0ZWRcIiE9PXRoaXMudHlwZSYmKG4rPWUudW5kaXJlY3RlZERlZ3JlZSksXCJ1bmRpcmVjdGVkXCIhPT10aGlzLnR5cGUmJihuKz1lLmluRGVncmVlK2Uub3V0RGVncmVlKSxufSxpLmluRGVncmVlV2l0aG91dFNlbGZMb29wcz1mdW5jdGlvbih0KXt0PVwiXCIrdDt2YXIgZT10aGlzLl9ub2Rlcy5nZXQodCk7aWYoIWUpdGhyb3cgbmV3IEkoJ0dyYXBoLmluRGVncmVlV2l0aG91dFNlbGZMb29wczogY291bGQgbm90IGZpbmQgdGhlIFwiJy5jb25jYXQodCwnXCIgbm9kZSBpbiB0aGUgZ3JhcGguJykpO2lmKFwidW5kaXJlY3RlZFwiPT09dGhpcy50eXBlKXJldHVybiAwO3ZhciBuPWUuaW5bdF0scj1uP3RoaXMubXVsdGk/bi5zaXplOjE6MDtyZXR1cm4gZS5pbkRlZ3JlZS1yfSxpLm91dERlZ3JlZVdpdGhvdXRTZWxmTG9vcHM9ZnVuY3Rpb24odCl7dD1cIlwiK3Q7dmFyIGU9dGhpcy5fbm9kZXMuZ2V0KHQpO2lmKCFlKXRocm93IG5ldyBJKCdHcmFwaC5vdXREZWdyZWVXaXRob3V0U2VsZkxvb3BzOiBjb3VsZCBub3QgZmluZCB0aGUgXCInLmNvbmNhdCh0LCdcIiBub2RlIGluIHRoZSBncmFwaC4nKSk7aWYoXCJ1bmRpcmVjdGVkXCI9PT10aGlzLnR5cGUpcmV0dXJuIDA7dmFyIG49ZS5vdXRbdF0scj1uP3RoaXMubXVsdGk/bi5zaXplOjE6MDtyZXR1cm4gZS5vdXREZWdyZWUtcn0saS5kaXJlY3RlZERlZ3JlZVdpdGhvdXRTZWxmTG9vcHM9ZnVuY3Rpb24odCl7dD1cIlwiK3Q7dmFyIGU9dGhpcy5fbm9kZXMuZ2V0KHQpO2lmKCFlKXRocm93IG5ldyBJKCdHcmFwaC5kaXJlY3RlZERlZ3JlZVdpdGhvdXRTZWxmTG9vcHM6IGNvdWxkIG5vdCBmaW5kIHRoZSBcIicuY29uY2F0KHQsJ1wiIG5vZGUgaW4gdGhlIGdyYXBoLicpKTtpZihcInVuZGlyZWN0ZWRcIj09PXRoaXMudHlwZSlyZXR1cm4gMDt2YXIgbj1lLm91dFt0XSxyPW4/dGhpcy5tdWx0aT9uLnNpemU6MTowO3JldHVybiBlLmluRGVncmVlK2Uub3V0RGVncmVlLTIqcn0saS51bmRpcmVjdGVkRGVncmVlV2l0aG91dFNlbGZMb29wcz1mdW5jdGlvbih0KXt0PVwiXCIrdDt2YXIgZT10aGlzLl9ub2Rlcy5nZXQodCk7aWYoIWUpdGhyb3cgbmV3IEkoJ0dyYXBoLnVuZGlyZWN0ZWREZWdyZWVXaXRob3V0U2VsZkxvb3BzOiBjb3VsZCBub3QgZmluZCB0aGUgXCInLmNvbmNhdCh0LCdcIiBub2RlIGluIHRoZSBncmFwaC4nKSk7aWYoXCJkaXJlY3RlZFwiPT09dGhpcy50eXBlKXJldHVybiAwO3ZhciBuPWUudW5kaXJlY3RlZFt0XSxyPW4/dGhpcy5tdWx0aT9uLnNpemU6MTowO3JldHVybiBlLnVuZGlyZWN0ZWREZWdyZWUtMipyfSxpLmluYm91bmREZWdyZWVXaXRob3V0U2VsZkxvb3BzPWZ1bmN0aW9uKHQpe3Q9XCJcIit0O3ZhciBlLG49dGhpcy5fbm9kZXMuZ2V0KHQpO2lmKCFuKXRocm93IG5ldyBJKCdHcmFwaC5pbmJvdW5kRGVncmVlV2l0aG91dFNlbGZMb29wczogY291bGQgbm90IGZpbmQgdGhlIFwiJy5jb25jYXQodCwnXCIgbm9kZSBpbiB0aGUgZ3JhcGguJykpO3ZhciByPTAsaT0wO3JldHVyblwiZGlyZWN0ZWRcIiE9PXRoaXMudHlwZSYmKHIrPW4udW5kaXJlY3RlZERlZ3JlZSxpKz0yKigoZT1uLnVuZGlyZWN0ZWRbdF0pP3RoaXMubXVsdGk/ZS5zaXplOjE6MCkpLFwidW5kaXJlY3RlZFwiIT09dGhpcy50eXBlJiYocis9bi5pbkRlZ3JlZSxpKz0oZT1uLm91dFt0XSk/dGhpcy5tdWx0aT9lLnNpemU6MTowKSxyLWl9LGkub3V0Ym91bmREZWdyZWVXaXRob3V0U2VsZkxvb3BzPWZ1bmN0aW9uKHQpe3Q9XCJcIit0O3ZhciBlLG49dGhpcy5fbm9kZXMuZ2V0KHQpO2lmKCFuKXRocm93IG5ldyBJKCdHcmFwaC5vdXRib3VuZERlZ3JlZVdpdGhvdXRTZWxmTG9vcHM6IGNvdWxkIG5vdCBmaW5kIHRoZSBcIicuY29uY2F0KHQsJ1wiIG5vZGUgaW4gdGhlIGdyYXBoLicpKTt2YXIgcj0wLGk9MDtyZXR1cm5cImRpcmVjdGVkXCIhPT10aGlzLnR5cGUmJihyKz1uLnVuZGlyZWN0ZWREZWdyZWUsaSs9MiooKGU9bi51bmRpcmVjdGVkW3RdKT90aGlzLm11bHRpP2Uuc2l6ZToxOjApKSxcInVuZGlyZWN0ZWRcIiE9PXRoaXMudHlwZSYmKHIrPW4ub3V0RGVncmVlLGkrPShlPW4uaW5bdF0pP3RoaXMubXVsdGk/ZS5zaXplOjE6MCksci1pfSxpLmRlZ3JlZVdpdGhvdXRTZWxmTG9vcHM9ZnVuY3Rpb24odCl7dD1cIlwiK3Q7dmFyIGUsbj10aGlzLl9ub2Rlcy5nZXQodCk7aWYoIW4pdGhyb3cgbmV3IEkoJ0dyYXBoLmRlZ3JlZVdpdGhvdXRTZWxmTG9vcHM6IGNvdWxkIG5vdCBmaW5kIHRoZSBcIicuY29uY2F0KHQsJ1wiIG5vZGUgaW4gdGhlIGdyYXBoLicpKTt2YXIgcj0wLGk9MDtyZXR1cm5cImRpcmVjdGVkXCIhPT10aGlzLnR5cGUmJihyKz1uLnVuZGlyZWN0ZWREZWdyZWUsaSs9MiooKGU9bi51bmRpcmVjdGVkW3RdKT90aGlzLm11bHRpP2Uuc2l6ZToxOjApKSxcInVuZGlyZWN0ZWRcIiE9PXRoaXMudHlwZSYmKHIrPW4uaW5EZWdyZWUrbi5vdXREZWdyZWUsaSs9MiooKGU9bi5vdXRbdF0pP3RoaXMubXVsdGk/ZS5zaXplOjE6MCkpLHItaX0saS5zb3VyY2U9ZnVuY3Rpb24odCl7dD1cIlwiK3Q7dmFyIGU9dGhpcy5fZWRnZXMuZ2V0KHQpO2lmKCFlKXRocm93IG5ldyBJKCdHcmFwaC5zb3VyY2U6IGNvdWxkIG5vdCBmaW5kIHRoZSBcIicuY29uY2F0KHQsJ1wiIGVkZ2UgaW4gdGhlIGdyYXBoLicpKTtyZXR1cm4gZS5zb3VyY2Uua2V5fSxpLnRhcmdldD1mdW5jdGlvbih0KXt0PVwiXCIrdDt2YXIgZT10aGlzLl9lZGdlcy5nZXQodCk7aWYoIWUpdGhyb3cgbmV3IEkoJ0dyYXBoLnRhcmdldDogY291bGQgbm90IGZpbmQgdGhlIFwiJy5jb25jYXQodCwnXCIgZWRnZSBpbiB0aGUgZ3JhcGguJykpO3JldHVybiBlLnRhcmdldC5rZXl9LGkuZXh0cmVtaXRpZXM9ZnVuY3Rpb24odCl7dD1cIlwiK3Q7dmFyIGU9dGhpcy5fZWRnZXMuZ2V0KHQpO2lmKCFlKXRocm93IG5ldyBJKCdHcmFwaC5leHRyZW1pdGllczogY291bGQgbm90IGZpbmQgdGhlIFwiJy5jb25jYXQodCwnXCIgZWRnZSBpbiB0aGUgZ3JhcGguJykpO3JldHVybltlLnNvdXJjZS5rZXksZS50YXJnZXQua2V5XX0saS5vcHBvc2l0ZT1mdW5jdGlvbih0LGUpe3Q9XCJcIit0LGU9XCJcIitlO3ZhciBuPXRoaXMuX2VkZ2VzLmdldChlKTtpZighbil0aHJvdyBuZXcgSSgnR3JhcGgub3Bwb3NpdGU6IGNvdWxkIG5vdCBmaW5kIHRoZSBcIicuY29uY2F0KGUsJ1wiIGVkZ2UgaW4gdGhlIGdyYXBoLicpKTt2YXIgcj1uLnNvdXJjZS5rZXksaT1uLnRhcmdldC5rZXk7aWYodD09PXIpcmV0dXJuIGk7aWYodD09PWkpcmV0dXJuIHI7dGhyb3cgbmV3IEkoJ0dyYXBoLm9wcG9zaXRlOiB0aGUgXCInLmNvbmNhdCh0LCdcIiBub2RlIGlzIG5vdCBhdHRhY2hlZCB0byB0aGUgXCInKS5jb25jYXQoZSwnXCIgZWRnZSAoJykuY29uY2F0KHIsXCIsIFwiKS5jb25jYXQoaSxcIikuXCIpKX0saS5oYXNFeHRyZW1pdHk9ZnVuY3Rpb24odCxlKXt0PVwiXCIrdCxlPVwiXCIrZTt2YXIgbj10aGlzLl9lZGdlcy5nZXQodCk7aWYoIW4pdGhyb3cgbmV3IEkoJ0dyYXBoLmhhc0V4dHJlbWl0eTogY291bGQgbm90IGZpbmQgdGhlIFwiJy5jb25jYXQodCwnXCIgZWRnZSBpbiB0aGUgZ3JhcGguJykpO3JldHVybiBuLnNvdXJjZS5rZXk9PT1lfHxuLnRhcmdldC5rZXk9PT1lfSxpLmlzVW5kaXJlY3RlZD1mdW5jdGlvbih0KXt0PVwiXCIrdDt2YXIgZT10aGlzLl9lZGdlcy5nZXQodCk7aWYoIWUpdGhyb3cgbmV3IEkoJ0dyYXBoLmlzVW5kaXJlY3RlZDogY291bGQgbm90IGZpbmQgdGhlIFwiJy5jb25jYXQodCwnXCIgZWRnZSBpbiB0aGUgZ3JhcGguJykpO3JldHVybiBlLnVuZGlyZWN0ZWR9LGkuaXNEaXJlY3RlZD1mdW5jdGlvbih0KXt0PVwiXCIrdDt2YXIgZT10aGlzLl9lZGdlcy5nZXQodCk7aWYoIWUpdGhyb3cgbmV3IEkoJ0dyYXBoLmlzRGlyZWN0ZWQ6IGNvdWxkIG5vdCBmaW5kIHRoZSBcIicuY29uY2F0KHQsJ1wiIGVkZ2UgaW4gdGhlIGdyYXBoLicpKTtyZXR1cm4hZS51bmRpcmVjdGVkfSxpLmlzU2VsZkxvb3A9ZnVuY3Rpb24odCl7dD1cIlwiK3Q7dmFyIGU9dGhpcy5fZWRnZXMuZ2V0KHQpO2lmKCFlKXRocm93IG5ldyBJKCdHcmFwaC5pc1NlbGZMb29wOiBjb3VsZCBub3QgZmluZCB0aGUgXCInLmNvbmNhdCh0LCdcIiBlZGdlIGluIHRoZSBncmFwaC4nKSk7cmV0dXJuIGUuc291cmNlPT09ZS50YXJnZXR9LGkuYWRkTm9kZT1mdW5jdGlvbih0LGUpe3ZhciBuPWZ1bmN0aW9uKHQsZSxuKXtpZihuJiYhaChuKSl0aHJvdyBuZXcgRignR3JhcGguYWRkTm9kZTogaW52YWxpZCBhdHRyaWJ1dGVzLiBFeHBlY3RpbmcgYW4gb2JqZWN0IGJ1dCBnb3QgXCInLmNvbmNhdChuLCdcIicpKTtpZihlPVwiXCIrZSxuPW58fHt9LHQuX25vZGVzLmhhcyhlKSl0aHJvdyBuZXcgWSgnR3JhcGguYWRkTm9kZTogdGhlIFwiJy5jb25jYXQoZSwnXCIgbm9kZSBhbHJlYWR5IGV4aXN0IGluIHRoZSBncmFwaC4nKSk7dmFyIHI9bmV3IHQuTm9kZURhdGFDbGFzcyhlLG4pO3JldHVybiB0Ll9ub2Rlcy5zZXQoZSxyKSx0LmVtaXQoXCJub2RlQWRkZWRcIix7a2V5OmUsYXR0cmlidXRlczpufSkscn0odGhpcyx0LGUpO3JldHVybiBuLmtleX0saS5tZXJnZU5vZGU9ZnVuY3Rpb24odCxlKXtpZihlJiYhaChlKSl0aHJvdyBuZXcgRignR3JhcGgubWVyZ2VOb2RlOiBpbnZhbGlkIGF0dHJpYnV0ZXMuIEV4cGVjdGluZyBhbiBvYmplY3QgYnV0IGdvdCBcIicuY29uY2F0KGUsJ1wiJykpO3Q9XCJcIit0LGU9ZXx8e307dmFyIG49dGhpcy5fbm9kZXMuZ2V0KHQpO3JldHVybiBuPyhlJiYoYyhuLmF0dHJpYnV0ZXMsZSksdGhpcy5lbWl0KFwibm9kZUF0dHJpYnV0ZXNVcGRhdGVkXCIse3R5cGU6XCJtZXJnZVwiLGtleTp0LGF0dHJpYnV0ZXM6bi5hdHRyaWJ1dGVzLGRhdGE6ZX0pKSxbdCwhMV0pOihuPW5ldyB0aGlzLk5vZGVEYXRhQ2xhc3ModCxlKSx0aGlzLl9ub2Rlcy5zZXQodCxuKSx0aGlzLmVtaXQoXCJub2RlQWRkZWRcIix7a2V5OnQsYXR0cmlidXRlczplfSksW3QsITBdKX0saS51cGRhdGVOb2RlPWZ1bmN0aW9uKHQsZSl7aWYoZSYmXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgRignR3JhcGgudXBkYXRlTm9kZTogaW52YWxpZCB1cGRhdGVyIGZ1bmN0aW9uLiBFeHBlY3RpbmcgYSBmdW5jdGlvbiBidXQgZ290IFwiJy5jb25jYXQoZSwnXCInKSk7dD1cIlwiK3Q7dmFyIG49dGhpcy5fbm9kZXMuZ2V0KHQpO2lmKG4pe2lmKGUpe3ZhciByPW4uYXR0cmlidXRlcztuLmF0dHJpYnV0ZXM9ZShyKSx0aGlzLmVtaXQoXCJub2RlQXR0cmlidXRlc1VwZGF0ZWRcIix7dHlwZTpcInJlcGxhY2VcIixrZXk6dCxhdHRyaWJ1dGVzOm4uYXR0cmlidXRlc30pfXJldHVyblt0LCExXX12YXIgaT1lP2Uoe30pOnt9O3JldHVybiBuPW5ldyB0aGlzLk5vZGVEYXRhQ2xhc3ModCxpKSx0aGlzLl9ub2Rlcy5zZXQodCxuKSx0aGlzLmVtaXQoXCJub2RlQWRkZWRcIix7a2V5OnQsYXR0cmlidXRlczppfSksW3QsITBdfSxpLmRyb3BOb2RlPWZ1bmN0aW9uKHQpe3Q9XCJcIit0O3ZhciBlLG49dGhpcy5fbm9kZXMuZ2V0KHQpO2lmKCFuKXRocm93IG5ldyBJKCdHcmFwaC5kcm9wTm9kZTogY291bGQgbm90IGZpbmQgdGhlIFwiJy5jb25jYXQodCwnXCIgbm9kZSBpbiB0aGUgZ3JhcGguJykpO2lmKFwidW5kaXJlY3RlZFwiIT09dGhpcy50eXBlKXtmb3IodmFyIHIgaW4gbi5vdXQpe2U9bi5vdXRbcl07ZG97TXQodGhpcyxlKSxlPWUubmV4dH13aGlsZShlKX1mb3IodmFyIGkgaW4gbi5pbil7ZT1uLmluW2ldO2Rve010KHRoaXMsZSksZT1lLm5leHR9d2hpbGUoZSl9fWlmKFwiZGlyZWN0ZWRcIiE9PXRoaXMudHlwZSlmb3IodmFyIG8gaW4gbi51bmRpcmVjdGVkKXtlPW4udW5kaXJlY3RlZFtvXTtkb3tNdCh0aGlzLGUpLGU9ZS5uZXh0fXdoaWxlKGUpfXRoaXMuX25vZGVzLmRlbGV0ZSh0KSx0aGlzLmVtaXQoXCJub2RlRHJvcHBlZFwiLHtrZXk6dCxhdHRyaWJ1dGVzOm4uYXR0cmlidXRlc30pfSxpLmRyb3BFZGdlPWZ1bmN0aW9uKHQpe3ZhciBlO2lmKGFyZ3VtZW50cy5sZW5ndGg+MSl7dmFyIG49XCJcIithcmd1bWVudHNbMF0scj1cIlwiK2FyZ3VtZW50c1sxXTtpZighKGU9cyh0aGlzLG4scix0aGlzLnR5cGUpKSl0aHJvdyBuZXcgSSgnR3JhcGguZHJvcEVkZ2U6IGNvdWxkIG5vdCBmaW5kIHRoZSBcIicuY29uY2F0KG4sJ1wiIC0+IFwiJykuY29uY2F0KHIsJ1wiIGVkZ2UgaW4gdGhlIGdyYXBoLicpKX1lbHNlIGlmKHQ9XCJcIit0LCEoZT10aGlzLl9lZGdlcy5nZXQodCkpKXRocm93IG5ldyBJKCdHcmFwaC5kcm9wRWRnZTogY291bGQgbm90IGZpbmQgdGhlIFwiJy5jb25jYXQodCwnXCIgZWRnZSBpbiB0aGUgZ3JhcGguJykpO3JldHVybiBNdCh0aGlzLGUpLHRoaXN9LGkuZHJvcERpcmVjdGVkRWRnZT1mdW5jdGlvbih0LGUpe2lmKGFyZ3VtZW50cy5sZW5ndGg8Mil0aHJvdyBuZXcgWShcIkdyYXBoLmRyb3BEaXJlY3RlZEVkZ2U6IGl0IGRvZXMgbm90IG1ha2Ugc2Vuc2UgdG8gdHJ5IGFuZCBkcm9wIGEgZGlyZWN0ZWQgZWRnZSBieSBrZXkuIFdoYXQgaWYgdGhlIGVkZ2Ugd2l0aCB0aGlzIGtleSBpcyB1bmRpcmVjdGVkPyBVc2UgIy5kcm9wRWRnZSBmb3IgdGhpcyBwdXJwb3NlIGluc3RlYWQuXCIpO2lmKHRoaXMubXVsdGkpdGhyb3cgbmV3IFkoXCJHcmFwaC5kcm9wRGlyZWN0ZWRFZGdlOiBjYW5ub3QgdXNlIGEge3NvdXJjZSx0YXJnZXR9IGNvbWJvIHdoZW4gZHJvcHBpbmcgYW4gZWRnZSBpbiBhIE11bHRpR3JhcGggc2luY2Ugd2UgY2Fubm90IGluZmVyIHRoZSBvbmUgeW91IHdhbnQgdG8gZGVsZXRlIGFzIHRoZXJlIGNvdWxkIGJlIG11bHRpcGxlIG9uZXMuXCIpO3ZhciBuPXModGhpcyx0PVwiXCIrdCxlPVwiXCIrZSxcImRpcmVjdGVkXCIpO2lmKCFuKXRocm93IG5ldyBJKCdHcmFwaC5kcm9wRGlyZWN0ZWRFZGdlOiBjb3VsZCBub3QgZmluZCBhIFwiJy5jb25jYXQodCwnXCIgLT4gXCInKS5jb25jYXQoZSwnXCIgZWRnZSBpbiB0aGUgZ3JhcGguJykpO3JldHVybiBNdCh0aGlzLG4pLHRoaXN9LGkuZHJvcFVuZGlyZWN0ZWRFZGdlPWZ1bmN0aW9uKHQsZSl7aWYoYXJndW1lbnRzLmxlbmd0aDwyKXRocm93IG5ldyBZKFwiR3JhcGguZHJvcFVuZGlyZWN0ZWRFZGdlOiBpdCBkb2VzIG5vdCBtYWtlIHNlbnNlIHRvIGRyb3AgYSBkaXJlY3RlZCBlZGdlIGJ5IGtleS4gV2hhdCBpZiB0aGUgZWRnZSB3aXRoIHRoaXMga2V5IGlzIHVuZGlyZWN0ZWQ/IFVzZSAjLmRyb3BFZGdlIGZvciB0aGlzIHB1cnBvc2UgaW5zdGVhZC5cIik7aWYodGhpcy5tdWx0aSl0aHJvdyBuZXcgWShcIkdyYXBoLmRyb3BVbmRpcmVjdGVkRWRnZTogY2Fubm90IHVzZSBhIHtzb3VyY2UsdGFyZ2V0fSBjb21ibyB3aGVuIGRyb3BwaW5nIGFuIGVkZ2UgaW4gYSBNdWx0aUdyYXBoIHNpbmNlIHdlIGNhbm5vdCBpbmZlciB0aGUgb25lIHlvdSB3YW50IHRvIGRlbGV0ZSBhcyB0aGVyZSBjb3VsZCBiZSBtdWx0aXBsZSBvbmVzLlwiKTt2YXIgbj1zKHRoaXMsdCxlLFwidW5kaXJlY3RlZFwiKTtpZighbil0aHJvdyBuZXcgSSgnR3JhcGguZHJvcFVuZGlyZWN0ZWRFZGdlOiBjb3VsZCBub3QgZmluZCBhIFwiJy5jb25jYXQodCwnXCIgLT4gXCInKS5jb25jYXQoZSwnXCIgZWRnZSBpbiB0aGUgZ3JhcGguJykpO3JldHVybiBNdCh0aGlzLG4pLHRoaXN9LGkuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9lZGdlcy5jbGVhcigpLHRoaXMuX25vZGVzLmNsZWFyKCksdGhpcy5fcmVzZXRJbnN0YW5jZUNvdW50ZXJzKCksdGhpcy5lbWl0KFwiY2xlYXJlZFwiKX0saS5jbGVhckVkZ2VzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0LGU9dGhpcy5fbm9kZXMudmFsdWVzKCk7ITAhPT0odD1lLm5leHQoKSkuZG9uZTspdC52YWx1ZS5jbGVhcigpO3RoaXMuX2VkZ2VzLmNsZWFyKCksdGhpcy5fcmVzZXRJbnN0YW5jZUNvdW50ZXJzKCksdGhpcy5lbWl0KFwiZWRnZXNDbGVhcmVkXCIpfSxpLmdldEF0dHJpYnV0ZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fYXR0cmlidXRlc1t0XX0saS5nZXRBdHRyaWJ1dGVzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2F0dHJpYnV0ZXN9LGkuaGFzQXR0cmlidXRlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9hdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KHQpfSxpLnNldEF0dHJpYnV0ZT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLl9hdHRyaWJ1dGVzW3RdPWUsdGhpcy5lbWl0KFwiYXR0cmlidXRlc1VwZGF0ZWRcIix7dHlwZTpcInNldFwiLGF0dHJpYnV0ZXM6dGhpcy5fYXR0cmlidXRlcyxuYW1lOnR9KSx0aGlzfSxpLnVwZGF0ZUF0dHJpYnV0ZT1mdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IEYoXCJHcmFwaC51cGRhdGVBdHRyaWJ1dGU6IHVwZGF0ZXIgc2hvdWxkIGJlIGEgZnVuY3Rpb24uXCIpO3ZhciBuPXRoaXMuX2F0dHJpYnV0ZXNbdF07cmV0dXJuIHRoaXMuX2F0dHJpYnV0ZXNbdF09ZShuKSx0aGlzLmVtaXQoXCJhdHRyaWJ1dGVzVXBkYXRlZFwiLHt0eXBlOlwic2V0XCIsYXR0cmlidXRlczp0aGlzLl9hdHRyaWJ1dGVzLG5hbWU6dH0pLHRoaXN9LGkucmVtb3ZlQXR0cmlidXRlPWZ1bmN0aW9uKHQpe3JldHVybiBkZWxldGUgdGhpcy5fYXR0cmlidXRlc1t0XSx0aGlzLmVtaXQoXCJhdHRyaWJ1dGVzVXBkYXRlZFwiLHt0eXBlOlwicmVtb3ZlXCIsYXR0cmlidXRlczp0aGlzLl9hdHRyaWJ1dGVzLG5hbWU6dH0pLHRoaXN9LGkucmVwbGFjZUF0dHJpYnV0ZXM9ZnVuY3Rpb24odCl7aWYoIWgodCkpdGhyb3cgbmV3IEYoXCJHcmFwaC5yZXBsYWNlQXR0cmlidXRlczogcHJvdmlkZWQgYXR0cmlidXRlcyBhcmUgbm90IGEgcGxhaW4gb2JqZWN0LlwiKTtyZXR1cm4gdGhpcy5fYXR0cmlidXRlcz10LHRoaXMuZW1pdChcImF0dHJpYnV0ZXNVcGRhdGVkXCIse3R5cGU6XCJyZXBsYWNlXCIsYXR0cmlidXRlczp0aGlzLl9hdHRyaWJ1dGVzfSksdGhpc30saS5tZXJnZUF0dHJpYnV0ZXM9ZnVuY3Rpb24odCl7aWYoIWgodCkpdGhyb3cgbmV3IEYoXCJHcmFwaC5tZXJnZUF0dHJpYnV0ZXM6IHByb3ZpZGVkIGF0dHJpYnV0ZXMgYXJlIG5vdCBhIHBsYWluIG9iamVjdC5cIik7cmV0dXJuIGModGhpcy5fYXR0cmlidXRlcyx0KSx0aGlzLmVtaXQoXCJhdHRyaWJ1dGVzVXBkYXRlZFwiLHt0eXBlOlwibWVyZ2VcIixhdHRyaWJ1dGVzOnRoaXMuX2F0dHJpYnV0ZXMsZGF0YTp0fSksdGhpc30saS51cGRhdGVBdHRyaWJ1dGVzPWZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgbmV3IEYoXCJHcmFwaC51cGRhdGVBdHRyaWJ1dGVzOiBwcm92aWRlZCB1cGRhdGVyIGlzIG5vdCBhIGZ1bmN0aW9uLlwiKTtyZXR1cm4gdGhpcy5fYXR0cmlidXRlcz10KHRoaXMuX2F0dHJpYnV0ZXMpLHRoaXMuZW1pdChcImF0dHJpYnV0ZXNVcGRhdGVkXCIse3R5cGU6XCJ1cGRhdGVcIixhdHRyaWJ1dGVzOnRoaXMuX2F0dHJpYnV0ZXN9KSx0aGlzfSxpLnVwZGF0ZUVhY2hOb2RlQXR0cmlidXRlcz1mdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgbmV3IEYoXCJHcmFwaC51cGRhdGVFYWNoTm9kZUF0dHJpYnV0ZXM6IGV4cGVjdGluZyBhbiB1cGRhdGVyIGZ1bmN0aW9uLlwiKTtpZihlJiYhZyhlKSl0aHJvdyBuZXcgRihcIkdyYXBoLnVwZGF0ZUVhY2hOb2RlQXR0cmlidXRlczogaW52YWxpZCBoaW50cy4gRXhwZWN0aW5nIGFuIG9iamVjdCBoYXZpbmcgdGhlIGZvbGxvd2luZyBzaGFwZToge2F0dHJpYnV0ZXM/OiBbc3RyaW5nXX1cIik7Zm9yKHZhciBuLHIsaT10aGlzLl9ub2Rlcy52YWx1ZXMoKTshMCE9PShuPWkubmV4dCgpKS5kb25lOykocj1uLnZhbHVlKS5hdHRyaWJ1dGVzPXQoci5rZXksci5hdHRyaWJ1dGVzKTt0aGlzLmVtaXQoXCJlYWNoTm9kZUF0dHJpYnV0ZXNVcGRhdGVkXCIse2hpbnRzOmV8fG51bGx9KX0saS51cGRhdGVFYWNoRWRnZUF0dHJpYnV0ZXM9ZnVuY3Rpb24odCxlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXRocm93IG5ldyBGKFwiR3JhcGgudXBkYXRlRWFjaEVkZ2VBdHRyaWJ1dGVzOiBleHBlY3RpbmcgYW4gdXBkYXRlciBmdW5jdGlvbi5cIik7aWYoZSYmIWcoZSkpdGhyb3cgbmV3IEYoXCJHcmFwaC51cGRhdGVFYWNoRWRnZUF0dHJpYnV0ZXM6IGludmFsaWQgaGludHMuIEV4cGVjdGluZyBhbiBvYmplY3QgaGF2aW5nIHRoZSBmb2xsb3dpbmcgc2hhcGU6IHthdHRyaWJ1dGVzPzogW3N0cmluZ119XCIpO2Zvcih2YXIgbixyLGksbyxhPXRoaXMuX2VkZ2VzLnZhbHVlcygpOyEwIT09KG49YS5uZXh0KCkpLmRvbmU7KWk9KHI9bi52YWx1ZSkuc291cmNlLG89ci50YXJnZXQsci5hdHRyaWJ1dGVzPXQoci5rZXksci5hdHRyaWJ1dGVzLGkua2V5LG8ua2V5LGkuYXR0cmlidXRlcyxvLmF0dHJpYnV0ZXMsci51bmRpcmVjdGVkKTt0aGlzLmVtaXQoXCJlYWNoRWRnZUF0dHJpYnV0ZXNVcGRhdGVkXCIse2hpbnRzOmV8fG51bGx9KX0saS5mb3JFYWNoQWRqYWNlbmN5RW50cnk9ZnVuY3Rpb24odCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgRihcIkdyYXBoLmZvckVhY2hBZGphY2VuY3lFbnRyeTogZXhwZWN0aW5nIGEgY2FsbGJhY2suXCIpO0V0KCExLCExLCExLHRoaXMsdCl9LGkuZm9yRWFjaEFkamFjZW5jeUVudHJ5V2l0aE9ycGhhbnM9ZnVuY3Rpb24odCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgRihcIkdyYXBoLmZvckVhY2hBZGphY2VuY3lFbnRyeVdpdGhPcnBoYW5zOiBleHBlY3RpbmcgYSBjYWxsYmFjay5cIik7RXQoITEsITEsITAsdGhpcyx0KX0saS5mb3JFYWNoQXNzeW1ldHJpY0FkamFjZW5jeUVudHJ5PWZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgbmV3IEYoXCJHcmFwaC5mb3JFYWNoQXNzeW1ldHJpY0FkamFjZW5jeUVudHJ5OiBleHBlY3RpbmcgYSBjYWxsYmFjay5cIik7RXQoITEsITAsITEsdGhpcyx0KX0saS5mb3JFYWNoQXNzeW1ldHJpY0FkamFjZW5jeUVudHJ5V2l0aE9ycGhhbnM9ZnVuY3Rpb24odCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgRihcIkdyYXBoLmZvckVhY2hBc3N5bWV0cmljQWRqYWNlbmN5RW50cnlXaXRoT3JwaGFuczogZXhwZWN0aW5nIGEgY2FsbGJhY2suXCIpO0V0KCExLCEwLCEwLHRoaXMsdCl9LGkubm9kZXM9ZnVuY3Rpb24oKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBBcnJheS5mcm9tP0FycmF5LmZyb20odGhpcy5fbm9kZXMua2V5cygpKTpUKHRoaXMuX25vZGVzLmtleXMoKSx0aGlzLl9ub2Rlcy5zaXplKX0saS5mb3JFYWNoTm9kZT1mdW5jdGlvbih0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXRocm93IG5ldyBGKFwiR3JhcGguZm9yRWFjaE5vZGU6IGV4cGVjdGluZyBhIGNhbGxiYWNrLlwiKTtmb3IodmFyIGUsbixyPXRoaXMuX25vZGVzLnZhbHVlcygpOyEwIT09KGU9ci5uZXh0KCkpLmRvbmU7KXQoKG49ZS52YWx1ZSkua2V5LG4uYXR0cmlidXRlcyl9LGkuZmluZE5vZGU9ZnVuY3Rpb24odCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgRihcIkdyYXBoLmZpbmROb2RlOiBleHBlY3RpbmcgYSBjYWxsYmFjay5cIik7Zm9yKHZhciBlLG4scj10aGlzLl9ub2Rlcy52YWx1ZXMoKTshMCE9PShlPXIubmV4dCgpKS5kb25lOylpZih0KChuPWUudmFsdWUpLmtleSxuLmF0dHJpYnV0ZXMpKXJldHVybiBuLmtleX0saS5tYXBOb2Rlcz1mdW5jdGlvbih0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXRocm93IG5ldyBGKFwiR3JhcGgubWFwTm9kZTogZXhwZWN0aW5nIGEgY2FsbGJhY2suXCIpO2Zvcih2YXIgZSxuLHI9dGhpcy5fbm9kZXMudmFsdWVzKCksaT1uZXcgQXJyYXkodGhpcy5vcmRlciksbz0wOyEwIT09KGU9ci5uZXh0KCkpLmRvbmU7KW49ZS52YWx1ZSxpW28rK109dChuLmtleSxuLmF0dHJpYnV0ZXMpO3JldHVybiBpfSxpLnNvbWVOb2RlPWZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgbmV3IEYoXCJHcmFwaC5zb21lTm9kZTogZXhwZWN0aW5nIGEgY2FsbGJhY2suXCIpO2Zvcih2YXIgZSxuLHI9dGhpcy5fbm9kZXMudmFsdWVzKCk7ITAhPT0oZT1yLm5leHQoKSkuZG9uZTspaWYodCgobj1lLnZhbHVlKS5rZXksbi5hdHRyaWJ1dGVzKSlyZXR1cm4hMDtyZXR1cm4hMX0saS5ldmVyeU5vZGU9ZnVuY3Rpb24odCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgRihcIkdyYXBoLmV2ZXJ5Tm9kZTogZXhwZWN0aW5nIGEgY2FsbGJhY2suXCIpO2Zvcih2YXIgZSxuLHI9dGhpcy5fbm9kZXMudmFsdWVzKCk7ITAhPT0oZT1yLm5leHQoKSkuZG9uZTspaWYoIXQoKG49ZS52YWx1ZSkua2V5LG4uYXR0cmlidXRlcykpcmV0dXJuITE7cmV0dXJuITB9LGkuZmlsdGVyTm9kZXM9ZnVuY3Rpb24odCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgRihcIkdyYXBoLmZpbHRlck5vZGVzOiBleHBlY3RpbmcgYSBjYWxsYmFjay5cIik7Zm9yKHZhciBlLG4scj10aGlzLl9ub2Rlcy52YWx1ZXMoKSxpPVtdOyEwIT09KGU9ci5uZXh0KCkpLmRvbmU7KXQoKG49ZS52YWx1ZSkua2V5LG4uYXR0cmlidXRlcykmJmkucHVzaChuLmtleSk7cmV0dXJuIGl9LGkucmVkdWNlTm9kZXM9ZnVuY3Rpb24odCxlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXRocm93IG5ldyBGKFwiR3JhcGgucmVkdWNlTm9kZXM6IGV4cGVjdGluZyBhIGNhbGxiYWNrLlwiKTtpZihhcmd1bWVudHMubGVuZ3RoPDIpdGhyb3cgbmV3IEYoXCJHcmFwaC5yZWR1Y2VOb2RlczogbWlzc2luZyBpbml0aWFsIHZhbHVlLiBZb3UgbXVzdCBwcm92aWRlIGl0IGJlY2F1c2UgdGhlIGNhbGxiYWNrIHRha2VzIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQgYW5kIHdlIGNhbm5vdCBpbmZlciB0aGUgaW5pdGlhbCB2YWx1ZSBmcm9tIHRoZSBmaXJzdCBpdGVyYXRpb24sIGFzIHlvdSBjb3VsZCB3aXRoIGEgc2ltcGxlIGFycmF5LlwiKTtmb3IodmFyIG4scixpPWUsbz10aGlzLl9ub2Rlcy52YWx1ZXMoKTshMCE9PShuPW8ubmV4dCgpKS5kb25lOylpPXQoaSwocj1uLnZhbHVlKS5rZXksci5hdHRyaWJ1dGVzKTtyZXR1cm4gaX0saS5ub2RlRW50cmllcz1mdW5jdGlvbigpe3ZhciB0PXRoaXMuX25vZGVzLnZhbHVlcygpO3JldHVybiBuZXcgTygoZnVuY3Rpb24oKXt2YXIgZT10Lm5leHQoKTtpZihlLmRvbmUpcmV0dXJuIGU7dmFyIG49ZS52YWx1ZTtyZXR1cm57dmFsdWU6e25vZGU6bi5rZXksYXR0cmlidXRlczpuLmF0dHJpYnV0ZXN9LGRvbmU6ITF9fSkpfSxpLmV4cG9ydD1mdW5jdGlvbigpe3ZhciB0PW5ldyBBcnJheSh0aGlzLl9ub2Rlcy5zaXplKSxlPTA7dGhpcy5fbm9kZXMuZm9yRWFjaCgoZnVuY3Rpb24obixyKXt0W2UrK109ZnVuY3Rpb24odCxlKXt2YXIgbj17a2V5OnR9O3JldHVybiBwKGUuYXR0cmlidXRlcyl8fChuLmF0dHJpYnV0ZXM9Yyh7fSxlLmF0dHJpYnV0ZXMpKSxufShyLG4pfSkpO3ZhciBuPW5ldyBBcnJheSh0aGlzLl9lZGdlcy5zaXplKTtyZXR1cm4gZT0wLHRoaXMuX2VkZ2VzLmZvckVhY2goKGZ1bmN0aW9uKHQscil7bltlKytdPWZ1bmN0aW9uKHQsZSl7dmFyIG49e2tleTp0LHNvdXJjZTplLnNvdXJjZS5rZXksdGFyZ2V0OmUudGFyZ2V0LmtleX07cmV0dXJuIHAoZS5hdHRyaWJ1dGVzKXx8KG4uYXR0cmlidXRlcz1jKHt9LGUuYXR0cmlidXRlcykpLGUudW5kaXJlY3RlZCYmKG4udW5kaXJlY3RlZD0hMCksbn0ocix0KX0pKSx7b3B0aW9uczp7dHlwZTp0aGlzLnR5cGUsbXVsdGk6dGhpcy5tdWx0aSxhbGxvd1NlbGZMb29wczp0aGlzLmFsbG93U2VsZkxvb3BzfSxhdHRyaWJ1dGVzOnRoaXMuZ2V0QXR0cmlidXRlcygpLG5vZGVzOnQsZWRnZXM6bn19LGkuaW1wb3J0PWZ1bmN0aW9uKHQpe3ZhciBlLG4scixpLG8sYT10aGlzLHU9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0mJmFyZ3VtZW50c1sxXTtpZihkKHQpKXJldHVybiB0LmZvckVhY2hOb2RlKChmdW5jdGlvbih0LGUpe3U/YS5tZXJnZU5vZGUodCxlKTphLmFkZE5vZGUodCxlKX0pKSx0LmZvckVhY2hFZGdlKChmdW5jdGlvbih0LGUsbixyLGksbyxjKXt1P2M/YS5tZXJnZVVuZGlyZWN0ZWRFZGdlV2l0aEtleSh0LG4scixlKTphLm1lcmdlRGlyZWN0ZWRFZGdlV2l0aEtleSh0LG4scixlKTpjP2EuYWRkVW5kaXJlY3RlZEVkZ2VXaXRoS2V5KHQsbixyLGUpOmEuYWRkRGlyZWN0ZWRFZGdlV2l0aEtleSh0LG4scixlKX0pKSx0aGlzO2lmKCFoKHQpKXRocm93IG5ldyBGKFwiR3JhcGguaW1wb3J0OiBpbnZhbGlkIGFyZ3VtZW50LiBFeHBlY3RpbmcgYSBzZXJpYWxpemVkIGdyYXBoIG9yLCBhbHRlcm5hdGl2ZWx5LCBhIEdyYXBoIGluc3RhbmNlLlwiKTtpZih0LmF0dHJpYnV0ZXMpe2lmKCFoKHQuYXR0cmlidXRlcykpdGhyb3cgbmV3IEYoXCJHcmFwaC5pbXBvcnQ6IGludmFsaWQgYXR0cmlidXRlcy4gRXhwZWN0aW5nIGEgcGxhaW4gb2JqZWN0LlwiKTt1P3RoaXMubWVyZ2VBdHRyaWJ1dGVzKHQuYXR0cmlidXRlcyk6dGhpcy5yZXBsYWNlQXR0cmlidXRlcyh0LmF0dHJpYnV0ZXMpfWlmKHQubm9kZXMpe2lmKHI9dC5ub2RlcywhQXJyYXkuaXNBcnJheShyKSl0aHJvdyBuZXcgRihcIkdyYXBoLmltcG9ydDogaW52YWxpZCBub2Rlcy4gRXhwZWN0aW5nIGFuIGFycmF5LlwiKTtmb3IoZT0wLG49ci5sZW5ndGg7ZTxuO2UrKyl7QXQoaT1yW2VdKTt2YXIgYz1pLHM9Yy5rZXkscD1jLmF0dHJpYnV0ZXM7dT90aGlzLm1lcmdlTm9kZShzLHApOnRoaXMuYWRkTm9kZShzLHApfX1pZih0LmVkZ2VzKXtpZihyPXQuZWRnZXMsIUFycmF5LmlzQXJyYXkocikpdGhyb3cgbmV3IEYoXCJHcmFwaC5pbXBvcnQ6IGludmFsaWQgZWRnZXMuIEV4cGVjdGluZyBhbiBhcnJheS5cIik7Zm9yKGU9MCxuPXIubGVuZ3RoO2U8bjtlKyspe1N0KG89cltlXSk7dmFyIGY9byxsPWYuc291cmNlLGc9Zi50YXJnZXQseT1mLmF0dHJpYnV0ZXMsdz1mLnVuZGlyZWN0ZWQsdj12b2lkIDAhPT13JiZ3O1wia2V5XCJpbiBvPyh1P3Y/dGhpcy5tZXJnZVVuZGlyZWN0ZWRFZGdlV2l0aEtleTp0aGlzLm1lcmdlRGlyZWN0ZWRFZGdlV2l0aEtleTp2P3RoaXMuYWRkVW5kaXJlY3RlZEVkZ2VXaXRoS2V5OnRoaXMuYWRkRGlyZWN0ZWRFZGdlV2l0aEtleSkuY2FsbCh0aGlzLG8ua2V5LGwsZyx5KToodT92P3RoaXMubWVyZ2VVbmRpcmVjdGVkRWRnZTp0aGlzLm1lcmdlRGlyZWN0ZWRFZGdlOnY/dGhpcy5hZGRVbmRpcmVjdGVkRWRnZTp0aGlzLmFkZERpcmVjdGVkRWRnZSkuY2FsbCh0aGlzLGwsZyx5KX19cmV0dXJuIHRoaXN9LGkubnVsbENvcHk9ZnVuY3Rpb24odCl7dmFyIGU9bmV3IHIoYyh7fSx0aGlzLl9vcHRpb25zLHQpKTtyZXR1cm4gZS5yZXBsYWNlQXR0cmlidXRlcyhjKHt9LHRoaXMuZ2V0QXR0cmlidXRlcygpKSksZX0saS5lbXB0eUNvcHk9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5udWxsQ29weSh0KTtyZXR1cm4gdGhpcy5fbm9kZXMuZm9yRWFjaCgoZnVuY3Rpb24odCxuKXt2YXIgcj1jKHt9LHQuYXR0cmlidXRlcyk7dD1uZXcgZS5Ob2RlRGF0YUNsYXNzKG4sciksZS5fbm9kZXMuc2V0KG4sdCl9KSksZX0saS5jb3B5PWZ1bmN0aW9uKHQpe2lmKFwic3RyaW5nXCI9PXR5cGVvZih0PXR8fHt9KS50eXBlJiZ0LnR5cGUhPT10aGlzLnR5cGUmJlwibWl4ZWRcIiE9PXQudHlwZSl0aHJvdyBuZXcgWSgnR3JhcGguY29weTogY2Fubm90IGNyZWF0ZSBhbiBpbmNvbXBhdGlibGUgY29weSBmcm9tIFwiJy5jb25jYXQodGhpcy50eXBlLCdcIiB0eXBlIHRvIFwiJykuY29uY2F0KHQudHlwZSwnXCIgYmVjYXVzZSB0aGlzIHdvdWxkIG1lYW4gbG9zaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IGdyYXBoLicpKTtpZihcImJvb2xlYW5cIj09dHlwZW9mIHQubXVsdGkmJnQubXVsdGkhPT10aGlzLm11bHRpJiYhMCE9PXQubXVsdGkpdGhyb3cgbmV3IFkoXCJHcmFwaC5jb3B5OiBjYW5ub3QgY3JlYXRlIGFuIGluY29tcGF0aWJsZSBjb3B5IGJ5IGRvd25ncmFkaW5nIGEgbXVsdGkgZ3JhcGggdG8gYSBzaW1wbGUgb25lIGJlY2F1c2UgdGhpcyB3b3VsZCBtZWFuIGxvc2luZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCBncmFwaC5cIik7aWYoXCJib29sZWFuXCI9PXR5cGVvZiB0LmFsbG93U2VsZkxvb3BzJiZ0LmFsbG93U2VsZkxvb3BzIT09dGhpcy5hbGxvd1NlbGZMb29wcyYmITAhPT10LmFsbG93U2VsZkxvb3BzKXRocm93IG5ldyBZKFwiR3JhcGguY29weTogY2Fubm90IGNyZWF0ZSBhbiBpbmNvbXBhdGlibGUgY29weSBmcm9tIGEgZ3JhcGggYWxsb3dpbmcgc2VsZiBsb29wcyB0byBvbmUgdGhhdCBkb2VzIG5vdCBiZWNhdXNlIHRoaXMgd291bGQgbWVhbiBsb3NpbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgZ3JhcGguXCIpO2Zvcih2YXIgZSxuLHI9dGhpcy5lbXB0eUNvcHkodCksaT10aGlzLl9lZGdlcy52YWx1ZXMoKTshMCE9PShlPWkubmV4dCgpKS5kb25lOylDdChyLFwiY29weVwiLCExLChuPWUudmFsdWUpLnVuZGlyZWN0ZWQsbi5rZXksbi5zb3VyY2Uua2V5LG4udGFyZ2V0LmtleSxjKHt9LG4uYXR0cmlidXRlcykpO3JldHVybiByfSxpLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmV4cG9ydCgpfSxpLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJbb2JqZWN0IEdyYXBoXVwifSxpLmluc3BlY3Q9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLG49e307dGhpcy5fbm9kZXMuZm9yRWFjaCgoZnVuY3Rpb24odCxlKXtuW2VdPXQuYXR0cmlidXRlc30pKTt2YXIgcj17fSxpPXt9O3RoaXMuX2VkZ2VzLmZvckVhY2goKGZ1bmN0aW9uKHQsbil7dmFyIG8sYT10LnVuZGlyZWN0ZWQ/XCItLVwiOlwiLT5cIix1PVwiXCIsYz10LnNvdXJjZS5rZXkscz10LnRhcmdldC5rZXk7dC51bmRpcmVjdGVkJiZjPnMmJihvPWMsYz1zLHM9byk7dmFyIGQ9XCIoXCIuY29uY2F0KGMsXCIpXCIpLmNvbmNhdChhLFwiKFwiKS5jb25jYXQocyxcIilcIik7bi5zdGFydHNXaXRoKFwiZ2VpZF9cIik/ZS5tdWx0aSYmKHZvaWQgMD09PWlbZF0/aVtkXT0wOmlbZF0rKyx1Kz1cIlwiLmNvbmNhdChpW2RdLFwiLiBcIikpOnUrPVwiW1wiLmNvbmNhdChuLFwiXTogXCIpLHJbdSs9ZF09dC5hdHRyaWJ1dGVzfSkpO3ZhciBvPXt9O2Zvcih2YXIgYSBpbiB0aGlzKXRoaXMuaGFzT3duUHJvcGVydHkoYSkmJiFOdC5oYXMoYSkmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHRoaXNbYV0mJlwic3ltYm9sXCIhPT10KGEpJiYob1thXT10aGlzW2FdKTtyZXR1cm4gby5hdHRyaWJ1dGVzPXRoaXMuX2F0dHJpYnV0ZXMsby5ub2Rlcz1uLG8uZWRnZXM9cixmKG8sXCJjb25zdHJ1Y3RvclwiLHRoaXMuY29uc3RydWN0b3IpLG99LHJ9KHcuZXhwb3J0cy5FdmVudEVtaXR0ZXIpO1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJihXdC5wcm90b3R5cGVbU3ltYm9sLmZvcihcIm5vZGVqcy51dGlsLmluc3BlY3QuY3VzdG9tXCIpXT1XdC5wcm90b3R5cGUuaW5zcGVjdCksW3tuYW1lOmZ1bmN0aW9uKHQpe3JldHVyblwiXCIuY29uY2F0KHQsXCJFZGdlXCIpfSxnZW5lcmF0ZUtleTohMH0se25hbWU6ZnVuY3Rpb24odCl7cmV0dXJuXCJcIi5jb25jYXQodCxcIkRpcmVjdGVkRWRnZVwiKX0sZ2VuZXJhdGVLZXk6ITAsdHlwZTpcImRpcmVjdGVkXCJ9LHtuYW1lOmZ1bmN0aW9uKHQpe3JldHVyblwiXCIuY29uY2F0KHQsXCJVbmRpcmVjdGVkRWRnZVwiKX0sZ2VuZXJhdGVLZXk6ITAsdHlwZTpcInVuZGlyZWN0ZWRcIn0se25hbWU6ZnVuY3Rpb24odCl7cmV0dXJuXCJcIi5jb25jYXQodCxcIkVkZ2VXaXRoS2V5XCIpfX0se25hbWU6ZnVuY3Rpb24odCl7cmV0dXJuXCJcIi5jb25jYXQodCxcIkRpcmVjdGVkRWRnZVdpdGhLZXlcIil9LHR5cGU6XCJkaXJlY3RlZFwifSx7bmFtZTpmdW5jdGlvbih0KXtyZXR1cm5cIlwiLmNvbmNhdCh0LFwiVW5kaXJlY3RlZEVkZ2VXaXRoS2V5XCIpfSx0eXBlOlwidW5kaXJlY3RlZFwifV0uZm9yRWFjaCgoZnVuY3Rpb24odCl7W1wiYWRkXCIsXCJtZXJnZVwiLFwidXBkYXRlXCJdLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciBuPXQubmFtZShlKSxyPVwiYWRkXCI9PT1lP0N0Onp0O3QuZ2VuZXJhdGVLZXk/V3QucHJvdG90eXBlW25dPWZ1bmN0aW9uKGksbyxhKXtyZXR1cm4gcih0aGlzLG4sITAsXCJ1bmRpcmVjdGVkXCI9PT0odC50eXBlfHx0aGlzLnR5cGUpLG51bGwsaSxvLGEsXCJ1cGRhdGVcIj09PWUpfTpXdC5wcm90b3R5cGVbbl09ZnVuY3Rpb24oaSxvLGEsdSl7cmV0dXJuIHIodGhpcyxuLCExLFwidW5kaXJlY3RlZFwiPT09KHQudHlwZXx8dGhpcy50eXBlKSxpLG8sYSx1LFwidXBkYXRlXCI9PT1lKX19KSl9KSksZnVuY3Rpb24odCl7WC5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgbj1lLm5hbWUscj1lLmF0dGFjaGVyO3IodCxuKFwiTm9kZVwiKSwwKSxyKHQsbihcIlNvdXJjZVwiKSwxKSxyKHQsbihcIlRhcmdldFwiKSwyKSxyKHQsbihcIk9wcG9zaXRlXCIpLDMpfSkpfShXdCksZnVuY3Rpb24odCl7Wi5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgbj1lLm5hbWUscj1lLmF0dGFjaGVyO3IodCxuKFwiRWRnZVwiKSxcIm1peGVkXCIpLHIodCxuKFwiRGlyZWN0ZWRFZGdlXCIpLFwiZGlyZWN0ZWRcIikscih0LG4oXCJVbmRpcmVjdGVkRWRnZVwiKSxcInVuZGlyZWN0ZWRcIil9KSl9KFd0KSxmdW5jdGlvbih0KXtudC5mb3JFYWNoKChmdW5jdGlvbihlKXshZnVuY3Rpb24odCxlKXt2YXIgbj1lLm5hbWUscj1lLnR5cGUsaT1lLmRpcmVjdGlvbjt0LnByb3RvdHlwZVtuXT1mdW5jdGlvbih0LGUpe2lmKFwibWl4ZWRcIiE9PXImJlwibWl4ZWRcIiE9PXRoaXMudHlwZSYmciE9PXRoaXMudHlwZSlyZXR1cm5bXTtpZighYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gc3QodGhpcyxyKTtpZigxPT09YXJndW1lbnRzLmxlbmd0aCl7dD1cIlwiK3Q7dmFyIG89dGhpcy5fbm9kZXMuZ2V0KHQpO2lmKHZvaWQgMD09PW8pdGhyb3cgbmV3IEkoXCJHcmFwaC5cIi5jb25jYXQobiwnOiBjb3VsZCBub3QgZmluZCB0aGUgXCInKS5jb25jYXQodCwnXCIgbm9kZSBpbiB0aGUgZ3JhcGguJykpO3JldHVybiBmdCh0aGlzLm11bHRpLFwibWl4ZWRcIj09PXI/dGhpcy50eXBlOnIsaSxvKX1pZigyPT09YXJndW1lbnRzLmxlbmd0aCl7dD1cIlwiK3QsZT1cIlwiK2U7dmFyIGE9dGhpcy5fbm9kZXMuZ2V0KHQpO2lmKCFhKXRocm93IG5ldyBJKFwiR3JhcGguXCIuY29uY2F0KG4sJzogIGNvdWxkIG5vdCBmaW5kIHRoZSBcIicpLmNvbmNhdCh0LCdcIiBzb3VyY2Ugbm9kZSBpbiB0aGUgZ3JhcGguJykpO2lmKCF0aGlzLl9ub2Rlcy5oYXMoZSkpdGhyb3cgbmV3IEkoXCJHcmFwaC5cIi5jb25jYXQobiwnOiAgY291bGQgbm90IGZpbmQgdGhlIFwiJykuY29uY2F0KGUsJ1wiIHRhcmdldCBub2RlIGluIHRoZSBncmFwaC4nKSk7cmV0dXJuIHl0KHIsdGhpcy5tdWx0aSxpLGEsZSl9dGhyb3cgbmV3IEYoXCJHcmFwaC5cIi5jb25jYXQobixcIjogdG9vIG1hbnkgYXJndW1lbnRzIChleHBlY3RpbmcgMCwgMSBvciAyIGFuZCBnb3QgXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoLFwiKS5cIikpfX0odCxlKSxmdW5jdGlvbih0LGUpe3ZhciBuPWUubmFtZSxyPWUudHlwZSxpPWUuZGlyZWN0aW9uLG89XCJmb3JFYWNoXCIrblswXS50b1VwcGVyQ2FzZSgpK24uc2xpY2UoMSwtMSk7dC5wcm90b3R5cGVbb109ZnVuY3Rpb24odCxlLG4pe2lmKFwibWl4ZWRcIj09PXJ8fFwibWl4ZWRcIj09PXRoaXMudHlwZXx8cj09PXRoaXMudHlwZSl7aWYoMT09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGR0KCExLHRoaXMscixuPXQpO2lmKDI9PT1hcmd1bWVudHMubGVuZ3RoKXt0PVwiXCIrdCxuPWU7dmFyIGE9dGhpcy5fbm9kZXMuZ2V0KHQpO2lmKHZvaWQgMD09PWEpdGhyb3cgbmV3IEkoXCJHcmFwaC5cIi5jb25jYXQobywnOiBjb3VsZCBub3QgZmluZCB0aGUgXCInKS5jb25jYXQodCwnXCIgbm9kZSBpbiB0aGUgZ3JhcGguJykpO3JldHVybiBwdCghMSx0aGlzLm11bHRpLFwibWl4ZWRcIj09PXI/dGhpcy50eXBlOnIsaSxhLG4pfWlmKDM9PT1hcmd1bWVudHMubGVuZ3RoKXt0PVwiXCIrdCxlPVwiXCIrZTt2YXIgdT10aGlzLl9ub2Rlcy5nZXQodCk7aWYoIXUpdGhyb3cgbmV3IEkoXCJHcmFwaC5cIi5jb25jYXQobywnOiAgY291bGQgbm90IGZpbmQgdGhlIFwiJykuY29uY2F0KHQsJ1wiIHNvdXJjZSBub2RlIGluIHRoZSBncmFwaC4nKSk7aWYoIXRoaXMuX25vZGVzLmhhcyhlKSl0aHJvdyBuZXcgSShcIkdyYXBoLlwiLmNvbmNhdChvLCc6ICBjb3VsZCBub3QgZmluZCB0aGUgXCInKS5jb25jYXQoZSwnXCIgdGFyZ2V0IG5vZGUgaW4gdGhlIGdyYXBoLicpKTtyZXR1cm4gZ3QoITEscix0aGlzLm11bHRpLGksdSxlLG4pfXRocm93IG5ldyBGKFwiR3JhcGguXCIuY29uY2F0KG8sXCI6IHRvbyBtYW55IGFyZ3VtZW50cyAoZXhwZWN0aW5nIDEsIDIgb3IgMyBhbmQgZ290IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCxcIikuXCIpKX19O3ZhciBhPVwibWFwXCIrblswXS50b1VwcGVyQ2FzZSgpK24uc2xpY2UoMSk7dC5wcm90b3R5cGVbYV09ZnVuY3Rpb24oKXt2YXIgdCxlPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksbj1lLnBvcCgpO2lmKDA9PT1lLmxlbmd0aCl7dmFyIGk9MDtcImRpcmVjdGVkXCIhPT1yJiYoaSs9dGhpcy51bmRpcmVjdGVkU2l6ZSksXCJ1bmRpcmVjdGVkXCIhPT1yJiYoaSs9dGhpcy5kaXJlY3RlZFNpemUpLHQ9bmV3IEFycmF5KGkpO3ZhciBhPTA7ZS5wdXNoKChmdW5jdGlvbihlLHIsaSxvLHUsYyxzKXt0W2ErK109bihlLHIsaSxvLHUsYyxzKX0pKX1lbHNlIHQ9W10sZS5wdXNoKChmdW5jdGlvbihlLHIsaSxvLGEsdSxjKXt0LnB1c2gobihlLHIsaSxvLGEsdSxjKSl9KSk7cmV0dXJuIHRoaXNbb10uYXBwbHkodGhpcyxlKSx0fTt2YXIgdT1cImZpbHRlclwiK25bMF0udG9VcHBlckNhc2UoKStuLnNsaWNlKDEpO3QucHJvdG90eXBlW3VdPWZ1bmN0aW9uKCl7dmFyIHQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxlPXQucG9wKCksbj1bXTtyZXR1cm4gdC5wdXNoKChmdW5jdGlvbih0LHIsaSxvLGEsdSxjKXtlKHQscixpLG8sYSx1LGMpJiZuLnB1c2godCl9KSksdGhpc1tvXS5hcHBseSh0aGlzLHQpLG59O3ZhciBjPVwicmVkdWNlXCIrblswXS50b1VwcGVyQ2FzZSgpK24uc2xpY2UoMSk7dC5wcm90b3R5cGVbY109ZnVuY3Rpb24oKXt2YXIgdCxlLG49QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtpZihuLmxlbmd0aDwyfHxuLmxlbmd0aD40KXRocm93IG5ldyBGKFwiR3JhcGguXCIuY29uY2F0KGMsXCI6IGludmFsaWQgbnVtYmVyIG9mIGFyZ3VtZW50cyAoZXhwZWN0aW5nIDIsIDMgb3IgNCBhbmQgZ290IFwiKS5jb25jYXQobi5sZW5ndGgsXCIpLlwiKSk7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgbltuLmxlbmd0aC0xXSYmXCJmdW5jdGlvblwiIT10eXBlb2YgbltuLmxlbmd0aC0yXSl0aHJvdyBuZXcgRihcIkdyYXBoLlwiLmNvbmNhdChjLFwiOiBtaXNzaW5nIGluaXRpYWwgdmFsdWUuIFlvdSBtdXN0IHByb3ZpZGUgaXQgYmVjYXVzZSB0aGUgY2FsbGJhY2sgdGFrZXMgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCBhbmQgd2UgY2Fubm90IGluZmVyIHRoZSBpbml0aWFsIHZhbHVlIGZyb20gdGhlIGZpcnN0IGl0ZXJhdGlvbiwgYXMgeW91IGNvdWxkIHdpdGggYSBzaW1wbGUgYXJyYXkuXCIpKTsyPT09bi5sZW5ndGg/KHQ9blswXSxlPW5bMV0sbj1bXSk6Mz09PW4ubGVuZ3RoPyh0PW5bMV0sZT1uWzJdLG49W25bMF1dKTo0PT09bi5sZW5ndGgmJih0PW5bMl0sZT1uWzNdLG49W25bMF0sblsxXV0pO3ZhciByPWU7cmV0dXJuIG4ucHVzaCgoZnVuY3Rpb24oZSxuLGksbyxhLHUsYyl7cj10KHIsZSxuLGksbyxhLHUsYyl9KSksdGhpc1tvXS5hcHBseSh0aGlzLG4pLHJ9fSh0LGUpLGZ1bmN0aW9uKHQsZSl7dmFyIG49ZS5uYW1lLHI9ZS50eXBlLGk9ZS5kaXJlY3Rpb24sbz1cImZpbmRcIituWzBdLnRvVXBwZXJDYXNlKCkrbi5zbGljZSgxLC0xKTt0LnByb3RvdHlwZVtvXT1mdW5jdGlvbih0LGUsbil7aWYoXCJtaXhlZFwiIT09ciYmXCJtaXhlZFwiIT09dGhpcy50eXBlJiZyIT09dGhpcy50eXBlKXJldHVybiExO2lmKDE9PT1hcmd1bWVudHMubGVuZ3RoKXJldHVybiBkdCghMCx0aGlzLHIsbj10KTtpZigyPT09YXJndW1lbnRzLmxlbmd0aCl7dD1cIlwiK3Qsbj1lO3ZhciBhPXRoaXMuX25vZGVzLmdldCh0KTtpZih2b2lkIDA9PT1hKXRocm93IG5ldyBJKFwiR3JhcGguXCIuY29uY2F0KG8sJzogY291bGQgbm90IGZpbmQgdGhlIFwiJykuY29uY2F0KHQsJ1wiIG5vZGUgaW4gdGhlIGdyYXBoLicpKTtyZXR1cm4gcHQoITAsdGhpcy5tdWx0aSxcIm1peGVkXCI9PT1yP3RoaXMudHlwZTpyLGksYSxuKX1pZigzPT09YXJndW1lbnRzLmxlbmd0aCl7dD1cIlwiK3QsZT1cIlwiK2U7dmFyIHU9dGhpcy5fbm9kZXMuZ2V0KHQpO2lmKCF1KXRocm93IG5ldyBJKFwiR3JhcGguXCIuY29uY2F0KG8sJzogIGNvdWxkIG5vdCBmaW5kIHRoZSBcIicpLmNvbmNhdCh0LCdcIiBzb3VyY2Ugbm9kZSBpbiB0aGUgZ3JhcGguJykpO2lmKCF0aGlzLl9ub2Rlcy5oYXMoZSkpdGhyb3cgbmV3IEkoXCJHcmFwaC5cIi5jb25jYXQobywnOiAgY291bGQgbm90IGZpbmQgdGhlIFwiJykuY29uY2F0KGUsJ1wiIHRhcmdldCBub2RlIGluIHRoZSBncmFwaC4nKSk7cmV0dXJuIGd0KCEwLHIsdGhpcy5tdWx0aSxpLHUsZSxuKX10aHJvdyBuZXcgRihcIkdyYXBoLlwiLmNvbmNhdChvLFwiOiB0b28gbWFueSBhcmd1bWVudHMgKGV4cGVjdGluZyAxLCAyIG9yIDMgYW5kIGdvdCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGgsXCIpLlwiKSl9O3ZhciBhPVwic29tZVwiK25bMF0udG9VcHBlckNhc2UoKStuLnNsaWNlKDEsLTEpO3QucHJvdG90eXBlW2FdPWZ1bmN0aW9uKCl7dmFyIHQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxlPXQucG9wKCk7cmV0dXJuIHQucHVzaCgoZnVuY3Rpb24odCxuLHIsaSxvLGEsdSl7cmV0dXJuIGUodCxuLHIsaSxvLGEsdSl9KSksISF0aGlzW29dLmFwcGx5KHRoaXMsdCl9O3ZhciB1PVwiZXZlcnlcIituWzBdLnRvVXBwZXJDYXNlKCkrbi5zbGljZSgxLC0xKTt0LnByb3RvdHlwZVt1XT1mdW5jdGlvbigpe3ZhciB0PUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksZT10LnBvcCgpO3JldHVybiB0LnB1c2goKGZ1bmN0aW9uKHQsbixyLGksbyxhLHUpe3JldHVybiFlKHQsbixyLGksbyxhLHUpfSkpLCF0aGlzW29dLmFwcGx5KHRoaXMsdCl9fSh0LGUpLGZ1bmN0aW9uKHQsZSl7dmFyIG49ZS5uYW1lLHI9ZS50eXBlLGk9ZS5kaXJlY3Rpb24sbz1uLnNsaWNlKDAsLTEpK1wiRW50cmllc1wiO3QucHJvdG90eXBlW29dPWZ1bmN0aW9uKHQsZSl7aWYoXCJtaXhlZFwiIT09ciYmXCJtaXhlZFwiIT09dGhpcy50eXBlJiZyIT09dGhpcy50eXBlKXJldHVybiBPLmVtcHR5KCk7aWYoIWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGh0KHRoaXMscik7aWYoMT09PWFyZ3VtZW50cy5sZW5ndGgpe3Q9XCJcIit0O3ZhciBuPXRoaXMuX25vZGVzLmdldCh0KTtpZighbil0aHJvdyBuZXcgSShcIkdyYXBoLlwiLmNvbmNhdChvLCc6IGNvdWxkIG5vdCBmaW5kIHRoZSBcIicpLmNvbmNhdCh0LCdcIiBub2RlIGluIHRoZSBncmFwaC4nKSk7cmV0dXJuIGx0KHIsaSxuKX1pZigyPT09YXJndW1lbnRzLmxlbmd0aCl7dD1cIlwiK3QsZT1cIlwiK2U7dmFyIGE9dGhpcy5fbm9kZXMuZ2V0KHQpO2lmKCFhKXRocm93IG5ldyBJKFwiR3JhcGguXCIuY29uY2F0KG8sJzogIGNvdWxkIG5vdCBmaW5kIHRoZSBcIicpLmNvbmNhdCh0LCdcIiBzb3VyY2Ugbm9kZSBpbiB0aGUgZ3JhcGguJykpO2lmKCF0aGlzLl9ub2Rlcy5oYXMoZSkpdGhyb3cgbmV3IEkoXCJHcmFwaC5cIi5jb25jYXQobywnOiAgY291bGQgbm90IGZpbmQgdGhlIFwiJykuY29uY2F0KGUsJ1wiIHRhcmdldCBub2RlIGluIHRoZSBncmFwaC4nKSk7cmV0dXJuIHd0KHIsaSxhLGUpfXRocm93IG5ldyBGKFwiR3JhcGguXCIuY29uY2F0KG8sXCI6IHRvbyBtYW55IGFyZ3VtZW50cyAoZXhwZWN0aW5nIDAsIDEgb3IgMiBhbmQgZ290IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCxcIikuXCIpKX19KHQsZSl9KSl9KFd0KSxmdW5jdGlvbih0KXt2dC5mb3JFYWNoKChmdW5jdGlvbihlKXtHdCh0LGUpLGZ1bmN0aW9uKHQsZSl7dmFyIG49ZS5uYW1lLHI9ZS50eXBlLGk9ZS5kaXJlY3Rpb24sbz1cImZvckVhY2hcIituWzBdLnRvVXBwZXJDYXNlKCkrbi5zbGljZSgxLC0xKTt0LnByb3RvdHlwZVtvXT1mdW5jdGlvbih0LGUpe2lmKFwibWl4ZWRcIj09PXJ8fFwibWl4ZWRcIj09PXRoaXMudHlwZXx8cj09PXRoaXMudHlwZSl7dD1cIlwiK3Q7dmFyIG49dGhpcy5fbm9kZXMuZ2V0KHQpO2lmKHZvaWQgMD09PW4pdGhyb3cgbmV3IEkoXCJHcmFwaC5cIi5jb25jYXQobywnOiBjb3VsZCBub3QgZmluZCB0aGUgXCInKS5jb25jYXQodCwnXCIgbm9kZSBpbiB0aGUgZ3JhcGguJykpO2t0KCExLFwibWl4ZWRcIj09PXI/dGhpcy50eXBlOnIsaSxuLGUpfX07dmFyIGE9XCJtYXBcIituWzBdLnRvVXBwZXJDYXNlKCkrbi5zbGljZSgxKTt0LnByb3RvdHlwZVthXT1mdW5jdGlvbih0LGUpe3ZhciBuPVtdO3JldHVybiB0aGlzW29dKHQsKGZ1bmN0aW9uKHQscil7bi5wdXNoKGUodCxyKSl9KSksbn07dmFyIHU9XCJmaWx0ZXJcIituWzBdLnRvVXBwZXJDYXNlKCkrbi5zbGljZSgxKTt0LnByb3RvdHlwZVt1XT1mdW5jdGlvbih0LGUpe3ZhciBuPVtdO3JldHVybiB0aGlzW29dKHQsKGZ1bmN0aW9uKHQscil7ZSh0LHIpJiZuLnB1c2godCl9KSksbn07dmFyIGM9XCJyZWR1Y2VcIituWzBdLnRvVXBwZXJDYXNlKCkrbi5zbGljZSgxKTt0LnByb3RvdHlwZVtjXT1mdW5jdGlvbih0LGUsbil7aWYoYXJndW1lbnRzLmxlbmd0aDwzKXRocm93IG5ldyBGKFwiR3JhcGguXCIuY29uY2F0KGMsXCI6IG1pc3NpbmcgaW5pdGlhbCB2YWx1ZS4gWW91IG11c3QgcHJvdmlkZSBpdCBiZWNhdXNlIHRoZSBjYWxsYmFjayB0YWtlcyBtb3JlIHRoYW4gb25lIGFyZ3VtZW50IGFuZCB3ZSBjYW5ub3QgaW5mZXIgdGhlIGluaXRpYWwgdmFsdWUgZnJvbSB0aGUgZmlyc3QgaXRlcmF0aW9uLCBhcyB5b3UgY291bGQgd2l0aCBhIHNpbXBsZSBhcnJheS5cIikpO3ZhciByPW47cmV0dXJuIHRoaXNbb10odCwoZnVuY3Rpb24odCxuKXtyPWUocix0LG4pfSkpLHJ9fSh0LGUpLGZ1bmN0aW9uKHQsZSl7dmFyIG49ZS5uYW1lLHI9ZS50eXBlLGk9ZS5kaXJlY3Rpb24sbz1uWzBdLnRvVXBwZXJDYXNlKCkrbi5zbGljZSgxLC0xKSxhPVwiZmluZFwiK287dC5wcm90b3R5cGVbYV09ZnVuY3Rpb24odCxlKXtpZihcIm1peGVkXCI9PT1yfHxcIm1peGVkXCI9PT10aGlzLnR5cGV8fHI9PT10aGlzLnR5cGUpe3Q9XCJcIit0O3ZhciBuPXRoaXMuX25vZGVzLmdldCh0KTtpZih2b2lkIDA9PT1uKXRocm93IG5ldyBJKFwiR3JhcGguXCIuY29uY2F0KGEsJzogY291bGQgbm90IGZpbmQgdGhlIFwiJykuY29uY2F0KHQsJ1wiIG5vZGUgaW4gdGhlIGdyYXBoLicpKTtyZXR1cm4ga3QoITAsXCJtaXhlZFwiPT09cj90aGlzLnR5cGU6cixpLG4sZSl9fTt2YXIgdT1cInNvbWVcIitvO3QucHJvdG90eXBlW3VdPWZ1bmN0aW9uKHQsZSl7cmV0dXJuISF0aGlzW2FdKHQsZSl9O3ZhciBjPVwiZXZlcnlcIitvO3QucHJvdG90eXBlW2NdPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIXRoaXNbYV0odCwoZnVuY3Rpb24odCxuKXtyZXR1cm4hZSh0LG4pfSkpfX0odCxlKSx4dCh0LGUpfSkpfShXdCk7dmFyIFB0PWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIG4oZSl7dmFyIG49Yyh7dHlwZTpcImRpcmVjdGVkXCJ9LGUpO2lmKFwibXVsdGlcImluIG4mJiExIT09bi5tdWx0aSl0aHJvdyBuZXcgRihcIkRpcmVjdGVkR3JhcGguZnJvbTogaW5jb25zaXN0ZW50IGluZGljYXRpb24gdGhhdCB0aGUgZ3JhcGggc2hvdWxkIGJlIG11bHRpIGluIGdpdmVuIG9wdGlvbnMhXCIpO2lmKFwiZGlyZWN0ZWRcIiE9PW4udHlwZSl0aHJvdyBuZXcgRignRGlyZWN0ZWRHcmFwaC5mcm9tOiBpbmNvbnNpc3RlbnQgXCInK24udHlwZSsnXCIgdHlwZSBpbiBnaXZlbiBvcHRpb25zIScpO3JldHVybiB0LmNhbGwodGhpcyxuKXx8dGhpc31yZXR1cm4gZShuLHQpLG59KFd0KSxSdD1mdW5jdGlvbih0KXtmdW5jdGlvbiBuKGUpe3ZhciBuPWMoe3R5cGU6XCJ1bmRpcmVjdGVkXCJ9LGUpO2lmKFwibXVsdGlcImluIG4mJiExIT09bi5tdWx0aSl0aHJvdyBuZXcgRihcIlVuZGlyZWN0ZWRHcmFwaC5mcm9tOiBpbmNvbnNpc3RlbnQgaW5kaWNhdGlvbiB0aGF0IHRoZSBncmFwaCBzaG91bGQgYmUgbXVsdGkgaW4gZ2l2ZW4gb3B0aW9ucyFcIik7aWYoXCJ1bmRpcmVjdGVkXCIhPT1uLnR5cGUpdGhyb3cgbmV3IEYoJ1VuZGlyZWN0ZWRHcmFwaC5mcm9tOiBpbmNvbnNpc3RlbnQgXCInK24udHlwZSsnXCIgdHlwZSBpbiBnaXZlbiBvcHRpb25zIScpO3JldHVybiB0LmNhbGwodGhpcyxuKXx8dGhpc31yZXR1cm4gZShuLHQpLG59KFd0KSxLdD1mdW5jdGlvbih0KXtmdW5jdGlvbiBuKGUpe3ZhciBuPWMoe211bHRpOiEwfSxlKTtpZihcIm11bHRpXCJpbiBuJiYhMCE9PW4ubXVsdGkpdGhyb3cgbmV3IEYoXCJNdWx0aUdyYXBoLmZyb206IGluY29uc2lzdGVudCBpbmRpY2F0aW9uIHRoYXQgdGhlIGdyYXBoIHNob3VsZCBiZSBzaW1wbGUgaW4gZ2l2ZW4gb3B0aW9ucyFcIik7cmV0dXJuIHQuY2FsbCh0aGlzLG4pfHx0aGlzfXJldHVybiBlKG4sdCksbn0oV3QpLFR0PWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIG4oZSl7dmFyIG49Yyh7dHlwZTpcImRpcmVjdGVkXCIsbXVsdGk6ITB9LGUpO2lmKFwibXVsdGlcImluIG4mJiEwIT09bi5tdWx0aSl0aHJvdyBuZXcgRihcIk11bHRpRGlyZWN0ZWRHcmFwaC5mcm9tOiBpbmNvbnNpc3RlbnQgaW5kaWNhdGlvbiB0aGF0IHRoZSBncmFwaCBzaG91bGQgYmUgc2ltcGxlIGluIGdpdmVuIG9wdGlvbnMhXCIpO2lmKFwiZGlyZWN0ZWRcIiE9PW4udHlwZSl0aHJvdyBuZXcgRignTXVsdGlEaXJlY3RlZEdyYXBoLmZyb206IGluY29uc2lzdGVudCBcIicrbi50eXBlKydcIiB0eXBlIGluIGdpdmVuIG9wdGlvbnMhJyk7cmV0dXJuIHQuY2FsbCh0aGlzLG4pfHx0aGlzfXJldHVybiBlKG4sdCksbn0oV3QpLEJ0PWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIG4oZSl7dmFyIG49Yyh7dHlwZTpcInVuZGlyZWN0ZWRcIixtdWx0aTohMH0sZSk7aWYoXCJtdWx0aVwiaW4gbiYmITAhPT1uLm11bHRpKXRocm93IG5ldyBGKFwiTXVsdGlVbmRpcmVjdGVkR3JhcGguZnJvbTogaW5jb25zaXN0ZW50IGluZGljYXRpb24gdGhhdCB0aGUgZ3JhcGggc2hvdWxkIGJlIHNpbXBsZSBpbiBnaXZlbiBvcHRpb25zIVwiKTtpZihcInVuZGlyZWN0ZWRcIiE9PW4udHlwZSl0aHJvdyBuZXcgRignTXVsdGlVbmRpcmVjdGVkR3JhcGguZnJvbTogaW5jb25zaXN0ZW50IFwiJytuLnR5cGUrJ1wiIHR5cGUgaW4gZ2l2ZW4gb3B0aW9ucyEnKTtyZXR1cm4gdC5jYWxsKHRoaXMsbil8fHRoaXN9cmV0dXJuIGUobix0KSxufShXdCk7ZnVuY3Rpb24gRnQodCl7dC5mcm9tPWZ1bmN0aW9uKGUsbil7dmFyIHI9Yyh7fSxlLm9wdGlvbnMsbiksaT1uZXcgdChyKTtyZXR1cm4gaS5pbXBvcnQoZSksaX19cmV0dXJuIEZ0KFd0KSxGdChQdCksRnQoUnQpLEZ0KEt0KSxGdChUdCksRnQoQnQpLFd0LkdyYXBoPVd0LFd0LkRpcmVjdGVkR3JhcGg9UHQsV3QuVW5kaXJlY3RlZEdyYXBoPVJ0LFd0Lk11bHRpR3JhcGg9S3QsV3QuTXVsdGlEaXJlY3RlZEdyYXBoPVR0LFd0Lk11bHRpVW5kaXJlY3RlZEdyYXBoPUJ0LFd0LkludmFsaWRBcmd1bWVudHNHcmFwaEVycm9yPUYsV3QuTm90Rm91bmRHcmFwaEVycm9yPUksV3QuVXNhZ2VHcmFwaEVycm9yPVksV3R9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ncmFwaG9sb2d5LnVtZC5taW4uanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFNpZ21hLmpzIENhbWVyYSBDbGFzc1xuICogPT09PT09PT09PT09PT09PT09PT09PVxuICpcbiAqIENsYXNzIGRlc2lnbmVkIHRvIHN0b3JlIGNhbWVyYSBpbmZvcm1hdGlvbiAmIHVzZWQgdG8gdXBkYXRlIGl0LlxuICogQG1vZHVsZVxuICovXG52YXIgYW5pbWF0ZV8xID0gcmVxdWlyZShcIi4uL3V0aWxzL2FuaW1hdGVcIik7XG52YXIgZWFzaW5nc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi91dGlscy9lYXNpbmdzXCIpKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG4vKipcbiAqIERlZmF1bHRzLlxuICovXG52YXIgREVGQVVMVF9aT09NSU5HX1JBVElPID0gMS41O1xuLyoqXG4gKiBDYW1lcmEgY2xhc3NcbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIENhbWVyYSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ2FtZXJhLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENhbWVyYSgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMueCA9IDAuNTtcbiAgICAgICAgX3RoaXMueSA9IDAuNTtcbiAgICAgICAgX3RoaXMuYW5nbGUgPSAwO1xuICAgICAgICBfdGhpcy5yYXRpbyA9IDE7XG4gICAgICAgIF90aGlzLm1pblJhdGlvID0gbnVsbDtcbiAgICAgICAgX3RoaXMubWF4UmF0aW8gPSBudWxsO1xuICAgICAgICBfdGhpcy5uZXh0RnJhbWUgPSBudWxsO1xuICAgICAgICBfdGhpcy5wcmV2aW91c1N0YXRlID0gbnVsbDtcbiAgICAgICAgX3RoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIC8vIFN0YXRlXG4gICAgICAgIF90aGlzLnByZXZpb3VzU3RhdGUgPSBfdGhpcy5nZXRTdGF0ZSgpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0YXRpYyBtZXRob2QgdXNlZCB0byBjcmVhdGUgYSBDYW1lcmEgb2JqZWN0IHdpdGggYSBnaXZlbiBzdGF0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEByZXR1cm4ge0NhbWVyYX1cbiAgICAgKi9cbiAgICBDYW1lcmEuZnJvbSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgY2FtZXJhID0gbmV3IENhbWVyYSgpO1xuICAgICAgICByZXR1cm4gY2FtZXJhLnNldFN0YXRlKHN0YXRlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1ldGhvZCB1c2VkIHRvIGVuYWJsZSB0aGUgY2FtZXJhLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Q2FtZXJhfVxuICAgICAqL1xuICAgIENhbWVyYS5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1ldGhvZCB1c2VkIHRvIGRpc2FibGUgdGhlIGNhbWVyYS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0NhbWVyYX1cbiAgICAgKi9cbiAgICBDYW1lcmEucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1ldGhvZCB1c2VkIHRvIHJldHJpZXZlIHRoZSBjYW1lcmEncyBjdXJyZW50IHN0YXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7b2JqZWN0fVxuICAgICAqL1xuICAgIENhbWVyYS5wcm90b3R5cGUuZ2V0U3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgICAgICB5OiB0aGlzLnksXG4gICAgICAgICAgICBhbmdsZTogdGhpcy5hbmdsZSxcbiAgICAgICAgICAgIHJhdGlvOiB0aGlzLnJhdGlvLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTWV0aG9kIHVzZWQgdG8gY2hlY2sgd2hldGhlciB0aGUgY2FtZXJhIGhhcyB0aGUgZ2l2ZW4gc3RhdGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9XG4gICAgICovXG4gICAgQ2FtZXJhLnByb3RvdHlwZS5oYXNTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy54ID09PSBzdGF0ZS54ICYmIHRoaXMueSA9PT0gc3RhdGUueSAmJiB0aGlzLnJhdGlvID09PSBzdGF0ZS5yYXRpbyAmJiB0aGlzLmFuZ2xlID09PSBzdGF0ZS5hbmdsZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1ldGhvZCB1c2VkIHRvIHJldHJpZXZlIHRoZSBjYW1lcmEncyBwcmV2aW91cyBzdGF0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge29iamVjdH1cbiAgICAgKi9cbiAgICBDYW1lcmEucHJvdG90eXBlLmdldFByZXZpb3VzU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IHRoaXMucHJldmlvdXNTdGF0ZTtcbiAgICAgICAgaWYgKCFzdGF0ZSlcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogc3RhdGUueCxcbiAgICAgICAgICAgIHk6IHN0YXRlLnksXG4gICAgICAgICAgICBhbmdsZTogc3RhdGUuYW5nbGUsXG4gICAgICAgICAgICByYXRpbzogc3RhdGUucmF0aW8sXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNZXRob2QgdXNlZCB0byBjaGVjayBtaW5SYXRpbyBhbmQgbWF4UmF0aW8gdmFsdWVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHJhdGlvXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIENhbWVyYS5wcm90b3R5cGUuZ2V0Qm91bmRlZFJhdGlvID0gZnVuY3Rpb24gKHJhdGlvKSB7XG4gICAgICAgIHZhciByID0gcmF0aW87XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5taW5SYXRpbyA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgIHIgPSBNYXRoLm1heChyLCB0aGlzLm1pblJhdGlvKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm1heFJhdGlvID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgciA9IE1hdGgubWluKHIsIHRoaXMubWF4UmF0aW8pO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1ldGhvZCB1c2VkIHRvIGNoZWNrIHZhcmlvdXMgdGhpbmdzIHRvIHJldHVybiBhIGxlZ2l0IHN0YXRlIGNhbmRpZGF0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEByZXR1cm4ge29iamVjdH1cbiAgICAgKi9cbiAgICBDYW1lcmEucHJvdG90eXBlLnZhbGlkYXRlU3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIHZhbGlkYXRlZFN0YXRlID0ge307XG4gICAgICAgIGlmICh0eXBlb2Ygc3RhdGUueCA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgIHZhbGlkYXRlZFN0YXRlLnggPSBzdGF0ZS54O1xuICAgICAgICBpZiAodHlwZW9mIHN0YXRlLnkgPT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICB2YWxpZGF0ZWRTdGF0ZS55ID0gc3RhdGUueTtcbiAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZS5hbmdsZSA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgIHZhbGlkYXRlZFN0YXRlLmFuZ2xlID0gc3RhdGUuYW5nbGU7XG4gICAgICAgIGlmICh0eXBlb2Ygc3RhdGUucmF0aW8gPT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICB2YWxpZGF0ZWRTdGF0ZS5yYXRpbyA9IHRoaXMuZ2V0Qm91bmRlZFJhdGlvKHN0YXRlLnJhdGlvKTtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlZFN0YXRlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTWV0aG9kIHVzZWQgdG8gY2hlY2sgd2hldGhlciB0aGUgY2FtZXJhIGlzIGN1cnJlbnRseSBiZWluZyBhbmltYXRlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgQ2FtZXJhLnByb3RvdHlwZS5pc0FuaW1hdGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLm5leHRGcmFtZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1ldGhvZCB1c2VkIHRvIHNldCB0aGUgY2FtZXJhJ3Mgc3RhdGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IHN0YXRlIC0gTmV3IHN0YXRlLlxuICAgICAqIEByZXR1cm4ge0NhbWVyYX1cbiAgICAgKi9cbiAgICBDYW1lcmEucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIC8vIFRPRE86IHVwZGF0ZSBieSBmdW5jdGlvblxuICAgICAgICAvLyBLZWVwaW5nIHRyYWNrIG9mIGxhc3Qgc3RhdGVcbiAgICAgICAgdGhpcy5wcmV2aW91c1N0YXRlID0gdGhpcy5nZXRTdGF0ZSgpO1xuICAgICAgICB2YXIgdmFsaWRTdGF0ZSA9IHRoaXMudmFsaWRhdGVTdGF0ZShzdGF0ZSk7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsaWRTdGF0ZS54ID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgdGhpcy54ID0gdmFsaWRTdGF0ZS54O1xuICAgICAgICBpZiAodHlwZW9mIHZhbGlkU3RhdGUueSA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgIHRoaXMueSA9IHZhbGlkU3RhdGUueTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWxpZFN0YXRlLmFuZ2xlID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IHZhbGlkU3RhdGUuYW5nbGU7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsaWRTdGF0ZS5yYXRpbyA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgIHRoaXMucmF0aW8gPSB2YWxpZFN0YXRlLnJhdGlvO1xuICAgICAgICAvLyBFbWl0dGluZ1xuICAgICAgICBpZiAoIXRoaXMuaGFzU3RhdGUodGhpcy5wcmV2aW91c1N0YXRlKSlcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInVwZGF0ZWRcIiwgdGhpcy5nZXRTdGF0ZSgpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNZXRob2QgdXNlZCB0byB1cGRhdGUgdGhlIGNhbWVyYSdzIHN0YXRlIHVzaW5nIGEgZnVuY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gdXBkYXRlciAtIFVwZGF0ZWQgZnVuY3Rpb24gdGFraW5nIGN1cnJlbnQgc3RhdGUgYW5kXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5pbmcgbmV4dCBzdGF0ZS5cbiAgICAgKiBAcmV0dXJuIHtDYW1lcmF9XG4gICAgICovXG4gICAgQ2FtZXJhLnByb3RvdHlwZS51cGRhdGVTdGF0ZSA9IGZ1bmN0aW9uICh1cGRhdGVyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodXBkYXRlcih0aGlzLmdldFN0YXRlKCkpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNZXRob2QgdXNlZCB0byBhbmltYXRlIHRoZSBjYW1lcmEuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9ICAgICAgICAgICAgICAgICAgICBzdGF0ZSAgICAgIC0gU3RhdGUgdG8gcmVhY2ggZXZlbnR1YWxseS5cbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9ICAgICAgICAgICAgICAgICAgICBvcHRzICAgICAgIC0gT3B0aW9uczpcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9ICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uIC0gRHVyYXRpb24gb2YgdGhlIGFuaW1hdGlvbi5cbiAgICAgKiBAcGFyYW0gIHtzdHJpbmcgfCBudW1iZXIgPT4gbnVtYmVyfSAgIGVhc2luZyAgIC0gRWFzaW5nIGZ1bmN0aW9uIG9yIG5hbWUgb2YgYW4gZXhpc3Rpbmcgb25lXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259ICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgICAtIENhbGxiYWNrXG4gICAgICovXG4gICAgQ2FtZXJhLnByb3RvdHlwZS5hbmltYXRlID0gZnVuY3Rpb24gKHN0YXRlLCBvcHRzLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBhbmltYXRlXzEuQU5JTUFURV9ERUZBVUxUUywgb3B0cyk7XG4gICAgICAgIHZhciB2YWxpZFN0YXRlID0gdGhpcy52YWxpZGF0ZVN0YXRlKHN0YXRlKTtcbiAgICAgICAgdmFyIGVhc2luZyA9IHR5cGVvZiBvcHRpb25zLmVhc2luZyA9PT0gXCJmdW5jdGlvblwiID8gb3B0aW9ucy5lYXNpbmcgOiBlYXNpbmdzXzEuZGVmYXVsdFtvcHRpb25zLmVhc2luZ107XG4gICAgICAgIC8vIFN0YXRlXG4gICAgICAgIHZhciBzdGFydCA9IERhdGUubm93KCksIGluaXRpYWxTdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKTtcbiAgICAgICAgLy8gRnVuY3Rpb24gcGVyZm9ybWluZyB0aGUgYW5pbWF0aW9uXG4gICAgICAgIHZhciBmbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0ID0gKERhdGUubm93KCkgLSBzdGFydCkgLyBvcHRpb25zLmR1cmF0aW9uO1xuICAgICAgICAgICAgLy8gVGhlIGFuaW1hdGlvbiBpcyBvdmVyOlxuICAgICAgICAgICAgaWYgKHQgPj0gMSkge1xuICAgICAgICAgICAgICAgIF90aGlzLm5leHRGcmFtZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUodmFsaWRTdGF0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmFuaW1hdGlvbkNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFuaW1hdGlvbkNhbGxiYWNrLmNhbGwobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFuaW1hdGlvbkNhbGxiYWNrID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY29lZmZpY2llbnQgPSBlYXNpbmcodCk7XG4gICAgICAgICAgICB2YXIgbmV3U3RhdGUgPSB7fTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsaWRTdGF0ZS54ID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgIG5ld1N0YXRlLnggPSBpbml0aWFsU3RhdGUueCArICh2YWxpZFN0YXRlLnggLSBpbml0aWFsU3RhdGUueCkgKiBjb2VmZmljaWVudDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsaWRTdGF0ZS55ID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgIG5ld1N0YXRlLnkgPSBpbml0aWFsU3RhdGUueSArICh2YWxpZFN0YXRlLnkgLSBpbml0aWFsU3RhdGUueSkgKiBjb2VmZmljaWVudDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsaWRTdGF0ZS5hbmdsZSA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5hbmdsZSA9IGluaXRpYWxTdGF0ZS5hbmdsZSArICh2YWxpZFN0YXRlLmFuZ2xlIC0gaW5pdGlhbFN0YXRlLmFuZ2xlKSAqIGNvZWZmaWNpZW50O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWxpZFN0YXRlLnJhdGlvID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgIG5ld1N0YXRlLnJhdGlvID0gaW5pdGlhbFN0YXRlLnJhdGlvICsgKHZhbGlkU3RhdGUucmF0aW8gLSBpbml0aWFsU3RhdGUucmF0aW8pICogY29lZmZpY2llbnQ7XG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgICAgICAgICBfdGhpcy5uZXh0RnJhbWUgPSAoMCwgdXRpbHNfMS5yZXF1ZXN0RnJhbWUpKGZuKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMubmV4dEZyYW1lKSB7XG4gICAgICAgICAgICAoMCwgdXRpbHNfMS5jYW5jZWxGcmFtZSkodGhpcy5uZXh0RnJhbWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25DYWxsYmFjay5jYWxsKG51bGwpO1xuICAgICAgICAgICAgdGhpcy5uZXh0RnJhbWUgPSAoMCwgdXRpbHNfMS5yZXF1ZXN0RnJhbWUpKGZuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZuKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbmltYXRpb25DYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTWV0aG9kIHVzZWQgdG8gem9vbSB0aGUgY2FtZXJhLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7bnVtYmVyfG9iamVjdH0gZmFjdG9yT3JPcHRpb25zIC0gRmFjdG9yIG9yIG9wdGlvbnMuXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgQ2FtZXJhLnByb3RvdHlwZS5hbmltYXRlZFpvb20gPSBmdW5jdGlvbiAoZmFjdG9yT3JPcHRpb25zKSB7XG4gICAgICAgIGlmICghZmFjdG9yT3JPcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUoeyByYXRpbzogdGhpcy5yYXRpbyAvIERFRkFVTFRfWk9PTUlOR19SQVRJTyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZmFjdG9yT3JPcHRpb25zID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFuaW1hdGUoeyByYXRpbzogdGhpcy5yYXRpbyAvIGZhY3Rvck9yT3B0aW9ucyB9KTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICByYXRpbzogdGhpcy5yYXRpbyAvIChmYWN0b3JPck9wdGlvbnMuZmFjdG9yIHx8IERFRkFVTFRfWk9PTUlOR19SQVRJTyksXG4gICAgICAgICAgICAgICAgfSwgZmFjdG9yT3JPcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogTWV0aG9kIHVzZWQgdG8gdW56b29tIHRoZSBjYW1lcmEuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ8b2JqZWN0fSBmYWN0b3JPck9wdGlvbnMgLSBGYWN0b3Igb3Igb3B0aW9ucy5cbiAgICAgKi9cbiAgICBDYW1lcmEucHJvdG90eXBlLmFuaW1hdGVkVW56b29tID0gZnVuY3Rpb24gKGZhY3Rvck9yT3B0aW9ucykge1xuICAgICAgICBpZiAoIWZhY3Rvck9yT3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlKHsgcmF0aW86IHRoaXMucmF0aW8gKiBERUZBVUxUX1pPT01JTkdfUkFUSU8gfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGZhY3Rvck9yT3B0aW9ucyA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hbmltYXRlKHsgcmF0aW86IHRoaXMucmF0aW8gKiBmYWN0b3JPck9wdGlvbnMgfSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgcmF0aW86IHRoaXMucmF0aW8gKiAoZmFjdG9yT3JPcHRpb25zLmZhY3RvciB8fCBERUZBVUxUX1pPT01JTkdfUkFUSU8pLFxuICAgICAgICAgICAgICAgIH0sIGZhY3Rvck9yT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1ldGhvZCB1c2VkIHRvIHJlc2V0IHRoZSBjYW1lcmEuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zLlxuICAgICAqL1xuICAgIENhbWVyYS5wcm90b3R5cGUuYW5pbWF0ZWRSZXNldCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSh7XG4gICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICB5OiAwLjUsXG4gICAgICAgICAgICByYXRpbzogMSxcbiAgICAgICAgICAgIGFuZ2xlOiAwLFxuICAgICAgICB9LCBvcHRpb25zKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBuZXcgQ2FtZXJhIGluc3RhbmNlLCB3aXRoIHRoZSBzYW1lIHN0YXRlIGFzIHRoZSBjdXJyZW50IGNhbWVyYS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0NhbWVyYX1cbiAgICAgKi9cbiAgICBDYW1lcmEucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBDYW1lcmEuZnJvbSh0aGlzLmdldFN0YXRlKCkpO1xuICAgIH07XG4gICAgcmV0dXJuIENhbWVyYTtcbn0odHlwZXNfMS5UeXBlZEV2ZW50RW1pdHRlcikpO1xuZXhwb3J0cy5kZWZhdWx0ID0gQ2FtZXJhO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0V2hlZWxEZWx0YSA9IGV4cG9ydHMuZ2V0VG91Y2hDb29yZHMgPSBleHBvcnRzLmdldFRvdWNoZXNBcnJheSA9IGV4cG9ydHMuZ2V0V2hlZWxDb29yZHMgPSBleHBvcnRzLmdldE1vdXNlQ29vcmRzID0gZXhwb3J0cy5nZXRQb3NpdGlvbiA9IHZvaWQgMDtcbi8qKlxuICogU2lnbWEuanMgQ2FwdG9yIENsYXNzXG4gKiA9PT09PT09PT09PT09PT09PT09PT09XG4gKiBAbW9kdWxlXG4gKi9cbnZhciB0eXBlc18xID0gcmVxdWlyZShcIi4uLy4uL3R5cGVzXCIpO1xuLyoqXG4gKiBDYXB0b3IgdXRpbHMgZnVuY3Rpb25zXG4gKiA9PT09PT09PT09PT09PT09PT09PT09XG4gKi9cbi8qKlxuICogRXh0cmFjdCB0aGUgbG9jYWwgWCBhbmQgWSBjb29yZGluYXRlcyBmcm9tIGEgbW91c2UgZXZlbnQgb3IgdG91Y2ggb2JqZWN0LiBJZlxuICogYSBET00gZWxlbWVudCBpcyBnaXZlbiwgaXQgdXNlcyB0aGlzIGVsZW1lbnQncyBvZmZzZXQgdG8gY29tcHV0ZSB0aGUgcG9zaXRpb25cbiAqICh0aGlzIGFsbG93cyB1c2luZyBldmVudHMgdGhhdCBhcmUgbm90IGJvdW5kIHRvIHRoZSBjb250YWluZXIgaXRzZWxmIGFuZFxuICogc3RpbGwgaGF2ZSBhIHByb3BlciBwb3NpdGlvbikuXG4gKlxuICogQHBhcmFtICB7ZXZlbnR9ICAgICAgIGUgLSBBIG1vdXNlIGV2ZW50IG9yIHRvdWNoIG9iamVjdC5cbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBkb20gLSBBIERPTSBlbGVtZW50IHRvIGNvbXB1dGUgb2Zmc2V0IHJlbGF0aXZlbHkgdG8uXG4gKiBAcmV0dXJuIHtudW1iZXJ9ICAgICAgVGhlIGxvY2FsIFkgdmFsdWUgb2YgdGhlIG1vdXNlLlxuICovXG5mdW5jdGlvbiBnZXRQb3NpdGlvbihlLCBkb20pIHtcbiAgICB2YXIgYmJveCA9IGRvbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBlLmNsaWVudFggLSBiYm94LmxlZnQsXG4gICAgICAgIHk6IGUuY2xpZW50WSAtIGJib3gudG9wLFxuICAgIH07XG59XG5leHBvcnRzLmdldFBvc2l0aW9uID0gZ2V0UG9zaXRpb247XG4vKipcbiAqIENvbnZlcnQgbW91c2UgY29vcmRzIHRvIHNpZ21hIGNvb3Jkcy5cbiAqXG4gKiBAcGFyYW0gIHtldmVudH0gICAgICAgZSAgIC0gQSBtb3VzZSBldmVudCBvciB0b3VjaCBvYmplY3QuXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZG9tIC0gQSBET00gZWxlbWVudCB0byBjb21wdXRlIG9mZnNldCByZWxhdGl2ZWx5IHRvLlxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5mdW5jdGlvbiBnZXRNb3VzZUNvb3JkcyhlLCBkb20pIHtcbiAgICB2YXIgcmVzID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGdldFBvc2l0aW9uKGUsIGRvbSkpLCB7IHNpZ21hRGVmYXVsdFByZXZlbnRlZDogZmFsc2UsIHByZXZlbnRTaWdtYURlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlcy5zaWdtYURlZmF1bHRQcmV2ZW50ZWQgPSB0cnVlO1xuICAgICAgICB9LCBvcmlnaW5hbDogZSB9KTtcbiAgICByZXR1cm4gcmVzO1xufVxuZXhwb3J0cy5nZXRNb3VzZUNvb3JkcyA9IGdldE1vdXNlQ29vcmRzO1xuLyoqXG4gKiBDb252ZXJ0IG1vdXNlIHdoZWVsIGV2ZW50IGNvb3JkcyB0byBzaWdtYSBjb29yZHMuXG4gKlxuICogQHBhcmFtICB7ZXZlbnR9ICAgICAgIGUgICAtIEEgd2hlZWwgbW91c2UgZXZlbnQuXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZG9tIC0gQSBET00gZWxlbWVudCB0byBjb21wdXRlIG9mZnNldCByZWxhdGl2ZWx5IHRvLlxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5mdW5jdGlvbiBnZXRXaGVlbENvb3JkcyhlLCBkb20pIHtcbiAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIGdldE1vdXNlQ29vcmRzKGUsIGRvbSkpLCB7IGRlbHRhOiBnZXRXaGVlbERlbHRhKGUpIH0pO1xufVxuZXhwb3J0cy5nZXRXaGVlbENvb3JkcyA9IGdldFdoZWVsQ29vcmRzO1xudmFyIE1BWF9UT1VDSEVTID0gMjtcbmZ1bmN0aW9uIGdldFRvdWNoZXNBcnJheSh0b3VjaGVzKSB7XG4gICAgdmFyIGFyciA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gTWF0aC5taW4odG91Y2hlcy5sZW5ndGgsIE1BWF9UT1VDSEVTKTsgaSA8IGw7IGkrKylcbiAgICAgICAgYXJyLnB1c2godG91Y2hlc1tpXSk7XG4gICAgcmV0dXJuIGFycjtcbn1cbmV4cG9ydHMuZ2V0VG91Y2hlc0FycmF5ID0gZ2V0VG91Y2hlc0FycmF5O1xuLyoqXG4gKiBDb252ZXJ0IHRvdWNoIGNvb3JkcyB0byBzaWdtYSBjb29yZHMuXG4gKlxuICogQHBhcmFtICB7ZXZlbnR9ICAgICAgIGUgICAtIEEgdG91Y2ggZXZlbnQuXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZG9tIC0gQSBET00gZWxlbWVudCB0byBjb21wdXRlIG9mZnNldCByZWxhdGl2ZWx5IHRvLlxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5mdW5jdGlvbiBnZXRUb3VjaENvb3JkcyhlLCBkb20pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0b3VjaGVzOiBnZXRUb3VjaGVzQXJyYXkoZS50b3VjaGVzKS5tYXAoZnVuY3Rpb24gKHRvdWNoKSB7IHJldHVybiBnZXRQb3NpdGlvbih0b3VjaCwgZG9tKTsgfSksXG4gICAgICAgIG9yaWdpbmFsOiBlLFxuICAgIH07XG59XG5leHBvcnRzLmdldFRvdWNoQ29vcmRzID0gZ2V0VG91Y2hDb29yZHM7XG4vKipcbiAqIEV4dHJhY3QgdGhlIHdoZWVsIGRlbHRhIGZyb20gYSBtb3VzZSBldmVudCBvciB0b3VjaCBvYmplY3QuXG4gKlxuICogQHBhcmFtICB7ZXZlbnR9ICBlIC0gQSBtb3VzZSBldmVudCBvciB0b3VjaCBvYmplY3QuXG4gKiBAcmV0dXJuIHtudW1iZXJ9ICAgICBUaGUgd2hlZWwgZGVsdGEgb2YgdGhlIG1vdXNlLlxuICovXG5mdW5jdGlvbiBnZXRXaGVlbERlbHRhKGUpIHtcbiAgICAvLyBUT0RPOiBjaGVjayB0aG9zZSByYXRpb3MgYWdhaW4gdG8gZW5zdXJlIGEgY2xlYW4gQ2hyb21lL0ZpcmVmb3ggY29tcGF0XG4gICAgaWYgKHR5cGVvZiBlLmRlbHRhWSAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgcmV0dXJuIChlLmRlbHRhWSAqIC0zKSAvIDM2MDtcbiAgICBpZiAodHlwZW9mIGUuZGV0YWlsICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICByZXR1cm4gZS5kZXRhaWwgLyAtOTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYXB0b3I6IGNvdWxkIG5vdCBleHRyYWN0IGRlbHRhIGZyb20gZXZlbnQuXCIpO1xufVxuZXhwb3J0cy5nZXRXaGVlbERlbHRhID0gZ2V0V2hlZWxEZWx0YTtcbi8qKlxuICogQWJzdHJhY3QgY2xhc3MgcmVwcmVzZW50aW5nIGEgY2FwdG9yIGxpa2UgdGhlIHVzZXIncyBtb3VzZSBvciB0b3VjaCBjb250cm9scy5cbiAqL1xudmFyIENhcHRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ2FwdG9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENhcHRvcihjb250YWluZXIsIHJlbmRlcmVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIC8vIFByb3BlcnRpZXNcbiAgICAgICAgX3RoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICBfdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBDYXB0b3I7XG59KHR5cGVzXzEuVHlwZWRFdmVudEVtaXR0ZXIpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IENhcHRvcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNhcHRvcl8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2NhcHRvclwiKSk7XG4vKipcbiAqIENvbnN0YW50cy5cbiAqL1xudmFyIERSQUdfVElNRU9VVCA9IDEwMDtcbnZhciBEUkFHR0VEX0VWRU5UU19UT0xFUkFOQ0UgPSAzO1xudmFyIE1PVVNFX0lORVJUSUFfRFVSQVRJT04gPSAyMDA7XG52YXIgTU9VU0VfSU5FUlRJQV9SQVRJTyA9IDM7XG52YXIgTU9VU0VfWk9PTV9EVVJBVElPTiA9IDI1MDtcbnZhciBaT09NSU5HX1JBVElPID0gMS43O1xudmFyIERPVUJMRV9DTElDS19USU1FT1VUID0gMzAwO1xudmFyIERPVUJMRV9DTElDS19aT09NSU5HX1JBVElPID0gMi4yO1xudmFyIERPVUJMRV9DTElDS19aT09NSU5HX0RVUkFUSU9OID0gMjAwO1xuLyoqXG4gKiBNb3VzZSBjYXB0b3IgY2xhc3MuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBNb3VzZUNhcHRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTW91c2VDYXB0b3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTW91c2VDYXB0b3IoY29udGFpbmVyLCByZW5kZXJlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBjb250YWluZXIsIHJlbmRlcmVyKSB8fCB0aGlzO1xuICAgICAgICAvLyBTdGF0ZVxuICAgICAgICBfdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMuZHJhZ2dlZEV2ZW50cyA9IDA7XG4gICAgICAgIF90aGlzLmRvd25TdGFydFRpbWUgPSBudWxsO1xuICAgICAgICBfdGhpcy5sYXN0TW91c2VYID0gbnVsbDtcbiAgICAgICAgX3RoaXMubGFzdE1vdXNlWSA9IG51bGw7XG4gICAgICAgIF90aGlzLmlzTW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzTW92aW5nID0gZmFsc2U7XG4gICAgICAgIF90aGlzLm1vdmluZ1RpbWVvdXQgPSBudWxsO1xuICAgICAgICBfdGhpcy5zdGFydENhbWVyYVN0YXRlID0gbnVsbDtcbiAgICAgICAgX3RoaXMuY2xpY2tzID0gMDtcbiAgICAgICAgX3RoaXMuZG91YmxlQ2xpY2tUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgX3RoaXMuY3VycmVudFdoZWVsRGlyZWN0aW9uID0gMDtcbiAgICAgICAgLy8gQmluZGluZyBtZXRob2RzXG4gICAgICAgIF90aGlzLmhhbmRsZUNsaWNrID0gX3RoaXMuaGFuZGxlQ2xpY2suYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLmhhbmRsZVJpZ2h0Q2xpY2sgPSBfdGhpcy5oYW5kbGVSaWdodENsaWNrLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5oYW5kbGVEb3duID0gX3RoaXMuaGFuZGxlRG93bi5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMuaGFuZGxlVXAgPSBfdGhpcy5oYW5kbGVVcC5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMuaGFuZGxlTW92ZSA9IF90aGlzLmhhbmRsZU1vdmUuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLmhhbmRsZVdoZWVsID0gX3RoaXMuaGFuZGxlV2hlZWwuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLmhhbmRsZU91dCA9IF90aGlzLmhhbmRsZU91dC5iaW5kKF90aGlzKTtcbiAgICAgICAgLy8gQmluZGluZyBldmVudHNcbiAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfdGhpcy5oYW5kbGVDbGljaywgZmFsc2UpO1xuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIF90aGlzLmhhbmRsZVJpZ2h0Q2xpY2ssIGZhbHNlKTtcbiAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgX3RoaXMuaGFuZGxlRG93biwgZmFsc2UpO1xuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIF90aGlzLmhhbmRsZVdoZWVsLCBmYWxzZSk7XG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgX3RoaXMuaGFuZGxlT3V0LCBmYWxzZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgX3RoaXMuaGFuZGxlTW92ZSwgZmFsc2UpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBfdGhpcy5oYW5kbGVVcCwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE1vdXNlQ2FwdG9yLnByb3RvdHlwZS5raWxsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVDbGljayk7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgdGhpcy5oYW5kbGVSaWdodENsaWNrKTtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5oYW5kbGVEb3duKTtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCB0aGlzLmhhbmRsZVdoZWVsKTtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCB0aGlzLmhhbmRsZU91dCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5oYW5kbGVNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5oYW5kbGVVcCk7XG4gICAgfTtcbiAgICBNb3VzZUNhcHRvci5wcm90b3R5cGUuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5jbGlja3MrKztcbiAgICAgICAgaWYgKHRoaXMuY2xpY2tzID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrcyA9IDA7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuZG91YmxlQ2xpY2tUaW1lb3V0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZG91YmxlQ2xpY2tUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRvdWJsZUNsaWNrVGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVEb3VibGVDbGljayhlKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmNsaWNrcyA9IDA7XG4gICAgICAgICAgICBfdGhpcy5kb3VibGVDbGlja1RpbWVvdXQgPSBudWxsO1xuICAgICAgICB9LCBET1VCTEVfQ0xJQ0tfVElNRU9VVCk7XG4gICAgICAgIC8vIE5PVEU6IHRoaXMgaXMgaGVyZSB0byBwcmV2ZW50IGNsaWNrIGV2ZW50cyBvbiBkcmFnXG4gICAgICAgIGlmICh0aGlzLmRyYWdnZWRFdmVudHMgPCBEUkFHR0VEX0VWRU5UU19UT0xFUkFOQ0UpXG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJjbGlja1wiLCAoMCwgY2FwdG9yXzEuZ2V0TW91c2VDb29yZHMpKGUsIHRoaXMuY29udGFpbmVyKSk7XG4gICAgfTtcbiAgICBNb3VzZUNhcHRvci5wcm90b3R5cGUuaGFuZGxlUmlnaHRDbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLmVtaXQoXCJyaWdodENsaWNrXCIsICgwLCBjYXB0b3JfMS5nZXRNb3VzZUNvb3JkcykoZSwgdGhpcy5jb250YWluZXIpKTtcbiAgICB9O1xuICAgIE1vdXNlQ2FwdG9yLnByb3RvdHlwZS5oYW5kbGVEb3VibGVDbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHZhciBtb3VzZUNvb3JkcyA9ICgwLCBjYXB0b3JfMS5nZXRNb3VzZUNvb3JkcykoZSwgdGhpcy5jb250YWluZXIpO1xuICAgICAgICB0aGlzLmVtaXQoXCJkb3VibGVDbGlja1wiLCBtb3VzZUNvb3Jkcyk7XG4gICAgICAgIGlmIChtb3VzZUNvb3Jkcy5zaWdtYURlZmF1bHRQcmV2ZW50ZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgdmFyIGNhbWVyYSA9IHRoaXMucmVuZGVyZXIuZ2V0Q2FtZXJhKCk7XG4gICAgICAgIHZhciBuZXdSYXRpbyA9IGNhbWVyYS5nZXRCb3VuZGVkUmF0aW8oY2FtZXJhLmdldFN0YXRlKCkucmF0aW8gLyBET1VCTEVfQ0xJQ0tfWk9PTUlOR19SQVRJTyk7XG4gICAgICAgIGNhbWVyYS5hbmltYXRlKHRoaXMucmVuZGVyZXIuZ2V0Vmlld3BvcnRab29tZWRTdGF0ZSgoMCwgY2FwdG9yXzEuZ2V0UG9zaXRpb24pKGUsIHRoaXMuY29udGFpbmVyKSwgbmV3UmF0aW8pLCB7XG4gICAgICAgICAgICBlYXNpbmc6IFwicXVhZHJhdGljSW5PdXRcIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiBET1VCTEVfQ0xJQ0tfWk9PTUlOR19EVVJBVElPTixcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNb3VzZUNhcHRvci5wcm90b3R5cGUuaGFuZGxlRG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBXZSBvbmx5IHN0YXJ0IGRyYWdnaW5nIG9uIGxlZnQgYnV0dG9uXG4gICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zdGFydENhbWVyYVN0YXRlID0gdGhpcy5yZW5kZXJlci5nZXRDYW1lcmEoKS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdmFyIF9hID0gKDAsIGNhcHRvcl8xLmdldFBvc2l0aW9uKShlLCB0aGlzLmNvbnRhaW5lciksIHggPSBfYS54LCB5ID0gX2EueTtcbiAgICAgICAgICAgIHRoaXMubGFzdE1vdXNlWCA9IHg7XG4gICAgICAgICAgICB0aGlzLmxhc3RNb3VzZVkgPSB5O1xuICAgICAgICAgICAgdGhpcy5kcmFnZ2VkRXZlbnRzID0gMDtcbiAgICAgICAgICAgIHRoaXMuZG93blN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICB0aGlzLmlzTW91c2VEb3duID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVtaXQoXCJtb3VzZWRvd25cIiwgKDAsIGNhcHRvcl8xLmdldE1vdXNlQ29vcmRzKShlLCB0aGlzLmNvbnRhaW5lcikpO1xuICAgIH07XG4gICAgTW91c2VDYXB0b3IucHJvdG90eXBlLmhhbmRsZVVwID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQgfHwgIXRoaXMuaXNNb3VzZURvd24pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBjYW1lcmEgPSB0aGlzLnJlbmRlcmVyLmdldENhbWVyYSgpO1xuICAgICAgICB0aGlzLmlzTW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5tb3ZpbmdUaW1lb3V0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5tb3ZpbmdUaW1lb3V0KTtcbiAgICAgICAgICAgIHRoaXMubW92aW5nVGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9hID0gKDAsIGNhcHRvcl8xLmdldFBvc2l0aW9uKShlLCB0aGlzLmNvbnRhaW5lciksIHggPSBfYS54LCB5ID0gX2EueTtcbiAgICAgICAgdmFyIGNhbWVyYVN0YXRlID0gY2FtZXJhLmdldFN0YXRlKCksIHByZXZpb3VzQ2FtZXJhU3RhdGUgPSBjYW1lcmEuZ2V0UHJldmlvdXNTdGF0ZSgpIHx8IHsgeDogMCwgeTogMCB9O1xuICAgICAgICBpZiAodGhpcy5pc01vdmluZykge1xuICAgICAgICAgICAgY2FtZXJhLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHg6IGNhbWVyYVN0YXRlLnggKyBNT1VTRV9JTkVSVElBX1JBVElPICogKGNhbWVyYVN0YXRlLnggLSBwcmV2aW91c0NhbWVyYVN0YXRlLngpLFxuICAgICAgICAgICAgICAgIHk6IGNhbWVyYVN0YXRlLnkgKyBNT1VTRV9JTkVSVElBX1JBVElPICogKGNhbWVyYVN0YXRlLnkgLSBwcmV2aW91c0NhbWVyYVN0YXRlLnkpLFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBNT1VTRV9JTkVSVElBX0RVUkFUSU9OLFxuICAgICAgICAgICAgICAgIGVhc2luZzogXCJxdWFkcmF0aWNPdXRcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMubGFzdE1vdXNlWCAhPT0geCB8fCB0aGlzLmxhc3RNb3VzZVkgIT09IHkpIHtcbiAgICAgICAgICAgIGNhbWVyYS5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgeDogY2FtZXJhU3RhdGUueCxcbiAgICAgICAgICAgICAgICB5OiBjYW1lcmFTdGF0ZS55LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmRyYWdnZWRFdmVudHMgPSAwO1xuICAgICAgICAgICAgLy8gTk9URTogdGhpcyByZWZyZXNoIGlzIGhlcmUgdG8gbWFrZSBzdXJlIGBoaWRlRWRnZXNPbk1vdmVgIGNhbiB3b3JrXG4gICAgICAgICAgICAvLyB3aGVuIHNvbWVvbmUgcmVsZWFzZXMgY2FtZXJhIHBhbiBkcmFnIGFmdGVyIGhhdmluZyBzdG9wcGVkIG1vdmluZy5cbiAgICAgICAgICAgIC8vIFNlZSBjb21taXQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9qYWNvbXlhbC9zaWdtYS5qcy9jb21taXQvY2ZkOTE5N2Y3MDMxOTEwOWRiNmI2NzVkZDdjODJiZTQ5M2NhOTVhMlxuICAgICAgICAgICAgLy8gU2VlIGFsc28gaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qYWNvbXlhbC9zaWdtYS5qcy9pc3N1ZXMvMTI5MFxuICAgICAgICAgICAgLy8gSXQgY291bGQgYmUgcG9zc2libGUgdG8gcmVuZGVyIGluc3RlYWQgb2Ygc2NoZWR1bGluZyBhIHJlZnJlc2ggYnV0IGZvclxuICAgICAgICAgICAgLy8gbm93IGl0IHNlZW1zIGdvb2QgZW5vdWdoLlxuICAgICAgICAgICAgX3RoaXMucmVuZGVyZXIucmVmcmVzaCgpO1xuICAgICAgICB9LCAwKTtcbiAgICAgICAgdGhpcy5lbWl0KFwibW91c2V1cFwiLCAoMCwgY2FwdG9yXzEuZ2V0TW91c2VDb29yZHMpKGUsIHRoaXMuY29udGFpbmVyKSk7XG4gICAgfTtcbiAgICBNb3VzZUNhcHRvci5wcm90b3R5cGUuaGFuZGxlTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgbW91c2VDb29yZHMgPSAoMCwgY2FwdG9yXzEuZ2V0TW91c2VDb29yZHMpKGUsIHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgLy8gQWx3YXlzIHRyaWdnZXIgYSBcIm1vdXNlbW92ZWJvZHlcIiBldmVudCwgc28gdGhhdCBpdCBpcyBwb3NzaWJsZSB0byBkZXZlbG9wXG4gICAgICAgIC8vIGEgZHJhZy1hbmQtZHJvcCBlZmZlY3QgdGhhdCB3b3JrcyBldmVuIHdoZW4gdGhlIG1vdXNlIGlzIG91dCBvZiB0aGVcbiAgICAgICAgLy8gY29udGFpbmVyOlxuICAgICAgICB0aGlzLmVtaXQoXCJtb3VzZW1vdmVib2R5XCIsIG1vdXNlQ29vcmRzKTtcbiAgICAgICAgLy8gT25seSB0cmlnZ2VyIHRoZSBcIm1vdXNlbW92ZVwiIGV2ZW50IHdoZW4gdGhlIG1vdXNlIGlzIGFjdHVhbGx5IGhvdmVyaW5nXG4gICAgICAgIC8vIHRoZSBjb250YWluZXIsIHRvIGF2b2lkIHdlaXJkbHkgaG92ZXJpbmcgbm9kZXMgYW5kL29yIGVkZ2VzIHdoZW4gdGhlXG4gICAgICAgIC8vIG1vdXNlIGlzIG5vdCBob3ZlciB0aGUgY29udGFpbmVyOlxuICAgICAgICBpZiAoZS50YXJnZXQgPT09IHRoaXMuY29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJtb3VzZW1vdmVcIiwgbW91c2VDb29yZHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtb3VzZUNvb3Jkcy5zaWdtYURlZmF1bHRQcmV2ZW50ZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVuIFwiaXNNb3VzZURvd25cIiBhbGwgdGhlIHRpbWUsIHRvIGFsbG93IGRyYWdnaW5nIHRoZVxuICAgICAgICAvLyBzdGFnZSB3aGlsZSB0aGUgbW91c2UgaXMgbm90IGhvdmVyIHRoZSBjb250YWluZXI6XG4gICAgICAgIGlmICh0aGlzLmlzTW91c2VEb3duKSB7XG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dlZEV2ZW50cysrO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm1vdmluZ1RpbWVvdXQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5tb3ZpbmdUaW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubW92aW5nVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5tb3ZpbmdUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBfdGhpcy5pc01vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSwgRFJBR19USU1FT1VUKTtcbiAgICAgICAgICAgIHZhciBjYW1lcmEgPSB0aGlzLnJlbmRlcmVyLmdldENhbWVyYSgpO1xuICAgICAgICAgICAgdmFyIF9hID0gKDAsIGNhcHRvcl8xLmdldFBvc2l0aW9uKShlLCB0aGlzLmNvbnRhaW5lciksIGVYID0gX2EueCwgZVkgPSBfYS55O1xuICAgICAgICAgICAgdmFyIGxhc3RNb3VzZSA9IHRoaXMucmVuZGVyZXIudmlld3BvcnRUb0ZyYW1lZEdyYXBoKHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLmxhc3RNb3VzZVgsXG4gICAgICAgICAgICAgICAgeTogdGhpcy5sYXN0TW91c2VZLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgbW91c2UgPSB0aGlzLnJlbmRlcmVyLnZpZXdwb3J0VG9GcmFtZWRHcmFwaCh7IHg6IGVYLCB5OiBlWSB9KTtcbiAgICAgICAgICAgIHZhciBvZmZzZXRYID0gbGFzdE1vdXNlLnggLSBtb3VzZS54LCBvZmZzZXRZID0gbGFzdE1vdXNlLnkgLSBtb3VzZS55O1xuICAgICAgICAgICAgdmFyIGNhbWVyYVN0YXRlID0gY2FtZXJhLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB2YXIgeCA9IGNhbWVyYVN0YXRlLnggKyBvZmZzZXRYLCB5ID0gY2FtZXJhU3RhdGUueSArIG9mZnNldFk7XG4gICAgICAgICAgICBjYW1lcmEuc2V0U3RhdGUoeyB4OiB4LCB5OiB5IH0pO1xuICAgICAgICAgICAgdGhpcy5sYXN0TW91c2VYID0gZVg7XG4gICAgICAgICAgICB0aGlzLmxhc3RNb3VzZVkgPSBlWTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1vdXNlQ2FwdG9yLnByb3RvdHlwZS5oYW5kbGVXaGVlbCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHZhciBkZWx0YSA9ICgwLCBjYXB0b3JfMS5nZXRXaGVlbERlbHRhKShlKTtcbiAgICAgICAgaWYgKCFkZWx0YSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIHdoZWVsQ29vcmRzID0gKDAsIGNhcHRvcl8xLmdldFdoZWVsQ29vcmRzKShlLCB0aGlzLmNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuZW1pdChcIndoZWVsXCIsIHdoZWVsQ29vcmRzKTtcbiAgICAgICAgaWYgKHdoZWVsQ29vcmRzLnNpZ21hRGVmYXVsdFByZXZlbnRlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gRGVmYXVsdCBiZWhhdmlvclxuICAgICAgICB2YXIgcmF0aW9EaWZmID0gZGVsdGEgPiAwID8gMSAvIFpPT01JTkdfUkFUSU8gOiBaT09NSU5HX1JBVElPO1xuICAgICAgICB2YXIgY2FtZXJhID0gdGhpcy5yZW5kZXJlci5nZXRDYW1lcmEoKTtcbiAgICAgICAgdmFyIG5ld1JhdGlvID0gY2FtZXJhLmdldEJvdW5kZWRSYXRpbyhjYW1lcmEuZ2V0U3RhdGUoKS5yYXRpbyAqIHJhdGlvRGlmZik7XG4gICAgICAgIHZhciB3aGVlbERpcmVjdGlvbiA9IGRlbHRhID4gMCA/IDEgOiAtMTtcbiAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIC8vIENhbmNlbCBldmVudHMgdGhhdCBhcmUgdG9vIGNsb3NlIHRvbyBlYWNoIG90aGVyIGFuZCBpbiB0aGUgc2FtZSBkaXJlY3Rpb246XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRXaGVlbERpcmVjdGlvbiA9PT0gd2hlZWxEaXJlY3Rpb24gJiZcbiAgICAgICAgICAgIHRoaXMubGFzdFdoZWVsVHJpZ2dlclRpbWUgJiZcbiAgICAgICAgICAgIG5vdyAtIHRoaXMubGFzdFdoZWVsVHJpZ2dlclRpbWUgPCBNT1VTRV9aT09NX0RVUkFUSU9OIC8gNSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNhbWVyYS5hbmltYXRlKHRoaXMucmVuZGVyZXIuZ2V0Vmlld3BvcnRab29tZWRTdGF0ZSgoMCwgY2FwdG9yXzEuZ2V0UG9zaXRpb24pKGUsIHRoaXMuY29udGFpbmVyKSwgbmV3UmF0aW8pLCB7XG4gICAgICAgICAgICBlYXNpbmc6IFwicXVhZHJhdGljT3V0XCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogTU9VU0VfWk9PTV9EVVJBVElPTixcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuY3VycmVudFdoZWVsRGlyZWN0aW9uID0gMDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3VycmVudFdoZWVsRGlyZWN0aW9uID0gd2hlZWxEaXJlY3Rpb247XG4gICAgICAgIHRoaXMubGFzdFdoZWVsVHJpZ2dlclRpbWUgPSBub3c7XG4gICAgfTtcbiAgICBNb3VzZUNhcHRvci5wcm90b3R5cGUuaGFuZGxlT3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBUT0RPOiBkaXNwYXRjaCBldmVudFxuICAgIH07XG4gICAgcmV0dXJuIE1vdXNlQ2FwdG9yO1xufShjYXB0b3JfMS5kZWZhdWx0KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBNb3VzZUNhcHRvcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9fcmVhZCA9ICh0aGlzICYmIHRoaXMuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgICBpZiAoIW0pIHJldHVybiBvO1xuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICAgIHRyeSB7XG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxuICAgIH1cbiAgICByZXR1cm4gYXI7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNhcHRvcl8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2NhcHRvclwiKSk7XG52YXIgRFJBR19USU1FT1VUID0gMjAwO1xudmFyIFRPVUNIX0lORVJUSUFfUkFUSU8gPSAzO1xudmFyIFRPVUNIX0lORVJUSUFfRFVSQVRJT04gPSAyMDA7XG4vKipcbiAqIFRvdWNoIGNhcHRvciBjbGFzcy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIFRvdWNoQ2FwdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUb3VjaENhcHRvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUb3VjaENhcHRvcihjb250YWluZXIsIHJlbmRlcmVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGNvbnRhaW5lciwgcmVuZGVyZXIpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBfdGhpcy5pc01vdmluZyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5oYXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgICBfdGhpcy50b3VjaE1vZGUgPSAwOyAvLyBudW1iZXIgb2YgdG91Y2hlcyBkb3duXG4gICAgICAgIF90aGlzLnN0YXJ0VG91Y2hlc1Bvc2l0aW9ucyA9IFtdO1xuICAgICAgICAvLyBCaW5kaW5nIG1ldGhvZHM6XG4gICAgICAgIF90aGlzLmhhbmRsZVN0YXJ0ID0gX3RoaXMuaGFuZGxlU3RhcnQuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLmhhbmRsZUxlYXZlID0gX3RoaXMuaGFuZGxlTGVhdmUuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLmhhbmRsZU1vdmUgPSBfdGhpcy5oYW5kbGVNb3ZlLmJpbmQoX3RoaXMpO1xuICAgICAgICAvLyBCaW5kaW5nIGV2ZW50c1xuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgX3RoaXMuaGFuZGxlU3RhcnQsIGZhbHNlKTtcbiAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBfdGhpcy5oYW5kbGVMZWF2ZSwgZmFsc2UpO1xuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoY2FuY2VsXCIsIF90aGlzLmhhbmRsZUxlYXZlLCBmYWxzZSk7XG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIF90aGlzLmhhbmRsZU1vdmUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBUb3VjaENhcHRvci5wcm90b3R5cGUua2lsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5oYW5kbGVTdGFydCk7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5oYW5kbGVMZWF2ZSk7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgdGhpcy5oYW5kbGVMZWF2ZSk7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMuaGFuZGxlTW92ZSk7XG4gICAgfTtcbiAgICBUb3VjaENhcHRvci5wcm90b3R5cGUuZ2V0RGltZW5zaW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmNvbnRhaW5lci5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5jb250YWluZXIub2Zmc2V0SGVpZ2h0LFxuICAgICAgICB9O1xuICAgIH07XG4gICAgVG91Y2hDYXB0b3IucHJvdG90eXBlLmRpc3BhdGNoUmVsYXRlZE1vdXNlRXZlbnQgPSBmdW5jdGlvbiAodHlwZSwgZSwgdG91Y2gsIGVtaXR0ZXIpIHtcbiAgICAgICAgdmFyIG1vdXNlUG9zaXRpb24gPSB0b3VjaCB8fCBlLnRvdWNoZXNbMF07XG4gICAgICAgIHZhciBtb3VzZUV2ZW50ID0gbmV3IE1vdXNlRXZlbnQodHlwZSwge1xuICAgICAgICAgICAgY2xpZW50WDogbW91c2VQb3NpdGlvbi5jbGllbnRYLFxuICAgICAgICAgICAgY2xpZW50WTogbW91c2VQb3NpdGlvbi5jbGllbnRZLFxuICAgICAgICAgICAgYWx0S2V5OiBlLmFsdEtleSxcbiAgICAgICAgICAgIGN0cmxLZXk6IGUuY3RybEtleSxcbiAgICAgICAgfSk7XG4gICAgICAgIG1vdXNlRXZlbnQuaXNGYWtlU2lnbWFNb3VzZUV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgKGVtaXR0ZXIgfHwgdGhpcy5jb250YWluZXIpLmRpc3BhdGNoRXZlbnQobW91c2VFdmVudCk7XG4gICAgfTtcbiAgICBUb3VjaENhcHRvci5wcm90b3R5cGUuaGFuZGxlU3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0IHRvIGF2b2lkIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvcnMuLi5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyAuLi5idXQgc2ltdWxhdGUgbW91c2UgYmVoYXZpb3IgYW55d2F5LCB0byBnZXQgdGhlIE1vdXNlQ2FwdG9yIHdvcmtpbmcgYXMgd2VsbDpcbiAgICAgICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPT09IDEpXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoUmVsYXRlZE1vdXNlRXZlbnQoXCJtb3VzZWRvd25cIiwgZSk7XG4gICAgICAgIHZhciB0b3VjaGVzID0gKDAsIGNhcHRvcl8xLmdldFRvdWNoZXNBcnJheSkoZS50b3VjaGVzKTtcbiAgICAgICAgdGhpcy50b3VjaE1vZGUgPSB0b3VjaGVzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5zdGFydENhbWVyYVN0YXRlID0gdGhpcy5yZW5kZXJlci5nZXRDYW1lcmEoKS5nZXRTdGF0ZSgpO1xuICAgICAgICB0aGlzLnN0YXJ0VG91Y2hlc1Bvc2l0aW9ucyA9IHRvdWNoZXMubWFwKGZ1bmN0aW9uICh0b3VjaCkgeyByZXR1cm4gKDAsIGNhcHRvcl8xLmdldFBvc2l0aW9uKSh0b3VjaCwgX3RoaXMuY29udGFpbmVyKTsgfSk7XG4gICAgICAgIHRoaXMubGFzdFRvdWNoZXMgPSB0b3VjaGVzO1xuICAgICAgICB0aGlzLmxhc3RUb3VjaGVzUG9zaXRpb25zID0gdGhpcy5zdGFydFRvdWNoZXNQb3NpdGlvbnM7XG4gICAgICAgIC8vIFdoZW4gdGhlcmUgYXJlIHR3byB0b3VjaGVzIGRvd24sIGxldCdzIHJlY29yZCBkaXN0YW5jZSBhbmQgYW5nbGUgYXMgd2VsbDpcbiAgICAgICAgaWYgKHRoaXMudG91Y2hNb2RlID09PSAyKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfX3JlYWQodGhpcy5zdGFydFRvdWNoZXNQb3NpdGlvbnMsIDIpLCBfYiA9IF9hWzBdLCB4MCA9IF9iLngsIHkwID0gX2IueSwgX2MgPSBfYVsxXSwgeDEgPSBfYy54LCB5MSA9IF9jLnk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VG91Y2hlc0FuZ2xlID0gTWF0aC5hdGFuMih5MSAtIHkwLCB4MSAtIHgwKTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUb3VjaGVzRGlzdGFuY2UgPSBNYXRoLnNxcnQoTWF0aC5wb3coeDEgLSB4MCwgMikgKyBNYXRoLnBvdyh5MSAtIHkwLCAyKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0KFwidG91Y2hkb3duXCIsICgwLCBjYXB0b3JfMS5nZXRUb3VjaENvb3JkcykoZSwgdGhpcy5jb250YWluZXIpKTtcbiAgICB9O1xuICAgIFRvdWNoQ2FwdG9yLnByb3RvdHlwZS5oYW5kbGVMZWF2ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHQgdG8gYXZvaWQgZGVmYXVsdCBicm93c2VyIGJlaGF2aW9ycy4uLlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIC4uLmJ1dCBzaW11bGF0ZSBtb3VzZSBiZWhhdmlvciBhbnl3YXksIHRvIGdldCB0aGUgTW91c2VDYXB0b3Igd29ya2luZyBhcyB3ZWxsOlxuICAgICAgICBpZiAoZS50b3VjaGVzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmxhc3RUb3VjaGVzICYmIHRoaXMubGFzdFRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoUmVsYXRlZE1vdXNlRXZlbnQoXCJtb3VzZXVwXCIsIGUsIHRoaXMubGFzdFRvdWNoZXNbMF0sIGRvY3VtZW50KTtcbiAgICAgICAgICAgIC8vIC4uLiBhbmQgb25seSBjbGljayBpZiBubyBtb3ZlIHdhcyBtYWRlXG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFzTW92ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoUmVsYXRlZE1vdXNlRXZlbnQoXCJjbGlja1wiLCBlLCB0aGlzLmxhc3RUb3VjaGVzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tb3ZpbmdUaW1lb3V0KSB7XG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5tb3ZpbmdUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHRoaXMudG91Y2hNb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdGFydChlKTtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgLy8gVE9ET1xuICAgICAgICAgICAgICAgIC8vIERpc3BhdGNoIGV2ZW50XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbWVyYSA9IHRoaXMucmVuZGVyZXIuZ2V0Q2FtZXJhKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYW1lcmFTdGF0ZSA9IGNhbWVyYS5nZXRTdGF0ZSgpLCBwcmV2aW91c0NhbWVyYVN0YXRlID0gY2FtZXJhLmdldFByZXZpb3VzU3RhdGUoKSB8fCB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogY2FtZXJhU3RhdGUueCArIFRPVUNIX0lORVJUSUFfUkFUSU8gKiAoY2FtZXJhU3RhdGUueCAtIHByZXZpb3VzQ2FtZXJhU3RhdGUueCksXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBjYW1lcmFTdGF0ZS55ICsgVE9VQ0hfSU5FUlRJQV9SQVRJTyAqIChjYW1lcmFTdGF0ZS55IC0gcHJldmlvdXNDYW1lcmFTdGF0ZS55KSxcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IFRPVUNIX0lORVJUSUFfRFVSQVRJT04sXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNpbmc6IFwicXVhZHJhdGljT3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmhhc01vdmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMudG91Y2hNb2RlID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVtaXQoXCJ0b3VjaHVwXCIsICgwLCBjYXB0b3JfMS5nZXRUb3VjaENvb3JkcykoZSwgdGhpcy5jb250YWluZXIpKTtcbiAgICB9O1xuICAgIFRvdWNoQ2FwdG9yLnByb3RvdHlwZS5oYW5kbGVNb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0IHRvIGF2b2lkIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvcnMuLi5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyAuLi5idXQgc2ltdWxhdGUgbW91c2UgYmVoYXZpb3IgYW55d2F5LCB0byBnZXQgdGhlIE1vdXNlQ2FwdG9yIHdvcmtpbmcgYXMgd2VsbDpcbiAgICAgICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPT09IDEpXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoUmVsYXRlZE1vdXNlRXZlbnQoXCJtb3VzZW1vdmVcIiwgZSk7XG4gICAgICAgIHZhciB0b3VjaGVzID0gKDAsIGNhcHRvcl8xLmdldFRvdWNoZXNBcnJheSkoZS50b3VjaGVzKTtcbiAgICAgICAgdmFyIHRvdWNoZXNQb3NpdGlvbnMgPSB0b3VjaGVzLm1hcChmdW5jdGlvbiAodG91Y2gpIHsgcmV0dXJuICgwLCBjYXB0b3JfMS5nZXRQb3NpdGlvbikodG91Y2gsIF90aGlzLmNvbnRhaW5lcik7IH0pO1xuICAgICAgICB0aGlzLmxhc3RUb3VjaGVzID0gdG91Y2hlcztcbiAgICAgICAgdGhpcy5sYXN0VG91Y2hlc1Bvc2l0aW9ucyA9IHRvdWNoZXNQb3NpdGlvbnM7XG4gICAgICAgIC8vIElmIGEgbW92ZSB3YXMgaW5pdGlhdGVkIGF0IHNvbWUgcG9pbnQgYW5kIHdlIGdldCBiYWNrIHRvIHN0YXJ0cG9pbnQsXG4gICAgICAgIC8vIHdlIHNob3VsZCBzdGlsbCBjb25zaWRlciB0aGF0IHdlIGRpZCBtb3ZlICh3aGljaCBhbHNvIGhhcHBlbnMgYWZ0ZXIgYVxuICAgICAgICAvLyBtdWx0aXBsZSB0b3VjaCB3aGVuIG9ubHkgb25lIHRvdWNoIHJlbWFpbnMgaW4gd2hpY2ggY2FzZSBoYW5kbGVTdGFydFxuICAgICAgICAvLyBpcyByZWNhbGxlZCB3aXRoaW4gaGFuZGxlTGVhdmUpLlxuICAgICAgICAvLyBOb3csIHNvbWUgbW9iaWxlIGJyb3dzZXJzIHJlcG9ydCB6ZXJvLWRpc3RhbmNlIG1vdmVzIHNvIHdlIGFsc28gY2hlY2sgdGhhdFxuICAgICAgICAvLyBvbmUgb2YgdGhlIHRvdWNoZXMgZGlkIGFjdHVhbGx5IG1vdmUgZnJvbSB0aGUgb3JpZ2luIHBvc2l0aW9uLlxuICAgICAgICB0aGlzLmhhc01vdmVkIHx8ICh0aGlzLmhhc01vdmVkID0gdG91Y2hlc1Bvc2l0aW9ucy5zb21lKGZ1bmN0aW9uIChwb3NpdGlvbiwgaWR4KSB7XG4gICAgICAgICAgICB2YXIgc3RhcnRQb3NpdGlvbiA9IF90aGlzLnN0YXJ0VG91Y2hlc1Bvc2l0aW9uc1tpZHhdO1xuICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9uLnggIT09IHN0YXJ0UG9zaXRpb24ueCB8fCBwb3NpdGlvbi55ICE9PSBzdGFydFBvc2l0aW9uLnk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgLy8gSWYgdGhlcmUgd2FzIG5vIG1vdmUsIGRvIG5vdCB0cmlnZ2VyIHRvdWNoIG1vdmVzIGJlaGF2aW9yXG4gICAgICAgIGlmICghdGhpcy5oYXNNb3ZlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5tb3ZpbmdUaW1lb3V0KVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubW92aW5nVGltZW91dCk7XG4gICAgICAgIHRoaXMubW92aW5nVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmlzTW92aW5nID0gZmFsc2U7XG4gICAgICAgIH0sIERSQUdfVElNRU9VVCk7XG4gICAgICAgIHZhciBjYW1lcmEgPSB0aGlzLnJlbmRlcmVyLmdldENhbWVyYSgpO1xuICAgICAgICB2YXIgc3RhcnRDYW1lcmFTdGF0ZSA9IHRoaXMuc3RhcnRDYW1lcmFTdGF0ZTtcbiAgICAgICAgc3dpdGNoICh0aGlzLnRvdWNoTW9kZSkge1xuICAgICAgICAgICAgY2FzZSAxOiB7XG4gICAgICAgICAgICAgICAgdmFyIF9iID0gdGhpcy5yZW5kZXJlci52aWV3cG9ydFRvRnJhbWVkR3JhcGgoKHRoaXMuc3RhcnRUb3VjaGVzUG9zaXRpb25zIHx8IFtdKVswXSksIHhTdGFydCA9IF9iLngsIHlTdGFydCA9IF9iLnk7XG4gICAgICAgICAgICAgICAgdmFyIF9jID0gdGhpcy5yZW5kZXJlci52aWV3cG9ydFRvRnJhbWVkR3JhcGgodG91Y2hlc1Bvc2l0aW9uc1swXSksIHggPSBfYy54LCB5ID0gX2MueTtcbiAgICAgICAgICAgICAgICBjYW1lcmEuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB4OiBzdGFydENhbWVyYVN0YXRlLnggKyB4U3RhcnQgLSB4LFxuICAgICAgICAgICAgICAgICAgICB5OiBzdGFydENhbWVyYVN0YXRlLnkgKyB5U3RhcnQgLSB5LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAyOiB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogSGVyZSBpcyB0aGUgdGhpbmtpbmcgaGVyZTpcbiAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAqIDEuIFdlIGNhbiBmaW5kIHRoZSBuZXcgYW5nbGUgYW5kIHJhdGlvLCBieSBjb21wYXJpbmcgdGhlIHZlY3RvciBmcm9tIFwidG91Y2ggb25lXCIgdG8gXCJ0b3VjaCB0d29cIiBhdCB0aGUgc3RhcnRcbiAgICAgICAgICAgICAgICAgKiAgICBvZiB0aGUgZCduJ2QgYW5kIG5vd1xuICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICogMi4gV2UgY2FuIHVzZSBgQ2FtZXJhI3ZpZXdwb3J0VG9HcmFwaGAgaW5zaWRlIGZvcm11bGEgdG8gcmV0cmlldmUgdGhlIG5ldyBjYW1lcmEgcG9zaXRpb24sIHVzaW5nIHRoZSBncmFwaFxuICAgICAgICAgICAgICAgICAqICAgIHBvc2l0aW9uIG9mIGEgdG91Y2ggYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgZCduJ2QgKHVzaW5nIGBzdGFydENhbWVyYS52aWV3cG9ydFRvR3JhcGhgKSBhbmQgdGhlIHZpZXdwb3J0XG4gICAgICAgICAgICAgICAgICogICAgcG9zaXRpb24gb2YgdGhpcyBzYW1lIHRvdWNoIG5vd1xuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHZhciBuZXdDYW1lcmFTdGF0ZSA9IHt9O1xuICAgICAgICAgICAgICAgIHZhciBfZCA9IHRvdWNoZXNQb3NpdGlvbnNbMF0sIHgwID0gX2QueCwgeTAgPSBfZC55O1xuICAgICAgICAgICAgICAgIHZhciBfZSA9IHRvdWNoZXNQb3NpdGlvbnNbMV0sIHgxID0gX2UueCwgeTEgPSBfZS55O1xuICAgICAgICAgICAgICAgIHZhciBhbmdsZURpZmYgPSBNYXRoLmF0YW4yKHkxIC0geTAsIHgxIC0geDApIC0gdGhpcy5zdGFydFRvdWNoZXNBbmdsZTtcbiAgICAgICAgICAgICAgICB2YXIgcmF0aW9EaWZmID0gTWF0aC5oeXBvdCh5MSAtIHkwLCB4MSAtIHgwKSAvIHRoaXMuc3RhcnRUb3VjaGVzRGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgLy8gMS5cbiAgICAgICAgICAgICAgICB2YXIgbmV3UmF0aW8gPSBjYW1lcmEuZ2V0Qm91bmRlZFJhdGlvKHN0YXJ0Q2FtZXJhU3RhdGUucmF0aW8gLyByYXRpb0RpZmYpO1xuICAgICAgICAgICAgICAgIG5ld0NhbWVyYVN0YXRlLnJhdGlvID0gbmV3UmF0aW87XG4gICAgICAgICAgICAgICAgbmV3Q2FtZXJhU3RhdGUuYW5nbGUgPSBzdGFydENhbWVyYVN0YXRlLmFuZ2xlICsgYW5nbGVEaWZmO1xuICAgICAgICAgICAgICAgIC8vIDIuXG4gICAgICAgICAgICAgICAgdmFyIGRpbWVuc2lvbnMgPSB0aGlzLmdldERpbWVuc2lvbnMoKTtcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hHcmFwaFBvc2l0aW9uID0gdGhpcy5yZW5kZXJlci52aWV3cG9ydFRvRnJhbWVkR3JhcGgoKHRoaXMuc3RhcnRUb3VjaGVzUG9zaXRpb25zIHx8IFtdKVswXSwgeyBjYW1lcmFTdGF0ZTogc3RhcnRDYW1lcmFTdGF0ZSB9KTtcbiAgICAgICAgICAgICAgICB2YXIgc21hbGxlc3REaW1lbnNpb24gPSBNYXRoLm1pbihkaW1lbnNpb25zLndpZHRoLCBkaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgdmFyIGR4ID0gc21hbGxlc3REaW1lbnNpb24gLyBkaW1lbnNpb25zLndpZHRoO1xuICAgICAgICAgICAgICAgIHZhciBkeSA9IHNtYWxsZXN0RGltZW5zaW9uIC8gZGltZW5zaW9ucy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgdmFyIHJhdGlvID0gbmV3UmF0aW8gLyBzbWFsbGVzdERpbWVuc2lvbjtcbiAgICAgICAgICAgICAgICAvLyBBbGlnbiB3aXRoIGNlbnRlciBvZiB0aGUgZ3JhcGg6XG4gICAgICAgICAgICAgICAgdmFyIHggPSB4MCAtIHNtYWxsZXN0RGltZW5zaW9uIC8gMiAvIGR4O1xuICAgICAgICAgICAgICAgIHZhciB5ID0geTAgLSBzbWFsbGVzdERpbWVuc2lvbiAvIDIgLyBkeTtcbiAgICAgICAgICAgICAgICAvLyBSb3RhdGU6XG4gICAgICAgICAgICAgICAgX2EgPSBfX3JlYWQoW1xuICAgICAgICAgICAgICAgICAgICB4ICogTWF0aC5jb3MoLW5ld0NhbWVyYVN0YXRlLmFuZ2xlKSAtIHkgKiBNYXRoLnNpbigtbmV3Q2FtZXJhU3RhdGUuYW5nbGUpLFxuICAgICAgICAgICAgICAgICAgICB5ICogTWF0aC5jb3MoLW5ld0NhbWVyYVN0YXRlLmFuZ2xlKSArIHggKiBNYXRoLnNpbigtbmV3Q2FtZXJhU3RhdGUuYW5nbGUpLFxuICAgICAgICAgICAgICAgIF0sIDIpLCB4ID0gX2FbMF0sIHkgPSBfYVsxXTtcbiAgICAgICAgICAgICAgICBuZXdDYW1lcmFTdGF0ZS54ID0gdG91Y2hHcmFwaFBvc2l0aW9uLnggLSB4ICogcmF0aW87XG4gICAgICAgICAgICAgICAgbmV3Q2FtZXJhU3RhdGUueSA9IHRvdWNoR3JhcGhQb3NpdGlvbi55ICsgeSAqIHJhdGlvO1xuICAgICAgICAgICAgICAgIGNhbWVyYS5zZXRTdGF0ZShuZXdDYW1lcmFTdGF0ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0KFwidG91Y2htb3ZlXCIsICgwLCBjYXB0b3JfMS5nZXRUb3VjaENvb3JkcykoZSwgdGhpcy5jb250YWluZXIpKTtcbiAgICB9O1xuICAgIHJldHVybiBUb3VjaENhcHRvcjtcbn0oY2FwdG9yXzEuZGVmYXVsdCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gVG91Y2hDYXB0b3I7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZWRnZUxhYmVsc1RvRGlzcGxheUZyb21Ob2RlcyA9IGV4cG9ydHMuTGFiZWxHcmlkID0gdm9pZCAwO1xuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBzaW5nbGUgY2FuZGlkYXRlIGZvciB0aGUgbGFiZWwgZ3JpZCBzZWxlY3Rpb24uXG4gKlxuICogSXQgYWxzbyBkZXNjcmliZXMgYSBkZXRlcm1pbmlzdGljIHdheSB0byBjb21wYXJlIHR3byBjYW5kaWRhdGVzIHRvIGFzc2Vzc1xuICogd2hpY2ggb25lIGlzIGJldHRlci5cbiAqL1xudmFyIExhYmVsQ2FuZGlkYXRlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExhYmVsQ2FuZGlkYXRlKGtleSwgc2l6ZSkge1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICB9XG4gICAgTGFiZWxDYW5kaWRhdGUuY29tcGFyZSA9IGZ1bmN0aW9uIChmaXJzdCwgc2Vjb25kKSB7XG4gICAgICAgIC8vIEZpcnN0IHdlIGNvbXBhcmUgYnkgc2l6ZVxuICAgICAgICBpZiAoZmlyc3Quc2l6ZSA+IHNlY29uZC5zaXplKVxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICBpZiAoZmlyc3Quc2l6ZSA8IHNlY29uZC5zaXplKVxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIC8vIFRoZW4gc2luY2Ugbm8gdHdvIG5vZGVzIGNhbiBoYXZlIHRoZSBzYW1lIGtleSwgd2UgdXNlIGl0IHRvXG4gICAgICAgIC8vIGRldGVybWluaXN0aWNhbGx5IHRpZS1icmVhayBieSBrZXlcbiAgICAgICAgaWYgKGZpcnN0LmtleSA+IHNlY29uZC5rZXkpXG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgLy8gTk9URTogdGhpcyBjb21wYXJhdG9yIGNhbm5vdCByZXR1cm4gMFxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfTtcbiAgICByZXR1cm4gTGFiZWxDYW5kaWRhdGU7XG59KCkpO1xuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSAyRCBzcGF0aWFsIGdyaWQgZGl2aWRlZCBpbnRvIGNvbnN0YW50LXNpemUgY2VsbHMuXG4gKi9cbnZhciBMYWJlbEdyaWQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTGFiZWxHcmlkKCkge1xuICAgICAgICB0aGlzLndpZHRoID0gMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLmNlbGxTaXplID0gMDtcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gMDtcbiAgICAgICAgdGhpcy5yb3dzID0gMDtcbiAgICAgICAgdGhpcy5jZWxscyA9IHt9O1xuICAgIH1cbiAgICBMYWJlbEdyaWQucHJvdG90eXBlLnJlc2l6ZUFuZENsZWFyID0gZnVuY3Rpb24gKGRpbWVuc2lvbnMsIGNlbGxTaXplKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSBkaW1lbnNpb25zLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGRpbWVuc2lvbnMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmNlbGxTaXplID0gY2VsbFNpemU7XG4gICAgICAgIHRoaXMuY29sdW1ucyA9IE1hdGguY2VpbChkaW1lbnNpb25zLndpZHRoIC8gY2VsbFNpemUpO1xuICAgICAgICB0aGlzLnJvd3MgPSBNYXRoLmNlaWwoZGltZW5zaW9ucy5oZWlnaHQgLyBjZWxsU2l6ZSk7XG4gICAgICAgIHRoaXMuY2VsbHMgPSB7fTtcbiAgICB9O1xuICAgIExhYmVsR3JpZC5wcm90b3R5cGUuZ2V0SW5kZXggPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgICAgIHZhciB4SW5kZXggPSBNYXRoLmZsb29yKHBvcy54IC8gdGhpcy5jZWxsU2l6ZSk7XG4gICAgICAgIHZhciB5SW5kZXggPSBNYXRoLmZsb29yKHBvcy55IC8gdGhpcy5jZWxsU2l6ZSk7XG4gICAgICAgIHJldHVybiB5SW5kZXggKiB0aGlzLmNvbHVtbnMgKyB4SW5kZXg7XG4gICAgfTtcbiAgICBMYWJlbEdyaWQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChrZXksIHNpemUsIHBvcykge1xuICAgICAgICB2YXIgY2FuZGlkYXRlID0gbmV3IExhYmVsQ2FuZGlkYXRlKGtleSwgc2l6ZSk7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0SW5kZXgocG9zKTtcbiAgICAgICAgdmFyIGNlbGwgPSB0aGlzLmNlbGxzW2luZGV4XTtcbiAgICAgICAgaWYgKCFjZWxsKSB7XG4gICAgICAgICAgICBjZWxsID0gW107XG4gICAgICAgICAgICB0aGlzLmNlbGxzW2luZGV4XSA9IGNlbGw7XG4gICAgICAgIH1cbiAgICAgICAgY2VsbC5wdXNoKGNhbmRpZGF0ZSk7XG4gICAgfTtcbiAgICBMYWJlbEdyaWQucHJvdG90eXBlLm9yZ2FuaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBrIGluIHRoaXMuY2VsbHMpIHtcbiAgICAgICAgICAgIHZhciBjZWxsID0gdGhpcy5jZWxsc1trXTtcbiAgICAgICAgICAgIGNlbGwuc29ydChMYWJlbENhbmRpZGF0ZS5jb21wYXJlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTGFiZWxHcmlkLnByb3RvdHlwZS5nZXRMYWJlbHNUb0Rpc3BsYXkgPSBmdW5jdGlvbiAocmF0aW8sIGRlbnNpdHkpIHtcbiAgICAgICAgLy8gVE9ETzogd29yayBvbiB2aXNpYmxlIG5vZGVzIHRvIG9wdGltaXplPyBeIC0+IHRocmVzaG9sZCBvdXRzaWRlIHNvIHRoYXQgbWVtb2l6YXRpb24gd29ya3M/XG4gICAgICAgIC8vIFRPRE86IGFkanVzdCB0aHJlc2hvbGQgbG93ZXIsIGJ1dCBpbmNyZWFzZSBjZWxscyBhIGJpdD9cbiAgICAgICAgLy8gVE9ETzogaHVudCBmb3IgZ2VvbSBpc3N1ZSBpbiBkaXNndWlzZVxuICAgICAgICAvLyBUT0RPOiBtZW1vaXplIHdoaWxlIHJhdGlvIGRvZXMgbm90IG1vdmUuIG1ldGhvZCB0byBmb3JjZSByZWNvbXB1dGVcbiAgICAgICAgdmFyIGNlbGxBcmVhID0gdGhpcy5jZWxsU2l6ZSAqIHRoaXMuY2VsbFNpemU7XG4gICAgICAgIHZhciBzY2FsZWRDZWxsQXJlYSA9IGNlbGxBcmVhIC8gcmF0aW8gLyByYXRpbztcbiAgICAgICAgdmFyIHNjYWxlZERlbnNpdHkgPSAoc2NhbGVkQ2VsbEFyZWEgKiBkZW5zaXR5KSAvIGNlbGxBcmVhO1xuICAgICAgICB2YXIgbGFiZWxzVG9EaXNwbGF5UGVyQ2VsbCA9IE1hdGguY2VpbChzY2FsZWREZW5zaXR5KTtcbiAgICAgICAgdmFyIGxhYmVscyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBrIGluIHRoaXMuY2VsbHMpIHtcbiAgICAgICAgICAgIHZhciBjZWxsID0gdGhpcy5jZWxsc1trXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgTWF0aC5taW4obGFiZWxzVG9EaXNwbGF5UGVyQ2VsbCwgY2VsbC5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsYWJlbHMucHVzaChjZWxsW2ldLmtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxhYmVscztcbiAgICB9O1xuICAgIHJldHVybiBMYWJlbEdyaWQ7XG59KCkpO1xuZXhwb3J0cy5MYWJlbEdyaWQgPSBMYWJlbEdyaWQ7XG4vKipcbiAqIExhYmVsIGhldXJpc3RpYyBzZWxlY3RpbmcgZWRnZSBsYWJlbHMgdG8gZGlzcGxheSwgYmFzZWQgb24gZGlzcGxheWVkIG5vZGVcbiAqIGxhYmVsc1xuICpcbiAqIEBwYXJhbSAge29iamVjdH0gcGFyYW1zICAgICAgICAgICAgICAgICAtIFBhcmFtZXRlcnM6XG4gKiBAcGFyYW0gIHtTZXR9ICAgICAgZGlzcGxheWVkTm9kZUxhYmVscyAgLSBDdXJyZW50bHkgZGlzcGxheWVkIG5vZGUgbGFiZWxzLlxuICogQHBhcmFtICB7U2V0fSAgICAgIGhpZ2hsaWdodGVkTm9kZXMgICAgIC0gSGlnaGxpZ2h0ZWQgbm9kZXMuXG4gKiBAcGFyYW0gIHtHcmFwaH0gICAgZ3JhcGggICAgICAgICAgICAgICAgLSBUaGUgcmVuZGVyZWQgZ3JhcGguXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgaG92ZXJlZE5vZGUgICAgICAgICAgLSBIb3ZlcmVkIG5vZGUgKG9wdGlvbmFsKVxuICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgICAgICAgICAgICAgICAgIC0gVGhlIHNlbGVjdGVkIGxhYmVscy5cbiAqL1xuZnVuY3Rpb24gZWRnZUxhYmVsc1RvRGlzcGxheUZyb21Ob2RlcyhwYXJhbXMpIHtcbiAgICB2YXIgZ3JhcGggPSBwYXJhbXMuZ3JhcGgsIGhvdmVyZWROb2RlID0gcGFyYW1zLmhvdmVyZWROb2RlLCBoaWdobGlnaHRlZE5vZGVzID0gcGFyYW1zLmhpZ2hsaWdodGVkTm9kZXMsIGRpc3BsYXllZE5vZGVMYWJlbHMgPSBwYXJhbXMuZGlzcGxheWVkTm9kZUxhYmVscztcbiAgICB2YXIgd29ydGh5RWRnZXMgPSBbXTtcbiAgICAvLyBUT0RPOiB0aGUgY29kZSBiZWxvdyBjYW4gYmUgb3B0aW1pemVkIHVzaW5nICMuZm9yRWFjaCBhbmQgYmF0Y2hpbmcgdGhlIGNvZGUgcGVyIGFkalxuICAgIC8vIFdlIHNob3VsZCBkaXNwbGF5IGFuIGVkZ2UncyBsYWJlbCBpZjpcbiAgICAvLyAgIC0gQW55IG9mIGl0cyBleHRyZW1pdGllcyBpcyBoaWdobGlnaHRlZCBvciBob3ZlcmVkXG4gICAgLy8gICAtIEJvdGggb2YgaXRzIGV4dHJlbWl0aWVzIGhhcyBpdHMgbGFiZWwgc2hvd25cbiAgICBncmFwaC5mb3JFYWNoRWRnZShmdW5jdGlvbiAoZWRnZSwgXywgc291cmNlLCB0YXJnZXQpIHtcbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gaG92ZXJlZE5vZGUgfHxcbiAgICAgICAgICAgIHRhcmdldCA9PT0gaG92ZXJlZE5vZGUgfHxcbiAgICAgICAgICAgIGhpZ2hsaWdodGVkTm9kZXMuaGFzKHNvdXJjZSkgfHxcbiAgICAgICAgICAgIGhpZ2hsaWdodGVkTm9kZXMuaGFzKHRhcmdldCkgfHxcbiAgICAgICAgICAgIChkaXNwbGF5ZWROb2RlTGFiZWxzLmhhcyhzb3VyY2UpICYmIGRpc3BsYXllZE5vZGVMYWJlbHMuaGFzKHRhcmdldCkpKSB7XG4gICAgICAgICAgICB3b3J0aHlFZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHdvcnRoeUVkZ2VzO1xufVxuZXhwb3J0cy5lZGdlTGFiZWxzVG9EaXNwbGF5RnJvbU5vZGVzID0gZWRnZUxhYmVsc1RvRGlzcGxheUZyb21Ob2RlcztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZWN0YW5nbGVDb2xsaWRlc1dpdGhRdWFkID0gZXhwb3J0cy5zcXVhcmVDb2xsaWRlc1dpdGhRdWFkID0gZXhwb3J0cy5nZXRDaXJjdW1zY3JpYmVkQWxpZ25lZFJlY3RhbmdsZSA9IGV4cG9ydHMuaXNSZWN0YW5nbGVBbGlnbmVkID0gdm9pZCAwO1xuLyoqXG4gKiBTaWdtYS5qcyBRdWFkIFRyZWUgQ2xhc3NcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqXG4gKiBDbGFzcyBpbXBsZW1lbnRpbmcgdGhlIHF1YWQgdHJlZSBkYXRhIHN0cnVjdHVyZSB1c2VkIHRvIHNvbHZlIGhvdmVycyBhbmRcbiAqIGRldGVybWluZSB3aGljaCBlbGVtZW50cyBhcmUgY3VycmVudGx5IGluIHRoZSBzY29wZSBvZiB0aGUgY2FtZXJhIHNvIHRoYXRcbiAqIHdlIGRvbid0IHdhc3RlIHRpbWUgcmVuZGVyaW5nIHRoaW5ncyB0aGUgdXNlciBjYW5ub3Qgc2VlIGFueXdheS5cbiAqIEBtb2R1bGVcbiAqL1xuLyogZXNsaW50IG5vLW5lc3RlZC10ZXJuYXJ5OiAwICovXG4vKiBlc2xpbnQgbm8tY29uc3RhbnQtY29uZGl0aW9uOiAwICovXG52YXIgZXh0ZW5kXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkB5b21ndWl0aGVyZWFsL2hlbHBlcnMvZXh0ZW5kXCIpKTtcbi8qKlxuICogTm90ZXM6XG4gKlxuICogICAtIGEgc3F1YXJlIGNhbiBiZSByZXByZXNlbnRlZCBhcyB0b3BsZWZ0ICsgd2lkdGgsIHNheWluZyBmb3IgdGhlIHF1YWQgYmxvY2tzLFxuICogICAgIHRvIHJlZHVjZSBvdmVyYWxsIG1lbW9yeSB1c2FnZSAod2hpY2ggaXMgYWxyZWFkeSBwcmV0dHkgbG93KS5cbiAqICAgLSB0aGlzIGltcGxlbWVudGF0aW9uIG9mIGEgcXVhZHRyZWUgaXMgb2Z0ZW4gY2FsbGVkIGEgTVgtQ0lGIHF1YWR0cmVlLlxuICogICAtIHdlIGNvdWxkIGV4cGxvcmUgc3BhdGlhbCBoYXNoaW5nIChoaWxiZXJ0IHF1YWR0cmVlcywgbm90YWJseSkuXG4gKi9cbi8qKlxuICogQ29uc3RhbnRzLlxuICpcbiAqIE5vdGUgdGhhdCBzaW5jZSB3ZSBhcmUgcmVwcmVzZW50aW5nIGEgc3RhdGljIDQtYXJ5IHRyZWUsIHRoZSBpbmRpY2VzIG9mIHRoZVxuICogcXVhZHJhbnRzIGFyZSB0aGUgZm9sbG93aW5nOlxuICogICAtIFRPUF9MRUZUOiAgICAgNGkgKyBiXG4gKiAgIC0gVE9QX1JJR0hUOiAgICA0aSArIDJiXG4gKiAgIC0gQk9UVE9NX0xFRlQ6ICA0aSArIDNiXG4gKiAgIC0gQk9UVE9NX1JJR0hUOiA0aSArIDRiXG4gKi9cbnZhciBCTE9DS1MgPSA0O1xudmFyIE1BWF9MRVZFTCA9IDU7XG4vLyBPdXRzaWRlIGJsb2NrIGlzIG1heCBibG9jayBpbmRleCArIDEsIGkuZS46XG4vLyBCTE9DS1MgKiAoKDQgKiAoNCAqKiBNQVhfTEVWRUwpIC0gMSkgLyAzKVxudmFyIE9VVFNJREVfQkxPQ0sgPSA1NDYwO1xudmFyIFhfT0ZGU0VUID0gMDtcbnZhciBZX09GRlNFVCA9IDE7XG52YXIgV0lEVEhfT0ZGU0VUID0gMjtcbnZhciBIRUlHSFRfT0ZGU0VUID0gMztcbnZhciBUT1BfTEVGVCA9IDE7XG52YXIgVE9QX1JJR0hUID0gMjtcbnZhciBCT1RUT01fTEVGVCA9IDM7XG52YXIgQk9UVE9NX1JJR0hUID0gNDtcbnZhciBoYXNXYXJuZWRUb29NdWNoT3V0c2lkZSA9IGZhbHNlO1xuLyoqXG4gKiBHZW9tZXRyeSBoZWxwZXJzLlxuICovXG4vKipcbiAqIEZ1bmN0aW9uIHJldHVybmluZyB3aGV0aGVyIHRoZSBnaXZlbiByZWN0YW5nbGUgaXMgYXhpcy1hbGlnbmVkLlxuICpcbiAqIEBwYXJhbSAge1JlY3RhbmdsZX0gcmVjdFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNSZWN0YW5nbGVBbGlnbmVkKHJlY3QpIHtcbiAgICByZXR1cm4gcmVjdC54MSA9PT0gcmVjdC54MiB8fCByZWN0LnkxID09PSByZWN0LnkyO1xufVxuZXhwb3J0cy5pc1JlY3RhbmdsZUFsaWduZWQgPSBpc1JlY3RhbmdsZUFsaWduZWQ7XG4vKipcbiAqIEZ1bmN0aW9uIHJldHVybmluZyB0aGUgc21hbGxlc3QgcmVjdGFuZ2xlIHRoYXQgY29udGFpbnMgdGhlIGdpdmVuIHJlY3RhbmdsZSwgYW5kIHRoYXQgaXMgYWxpZ25lZCB3aXRoIHRoZSBheGlzLlxuICpcbiAqIEBwYXJhbSB7UmVjdGFuZ2xlfSByZWN0XG4gKiBAcmV0dXJuIHtSZWN0YW5nbGV9XG4gKi9cbmZ1bmN0aW9uIGdldENpcmN1bXNjcmliZWRBbGlnbmVkUmVjdGFuZ2xlKHJlY3QpIHtcbiAgICB2YXIgd2lkdGggPSBNYXRoLnNxcnQoTWF0aC5wb3cocmVjdC54MiAtIHJlY3QueDEsIDIpICsgTWF0aC5wb3cocmVjdC55MiAtIHJlY3QueTEsIDIpKTtcbiAgICB2YXIgaGVpZ2h0VmVjdG9yID0ge1xuICAgICAgICB4OiAoKHJlY3QueTEgLSByZWN0LnkyKSAqIHJlY3QuaGVpZ2h0KSAvIHdpZHRoLFxuICAgICAgICB5OiAoKHJlY3QueDIgLSByZWN0LngxKSAqIHJlY3QuaGVpZ2h0KSAvIHdpZHRoLFxuICAgIH07XG4gICAgLy8gQ29tcHV0ZSBhbGwgY29ybmVyczpcbiAgICB2YXIgdGwgPSB7IHg6IHJlY3QueDEsIHk6IHJlY3QueTEgfTtcbiAgICB2YXIgdHIgPSB7IHg6IHJlY3QueDIsIHk6IHJlY3QueTIgfTtcbiAgICB2YXIgYmwgPSB7XG4gICAgICAgIHg6IHJlY3QueDEgKyBoZWlnaHRWZWN0b3IueCxcbiAgICAgICAgeTogcmVjdC55MSArIGhlaWdodFZlY3Rvci55LFxuICAgIH07XG4gICAgdmFyIGJyID0ge1xuICAgICAgICB4OiByZWN0LngyICsgaGVpZ2h0VmVjdG9yLngsXG4gICAgICAgIHk6IHJlY3QueTIgKyBoZWlnaHRWZWN0b3IueSxcbiAgICB9O1xuICAgIHZhciB4TCA9IE1hdGgubWluKHRsLngsIHRyLngsIGJsLngsIGJyLngpO1xuICAgIHZhciB4UiA9IE1hdGgubWF4KHRsLngsIHRyLngsIGJsLngsIGJyLngpO1xuICAgIHZhciB5VCA9IE1hdGgubWluKHRsLnksIHRyLnksIGJsLnksIGJyLnkpO1xuICAgIHZhciB5QiA9IE1hdGgubWF4KHRsLnksIHRyLnksIGJsLnksIGJyLnkpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHgxOiB4TCxcbiAgICAgICAgeTE6IHlULFxuICAgICAgICB4MjogeFIsXG4gICAgICAgIHkyOiB5VCxcbiAgICAgICAgaGVpZ2h0OiB5QiAtIHlULFxuICAgIH07XG59XG5leHBvcnRzLmdldENpcmN1bXNjcmliZWRBbGlnbmVkUmVjdGFuZ2xlID0gZ2V0Q2lyY3Vtc2NyaWJlZEFsaWduZWRSZWN0YW5nbGU7XG4vKipcbiAqXG4gKiBAcGFyYW0geDFcbiAqIEBwYXJhbSB5MVxuICogQHBhcmFtIHdcbiAqIEBwYXJhbSBxeFxuICogQHBhcmFtIHF5XG4gKiBAcGFyYW0gcXdcbiAqIEBwYXJhbSBxaFxuICovXG5mdW5jdGlvbiBzcXVhcmVDb2xsaWRlc1dpdGhRdWFkKHgxLCB5MSwgdywgcXgsIHF5LCBxdywgcWgpIHtcbiAgICByZXR1cm4geDEgPCBxeCArIHF3ICYmIHgxICsgdyA+IHF4ICYmIHkxIDwgcXkgKyBxaCAmJiB5MSArIHcgPiBxeTtcbn1cbmV4cG9ydHMuc3F1YXJlQ29sbGlkZXNXaXRoUXVhZCA9IHNxdWFyZUNvbGxpZGVzV2l0aFF1YWQ7XG5mdW5jdGlvbiByZWN0YW5nbGVDb2xsaWRlc1dpdGhRdWFkKHgxLCB5MSwgdywgaCwgcXgsIHF5LCBxdywgcWgpIHtcbiAgICByZXR1cm4geDEgPCBxeCArIHF3ICYmIHgxICsgdyA+IHF4ICYmIHkxIDwgcXkgKyBxaCAmJiB5MSArIGggPiBxeTtcbn1cbmV4cG9ydHMucmVjdGFuZ2xlQ29sbGlkZXNXaXRoUXVhZCA9IHJlY3RhbmdsZUNvbGxpZGVzV2l0aFF1YWQ7XG5mdW5jdGlvbiBwb2ludElzSW5RdWFkKHgsIHksIHF4LCBxeSwgcXcsIHFoKSB7XG4gICAgdmFyIHhtcCA9IHF4ICsgcXcgLyAyLCB5bXAgPSBxeSArIHFoIC8gMiwgdG9wID0geSA8IHltcCwgbGVmdCA9IHggPCB4bXA7XG4gICAgcmV0dXJuIHRvcCA/IChsZWZ0ID8gVE9QX0xFRlQgOiBUT1BfUklHSFQpIDogbGVmdCA/IEJPVFRPTV9MRUZUIDogQk9UVE9NX1JJR0hUO1xufVxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb25zIHRoYXQgYXJlIG5vdCBib3VuZCB0byB0aGUgY2xhc3Mgc28gYW4gZXh0ZXJuYWwgdXNlclxuICogY2Fubm90IG1lc3Mgd2l0aCB0aGVtLlxuICovXG5mdW5jdGlvbiBidWlsZFF1YWRyYW50cyhtYXhMZXZlbCwgZGF0YSkge1xuICAgIC8vIFtibG9jaywgbGV2ZWxdXG4gICAgdmFyIHN0YWNrID0gWzAsIDBdO1xuICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGxldmVsID0gc3RhY2sucG9wKCksIGJsb2NrID0gc3RhY2sucG9wKCk7XG4gICAgICAgIHZhciB0b3BMZWZ0QmxvY2sgPSA0ICogYmxvY2sgKyBCTE9DS1MsIHRvcFJpZ2h0QmxvY2sgPSA0ICogYmxvY2sgKyAyICogQkxPQ0tTLCBib3R0b21MZWZ0QmxvY2sgPSA0ICogYmxvY2sgKyAzICogQkxPQ0tTLCBib3R0b21SaWdodEJsb2NrID0gNCAqIGJsb2NrICsgNCAqIEJMT0NLUztcbiAgICAgICAgdmFyIHggPSBkYXRhW2Jsb2NrICsgWF9PRkZTRVRdLCB5ID0gZGF0YVtibG9jayArIFlfT0ZGU0VUXSwgd2lkdGggPSBkYXRhW2Jsb2NrICsgV0lEVEhfT0ZGU0VUXSwgaGVpZ2h0ID0gZGF0YVtibG9jayArIEhFSUdIVF9PRkZTRVRdLCBodyA9IHdpZHRoIC8gMiwgaGggPSBoZWlnaHQgLyAyO1xuICAgICAgICBkYXRhW3RvcExlZnRCbG9jayArIFhfT0ZGU0VUXSA9IHg7XG4gICAgICAgIGRhdGFbdG9wTGVmdEJsb2NrICsgWV9PRkZTRVRdID0geTtcbiAgICAgICAgZGF0YVt0b3BMZWZ0QmxvY2sgKyBXSURUSF9PRkZTRVRdID0gaHc7XG4gICAgICAgIGRhdGFbdG9wTGVmdEJsb2NrICsgSEVJR0hUX09GRlNFVF0gPSBoaDtcbiAgICAgICAgZGF0YVt0b3BSaWdodEJsb2NrICsgWF9PRkZTRVRdID0geCArIGh3O1xuICAgICAgICBkYXRhW3RvcFJpZ2h0QmxvY2sgKyBZX09GRlNFVF0gPSB5O1xuICAgICAgICBkYXRhW3RvcFJpZ2h0QmxvY2sgKyBXSURUSF9PRkZTRVRdID0gaHc7XG4gICAgICAgIGRhdGFbdG9wUmlnaHRCbG9jayArIEhFSUdIVF9PRkZTRVRdID0gaGg7XG4gICAgICAgIGRhdGFbYm90dG9tTGVmdEJsb2NrICsgWF9PRkZTRVRdID0geDtcbiAgICAgICAgZGF0YVtib3R0b21MZWZ0QmxvY2sgKyBZX09GRlNFVF0gPSB5ICsgaGg7XG4gICAgICAgIGRhdGFbYm90dG9tTGVmdEJsb2NrICsgV0lEVEhfT0ZGU0VUXSA9IGh3O1xuICAgICAgICBkYXRhW2JvdHRvbUxlZnRCbG9jayArIEhFSUdIVF9PRkZTRVRdID0gaGg7XG4gICAgICAgIGRhdGFbYm90dG9tUmlnaHRCbG9jayArIFhfT0ZGU0VUXSA9IHggKyBodztcbiAgICAgICAgZGF0YVtib3R0b21SaWdodEJsb2NrICsgWV9PRkZTRVRdID0geSArIGhoO1xuICAgICAgICBkYXRhW2JvdHRvbVJpZ2h0QmxvY2sgKyBXSURUSF9PRkZTRVRdID0gaHc7XG4gICAgICAgIGRhdGFbYm90dG9tUmlnaHRCbG9jayArIEhFSUdIVF9PRkZTRVRdID0gaGg7XG4gICAgICAgIGlmIChsZXZlbCA8IG1heExldmVsIC0gMSkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChib3R0b21SaWdodEJsb2NrLCBsZXZlbCArIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChib3R0b21MZWZ0QmxvY2ssIGxldmVsICsgMSk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKHRvcFJpZ2h0QmxvY2ssIGxldmVsICsgMSk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKHRvcExlZnRCbG9jaywgbGV2ZWwgKyAxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGluc2VydE5vZGUobWF4TGV2ZWwsIGRhdGEsIGNvbnRhaW5lcnMsIGtleSwgeCwgeSwgc2l6ZSkge1xuICAgIHZhciB4MSA9IHggLSBzaXplLCB5MSA9IHkgLSBzaXplLCB3ID0gc2l6ZSAqIDI7XG4gICAgdmFyIGxldmVsID0gMCwgYmxvY2sgPSAwO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgbWF4IGxldmVsXG4gICAgICAgIGlmIChsZXZlbCA+PSBtYXhMZXZlbCkge1xuICAgICAgICAgICAgY29udGFpbmVyc1tibG9ja10gPSBjb250YWluZXJzW2Jsb2NrXSB8fCBbXTtcbiAgICAgICAgICAgIGNvbnRhaW5lcnNbYmxvY2tdLnB1c2goa2V5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdG9wTGVmdEJsb2NrID0gNCAqIGJsb2NrICsgQkxPQ0tTLCB0b3BSaWdodEJsb2NrID0gNCAqIGJsb2NrICsgMiAqIEJMT0NLUywgYm90dG9tTGVmdEJsb2NrID0gNCAqIGJsb2NrICsgMyAqIEJMT0NLUywgYm90dG9tUmlnaHRCbG9jayA9IDQgKiBibG9jayArIDQgKiBCTE9DS1M7XG4gICAgICAgIHZhciBjb2xsaWRpbmdXaXRoVG9wTGVmdCA9IHNxdWFyZUNvbGxpZGVzV2l0aFF1YWQoeDEsIHkxLCB3LCBkYXRhW3RvcExlZnRCbG9jayArIFhfT0ZGU0VUXSwgZGF0YVt0b3BMZWZ0QmxvY2sgKyBZX09GRlNFVF0sIGRhdGFbdG9wTGVmdEJsb2NrICsgV0lEVEhfT0ZGU0VUXSwgZGF0YVt0b3BMZWZ0QmxvY2sgKyBIRUlHSFRfT0ZGU0VUXSk7XG4gICAgICAgIHZhciBjb2xsaWRpbmdXaXRoVG9wUmlnaHQgPSBzcXVhcmVDb2xsaWRlc1dpdGhRdWFkKHgxLCB5MSwgdywgZGF0YVt0b3BSaWdodEJsb2NrICsgWF9PRkZTRVRdLCBkYXRhW3RvcFJpZ2h0QmxvY2sgKyBZX09GRlNFVF0sIGRhdGFbdG9wUmlnaHRCbG9jayArIFdJRFRIX09GRlNFVF0sIGRhdGFbdG9wUmlnaHRCbG9jayArIEhFSUdIVF9PRkZTRVRdKTtcbiAgICAgICAgdmFyIGNvbGxpZGluZ1dpdGhCb3R0b21MZWZ0ID0gc3F1YXJlQ29sbGlkZXNXaXRoUXVhZCh4MSwgeTEsIHcsIGRhdGFbYm90dG9tTGVmdEJsb2NrICsgWF9PRkZTRVRdLCBkYXRhW2JvdHRvbUxlZnRCbG9jayArIFlfT0ZGU0VUXSwgZGF0YVtib3R0b21MZWZ0QmxvY2sgKyBXSURUSF9PRkZTRVRdLCBkYXRhW2JvdHRvbUxlZnRCbG9jayArIEhFSUdIVF9PRkZTRVRdKTtcbiAgICAgICAgdmFyIGNvbGxpZGluZ1dpdGhCb3R0b21SaWdodCA9IHNxdWFyZUNvbGxpZGVzV2l0aFF1YWQoeDEsIHkxLCB3LCBkYXRhW2JvdHRvbVJpZ2h0QmxvY2sgKyBYX09GRlNFVF0sIGRhdGFbYm90dG9tUmlnaHRCbG9jayArIFlfT0ZGU0VUXSwgZGF0YVtib3R0b21SaWdodEJsb2NrICsgV0lEVEhfT0ZGU0VUXSwgZGF0YVtib3R0b21SaWdodEJsb2NrICsgSEVJR0hUX09GRlNFVF0pO1xuICAgICAgICB2YXIgY29sbGlzaW9ucyA9IFtcbiAgICAgICAgICAgIGNvbGxpZGluZ1dpdGhUb3BMZWZ0LFxuICAgICAgICAgICAgY29sbGlkaW5nV2l0aFRvcFJpZ2h0LFxuICAgICAgICAgICAgY29sbGlkaW5nV2l0aEJvdHRvbUxlZnQsXG4gICAgICAgICAgICBjb2xsaWRpbmdXaXRoQm90dG9tUmlnaHQsXG4gICAgICAgIF0ucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGN1cnJlbnQpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50KVxuICAgICAgICAgICAgICAgIHJldHVybiBhY2MgKyAxO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIDApO1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIG5vIGNvbGxpc2lvbiBhdCByb290IGxldmVsLCBpbmplY3Qgbm9kZSBpbiB0aGUgb3V0c2lkZSBibG9ja1xuICAgICAgICBpZiAoY29sbGlzaW9ucyA9PT0gMCAmJiBsZXZlbCA9PT0gMCkge1xuICAgICAgICAgICAgY29udGFpbmVyc1tPVVRTSURFX0JMT0NLXS5wdXNoKGtleSk7XG4gICAgICAgICAgICBpZiAoIWhhc1dhcm5lZFRvb011Y2hPdXRzaWRlICYmIGNvbnRhaW5lcnNbT1VUU0lERV9CTE9DS10ubGVuZ3RoID49IDUpIHtcbiAgICAgICAgICAgICAgICBoYXNXYXJuZWRUb29NdWNoT3V0c2lkZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwic2lnbWEvcXVhZHRyZWUuaW5zZXJ0Tm9kZTogQXQgbGVhc3QgNSBub2RlcyBhcmUgb3V0c2lkZSB0aGUgZ2xvYmFsIHF1YWR0cmVlIHpvbmUuIFwiICtcbiAgICAgICAgICAgICAgICAgICAgXCJZb3UgbWlnaHQgaGF2ZSBhIHByb2JsZW0gd2l0aCB0aGUgbm9ybWFsaXphdGlvbiBmdW5jdGlvbiBvciB0aGUgY3VzdG9tIGJvdW5kaW5nIGJveC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhdCBsZWFzdCBhIGNvbGxpc2lvbiBidXQgZGVlcGVyLCB0aGVyZSBpcyBhbiBpc3N1ZVxuICAgICAgICBpZiAoY29sbGlzaW9ucyA9PT0gMClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNpZ21hL3F1YWR0cmVlLmluc2VydE5vZGU6IG5vIGNvbGxpc2lvbiAobGV2ZWw6IFwiLmNvbmNhdChsZXZlbCwgXCIsIGtleTogXCIpLmNvbmNhdChrZXksIFwiLCB4OiBcIikuY29uY2F0KHgsIFwiLCB5OiBcIikuY29uY2F0KHksIFwiLCBzaXplOiBcIikuY29uY2F0KHNpemUsIFwiKS5cIikpO1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIDMgY29sbGlzaW9ucywgd2UgaGF2ZSBhIGdlb21ldHJ5IHByb2JsZW0gb2J2aW91c2x5XG4gICAgICAgIGlmIChjb2xsaXNpb25zID09PSAzKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2lnbWEvcXVhZHRyZWUuaW5zZXJ0Tm9kZTogMyBpbXBvc3NpYmxlIGNvbGxpc2lvbnMgKGxldmVsOiBcIi5jb25jYXQobGV2ZWwsIFwiLCBrZXk6IFwiKS5jb25jYXQoa2V5LCBcIiwgeDogXCIpLmNvbmNhdCh4LCBcIiwgeTogXCIpLmNvbmNhdCh5LCBcIiwgc2l6ZTogXCIpLmNvbmNhdChzaXplLCBcIikuXCIpKTtcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBtb3JlIHRoYXQgb25lIGNvbGxpc2lvbiwgd2Ugc3RvcCBoZXJlIGFuZCBzdG9yZSB0aGUgbm9kZVxuICAgICAgICAvLyBpbiB0aGUgcmVsZXZhbnQgY29udGFpbmVyc1xuICAgICAgICBpZiAoY29sbGlzaW9ucyA+IDEpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lcnNbYmxvY2tdID0gY29udGFpbmVyc1tibG9ja10gfHwgW107XG4gICAgICAgICAgICBjb250YWluZXJzW2Jsb2NrXS5wdXNoKGtleSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXZlbCsrO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVsc2Ugd2UgcmVjdXJzZSBpbnRvIHRoZSBjb3JyZWN0IHF1YWRzXG4gICAgICAgIGlmIChjb2xsaWRpbmdXaXRoVG9wTGVmdClcbiAgICAgICAgICAgIGJsb2NrID0gdG9wTGVmdEJsb2NrO1xuICAgICAgICBpZiAoY29sbGlkaW5nV2l0aFRvcFJpZ2h0KVxuICAgICAgICAgICAgYmxvY2sgPSB0b3BSaWdodEJsb2NrO1xuICAgICAgICBpZiAoY29sbGlkaW5nV2l0aEJvdHRvbUxlZnQpXG4gICAgICAgICAgICBibG9jayA9IGJvdHRvbUxlZnRCbG9jaztcbiAgICAgICAgaWYgKGNvbGxpZGluZ1dpdGhCb3R0b21SaWdodClcbiAgICAgICAgICAgIGJsb2NrID0gYm90dG9tUmlnaHRCbG9jaztcbiAgICB9XG59XG5mdW5jdGlvbiBnZXROb2Rlc0luQXhpc0FsaWduZWRSZWN0YW5nbGVBcmVhKG1heExldmVsLCBkYXRhLCBjb250YWluZXJzLCB4MSwgeTEsIHcsIGgpIHtcbiAgICAvLyBbYmxvY2ssIGxldmVsXVxuICAgIHZhciBzdGFjayA9IFswLCAwXTtcbiAgICB2YXIgY29sbGVjdGVkTm9kZXMgPSBbXTtcbiAgICB2YXIgY29udGFpbmVyO1xuICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGxldmVsID0gc3RhY2sucG9wKCksIGJsb2NrID0gc3RhY2sucG9wKCk7XG4gICAgICAgIC8vIENvbGxlY3Rpbmcgbm9kZXNcbiAgICAgICAgY29udGFpbmVyID0gY29udGFpbmVyc1tibG9ja107XG4gICAgICAgIGlmIChjb250YWluZXIpXG4gICAgICAgICAgICAoMCwgZXh0ZW5kXzEuZGVmYXVsdCkoY29sbGVjdGVkTm9kZXMsIGNvbnRhaW5lcik7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgbWF4IGxldmVsXG4gICAgICAgIGlmIChsZXZlbCA+PSBtYXhMZXZlbClcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB2YXIgdG9wTGVmdEJsb2NrID0gNCAqIGJsb2NrICsgQkxPQ0tTLCB0b3BSaWdodEJsb2NrID0gNCAqIGJsb2NrICsgMiAqIEJMT0NLUywgYm90dG9tTGVmdEJsb2NrID0gNCAqIGJsb2NrICsgMyAqIEJMT0NLUywgYm90dG9tUmlnaHRCbG9jayA9IDQgKiBibG9jayArIDQgKiBCTE9DS1M7XG4gICAgICAgIHZhciBjb2xsaWRpbmdXaXRoVG9wTGVmdCA9IHJlY3RhbmdsZUNvbGxpZGVzV2l0aFF1YWQoeDEsIHkxLCB3LCBoLCBkYXRhW3RvcExlZnRCbG9jayArIFhfT0ZGU0VUXSwgZGF0YVt0b3BMZWZ0QmxvY2sgKyBZX09GRlNFVF0sIGRhdGFbdG9wTGVmdEJsb2NrICsgV0lEVEhfT0ZGU0VUXSwgZGF0YVt0b3BMZWZ0QmxvY2sgKyBIRUlHSFRfT0ZGU0VUXSk7XG4gICAgICAgIHZhciBjb2xsaWRpbmdXaXRoVG9wUmlnaHQgPSByZWN0YW5nbGVDb2xsaWRlc1dpdGhRdWFkKHgxLCB5MSwgdywgaCwgZGF0YVt0b3BSaWdodEJsb2NrICsgWF9PRkZTRVRdLCBkYXRhW3RvcFJpZ2h0QmxvY2sgKyBZX09GRlNFVF0sIGRhdGFbdG9wUmlnaHRCbG9jayArIFdJRFRIX09GRlNFVF0sIGRhdGFbdG9wUmlnaHRCbG9jayArIEhFSUdIVF9PRkZTRVRdKTtcbiAgICAgICAgdmFyIGNvbGxpZGluZ1dpdGhCb3R0b21MZWZ0ID0gcmVjdGFuZ2xlQ29sbGlkZXNXaXRoUXVhZCh4MSwgeTEsIHcsIGgsIGRhdGFbYm90dG9tTGVmdEJsb2NrICsgWF9PRkZTRVRdLCBkYXRhW2JvdHRvbUxlZnRCbG9jayArIFlfT0ZGU0VUXSwgZGF0YVtib3R0b21MZWZ0QmxvY2sgKyBXSURUSF9PRkZTRVRdLCBkYXRhW2JvdHRvbUxlZnRCbG9jayArIEhFSUdIVF9PRkZTRVRdKTtcbiAgICAgICAgdmFyIGNvbGxpZGluZ1dpdGhCb3R0b21SaWdodCA9IHJlY3RhbmdsZUNvbGxpZGVzV2l0aFF1YWQoeDEsIHkxLCB3LCBoLCBkYXRhW2JvdHRvbVJpZ2h0QmxvY2sgKyBYX09GRlNFVF0sIGRhdGFbYm90dG9tUmlnaHRCbG9jayArIFlfT0ZGU0VUXSwgZGF0YVtib3R0b21SaWdodEJsb2NrICsgV0lEVEhfT0ZGU0VUXSwgZGF0YVtib3R0b21SaWdodEJsb2NrICsgSEVJR0hUX09GRlNFVF0pO1xuICAgICAgICBpZiAoY29sbGlkaW5nV2l0aFRvcExlZnQpXG4gICAgICAgICAgICBzdGFjay5wdXNoKHRvcExlZnRCbG9jaywgbGV2ZWwgKyAxKTtcbiAgICAgICAgaWYgKGNvbGxpZGluZ1dpdGhUb3BSaWdodClcbiAgICAgICAgICAgIHN0YWNrLnB1c2godG9wUmlnaHRCbG9jaywgbGV2ZWwgKyAxKTtcbiAgICAgICAgaWYgKGNvbGxpZGluZ1dpdGhCb3R0b21MZWZ0KVxuICAgICAgICAgICAgc3RhY2sucHVzaChib3R0b21MZWZ0QmxvY2ssIGxldmVsICsgMSk7XG4gICAgICAgIGlmIChjb2xsaWRpbmdXaXRoQm90dG9tUmlnaHQpXG4gICAgICAgICAgICBzdGFjay5wdXNoKGJvdHRvbVJpZ2h0QmxvY2ssIGxldmVsICsgMSk7XG4gICAgfVxuICAgIHJldHVybiBjb2xsZWN0ZWROb2Rlcztcbn1cbi8qKlxuICogUXVhZFRyZWUgY2xhc3MuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge29iamVjdH0gYm91bmRhcmllcyAtIFRoZSBncmFwaCBib3VuZGFyaWVzLlxuICovXG52YXIgUXVhZFRyZWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUXVhZFRyZWUocGFyYW1zKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHBhcmFtcyA9PT0gdm9pZCAwKSB7IHBhcmFtcyA9IHt9OyB9XG4gICAgICAgIHRoaXMuY29udGFpbmVycyA9IChfYSA9IHt9LCBfYVtPVVRTSURFX0JMT0NLXSA9IFtdLCBfYSk7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3RSZWN0YW5nbGUgPSBudWxsO1xuICAgICAgICAvLyBBbGxvY2F0aW5nIHRoZSB1bmRlcmx5aW5nIGJ5dGUgYXJyYXlcbiAgICAgICAgdmFyIEwgPSBNYXRoLnBvdyg0LCBNQVhfTEVWRUwpO1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KEJMT0NLUyAqICgoNCAqIEwgLSAxKSAvIDMpKTtcbiAgICAgICAgaWYgKHBhcmFtcy5ib3VuZGFyaWVzKVxuICAgICAgICAgICAgdGhpcy5yZXNpemUocGFyYW1zLmJvdW5kYXJpZXMpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSh7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMSxcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBRdWFkVHJlZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGtleSwgeCwgeSwgc2l6ZSkge1xuICAgICAgICBpbnNlcnROb2RlKE1BWF9MRVZFTCwgdGhpcy5kYXRhLCB0aGlzLmNvbnRhaW5lcnMsIGtleSwgeCwgeSwgc2l6ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgUXVhZFRyZWUucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uIChib3VuZGFyaWVzKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgLy8gQnVpbGRpbmcgdGhlIHF1YWRyYW50c1xuICAgICAgICB0aGlzLmRhdGFbWF9PRkZTRVRdID0gYm91bmRhcmllcy54O1xuICAgICAgICB0aGlzLmRhdGFbWV9PRkZTRVRdID0gYm91bmRhcmllcy55O1xuICAgICAgICB0aGlzLmRhdGFbV0lEVEhfT0ZGU0VUXSA9IGJvdW5kYXJpZXMud2lkdGg7XG4gICAgICAgIHRoaXMuZGF0YVtIRUlHSFRfT0ZGU0VUXSA9IGJvdW5kYXJpZXMuaGVpZ2h0O1xuICAgICAgICBidWlsZFF1YWRyYW50cyhNQVhfTEVWRUwsIHRoaXMuZGF0YSk7XG4gICAgfTtcbiAgICBRdWFkVHJlZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy5jb250YWluZXJzID0gKF9hID0ge30sIF9hW09VVFNJREVfQkxPQ0tdID0gW10sIF9hKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBRdWFkVHJlZS5wcm90b3R5cGUucG9pbnQgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLmNvbnRhaW5lcnNbT1VUU0lERV9CTE9DS10uc2xpY2UoKTtcbiAgICAgICAgdmFyIGJsb2NrID0gMCwgbGV2ZWwgPSAwO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250YWluZXJzW2Jsb2NrXSlcbiAgICAgICAgICAgICAgICAoMCwgZXh0ZW5kXzEuZGVmYXVsdCkobm9kZXMsIHRoaXMuY29udGFpbmVyc1tibG9ja10pO1xuICAgICAgICAgICAgdmFyIHF1YWQgPSBwb2ludElzSW5RdWFkKHgsIHksIHRoaXMuZGF0YVtibG9jayArIFhfT0ZGU0VUXSwgdGhpcy5kYXRhW2Jsb2NrICsgWV9PRkZTRVRdLCB0aGlzLmRhdGFbYmxvY2sgKyBXSURUSF9PRkZTRVRdLCB0aGlzLmRhdGFbYmxvY2sgKyBIRUlHSFRfT0ZGU0VUXSk7XG4gICAgICAgICAgICBibG9jayA9IDQgKiBibG9jayArIHF1YWQgKiBCTE9DS1M7XG4gICAgICAgICAgICBsZXZlbCsrO1xuICAgICAgICB9IHdoaWxlIChsZXZlbCA8PSBNQVhfTEVWRUwpO1xuICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgfTtcbiAgICBRdWFkVHJlZS5wcm90b3R5cGUucmVjdGFuZ2xlID0gZnVuY3Rpb24gKHgxLCB5MSwgeDIsIHkyLCBoZWlnaHQpIHtcbiAgICAgICAgdmFyIGxyID0gdGhpcy5sYXN0UmVjdGFuZ2xlO1xuICAgICAgICBpZiAobHIgJiYgeDEgPT09IGxyLngxICYmIHgyID09PSBsci54MiAmJiB5MSA9PT0gbHIueTEgJiYgeTIgPT09IGxyLnkyICYmIGhlaWdodCA9PT0gbHIuaGVpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RSZWN0YW5nbGUgPSB7XG4gICAgICAgICAgICB4MTogeDEsXG4gICAgICAgICAgICB5MTogeTEsXG4gICAgICAgICAgICB4MjogeDIsXG4gICAgICAgICAgICB5MjogeTIsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSWYgdGhlIHJlY3RhbmdsZSBpcyBzaGlmdGVkLCB3ZSB1c2UgdGhlIHNtYWxsZXN0IGFsaWduZWQgcmVjdGFuZ2xlIHRoYXQgY29udGFpbnMgdGhlIHNoaWZ0ZWQgb25lOlxuICAgICAgICBpZiAoIWlzUmVjdGFuZ2xlQWxpZ25lZCh0aGlzLmxhc3RSZWN0YW5nbGUpKVxuICAgICAgICAgICAgdGhpcy5sYXN0UmVjdGFuZ2xlID0gZ2V0Q2lyY3Vtc2NyaWJlZEFsaWduZWRSZWN0YW5nbGUodGhpcy5sYXN0UmVjdGFuZ2xlKTtcbiAgICAgICAgdGhpcy5jYWNoZSA9IGdldE5vZGVzSW5BeGlzQWxpZ25lZFJlY3RhbmdsZUFyZWEoTUFYX0xFVkVMLCB0aGlzLmRhdGEsIHRoaXMuY29udGFpbmVycywgeDEsIHkxLCBNYXRoLmFicyh4MSAtIHgyKSB8fCBNYXRoLmFicyh5MSAtIHkyKSwgaGVpZ2h0KTtcbiAgICAgICAgLy8gQWRkIGFsbCB0aGUgbm9kZXMgaW4gdGhlIG91dHNpZGUgYmxvY2ssIHNpbmNlIHRoZXkgbWlnaHQgYmUgcmVsZXZhbnQsIGFuZCBzaW5jZSB0aGV5IHNob3VsZCBiZSB2ZXJ5IGZldzpcbiAgICAgICAgKDAsIGV4dGVuZF8xLmRlZmF1bHQpKHRoaXMuY2FjaGUsIHRoaXMuY29udGFpbmVyc1tPVVRTSURFX0JMT0NLXSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlO1xuICAgIH07XG4gICAgcmV0dXJuIFF1YWRUcmVlO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFF1YWRUcmVlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNpZ21hID0gZXhwb3J0cy5Nb3VzZUNhcHRvciA9IGV4cG9ydHMuUXVhZFRyZWUgPSBleHBvcnRzLkNhbWVyYSA9IHZvaWQgMDtcbi8qKlxuICogU2lnbWEuanMgTGlicmFyeSBFbmRwb2ludFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PVxuICpcbiAqIFRoZSBsaWJyYXJ5IGVuZHBvaW50LlxuICogQG1vZHVsZVxuICovXG52YXIgc2lnbWFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zaWdtYVwiKSk7XG5leHBvcnRzLlNpZ21hID0gc2lnbWFfMS5kZWZhdWx0O1xudmFyIGNhbWVyYV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvcmUvY2FtZXJhXCIpKTtcbmV4cG9ydHMuQ2FtZXJhID0gY2FtZXJhXzEuZGVmYXVsdDtcbnZhciBxdWFkdHJlZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvcmUvcXVhZHRyZWVcIikpO1xuZXhwb3J0cy5RdWFkVHJlZSA9IHF1YWR0cmVlXzEuZGVmYXVsdDtcbnZhciBtb3VzZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvcmUvY2FwdG9ycy9tb3VzZVwiKSk7XG5leHBvcnRzLk1vdXNlQ2FwdG9yID0gbW91c2VfMS5kZWZhdWx0O1xuZXhwb3J0cy5kZWZhdWx0ID0gc2lnbWFfMS5kZWZhdWx0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBkcmF3RWRnZUxhYmVsKGNvbnRleHQsIGVkZ2VEYXRhLCBzb3VyY2VEYXRhLCB0YXJnZXREYXRhLCBzZXR0aW5ncykge1xuICAgIHZhciBzaXplID0gc2V0dGluZ3MuZWRnZUxhYmVsU2l6ZSwgZm9udCA9IHNldHRpbmdzLmVkZ2VMYWJlbEZvbnQsIHdlaWdodCA9IHNldHRpbmdzLmVkZ2VMYWJlbFdlaWdodCwgY29sb3IgPSBzZXR0aW5ncy5lZGdlTGFiZWxDb2xvci5hdHRyaWJ1dGVcbiAgICAgICAgPyBlZGdlRGF0YVtzZXR0aW5ncy5lZGdlTGFiZWxDb2xvci5hdHRyaWJ1dGVdIHx8IHNldHRpbmdzLmVkZ2VMYWJlbENvbG9yLmNvbG9yIHx8IFwiIzAwMFwiXG4gICAgICAgIDogc2V0dGluZ3MuZWRnZUxhYmVsQ29sb3IuY29sb3I7XG4gICAgdmFyIGxhYmVsID0gZWRnZURhdGEubGFiZWw7XG4gICAgaWYgKCFsYWJlbClcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgY29udGV4dC5mb250ID0gXCJcIi5jb25jYXQod2VpZ2h0LCBcIiBcIikuY29uY2F0KHNpemUsIFwicHggXCIpLmNvbmNhdChmb250KTtcbiAgICAvLyBDb21wdXRpbmcgcG9zaXRpb25zIHdpdGhvdXQgY29uc2lkZXJpbmcgbm9kZXMgc2l6ZXM6XG4gICAgdmFyIHNTaXplID0gc291cmNlRGF0YS5zaXplO1xuICAgIHZhciB0U2l6ZSA9IHRhcmdldERhdGEuc2l6ZTtcbiAgICB2YXIgc3ggPSBzb3VyY2VEYXRhLng7XG4gICAgdmFyIHN5ID0gc291cmNlRGF0YS55O1xuICAgIHZhciB0eCA9IHRhcmdldERhdGEueDtcbiAgICB2YXIgdHkgPSB0YXJnZXREYXRhLnk7XG4gICAgdmFyIGN4ID0gKHN4ICsgdHgpIC8gMjtcbiAgICB2YXIgY3kgPSAoc3kgKyB0eSkgLyAyO1xuICAgIHZhciBkeCA9IHR4IC0gc3g7XG4gICAgdmFyIGR5ID0gdHkgLSBzeTtcbiAgICB2YXIgZCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgaWYgKGQgPCBzU2l6ZSArIHRTaXplKVxuICAgICAgICByZXR1cm47XG4gICAgLy8gQWRkaW5nIG5vZGVzIHNpemVzOlxuICAgIHN4ICs9IChkeCAqIHNTaXplKSAvIGQ7XG4gICAgc3kgKz0gKGR5ICogc1NpemUpIC8gZDtcbiAgICB0eCAtPSAoZHggKiB0U2l6ZSkgLyBkO1xuICAgIHR5IC09IChkeSAqIHRTaXplKSAvIGQ7XG4gICAgY3ggPSAoc3ggKyB0eCkgLyAyO1xuICAgIGN5ID0gKHN5ICsgdHkpIC8gMjtcbiAgICBkeCA9IHR4IC0gc3g7XG4gICAgZHkgPSB0eSAtIHN5O1xuICAgIGQgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIC8vIEhhbmRsaW5nIGVsbGlwc2lzXG4gICAgdmFyIHRleHRMZW5ndGggPSBjb250ZXh0Lm1lYXN1cmVUZXh0KGxhYmVsKS53aWR0aDtcbiAgICBpZiAodGV4dExlbmd0aCA+IGQpIHtcbiAgICAgICAgdmFyIGVsbGlwc2lzID0gXCLigKZcIjtcbiAgICAgICAgbGFiZWwgPSBsYWJlbCArIGVsbGlwc2lzO1xuICAgICAgICB0ZXh0TGVuZ3RoID0gY29udGV4dC5tZWFzdXJlVGV4dChsYWJlbCkud2lkdGg7XG4gICAgICAgIHdoaWxlICh0ZXh0TGVuZ3RoID4gZCAmJiBsYWJlbC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnNsaWNlKDAsIC0yKSArIGVsbGlwc2lzO1xuICAgICAgICAgICAgdGV4dExlbmd0aCA9IGNvbnRleHQubWVhc3VyZVRleHQobGFiZWwpLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYWJlbC5sZW5ndGggPCA0KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgYW5nbGU7XG4gICAgaWYgKGR4ID4gMCkge1xuICAgICAgICBpZiAoZHkgPiAwKVxuICAgICAgICAgICAgYW5nbGUgPSBNYXRoLmFjb3MoZHggLyBkKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgYW5nbGUgPSBNYXRoLmFzaW4oZHkgLyBkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChkeSA+IDApXG4gICAgICAgICAgICBhbmdsZSA9IE1hdGguYWNvcyhkeCAvIGQpICsgTWF0aC5QSTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgYW5nbGUgPSBNYXRoLmFzaW4oZHggLyBkKSArIE1hdGguUEkgLyAyO1xuICAgIH1cbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb250ZXh0LnRyYW5zbGF0ZShjeCwgY3kpO1xuICAgIGNvbnRleHQucm90YXRlKGFuZ2xlKTtcbiAgICBjb250ZXh0LmZpbGxUZXh0KGxhYmVsLCAtdGV4dExlbmd0aCAvIDIsIGVkZ2VEYXRhLnNpemUgLyAyICsgc2l6ZSk7XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBkcmF3RWRnZUxhYmVsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbGFiZWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9sYWJlbFwiKSk7XG4vKipcbiAqIERyYXcgYW4gaG92ZXJlZCBub2RlLlxuICogLSBpZiB0aGVyZSBpcyBubyBsYWJlbCA9PiBkaXNwbGF5IGEgc2hhZG93IG9uIHRoZSBub2RlXG4gKiAtIGlmIHRoZSBsYWJlbCBib3ggaXMgYmlnZ2VyIHRoYW4gbm9kZSBzaXplID0+IGRpc3BsYXkgYSBsYWJlbCBib3ggdGhhdCBjb250YWlucyB0aGUgbm9kZSB3aXRoIGEgc2hhZG93XG4gKiAtIGVsc2Ugbm9kZSB3aXRoIHNoYWRvdyBhbmQgdGhlIGxhYmVsIGJveFxuICovXG5mdW5jdGlvbiBkcmF3SG92ZXIoY29udGV4dCwgZGF0YSwgc2V0dGluZ3MpIHtcbiAgICB2YXIgc2l6ZSA9IHNldHRpbmdzLmxhYmVsU2l6ZSwgZm9udCA9IHNldHRpbmdzLmxhYmVsRm9udCwgd2VpZ2h0ID0gc2V0dGluZ3MubGFiZWxXZWlnaHQ7XG4gICAgY29udGV4dC5mb250ID0gXCJcIi5jb25jYXQod2VpZ2h0LCBcIiBcIikuY29uY2F0KHNpemUsIFwicHggXCIpLmNvbmNhdChmb250KTtcbiAgICAvLyBUaGVuIHdlIGRyYXcgdGhlIGxhYmVsIGJhY2tncm91bmRcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwiI0ZGRlwiO1xuICAgIGNvbnRleHQuc2hhZG93T2Zmc2V0WCA9IDA7XG4gICAgY29udGV4dC5zaGFkb3dPZmZzZXRZID0gMDtcbiAgICBjb250ZXh0LnNoYWRvd0JsdXIgPSA4O1xuICAgIGNvbnRleHQuc2hhZG93Q29sb3IgPSBcIiMwMDBcIjtcbiAgICB2YXIgUEFERElORyA9IDI7XG4gICAgaWYgKHR5cGVvZiBkYXRhLmxhYmVsID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHZhciB0ZXh0V2lkdGggPSBjb250ZXh0Lm1lYXN1cmVUZXh0KGRhdGEubGFiZWwpLndpZHRoLCBib3hXaWR0aCA9IE1hdGgucm91bmQodGV4dFdpZHRoICsgNSksIGJveEhlaWdodCA9IE1hdGgucm91bmQoc2l6ZSArIDIgKiBQQURESU5HKSwgcmFkaXVzID0gTWF0aC5tYXgoZGF0YS5zaXplLCBzaXplIC8gMikgKyBQQURESU5HO1xuICAgICAgICB2YXIgYW5nbGVSYWRpYW4gPSBNYXRoLmFzaW4oYm94SGVpZ2h0IC8gMiAvIHJhZGl1cyk7XG4gICAgICAgIHZhciB4RGVsdGFDb29yZCA9IE1hdGguc3FydChNYXRoLmFicyhNYXRoLnBvdyhyYWRpdXMsIDIpIC0gTWF0aC5wb3coYm94SGVpZ2h0IC8gMiwgMikpKTtcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgY29udGV4dC5tb3ZlVG8oZGF0YS54ICsgeERlbHRhQ29vcmQsIGRhdGEueSArIGJveEhlaWdodCAvIDIpO1xuICAgICAgICBjb250ZXh0LmxpbmVUbyhkYXRhLnggKyByYWRpdXMgKyBib3hXaWR0aCwgZGF0YS55ICsgYm94SGVpZ2h0IC8gMik7XG4gICAgICAgIGNvbnRleHQubGluZVRvKGRhdGEueCArIHJhZGl1cyArIGJveFdpZHRoLCBkYXRhLnkgLSBib3hIZWlnaHQgLyAyKTtcbiAgICAgICAgY29udGV4dC5saW5lVG8oZGF0YS54ICsgeERlbHRhQ29vcmQsIGRhdGEueSAtIGJveEhlaWdodCAvIDIpO1xuICAgICAgICBjb250ZXh0LmFyYyhkYXRhLngsIGRhdGEueSwgcmFkaXVzLCBhbmdsZVJhZGlhbiwgLWFuZ2xlUmFkaWFuKTtcbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBjb250ZXh0LmFyYyhkYXRhLngsIGRhdGEueSwgZGF0YS5zaXplICsgUEFERElORywgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICB9XG4gICAgY29udGV4dC5zaGFkb3dPZmZzZXRYID0gMDtcbiAgICBjb250ZXh0LnNoYWRvd09mZnNldFkgPSAwO1xuICAgIGNvbnRleHQuc2hhZG93Qmx1ciA9IDA7XG4gICAgLy8gQW5kIGZpbmFsbHkgd2UgZHJhdyB0aGUgbGFiZWxcbiAgICAoMCwgbGFiZWxfMS5kZWZhdWx0KShjb250ZXh0LCBkYXRhLCBzZXR0aW5ncyk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBkcmF3SG92ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGRyYXdMYWJlbChjb250ZXh0LCBkYXRhLCBzZXR0aW5ncykge1xuICAgIGlmICghZGF0YS5sYWJlbClcbiAgICAgICAgcmV0dXJuO1xuICAgIHZhciBzaXplID0gc2V0dGluZ3MubGFiZWxTaXplLCBmb250ID0gc2V0dGluZ3MubGFiZWxGb250LCB3ZWlnaHQgPSBzZXR0aW5ncy5sYWJlbFdlaWdodCwgY29sb3IgPSBzZXR0aW5ncy5sYWJlbENvbG9yLmF0dHJpYnV0ZVxuICAgICAgICA/IGRhdGFbc2V0dGluZ3MubGFiZWxDb2xvci5hdHRyaWJ1dGVdIHx8IHNldHRpbmdzLmxhYmVsQ29sb3IuY29sb3IgfHwgXCIjMDAwXCJcbiAgICAgICAgOiBzZXR0aW5ncy5sYWJlbENvbG9yLmNvbG9yO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgY29udGV4dC5mb250ID0gXCJcIi5jb25jYXQod2VpZ2h0LCBcIiBcIikuY29uY2F0KHNpemUsIFwicHggXCIpLmNvbmNhdChmb250KTtcbiAgICBjb250ZXh0LmZpbGxUZXh0KGRhdGEubGFiZWwsIGRhdGEueCArIGRhdGEuc2l6ZSArIDMsIGRhdGEueSArIHNpemUgLyAzKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRyYXdMYWJlbDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlRWRnZUNvbXBvdW5kUHJvZ3JhbSA9IGV4cG9ydHMuQWJzdHJhY3RFZGdlUHJvZ3JhbSA9IHZvaWQgMDtcbi8qKlxuICogU2lnbWEuanMgV2ViR0wgQWJzdHJhY3QgRWRnZSBQcm9ncmFtXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKlxuICogQG1vZHVsZVxuICovXG52YXIgcHJvZ3JhbV8xID0gcmVxdWlyZShcIi4vcHJvZ3JhbVwiKTtcbi8qKlxuICogRWRnZSBQcm9ncmFtIGNsYXNzLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgQWJzdHJhY3RFZGdlUHJvZ3JhbSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQWJzdHJhY3RFZGdlUHJvZ3JhbSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBYnN0cmFjdEVkZ2VQcm9ncmFtKGdsLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBwb2ludHMsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIGdsLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBwb2ludHMsIGF0dHJpYnV0ZXMpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBBYnN0cmFjdEVkZ2VQcm9ncmFtO1xufShwcm9ncmFtXzEuQWJzdHJhY3RQcm9ncmFtKSk7XG5leHBvcnRzLkFic3RyYWN0RWRnZVByb2dyYW0gPSBBYnN0cmFjdEVkZ2VQcm9ncmFtO1xuZnVuY3Rpb24gY3JlYXRlRWRnZUNvbXBvdW5kUHJvZ3JhbShwcm9ncmFtQ2xhc3Nlcykge1xuICAgIHJldHVybiAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIEVkZ2VDb21wb3VuZFByb2dyYW0oZ2wsIHJlbmRlcmVyKSB7XG4gICAgICAgICAgICB0aGlzLnByb2dyYW1zID0gcHJvZ3JhbUNsYXNzZXMubWFwKGZ1bmN0aW9uIChQcm9ncmFtQ2xhc3MpIHsgcmV0dXJuIG5ldyBQcm9ncmFtQ2xhc3MoZ2wsIHJlbmRlcmVyKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgRWRnZUNvbXBvdW5kUHJvZ3JhbS5wcm90b3R5cGUuYnVmZmVyRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbXMuZm9yRWFjaChmdW5jdGlvbiAocHJvZ3JhbSkgeyByZXR1cm4gcHJvZ3JhbS5idWZmZXJEYXRhKCk7IH0pO1xuICAgICAgICB9O1xuICAgICAgICBFZGdlQ29tcG91bmRQcm9ncmFtLnByb3RvdHlwZS5hbGxvY2F0ZSA9IGZ1bmN0aW9uIChjYXBhY2l0eSkge1xuICAgICAgICAgICAgdGhpcy5wcm9ncmFtcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9ncmFtKSB7IHJldHVybiBwcm9ncmFtLmFsbG9jYXRlKGNhcGFjaXR5KTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIEVkZ2VDb21wb3VuZFByb2dyYW0ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBub3RoaW5nIHRvZG8sIGl0J3MgYWxyZWFkeSBkb25lIGluIGVhY2ggcHJvZ3JhbSBjb25zdHJ1Y3RvclxuICAgICAgICB9O1xuICAgICAgICBFZGdlQ29tcG91bmRQcm9ncmFtLnByb3RvdHlwZS5jb21wdXRlSW5kaWNlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbXMuZm9yRWFjaChmdW5jdGlvbiAocHJvZ3JhbSkgeyByZXR1cm4gcHJvZ3JhbS5jb21wdXRlSW5kaWNlcygpOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgRWRnZUNvbXBvdW5kUHJvZ3JhbS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgICAgdGhpcy5wcm9ncmFtcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9ncmFtKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3JhbS5iaW5kKCk7XG4gICAgICAgICAgICAgICAgcHJvZ3JhbS5idWZmZXJEYXRhKCk7XG4gICAgICAgICAgICAgICAgcHJvZ3JhbS5yZW5kZXIocGFyYW1zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBFZGdlQ29tcG91bmRQcm9ncmFtLnByb3RvdHlwZS5wcm9jZXNzID0gZnVuY3Rpb24gKHNvdXJjZURhdGEsIHRhcmdldERhdGEsIGRhdGEsIGhpZGRlbiwgb2Zmc2V0KSB7XG4gICAgICAgICAgICB0aGlzLnByb2dyYW1zLmZvckVhY2goZnVuY3Rpb24gKHByb2dyYW0pIHsgcmV0dXJuIHByb2dyYW0ucHJvY2Vzcyhzb3VyY2VEYXRhLCB0YXJnZXREYXRhLCBkYXRhLCBoaWRkZW4sIG9mZnNldCk7IH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gRWRnZUNvbXBvdW5kUHJvZ3JhbTtcbiAgICB9KCkpO1xufVxuZXhwb3J0cy5jcmVhdGVFZGdlQ29tcG91bmRQcm9ncmFtID0gY3JlYXRlRWRnZUNvbXBvdW5kUHJvZ3JhbTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlTm9kZUNvbXBvdW5kUHJvZ3JhbSA9IGV4cG9ydHMuQWJzdHJhY3ROb2RlUHJvZ3JhbSA9IHZvaWQgMDtcbi8qKlxuICogU2lnbWEuanMgV2ViR0wgQWJzdHJhY3QgTm9kZSBQcm9ncmFtXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKlxuICogQG1vZHVsZVxuICovXG52YXIgcHJvZ3JhbV8xID0gcmVxdWlyZShcIi4vcHJvZ3JhbVwiKTtcbi8qKlxuICogTm9kZSBQcm9ncmFtIGNsYXNzLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgQWJzdHJhY3ROb2RlUHJvZ3JhbSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQWJzdHJhY3ROb2RlUHJvZ3JhbSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBYnN0cmFjdE5vZGVQcm9ncmFtKGdsLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBwb2ludHMsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZ2wsIHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIHBvaW50cywgYXR0cmlidXRlcykgfHwgdGhpcztcbiAgICAgICAgLy8gTG9jYXRpb25zXG4gICAgICAgIF90aGlzLnBvc2l0aW9uTG9jYXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihfdGhpcy5wcm9ncmFtLCBcImFfcG9zaXRpb25cIik7XG4gICAgICAgIF90aGlzLnNpemVMb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKF90aGlzLnByb2dyYW0sIFwiYV9zaXplXCIpO1xuICAgICAgICBfdGhpcy5jb2xvckxvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oX3RoaXMucHJvZ3JhbSwgXCJhX2NvbG9yXCIpO1xuICAgICAgICAvLyBVbmlmb3JtIExvY2F0aW9uXG4gICAgICAgIHZhciBtYXRyaXhMb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihfdGhpcy5wcm9ncmFtLCBcInVfbWF0cml4XCIpO1xuICAgICAgICBpZiAobWF0cml4TG9jYXRpb24gPT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdE5vZGVQcm9ncmFtOiBlcnJvciB3aGlsZSBnZXR0aW5nIG1hdHJpeExvY2F0aW9uXCIpO1xuICAgICAgICBfdGhpcy5tYXRyaXhMb2NhdGlvbiA9IG1hdHJpeExvY2F0aW9uO1xuICAgICAgICB2YXIgcmF0aW9Mb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihfdGhpcy5wcm9ncmFtLCBcInVfcmF0aW9cIik7XG4gICAgICAgIGlmIChyYXRpb0xvY2F0aW9uID09PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3ROb2RlUHJvZ3JhbTogZXJyb3Igd2hpbGUgZ2V0dGluZyByYXRpb0xvY2F0aW9uXCIpO1xuICAgICAgICBfdGhpcy5yYXRpb0xvY2F0aW9uID0gcmF0aW9Mb2NhdGlvbjtcbiAgICAgICAgdmFyIHNjYWxlTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oX3RoaXMucHJvZ3JhbSwgXCJ1X3NjYWxlXCIpO1xuICAgICAgICBpZiAoc2NhbGVMb2NhdGlvbiA9PT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0Tm9kZVByb2dyYW06IGVycm9yIHdoaWxlIGdldHRpbmcgc2NhbGVMb2NhdGlvblwiKTtcbiAgICAgICAgX3RoaXMuc2NhbGVMb2NhdGlvbiA9IHNjYWxlTG9jYXRpb247XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQWJzdHJhY3ROb2RlUHJvZ3JhbS5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5nbDtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5wb3NpdGlvbkxvY2F0aW9uKTtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5zaXplTG9jYXRpb24pO1xuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLmNvbG9yTG9jYXRpb24pO1xuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMucG9zaXRpb25Mb2NhdGlvbiwgMiwgZ2wuRkxPQVQsIGZhbHNlLCB0aGlzLmF0dHJpYnV0ZXMgKiBGbG9hdDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQsIDApO1xuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMuc2l6ZUxvY2F0aW9uLCAxLCBnbC5GTE9BVCwgZmFsc2UsIHRoaXMuYXR0cmlidXRlcyAqIEZsb2F0MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCwgOCk7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5jb2xvckxvY2F0aW9uLCA0LCBnbC5VTlNJR05FRF9CWVRFLCB0cnVlLCB0aGlzLmF0dHJpYnV0ZXMgKiBGbG9hdDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQsIDEyKTtcbiAgICB9O1xuICAgIHJldHVybiBBYnN0cmFjdE5vZGVQcm9ncmFtO1xufShwcm9ncmFtXzEuQWJzdHJhY3RQcm9ncmFtKSk7XG5leHBvcnRzLkFic3RyYWN0Tm9kZVByb2dyYW0gPSBBYnN0cmFjdE5vZGVQcm9ncmFtO1xuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gY29tYmluaW5nIHR3byBvciBtb3JlIHByb2dyYW1zIGludG8gYSBzaW5nbGUgY29tcG91bmQgb25lLlxuICogTm90ZSB0aGF0IHRoaXMgaXMgbW9yZSBhIHF1aWNrICYgZWFzeSB3YXkgdG8gY29tYmluZSBwcm9ncmFtIHRoYW4gYSByZWFsbHlcbiAqIHBlcmZvcm1hbnQgb3B0aW9uLiBNb3JlIHBlcmZvcm1hbnQgcHJvZ3JhbXMgY2FuIGJlIHdyaXR0ZW4gZW50aXJlbHkuXG4gKlxuICogQHBhcmFtICB7YXJyYXl9ICAgIHByb2dyYW1DbGFzc2VzIC0gUHJvZ3JhbSBjbGFzc2VzIHRvIGNvbWJpbmUuXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlTm9kZUNvbXBvdW5kUHJvZ3JhbShwcm9ncmFtQ2xhc3Nlcykge1xuICAgIHJldHVybiAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIE5vZGVDb21wb3VuZFByb2dyYW0oZ2wsIHJlbmRlcmVyKSB7XG4gICAgICAgICAgICB0aGlzLnByb2dyYW1zID0gcHJvZ3JhbUNsYXNzZXMubWFwKGZ1bmN0aW9uIChQcm9ncmFtQ2xhc3MpIHsgcmV0dXJuIG5ldyBQcm9ncmFtQ2xhc3MoZ2wsIHJlbmRlcmVyKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgTm9kZUNvbXBvdW5kUHJvZ3JhbS5wcm90b3R5cGUuYnVmZmVyRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbXMuZm9yRWFjaChmdW5jdGlvbiAocHJvZ3JhbSkgeyByZXR1cm4gcHJvZ3JhbS5idWZmZXJEYXRhKCk7IH0pO1xuICAgICAgICB9O1xuICAgICAgICBOb2RlQ29tcG91bmRQcm9ncmFtLnByb3RvdHlwZS5hbGxvY2F0ZSA9IGZ1bmN0aW9uIChjYXBhY2l0eSkge1xuICAgICAgICAgICAgdGhpcy5wcm9ncmFtcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9ncmFtKSB7IHJldHVybiBwcm9ncmFtLmFsbG9jYXRlKGNhcGFjaXR5KTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIE5vZGVDb21wb3VuZFByb2dyYW0ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBub3RoaW5nIHRvZG8sIGl0J3MgYWxyZWFkeSBkb25lIGluIGVhY2ggcHJvZ3JhbSBjb25zdHJ1Y3RvclxuICAgICAgICB9O1xuICAgICAgICBOb2RlQ29tcG91bmRQcm9ncmFtLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICB0aGlzLnByb2dyYW1zLmZvckVhY2goZnVuY3Rpb24gKHByb2dyYW0pIHtcbiAgICAgICAgICAgICAgICBwcm9ncmFtLmJpbmQoKTtcbiAgICAgICAgICAgICAgICBwcm9ncmFtLmJ1ZmZlckRhdGEoKTtcbiAgICAgICAgICAgICAgICBwcm9ncmFtLnJlbmRlcihwYXJhbXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIE5vZGVDb21wb3VuZFByb2dyYW0ucHJvdG90eXBlLnByb2Nlc3MgPSBmdW5jdGlvbiAoZGF0YSwgaGlkZGVuLCBvZmZzZXQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbXMuZm9yRWFjaChmdW5jdGlvbiAocHJvZ3JhbSkgeyByZXR1cm4gcHJvZ3JhbS5wcm9jZXNzKGRhdGEsIGhpZGRlbiwgb2Zmc2V0KTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBOb2RlQ29tcG91bmRQcm9ncmFtO1xuICAgIH0oKSk7XG59XG5leHBvcnRzLmNyZWF0ZU5vZGVDb21wb3VuZFByb2dyYW0gPSBjcmVhdGVOb2RlQ29tcG91bmRQcm9ncmFtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFic3RyYWN0UHJvZ3JhbSA9IHZvaWQgMDtcbi8qKlxuICogU2lnbWEuanMgV2ViR0wgUmVuZGVyZXIgUHJvZ3JhbVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBzaW5nbGUgV2ViR0wgcHJvZ3JhbSB1c2VkIGJ5IHNpZ21hJ3MgV2ViR0wgcmVuZGVyZXIuXG4gKiBAbW9kdWxlXG4gKi9cbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uLy4uL3NoYWRlcnMvdXRpbHNcIik7XG4vKipcbiAqIEFic3RyYWN0IFByb2dyYW0gY2xhc3MuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBBYnN0cmFjdFByb2dyYW0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQWJzdHJhY3RQcm9ncmFtKGdsLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBwb2ludHMsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgdGhpcy5hcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoKTtcbiAgICAgICAgdGhpcy5wb2ludHMgPSBwb2ludHM7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcbiAgICAgICAgdGhpcy52ZXJ0ZXhTaGFkZXJTb3VyY2UgPSB2ZXJ0ZXhTaGFkZXJTb3VyY2U7XG4gICAgICAgIHRoaXMuZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBmcmFnbWVudFNoYWRlclNvdXJjZTtcbiAgICAgICAgdmFyIGJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgICBpZiAoYnVmZmVyID09PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3RQcm9ncmFtOiBlcnJvciB3aGlsZSBjcmVhdGluZyB0aGUgYnVmZmVyXCIpO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMuYnVmZmVyKTtcbiAgICAgICAgdGhpcy52ZXJ0ZXhTaGFkZXIgPSAoMCwgdXRpbHNfMS5sb2FkVmVydGV4U2hhZGVyKShnbCwgdGhpcy52ZXJ0ZXhTaGFkZXJTb3VyY2UpO1xuICAgICAgICB0aGlzLmZyYWdtZW50U2hhZGVyID0gKDAsIHV0aWxzXzEubG9hZEZyYWdtZW50U2hhZGVyKShnbCwgdGhpcy5mcmFnbWVudFNoYWRlclNvdXJjZSk7XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9ICgwLCB1dGlsc18xLmxvYWRQcm9ncmFtKShnbCwgW3RoaXMudmVydGV4U2hhZGVyLCB0aGlzLmZyYWdtZW50U2hhZGVyXSk7XG4gICAgfVxuICAgIEFic3RyYWN0UHJvZ3JhbS5wcm90b3R5cGUuYnVmZmVyRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5nbDtcbiAgICAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIHRoaXMuYXJyYXksIGdsLkRZTkFNSUNfRFJBVyk7XG4gICAgfTtcbiAgICBBYnN0cmFjdFByb2dyYW0ucHJvdG90eXBlLmFsbG9jYXRlID0gZnVuY3Rpb24gKGNhcGFjaXR5KSB7XG4gICAgICAgIHRoaXMuYXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMucG9pbnRzICogdGhpcy5hdHRyaWJ1dGVzICogY2FwYWNpdHkpO1xuICAgIH07XG4gICAgQWJzdHJhY3RQcm9ncmFtLnByb3RvdHlwZS5oYXNOb3RoaW5nVG9SZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aCA9PT0gMDtcbiAgICB9O1xuICAgIHJldHVybiBBYnN0cmFjdFByb2dyYW07XG59KCkpO1xuZXhwb3J0cy5BYnN0cmFjdFByb2dyYW0gPSBBYnN0cmFjdFByb2dyYW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogU2lnbWEuanMgV2ViR0wgUmVuZGVyZXIgRWRnZSBBcnJvdyBQcm9ncmFtXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKlxuICogQ29tcG91bmQgcHJvZ3JhbSByZW5kZXJpbmcgZWRnZXMgYXMgYW4gYXJyb3cgZnJvbSB0aGUgc291cmNlIHRvIHRoZSB0YXJnZXQuXG4gKiBAbW9kdWxlXG4gKi9cbnZhciBlZGdlXzEgPSByZXF1aXJlKFwiLi9jb21tb24vZWRnZVwiKTtcbnZhciBlZGdlX2Fycm93SGVhZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2VkZ2UuYXJyb3dIZWFkXCIpKTtcbnZhciBlZGdlX2NsYW1wZWRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9lZGdlLmNsYW1wZWRcIikpO1xudmFyIEVkZ2VBcnJvd1Byb2dyYW0gPSAoMCwgZWRnZV8xLmNyZWF0ZUVkZ2VDb21wb3VuZFByb2dyYW0pKFtlZGdlX2NsYW1wZWRfMS5kZWZhdWx0LCBlZGdlX2Fycm93SGVhZF8xLmRlZmF1bHRdKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEVkZ2VBcnJvd1Byb2dyYW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi91dGlsc1wiKTtcbnZhciBlZGdlX2Fycm93SGVhZF92ZXJ0X2dsc2xfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhZGVycy9lZGdlLmFycm93SGVhZC52ZXJ0Lmdsc2wuanNcIikpO1xudmFyIGVkZ2VfYXJyb3dIZWFkX2ZyYWdfZ2xzbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFkZXJzL2VkZ2UuYXJyb3dIZWFkLmZyYWcuZ2xzbC5qc1wiKSk7XG52YXIgZWRnZV8xID0gcmVxdWlyZShcIi4vY29tbW9uL2VkZ2VcIik7XG52YXIgUE9JTlRTID0gMywgQVRUUklCVVRFUyA9IDksIFNUUklERSA9IFBPSU5UUyAqIEFUVFJJQlVURVM7XG52YXIgRWRnZUFycm93SGVhZFByb2dyYW0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEVkZ2VBcnJvd0hlYWRQcm9ncmFtLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEVkZ2VBcnJvd0hlYWRQcm9ncmFtKGdsKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGdsLCBlZGdlX2Fycm93SGVhZF92ZXJ0X2dsc2xfMS5kZWZhdWx0LCBlZGdlX2Fycm93SGVhZF9mcmFnX2dsc2xfMS5kZWZhdWx0LCBQT0lOVFMsIEFUVFJJQlVURVMpIHx8IHRoaXM7XG4gICAgICAgIC8vIExvY2F0aW9uc1xuICAgICAgICBfdGhpcy5wb3NpdGlvbkxvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oX3RoaXMucHJvZ3JhbSwgXCJhX3Bvc2l0aW9uXCIpO1xuICAgICAgICBfdGhpcy5jb2xvckxvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oX3RoaXMucHJvZ3JhbSwgXCJhX2NvbG9yXCIpO1xuICAgICAgICBfdGhpcy5ub3JtYWxMb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKF90aGlzLnByb2dyYW0sIFwiYV9ub3JtYWxcIik7XG4gICAgICAgIF90aGlzLnJhZGl1c0xvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oX3RoaXMucHJvZ3JhbSwgXCJhX3JhZGl1c1wiKTtcbiAgICAgICAgX3RoaXMuYmFyeWNlbnRyaWNMb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKF90aGlzLnByb2dyYW0sIFwiYV9iYXJ5Y2VudHJpY1wiKTtcbiAgICAgICAgLy8gVW5pZm9ybSBsb2NhdGlvbnNcbiAgICAgICAgdmFyIG1hdHJpeExvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKF90aGlzLnByb2dyYW0sIFwidV9tYXRyaXhcIik7XG4gICAgICAgIGlmIChtYXRyaXhMb2NhdGlvbiA9PT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVkZ2VBcnJvd0hlYWRQcm9ncmFtOiBlcnJvciB3aGlsZSBnZXR0aW5nIG1hdHJpeExvY2F0aW9uXCIpO1xuICAgICAgICBfdGhpcy5tYXRyaXhMb2NhdGlvbiA9IG1hdHJpeExvY2F0aW9uO1xuICAgICAgICB2YXIgc3FydFpvb21SYXRpb0xvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKF90aGlzLnByb2dyYW0sIFwidV9zcXJ0Wm9vbVJhdGlvXCIpO1xuICAgICAgICBpZiAoc3FydFpvb21SYXRpb0xvY2F0aW9uID09PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRWRnZUFycm93SGVhZFByb2dyYW06IGVycm9yIHdoaWxlIGdldHRpbmcgc3FydFpvb21SYXRpb0xvY2F0aW9uXCIpO1xuICAgICAgICBfdGhpcy5zcXJ0Wm9vbVJhdGlvTG9jYXRpb24gPSBzcXJ0Wm9vbVJhdGlvTG9jYXRpb247XG4gICAgICAgIHZhciBjb3JyZWN0aW9uUmF0aW9Mb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihfdGhpcy5wcm9ncmFtLCBcInVfY29ycmVjdGlvblJhdGlvXCIpO1xuICAgICAgICBpZiAoY29ycmVjdGlvblJhdGlvTG9jYXRpb24gPT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFZGdlQXJyb3dIZWFkUHJvZ3JhbTogZXJyb3Igd2hpbGUgZ2V0dGluZyBjb3JyZWN0aW9uUmF0aW9Mb2NhdGlvblwiKTtcbiAgICAgICAgX3RoaXMuY29ycmVjdGlvblJhdGlvTG9jYXRpb24gPSBjb3JyZWN0aW9uUmF0aW9Mb2NhdGlvbjtcbiAgICAgICAgX3RoaXMuYmluZCgpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEVkZ2VBcnJvd0hlYWRQcm9ncmFtLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuICAgICAgICAvLyBCaW5kaW5nc1xuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLnBvc2l0aW9uTG9jYXRpb24pO1xuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLm5vcm1hbExvY2F0aW9uKTtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5yYWRpdXNMb2NhdGlvbik7XG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuY29sb3JMb2NhdGlvbik7XG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuYmFyeWNlbnRyaWNMb2NhdGlvbik7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5wb3NpdGlvbkxvY2F0aW9uLCAyLCBnbC5GTE9BVCwgZmFsc2UsIEFUVFJJQlVURVMgKiBGbG9hdDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQsIDApO1xuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMubm9ybWFsTG9jYXRpb24sIDIsIGdsLkZMT0FULCBmYWxzZSwgQVRUUklCVVRFUyAqIEZsb2F0MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCwgOCk7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5yYWRpdXNMb2NhdGlvbiwgMSwgZ2wuRkxPQVQsIGZhbHNlLCBBVFRSSUJVVEVTICogRmxvYXQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULCAxNik7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5jb2xvckxvY2F0aW9uLCA0LCBnbC5VTlNJR05FRF9CWVRFLCB0cnVlLCBBVFRSSUJVVEVTICogRmxvYXQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULCAyMCk7XG4gICAgICAgIC8vIFRPRE86IG1heWJlIHdlIGNhbiBvcHRpbWl6ZSBoZXJlIGJ5IHBhY2tpbmcgdGhpcyBpbiBhIGJpdCBtYXNrXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5iYXJ5Y2VudHJpY0xvY2F0aW9uLCAzLCBnbC5GTE9BVCwgZmFsc2UsIEFUVFJJQlVURVMgKiBGbG9hdDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQsIDI0KTtcbiAgICB9O1xuICAgIEVkZ2VBcnJvd0hlYWRQcm9ncmFtLnByb3RvdHlwZS5jb21wdXRlSW5kaWNlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gbm90aGluZyB0byBkb1xuICAgIH07XG4gICAgRWRnZUFycm93SGVhZFByb2dyYW0ucHJvdG90eXBlLnByb2Nlc3MgPSBmdW5jdGlvbiAoc291cmNlRGF0YSwgdGFyZ2V0RGF0YSwgZGF0YSwgaGlkZGVuLCBvZmZzZXQpIHtcbiAgICAgICAgaWYgKGhpZGRlbikge1xuICAgICAgICAgICAgZm9yICh2YXIgaV8xID0gb2Zmc2V0ICogU1RSSURFLCBsID0gaV8xICsgU1RSSURFOyBpXzEgPCBsOyBpXzErKylcbiAgICAgICAgICAgICAgICB0aGlzLmFycmF5W2lfMV0gPSAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0aGlja25lc3MgPSBkYXRhLnNpemUgfHwgMSwgcmFkaXVzID0gdGFyZ2V0RGF0YS5zaXplIHx8IDEsIHgxID0gc291cmNlRGF0YS54LCB5MSA9IHNvdXJjZURhdGEueSwgeDIgPSB0YXJnZXREYXRhLngsIHkyID0gdGFyZ2V0RGF0YS55LCBjb2xvciA9ICgwLCB1dGlsc18xLmZsb2F0Q29sb3IpKGRhdGEuY29sb3IpO1xuICAgICAgICAvLyBDb21wdXRpbmcgbm9ybWFsc1xuICAgICAgICB2YXIgZHggPSB4MiAtIHgxLCBkeSA9IHkyIC0geTE7XG4gICAgICAgIHZhciBsZW4gPSBkeCAqIGR4ICsgZHkgKiBkeSwgbjEgPSAwLCBuMiA9IDA7XG4gICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgICAgICAgICAgIG4xID0gLWR5ICogbGVuICogdGhpY2tuZXNzO1xuICAgICAgICAgICAgbjIgPSBkeCAqIGxlbiAqIHRoaWNrbmVzcztcbiAgICAgICAgfVxuICAgICAgICB2YXIgaSA9IFBPSU5UUyAqIEFUVFJJQlVURVMgKiBvZmZzZXQ7XG4gICAgICAgIHZhciBhcnJheSA9IHRoaXMuYXJyYXk7XG4gICAgICAgIC8vIEZpcnN0IHBvaW50XG4gICAgICAgIGFycmF5W2krK10gPSB4MjtcbiAgICAgICAgYXJyYXlbaSsrXSA9IHkyO1xuICAgICAgICBhcnJheVtpKytdID0gLW4xO1xuICAgICAgICBhcnJheVtpKytdID0gLW4yO1xuICAgICAgICBhcnJheVtpKytdID0gcmFkaXVzO1xuICAgICAgICBhcnJheVtpKytdID0gY29sb3I7XG4gICAgICAgIGFycmF5W2krK10gPSAxO1xuICAgICAgICBhcnJheVtpKytdID0gMDtcbiAgICAgICAgYXJyYXlbaSsrXSA9IDA7XG4gICAgICAgIC8vIFNlY29uZCBwb2ludFxuICAgICAgICBhcnJheVtpKytdID0geDI7XG4gICAgICAgIGFycmF5W2krK10gPSB5MjtcbiAgICAgICAgYXJyYXlbaSsrXSA9IC1uMTtcbiAgICAgICAgYXJyYXlbaSsrXSA9IC1uMjtcbiAgICAgICAgYXJyYXlbaSsrXSA9IHJhZGl1cztcbiAgICAgICAgYXJyYXlbaSsrXSA9IGNvbG9yO1xuICAgICAgICBhcnJheVtpKytdID0gMDtcbiAgICAgICAgYXJyYXlbaSsrXSA9IDE7XG4gICAgICAgIGFycmF5W2krK10gPSAwO1xuICAgICAgICAvLyBUaGlyZCBwb2ludFxuICAgICAgICBhcnJheVtpKytdID0geDI7XG4gICAgICAgIGFycmF5W2krK10gPSB5MjtcbiAgICAgICAgYXJyYXlbaSsrXSA9IC1uMTtcbiAgICAgICAgYXJyYXlbaSsrXSA9IC1uMjtcbiAgICAgICAgYXJyYXlbaSsrXSA9IHJhZGl1cztcbiAgICAgICAgYXJyYXlbaSsrXSA9IGNvbG9yO1xuICAgICAgICBhcnJheVtpKytdID0gMDtcbiAgICAgICAgYXJyYXlbaSsrXSA9IDA7XG4gICAgICAgIGFycmF5W2ldID0gMTtcbiAgICB9O1xuICAgIEVkZ2VBcnJvd0hlYWRQcm9ncmFtLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc05vdGhpbmdUb1JlbmRlcigpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMucHJvZ3JhbTtcbiAgICAgICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICAgICAgLy8gQmluZGluZyB1bmlmb3Jtc1xuICAgICAgICBnbC51bmlmb3JtTWF0cml4M2Z2KHRoaXMubWF0cml4TG9jYXRpb24sIGZhbHNlLCBwYXJhbXMubWF0cml4KTtcbiAgICAgICAgZ2wudW5pZm9ybTFmKHRoaXMuc3FydFpvb21SYXRpb0xvY2F0aW9uLCBNYXRoLnNxcnQocGFyYW1zLnJhdGlvKSk7XG4gICAgICAgIGdsLnVuaWZvcm0xZih0aGlzLmNvcnJlY3Rpb25SYXRpb0xvY2F0aW9uLCBwYXJhbXMuY29ycmVjdGlvblJhdGlvKTtcbiAgICAgICAgLy8gRHJhd2luZzpcbiAgICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRVMsIDAsIHRoaXMuYXJyYXkubGVuZ3RoIC8gQVRUUklCVVRFUyk7XG4gICAgfTtcbiAgICByZXR1cm4gRWRnZUFycm93SGVhZFByb2dyYW07XG59KGVkZ2VfMS5BYnN0cmFjdEVkZ2VQcm9ncmFtKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBFZGdlQXJyb3dIZWFkUHJvZ3JhbTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBlZGdlXzEgPSByZXF1aXJlKFwiLi9jb21tb24vZWRnZVwiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzXCIpO1xudmFyIGVkZ2VfY2xhbXBlZF92ZXJ0X2dsc2xfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhZGVycy9lZGdlLmNsYW1wZWQudmVydC5nbHNsLmpzXCIpKTtcbnZhciBlZGdlX2ZyYWdfZ2xzbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFkZXJzL2VkZ2UuZnJhZy5nbHNsLmpzXCIpKTtcbnZhciBQT0lOVFMgPSA0LCBBVFRSSUJVVEVTID0gNiwgU1RSSURFID0gUE9JTlRTICogQVRUUklCVVRFUztcbnZhciBFZGdlQ2xhbXBlZFByb2dyYW0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEVkZ2VDbGFtcGVkUHJvZ3JhbSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBFZGdlQ2xhbXBlZFByb2dyYW0oZ2wpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZ2wsIGVkZ2VfY2xhbXBlZF92ZXJ0X2dsc2xfMS5kZWZhdWx0LCBlZGdlX2ZyYWdfZ2xzbF8xLmRlZmF1bHQsIFBPSU5UUywgQVRUUklCVVRFUykgfHwgdGhpcztcbiAgICAgICAgLy8gSW5pdGlhbGl6aW5nIGluZGljZXMgYnVmZmVyXG4gICAgICAgIHZhciBpbmRpY2VzQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgICAgIGlmIChpbmRpY2VzQnVmZmVyID09PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRWRnZUNsYW1wZWRQcm9ncmFtOiBlcnJvciB3aGlsZSBnZXR0aW5nIHJlc29sdXRpb25Mb2NhdGlvblwiKTtcbiAgICAgICAgX3RoaXMuaW5kaWNlc0J1ZmZlciA9IGluZGljZXNCdWZmZXI7XG4gICAgICAgIC8vIExvY2F0aW9uczpcbiAgICAgICAgX3RoaXMucG9zaXRpb25Mb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKF90aGlzLnByb2dyYW0sIFwiYV9wb3NpdGlvblwiKTtcbiAgICAgICAgX3RoaXMuY29sb3JMb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKF90aGlzLnByb2dyYW0sIFwiYV9jb2xvclwiKTtcbiAgICAgICAgX3RoaXMubm9ybWFsTG9jYXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihfdGhpcy5wcm9ncmFtLCBcImFfbm9ybWFsXCIpO1xuICAgICAgICBfdGhpcy5yYWRpdXNMb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKF90aGlzLnByb2dyYW0sIFwiYV9yYWRpdXNcIik7XG4gICAgICAgIC8vIFVuaWZvcm0gbG9jYXRpb25zXG4gICAgICAgIHZhciBtYXRyaXhMb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihfdGhpcy5wcm9ncmFtLCBcInVfbWF0cml4XCIpO1xuICAgICAgICBpZiAobWF0cml4TG9jYXRpb24gPT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFZGdlQ2xhbXBlZFByb2dyYW06IGVycm9yIHdoaWxlIGdldHRpbmcgbWF0cml4TG9jYXRpb25cIik7XG4gICAgICAgIF90aGlzLm1hdHJpeExvY2F0aW9uID0gbWF0cml4TG9jYXRpb247XG4gICAgICAgIHZhciBzcXJ0Wm9vbVJhdGlvTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oX3RoaXMucHJvZ3JhbSwgXCJ1X3NxcnRab29tUmF0aW9cIik7XG4gICAgICAgIGlmIChzcXJ0Wm9vbVJhdGlvTG9jYXRpb24gPT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFZGdlQ2xhbXBlZFByb2dyYW06IGVycm9yIHdoaWxlIGdldHRpbmcgY2FtZXJhUmF0aW9Mb2NhdGlvblwiKTtcbiAgICAgICAgX3RoaXMuc3FydFpvb21SYXRpb0xvY2F0aW9uID0gc3FydFpvb21SYXRpb0xvY2F0aW9uO1xuICAgICAgICB2YXIgY29ycmVjdGlvblJhdGlvTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oX3RoaXMucHJvZ3JhbSwgXCJ1X2NvcnJlY3Rpb25SYXRpb1wiKTtcbiAgICAgICAgaWYgKGNvcnJlY3Rpb25SYXRpb0xvY2F0aW9uID09PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRWRnZUNsYW1wZWRQcm9ncmFtOiBlcnJvciB3aGlsZSBnZXR0aW5nIHZpZXdwb3J0UmF0aW9Mb2NhdGlvblwiKTtcbiAgICAgICAgX3RoaXMuY29ycmVjdGlvblJhdGlvTG9jYXRpb24gPSBjb3JyZWN0aW9uUmF0aW9Mb2NhdGlvbjtcbiAgICAgICAgLy8gRW5hYmxpbmcgdGhlIE9FU19lbGVtZW50X2luZGV4X3VpbnQgZXh0ZW5zaW9uXG4gICAgICAgIC8vIE5PVEU6IG9uIG9sZGVyIEdQVXMsIHRoaXMgbWVhbnMgdGhhdCByZWFsbHkgbGFyZ2UgZ3JhcGhzIHdvbid0XG4gICAgICAgIC8vIGhhdmUgYWxsIHRoZWlyIGVkZ2VzIHJlbmRlcmVkLiBCdXQgaXQgc2VlbXMgdGhhdCB0aGVcbiAgICAgICAgLy8gYE9FU19lbGVtZW50X2luZGV4X3VpbnRgIGlzIHF1aXRlIGV2ZXJ5d2hlcmUgc28gd2UnbGwgaGFuZGxlXG4gICAgICAgIC8vIHRoZSBwb3RlbnRpYWwgaXNzdWUgaWYgaXQgcmVhbGx5IGFyaXNlcy5cbiAgICAgICAgLy8gTk9URTogd2hlbiB1c2luZyB3ZWJnbDIsIHRoZSBleHRlbnNpb24gaXMgZW5hYmxlZCBieSBkZWZhdWx0XG4gICAgICAgIF90aGlzLmNhblVzZTMyQml0c0luZGljZXMgPSAoMCwgdXRpbHNfMS5jYW5Vc2UzMkJpdHNJbmRpY2VzKShnbCk7XG4gICAgICAgIF90aGlzLkluZGljZXNBcnJheSA9IF90aGlzLmNhblVzZTMyQml0c0luZGljZXMgPyBVaW50MzJBcnJheSA6IFVpbnQxNkFycmF5O1xuICAgICAgICBfdGhpcy5pbmRpY2VzQXJyYXkgPSBuZXcgX3RoaXMuSW5kaWNlc0FycmF5KCk7XG4gICAgICAgIF90aGlzLmluZGljZXNUeXBlID0gX3RoaXMuY2FuVXNlMzJCaXRzSW5kaWNlcyA/IGdsLlVOU0lHTkVEX0lOVCA6IGdsLlVOU0lHTkVEX1NIT1JUO1xuICAgICAgICBfdGhpcy5iaW5kKCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgRWRnZUNsYW1wZWRQcm9ncmFtLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmluZGljZXNCdWZmZXIpO1xuICAgICAgICAvLyBCaW5kaW5nc1xuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLnBvc2l0aW9uTG9jYXRpb24pO1xuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLm5vcm1hbExvY2F0aW9uKTtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5jb2xvckxvY2F0aW9uKTtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5yYWRpdXNMb2NhdGlvbik7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5wb3NpdGlvbkxvY2F0aW9uLCAyLCBnbC5GTE9BVCwgZmFsc2UsIEFUVFJJQlVURVMgKiBGbG9hdDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQsIDApO1xuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMubm9ybWFsTG9jYXRpb24sIDIsIGdsLkZMT0FULCBmYWxzZSwgQVRUUklCVVRFUyAqIEZsb2F0MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCwgOCk7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5jb2xvckxvY2F0aW9uLCA0LCBnbC5VTlNJR05FRF9CWVRFLCB0cnVlLCBBVFRSSUJVVEVTICogRmxvYXQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULCAxNik7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5yYWRpdXNMb2NhdGlvbiwgMSwgZ2wuRkxPQVQsIGZhbHNlLCBBVFRSSUJVVEVTICogRmxvYXQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULCAyMCk7XG4gICAgfTtcbiAgICBFZGdlQ2xhbXBlZFByb2dyYW0ucHJvdG90eXBlLnByb2Nlc3MgPSBmdW5jdGlvbiAoc291cmNlRGF0YSwgdGFyZ2V0RGF0YSwgZGF0YSwgaGlkZGVuLCBvZmZzZXQpIHtcbiAgICAgICAgaWYgKGhpZGRlbikge1xuICAgICAgICAgICAgZm9yICh2YXIgaV8xID0gb2Zmc2V0ICogU1RSSURFLCBsID0gaV8xICsgU1RSSURFOyBpXzEgPCBsOyBpXzErKylcbiAgICAgICAgICAgICAgICB0aGlzLmFycmF5W2lfMV0gPSAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0aGlja25lc3MgPSBkYXRhLnNpemUgfHwgMSwgeDEgPSBzb3VyY2VEYXRhLngsIHkxID0gc291cmNlRGF0YS55LCB4MiA9IHRhcmdldERhdGEueCwgeTIgPSB0YXJnZXREYXRhLnksIHJhZGl1cyA9IHRhcmdldERhdGEuc2l6ZSB8fCAxLCBjb2xvciA9ICgwLCB1dGlsc18xLmZsb2F0Q29sb3IpKGRhdGEuY29sb3IpO1xuICAgICAgICAvLyBDb21wdXRpbmcgbm9ybWFsc1xuICAgICAgICB2YXIgZHggPSB4MiAtIHgxLCBkeSA9IHkyIC0geTE7XG4gICAgICAgIHZhciBsZW4gPSBkeCAqIGR4ICsgZHkgKiBkeSwgbjEgPSAwLCBuMiA9IDA7XG4gICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgICAgICAgICAgIG4xID0gLWR5ICogbGVuICogdGhpY2tuZXNzO1xuICAgICAgICAgICAgbjIgPSBkeCAqIGxlbiAqIHRoaWNrbmVzcztcbiAgICAgICAgfVxuICAgICAgICB2YXIgaSA9IFBPSU5UUyAqIEFUVFJJQlVURVMgKiBvZmZzZXQ7XG4gICAgICAgIHZhciBhcnJheSA9IHRoaXMuYXJyYXk7XG4gICAgICAgIC8vIEZpcnN0IHBvaW50XG4gICAgICAgIGFycmF5W2krK10gPSB4MTtcbiAgICAgICAgYXJyYXlbaSsrXSA9IHkxO1xuICAgICAgICBhcnJheVtpKytdID0gbjE7XG4gICAgICAgIGFycmF5W2krK10gPSBuMjtcbiAgICAgICAgYXJyYXlbaSsrXSA9IGNvbG9yO1xuICAgICAgICBhcnJheVtpKytdID0gMDtcbiAgICAgICAgLy8gRmlyc3QgcG9pbnQgZmxpcHBlZFxuICAgICAgICBhcnJheVtpKytdID0geDE7XG4gICAgICAgIGFycmF5W2krK10gPSB5MTtcbiAgICAgICAgYXJyYXlbaSsrXSA9IC1uMTtcbiAgICAgICAgYXJyYXlbaSsrXSA9IC1uMjtcbiAgICAgICAgYXJyYXlbaSsrXSA9IGNvbG9yO1xuICAgICAgICBhcnJheVtpKytdID0gMDtcbiAgICAgICAgLy8gU2Vjb25kIHBvaW50XG4gICAgICAgIGFycmF5W2krK10gPSB4MjtcbiAgICAgICAgYXJyYXlbaSsrXSA9IHkyO1xuICAgICAgICBhcnJheVtpKytdID0gbjE7XG4gICAgICAgIGFycmF5W2krK10gPSBuMjtcbiAgICAgICAgYXJyYXlbaSsrXSA9IGNvbG9yO1xuICAgICAgICBhcnJheVtpKytdID0gcmFkaXVzO1xuICAgICAgICAvLyBTZWNvbmQgcG9pbnQgZmxpcHBlZFxuICAgICAgICBhcnJheVtpKytdID0geDI7XG4gICAgICAgIGFycmF5W2krK10gPSB5MjtcbiAgICAgICAgYXJyYXlbaSsrXSA9IC1uMTtcbiAgICAgICAgYXJyYXlbaSsrXSA9IC1uMjtcbiAgICAgICAgYXJyYXlbaSsrXSA9IGNvbG9yO1xuICAgICAgICBhcnJheVtpXSA9IC1yYWRpdXM7XG4gICAgfTtcbiAgICBFZGdlQ2xhbXBlZFByb2dyYW0ucHJvdG90eXBlLmNvbXB1dGVJbmRpY2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbCA9IHRoaXMuYXJyYXkubGVuZ3RoIC8gQVRUUklCVVRFUztcbiAgICAgICAgdmFyIHNpemUgPSBsICsgbCAvIDI7XG4gICAgICAgIHZhciBpbmRpY2VzID0gbmV3IHRoaXMuSW5kaWNlc0FycmF5KHNpemUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgYyA9IDA7IGkgPCBsOyBpICs9IDQpIHtcbiAgICAgICAgICAgIGluZGljZXNbYysrXSA9IGk7XG4gICAgICAgICAgICBpbmRpY2VzW2MrK10gPSBpICsgMTtcbiAgICAgICAgICAgIGluZGljZXNbYysrXSA9IGkgKyAyO1xuICAgICAgICAgICAgaW5kaWNlc1tjKytdID0gaSArIDI7XG4gICAgICAgICAgICBpbmRpY2VzW2MrK10gPSBpICsgMTtcbiAgICAgICAgICAgIGluZGljZXNbYysrXSA9IGkgKyAzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5kaWNlc0FycmF5ID0gaW5kaWNlcztcbiAgICB9O1xuICAgIEVkZ2VDbGFtcGVkUHJvZ3JhbS5wcm90b3R5cGUuYnVmZmVyRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5idWZmZXJEYXRhLmNhbGwodGhpcyk7XG4gICAgICAgIC8vIEluZGljZXMgZGF0YVxuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmluZGljZXNBcnJheSwgZ2wuU1RBVElDX0RSQVcpO1xuICAgIH07XG4gICAgRWRnZUNsYW1wZWRQcm9ncmFtLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc05vdGhpbmdUb1JlbmRlcigpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMucHJvZ3JhbTtcbiAgICAgICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICAgICAgLy8gQmluZGluZyB1bmlmb3Jtc1xuICAgICAgICBnbC51bmlmb3JtTWF0cml4M2Z2KHRoaXMubWF0cml4TG9jYXRpb24sIGZhbHNlLCBwYXJhbXMubWF0cml4KTtcbiAgICAgICAgZ2wudW5pZm9ybTFmKHRoaXMuc3FydFpvb21SYXRpb0xvY2F0aW9uLCBNYXRoLnNxcnQocGFyYW1zLnJhdGlvKSk7XG4gICAgICAgIGdsLnVuaWZvcm0xZih0aGlzLmNvcnJlY3Rpb25SYXRpb0xvY2F0aW9uLCBwYXJhbXMuY29ycmVjdGlvblJhdGlvKTtcbiAgICAgICAgLy8gRHJhd2luZzpcbiAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFUywgdGhpcy5pbmRpY2VzQXJyYXkubGVuZ3RoLCB0aGlzLmluZGljZXNUeXBlLCAwKTtcbiAgICB9O1xuICAgIHJldHVybiBFZGdlQ2xhbXBlZFByb2dyYW07XG59KGVkZ2VfMS5BYnN0cmFjdEVkZ2VQcm9ncmFtKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBFZGdlQ2xhbXBlZFByb2dyYW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFNpZ21hLmpzIFdlYkdMIFJlbmRlcmVyIEVkZ2UgUHJvZ3JhbVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICpcbiAqIFByb2dyYW0gcmVuZGVyaW5nIGVkZ2VzIGFzIHRoaWNrIGxpbmVzIHVzaW5nIGZvdXIgcG9pbnRzIHRyYW5zbGF0ZWRcbiAqIG9ydGhvZ29uYWxseSBmcm9tIHRoZSBzb3VyY2UgJiB0YXJnZXQncyBjZW50ZXJzIGJ5IGhhbGYgdGhpY2tuZXNzLlxuICpcbiAqIFJlbmRlcmluZyB0d28gdHJpYW5nbGVzIGJ5IHVzaW5nIG9ubHkgZm91ciBwb2ludHMgaXMgbWFkZSBwb3NzaWJsZSB0aHJvdWdoXG4gKiB0aGUgdXNlIG9mIGluZGljZXMuXG4gKlxuICogVGhpcyBtZXRob2Qgc2hvdWxkIGJlIGZhc3RlciB0aGFuIHRoZSA2IHBvaW50cyAvIDIgdHJpYW5nbGVzIGFwcHJvYWNoIGFuZFxuICogc2hvdWxkIGhhbmRsZSB0aGlja25lc3MgYmV0dGVyIHRoYW4gd2l0aCBnbC5MSU5FUy5cbiAqXG4gKiBUaGlzIHZlcnNpb24gb2YgdGhlIHNoYWRlciBiYWxhbmNlcyBnZW9tZXRyeSBjb21wdXRhdGlvbiBldmVubHkgYmV0d2VlblxuICogdGhlIENQVSAmIEdQVSAobm9ybWFscyBhcmUgY29tcHV0ZWQgb24gdGhlIENQVSBzaWRlKS5cbiAqIEBtb2R1bGVcbiAqL1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXRpbHNcIik7XG52YXIgZWRnZV92ZXJ0X2dsc2xfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhZGVycy9lZGdlLnZlcnQuZ2xzbC5qc1wiKSk7XG52YXIgZWRnZV9mcmFnX2dsc2xfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhZGVycy9lZGdlLmZyYWcuZ2xzbC5qc1wiKSk7XG52YXIgZWRnZV8xID0gcmVxdWlyZShcIi4vY29tbW9uL2VkZ2VcIik7XG52YXIgUE9JTlRTID0gNCwgQVRUUklCVVRFUyA9IDUsIFNUUklERSA9IFBPSU5UUyAqIEFUVFJJQlVURVM7XG52YXIgRWRnZVByb2dyYW0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEVkZ2VQcm9ncmFtLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEVkZ2VQcm9ncmFtKGdsKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGdsLCBlZGdlX3ZlcnRfZ2xzbF8xLmRlZmF1bHQsIGVkZ2VfZnJhZ19nbHNsXzEuZGVmYXVsdCwgUE9JTlRTLCBBVFRSSUJVVEVTKSB8fCB0aGlzO1xuICAgICAgICAvLyBJbml0aWFsaXppbmcgaW5kaWNlcyBidWZmZXJcbiAgICAgICAgdmFyIGluZGljZXNCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICAgICAgaWYgKGluZGljZXNCdWZmZXIgPT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFZGdlUHJvZ3JhbTogZXJyb3Igd2hpbGUgY3JlYXRpbmcgaW5kaWNlc0J1ZmZlclwiKTtcbiAgICAgICAgX3RoaXMuaW5kaWNlc0J1ZmZlciA9IGluZGljZXNCdWZmZXI7XG4gICAgICAgIC8vIExvY2F0aW9uc1xuICAgICAgICBfdGhpcy5wb3NpdGlvbkxvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oX3RoaXMucHJvZ3JhbSwgXCJhX3Bvc2l0aW9uXCIpO1xuICAgICAgICBfdGhpcy5jb2xvckxvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oX3RoaXMucHJvZ3JhbSwgXCJhX2NvbG9yXCIpO1xuICAgICAgICBfdGhpcy5ub3JtYWxMb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKF90aGlzLnByb2dyYW0sIFwiYV9ub3JtYWxcIik7XG4gICAgICAgIHZhciBtYXRyaXhMb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihfdGhpcy5wcm9ncmFtLCBcInVfbWF0cml4XCIpO1xuICAgICAgICBpZiAobWF0cml4TG9jYXRpb24gPT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFZGdlUHJvZ3JhbTogZXJyb3Igd2hpbGUgZ2V0dGluZyBtYXRyaXhMb2NhdGlvblwiKTtcbiAgICAgICAgX3RoaXMubWF0cml4TG9jYXRpb24gPSBtYXRyaXhMb2NhdGlvbjtcbiAgICAgICAgdmFyIGNvcnJlY3Rpb25SYXRpb0xvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKF90aGlzLnByb2dyYW0sIFwidV9jb3JyZWN0aW9uUmF0aW9cIik7XG4gICAgICAgIGlmIChjb3JyZWN0aW9uUmF0aW9Mb2NhdGlvbiA9PT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVkZ2VQcm9ncmFtOiBlcnJvciB3aGlsZSBnZXR0aW5nIGNvcnJlY3Rpb25SYXRpb0xvY2F0aW9uXCIpO1xuICAgICAgICBfdGhpcy5jb3JyZWN0aW9uUmF0aW9Mb2NhdGlvbiA9IGNvcnJlY3Rpb25SYXRpb0xvY2F0aW9uO1xuICAgICAgICB2YXIgc3FydFpvb21SYXRpb0xvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKF90aGlzLnByb2dyYW0sIFwidV9zcXJ0Wm9vbVJhdGlvXCIpO1xuICAgICAgICBpZiAoc3FydFpvb21SYXRpb0xvY2F0aW9uID09PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRWRnZVByb2dyYW06IGVycm9yIHdoaWxlIGdldHRpbmcgc3FydFpvb21SYXRpb0xvY2F0aW9uXCIpO1xuICAgICAgICBfdGhpcy5zcXJ0Wm9vbVJhdGlvTG9jYXRpb24gPSBzcXJ0Wm9vbVJhdGlvTG9jYXRpb247XG4gICAgICAgIC8vIEVuYWJsaW5nIHRoZSBPRVNfZWxlbWVudF9pbmRleF91aW50IGV4dGVuc2lvblxuICAgICAgICAvLyBOT1RFOiBvbiBvbGRlciBHUFVzLCB0aGlzIG1lYW5zIHRoYXQgcmVhbGx5IGxhcmdlIGdyYXBocyB3b24ndFxuICAgICAgICAvLyBoYXZlIGFsbCB0aGVpciBlZGdlcyByZW5kZXJlZC4gQnV0IGl0IHNlZW1zIHRoYXQgdGhlXG4gICAgICAgIC8vIGBPRVNfZWxlbWVudF9pbmRleF91aW50YCBpcyBxdWl0ZSBldmVyeXdoZXJlIHNvIHdlJ2xsIGhhbmRsZVxuICAgICAgICAvLyB0aGUgcG90ZW50aWFsIGlzc3VlIGlmIGl0IHJlYWxseSBhcmlzZXMuXG4gICAgICAgIC8vIE5PVEU6IHdoZW4gdXNpbmcgd2ViZ2wyLCB0aGUgZXh0ZW5zaW9uIGlzIGVuYWJsZWQgYnkgZGVmYXVsdFxuICAgICAgICBfdGhpcy5jYW5Vc2UzMkJpdHNJbmRpY2VzID0gKDAsIHV0aWxzXzEuY2FuVXNlMzJCaXRzSW5kaWNlcykoZ2wpO1xuICAgICAgICBfdGhpcy5JbmRpY2VzQXJyYXkgPSBfdGhpcy5jYW5Vc2UzMkJpdHNJbmRpY2VzID8gVWludDMyQXJyYXkgOiBVaW50MTZBcnJheTtcbiAgICAgICAgX3RoaXMuaW5kaWNlc0FycmF5ID0gbmV3IF90aGlzLkluZGljZXNBcnJheSgpO1xuICAgICAgICBfdGhpcy5pbmRpY2VzVHlwZSA9IF90aGlzLmNhblVzZTMyQml0c0luZGljZXMgPyBnbC5VTlNJR05FRF9JTlQgOiBnbC5VTlNJR05FRF9TSE9SVDtcbiAgICAgICAgX3RoaXMuYmluZCgpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEVkZ2VQcm9ncmFtLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmluZGljZXNCdWZmZXIpO1xuICAgICAgICAvLyBCaW5kaW5nc1xuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLnBvc2l0aW9uTG9jYXRpb24pO1xuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLm5vcm1hbExvY2F0aW9uKTtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5jb2xvckxvY2F0aW9uKTtcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLnBvc2l0aW9uTG9jYXRpb24sIDIsIGdsLkZMT0FULCBmYWxzZSwgQVRUUklCVVRFUyAqIEZsb2F0MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCwgMCk7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5ub3JtYWxMb2NhdGlvbiwgMiwgZ2wuRkxPQVQsIGZhbHNlLCBBVFRSSUJVVEVTICogRmxvYXQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULCA4KTtcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLmNvbG9yTG9jYXRpb24sIDQsIGdsLlVOU0lHTkVEX0JZVEUsIHRydWUsIEFUVFJJQlVURVMgKiBGbG9hdDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQsIDE2KTtcbiAgICB9O1xuICAgIEVkZ2VQcm9ncmFtLnByb3RvdHlwZS5jb21wdXRlSW5kaWNlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGwgPSB0aGlzLmFycmF5Lmxlbmd0aCAvIEFUVFJJQlVURVM7XG4gICAgICAgIHZhciBzaXplID0gbCArIGwgLyAyO1xuICAgICAgICB2YXIgaW5kaWNlcyA9IG5ldyB0aGlzLkluZGljZXNBcnJheShzaXplKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGMgPSAwOyBpIDwgbDsgaSArPSA0KSB7XG4gICAgICAgICAgICBpbmRpY2VzW2MrK10gPSBpO1xuICAgICAgICAgICAgaW5kaWNlc1tjKytdID0gaSArIDE7XG4gICAgICAgICAgICBpbmRpY2VzW2MrK10gPSBpICsgMjtcbiAgICAgICAgICAgIGluZGljZXNbYysrXSA9IGkgKyAyO1xuICAgICAgICAgICAgaW5kaWNlc1tjKytdID0gaSArIDE7XG4gICAgICAgICAgICBpbmRpY2VzW2MrK10gPSBpICsgMztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluZGljZXNBcnJheSA9IGluZGljZXM7XG4gICAgfTtcbiAgICBFZGdlUHJvZ3JhbS5wcm90b3R5cGUuYnVmZmVyRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5idWZmZXJEYXRhLmNhbGwodGhpcyk7XG4gICAgICAgIC8vIEluZGljZXMgZGF0YVxuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmluZGljZXNBcnJheSwgZ2wuU1RBVElDX0RSQVcpO1xuICAgIH07XG4gICAgRWRnZVByb2dyYW0ucHJvdG90eXBlLnByb2Nlc3MgPSBmdW5jdGlvbiAoc291cmNlRGF0YSwgdGFyZ2V0RGF0YSwgZGF0YSwgaGlkZGVuLCBvZmZzZXQpIHtcbiAgICAgICAgaWYgKGhpZGRlbikge1xuICAgICAgICAgICAgZm9yICh2YXIgaV8xID0gb2Zmc2V0ICogU1RSSURFLCBsID0gaV8xICsgU1RSSURFOyBpXzEgPCBsOyBpXzErKylcbiAgICAgICAgICAgICAgICB0aGlzLmFycmF5W2lfMV0gPSAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0aGlja25lc3MgPSBkYXRhLnNpemUgfHwgMSwgeDEgPSBzb3VyY2VEYXRhLngsIHkxID0gc291cmNlRGF0YS55LCB4MiA9IHRhcmdldERhdGEueCwgeTIgPSB0YXJnZXREYXRhLnksIGNvbG9yID0gKDAsIHV0aWxzXzEuZmxvYXRDb2xvcikoZGF0YS5jb2xvcik7XG4gICAgICAgIC8vIENvbXB1dGluZyBub3JtYWxzXG4gICAgICAgIHZhciBkeCA9IHgyIC0geDEsIGR5ID0geTIgLSB5MTtcbiAgICAgICAgdmFyIGxlbiA9IGR4ICogZHggKyBkeSAqIGR5LCBuMSA9IDAsIG4yID0gMDtcbiAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pO1xuICAgICAgICAgICAgbjEgPSAtZHkgKiBsZW4gKiB0aGlja25lc3M7XG4gICAgICAgICAgICBuMiA9IGR4ICogbGVuICogdGhpY2tuZXNzO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gUE9JTlRTICogQVRUUklCVVRFUyAqIG9mZnNldDtcbiAgICAgICAgdmFyIGFycmF5ID0gdGhpcy5hcnJheTtcbiAgICAgICAgLy8gRmlyc3QgcG9pbnRcbiAgICAgICAgYXJyYXlbaSsrXSA9IHgxO1xuICAgICAgICBhcnJheVtpKytdID0geTE7XG4gICAgICAgIGFycmF5W2krK10gPSBuMTtcbiAgICAgICAgYXJyYXlbaSsrXSA9IG4yO1xuICAgICAgICBhcnJheVtpKytdID0gY29sb3I7XG4gICAgICAgIC8vIEZpcnN0IHBvaW50IGZsaXBwZWRcbiAgICAgICAgYXJyYXlbaSsrXSA9IHgxO1xuICAgICAgICBhcnJheVtpKytdID0geTE7XG4gICAgICAgIGFycmF5W2krK10gPSAtbjE7XG4gICAgICAgIGFycmF5W2krK10gPSAtbjI7XG4gICAgICAgIGFycmF5W2krK10gPSBjb2xvcjtcbiAgICAgICAgLy8gU2Vjb25kIHBvaW50XG4gICAgICAgIGFycmF5W2krK10gPSB4MjtcbiAgICAgICAgYXJyYXlbaSsrXSA9IHkyO1xuICAgICAgICBhcnJheVtpKytdID0gbjE7XG4gICAgICAgIGFycmF5W2krK10gPSBuMjtcbiAgICAgICAgYXJyYXlbaSsrXSA9IGNvbG9yO1xuICAgICAgICAvLyBTZWNvbmQgcG9pbnQgZmxpcHBlZFxuICAgICAgICBhcnJheVtpKytdID0geDI7XG4gICAgICAgIGFycmF5W2krK10gPSB5MjtcbiAgICAgICAgYXJyYXlbaSsrXSA9IC1uMTtcbiAgICAgICAgYXJyYXlbaSsrXSA9IC1uMjtcbiAgICAgICAgYXJyYXlbaV0gPSBjb2xvcjtcbiAgICB9O1xuICAgIEVkZ2VQcm9ncmFtLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc05vdGhpbmdUb1JlbmRlcigpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMucHJvZ3JhbTtcbiAgICAgICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDNmdih0aGlzLm1hdHJpeExvY2F0aW9uLCBmYWxzZSwgcGFyYW1zLm1hdHJpeCk7XG4gICAgICAgIGdsLnVuaWZvcm0xZih0aGlzLnNxcnRab29tUmF0aW9Mb2NhdGlvbiwgTWF0aC5zcXJ0KHBhcmFtcy5yYXRpbykpO1xuICAgICAgICBnbC51bmlmb3JtMWYodGhpcy5jb3JyZWN0aW9uUmF0aW9Mb2NhdGlvbiwgcGFyYW1zLmNvcnJlY3Rpb25SYXRpbyk7XG4gICAgICAgIC8vIERyYXdpbmc6XG4gICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIHRoaXMuaW5kaWNlc0FycmF5Lmxlbmd0aCwgdGhpcy5pbmRpY2VzVHlwZSwgMCk7XG4gICAgfTtcbiAgICByZXR1cm4gRWRnZVByb2dyYW07XG59KGVkZ2VfMS5BYnN0cmFjdEVkZ2VQcm9ncmFtKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBFZGdlUHJvZ3JhbTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzXCIpO1xudmFyIG5vZGVfZmFzdF92ZXJ0X2dsc2xfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhZGVycy9ub2RlLmZhc3QudmVydC5nbHNsLmpzXCIpKTtcbnZhciBub2RlX2Zhc3RfZnJhZ19nbHNsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3NoYWRlcnMvbm9kZS5mYXN0LmZyYWcuZ2xzbC5qc1wiKSk7XG52YXIgbm9kZV8xID0gcmVxdWlyZShcIi4vY29tbW9uL25vZGVcIik7XG52YXIgUE9JTlRTID0gMSwgQVRUUklCVVRFUyA9IDQ7XG52YXIgTm9kZUZhc3RQcm9ncmFtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhOb2RlRmFzdFByb2dyYW0sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTm9kZUZhc3RQcm9ncmFtKGdsKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGdsLCBub2RlX2Zhc3RfdmVydF9nbHNsXzEuZGVmYXVsdCwgbm9kZV9mYXN0X2ZyYWdfZ2xzbF8xLmRlZmF1bHQsIFBPSU5UUywgQVRUUklCVVRFUykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuYmluZCgpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE5vZGVGYXN0UHJvZ3JhbS5wcm90b3R5cGUucHJvY2VzcyA9IGZ1bmN0aW9uIChkYXRhLCBoaWRkZW4sIG9mZnNldCkge1xuICAgICAgICB2YXIgYXJyYXkgPSB0aGlzLmFycmF5O1xuICAgICAgICB2YXIgaSA9IG9mZnNldCAqIFBPSU5UUyAqIEFUVFJJQlVURVM7XG4gICAgICAgIGlmIChoaWRkZW4pIHtcbiAgICAgICAgICAgIGFycmF5W2krK10gPSAwO1xuICAgICAgICAgICAgYXJyYXlbaSsrXSA9IDA7XG4gICAgICAgICAgICBhcnJheVtpKytdID0gMDtcbiAgICAgICAgICAgIGFycmF5W2krK10gPSAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb2xvciA9ICgwLCB1dGlsc18xLmZsb2F0Q29sb3IpKGRhdGEuY29sb3IpO1xuICAgICAgICBhcnJheVtpKytdID0gZGF0YS54O1xuICAgICAgICBhcnJheVtpKytdID0gZGF0YS55O1xuICAgICAgICBhcnJheVtpKytdID0gZGF0YS5zaXplO1xuICAgICAgICBhcnJheVtpXSA9IGNvbG9yO1xuICAgIH07XG4gICAgTm9kZUZhc3RQcm9ncmFtLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc05vdGhpbmdUb1JlbmRlcigpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMucHJvZ3JhbTtcbiAgICAgICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICAgICAgZ2wudW5pZm9ybTFmKHRoaXMucmF0aW9Mb2NhdGlvbiwgMSAvIE1hdGguc3FydChwYXJhbXMucmF0aW8pKTtcbiAgICAgICAgZ2wudW5pZm9ybTFmKHRoaXMuc2NhbGVMb2NhdGlvbiwgcGFyYW1zLnNjYWxpbmdSYXRpbyk7XG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXgzZnYodGhpcy5tYXRyaXhMb2NhdGlvbiwgZmFsc2UsIHBhcmFtcy5tYXRyaXgpO1xuICAgICAgICBnbC5kcmF3QXJyYXlzKGdsLlBPSU5UUywgMCwgdGhpcy5hcnJheS5sZW5ndGggLyBBVFRSSUJVVEVTKTtcbiAgICB9O1xuICAgIHJldHVybiBOb2RlRmFzdFByb2dyYW07XG59KG5vZGVfMS5BYnN0cmFjdE5vZGVQcm9ncmFtKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBOb2RlRmFzdFByb2dyYW07XG4iLCIoKCk9PntcInVzZSBzdHJpY3RcIjt2YXIgZT17ZDoobyxyKT0+e2Zvcih2YXIgdCBpbiByKWUubyhyLHQpJiYhZS5vKG8sdCkmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLHQse2VudW1lcmFibGU6ITAsZ2V0OnJbdF19KX0sbzooZSxvKT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbykscjplPT57XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX19LG89e307ZS5yKG8pLGUuZChvLHtkZWZhdWx0OigpPT5yfSk7Y29uc3Qgcj1cInByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xcblxcbnZhcnlpbmcgdmVjNCB2X2NvbG9yO1xcblxcbnZvaWQgbWFpbih2b2lkKSB7XFxuICBnbF9GcmFnQ29sb3IgPSB2X2NvbG9yO1xcbn1cXG5cIjttb2R1bGUuZXhwb3J0cz1vfSkoKTsiLCIoKCk9PntcInVzZSBzdHJpY3RcIjt2YXIgYT17ZDooZSx0KT0+e2Zvcih2YXIgbyBpbiB0KWEubyh0LG8pJiYhYS5vKGUsbykmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG8se2VudW1lcmFibGU6ITAsZ2V0OnRbb119KX0sbzooYSxlKT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGEsZSkscjphPT57XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX19LGU9e307YS5yKGUpLGEuZChlLHtkZWZhdWx0OigpPT50fSk7Y29uc3QgdD1cImF0dHJpYnV0ZSB2ZWMyIGFfcG9zaXRpb247XFxuYXR0cmlidXRlIHZlYzIgYV9ub3JtYWw7XFxuYXR0cmlidXRlIGZsb2F0IGFfcmFkaXVzO1xcbmF0dHJpYnV0ZSB2ZWM0IGFfY29sb3I7XFxuYXR0cmlidXRlIHZlYzMgYV9iYXJ5Y2VudHJpYztcXG5cXG51bmlmb3JtIG1hdDMgdV9tYXRyaXg7XFxudW5pZm9ybSBmbG9hdCB1X3NxcnRab29tUmF0aW87XFxudW5pZm9ybSBmbG9hdCB1X2NvcnJlY3Rpb25SYXRpbztcXG5cXG52YXJ5aW5nIHZlYzQgdl9jb2xvcjtcXG5cXG5jb25zdCBmbG9hdCBtaW5UaGlja25lc3MgPSAxLjc7XFxuY29uc3QgZmxvYXQgYmlhcyA9IDI1NS4wIC8gMjU0LjA7XFxuY29uc3QgZmxvYXQgYXJyb3dIZWFkV2lkdGhMZW5ndGhSYXRpbyA9IDAuNjY7XFxuY29uc3QgZmxvYXQgYXJyb3dIZWFkTGVuZ3RoVGhpY2tuZXNzUmF0aW8gPSAyLjU7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgZmxvYXQgbm9ybWFsTGVuZ3RoID0gbGVuZ3RoKGFfbm9ybWFsKTtcXG4gIHZlYzIgdW5pdE5vcm1hbCA9IGFfbm9ybWFsIC8gbm9ybWFsTGVuZ3RoO1xcblxcbiAgLy8gVGhlc2UgZmlyc3QgY29tcHV0YXRpb25zIGFyZSB0YWtlbiBmcm9tIGVkZ2UudmVydC5nbHNsIGFuZFxcbiAgLy8gZWRnZS5jbGFtcGVkLnZlcnQuZ2xzbC4gUGxlYXNlIHJlYWQgaXQgdG8gZ2V0IGJldHRlciBjb21tZW50cyBvbiB3aGF0J3NcXG4gIC8vIGhhcHBlbmluZzpcXG4gIGZsb2F0IHBpeGVsc1RoaWNrbmVzcyA9IG1heChub3JtYWxMZW5ndGgsIG1pblRoaWNrbmVzcyAqIHVfc3FydFpvb21SYXRpbyk7XFxuICBmbG9hdCB3ZWJHTFRoaWNrbmVzcyA9IHBpeGVsc1RoaWNrbmVzcyAqIHVfY29ycmVjdGlvblJhdGlvO1xcbiAgZmxvYXQgYWRhcHRlZFdlYkdMVGhpY2tuZXNzID0gd2ViR0xUaGlja25lc3MgKiB1X3NxcnRab29tUmF0aW87XFxuICBmbG9hdCBhZGFwdGVkV2ViR0xOb2RlUmFkaXVzID0gYV9yYWRpdXMgKiAyLjAgKiB1X2NvcnJlY3Rpb25SYXRpbyAqIHVfc3FydFpvb21SYXRpbztcXG4gIGZsb2F0IGFkYXB0ZWRXZWJHTEFycm93SGVhZExlbmd0aCA9IGFkYXB0ZWRXZWJHTFRoaWNrbmVzcyAqIDIuMCAqIGFycm93SGVhZExlbmd0aFRoaWNrbmVzc1JhdGlvO1xcbiAgZmxvYXQgYWRhcHRlZFdlYkdMQXJyb3dIZWFkSGFsZldpZHRoID0gYWRhcHRlZFdlYkdMQXJyb3dIZWFkTGVuZ3RoICogYXJyb3dIZWFkV2lkdGhMZW5ndGhSYXRpbyAvIDIuMDtcXG5cXG4gIGZsb2F0IGRhID0gYV9iYXJ5Y2VudHJpYy54O1xcbiAgZmxvYXQgZGIgPSBhX2JhcnljZW50cmljLnk7XFxuICBmbG9hdCBkYyA9IGFfYmFyeWNlbnRyaWMuejtcXG5cXG4gIHZlYzIgZGVsdGEgPSB2ZWMyKFxcbiAgICAgIGRhICogKGFkYXB0ZWRXZWJHTE5vZGVSYWRpdXMgKiB1bml0Tm9ybWFsLnkpXFxuICAgICsgZGIgKiAoKGFkYXB0ZWRXZWJHTE5vZGVSYWRpdXMgKyBhZGFwdGVkV2ViR0xBcnJvd0hlYWRMZW5ndGgpICogdW5pdE5vcm1hbC55ICsgYWRhcHRlZFdlYkdMQXJyb3dIZWFkSGFsZldpZHRoICogdW5pdE5vcm1hbC54KVxcbiAgICArIGRjICogKChhZGFwdGVkV2ViR0xOb2RlUmFkaXVzICsgYWRhcHRlZFdlYkdMQXJyb3dIZWFkTGVuZ3RoKSAqIHVuaXROb3JtYWwueSAtIGFkYXB0ZWRXZWJHTEFycm93SGVhZEhhbGZXaWR0aCAqIHVuaXROb3JtYWwueCksXFxuXFxuICAgICAgZGEgKiAoLWFkYXB0ZWRXZWJHTE5vZGVSYWRpdXMgKiB1bml0Tm9ybWFsLngpXFxuICAgICsgZGIgKiAoLShhZGFwdGVkV2ViR0xOb2RlUmFkaXVzICsgYWRhcHRlZFdlYkdMQXJyb3dIZWFkTGVuZ3RoKSAqIHVuaXROb3JtYWwueCArIGFkYXB0ZWRXZWJHTEFycm93SGVhZEhhbGZXaWR0aCAqIHVuaXROb3JtYWwueSlcXG4gICAgKyBkYyAqICgtKGFkYXB0ZWRXZWJHTE5vZGVSYWRpdXMgKyBhZGFwdGVkV2ViR0xBcnJvd0hlYWRMZW5ndGgpICogdW5pdE5vcm1hbC54IC0gYWRhcHRlZFdlYkdMQXJyb3dIZWFkSGFsZldpZHRoICogdW5pdE5vcm1hbC55KVxcbiAgKTtcXG5cXG4gIHZlYzIgcG9zaXRpb24gPSAodV9tYXRyaXggKiB2ZWMzKGFfcG9zaXRpb24gKyBkZWx0YSwgMSkpLnh5O1xcblxcbiAgZ2xfUG9zaXRpb24gPSB2ZWM0KHBvc2l0aW9uLCAwLCAxKTtcXG5cXG4gIC8vIEV4dHJhY3QgdGhlIGNvbG9yOlxcbiAgdl9jb2xvciA9IGFfY29sb3I7XFxuICB2X2NvbG9yLmEgKj0gYmlhcztcXG59XFxuXCI7bW9kdWxlLmV4cG9ydHM9ZX0pKCk7IiwiKCgpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9e2Q6KG8sbik9Pntmb3IodmFyIHQgaW4gbillLm8obix0KSYmIWUubyhvLHQpJiZPYmplY3QuZGVmaW5lUHJvcGVydHkobyx0LHtlbnVtZXJhYmxlOiEwLGdldDpuW3RdfSl9LG86KGUsbyk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG8pLHI6ZT0+e1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9fSxvPXt9O2UucihvKSxlLmQobyx7ZGVmYXVsdDooKT0+bn0pO2NvbnN0IG49XCJhdHRyaWJ1dGUgdmVjNCBhX2NvbG9yO1xcbmF0dHJpYnV0ZSB2ZWMyIGFfbm9ybWFsO1xcbmF0dHJpYnV0ZSB2ZWMyIGFfcG9zaXRpb247XFxuYXR0cmlidXRlIGZsb2F0IGFfcmFkaXVzO1xcblxcbnVuaWZvcm0gbWF0MyB1X21hdHJpeDtcXG51bmlmb3JtIGZsb2F0IHVfc3FydFpvb21SYXRpbztcXG51bmlmb3JtIGZsb2F0IHVfY29ycmVjdGlvblJhdGlvO1xcblxcbnZhcnlpbmcgdmVjNCB2X2NvbG9yO1xcbnZhcnlpbmcgdmVjMiB2X25vcm1hbDtcXG52YXJ5aW5nIGZsb2F0IHZfdGhpY2tuZXNzO1xcblxcbmNvbnN0IGZsb2F0IG1pblRoaWNrbmVzcyA9IDEuNztcXG5jb25zdCBmbG9hdCBiaWFzID0gMjU1LjAgLyAyNTQuMDtcXG5jb25zdCBmbG9hdCBhcnJvd0hlYWRMZW5ndGhUaGlja25lc3NSYXRpbyA9IDIuNTtcXG5cXG52b2lkIG1haW4oKSB7XFxuICBmbG9hdCBub3JtYWxMZW5ndGggPSBsZW5ndGgoYV9ub3JtYWwpO1xcbiAgdmVjMiB1bml0Tm9ybWFsID0gYV9ub3JtYWwgLyBub3JtYWxMZW5ndGg7XFxuXFxuICAvLyBUaGVzZSBmaXJzdCBjb21wdXRhdGlvbnMgYXJlIHRha2VuIGZyb20gZWRnZS52ZXJ0Lmdsc2wuIFBsZWFzZSByZWFkIGl0IHRvXFxuICAvLyBnZXQgYmV0dGVyIGNvbW1lbnRzIG9uIHdoYXQncyBoYXBwZW5pbmc6XFxuICBmbG9hdCBwaXhlbHNUaGlja25lc3MgPSBtYXgobm9ybWFsTGVuZ3RoLCBtaW5UaGlja25lc3MgKiB1X3NxcnRab29tUmF0aW8pO1xcbiAgZmxvYXQgd2ViR0xUaGlja25lc3MgPSBwaXhlbHNUaGlja25lc3MgKiB1X2NvcnJlY3Rpb25SYXRpbztcXG4gIGZsb2F0IGFkYXB0ZWRXZWJHTFRoaWNrbmVzcyA9IHdlYkdMVGhpY2tuZXNzICogdV9zcXJ0Wm9vbVJhdGlvO1xcblxcbiAgLy8gSGVyZSwgd2UgbW92ZSB0aGUgcG9pbnQgdG8gbGVhdmUgc3BhY2UgZm9yIHRoZSBhcnJvdyBoZWFkOlxcbiAgZmxvYXQgZGlyZWN0aW9uID0gc2lnbihhX3JhZGl1cyk7XFxuICBmbG9hdCBhZGFwdGVkV2ViR0xOb2RlUmFkaXVzID0gZGlyZWN0aW9uICogYV9yYWRpdXMgKiAyLjAgKiB1X2NvcnJlY3Rpb25SYXRpbyAqIHVfc3FydFpvb21SYXRpbztcXG4gIGZsb2F0IGFkYXB0ZWRXZWJHTEFycm93SGVhZExlbmd0aCA9IGFkYXB0ZWRXZWJHTFRoaWNrbmVzcyAqIDIuMCAqIGFycm93SGVhZExlbmd0aFRoaWNrbmVzc1JhdGlvO1xcblxcbiAgdmVjMiBjb21wZW5zYXRpb25WZWN0b3IgPSB2ZWMyKC1kaXJlY3Rpb24gKiB1bml0Tm9ybWFsLnksIGRpcmVjdGlvbiAqIHVuaXROb3JtYWwueCkgKiAoYWRhcHRlZFdlYkdMTm9kZVJhZGl1cyArIGFkYXB0ZWRXZWJHTEFycm93SGVhZExlbmd0aCk7XFxuXFxuICAvLyBIZXJlIGlzIHRoZSBwcm9wZXIgcG9zaXRpb24gb2YgdGhlIHZlcnRleFxcbiAgZ2xfUG9zaXRpb24gPSB2ZWM0KCh1X21hdHJpeCAqIHZlYzMoYV9wb3NpdGlvbiArIHVuaXROb3JtYWwgKiBhZGFwdGVkV2ViR0xUaGlja25lc3MgKyBjb21wZW5zYXRpb25WZWN0b3IsIDEpKS54eSwgMCwgMSk7XFxuXFxuICB2X3RoaWNrbmVzcyA9IHdlYkdMVGhpY2tuZXNzIC8gdV9zcXJ0Wm9vbVJhdGlvO1xcblxcbiAgdl9ub3JtYWwgPSB1bml0Tm9ybWFsO1xcbiAgdl9jb2xvciA9IGFfY29sb3I7XFxuICB2X2NvbG9yLmEgKj0gYmlhcztcXG59XFxuXCI7bW9kdWxlLmV4cG9ydHM9b30pKCk7IiwiKCgpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9e2Q6KG4sdCk9Pntmb3IodmFyIG8gaW4gdCllLm8odCxvKSYmIWUubyhuLG8pJiZPYmplY3QuZGVmaW5lUHJvcGVydHkobixvLHtlbnVtZXJhYmxlOiEwLGdldDp0W29dfSl9LG86KGUsbik9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG4pLHI6ZT0+e1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9fSxuPXt9O2UucihuKSxlLmQobix7ZGVmYXVsdDooKT0+dH0pO2NvbnN0IHQ9XCJwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcXG5cXG52YXJ5aW5nIHZlYzQgdl9jb2xvcjtcXG52YXJ5aW5nIHZlYzIgdl9ub3JtYWw7XFxudmFyeWluZyBmbG9hdCB2X3RoaWNrbmVzcztcXG5cXG5jb25zdCBmbG9hdCBmZWF0aGVyID0gMC4wMDE7XFxuY29uc3QgdmVjNCB0cmFuc3BhcmVudCA9IHZlYzQoMC4wLCAwLjAsIDAuMCwgMC4wKTtcXG5cXG52b2lkIG1haW4odm9pZCkge1xcbiAgZmxvYXQgZGlzdCA9IGxlbmd0aCh2X25vcm1hbCkgKiB2X3RoaWNrbmVzcztcXG5cXG4gIGZsb2F0IHQgPSBzbW9vdGhzdGVwKFxcbiAgICB2X3RoaWNrbmVzcyAtIGZlYXRoZXIsXFxuICAgIHZfdGhpY2tuZXNzLFxcbiAgICBkaXN0XFxuICApO1xcblxcbiAgZ2xfRnJhZ0NvbG9yID0gbWl4KHZfY29sb3IsIHRyYW5zcGFyZW50LCB0KTtcXG59XFxuXCI7bW9kdWxlLmV4cG9ydHM9bn0pKCk7IiwiKCgpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9e2Q6KG4sbyk9Pntmb3IodmFyIHQgaW4gbyllLm8obyx0KSYmIWUubyhuLHQpJiZPYmplY3QuZGVmaW5lUHJvcGVydHkobix0LHtlbnVtZXJhYmxlOiEwLGdldDpvW3RdfSl9LG86KGUsbik9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG4pLHI6ZT0+e1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9fSxuPXt9O2UucihuKSxlLmQobix7ZGVmYXVsdDooKT0+b30pO2NvbnN0IG89J2F0dHJpYnV0ZSB2ZWM0IGFfY29sb3I7XFxuYXR0cmlidXRlIHZlYzIgYV9ub3JtYWw7XFxuYXR0cmlidXRlIHZlYzIgYV9wb3NpdGlvbjtcXG5cXG51bmlmb3JtIG1hdDMgdV9tYXRyaXg7XFxudW5pZm9ybSBmbG9hdCB1X3NxcnRab29tUmF0aW87XFxudW5pZm9ybSBmbG9hdCB1X2NvcnJlY3Rpb25SYXRpbztcXG5cXG52YXJ5aW5nIHZlYzQgdl9jb2xvcjtcXG52YXJ5aW5nIHZlYzIgdl9ub3JtYWw7XFxudmFyeWluZyBmbG9hdCB2X3RoaWNrbmVzcztcXG5cXG5jb25zdCBmbG9hdCBtaW5UaGlja25lc3MgPSAxLjc7XFxuY29uc3QgZmxvYXQgYmlhcyA9IDI1NS4wIC8gMjU0LjA7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgZmxvYXQgbm9ybWFsTGVuZ3RoID0gbGVuZ3RoKGFfbm9ybWFsKTtcXG4gIHZlYzIgdW5pdE5vcm1hbCA9IGFfbm9ybWFsIC8gbm9ybWFsTGVuZ3RoO1xcblxcbiAgLy8gV2UgcmVxdWlyZSBlZGdlcyB0byBiZSBhdCBsZWFzdCBgbWluVGhpY2tuZXNzYCBwaXhlbHMgdGhpY2sgKm9uIHNjcmVlbipcXG4gIC8vIChzbyB3ZSBuZWVkIHRvIGNvbXBlbnNhdGUgdGhlIFNRUlQgem9vbSByYXRpbyk6XFxuICBmbG9hdCBwaXhlbHNUaGlja25lc3MgPSBtYXgobm9ybWFsTGVuZ3RoLCBtaW5UaGlja25lc3MgKiB1X3NxcnRab29tUmF0aW8pO1xcblxcbiAgLy8gVGhlbiwgd2UgbmVlZCB0byByZXRyaWV2ZSB0aGUgbm9ybWFsaXplZCB0aGlja25lc3Mgb2YgdGhlIGVkZ2UgaW4gdGhlIFdlYkdMXFxuICAvLyByZWZlcmVudGlhbCAoaW4gYSAoWzAsIDFdLCBbMCwgMV0pIHNwYWNlKSwgdXNpbmcgb3VyIFwibWFnaWNcIiBjb3JyZWN0aW9uXFxuICAvLyByYXRpbzpcXG4gIGZsb2F0IHdlYkdMVGhpY2tuZXNzID0gcGl4ZWxzVGhpY2tuZXNzICogdV9jb3JyZWN0aW9uUmF0aW87XFxuXFxuICAvLyBGaW5hbGx5LCB3ZSBhZGFwdCB0aGUgZWRnZSB0aGlja25lc3MgdG8gdGhlIFwiU1FSVCBydWxlXCIgaW4gc2lnbWEgKHNvIHRoYXRcXG4gIC8vIGl0ZW1zIGFyZSBub3QgdG9vIGJpZyB3aGVuIHpvb21lZCBpbiwgYW5kIG5vdCB0b28gc21hbGwgd2hlbiB6b29tZWQgb3V0KS5cXG4gIC8vIFRoZSBleGFjdCBjb21wdXRhdGlvbiBzaG91bGQgYmUgYGFkYXB0ZWQgPSB2YWx1ZSAqIHpvb20gLyBzcXJ0KHpvb20pYCwgYnV0XFxuICAvLyBpdFxcJ3Mgc2ltcGxlciBsaWtlIHRoaXM6XFxuICBmbG9hdCBhZGFwdGVkV2ViR0xUaGlja25lc3MgPSB3ZWJHTFRoaWNrbmVzcyAqIHVfc3FydFpvb21SYXRpbztcXG5cXG4gIC8vIEhlcmUgaXMgdGhlIHByb3BlciBwb3NpdGlvbiBvZiB0aGUgdmVydGV4XFxuICBnbF9Qb3NpdGlvbiA9IHZlYzQoKHVfbWF0cml4ICogdmVjMyhhX3Bvc2l0aW9uICsgdW5pdE5vcm1hbCAqIGFkYXB0ZWRXZWJHTFRoaWNrbmVzcywgMSkpLnh5LCAwLCAxKTtcXG5cXG4gIC8vIEZvciB0aGUgZnJhZ21lbnQgc2hhZGVyIHRob3VnaCwgd2UgbmVlZCBhIHRoaWNrbmVzcyB0aGF0IHRha2VzIHRoZSBcIm1hZ2ljXCJcXG4gIC8vIGNvcnJlY3Rpb24gcmF0aW8gaW50byBhY2NvdW50IChhcyBpbiB3ZWJHTFRoaWNrbmVzcyksIGJ1dCBzbyB0aGF0IHRoZVxcbiAgLy8gYW50aWFsaWFzaW5nIGVmZmVjdCBkb2VzIG5vdCBkZXBlbmQgb24gdGhlIHpvb20gbGV2ZWwuIFNvIGhlcmVcXCdzIHlldFxcbiAgLy8gYW5vdGhlciB0aGlja25lc3MgdmVyc2lvbjpcXG4gIHZfdGhpY2tuZXNzID0gd2ViR0xUaGlja25lc3MgLyB1X3NxcnRab29tUmF0aW87XFxuXFxuICB2X25vcm1hbCA9IHVuaXROb3JtYWw7XFxuICB2X2NvbG9yID0gYV9jb2xvcjtcXG4gIHZfY29sb3IuYSAqPSBiaWFzO1xcbn1cXG4nO21vZHVsZS5leHBvcnRzPW59KSgpOyIsIigoKT0+e1widXNlIHN0cmljdFwiO3ZhciBlPXtkOihuLG8pPT57Zm9yKHZhciB0IGluIG8pZS5vKG8sdCkmJiFlLm8obix0KSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sdCx7ZW51bWVyYWJsZTohMCxnZXQ6b1t0XX0pfSxvOihlLG4pPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxuKSxyOmU9PntcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfX0sbj17fTtlLnIobiksZS5kKG4se2RlZmF1bHQ6KCk9Pm99KTtjb25zdCBvPVwicHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XFxuXFxudmFyeWluZyB2ZWM0IHZfY29sb3I7XFxudmFyeWluZyBmbG9hdCB2X2JvcmRlcjtcXG5cXG5jb25zdCBmbG9hdCByYWRpdXMgPSAwLjU7XFxuY29uc3QgdmVjNCB0cmFuc3BhcmVudCA9IHZlYzQoMC4wLCAwLjAsIDAuMCwgMC4wKTtcXG5cXG52b2lkIG1haW4odm9pZCkge1xcbiAgdmVjMiBtID0gZ2xfUG9pbnRDb29yZCAtIHZlYzIoMC41LCAwLjUpO1xcbiAgZmxvYXQgZGlzdCA9IHJhZGl1cyAtIGxlbmd0aChtKTtcXG5cXG4gIGZsb2F0IHQgPSAwLjA7XFxuICBpZiAoZGlzdCA+IHZfYm9yZGVyKVxcbiAgICB0ID0gMS4wO1xcbiAgZWxzZSBpZiAoZGlzdCA+IDAuMClcXG4gICAgdCA9IGRpc3QgLyB2X2JvcmRlcjtcXG5cXG4gIGdsX0ZyYWdDb2xvciA9IG1peCh0cmFuc3BhcmVudCwgdl9jb2xvciwgdCk7XFxufVxcblwiO21vZHVsZS5leHBvcnRzPW59KSgpOyIsIigoKT0+e1widXNlIHN0cmljdFwiO3ZhciBvPXtkOih0LGUpPT57Zm9yKHZhciBuIGluIGUpby5vKGUsbikmJiFvLm8odCxuKSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbix7ZW51bWVyYWJsZTohMCxnZXQ6ZVtuXX0pfSxvOihvLHQpPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobyx0KSxyOm89PntcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfX0sdD17fTtvLnIodCksby5kKHQse2RlZmF1bHQ6KCk9PmV9KTtjb25zdCBlPVwiYXR0cmlidXRlIHZlYzIgYV9wb3NpdGlvbjtcXG5hdHRyaWJ1dGUgZmxvYXQgYV9zaXplO1xcbmF0dHJpYnV0ZSB2ZWM0IGFfY29sb3I7XFxuXFxudW5pZm9ybSBmbG9hdCB1X3JhdGlvO1xcbnVuaWZvcm0gZmxvYXQgdV9zY2FsZTtcXG51bmlmb3JtIG1hdDMgdV9tYXRyaXg7XFxuXFxudmFyeWluZyB2ZWM0IHZfY29sb3I7XFxudmFyeWluZyBmbG9hdCB2X2JvcmRlcjtcXG5cXG5jb25zdCBmbG9hdCBiaWFzID0gMjU1LjAgLyAyNTQuMDtcXG5cXG52b2lkIG1haW4oKSB7XFxuICBnbF9Qb3NpdGlvbiA9IHZlYzQoXFxuICAgICh1X21hdHJpeCAqIHZlYzMoYV9wb3NpdGlvbiwgMSkpLnh5LFxcbiAgICAwLFxcbiAgICAxXFxuICApO1xcblxcbiAgLy8gTXVsdGlwbHkgdGhlIHBvaW50IHNpemUgdHdpY2U6XFxuICAvLyAgLSB4IFNDQUxJTkdfUkFUSU8gdG8gY29ycmVjdCB0aGUgY2FudmFzIHNjYWxpbmdcXG4gIC8vICAtIHggMiB0byBjb3JyZWN0IHRoZSBmb3JtdWxhZVxcbiAgZ2xfUG9pbnRTaXplID0gYV9zaXplICogdV9yYXRpbyAqIHVfc2NhbGUgKiAyLjA7XFxuXFxuICB2X2JvcmRlciA9ICgxLjAgLyB1X3JhdGlvKSAqICgwLjUgLyBhX3NpemUpO1xcblxcbiAgLy8gRXh0cmFjdCB0aGUgY29sb3I6XFxuICB2X2NvbG9yID0gYV9jb2xvcjtcXG4gIHZfY29sb3IuYSAqPSBiaWFzO1xcbn1cXG5cIjttb2R1bGUuZXhwb3J0cz10fSkoKTsiLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogU2lnbWEuanMgU2hhZGVyIFV0aWxzXG4gKiA9PT09PT09PT09PT09PT09PT09PT09XG4gKlxuICogQ29kZSB1c2VkIHRvIGxvYWQgc2lnbWEncyBzaGFkZXJzLlxuICogQG1vZHVsZVxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmxvYWRQcm9ncmFtID0gZXhwb3J0cy5sb2FkRnJhZ21lbnRTaGFkZXIgPSBleHBvcnRzLmxvYWRWZXJ0ZXhTaGFkZXIgPSB2b2lkIDA7XG4vKipcbiAqIEZ1bmN0aW9uIHVzZWQgdG8gbG9hZCBhIHNoYWRlci5cbiAqL1xuZnVuY3Rpb24gbG9hZFNoYWRlcih0eXBlLCBnbCwgc291cmNlKSB7XG4gICAgdmFyIGdsVHlwZSA9IHR5cGUgPT09IFwiVkVSVEVYXCIgPyBnbC5WRVJURVhfU0hBREVSIDogZ2wuRlJBR01FTlRfU0hBREVSO1xuICAgIC8vIENyZWF0aW5nIHRoZSBzaGFkZXJcbiAgICB2YXIgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsVHlwZSk7XG4gICAgaWYgKHNoYWRlciA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJsb2FkU2hhZGVyOiBlcnJvciB3aGlsZSBjcmVhdGluZyB0aGUgc2hhZGVyXCIpO1xuICAgIH1cbiAgICAvLyBMb2FkaW5nIHNvdXJjZVxuICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XG4gICAgLy8gQ29tcGlsaW5nIHRoZSBzaGFkZXJcbiAgICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG4gICAgLy8gUmV0cmlldmluZyBjb21waWxhdGlvbiBzdGF0dXNcbiAgICB2YXIgc3VjY2Vzc2Z1bGx5Q29tcGlsZWQgPSBnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUyk7XG4gICAgLy8gVGhyb3dpbmcgaWYgc29tZXRoaW5nIHdlbnQgYXdyeVxuICAgIGlmICghc3VjY2Vzc2Z1bGx5Q29tcGlsZWQpIHtcbiAgICAgICAgdmFyIGluZm9Mb2cgPSBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcik7XG4gICAgICAgIGdsLmRlbGV0ZVNoYWRlcihzaGFkZXIpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJsb2FkU2hhZGVyOiBlcnJvciB3aGlsZSBjb21waWxpbmcgdGhlIHNoYWRlcjpcXG5cIi5jb25jYXQoaW5mb0xvZywgXCJcXG5cIikuY29uY2F0KHNvdXJjZSkpO1xuICAgIH1cbiAgICByZXR1cm4gc2hhZGVyO1xufVxuZnVuY3Rpb24gbG9hZFZlcnRleFNoYWRlcihnbCwgc291cmNlKSB7XG4gICAgcmV0dXJuIGxvYWRTaGFkZXIoXCJWRVJURVhcIiwgZ2wsIHNvdXJjZSk7XG59XG5leHBvcnRzLmxvYWRWZXJ0ZXhTaGFkZXIgPSBsb2FkVmVydGV4U2hhZGVyO1xuZnVuY3Rpb24gbG9hZEZyYWdtZW50U2hhZGVyKGdsLCBzb3VyY2UpIHtcbiAgICByZXR1cm4gbG9hZFNoYWRlcihcIkZSQUdNRU5UXCIsIGdsLCBzb3VyY2UpO1xufVxuZXhwb3J0cy5sb2FkRnJhZ21lbnRTaGFkZXIgPSBsb2FkRnJhZ21lbnRTaGFkZXI7XG4vKipcbiAqIEZ1bmN0aW9uIHVzZWQgdG8gbG9hZCBhIHByb2dyYW0uXG4gKi9cbmZ1bmN0aW9uIGxvYWRQcm9ncmFtKGdsLCBzaGFkZXJzKSB7XG4gICAgdmFyIHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XG4gICAgaWYgKHByb2dyYW0gPT09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibG9hZFByb2dyYW06IGVycm9yIHdoaWxlIGNyZWF0aW5nIHRoZSBwcm9ncmFtLlwiKTtcbiAgICB9XG4gICAgdmFyIGksIGw7XG4gICAgLy8gQXR0YWNoaW5nIHRoZSBzaGFkZXJzXG4gICAgZm9yIChpID0gMCwgbCA9IHNoYWRlcnMubGVuZ3RoOyBpIDwgbDsgaSsrKVxuICAgICAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgc2hhZGVyc1tpXSk7XG4gICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG4gICAgLy8gQ2hlY2tpbmcgc3RhdHVzXG4gICAgdmFyIHN1Y2Nlc3NmdWxseUxpbmtlZCA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpO1xuICAgIGlmICghc3VjY2Vzc2Z1bGx5TGlua2VkKSB7XG4gICAgICAgIGdsLmRlbGV0ZVByb2dyYW0ocHJvZ3JhbSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImxvYWRQcm9ncmFtOiBlcnJvciB3aGlsZSBsaW5raW5nIHRoZSBwcm9ncmFtLlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb2dyYW07XG59XG5leHBvcnRzLmxvYWRQcm9ncmFtID0gbG9hZFByb2dyYW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVzb2x2ZVNldHRpbmdzID0gZXhwb3J0cy52YWxpZGF0ZVNldHRpbmdzID0gZXhwb3J0cy5ERUZBVUxUX0VER0VfUFJPR1JBTV9DTEFTU0VTID0gZXhwb3J0cy5ERUZBVUxUX05PREVfUFJPR1JBTV9DTEFTU0VTID0gZXhwb3J0cy5ERUZBVUxUX1NFVFRJTkdTID0gdm9pZCAwO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbnZhciBsYWJlbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3JlbmRlcmluZy9jYW52YXMvbGFiZWxcIikpO1xudmFyIGhvdmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcmVuZGVyaW5nL2NhbnZhcy9ob3ZlclwiKSk7XG52YXIgZWRnZV9sYWJlbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3JlbmRlcmluZy9jYW52YXMvZWRnZS1sYWJlbFwiKSk7XG52YXIgbm9kZV9mYXN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcmVuZGVyaW5nL3dlYmdsL3Byb2dyYW1zL25vZGUuZmFzdFwiKSk7XG52YXIgZWRnZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3JlbmRlcmluZy93ZWJnbC9wcm9ncmFtcy9lZGdlXCIpKTtcbnZhciBlZGdlX2Fycm93XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcmVuZGVyaW5nL3dlYmdsL3Byb2dyYW1zL2VkZ2UuYXJyb3dcIikpO1xuZXhwb3J0cy5ERUZBVUxUX1NFVFRJTkdTID0ge1xuICAgIC8vIFBlcmZvcm1hbmNlXG4gICAgaGlkZUVkZ2VzT25Nb3ZlOiBmYWxzZSxcbiAgICBoaWRlTGFiZWxzT25Nb3ZlOiBmYWxzZSxcbiAgICByZW5kZXJMYWJlbHM6IHRydWUsXG4gICAgcmVuZGVyRWRnZUxhYmVsczogZmFsc2UsXG4gICAgZW5hYmxlRWRnZUNsaWNrRXZlbnRzOiBmYWxzZSxcbiAgICBlbmFibGVFZGdlV2hlZWxFdmVudHM6IGZhbHNlLFxuICAgIGVuYWJsZUVkZ2VIb3ZlckV2ZW50czogZmFsc2UsXG4gICAgLy8gQ29tcG9uZW50IHJlbmRlcmluZ1xuICAgIGRlZmF1bHROb2RlQ29sb3I6IFwiIzk5OVwiLFxuICAgIGRlZmF1bHROb2RlVHlwZTogXCJjaXJjbGVcIixcbiAgICBkZWZhdWx0RWRnZUNvbG9yOiBcIiNjY2NcIixcbiAgICBkZWZhdWx0RWRnZVR5cGU6IFwibGluZVwiLFxuICAgIGxhYmVsRm9udDogXCJBcmlhbFwiLFxuICAgIGxhYmVsU2l6ZTogMTQsXG4gICAgbGFiZWxXZWlnaHQ6IFwibm9ybWFsXCIsXG4gICAgbGFiZWxDb2xvcjogeyBjb2xvcjogXCIjMDAwXCIgfSxcbiAgICBlZGdlTGFiZWxGb250OiBcIkFyaWFsXCIsXG4gICAgZWRnZUxhYmVsU2l6ZTogMTQsXG4gICAgZWRnZUxhYmVsV2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgIGVkZ2VMYWJlbENvbG9yOiB7IGF0dHJpYnV0ZTogXCJjb2xvclwiIH0sXG4gICAgc3RhZ2VQYWRkaW5nOiAzMCxcbiAgICAvLyBMYWJlbHNcbiAgICBsYWJlbERlbnNpdHk6IDEsXG4gICAgbGFiZWxHcmlkQ2VsbFNpemU6IDEwMCxcbiAgICBsYWJlbFJlbmRlcmVkU2l6ZVRocmVzaG9sZDogNixcbiAgICAvLyBSZWR1Y2Vyc1xuICAgIG5vZGVSZWR1Y2VyOiBudWxsLFxuICAgIGVkZ2VSZWR1Y2VyOiBudWxsLFxuICAgIC8vIEZlYXR1cmVzXG4gICAgekluZGV4OiBmYWxzZSxcbiAgICBtaW5DYW1lcmFSYXRpbzogbnVsbCxcbiAgICBtYXhDYW1lcmFSYXRpbzogbnVsbCxcbiAgICAvLyBSZW5kZXJlcnNcbiAgICBsYWJlbFJlbmRlcmVyOiBsYWJlbF8xLmRlZmF1bHQsXG4gICAgaG92ZXJSZW5kZXJlcjogaG92ZXJfMS5kZWZhdWx0LFxuICAgIGVkZ2VMYWJlbFJlbmRlcmVyOiBlZGdlX2xhYmVsXzEuZGVmYXVsdCxcbiAgICAvLyBMaWZlY3ljbGVcbiAgICBhbGxvd0ludmFsaWRDb250YWluZXI6IGZhbHNlLFxuICAgIC8vIFByb2dyYW0gY2xhc3Nlc1xuICAgIG5vZGVQcm9ncmFtQ2xhc3Nlczoge30sXG4gICAgbm9kZUhvdmVyUHJvZ3JhbUNsYXNzZXM6IHt9LFxuICAgIGVkZ2VQcm9ncmFtQ2xhc3Nlczoge30sXG59O1xuZXhwb3J0cy5ERUZBVUxUX05PREVfUFJPR1JBTV9DTEFTU0VTID0ge1xuICAgIGNpcmNsZTogbm9kZV9mYXN0XzEuZGVmYXVsdCxcbn07XG5leHBvcnRzLkRFRkFVTFRfRURHRV9QUk9HUkFNX0NMQVNTRVMgPSB7XG4gICAgYXJyb3c6IGVkZ2VfYXJyb3dfMS5kZWZhdWx0LFxuICAgIGxpbmU6IGVkZ2VfMS5kZWZhdWx0LFxufTtcbmZ1bmN0aW9uIHZhbGlkYXRlU2V0dGluZ3Moc2V0dGluZ3MpIHtcbiAgICBpZiAodHlwZW9mIHNldHRpbmdzLmxhYmVsRGVuc2l0eSAhPT0gXCJudW1iZXJcIiB8fCBzZXR0aW5ncy5sYWJlbERlbnNpdHkgPCAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNldHRpbmdzOiBpbnZhbGlkIGBsYWJlbERlbnNpdHlgLiBFeHBlY3RpbmcgYSBwb3NpdGl2ZSBudW1iZXIuXCIpO1xuICAgIH1cbiAgICB2YXIgbWluQ2FtZXJhUmF0aW8gPSBzZXR0aW5ncy5taW5DYW1lcmFSYXRpbywgbWF4Q2FtZXJhUmF0aW8gPSBzZXR0aW5ncy5tYXhDYW1lcmFSYXRpbztcbiAgICBpZiAodHlwZW9mIG1pbkNhbWVyYVJhdGlvID09PSBcIm51bWJlclwiICYmIHR5cGVvZiBtYXhDYW1lcmFSYXRpbyA9PT0gXCJudW1iZXJcIiAmJiBtYXhDYW1lcmFSYXRpbyA8IG1pbkNhbWVyYVJhdGlvKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNldHRpbmdzOiBpbnZhbGlkIGNhbWVyYSByYXRpbyBib3VuZGFyaWVzLiBFeHBlY3RpbmcgYG1heENhbWVyYVJhdGlvYCB0byBiZSBncmVhdGVyIHRoYW4gYG1pbkNhbWVyYVJhdGlvYC5cIik7XG4gICAgfVxufVxuZXhwb3J0cy52YWxpZGF0ZVNldHRpbmdzID0gdmFsaWRhdGVTZXR0aW5ncztcbmZ1bmN0aW9uIHJlc29sdmVTZXR0aW5ncyhzZXR0aW5ncykge1xuICAgIHZhciByZXNvbHZlZFNldHRpbmdzID0gKDAsIHV0aWxzXzEuYXNzaWduKSh7fSwgZXhwb3J0cy5ERUZBVUxUX1NFVFRJTkdTLCBzZXR0aW5ncyk7XG4gICAgcmVzb2x2ZWRTZXR0aW5ncy5ub2RlUHJvZ3JhbUNsYXNzZXMgPSAoMCwgdXRpbHNfMS5hc3NpZ24pKHt9LCBleHBvcnRzLkRFRkFVTFRfTk9ERV9QUk9HUkFNX0NMQVNTRVMsIHJlc29sdmVkU2V0dGluZ3Mubm9kZVByb2dyYW1DbGFzc2VzKTtcbiAgICByZXNvbHZlZFNldHRpbmdzLmVkZ2VQcm9ncmFtQ2xhc3NlcyA9ICgwLCB1dGlsc18xLmFzc2lnbikoe30sIGV4cG9ydHMuREVGQVVMVF9FREdFX1BST0dSQU1fQ0xBU1NFUywgcmVzb2x2ZWRTZXR0aW5ncy5lZGdlUHJvZ3JhbUNsYXNzZXMpO1xuICAgIHJldHVybiByZXNvbHZlZFNldHRpbmdzO1xufVxuZXhwb3J0cy5yZXNvbHZlU2V0dGluZ3MgPSByZXNvbHZlU2V0dGluZ3M7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fdmFsdWVzID0gKHRoaXMgJiYgdGhpcy5fX3ZhbHVlcykgfHwgZnVuY3Rpb24obykge1xuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGV4dGVuZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAeW9tZ3VpdGhlcmVhbC9oZWxwZXJzL2V4dGVuZFwiKSk7XG52YXIgY2FtZXJhXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29yZS9jYW1lcmFcIikpO1xudmFyIG1vdXNlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29yZS9jYXB0b3JzL21vdXNlXCIpKTtcbnZhciBxdWFkdHJlZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvcmUvcXVhZHRyZWVcIikpO1xudmFyIHR5cGVzXzEgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG52YXIgbGFiZWxzXzEgPSByZXF1aXJlKFwiLi9jb3JlL2xhYmVsc1wiKTtcbnZhciBzZXR0aW5nc18xID0gcmVxdWlyZShcIi4vc2V0dGluZ3NcIik7XG52YXIgdG91Y2hfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb3JlL2NhcHRvcnMvdG91Y2hcIikpO1xudmFyIG1hdHJpY2VzXzEgPSByZXF1aXJlKFwiLi91dGlscy9tYXRyaWNlc1wiKTtcbnZhciBlZGdlX2NvbGxpc2lvbnNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2VkZ2UtY29sbGlzaW9uc1wiKTtcbi8qKlxuICogQ29uc3RhbnRzLlxuICovXG52YXIgWF9MQUJFTF9NQVJHSU4gPSAxNTA7XG52YXIgWV9MQUJFTF9NQVJHSU4gPSA1MDtcbi8qKlxuICogSW1wb3J0YW50IGZ1bmN0aW9ucy5cbiAqL1xuZnVuY3Rpb24gYXBwbHlOb2RlRGVmYXVsdHMoc2V0dGluZ3MsIGtleSwgZGF0YSkge1xuICAgIGlmICghZGF0YS5oYXNPd25Qcm9wZXJ0eShcInhcIikgfHwgIWRhdGEuaGFzT3duUHJvcGVydHkoXCJ5XCIpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTaWdtYTogY291bGQgbm90IGZpbmQgYSB2YWxpZCBwb3NpdGlvbiAoeCwgeSkgZm9yIG5vZGUgXFxcIlwiLmNvbmNhdChrZXksIFwiXFxcIi4gQWxsIHlvdXIgbm9kZXMgbXVzdCBoYXZlIGEgbnVtYmVyIFxcXCJ4XFxcIiBhbmQgXFxcInlcXFwiLiBNYXliZSB5b3VyIGZvcmdvdCB0byBhcHBseSBhIGxheW91dCBvciB5b3VyIFxcXCJub2RlUmVkdWNlclxcXCIgaXMgbm90IHJldHVybmluZyB0aGUgY29ycmVjdCBkYXRhP1wiKSk7XG4gICAgaWYgKCFkYXRhLmNvbG9yKVxuICAgICAgICBkYXRhLmNvbG9yID0gc2V0dGluZ3MuZGVmYXVsdE5vZGVDb2xvcjtcbiAgICBpZiAoIWRhdGEubGFiZWwgJiYgZGF0YS5sYWJlbCAhPT0gXCJcIilcbiAgICAgICAgZGF0YS5sYWJlbCA9IG51bGw7XG4gICAgaWYgKGRhdGEubGFiZWwgIT09IHVuZGVmaW5lZCAmJiBkYXRhLmxhYmVsICE9PSBudWxsKVxuICAgICAgICBkYXRhLmxhYmVsID0gXCJcIiArIGRhdGEubGFiZWw7XG4gICAgZWxzZVxuICAgICAgICBkYXRhLmxhYmVsID0gbnVsbDtcbiAgICBpZiAoIWRhdGEuc2l6ZSlcbiAgICAgICAgZGF0YS5zaXplID0gMjtcbiAgICBpZiAoIWRhdGEuaGFzT3duUHJvcGVydHkoXCJoaWRkZW5cIikpXG4gICAgICAgIGRhdGEuaGlkZGVuID0gZmFsc2U7XG4gICAgaWYgKCFkYXRhLmhhc093blByb3BlcnR5KFwiaGlnaGxpZ2h0ZWRcIikpXG4gICAgICAgIGRhdGEuaGlnaGxpZ2h0ZWQgPSBmYWxzZTtcbiAgICBpZiAoIWRhdGEuaGFzT3duUHJvcGVydHkoXCJmb3JjZUxhYmVsXCIpKVxuICAgICAgICBkYXRhLmZvcmNlTGFiZWwgPSBmYWxzZTtcbiAgICBpZiAoIWRhdGEudHlwZSB8fCBkYXRhLnR5cGUgPT09IFwiXCIpXG4gICAgICAgIGRhdGEudHlwZSA9IHNldHRpbmdzLmRlZmF1bHROb2RlVHlwZTtcbiAgICBpZiAoIWRhdGEuekluZGV4KVxuICAgICAgICBkYXRhLnpJbmRleCA9IDA7XG4gICAgcmV0dXJuIGRhdGE7XG59XG5mdW5jdGlvbiBhcHBseUVkZ2VEZWZhdWx0cyhzZXR0aW5ncywga2V5LCBkYXRhKSB7XG4gICAgaWYgKCFkYXRhLmNvbG9yKVxuICAgICAgICBkYXRhLmNvbG9yID0gc2V0dGluZ3MuZGVmYXVsdEVkZ2VDb2xvcjtcbiAgICBpZiAoIWRhdGEubGFiZWwpXG4gICAgICAgIGRhdGEubGFiZWwgPSBcIlwiO1xuICAgIGlmICghZGF0YS5zaXplKVxuICAgICAgICBkYXRhLnNpemUgPSAwLjU7XG4gICAgaWYgKCFkYXRhLmhhc093blByb3BlcnR5KFwiaGlkZGVuXCIpKVxuICAgICAgICBkYXRhLmhpZGRlbiA9IGZhbHNlO1xuICAgIGlmICghZGF0YS5oYXNPd25Qcm9wZXJ0eShcImZvcmNlTGFiZWxcIikpXG4gICAgICAgIGRhdGEuZm9yY2VMYWJlbCA9IGZhbHNlO1xuICAgIGlmICghZGF0YS50eXBlIHx8IGRhdGEudHlwZSA9PT0gXCJcIilcbiAgICAgICAgZGF0YS50eXBlID0gc2V0dGluZ3MuZGVmYXVsdEVkZ2VUeXBlO1xuICAgIGlmICghZGF0YS56SW5kZXgpXG4gICAgICAgIGRhdGEuekluZGV4ID0gMDtcbiAgICByZXR1cm4gZGF0YTtcbn1cbi8qKlxuICogTWFpbiBjbGFzcy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7R3JhcGh9ICAgICAgIGdyYXBoICAgICAtIEdyYXBoIHRvIHJlbmRlci5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lciAtIERPTSBjb250YWluZXIgaW4gd2hpY2ggdG8gcmVuZGVyLlxuICogQHBhcmFtIHtvYmplY3R9ICAgICAgc2V0dGluZ3MgIC0gT3B0aW9uYWwgc2V0dGluZ3MuXG4gKi9cbnZhciBTaWdtYSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2lnbWEsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2lnbWEoZ3JhcGgsIGNvbnRhaW5lciwgc2V0dGluZ3MpIHtcbiAgICAgICAgaWYgKHNldHRpbmdzID09PSB2b2lkIDApIHsgc2V0dGluZ3MgPSB7fTsgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5lbGVtZW50cyA9IHt9O1xuICAgICAgICBfdGhpcy5jYW52YXNDb250ZXh0cyA9IHt9O1xuICAgICAgICBfdGhpcy53ZWJHTENvbnRleHRzID0ge307XG4gICAgICAgIF90aGlzLmFjdGl2ZUxpc3RlbmVycyA9IHt9O1xuICAgICAgICBfdGhpcy5xdWFkdHJlZSA9IG5ldyBxdWFkdHJlZV8xLmRlZmF1bHQoKTtcbiAgICAgICAgX3RoaXMubGFiZWxHcmlkID0gbmV3IGxhYmVsc18xLkxhYmVsR3JpZCgpO1xuICAgICAgICBfdGhpcy5ub2RlRGF0YUNhY2hlID0ge307XG4gICAgICAgIF90aGlzLmVkZ2VEYXRhQ2FjaGUgPSB7fTtcbiAgICAgICAgX3RoaXMubm9kZXNXaXRoRm9yY2VkTGFiZWxzID0gW107XG4gICAgICAgIF90aGlzLmVkZ2VzV2l0aEZvcmNlZExhYmVscyA9IFtdO1xuICAgICAgICBfdGhpcy5ub2RlRXh0ZW50ID0geyB4OiBbMCwgMV0sIHk6IFswLCAxXSB9O1xuICAgICAgICBfdGhpcy5tYXRyaXggPSAoMCwgbWF0cmljZXNfMS5pZGVudGl0eSkoKTtcbiAgICAgICAgX3RoaXMuaW52TWF0cml4ID0gKDAsIG1hdHJpY2VzXzEuaWRlbnRpdHkpKCk7XG4gICAgICAgIF90aGlzLmNvcnJlY3Rpb25SYXRpbyA9IDE7XG4gICAgICAgIF90aGlzLmN1c3RvbUJCb3ggPSBudWxsO1xuICAgICAgICBfdGhpcy5ub3JtYWxpemF0aW9uRnVuY3Rpb24gPSAoMCwgdXRpbHNfMS5jcmVhdGVOb3JtYWxpemF0aW9uRnVuY3Rpb24pKHtcbiAgICAgICAgICAgIHg6IFswLCAxXSxcbiAgICAgICAgICAgIHk6IFswLCAxXSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIENhY2hlOlxuICAgICAgICBfdGhpcy5jYW1lcmFTaXplUmF0aW8gPSAxO1xuICAgICAgICAvLyBTdGFydGluZyBkaW1lbnNpb25zIGFuZCBwaXhlbCByYXRpb1xuICAgICAgICBfdGhpcy53aWR0aCA9IDA7XG4gICAgICAgIF90aGlzLmhlaWdodCA9IDA7XG4gICAgICAgIF90aGlzLnBpeGVsUmF0aW8gPSAoMCwgdXRpbHNfMS5nZXRQaXhlbFJhdGlvKSgpO1xuICAgICAgICAvLyBTdGF0ZVxuICAgICAgICBfdGhpcy5kaXNwbGF5ZWRMYWJlbHMgPSBuZXcgU2V0KCk7XG4gICAgICAgIF90aGlzLmhpZ2hsaWdodGVkTm9kZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIF90aGlzLmhvdmVyZWROb2RlID0gbnVsbDtcbiAgICAgICAgX3RoaXMuaG92ZXJlZEVkZ2UgPSBudWxsO1xuICAgICAgICBfdGhpcy5yZW5kZXJGcmFtZSA9IG51bGw7XG4gICAgICAgIF90aGlzLnJlbmRlckhpZ2hsaWdodGVkTm9kZXNGcmFtZSA9IG51bGw7XG4gICAgICAgIF90aGlzLm5lZWRUb1Byb2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMubmVlZFRvU29mdFByb2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuY2hlY2tFZGdlc0V2ZW50c0ZyYW1lID0gbnVsbDtcbiAgICAgICAgLy8gUHJvZ3JhbXNcbiAgICAgICAgX3RoaXMubm9kZVByb2dyYW1zID0ge307XG4gICAgICAgIF90aGlzLm5vZGVIb3ZlclByb2dyYW1zID0ge307XG4gICAgICAgIF90aGlzLmVkZ2VQcm9ncmFtcyA9IHt9O1xuICAgICAgICAvLyBSZXNvbHZpbmcgc2V0dGluZ3NcbiAgICAgICAgX3RoaXMuc2V0dGluZ3MgPSAoMCwgc2V0dGluZ3NfMS5yZXNvbHZlU2V0dGluZ3MpKHNldHRpbmdzKTtcbiAgICAgICAgLy8gVmFsaWRhdGluZ1xuICAgICAgICAoMCwgc2V0dGluZ3NfMS52YWxpZGF0ZVNldHRpbmdzKShfdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgICgwLCB1dGlsc18xLnZhbGlkYXRlR3JhcGgpKGdyYXBoKTtcbiAgICAgICAgaWYgKCEoY29udGFpbmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2lnbWE6IGNvbnRhaW5lciBzaG91bGQgYmUgYW4gaHRtbCBlbGVtZW50LlwiKTtcbiAgICAgICAgLy8gUHJvcGVydGllc1xuICAgICAgICBfdGhpcy5ncmFwaCA9IGdyYXBoO1xuICAgICAgICBfdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgIC8vIEluaXRpYWxpemluZyBjb250ZXh0c1xuICAgICAgICBfdGhpcy5jcmVhdGVXZWJHTENvbnRleHQoXCJlZGdlc1wiLCB7IHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSB9KTtcbiAgICAgICAgX3RoaXMuY3JlYXRlQ2FudmFzQ29udGV4dChcImVkZ2VMYWJlbHNcIik7XG4gICAgICAgIF90aGlzLmNyZWF0ZVdlYkdMQ29udGV4dChcIm5vZGVzXCIpO1xuICAgICAgICBfdGhpcy5jcmVhdGVDYW52YXNDb250ZXh0KFwibGFiZWxzXCIpO1xuICAgICAgICBfdGhpcy5jcmVhdGVDYW52YXNDb250ZXh0KFwiaG92ZXJzXCIpO1xuICAgICAgICBfdGhpcy5jcmVhdGVXZWJHTENvbnRleHQoXCJob3Zlck5vZGVzXCIpO1xuICAgICAgICBfdGhpcy5jcmVhdGVDYW52YXNDb250ZXh0KFwibW91c2VcIik7XG4gICAgICAgIC8vIEJsZW5kaW5nXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBfdGhpcy53ZWJHTENvbnRleHRzKSB7XG4gICAgICAgICAgICB2YXIgZ2wgPSBfdGhpcy53ZWJHTENvbnRleHRzW2tleV07XG4gICAgICAgICAgICBnbC5ibGVuZEZ1bmMoZ2wuT05FLCBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBKTtcbiAgICAgICAgICAgIGdsLmVuYWJsZShnbC5CTEVORCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTG9hZGluZyBwcm9ncmFtc1xuICAgICAgICBmb3IgKHZhciB0eXBlIGluIF90aGlzLnNldHRpbmdzLm5vZGVQcm9ncmFtQ2xhc3Nlcykge1xuICAgICAgICAgICAgdmFyIE5vZGVQcm9ncmFtQ2xhc3MgPSBfdGhpcy5zZXR0aW5ncy5ub2RlUHJvZ3JhbUNsYXNzZXNbdHlwZV07XG4gICAgICAgICAgICBfdGhpcy5ub2RlUHJvZ3JhbXNbdHlwZV0gPSBuZXcgTm9kZVByb2dyYW1DbGFzcyhfdGhpcy53ZWJHTENvbnRleHRzLm5vZGVzLCBfdGhpcyk7XG4gICAgICAgICAgICB2YXIgTm9kZUhvdmVyUHJvZ3JhbSA9IE5vZGVQcm9ncmFtQ2xhc3M7XG4gICAgICAgICAgICBpZiAodHlwZSBpbiBfdGhpcy5zZXR0aW5ncy5ub2RlSG92ZXJQcm9ncmFtQ2xhc3Nlcykge1xuICAgICAgICAgICAgICAgIE5vZGVIb3ZlclByb2dyYW0gPSBfdGhpcy5zZXR0aW5ncy5ub2RlSG92ZXJQcm9ncmFtQ2xhc3Nlc1t0eXBlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLm5vZGVIb3ZlclByb2dyYW1zW3R5cGVdID0gbmV3IE5vZGVIb3ZlclByb2dyYW0oX3RoaXMud2ViR0xDb250ZXh0cy5ob3Zlck5vZGVzLCBfdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgdHlwZSBpbiBfdGhpcy5zZXR0aW5ncy5lZGdlUHJvZ3JhbUNsYXNzZXMpIHtcbiAgICAgICAgICAgIHZhciBFZGdlUHJvZ3JhbUNsYXNzID0gX3RoaXMuc2V0dGluZ3MuZWRnZVByb2dyYW1DbGFzc2VzW3R5cGVdO1xuICAgICAgICAgICAgX3RoaXMuZWRnZVByb2dyYW1zW3R5cGVdID0gbmV3IEVkZ2VQcm9ncmFtQ2xhc3MoX3RoaXMud2ViR0xDb250ZXh0cy5lZGdlcywgX3RoaXMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEluaXRpYWwgcmVzaXplXG4gICAgICAgIF90aGlzLnJlc2l6ZSgpO1xuICAgICAgICAvLyBJbml0aWFsaXppbmcgdGhlIGNhbWVyYVxuICAgICAgICBfdGhpcy5jYW1lcmEgPSBuZXcgY2FtZXJhXzEuZGVmYXVsdCgpO1xuICAgICAgICAvLyBCaW5kaW5nIGNhbWVyYSBldmVudHNcbiAgICAgICAgX3RoaXMuYmluZENhbWVyYUhhbmRsZXJzKCk7XG4gICAgICAgIC8vIEluaXRpYWxpemluZyBjYXB0b3JzXG4gICAgICAgIF90aGlzLm1vdXNlQ2FwdG9yID0gbmV3IG1vdXNlXzEuZGVmYXVsdChfdGhpcy5lbGVtZW50cy5tb3VzZSwgX3RoaXMpO1xuICAgICAgICBfdGhpcy50b3VjaENhcHRvciA9IG5ldyB0b3VjaF8xLmRlZmF1bHQoX3RoaXMuZWxlbWVudHMubW91c2UsIF90aGlzKTtcbiAgICAgICAgLy8gQmluZGluZyBldmVudCBoYW5kbGVyc1xuICAgICAgICBfdGhpcy5iaW5kRXZlbnRIYW5kbGVycygpO1xuICAgICAgICAvLyBCaW5kaW5nIGdyYXBoIGhhbmRsZXJzXG4gICAgICAgIF90aGlzLmJpbmRHcmFwaEhhbmRsZXJzKCk7XG4gICAgICAgIC8vIFRyaWdnZXIgZXZlbnR1YWwgc2V0dGluZ3MtcmVsYXRlZCB0aGluZ3NcbiAgICAgICAgX3RoaXMuaGFuZGxlU2V0dGluZ3NVcGRhdGUoKTtcbiAgICAgICAgLy8gUHJvY2Vzc2luZyBkYXRhIGZvciB0aGUgZmlyc3QgdGltZSAmIHJlbmRlclxuICAgICAgICBfdGhpcy5wcm9jZXNzKCk7XG4gICAgICAgIF90aGlzLnJlbmRlcigpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIEludGVybmFsIG1ldGhvZHMuXG4gICAgICoqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICovXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgZnVuY3Rpb24gdXNlZCB0byBjcmVhdGUgYSBjYW52YXMgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGlkIC0gQ29udGV4dCdzIGlkLlxuICAgICAqIEByZXR1cm4ge1NpZ21hfVxuICAgICAqL1xuICAgIFNpZ21hLnByb3RvdHlwZS5jcmVhdGVDYW52YXMgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9ICgwLCB1dGlsc18xLmNyZWF0ZUVsZW1lbnQpKFwiY2FudmFzXCIsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGNsYXNzOiBcInNpZ21hLVwiLmNvbmNhdChpZCksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2lkXSA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEludGVybmFsIGZ1bmN0aW9uIHVzZWQgdG8gY3JlYXRlIGEgY2FudmFzIGNvbnRleHQgYW5kIGFkZCB0aGUgcmVsZXZhbnRcbiAgICAgKiBET00gZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGlkIC0gQ29udGV4dCdzIGlkLlxuICAgICAqIEByZXR1cm4ge1NpZ21hfVxuICAgICAqL1xuICAgIFNpZ21hLnByb3RvdHlwZS5jcmVhdGVDYW52YXNDb250ZXh0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciBjYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcyhpZCk7XG4gICAgICAgIHZhciBjb250ZXh0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogZmFsc2UsXG4gICAgICAgICAgICBhbnRpYWxpYXM6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHRzW2lkXSA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiwgY29udGV4dE9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEludGVybmFsIGZ1bmN0aW9uIHVzZWQgdG8gY3JlYXRlIGEgY2FudmFzIGNvbnRleHQgYW5kIGFkZCB0aGUgcmVsZXZhbnRcbiAgICAgKiBET00gZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICBpZCAgICAgIC0gQ29udGV4dCdzIGlkLlxuICAgICAqIEBwYXJhbSAge29iamVjdD99IG9wdGlvbnMgLSAjZ2V0Q29udGV4dCBwYXJhbXMgdG8gb3ZlcnJpZGUgKG9wdGlvbmFsKVxuICAgICAqIEByZXR1cm4ge1NpZ21hfVxuICAgICAqL1xuICAgIFNpZ21hLnByb3RvdHlwZS5jcmVhdGVXZWJHTENvbnRleHQgPSBmdW5jdGlvbiAoaWQsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuY3JlYXRlQ2FudmFzKGlkKTtcbiAgICAgICAgdmFyIGNvbnRleHRPcHRpb25zID0gX19hc3NpZ24oeyBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IGZhbHNlLCBhbnRpYWxpYXM6IGZhbHNlIH0sIChvcHRpb25zIHx8IHt9KSk7XG4gICAgICAgIHZhciBjb250ZXh0O1xuICAgICAgICAvLyBGaXJzdCB3ZSB0cnkgd2ViZ2wyIGZvciBhbiBlYXN5IHBlcmZvcm1hbmNlIGJvb3N0XG4gICAgICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsMlwiLCBjb250ZXh0T3B0aW9ucyk7XG4gICAgICAgIC8vIEVsc2Ugd2UgZmFsbCBiYWNrIHRvIHdlYmdsXG4gICAgICAgIGlmICghY29udGV4dClcbiAgICAgICAgICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIsIGNvbnRleHRPcHRpb25zKTtcbiAgICAgICAgLy8gRWRnZSwgSSBhbSBsb29raW5nIHJpZ2h0IGF0IHlvdS4uLlxuICAgICAgICBpZiAoIWNvbnRleHQpXG4gICAgICAgICAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCJleHBlcmltZW50YWwtd2ViZ2xcIiwgY29udGV4dE9wdGlvbnMpO1xuICAgICAgICB0aGlzLndlYkdMQ29udGV4dHNbaWRdID0gY29udGV4dDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNZXRob2QgYmluZGluZyBjYW1lcmEgaGFuZGxlcnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTaWdtYX1cbiAgICAgKi9cbiAgICBTaWdtYS5wcm90b3R5cGUuYmluZENhbWVyYUhhbmRsZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmFjdGl2ZUxpc3RlbmVycy5jYW1lcmEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5fc2NoZWR1bGVSZWZyZXNoKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2FtZXJhLm9uKFwidXBkYXRlZFwiLCB0aGlzLmFjdGl2ZUxpc3RlbmVycy5jYW1lcmEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1ldGhvZCB0aGF0IGNoZWNrcyB3aGV0aGVyIG9yIG5vdCBhIG5vZGUgY29sbGlkZXMgd2l0aCBhIGdpdmVuIHBvc2l0aW9uLlxuICAgICAqL1xuICAgIFNpZ21hLnByb3RvdHlwZS5tb3VzZUlzT25Ob2RlID0gZnVuY3Rpb24gKF9hLCBfYiwgc2l6ZSkge1xuICAgICAgICB2YXIgeCA9IF9hLngsIHkgPSBfYS55O1xuICAgICAgICB2YXIgbm9kZVggPSBfYi54LCBub2RlWSA9IF9iLnk7XG4gICAgICAgIHJldHVybiAoeCA+IG5vZGVYIC0gc2l6ZSAmJlxuICAgICAgICAgICAgeCA8IG5vZGVYICsgc2l6ZSAmJlxuICAgICAgICAgICAgeSA+IG5vZGVZIC0gc2l6ZSAmJlxuICAgICAgICAgICAgeSA8IG5vZGVZICsgc2l6ZSAmJlxuICAgICAgICAgICAgTWF0aC5zcXJ0KE1hdGgucG93KHggLSBub2RlWCwgMikgKyBNYXRoLnBvdyh5IC0gbm9kZVksIDIpKSA8IHNpemUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTWV0aG9kIHRoYXQgcmV0dXJucyBhbGwgbm9kZXMgaW4gcXVhZCBhdCBhIGdpdmVuIHBvc2l0aW9uLlxuICAgICAqL1xuICAgIFNpZ21hLnByb3RvdHlwZS5nZXRRdWFkTm9kZXMgPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgdmFyIG1vdXNlR3JhcGhQb3NpdGlvbiA9IHRoaXMudmlld3BvcnRUb0ZyYW1lZEdyYXBoKHBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVhZHRyZWUucG9pbnQobW91c2VHcmFwaFBvc2l0aW9uLngsIDEgLSBtb3VzZUdyYXBoUG9zaXRpb24ueSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNZXRob2QgdGhhdCByZXR1cm5zIHRoZSBjbG9zZXN0IG5vZGUgdG8gYSBnaXZlbiBwb3NpdGlvbi5cbiAgICAgKi9cbiAgICBTaWdtYS5wcm90b3R5cGUuZ2V0Tm9kZUF0UG9zaXRpb24gPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgdmFyIHggPSBwb3NpdGlvbi54LCB5ID0gcG9zaXRpb24ueTtcbiAgICAgICAgdmFyIHF1YWROb2RlcyA9IHRoaXMuZ2V0UXVhZE5vZGVzKHBvc2l0aW9uKTtcbiAgICAgICAgLy8gV2Ugd2lsbCBob3ZlciB0aGUgbm9kZSB3aG9zZSBjZW50ZXIgaXMgY2xvc2VzdCB0byBtb3VzZVxuICAgICAgICB2YXIgbWluRGlzdGFuY2UgPSBJbmZpbml0eSwgbm9kZUF0UG9zaXRpb24gPSBudWxsO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHF1YWROb2Rlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gcXVhZE5vZGVzW2ldO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLm5vZGVEYXRhQ2FjaGVbbm9kZV07XG4gICAgICAgICAgICB2YXIgbm9kZVBvc2l0aW9uID0gdGhpcy5mcmFtZWRHcmFwaFRvVmlld3BvcnQoZGF0YSk7XG4gICAgICAgICAgICB2YXIgc2l6ZSA9IHRoaXMuc2NhbGVTaXplKGRhdGEuc2l6ZSk7XG4gICAgICAgICAgICBpZiAoIWRhdGEuaGlkZGVuICYmIHRoaXMubW91c2VJc09uTm9kZShwb3NpdGlvbiwgbm9kZVBvc2l0aW9uLCBzaXplKSkge1xuICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChNYXRoLnBvdyh4IC0gbm9kZVBvc2l0aW9uLngsIDIpICsgTWF0aC5wb3coeSAtIG5vZGVQb3NpdGlvbi55LCAyKSk7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogc29ydCBieSBtaW4gc2l6ZSBhbHNvIGZvciBjYXNlcyB3aGVyZSBjZW50ZXIgaXMgdGhlIHNhbWVcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCBtaW5EaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgICAgICBtaW5EaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgICBub2RlQXRQb3NpdGlvbiA9IG5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlQXRQb3NpdGlvbjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1ldGhvZCBiaW5kaW5nIGV2ZW50IGhhbmRsZXJzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7U2lnbWF9XG4gICAgICovXG4gICAgU2lnbWEucHJvdG90eXBlLmJpbmRFdmVudEhhbmRsZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBIYW5kbGluZyB3aW5kb3cgcmVzaXplXG4gICAgICAgIHRoaXMuYWN0aXZlTGlzdGVuZXJzLmhhbmRsZVJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLm5lZWRUb1NvZnRQcm9jZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgIF90aGlzLl9zY2hlZHVsZVJlZnJlc2goKTtcbiAgICAgICAgfTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5hY3RpdmVMaXN0ZW5lcnMuaGFuZGxlUmVzaXplKTtcbiAgICAgICAgLy8gSGFuZGxpbmcgbW91c2UgbW92ZVxuICAgICAgICB0aGlzLmFjdGl2ZUxpc3RlbmVycy5oYW5kbGVNb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBiYXNlRXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgZXZlbnQ6IGUsXG4gICAgICAgICAgICAgICAgcHJldmVudFNpZ21hRGVmYXVsdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnRTaWdtYURlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBub2RlVG9Ib3ZlciA9IF90aGlzLmdldE5vZGVBdFBvc2l0aW9uKGUpO1xuICAgICAgICAgICAgaWYgKG5vZGVUb0hvdmVyICYmIF90aGlzLmhvdmVyZWROb2RlICE9PSBub2RlVG9Ib3ZlciAmJiAhX3RoaXMubm9kZURhdGFDYWNoZVtub2RlVG9Ib3Zlcl0uaGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgLy8gSGFuZGxpbmcgcGFzc2luZyBmcm9tIG9uZSBub2RlIHRvIHRoZSBvdGhlciBkaXJlY3RseVxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5ob3ZlcmVkTm9kZSlcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW1pdChcImxlYXZlTm9kZVwiLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgYmFzZUV2ZW50KSwgeyBub2RlOiBfdGhpcy5ob3ZlcmVkTm9kZSB9KSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuaG92ZXJlZE5vZGUgPSBub2RlVG9Ib3ZlcjtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KFwiZW50ZXJOb2RlXCIsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBiYXNlRXZlbnQpLCB7IG5vZGU6IG5vZGVUb0hvdmVyIH0pKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zY2hlZHVsZUhpZ2hsaWdodGVkTm9kZXNSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDaGVja2luZyBpZiB0aGUgaG92ZXJlZCBub2RlIGlzIHN0aWxsIGhvdmVyZWRcbiAgICAgICAgICAgIGlmIChfdGhpcy5ob3ZlcmVkTm9kZSkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gX3RoaXMubm9kZURhdGFDYWNoZVtfdGhpcy5ob3ZlcmVkTm9kZV07XG4gICAgICAgICAgICAgICAgdmFyIHBvcyA9IF90aGlzLmZyYW1lZEdyYXBoVG9WaWV3cG9ydChkYXRhKTtcbiAgICAgICAgICAgICAgICB2YXIgc2l6ZSA9IF90aGlzLnNjYWxlU2l6ZShkYXRhLnNpemUpO1xuICAgICAgICAgICAgICAgIGlmICghX3RoaXMubW91c2VJc09uTm9kZShlLCBwb3MsIHNpemUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlID0gX3RoaXMuaG92ZXJlZE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmhvdmVyZWROb2RlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW1pdChcImxlYXZlTm9kZVwiLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgYmFzZUV2ZW50KSwgeyBub2RlOiBub2RlIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2NoZWR1bGVIaWdobGlnaHRlZE5vZGVzUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoX3RoaXMuc2V0dGluZ3MuZW5hYmxlRWRnZUhvdmVyRXZlbnRzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2hlY2tFZGdlSG92ZXJFdmVudHMoYmFzZUV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKF90aGlzLnNldHRpbmdzLmVuYWJsZUVkZ2VIb3ZlckV2ZW50cyA9PT0gXCJkZWJvdW5jZVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5jaGVja0VkZ2VzRXZlbnRzRnJhbWUpXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNoZWNrRWRnZXNFdmVudHNGcmFtZSA9ICgwLCB1dGlsc18xLnJlcXVlc3RGcmFtZSkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2hlY2tFZGdlSG92ZXJFdmVudHMoYmFzZUV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNoZWNrRWRnZXNFdmVudHNGcmFtZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBIYW5kbGluZyBjbGlja1xuICAgICAgICB2YXIgY3JlYXRlTW91c2VMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudFR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciBiYXNlRXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiBlLFxuICAgICAgICAgICAgICAgICAgICBwcmV2ZW50U2lnbWFEZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnRTaWdtYURlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciBpc0Zha2VTaWdtYU1vdXNlRXZlbnQgPSBlLm9yaWdpbmFsLmlzRmFrZVNpZ21hTW91c2VFdmVudDtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZUF0UG9zaXRpb24gPSBpc0Zha2VTaWdtYU1vdXNlRXZlbnQgPyBfdGhpcy5nZXROb2RlQXRQb3NpdGlvbihlKSA6IF90aGlzLmhvdmVyZWROb2RlO1xuICAgICAgICAgICAgICAgIGlmIChub2RlQXRQb3NpdGlvbilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmVtaXQoXCJcIi5jb25jYXQoZXZlbnRUeXBlLCBcIk5vZGVcIiksIF9fYXNzaWduKF9fYXNzaWduKHt9LCBiYXNlRXZlbnQpLCB7IG5vZGU6IG5vZGVBdFBvc2l0aW9uIH0pKTtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRUeXBlID09PSBcIndoZWVsXCIgPyBfdGhpcy5zZXR0aW5ncy5lbmFibGVFZGdlV2hlZWxFdmVudHMgOiBfdGhpcy5zZXR0aW5ncy5lbmFibGVFZGdlQ2xpY2tFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVkZ2UgPSBfdGhpcy5nZXRFZGdlQXRQb2ludChlLngsIGUueSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlZGdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmVtaXQoXCJcIi5jb25jYXQoZXZlbnRUeXBlLCBcIkVkZ2VcIiksIF9fYXNzaWduKF9fYXNzaWduKHt9LCBiYXNlRXZlbnQpLCB7IGVkZ2U6IGVkZ2UgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuZW1pdChcIlwiLmNvbmNhdChldmVudFR5cGUsIFwiU3RhZ2VcIiksIGJhc2VFdmVudCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmFjdGl2ZUxpc3RlbmVycy5oYW5kbGVDbGljayA9IGNyZWF0ZU1vdXNlTGlzdGVuZXIoXCJjbGlja1wiKTtcbiAgICAgICAgdGhpcy5hY3RpdmVMaXN0ZW5lcnMuaGFuZGxlUmlnaHRDbGljayA9IGNyZWF0ZU1vdXNlTGlzdGVuZXIoXCJyaWdodENsaWNrXCIpO1xuICAgICAgICB0aGlzLmFjdGl2ZUxpc3RlbmVycy5oYW5kbGVEb3VibGVDbGljayA9IGNyZWF0ZU1vdXNlTGlzdGVuZXIoXCJkb3VibGVDbGlja1wiKTtcbiAgICAgICAgdGhpcy5hY3RpdmVMaXN0ZW5lcnMuaGFuZGxlV2hlZWwgPSBjcmVhdGVNb3VzZUxpc3RlbmVyKFwid2hlZWxcIik7XG4gICAgICAgIHRoaXMuYWN0aXZlTGlzdGVuZXJzLmhhbmRsZURvd24gPSBjcmVhdGVNb3VzZUxpc3RlbmVyKFwiZG93blwiKTtcbiAgICAgICAgdGhpcy5tb3VzZUNhcHRvci5vbihcIm1vdXNlbW92ZVwiLCB0aGlzLmFjdGl2ZUxpc3RlbmVycy5oYW5kbGVNb3ZlKTtcbiAgICAgICAgdGhpcy5tb3VzZUNhcHRvci5vbihcImNsaWNrXCIsIHRoaXMuYWN0aXZlTGlzdGVuZXJzLmhhbmRsZUNsaWNrKTtcbiAgICAgICAgdGhpcy5tb3VzZUNhcHRvci5vbihcInJpZ2h0Q2xpY2tcIiwgdGhpcy5hY3RpdmVMaXN0ZW5lcnMuaGFuZGxlUmlnaHRDbGljayk7XG4gICAgICAgIHRoaXMubW91c2VDYXB0b3Iub24oXCJkb3VibGVDbGlja1wiLCB0aGlzLmFjdGl2ZUxpc3RlbmVycy5oYW5kbGVEb3VibGVDbGljayk7XG4gICAgICAgIHRoaXMubW91c2VDYXB0b3Iub24oXCJ3aGVlbFwiLCB0aGlzLmFjdGl2ZUxpc3RlbmVycy5oYW5kbGVXaGVlbCk7XG4gICAgICAgIHRoaXMubW91c2VDYXB0b3Iub24oXCJtb3VzZWRvd25cIiwgdGhpcy5hY3RpdmVMaXN0ZW5lcnMuaGFuZGxlRG93bik7XG4gICAgICAgIC8vIFRPRE9cbiAgICAgICAgLy8gRGVhbCB3aXRoIFRvdWNoIGNhcHRvciBldmVudHNcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNZXRob2QgYmluZGluZyBncmFwaCBoYW5kbGVyc1xuICAgICAqXG4gICAgICogQHJldHVybiB7U2lnbWF9XG4gICAgICovXG4gICAgU2lnbWEucHJvdG90eXBlLmJpbmRHcmFwaEhhbmRsZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZ3JhcGggPSB0aGlzLmdyYXBoO1xuICAgICAgICB0aGlzLmFjdGl2ZUxpc3RlbmVycy5ncmFwaFVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLm5lZWRUb1Byb2Nlc3MgPSB0cnVlO1xuICAgICAgICAgICAgX3RoaXMuX3NjaGVkdWxlUmVmcmVzaCgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmFjdGl2ZUxpc3RlbmVycy5zb2Z0R3JhcGhVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5uZWVkVG9Tb2Z0UHJvY2VzcyA9IHRydWU7XG4gICAgICAgICAgICBfdGhpcy5fc2NoZWR1bGVSZWZyZXNoKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYWN0aXZlTGlzdGVuZXJzLmRyb3BOb2RlR3JhcGhVcGRhdGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZGVsZXRlIF90aGlzLm5vZGVEYXRhQ2FjaGVbZS5rZXldO1xuICAgICAgICAgICAgaWYgKF90aGlzLmhvdmVyZWROb2RlID09PSBlLmtleSlcbiAgICAgICAgICAgICAgICBfdGhpcy5ob3ZlcmVkTm9kZSA9IG51bGw7XG4gICAgICAgICAgICBfdGhpcy5hY3RpdmVMaXN0ZW5lcnMuZ3JhcGhVcGRhdGUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hY3RpdmVMaXN0ZW5lcnMuZHJvcEVkZ2VHcmFwaFVwZGF0ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBkZWxldGUgX3RoaXMuZWRnZURhdGFDYWNoZVtlLmtleV07XG4gICAgICAgICAgICBpZiAoX3RoaXMuaG92ZXJlZEVkZ2UgPT09IGUua2V5KVxuICAgICAgICAgICAgICAgIF90aGlzLmhvdmVyZWRFZGdlID0gbnVsbDtcbiAgICAgICAgICAgIF90aGlzLmFjdGl2ZUxpc3RlbmVycy5ncmFwaFVwZGF0ZSgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmFjdGl2ZUxpc3RlbmVycy5jbGVhckVkZ2VzR3JhcGhVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5lZGdlRGF0YUNhY2hlID0ge307XG4gICAgICAgICAgICBfdGhpcy5ob3ZlcmVkRWRnZSA9IG51bGw7XG4gICAgICAgICAgICBfdGhpcy5hY3RpdmVMaXN0ZW5lcnMuZ3JhcGhVcGRhdGUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hY3RpdmVMaXN0ZW5lcnMuY2xlYXJHcmFwaFVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLm5vZGVEYXRhQ2FjaGUgPSB7fTtcbiAgICAgICAgICAgIF90aGlzLmhvdmVyZWROb2RlID0gbnVsbDtcbiAgICAgICAgICAgIF90aGlzLmFjdGl2ZUxpc3RlbmVycy5jbGVhckVkZ2VzR3JhcGhVcGRhdGUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgZ3JhcGgub24oXCJub2RlQWRkZWRcIiwgdGhpcy5hY3RpdmVMaXN0ZW5lcnMuZ3JhcGhVcGRhdGUpO1xuICAgICAgICBncmFwaC5vbihcIm5vZGVEcm9wcGVkXCIsIHRoaXMuYWN0aXZlTGlzdGVuZXJzLmRyb3BOb2RlR3JhcGhVcGRhdGUpO1xuICAgICAgICBncmFwaC5vbihcIm5vZGVBdHRyaWJ1dGVzVXBkYXRlZFwiLCB0aGlzLmFjdGl2ZUxpc3RlbmVycy5zb2Z0R3JhcGhVcGRhdGUpO1xuICAgICAgICBncmFwaC5vbihcImVhY2hOb2RlQXR0cmlidXRlc1VwZGF0ZWRcIiwgdGhpcy5hY3RpdmVMaXN0ZW5lcnMuZ3JhcGhVcGRhdGUpO1xuICAgICAgICBncmFwaC5vbihcImVkZ2VBZGRlZFwiLCB0aGlzLmFjdGl2ZUxpc3RlbmVycy5ncmFwaFVwZGF0ZSk7XG4gICAgICAgIGdyYXBoLm9uKFwiZWRnZURyb3BwZWRcIiwgdGhpcy5hY3RpdmVMaXN0ZW5lcnMuZHJvcEVkZ2VHcmFwaFVwZGF0ZSk7XG4gICAgICAgIGdyYXBoLm9uKFwiZWRnZUF0dHJpYnV0ZXNVcGRhdGVkXCIsIHRoaXMuYWN0aXZlTGlzdGVuZXJzLnNvZnRHcmFwaFVwZGF0ZSk7XG4gICAgICAgIGdyYXBoLm9uKFwiZWFjaEVkZ2VBdHRyaWJ1dGVzVXBkYXRlZFwiLCB0aGlzLmFjdGl2ZUxpc3RlbmVycy5ncmFwaFVwZGF0ZSk7XG4gICAgICAgIGdyYXBoLm9uKFwiZWRnZXNDbGVhcmVkXCIsIHRoaXMuYWN0aXZlTGlzdGVuZXJzLmNsZWFyRWRnZXNHcmFwaFVwZGF0ZSk7XG4gICAgICAgIGdyYXBoLm9uKFwiY2xlYXJlZFwiLCB0aGlzLmFjdGl2ZUxpc3RlbmVycy5jbGVhckdyYXBoVXBkYXRlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNZXRob2QgdXNlZCB0byB1bmJpbmQgaGFuZGxlcnMgZnJvbSB0aGUgZ3JhcGguXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt1bmRlZmluZWR9XG4gICAgICovXG4gICAgU2lnbWEucHJvdG90eXBlLnVuYmluZEdyYXBoSGFuZGxlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBncmFwaCA9IHRoaXMuZ3JhcGg7XG4gICAgICAgIGdyYXBoLnJlbW92ZUxpc3RlbmVyKFwibm9kZUFkZGVkXCIsIHRoaXMuYWN0aXZlTGlzdGVuZXJzLmdyYXBoVXBkYXRlKTtcbiAgICAgICAgZ3JhcGgucmVtb3ZlTGlzdGVuZXIoXCJub2RlRHJvcHBlZFwiLCB0aGlzLmFjdGl2ZUxpc3RlbmVycy5kcm9wTm9kZUdyYXBoVXBkYXRlKTtcbiAgICAgICAgZ3JhcGgucmVtb3ZlTGlzdGVuZXIoXCJub2RlQXR0cmlidXRlc1VwZGF0ZWRcIiwgdGhpcy5hY3RpdmVMaXN0ZW5lcnMuc29mdEdyYXBoVXBkYXRlKTtcbiAgICAgICAgZ3JhcGgucmVtb3ZlTGlzdGVuZXIoXCJlYWNoTm9kZUF0dHJpYnV0ZXNVcGRhdGVkXCIsIHRoaXMuYWN0aXZlTGlzdGVuZXJzLmdyYXBoVXBkYXRlKTtcbiAgICAgICAgZ3JhcGgucmVtb3ZlTGlzdGVuZXIoXCJlZGdlQWRkZWRcIiwgdGhpcy5hY3RpdmVMaXN0ZW5lcnMuZ3JhcGhVcGRhdGUpO1xuICAgICAgICBncmFwaC5yZW1vdmVMaXN0ZW5lcihcImVkZ2VEcm9wcGVkXCIsIHRoaXMuYWN0aXZlTGlzdGVuZXJzLmRyb3BFZGdlR3JhcGhVcGRhdGUpO1xuICAgICAgICBncmFwaC5yZW1vdmVMaXN0ZW5lcihcImVkZ2VBdHRyaWJ1dGVzVXBkYXRlZFwiLCB0aGlzLmFjdGl2ZUxpc3RlbmVycy5zb2Z0R3JhcGhVcGRhdGUpO1xuICAgICAgICBncmFwaC5yZW1vdmVMaXN0ZW5lcihcImVhY2hFZGdlQXR0cmlidXRlc1VwZGF0ZWRcIiwgdGhpcy5hY3RpdmVMaXN0ZW5lcnMuZ3JhcGhVcGRhdGUpO1xuICAgICAgICBncmFwaC5yZW1vdmVMaXN0ZW5lcihcImVkZ2VzQ2xlYXJlZFwiLCB0aGlzLmFjdGl2ZUxpc3RlbmVycy5jbGVhckVkZ2VzR3JhcGhVcGRhdGUpO1xuICAgICAgICBncmFwaC5yZW1vdmVMaXN0ZW5lcihcImNsZWFyZWRcIiwgdGhpcy5hY3RpdmVMaXN0ZW5lcnMuY2xlYXJHcmFwaFVwZGF0ZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNZXRob2QgZGVhbGluZyB3aXRoIFwibGVhdmVFZGdlXCIgYW5kIFwiZW50ZXJFZGdlXCIgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7U2lnbWF9XG4gICAgICovXG4gICAgU2lnbWEucHJvdG90eXBlLmNoZWNrRWRnZUhvdmVyRXZlbnRzID0gZnVuY3Rpb24gKHBheWxvYWQpIHtcbiAgICAgICAgdmFyIGVkZ2VUb0hvdmVyID0gdGhpcy5ob3ZlcmVkTm9kZSA/IG51bGwgOiB0aGlzLmdldEVkZ2VBdFBvaW50KHBheWxvYWQuZXZlbnQueCwgcGF5bG9hZC5ldmVudC55KTtcbiAgICAgICAgaWYgKGVkZ2VUb0hvdmVyICE9PSB0aGlzLmhvdmVyZWRFZGdlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ob3ZlcmVkRWRnZSlcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJsZWF2ZUVkZ2VcIiwgX19hc3NpZ24oX19hc3NpZ24oe30sIHBheWxvYWQpLCB7IGVkZ2U6IHRoaXMuaG92ZXJlZEVkZ2UgfSkpO1xuICAgICAgICAgICAgaWYgKGVkZ2VUb0hvdmVyKVxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcImVudGVyRWRnZVwiLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcGF5bG9hZCksIHsgZWRnZTogZWRnZVRvSG92ZXIgfSkpO1xuICAgICAgICAgICAgdGhpcy5ob3ZlcmVkRWRnZSA9IGVkZ2VUb0hvdmVyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTWV0aG9kIGxvb2tpbmcgZm9yIGFuIGVkZ2UgY29sbGlkaW5nIHdpdGggYSBnaXZlbiBwb2ludCBhdCAoeCwgeSkuIFJldHVybnNcbiAgICAgKiB0aGUga2V5IG9mIHRoZSBlZGdlIGlmIGFueSwgb3IgbnVsbCBlbHNlLlxuICAgICAqL1xuICAgIFNpZ21hLnByb3RvdHlwZS5nZXRFZGdlQXRQb2ludCA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2IgPSB0aGlzLCBlZGdlRGF0YUNhY2hlID0gX2IuZWRnZURhdGFDYWNoZSwgbm9kZURhdGFDYWNoZSA9IF9iLm5vZGVEYXRhQ2FjaGU7XG4gICAgICAgIC8vIENoZWNrIGZpcnN0IHRoYXQgcGl4ZWwgaXMgY29sb3JlZDpcbiAgICAgICAgLy8gTm90ZSB0aGF0IG1vdXNlIHBvc2l0aW9ucyBtdXN0IGJlIGNvcnJlY3RlZCBieSBwaXhlbCByYXRpbyB0byBjb3JyZWN0bHlcbiAgICAgICAgLy8gaW5kZXggdGhlIGRyYXdpbmcgYnVmZmVyLlxuICAgICAgICBpZiAoISgwLCBlZGdlX2NvbGxpc2lvbnNfMS5pc1BpeGVsQ29sb3JlZCkodGhpcy53ZWJHTENvbnRleHRzLmVkZ2VzLCB4ICogdGhpcy5waXhlbFJhdGlvLCB5ICogdGhpcy5waXhlbFJhdGlvKSlcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAvLyBDaGVjayBmb3IgZWFjaCBlZGdlIGlmIGl0IGNvbGxpZGVzIHdpdGggdGhlIHBvaW50OlxuICAgICAgICB2YXIgX2MgPSB0aGlzLnZpZXdwb3J0VG9HcmFwaCh7IHg6IHgsIHk6IHkgfSksIGdyYXBoWCA9IF9jLngsIGdyYXBoWSA9IF9jLnk7XG4gICAgICAgIC8vIFRvIHRyYW5zbGF0ZSBlZGdlIHRoaWNrbmVzc2VzIHRvIHRoZSBncmFwaCBzeXN0ZW0sIHdlIG9ic2VydmUgYnkgaG93IG11Y2hcbiAgICAgICAgLy8gdGhlIGxlbmd0aCBvZiBhIG5vbi1udWxsIGVkZ2UgaXMgdHJhbnNmb3JtZWQgdG8gYmV0d2VlbiB0aGUgZ3JhcGggc3lzdGVtXG4gICAgICAgIC8vIGFuZCB0aGUgdmlld3BvcnQgc3lzdGVtOlxuICAgICAgICB2YXIgdHJhbnNmb3JtYXRpb25SYXRpbyA9IDA7XG4gICAgICAgIHRoaXMuZ3JhcGguc29tZUVkZ2UoZnVuY3Rpb24gKGtleSwgXywgc291cmNlSWQsIHRhcmdldElkLCBfYSwgX2IpIHtcbiAgICAgICAgICAgIHZhciB4cyA9IF9hLngsIHlzID0gX2EueTtcbiAgICAgICAgICAgIHZhciB4dCA9IF9iLngsIHl0ID0gX2IueTtcbiAgICAgICAgICAgIGlmIChlZGdlRGF0YUNhY2hlW2tleV0uaGlkZGVuIHx8IG5vZGVEYXRhQ2FjaGVbc291cmNlSWRdLmhpZGRlbiB8fCBub2RlRGF0YUNhY2hlW3RhcmdldElkXS5oaWRkZW4pXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKHhzICE9PSB4dCB8fCB5cyAhPT0geXQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZ3JhcGhMZW5ndGggPSBNYXRoLnNxcnQoTWF0aC5wb3coeHQgLSB4cywgMikgKyBNYXRoLnBvdyh5dCAtIHlzLCAyKSk7XG4gICAgICAgICAgICAgICAgdmFyIF9jID0gX3RoaXMuZ3JhcGhUb1ZpZXdwb3J0KHsgeDogeHMsIHk6IHlzIH0pLCB2cF94cyA9IF9jLngsIHZwX3lzID0gX2MueTtcbiAgICAgICAgICAgICAgICB2YXIgX2QgPSBfdGhpcy5ncmFwaFRvVmlld3BvcnQoeyB4OiB4dCwgeTogeXQgfSksIHZwX3h0ID0gX2QueCwgdnBfeXQgPSBfZC55O1xuICAgICAgICAgICAgICAgIHZhciB2aWV3cG9ydExlbmd0aCA9IE1hdGguc3FydChNYXRoLnBvdyh2cF94dCAtIHZwX3hzLCAyKSArIE1hdGgucG93KHZwX3l0IC0gdnBfeXMsIDIpKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1hdGlvblJhdGlvID0gZ3JhcGhMZW5ndGggLyB2aWV3cG9ydExlbmd0aDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIElmIG5vIG5vbi1udWxsIGVkZ2UgaGFzIGJlZW4gZm91bmQsIHJldHVybiBudWxsOlxuICAgICAgICBpZiAoIXRyYW5zZm9ybWF0aW9uUmF0aW8pXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgLy8gTm93IHdlIGNhbiBsb29rIGZvciBtYXRjaGluZyBlZGdlczpcbiAgICAgICAgdmFyIGVkZ2VzID0gdGhpcy5ncmFwaC5maWx0ZXJFZGdlcyhmdW5jdGlvbiAoa2V5LCBlZGdlQXR0cmlidXRlcywgc291cmNlSWQsIHRhcmdldElkLCBzb3VyY2VQb3NpdGlvbiwgdGFyZ2V0UG9zaXRpb24pIHtcbiAgICAgICAgICAgIGlmIChlZGdlRGF0YUNhY2hlW2tleV0uaGlkZGVuIHx8IG5vZGVEYXRhQ2FjaGVbc291cmNlSWRdLmhpZGRlbiB8fCBub2RlRGF0YUNhY2hlW3RhcmdldElkXS5oaWRkZW4pXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKCgwLCBlZGdlX2NvbGxpc2lvbnNfMS5kb0VkZ2VDb2xsaWRlV2l0aFBvaW50KShncmFwaFgsIGdyYXBoWSwgc291cmNlUG9zaXRpb24ueCwgc291cmNlUG9zaXRpb24ueSwgdGFyZ2V0UG9zaXRpb24ueCwgdGFyZ2V0UG9zaXRpb24ueSwgXG4gICAgICAgICAgICAvLyBBZGFwdCB0aGUgZWRnZSBzaXplIHRvIHRoZSB6b29tIHJhdGlvOlxuICAgICAgICAgICAgKGVkZ2VEYXRhQ2FjaGVba2V5XS5zaXplICogdHJhbnNmb3JtYXRpb25SYXRpbykgLyBfdGhpcy5jYW1lcmFTaXplUmF0aW8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZWRnZXMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vIG5vIGVkZ2VzIGZvdW5kXG4gICAgICAgIC8vIGlmIG5vbmUgb2YgdGhlIGVkZ2VzIGhhdmUgYSB6SW5kZXgsIHNlbGVjdGVkIHRoZSBtb3N0IHJlY2VudGx5IGNyZWF0ZWQgb25lIHRvIG1hdGNoIHRoZSByZW5kZXJpbmcgb3JkZXJcbiAgICAgICAgdmFyIHNlbGVjdGVkRWRnZSA9IGVkZ2VzW2VkZ2VzLmxlbmd0aCAtIDFdO1xuICAgICAgICAvLyBvdGhlcndpc2Ugc2VsZWN0IGVkZ2Ugd2l0aCBoaWdoZXN0IHpJbmRleFxuICAgICAgICB2YXIgaGlnaGVzdFpJbmRleCA9IC1JbmZpbml0eTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIGVkZ2VzXzEgPSBfX3ZhbHVlcyhlZGdlcyksIGVkZ2VzXzFfMSA9IGVkZ2VzXzEubmV4dCgpOyAhZWRnZXNfMV8xLmRvbmU7IGVkZ2VzXzFfMSA9IGVkZ2VzXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVkZ2UgPSBlZGdlc18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIHpJbmRleCA9IHRoaXMuZ3JhcGguZ2V0RWRnZUF0dHJpYnV0ZShlZGdlLCBcInpJbmRleFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoekluZGV4ID49IGhpZ2hlc3RaSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRFZGdlID0gZWRnZTtcbiAgICAgICAgICAgICAgICAgICAgaGlnaGVzdFpJbmRleCA9IHpJbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChlZGdlc18xXzEgJiYgIWVkZ2VzXzFfMS5kb25lICYmIChfYSA9IGVkZ2VzXzEucmV0dXJuKSkgX2EuY2FsbChlZGdlc18xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRFZGdlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTWV0aG9kIHVzZWQgdG8gcHJvY2VzcyB0aGUgd2hvbGUgZ3JhcGgncyBkYXRhLlxuICAgICAqXG4gICAgICogQHJldHVybiB7U2lnbWF9XG4gICAgICovXG4gICAgU2lnbWEucHJvdG90eXBlLnByb2Nlc3MgPSBmdW5jdGlvbiAoa2VlcEFycmF5cykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoa2VlcEFycmF5cyA9PT0gdm9pZCAwKSB7IGtlZXBBcnJheXMgPSBmYWxzZTsgfVxuICAgICAgICB2YXIgZ3JhcGggPSB0aGlzLmdyYXBoO1xuICAgICAgICB2YXIgc2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzO1xuICAgICAgICB2YXIgZGltZW5zaW9ucyA9IHRoaXMuZ2V0RGltZW5zaW9ucygpO1xuICAgICAgICB2YXIgbm9kZVpFeHRlbnQgPSBbSW5maW5pdHksIC1JbmZpbml0eV07XG4gICAgICAgIHZhciBlZGdlWkV4dGVudCA9IFtJbmZpbml0eSwgLUluZmluaXR5XTtcbiAgICAgICAgLy8gQ2xlYXJpbmcgdGhlIHF1YWRcbiAgICAgICAgdGhpcy5xdWFkdHJlZS5jbGVhcigpO1xuICAgICAgICAvLyBSZXNldHRpbmcgdGhlIGxhYmVsIGdyaWRcbiAgICAgICAgLy8gVE9ETzogaXQncyBwcm9iYWJseSBiZXR0ZXIgdG8gZG8gdGhpcyBleHBsaWNpdGx5IG9yIG9uIHJlc2l6ZXMgZm9yIGxheW91dCBhbmQgYW5pbXNcbiAgICAgICAgdGhpcy5sYWJlbEdyaWQucmVzaXplQW5kQ2xlYXIoZGltZW5zaW9ucywgc2V0dGluZ3MubGFiZWxHcmlkQ2VsbFNpemUpO1xuICAgICAgICAvLyBDbGVhciB0aGUgaGlnaGxpZ2h0ZWROb2Rlc1xuICAgICAgICB0aGlzLmhpZ2hsaWdodGVkTm9kZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIC8vIENvbXB1dGluZyBleHRlbnRzXG4gICAgICAgIHRoaXMubm9kZUV4dGVudCA9ICgwLCB1dGlsc18xLmdyYXBoRXh0ZW50KShncmFwaCk7XG4gICAgICAgIC8vIFJlc2V0dGluZyBgZm9yY2VMYWJlbGAgaW5kaWNlc1xuICAgICAgICB0aGlzLm5vZGVzV2l0aEZvcmNlZExhYmVscyA9IFtdO1xuICAgICAgICB0aGlzLmVkZ2VzV2l0aEZvcmNlZExhYmVscyA9IFtdO1xuICAgICAgICAvLyBOT1RFOiBpdCBpcyBpbXBvcnRhbnQgdG8gY29tcHV0ZSB0aGlzIG1hdHJpeCBhZnRlciBjb21wdXRpbmcgdGhlIG5vZGUncyBleHRlbnRcbiAgICAgICAgLy8gYmVjYXVzZSAjLmdldEdyYXBoRGltZW5zaW9ucyByZWxpZXMgb24gaXRcbiAgICAgICAgdmFyIG51bGxDYW1lcmEgPSBuZXcgY2FtZXJhXzEuZGVmYXVsdCgpO1xuICAgICAgICB2YXIgbnVsbENhbWVyYU1hdHJpeCA9ICgwLCB1dGlsc18xLm1hdHJpeEZyb21DYW1lcmEpKG51bGxDYW1lcmEuZ2V0U3RhdGUoKSwgdGhpcy5nZXREaW1lbnNpb25zKCksIHRoaXMuZ2V0R3JhcGhEaW1lbnNpb25zKCksIHRoaXMuZ2V0U2V0dGluZyhcInN0YWdlUGFkZGluZ1wiKSB8fCAwKTtcbiAgICAgICAgLy8gUmVzY2FsaW5nIGZ1bmN0aW9uXG4gICAgICAgIHRoaXMubm9ybWFsaXphdGlvbkZ1bmN0aW9uID0gKDAsIHV0aWxzXzEuY3JlYXRlTm9ybWFsaXphdGlvbkZ1bmN0aW9uKSh0aGlzLmN1c3RvbUJCb3ggfHwgdGhpcy5ub2RlRXh0ZW50KTtcbiAgICAgICAgdmFyIG5vZGVzUGVyUHJvZ3JhbXMgPSB7fTtcbiAgICAgICAgdmFyIG5vZGVzID0gZ3JhcGgubm9kZXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBub2Rlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbm9kZXNbaV07XG4gICAgICAgICAgICAvLyBOb2RlIGRpc3BsYXkgZGF0YSByZXNvbHV0aW9uOlxuICAgICAgICAgICAgLy8gICAxLiBGaXJzdCB3ZSBnZXQgdGhlIG5vZGUncyBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAvLyAgIDIuIFdlIG9wdGlvbmFsbHkgcmVkdWNlIHRoZW0gdXNpbmcgdGhlIGZ1bmN0aW9uIHByb3ZpZGVkIGJ5IHRoZSB1c2VyXG4gICAgICAgICAgICAvLyAgICAgIE5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIG11c3QgcmV0dXJuIGEgdG90YWwgb2JqZWN0IGFuZCB3b24ndCBiZSBtZXJnZWRcbiAgICAgICAgICAgIC8vICAgMy4gV2UgYXBwbHkgb3VyIGRlZmF1bHRzLCB3aGlsZSBydW5uaW5nIHNvbWUgdml0YWwgY2hlY2tzXG4gICAgICAgICAgICAvLyAgIDQuIFdlIGFwcGx5IHRoZSBub3JtYWxpemF0aW9uIGZ1bmN0aW9uXG4gICAgICAgICAgICAvLyBXZSBzaGFsbG93IGNvcHkgbm9kZSBkYXRhIHRvIGF2b2lkIGRhbmdlcm91cyBiZWhhdmlvcnMgZnJvbSByZWR1Y2Vyc1xuICAgICAgICAgICAgdmFyIGF0dHIgPSBPYmplY3QuYXNzaWduKHt9LCBncmFwaC5nZXROb2RlQXR0cmlidXRlcyhub2RlKSk7XG4gICAgICAgICAgICBpZiAoc2V0dGluZ3Mubm9kZVJlZHVjZXIpXG4gICAgICAgICAgICAgICAgYXR0ciA9IHNldHRpbmdzLm5vZGVSZWR1Y2VyKG5vZGUsIGF0dHIpO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBhcHBseU5vZGVEZWZhdWx0cyh0aGlzLnNldHRpbmdzLCBub2RlLCBhdHRyKTtcbiAgICAgICAgICAgIG5vZGVzUGVyUHJvZ3JhbXNbZGF0YS50eXBlXSA9IChub2Rlc1BlclByb2dyYW1zW2RhdGEudHlwZV0gfHwgMCkgKyAxO1xuICAgICAgICAgICAgdGhpcy5ub2RlRGF0YUNhY2hlW25vZGVdID0gZGF0YTtcbiAgICAgICAgICAgIHRoaXMubm9ybWFsaXphdGlvbkZ1bmN0aW9uLmFwcGx5VG8oZGF0YSk7XG4gICAgICAgICAgICBpZiAoZGF0YS5mb3JjZUxhYmVsKVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZXNXaXRoRm9yY2VkTGFiZWxzLnB1c2gobm9kZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy56SW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS56SW5kZXggPCBub2RlWkV4dGVudFswXSlcbiAgICAgICAgICAgICAgICAgICAgbm9kZVpFeHRlbnRbMF0gPSBkYXRhLnpJbmRleDtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS56SW5kZXggPiBub2RlWkV4dGVudFsxXSlcbiAgICAgICAgICAgICAgICAgICAgbm9kZVpFeHRlbnRbMV0gPSBkYXRhLnpJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciB0eXBlIGluIHRoaXMubm9kZVByb2dyYW1zKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm9kZVByb2dyYW1zLmhhc093blByb3BlcnR5KHR5cGUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2lnbWE6IGNvdWxkIG5vdCBmaW5kIGEgc3VpdGFibGUgcHJvZ3JhbSBmb3Igbm9kZSB0eXBlIFxcXCJcIi5jb25jYXQodHlwZSwgXCJcXFwiIVwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWtlZXBBcnJheXMpXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlUHJvZ3JhbXNbdHlwZV0uYWxsb2NhdGUobm9kZXNQZXJQcm9ncmFtc1t0eXBlXSB8fCAwKTtcbiAgICAgICAgICAgIC8vIFdlIHJlc2V0IHRoYXQgY291bnQgaGVyZSwgc28gdGhhdCB3ZSBjYW4gcmV1c2UgaXQgd2hpbGUgY2FsbGluZyB0aGUgUHJvZ3JhbSNwcm9jZXNzIG1ldGhvZHM6XG4gICAgICAgICAgICBub2Rlc1BlclByb2dyYW1zW3R5cGVdID0gMDtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGluZyBub2RlIHotaW5kZXhcbiAgICAgICAgLy8gVE9ETzogei1pbmRleCBuZWVkcyB1cyB0byBjb21wdXRlIGRpc3BsYXkgZGF0YSBiZWZvcmUgaGFuZFxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy56SW5kZXggJiYgbm9kZVpFeHRlbnRbMF0gIT09IG5vZGVaRXh0ZW50WzFdKVxuICAgICAgICAgICAgbm9kZXMgPSAoMCwgdXRpbHNfMS56SW5kZXhPcmRlcmluZykobm9kZVpFeHRlbnQsIGZ1bmN0aW9uIChub2RlKSB7IHJldHVybiBfdGhpcy5ub2RlRGF0YUNhY2hlW25vZGVdLnpJbmRleDsgfSwgbm9kZXMpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IG5vZGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5ub2RlRGF0YUNhY2hlW25vZGVdO1xuICAgICAgICAgICAgdGhpcy5xdWFkdHJlZS5hZGQobm9kZSwgZGF0YS54LCAxIC0gZGF0YS55LCBkYXRhLnNpemUgLyB0aGlzLndpZHRoKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YS5sYWJlbCA9PT0gXCJzdHJpbmdcIiAmJiAhZGF0YS5oaWRkZW4pXG4gICAgICAgICAgICAgICAgdGhpcy5sYWJlbEdyaWQuYWRkKG5vZGUsIGRhdGEuc2l6ZSwgdGhpcy5mcmFtZWRHcmFwaFRvVmlld3BvcnQoZGF0YSwgeyBtYXRyaXg6IG51bGxDYW1lcmFNYXRyaXggfSkpO1xuICAgICAgICAgICAgdmFyIG5vZGVQcm9ncmFtID0gdGhpcy5ub2RlUHJvZ3JhbXNbZGF0YS50eXBlXTtcbiAgICAgICAgICAgIGlmICghbm9kZVByb2dyYW0pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2lnbWE6IGNvdWxkIG5vdCBmaW5kIGEgc3VpdGFibGUgcHJvZ3JhbSBmb3Igbm9kZSB0eXBlIFxcXCJcIi5jb25jYXQoZGF0YS50eXBlLCBcIlxcXCIhXCIpKTtcbiAgICAgICAgICAgIG5vZGVQcm9ncmFtLnByb2Nlc3MoZGF0YSwgZGF0YS5oaWRkZW4sIG5vZGVzUGVyUHJvZ3JhbXNbZGF0YS50eXBlXSsrKTtcbiAgICAgICAgICAgIC8vIFNhdmUgdGhlIG5vZGUgaW4gdGhlIGhpZ2hsaWdodGVkIHNldCBpZiBuZWVkZWRcbiAgICAgICAgICAgIGlmIChkYXRhLmhpZ2hsaWdodGVkICYmICFkYXRhLmhpZGRlbilcbiAgICAgICAgICAgICAgICB0aGlzLmhpZ2hsaWdodGVkTm9kZXMuYWRkKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFiZWxHcmlkLm9yZ2FuaXplKCk7XG4gICAgICAgIHZhciBlZGdlc1BlclByb2dyYW1zID0ge307XG4gICAgICAgIHZhciBlZGdlcyA9IGdyYXBoLmVkZ2VzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gZWRnZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZWRnZSA9IGVkZ2VzW2ldO1xuICAgICAgICAgICAgLy8gRWRnZSBkaXNwbGF5IGRhdGEgcmVzb2x1dGlvbjpcbiAgICAgICAgICAgIC8vICAgMS4gRmlyc3Qgd2UgZ2V0IHRoZSBlZGdlJ3MgYXR0cmlidXRlc1xuICAgICAgICAgICAgLy8gICAyLiBXZSBvcHRpb25hbGx5IHJlZHVjZSB0aGVtIHVzaW5nIHRoZSBmdW5jdGlvbiBwcm92aWRlZCBieSB0aGUgdXNlclxuICAgICAgICAgICAgLy8gICAgICBOb3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBtdXN0IHJldHVybiBhIHRvdGFsIG9iamVjdCBhbmQgd29uJ3QgYmUgbWVyZ2VkXG4gICAgICAgICAgICAvLyAgIDMuIFdlIGFwcGx5IG91ciBkZWZhdWx0cywgd2hpbGUgcnVubmluZyBzb21lIHZpdGFsIGNoZWNrc1xuICAgICAgICAgICAgLy8gV2Ugc2hhbGxvdyBjb3B5IGVkZ2UgZGF0YSB0byBhdm9pZCBkYW5nZXJvdXMgYmVoYXZpb3JzIGZyb20gcmVkdWNlcnNcbiAgICAgICAgICAgIHZhciBhdHRyID0gT2JqZWN0LmFzc2lnbih7fSwgZ3JhcGguZ2V0RWRnZUF0dHJpYnV0ZXMoZWRnZSkpO1xuICAgICAgICAgICAgaWYgKHNldHRpbmdzLmVkZ2VSZWR1Y2VyKVxuICAgICAgICAgICAgICAgIGF0dHIgPSBzZXR0aW5ncy5lZGdlUmVkdWNlcihlZGdlLCBhdHRyKTtcbiAgICAgICAgICAgIHZhciBkYXRhID0gYXBwbHlFZGdlRGVmYXVsdHModGhpcy5zZXR0aW5ncywgZWRnZSwgYXR0cik7XG4gICAgICAgICAgICBlZGdlc1BlclByb2dyYW1zW2RhdGEudHlwZV0gPSAoZWRnZXNQZXJQcm9ncmFtc1tkYXRhLnR5cGVdIHx8IDApICsgMTtcbiAgICAgICAgICAgIHRoaXMuZWRnZURhdGFDYWNoZVtlZGdlXSA9IGRhdGE7XG4gICAgICAgICAgICBpZiAoZGF0YS5mb3JjZUxhYmVsICYmICFkYXRhLmhpZGRlbilcbiAgICAgICAgICAgICAgICB0aGlzLmVkZ2VzV2l0aEZvcmNlZExhYmVscy5wdXNoKGVkZ2UpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuekluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuekluZGV4IDwgZWRnZVpFeHRlbnRbMF0pXG4gICAgICAgICAgICAgICAgICAgIGVkZ2VaRXh0ZW50WzBdID0gZGF0YS56SW5kZXg7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuekluZGV4ID4gZWRnZVpFeHRlbnRbMV0pXG4gICAgICAgICAgICAgICAgICAgIGVkZ2VaRXh0ZW50WzFdID0gZGF0YS56SW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgdHlwZSBpbiB0aGlzLmVkZ2VQcm9ncmFtcykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmVkZ2VQcm9ncmFtcy5oYXNPd25Qcm9wZXJ0eSh0eXBlKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNpZ21hOiBjb3VsZCBub3QgZmluZCBhIHN1aXRhYmxlIHByb2dyYW0gZm9yIGVkZ2UgdHlwZSBcXFwiXCIuY29uY2F0KHR5cGUsIFwiXFxcIiFcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFrZWVwQXJyYXlzKVxuICAgICAgICAgICAgICAgIHRoaXMuZWRnZVByb2dyYW1zW3R5cGVdLmFsbG9jYXRlKGVkZ2VzUGVyUHJvZ3JhbXNbdHlwZV0gfHwgMCk7XG4gICAgICAgICAgICAvLyBXZSByZXNldCB0aGF0IGNvdW50IGhlcmUsIHNvIHRoYXQgd2UgY2FuIHJldXNlIGl0IHdoaWxlIGNhbGxpbmcgdGhlIFByb2dyYW0jcHJvY2VzcyBtZXRob2RzOlxuICAgICAgICAgICAgZWRnZXNQZXJQcm9ncmFtc1t0eXBlXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxpbmcgZWRnZSB6LWluZGV4XG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnpJbmRleCAmJiBlZGdlWkV4dGVudFswXSAhPT0gZWRnZVpFeHRlbnRbMV0pXG4gICAgICAgICAgICBlZGdlcyA9ICgwLCB1dGlsc18xLnpJbmRleE9yZGVyaW5nKShlZGdlWkV4dGVudCwgZnVuY3Rpb24gKGVkZ2UpIHsgcmV0dXJuIF90aGlzLmVkZ2VEYXRhQ2FjaGVbZWRnZV0uekluZGV4OyB9LCBlZGdlcyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gZWRnZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZWRnZSA9IGVkZ2VzW2ldO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmVkZ2VEYXRhQ2FjaGVbZWRnZV07XG4gICAgICAgICAgICB2YXIgZXh0cmVtaXRpZXMgPSBncmFwaC5leHRyZW1pdGllcyhlZGdlKSwgc291cmNlRGF0YSA9IHRoaXMubm9kZURhdGFDYWNoZVtleHRyZW1pdGllc1swXV0sIHRhcmdldERhdGEgPSB0aGlzLm5vZGVEYXRhQ2FjaGVbZXh0cmVtaXRpZXNbMV1dO1xuICAgICAgICAgICAgdmFyIGhpZGRlbiA9IGRhdGEuaGlkZGVuIHx8IHNvdXJjZURhdGEuaGlkZGVuIHx8IHRhcmdldERhdGEuaGlkZGVuO1xuICAgICAgICAgICAgdGhpcy5lZGdlUHJvZ3JhbXNbZGF0YS50eXBlXS5wcm9jZXNzKHNvdXJjZURhdGEsIHRhcmdldERhdGEsIGRhdGEsIGhpZGRlbiwgZWRnZXNQZXJQcm9ncmFtc1tkYXRhLnR5cGVdKyspO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIHR5cGUgaW4gdGhpcy5lZGdlUHJvZ3JhbXMpIHtcbiAgICAgICAgICAgIHZhciBwcm9ncmFtID0gdGhpcy5lZGdlUHJvZ3JhbXNbdHlwZV07XG4gICAgICAgICAgICBpZiAoIWtlZXBBcnJheXMgJiYgdHlwZW9mIHByb2dyYW0uY29tcHV0ZUluZGljZXMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICBwcm9ncmFtLmNvbXB1dGVJbmRpY2VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNZXRob2QgdGhhdCBiYWNrcG9ydHMgcG90ZW50aWFsIHNldHRpbmdzIHVwZGF0ZXMgd2hlcmUgaXQncyBuZWVkZWQuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBTaWdtYS5wcm90b3R5cGUuaGFuZGxlU2V0dGluZ3NVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2FtZXJhLm1pblJhdGlvID0gdGhpcy5zZXR0aW5ncy5taW5DYW1lcmFSYXRpbztcbiAgICAgICAgdGhpcy5jYW1lcmEubWF4UmF0aW8gPSB0aGlzLnNldHRpbmdzLm1heENhbWVyYVJhdGlvO1xuICAgICAgICB0aGlzLmNhbWVyYS5zZXRTdGF0ZSh0aGlzLmNhbWVyYS52YWxpZGF0ZVN0YXRlKHRoaXMuY2FtZXJhLmdldFN0YXRlKCkpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNZXRob2QgdGhhdCBkZWNpZGVzIHdoZXRoZXIgdG8gcmVwcm9jZXNzIGdyYXBoIG9yIG5vdCwgYW5kIHRoZW4gcmVuZGVyIHRoZVxuICAgICAqIGdyYXBoLlxuICAgICAqXG4gICAgICogQHJldHVybiB7U2lnbWF9XG4gICAgICovXG4gICAgU2lnbWEucHJvdG90eXBlLl9yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBEbyB3ZSBuZWVkIHRvIHByb2Nlc3MgZGF0YT9cbiAgICAgICAgaWYgKHRoaXMubmVlZFRvUHJvY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5uZWVkVG9Tb2Z0UHJvY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlc2V0dGluZyBzdGF0ZVxuICAgICAgICB0aGlzLm5lZWRUb1Byb2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5uZWVkVG9Tb2Z0UHJvY2VzcyA9IGZhbHNlO1xuICAgICAgICAvLyBSZW5kZXJpbmdcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNZXRob2QgdGhhdCBzY2hlZHVsZXMgYSBgX3JlZnJlc2hgIGNhbGwgaWYgbm9uZSBoYXMgYmVlbiBzY2hlZHVsZWQgeWV0LiBJdFxuICAgICAqIHdpbGwgdGhlbiBiZSBwcm9jZXNzZWQgbmV4dCBhdmFpbGFibGUgZnJhbWUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTaWdtYX1cbiAgICAgKi9cbiAgICBTaWdtYS5wcm90b3R5cGUuX3NjaGVkdWxlUmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLnJlbmRlckZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlckZyYW1lID0gKDAsIHV0aWxzXzEucmVxdWVzdEZyYW1lKShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3JlZnJlc2goKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZW5kZXJGcmFtZSA9IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1ldGhvZCB1c2VkIHRvIHJlbmRlciBsYWJlbHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTaWdtYX1cbiAgICAgKi9cbiAgICBTaWdtYS5wcm90b3R5cGUucmVuZGVyTGFiZWxzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MucmVuZGVyTGFiZWxzKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIHZhciBjYW1lcmFTdGF0ZSA9IHRoaXMuY2FtZXJhLmdldFN0YXRlKCk7XG4gICAgICAgIC8vIFNlbGVjdGluZyBsYWJlbHMgdG8gZHJhd1xuICAgICAgICB2YXIgbGFiZWxzVG9EaXNwbGF5ID0gdGhpcy5sYWJlbEdyaWQuZ2V0TGFiZWxzVG9EaXNwbGF5KGNhbWVyYVN0YXRlLnJhdGlvLCB0aGlzLnNldHRpbmdzLmxhYmVsRGVuc2l0eSk7XG4gICAgICAgICgwLCBleHRlbmRfMS5kZWZhdWx0KShsYWJlbHNUb0Rpc3BsYXksIHRoaXMubm9kZXNXaXRoRm9yY2VkTGFiZWxzKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5ZWRMYWJlbHMgPSBuZXcgU2V0KCk7XG4gICAgICAgIC8vIERyYXdpbmcgbGFiZWxzXG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5jYW52YXNDb250ZXh0cy5sYWJlbHM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbGFiZWxzVG9EaXNwbGF5Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBsYWJlbHNUb0Rpc3BsYXlbaV07XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMubm9kZURhdGFDYWNoZVtub2RlXTtcbiAgICAgICAgICAgIC8vIElmIHRoZSBub2RlIHdhcyBhbHJlYWR5IGRyYXduIChsaWtlIGlmIGl0IGlzIGVsaWdpYmxlIEFORCBoYXNcbiAgICAgICAgICAgIC8vIGBmb3JjZUxhYmVsYCksIHdlIGRvbid0IHdhbnQgdG8gZHJhdyBpdCBhZ2FpblxuICAgICAgICAgICAgLy8gTk9URTogd2UgY2FuIGRvIGJldHRlciBwcm9iYWJseVxuICAgICAgICAgICAgaWYgKHRoaXMuZGlzcGxheWVkTGFiZWxzLmhhcyhub2RlKSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIElmIHRoZSBub2RlIGlzIGhpZGRlbiwgd2UgZG9uJ3QgbmVlZCB0byBkaXNwbGF5IGl0cyBsYWJlbCBvYnZpb3VzbHlcbiAgICAgICAgICAgIGlmIChkYXRhLmhpZGRlbilcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZnJhbWVkR3JhcGhUb1ZpZXdwb3J0KGRhdGEpLCB4ID0gX2EueCwgeSA9IF9hLnk7XG4gICAgICAgICAgICAvLyBOT1RFOiB3ZSBjYW4gY2FjaGUgdGhlIGxhYmVscyB3ZSBuZWVkIHRvIHJlbmRlciB1bnRpbCB0aGUgY2FtZXJhJ3MgcmF0aW8gY2hhbmdlc1xuICAgICAgICAgICAgdmFyIHNpemUgPSB0aGlzLnNjYWxlU2l6ZShkYXRhLnNpemUpO1xuICAgICAgICAgICAgLy8gSXMgbm9kZSBiaWcgZW5vdWdoP1xuICAgICAgICAgICAgaWYgKCFkYXRhLmZvcmNlTGFiZWwgJiYgc2l6ZSA8IHRoaXMuc2V0dGluZ3MubGFiZWxSZW5kZXJlZFNpemVUaHJlc2hvbGQpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAvLyBJcyBub2RlIGFjdHVhbGx5IG9uIHNjcmVlbiAod2l0aCBzb21lIG1hcmdpbilcbiAgICAgICAgICAgIC8vIE5PVEU6IHdlIHVzZWQgdG8gcmVseSBvbiB0aGUgcXVhZHRyZWUgZm9yIHRoaXMsIGJ1dCB0aGUgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIC8vIGNvbnZlcnNpb24gbWFrZSBpdCB1bnJlbGlhYmxlIGFuZCBhdCB0aGF0IHBvaW50IHdlIGFscmVhZHkgY29udmVydGVkXG4gICAgICAgICAgICAvLyB0byB2aWV3cG9ydCBjb29yZGluYXRlcyBhbmQgc2luY2UgdGhlIGxhYmVsIGdyaWQgYWxyZWFkeSBjdWxscyB0aGVcbiAgICAgICAgICAgIC8vIG51bWJlciBvZiBwb3RlbnRpYWwgbGFiZWxzIHRvIGRpc3BsYXkgdGhpcyBsb29rcyBsaWtlIGEgZ29vZFxuICAgICAgICAgICAgLy8gcGVyZm9ybWFuY2UgY29tcHJvbWlzZS5cbiAgICAgICAgICAgIC8vIE5PVEU6IGxhYmVsR3JpZC5nZXRMYWJlbHNUb0Rpc3BsYXkgY291bGQgcHJvYmFibHkgb3B0aW1pemUgYnkgbm90XG4gICAgICAgICAgICAvLyBjb25zaWRlcmluZyBjZWxscyBvYnZpb3VzbHkgb3V0c2lkZSBvZiB0aGUgcmFuZ2Ugb2YgdGhlIGN1cnJlbnRcbiAgICAgICAgICAgIC8vIHZpZXcgcmVjdGFuZ2xlLlxuICAgICAgICAgICAgaWYgKHggPCAtWF9MQUJFTF9NQVJHSU4gfHxcbiAgICAgICAgICAgICAgICB4ID4gdGhpcy53aWR0aCArIFhfTEFCRUxfTUFSR0lOIHx8XG4gICAgICAgICAgICAgICAgeSA8IC1ZX0xBQkVMX01BUkdJTiB8fFxuICAgICAgICAgICAgICAgIHkgPiB0aGlzLmhlaWdodCArIFlfTEFCRUxfTUFSR0lOKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgLy8gQmVjYXVzZSBkaXNwbGF5ZWQgZWRnZSBsYWJlbHMgZGVwZW5kIGRpcmVjdGx5IG9uIGFjdHVhbGx5IHJlbmRlcmVkIG5vZGVcbiAgICAgICAgICAgIC8vIGxhYmVscywgd2UgbmVlZCB0byBvbmx5IGFkZCB0byB0aGlzLmRpc3BsYXllZExhYmVscyBub2RlcyB3aG9zZSBsYWJlbFxuICAgICAgICAgICAgLy8gaXMgcmVuZGVyZWQuXG4gICAgICAgICAgICAvLyBUaGlzIG1ha2VzIHRoaXMuZGlzcGxheWVkTGFiZWxzIGRlcGVuZCBvbiB2aWV3cG9ydCwgd2hpY2ggbWlnaHQgYmVjb21lXG4gICAgICAgICAgICAvLyBhbiBpc3N1ZSBvbmNlIHdlIHN0YXJ0IG1lbW9pemluZyBnZXRMYWJlbHNUb0Rpc3BsYXkuXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXllZExhYmVscy5hZGQobm9kZSk7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmxhYmVsUmVuZGVyZXIoY29udGV4dCwgX19hc3NpZ24oX19hc3NpZ24oeyBrZXk6IG5vZGUgfSwgZGF0YSksIHsgc2l6ZTogc2l6ZSwgeDogeCwgeTogeSB9KSwgdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNZXRob2QgdXNlZCB0byByZW5kZXIgZWRnZSBsYWJlbHMsIGJhc2VkIG9uIHdoaWNoIG5vZGUgbGFiZWxzIHdlcmVcbiAgICAgKiByZW5kZXJlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1NpZ21hfVxuICAgICAqL1xuICAgIFNpZ21hLnByb3RvdHlwZS5yZW5kZXJFZGdlTGFiZWxzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MucmVuZGVyRWRnZUxhYmVscylcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMuY2FudmFzQ29udGV4dHMuZWRnZUxhYmVscztcbiAgICAgICAgLy8gQ2xlYXJpbmdcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB2YXIgZWRnZUxhYmVsc1RvRGlzcGxheSA9ICgwLCBsYWJlbHNfMS5lZGdlTGFiZWxzVG9EaXNwbGF5RnJvbU5vZGVzKSh7XG4gICAgICAgICAgICBncmFwaDogdGhpcy5ncmFwaCxcbiAgICAgICAgICAgIGhvdmVyZWROb2RlOiB0aGlzLmhvdmVyZWROb2RlLFxuICAgICAgICAgICAgZGlzcGxheWVkTm9kZUxhYmVsczogdGhpcy5kaXNwbGF5ZWRMYWJlbHMsXG4gICAgICAgICAgICBoaWdobGlnaHRlZE5vZGVzOiB0aGlzLmhpZ2hsaWdodGVkTm9kZXMsXG4gICAgICAgIH0pLmNvbmNhdCh0aGlzLmVkZ2VzV2l0aEZvcmNlZExhYmVscyk7XG4gICAgICAgIHZhciBkaXNwbGF5ZWRMYWJlbHMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gZWRnZUxhYmVsc1RvRGlzcGxheS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBlZGdlID0gZWRnZUxhYmVsc1RvRGlzcGxheVtpXSwgZXh0cmVtaXRpZXMgPSB0aGlzLmdyYXBoLmV4dHJlbWl0aWVzKGVkZ2UpLCBzb3VyY2VEYXRhID0gdGhpcy5ub2RlRGF0YUNhY2hlW2V4dHJlbWl0aWVzWzBdXSwgdGFyZ2V0RGF0YSA9IHRoaXMubm9kZURhdGFDYWNoZVtleHRyZW1pdGllc1sxXV0sIGVkZ2VEYXRhID0gdGhpcy5lZGdlRGF0YUNhY2hlW2VkZ2VdO1xuICAgICAgICAgICAgLy8gSWYgdGhlIGVkZ2Ugd2FzIGFscmVhZHkgZHJhd24gKGxpa2UgaWYgaXQgaXMgZWxpZ2libGUgQU5EIGhhc1xuICAgICAgICAgICAgLy8gYGZvcmNlTGFiZWxgKSwgd2UgZG9uJ3Qgd2FudCB0byBkcmF3IGl0IGFnYWluXG4gICAgICAgICAgICBpZiAoZGlzcGxheWVkTGFiZWxzLmhhcyhlZGdlKSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIElmIHRoZSBlZGdlIGlzIGhpZGRlbiB3ZSBkb24ndCBuZWVkIHRvIGRpc3BsYXkgaXRzIGxhYmVsXG4gICAgICAgICAgICAvLyBOT1RFOiB0aGUgdGVzdCBvbiBzb3VyY2VEYXRhICYgdGFyZ2V0RGF0YSBpcyBwcm9iYWJseSBwYXJhbm9pZCBhdCB0aGlzIHBvaW50P1xuICAgICAgICAgICAgaWYgKGVkZ2VEYXRhLmhpZGRlbiB8fCBzb3VyY2VEYXRhLmhpZGRlbiB8fCB0YXJnZXREYXRhLmhpZGRlbikge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5lZGdlTGFiZWxSZW5kZXJlcihjb250ZXh0LCBfX2Fzc2lnbihfX2Fzc2lnbih7IGtleTogZWRnZSB9LCBlZGdlRGF0YSksIHsgc2l6ZTogdGhpcy5zY2FsZVNpemUoZWRnZURhdGEuc2l6ZSkgfSksIF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKHsga2V5OiBleHRyZW1pdGllc1swXSB9LCBzb3VyY2VEYXRhKSwgdGhpcy5mcmFtZWRHcmFwaFRvVmlld3BvcnQoc291cmNlRGF0YSkpLCB7IHNpemU6IHRoaXMuc2NhbGVTaXplKHNvdXJjZURhdGEuc2l6ZSkgfSksIF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKHsga2V5OiBleHRyZW1pdGllc1sxXSB9LCB0YXJnZXREYXRhKSwgdGhpcy5mcmFtZWRHcmFwaFRvVmlld3BvcnQodGFyZ2V0RGF0YSkpLCB7IHNpemU6IHRoaXMuc2NhbGVTaXplKHRhcmdldERhdGEuc2l6ZSkgfSksIHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICAgICAgZGlzcGxheWVkTGFiZWxzLmFkZChlZGdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1ldGhvZCB1c2VkIHRvIHJlbmRlciB0aGUgaGlnaGxpZ2h0ZWQgbm9kZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTaWdtYX1cbiAgICAgKi9cbiAgICBTaWdtYS5wcm90b3R5cGUucmVuZGVySGlnaGxpZ2h0ZWROb2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLmNhbnZhc0NvbnRleHRzLmhvdmVycztcbiAgICAgICAgLy8gQ2xlYXJpbmdcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAvLyBSZW5kZXJpbmdcbiAgICAgICAgdmFyIHJlbmRlciA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IF90aGlzLm5vZGVEYXRhQ2FjaGVbbm9kZV07XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5mcmFtZWRHcmFwaFRvVmlld3BvcnQoZGF0YSksIHggPSBfYS54LCB5ID0gX2EueTtcbiAgICAgICAgICAgIHZhciBzaXplID0gX3RoaXMuc2NhbGVTaXplKGRhdGEuc2l6ZSk7XG4gICAgICAgICAgICBfdGhpcy5zZXR0aW5ncy5ob3ZlclJlbmRlcmVyKGNvbnRleHQsIF9fYXNzaWduKF9fYXNzaWduKHsga2V5OiBub2RlIH0sIGRhdGEpLCB7IHNpemU6IHNpemUsIHg6IHgsIHk6IHkgfSksIF90aGlzLnNldHRpbmdzKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG5vZGVzVG9SZW5kZXIgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuaG92ZXJlZE5vZGUgJiYgIXRoaXMubm9kZURhdGFDYWNoZVt0aGlzLmhvdmVyZWROb2RlXS5oaWRkZW4pIHtcbiAgICAgICAgICAgIG5vZGVzVG9SZW5kZXIucHVzaCh0aGlzLmhvdmVyZWROb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhpZ2hsaWdodGVkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgLy8gVGhlIGhvdmVyZWQgbm9kZSBoYXMgYWxyZWFkeSBiZWVuIGhpZ2hsaWdodGVkXG4gICAgICAgICAgICBpZiAobm9kZSAhPT0gX3RoaXMuaG92ZXJlZE5vZGUpXG4gICAgICAgICAgICAgICAgbm9kZXNUb1JlbmRlci5wdXNoKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gRHJhdyBsYWJlbHM6XG4gICAgICAgIG5vZGVzVG9SZW5kZXIuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gcmVuZGVyKG5vZGUpOyB9KTtcbiAgICAgICAgLy8gRHJhdyBXZWJHTCBub2RlcyBvbiB0b3Agb2YgdGhlIGxhYmVsczpcbiAgICAgICAgdmFyIG5vZGVzUGVyUHJvZ3JhbXMgPSB7fTtcbiAgICAgICAgLy8gMS4gQ291bnQgbm9kZXMgcGVyIHR5cGU6XG4gICAgICAgIG5vZGVzVG9SZW5kZXIuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBfdGhpcy5ub2RlRGF0YUNhY2hlW25vZGVdLnR5cGU7XG4gICAgICAgICAgICBub2Rlc1BlclByb2dyYW1zW3R5cGVdID0gKG5vZGVzUGVyUHJvZ3JhbXNbdHlwZV0gfHwgMCkgKyAxO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gMi4gQWxsb2NhdGUgZm9yIGVhY2ggdHlwZSBmb3IgdGhlIHByb3BlciBudW1iZXIgb2Ygbm9kZXNcbiAgICAgICAgZm9yICh2YXIgdHlwZSBpbiB0aGlzLm5vZGVIb3ZlclByb2dyYW1zKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVIb3ZlclByb2dyYW1zW3R5cGVdLmFsbG9jYXRlKG5vZGVzUGVyUHJvZ3JhbXNbdHlwZV0gfHwgMCk7XG4gICAgICAgICAgICAvLyBBbHNvIHJlc2V0IGNvdW50LCB0byB1c2Ugd2hlbiByZW5kZXJpbmc6XG4gICAgICAgICAgICBub2Rlc1BlclByb2dyYW1zW3R5cGVdID0gMDtcbiAgICAgICAgfVxuICAgICAgICAvLyAzLiBQcm9jZXNzIGFsbCBub2RlcyB0byByZW5kZXI6XG4gICAgICAgIG5vZGVzVG9SZW5kZXIuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBfdGhpcy5ub2RlRGF0YUNhY2hlW25vZGVdO1xuICAgICAgICAgICAgX3RoaXMubm9kZUhvdmVyUHJvZ3JhbXNbZGF0YS50eXBlXS5wcm9jZXNzKGRhdGEsIGRhdGEuaGlkZGVuLCBub2Rlc1BlclByb2dyYW1zW2RhdGEudHlwZV0rKyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyA0LiBDbGVhciBob3ZlcmVkIG5vZGVzIGxheWVyOlxuICAgICAgICB0aGlzLndlYkdMQ29udGV4dHMuaG92ZXJOb2Rlcy5jbGVhcih0aGlzLndlYkdMQ29udGV4dHMuaG92ZXJOb2Rlcy5DT0xPUl9CVUZGRVJfQklUKTtcbiAgICAgICAgLy8gNS4gUmVuZGVyOlxuICAgICAgICBmb3IgKHZhciB0eXBlIGluIHRoaXMubm9kZUhvdmVyUHJvZ3JhbXMpIHtcbiAgICAgICAgICAgIHZhciBwcm9ncmFtID0gdGhpcy5ub2RlSG92ZXJQcm9ncmFtc1t0eXBlXTtcbiAgICAgICAgICAgIHByb2dyYW0uYmluZCgpO1xuICAgICAgICAgICAgcHJvZ3JhbS5idWZmZXJEYXRhKCk7XG4gICAgICAgICAgICBwcm9ncmFtLnJlbmRlcih7XG4gICAgICAgICAgICAgICAgbWF0cml4OiB0aGlzLm1hdHJpeCxcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHJhdGlvOiB0aGlzLmNhbWVyYS5yYXRpbyxcbiAgICAgICAgICAgICAgICBjb3JyZWN0aW9uUmF0aW86IHRoaXMuY29ycmVjdGlvblJhdGlvIC8gdGhpcy5jYW1lcmEucmF0aW8sXG4gICAgICAgICAgICAgICAgc2NhbGluZ1JhdGlvOiB0aGlzLnBpeGVsUmF0aW8sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogTWV0aG9kIHVzZWQgdG8gc2NoZWR1bGUgYSBob3ZlciByZW5kZXIuXG4gICAgICpcbiAgICAgKi9cbiAgICBTaWdtYS5wcm90b3R5cGUuc2NoZWR1bGVIaWdobGlnaHRlZE5vZGVzUmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5yZW5kZXJIaWdobGlnaHRlZE5vZGVzRnJhbWUgfHwgdGhpcy5yZW5kZXJGcmFtZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5yZW5kZXJIaWdobGlnaHRlZE5vZGVzRnJhbWUgPSAoMCwgdXRpbHNfMS5yZXF1ZXN0RnJhbWUpKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFJlc2V0dGluZyBzdGF0ZVxuICAgICAgICAgICAgX3RoaXMucmVuZGVySGlnaGxpZ2h0ZWROb2Rlc0ZyYW1lID0gbnVsbDtcbiAgICAgICAgICAgIC8vIFJlbmRlcmluZ1xuICAgICAgICAgICAgX3RoaXMucmVuZGVySGlnaGxpZ2h0ZWROb2RlcygpO1xuICAgICAgICAgICAgX3RoaXMucmVuZGVyRWRnZUxhYmVscygpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1ldGhvZCB1c2VkIHRvIHJlbmRlci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1NpZ21hfVxuICAgICAqL1xuICAgIFNpZ21hLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuZW1pdChcImJlZm9yZVJlbmRlclwiKTtcbiAgICAgICAgdmFyIGV4aXRSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5lbWl0KFwiYWZ0ZXJSZW5kZXJcIik7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH07XG4gICAgICAgIC8vIElmIGEgcmVuZGVyIHdhcyBzY2hlZHVsZWQsIHdlIGNhbmNlbCBpdFxuICAgICAgICBpZiAodGhpcy5yZW5kZXJGcmFtZSkge1xuICAgICAgICAgICAgKDAsIHV0aWxzXzEuY2FuY2VsRnJhbWUpKHRoaXMucmVuZGVyRnJhbWUpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJGcmFtZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLm5lZWRUb1Byb2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubmVlZFRvU29mdFByb2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBuZWVkIHRvIHJlc2l6ZVxuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgICAgICAvLyBDbGVhcmluZyB0aGUgY2FudmFzZXNcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICAvLyBSZWNvbXB1dGluZyB1c2VmdWwgY2FtZXJhLXJlbGF0ZWQgdmFsdWVzOlxuICAgICAgICB0aGlzLnVwZGF0ZUNhY2hlZFZhbHVlcygpO1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIG5vIG5vZGVzIHdlIGNhbiBzdG9wIHJpZ2h0IHRoZXJlXG4gICAgICAgIGlmICghdGhpcy5ncmFwaC5vcmRlcilcbiAgICAgICAgICAgIHJldHVybiBleGl0UmVuZGVyKCk7XG4gICAgICAgIC8vIFRPRE86IGltcHJvdmUgdGhpcyBoZXVyaXN0aWMgb3IgbW92ZSB0byB0aGUgY2FwdG9yIGl0c2VsZj9cbiAgICAgICAgLy8gVE9ETzogZGVhbCB3aXRoIHRoZSB0b3VjaCBjYXB0b3IgaGVyZSBhcyB3ZWxsXG4gICAgICAgIHZhciBtb3VzZUNhcHRvciA9IHRoaXMubW91c2VDYXB0b3I7XG4gICAgICAgIHZhciBtb3ZpbmcgPSB0aGlzLmNhbWVyYS5pc0FuaW1hdGVkKCkgfHxcbiAgICAgICAgICAgIG1vdXNlQ2FwdG9yLmlzTW92aW5nIHx8XG4gICAgICAgICAgICBtb3VzZUNhcHRvci5kcmFnZ2VkRXZlbnRzIHx8XG4gICAgICAgICAgICBtb3VzZUNhcHRvci5jdXJyZW50V2hlZWxEaXJlY3Rpb247XG4gICAgICAgIC8vIFRoZW4gd2UgbmVlZCB0byBleHRyYWN0IGEgbWF0cml4IGZyb20gdGhlIGNhbWVyYVxuICAgICAgICB2YXIgY2FtZXJhU3RhdGUgPSB0aGlzLmNhbWVyYS5nZXRTdGF0ZSgpO1xuICAgICAgICB2YXIgdmlld3BvcnREaW1lbnNpb25zID0gdGhpcy5nZXREaW1lbnNpb25zKCk7XG4gICAgICAgIHZhciBncmFwaERpbWVuc2lvbnMgPSB0aGlzLmdldEdyYXBoRGltZW5zaW9ucygpO1xuICAgICAgICB2YXIgcGFkZGluZyA9IHRoaXMuZ2V0U2V0dGluZyhcInN0YWdlUGFkZGluZ1wiKSB8fCAwO1xuICAgICAgICB0aGlzLm1hdHJpeCA9ICgwLCB1dGlsc18xLm1hdHJpeEZyb21DYW1lcmEpKGNhbWVyYVN0YXRlLCB2aWV3cG9ydERpbWVuc2lvbnMsIGdyYXBoRGltZW5zaW9ucywgcGFkZGluZyk7XG4gICAgICAgIHRoaXMuaW52TWF0cml4ID0gKDAsIHV0aWxzXzEubWF0cml4RnJvbUNhbWVyYSkoY2FtZXJhU3RhdGUsIHZpZXdwb3J0RGltZW5zaW9ucywgZ3JhcGhEaW1lbnNpb25zLCBwYWRkaW5nLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jb3JyZWN0aW9uUmF0aW8gPSAoMCwgdXRpbHNfMS5nZXRNYXRyaXhJbXBhY3QpKHRoaXMubWF0cml4LCBjYW1lcmFTdGF0ZSwgdmlld3BvcnREaW1lbnNpb25zKTtcbiAgICAgICAgLy8gRHJhd2luZyBub2Rlc1xuICAgICAgICBmb3IgKHZhciB0eXBlIGluIHRoaXMubm9kZVByb2dyYW1zKSB7XG4gICAgICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMubm9kZVByb2dyYW1zW3R5cGVdO1xuICAgICAgICAgICAgcHJvZ3JhbS5iaW5kKCk7XG4gICAgICAgICAgICBwcm9ncmFtLmJ1ZmZlckRhdGEoKTtcbiAgICAgICAgICAgIHByb2dyYW0ucmVuZGVyKHtcbiAgICAgICAgICAgICAgICBtYXRyaXg6IHRoaXMubWF0cml4LFxuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICAgICAgcmF0aW86IGNhbWVyYVN0YXRlLnJhdGlvLFxuICAgICAgICAgICAgICAgIGNvcnJlY3Rpb25SYXRpbzogdGhpcy5jb3JyZWN0aW9uUmF0aW8gLyBjYW1lcmFTdGF0ZS5yYXRpbyxcbiAgICAgICAgICAgICAgICBzY2FsaW5nUmF0aW86IHRoaXMucGl4ZWxSYXRpbyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIERyYXdpbmcgZWRnZXNcbiAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmhpZGVFZGdlc09uTW92ZSB8fCAhbW92aW5nKSB7XG4gICAgICAgICAgICBmb3IgKHZhciB0eXBlIGluIHRoaXMuZWRnZVByb2dyYW1zKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb2dyYW0gPSB0aGlzLmVkZ2VQcm9ncmFtc1t0eXBlXTtcbiAgICAgICAgICAgICAgICBwcm9ncmFtLmJpbmQoKTtcbiAgICAgICAgICAgICAgICBwcm9ncmFtLmJ1ZmZlckRhdGEoKTtcbiAgICAgICAgICAgICAgICBwcm9ncmFtLnJlbmRlcih7XG4gICAgICAgICAgICAgICAgICAgIG1hdHJpeDogdGhpcy5tYXRyaXgsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICByYXRpbzogY2FtZXJhU3RhdGUucmF0aW8sXG4gICAgICAgICAgICAgICAgICAgIGNvcnJlY3Rpb25SYXRpbzogdGhpcy5jb3JyZWN0aW9uUmF0aW8gLyBjYW1lcmFTdGF0ZS5yYXRpbyxcbiAgICAgICAgICAgICAgICAgICAgc2NhbGluZ1JhdGlvOiB0aGlzLnBpeGVsUmF0aW8sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRG8gbm90IGRpc3BsYXkgbGFiZWxzIG9uIG1vdmUgcGVyIHNldHRpbmdcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuaGlkZUxhYmVsc09uTW92ZSAmJiBtb3ZpbmcpXG4gICAgICAgICAgICByZXR1cm4gZXhpdFJlbmRlcigpO1xuICAgICAgICB0aGlzLnJlbmRlckxhYmVscygpO1xuICAgICAgICB0aGlzLnJlbmRlckVkZ2VMYWJlbHMoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJIaWdobGlnaHRlZE5vZGVzKCk7XG4gICAgICAgIHJldHVybiBleGl0UmVuZGVyKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBtZXRob2QgdXNlZCB0byB1cGRhdGUgZXhwZW5zaXZlIGFuZCB0aGVyZWZvcmUgY2FjaGVkIHZhbHVlc1xuICAgICAqIGVhY2ggdGltZSB0aGUgY2FtZXJhIHN0YXRlIGlzIHVwZGF0ZWQuXG4gICAgICovXG4gICAgU2lnbWEucHJvdG90eXBlLnVwZGF0ZUNhY2hlZFZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJhdGlvID0gdGhpcy5jYW1lcmEuZ2V0U3RhdGUoKS5yYXRpbztcbiAgICAgICAgdGhpcy5jYW1lcmFTaXplUmF0aW8gPSBNYXRoLnNxcnQocmF0aW8pO1xuICAgIH07XG4gICAgLyoqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICogUHVibGljIEFQSS5cbiAgICAgKiotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBNZXRob2QgcmV0dXJuaW5nIHRoZSByZW5kZXJlcidzIGNhbWVyYS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0NhbWVyYX1cbiAgICAgKi9cbiAgICBTaWdtYS5wcm90b3R5cGUuZ2V0Q2FtZXJhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW1lcmE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNZXRob2QgcmV0dXJuaW5nIHRoZSBjb250YWluZXIgRE9NIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBTaWdtYS5wcm90b3R5cGUuZ2V0Q29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNZXRob2QgcmV0dXJuaW5nIHRoZSByZW5kZXJlcidzIGdyYXBoLlxuICAgICAqXG4gICAgICogQHJldHVybiB7R3JhcGh9XG4gICAgICovXG4gICAgU2lnbWEucHJvdG90eXBlLmdldEdyYXBoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1ldGhvZCB1c2VkIHRvIHNldCB0aGUgcmVuZGVyZXIncyBncmFwaC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0dyYXBofVxuICAgICAqL1xuICAgIFNpZ21hLnByb3RvdHlwZS5zZXRHcmFwaCA9IGZ1bmN0aW9uIChncmFwaCkge1xuICAgICAgICBpZiAoZ3JhcGggPT09IHRoaXMuZ3JhcGgpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIFVuYmluZGluZyBoYW5kbGVycyBvbiB0aGUgY3VycmVudCBncmFwaFxuICAgICAgICB0aGlzLnVuYmluZEdyYXBoSGFuZGxlcnMoKTtcbiAgICAgICAgLy8gQ2xlYXJpbmcgdGhlIGdyYXBoIGRhdGEgY2FjaGVzXG4gICAgICAgIHRoaXMubm9kZURhdGFDYWNoZSA9IHt9O1xuICAgICAgICB0aGlzLmVkZ2VEYXRhQ2FjaGUgPSB7fTtcbiAgICAgICAgLy8gQ2xlYW5pbmcgcmVuZGVyZXIgc3RhdGUgdGllZCB0byB0aGUgY3VycmVudCBncmFwaFxuICAgICAgICB0aGlzLmRpc3BsYXllZExhYmVscy5jbGVhcigpO1xuICAgICAgICB0aGlzLmhpZ2hsaWdodGVkTm9kZXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5ob3ZlcmVkTm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMuaG92ZXJlZEVkZ2UgPSBudWxsO1xuICAgICAgICB0aGlzLm5vZGVzV2l0aEZvcmNlZExhYmVscy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmVkZ2VzV2l0aEZvcmNlZExhYmVscy5sZW5ndGggPSAwO1xuICAgICAgICBpZiAodGhpcy5jaGVja0VkZ2VzRXZlbnRzRnJhbWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICgwLCB1dGlsc18xLmNhbmNlbEZyYW1lKSh0aGlzLmNoZWNrRWRnZXNFdmVudHNGcmFtZSk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrRWRnZXNFdmVudHNGcmFtZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW5zdGFsbGluZyBuZXcgZ3JhcGhcbiAgICAgICAgdGhpcy5ncmFwaCA9IGdyYXBoO1xuICAgICAgICAvLyBCaW5kaW5nIG5ldyBoYW5kbGVyc1xuICAgICAgICB0aGlzLmJpbmRHcmFwaEhhbmRsZXJzKCk7XG4gICAgICAgIC8vIFJlLXJlbmRlcmluZyBub3cgdG8gYXZvaWQgZGlzY3JlcGFuY2llcyBmcm9tIG5vdyB0byBuZXh0IGZyYW1lXG4gICAgICAgIHRoaXMucHJvY2VzcygpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTWV0aG9kIHJldHVybmluZyB0aGUgbW91c2UgY2FwdG9yLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TW91c2VDYXB0b3J9XG4gICAgICovXG4gICAgU2lnbWEucHJvdG90eXBlLmdldE1vdXNlQ2FwdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3VzZUNhcHRvcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1ldGhvZCByZXR1cm5pbmcgdGhlIHRvdWNoIGNhcHRvci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1RvdWNoQ2FwdG9yfVxuICAgICAqL1xuICAgIFNpZ21hLnByb3RvdHlwZS5nZXRUb3VjaENhcHRvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG91Y2hDYXB0b3I7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNZXRob2QgcmV0dXJuaW5nIHRoZSBjdXJyZW50IHJlbmRlcmVyJ3MgZGltZW5zaW9ucy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0RpbWVuc2lvbnN9XG4gICAgICovXG4gICAgU2lnbWEucHJvdG90eXBlLmdldERpbWVuc2lvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7IHdpZHRoOiB0aGlzLndpZHRoLCBoZWlnaHQ6IHRoaXMuaGVpZ2h0IH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNZXRob2QgcmV0dXJuaW5nIHRoZSBjdXJyZW50IGdyYXBoJ3MgZGltZW5zaW9ucy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0RpbWVuc2lvbnN9XG4gICAgICovXG4gICAgU2lnbWEucHJvdG90eXBlLmdldEdyYXBoRGltZW5zaW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGV4dGVudCA9IHRoaXMuY3VzdG9tQkJveCB8fCB0aGlzLm5vZGVFeHRlbnQ7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aDogZXh0ZW50LnhbMV0gLSBleHRlbnQueFswXSB8fCAxLFxuICAgICAgICAgICAgaGVpZ2h0OiBleHRlbnQueVsxXSAtIGV4dGVudC55WzBdIHx8IDEsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNZXRob2QgdXNlZCB0byBnZXQgYWxsIHRoZSBzaWdtYSBub2RlIGF0dHJpYnV0ZXMuXG4gICAgICogSXQncyB1c2VmdWxsIGZvciBleGFtcGxlIHRvIGdldCB0aGUgcG9zaXRpb24gb2YgYSBub2RlXG4gICAgICogYW5kIHRvIGdldCB2YWx1ZXMgdGhhdCBhcmUgc2V0IGJ5IHRoZSBub2RlUmVkdWNlclxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBrZXkgLSBUaGUgbm9kZSdzIGtleS5cbiAgICAgKiBAcmV0dXJuIHtOb2RlRGlzcGxheURhdGEgfCB1bmRlZmluZWR9IEEgY29weSBvZiB0aGUgZGVzaXJlZCBub2RlJ3MgYXR0cmlidXRlIG9yIHVuZGVmaW5lZCBpZiBub3QgZm91bmRcbiAgICAgKi9cbiAgICBTaWdtYS5wcm90b3R5cGUuZ2V0Tm9kZURpc3BsYXlEYXRhID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMubm9kZURhdGFDYWNoZVtrZXldO1xuICAgICAgICByZXR1cm4gbm9kZSA/IE9iamVjdC5hc3NpZ24oe30sIG5vZGUpIDogdW5kZWZpbmVkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTWV0aG9kIHVzZWQgdG8gZ2V0IGFsbCB0aGUgc2lnbWEgZWRnZSBhdHRyaWJ1dGVzLlxuICAgICAqIEl0J3MgdXNlZnVsbCBmb3IgZXhhbXBsZSB0byBnZXQgdmFsdWVzIHRoYXQgYXJlIHNldCBieSB0aGUgZWRnZVJlZHVjZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGtleSAtIFRoZSBlZGdlJ3Mga2V5LlxuICAgICAqIEByZXR1cm4ge0VkZ2VEaXNwbGF5RGF0YSB8IHVuZGVmaW5lZH0gQSBjb3B5IG9mIHRoZSBkZXNpcmVkIGVkZ2UncyBhdHRyaWJ1dGUgb3IgdW5kZWZpbmVkIGlmIG5vdCBmb3VuZFxuICAgICAqL1xuICAgIFNpZ21hLnByb3RvdHlwZS5nZXRFZGdlRGlzcGxheURhdGEgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBlZGdlID0gdGhpcy5lZGdlRGF0YUNhY2hlW2tleV07XG4gICAgICAgIHJldHVybiBlZGdlID8gT2JqZWN0LmFzc2lnbih7fSwgZWRnZSkgOiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNZXRob2QgcmV0dXJuaW5nIGEgY29weSBvZiB0aGUgc2V0dGluZ3MgY29sbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1NldHRpbmdzfSBBIGNvcHkgb2YgdGhlIHNldHRpbmdzIGNvbGxlY3Rpb24uXG4gICAgICovXG4gICAgU2lnbWEucHJvdG90eXBlLmdldFNldHRpbmdzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hc3NpZ24oe30sIHRoaXMuc2V0dGluZ3MpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTWV0aG9kIHJldHVybmluZyB0aGUgY3VycmVudCB2YWx1ZSBmb3IgYSBnaXZlbiBzZXR0aW5nIGtleS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30ga2V5IC0gVGhlIHNldHRpbmcga2V5IHRvIGdldC5cbiAgICAgKiBAcmV0dXJuIHthbnl9IFRoZSB2YWx1ZSBhdHRhY2hlZCB0byB0aGlzIHNldHRpbmcga2V5IG9yIHVuZGVmaW5lZCBpZiBub3QgZm91bmRcbiAgICAgKi9cbiAgICBTaWdtYS5wcm90b3R5cGUuZ2V0U2V0dGluZyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3Nba2V5XTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1ldGhvZCBzZXR0aW5nIHRoZSB2YWx1ZSBvZiBhIGdpdmVuIHNldHRpbmcga2V5LiBOb3RlIHRoYXQgdGhpcyB3aWxsIHNjaGVkdWxlXG4gICAgICogYSBuZXcgcmVuZGVyIG5leHQgZnJhbWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGtleSAtIFRoZSBzZXR0aW5nIGtleSB0byBzZXQuXG4gICAgICogQHBhcmFtICB7YW55fSAgICB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBzZXQuXG4gICAgICogQHJldHVybiB7U2lnbWF9XG4gICAgICovXG4gICAgU2lnbWEucHJvdG90eXBlLnNldFNldHRpbmcgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldHRpbmdzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgKDAsIHNldHRpbmdzXzEudmFsaWRhdGVTZXR0aW5ncykodGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU2V0dGluZ3NVcGRhdGUoKTtcbiAgICAgICAgdGhpcy5uZWVkVG9Qcm9jZXNzID0gdHJ1ZTsgLy8gVE9ETzogc29tZSBrZXlzIG1heSB3b3JrIHdpdGggb25seSBuZWVkVG9Tb2Z0UHJvY2VzcyBvciBldmVuIG5vdGhpbmdcbiAgICAgICAgdGhpcy5fc2NoZWR1bGVSZWZyZXNoKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTWV0aG9kIHVwZGF0aW5nIHRoZSB2YWx1ZSBvZiBhIGdpdmVuIHNldHRpbmcga2V5IHVzaW5nIHRoZSBwcm92aWRlZCBmdW5jdGlvbi5cbiAgICAgKiBOb3RlIHRoYXQgdGhpcyB3aWxsIHNjaGVkdWxlIGEgbmV3IHJlbmRlciBuZXh0IGZyYW1lLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgIGtleSAgICAgLSBUaGUgc2V0dGluZyBrZXkgdG8gc2V0LlxuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSB1cGRhdGVyIC0gVGhlIHVwZGF0ZSBmdW5jdGlvbi5cbiAgICAgKiBAcmV0dXJuIHtTaWdtYX1cbiAgICAgKi9cbiAgICBTaWdtYS5wcm90b3R5cGUudXBkYXRlU2V0dGluZyA9IGZ1bmN0aW9uIChrZXksIHVwZGF0ZXIpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5nc1trZXldID0gdXBkYXRlcih0aGlzLnNldHRpbmdzW2tleV0pO1xuICAgICAgICAoMCwgc2V0dGluZ3NfMS52YWxpZGF0ZVNldHRpbmdzKSh0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTZXR0aW5nc1VwZGF0ZSgpO1xuICAgICAgICB0aGlzLm5lZWRUb1Byb2Nlc3MgPSB0cnVlOyAvLyBUT0RPOiBzb21lIGtleXMgbWF5IHdvcmsgd2l0aCBvbmx5IG5lZWRUb1NvZnRQcm9jZXNzIG9yIGV2ZW4gbm90aGluZ1xuICAgICAgICB0aGlzLl9zY2hlZHVsZVJlZnJlc2goKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNZXRob2QgdXNlZCB0byByZXNpemUgdGhlIHJlbmRlcmVyLlxuICAgICAqXG4gICAgICogQHJldHVybiB7U2lnbWF9XG4gICAgICovXG4gICAgU2lnbWEucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHByZXZpb3VzV2lkdGggPSB0aGlzLndpZHRoLCBwcmV2aW91c0hlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5jb250YWluZXIub2Zmc2V0V2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5jb250YWluZXIub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB0aGlzLnBpeGVsUmF0aW8gPSAoMCwgdXRpbHNfMS5nZXRQaXhlbFJhdGlvKSgpO1xuICAgICAgICBpZiAodGhpcy53aWR0aCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYWxsb3dJbnZhbGlkQ29udGFpbmVyKVxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSAxO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNpZ21hOiBDb250YWluZXIgaGFzIG5vIHdpZHRoLiBZb3UgY2FuIHNldCB0aGUgYWxsb3dJbnZhbGlkQ29udGFpbmVyIHNldHRpbmcgdG8gdHJ1ZSB0byBzdG9wIHNlZWluZyB0aGlzIGVycm9yLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oZWlnaHQgPT09IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmFsbG93SW52YWxpZENvbnRhaW5lcilcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDE7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2lnbWE6IENvbnRhaW5lciBoYXMgbm8gaGVpZ2h0LiBZb3UgY2FuIHNldCB0aGUgYWxsb3dJbnZhbGlkQ29udGFpbmVyIHNldHRpbmcgdG8gdHJ1ZSB0byBzdG9wIHNlZWluZyB0aGlzIGVycm9yLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBub3RoaW5nIGhhcyBjaGFuZ2VkLCB3ZSBjYW4gc3RvcCByaWdodCBoZXJlXG4gICAgICAgIGlmIChwcmV2aW91c1dpZHRoID09PSB0aGlzLndpZHRoICYmIHByZXZpb3VzSGVpZ2h0ID09PSB0aGlzLmhlaWdodClcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB0aGlzLmVtaXQoXCJyZXNpemVcIik7XG4gICAgICAgIC8vIFNpemluZyBkb20gZWxlbWVudHNcbiAgICAgICAgZm9yICh2YXIgaWQgaW4gdGhpcy5lbGVtZW50cykge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRzW2lkXTtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgXCJweFwiO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBTaXppbmcgY2FudmFzIGNvbnRleHRzXG4gICAgICAgIGZvciAodmFyIGlkIGluIHRoaXMuY2FudmFzQ29udGV4dHMpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHNbaWRdLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHRoaXMud2lkdGggKiB0aGlzLnBpeGVsUmF0aW8gKyBcInB4XCIpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50c1tpZF0uc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIHRoaXMuaGVpZ2h0ICogdGhpcy5waXhlbFJhdGlvICsgXCJweFwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBpeGVsUmF0aW8gIT09IDEpXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0c1tpZF0uc2NhbGUodGhpcy5waXhlbFJhdGlvLCB0aGlzLnBpeGVsUmF0aW8pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNpemluZyBXZWJHTCBjb250ZXh0c1xuICAgICAgICBmb3IgKHZhciBpZCBpbiB0aGlzLndlYkdMQ29udGV4dHMpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHNbaWRdLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHRoaXMud2lkdGggKiB0aGlzLnBpeGVsUmF0aW8gKyBcInB4XCIpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50c1tpZF0uc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIHRoaXMuaGVpZ2h0ICogdGhpcy5waXhlbFJhdGlvICsgXCJweFwiKTtcbiAgICAgICAgICAgIHRoaXMud2ViR0xDb250ZXh0c1tpZF0udmlld3BvcnQoMCwgMCwgdGhpcy53aWR0aCAqIHRoaXMucGl4ZWxSYXRpbywgdGhpcy5oZWlnaHQgKiB0aGlzLnBpeGVsUmF0aW8pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTWV0aG9kIHVzZWQgdG8gY2xlYXIgYWxsIHRoZSBjYW52YXNlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1NpZ21hfVxuICAgICAqL1xuICAgIFNpZ21hLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy53ZWJHTENvbnRleHRzLm5vZGVzLmNsZWFyKHRoaXMud2ViR0xDb250ZXh0cy5ub2Rlcy5DT0xPUl9CVUZGRVJfQklUKTtcbiAgICAgICAgdGhpcy53ZWJHTENvbnRleHRzLmVkZ2VzLmNsZWFyKHRoaXMud2ViR0xDb250ZXh0cy5lZGdlcy5DT0xPUl9CVUZGRVJfQklUKTtcbiAgICAgICAgdGhpcy53ZWJHTENvbnRleHRzLmhvdmVyTm9kZXMuY2xlYXIodGhpcy53ZWJHTENvbnRleHRzLmhvdmVyTm9kZXMuQ09MT1JfQlVGRkVSX0JJVCk7XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dHMubGFiZWxzLmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dHMuaG92ZXJzLmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dHMuZWRnZUxhYmVscy5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1ldGhvZCB1c2VkIHRvIHJlZnJlc2ggYWxsIGNvbXB1dGVkIGRhdGEuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTaWdtYX1cbiAgICAgKi9cbiAgICBTaWdtYS5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5uZWVkVG9Qcm9jZXNzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmVmcmVzaCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1ldGhvZCB1c2VkIHRvIHJlZnJlc2ggYWxsIGNvbXB1dGVkIGRhdGEsIGF0IHRoZSBuZXh0IGF2YWlsYWJsZSBmcmFtZS5cbiAgICAgKiBJZiB0aGlzIG1ldGhvZCBoYXMgYWxyZWFkeSBiZWVuIGNhbGxlZCB0aGlzIGZyYW1lLCB0aGVuIGl0IHdpbGwgb25seSByZW5kZXIgb25jZSBhdCB0aGUgbmV4dCBhdmFpbGFibGUgZnJhbWUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTaWdtYX1cbiAgICAgKi9cbiAgICBTaWdtYS5wcm90b3R5cGUuc2NoZWR1bGVSZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm5lZWRUb1Byb2Nlc3MgPSB0cnVlO1xuICAgICAgICB0aGlzLl9zY2hlZHVsZVJlZnJlc2goKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNZXRob2QgdXNlZCB0byAodW4pem9vbSwgd2hpbGUgcHJlc2VydmluZyB0aGUgcG9zaXRpb24gb2YgYSB2aWV3cG9ydCBwb2ludC5cbiAgICAgKiBVc2VkIGZvciBpbnN0YW5jZSB0byB6b29tIFwib24gdGhlIG1vdXNlIGN1cnNvclwiLlxuICAgICAqXG4gICAgICogQHBhcmFtIHZpZXdwb3J0VGFyZ2V0XG4gICAgICogQHBhcmFtIG5ld1JhdGlvXG4gICAgICogQHJldHVybiB7Q2FtZXJhU3RhdGV9XG4gICAgICovXG4gICAgU2lnbWEucHJvdG90eXBlLmdldFZpZXdwb3J0Wm9vbWVkU3RhdGUgPSBmdW5jdGlvbiAodmlld3BvcnRUYXJnZXQsIG5ld1JhdGlvKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMuY2FtZXJhLmdldFN0YXRlKCksIHJhdGlvID0gX2EucmF0aW8sIGFuZ2xlID0gX2EuYW5nbGUsIHggPSBfYS54LCB5ID0gX2EueTtcbiAgICAgICAgLy8gVE9ETzogaGFuZGxlIG1heCB6b29tXG4gICAgICAgIHZhciByYXRpb0RpZmYgPSBuZXdSYXRpbyAvIHJhdGlvO1xuICAgICAgICB2YXIgY2VudGVyID0ge1xuICAgICAgICAgICAgeDogdGhpcy53aWR0aCAvIDIsXG4gICAgICAgICAgICB5OiB0aGlzLmhlaWdodCAvIDIsXG4gICAgICAgIH07XG4gICAgICAgIHZhciBncmFwaE1vdXNlUG9zaXRpb24gPSB0aGlzLnZpZXdwb3J0VG9GcmFtZWRHcmFwaCh2aWV3cG9ydFRhcmdldCk7XG4gICAgICAgIHZhciBncmFwaENlbnRlclBvc2l0aW9uID0gdGhpcy52aWV3cG9ydFRvRnJhbWVkR3JhcGgoY2VudGVyKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFuZ2xlOiBhbmdsZSxcbiAgICAgICAgICAgIHg6IChncmFwaE1vdXNlUG9zaXRpb24ueCAtIGdyYXBoQ2VudGVyUG9zaXRpb24ueCkgKiAoMSAtIHJhdGlvRGlmZikgKyB4LFxuICAgICAgICAgICAgeTogKGdyYXBoTW91c2VQb3NpdGlvbi55IC0gZ3JhcGhDZW50ZXJQb3NpdGlvbi55KSAqICgxIC0gcmF0aW9EaWZmKSArIHksXG4gICAgICAgICAgICByYXRpbzogbmV3UmF0aW8sXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNZXRob2QgcmV0dXJuaW5nIHRoZSBhYnN0cmFjdCByZWN0YW5nbGUgY29udGFpbmluZyB0aGUgZ3JhcGggYWNjb3JkaW5nXG4gICAgICogdG8gdGhlIGNhbWVyYSdzIHN0YXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7b2JqZWN0fSAtIFRoZSB2aWV3J3MgcmVjdGFuZ2xlLlxuICAgICAqL1xuICAgIFNpZ21hLnByb3RvdHlwZS52aWV3UmVjdGFuZ2xlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBUT0RPOiByZWR1Y2UgcmVsYXRpdmUgbWFyZ2luP1xuICAgICAgICB2YXIgbWFyZ2luWCA9ICgwICogdGhpcy53aWR0aCkgLyA4LCBtYXJnaW5ZID0gKDAgKiB0aGlzLmhlaWdodCkgLyA4O1xuICAgICAgICB2YXIgcDEgPSB0aGlzLnZpZXdwb3J0VG9GcmFtZWRHcmFwaCh7IHg6IDAgLSBtYXJnaW5YLCB5OiAwIC0gbWFyZ2luWSB9KSwgcDIgPSB0aGlzLnZpZXdwb3J0VG9GcmFtZWRHcmFwaCh7IHg6IHRoaXMud2lkdGggKyBtYXJnaW5YLCB5OiAwIC0gbWFyZ2luWSB9KSwgaCA9IHRoaXMudmlld3BvcnRUb0ZyYW1lZEdyYXBoKHsgeDogMCwgeTogdGhpcy5oZWlnaHQgKyBtYXJnaW5ZIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDE6IHAxLngsXG4gICAgICAgICAgICB5MTogcDEueSxcbiAgICAgICAgICAgIHgyOiBwMi54LFxuICAgICAgICAgICAgeTI6IHAyLnksXG4gICAgICAgICAgICBoZWlnaHQ6IHAyLnkgLSBoLnksXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNZXRob2QgcmV0dXJuaW5nIHRoZSBjb29yZGluYXRlcyBvZiBhIHBvaW50IGZyb20gdGhlIGZyYW1lZCBncmFwaCBzeXN0ZW0gdG8gdGhlIHZpZXdwb3J0IHN5c3RlbS4gSXQgYWxsb3dzXG4gICAgICogb3ZlcnJpZGluZyBhbnl0aGluZyB0aGF0IGlzIHVzZWQgdG8gZ2V0IHRoZSB0cmFuc2xhdGlvbiBtYXRyaXgsIG9yIGV2ZW4gdGhlIG1hdHJpeCBpdHNlbGYuXG4gICAgICpcbiAgICAgKiBCZSBjYXJlZnVsIGlmIG92ZXJyaWRpbmcgZGltZW5zaW9ucywgcGFkZGluZyBvciBjYW1lcmFTdGF0ZSwgYXMgdGhlIGNvbXB1dGF0aW9uIG9mIHRoZSBtYXRyaXggaXMgbm90IHRoZSBsaWdodGVzdFxuICAgICAqIG9mIGNvbXB1dGF0aW9ucy5cbiAgICAgKi9cbiAgICBTaWdtYS5wcm90b3R5cGUuZnJhbWVkR3JhcGhUb1ZpZXdwb3J0ID0gZnVuY3Rpb24gKGNvb3JkaW5hdGVzLCBvdmVycmlkZSkge1xuICAgICAgICBpZiAob3ZlcnJpZGUgPT09IHZvaWQgMCkgeyBvdmVycmlkZSA9IHt9OyB9XG4gICAgICAgIHZhciByZWNvbXB1dGVNYXRyaXggPSAhIW92ZXJyaWRlLmNhbWVyYVN0YXRlIHx8ICEhb3ZlcnJpZGUudmlld3BvcnREaW1lbnNpb25zIHx8ICEhb3ZlcnJpZGUuZ3JhcGhEaW1lbnNpb25zO1xuICAgICAgICB2YXIgbWF0cml4ID0gb3ZlcnJpZGUubWF0cml4XG4gICAgICAgICAgICA/IG92ZXJyaWRlLm1hdHJpeFxuICAgICAgICAgICAgOiByZWNvbXB1dGVNYXRyaXhcbiAgICAgICAgICAgICAgICA/ICgwLCB1dGlsc18xLm1hdHJpeEZyb21DYW1lcmEpKG92ZXJyaWRlLmNhbWVyYVN0YXRlIHx8IHRoaXMuY2FtZXJhLmdldFN0YXRlKCksIG92ZXJyaWRlLnZpZXdwb3J0RGltZW5zaW9ucyB8fCB0aGlzLmdldERpbWVuc2lvbnMoKSwgb3ZlcnJpZGUuZ3JhcGhEaW1lbnNpb25zIHx8IHRoaXMuZ2V0R3JhcGhEaW1lbnNpb25zKCksIG92ZXJyaWRlLnBhZGRpbmcgfHwgdGhpcy5nZXRTZXR0aW5nKFwic3RhZ2VQYWRkaW5nXCIpIHx8IDApXG4gICAgICAgICAgICAgICAgOiB0aGlzLm1hdHJpeDtcbiAgICAgICAgdmFyIHZpZXdwb3J0UG9zID0gKDAsIG1hdHJpY2VzXzEubXVsdGlwbHlWZWMyKShtYXRyaXgsIGNvb3JkaW5hdGVzKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6ICgoMSArIHZpZXdwb3J0UG9zLngpICogdGhpcy53aWR0aCkgLyAyLFxuICAgICAgICAgICAgeTogKCgxIC0gdmlld3BvcnRQb3MueSkgKiB0aGlzLmhlaWdodCkgLyAyLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTWV0aG9kIHJldHVybmluZyB0aGUgY29vcmRpbmF0ZXMgb2YgYSBwb2ludCBmcm9tIHRoZSB2aWV3cG9ydCBzeXN0ZW0gdG8gdGhlIGZyYW1lZCBncmFwaCBzeXN0ZW0uIEl0IGFsbG93c1xuICAgICAqIG92ZXJyaWRpbmcgYW55dGhpbmcgdGhhdCBpcyB1c2VkIHRvIGdldCB0aGUgdHJhbnNsYXRpb24gbWF0cml4LCBvciBldmVuIHRoZSBtYXRyaXggaXRzZWxmLlxuICAgICAqXG4gICAgICogQmUgY2FyZWZ1bCBpZiBvdmVycmlkaW5nIGRpbWVuc2lvbnMsIHBhZGRpbmcgb3IgY2FtZXJhU3RhdGUsIGFzIHRoZSBjb21wdXRhdGlvbiBvZiB0aGUgbWF0cml4IGlzIG5vdCB0aGUgbGlnaHRlc3RcbiAgICAgKiBvZiBjb21wdXRhdGlvbnMuXG4gICAgICovXG4gICAgU2lnbWEucHJvdG90eXBlLnZpZXdwb3J0VG9GcmFtZWRHcmFwaCA9IGZ1bmN0aW9uIChjb29yZGluYXRlcywgb3ZlcnJpZGUpIHtcbiAgICAgICAgaWYgKG92ZXJyaWRlID09PSB2b2lkIDApIHsgb3ZlcnJpZGUgPSB7fTsgfVxuICAgICAgICB2YXIgcmVjb21wdXRlTWF0cml4ID0gISFvdmVycmlkZS5jYW1lcmFTdGF0ZSB8fCAhIW92ZXJyaWRlLnZpZXdwb3J0RGltZW5zaW9ucyB8fCAhb3ZlcnJpZGUuZ3JhcGhEaW1lbnNpb25zO1xuICAgICAgICB2YXIgaW52TWF0cml4ID0gb3ZlcnJpZGUubWF0cml4XG4gICAgICAgICAgICA/IG92ZXJyaWRlLm1hdHJpeFxuICAgICAgICAgICAgOiByZWNvbXB1dGVNYXRyaXhcbiAgICAgICAgICAgICAgICA/ICgwLCB1dGlsc18xLm1hdHJpeEZyb21DYW1lcmEpKG92ZXJyaWRlLmNhbWVyYVN0YXRlIHx8IHRoaXMuY2FtZXJhLmdldFN0YXRlKCksIG92ZXJyaWRlLnZpZXdwb3J0RGltZW5zaW9ucyB8fCB0aGlzLmdldERpbWVuc2lvbnMoKSwgb3ZlcnJpZGUuZ3JhcGhEaW1lbnNpb25zIHx8IHRoaXMuZ2V0R3JhcGhEaW1lbnNpb25zKCksIG92ZXJyaWRlLnBhZGRpbmcgfHwgdGhpcy5nZXRTZXR0aW5nKFwic3RhZ2VQYWRkaW5nXCIpIHx8IDAsIHRydWUpXG4gICAgICAgICAgICAgICAgOiB0aGlzLmludk1hdHJpeDtcbiAgICAgICAgdmFyIHJlcyA9ICgwLCBtYXRyaWNlc18xLm11bHRpcGx5VmVjMikoaW52TWF0cml4LCB7XG4gICAgICAgICAgICB4OiAoY29vcmRpbmF0ZXMueCAvIHRoaXMud2lkdGgpICogMiAtIDEsXG4gICAgICAgICAgICB5OiAxIC0gKGNvb3JkaW5hdGVzLnkgLyB0aGlzLmhlaWdodCkgKiAyLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlzTmFOKHJlcy54KSlcbiAgICAgICAgICAgIHJlcy54ID0gMDtcbiAgICAgICAgaWYgKGlzTmFOKHJlcy55KSlcbiAgICAgICAgICAgIHJlcy55ID0gMDtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1ldGhvZCB1c2VkIHRvIHRyYW5zbGF0ZSBhIHBvaW50J3MgY29vcmRpbmF0ZXMgZnJvbSB0aGUgdmlld3BvcnQgc3lzdGVtIChwaXhlbCBkaXN0YW5jZSBmcm9tIHRoZSB0b3AtbGVmdCBvZiB0aGVcbiAgICAgKiBzdGFnZSkgdG8gdGhlIGdyYXBoIHN5c3RlbSAodGhlIHJlZmVyZW5jZSBzeXN0ZW0gb2YgZGF0YSBhcyB0aGV5IGFyZSBpbiB0aGUgZ2l2ZW4gZ3JhcGggaW5zdGFuY2UpLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgYWNjZXB0cyBhbiBvcHRpb25hbCBjYW1lcmEgd2hpY2ggY2FuIGJlIHVzZWZ1bCBpZiB5b3UgbmVlZCB0byB0cmFuc2xhdGUgY29vcmRpbmF0ZXNcbiAgICAgKiBiYXNlZCBvbiBhIGRpZmZlcmVudCB2aWV3IHRoYW4gdGhlIG9uZSBiZWluZyBjdXJyZW50bHkgYmVpbmcgZGlzcGxheWVkIG9uIHNjcmVlbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Q29vcmRpbmF0ZXN9ICAgICAgICAgICAgICAgICAgdmlld3BvcnRQb2ludFxuICAgICAqIEBwYXJhbSB7Q29vcmRpbmF0ZUNvbnZlcnNpb25PdmVycmlkZX0gb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBTaWdtYS5wcm90b3R5cGUudmlld3BvcnRUb0dyYXBoID0gZnVuY3Rpb24gKHZpZXdwb3J0UG9pbnQsIG92ZXJyaWRlKSB7XG4gICAgICAgIGlmIChvdmVycmlkZSA9PT0gdm9pZCAwKSB7IG92ZXJyaWRlID0ge307IH1cbiAgICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXphdGlvbkZ1bmN0aW9uLmludmVyc2UodGhpcy52aWV3cG9ydFRvRnJhbWVkR3JhcGgodmlld3BvcnRQb2ludCwgb3ZlcnJpZGUpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1ldGhvZCB1c2VkIHRvIHRyYW5zbGF0ZSBhIHBvaW50J3MgY29vcmRpbmF0ZXMgZnJvbSB0aGUgZ3JhcGggc3lzdGVtICh0aGUgcmVmZXJlbmNlIHN5c3RlbSBvZiBkYXRhIGFzIHRoZXkgYXJlIGluXG4gICAgICogdGhlIGdpdmVuIGdyYXBoIGluc3RhbmNlKSB0byB0aGUgdmlld3BvcnQgc3lzdGVtIChwaXhlbCBkaXN0YW5jZSBmcm9tIHRoZSB0b3AtbGVmdCBvZiB0aGUgc3RhZ2UpLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgYWNjZXB0cyBhbiBvcHRpb25hbCBjYW1lcmEgd2hpY2ggY2FuIGJlIHVzZWZ1bCBpZiB5b3UgbmVlZCB0byB0cmFuc2xhdGUgY29vcmRpbmF0ZXNcbiAgICAgKiBiYXNlZCBvbiBhIGRpZmZlcmVudCB2aWV3IHRoYW4gdGhlIG9uZSBiZWluZyBjdXJyZW50bHkgYmVpbmcgZGlzcGxheWVkIG9uIHNjcmVlbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Q29vcmRpbmF0ZXN9ICAgICAgICAgICAgICAgICAgZ3JhcGhQb2ludFxuICAgICAqIEBwYXJhbSB7Q29vcmRpbmF0ZUNvbnZlcnNpb25PdmVycmlkZX0gb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBTaWdtYS5wcm90b3R5cGUuZ3JhcGhUb1ZpZXdwb3J0ID0gZnVuY3Rpb24gKGdyYXBoUG9pbnQsIG92ZXJyaWRlKSB7XG4gICAgICAgIGlmIChvdmVycmlkZSA9PT0gdm9pZCAwKSB7IG92ZXJyaWRlID0ge307IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZnJhbWVkR3JhcGhUb1ZpZXdwb3J0KHRoaXMubm9ybWFsaXphdGlvbkZ1bmN0aW9uKGdyYXBoUG9pbnQpLCBvdmVycmlkZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNZXRob2QgcmV0dXJuaW5nIHRoZSBncmFwaCdzIGJvdW5kaW5nIGJveC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3sgeDogRXh0ZW50LCB5OiBFeHRlbnQgfX1cbiAgICAgKi9cbiAgICBTaWdtYS5wcm90b3R5cGUuZ2V0QkJveCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICgwLCB1dGlsc18xLmdyYXBoRXh0ZW50KSh0aGlzLmdyYXBoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1ldGhvZCByZXR1cm5pbmcgdGhlIGdyYXBoJ3MgY3VzdG9tIGJvdW5kaW5nIGJveCwgaWYgYW55LlxuICAgICAqXG4gICAgICogQHJldHVybiB7eyB4OiBFeHRlbnQsIHk6IEV4dGVudCB9IHwgbnVsbH1cbiAgICAgKi9cbiAgICBTaWdtYS5wcm90b3R5cGUuZ2V0Q3VzdG9tQkJveCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tQkJveDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1ldGhvZCB1c2VkIHRvIG92ZXJyaWRlIHRoZSBncmFwaCdzIGJvdW5kaW5nIGJveCB3aXRoIGEgY3VzdG9tIG9uZS4gR2l2ZSBgbnVsbGAgYXMgdGhlIGFyZ3VtZW50IHRvIHN0b3Agb3ZlcnJpZGluZy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1NpZ21hfVxuICAgICAqL1xuICAgIFNpZ21hLnByb3RvdHlwZS5zZXRDdXN0b21CQm94ID0gZnVuY3Rpb24gKGN1c3RvbUJCb3gpIHtcbiAgICAgICAgdGhpcy5jdXN0b21CQm94ID0gY3VzdG9tQkJveDtcbiAgICAgICAgdGhpcy5fc2NoZWR1bGVSZWZyZXNoKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTWV0aG9kIHVzZWQgdG8gc2h1dCB0aGUgY29udGFpbmVyICYgcmVsZWFzZSBldmVudCBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt1bmRlZmluZWR9XG4gICAgICovXG4gICAgU2lnbWEucHJvdG90eXBlLmtpbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEVtaXR0aW5nIFwia2lsbFwiIGV2ZW50cyBzbyB0aGF0IHBsdWdpbnMgYW5kIHN1Y2ggY2FuIGNsZWFudXBcbiAgICAgICAgdGhpcy5lbWl0KFwia2lsbFwiKTtcbiAgICAgICAgLy8gUmVsZWFzaW5nIGV2ZW50c1xuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgICAgICAvLyBSZWxlYXNpbmcgY2FtZXJhIGhhbmRsZXJzXG4gICAgICAgIHRoaXMuY2FtZXJhLnJlbW92ZUxpc3RlbmVyKFwidXBkYXRlZFwiLCB0aGlzLmFjdGl2ZUxpc3RlbmVycy5jYW1lcmEpO1xuICAgICAgICAvLyBSZWxlYXNpbmcgRE9NIGV2ZW50cyAmIGNhcHRvcnNcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5hY3RpdmVMaXN0ZW5lcnMuaGFuZGxlUmVzaXplKTtcbiAgICAgICAgdGhpcy5tb3VzZUNhcHRvci5raWxsKCk7XG4gICAgICAgIHRoaXMudG91Y2hDYXB0b3Iua2lsbCgpO1xuICAgICAgICAvLyBSZWxlYXNpbmcgZ3JhcGggaGFuZGxlcnNcbiAgICAgICAgdGhpcy51bmJpbmRHcmFwaEhhbmRsZXJzKCk7XG4gICAgICAgIC8vIFJlbGVhc2luZyBjYWNoZSAmIHN0YXRlXG4gICAgICAgIHRoaXMucXVhZHRyZWUgPSBuZXcgcXVhZHRyZWVfMS5kZWZhdWx0KCk7XG4gICAgICAgIHRoaXMubm9kZURhdGFDYWNoZSA9IHt9O1xuICAgICAgICB0aGlzLmVkZ2VEYXRhQ2FjaGUgPSB7fTtcbiAgICAgICAgdGhpcy5ub2Rlc1dpdGhGb3JjZWRMYWJlbHMgPSBbXTtcbiAgICAgICAgdGhpcy5lZGdlc1dpdGhGb3JjZWRMYWJlbHMgPSBbXTtcbiAgICAgICAgdGhpcy5oaWdobGlnaHRlZE5vZGVzLmNsZWFyKCk7XG4gICAgICAgIC8vIENsZWFyaW5nIGZyYW1lc1xuICAgICAgICBpZiAodGhpcy5yZW5kZXJGcmFtZSkge1xuICAgICAgICAgICAgKDAsIHV0aWxzXzEuY2FuY2VsRnJhbWUpKHRoaXMucmVuZGVyRnJhbWUpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJGcmFtZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmVuZGVySGlnaGxpZ2h0ZWROb2Rlc0ZyYW1lKSB7XG4gICAgICAgICAgICAoMCwgdXRpbHNfMS5jYW5jZWxGcmFtZSkodGhpcy5yZW5kZXJIaWdobGlnaHRlZE5vZGVzRnJhbWUpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJIaWdobGlnaHRlZE5vZGVzRnJhbWUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIERlc3Ryb3lpbmcgY2FudmFzZXNcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpXG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTWV0aG9kIHVzZWQgdG8gc2NhbGUgdGhlIGdpdmVuIHNpemUgYWNjb3JkaW5nIHRvIHRoZSBjYW1lcmEncyByYXRpbywgaS5lLlxuICAgICAqIHpvb21pbmcgc3RhdGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IHNpemUgLSBUaGUgc2l6ZSB0byBzY2FsZSAobm9kZSBzaXplLCBlZGdlIHRoaWNrbmVzcyBldGMuKS5cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9ICAgICAgLSBUaGUgc2NhbGVkIHNpemUuXG4gICAgICovXG4gICAgU2lnbWEucHJvdG90eXBlLnNjYWxlU2l6ZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gICAgICAgIHJldHVybiBzaXplIC8gdGhpcy5jYW1lcmFTaXplUmF0aW87XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNZXRob2QgdGhhdCByZXR1cm5zIHRoZSBjb2xsZWN0aW9uIG9mIGFsbCB1c2VkIGNhbnZhc2VzLlxuICAgICAqIEF0IHRoZSBtb21lbnQsIHRoZSBpbnN0YW50aWF0ZWQgY2FudmFzZXMgYXJlIHRoZSBmb2xsb3dpbmcsIGFuZCBpbiB0aGVcbiAgICAgKiBmb2xsb3dpbmcgb3JkZXIgaW4gdGhlIERPTTpcbiAgICAgKiAtIGBlZGdlc2BcbiAgICAgKiAtIGBub2Rlc2BcbiAgICAgKiAtIGBlZGdlTGFiZWxzYFxuICAgICAqIC0gYGxhYmVsc2BcbiAgICAgKiAtIGBob3ZlcnNgXG4gICAgICogLSBgaG92ZXJOb2Rlc2BcbiAgICAgKiAtIGBtb3VzZWBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1BsYWluT2JqZWN0PEhUTUxDYW52YXNFbGVtZW50Pn0gLSBUaGUgY29sbGVjdGlvbiBvZiBjYW52YXNlcy5cbiAgICAgKi9cbiAgICBTaWdtYS5wcm90b3R5cGUuZ2V0Q2FudmFzZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgdGhpcy5lbGVtZW50cyk7XG4gICAgfTtcbiAgICByZXR1cm4gU2lnbWE7XG59KHR5cGVzXzEuVHlwZWRFdmVudEVtaXR0ZXIpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNpZ21hO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5UeXBlZEV2ZW50RW1pdHRlciA9IHZvaWQgMDtcbi8qKlxuICogU2lnbWEuanMgVHlwZXNcbiAqID09PT09PT09PT09PT09PVxuICpcbiAqIFZhcmlvdXMgdHlwZSBkZWNsYXJhdGlvbnMgdXNlZCB0aHJvdWdob3V0IHRoZSBsaWJyYXJ5LlxuICogQG1vZHVsZVxuICovXG52YXIgZXZlbnRzXzEgPSByZXF1aXJlKFwiZXZlbnRzXCIpO1xudmFyIFR5cGVkRXZlbnRFbWl0dGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUeXBlZEV2ZW50RW1pdHRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUeXBlZEV2ZW50RW1pdHRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMucmF3RW1pdHRlciA9IF90aGlzO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBUeXBlZEV2ZW50RW1pdHRlcjtcbn0oZXZlbnRzXzEuRXZlbnRFbWl0dGVyKSk7XG5leHBvcnRzLlR5cGVkRXZlbnRFbWl0dGVyID0gVHlwZWRFdmVudEVtaXR0ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuYW5pbWF0ZU5vZGVzID0gZXhwb3J0cy5BTklNQVRFX0RFRkFVTFRTID0gdm9pZCAwO1xudmFyIGluZGV4XzEgPSByZXF1aXJlKFwiLi9pbmRleFwiKTtcbnZhciBlYXNpbmdzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZWFzaW5nc1wiKSk7XG5leHBvcnRzLkFOSU1BVEVfREVGQVVMVFMgPSB7XG4gICAgZWFzaW5nOiBcInF1YWRyYXRpY0luT3V0XCIsXG4gICAgZHVyYXRpb246IDE1MCxcbn07XG4vKipcbiAqIEZ1bmN0aW9uIHVzZWQgdG8gYW5pbWF0ZSB0aGUgbm9kZXMuXG4gKi9cbmZ1bmN0aW9uIGFuaW1hdGVOb2RlcyhncmFwaCwgdGFyZ2V0cywgb3B0cywgY2FsbGJhY2spIHtcbiAgICB2YXIgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGV4cG9ydHMuQU5JTUFURV9ERUZBVUxUUywgb3B0cyk7XG4gICAgdmFyIGVhc2luZyA9IHR5cGVvZiBvcHRpb25zLmVhc2luZyA9PT0gXCJmdW5jdGlvblwiID8gb3B0aW9ucy5lYXNpbmcgOiBlYXNpbmdzXzEuZGVmYXVsdFtvcHRpb25zLmVhc2luZ107XG4gICAgdmFyIHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgc3RhcnRQb3NpdGlvbnMgPSB7fTtcbiAgICBmb3IgKHZhciBub2RlIGluIHRhcmdldHMpIHtcbiAgICAgICAgdmFyIGF0dHJzID0gdGFyZ2V0c1tub2RlXTtcbiAgICAgICAgc3RhcnRQb3NpdGlvbnNbbm9kZV0gPSB7fTtcbiAgICAgICAgZm9yICh2YXIgayBpbiBhdHRycylcbiAgICAgICAgICAgIHN0YXJ0UG9zaXRpb25zW25vZGVdW2tdID0gZ3JhcGguZ2V0Tm9kZUF0dHJpYnV0ZShub2RlLCBrKTtcbiAgICB9XG4gICAgdmFyIGZyYW1lID0gbnVsbDtcbiAgICB2YXIgc3RlcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnJhbWUgPSBudWxsO1xuICAgICAgICB2YXIgcCA9IChEYXRlLm5vdygpIC0gc3RhcnQpIC8gb3B0aW9ucy5kdXJhdGlvbjtcbiAgICAgICAgaWYgKHAgPj0gMSkge1xuICAgICAgICAgICAgLy8gQW5pbWF0aW9uIGlzIGRvbmVcbiAgICAgICAgICAgIGZvciAodmFyIG5vZGUgaW4gdGFyZ2V0cykge1xuICAgICAgICAgICAgICAgIHZhciBhdHRycyA9IHRhcmdldHNbbm9kZV07XG4gICAgICAgICAgICAgICAgLy8gV2UgdXNlIGdpdmVuIHZhbHVlcyB0byBhdm9pZCBwcmVjaXNpb24gaXNzdWVzIGFuZCBmb3IgY29udmVuaWVuY2VcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrIGluIGF0dHJzKVxuICAgICAgICAgICAgICAgICAgICBncmFwaC5zZXROb2RlQXR0cmlidXRlKG5vZGUsIGssIGF0dHJzW2tdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHAgPSBlYXNpbmcocCk7XG4gICAgICAgIGZvciAodmFyIG5vZGUgaW4gdGFyZ2V0cykge1xuICAgICAgICAgICAgdmFyIGF0dHJzID0gdGFyZ2V0c1tub2RlXTtcbiAgICAgICAgICAgIHZhciBzID0gc3RhcnRQb3NpdGlvbnNbbm9kZV07XG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIGF0dHJzKVxuICAgICAgICAgICAgICAgIGdyYXBoLnNldE5vZGVBdHRyaWJ1dGUobm9kZSwgaywgYXR0cnNba10gKiBwICsgc1trXSAqICgxIC0gcCkpO1xuICAgICAgICB9XG4gICAgICAgIGZyYW1lID0gKDAsIGluZGV4XzEucmVxdWVzdEZyYW1lKShzdGVwKTtcbiAgICB9O1xuICAgIHN0ZXAoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoZnJhbWUpXG4gICAgICAgICAgICAoMCwgaW5kZXhfMS5jYW5jZWxGcmFtZSkoZnJhbWUpO1xuICAgIH07XG59XG5leHBvcnRzLmFuaW1hdGVOb2RlcyA9IGFuaW1hdGVOb2RlcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5IVE1MX0NPTE9SUyA9IHZvaWQgMDtcbmV4cG9ydHMuSFRNTF9DT0xPUlMgPSB7XG4gICAgYmxhY2s6IFwiIzAwMDAwMFwiLFxuICAgIHNpbHZlcjogXCIjQzBDMEMwXCIsXG4gICAgZ3JheTogXCIjODA4MDgwXCIsXG4gICAgZ3JleTogXCIjODA4MDgwXCIsXG4gICAgd2hpdGU6IFwiI0ZGRkZGRlwiLFxuICAgIG1hcm9vbjogXCIjODAwMDAwXCIsXG4gICAgcmVkOiBcIiNGRjAwMDBcIixcbiAgICBwdXJwbGU6IFwiIzgwMDA4MFwiLFxuICAgIGZ1Y2hzaWE6IFwiI0ZGMDBGRlwiLFxuICAgIGdyZWVuOiBcIiMwMDgwMDBcIixcbiAgICBsaW1lOiBcIiMwMEZGMDBcIixcbiAgICBvbGl2ZTogXCIjODA4MDAwXCIsXG4gICAgeWVsbG93OiBcIiNGRkZGMDBcIixcbiAgICBuYXZ5OiBcIiMwMDAwODBcIixcbiAgICBibHVlOiBcIiMwMDAwRkZcIixcbiAgICB0ZWFsOiBcIiMwMDgwODBcIixcbiAgICBhcXVhOiBcIiMwMEZGRkZcIixcbiAgICBkYXJrYmx1ZTogXCIjMDAwMDhCXCIsXG4gICAgbWVkaXVtYmx1ZTogXCIjMDAwMENEXCIsXG4gICAgZGFya2dyZWVuOiBcIiMwMDY0MDBcIixcbiAgICBkYXJrY3lhbjogXCIjMDA4QjhCXCIsXG4gICAgZGVlcHNreWJsdWU6IFwiIzAwQkZGRlwiLFxuICAgIGRhcmt0dXJxdW9pc2U6IFwiIzAwQ0VEMVwiLFxuICAgIG1lZGl1bXNwcmluZ2dyZWVuOiBcIiMwMEZBOUFcIixcbiAgICBzcHJpbmdncmVlbjogXCIjMDBGRjdGXCIsXG4gICAgY3lhbjogXCIjMDBGRkZGXCIsXG4gICAgbWlkbmlnaHRibHVlOiBcIiMxOTE5NzBcIixcbiAgICBkb2RnZXJibHVlOiBcIiMxRTkwRkZcIixcbiAgICBsaWdodHNlYWdyZWVuOiBcIiMyMEIyQUFcIixcbiAgICBmb3Jlc3RncmVlbjogXCIjMjI4QjIyXCIsXG4gICAgc2VhZ3JlZW46IFwiIzJFOEI1N1wiLFxuICAgIGRhcmtzbGF0ZWdyYXk6IFwiIzJGNEY0RlwiLFxuICAgIGRhcmtzbGF0ZWdyZXk6IFwiIzJGNEY0RlwiLFxuICAgIGxpbWVncmVlbjogXCIjMzJDRDMyXCIsXG4gICAgbWVkaXVtc2VhZ3JlZW46IFwiIzNDQjM3MVwiLFxuICAgIHR1cnF1b2lzZTogXCIjNDBFMEQwXCIsXG4gICAgcm95YWxibHVlOiBcIiM0MTY5RTFcIixcbiAgICBzdGVlbGJsdWU6IFwiIzQ2ODJCNFwiLFxuICAgIGRhcmtzbGF0ZWJsdWU6IFwiIzQ4M0Q4QlwiLFxuICAgIG1lZGl1bXR1cnF1b2lzZTogXCIjNDhEMUNDXCIsXG4gICAgaW5kaWdvOiBcIiM0QjAwODJcIixcbiAgICBkYXJrb2xpdmVncmVlbjogXCIjNTU2QjJGXCIsXG4gICAgY2FkZXRibHVlOiBcIiM1RjlFQTBcIixcbiAgICBjb3JuZmxvd2VyYmx1ZTogXCIjNjQ5NUVEXCIsXG4gICAgcmViZWNjYXB1cnBsZTogXCIjNjYzMzk5XCIsXG4gICAgbWVkaXVtYXF1YW1hcmluZTogXCIjNjZDREFBXCIsXG4gICAgZGltZ3JheTogXCIjNjk2OTY5XCIsXG4gICAgZGltZ3JleTogXCIjNjk2OTY5XCIsXG4gICAgc2xhdGVibHVlOiBcIiM2QTVBQ0RcIixcbiAgICBvbGl2ZWRyYWI6IFwiIzZCOEUyM1wiLFxuICAgIHNsYXRlZ3JheTogXCIjNzA4MDkwXCIsXG4gICAgc2xhdGVncmV5OiBcIiM3MDgwOTBcIixcbiAgICBsaWdodHNsYXRlZ3JheTogXCIjNzc4ODk5XCIsXG4gICAgbGlnaHRzbGF0ZWdyZXk6IFwiIzc3ODg5OVwiLFxuICAgIG1lZGl1bXNsYXRlYmx1ZTogXCIjN0I2OEVFXCIsXG4gICAgbGF3bmdyZWVuOiBcIiM3Q0ZDMDBcIixcbiAgICBjaGFydHJldXNlOiBcIiM3RkZGMDBcIixcbiAgICBhcXVhbWFyaW5lOiBcIiM3RkZGRDRcIixcbiAgICBza3libHVlOiBcIiM4N0NFRUJcIixcbiAgICBsaWdodHNreWJsdWU6IFwiIzg3Q0VGQVwiLFxuICAgIGJsdWV2aW9sZXQ6IFwiIzhBMkJFMlwiLFxuICAgIGRhcmtyZWQ6IFwiIzhCMDAwMFwiLFxuICAgIGRhcmttYWdlbnRhOiBcIiM4QjAwOEJcIixcbiAgICBzYWRkbGVicm93bjogXCIjOEI0NTEzXCIsXG4gICAgZGFya3NlYWdyZWVuOiBcIiM4RkJDOEZcIixcbiAgICBsaWdodGdyZWVuOiBcIiM5MEVFOTBcIixcbiAgICBtZWRpdW1wdXJwbGU6IFwiIzkzNzBEQlwiLFxuICAgIGRhcmt2aW9sZXQ6IFwiIzk0MDBEM1wiLFxuICAgIHBhbGVncmVlbjogXCIjOThGQjk4XCIsXG4gICAgZGFya29yY2hpZDogXCIjOTkzMkNDXCIsXG4gICAgeWVsbG93Z3JlZW46IFwiIzlBQ0QzMlwiLFxuICAgIHNpZW5uYTogXCIjQTA1MjJEXCIsXG4gICAgYnJvd246IFwiI0E1MkEyQVwiLFxuICAgIGRhcmtncmF5OiBcIiNBOUE5QTlcIixcbiAgICBkYXJrZ3JleTogXCIjQTlBOUE5XCIsXG4gICAgbGlnaHRibHVlOiBcIiNBREQ4RTZcIixcbiAgICBncmVlbnllbGxvdzogXCIjQURGRjJGXCIsXG4gICAgcGFsZXR1cnF1b2lzZTogXCIjQUZFRUVFXCIsXG4gICAgbGlnaHRzdGVlbGJsdWU6IFwiI0IwQzRERVwiLFxuICAgIHBvd2RlcmJsdWU6IFwiI0IwRTBFNlwiLFxuICAgIGZpcmVicmljazogXCIjQjIyMjIyXCIsXG4gICAgZGFya2dvbGRlbnJvZDogXCIjQjg4NjBCXCIsXG4gICAgbWVkaXVtb3JjaGlkOiBcIiNCQTU1RDNcIixcbiAgICByb3N5YnJvd246IFwiI0JDOEY4RlwiLFxuICAgIGRhcmtraGFraTogXCIjQkRCNzZCXCIsXG4gICAgbWVkaXVtdmlvbGV0cmVkOiBcIiNDNzE1ODVcIixcbiAgICBpbmRpYW5yZWQ6IFwiI0NENUM1Q1wiLFxuICAgIHBlcnU6IFwiI0NEODUzRlwiLFxuICAgIGNob2NvbGF0ZTogXCIjRDI2OTFFXCIsXG4gICAgdGFuOiBcIiNEMkI0OENcIixcbiAgICBsaWdodGdyYXk6IFwiI0QzRDNEM1wiLFxuICAgIGxpZ2h0Z3JleTogXCIjRDNEM0QzXCIsXG4gICAgdGhpc3RsZTogXCIjRDhCRkQ4XCIsXG4gICAgb3JjaGlkOiBcIiNEQTcwRDZcIixcbiAgICBnb2xkZW5yb2Q6IFwiI0RBQTUyMFwiLFxuICAgIHBhbGV2aW9sZXRyZWQ6IFwiI0RCNzA5M1wiLFxuICAgIGNyaW1zb246IFwiI0RDMTQzQ1wiLFxuICAgIGdhaW5zYm9ybzogXCIjRENEQ0RDXCIsXG4gICAgcGx1bTogXCIjRERBMEREXCIsXG4gICAgYnVybHl3b29kOiBcIiNERUI4ODdcIixcbiAgICBsaWdodGN5YW46IFwiI0UwRkZGRlwiLFxuICAgIGxhdmVuZGVyOiBcIiNFNkU2RkFcIixcbiAgICBkYXJrc2FsbW9uOiBcIiNFOTk2N0FcIixcbiAgICB2aW9sZXQ6IFwiI0VFODJFRVwiLFxuICAgIHBhbGVnb2xkZW5yb2Q6IFwiI0VFRThBQVwiLFxuICAgIGxpZ2h0Y29yYWw6IFwiI0YwODA4MFwiLFxuICAgIGtoYWtpOiBcIiNGMEU2OENcIixcbiAgICBhbGljZWJsdWU6IFwiI0YwRjhGRlwiLFxuICAgIGhvbmV5ZGV3OiBcIiNGMEZGRjBcIixcbiAgICBhenVyZTogXCIjRjBGRkZGXCIsXG4gICAgc2FuZHlicm93bjogXCIjRjRBNDYwXCIsXG4gICAgd2hlYXQ6IFwiI0Y1REVCM1wiLFxuICAgIGJlaWdlOiBcIiNGNUY1RENcIixcbiAgICB3aGl0ZXNtb2tlOiBcIiNGNUY1RjVcIixcbiAgICBtaW50Y3JlYW06IFwiI0Y1RkZGQVwiLFxuICAgIGdob3N0d2hpdGU6IFwiI0Y4RjhGRlwiLFxuICAgIHNhbG1vbjogXCIjRkE4MDcyXCIsXG4gICAgYW50aXF1ZXdoaXRlOiBcIiNGQUVCRDdcIixcbiAgICBsaW5lbjogXCIjRkFGMEU2XCIsXG4gICAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6IFwiI0ZBRkFEMlwiLFxuICAgIG9sZGxhY2U6IFwiI0ZERjVFNlwiLFxuICAgIG1hZ2VudGE6IFwiI0ZGMDBGRlwiLFxuICAgIGRlZXBwaW5rOiBcIiNGRjE0OTNcIixcbiAgICBvcmFuZ2VyZWQ6IFwiI0ZGNDUwMFwiLFxuICAgIHRvbWF0bzogXCIjRkY2MzQ3XCIsXG4gICAgaG90cGluazogXCIjRkY2OUI0XCIsXG4gICAgY29yYWw6IFwiI0ZGN0Y1MFwiLFxuICAgIGRhcmtvcmFuZ2U6IFwiI0ZGOEMwMFwiLFxuICAgIGxpZ2h0c2FsbW9uOiBcIiNGRkEwN0FcIixcbiAgICBvcmFuZ2U6IFwiI0ZGQTUwMFwiLFxuICAgIGxpZ2h0cGluazogXCIjRkZCNkMxXCIsXG4gICAgcGluazogXCIjRkZDMENCXCIsXG4gICAgZ29sZDogXCIjRkZENzAwXCIsXG4gICAgcGVhY2hwdWZmOiBcIiNGRkRBQjlcIixcbiAgICBuYXZham93aGl0ZTogXCIjRkZERUFEXCIsXG4gICAgbW9jY2FzaW46IFwiI0ZGRTRCNVwiLFxuICAgIGJpc3F1ZTogXCIjRkZFNEM0XCIsXG4gICAgbWlzdHlyb3NlOiBcIiNGRkU0RTFcIixcbiAgICBibGFuY2hlZGFsbW9uZDogXCIjRkZFQkNEXCIsXG4gICAgcGFwYXlhd2hpcDogXCIjRkZFRkQ1XCIsXG4gICAgbGF2ZW5kZXJibHVzaDogXCIjRkZGMEY1XCIsXG4gICAgc2Vhc2hlbGw6IFwiI0ZGRjVFRVwiLFxuICAgIGNvcm5zaWxrOiBcIiNGRkY4RENcIixcbiAgICBsZW1vbmNoaWZmb246IFwiI0ZGRkFDRFwiLFxuICAgIGZsb3JhbHdoaXRlOiBcIiNGRkZBRjBcIixcbiAgICBzbm93OiBcIiNGRkZBRkFcIixcbiAgICBsaWdodHllbGxvdzogXCIjRkZGRkUwXCIsXG4gICAgaXZvcnk6IFwiI0ZGRkZGMFwiLFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jdWJpY0luT3V0ID0gZXhwb3J0cy5jdWJpY091dCA9IGV4cG9ydHMuY3ViaWNJbiA9IGV4cG9ydHMucXVhZHJhdGljSW5PdXQgPSBleHBvcnRzLnF1YWRyYXRpY091dCA9IGV4cG9ydHMucXVhZHJhdGljSW4gPSBleHBvcnRzLmxpbmVhciA9IHZvaWQgMDtcbi8qKlxuICogU2lnbWEuanMgRWFzaW5nc1xuICogPT09PT09PT09PT09PT09PT1cbiAqXG4gKiBIYW5keSBjb2xsZWN0aW9uIG9mIGVhc2luZyBmdW5jdGlvbnMuXG4gKiBAbW9kdWxlXG4gKi9cbnZhciBsaW5lYXIgPSBmdW5jdGlvbiAoaykgeyByZXR1cm4gazsgfTtcbmV4cG9ydHMubGluZWFyID0gbGluZWFyO1xudmFyIHF1YWRyYXRpY0luID0gZnVuY3Rpb24gKGspIHsgcmV0dXJuIGsgKiBrOyB9O1xuZXhwb3J0cy5xdWFkcmF0aWNJbiA9IHF1YWRyYXRpY0luO1xudmFyIHF1YWRyYXRpY091dCA9IGZ1bmN0aW9uIChrKSB7IHJldHVybiBrICogKDIgLSBrKTsgfTtcbmV4cG9ydHMucXVhZHJhdGljT3V0ID0gcXVhZHJhdGljT3V0O1xudmFyIHF1YWRyYXRpY0luT3V0ID0gZnVuY3Rpb24gKGspIHtcbiAgICBpZiAoKGsgKj0gMikgPCAxKVxuICAgICAgICByZXR1cm4gMC41ICogayAqIGs7XG4gICAgcmV0dXJuIC0wLjUgKiAoLS1rICogKGsgLSAyKSAtIDEpO1xufTtcbmV4cG9ydHMucXVhZHJhdGljSW5PdXQgPSBxdWFkcmF0aWNJbk91dDtcbnZhciBjdWJpY0luID0gZnVuY3Rpb24gKGspIHsgcmV0dXJuIGsgKiBrICogazsgfTtcbmV4cG9ydHMuY3ViaWNJbiA9IGN1YmljSW47XG52YXIgY3ViaWNPdXQgPSBmdW5jdGlvbiAoaykgeyByZXR1cm4gLS1rICogayAqIGsgKyAxOyB9O1xuZXhwb3J0cy5jdWJpY091dCA9IGN1YmljT3V0O1xudmFyIGN1YmljSW5PdXQgPSBmdW5jdGlvbiAoaykge1xuICAgIGlmICgoayAqPSAyKSA8IDEpXG4gICAgICAgIHJldHVybiAwLjUgKiBrICogayAqIGs7XG4gICAgcmV0dXJuIDAuNSAqICgoayAtPSAyKSAqIGsgKiBrICsgMik7XG59O1xuZXhwb3J0cy5jdWJpY0luT3V0ID0gY3ViaWNJbk91dDtcbnZhciBlYXNpbmdzID0ge1xuICAgIGxpbmVhcjogZXhwb3J0cy5saW5lYXIsXG4gICAgcXVhZHJhdGljSW46IGV4cG9ydHMucXVhZHJhdGljSW4sXG4gICAgcXVhZHJhdGljT3V0OiBleHBvcnRzLnF1YWRyYXRpY091dCxcbiAgICBxdWFkcmF0aWNJbk91dDogZXhwb3J0cy5xdWFkcmF0aWNJbk91dCxcbiAgICBjdWJpY0luOiBleHBvcnRzLmN1YmljSW4sXG4gICAgY3ViaWNPdXQ6IGV4cG9ydHMuY3ViaWNPdXQsXG4gICAgY3ViaWNJbk91dDogZXhwb3J0cy5jdWJpY0luT3V0LFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGVhc2luZ3M7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZG9FZGdlQ29sbGlkZVdpdGhQb2ludCA9IGV4cG9ydHMuaXNQaXhlbENvbG9yZWQgPSB2b2lkIDA7XG4vKipcbiAqIFRoaXMgaGVscGVyIHJldHVybnMgdHJ1ZSBpcyB0aGUgcGl4ZWwgYXQgKHgseSkgaW4gdGhlIGdpdmVuIFdlYkdMIGNvbnRleHQgaXNcbiAqIGNvbG9yZWQsIGFuZCBmYWxzZSBlbHNlLlxuICovXG5mdW5jdGlvbiBpc1BpeGVsQ29sb3JlZChnbCwgeCwgeSkge1xuICAgIHZhciBwaXhlbHMgPSBuZXcgVWludDhBcnJheSg0KTtcbiAgICBnbC5yZWFkUGl4ZWxzKHgsIGdsLmRyYXdpbmdCdWZmZXJIZWlnaHQgLSB5LCAxLCAxLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBwaXhlbHMpO1xuICAgIHJldHVybiBwaXhlbHNbM10gPiAwO1xufVxuZXhwb3J0cy5pc1BpeGVsQ29sb3JlZCA9IGlzUGl4ZWxDb2xvcmVkO1xuLyoqXG4gKiBUaGlzIGhlbHBlciBjaGVja3Mgd2hldGhlciBvciBub3QgYSBwb2ludCAoeCwgeSkgY29sbGlkZXMgd2l0aCBhblxuICogZWRnZSwgY29ubmVjdGluZyBhIHNvdXJjZSAoeFMsIHlTKSB0byBhIHRhcmdldCAoeFQsIHlUKSB3aXRoIGEgdGhpY2tuZXNzIGluXG4gKiBwaXhlbHMuXG4gKi9cbmZ1bmN0aW9uIGRvRWRnZUNvbGxpZGVXaXRoUG9pbnQoeCwgeSwgeFMsIHlTLCB4VCwgeVQsIHRoaWNrbmVzcykge1xuICAgIC8vIENoZWNrIGZpcnN0IGlmIHBvaW50IGlzIG91dCBvZiB0aGUgcmVjdGFuZ2xlIHdoaWNoIG9wcG9zaXRlIGNvcm5lcnMgYXJlIHRoZVxuICAgIC8vIHNvdXJjZSBhbmQgdGhlIHRhcmdldCwgcmVjdGFuZ2xlIHdlIGV4cGFuZCBieSBgdGhpY2tuZXNzYCBpbiBldmVyeVxuICAgIC8vIGRpcmVjdGlvbnM6XG4gICAgaWYgKHggPCB4UyAtIHRoaWNrbmVzcyAmJiB4IDwgeFQgLSB0aGlja25lc3MpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZiAoeSA8IHlTIC0gdGhpY2tuZXNzICYmIHkgPCB5VCAtIHRoaWNrbmVzcylcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh4ID4geFMgKyB0aGlja25lc3MgJiYgeCA+IHhUICsgdGhpY2tuZXNzKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHkgPiB5UyArIHRoaWNrbmVzcyAmJiB5ID4geVQgKyB0aGlja25lc3MpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAvLyBDaGVjayBhY3R1YWwgY29sbGlzaW9uIG5vdzogU2luY2Ugd2Ugbm93IHRoZSBwb2ludCBpcyBpbiB0aGlzIGJpZyByZWN0YW5nbGVcbiAgICAvLyB3ZSBcImp1c3RcIiBuZWVkIHRvIGNoZWNrIHRoYXQgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHBvaW50IGFuZCB0aGUgbGluZVxuICAgIC8vIGNvbm5lY3RpbmcgdGhlIHNvdXJjZSBhbmQgdGhlIHRhcmdldCBpcyBsZXNzIHRoYW4gYHRoaWNrbmVzc2A6XG4gICAgLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRGlzdGFuY2VfZnJvbV9hX3BvaW50X3RvX2FfbGluZVxuICAgIHZhciBkaXN0YW5jZSA9IE1hdGguYWJzKCh4VCAtIHhTKSAqICh5UyAtIHkpIC0gKHhTIC0geCkgKiAoeVQgLSB5UykpIC8gTWF0aC5zcXJ0KE1hdGgucG93KHhUIC0geFMsIDIpICsgTWF0aC5wb3coeVQgLSB5UywgMikpO1xuICAgIHJldHVybiBkaXN0YW5jZSA8IHRoaWNrbmVzcyAvIDI7XG59XG5leHBvcnRzLmRvRWRnZUNvbGxpZGVXaXRoUG9pbnQgPSBkb0VkZ2VDb2xsaWRlV2l0aFBvaW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICAgIGlmICghbSkgcmV0dXJuIG87XG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gICAgdHJ5IHtcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gICAgfVxuICAgIHJldHVybiBhcjtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnZhbGlkYXRlR3JhcGggPSBleHBvcnRzLmNhblVzZTMyQml0c0luZGljZXMgPSBleHBvcnRzLmV4dHJhY3RQaXhlbCA9IGV4cG9ydHMuZ2V0TWF0cml4SW1wYWN0ID0gZXhwb3J0cy5tYXRyaXhGcm9tQ2FtZXJhID0gZXhwb3J0cy5nZXRDb3JyZWN0aW9uUmF0aW8gPSBleHBvcnRzLmZsb2F0Q29sb3IgPSBleHBvcnRzLmZsb2F0QXJyYXlDb2xvciA9IGV4cG9ydHMucGFyc2VDb2xvciA9IGV4cG9ydHMuekluZGV4T3JkZXJpbmcgPSBleHBvcnRzLmNyZWF0ZU5vcm1hbGl6YXRpb25GdW5jdGlvbiA9IGV4cG9ydHMuZ3JhcGhFeHRlbnQgPSBleHBvcnRzLmdldFBpeGVsUmF0aW8gPSBleHBvcnRzLmNyZWF0ZUVsZW1lbnQgPSBleHBvcnRzLmNhbmNlbEZyYW1lID0gZXhwb3J0cy5yZXF1ZXN0RnJhbWUgPSBleHBvcnRzLmFzc2lnbkRlZXAgPSBleHBvcnRzLmFzc2lnbiA9IGV4cG9ydHMuaXNQbGFpbk9iamVjdCA9IHZvaWQgMDtcbnZhciBpc19ncmFwaF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJncmFwaG9sb2d5LXV0aWxzL2lzLWdyYXBoXCIpKTtcbnZhciBtYXRyaWNlc18xID0gcmVxdWlyZShcIi4vbWF0cmljZXNcIik7XG52YXIgZGF0YV8xID0gcmVxdWlyZShcIi4vZGF0YVwiKTtcbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSAge21peGVkfSAgIHZhbHVlIC0gVGFyZ2V0IHZhbHVlLlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnksIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBPYmplY3Q7XG59XG5leHBvcnRzLmlzUGxhaW5PYmplY3QgPSBpc1BsYWluT2JqZWN0O1xuLyoqXG4gKiBIZWxwZXIgdG8gdXNlIE9iamVjdC5hc3NpZ24gd2l0aCBtb3JlIHRoYW4gdHdvIG9iamVjdHMuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSB0YXJnZXQgICAgICAgLSBGaXJzdCBvYmplY3QuXG4gKiBAcGFyYW0gIHtvYmplY3R9IFsuLi5vYmplY3RzXSAtIE9iamVjdHMgdG8gbWVyZ2UuXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGFzc2lnbih0YXJnZXQpIHtcbiAgICB2YXIgb2JqZWN0cyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIG9iamVjdHNbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHRhcmdldCA9IHRhcmdldCB8fCB7fTtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iamVjdHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBvID0gb2JqZWN0c1tpXTtcbiAgICAgICAgaWYgKCFvKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBvKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmV4cG9ydHMuYXNzaWduID0gYXNzaWduO1xuLyoqXG4gKiBWZXJ5IHNpbXBsZSByZWN1cnNpdmUgT2JqZWN0LmFzc2lnbi1saWtlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gdGFyZ2V0ICAgICAgIC0gRmlyc3Qgb2JqZWN0LlxuICogQHBhcmFtICB7b2JqZWN0fSBbLi4ub2JqZWN0c10gLSBPYmplY3RzIHRvIG1lcmdlLlxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5mdW5jdGlvbiBhc3NpZ25EZWVwKHRhcmdldCkge1xuICAgIHZhciBvYmplY3RzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgb2JqZWN0c1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgdGFyZ2V0ID0gdGFyZ2V0IHx8IHt9O1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqZWN0cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIG8gPSBvYmplY3RzW2ldO1xuICAgICAgICBpZiAoIW8pXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgZm9yICh2YXIgayBpbiBvKSB7XG4gICAgICAgICAgICBpZiAoaXNQbGFpbk9iamVjdChvW2tdKSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrXSA9IGFzc2lnbkRlZXAodGFyZ2V0W2tdLCBvW2tdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrXSA9IG9ba107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmV4cG9ydHMuYXNzaWduRGVlcCA9IGFzc2lnbkRlZXA7XG4vKipcbiAqIEp1c3Qgc29tZSBkaXJ0eSB0cmljayB0byBtYWtlIHJlcXVlc3RBbmltYXRpb25GcmFtZSBhbmQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgXCJ3b3JrXCIgaW4gTm9kZS5qcywgZm9yIHVuaXQgdGVzdHM6XG4gKi9cbmV4cG9ydHMucmVxdWVzdEZyYW1lID0gdHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSAhPT0gXCJ1bmRlZmluZWRcIlxuICAgID8gZnVuY3Rpb24gKGNhbGxiYWNrKSB7IHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spOyB9XG4gICAgOiBmdW5jdGlvbiAoY2FsbGJhY2spIHsgcmV0dXJuIHNldFRpbWVvdXQoY2FsbGJhY2ssIDApOyB9O1xuZXhwb3J0cy5jYW5jZWxGcmFtZSA9IHR5cGVvZiBjYW5jZWxBbmltYXRpb25GcmFtZSAhPT0gXCJ1bmRlZmluZWRcIlxuICAgID8gZnVuY3Rpb24gKHJlcXVlc3RJRCkgeyByZXR1cm4gY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdElEKTsgfVxuICAgIDogZnVuY3Rpb24gKHJlcXVlc3RJRCkgeyByZXR1cm4gY2xlYXJUaW1lb3V0KHJlcXVlc3RJRCk7IH07XG4vKipcbiAqIEZ1bmN0aW9uIHVzZWQgdG8gY3JlYXRlIERPTSBlbGVtZW50cyBlYXNpbHkuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSB0YWcgICAgICAgIC0gVGFnIG5hbWUgb2YgdGhlIGVsZW1lbnQgdG8gY3JlYXRlLlxuICogQHBhcmFtICB7b2JqZWN0fSBzdHlsZSAgICAgIC0gU3R5bGVzIG1hcC5cbiAqIEBwYXJhbSAge29iamVjdH0gYXR0cmlidXRlcyAtIEF0dHJpYnV0ZXMgbWFwLlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnLCBzdHlsZSwgYXR0cmlidXRlcykge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGlmIChzdHlsZSkge1xuICAgICAgICBmb3IgKHZhciBrIGluIHN0eWxlKSB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlW2tdID0gc3R5bGVba107XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgZm9yICh2YXIgayBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrLCBhdHRyaWJ1dGVzW2tdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmV4cG9ydHMuY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQ7XG4vKipcbiAqIEZ1bmN0aW9uIHJldHVybmluZyB0aGUgYnJvd3NlcidzIHBpeGVsIHJhdGlvLlxuICpcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0UGl4ZWxSYXRpbygpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICByZXR1cm4gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgcmV0dXJuIDE7XG59XG5leHBvcnRzLmdldFBpeGVsUmF0aW8gPSBnZXRQaXhlbFJhdGlvO1xuLyoqXG4gKiBGdW5jdGlvbiByZXR1cm5pbmcgdGhlIGdyYXBoJ3Mgbm9kZSBleHRlbnQgaW4geCAmIHkuXG4gKlxuICogQHBhcmFtICB7R3JhcGh9XG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGdyYXBoRXh0ZW50KGdyYXBoKSB7XG4gICAgaWYgKCFncmFwaC5vcmRlcilcbiAgICAgICAgcmV0dXJuIHsgeDogWzAsIDFdLCB5OiBbMCwgMV0gfTtcbiAgICB2YXIgeE1pbiA9IEluZmluaXR5O1xuICAgIHZhciB4TWF4ID0gLUluZmluaXR5O1xuICAgIHZhciB5TWluID0gSW5maW5pdHk7XG4gICAgdmFyIHlNYXggPSAtSW5maW5pdHk7XG4gICAgZ3JhcGguZm9yRWFjaE5vZGUoZnVuY3Rpb24gKF8sIGF0dHIpIHtcbiAgICAgICAgdmFyIHggPSBhdHRyLngsIHkgPSBhdHRyLnk7XG4gICAgICAgIGlmICh4IDwgeE1pbilcbiAgICAgICAgICAgIHhNaW4gPSB4O1xuICAgICAgICBpZiAoeCA+IHhNYXgpXG4gICAgICAgICAgICB4TWF4ID0geDtcbiAgICAgICAgaWYgKHkgPCB5TWluKVxuICAgICAgICAgICAgeU1pbiA9IHk7XG4gICAgICAgIGlmICh5ID4geU1heClcbiAgICAgICAgICAgIHlNYXggPSB5O1xuICAgIH0pO1xuICAgIHJldHVybiB7IHg6IFt4TWluLCB4TWF4XSwgeTogW3lNaW4sIHlNYXhdIH07XG59XG5leHBvcnRzLmdyYXBoRXh0ZW50ID0gZ3JhcGhFeHRlbnQ7XG5mdW5jdGlvbiBjcmVhdGVOb3JtYWxpemF0aW9uRnVuY3Rpb24oZXh0ZW50KSB7XG4gICAgdmFyIF9hID0gX19yZWFkKGV4dGVudC54LCAyKSwgbWluWCA9IF9hWzBdLCBtYXhYID0gX2FbMV0sIF9iID0gX19yZWFkKGV4dGVudC55LCAyKSwgbWluWSA9IF9iWzBdLCBtYXhZID0gX2JbMV07XG4gICAgdmFyIHJhdGlvID0gTWF0aC5tYXgobWF4WCAtIG1pblgsIG1heFkgLSBtaW5ZKSwgZFggPSAobWF4WCArIG1pblgpIC8gMiwgZFkgPSAobWF4WSArIG1pblkpIC8gMjtcbiAgICBpZiAocmF0aW8gPT09IDAgfHwgTWF0aC5hYnMocmF0aW8pID09PSBJbmZpbml0eSB8fCBpc05hTihyYXRpbykpXG4gICAgICAgIHJhdGlvID0gMTtcbiAgICBpZiAoaXNOYU4oZFgpKVxuICAgICAgICBkWCA9IDA7XG4gICAgaWYgKGlzTmFOKGRZKSlcbiAgICAgICAgZFkgPSAwO1xuICAgIHZhciBmbiA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiAwLjUgKyAoZGF0YS54IC0gZFgpIC8gcmF0aW8sXG4gICAgICAgICAgICB5OiAwLjUgKyAoZGF0YS55IC0gZFkpIC8gcmF0aW8sXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvLyBUT0RPOiBwb3NzaWJpbGl0eSB0byBhcHBseSB0aGlzIGluIGJhdGNoIG92ZXIgYXJyYXkgb2YgaW5kaWNlc1xuICAgIGZuLmFwcGx5VG8gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBkYXRhLnggPSAwLjUgKyAoZGF0YS54IC0gZFgpIC8gcmF0aW87XG4gICAgICAgIGRhdGEueSA9IDAuNSArIChkYXRhLnkgLSBkWSkgLyByYXRpbztcbiAgICB9O1xuICAgIGZuLmludmVyc2UgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogZFggKyByYXRpbyAqIChkYXRhLnggLSAwLjUpLFxuICAgICAgICAgICAgeTogZFkgKyByYXRpbyAqIChkYXRhLnkgLSAwLjUpLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgZm4ucmF0aW8gPSByYXRpbztcbiAgICByZXR1cm4gZm47XG59XG5leHBvcnRzLmNyZWF0ZU5vcm1hbGl6YXRpb25GdW5jdGlvbiA9IGNyZWF0ZU5vcm1hbGl6YXRpb25GdW5jdGlvbjtcbi8qKlxuICogRnVuY3Rpb24gb3JkZXJpbmcgdGhlIGdpdmVuIGVsZW1lbnRzIGluIHJldmVyc2Ugei1vcmRlciBzbyB0aGV5IGRyYXduXG4gKiB0aGUgY29ycmVjdCB3YXkuXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSAgIGV4dGVudCAgIC0gW21pbiwgbWF4XSB6IHZhbHVlcy5cbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBnZXR0ZXIgICAtIFogYXR0cmlidXRlIGdldHRlciBmdW5jdGlvbi5cbiAqIEBwYXJhbSAge2FycmF5fSAgICBlbGVtZW50cyAtIFRoZSBhcnJheSB0byBzb3J0LlxuICogQHJldHVybiB7YXJyYXl9IC0gVGhlIHNvcnRlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gekluZGV4T3JkZXJpbmcoZXh0ZW50LCBnZXR0ZXIsIGVsZW1lbnRzKSB7XG4gICAgLy8gSWYgayBpcyA+IG4sIHdlJ2xsIHVzZSBhIHN0YW5kYXJkIHNvcnRcbiAgICByZXR1cm4gZWxlbWVudHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICB2YXIgekEgPSBnZXR0ZXIoYSkgfHwgMCwgekIgPSBnZXR0ZXIoYikgfHwgMDtcbiAgICAgICAgaWYgKHpBIDwgekIpXG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIGlmICh6QSA+IHpCKVxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICAgIC8vIFRPRE86IGNvdW50aW5nIHNvcnQgb3B0aW1pemF0aW9uXG59XG5leHBvcnRzLnpJbmRleE9yZGVyaW5nID0gekluZGV4T3JkZXJpbmc7XG4vKipcbiAqIFdlYkdMIHV0aWxzXG4gKiA9PT09PT09PT09PVxuICovXG4vKipcbiAqIE1lbW9pemVkIGZ1bmN0aW9uIHJldHVybmluZyBhIGZsb2F0LWVuY29kZWQgY29sb3IgZnJvbSB2YXJpb3VzIHN0cmluZ1xuICogZm9ybWF0cyBkZXNjcmliaW5nIGNvbG9ycy5cbiAqL1xudmFyIElOVDggPSBuZXcgSW50OEFycmF5KDQpO1xudmFyIElOVDMyID0gbmV3IEludDMyQXJyYXkoSU5UOC5idWZmZXIsIDAsIDEpO1xudmFyIEZMT0FUMzIgPSBuZXcgRmxvYXQzMkFycmF5KElOVDguYnVmZmVyLCAwLCAxKTtcbnZhciBSR0JBX1RFU1RfUkVHRVggPSAvXlxccypyZ2JhP1xccypcXCgvO1xudmFyIFJHQkFfRVhUUkFDVF9SRUdFWCA9IC9eXFxzKnJnYmE/XFxzKlxcKFxccyooWzAtOV0qKVxccyosXFxzKihbMC05XSopXFxzKixcXHMqKFswLTldKikoPzpcXHMqLFxccyooLiopPyk/XFwpXFxzKiQvO1xuZnVuY3Rpb24gcGFyc2VDb2xvcih2YWwpIHtcbiAgICB2YXIgciA9IDA7IC8vIGJ5dGVcbiAgICB2YXIgZyA9IDA7IC8vIGJ5dGVcbiAgICB2YXIgYiA9IDA7IC8vIGJ5dGVcbiAgICB2YXIgYSA9IDE7IC8vIGZsb2F0XG4gICAgLy8gSGFuZGxpbmcgaGV4YWRlY2ltYWwgbm90YXRpb25cbiAgICBpZiAodmFsWzBdID09PSBcIiNcIikge1xuICAgICAgICBpZiAodmFsLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgciA9IHBhcnNlSW50KHZhbC5jaGFyQXQoMSkgKyB2YWwuY2hhckF0KDEpLCAxNik7XG4gICAgICAgICAgICBnID0gcGFyc2VJbnQodmFsLmNoYXJBdCgyKSArIHZhbC5jaGFyQXQoMiksIDE2KTtcbiAgICAgICAgICAgIGIgPSBwYXJzZUludCh2YWwuY2hhckF0KDMpICsgdmFsLmNoYXJBdCgzKSwgMTYpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgciA9IHBhcnNlSW50KHZhbC5jaGFyQXQoMSkgKyB2YWwuY2hhckF0KDIpLCAxNik7XG4gICAgICAgICAgICBnID0gcGFyc2VJbnQodmFsLmNoYXJBdCgzKSArIHZhbC5jaGFyQXQoNCksIDE2KTtcbiAgICAgICAgICAgIGIgPSBwYXJzZUludCh2YWwuY2hhckF0KDUpICsgdmFsLmNoYXJBdCg2KSwgMTYpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWwubGVuZ3RoID09PSA5KSB7XG4gICAgICAgICAgICBhID0gcGFyc2VJbnQodmFsLmNoYXJBdCg3KSArIHZhbC5jaGFyQXQoOCksIDE2KSAvIDI1NTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBIYW5kbGluZyByZ2Igbm90YXRpb25cbiAgICBlbHNlIGlmIChSR0JBX1RFU1RfUkVHRVgudGVzdCh2YWwpKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHZhbC5tYXRjaChSR0JBX0VYVFJBQ1RfUkVHRVgpO1xuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIHIgPSArbWF0Y2hbMV07XG4gICAgICAgICAgICBnID0gK21hdGNoWzJdO1xuICAgICAgICAgICAgYiA9ICttYXRjaFszXTtcbiAgICAgICAgICAgIGlmIChtYXRjaFs0XSlcbiAgICAgICAgICAgICAgICBhID0gK21hdGNoWzRdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHI6IHIsIGc6IGcsIGI6IGIsIGE6IGEgfTtcbn1cbmV4cG9ydHMucGFyc2VDb2xvciA9IHBhcnNlQ29sb3I7XG52YXIgRkxPQVRfQ09MT1JfQ0FDSEUgPSB7fTtcbmZvciAodmFyIGh0bWxDb2xvciBpbiBkYXRhXzEuSFRNTF9DT0xPUlMpIHtcbiAgICBGTE9BVF9DT0xPUl9DQUNIRVtodG1sQ29sb3JdID0gZmxvYXRDb2xvcihkYXRhXzEuSFRNTF9DT0xPUlNbaHRtbENvbG9yXSk7XG4gICAgLy8gUmVwbGljYXRpbmcgY2FjaGUgZm9yIGhleCB2YWx1ZXMgZm9yIGZyZWVcbiAgICBGTE9BVF9DT0xPUl9DQUNIRVtkYXRhXzEuSFRNTF9DT0xPUlNbaHRtbENvbG9yXV0gPSBGTE9BVF9DT0xPUl9DQUNIRVtodG1sQ29sb3JdO1xufVxuZnVuY3Rpb24gZmxvYXRBcnJheUNvbG9yKHZhbCkge1xuICAgIHZhbCA9IGRhdGFfMS5IVE1MX0NPTE9SU1t2YWxdIHx8IHZhbDtcbiAgICAvLyBOT1RFOiB0aGlzIHZhcmlhbnQgaXMgbm90IGNhY2hlZCBiZWNhdXNlIGl0IGlzIG1vc3RseSB1c2VkIGZvciB1bmlmb3Jtc1xuICAgIHZhciBfYSA9IHBhcnNlQ29sb3IodmFsKSwgciA9IF9hLnIsIGcgPSBfYS5nLCBiID0gX2EuYiwgYSA9IF9hLmE7XG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW3IgLyAyNTUsIGcgLyAyNTUsIGIgLyAyNTUsIGFdKTtcbn1cbmV4cG9ydHMuZmxvYXRBcnJheUNvbG9yID0gZmxvYXRBcnJheUNvbG9yO1xuZnVuY3Rpb24gZmxvYXRDb2xvcih2YWwpIHtcbiAgICAvLyBJZiB0aGUgY29sb3IgaXMgYWxyZWFkeSBjb21wdXRlZCwgd2UgeWllbGQgaXRcbiAgICBpZiAodHlwZW9mIEZMT0FUX0NPTE9SX0NBQ0hFW3ZhbF0gIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgIHJldHVybiBGTE9BVF9DT0xPUl9DQUNIRVt2YWxdO1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZUNvbG9yKHZhbCk7XG4gICAgdmFyIHIgPSBwYXJzZWQuciwgZyA9IHBhcnNlZC5nLCBiID0gcGFyc2VkLmI7XG4gICAgdmFyIGEgPSBwYXJzZWQuYTtcbiAgICBhID0gKGEgKiAyNTUpIHwgMDtcbiAgICBJTlQzMlswXSA9ICgoYSA8PCAyNCkgfCAoYiA8PCAxNikgfCAoZyA8PCA4KSB8IHIpICYgMHhmZWZmZmZmZjtcbiAgICB2YXIgY29sb3IgPSBGTE9BVDMyWzBdO1xuICAgIEZMT0FUX0NPTE9SX0NBQ0hFW3ZhbF0gPSBjb2xvcjtcbiAgICByZXR1cm4gY29sb3I7XG59XG5leHBvcnRzLmZsb2F0Q29sb3IgPSBmbG9hdENvbG9yO1xuLyoqXG4gKiBJbiBzaWdtYSwgdGhlIGdyYXBoIGlzIG5vcm1hbGl6ZWQgaW50byBhIFswLCAxXSwgWzAsIDFdIHNxdWFyZSwgYmVmb3JlIGJlaW5nIGdpdmVuIHRvIHRoZSB2YXJpb3VzIHJlbmRlcmVycy4gVGhpc1xuICogaGVscHMgZGVhbGluZyB3aXRoIHF1YWR0cmVlIGluIHBhcnRpY3VsYXIuXG4gKiBCdXQgYXQgc29tZSBwb2ludCwgd2UgbmVlZCB0byByZXNjYWxlIGl0IHNvIHRoYXQgaXQgdGFrZXMgdGhlIGJlc3QgcGxhY2UgaW4gdGhlIHNjcmVlbiwgaWUuIHdlIGFsd2F5cyB3YW50IHRvIHNlZSB0d29cbiAqIG5vZGVzIFwidG91Y2hpbmdcIiBvcHBvc2l0ZSBzaWRlcyBvZiB0aGUgZ3JhcGgsIHdpdGggdGhlIGNhbWVyYSBiZWluZyBhdCBpdHMgZGVmYXVsdCBzdGF0ZS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGRldGVybWluZXMgdGhpcyByYXRpby5cbiAqL1xuZnVuY3Rpb24gZ2V0Q29ycmVjdGlvblJhdGlvKHZpZXdwb3J0RGltZW5zaW9ucywgZ3JhcGhEaW1lbnNpb25zKSB7XG4gICAgdmFyIHZpZXdwb3J0UmF0aW8gPSB2aWV3cG9ydERpbWVuc2lvbnMuaGVpZ2h0IC8gdmlld3BvcnREaW1lbnNpb25zLndpZHRoO1xuICAgIHZhciBncmFwaFJhdGlvID0gZ3JhcGhEaW1lbnNpb25zLmhlaWdodCAvIGdyYXBoRGltZW5zaW9ucy53aWR0aDtcbiAgICAvLyBJZiB0aGUgc3RhZ2UgYW5kIHRoZSBncmFwaHMgYXJlIGluIGRpZmZlcmVudCBkaXJlY3Rpb25zIChzdWNoIGFzIHRoZSBncmFwaCBiZWluZyB3aWRlciB0aGF0IHRhbGwgd2hpbGUgdGhlIHN0YWdlXG4gICAgLy8gaXMgdGFsbGVyIHRoYW4gd2lkZSksIHdlIGNhbiBzdG9wIGhlcmUgdG8gaGF2ZSBpbmRlZWQgbm9kZXMgdG91Y2hpbmcgb3Bwb3NpdGUgc2lkZXM6XG4gICAgaWYgKCh2aWV3cG9ydFJhdGlvIDwgMSAmJiBncmFwaFJhdGlvID4gMSkgfHwgKHZpZXdwb3J0UmF0aW8gPiAxICYmIGdyYXBoUmF0aW8gPCAxKSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgLy8gRWxzZSwgd2UgbmVlZCB0byBmaXQgdGhlIGdyYXBoIGluc2lkZSB0aGUgc3RhZ2U6XG4gICAgLy8gMS4gSWYgdGhlIGdyYXBoIGlzIFwic3F1YXJlclwiIChpZS4gd2l0aCBhIHJhdGlvIGNsb3NlciB0byAxKSwgd2UgbmVlZCB0byBtYWtlIHRoZSBsYXJnZXN0IHNpZGVzIHRvdWNoO1xuICAgIC8vIDIuIElmIHRoZSBzdGFnZSBpcyBcInNxdWFyZXJcIiwgd2UgbmVlZCB0byBtYWtlIHRoZSBzbWFsbGVzdCBzaWRlcyB0b3VjaC5cbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoZ3JhcGhSYXRpbywgMSAvIGdyYXBoUmF0aW8pLCBNYXRoLm1heCgxIC8gdmlld3BvcnRSYXRpbywgdmlld3BvcnRSYXRpbykpO1xufVxuZXhwb3J0cy5nZXRDb3JyZWN0aW9uUmF0aW8gPSBnZXRDb3JyZWN0aW9uUmF0aW87XG4vKipcbiAqIEZ1bmN0aW9uIHJldHVybmluZyBhIG1hdHJpeCBmcm9tIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBjYW1lcmEuXG4gKi9cbi8vIFRPRE86IGl0J3MgcG9zc2libGUgdG8gb3B0aW1pemUgdGhpcyBkcmFzdGljYWxseSFcbmZ1bmN0aW9uIG1hdHJpeEZyb21DYW1lcmEoc3RhdGUsIHZpZXdwb3J0RGltZW5zaW9ucywgZ3JhcGhEaW1lbnNpb25zLCBwYWRkaW5nLCBpbnZlcnNlKSB7XG4gICAgdmFyIGFuZ2xlID0gc3RhdGUuYW5nbGUsIHJhdGlvID0gc3RhdGUucmF0aW8sIHggPSBzdGF0ZS54LCB5ID0gc3RhdGUueTtcbiAgICB2YXIgd2lkdGggPSB2aWV3cG9ydERpbWVuc2lvbnMud2lkdGgsIGhlaWdodCA9IHZpZXdwb3J0RGltZW5zaW9ucy5oZWlnaHQ7XG4gICAgdmFyIG1hdHJpeCA9ICgwLCBtYXRyaWNlc18xLmlkZW50aXR5KSgpO1xuICAgIHZhciBzbWFsbGVzdERpbWVuc2lvbiA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpIC0gMiAqIHBhZGRpbmc7XG4gICAgdmFyIGNvcnJlY3Rpb25SYXRpbyA9IGdldENvcnJlY3Rpb25SYXRpbyh2aWV3cG9ydERpbWVuc2lvbnMsIGdyYXBoRGltZW5zaW9ucyk7XG4gICAgaWYgKCFpbnZlcnNlKSB7XG4gICAgICAgICgwLCBtYXRyaWNlc18xLm11bHRpcGx5KShtYXRyaXgsICgwLCBtYXRyaWNlc18xLnNjYWxlKSgoMCwgbWF0cmljZXNfMS5pZGVudGl0eSkoKSwgMiAqIChzbWFsbGVzdERpbWVuc2lvbiAvIHdpZHRoKSAqIGNvcnJlY3Rpb25SYXRpbywgMiAqIChzbWFsbGVzdERpbWVuc2lvbiAvIGhlaWdodCkgKiBjb3JyZWN0aW9uUmF0aW8pKTtcbiAgICAgICAgKDAsIG1hdHJpY2VzXzEubXVsdGlwbHkpKG1hdHJpeCwgKDAsIG1hdHJpY2VzXzEucm90YXRlKSgoMCwgbWF0cmljZXNfMS5pZGVudGl0eSkoKSwgLWFuZ2xlKSk7XG4gICAgICAgICgwLCBtYXRyaWNlc18xLm11bHRpcGx5KShtYXRyaXgsICgwLCBtYXRyaWNlc18xLnNjYWxlKSgoMCwgbWF0cmljZXNfMS5pZGVudGl0eSkoKSwgMSAvIHJhdGlvKSk7XG4gICAgICAgICgwLCBtYXRyaWNlc18xLm11bHRpcGx5KShtYXRyaXgsICgwLCBtYXRyaWNlc18xLnRyYW5zbGF0ZSkoKDAsIG1hdHJpY2VzXzEuaWRlbnRpdHkpKCksIC14LCAteSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgKDAsIG1hdHJpY2VzXzEubXVsdGlwbHkpKG1hdHJpeCwgKDAsIG1hdHJpY2VzXzEudHJhbnNsYXRlKSgoMCwgbWF0cmljZXNfMS5pZGVudGl0eSkoKSwgeCwgeSkpO1xuICAgICAgICAoMCwgbWF0cmljZXNfMS5tdWx0aXBseSkobWF0cml4LCAoMCwgbWF0cmljZXNfMS5zY2FsZSkoKDAsIG1hdHJpY2VzXzEuaWRlbnRpdHkpKCksIHJhdGlvKSk7XG4gICAgICAgICgwLCBtYXRyaWNlc18xLm11bHRpcGx5KShtYXRyaXgsICgwLCBtYXRyaWNlc18xLnJvdGF0ZSkoKDAsIG1hdHJpY2VzXzEuaWRlbnRpdHkpKCksIGFuZ2xlKSk7XG4gICAgICAgICgwLCBtYXRyaWNlc18xLm11bHRpcGx5KShtYXRyaXgsICgwLCBtYXRyaWNlc18xLnNjYWxlKSgoMCwgbWF0cmljZXNfMS5pZGVudGl0eSkoKSwgd2lkdGggLyBzbWFsbGVzdERpbWVuc2lvbiAvIDIgLyBjb3JyZWN0aW9uUmF0aW8sIGhlaWdodCAvIHNtYWxsZXN0RGltZW5zaW9uIC8gMiAvIGNvcnJlY3Rpb25SYXRpbykpO1xuICAgIH1cbiAgICByZXR1cm4gbWF0cml4O1xufVxuZXhwb3J0cy5tYXRyaXhGcm9tQ2FtZXJhID0gbWF0cml4RnJvbUNhbWVyYTtcbi8qKlxuICogQWxsIHRoZXNlIHRyYW5zZm9ybWF0aW9ucyB3ZSBhcHBseSBvbiB0aGUgbWF0cml4IHRvIGdldCBpdCByZXNjYWxlIHRoZSBncmFwaFxuICogYXMgd2Ugd2FudCBtYWtlIGl0IHZlcnkgaGFyZCB0byBnZXQgcGl4ZWwtcGVyZmVjdCBkaXN0YW5jZXMgaW4gV2ViR0wuIFRoaXNcbiAqIGZ1bmN0aW9uIHJldHVybnMgYSBmYWN0b3IgdGhhdCBwcm9wZXJseSBjYW5jZWxzIHRoZSBtYXRyaXggZWZmZWN0IG9uIGxlbmd0aHMuXG4gKlxuICogW2phY29teWFsXVxuICogVG8gYmUgZnVsbHkgaG9uZXN0LCBJIGNhbid0IHJlYWxseSBleHBsYWluIGhhcHBlbnMgaGVyZS4uLiBJIG5vdGljZSB0aGF0IHRoZVxuICogZm9sbG93aW5nIHJhdGlvIHdvcmtzIChpZS4gaXQgY29ycmVjdGx5IGNvbXBlbnNhdGVzIHRoZSBtYXRyaXggaW1wYWN0IG9uIGFsbFxuICogY2FtZXJhIHN0YXRlcyBJIGNvdWxkIHRyeSk6XG4gKiA+IGBSID0gc2l6ZShWKSAvIHNpemUoTSAqIFYpIC8gV2BcbiAqIGFzIGxvbmcgYXMgYE0gKiBWYCBpcyBpbiB0aGUgZGlyZWN0aW9uIG9mIFcgKGllLiBwYXJhbGxlbCB0byAoT3gpKS4gSXQgd29ya3NcbiAqIGFzIHdlbGwgd2l0aCBIIGFuZCBhIHZlY3RvciB0aGF0IHRyYW5zZm9ybXMgaW50byBzb21ldGhpbmcgcGFyYWxsZWwgdG8gKE95KS5cbiAqXG4gKiBBbHNvLCBub3RlIHRoYXQgd2UgdXNlIGBhbmdsZWAgYW5kIG5vdCBgLWFuZ2xlYCAodGhhdCB3b3VsZCBzZWVtIGxvZ2ljYWwsXG4gKiBzaW5jZSB3ZSB3YW50IHRvIGFudGljaXBhdGUgdGhlIHJvdGF0aW9uKSwgYmVjYXVzZSBvZiB0aGUgZmFjdCB0aGF0IGluIFdlYkdMLFxuICogdGhlIGltYWdlIGlzIHZlcnRpY2FsbHkgc3dhcHBlZC5cbiAqL1xuZnVuY3Rpb24gZ2V0TWF0cml4SW1wYWN0KG1hdHJpeCwgY2FtZXJhU3RhdGUsIHZpZXdwb3J0RGltZW5zaW9ucykge1xuICAgIHZhciBfYSA9ICgwLCBtYXRyaWNlc18xLm11bHRpcGx5VmVjMikobWF0cml4LCB7IHg6IE1hdGguY29zKGNhbWVyYVN0YXRlLmFuZ2xlKSwgeTogTWF0aC5zaW4oY2FtZXJhU3RhdGUuYW5nbGUpIH0sIDApLCB4ID0gX2EueCwgeSA9IF9hLnk7XG4gICAgcmV0dXJuIDEgLyBNYXRoLnNxcnQoTWF0aC5wb3coeCwgMikgKyBNYXRoLnBvdyh5LCAyKSkgLyB2aWV3cG9ydERpbWVuc2lvbnMud2lkdGg7XG59XG5leHBvcnRzLmdldE1hdHJpeEltcGFjdCA9IGdldE1hdHJpeEltcGFjdDtcbi8qKlxuICogRnVuY3Rpb24gZXh0cmFjdGluZyB0aGUgY29sb3IgYXQgdGhlIGdpdmVuIHBpeGVsLlxuICovXG5mdW5jdGlvbiBleHRyYWN0UGl4ZWwoZ2wsIHgsIHksIGFycmF5KSB7XG4gICAgdmFyIGRhdGEgPSBhcnJheSB8fCBuZXcgVWludDhBcnJheSg0KTtcbiAgICBnbC5yZWFkUGl4ZWxzKHgsIHksIDEsIDEsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIGRhdGEpO1xuICAgIHJldHVybiBkYXRhO1xufVxuZXhwb3J0cy5leHRyYWN0UGl4ZWwgPSBleHRyYWN0UGl4ZWw7XG4vKipcbiAqIEZ1bmN0aW9uIHVzZWQgdG8ga25vdyB3aGV0aGVyIGdpdmVuIHdlYmdsIGNvbnRleHQgY2FuIHVzZSAzMiBiaXRzIGluZGljZXMuXG4gKi9cbmZ1bmN0aW9uIGNhblVzZTMyQml0c0luZGljZXMoZ2wpIHtcbiAgICB2YXIgd2ViZ2wyID0gdHlwZW9mIFdlYkdMMlJlbmRlcmluZ0NvbnRleHQgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2wgaW5zdGFuY2VvZiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0O1xuICAgIHJldHVybiB3ZWJnbDIgfHwgISFnbC5nZXRFeHRlbnNpb24oXCJPRVNfZWxlbWVudF9pbmRleF91aW50XCIpO1xufVxuZXhwb3J0cy5jYW5Vc2UzMkJpdHNJbmRpY2VzID0gY2FuVXNlMzJCaXRzSW5kaWNlcztcbi8qKlxuICogQ2hlY2sgaWYgdGhlIGdyYXBoIHZhcmlhYmxlIGlzIGEgdmFsaWQgZ3JhcGgsIGFuZCBpZiBzaWdtYSBjYW4gcmVuZGVyIGl0LlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUdyYXBoKGdyYXBoKSB7XG4gICAgLy8gY2hlY2sgaWYgaXQncyBhIHZhbGlkIGdyYXBob2xvZ3kgaW5zdGFuY2VcbiAgICBpZiAoISgwLCBpc19ncmFwaF8xLmRlZmF1bHQpKGdyYXBoKSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2lnbWE6IGludmFsaWQgZ3JhcGggaW5zdGFuY2UuXCIpO1xuICAgIC8vIGNoZWNrIGlmIG5vZGVzIGhhdmUgeC95IGF0dHJpYnV0ZXNcbiAgICBncmFwaC5mb3JFYWNoTm9kZShmdW5jdGlvbiAoa2V5LCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGF0dHJpYnV0ZXMueCkgfHwgIU51bWJlci5pc0Zpbml0ZShhdHRyaWJ1dGVzLnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTaWdtYTogQ29vcmRpbmF0ZXMgb2Ygbm9kZSBcIi5jb25jYXQoa2V5LCBcIiBhcmUgaW52YWxpZC4gQSBub2RlIG11c3QgaGF2ZSBhIG51bWVyaWMgJ3gnIGFuZCAneScgYXR0cmlidXRlLlwiKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMudmFsaWRhdGVHcmFwaCA9IHZhbGlkYXRlR3JhcGg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubXVsdGlwbHlWZWMyID0gZXhwb3J0cy5tdWx0aXBseSA9IGV4cG9ydHMudHJhbnNsYXRlID0gZXhwb3J0cy5yb3RhdGUgPSBleHBvcnRzLnNjYWxlID0gZXhwb3J0cy5pZGVudGl0eSA9IHZvaWQgMDtcbmZ1bmN0aW9uIGlkZW50aXR5KCkge1xuICAgIHJldHVybiBGbG9hdDMyQXJyYXkub2YoMSwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSk7XG59XG5leHBvcnRzLmlkZW50aXR5ID0gaWRlbnRpdHk7XG4vLyBUT0RPOiBvcHRpbWl6ZVxuZnVuY3Rpb24gc2NhbGUobSwgeCwgeSkge1xuICAgIG1bMF0gPSB4O1xuICAgIG1bNF0gPSB0eXBlb2YgeSA9PT0gXCJudW1iZXJcIiA/IHkgOiB4O1xuICAgIHJldHVybiBtO1xufVxuZXhwb3J0cy5zY2FsZSA9IHNjYWxlO1xuZnVuY3Rpb24gcm90YXRlKG0sIHIpIHtcbiAgICB2YXIgcyA9IE1hdGguc2luKHIpLCBjID0gTWF0aC5jb3Mocik7XG4gICAgbVswXSA9IGM7XG4gICAgbVsxXSA9IHM7XG4gICAgbVszXSA9IC1zO1xuICAgIG1bNF0gPSBjO1xuICAgIHJldHVybiBtO1xufVxuZXhwb3J0cy5yb3RhdGUgPSByb3RhdGU7XG5mdW5jdGlvbiB0cmFuc2xhdGUobSwgeCwgeSkge1xuICAgIG1bNl0gPSB4O1xuICAgIG1bN10gPSB5O1xuICAgIHJldHVybiBtO1xufVxuZXhwb3J0cy50cmFuc2xhdGUgPSB0cmFuc2xhdGU7XG5mdW5jdGlvbiBtdWx0aXBseShhLCBiKSB7XG4gICAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl07XG4gICAgdmFyIGExMCA9IGFbM10sIGExMSA9IGFbNF0sIGExMiA9IGFbNV07XG4gICAgdmFyIGEyMCA9IGFbNl0sIGEyMSA9IGFbN10sIGEyMiA9IGFbOF07XG4gICAgdmFyIGIwMCA9IGJbMF0sIGIwMSA9IGJbMV0sIGIwMiA9IGJbMl07XG4gICAgdmFyIGIxMCA9IGJbM10sIGIxMSA9IGJbNF0sIGIxMiA9IGJbNV07XG4gICAgdmFyIGIyMCA9IGJbNl0sIGIyMSA9IGJbN10sIGIyMiA9IGJbOF07XG4gICAgYVswXSA9IGIwMCAqIGEwMCArIGIwMSAqIGExMCArIGIwMiAqIGEyMDtcbiAgICBhWzFdID0gYjAwICogYTAxICsgYjAxICogYTExICsgYjAyICogYTIxO1xuICAgIGFbMl0gPSBiMDAgKiBhMDIgKyBiMDEgKiBhMTIgKyBiMDIgKiBhMjI7XG4gICAgYVszXSA9IGIxMCAqIGEwMCArIGIxMSAqIGExMCArIGIxMiAqIGEyMDtcbiAgICBhWzRdID0gYjEwICogYTAxICsgYjExICogYTExICsgYjEyICogYTIxO1xuICAgIGFbNV0gPSBiMTAgKiBhMDIgKyBiMTEgKiBhMTIgKyBiMTIgKiBhMjI7XG4gICAgYVs2XSA9IGIyMCAqIGEwMCArIGIyMSAqIGExMCArIGIyMiAqIGEyMDtcbiAgICBhWzddID0gYjIwICogYTAxICsgYjIxICogYTExICsgYjIyICogYTIxO1xuICAgIGFbOF0gPSBiMjAgKiBhMDIgKyBiMjEgKiBhMTIgKyBiMjIgKiBhMjI7XG4gICAgcmV0dXJuIGE7XG59XG5leHBvcnRzLm11bHRpcGx5ID0gbXVsdGlwbHk7XG5mdW5jdGlvbiBtdWx0aXBseVZlYzIoYSwgYiwgeikge1xuICAgIGlmICh6ID09PSB2b2lkIDApIHsgeiA9IDE7IH1cbiAgICB2YXIgYTAwID0gYVswXTtcbiAgICB2YXIgYTAxID0gYVsxXTtcbiAgICB2YXIgYTEwID0gYVszXTtcbiAgICB2YXIgYTExID0gYVs0XTtcbiAgICB2YXIgYTIwID0gYVs2XTtcbiAgICB2YXIgYTIxID0gYVs3XTtcbiAgICB2YXIgYjAgPSBiLng7XG4gICAgdmFyIGIxID0gYi55O1xuICAgIHJldHVybiB7IHg6IGIwICogYTAwICsgYjEgKiBhMTAgKyBhMjAgKiB6LCB5OiBiMCAqIGEwMSArIGIxICogYTExICsgYTIxICogeiB9O1xufVxuZXhwb3J0cy5tdWx0aXBseVZlYzIgPSBtdWx0aXBseVZlYzI7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBzYXloZWxsbyA9IChteXN0cjogU3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGAke215c3RyfSBoZWxsbyFgO1xufTtcbmV4cG9ydCBkZWZhdWx0IHNheWhlbGxvO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBHcmFwaCBmcm9tICdncmFwaG9sb2d5JztcbmltcG9ydCBTaWdtYSBmcm9tICdzaWdtYSc7XG4vL3dpdGggbm9kZV9tb2R1bGVzIHdlIGRvbnQgbmVlZCB0byB3cml0ZSBvdXQgdGhlIHBhdGgsIGp1c3QgdGhlIG5hbWUgb2YgdGhlIHBhY2thZ2VcblxuaW1wb3J0ICcuL3N0eWxlcy9tYWluLnNjc3MnXG5pbXBvcnQgRmlnMyBmcm9tICcuL2Fzc2V0cy9zbWlsZXkuc3ZnJzsgLy9BZGQgc3ZnIHR5cGUgdG8gY3VzdG9tLmQudHMgZm9yIHRoaXMgaW1wb3J0IHRvIHdvcmtcblxuaW1wb3J0IGhlbGxvIGZyb20gJy4vbXlzdHVmZic7IC8vc2hvcnRoYW5kIGZvciBteXN0dWZmLnRzXG4vL091ciBvd24obm90IGZyb20gbm9kZV9tb2R1bGVzKSBqcyBjb2RlIHVzZXMgcmVsYXRpdmUgcGF0aCBtZWFuaW5nIFxuLy93ZSBoYXZlIHRvIHdyaXRlIGAuL3NvbWVKc2xpYmAgaW5zdGVhZCBvZiBqdXN0IGBzb21lSnNsaWJgXG5cbi8vTm90aWNlIGV2ZW4gdGhvdWdoIHRoZSBmdW5jdGlvbiBuYW1lIGlzIGBzYXloZWxsb2AgZnJvbSBgZXhwb3J0IGRlZmF1bHQgc2F5aGVsbG87YCBpbiBgbXlzdHVmZi5qc2Bcbi8vd2UgYXJlIGFsbG93ZWQgdG8gcmVuYW1lIHRoZSBpbXBvcnQgYXMgYGhlbGxvYFxuXG5cbmltcG9ydCBkYXRhIGZyb20gXCIuL2Fzc2V0cy9kYXRhLmpzb25cIjsgLy9gQWRkIFwicmVzb2x2ZUpzb25Nb2R1bGVcIjogdHJ1ZWAgaW4gdHNjb25maWcuanNvbiBmb3IgdGhpcyBpbXBvcnQgdG8gd29ya1xuXG5cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpIS5pbm5lclRleHQgPSBoZWxsbyhcIkJvYlwiKTtcbmNvbnN0IHNvbWVQaWNIVE1MOkhUTUxJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NvbWVQaWNcIikhXG5zb21lUGljSFRNTC5zcmMgPSBGaWczO1xuXG5jb25zdCByYW5kTnVtID0gKCkgPT4ge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwLTArMSkpXG59XG5cblxuLy8gRmlyc3QgZ3JhcGggLSBhZGRpbmcgbm9kZSBtYW51YWxseVxuXG5jb25zdCBncmFwaCA9IG5ldyBHcmFwaCgpO1xuXG5ncmFwaC5hZGROb2RlKFwiSG9tZVwiLCB7IHg6IHJhbmROdW0oKSwgeTogcmFuZE51bSgpLCBzaXplOiA1LCBsYWJlbDogXCJIb21lZEFkXCIsIGNvbG9yOiBcInB1cnBsZVwiLFVSTCA6IFwiLyNcIiB9KTtcbmdyYXBoLmFkZE5vZGUoXCJQcm9ncmFtbWluZ1wiLCB7IHg6IHJhbmROdW0oKSwgeTogcmFuZE51bSgpLCBzaXplOiA1LCBsYWJlbDogXCJQcm9nXCIsIGNvbG9yOiBcInJlZFwiLCBVUkw6IFwiL3RhZ3MvcHJvZy5odG1sXCIgfSk7XG5ncmFwaC5hZGRFZGdlKFwiSG9tZVwiLFwiUHJvZ3JhbW1pbmdcIik7XG5cbmNvbnN0IGNvbnRhaW5lciA6IChIVE1MRWxlbWVudCB8IG51bGwpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWdtYS1jb250YWluZXJcIik7XG5jb25zdCBzZXR0aW5nc1NpZ21hID0ge1xuICAgIGxhYmVsUmVuZGVyZWRTaXplVGhyZXNob2xkOiAxLFxuICB9XG5cbmNvbnN0IHJlbmRlcmVyID0gbmV3IFNpZ21hKGdyYXBoLGNvbnRhaW5lciEsc2V0dGluZ3NTaWdtYSk7XG4vL3RoZSAhIGluIGBjb250YWluZXIhYCBhc3NlcnRzIHRoYXQgYGNvbnRhaW5lcmAgaXMgbm9uLW51bGwgKHRoaXMgc3RvcHMgdGhlIElERSB3YXJuaW5ncylcblxuXG4vLzJuZCBHcmFwaCAtIGltcG9ydGluZyBub2RlcyB3aXRoIGpzb25cblxuY29uc3QgZ3JhcGgyID0gbmV3IEdyYXBoKCk7XG5cblxuXG5ncmFwaDIuaW1wb3J0KGRhdGEpXG5cbmNvbnN0IGNvbnRhaW5lcjIgOiAoSFRNTEVsZW1lbnQgfCBudWxsKSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbWEtY29udGFpbmVyMlwiKTtcbmNvbnN0IHNldHRpbmdzU2lnbWEyID0ge1xuICAgIGxhYmVsUmVuZGVyZWRTaXplVGhyZXNob2xkOiAxLFxuICB9XG5cbmNvbnN0IHJlbmRlcmVyMiA9IG5ldyBTaWdtYShncmFwaDIsY29udGFpbmVyMiEsc2V0dGluZ3NTaWdtYTIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==