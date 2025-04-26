// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9mu7C":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"8lqZg":[function(require,module,exports,__globalThis) {
var _appJs = require("./index-JS/app.js");
var _getCategoryApiJs = require("./index-JS/service/getCategoryApi.js");
var _createCetegoryListJs = require("./index-JS/createHtml/createCetegoryList.js");
var _changeCtagoryJs = require("./index-JS/operation/changeCtagory.js");
var _showMoreSupportJs = require("./index-JS/operation/showMoreSupport.js");
var _getBookapiJs = require("./index-JS/service/getBookapi.js");
var _createBookListJs = require("./index-JS/createHtml/createBookList.js");
var _loginModalJs = require("./index-JS/modal/loginModal.js");
var _phoneModalJs = require("./index-JS/modal/phoneModal.js");
var _buildHeaderJs = require("./index-JS/createHtml/buildHeader.js");
var _getAccountApiJs = require("./index-JS/service/getAccountApi.js");
var _postAccountJs = require("./index-JS/service/postAccount.js");

},{"./index-JS/app.js":"iuRpT","./index-JS/service/getCategoryApi.js":"5I8DQ","./index-JS/createHtml/createCetegoryList.js":"c6Xom","./index-JS/operation/changeCtagory.js":"l5bRC","./index-JS/operation/showMoreSupport.js":"9IVUQ","./index-JS/service/getBookapi.js":"hXANN","./index-JS/createHtml/createBookList.js":"g28R9","./index-JS/modal/loginModal.js":"cIiWt","./index-JS/modal/phoneModal.js":"euAHo","./index-JS/createHtml/buildHeader.js":"gglT4","./index-JS/service/getAccountApi.js":"1IBJS","./index-JS/service/postAccount.js":"2FPG4"}],"iuRpT":[function(require,module,exports,__globalThis) {
var _getCategoryApiJs = require("./service/getCategoryApi.js");
var _createCetegoryListJs = require("./createHtml/createCetegoryList.js");
var _createBookListJs = require("./createHtml/createBookList.js");
var _getBookapiJs = require("./service/getBookapi.js");
var _phoneModalJs = require("./modal/phoneModal.js");
var _buildHeaderJs = require("./createHtml/buildHeader.js");
const openButtonLoginInPhone = document.querySelector(".phone__open-button");
if (JSON.parse(localStorage.getItem("status")) === "login") {
    console.log("2");
    (0, _buildHeaderJs.buildHeader)(JSON.parse(localStorage.getItem("account")));
} else {
    console.log("1");
    localStorage.setItem("status", JSON.stringify("no login"));
}
getCategory();
function getCategory() {
    (0, _getCategoryApiJs.getCategoryApi)().then((data)=>{
        (0, _createCetegoryListJs.createCetegoryList)(data);
    });
}
(0, _getBookapiJs.getBookApi)('https://books-backend.p.goit.global/books/top-books').then((data)=>{
    (0, _createBookListJs.createBookList)(data, true);
});
openButtonLoginInPhone.addEventListener("click", ()=>{
    (0, _phoneModalJs.closeModal)();
});

},{"./service/getCategoryApi.js":"5I8DQ","./createHtml/createCetegoryList.js":"c6Xom","./createHtml/createBookList.js":"g28R9","./service/getBookapi.js":"hXANN","./modal/phoneModal.js":"euAHo","./createHtml/buildHeader.js":"gglT4"}],"5I8DQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCategoryApi", ()=>getCategoryApi);
const getCategoryApi = async ()=>{
    try {
        const result = await fetch(`https://books-backend.p.goit.global/books/category-list`).then((data)=>{
            return data.json();
        });
        return result;
    } catch (error) {
        return error;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"c6Xom":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createCetegoryList", ()=>createCetegoryList);
const cetegoryList = document.querySelector(".category__list");
function createCetegoryList(arr) {
    let html = "";
    html = arr.map((category)=>{
        return `
        <li class="category__item">
            <span class="category__span">${category.list_name}</span>
        </li>`;
    }).join("");
    cetegoryList.insertAdjacentHTML("beforeend", html);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g28R9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createBookList", ()=>createBookList);
const booksList = document.querySelector(".magazine");
function createBookList(arr, category = false) {
    let html = "";
    if (category === false) html = arr.map((obj)=>{
        return `
        <li class="magazine__item" id="${obj._id}">
            <img class="magazine__img" src="${obj.book_image}" alt="${obj.description}">
            <h3 class="magazine__book-name">${obj.title}</h3>
            <h4 class="magazine__book-author">${obj.author}</h4>
        </li>`;
    }).join("");
    else if (category === true) html = arr.map((obj)=>{
        return `
        <li class="magazine__item">
            <h2 class="magazine__type-title">${obj.list_name}</h2>
            <ul class="magazine__book-list">
                <li class="magazine__item" id="${obj.books[0]._id}">
                    <img class="magazine__img" src="${obj.books[0].book_image}" alt="1">
                    <h3 class="magazine__book-name">${obj.books[0].title}</h3>
                    <h4 class="magazine__book-author">${obj.books[0].author}</h4>
                </li>
                <li class="magazine__item" id="${obj.books[1]._id}">
                    <img class="magazine__img" src="${obj.books[1].book_image}" alt="1">
                    <h3 class="magazine__book-name">${obj.books[1].title}</h3>
                    <h4 class="magazine__book-author">${obj.books[1].author}</h4>
                </li>
                <li class="magazine__item" id="${obj.books[2]._id}">
                    <img class="magazine__img" src="${obj.books[2].book_image}" alt="1">
                    <h3 class="magazine__book-name">${obj.books[2].title}</h3>
                    <h4 class="magazine__book-author">${obj.books[2].author}</h4>
                </li>
                <li class="magazine__item" id="${obj.books[3]._id}">
                    <img class="magazine__img" src="${obj.books[3].book_image}" alt="1">
                    <h3 class="magazine__book-name">${obj.books[3].title}</h3>
                    <h4 class="magazine__book-author">${obj.books[3].author}</h4>
                </li>
                <li class="magazine__item" id="${obj.books[4]._id}">
                    <img class="magazine__img" src="${obj.books[4].book_image}" alt="1">
                    <h3 class="magazine__book-name">${obj.books[4].title}</h3>
                    <h4 class="magazine__book-author">${obj.books[4].author}</h4>
                </li>
            </ul>
            <button type="button" class="magazine__button">SEE MORE</button>
        </li>`;
    }).join("");
    booksList.innerHTML = html;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hXANN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getBookApi", ()=>getBookApi);
const getBookApi = async (api)=>{
    try {
        const result = await fetch(`${api}`).then((data)=>{
            return data.json();
        });
        return result;
    } catch (error) {
        return error;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"euAHo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "closeModal", ()=>closeModal);
const openButton = document.querySelector(".header__menu-button");
const closeButton = document.querySelector(".phone__close-button");
const bacdrop = document.querySelector(".phone-bacdrop");
openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
function openModal() {
    bacdrop.classList.remove("is-hidden");
    openButton.style.display = "none";
    closeButton.style.display = "block";
}
function closeModal() {
    bacdrop.classList.add("is-hidden");
    openButton.style.display = "block";
    closeButton.style.display = "none";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gglT4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildHeader", ()=>buildHeader);
const header = document.querySelector(".header");
function buildHeader(object) {
    const html = `<div class="container">
                <svg class="header__logo" width="109" height="28" viewBox="0 0 109 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_102_278)">
                    <path d="M0 2L12.2571 14.1286L24 26V2H0Z" fill="#F6F6F6"/>
                    <path d="M3.34285 5.17145L12.3 14.0429L20.7429 22.6572H3.34285V5.17145Z" fill="#F6F6F6"/>
                    <path d="M20.7997 22.7137L11.8425 13.8423L3.39967 5.22797H20.7997V22.7137Z" fill="#4F2EE8"/>
                    <path d="M6.94286 8.77142L11.7 13.5286L17.1429 18.9714H6.94286V8.77142Z" fill="#4F2EE8"/>
                    <path d="M6.94286 8.77142L11.7 13.5286L17.1429 18.9714V8.77142H6.94286Z" fill="#F6F6F6"/>
                    </g>
                    <path d="M41.702 10.733C41.702 8.663 40.172 7.49301 37.526 7.49301H32V20.363H37.832C40.496 20.363 42.206 19.085 42.206 16.601C42.206 14.675 41.054 13.685 39.704 13.451V13.415C40.766 13.055 41.702 12.317 41.702 10.733ZM34.142 12.821V9.31101H37.58C38.858 9.31101 39.56 9.941 39.56 11.075C39.56 12.209 38.984 12.821 37.454 12.821H34.142ZM34.142 14.423H37.904C39.254 14.423 40.064 15.161 40.064 16.475C40.064 17.681 39.506 18.545 37.67 18.545H34.142V14.423Z" fill="black"/>
                    <path d="M47.7018 20.633C44.8218 20.633 43.0758 18.635 43.0758 15.773C43.0758 12.911 44.8218 10.913 47.7018 10.913C50.5818 10.913 52.3278 12.911 52.3278 15.773C52.3278 18.635 50.5818 20.633 47.7018 20.633ZM47.7018 19.085C49.5018 19.085 50.4378 17.663 50.4378 15.773C50.4378 13.865 49.5018 12.461 47.7018 12.461C45.9018 12.461 44.9658 13.865 44.9658 15.773C44.9658 17.663 45.9018 19.085 47.7018 19.085Z" fill="black"/>
                    <path d="M57.774 20.633C54.894 20.633 53.148 18.635 53.148 15.773C53.148 12.911 54.894 10.913 57.774 10.913C60.654 10.913 62.4 12.911 62.4 15.773C62.4 18.635 60.654 20.633 57.774 20.633ZM57.774 19.085C59.574 19.085 60.51 17.663 60.51 15.773C60.51 13.865 59.574 12.461 57.774 12.461C55.974 12.461 55.038 13.865 55.038 15.773C55.038 17.663 55.974 19.085 57.774 19.085Z" fill="black"/>
                    <path d="M63.7063 7.49301V20.363H65.5963V17.033L66.8743 15.827L69.7723 20.363H72.0403L68.1703 14.585L71.6623 11.165H69.3403L65.5963 14.855V7.49301H63.7063Z" fill="black"/>
                    <path d="M76.5964 14.801C75.2644 14.495 74.2384 14.423 74.2384 13.487C74.2384 12.839 74.8504 12.407 75.9844 12.407C77.4604 12.407 77.8204 13.145 77.9464 13.865H79.7824C79.6564 12.263 78.4684 10.913 75.9664 10.913C73.6624 10.913 72.3304 12.119 72.3304 13.631C72.3304 15.719 74.3104 16.007 75.7684 16.349C77.1184 16.673 78.2164 16.763 78.2164 17.915C78.2164 18.491 77.6584 19.139 76.3444 19.139C74.4004 19.139 73.9684 18.293 73.8784 17.303H72.0424C72.1324 19.247 73.4104 20.633 76.3804 20.633C78.6124 20.633 80.1244 19.535 80.1244 17.771C80.1244 15.575 78.2884 15.197 76.5964 14.801Z" fill="black"/>
                    <path d="M86.3039 10.913C84.7559 10.913 83.8019 11.633 83.3159 12.353H83.2799V7.49301H81.3899V20.363H83.2799V14.765C83.2799 13.397 84.2699 12.515 85.6559 12.515C86.9699 12.515 87.4919 13.307 87.4919 14.549V20.363H89.3999V14.009C89.3999 11.903 88.0499 10.913 86.3039 10.913Z" fill="black"/>
                    <path d="M95.1962 19.085C93.5222 19.085 92.5322 17.807 92.5322 16.259H99.5882C99.5882 12.983 98.1302 10.913 95.1602 10.913C92.3882 10.913 90.6422 12.785 90.6422 15.773C90.6422 18.653 92.3882 20.633 95.2502 20.633C97.6082 20.633 98.9762 19.301 99.4442 17.555H97.5542C97.3922 18.113 96.7622 19.085 95.1962 19.085ZM95.1602 12.407C96.6902 12.407 97.6982 13.433 97.6982 14.855H92.5322C92.5322 13.433 93.6302 12.407 95.1602 12.407Z" fill="black"/>
                    <path d="M100.92 7.49301V20.363H102.828V7.49301H100.92Z" fill="black"/>
                    <path d="M109.001 9.04101V7.49301C108.623 7.421 108.209 7.367 107.741 7.367C106.229 7.367 105.401 8.05101 105.401 9.99501V11.165H104.087V12.713H105.401V20.363H107.309V12.713H109.001V11.165H107.309V10.157C107.309 9.11301 107.777 8.98701 109.001 9.04101Z" fill="black"/>
                    <defs>
                    <clipPath id="clip0_102_278">
                    <rect width="24" height="24" fill="white" transform="translate(0 2)"/>
                    </clipPath>
                    </defs>
                </svg>
            <ul class="header__nav-list">
                <li class="header__nav-item active-nav-item">
                    <a href="./index.html" class="header__nav-link active-nav-link">Home</a>
                </li>
                <li class="header__nav-item">
                    <a class="header__nav-link" href="./basket.html">Shopping list</a>
                    <svg class="header__nav-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15.8333 5.83335H13.3333V5.00002C13.3333 4.11596 12.9821 3.26812 12.357 2.643C11.7319 2.01788 10.884 1.66669 9.99999 1.66669C9.11594 1.66669 8.26809 2.01788 7.64297 2.643C7.01785 3.26812 6.66666 4.11596 6.66666 5.00002V5.83335H4.16666C3.94565 5.83335 3.73369 5.92115 3.57741 6.07743C3.42113 6.23371 3.33333 6.44567 3.33333 6.66669V15.8334C3.33333 16.4964 3.59672 17.1323 4.06556 17.6011C4.5344 18.07 5.17029 18.3334 5.83333 18.3334H14.1667C14.8297 18.3334 15.4656 18.07 15.9344 17.6011C16.4033 17.1323 16.6667 16.4964 16.6667 15.8334V6.66669C16.6667 6.44567 16.5789 6.23371 16.4226 6.07743C16.2663 5.92115 16.0543 5.83335 15.8333 5.83335ZM8.33333 5.00002C8.33333 4.55799 8.50892 4.13407 8.82148 3.82151C9.13404 3.50895 9.55796 3.33335 9.99999 3.33335C10.442 3.33335 10.8659 3.50895 11.1785 3.82151C11.4911 4.13407 11.6667 4.55799 11.6667 5.00002V5.83335H8.33333V5.00002ZM15 15.8334C15 16.0544 14.9122 16.2663 14.7559 16.4226C14.5996 16.5789 14.3877 16.6667 14.1667 16.6667H5.83333C5.61231 16.6667 5.40035 16.5789 5.24407 16.4226C5.08779 16.2663 4.99999 16.0544 4.99999 15.8334V7.50002H6.66666V8.33335C6.66666 8.55437 6.75446 8.76633 6.91074 8.92261C7.06702 9.07889 7.27898 9.16669 7.49999 9.16669C7.72101 9.16669 7.93297 9.07889 8.08925 8.92261C8.24553 8.76633 8.33333 8.55437 8.33333 8.33335V7.50002H11.6667V8.33335C11.6667 8.55437 11.7545 8.76633 11.9107 8.92261C12.067 9.07889 12.279 9.16669 12.5 9.16669C12.721 9.16669 12.933 9.07889 13.0892 8.92261C13.2455 8.76633 13.3333 8.55437 13.3333 8.33335V7.50002H15V15.8334Z" fill="#111111"/>
                    </svg>
                </li>
            </ul>
            <label class="header__switch">
                <input class="header__switch-input" type="checkbox">
                <span class="header__slider header__round"></span>
            </label>
            <button class="header__menu-button" type="button">
                <svg class="header__menu-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M19.8333 11.6667H3.5" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M24.5 7H3.5" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M24.5 16.3333H3.5" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.8333 21H3.5" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button class="phone__close-button" type="button">   
                <svg class="phone__close-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M21 7L7 21M7 7L21 21" stroke="#111111" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="header__account-div">
                <div class="header__account-avatar-div">
                    <svg class="header__account-avatar" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <path d="M3.16663 17.4166C3.16663 15.7369 3.83389 14.126 5.02162 12.9383C6.20935 11.7506 7.82025 11.0833 9.49996 11.0833C11.1797 11.0833 12.7906 11.7506 13.9783 12.9383C15.166 14.126 15.8333 15.7369 15.8333 17.4166H3.16663ZM9.49996 10.2916C6.87558 10.2916 4.74996 8.166 4.74996 5.54163C4.74996 2.91725 6.87558 0.791626 9.49996 0.791626C12.1243 0.791626 14.25 2.91725 14.25 5.54163C14.25 8.166 12.1243 10.2916 9.49996 10.2916Z" fill="#4F2EE8"/>
                    </svg>
                </div>
                <span class="header__account-name">${object.name}</span>
                <button type="button" class="header__account-button">
                    <svg class="header__account-icon" xmlns="http://www.w3.org/2000/svg" width="23" height="26" viewBox="0 0 23 26" fill="none">
                        <path d="M4.79175 9.75H18.2084L12.1776 16.5674C11.9979 16.7705 11.7542 16.8846 11.5001 16.8846C11.246 16.8846 11.0023 16.7705 10.8225 16.5674L4.79175 9.75Z" fill="white"/>
                    </svg>
                </button>
            </div>
            <button class="header__exit-button" type="button">
                Log out
                <svg class="header__exit-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3.33325 10H16.6666M16.6666 10L11.6666 5M16.6666 10L11.6666 15" stroke="#EAC645" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>`;
    header.innerHTML = html;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l5bRC":[function(require,module,exports,__globalThis) {
var _getBookapi = require("../service/getBookapi");
var _createBookList = require("../createHtml/createBookList");
const categoryList = document.querySelector(".category__list");
const categoryTitle = document.querySelector(".shop_title");
const booksList = document.querySelector(".magazine__book-list");
categoryList.addEventListener("click", changeCategory);
function changeCategory(event) {
    const element = event.target;
    if (element.classList.contains("active")) return;
    else if (element.parentNode.classList.contains("category__item") === false) return;
    else if (element.textContent === "All categories") {
        const activeCategory = document.querySelector(".active");
        activeCategory.classList.remove("active");
        element.classList.add("active");
        categoryTitle.innerHTML = "Best Sellers <span class='shop_title-purpure'>magazine</span>";
        (0, _getBookapi.getBookApi)('https://books-backend.p.goit.global/books/top-books').then((data)=>{
            (0, _createBookList.createBookList)(data, true);
        });
    } else {
        const activeCategory = document.querySelector(".active");
        activeCategory.classList.remove("active");
        element.classList.add("active");
        const text = element.textContent.split(" ");
        categoryTitle.innerHTML = `${text.slice(0, -1).join(" ")} <span class="shop_title-purpure">${text.at(-1)}</span>`;
        (0, _getBookapi.getBookApi)(`https://books-backend.p.goit.global/books/category?category=${element.textContent}`).then((data)=>{
            (0, _createBookList.createBookList)(data);
            console.log(data);
        });
    }
}

},{"../service/getBookapi":"hXANN","../createHtml/createBookList":"g28R9"}],"9IVUQ":[function(require,module,exports,__globalThis) {
const fonds = document.querySelectorAll(".support__item");
const showeButton = document.querySelector(".support__scroll-button");
showeButton.addEventListener("click", showeMoreSupports);
function showeMoreSupports() {
    let count = 0;
    fonds.forEach((element)=>{
        if (count <= 2) element.classList.toggle("no-showe");
        else if (count > 5) element.classList.toggle("no-showe");
        count += 1;
    });
    if (fonds[0].classList.contains("no-showe")) showeButton.style.transform = "translate(-50%, 0%) rotate(0deg)";
    else showeButton.style.transform = "translate(-50%, 0%) rotate(180deg)";
}

},{}],"cIiWt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "closeModal", ()=>closeModal);
parcelHelpers.export(exports, "submitInfo", ()=>submitInfo);
var _postAccount = require("../service/postAccount");
var _getAccountApi = require("../service/getAccountApi");
var _buildHeader = require("../createHtml/buildHeader");
const closeButton = document.querySelector(".login-modal__close-button");
const openButtonInPhone = document.querySelector(".phone__open-button");
const openButtonInDesktop = document.querySelector(".header__open-button");
const submitButton = document.querySelector(".login-modal__submit-button");
const bacdrop = document.querySelector(".login-modal-bacdrop");
const modalTypeButtons = document.querySelector(".login-modal__change-type");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
openButtonInPhone.addEventListener("click", openModal);
openButtonInDesktop.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
submitButton.addEventListener("click", submitInfo);
modalTypeButtons.addEventListener("click", changeModalType);
let modalType = "sing up";
function openModal() {
    bacdrop.classList.remove("is-hidden");
}
function closeModal() {
    bacdrop.classList.add("is-hidden");
}
function changeModalType(event) {
    const element = event.target;
    const activeModalButton = document.querySelector(".active-modal");
    if (element === activeModalButton) return;
    else if (element !== activeModalButton) {
        element.classList.add("active-modal");
        activeModalButton.classList.remove("active-modal");
        modalType = element.id;
        submitButton.textContent = element.id;
    }
}
function submitInfo(event) {
    event.preventDefault();
    if (modalType === "sing up") {
        const newAcount = {
            name: `${nameInput.value}`,
            email: `${emailInput.value}`,
            avatar: "",
            cards: [],
            password: `${passwordInput.value}`
        };
        (0, _postAccount.postAccount)(newAcount);
        localStorage.setItem("account", JSON.stringify(newAcount));
        localStorage.setItem("status", JSON.stringify("login"));
        (0, _buildHeader.buildHeader)(JSON.parse(localStorage.getItem("account")));
        closeModal();
        return;
    } else if (modalType === "sing in") (0, _getAccountApi.getAccount)(nameInput.value, emailInput.value).then((data)=>{
        const account = data[0];
        if (passwordInput.value === account.password) {
            localStorage.setItem("account", JSON.stringify(account));
            localStorage.setItem("status", JSON.stringify("login"));
            (0, _buildHeader.buildHeader)(JSON.parse(localStorage.getItem("account")));
            closeModal();
        } else return;
    });
}

},{"../service/postAccount":"2FPG4","../service/getAccountApi":"1IBJS","../createHtml/buildHeader":"gglT4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2FPG4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "postAccount", ()=>postAccount);
const postAccount = async (account)=>{
    try {
        const opinions = {
            method: "POST",
            body: JSON.stringify(account),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        };
        const posts = await fetch("https://67a8ab426e9548e44fc1adc4.mockapi.io/projects/accounts", opinions).then((data)=>{
            return posts;
        });
    } catch (error) {
        return error;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1IBJS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAccount", ()=>getAccount);
const getAccount = async (name, email)=>{
    // console.log(name, email)
    try {
        const account = await fetch(`https://67a8ab426e9548e44fc1adc4.mockapi.io/projects/accounts?name=${name}&email=${email}`).then((data)=>{
            return data.json();
        });
        return account;
    } catch (error) {
        return error;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["9mu7C","8lqZg"], "8lqZg", "parcelRequire94c2")

//# sourceMappingURL=index.975ef6c8.js.map
