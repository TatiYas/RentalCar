module.exports = [
"[project]/Desktop/Projects/RentalCar/node_modules/jiti/lib/jiti.cjs [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { createRequire } = __turbopack_context__.r("[externals]/node:module [external] (node:module, cjs)");
const _createJiti = __turbopack_context__.r("[project]/Desktop/Projects/RentalCar/node_modules/jiti/dist/jiti.cjs [postcss] (ecmascript)");
function onError(err) {
    throw err; /* ↓ Check stack trace ↓ */ 
}
const nativeImport = (id)=>Promise.resolve().then(()=>{
        const e = new Error("Cannot find module as expression is too dynamic");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    });
let _transform;
function lazyTransform(...args) {
    if (!_transform) {
        _transform = __turbopack_context__.r("[project]/Desktop/Projects/RentalCar/node_modules/jiti/dist/babel.cjs [postcss] (ecmascript)");
    }
    return _transform(...args);
}
function createJiti(id, opts = {}) {
    if (!opts.transform) {
        opts = {
            ...opts,
            transform: lazyTransform
        };
    }
    return _createJiti(id, opts, {
        onError,
        nativeImport,
        createRequire
    });
}
module.exports = createJiti;
module.exports.createJiti = createJiti;
}),
];

//# sourceMappingURL=6f1e8_jiti_lib_jiti_cjs_febbd7a8._.js.map