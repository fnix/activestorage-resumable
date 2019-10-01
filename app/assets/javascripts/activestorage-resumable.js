(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define([ "exports" ], factory) : (global = global || self, 
  factory(global.ActiveStorageResumable = {}));
})(this, function(exports) {
  "use strict";
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function commonjsRequire() {
    throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs");
  }
  function unwrapExports(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }
  var O = "object";
  var check = function(it) {
    return it && it.Math == Math && it;
  };
  var global_1 = check(typeof globalThis == O && globalThis) || check(typeof window == O && window) || check(typeof self == O && self) || check(typeof commonjsGlobal == O && commonjsGlobal) || Function("return this")();
  var fails = function(exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };
  var descriptors = !fails(function() {
    return Object.defineProperty({}, "a", {
      get: function() {
        return 7;
      }
    }).a != 7;
  });
  var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
    1: 2
  }, 1);
  var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
  } : nativePropertyIsEnumerable;
  var objectPropertyIsEnumerable = {
    f: f
  };
  var createPropertyDescriptor = function(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  var toString = {}.toString;
  var classofRaw = function(it) {
    return toString.call(it).slice(8, -1);
  };
  var split = "".split;
  var indexedObject = fails(function() {
    return !Object("z").propertyIsEnumerable(0);
  }) ? function(it) {
    return classofRaw(it) == "String" ? split.call(it, "") : Object(it);
  } : Object;
  var requireObjectCoercible = function(it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  };
  var toIndexedObject = function(it) {
    return indexedObject(requireObjectCoercible(it));
  };
  var isObject = function(it) {
    return typeof it === "object" ? it !== null : typeof it === "function";
  };
  var toPrimitive = function(input, PREFERRED_STRING) {
    if (!isObject(input)) return input;
    var fn, val;
    if (PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == "function" && !isObject(val = fn.call(input))) return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
  };
  var hasOwnProperty = {}.hasOwnProperty;
  var has = function(it, key) {
    return hasOwnProperty.call(it, key);
  };
  var document$1 = global_1.document;
  var EXISTS = isObject(document$1) && isObject(document$1.createElement);
  var documentCreateElement = function(it) {
    return EXISTS ? document$1.createElement(it) : {};
  };
  var ie8DomDefine = !descriptors && !fails(function() {
    return Object.defineProperty(documentCreateElement("div"), "a", {
      get: function() {
        return 7;
      }
    }).a != 7;
  });
  var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPrimitive(P, true);
    if (ie8DomDefine) try {
      return nativeGetOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
  };
  var objectGetOwnPropertyDescriptor = {
    f: f$1
  };
  var anObject = function(it) {
    if (!isObject(it)) {
      throw TypeError(String(it) + " is not an object");
    }
    return it;
  };
  var nativeDefineProperty = Object.defineProperty;
  var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (ie8DomDefine) try {
      return nativeDefineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
  };
  var objectDefineProperty = {
    f: f$2
  };
  var hide = descriptors ? function(object, key, value) {
    return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
  var setGlobal = function(key, value) {
    try {
      hide(global_1, key, value);
    } catch (error) {
      global_1[key] = value;
    }
    return value;
  };
  var isPure = false;
  var shared = createCommonjsModule(function(module) {
    var SHARED = "__core-js_shared__";
    var store = global_1[SHARED] || setGlobal(SHARED, {});
    (module.exports = function(key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {});
    })("versions", []).push({
      version: "3.2.1",
      mode: "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    });
  });
  var functionToString = shared("native-function-to-string", Function.toString);
  var WeakMap$1 = global_1.WeakMap;
  var nativeWeakMap = typeof WeakMap$1 === "function" && /native code/.test(functionToString.call(WeakMap$1));
  var id = 0;
  var postfix = Math.random();
  var uid = function(key) {
    return "Symbol(" + String(key === undefined ? "" : key) + ")_" + (++id + postfix).toString(36);
  };
  var keys = shared("keys");
  var sharedKey = function(key) {
    return keys[key] || (keys[key] = uid(key));
  };
  var hiddenKeys = {};
  var WeakMap$2 = global_1.WeakMap;
  var set, get, has$1;
  var enforce = function(it) {
    return has$1(it) ? get(it) : set(it, {});
  };
  var getterFor = function(TYPE) {
    return function(it) {
      var state;
      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw TypeError("Incompatible receiver, " + TYPE + " required");
      }
      return state;
    };
  };
  if (nativeWeakMap) {
    var store = new WeakMap$2();
    var wmget = store.get;
    var wmhas = store.has;
    var wmset = store.set;
    set = function(it, metadata) {
      wmset.call(store, it, metadata);
      return metadata;
    };
    get = function(it) {
      return wmget.call(store, it) || {};
    };
    has$1 = function(it) {
      return wmhas.call(store, it);
    };
  } else {
    var STATE = sharedKey("state");
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
      hide(it, STATE, metadata);
      return metadata;
    };
    get = function(it) {
      return has(it, STATE) ? it[STATE] : {};
    };
    has$1 = function(it) {
      return has(it, STATE);
    };
  }
  var internalState = {
    set: set,
    get: get,
    has: has$1,
    enforce: enforce,
    getterFor: getterFor
  };
  var redefine = createCommonjsModule(function(module) {
    var getInternalState = internalState.get;
    var enforceInternalState = internalState.enforce;
    var TEMPLATE = String(functionToString).split("toString");
    shared("inspectSource", function(it) {
      return functionToString.call(it);
    });
    (module.exports = function(O, key, value, options) {
      var unsafe = options ? !!options.unsafe : false;
      var simple = options ? !!options.enumerable : false;
      var noTargetGet = options ? !!options.noTargetGet : false;
      if (typeof value == "function") {
        if (typeof key == "string" && !has(value, "name")) hide(value, "name", key);
        enforceInternalState(value).source = TEMPLATE.join(typeof key == "string" ? key : "");
      }
      if (O === global_1) {
        if (simple) O[key] = value; else setGlobal(key, value);
        return;
      } else if (!unsafe) {
        delete O[key];
      } else if (!noTargetGet && O[key]) {
        simple = true;
      }
      if (simple) O[key] = value; else hide(O, key, value);
    })(Function.prototype, "toString", function toString() {
      return typeof this == "function" && getInternalState(this).source || functionToString.call(this);
    });
  });
  var path = global_1;
  var aFunction = function(variable) {
    return typeof variable == "function" ? variable : undefined;
  };
  var getBuiltIn = function(namespace, method) {
    return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace]) : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
  };
  var ceil = Math.ceil;
  var floor = Math.floor;
  var toInteger = function(argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
  };
  var min = Math.min;
  var toLength = function(argument) {
    return argument > 0 ? min(toInteger(argument), 9007199254740991) : 0;
  };
  var max = Math.max;
  var min$1 = Math.min;
  var toAbsoluteIndex = function(index, length) {
    var integer = toInteger(index);
    return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
  };
  var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
      var O = toIndexedObject($this);
      var length = toLength(O.length);
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        if (value != value) return true;
      } else for (;length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };
  var arrayIncludes = {
    includes: createMethod(true),
    indexOf: createMethod(false)
  };
  var indexOf = arrayIncludes.indexOf;
  var objectKeysInternal = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
    while (names.length > i) if (has(O, key = names[i++])) {
      ~indexOf(result, key) || result.push(key);
    }
    return result;
  };
  var enumBugKeys = [ "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf" ];
  var hiddenKeys$1 = enumBugKeys.concat("length", "prototype");
  var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return objectKeysInternal(O, hiddenKeys$1);
  };
  var objectGetOwnPropertyNames = {
    f: f$3
  };
  var f$4 = Object.getOwnPropertySymbols;
  var objectGetOwnPropertySymbols = {
    f: f$4
  };
  var ownKeys = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = objectGetOwnPropertyNames.f(anObject(it));
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
  };
  var copyConstructorProperties = function(target, source) {
    var keys = ownKeys(source);
    var defineProperty = objectDefineProperty.f;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };
  var replacement = /#|\.prototype\./;
  var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == "function" ? fails(detection) : !!detection;
  };
  var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, ".").toLowerCase();
  };
  var data = isForced.data = {};
  var NATIVE = isForced.NATIVE = "N";
  var POLYFILL = isForced.POLYFILL = "P";
  var isForced_1 = isForced;
  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var _export = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global_1;
    } else if (STATIC) {
      target = global_1[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global_1[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor$1(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty === typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      if (options.sham || targetProperty && targetProperty.sham) {
        hide(sourceProperty, "sham", true);
      }
      redefine(target, key, sourceProperty, options);
    }
  };
  var userAgent = getBuiltIn("navigator", "userAgent") || "";
  var slice = [].slice;
  var MSIE = /MSIE .\./.test(userAgent);
  var wrap = function(scheduler) {
    return function(handler, timeout) {
      var boundArgs = arguments.length > 2;
      var args = boundArgs ? slice.call(arguments, 2) : undefined;
      return scheduler(boundArgs ? function() {
        (typeof handler == "function" ? handler : Function(handler)).apply(this, args);
      } : handler, timeout);
    };
  };
  _export({
    global: true,
    bind: true,
    forced: MSIE
  }, {
    setTimeout: wrap(global_1.setTimeout),
    setInterval: wrap(global_1.setInterval)
  });
  var aFunction$1 = function(it) {
    if (typeof it != "function") {
      throw TypeError(String(it) + " is not a function");
    }
    return it;
  };
  var bindContext = function(fn, that, length) {
    aFunction$1(fn);
    if (that === undefined) return fn;
    switch (length) {
     case 0:
      return function() {
        return fn.call(that);
      };

     case 1:
      return function(a) {
        return fn.call(that, a);
      };

     case 2:
      return function(a, b) {
        return fn.call(that, a, b);
      };

     case 3:
      return function(a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  var toObject = function(argument) {
    return Object(requireObjectCoercible(argument));
  };
  var isArray = Array.isArray || function isArray(arg) {
    return classofRaw(arg) == "Array";
  };
  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function() {
    return !String(Symbol());
  });
  var Symbol$1 = global_1.Symbol;
  var store$1 = shared("wks");
  var wellKnownSymbol = function(name) {
    return store$1[name] || (store$1[name] = nativeSymbol && Symbol$1[name] || (nativeSymbol ? Symbol$1 : uid)("Symbol." + name));
  };
  var SPECIES = wellKnownSymbol("species");
  var arraySpeciesCreate = function(originalArray, length) {
    var C;
    if (isArray(originalArray)) {
      C = originalArray.constructor;
      if (typeof C == "function" && (C === Array || isArray(C.prototype))) C = undefined; else if (isObject(C)) {
        C = C[SPECIES];
        if (C === null) C = undefined;
      }
    }
    return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
  };
  var push = [].push;
  var createMethod$1 = function(TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function($this, callbackfn, that, specificCreate) {
      var O = toObject($this);
      var self = indexedObject(O);
      var boundFunction = bindContext(callbackfn, that, 3);
      var length = toLength(self.length);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate;
      var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
      var value, result;
      for (;length > index; index++) if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);
        if (TYPE) {
          if (IS_MAP) target[index] = result; else if (result) switch (TYPE) {
           case 3:
            return true;

           case 5:
            return value;

           case 6:
            return index;

           case 2:
            push.call(target, value);
          } else if (IS_EVERY) return false;
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };
  var arrayIteration = {
    forEach: createMethod$1(0),
    map: createMethod$1(1),
    filter: createMethod$1(2),
    some: createMethod$1(3),
    every: createMethod$1(4),
    find: createMethod$1(5),
    findIndex: createMethod$1(6)
  };
  var sloppyArrayMethod = function(METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !method || !fails(function() {
      method.call(null, argument || function() {
        throw 1;
      }, 1);
    });
  };
  var $forEach = arrayIteration.forEach;
  var arrayForEach = sloppyArrayMethod("forEach") ? function forEach(callbackfn) {
    return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  } : [].forEach;
  _export({
    target: "Array",
    proto: true,
    forced: [].forEach != arrayForEach
  }, {
    forEach: arrayForEach
  });
  var objectKeys = Object.keys || function keys(O) {
    return objectKeysInternal(O, enumBugKeys);
  };
  var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
    return O;
  };
  var html = getBuiltIn("document", "documentElement");
  var IE_PROTO = sharedKey("IE_PROTO");
  var PROTOTYPE = "prototype";
  var Empty = function() {};
  var createDict = function() {
    var iframe = documentCreateElement("iframe");
    var length = enumBugKeys.length;
    var lt = "<";
    var script = "script";
    var gt = ">";
    var js = "java" + script + ":";
    var iframeDocument;
    iframe.style.display = "none";
    html.appendChild(iframe);
    iframe.src = String(js);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + script + gt + "document.F=Object" + lt + "/" + script + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
    return createDict();
  };
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE] = anObject(O);
      result = new Empty();
      Empty[PROTOTYPE] = null;
      result[IE_PROTO] = O;
    } else result = createDict();
    return Properties === undefined ? result : objectDefineProperties(result, Properties);
  };
  hiddenKeys[IE_PROTO] = true;
  var UNSCOPABLES = wellKnownSymbol("unscopables");
  var ArrayPrototype = Array.prototype;
  if (ArrayPrototype[UNSCOPABLES] == undefined) {
    hide(ArrayPrototype, UNSCOPABLES, objectCreate(null));
  }
  var addToUnscopables = function(key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
  };
  var iterators = {};
  var correctPrototypeGetter = !fails(function() {
    function F() {}
    F.prototype.constructor = null;
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });
  var IE_PROTO$1 = sharedKey("IE_PROTO");
  var ObjectPrototype = Object.prototype;
  var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function(O) {
    O = toObject(O);
    if (has(O, IE_PROTO$1)) return O[IE_PROTO$1];
    if (typeof O.constructor == "function" && O instanceof O.constructor) {
      return O.constructor.prototype;
    }
    return O instanceof Object ? ObjectPrototype : null;
  };
  var ITERATOR = wellKnownSymbol("iterator");
  var BUGGY_SAFARI_ITERATORS = false;
  var returnThis = function() {
    return this;
  };
  var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
  if ([].keys) {
    arrayIterator = [].keys();
    if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true; else {
      PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
    }
  }
  if (IteratorPrototype == undefined) IteratorPrototype = {};
  if (!has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
  };
  var defineProperty = objectDefineProperty.f;
  var TO_STRING_TAG = wellKnownSymbol("toStringTag");
  var setToStringTag = function(it, TAG, STATIC) {
    if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
      defineProperty(it, TO_STRING_TAG, {
        configurable: true,
        value: TAG
      });
    }
  };
  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
  var returnThis$1 = function() {
    return this;
  };
  var createIteratorConstructor = function(IteratorConstructor, NAME, next) {
    var TO_STRING_TAG = NAME + " Iterator";
    IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, {
      next: createPropertyDescriptor(1, next)
    });
    setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
    iterators[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };
  var aPossiblePrototype = function(it) {
    if (!isObject(it) && it !== null) {
      throw TypeError("Can't set " + String(it) + " as a prototype");
    }
    return it;
  };
  var objectSetPrototypeOf = Object.setPrototypeOf || ("__proto__" in {} ? function() {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      setter = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
      setter.call(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) {}
    return function setPrototypeOf(O, proto) {
      anObject(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter.call(O, proto); else O.__proto__ = proto;
      return O;
    };
  }() : undefined);
  var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$1 = wellKnownSymbol("iterator");
  var KEYS = "keys";
  var VALUES = "values";
  var ENTRIES = "entries";
  var returnThis$2 = function() {
    return this;
  };
  var defineIterator = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);
    var getIterationMethod = function(KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];
      switch (KIND) {
       case KEYS:
        return function keys() {
          return new IteratorConstructor(this, KIND);
        };

       case VALUES:
        return function values() {
          return new IteratorConstructor(this, KIND);
        };

       case ENTRIES:
        return function entries() {
          return new IteratorConstructor(this, KIND);
        };
      }
      return function() {
        return new IteratorConstructor(this);
      };
    };
    var TO_STRING_TAG = NAME + " Iterator";
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$1] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;
    if (anyNativeIterator) {
      CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
      if (IteratorPrototype$2 !== Object.prototype && CurrentIteratorPrototype.next) {
        if (objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype$2) {
          if (objectSetPrototypeOf) {
            objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype$2);
          } else if (typeof CurrentIteratorPrototype[ITERATOR$1] != "function") {
            hide(CurrentIteratorPrototype, ITERATOR$1, returnThis$2);
          }
        }
        setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    }
    if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() {
        return nativeIterator.call(this);
      };
    }
    if (IterablePrototype[ITERATOR$1] !== defaultIterator) {
      hide(IterablePrototype, ITERATOR$1, defaultIterator);
    }
    iterators[NAME] = defaultIterator;
    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          redefine(IterablePrototype, KEY, methods[KEY]);
        }
      } else _export({
        target: NAME,
        proto: true,
        forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME
      }, methods);
    }
    return methods;
  };
  var ARRAY_ITERATOR = "Array Iterator";
  var setInternalState = internalState.set;
  var getInternalState = internalState.getterFor(ARRAY_ITERATOR);
  var es_array_iterator = defineIterator(Array, "Array", function(iterated, kind) {
    setInternalState(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject(iterated),
      index: 0,
      kind: kind
    });
  }, function() {
    var state = getInternalState(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;
    if (!target || index >= target.length) {
      state.target = undefined;
      return {
        value: undefined,
        done: true
      };
    }
    if (kind == "keys") return {
      value: index,
      done: false
    };
    if (kind == "values") return {
      value: target[index],
      done: false
    };
    return {
      value: [ index, target[index] ],
      done: false
    };
  }, "values");
  iterators.Arguments = iterators.Array;
  addToUnscopables("keys");
  addToUnscopables("values");
  addToUnscopables("entries");
  var TO_STRING_TAG$1 = wellKnownSymbol("toStringTag");
  var CORRECT_ARGUMENTS = classofRaw(function() {
    return arguments;
  }()) == "Arguments";
  var tryGet = function(it, key) {
    try {
      return it[key];
    } catch (error) {}
  };
  var classof = function(it) {
    var O, tag, result;
    return it === undefined ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : result;
  };
  var TO_STRING_TAG$2 = wellKnownSymbol("toStringTag");
  var test = {};
  test[TO_STRING_TAG$2] = "z";
  var objectToString = String(test) !== "[object z]" ? function toString() {
    return "[object " + classof(this) + "]";
  } : test.toString;
  var ObjectPrototype$1 = Object.prototype;
  if (objectToString !== ObjectPrototype$1.toString) {
    redefine(ObjectPrototype$1, "toString", objectToString, {
      unsafe: true
    });
  }
  var createMethod$2 = function(CONVERT_TO_STRING) {
    return function($this, pos) {
      var S = String(requireObjectCoercible($this));
      var position = toInteger(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? "" : undefined;
      first = S.charCodeAt(position);
      return first < 55296 || first > 56319 || position + 1 === size || (second = S.charCodeAt(position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
    };
  };
  var stringMultibyte = {
    codeAt: createMethod$2(false),
    charAt: createMethod$2(true)
  };
  var charAt = stringMultibyte.charAt;
  var STRING_ITERATOR = "String Iterator";
  var setInternalState$1 = internalState.set;
  var getInternalState$1 = internalState.getterFor(STRING_ITERATOR);
  defineIterator(String, "String", function(iterated) {
    setInternalState$1(this, {
      type: STRING_ITERATOR,
      string: String(iterated),
      index: 0
    });
  }, function next() {
    var state = getInternalState$1(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return {
      value: undefined,
      done: true
    };
    point = charAt(string, index);
    state.index += point.length;
    return {
      value: point,
      done: false
    };
  });
  var redefineAll = function(target, src, options) {
    for (var key in src) redefine(target, key, src[key], options);
    return target;
  };
  var freezing = !fails(function() {
    return Object.isExtensible(Object.preventExtensions({}));
  });
  var internalMetadata = createCommonjsModule(function(module) {
    var defineProperty = objectDefineProperty.f;
    var METADATA = uid("meta");
    var id = 0;
    var isExtensible = Object.isExtensible || function() {
      return true;
    };
    var setMetadata = function(it) {
      defineProperty(it, METADATA, {
        value: {
          objectID: "O" + ++id,
          weakData: {}
        }
      });
    };
    var fastKey = function(it, create) {
      if (!isObject(it)) return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
      if (!has(it, METADATA)) {
        if (!isExtensible(it)) return "F";
        if (!create) return "E";
        setMetadata(it);
      }
      return it[METADATA].objectID;
    };
    var getWeakData = function(it, create) {
      if (!has(it, METADATA)) {
        if (!isExtensible(it)) return true;
        if (!create) return false;
        setMetadata(it);
      }
      return it[METADATA].weakData;
    };
    var onFreeze = function(it) {
      if (freezing && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
      return it;
    };
    var meta = module.exports = {
      REQUIRED: false,
      fastKey: fastKey,
      getWeakData: getWeakData,
      onFreeze: onFreeze
    };
    hiddenKeys[METADATA] = true;
  });
  var internalMetadata_1 = internalMetadata.REQUIRED;
  var internalMetadata_2 = internalMetadata.fastKey;
  var internalMetadata_3 = internalMetadata.getWeakData;
  var internalMetadata_4 = internalMetadata.onFreeze;
  var ITERATOR$2 = wellKnownSymbol("iterator");
  var ArrayPrototype$1 = Array.prototype;
  var isArrayIteratorMethod = function(it) {
    return it !== undefined && (iterators.Array === it || ArrayPrototype$1[ITERATOR$2] === it);
  };
  var ITERATOR$3 = wellKnownSymbol("iterator");
  var getIteratorMethod = function(it) {
    if (it != undefined) return it[ITERATOR$3] || it["@@iterator"] || iterators[classof(it)];
  };
  var callWithSafeIterationClosing = function(iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (error) {
      var returnMethod = iterator["return"];
      if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
      throw error;
    }
  };
  var iterate_1 = createCommonjsModule(function(module) {
    var Result = function(stopped, result) {
      this.stopped = stopped;
      this.result = result;
    };
    var iterate = module.exports = function(iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
      var boundFunction = bindContext(fn, that, AS_ENTRIES ? 2 : 1);
      var iterator, iterFn, index, length, result, step;
      if (IS_ITERATOR) {
        iterator = iterable;
      } else {
        iterFn = getIteratorMethod(iterable);
        if (typeof iterFn != "function") throw TypeError("Target is not iterable");
        if (isArrayIteratorMethod(iterFn)) {
          for (index = 0, length = toLength(iterable.length); length > index; index++) {
            result = AS_ENTRIES ? boundFunction(anObject(step = iterable[index])[0], step[1]) : boundFunction(iterable[index]);
            if (result && result instanceof Result) return result;
          }
          return new Result(false);
        }
        iterator = iterFn.call(iterable);
      }
      while (!(step = iterator.next()).done) {
        result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
        if (result && result instanceof Result) return result;
      }
      return new Result(false);
    };
    iterate.stop = function(result) {
      return new Result(true, result);
    };
  });
  var anInstance = function(it, Constructor, name) {
    if (!(it instanceof Constructor)) {
      throw TypeError("Incorrect " + (name ? name + " " : "") + "invocation");
    }
    return it;
  };
  var ITERATOR$4 = wellKnownSymbol("iterator");
  var SAFE_CLOSING = false;
  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function() {
        return {
          done: !!called++
        };
      },
      return: function() {
        SAFE_CLOSING = true;
      }
    };
    iteratorWithReturn[ITERATOR$4] = function() {
      return this;
    };
    Array.from(iteratorWithReturn, function() {
      throw 2;
    });
  } catch (error) {}
  var checkCorrectnessOfIteration = function(exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;
    try {
      var object = {};
      object[ITERATOR$4] = function() {
        return {
          next: function() {
            return {
              done: ITERATION_SUPPORT = true
            };
          }
        };
      };
      exec(object);
    } catch (error) {}
    return ITERATION_SUPPORT;
  };
  var inheritIfRequired = function($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (objectSetPrototypeOf && typeof (NewTarget = dummy.constructor) == "function" && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) objectSetPrototypeOf($this, NewTargetPrototype);
    return $this;
  };
  var collection = function(CONSTRUCTOR_NAME, wrapper, common, IS_MAP, IS_WEAK) {
    var NativeConstructor = global_1[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var Constructor = NativeConstructor;
    var ADDER = IS_MAP ? "set" : "add";
    var exported = {};
    var fixMethod = function(KEY) {
      var nativeMethod = NativePrototype[KEY];
      redefine(NativePrototype, KEY, KEY == "add" ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == "delete" ? function(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == "get" ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == "has" ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      });
    };
    if (isForced_1(CONSTRUCTOR_NAME, typeof NativeConstructor != "function" || !(IS_WEAK || NativePrototype.forEach && !fails(function() {
      new NativeConstructor().entries().next();
    })))) {
      Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
      internalMetadata.REQUIRED = true;
    } else if (isForced_1(CONSTRUCTOR_NAME, true)) {
      var instance = new Constructor();
      var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
      var THROWS_ON_PRIMITIVES = fails(function() {
        instance.has(1);
      });
      var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function(iterable) {
        new NativeConstructor(iterable);
      });
      var BUGGY_ZERO = !IS_WEAK && fails(function() {
        var $instance = new NativeConstructor();
        var index = 5;
        while (index--) $instance[ADDER](index, index);
        return !$instance.has(-0);
      });
      if (!ACCEPT_ITERABLES) {
        Constructor = wrapper(function(dummy, iterable) {
          anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
          var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
          if (iterable != undefined) iterate_1(iterable, that[ADDER], that, IS_MAP);
          return that;
        });
        Constructor.prototype = NativePrototype;
        NativePrototype.constructor = Constructor;
      }
      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod("delete");
        fixMethod("has");
        IS_MAP && fixMethod("get");
      }
      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
      if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
    }
    exported[CONSTRUCTOR_NAME] = Constructor;
    _export({
      global: true,
      forced: Constructor != NativeConstructor
    }, exported);
    setToStringTag(Constructor, CONSTRUCTOR_NAME);
    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
    return Constructor;
  };
  var getWeakData = internalMetadata.getWeakData;
  var setInternalState$2 = internalState.set;
  var internalStateGetterFor = internalState.getterFor;
  var find = arrayIteration.find;
  var findIndex = arrayIteration.findIndex;
  var id$1 = 0;
  var uncaughtFrozenStore = function(store) {
    return store.frozen || (store.frozen = new UncaughtFrozenStore());
  };
  var UncaughtFrozenStore = function() {
    this.entries = [];
  };
  var findUncaughtFrozen = function(store, key) {
    return find(store.entries, function(it) {
      return it[0] === key;
    });
  };
  UncaughtFrozenStore.prototype = {
    get: function(key) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) return entry[1];
    },
    has: function(key) {
      return !!findUncaughtFrozen(this, key);
    },
    set: function(key, value) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) entry[1] = value; else this.entries.push([ key, value ]);
    },
    delete: function(key) {
      var index = findIndex(this.entries, function(it) {
        return it[0] === key;
      });
      if (~index) this.entries.splice(index, 1);
      return !!~index;
    }
  };
  var collectionWeak = {
    getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var C = wrapper(function(that, iterable) {
        anInstance(that, C, CONSTRUCTOR_NAME);
        setInternalState$2(that, {
          type: CONSTRUCTOR_NAME,
          id: id$1++,
          frozen: undefined
        });
        if (iterable != undefined) iterate_1(iterable, that[ADDER], that, IS_MAP);
      });
      var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
      var define = function(that, key, value) {
        var state = getInternalState(that);
        var data = getWeakData(anObject(key), true);
        if (data === true) uncaughtFrozenStore(state).set(key, value); else data[state.id] = value;
        return that;
      };
      redefineAll(C.prototype, {
        delete: function(key) {
          var state = getInternalState(this);
          if (!isObject(key)) return false;
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state)["delete"](key);
          return data && has(data, state.id) && delete data[state.id];
        },
        has: function has$1(key) {
          var state = getInternalState(this);
          if (!isObject(key)) return false;
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).has(key);
          return data && has(data, state.id);
        }
      });
      redefineAll(C.prototype, IS_MAP ? {
        get: function get(key) {
          var state = getInternalState(this);
          if (isObject(key)) {
            var data = getWeakData(key);
            if (data === true) return uncaughtFrozenStore(state).get(key);
            return data ? data[state.id] : undefined;
          }
        },
        set: function set(key, value) {
          return define(this, key, value);
        }
      } : {
        add: function add(value) {
          return define(this, value, true);
        }
      });
      return C;
    }
  };
  var es_weakMap = createCommonjsModule(function(module) {
    var enforceIternalState = internalState.enforce;
    var IS_IE11 = !global_1.ActiveXObject && "ActiveXObject" in global_1;
    var isExtensible = Object.isExtensible;
    var InternalWeakMap;
    var wrapper = function(get) {
      return function WeakMap() {
        return get(this, arguments.length ? arguments[0] : undefined);
      };
    };
    var $WeakMap = module.exports = collection("WeakMap", wrapper, collectionWeak, true, true);
    if (nativeWeakMap && IS_IE11) {
      InternalWeakMap = collectionWeak.getConstructor(wrapper, "WeakMap", true);
      internalMetadata.REQUIRED = true;
      var WeakMapPrototype = $WeakMap.prototype;
      var nativeDelete = WeakMapPrototype["delete"];
      var nativeHas = WeakMapPrototype.has;
      var nativeGet = WeakMapPrototype.get;
      var nativeSet = WeakMapPrototype.set;
      redefineAll(WeakMapPrototype, {
        delete: function(key) {
          if (isObject(key) && !isExtensible(key)) {
            var state = enforceIternalState(this);
            if (!state.frozen) state.frozen = new InternalWeakMap();
            return nativeDelete.call(this, key) || state.frozen["delete"](key);
          }
          return nativeDelete.call(this, key);
        },
        has: function has(key) {
          if (isObject(key) && !isExtensible(key)) {
            var state = enforceIternalState(this);
            if (!state.frozen) state.frozen = new InternalWeakMap();
            return nativeHas.call(this, key) || state.frozen.has(key);
          }
          return nativeHas.call(this, key);
        },
        get: function get(key) {
          if (isObject(key) && !isExtensible(key)) {
            var state = enforceIternalState(this);
            if (!state.frozen) state.frozen = new InternalWeakMap();
            return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key);
          }
          return nativeGet.call(this, key);
        },
        set: function set(key, value) {
          if (isObject(key) && !isExtensible(key)) {
            var state = enforceIternalState(this);
            if (!state.frozen) state.frozen = new InternalWeakMap();
            nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value);
          } else nativeSet.call(this, key, value);
          return this;
        }
      });
    }
  });
  var domIterables = {
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
  for (var COLLECTION_NAME in domIterables) {
    var Collection = global_1[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype;
    if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach) try {
      hide(CollectionPrototype, "forEach", arrayForEach);
    } catch (error) {
      CollectionPrototype.forEach = arrayForEach;
    }
  }
  var ITERATOR$5 = wellKnownSymbol("iterator");
  var TO_STRING_TAG$3 = wellKnownSymbol("toStringTag");
  var ArrayValues = es_array_iterator.values;
  for (var COLLECTION_NAME$1 in domIterables) {
    var Collection$1 = global_1[COLLECTION_NAME$1];
    var CollectionPrototype$1 = Collection$1 && Collection$1.prototype;
    if (CollectionPrototype$1) {
      if (CollectionPrototype$1[ITERATOR$5] !== ArrayValues) try {
        hide(CollectionPrototype$1, ITERATOR$5, ArrayValues);
      } catch (error) {
        CollectionPrototype$1[ITERATOR$5] = ArrayValues;
      }
      if (!CollectionPrototype$1[TO_STRING_TAG$3]) hide(CollectionPrototype$1, TO_STRING_TAG$3, COLLECTION_NAME$1);
      if (domIterables[COLLECTION_NAME$1]) for (var METHOD_NAME in es_array_iterator) {
        if (CollectionPrototype$1[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
          hide(CollectionPrototype$1, METHOD_NAME, es_array_iterator[METHOD_NAME]);
        } catch (error) {
          CollectionPrototype$1[METHOD_NAME] = es_array_iterator[METHOD_NAME];
        }
      }
    }
  }
  var SPECIES$1 = wellKnownSymbol("species");
  var arrayMethodHasSpeciesSupport = function(METHOD_NAME) {
    return !fails(function() {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$1] = function() {
        return {
          foo: 1
        };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };
  var $filter = arrayIteration.filter;
  _export({
    target: "Array",
    proto: true,
    forced: !arrayMethodHasSpeciesSupport("filter")
  }, {
    filter: function filter(callbackfn) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
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
    return function() {
      var self = this, args = arguments;
      return new Promise(function(resolve, reject) {
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
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
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
  var defineProperty$1 = objectDefineProperty.f;
  var FunctionPrototype = Function.prototype;
  var FunctionPrototypeToString = FunctionPrototype.toString;
  var nameRE = /^\s*function ([^ (]*)/;
  var NAME = "name";
  if (descriptors && !(NAME in FunctionPrototype)) {
    defineProperty$1(FunctionPrototype, NAME, {
      configurable: true,
      get: function() {
        try {
          return FunctionPrototypeToString.call(this).match(nameRE)[1];
        } catch (error) {
          return "";
        }
      }
    });
  }
  var FORCED = fails(function() {
    return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
      toISOString: function() {
        return 1;
      }
    }) !== 1;
  });
  _export({
    target: "Date",
    proto: true,
    forced: FORCED
  }, {
    toJSON: function toJSON(key) {
      var O = toObject(this);
      var pv = toPrimitive(O);
      return typeof pv == "number" && !isFinite(pv) ? null : O.toISOString();
    }
  });
  _export({
    target: "URL",
    proto: true,
    enumerable: true
  }, {
    toJSON: function toJSON() {
      return URL.prototype.toString.call(this);
    }
  });
  var createProperty = function(object, key, value) {
    var propertyKey = toPrimitive(key);
    if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value)); else object[propertyKey] = value;
  };
  var SPECIES$2 = wellKnownSymbol("species");
  var nativeSlice = [].slice;
  var max$1 = Math.max;
  _export({
    target: "Array",
    proto: true,
    forced: !arrayMethodHasSpeciesSupport("slice")
  }, {
    slice: function slice(start, end) {
      var O = toIndexedObject(this);
      var length = toLength(O.length);
      var k = toAbsoluteIndex(start, length);
      var fin = toAbsoluteIndex(end === undefined ? length : end, length);
      var Constructor, result, n;
      if (isArray(O)) {
        Constructor = O.constructor;
        if (typeof Constructor == "function" && (Constructor === Array || isArray(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject(Constructor)) {
          Constructor = Constructor[SPECIES$2];
          if (Constructor === null) Constructor = undefined;
        }
        if (Constructor === Array || Constructor === undefined) {
          return nativeSlice.call(O, k, fin);
        }
      }
      result = new (Constructor === undefined ? Array : Constructor)(max$1(fin - k, 0));
      for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
      result.length = n;
      return result;
    }
  });
  var defineProperty$2 = objectDefineProperty.f;
  var DataView = global_1.DataView;
  var DataViewPrototype = DataView && DataView.prototype;
  var Int8Array$1 = global_1.Int8Array;
  var Int8ArrayPrototype = Int8Array$1 && Int8Array$1.prototype;
  var Uint8ClampedArray$1 = global_1.Uint8ClampedArray;
  var Uint8ClampedArrayPrototype = Uint8ClampedArray$1 && Uint8ClampedArray$1.prototype;
  var TypedArray = Int8Array$1 && objectGetPrototypeOf(Int8Array$1);
  var TypedArrayPrototype = Int8ArrayPrototype && objectGetPrototypeOf(Int8ArrayPrototype);
  var ObjectPrototype$2 = Object.prototype;
  var isPrototypeOf = ObjectPrototype$2.isPrototypeOf;
  var TO_STRING_TAG$4 = wellKnownSymbol("toStringTag");
  var TYPED_ARRAY_TAG = uid("TYPED_ARRAY_TAG");
  var NATIVE_ARRAY_BUFFER = !!(global_1.ArrayBuffer && DataView);
  var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!objectSetPrototypeOf && classof(global_1.opera) !== "Opera";
  var TYPED_ARRAY_TAG_REQIRED = false;
  var NAME$1;
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
    return klass === "DataView" || has(TypedArrayConstructorsList, klass);
  };
  var isTypedArray = function(it) {
    return isObject(it) && has(TypedArrayConstructorsList, classof(it));
  };
  var aTypedArray = function(it) {
    if (isTypedArray(it)) return it;
    throw TypeError("Target is not a typed array");
  };
  var aTypedArrayConstructor = function(C) {
    if (objectSetPrototypeOf) {
      if (isPrototypeOf.call(TypedArray, C)) return C;
    } else for (var ARRAY in TypedArrayConstructorsList) if (has(TypedArrayConstructorsList, NAME$1)) {
      var TypedArrayConstructor = global_1[ARRAY];
      if (TypedArrayConstructor && (C === TypedArrayConstructor || isPrototypeOf.call(TypedArrayConstructor, C))) {
        return C;
      }
    }
    throw TypeError("Target is not a typed array constructor");
  };
  var exportProto = function(KEY, property, forced) {
    if (!descriptors) return;
    if (forced) for (var ARRAY in TypedArrayConstructorsList) {
      var TypedArrayConstructor = global_1[ARRAY];
      if (TypedArrayConstructor && has(TypedArrayConstructor.prototype, KEY)) {
        delete TypedArrayConstructor.prototype[KEY];
      }
    }
    if (!TypedArrayPrototype[KEY] || forced) {
      redefine(TypedArrayPrototype, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property);
    }
  };
  var exportStatic = function(KEY, property, forced) {
    var ARRAY, TypedArrayConstructor;
    if (!descriptors) return;
    if (objectSetPrototypeOf) {
      if (forced) for (ARRAY in TypedArrayConstructorsList) {
        TypedArrayConstructor = global_1[ARRAY];
        if (TypedArrayConstructor && has(TypedArrayConstructor, KEY)) {
          delete TypedArrayConstructor[KEY];
        }
      }
      if (!TypedArray[KEY] || forced) {
        try {
          return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8Array$1[KEY] || property);
        } catch (error) {}
      } else return;
    }
    for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global_1[ARRAY];
      if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
        redefine(TypedArrayConstructor, KEY, property);
      }
    }
  };
  for (NAME$1 in TypedArrayConstructorsList) {
    if (!global_1[NAME$1]) NATIVE_ARRAY_BUFFER_VIEWS = false;
  }
  if (!NATIVE_ARRAY_BUFFER_VIEWS || typeof TypedArray != "function" || TypedArray === Function.prototype) {
    TypedArray = function TypedArray() {
      throw TypeError("Incorrect invocation");
    };
    if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME$1 in TypedArrayConstructorsList) {
      if (global_1[NAME$1]) objectSetPrototypeOf(global_1[NAME$1], TypedArray);
    }
  }
  if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype$2) {
    TypedArrayPrototype = TypedArray.prototype;
    if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME$1 in TypedArrayConstructorsList) {
      if (global_1[NAME$1]) objectSetPrototypeOf(global_1[NAME$1].prototype, TypedArrayPrototype);
    }
  }
  if (NATIVE_ARRAY_BUFFER_VIEWS && objectGetPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
    objectSetPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
  }
  if (descriptors && !has(TypedArrayPrototype, TO_STRING_TAG$4)) {
    TYPED_ARRAY_TAG_REQIRED = true;
    defineProperty$2(TypedArrayPrototype, TO_STRING_TAG$4, {
      get: function() {
        return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
      }
    });
    for (NAME$1 in TypedArrayConstructorsList) if (global_1[NAME$1]) {
      hide(global_1[NAME$1], TYPED_ARRAY_TAG, NAME$1);
    }
  }
  if (NATIVE_ARRAY_BUFFER && objectSetPrototypeOf && objectGetPrototypeOf(DataViewPrototype) !== ObjectPrototype$2) {
    objectSetPrototypeOf(DataViewPrototype, ObjectPrototype$2);
  }
  var arrayBufferViewCore = {
    NATIVE_ARRAY_BUFFER: NATIVE_ARRAY_BUFFER,
    NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
    TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
    aTypedArray: aTypedArray,
    aTypedArrayConstructor: aTypedArrayConstructor,
    exportProto: exportProto,
    exportStatic: exportStatic,
    isView: isView,
    isTypedArray: isTypedArray,
    TypedArray: TypedArray,
    TypedArrayPrototype: TypedArrayPrototype
  };
  var toIndex = function(it) {
    if (it === undefined) return 0;
    var number = toInteger(it);
    var length = toLength(number);
    if (number !== length) throw RangeError("Wrong length or index");
    return length;
  };
  var arrayFill = function fill(value) {
    var O = toObject(this);
    var length = toLength(O.length);
    var argumentsLength = arguments.length;
    var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
    var end = argumentsLength > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
    while (endPos > index) O[index++] = value;
    return O;
  };
  var arrayBuffer = createCommonjsModule(function(module, exports) {
    var NATIVE_ARRAY_BUFFER = arrayBufferViewCore.NATIVE_ARRAY_BUFFER;
    var getOwnPropertyNames = objectGetOwnPropertyNames.f;
    var defineProperty = objectDefineProperty.f;
    var getInternalState = internalState.get;
    var setInternalState = internalState.set;
    var ARRAY_BUFFER = "ArrayBuffer";
    var DATA_VIEW = "DataView";
    var PROTOTYPE = "prototype";
    var WRONG_LENGTH = "Wrong length";
    var WRONG_INDEX = "Wrong index";
    var NativeArrayBuffer = global_1[ARRAY_BUFFER];
    var $ArrayBuffer = NativeArrayBuffer;
    var $DataView = global_1[DATA_VIEW];
    var Math = global_1.Math;
    var RangeError = global_1.RangeError;
    var Infinity = 1 / 0;
    var abs = Math.abs;
    var pow = Math.pow;
    var floor = Math.floor;
    var log = Math.log;
    var LN2 = Math.LN2;
    var packIEEE754 = function(number, mantissaLength, bytes) {
      var buffer = new Array(bytes);
      var exponentLength = bytes * 8 - mantissaLength - 1;
      var eMax = (1 << exponentLength) - 1;
      var eBias = eMax >> 1;
      var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
      var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
      var index = 0;
      var exponent, mantissa, c;
      number = abs(number);
      if (number != number || number === Infinity) {
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
      for (;mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8) ;
      exponent = exponent << mantissaLength | mantissa;
      exponentLength += mantissaLength;
      for (;exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8) ;
      buffer[--index] |= sign * 128;
      return buffer;
    };
    var unpackIEEE754 = function(buffer, mantissaLength) {
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
      for (;nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8) ;
      mantissa = exponent & (1 << -nBits) - 1;
      exponent >>= -nBits;
      nBits += mantissaLength;
      for (;nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8) ;
      if (exponent === 0) {
        exponent = 1 - eBias;
      } else if (exponent === eMax) {
        return mantissa ? NaN : sign ? -Infinity : Infinity;
      } else {
        mantissa = mantissa + pow(2, mantissaLength);
        exponent = exponent - eBias;
      }
      return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
    };
    var unpackInt32 = function(buffer) {
      return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
    };
    var packInt8 = function(number) {
      return [ number & 255 ];
    };
    var packInt16 = function(number) {
      return [ number & 255, number >> 8 & 255 ];
    };
    var packInt32 = function(number) {
      return [ number & 255, number >> 8 & 255, number >> 16 & 255, number >> 24 & 255 ];
    };
    var packFloat32 = function(number) {
      return packIEEE754(number, 23, 4);
    };
    var packFloat64 = function(number) {
      return packIEEE754(number, 52, 8);
    };
    var addGetter = function(Constructor, key) {
      defineProperty(Constructor[PROTOTYPE], key, {
        get: function() {
          return getInternalState(this)[key];
        }
      });
    };
    var get = function(view, count, index, isLittleEndian) {
      var numIndex = +index;
      var intIndex = toIndex(numIndex);
      var store = getInternalState(view);
      if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
      var bytes = getInternalState(store.buffer).bytes;
      var start = intIndex + store.byteOffset;
      var pack = bytes.slice(start, start + count);
      return isLittleEndian ? pack : pack.reverse();
    };
    var set = function(view, count, index, conversion, value, isLittleEndian) {
      var numIndex = +index;
      var intIndex = toIndex(numIndex);
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
        if (!descriptors) this.byteLength = byteLength;
      };
      $DataView = function DataView(buffer, byteOffset, byteLength) {
        anInstance(this, $DataView, DATA_VIEW);
        anInstance(buffer, $ArrayBuffer, DATA_VIEW);
        var bufferLength = getInternalState(buffer).byteLength;
        var offset = toInteger(byteOffset);
        if (offset < 0 || offset > bufferLength) throw RangeError("Wrong offset");
        byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
        if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
        setInternalState(this, {
          buffer: buffer,
          byteLength: byteLength,
          byteOffset: offset
        });
        if (!descriptors) {
          this.buffer = buffer;
          this.byteLength = byteLength;
          this.byteOffset = offset;
        }
      };
      if (descriptors) {
        addGetter($ArrayBuffer, "byteLength");
        addGetter($DataView, "buffer");
        addGetter($DataView, "byteLength");
        addGetter($DataView, "byteOffset");
      }
      redefineAll($DataView[PROTOTYPE], {
        getInt8: function getInt8(byteOffset) {
          return get(this, 1, byteOffset)[0] << 24 >> 24;
        },
        getUint8: function getUint8(byteOffset) {
          return get(this, 1, byteOffset)[0];
        },
        getInt16: function getInt16(byteOffset) {
          var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
          return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
        },
        getUint16: function getUint16(byteOffset) {
          var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
          return bytes[1] << 8 | bytes[0];
        },
        getInt32: function getInt32(byteOffset) {
          return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
        },
        getUint32: function getUint32(byteOffset) {
          return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
        },
        getFloat32: function getFloat32(byteOffset) {
          return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
        },
        getFloat64: function getFloat64(byteOffset) {
          return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
        },
        setInt8: function setInt8(byteOffset, value) {
          set(this, 1, byteOffset, packInt8, value);
        },
        setUint8: function setUint8(byteOffset, value) {
          set(this, 1, byteOffset, packInt8, value);
        },
        setInt16: function setInt16(byteOffset, value) {
          set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
        },
        setUint16: function setUint16(byteOffset, value) {
          set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
        },
        setInt32: function setInt32(byteOffset, value) {
          set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
        },
        setUint32: function setUint32(byteOffset, value) {
          set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
        },
        setFloat32: function setFloat32(byteOffset, value) {
          set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
        },
        setFloat64: function setFloat64(byteOffset, value) {
          set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
        }
      });
    } else {
      if (!fails(function() {
        NativeArrayBuffer(1);
      }) || !fails(function() {
        new NativeArrayBuffer(-1);
      }) || fails(function() {
        new NativeArrayBuffer();
        new NativeArrayBuffer(1.5);
        new NativeArrayBuffer(NaN);
        return NativeArrayBuffer.name != ARRAY_BUFFER;
      })) {
        $ArrayBuffer = function ArrayBuffer(length) {
          anInstance(this, $ArrayBuffer);
          return new NativeArrayBuffer(toIndex(length));
        };
        var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE] = NativeArrayBuffer[PROTOTYPE];
        for (var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j; ) {
          if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, NativeArrayBuffer[key]);
        }
        ArrayBufferPrototype.constructor = $ArrayBuffer;
      }
      var testView = new $DataView(new $ArrayBuffer(2));
      var nativeSetInt8 = $DataView[PROTOTYPE].setInt8;
      testView.setInt8(0, 2147483648);
      testView.setInt8(1, 2147483649);
      if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
        setInt8: function setInt8(byteOffset, value) {
          nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
        },
        setUint8: function setUint8(byteOffset, value) {
          nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
        }
      }, {
        unsafe: true
      });
    }
    setToStringTag($ArrayBuffer, ARRAY_BUFFER);
    setToStringTag($DataView, DATA_VIEW);
    exports[ARRAY_BUFFER] = $ArrayBuffer;
    exports[DATA_VIEW] = $DataView;
  });
  var SPECIES$3 = wellKnownSymbol("species");
  var setSpecies = function(CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
    var defineProperty = objectDefineProperty.f;
    if (descriptors && Constructor && !Constructor[SPECIES$3]) {
      defineProperty(Constructor, SPECIES$3, {
        configurable: true,
        get: function() {
          return this;
        }
      });
    }
  };
  var ARRAY_BUFFER = "ArrayBuffer";
  var ArrayBuffer$1 = arrayBuffer[ARRAY_BUFFER];
  var NativeArrayBuffer = global_1[ARRAY_BUFFER];
  _export({
    global: true,
    forced: NativeArrayBuffer !== ArrayBuffer$1
  }, {
    ArrayBuffer: ArrayBuffer$1
  });
  setSpecies(ARRAY_BUFFER);
  var SPECIES$4 = wellKnownSymbol("species");
  var speciesConstructor = function(O, defaultConstructor) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || (S = anObject(C)[SPECIES$4]) == undefined ? defaultConstructor : aFunction$1(S);
  };
  var ArrayBuffer$2 = arrayBuffer.ArrayBuffer;
  var DataView$1 = arrayBuffer.DataView;
  var nativeArrayBufferSlice = ArrayBuffer$2.prototype.slice;
  var INCORRECT_SLICE = fails(function() {
    return !new ArrayBuffer$2(2).slice(1, undefined).byteLength;
  });
  _export({
    target: "ArrayBuffer",
    proto: true,
    unsafe: true,
    forced: INCORRECT_SLICE
  }, {
    slice: function slice(start, end) {
      if (nativeArrayBufferSlice !== undefined && end === undefined) {
        return nativeArrayBufferSlice.call(anObject(this), start);
      }
      var length = anObject(this).byteLength;
      var first = toAbsoluteIndex(start, length);
      var fin = toAbsoluteIndex(end === undefined ? length : end, length);
      var result = new (speciesConstructor(this, ArrayBuffer$2))(toLength(fin - first));
      var viewSource = new DataView$1(this);
      var viewTarget = new DataView$1(result);
      var index = 0;
      while (first < fin) {
        viewTarget.setUint8(index++, viewSource.getUint8(first++));
      }
      return result;
    }
  });
  var NATIVE_ARRAY_BUFFER_VIEWS$1 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
  var ArrayBuffer$3 = global_1.ArrayBuffer;
  var Int8Array$2 = global_1.Int8Array;
  var typedArraysConstructorsRequiresWrappers = !NATIVE_ARRAY_BUFFER_VIEWS$1 || !fails(function() {
    Int8Array$2(1);
  }) || !fails(function() {
    new Int8Array$2(-1);
  }) || !checkCorrectnessOfIteration(function(iterable) {
    new Int8Array$2();
    new Int8Array$2(null);
    new Int8Array$2(1.5);
    new Int8Array$2(iterable);
  }, true) || fails(function() {
    return new Int8Array$2(new ArrayBuffer$3(2), 1, undefined).length !== 1;
  });
  var toOffset = function(it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError("Wrong offset");
    return offset;
  };
  var aTypedArrayConstructor$1 = arrayBufferViewCore.aTypedArrayConstructor;
  var typedArrayFrom = function from(source) {
    var O = toObject(source);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iteratorMethod = getIteratorMethod(O);
    var i, length, result, step, iterator;
    if (iteratorMethod != undefined && !isArrayIteratorMethod(iteratorMethod)) {
      iterator = iteratorMethod.call(O);
      O = [];
      while (!(step = iterator.next()).done) {
        O.push(step.value);
      }
    }
    if (mapping && argumentsLength > 2) {
      mapfn = bindContext(mapfn, arguments[2], 2);
    }
    length = toLength(O.length);
    result = new (aTypedArrayConstructor$1(this))(length);
    for (i = 0; length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };
  var typedArrayConstructor = createCommonjsModule(function(module) {
    var getOwnPropertyNames = objectGetOwnPropertyNames.f;
    var forEach = arrayIteration.forEach;
    var getInternalState = internalState.get;
    var setInternalState = internalState.set;
    var nativeDefineProperty = objectDefineProperty.f;
    var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
    var round = Math.round;
    var RangeError = global_1.RangeError;
    var ArrayBuffer = arrayBuffer.ArrayBuffer;
    var DataView = arrayBuffer.DataView;
    var NATIVE_ARRAY_BUFFER_VIEWS = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
    var TYPED_ARRAY_TAG = arrayBufferViewCore.TYPED_ARRAY_TAG;
    var TypedArray = arrayBufferViewCore.TypedArray;
    var TypedArrayPrototype = arrayBufferViewCore.TypedArrayPrototype;
    var aTypedArrayConstructor = arrayBufferViewCore.aTypedArrayConstructor;
    var isTypedArray = arrayBufferViewCore.isTypedArray;
    var BYTES_PER_ELEMENT = "BYTES_PER_ELEMENT";
    var WRONG_LENGTH = "Wrong length";
    var fromList = function(C, list) {
      var index = 0;
      var length = list.length;
      var result = new (aTypedArrayConstructor(C))(length);
      while (length > index) result[index] = list[index++];
      return result;
    };
    var addGetter = function(it, key) {
      nativeDefineProperty(it, key, {
        get: function() {
          return getInternalState(this)[key];
        }
      });
    };
    var isArrayBuffer = function(it) {
      var klass;
      return it instanceof ArrayBuffer || (klass = classof(it)) == "ArrayBuffer" || klass == "SharedArrayBuffer";
    };
    var isTypedArrayIndex = function(target, key) {
      return isTypedArray(target) && typeof key != "symbol" && key in target && String(+key) == String(key);
    };
    var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
      return isTypedArrayIndex(target, key = toPrimitive(key, true)) ? createPropertyDescriptor(2, target[key]) : nativeGetOwnPropertyDescriptor(target, key);
    };
    var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
      if (isTypedArrayIndex(target, key = toPrimitive(key, true)) && isObject(descriptor) && has(descriptor, "value") && !has(descriptor, "get") && !has(descriptor, "set") && !descriptor.configurable && (!has(descriptor, "writable") || descriptor.writable) && (!has(descriptor, "enumerable") || descriptor.enumerable)) {
        target[key] = descriptor.value;
        return target;
      }
      return nativeDefineProperty(target, key, descriptor);
    };
    if (descriptors) {
      if (!NATIVE_ARRAY_BUFFER_VIEWS) {
        objectGetOwnPropertyDescriptor.f = wrappedGetOwnPropertyDescriptor;
        objectDefineProperty.f = wrappedDefineProperty;
        addGetter(TypedArrayPrototype, "buffer");
        addGetter(TypedArrayPrototype, "byteOffset");
        addGetter(TypedArrayPrototype, "byteLength");
        addGetter(TypedArrayPrototype, "length");
      }
      _export({
        target: "Object",
        stat: true,
        forced: !NATIVE_ARRAY_BUFFER_VIEWS
      }, {
        getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
        defineProperty: wrappedDefineProperty
      });
      module.exports = function(TYPE, BYTES, wrapper, CLAMPED) {
        var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? "Clamped" : "") + "Array";
        var GETTER = "get" + TYPE;
        var SETTER = "set" + TYPE;
        var NativeTypedArrayConstructor = global_1[CONSTRUCTOR_NAME];
        var TypedArrayConstructor = NativeTypedArrayConstructor;
        var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
        var exported = {};
        var getter = function(that, index) {
          var data = getInternalState(that);
          return data.view[GETTER](index * BYTES + data.byteOffset, true);
        };
        var setter = function(that, index, value) {
          var data = getInternalState(that);
          if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 255 ? 255 : value & 255;
          data.view[SETTER](index * BYTES + data.byteOffset, value, true);
        };
        var addElement = function(that, index) {
          nativeDefineProperty(that, index, {
            get: function() {
              return getter(this, index);
            },
            set: function(value) {
              return setter(this, index, value);
            },
            enumerable: true
          });
        };
        if (!NATIVE_ARRAY_BUFFER_VIEWS) {
          TypedArrayConstructor = wrapper(function(that, data, offset, $length) {
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
          if (objectSetPrototypeOf) objectSetPrototypeOf(TypedArrayConstructor, TypedArray);
          TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = objectCreate(TypedArrayPrototype);
        } else if (typedArraysConstructorsRequiresWrappers) {
          TypedArrayConstructor = wrapper(function(dummy, data, typedArrayOffset, $length) {
            anInstance(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
            if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
            if (isArrayBuffer(data)) return $length !== undefined ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length) : typedArrayOffset !== undefined ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES)) : new NativeTypedArrayConstructor(data);
            if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
            return typedArrayFrom.call(TypedArrayConstructor, data);
          });
          if (objectSetPrototypeOf) objectSetPrototypeOf(TypedArrayConstructor, TypedArray);
          forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function(key) {
            if (!(key in TypedArrayConstructor)) hide(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
          });
          TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
        }
        if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
          hide(TypedArrayConstructorPrototype, "constructor", TypedArrayConstructor);
        }
        if (TYPED_ARRAY_TAG) hide(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
        exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;
        _export({
          global: true,
          forced: TypedArrayConstructor != NativeTypedArrayConstructor,
          sham: !NATIVE_ARRAY_BUFFER_VIEWS
        }, exported);
        if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
          hide(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
        }
        if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
          hide(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
        }
        setSpecies(CONSTRUCTOR_NAME);
      };
    } else module.exports = function() {};
  });
  typedArrayConstructor("Uint16", 2, function(init) {
    return function Uint16Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });
  var min$2 = Math.min;
  var arrayCopyWithin = [].copyWithin || function copyWithin(target, start) {
    var O = toObject(this);
    var len = toLength(O.length);
    var to = toAbsoluteIndex(target, len);
    var from = toAbsoluteIndex(start, len);
    var end = arguments.length > 2 ? arguments[2] : undefined;
    var count = min$2((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
    var inc = 1;
    if (from < to && to < from + count) {
      inc = -1;
      from += count - 1;
      to += count - 1;
    }
    while (count-- > 0) {
      if (from in O) O[to] = O[from]; else delete O[to];
      to += inc;
      from += inc;
    }
    return O;
  };
  var aTypedArray$1 = arrayBufferViewCore.aTypedArray;
  arrayBufferViewCore.exportProto("copyWithin", function copyWithin(target, start) {
    return arrayCopyWithin.call(aTypedArray$1(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
  });
  var $every = arrayIteration.every;
  var aTypedArray$2 = arrayBufferViewCore.aTypedArray;
  arrayBufferViewCore.exportProto("every", function every(callbackfn) {
    return $every(aTypedArray$2(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  });
  var aTypedArray$3 = arrayBufferViewCore.aTypedArray;
  arrayBufferViewCore.exportProto("fill", function fill(value) {
    return arrayFill.apply(aTypedArray$3(this), arguments);
  });
  var $filter$1 = arrayIteration.filter;
  var aTypedArray$4 = arrayBufferViewCore.aTypedArray;
  var aTypedArrayConstructor$2 = arrayBufferViewCore.aTypedArrayConstructor;
  arrayBufferViewCore.exportProto("filter", function filter(callbackfn) {
    var list = $filter$1(aTypedArray$4(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var C = speciesConstructor(this, this.constructor);
    var index = 0;
    var length = list.length;
    var result = new (aTypedArrayConstructor$2(C))(length);
    while (length > index) result[index] = list[index++];
    return result;
  });
  var $find = arrayIteration.find;
  var aTypedArray$5 = arrayBufferViewCore.aTypedArray;
  arrayBufferViewCore.exportProto("find", function find(predicate) {
    return $find(aTypedArray$5(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
  });
  var $findIndex = arrayIteration.findIndex;
  var aTypedArray$6 = arrayBufferViewCore.aTypedArray;
  arrayBufferViewCore.exportProto("findIndex", function findIndex(predicate) {
    return $findIndex(aTypedArray$6(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
  });
  var $forEach$1 = arrayIteration.forEach;
  var aTypedArray$7 = arrayBufferViewCore.aTypedArray;
  arrayBufferViewCore.exportProto("forEach", function forEach(callbackfn) {
    $forEach$1(aTypedArray$7(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  });
  var $includes = arrayIncludes.includes;
  var aTypedArray$8 = arrayBufferViewCore.aTypedArray;
  arrayBufferViewCore.exportProto("includes", function includes(searchElement) {
    return $includes(aTypedArray$8(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
  });
  var $indexOf = arrayIncludes.indexOf;
  var aTypedArray$9 = arrayBufferViewCore.aTypedArray;
  arrayBufferViewCore.exportProto("indexOf", function indexOf(searchElement) {
    return $indexOf(aTypedArray$9(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
  });
  var ITERATOR$6 = wellKnownSymbol("iterator");
  var Uint8Array$1 = global_1.Uint8Array;
  var arrayValues = es_array_iterator.values;
  var arrayKeys = es_array_iterator.keys;
  var arrayEntries = es_array_iterator.entries;
  var aTypedArray$a = arrayBufferViewCore.aTypedArray;
  var exportProto$1 = arrayBufferViewCore.exportProto;
  var nativeTypedArrayIterator = Uint8Array$1 && Uint8Array$1.prototype[ITERATOR$6];
  var CORRECT_ITER_NAME = !!nativeTypedArrayIterator && (nativeTypedArrayIterator.name == "values" || nativeTypedArrayIterator.name == undefined);
  var typedArrayValues = function values() {
    return arrayValues.call(aTypedArray$a(this));
  };
  exportProto$1("entries", function entries() {
    return arrayEntries.call(aTypedArray$a(this));
  });
  exportProto$1("keys", function keys() {
    return arrayKeys.call(aTypedArray$a(this));
  });
  exportProto$1("values", typedArrayValues, !CORRECT_ITER_NAME);
  exportProto$1(ITERATOR$6, typedArrayValues, !CORRECT_ITER_NAME);
  var aTypedArray$b = arrayBufferViewCore.aTypedArray;
  var $join = [].join;
  arrayBufferViewCore.exportProto("join", function join(separator) {
    return $join.apply(aTypedArray$b(this), arguments);
  });
  var min$3 = Math.min;
  var nativeLastIndexOf = [].lastIndexOf;
  var NEGATIVE_ZERO = !!nativeLastIndexOf && 1 / [ 1 ].lastIndexOf(1, -0) < 0;
  var SLOPPY_METHOD = sloppyArrayMethod("lastIndexOf");
  var arrayLastIndexOf = NEGATIVE_ZERO || SLOPPY_METHOD ? function lastIndexOf(searchElement) {
    if (NEGATIVE_ZERO) return nativeLastIndexOf.apply(this, arguments) || 0;
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = min$3(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
    return -1;
  } : nativeLastIndexOf;
  var aTypedArray$c = arrayBufferViewCore.aTypedArray;
  arrayBufferViewCore.exportProto("lastIndexOf", function lastIndexOf(searchElement) {
    return arrayLastIndexOf.apply(aTypedArray$c(this), arguments);
  });
  var $map = arrayIteration.map;
  var aTypedArray$d = arrayBufferViewCore.aTypedArray;
  var aTypedArrayConstructor$3 = arrayBufferViewCore.aTypedArrayConstructor;
  arrayBufferViewCore.exportProto("map", function map(mapfn) {
    return $map(aTypedArray$d(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function(O, length) {
      return new (aTypedArrayConstructor$3(speciesConstructor(O, O.constructor)))(length);
    });
  });
  var createMethod$3 = function(IS_RIGHT) {
    return function(that, callbackfn, argumentsLength, memo) {
      aFunction$1(callbackfn);
      var O = toObject(that);
      var self = indexedObject(O);
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
          throw TypeError("Reduce of empty array with no initial value");
        }
      }
      for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
        memo = callbackfn(memo, self[index], index, O);
      }
      return memo;
    };
  };
  var arrayReduce = {
    left: createMethod$3(false),
    right: createMethod$3(true)
  };
  var $reduce = arrayReduce.left;
  var aTypedArray$e = arrayBufferViewCore.aTypedArray;
  arrayBufferViewCore.exportProto("reduce", function reduce(callbackfn) {
    return $reduce(aTypedArray$e(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  });
  var $reduceRight = arrayReduce.right;
  var aTypedArray$f = arrayBufferViewCore.aTypedArray;
  arrayBufferViewCore.exportProto("reduceRight", function reduceRight(callbackfn) {
    return $reduceRight(aTypedArray$f(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  });
  var aTypedArray$g = arrayBufferViewCore.aTypedArray;
  var floor$1 = Math.floor;
  arrayBufferViewCore.exportProto("reverse", function reverse() {
    var that = this;
    var length = aTypedArray$g(that).length;
    var middle = floor$1(length / 2);
    var index = 0;
    var value;
    while (index < middle) {
      value = that[index];
      that[index++] = that[--length];
      that[length] = value;
    }
    return that;
  });
  var aTypedArray$h = arrayBufferViewCore.aTypedArray;
  var FORCED$1 = fails(function() {
    new Int8Array(1).set({});
  });
  arrayBufferViewCore.exportProto("set", function set(arrayLike) {
    aTypedArray$h(this);
    var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError("Wrong length");
    while (index < len) this[offset + index] = src[index++];
  }, FORCED$1);
  var aTypedArray$i = arrayBufferViewCore.aTypedArray;
  var aTypedArrayConstructor$4 = arrayBufferViewCore.aTypedArrayConstructor;
  var $slice = [].slice;
  var FORCED$2 = fails(function() {
    new Int8Array(1).slice();
  });
  arrayBufferViewCore.exportProto("slice", function slice(start, end) {
    var list = $slice.call(aTypedArray$i(this), start, end);
    var C = speciesConstructor(this, this.constructor);
    var index = 0;
    var length = list.length;
    var result = new (aTypedArrayConstructor$4(C))(length);
    while (length > index) result[index] = list[index++];
    return result;
  }, FORCED$2);
  var $some = arrayIteration.some;
  var aTypedArray$j = arrayBufferViewCore.aTypedArray;
  arrayBufferViewCore.exportProto("some", function some(callbackfn) {
    return $some(aTypedArray$j(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  });
  var aTypedArray$k = arrayBufferViewCore.aTypedArray;
  var $sort = [].sort;
  arrayBufferViewCore.exportProto("sort", function sort(comparefn) {
    return $sort.call(aTypedArray$k(this), comparefn);
  });
  var aTypedArray$l = arrayBufferViewCore.aTypedArray;
  arrayBufferViewCore.exportProto("subarray", function subarray(begin, end) {
    var O = aTypedArray$l(this);
    var length = O.length;
    var beginIndex = toAbsoluteIndex(begin, length);
    return new (speciesConstructor(O, O.constructor))(O.buffer, O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex));
  });
  var Int8Array$3 = global_1.Int8Array;
  var aTypedArray$m = arrayBufferViewCore.aTypedArray;
  var $toLocaleString = [].toLocaleString;
  var $slice$1 = [].slice;
  var TO_LOCALE_STRING_BUG = !!Int8Array$3 && fails(function() {
    $toLocaleString.call(new Int8Array$3(1));
  });
  var FORCED$3 = fails(function() {
    return [ 1, 2 ].toLocaleString() != new Int8Array$3([ 1, 2 ]).toLocaleString();
  }) || !fails(function() {
    Int8Array$3.prototype.toLocaleString.call([ 1, 2 ]);
  });
  arrayBufferViewCore.exportProto("toLocaleString", function toLocaleString() {
    return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice$1.call(aTypedArray$m(this)) : aTypedArray$m(this), arguments);
  }, FORCED$3);
  var Uint8Array$2 = global_1.Uint8Array;
  var Uint8ArrayPrototype = Uint8Array$2 && Uint8Array$2.prototype;
  var arrayToString = [].toString;
  var arrayJoin = [].join;
  if (fails(function() {
    arrayToString.call({});
  })) {
    arrayToString = function toString() {
      return arrayJoin.call(this);
    };
  }
  arrayBufferViewCore.exportProto("toString", arrayToString, (Uint8ArrayPrototype || {}).toString != arrayToString);
  var sparkMd5 = createCommonjsModule(function(module, exports) {
    (function(factory) {
      {
        module.exports = factory();
      }
    })(function(undefined$1) {
      var hex_chr = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f" ];
      function md5cycle(x, k) {
        var a = x[0], b = x[1], c = x[2], d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }
      function md5blk(s) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }
        return md5blks;
      }
      function md5blk_array(a) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }
        return md5blks;
      }
      function md51(s) {
        var n = s.length, state = [ 1732584193, -271733879, -1732584194, 271733878 ], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(state, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }
      function md51_array(a) {
        var n = a.length, state = [ 1732584193, -271733879, -1732584194, 271733878 ], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(state, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }
      function rhex(n) {
        var s = "", j;
        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }
        return s;
      }
      function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }
        return x.join("");
      }
      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;
      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function() {
          function clamp(val, length) {
            val = val | 0 || 0;
            if (val < 0) {
              return Math.max(val + length, 0);
            }
            return Math.min(val, length);
          }
          ArrayBuffer.prototype.slice = function(from, to) {
            var length = this.byteLength, begin = clamp(from, length), end = length, num, target, targetArray, sourceArray;
            if (to !== undefined$1) {
              end = clamp(to, length);
            }
            if (begin > end) {
              return new ArrayBuffer(0);
            }
            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }
      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }
        return str;
      }
      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i;
        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }
        return returnUInt8Array ? arr : buff;
      }
      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }
      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }
      function hexToBinaryString(hex) {
        var bytes = [], length = hex.length, x;
        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }
        return String.fromCharCode.apply(String, bytes);
      }
      function SparkMD5() {
        this.reset();
      }
      SparkMD5.prototype.append = function(str) {
        this.appendBinary(toUtf8(str));
        return this;
      };
      SparkMD5.prototype.appendBinary = function(contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length, i;
        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }
        this._buff = this._buff.substring(i - 64);
        return this;
      };
      SparkMD5.prototype.end = function(raw) {
        var buff = this._buff, length = buff.length, i, tail = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], ret;
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
          ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
      };
      SparkMD5.prototype.reset = function() {
        this._buff = "";
        this._length = 0;
        this._hash = [ 1732584193, -271733879, -1732584194, 271733878 ];
        return this;
      };
      SparkMD5.prototype.getState = function() {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };
      SparkMD5.prototype.setState = function(state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };
      SparkMD5.prototype.destroy = function() {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };
      SparkMD5.prototype._finish = function(tail, length) {
        var i = length, tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(this._hash, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };
      SparkMD5.hash = function(str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };
      SparkMD5.hashBinary = function(content, raw) {
        var hash = md51(content), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };
      SparkMD5.ArrayBuffer = function() {
        this.reset();
      };
      SparkMD5.ArrayBuffer.prototype.append = function(arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true), length = buff.length, i;
        this._length += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }
        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };
      SparkMD5.ArrayBuffer.prototype.end = function(raw) {
        var buff = this._buff, length = buff.length, tail = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], i, ret;
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
          ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
      };
      SparkMD5.ArrayBuffer.prototype.reset = function() {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [ 1732584193, -271733879, -1732584194, 271733878 ];
        return this;
      };
      SparkMD5.ArrayBuffer.prototype.getState = function() {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };
      SparkMD5.ArrayBuffer.prototype.setState = function(state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };
      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
      SparkMD5.ArrayBuffer.hash = function(arr, raw) {
        var hash = md51_array(new Uint8Array(arr)), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };
      return SparkMD5;
    });
  });
  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
  var ResumableFileChecksum = function() {
    _createClass(ResumableFileChecksum, null, [ {
      key: "create",
      value: function create(file, callback) {
        var instance = new ResumableFileChecksum(file);
        instance.create(callback);
      }
    } ]);
    function ResumableFileChecksum(file) {
      _classCallCheck(this, ResumableFileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkIndex = 0;
      var chunkCount = Math.ceil(this.file.size / this.chunkSize);
      if (chunkCount > 5) {
        chunkCount = 5;
      }
      this.chunkCount = chunkCount;
    }
    _createClass(ResumableFileChecksum, [ {
      key: "create",
      value: function create(callback) {
        var _this = this;
        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function(event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function(event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "str2ArrayBuffer",
      value: function str2ArrayBuffer(str) {
        var buf = new ArrayBuffer(str.length * 2);
        var bufView = new Uint16Array(buf);
        for (var i = 0, strLen = str.length; i < strLen; i++) {
          bufView[i] = str.charCodeAt(i);
        }
        return buf;
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);
        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading ".concat(this.file.name));
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    } ]);
    return ResumableFileChecksum;
  }();
  var IS_CONCAT_SPREADABLE = wellKnownSymbol("isConcatSpreadable");
  var MAX_SAFE_INTEGER = 9007199254740991;
  var MAXIMUM_ALLOWED_INDEX_EXCEEDED = "Maximum allowed index exceeded";
  var IS_CONCAT_SPREADABLE_SUPPORT = !fails(function() {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });
  var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("concat");
  var isConcatSpreadable = function(O) {
    if (!isObject(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
  };
  var FORCED$4 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;
  _export({
    target: "Array",
    proto: true,
    forced: FORCED$4
  }, {
    concat: function concat(arg) {
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
  var arrayFrom = function from(arrayLike) {
    var O = toObject(arrayLike);
    var C = typeof this == "function" ? this : Array;
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iteratorMethod = getIteratorMethod(O);
    var length, result, step, iterator;
    if (mapping) mapfn = bindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
    if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
      iterator = iteratorMethod.call(O);
      result = new C();
      for (;!(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? callWithSafeIterationClosing(iterator, mapfn, [ step.value, index ], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      result = new C(length);
      for (;length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  };
  var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
    Array.from(iterable);
  });
  _export({
    target: "Array",
    stat: true,
    forced: INCORRECT_ITERATION
  }, {
    from: arrayFrom
  });
  _export({
    target: "Array",
    stat: true
  }, {
    isArray: isArray
  });
  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="'.concat(name, '"]'));
    if (element) {
      return element.getAttribute("content");
    }
  }
  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }
    var elements = root.querySelectorAll(selector);
    return toArray(elements);
  }
  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }
    return root.querySelector(selector);
  }
  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles, cancelable = eventInit.cancelable, detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};
    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }
    return event;
  }
  function toArray(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }
  var ResumableBlobRecord = function() {
    function ResumableBlobRecord(file, checksum, url) {
      var _this = this;
      _classCallCheck(this, ResumableBlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type,
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      var csrfToken = getMetaValue("csrf-token");
      if (csrfToken != undefined) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }
      this.xhr.addEventListener("load", function(event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function(event) {
        return _this.requestDidError(event);
      });
    }
    _createClass(ResumableBlobRecord, [ {
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var resumable_upload = response.resumable_upload;
          delete response.resumable_upload;
          this.attributes = response;
          this.resumableUploadData = resumable_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "'.concat(this.file.name, '". Status: ').concat(this.status));
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};
        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }
        return result;
      }
    }, {
      key: "status",
      get: function get() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get() {
        var _this$xhr = this.xhr, responseType = _this$xhr.responseType, response = _this$xhr.response;
        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    } ]);
    return ResumableBlobRecord;
  }();
  var nativePromiseConstructor = global_1.Promise;
  var location = global_1.location;
  var set$1 = global_1.setImmediate;
  var clear = global_1.clearImmediate;
  var process = global_1.process;
  var MessageChannel$1 = global_1.MessageChannel;
  var Dispatch = global_1.Dispatch;
  var counter = 0;
  var queue = {};
  var ONREADYSTATECHANGE = "onreadystatechange";
  var defer, channel, port;
  var run = function(id) {
    if (queue.hasOwnProperty(id)) {
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  };
  var runner = function(id) {
    return function() {
      run(id);
    };
  };
  var listener = function(event) {
    run(event.data);
  };
  var post = function(id) {
    global_1.postMessage(id + "", location.protocol + "//" + location.host);
  };
  if (!set$1 || !clear) {
    set$1 = function setImmediate(fn) {
      var args = [];
      var i = 1;
      while (arguments.length > i) args.push(arguments[i++]);
      queue[++counter] = function() {
        (typeof fn == "function" ? fn : Function(fn)).apply(undefined, args);
      };
      defer(counter);
      return counter;
    };
    clear = function clearImmediate(id) {
      delete queue[id];
    };
    if (classofRaw(process) == "process") {
      defer = function(id) {
        process.nextTick(runner(id));
      };
    } else if (Dispatch && Dispatch.now) {
      defer = function(id) {
        Dispatch.now(runner(id));
      };
    } else if (MessageChannel$1) {
      channel = new MessageChannel$1();
      port = channel.port2;
      channel.port1.onmessage = listener;
      defer = bindContext(port.postMessage, port, 1);
    } else if (global_1.addEventListener && typeof postMessage == "function" && !global_1.importScripts && !fails(post)) {
      defer = post;
      global_1.addEventListener("message", listener, false);
    } else if (ONREADYSTATECHANGE in documentCreateElement("script")) {
      defer = function(id) {
        html.appendChild(documentCreateElement("script"))[ONREADYSTATECHANGE] = function() {
          html.removeChild(this);
          run(id);
        };
      };
    } else {
      defer = function(id) {
        setTimeout(runner(id), 0);
      };
    }
  }
  var task = {
    set: set$1,
    clear: clear
  };
  var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
  var macrotask = task.set;
  var MutationObserver = global_1.MutationObserver || global_1.WebKitMutationObserver;
  var process$1 = global_1.process;
  var Promise$1 = global_1.Promise;
  var IS_NODE = classofRaw(process$1) == "process";
  var queueMicrotaskDescriptor = getOwnPropertyDescriptor$2(global_1, "queueMicrotask");
  var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
  var flush, head, last, notify, toggle, node, promise, then;
  if (!queueMicrotask) {
    flush = function() {
      var parent, fn;
      if (IS_NODE && (parent = process$1.domain)) parent.exit();
      while (head) {
        fn = head.fn;
        head = head.next;
        try {
          fn();
        } catch (error) {
          if (head) notify(); else last = undefined;
          throw error;
        }
      }
      last = undefined;
      if (parent) parent.enter();
    };
    if (IS_NODE) {
      notify = function() {
        process$1.nextTick(flush);
      };
    } else if (MutationObserver && !/(iphone|ipod|ipad).*applewebkit/i.test(userAgent)) {
      toggle = true;
      node = document.createTextNode("");
      new MutationObserver(flush).observe(node, {
        characterData: true
      });
      notify = function() {
        node.data = toggle = !toggle;
      };
    } else if (Promise$1 && Promise$1.resolve) {
      promise = Promise$1.resolve(undefined);
      then = promise.then;
      notify = function() {
        then.call(promise, flush);
      };
    } else {
      notify = function() {
        macrotask.call(global_1, flush);
      };
    }
  }
  var microtask = queueMicrotask || function(fn) {
    var task = {
      fn: fn,
      next: undefined
    };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    }
    last = task;
  };
  var PromiseCapability = function(C) {
    var resolve, reject;
    this.promise = new C(function($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw TypeError("Bad Promise constructor");
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = aFunction$1(resolve);
    this.reject = aFunction$1(reject);
  };
  var f$5 = function(C) {
    return new PromiseCapability(C);
  };
  var newPromiseCapability = {
    f: f$5
  };
  var promiseResolve = function(C, x) {
    anObject(C);
    if (isObject(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };
  var hostReportErrors = function(a, b) {
    var console = global_1.console;
    if (console && console.error) {
      arguments.length === 1 ? console.error(a) : console.error(a, b);
    }
  };
  var perform = function(exec) {
    try {
      return {
        error: false,
        value: exec()
      };
    } catch (error) {
      return {
        error: true,
        value: error
      };
    }
  };
  var task$1 = task.set;
  var SPECIES$5 = wellKnownSymbol("species");
  var PROMISE = "Promise";
  var getInternalState$2 = internalState.get;
  var setInternalState$3 = internalState.set;
  var getInternalPromiseState = internalState.getterFor(PROMISE);
  var PromiseConstructor = nativePromiseConstructor;
  var TypeError$1 = global_1.TypeError;
  var document$2 = global_1.document;
  var process$2 = global_1.process;
  var $fetch = global_1.fetch;
  var versions = process$2 && process$2.versions;
  var v8 = versions && versions.v8 || "";
  var newPromiseCapability$1 = newPromiseCapability.f;
  var newGenericPromiseCapability = newPromiseCapability$1;
  var IS_NODE$1 = classofRaw(process$2) == "process";
  var DISPATCH_EVENT = !!(document$2 && document$2.createEvent && global_1.dispatchEvent);
  var UNHANDLED_REJECTION = "unhandledrejection";
  var REJECTION_HANDLED = "rejectionhandled";
  var PENDING = 0;
  var FULFILLED = 1;
  var REJECTED = 2;
  var HANDLED = 1;
  var UNHANDLED = 2;
  var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
  var FORCED$5 = isForced_1(PROMISE, function() {
    var promise = PromiseConstructor.resolve(1);
    var empty = function() {};
    var FakePromise = (promise.constructor = {})[SPECIES$5] = function(exec) {
      exec(empty, empty);
    };
    return !((IS_NODE$1 || typeof PromiseRejectionEvent == "function") && (!isPure || promise["finally"]) && promise.then(empty) instanceof FakePromise && v8.indexOf("6.6") !== 0 && userAgent.indexOf("Chrome/66") === -1);
  });
  var INCORRECT_ITERATION$1 = FORCED$5 || !checkCorrectnessOfIteration(function(iterable) {
    PromiseConstructor.all(iterable)["catch"](function() {});
  });
  var isThenable = function(it) {
    var then;
    return isObject(it) && typeof (then = it.then) == "function" ? then : false;
  };
  var notify$1 = function(promise, state, isReject) {
    if (state.notified) return;
    state.notified = true;
    var chain = state.reactions;
    microtask(function() {
      var value = state.value;
      var ok = state.state == FULFILLED;
      var index = 0;
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
              if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
              state.rejection = HANDLED;
            }
            if (handler === true) result = value; else {
              if (domain) domain.enter();
              result = handler(value);
              if (domain) {
                domain.exit();
                exited = true;
              }
            }
            if (result === reaction.promise) {
              reject(TypeError$1("Promise-chain cycle"));
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
      if (isReject && !state.rejection) onUnhandled(promise, state);
    });
  };
  var dispatchEvent$1 = function(name, promise, reason) {
    var event, handler;
    if (DISPATCH_EVENT) {
      event = document$2.createEvent("Event");
      event.promise = promise;
      event.reason = reason;
      event.initEvent(name, false, true);
      global_1.dispatchEvent(event);
    } else event = {
      promise: promise,
      reason: reason
    };
    if (handler = global_1["on" + name]) handler(event); else if (name === UNHANDLED_REJECTION) hostReportErrors("Unhandled promise rejection", reason);
  };
  var onUnhandled = function(promise, state) {
    task$1.call(global_1, function() {
      var value = state.value;
      var IS_UNHANDLED = isUnhandled(state);
      var result;
      if (IS_UNHANDLED) {
        result = perform(function() {
          if (IS_NODE$1) {
            process$2.emit("unhandledRejection", value, promise);
          } else dispatchEvent$1(UNHANDLED_REJECTION, promise, value);
        });
        state.rejection = IS_NODE$1 || isUnhandled(state) ? UNHANDLED : HANDLED;
        if (result.error) throw result.value;
      }
    });
  };
  var isUnhandled = function(state) {
    return state.rejection !== HANDLED && !state.parent;
  };
  var onHandleUnhandled = function(promise, state) {
    task$1.call(global_1, function() {
      if (IS_NODE$1) {
        process$2.emit("rejectionHandled", promise);
      } else dispatchEvent$1(REJECTION_HANDLED, promise, state.value);
    });
  };
  var bind = function(fn, promise, state, unwrap) {
    return function(value) {
      fn(promise, state, value, unwrap);
    };
  };
  var internalReject = function(promise, state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value;
    state.state = REJECTED;
    notify$1(promise, state, true);
  };
  var internalResolve = function(promise, state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    try {
      if (promise === value) throw TypeError$1("Promise can't be resolved itself");
      var then = isThenable(value);
      if (then) {
        microtask(function() {
          var wrapper = {
            done: false
          };
          try {
            then.call(value, bind(internalResolve, promise, wrapper, state), bind(internalReject, promise, wrapper, state));
          } catch (error) {
            internalReject(promise, wrapper, error, state);
          }
        });
      } else {
        state.value = value;
        state.state = FULFILLED;
        notify$1(promise, state, false);
      }
    } catch (error) {
      internalReject(promise, {
        done: false
      }, error, state);
    }
  };
  if (FORCED$5) {
    PromiseConstructor = function Promise(executor) {
      anInstance(this, PromiseConstructor, PROMISE);
      aFunction$1(executor);
      Internal.call(this);
      var state = getInternalState$2(this);
      try {
        executor(bind(internalResolve, this, state), bind(internalReject, this, state));
      } catch (error) {
        internalReject(this, state, error);
      }
    };
    Internal = function Promise(executor) {
      setInternalState$3(this, {
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
      then: function then(onFulfilled, onRejected) {
        var state = getInternalPromiseState(this);
        var reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
        reaction.ok = typeof onFulfilled == "function" ? onFulfilled : true;
        reaction.fail = typeof onRejected == "function" && onRejected;
        reaction.domain = IS_NODE$1 ? process$2.domain : undefined;
        state.parent = true;
        state.reactions.push(reaction);
        if (state.state != PENDING) notify$1(this, state, false);
        return reaction.promise;
      },
      catch: function(onRejected) {
        return this.then(undefined, onRejected);
      }
    });
    OwnPromiseCapability = function() {
      var promise = new Internal();
      var state = getInternalState$2(promise);
      this.promise = promise;
      this.resolve = bind(internalResolve, promise, state);
      this.reject = bind(internalReject, promise, state);
    };
    newPromiseCapability.f = newPromiseCapability$1 = function(C) {
      return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };
    if (typeof nativePromiseConstructor == "function") {
      nativeThen = nativePromiseConstructor.prototype.then;
      redefine(nativePromiseConstructor.prototype, "then", function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function(resolve, reject) {
          nativeThen.call(that, resolve, reject);
        }).then(onFulfilled, onRejected);
      });
      if (typeof $fetch == "function") _export({
        global: true,
        enumerable: true,
        forced: true
      }, {
        fetch: function fetch(input) {
          return promiseResolve(PromiseConstructor, $fetch.apply(global_1, arguments));
        }
      });
    }
  }
  _export({
    global: true,
    wrap: true,
    forced: FORCED$5
  }, {
    Promise: PromiseConstructor
  });
  setToStringTag(PromiseConstructor, PROMISE, false);
  setSpecies(PROMISE);
  PromiseWrapper = path[PROMISE];
  _export({
    target: PROMISE,
    stat: true,
    forced: FORCED$5
  }, {
    reject: function reject(r) {
      var capability = newPromiseCapability$1(this);
      capability.reject.call(undefined, r);
      return capability.promise;
    }
  });
  _export({
    target: PROMISE,
    stat: true,
    forced: FORCED$5
  }, {
    resolve: function resolve(x) {
      return promiseResolve(this, x);
    }
  });
  _export({
    target: PROMISE,
    stat: true,
    forced: INCORRECT_ITERATION$1
  }, {
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapability$1(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform(function() {
        var $promiseResolve = aFunction$1(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        iterate_1(iterable, function(promise) {
          var index = counter++;
          var alreadyCalled = false;
          values.push(undefined);
          remaining++;
          $promiseResolve.call(C, promise).then(function(value) {
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
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapability$1(C);
      var reject = capability.reject;
      var result = perform(function() {
        var $promiseResolve = aFunction$1(C.resolve);
        iterate_1(iterable, function(promise) {
          $promiseResolve.call(C, promise).then(capability.resolve, reject);
        });
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });
  var regexpFlags = function() {
    var that = anObject(this);
    var result = "";
    if (that.global) result += "g";
    if (that.ignoreCase) result += "i";
    if (that.multiline) result += "m";
    if (that.dotAll) result += "s";
    if (that.unicode) result += "u";
    if (that.sticky) result += "y";
    return result;
  };
  var nativeExec = RegExp.prototype.exec;
  var nativeReplace = String.prototype.replace;
  var patchedExec = nativeExec;
  var UPDATES_LAST_INDEX_WRONG = function() {
    var re1 = /a/;
    var re2 = /b*/g;
    nativeExec.call(re1, "a");
    nativeExec.call(re2, "a");
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  }();
  var NPCG_INCLUDED = /()??/.exec("")[1] !== undefined;
  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;
  if (PATCH) {
    patchedExec = function exec(str) {
      var re = this;
      var lastIndex, reCopy, match, i;
      if (NPCG_INCLUDED) {
        reCopy = new RegExp("^" + re.source + "$(?!\\s)", regexpFlags.call(re));
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
      match = nativeExec.call(re, str);
      if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        nativeReplace.call(match[0], reCopy, function() {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }
      return match;
    };
  }
  var regexpExec = patchedExec;
  _export({
    target: "RegExp",
    proto: true,
    forced: /./.exec !== regexpExec
  }, {
    exec: regexpExec
  });
  var SPECIES$6 = wellKnownSymbol("species");
  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
    var re = /./;
    re.exec = function() {
      var result = [];
      result.groups = {
        a: "7"
      };
      return result;
    };
    return "".replace(re, "$<a>") !== "7";
  });
  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function() {
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function() {
      return originalExec.apply(this, arguments);
    };
    var result = "ab".split(re);
    return result.length !== 2 || result[0] !== "a" || result[1] !== "b";
  });
  var fixRegexpWellKnownSymbolLogic = function(KEY, length, exec, sham) {
    var SYMBOL = wellKnownSymbol(KEY);
    var DELEGATES_TO_SYMBOL = !fails(function() {
      var O = {};
      O[SYMBOL] = function() {
        return 7;
      };
      return ""[KEY](O) != 7;
    });
    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function() {
      var execCalled = false;
      var re = /a/;
      re.exec = function() {
        execCalled = true;
        return null;
      };
      if (KEY === "split") {
        re.constructor = {};
        re.constructor[SPECIES$6] = function() {
          return re;
        };
      }
      re[SYMBOL]("");
      return !execCalled;
    });
    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === "replace" && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === "split" && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
      var nativeRegExpMethod = /./[SYMBOL];
      var methods = exec(SYMBOL, ""[KEY], function(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            return {
              done: true,
              value: nativeRegExpMethod.call(regexp, str, arg2)
            };
          }
          return {
            done: true,
            value: nativeMethod.call(str, regexp, arg2)
          };
        }
        return {
          done: false
        };
      });
      var stringMethod = methods[0];
      var regexMethod = methods[1];
      redefine(String.prototype, KEY, stringMethod);
      redefine(RegExp.prototype, SYMBOL, length == 2 ? function(string, arg) {
        return regexMethod.call(string, this, arg);
      } : function(string) {
        return regexMethod.call(string, this);
      });
      if (sham) hide(RegExp.prototype[SYMBOL], "sham", true);
    }
  };
  var charAt$1 = stringMultibyte.charAt;
  var advanceStringIndex = function(S, index, unicode) {
    return index + (unicode ? charAt$1(S, index).length : 1);
  };
  var regexpExecAbstract = function(R, S) {
    var exec = R.exec;
    if (typeof exec === "function") {
      var result = exec.call(R, S);
      if (typeof result !== "object") {
        throw TypeError("RegExp exec method returned something other than an Object or null");
      }
      return result;
    }
    if (classofRaw(R) !== "RegExp") {
      throw TypeError("RegExp#exec called on incompatible receiver");
    }
    return regexpExec.call(R, S);
  };
  fixRegexpWellKnownSymbolLogic("match", 1, function(MATCH, nativeMatch, maybeCallNative) {
    return [ function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    }, function(regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regexpExecAbstract(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regexpExecAbstract(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === "") rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    } ];
  });
  var runtime_1 = createCommonjsModule(function(module) {
    var runtime = function(exports) {
      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined$1;
      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
      function wrap(innerFn, outerFn, self, tryLocsList) {
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
      }
      exports.wrap = wrap;
      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }
      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed";
      var ContinueSentinel = {};
      function Generator() {}
      function GeneratorFunction() {}
      function GeneratorFunctionPrototype() {}
      var IteratorPrototype = {};
      IteratorPrototype[iteratorSymbol] = function() {
        return this;
      };
      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        IteratorPrototype = NativeIteratorPrototype;
      }
      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
      GeneratorFunctionPrototype.constructor = GeneratorFunction;
      GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
      function defineIteratorMethods(prototype) {
        [ "next", "throw", "return" ].forEach(function(method) {
          prototype[method] = function(arg) {
            return this._invoke(method, arg);
          };
        });
      }
      exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };
      exports.mark = function(genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          if (!(toStringTagSymbol in genFun)) {
            genFun[toStringTagSymbol] = "GeneratorFunction";
          }
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
      };
      exports.awrap = function(arg) {
        return {
          __await: arg
        };
      };
      function AsyncIterator(generator) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);
          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;
            if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
              return Promise.resolve(value.__await).then(function(value) {
                invoke("next", value, resolve, reject);
              }, function(err) {
                invoke("throw", err, resolve, reject);
              });
            }
            return Promise.resolve(value).then(function(unwrapped) {
              result.value = unwrapped;
              resolve(result);
            }, function(error) {
              return invoke("throw", error, resolve, reject);
            });
          }
        }
        var previousPromise;
        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new Promise(function(resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        this._invoke = enqueue;
      }
      defineIteratorMethods(AsyncIterator.prototype);
      AsyncIterator.prototype[asyncIteratorSymbol] = function() {
        return this;
      };
      exports.AsyncIterator = AsyncIterator;
      exports.async = function(innerFn, outerFn, self, tryLocsList) {
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
        return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
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
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;
              if (record.arg === ContinueSentinel) {
                continue;
              }
              return {
                value: record.arg,
                done: context.done
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted;
              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      }
      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined$1) {
          context.delegate = null;
          if (context.method === "throw") {
            if (delegate.iterator["return"]) {
              context.method = "return";
              context.arg = undefined$1;
              maybeInvokeDelegate(delegate, context);
              if (context.method === "throw") {
                return ContinueSentinel;
              }
            }
            context.method = "throw";
            context.arg = new TypeError("The iterator does not provide a 'throw' method");
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
        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }
        if (info.done) {
          context[delegate.resultName] = info.value;
          context.next = delegate.nextLoc;
          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined$1;
          }
        } else {
          return info;
        }
        context.delegate = null;
        return ContinueSentinel;
      }
      defineIteratorMethods(Gp);
      Gp[toStringTagSymbol] = "Generator";
      Gp[iteratorSymbol] = function() {
        return this;
      };
      Gp.toString = function() {
        return "[object Generator]";
      };
      function pushTryEntry(locs) {
        var entry = {
          tryLoc: locs[0]
        };
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
        this.tryEntries = [ {
          tryLoc: "root"
        } ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }
      exports.keys = function(object) {
        var keys = [];
        for (var key in object) {
          keys.push(key);
        }
        keys.reverse();
        return function next() {
          while (keys.length) {
            var key = keys.pop();
            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          }
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
              next.value = undefined$1;
              next.done = true;
              return next;
            };
            return next.next = next;
          }
        }
        return {
          next: doneResult
        };
      }
      exports.values = values;
      function doneResult() {
        return {
          value: undefined$1,
          done: true
        };
      }
      Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
          this.prev = 0;
          this.next = 0;
          this.sent = this._sent = undefined$1;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined$1;
          this.tryEntries.forEach(resetTryEntry);
          if (!skipTempReset) {
            for (var name in this) {
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined$1;
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
              context.method = "next";
              context.arg = undefined$1;
            }
            return !!caught;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;
            if (entry.tryLoc === "root") {
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
            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }
          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
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
          if (record.type === "break" || record.type === "continue") {
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
        catch: function(tryLoc) {
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
          throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };
          if (this.method === "next") {
            this.arg = undefined$1;
          }
          return ContinueSentinel;
        }
      };
      return exports;
    }(module.exports);
    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      Function("r", "regeneratorRuntime = r")(runtime);
    }
  });
  var bind$1 = function bind(fn, thisArg) {
    return function wrap() {
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
      return fn.apply(thisArg, args);
    };
  };
  var toString$1 = Object.prototype.toString;
  function isArray$1(val) {
    return toString$1.call(val) === "[object Array]";
  }
  function isArrayBuffer(val) {
    return toString$1.call(val) === "[object ArrayBuffer]";
  }
  function isFormData(val) {
    return typeof FormData !== "undefined" && val instanceof FormData;
  }
  function isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && val.buffer instanceof ArrayBuffer;
    }
    return result;
  }
  function isString(val) {
    return typeof val === "string";
  }
  function isNumber(val) {
    return typeof val === "number";
  }
  function isUndefined(val) {
    return typeof val === "undefined";
  }
  function isObject$1(val) {
    return val !== null && typeof val === "object";
  }
  function isDate(val) {
    return toString$1.call(val) === "[object Date]";
  }
  function isFile(val) {
    return toString$1.call(val) === "[object File]";
  }
  function isBlob(val) {
    return toString$1.call(val) === "[object Blob]";
  }
  function isFunction(val) {
    return toString$1.call(val) === "[object Function]";
  }
  function isStream(val) {
    return isObject$1(val) && isFunction(val.pipe);
  }
  function isURLSearchParams(val) {
    return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
  }
  function trim(str) {
    return str.replace(/^\s*/, "").replace(/\s*$/, "");
  }
  function isStandardBrowserEnv() {
    return typeof window !== "undefined" && typeof document !== "undefined" && typeof document.createElement === "function";
  }
  function forEach(obj, fn) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    if (typeof obj !== "object" && !isArray$1(obj)) {
      obj = [ obj ];
    }
    if (isArray$1(obj)) {
      for (var i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  function merge() {
    var result = {};
    function assignValue(val, key) {
      if (typeof result[key] === "object" && typeof val === "object") {
        result[key] = merge(result[key], val);
      } else {
        result[key] = val;
      }
    }
    for (var i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }
    return result;
  }
  function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
      if (thisArg && typeof val === "function") {
        a[key] = bind$1(val, thisArg);
      } else {
        a[key] = val;
      }
    });
    return a;
  }
  var utils = {
    isArray: isArray$1,
    isArrayBuffer: isArrayBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject$1,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    extend: extend,
    trim: trim
  };
  var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
    utils.forEach(headers, function processHeader(value, name) {
      if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
        headers[normalizedName] = value;
        delete headers[name];
      }
    });
  };
  var PROTECTION_PREFIX = /^\)\]\}',?\n/;
  var DEFAULT_CONTENT_TYPE = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
      headers["Content-Type"] = value;
    }
  }
  var defaults = {
    transformRequest: [ function transformRequest(data, headers) {
      normalizeHeaderName(headers, "Content-Type");
      if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
        return data;
      }
      if (utils.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils.isURLSearchParams(data)) {
        setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
        return data.toString();
      }
      if (utils.isObject(data)) {
        setContentTypeIfUnset(headers, "application/json;charset=utf-8");
        return JSON.stringify(data);
      }
      return data;
    } ],
    transformResponse: [ function transformResponse(data) {
      if (typeof data === "string") {
        data = data.replace(PROTECTION_PREFIX, "");
        try {
          data = JSON.parse(data);
        } catch (e) {}
      }
      return data;
    } ],
    headers: {
      common: {
        Accept: "application/json, text/plain, */*"
      },
      patch: utils.merge(DEFAULT_CONTENT_TYPE),
      post: utils.merge(DEFAULT_CONTENT_TYPE),
      put: utils.merge(DEFAULT_CONTENT_TYPE)
    },
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    }
  };
  function InterceptorManager() {
    this.handlers = [];
  }
  InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled: fulfilled,
      rejected: rejected
    });
    return this.handlers.length - 1;
  };
  InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  InterceptorManager.prototype.forEach = function forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  };
  var InterceptorManager_1 = InterceptorManager;
  var global$1 = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
  function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
  }
  function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
  }
  var cachedSetTimeout = defaultSetTimout;
  var cachedClearTimeout = defaultClearTimeout;
  if (typeof global$1.setTimeout === "function") {
    cachedSetTimeout = setTimeout;
  }
  if (typeof global$1.clearTimeout === "function") {
    cachedClearTimeout = clearTimeout;
  }
  function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
      return setTimeout(fun, 0);
    }
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
      cachedSetTimeout = setTimeout;
      return setTimeout(fun, 0);
    }
    try {
      return cachedSetTimeout(fun, 0);
    } catch (e) {
      try {
        return cachedSetTimeout.call(null, fun, 0);
      } catch (e) {
        return cachedSetTimeout.call(this, fun, 0);
      }
    }
  }
  function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
      return clearTimeout(marker);
    }
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
      cachedClearTimeout = clearTimeout;
      return clearTimeout(marker);
    }
    try {
      return cachedClearTimeout(marker);
    } catch (e) {
      try {
        return cachedClearTimeout.call(null, marker);
      } catch (e) {
        return cachedClearTimeout.call(this, marker);
      }
    }
  }
  var queue$1 = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }
    draining = false;
    if (currentQueue.length) {
      queue$1 = currentQueue.concat(queue$1);
    } else {
      queueIndex = -1;
    }
    if (queue$1.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue$1.length;
    while (len) {
      currentQueue = queue$1;
      queue$1 = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue$1.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
  }
  function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue$1.push(new Item(fun, args));
    if (queue$1.length === 1 && !draining) {
      runTimeout(drainQueue);
    }
  }
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  var title = "browser";
  var platform = "browser";
  var browser = true;
  var env = {};
  var argv = [];
  var version = "";
  var versions$1 = {};
  var release = {};
  var config = {};
  function noop() {}
  var on = noop;
  var addListener = noop;
  var once = noop;
  var off = noop;
  var removeListener = noop;
  var removeAllListeners = noop;
  var emit = noop;
  function binding(name) {
    throw new Error("process.binding is not supported");
  }
  function cwd() {
    return "/";
  }
  function chdir(dir) {
    throw new Error("process.chdir is not supported");
  }
  function umask() {
    return 0;
  }
  var performance = global$1.performance || {};
  var performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function() {
    return new Date().getTime();
  };
  function hrtime(previousTimestamp) {
    var clocktime = performanceNow.call(performance) * .001;
    var seconds = Math.floor(clocktime);
    var nanoseconds = Math.floor(clocktime % 1 * 1e9);
    if (previousTimestamp) {
      seconds = seconds - previousTimestamp[0];
      nanoseconds = nanoseconds - previousTimestamp[1];
      if (nanoseconds < 0) {
        seconds--;
        nanoseconds += 1e9;
      }
    }
    return [ seconds, nanoseconds ];
  }
  var startTime = new Date();
  function uptime() {
    var currentTime = new Date();
    var dif = currentTime - startTime;
    return dif / 1e3;
  }
  var process$3 = {
    nextTick: nextTick,
    title: title,
    browser: browser,
    env: env,
    argv: argv,
    version: version,
    versions: versions$1,
    on: on,
    addListener: addListener,
    once: once,
    off: off,
    removeListener: removeListener,
    removeAllListeners: removeAllListeners,
    emit: emit,
    binding: binding,
    cwd: cwd,
    chdir: chdir,
    umask: umask,
    hrtime: hrtime,
    platform: platform,
    release: release,
    config: config,
    uptime: uptime
  };
  var transformData = function transformData(data, headers, fns) {
    utils.forEach(fns, function transform(fn) {
      data = fn(data, headers);
    });
    return data;
  };
  var enhanceError = function enhanceError(error, config, code, response) {
    error.config = config;
    if (code) {
      error.code = code;
    }
    error.response = response;
    return error;
  };
  var createError = function createError(message, config, code, response) {
    var error = new Error(message);
    return enhanceError(error, config, code, response);
  };
  var settle = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(createError("Request failed with status code " + response.status, response.config, null, response));
    }
  };
  function encode(val) {
    return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  var buildURL = function buildURL(url, params, paramsSerializer) {
    if (!params) {
      return url;
    }
    var serializedParams;
    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (utils.isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      var parts = [];
      utils.forEach(params, function serialize(val, key) {
        if (val === null || typeof val === "undefined") {
          return;
        }
        if (utils.isArray(val)) {
          key = key + "[]";
        }
        if (!utils.isArray(val)) {
          val = [ val ];
        }
        utils.forEach(val, function parseValue(v) {
          if (utils.isDate(v)) {
            v = v.toISOString();
          } else if (utils.isObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(encode(key) + "=" + encode(v));
        });
      });
      serializedParams = parts.join("&");
    }
    if (serializedParams) {
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  };
  var parseHeaders = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
    if (!headers) {
      return parsed;
    }
    utils.forEach(headers.split("\n"), function parser(line) {
      i = line.indexOf(":");
      key = utils.trim(line.substr(0, i)).toLowerCase();
      val = utils.trim(line.substr(i + 1));
      if (key) {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    });
    return parsed;
  };
  var isURLSameOrigin = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement("a");
    var originURL;
    function resolveURL(url) {
      var href = url;
      if (msie) {
        urlParsingNode.setAttribute("href", href);
        href = urlParsingNode.href;
      }
      urlParsingNode.setAttribute("href", href);
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
      };
    }
    originURL = resolveURL(window.location.href);
    return function isURLSameOrigin(requestURL) {
      var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
      return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
  }() : function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  }();
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  function E() {
    this.message = "String contains an invalid character";
  }
  E.prototype = new Error();
  E.prototype.code = 5;
  E.prototype.name = "InvalidCharacterError";
  function btoa$1(input) {
    var str = String(input);
    var output = "";
    for (var block, charCode, idx = 0, map = chars; str.charAt(idx | 0) || (map = "=", 
    idx % 1); output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
      charCode = str.charCodeAt(idx += 3 / 4);
      if (charCode > 255) {
        throw new E();
      }
      block = block << 8 | charCode;
    }
    return output;
  }
  var btoa_1 = btoa$1;
  var cookies = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + "=" + encodeURIComponent(value));
        if (utils.isNumber(expires)) {
          cookie.push("expires=" + new Date(expires).toGMTString());
        }
        if (utils.isString(path)) {
          cookie.push("path=" + path);
        }
        if (utils.isString(domain)) {
          cookie.push("domain=" + domain);
        }
        if (secure === true) {
          cookie.push("secure");
        }
        document.cookie = cookie.join("; ");
      },
      read: function read(name) {
        var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
        return match ? decodeURIComponent(match[3]) : null;
      },
      remove: function remove(name) {
        this.write(name, "", Date.now() - 864e5);
      }
    };
  }() : function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() {
        return null;
      },
      remove: function remove() {}
    };
  }();
  var btoa$2 = typeof window !== "undefined" && window.btoa || btoa_1;
  var xhr = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      var requestData = config.data;
      var requestHeaders = config.headers;
      if (utils.isFormData(requestData)) {
        delete requestHeaders["Content-Type"];
      }
      var request = new XMLHttpRequest();
      var loadEvent = "onreadystatechange";
      var xDomain = false;
      if (process$3.env.NODE_ENV !== "test" && typeof window !== "undefined" && window.XDomainRequest && !("withCredentials" in request) && !isURLSameOrigin(config.url)) {
        request = new window.XDomainRequest();
        loadEvent = "onload";
        xDomain = true;
        request.onprogress = function handleProgress() {};
        request.ontimeout = function handleTimeout() {};
      }
      if (config.auth) {
        var username = config.auth.username || "";
        var password = config.auth.password || "";
        requestHeaders.Authorization = "Basic " + btoa$2(username + ":" + password);
      }
      request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
      request.timeout = config.timeout;
      request[loadEvent] = function handleLoad() {
        if (!request || request.readyState !== 4 && !xDomain) {
          return;
        }
        if (request.status === 0) {
          return;
        }
        var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
        var responseData = !config.responseType || config.responseType === "text" ? request.responseText : request.response;
        var response = {
          data: responseData,
          status: request.status === 1223 ? 204 : request.status,
          statusText: request.status === 1223 ? "No Content" : request.statusText,
          headers: responseHeaders,
          config: config,
          request: request
        };
        settle(resolve, reject, response);
        request = null;
      };
      request.onerror = function handleError() {
        reject(createError("Network Error", config));
        request = null;
      };
      request.ontimeout = function handleTimeout() {
        reject(createError("timeout of " + config.timeout + "ms exceeded", config, "ECONNABORTED"));
        request = null;
      };
      if (utils.isStandardBrowserEnv()) {
        var cookies$1 = cookies;
        var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies$1.read(config.xsrfCookieName) : undefined;
        if (xsrfValue) {
          requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
      }
      if ("setRequestHeader" in request) {
        utils.forEach(requestHeaders, function setRequestHeader(val, key) {
          if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
            delete requestHeaders[key];
          } else {
            request.setRequestHeader(key, val);
          }
        });
      }
      if (config.withCredentials) {
        request.withCredentials = true;
      }
      if (config.responseType) {
        try {
          request.responseType = config.responseType;
        } catch (e) {
          if (request.responseType !== "json") {
            throw e;
          }
        }
      }
      if (typeof config.onDownloadProgress === "function") {
        request.addEventListener("progress", config.onDownloadProgress);
      }
      if (typeof config.onUploadProgress === "function" && request.upload) {
        request.upload.addEventListener("progress", config.onUploadProgress);
      }
      if (requestData === undefined) {
        requestData = null;
      }
      request.send(requestData);
    });
  };
  var dispatchRequest = function dispatchRequest(config) {
    config.headers = config.headers || {};
    config.data = transformData(config.data, config.headers, config.transformRequest);
    config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});
    utils.forEach([ "delete", "get", "head", "post", "put", "patch", "common" ], function cleanHeaderConfig(method) {
      delete config.headers[method];
    });
    var adapter;
    if (typeof config.adapter === "function") {
      adapter = config.adapter;
    } else if (typeof XMLHttpRequest !== "undefined") {
      adapter = xhr;
    } else if (typeof process$3 !== "undefined") {
      adapter = xhr;
    }
    return Promise.resolve(config).then(adapter).then(function onFulfilled(response) {
      response.data = transformData(response.data, response.headers, config.transformResponse);
      return response;
    }, function onRejected(error) {
      if (error && error.response) {
        error.response.data = transformData(error.response.data, error.response.headers, config.transformResponse);
      }
      return Promise.reject(error);
    });
  };
  var isAbsoluteURL = function isAbsoluteURL(url) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
  };
  var combineURLs = function combineURLs(baseURL, relativeURL) {
    return baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "");
  };
  function Axios(defaultConfig) {
    this.defaults = utils.merge(defaults, defaultConfig);
    this.interceptors = {
      request: new InterceptorManager_1(),
      response: new InterceptorManager_1()
    };
  }
  Axios.prototype.request = function request(config) {
    if (typeof config === "string") {
      config = utils.merge({
        url: arguments[0]
      }, arguments[1]);
    }
    config = utils.merge(defaults, this.defaults, {
      method: "get"
    }, config);
    if (config.baseURL && !isAbsoluteURL(config.url)) {
      config.url = combineURLs(config.baseURL, config.url);
    }
    var chain = [ dispatchRequest, undefined ];
    var promise = Promise.resolve(config);
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  };
  utils.forEach([ "delete", "get", "head" ], function forEachMethodNoData(method) {
    Axios.prototype[method] = function(url, config) {
      return this.request(utils.merge(config || {}, {
        method: method,
        url: url
      }));
    };
  });
  utils.forEach([ "post", "put", "patch" ], function forEachMethodWithData(method) {
    Axios.prototype[method] = function(url, data, config) {
      return this.request(utils.merge(config || {}, {
        method: method,
        url: url,
        data: data
      }));
    };
  });
  var Axios_1 = Axios;
  var spread = function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  };
  function createInstance(defaultConfig) {
    var context = new Axios_1(defaultConfig);
    var instance = bind$1(Axios_1.prototype.request, context);
    utils.extend(instance, Axios_1.prototype, context);
    utils.extend(instance, context);
    return instance;
  }
  var axios = createInstance();
  axios.Axios = Axios_1;
  axios.create = function create(defaultConfig) {
    return createInstance(defaultConfig);
  };
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = spread;
  var axios_1 = axios;
  var default_1 = axios;
  axios_1.default = default_1;
  var axios$1 = axios_1;
  function RetryOperation(timeouts, options) {
    if (typeof options === "boolean") {
      options = {
        forever: options
      };
    }
    this._originalTimeouts = JSON.parse(JSON.stringify(timeouts));
    this._timeouts = timeouts;
    this._options = options || {};
    this._maxRetryTime = options && options.maxRetryTime || Infinity;
    this._fn = null;
    this._errors = [];
    this._attempts = 1;
    this._operationTimeout = null;
    this._operationTimeoutCb = null;
    this._timeout = null;
    this._operationStart = null;
    if (this._options.forever) {
      this._cachedTimeouts = this._timeouts.slice(0);
    }
  }
  var retry_operation = RetryOperation;
  RetryOperation.prototype.reset = function() {
    this._attempts = 1;
    this._timeouts = this._originalTimeouts;
  };
  RetryOperation.prototype.stop = function() {
    if (this._timeout) {
      clearTimeout(this._timeout);
    }
    this._timeouts = [];
    this._cachedTimeouts = null;
  };
  RetryOperation.prototype.retry = function(err) {
    if (this._timeout) {
      clearTimeout(this._timeout);
    }
    if (!err) {
      return false;
    }
    var currentTime = new Date().getTime();
    if (err && currentTime - this._operationStart >= this._maxRetryTime) {
      this._errors.unshift(new Error("RetryOperation timeout occurred"));
      return false;
    }
    this._errors.push(err);
    var timeout = this._timeouts.shift();
    if (timeout === undefined) {
      if (this._cachedTimeouts) {
        this._errors.splice(this._errors.length - 1, this._errors.length);
        this._timeouts = this._cachedTimeouts.slice(0);
        timeout = this._timeouts.shift();
      } else {
        return false;
      }
    }
    var self = this;
    var timer = setTimeout(function() {
      self._attempts++;
      if (self._operationTimeoutCb) {
        self._timeout = setTimeout(function() {
          self._operationTimeoutCb(self._attempts);
        }, self._operationTimeout);
        if (self._options.unref) {
          self._timeout.unref();
        }
      }
      self._fn(self._attempts);
    }, timeout);
    if (this._options.unref) {
      timer.unref();
    }
    return true;
  };
  RetryOperation.prototype.attempt = function(fn, timeoutOps) {
    this._fn = fn;
    if (timeoutOps) {
      if (timeoutOps.timeout) {
        this._operationTimeout = timeoutOps.timeout;
      }
      if (timeoutOps.cb) {
        this._operationTimeoutCb = timeoutOps.cb;
      }
    }
    var self = this;
    if (this._operationTimeoutCb) {
      this._timeout = setTimeout(function() {
        self._operationTimeoutCb();
      }, self._operationTimeout);
    }
    this._operationStart = new Date().getTime();
    this._fn(this._attempts);
  };
  RetryOperation.prototype.try = function(fn) {
    console.log("Using RetryOperation.try() is deprecated");
    this.attempt(fn);
  };
  RetryOperation.prototype.start = function(fn) {
    console.log("Using RetryOperation.start() is deprecated");
    this.attempt(fn);
  };
  RetryOperation.prototype.start = RetryOperation.prototype.try;
  RetryOperation.prototype.errors = function() {
    return this._errors;
  };
  RetryOperation.prototype.attempts = function() {
    return this._attempts;
  };
  RetryOperation.prototype.mainError = function() {
    if (this._errors.length === 0) {
      return null;
    }
    var counts = {};
    var mainError = null;
    var mainErrorCount = 0;
    for (var i = 0; i < this._errors.length; i++) {
      var error = this._errors[i];
      var message = error.message;
      var count = (counts[message] || 0) + 1;
      counts[message] = count;
      if (count >= mainErrorCount) {
        mainError = error;
        mainErrorCount = count;
      }
    }
    return mainError;
  };
  var retry = createCommonjsModule(function(module, exports) {
    exports.operation = function(options) {
      var timeouts = exports.timeouts(options);
      return new retry_operation(timeouts, {
        forever: options && options.forever,
        unref: options && options.unref,
        maxRetryTime: options && options.maxRetryTime
      });
    };
    exports.timeouts = function(options) {
      if (options instanceof Array) {
        return [].concat(options);
      }
      var opts = {
        retries: 10,
        factor: 2,
        minTimeout: 1 * 1e3,
        maxTimeout: Infinity,
        randomize: false
      };
      for (var key in options) {
        opts[key] = options[key];
      }
      if (opts.minTimeout > opts.maxTimeout) {
        throw new Error("minTimeout is greater than maxTimeout");
      }
      var timeouts = [];
      for (var i = 0; i < opts.retries; i++) {
        timeouts.push(this.createTimeout(i, opts));
      }
      if (options && options.forever && !timeouts.length) {
        timeouts.push(this.createTimeout(i, opts));
      }
      timeouts.sort(function(a, b) {
        return a - b;
      });
      return timeouts;
    };
    exports.createTimeout = function(attempt, opts) {
      var random = opts.randomize ? Math.random() + 1 : 1;
      var timeout = Math.round(random * opts.minTimeout * Math.pow(opts.factor, attempt));
      timeout = Math.min(timeout, opts.maxTimeout);
      return timeout;
    };
    exports.wrap = function(obj, options, methods) {
      if (options instanceof Array) {
        methods = options;
        options = null;
      }
      if (!methods) {
        methods = [];
        for (var key in obj) {
          if (typeof obj[key] === "function") {
            methods.push(key);
          }
        }
      }
      for (var i = 0; i < methods.length; i++) {
        var method = methods[i];
        var original = obj[method];
        obj[method] = function retryWrapper(original) {
          var op = exports.operation(options);
          var args = Array.prototype.slice.call(arguments, 1);
          var callback = args.pop();
          args.push(function(err) {
            if (op.retry(err)) {
              return;
            }
            if (err) {
              arguments[0] = op.mainError();
            }
            callback.apply(this, arguments);
          });
          op.attempt(function() {
            original.apply(obj, args);
          });
        }.bind(obj, original);
        obj[method].options = options;
      }
    };
  });
  var retry_1 = retry.operation;
  var retry_2 = retry.timeouts;
  var retry_3 = retry.createTimeout;
  var retry_4 = retry.wrap;
  var retry$1 = retry;
  class AbortError extends Error {
    constructor(message) {
      super();
      if (message instanceof Error) {
        this.originalError = message;
        ({message: message} = message);
      } else {
        this.originalError = new Error(message);
        this.originalError.stack = this.stack;
      }
      this.name = "AbortError";
      this.message = message;
    }
  }
  const decorateErrorWithCounts = (error, attemptNumber, options) => {
    const retriesLeft = options.retries - (attemptNumber - 1);
    error.attemptNumber = attemptNumber;
    error.retriesLeft = retriesLeft;
    return error;
  };
  const pRetry = (input, options) => new Promise((resolve, reject) => {
    options = {
      onFailedAttempt: () => {},
      retries: 10,
      ...options
    };
    const operation = retry$1.operation(options);
    operation.attempt(async attemptNumber => {
      try {
        resolve(await input(attemptNumber));
      } catch (error) {
        if (!(error instanceof Error)) {
          reject(new TypeError(`Non-error was thrown: "${error}". You should only throw errors.`));
          return;
        }
        if (error instanceof AbortError) {
          operation.stop();
          reject(error.originalError);
        } else if (error instanceof TypeError) {
          operation.stop();
          reject(error);
        } else {
          decorateErrorWithCounts(error, attemptNumber, options);
          options.onFailedAttempt(error);
          if (!operation.retry(error)) {
            reject(operation.mainError());
          }
        }
      }
    });
  });
  var pRetry_1 = pRetry;
  var default_1$1 = pRetry;
  var AbortError_1 = AbortError;
  pRetry_1.default = default_1$1;
  pRetry_1.AbortError = AbortError_1;
  var FileMeta_1 = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var STORAGE_KEY = "__gcsBrowserUpload";
    var FileMeta = function() {
      function FileMeta(id, fileSize, chunkSize, storage) {
        _classCallCheck(this, FileMeta);
        this.id = id;
        this.fileSize = fileSize;
        this.chunkSize = chunkSize;
        this.storage = storage;
      }
      _createClass(FileMeta, [ {
        key: "getMeta",
        value: function getMeta() {
          var meta = this.storage.getItem(STORAGE_KEY + "." + this.id);
          if (meta) {
            return JSON.parse(meta);
          } else {
            return {
              checksums: [],
              chunkSize: this.chunkSize,
              started: false,
              fileSize: this.fileSize
            };
          }
        }
      }, {
        key: "setMeta",
        value: function setMeta(meta) {
          var key = STORAGE_KEY + "." + this.id;
          if (meta) {
            this.storage.setItem(key, JSON.stringify(meta));
          } else {
            this.storage.removeItem(key);
          }
        }
      }, {
        key: "isResumable",
        value: function isResumable() {
          var meta = this.getMeta();
          return meta.started && this.chunkSize === meta.chunkSize;
        }
      }, {
        key: "getResumeIndex",
        value: function getResumeIndex() {
          return this.getMeta().checksums.length;
        }
      }, {
        key: "getFileSize",
        value: function getFileSize() {
          return this.getMeta().fileSize;
        }
      }, {
        key: "addChecksum",
        value: function addChecksum(index, checksum, state) {
          var meta = this.getMeta();
          meta.checksums[index] = {
            checksum: checksum,
            state: state
          };
          meta.started = true;
          this.setMeta(meta);
        }
      }, {
        key: "getChecksum",
        value: function getChecksum(index) {
          return this.getMeta().checksums[index].checksum;
        }
      }, {
        key: "getSparkMD5State",
        value: function getSparkMD5State(index) {
          return JSON.parse(this.getMeta().checksums[index].state);
        }
      }, {
        key: "reset",
        value: function reset() {
          this.setMeta(null);
        }
      } ]);
      return FileMeta;
    }();
    exports.default = FileMeta;
  });
  unwrapExports(FileMeta_1);
  var es6Promise = createCommonjsModule(function(module, exports) {
    (function(global, factory) {
      module.exports = factory();
    })(commonjsGlobal, function() {
      function objectOrFunction(x) {
        return typeof x === "function" || typeof x === "object" && x !== null;
      }
      function isFunction(x) {
        return typeof x === "function";
      }
      var _isArray = undefined;
      if (!Array.isArray) {
        _isArray = function(x) {
          return Object.prototype.toString.call(x) === "[object Array]";
        };
      } else {
        _isArray = Array.isArray;
      }
      var isArray = _isArray;
      var len = 0;
      var vertxNext = undefined;
      var customSchedulerFn = undefined;
      var asap = function asap(callback, arg) {
        queue[len] = callback;
        queue[len + 1] = arg;
        len += 2;
        if (len === 2) {
          if (customSchedulerFn) {
            customSchedulerFn(flush);
          } else {
            scheduleFlush();
          }
        }
      };
      function setScheduler(scheduleFn) {
        customSchedulerFn = scheduleFn;
      }
      function setAsap(asapFn) {
        asap = asapFn;
      }
      var browserWindow = typeof window !== "undefined" ? window : undefined;
      var browserGlobal = browserWindow || {};
      var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
      var isNode = typeof self === "undefined" && typeof process$3 !== "undefined" && {}.toString.call(process$3) === "[object process]";
      var isWorker = typeof Uint8ClampedArray !== "undefined" && typeof importScripts !== "undefined" && typeof MessageChannel !== "undefined";
      function useNextTick() {
        return function() {
          return nextTick(flush);
        };
      }
      function useVertxTimer() {
        return function() {
          vertxNext(flush);
        };
      }
      function useMutationObserver() {
        var iterations = 0;
        var observer = new BrowserMutationObserver(flush);
        var node = document.createTextNode("");
        observer.observe(node, {
          characterData: true
        });
        return function() {
          node.data = iterations = ++iterations % 2;
        };
      }
      function useMessageChannel() {
        var channel = new MessageChannel();
        channel.port1.onmessage = flush;
        return function() {
          return channel.port2.postMessage(0);
        };
      }
      function useSetTimeout() {
        var globalSetTimeout = setTimeout;
        return function() {
          return globalSetTimeout(flush, 1);
        };
      }
      var queue = new Array(1e3);
      function flush() {
        for (var i = 0; i < len; i += 2) {
          var callback = queue[i];
          var arg = queue[i + 1];
          callback(arg);
          queue[i] = undefined;
          queue[i + 1] = undefined;
        }
        len = 0;
      }
      function attemptVertx() {
        try {
          var r = commonjsRequire;
          var vertx = r("vertx");
          vertxNext = vertx.runOnLoop || vertx.runOnContext;
          return useVertxTimer();
        } catch (e) {
          return useSetTimeout();
        }
      }
      var scheduleFlush = undefined;
      if (isNode) {
        scheduleFlush = useNextTick();
      } else if (BrowserMutationObserver) {
        scheduleFlush = useMutationObserver();
      } else if (isWorker) {
        scheduleFlush = useMessageChannel();
      } else if (browserWindow === undefined && typeof commonjsRequire === "function") {
        scheduleFlush = attemptVertx();
      } else {
        scheduleFlush = useSetTimeout();
      }
      function then(onFulfillment, onRejection) {
        var _arguments = arguments;
        var parent = this;
        var child = new this.constructor(noop);
        if (child[PROMISE_ID] === undefined) {
          makePromise(child);
        }
        var _state = parent._state;
        if (_state) {
          (function() {
            var callback = _arguments[_state - 1];
            asap(function() {
              return invokeCallback(_state, child, callback, parent._result);
            });
          })();
        } else {
          subscribe(parent, child, onFulfillment, onRejection);
        }
        return child;
      }
      function resolve(object) {
        var Constructor = this;
        if (object && typeof object === "object" && object.constructor === Constructor) {
          return object;
        }
        var promise = new Constructor(noop);
        _resolve(promise, object);
        return promise;
      }
      var PROMISE_ID = Math.random().toString(36).substring(16);
      function noop() {}
      var PENDING = void 0;
      var FULFILLED = 1;
      var REJECTED = 2;
      var GET_THEN_ERROR = new ErrorObject();
      function selfFulfillment() {
        return new TypeError("You cannot resolve a promise with itself");
      }
      function cannotReturnOwn() {
        return new TypeError("A promises callback cannot return that same promise.");
      }
      function getThen(promise) {
        try {
          return promise.then;
        } catch (error) {
          GET_THEN_ERROR.error = error;
          return GET_THEN_ERROR;
        }
      }
      function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
        try {
          then.call(value, fulfillmentHandler, rejectionHandler);
        } catch (e) {
          return e;
        }
      }
      function handleForeignThenable(promise, thenable, then) {
        asap(function(promise) {
          var sealed = false;
          var error = tryThen(then, thenable, function(value) {
            if (sealed) {
              return;
            }
            sealed = true;
            if (thenable !== value) {
              _resolve(promise, value);
            } else {
              fulfill(promise, value);
            }
          }, function(reason) {
            if (sealed) {
              return;
            }
            sealed = true;
            _reject(promise, reason);
          }, "Settle: " + (promise._label || " unknown promise"));
          if (!sealed && error) {
            sealed = true;
            _reject(promise, error);
          }
        }, promise);
      }
      function handleOwnThenable(promise, thenable) {
        if (thenable._state === FULFILLED) {
          fulfill(promise, thenable._result);
        } else if (thenable._state === REJECTED) {
          _reject(promise, thenable._result);
        } else {
          subscribe(thenable, undefined, function(value) {
            return _resolve(promise, value);
          }, function(reason) {
            return _reject(promise, reason);
          });
        }
      }
      function handleMaybeThenable(promise, maybeThenable, then$$) {
        if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
          handleOwnThenable(promise, maybeThenable);
        } else {
          if (then$$ === GET_THEN_ERROR) {
            _reject(promise, GET_THEN_ERROR.error);
          } else if (then$$ === undefined) {
            fulfill(promise, maybeThenable);
          } else if (isFunction(then$$)) {
            handleForeignThenable(promise, maybeThenable, then$$);
          } else {
            fulfill(promise, maybeThenable);
          }
        }
      }
      function _resolve(promise, value) {
        if (promise === value) {
          _reject(promise, selfFulfillment());
        } else if (objectOrFunction(value)) {
          handleMaybeThenable(promise, value, getThen(value));
        } else {
          fulfill(promise, value);
        }
      }
      function publishRejection(promise) {
        if (promise._onerror) {
          promise._onerror(promise._result);
        }
        publish(promise);
      }
      function fulfill(promise, value) {
        if (promise._state !== PENDING) {
          return;
        }
        promise._result = value;
        promise._state = FULFILLED;
        if (promise._subscribers.length !== 0) {
          asap(publish, promise);
        }
      }
      function _reject(promise, reason) {
        if (promise._state !== PENDING) {
          return;
        }
        promise._state = REJECTED;
        promise._result = reason;
        asap(publishRejection, promise);
      }
      function subscribe(parent, child, onFulfillment, onRejection) {
        var _subscribers = parent._subscribers;
        var length = _subscribers.length;
        parent._onerror = null;
        _subscribers[length] = child;
        _subscribers[length + FULFILLED] = onFulfillment;
        _subscribers[length + REJECTED] = onRejection;
        if (length === 0 && parent._state) {
          asap(publish, parent);
        }
      }
      function publish(promise) {
        var subscribers = promise._subscribers;
        var settled = promise._state;
        if (subscribers.length === 0) {
          return;
        }
        var child = undefined, callback = undefined, detail = promise._result;
        for (var i = 0; i < subscribers.length; i += 3) {
          child = subscribers[i];
          callback = subscribers[i + settled];
          if (child) {
            invokeCallback(settled, child, callback, detail);
          } else {
            callback(detail);
          }
        }
        promise._subscribers.length = 0;
      }
      function ErrorObject() {
        this.error = null;
      }
      var TRY_CATCH_ERROR = new ErrorObject();
      function tryCatch(callback, detail) {
        try {
          return callback(detail);
        } catch (e) {
          TRY_CATCH_ERROR.error = e;
          return TRY_CATCH_ERROR;
        }
      }
      function invokeCallback(settled, promise, callback, detail) {
        var hasCallback = isFunction(callback), value = undefined, error = undefined, succeeded = undefined, failed = undefined;
        if (hasCallback) {
          value = tryCatch(callback, detail);
          if (value === TRY_CATCH_ERROR) {
            failed = true;
            error = value.error;
            value = null;
          } else {
            succeeded = true;
          }
          if (promise === value) {
            _reject(promise, cannotReturnOwn());
            return;
          }
        } else {
          value = detail;
          succeeded = true;
        }
        if (promise._state !== PENDING) ; else if (hasCallback && succeeded) {
          _resolve(promise, value);
        } else if (failed) {
          _reject(promise, error);
        } else if (settled === FULFILLED) {
          fulfill(promise, value);
        } else if (settled === REJECTED) {
          _reject(promise, value);
        }
      }
      function initializePromise(promise, resolver) {
        try {
          resolver(function resolvePromise(value) {
            _resolve(promise, value);
          }, function rejectPromise(reason) {
            _reject(promise, reason);
          });
        } catch (e) {
          _reject(promise, e);
        }
      }
      var id = 0;
      function nextId() {
        return id++;
      }
      function makePromise(promise) {
        promise[PROMISE_ID] = id++;
        promise._state = undefined;
        promise._result = undefined;
        promise._subscribers = [];
      }
      function Enumerator(Constructor, input) {
        this._instanceConstructor = Constructor;
        this.promise = new Constructor(noop);
        if (!this.promise[PROMISE_ID]) {
          makePromise(this.promise);
        }
        if (isArray(input)) {
          this._input = input;
          this.length = input.length;
          this._remaining = input.length;
          this._result = new Array(this.length);
          if (this.length === 0) {
            fulfill(this.promise, this._result);
          } else {
            this.length = this.length || 0;
            this._enumerate();
            if (this._remaining === 0) {
              fulfill(this.promise, this._result);
            }
          }
        } else {
          _reject(this.promise, validationError());
        }
      }
      function validationError() {
        return new Error("Array Methods must be provided an Array");
      }
      Enumerator.prototype._enumerate = function() {
        var length = this.length;
        var _input = this._input;
        for (var i = 0; this._state === PENDING && i < length; i++) {
          this._eachEntry(_input[i], i);
        }
      };
      Enumerator.prototype._eachEntry = function(entry, i) {
        var c = this._instanceConstructor;
        var resolve$$ = c.resolve;
        if (resolve$$ === resolve) {
          var _then = getThen(entry);
          if (_then === then && entry._state !== PENDING) {
            this._settledAt(entry._state, i, entry._result);
          } else if (typeof _then !== "function") {
            this._remaining--;
            this._result[i] = entry;
          } else if (c === Promise) {
            var promise = new c(noop);
            handleMaybeThenable(promise, entry, _then);
            this._willSettleAt(promise, i);
          } else {
            this._willSettleAt(new c(function(resolve$$) {
              return resolve$$(entry);
            }), i);
          }
        } else {
          this._willSettleAt(resolve$$(entry), i);
        }
      };
      Enumerator.prototype._settledAt = function(state, i, value) {
        var promise = this.promise;
        if (promise._state === PENDING) {
          this._remaining--;
          if (state === REJECTED) {
            _reject(promise, value);
          } else {
            this._result[i] = value;
          }
        }
        if (this._remaining === 0) {
          fulfill(promise, this._result);
        }
      };
      Enumerator.prototype._willSettleAt = function(promise, i) {
        var enumerator = this;
        subscribe(promise, undefined, function(value) {
          return enumerator._settledAt(FULFILLED, i, value);
        }, function(reason) {
          return enumerator._settledAt(REJECTED, i, reason);
        });
      };
      function all(entries) {
        return new Enumerator(this, entries).promise;
      }
      function race(entries) {
        var Constructor = this;
        if (!isArray(entries)) {
          return new Constructor(function(_, reject) {
            return reject(new TypeError("You must pass an array to race."));
          });
        } else {
          return new Constructor(function(resolve, reject) {
            var length = entries.length;
            for (var i = 0; i < length; i++) {
              Constructor.resolve(entries[i]).then(resolve, reject);
            }
          });
        }
      }
      function reject(reason) {
        var Constructor = this;
        var promise = new Constructor(noop);
        _reject(promise, reason);
        return promise;
      }
      function needsResolver() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
      }
      function needsNew() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
      }
      function Promise(resolver) {
        this[PROMISE_ID] = nextId();
        this._result = this._state = undefined;
        this._subscribers = [];
        if (noop !== resolver) {
          typeof resolver !== "function" && needsResolver();
          this instanceof Promise ? initializePromise(this, resolver) : needsNew();
        }
      }
      Promise.all = all;
      Promise.race = race;
      Promise.resolve = resolve;
      Promise.reject = reject;
      Promise._setScheduler = setScheduler;
      Promise._setAsap = setAsap;
      Promise._asap = asap;
      Promise.prototype = {
        constructor: Promise,
        then: then,
        catch: function _catch(onRejection) {
          return this.then(null, onRejection);
        }
      };
      function polyfill() {
        var local = undefined;
        if (typeof commonjsGlobal !== "undefined") {
          local = commonjsGlobal;
        } else if (typeof self !== "undefined") {
          local = self;
        } else {
          try {
            local = Function("return this")();
          } catch (e) {
            throw new Error("polyfill failed because global object is unavailable in this environment");
          }
        }
        var P = local.Promise;
        if (P) {
          var promiseToString = null;
          try {
            promiseToString = Object.prototype.toString.call(P.resolve());
          } catch (e) {}
          if (promiseToString === "[object Promise]" && !P.cast) {
            return;
          }
        }
        local.Promise = Promise;
      }
      polyfill();
      Promise.polyfill = polyfill;
      Promise.Promise = Promise;
      return Promise;
    });
  });
  var sparkMd5$1 = createCommonjsModule(function(module, exports) {
    (function(factory) {
      {
        module.exports = factory();
      }
    })(function(undefined$1) {
      var add32 = function(a, b) {
        return a + b & 4294967295;
      }, hex_chr = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f" ];
      function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32(a << s | a >>> 32 - s, b);
      }
      function ff(a, b, c, d, x, s, t) {
        return cmn(b & c | ~b & d, a, b, x, s, t);
      }
      function gg(a, b, c, d, x, s, t) {
        return cmn(b & d | c & ~d, a, b, x, s, t);
      }
      function hh(a, b, c, d, x, s, t) {
        return cmn(b ^ c ^ d, a, b, x, s, t);
      }
      function ii(a, b, c, d, x, s, t) {
        return cmn(c ^ (b | ~d), a, b, x, s, t);
      }
      function md5cycle(x, k) {
        var a = x[0], b = x[1], c = x[2], d = x[3];
        a = ff(a, b, c, d, k[0], 7, -680876936);
        d = ff(d, a, b, c, k[1], 12, -389564586);
        c = ff(c, d, a, b, k[2], 17, 606105819);
        b = ff(b, c, d, a, k[3], 22, -1044525330);
        a = ff(a, b, c, d, k[4], 7, -176418897);
        d = ff(d, a, b, c, k[5], 12, 1200080426);
        c = ff(c, d, a, b, k[6], 17, -1473231341);
        b = ff(b, c, d, a, k[7], 22, -45705983);
        a = ff(a, b, c, d, k[8], 7, 1770035416);
        d = ff(d, a, b, c, k[9], 12, -1958414417);
        c = ff(c, d, a, b, k[10], 17, -42063);
        b = ff(b, c, d, a, k[11], 22, -1990404162);
        a = ff(a, b, c, d, k[12], 7, 1804603682);
        d = ff(d, a, b, c, k[13], 12, -40341101);
        c = ff(c, d, a, b, k[14], 17, -1502002290);
        b = ff(b, c, d, a, k[15], 22, 1236535329);
        a = gg(a, b, c, d, k[1], 5, -165796510);
        d = gg(d, a, b, c, k[6], 9, -1069501632);
        c = gg(c, d, a, b, k[11], 14, 643717713);
        b = gg(b, c, d, a, k[0], 20, -373897302);
        a = gg(a, b, c, d, k[5], 5, -701558691);
        d = gg(d, a, b, c, k[10], 9, 38016083);
        c = gg(c, d, a, b, k[15], 14, -660478335);
        b = gg(b, c, d, a, k[4], 20, -405537848);
        a = gg(a, b, c, d, k[9], 5, 568446438);
        d = gg(d, a, b, c, k[14], 9, -1019803690);
        c = gg(c, d, a, b, k[3], 14, -187363961);
        b = gg(b, c, d, a, k[8], 20, 1163531501);
        a = gg(a, b, c, d, k[13], 5, -1444681467);
        d = gg(d, a, b, c, k[2], 9, -51403784);
        c = gg(c, d, a, b, k[7], 14, 1735328473);
        b = gg(b, c, d, a, k[12], 20, -1926607734);
        a = hh(a, b, c, d, k[5], 4, -378558);
        d = hh(d, a, b, c, k[8], 11, -2022574463);
        c = hh(c, d, a, b, k[11], 16, 1839030562);
        b = hh(b, c, d, a, k[14], 23, -35309556);
        a = hh(a, b, c, d, k[1], 4, -1530992060);
        d = hh(d, a, b, c, k[4], 11, 1272893353);
        c = hh(c, d, a, b, k[7], 16, -155497632);
        b = hh(b, c, d, a, k[10], 23, -1094730640);
        a = hh(a, b, c, d, k[13], 4, 681279174);
        d = hh(d, a, b, c, k[0], 11, -358537222);
        c = hh(c, d, a, b, k[3], 16, -722521979);
        b = hh(b, c, d, a, k[6], 23, 76029189);
        a = hh(a, b, c, d, k[9], 4, -640364487);
        d = hh(d, a, b, c, k[12], 11, -421815835);
        c = hh(c, d, a, b, k[15], 16, 530742520);
        b = hh(b, c, d, a, k[2], 23, -995338651);
        a = ii(a, b, c, d, k[0], 6, -198630844);
        d = ii(d, a, b, c, k[7], 10, 1126891415);
        c = ii(c, d, a, b, k[14], 15, -1416354905);
        b = ii(b, c, d, a, k[5], 21, -57434055);
        a = ii(a, b, c, d, k[12], 6, 1700485571);
        d = ii(d, a, b, c, k[3], 10, -1894986606);
        c = ii(c, d, a, b, k[10], 15, -1051523);
        b = ii(b, c, d, a, k[1], 21, -2054922799);
        a = ii(a, b, c, d, k[8], 6, 1873313359);
        d = ii(d, a, b, c, k[15], 10, -30611744);
        c = ii(c, d, a, b, k[6], 15, -1560198380);
        b = ii(b, c, d, a, k[13], 21, 1309151649);
        a = ii(a, b, c, d, k[4], 6, -145523070);
        d = ii(d, a, b, c, k[11], 10, -1120210379);
        c = ii(c, d, a, b, k[2], 15, 718787259);
        b = ii(b, c, d, a, k[9], 21, -343485551);
        x[0] = add32(a, x[0]);
        x[1] = add32(b, x[1]);
        x[2] = add32(c, x[2]);
        x[3] = add32(d, x[3]);
      }
      function md5blk(s) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }
        return md5blks;
      }
      function md5blk_array(a) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }
        return md5blks;
      }
      function md51(s) {
        var n = s.length, state = [ 1732584193, -271733879, -1732584194, 271733878 ], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(state, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }
      function md51_array(a) {
        var n = a.length, state = [ 1732584193, -271733879, -1732584194, 271733878 ], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(state, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }
      function rhex(n) {
        var s = "", j;
        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }
        return s;
      }
      function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }
        return x.join("");
      }
      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
        add32 = function(x, y) {
          var lsw = (x & 65535) + (y & 65535), msw = (x >> 16) + (y >> 16) + (lsw >> 16);
          return msw << 16 | lsw & 65535;
        };
      }
      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function() {
          function clamp(val, length) {
            val = val | 0 || 0;
            if (val < 0) {
              return Math.max(val + length, 0);
            }
            return Math.min(val, length);
          }
          ArrayBuffer.prototype.slice = function(from, to) {
            var length = this.byteLength, begin = clamp(from, length), end = length, num, target, targetArray, sourceArray;
            if (to !== undefined$1) {
              end = clamp(to, length);
            }
            if (begin > end) {
              return new ArrayBuffer(0);
            }
            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }
      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }
        return str;
      }
      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i;
        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }
        return returnUInt8Array ? arr : buff;
      }
      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }
      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }
      function hexToBinaryString(hex) {
        var bytes = [], length = hex.length, x;
        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }
        return String.fromCharCode.apply(String, bytes);
      }
      function SparkMD5() {
        this.reset();
      }
      SparkMD5.prototype.append = function(str) {
        this.appendBinary(toUtf8(str));
        return this;
      };
      SparkMD5.prototype.appendBinary = function(contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length, i;
        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }
        this._buff = this._buff.substring(i - 64);
        return this;
      };
      SparkMD5.prototype.end = function(raw) {
        var buff = this._buff, length = buff.length, i, tail = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], ret;
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
          ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
      };
      SparkMD5.prototype.reset = function() {
        this._buff = "";
        this._length = 0;
        this._hash = [ 1732584193, -271733879, -1732584194, 271733878 ];
        return this;
      };
      SparkMD5.prototype.getState = function() {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };
      SparkMD5.prototype.setState = function(state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };
      SparkMD5.prototype.destroy = function() {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };
      SparkMD5.prototype._finish = function(tail, length) {
        var i = length, tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(this._hash, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };
      SparkMD5.hash = function(str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };
      SparkMD5.hashBinary = function(content, raw) {
        var hash = md51(content), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };
      SparkMD5.ArrayBuffer = function() {
        this.reset();
      };
      SparkMD5.ArrayBuffer.prototype.append = function(arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true), length = buff.length, i;
        this._length += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }
        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };
      SparkMD5.ArrayBuffer.prototype.end = function(raw) {
        var buff = this._buff, length = buff.length, tail = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], i, ret;
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
          ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
      };
      SparkMD5.ArrayBuffer.prototype.reset = function() {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [ 1732584193, -271733879, -1732584194, 271733878 ];
        return this;
      };
      SparkMD5.ArrayBuffer.prototype.getState = function() {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };
      SparkMD5.ArrayBuffer.prototype.setState = function(state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };
      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
      SparkMD5.ArrayBuffer.hash = function(arr, raw) {
        var hash = md51_array(new Uint8Array(arr)), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };
      return SparkMD5;
    });
  });
  var s = 1e3;
  var m = s * 60;
  var h = m * 60;
  var d = h * 24;
  var y = d * 365.25;
  var ms = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) {
      return parse(val);
    } else if (type === "number" && isNaN(val) === false) {
      return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
  };
  function parse(str) {
    str = String(str);
    if (str.length > 100) {
      return;
    }
    var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
      return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || "ms").toLowerCase();
    switch (type) {
     case "years":
     case "year":
     case "yrs":
     case "yr":
     case "y":
      return n * y;

     case "days":
     case "day":
     case "d":
      return n * d;

     case "hours":
     case "hour":
     case "hrs":
     case "hr":
     case "h":
      return n * h;

     case "minutes":
     case "minute":
     case "mins":
     case "min":
     case "m":
      return n * m;

     case "seconds":
     case "second":
     case "secs":
     case "sec":
     case "s":
      return n * s;

     case "milliseconds":
     case "millisecond":
     case "msecs":
     case "msec":
     case "ms":
      return n;

     default:
      return undefined;
    }
  }
  function fmtShort(ms) {
    if (ms >= d) {
      return Math.round(ms / d) + "d";
    }
    if (ms >= h) {
      return Math.round(ms / h) + "h";
    }
    if (ms >= m) {
      return Math.round(ms / m) + "m";
    }
    if (ms >= s) {
      return Math.round(ms / s) + "s";
    }
    return ms + "ms";
  }
  function fmtLong(ms) {
    return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s, "second") || ms + " ms";
  }
  function plural(ms, n, name) {
    if (ms < n) {
      return;
    }
    if (ms < n * 1.5) {
      return Math.floor(ms / n) + " " + name;
    }
    return Math.ceil(ms / n) + " " + name + "s";
  }
  var debug = createCommonjsModule(function(module, exports) {
    exports = module.exports = createDebug.debug = createDebug["default"] = createDebug;
    exports.coerce = coerce;
    exports.disable = disable;
    exports.enable = enable;
    exports.enabled = enabled;
    exports.humanize = ms;
    exports.names = [];
    exports.skips = [];
    exports.formatters = {};
    var prevTime;
    function selectColor(namespace) {
      var hash = 0, i;
      for (i in namespace) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i);
        hash |= 0;
      }
      return exports.colors[Math.abs(hash) % exports.colors.length];
    }
    function createDebug(namespace) {
      function debug() {
        if (!debug.enabled) return;
        var self = debug;
        var curr = +new Date();
        var ms = curr - (prevTime || curr);
        self.diff = ms;
        self.prev = prevTime;
        self.curr = curr;
        prevTime = curr;
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        args[0] = exports.coerce(args[0]);
        if ("string" !== typeof args[0]) {
          args.unshift("%O");
        }
        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
          if (match === "%%") return match;
          index++;
          var formatter = exports.formatters[format];
          if ("function" === typeof formatter) {
            var val = args[index];
            match = formatter.call(self, val);
            args.splice(index, 1);
            index--;
          }
          return match;
        });
        exports.formatArgs.call(self, args);
        var logFn = debug.log || exports.log || console.log.bind(console);
        logFn.apply(self, args);
      }
      debug.namespace = namespace;
      debug.enabled = exports.enabled(namespace);
      debug.useColors = exports.useColors();
      debug.color = selectColor(namespace);
      if ("function" === typeof exports.init) {
        exports.init(debug);
      }
      return debug;
    }
    function enable(namespaces) {
      exports.save(namespaces);
      exports.names = [];
      exports.skips = [];
      var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
      var len = split.length;
      for (var i = 0; i < len; i++) {
        if (!split[i]) continue;
        namespaces = split[i].replace(/\*/g, ".*?");
        if (namespaces[0] === "-") {
          exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
        } else {
          exports.names.push(new RegExp("^" + namespaces + "$"));
        }
      }
    }
    function disable() {
      exports.enable("");
    }
    function enabled(name) {
      var i, len;
      for (i = 0, len = exports.skips.length; i < len; i++) {
        if (exports.skips[i].test(name)) {
          return false;
        }
      }
      for (i = 0, len = exports.names.length; i < len; i++) {
        if (exports.names[i].test(name)) {
          return true;
        }
      }
      return false;
    }
    function coerce(val) {
      if (val instanceof Error) return val.stack || val.message;
      return val;
    }
  });
  var debug_1 = debug.coerce;
  var debug_2 = debug.disable;
  var debug_3 = debug.enable;
  var debug_4 = debug.enabled;
  var debug_5 = debug.humanize;
  var debug_6 = debug.names;
  var debug_7 = debug.skips;
  var debug_8 = debug.formatters;
  var browser$1 = createCommonjsModule(function(module, exports) {
    exports = module.exports = debug;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : localstorage();
    exports.colors = [ "lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson" ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
        return true;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    exports.formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (err) {
        return "[UnexpectedJSONParseError]: " + err.message;
      }
    };
    function formatArgs(args) {
      var useColors = this.useColors;
      args[0] = (useColors ? "%c" : "") + this.namespace + (useColors ? " %c" : " ") + args[0] + (useColors ? "%c " : " ") + "+" + exports.humanize(this.diff);
      if (!useColors) return;
      var c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function(match) {
        if ("%%" === match) return;
        index++;
        if ("%c" === match) {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    function log() {
      return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function save(namespaces) {
      try {
        if (null == namespaces) {
          exports.storage.removeItem("debug");
        } else {
          exports.storage.debug = namespaces;
        }
      } catch (e) {}
    }
    function load() {
      var r;
      try {
        r = exports.storage.debug;
      } catch (e) {}
      if (!r && typeof process$3 !== "undefined" && "env" in process$3) {
        r = process$3.env.DEBUG;
      }
      return r;
    }
    exports.enable(load());
    function localstorage() {
      try {
        return window.localStorage;
      } catch (e) {}
    }
  });
  var browser_1 = browser$1.log;
  var browser_2 = browser$1.formatArgs;
  var browser_3 = browser$1.save;
  var browser_4 = browser$1.load;
  var browser_5 = browser$1.useColors;
  var browser_6 = browser$1.storage;
  var browser_7 = browser$1.colors;
  var debug$1 = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _debug2 = _interopRequireDefault(browser$1);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    exports.default = (0, _debug2.default)("gcs-browser-upload");
  });
  unwrapExports(debug$1);
  var FileProcessor_1 = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var getData = function() {
      var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(file, blob) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
             case 0:
              return _context3.abrupt("return", new es6Promise.Promise(function(resolve, reject) {
                var reader = new window.FileReader();
                reader.onload = function() {
                  return resolve(reader.result);
                };
                reader.onerror = reject;
                reader.readAsArrayBuffer(blob);
              }));

             case 1:
             case "end":
              return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      return function getData(_x4, _x5) {
        return _ref3.apply(this, arguments);
      };
    }();
    var _sparkMd2 = _interopRequireDefault(sparkMd5$1);
    var _debug2 = _interopRequireDefault(debug$1);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _asyncToGenerator(fn) {
      return function() {
        var gen = fn.apply(this, arguments);
        return new es6Promise.Promise(function(resolve, reject) {
          function step(key, arg) {
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
              return es6Promise.Promise.resolve(value).then(function(value) {
                step("next", value);
              }, function(err) {
                step("throw", err);
              });
            }
          }
          return step("next");
        });
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var FileProcessor = function() {
      function FileProcessor(file, meta, chunkSize) {
        _classCallCheck(this, FileProcessor);
        this.paused = false;
        this.file = file;
        this.meta = meta;
        this.chunkSize = chunkSize;
        this.unpauseHandlers = [];
      }
      _createClass(FileProcessor, [ {
        key: "run",
        value: function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(fn) {
            var _this = this;
            var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var endIndex = arguments[2];
            var file, chunkSize, totalChunks, spark, processIndex, waitForUnpause;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                 case 0:
                  file = this.file, chunkSize = this.chunkSize;
                  totalChunks = Math.ceil(file.size / chunkSize);
                  spark = new _sparkMd2.default.ArrayBuffer();
                  if (startIndex > 0) {
                    (0, _debug2.default)("Restoring SparkMD5 state for the last chunck");
                    spark.setState(this.meta.getSparkMD5State(startIndex - 1));
                  }
                  (0, _debug2.default)("Starting run on file:");
                  (0, _debug2.default)(" - Total chunks: " + totalChunks);
                  (0, _debug2.default)(" - Start index: " + startIndex);
                  (0, _debug2.default)(" - End index: " + (endIndex || totalChunks));
                  processIndex = function() {
                    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(index) {
                      var start, section, chunk, _computeChecksum, checksum, state, shouldContinue;
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                           case 0:
                            if (!(index === totalChunks || index === endIndex)) {
                              _context.next = 3;
                              break;
                            }
                            (0, _debug2.default)("File process complete");
                            return _context.abrupt("return");

                           case 3:
                            if (!_this.paused) {
                              _context.next = 6;
                              break;
                            }
                            _context.next = 6;
                            return waitForUnpause();

                           case 6:
                            start = index * chunkSize;
                            section = file.slice(start, start + chunkSize);
                            _context.next = 10;
                            return getData(file, section);

                           case 10:
                            chunk = _context.sent;
                            _computeChecksum = computeChecksum(spark, chunk), checksum = _computeChecksum.checksum, 
                            state = _computeChecksum.state;
                            _context.next = 14;
                            return fn(checksum, state, index, chunk);

                           case 14:
                            shouldContinue = _context.sent;
                            if (!(shouldContinue !== false)) {
                              _context.next = 18;
                              break;
                            }
                            _context.next = 18;
                            return processIndex(index + 1);

                           case 18:
                           case "end":
                            return _context.stop();
                          }
                        }
                      }, _callee, _this);
                    }));
                    return function processIndex(_x3) {
                      return _ref2.apply(this, arguments);
                    };
                  }();
                  waitForUnpause = function waitForUnpause() {
                    return new es6Promise.Promise(function(resolve) {
                      _this.unpauseHandlers.push(resolve);
                    });
                  };
                  _context2.next = 12;
                  return processIndex(startIndex);

                 case 12:
                 case "end":
                  return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
          function run(_x) {
            return _ref.apply(this, arguments);
          }
          return run;
        }()
      }, {
        key: "pause",
        value: function pause() {
          this.paused = true;
        }
      }, {
        key: "unpause",
        value: function unpause() {
          this.paused = false;
          this.unpauseHandlers.forEach(function(fn) {
            return fn();
          });
          this.unpauseHandlers = [];
        }
      } ]);
      return FileProcessor;
    }();
    function computeChecksum(spark, chunk) {
      spark.append(chunk);
      var state = JSON.stringify(spark.getState());
      var checksum = spark.end();
      spark.setState(JSON.parse(state));
      return {
        checksum: checksum,
        state: state
      };
    }
    exports.default = FileProcessor;
  });
  unwrapExports(FileProcessor_1);
  var dist = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _get = function get(_x2, _x3, _x4) {
      var _again = true;
      _function: while (_again) {
        var object = _x2, property = _x3, receiver = _x4;
        _again = false;
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);
        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);
          if (parent === null) {
            return undefined;
          } else {
            _x2 = parent;
            _x3 = property;
            _x4 = receiver;
            _again = true;
            desc = parent = undefined;
            continue _function;
          }
        } else if ("value" in desc) {
          return desc.value;
        } else {
          var getter = desc.get;
          if (getter === undefined) {
            return undefined;
          }
          return getter.call(receiver);
        }
      }
    };
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var ExtendableError = function(_Error) {
      _inherits(ExtendableError, _Error);
      function ExtendableError() {
        var message = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
        _classCallCheck(this, ExtendableError);
        _get(Object.getPrototypeOf(ExtendableError.prototype), "constructor", this).call(this, message);
        Object.defineProperty(this, "message", {
          enumerable: false,
          value: message,
          writable: true
        });
        Object.defineProperty(this, "name", {
          enumerable: false,
          value: this.constructor.name,
          writable: true
        });
        if (Error.hasOwnProperty("captureStackTrace")) {
          Error.captureStackTrace(this, this.constructor);
          return;
        }
        Object.defineProperty(this, "stack", {
          enumerable: false,
          value: new Error(message).stack,
          writable: true
        });
      }
      return ExtendableError;
    }(Error);
    exports["default"] = ExtendableError;
    module.exports = exports["default"];
  });
  unwrapExports(dist);
  var errors = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UploadAlreadyFinishedError = exports.InvalidChunkSizeError = exports.UploadIncompleteError = exports.MissingOptionsError = exports.UnknownResponseError = exports.UploadFailedError = exports.UrlNotFoundError = exports.FileAlreadyUploadedError = exports.DifferentChunkError = undefined;
    var _es6Error2 = _interopRequireDefault(dist);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var DifferentChunkError = exports.DifferentChunkError = function(_ExtendableError) {
      _inherits(DifferentChunkError, _ExtendableError);
      function DifferentChunkError(chunkIndex, originalChecksum, newChecksum) {
        _classCallCheck(this, DifferentChunkError);
        var _this = _possibleConstructorReturn(this, (DifferentChunkError.__proto__ || Object.getPrototypeOf(DifferentChunkError)).call(this, "Chunk at index '" + chunkIndex + "' is different to original"));
        _this.chunkIndex = chunkIndex;
        _this.originalChecksum = originalChecksum;
        _this.newChecksum = newChecksum;
        return _this;
      }
      return DifferentChunkError;
    }(_es6Error2.default);
    var FileAlreadyUploadedError = exports.FileAlreadyUploadedError = function(_ExtendableError2) {
      _inherits(FileAlreadyUploadedError, _ExtendableError2);
      function FileAlreadyUploadedError(id, url) {
        _classCallCheck(this, FileAlreadyUploadedError);
        return _possibleConstructorReturn(this, (FileAlreadyUploadedError.__proto__ || Object.getPrototypeOf(FileAlreadyUploadedError)).call(this, "File '" + id + "' has already been uploaded to unique url '" + url + "'"));
      }
      return FileAlreadyUploadedError;
    }(_es6Error2.default);
    var UrlNotFoundError = exports.UrlNotFoundError = function(_ExtendableError3) {
      _inherits(UrlNotFoundError, _ExtendableError3);
      function UrlNotFoundError(url) {
        _classCallCheck(this, UrlNotFoundError);
        return _possibleConstructorReturn(this, (UrlNotFoundError.__proto__ || Object.getPrototypeOf(UrlNotFoundError)).call(this, "Upload URL '" + url + "' has either expired or is invalid"));
      }
      return UrlNotFoundError;
    }(_es6Error2.default);
    var UploadFailedError = exports.UploadFailedError = function(_ExtendableError4) {
      _inherits(UploadFailedError, _ExtendableError4);
      function UploadFailedError(status) {
        _classCallCheck(this, UploadFailedError);
        return _possibleConstructorReturn(this, (UploadFailedError.__proto__ || Object.getPrototypeOf(UploadFailedError)).call(this, "HTTP status " + status + " received from GCS, consider retrying"));
      }
      return UploadFailedError;
    }(_es6Error2.default);
    var UnknownResponseError = exports.UnknownResponseError = function(_ExtendableError5) {
      _inherits(UnknownResponseError, _ExtendableError5);
      function UnknownResponseError(res) {
        _classCallCheck(this, UnknownResponseError);
        var _this5 = _possibleConstructorReturn(this, (UnknownResponseError.__proto__ || Object.getPrototypeOf(UnknownResponseError)).call(this, "Unknown response received from GCS"));
        _this5.res = res;
        return _this5;
      }
      return UnknownResponseError;
    }(_es6Error2.default);
    var MissingOptionsError = exports.MissingOptionsError = function(_ExtendableError6) {
      _inherits(MissingOptionsError, _ExtendableError6);
      function MissingOptionsError() {
        _classCallCheck(this, MissingOptionsError);
        return _possibleConstructorReturn(this, (MissingOptionsError.__proto__ || Object.getPrototypeOf(MissingOptionsError)).call(this, "Missing options for Upload"));
      }
      return MissingOptionsError;
    }(_es6Error2.default);
    var UploadIncompleteError = exports.UploadIncompleteError = function(_ExtendableError7) {
      _inherits(UploadIncompleteError, _ExtendableError7);
      function UploadIncompleteError() {
        _classCallCheck(this, UploadIncompleteError);
        return _possibleConstructorReturn(this, (UploadIncompleteError.__proto__ || Object.getPrototypeOf(UploadIncompleteError)).call(this, "Upload is not complete"));
      }
      return UploadIncompleteError;
    }(_es6Error2.default);
    var InvalidChunkSizeError = exports.InvalidChunkSizeError = function(_ExtendableError8) {
      _inherits(InvalidChunkSizeError, _ExtendableError8);
      function InvalidChunkSizeError(chunkSize) {
        _classCallCheck(this, InvalidChunkSizeError);
        return _possibleConstructorReturn(this, (InvalidChunkSizeError.__proto__ || Object.getPrototypeOf(InvalidChunkSizeError)).call(this, "Invalid chunk size " + chunkSize + ", must be a multiple of 262144"));
      }
      return InvalidChunkSizeError;
    }(_es6Error2.default);
    var UploadAlreadyFinishedError = exports.UploadAlreadyFinishedError = function(_ExtendableError9) {
      _inherits(UploadAlreadyFinishedError, _ExtendableError9);
      function UploadAlreadyFinishedError() {
        _classCallCheck(this, UploadAlreadyFinishedError);
        return _possibleConstructorReturn(this, (UploadAlreadyFinishedError.__proto__ || Object.getPrototypeOf(UploadAlreadyFinishedError)).call(this, "Upload instance has already finished"));
      }
      return UploadAlreadyFinishedError;
    }(_es6Error2.default);
  });
  unwrapExports(errors);
  var errors_1 = errors.UploadAlreadyFinishedError;
  var errors_2 = errors.InvalidChunkSizeError;
  var errors_3 = errors.UploadIncompleteError;
  var errors_4 = errors.MissingOptionsError;
  var errors_5 = errors.UnknownResponseError;
  var errors_6 = errors.UploadFailedError;
  var errors_7 = errors.UrlNotFoundError;
  var errors_8 = errors.FileAlreadyUploadedError;
  var errors_9 = errors.DifferentChunkError;
  var Upload_1 = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var safePut = function() {
      var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
        var _args7 = arguments;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
             case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return axios$1.put.apply(null, _args7);

             case 3:
              return _context7.abrupt("return", _context7.sent);

             case 6:
              _context7.prev = 6;
              _context7.t0 = _context7["catch"](0);
              if (!(_context7.t0 instanceof Error)) {
                _context7.next = 12;
                break;
              }
              throw _context7.t0;

             case 12:
              return _context7.abrupt("return", _context7.t0);

             case 13:
             case "end":
              return _context7.stop();
            }
          }
        }, _callee7, this, [ [ 0, 6 ] ]);
      }));
      return function safePut() {
        return _ref7.apply(this, arguments);
      };
    }();
    var _pRetry2 = _interopRequireDefault(pRetry_1);
    var _FileMeta2 = _interopRequireDefault(FileMeta_1);
    var _FileProcessor2 = _interopRequireDefault(FileProcessor_1);
    var _debug2 = _interopRequireDefault(debug$1);
    var errors$1 = _interopRequireWildcard(errors);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _asyncToGenerator(fn) {
      return function() {
        var gen = fn.apply(this, arguments);
        return new Promise(function(resolve, reject) {
          function step(key, arg) {
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
              return Promise.resolve(value).then(function(value) {
                step("next", value);
              }, function(err) {
                step("throw", err);
              });
            }
          }
          return step("next");
        });
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var MIN_CHUNK_SIZE = 5242880;
    var Upload = function() {
      function Upload(args, allowSmallChunks) {
        _classCallCheck(this, Upload);
        var opts = _extends({
          chunkSize: MIN_CHUNK_SIZE,
          storage: window.localStorage,
          contentType: "text/plain",
          onChunkUpload: function onChunkUpload() {},
          id: null,
          url: null,
          file: null,
          retries: 10
        }, args);
        if ((opts.chunkSize % MIN_CHUNK_SIZE !== 0 || opts.chunkSize === 0) && !allowSmallChunks) {
          throw new errors.InvalidChunkSizeError(opts.chunkSize);
        }
        if (!opts.id || !opts.url || !opts.file) {
          throw new errors.MissingOptionsError();
        }
        (0, _debug2.default)("Creating new upload instance:");
        (0, _debug2.default)(" - Url: " + opts.url);
        (0, _debug2.default)(" - Id: " + opts.id);
        (0, _debug2.default)(" - File size: " + opts.file.size);
        (0, _debug2.default)(" - Chunk size: " + opts.chunkSize);
        this.opts = opts;
        this.meta = new _FileMeta2.default(opts.id, opts.file.size, opts.chunkSize, opts.storage);
        this.processor = new _FileProcessor2.default(opts.file, this.meta, opts.chunkSize);
        this.lastResult = null;
      }
      _createClass(Upload, [ {
        key: "start",
        value: function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
            var _this = this;
            var meta, processor, opts, finished, resumeUpload, uploadChunk, validateChunk, getRemoteResumeIndex;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                 case 0:
                  meta = this.meta, processor = this.processor, opts = this.opts, finished = this.finished;
                  resumeUpload = function() {
                    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                      var localResumeIndex, remoteResumeIndex, resumeIndex, startResumeIndex;
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                           case 0:
                            localResumeIndex = meta.getResumeIndex();
                            _context.next = 3;
                            return getRemoteResumeIndex();

                           case 3:
                            remoteResumeIndex = _context.sent;
                            resumeIndex = Math.min(localResumeIndex, remoteResumeIndex);
                            (0, _debug2.default)("Validating chunks up to index " + resumeIndex);
                            (0, _debug2.default)(" - Remote index: " + remoteResumeIndex);
                            (0, _debug2.default)(" - Local index: " + localResumeIndex);
                            _context.prev = 8;
                            startResumeIndex = resumeIndex - 2;
                            if (startResumeIndex < 0) startResumeIndex = 0;
                            _context.next = 13;
                            return processor.run(validateChunk, startResumeIndex, resumeIndex);

                           case 13:
                            _context.next = 24;
                            break;

                           case 15:
                            _context.prev = 15;
                            _context.t0 = _context["catch"](8);
                            (0, _debug2.default)("Validation failed, starting from scratch");
                            (0, _debug2.default)(" - Failed chunk index: " + _context.t0.chunkIndex);
                            (0, _debug2.default)(" - Old checksum: " + _context.t0.originalChecksum);
                            (0, _debug2.default)(" - New checksum: " + _context.t0.newChecksum);
                            _context.next = 23;
                            return processor.run(uploadChunk);

                           case 23:
                            return _context.abrupt("return");

                           case 24:
                            (0, _debug2.default)("Validation passed, resuming upload");
                            _context.next = 27;
                            return processor.run(uploadChunk, resumeIndex);

                           case 27:
                           case "end":
                            return _context.stop();
                          }
                        }
                      }, _callee, _this, [ [ 8, 15 ] ]);
                    }));
                    return function resumeUpload() {
                      return _ref2.apply(this, arguments);
                    };
                  }();
                  uploadChunk = function() {
                    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(checksum, state, index, chunk) {
                      var total, start, end, options, res;
                      return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                           case 0:
                            total = opts.file.size;
                            start = index * opts.chunkSize;
                            end = index * opts.chunkSize + chunk.byteLength - 1;
                            options = {
                              headers: {
                                "Content-Type": opts.contentType,
                                "Content-Range": "bytes " + start + "-" + end + "/" + total
                              },
                              onUploadProgress: function onUploadProgress(progressEvent) {
                                opts.onChunkUpload({
                                  totalBytes: total,
                                  uploadedBytes: start + progressEvent.loaded,
                                  chunkIndex: index,
                                  chunkLength: chunk.byteLength
                                });
                              },
                              validateStatus: false
                            };
                            (0, _debug2.default)("Uploading chunk " + index + ":");
                            (0, _debug2.default)(" - Chunk length: " + chunk.byteLength);
                            (0, _debug2.default)(" - Start: " + start);
                            (0, _debug2.default)(" - End: " + end);
                            _context3.next = 10;
                            return (0, _pRetry2.default)(_asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                              var current_res;
                              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                while (1) {
                                  switch (_context2.prev = _context2.next) {
                                   case 0:
                                    _context2.next = 2;
                                    return safePut(opts.url, chunk, options);

                                   case 2:
                                    current_res = _context2.sent;
                                    _context2.prev = 3;
                                    checkResponseStatus(current_res, opts, [ 200, 201, 308 ]);
                                    checkResponseHeaders(current_res, {
                                      index: index,
                                      end: end,
                                      checksum: checksum
                                    });
                                    _context2.next = 15;
                                    break;

                                   case 8:
                                    _context2.prev = 8;
                                    _context2.t0 = _context2["catch"](3);
                                    if (!(_context2.t0 instanceof errors.UrlNotFoundError)) {
                                      _context2.next = 14;
                                      break;
                                    }
                                    throw new _pRetry2.default.AbortError(_context2.t0);

                                   case 14:
                                    throw _context2.t0;

                                   case 15:
                                    return _context2.abrupt("return", current_res);

                                   case 16:
                                   case "end":
                                    return _context2.stop();
                                  }
                                }
                              }, _callee2, _this, [ [ 3, 8 ] ]);
                            })), {
                              retries: opts.retries
                            });

                           case 10:
                            res = _context3.sent;
                            _this.lastResult = res;
                            (0, _debug2.default)("Chunk upload succeeded, adding checksum " + checksum);
                            meta.addChecksum(index, checksum, state);
                            opts.onChunkUpload({
                              totalBytes: total,
                              uploadedBytes: end + 1,
                              chunkIndex: index,
                              chunkLength: chunk.byteLength
                            });

                           case 15:
                           case "end":
                            return _context3.stop();
                          }
                        }
                      }, _callee3, _this);
                    }));
                    return function uploadChunk(_x, _x2, _x3, _x4) {
                      return _ref3.apply(this, arguments);
                    };
                  }();
                  validateChunk = function() {
                    var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(newChecksum, _state, index) {
                      var originalChecksum, isChunkValid;
                      return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                          switch (_context4.prev = _context4.next) {
                           case 0:
                            originalChecksum = meta.getChecksum(index);
                            isChunkValid = originalChecksum === newChecksum;
                            if (isChunkValid) {
                              _context4.next = 5;
                              break;
                            }
                            meta.reset();
                            throw new errors.DifferentChunkError(index, originalChecksum, newChecksum);

                           case 5:
                           case "end":
                            return _context4.stop();
                          }
                        }
                      }, _callee4, _this);
                    }));
                    return function validateChunk(_x5, _x6, _x7) {
                      return _ref5.apply(this, arguments);
                    };
                  }();
                  getRemoteResumeIndex = function() {
                    var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
                      var options, res, header, range, bytesReceived;
                      return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) {
                          switch (_context5.prev = _context5.next) {
                           case 0:
                            options = {
                              headers: {
                                "Content-Range": "bytes */" + opts.file.size
                              },
                              validateStatus: false
                            };
                            (0, _debug2.default)("Retrieving upload status from GCS");
                            _context5.next = 4;
                            return safePut(opts.url, null, options);

                           case 4:
                            res = _context5.sent;
                            checkResponseStatus(res, opts, [ 308 ]);
                            header = res.headers["range"];
                            (0, _debug2.default)("Received upload status from GCS: " + header);
                            range = header.match(/(\d+?)-(\d+?)$/);
                            bytesReceived = parseInt(range[2]) + 1;
                            return _context5.abrupt("return", Math.floor(bytesReceived / opts.chunkSize));

                           case 11:
                           case "end":
                            return _context5.stop();
                          }
                        }
                      }, _callee5, _this);
                    }));
                    return function getRemoteResumeIndex() {
                      return _ref6.apply(this, arguments);
                    };
                  }();
                  if (!finished) {
                    _context6.next = 7;
                    break;
                  }
                  throw new errors.UploadAlreadyFinishedError();

                 case 7:
                  if (!(meta.isResumable() && meta.getFileSize() === opts.file.size)) {
                    _context6.next = 13;
                    break;
                  }
                  (0, _debug2.default)("Upload might be resumable");
                  _context6.next = 11;
                  return resumeUpload();

                 case 11:
                  _context6.next = 16;
                  break;

                 case 13:
                  (0, _debug2.default)("Upload not resumable, starting from scratch");
                  _context6.next = 16;
                  return processor.run(uploadChunk);

                 case 16:
                  (0, _debug2.default)("Upload complete, resetting meta");
                  meta.reset();
                  this.finished = true;
                  return _context6.abrupt("return", this.lastResult);

                 case 20:
                 case "end":
                  return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
          function start() {
            return _ref.apply(this, arguments);
          }
          return start;
        }()
      }, {
        key: "pause",
        value: function pause() {
          this.processor.pause();
          (0, _debug2.default)("Upload paused");
        }
      }, {
        key: "unpause",
        value: function unpause() {
          this.processor.unpause();
          (0, _debug2.default)("Upload unpaused");
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.processor.pause();
          this.meta.reset();
          (0, _debug2.default)("Upload cancelled");
        }
      } ]);
      return Upload;
    }();
    Upload.errors = errors$1;
    exports.default = Upload;
    function hexToBase64(hexstring) {
      return btoa(hexstring.match(/\w{2}/g).map(function(a) {
        return String.fromCharCode(parseInt(a, 16));
      }).join(""));
    }
    function checkResponseStatus(res, opts) {
      var allowed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var status = res.status;
      if (allowed.indexOf(status) > -1) {
        return true;
      }
      switch (status) {
       case 308:
        throw new errors.UploadIncompleteError();

       case 201:
       case 200:
        throw new errors.FileAlreadyUploadedError(opts.id, opts.url);

       case 404:
        throw new errors.UrlNotFoundError(opts.url);

       case 500:
       case 502:
       case 503:
       case 504:
        throw new errors.UploadFailedError(status);

       default:
        throw new errors.UnknownResponseError(res);
      }
    }
    function checkResponseHeaders(res, chunkInfo) {
      var headers = res.headers;
      var receivedMD5 = headers["x-goog-hash"] || headers["x-range-md5"];
      if (!receivedMD5) return;
      if (headers["x-goog-hash"] && chunkInfo.end + 1 === headers["x-goog-stored-content-length"] && receivedMD5.match(/md5=(.*)/)[1] !== hexToBase64(chunkInfo.checksum)) {
        throw new errors.DifferentChunkError(chunkInfo.index, hexToBase64(chunkInfo.checksum), receivedMD5);
      } else if (headers["range"]) {
        var range = headers["range"].match(/(\d+?)-(\d+?)$/);
        var bytesReceived = parseInt(range[2]);
        if (bytesReceived === chunkInfo.end && receivedMD5 !== chunkInfo.checksum) {
          throw new errors.DifferentChunkError(chunkInfo.index, chunkInfo.checksum, receivedMD5);
        }
      }
    }
  });
  var Upload = unwrapExports(Upload_1);
  var ResumableBlobUpload = function() {
    function ResumableBlobUpload(blob) {
      _classCallCheck(this, ResumableBlobUpload);
      this.blob = blob;
      this.file = blob.file;
      this.gcsBrowserUpload = new Upload({
        id: this.blob.attributes.key,
        url: this.blob.attributes.resumable_url,
        file: this.file,
        contentType: this.file.type
      });
    }
    _createClass(ResumableBlobUpload, [ {
      key: "create",
      value: function() {
        var _create = _asyncToGenerator(regeneratorRuntime.mark(function _callee(callback) {
          var headers, updateHeaders, csrfToken, response;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
               case 0:
                this.callback = callback;
                _context.prev = 1;
                _context.next = 4;
                return this.gcsBrowserUpload.start();

               case 4:
                headers = this.gcsBrowserUpload.lastResult.headers;
                updateHeaders = {
                  "Content-Type": "application/json",
                  Accept: "application/json"
                };
                csrfToken = getMetaValue("csrf-token");
                if (csrfToken != undefined) {
                  updateHeaders["X-CSRF-Token"] = csrfToken;
                }
                _context.next = 10;
                return fetch("/rails/active_storage/resumable_uploads/".concat(this.blob.attributes.key), {
                  method: "PUT",
                  headers: updateHeaders,
                  body: JSON.stringify({
                    blob: {
                      checksum: headers["x-goog-hash"].match("md5=(.*)")[1]
                    }
                  })
                });

               case 10:
                response = _context.sent;
                if (!response.ok) {
                  this.callback("Failed to update ".concat(this.blob.attributes.key, " blob checksum"));
                } else {
                  this.callback(null, this.gcsBrowserUpload.lastResult);
                }
                _context.next = 17;
                break;

               case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](1);
                this.requestDidError(_context.t0);

               case 17:
                _context.prev = 17;
                this.gcsBrowserUpload = null;
                return _context.finish(17);

               case 20:
               case "end":
                return _context.stop();
              }
            }
          }, _callee, this, [ [ 1, 14, 17, 20 ] ]);
        }));
        function create(_x) {
          return _create.apply(this, arguments);
        }
        return create;
      }()
    }, {
      key: "requestDidError",
      value: function requestDidError() {
        var status = !!this.gcsBrowserUpload.lastResult && this.gcsBrowserUpload.lastResult.status;
        this.callback('Error storing "'.concat(this.file.name, '". Status: ').concat(status));
      }
    } ]);
    return ResumableBlobUpload;
  }();
  var id$2 = 0;
  var ResumableUpload = function() {
    function ResumableUpload(file, url, delegate) {
      _classCallCheck(this, ResumableUpload);
      this.id = ++id$2;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }
    _createClass(ResumableUpload, [ {
      key: "create",
      value: function create(callback) {
        var _this = this;
        ResumableFileChecksum.create(this.file, function(error, checksum) {
          if (error) {
            callback(error);
            return;
          }
          var blob = new ResumableBlobRecord(_this.file, checksum, _this.url);
          notify$2(_this.delegate, "resumableUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function(error) {
            if (error) {
              callback(error);
            } else {
              var upload = new ResumableBlobUpload(blob);
              notify$2(_this.delegate, "resumableUploadWillStoreFileWithGcsBrowserUpload", upload.gcsBrowserUpload);
              upload.create(function(error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    } ]);
    return ResumableUpload;
  }();
  function notify$2(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }
      return object[methodName].apply(object, messages);
    }
  }
  var ResumableUploadController = function() {
    function ResumableUploadController(input, file) {
      _classCallCheck(this, ResumableUploadController);
      this.input = input;
      this.file = file;
      this.resumableUpload = new ResumableUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }
    _createClass(ResumableUploadController, [ {
      key: "start",
      value: function start(callback) {
        var _this = this;
        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.resumableUpload.create(function(error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);
            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }
          _this.dispatch("end");
          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;
        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.resumableUpload.id;
        return dispatchEvent(this.input, "resumable-upload:".concat(name), {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });
        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "resumableUploadWillCreateBlobWithXHR",
      value: function resumableUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "resumableUploadWillStoreFileWithGcsBrowserUpload",
      value: function resumableUploadWillStoreFileWithGcsBrowserUpload(gcsBrowserUpload) {
        var _this2 = this;
        this.dispatch("before-storage-request", {
          gcsBrowserUpload: gcsBrowserUpload
        });
        gcsBrowserUpload.opts.onChunkUpload = function(event) {
          _this2.uploadRequestDidProgress({
            lengthComputable: true,
            loaded: event.uploadedBytes,
            total: event.totalBytes
          });
        };
      }
    }, {
      key: "url",
      get: function get() {
        return this.input.getAttribute("data-resumable-upload-url");
      }
    } ]);
    return ResumableUploadController;
  }();
  var inputSelector = "input[type=file][data-resumable-upload-url]:not([disabled])";
  var ResumableUploadsController = function() {
    function ResumableUploadsController(form) {
      _classCallCheck(this, ResumableUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function(input) {
        return input.files.length;
      });
    }
    _createClass(ResumableUploadsController, [ {
      key: "start",
      value: function start(callback) {
        var _this = this;
        var controllers = this.createResumableUploadControllers();
        var startNextController = function startNextController() {
          var controller = controllers.shift();
          if (controller) {
            controller.start(function(error) {
              if (error) {
                callback(error);
                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();
            _this.dispatch("end");
          }
        };
        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createResumableUploadControllers",
      value: function createResumableUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function(input) {
          toArray(input.files).forEach(function(file) {
            var controller = new ResumableUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "resumable-uploads:".concat(name), {
          detail: detail
        });
      }
    } ]);
    return ResumableUploadsController;
  }();
  var processingAttribute = "data-resumable-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;
  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }
  function didClick(event) {
    var target = event.target;
    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }
  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }
  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }
  function handleFormSubmissionEvent(event) {
    var form = event.target;
    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }
    var controller = new ResumableUploadsController(form);
    var inputs = controller.inputs;
    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function(error) {
        form.removeAttribute(processingAttribute);
        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }
  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");
    if (button) {
      var _button = button, disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }
    submitButtonsByForm["delete"](form);
  }
  function disable(input) {
    input.disabled = true;
  }
  function enable(input) {
    input.disabled = false;
  }
  function autostart() {
    if (window.ActiveStorageResumable) {
      start();
    }
  }
  setTimeout(autostart, 1);
  exports.ResumableUpload = ResumableUpload;
  exports.start = start;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});
