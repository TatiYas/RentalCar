(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Projects/RentalCar/components/Select/Select.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
});
}),
"[project]/Desktop/Projects/RentalCar/components/Select/Select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Select
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/RentalCar/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/RentalCar/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$Select$2f$Select$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/RentalCar/components/Select/Select.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/RentalCar/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const spritePath = "/sprite.svg";
function Select({ options, value: externalValue, placeholder = "Select...", onChange }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [internalValue, setInternalValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(externalValue || "");
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const value = externalValue !== undefined ? externalValue : internalValue;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Select.useEffect": ()=>{
            const handler = {
                "Select.useEffect.handler": (e)=>{
                    if (ref.current && !ref.current.contains(e.target)) {
                        setOpen(false);
                    }
                }
            }["Select.useEffect.handler"];
            document.addEventListener("click", handler);
            return ({
                "Select.useEffect": ()=>document.removeEventListener("click", handler)
            })["Select.useEffect"];
        }
    }["Select.useEffect"], []);
    const handleSelect = (val)=>{
        setInternalValue(val);
        onChange?.(val);
        setOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$Select$2f$Select$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterList,
                onClick: ()=>setOpen((prev)=>!prev),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: value || placeholder
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/RentalCar/components/Select/Select.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "16",
                        height: "16",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("block transform transition-transform duration-200", open ? "rotate-180" : "rotate-0"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("use", {
                            href: `${spritePath}#icon-up`
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projects/RentalCar/components/Select/Select.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/RentalCar/components/Select/Select.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/RentalCar/components/Select/Select.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$Select$2f$Select$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdown} ${open ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$Select$2f$Select$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].open : ""}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$Select$2f$Select$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdownList,
                    children: options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            onClick: ()=>handleSelect(opt),
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$Select$2f$Select$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdownItem} ${opt === value ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$Select$2f$Select$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selected : ""}`,
                            children: opt
                        }, opt, false, {
                            fileName: "[project]/Desktop/Projects/RentalCar/components/Select/Select.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/RentalCar/components/Select/Select.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/RentalCar/components/Select/Select.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/RentalCar/components/Select/Select.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(Select, "VWz1sZhCZXR7PzptRVFbqW7NiDg=");
_c = Select;
var _c;
__turbopack_context__.k.register(_c, "Select");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projects/RentalCar/components/FiltersBar/FiltersBar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
});
}),
"[project]/Desktop/Projects/RentalCar/lib/api/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nextServer",
    ()=>nextServer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Projects/RentalCar/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/RentalCar/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const nextServer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://localhost:3000/")
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projects/RentalCar/lib/api/clientApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchBrands",
    ()=>fetchBrands,
    "fetchCarById",
    ()=>fetchCarById,
    "fetchCars",
    ()=>fetchCars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/RentalCar/lib/api/api.ts [app-client] (ecmascript)");
;
async function fetchCarById(id) {
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextServer"].get(`/cars/${id}`);
    return res.data;
}
async function fetchBrands() {
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextServer"].get(`/brands`);
    return res.data;
}
async function fetchCars(filters, page = 1, limit = 12) {
    const params = new URLSearchParams({
        ...filters,
        page: page.toString(),
        limit: limit.toString()
    });
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextServer"].get(`/cars?${params.toString()}`);
    return res.data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projects/RentalCar/components/FiltersBar/FiltersBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FilterBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/RentalCar/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/RentalCar/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$Select$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/RentalCar/components/Select/Select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$FiltersBar$2f$FiltersBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/RentalCar/components/FiltersBar/FiltersBar.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/RentalCar/lib/api/clientApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const priceOptions = [
    "30",
    "40",
    "50",
    "60",
    "70",
    "80"
];
function FilterBar({ filters, onSearch }) {
    _s();
    const [brands, setBrands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [localFilters, setLocalFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(filters);
    const [debouncedFilters, setDebouncedFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(filters);
    // Синхронiзацiя с props
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FilterBar.useEffect": ()=>{
            setLocalFilters(filters);
            setDebouncedFilters(filters);
        }
    }["FilterBar.useEffect"], [
        filters
    ]);
    // бренд
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FilterBar.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBrands"])().then(setBrands);
        }
    }["FilterBar.useEffect"], []);
    // Debounce
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FilterBar.useEffect": ()=>{
            const timer = setTimeout({
                "FilterBar.useEffect.timer": ()=>{
                    onSearch(debouncedFilters);
                }
            }["FilterBar.useEffect.timer"], 500);
            return ({
                "FilterBar.useEffect": ()=>clearTimeout(timer)
            })["FilterBar.useEffect"];
        }
    }["FilterBar.useEffect"], [
        debouncedFilters,
        onSearch
    ]);
    const updateFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FilterBar.useCallback[updateFilter]": (key, value)=>{
            setLocalFilters({
                "FilterBar.useCallback[updateFilter]": (prev)=>({
                        ...prev,
                        [key]: value
                    })
            }["FilterBar.useCallback[updateFilter]"]);
            setDebouncedFilters({
                "FilterBar.useCallback[updateFilter]": (prev)=>({
                        ...prev,
                        [key]: value
                    })
            }["FilterBar.useCallback[updateFilter]"]);
        }
    }["FilterBar.useCallback[updateFilter]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$FiltersBar$2f$FiltersBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$FiltersBar$2f$FiltersBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].params,
                        children: "Car brand"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/RentalCar/components/FiltersBar/FiltersBar.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$Select$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        options: brands,
                        value: localFilters.brand,
                        onChange: (v)=>updateFilter("brand", v),
                        placeholder: "Choose a brand"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/RentalCar/components/FiltersBar/FiltersBar.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/RentalCar/components/FiltersBar/FiltersBar.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$FiltersBar$2f$FiltersBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].params,
                        children: "Price / 1 hour"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/RentalCar/components/FiltersBar/FiltersBar.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$Select$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        options: priceOptions,
                        value: localFilters.rentalPrice,
                        onChange: (v)=>updateFilter("rentalPrice", v),
                        placeholder: "Choose a price"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/RentalCar/components/FiltersBar/FiltersBar.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/RentalCar/components/FiltersBar/FiltersBar.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$FiltersBar$2f$FiltersBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].params,
                        children: "Car mileage / km"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/RentalCar/components/FiltersBar/FiltersBar.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$FiltersBar$2f$FiltersBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].doubleInput,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                placeholder: "From",
                                value: localFilters.minMileage || "",
                                onChange: (e)=>updateFilter("minMileage", e.target.value),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$FiltersBar$2f$FiltersBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputField,
                                type: "number",
                                min: "0"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/RentalCar/components/FiltersBar/FiltersBar.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$FiltersBar$2f$FiltersBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].separator
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/RentalCar/components/FiltersBar/FiltersBar.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                placeholder: "To",
                                value: localFilters.maxMileage || "",
                                onChange: (e)=>updateFilter("maxMileage", e.target.value),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$FiltersBar$2f$FiltersBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputField,
                                type: "number",
                                min: "0"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/RentalCar/components/FiltersBar/FiltersBar.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/RentalCar/components/FiltersBar/FiltersBar.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/RentalCar/components/FiltersBar/FiltersBar.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onSearch(localFilters),
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$FiltersBar$2f$FiltersBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                children: "Search"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/RentalCar/components/FiltersBar/FiltersBar.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/RentalCar/components/FiltersBar/FiltersBar.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(FilterBar, "Muiw/RP8MFbGrH2nvw3WoD+hkZ8=");
_c = FilterBar;
var _c;
__turbopack_context__.k.register(_c, "FilterBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projects/RentalCar/components/CarList/CarList.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
});
}),
"[project]/Desktop/Projects/RentalCar/lib/store/favorites.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFavoriteStore",
    ()=>useFavoriteStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/RentalCar/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/RentalCar/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const useFavoriteStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        favorites: [],
        toggleFavorite: (id)=>{
            const { favorites } = get();
            const isFav = favorites.includes(id);
            set({
                favorites: isFav ? favorites.filter((f)=>f !== id) : [
                    ...favorites,
                    id
                ]
            });
        },
        isFavorite: (id)=>get().favorites.includes(id),
        clearFavorites: ()=>set({
                favorites: []
            }),
        removeFavorite: (id)=>{
            set({
                favorites: get().favorites.filter((f)=>f !== id)
            });
        },
        addFavorite: (id)=>{
            const { favorites } = get();
            if (!favorites.includes(id)) {
                set({
                    favorites: [
                        ...favorites,
                        id
                    ]
                });
            }
        }
    }), {
    name: "favorites-store",
    partialize: (state)=>({
            favorites: state.favorites
        })
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projects/RentalCar/components/CarList/CarList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CarList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/RentalCar/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$CarList$2f$CarList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/RentalCar/components/CarList/CarList.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/RentalCar/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/RentalCar/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$lib$2f$store$2f$favorites$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/RentalCar/lib/store/favorites.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const spritePath = "/sprite.svg";
function getCityCountry(fullAddress) {
    const parts = fullAddress.split(",").map((part)=>part.trim());
    return parts.slice(-2).join(", ");
}
function CarList({ cars }) {
    _s();
    const toggleFavorite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$lib$2f$store$2f$favorites$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFavoriteStore"])({
        "CarList.useFavoriteStore[toggleFavorite]": (state)=>state.toggleFavorite
    }["CarList.useFavoriteStore[toggleFavorite]"]);
    const isFavorite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$lib$2f$store$2f$favorites$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFavoriteStore"])({
        "CarList.useFavoriteStore[isFavorite]": (state)=>state.isFavorite
    }["CarList.useFavoriteStore[isFavorite]"]);
    const handleFavorite = (carId)=>{
        toggleFavorite(carId);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$CarList$2f$CarList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
            children: cars.map((car)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$CarList$2f$CarList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$CarList$2f$CarList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imgContainer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: car.img,
                                    width: 276,
                                    height: 268,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$CarList$2f$CarList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carImage,
                                    alt: `${car.brand} ${car.model || "Car"}`
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/RentalCar/components/CarList/CarList.tsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$CarList$2f$CarList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].favouriteSvg} ${isFavorite(car.id) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$CarList$2f$CarList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fill : ""}`,
                                    onClick: ()=>handleFavorite(car.id),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("use", {
                                        href: `${spritePath}#icon-${isFavorite(car.id) ? "filled-" : ""}heart`
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/RentalCar/components/CarList/CarList.tsx",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/RentalCar/components/CarList/CarList.tsx",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Projects/RentalCar/components/CarList/CarList.tsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$CarList$2f$CarList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$CarList$2f$CarList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                car.brand,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$CarList$2f$CarList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].model,
                                                    children: car.model
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Projects/RentalCar/components/CarList/CarList.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 31
                                                }, this),
                                                ", ",
                                                car.year
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Projects/RentalCar/components/CarList/CarList.tsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "$",
                                                car.rentalPrice || "N/A"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Projects/RentalCar/components/CarList/CarList.tsx",
                                            lineNumber: 53,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Projects/RentalCar/components/CarList/CarList.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$CarList$2f$CarList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].info,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                getCityCountry(car.address),
                                                " | ",
                                                car.rentalCompany
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Projects/RentalCar/components/CarList/CarList.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                car.type,
                                                " | ",
                                                car.mileage ? `${new Intl.NumberFormat("uk-UA").format(car.mileage)} km` : "N/A"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Projects/RentalCar/components/CarList/CarList.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Projects/RentalCar/components/CarList/CarList.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Projects/RentalCar/components/CarList/CarList.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/catalog/${car.id}`,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$CarList$2f$CarList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                            children: "Read more"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projects/RentalCar/components/CarList/CarList.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this)
                    ]
                }, car.id, true, {
                    fileName: "[project]/Desktop/Projects/RentalCar/components/CarList/CarList.tsx",
                    lineNumber: 28,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/RentalCar/components/CarList/CarList.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/RentalCar/components/CarList/CarList.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(CarList, "JA+11SE5jPnMfgo4Oq1uWrIHWb4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$lib$2f$store$2f$favorites$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFavoriteStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$lib$2f$store$2f$favorites$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFavoriteStore"]
    ];
});
_c = CarList;
var _c;
__turbopack_context__.k.register(_c, "CarList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projects/RentalCar/app/catalog/CatalogPage.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "buttonLoad": "CatalogPage-module__nApFDG__buttonLoad",
  "section": "CatalogPage-module__nApFDG__section",
});
}),
"[project]/Desktop/Projects/RentalCar/lib/store/filter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFilterDraftStore",
    ()=>useFilterDraftStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/RentalCar/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/RentalCar/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const initialData = {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: ""
};
const useFilterDraftStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        draft: initialData,
        setDraft: (filter)=>set(()=>({
                    draft: filter
                }))
    }), {
    name: 'filters-draft',
    partialize: (state)=>({
            draft: state.draft
        })
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projects/RentalCar/app/catalog/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CatalogPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/RentalCar/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/RentalCar/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$FiltersBar$2f$FiltersBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/RentalCar/components/FiltersBar/FiltersBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$CarList$2f$CarList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/RentalCar/components/CarList/CarList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$app$2f$catalog$2f$CatalogPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/RentalCar/app/catalog/CatalogPage.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/RentalCar/lib/api/clientApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$lib$2f$store$2f$filter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/RentalCar/lib/store/filter.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function CatalogPage() {
    _s();
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        brand: "",
        rentalPrice: "",
        minMileage: "",
        maxMileage: ""
    });
    const { draft, setDraft } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$lib$2f$store$2f$filter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilterDraftStore"])();
    console.log(draft);
    const [cars, setCars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [hasMore, setHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const handleSearch = async (newFilters)=>{
        setDraft(newFilters);
        setFilters(newFilters);
        setPage(1);
        const filteredParams = Object.fromEntries(Object.entries(newFilters).filter(([_, value])=>value !== ""));
        setIsLoading(true);
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCars"])(filteredParams, 1);
        setCars(data.cars);
        setHasMore(data.totalPages > 1);
        setIsLoading(false);
    };
    const handleLoadMore = async ()=>{
        const nextPage = page + 1;
        const filteredParams = Object.fromEntries(Object.entries(filters).filter(([_, value])=>value !== ""));
        setIsLoading(true);
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCars"])(filteredParams, nextPage);
        setCars((prev)=>[
                ...prev,
                ...data.cars
            ]);
        setPage(nextPage);
        setHasMore(nextPage < data.totalPages);
        setIsLoading(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CatalogPage.useEffect": ()=>{
            setFilters(draft);
        }
    }["CatalogPage.useEffect"], [
        draft
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CatalogPage.useEffect": ()=>{
            const fetchInitial = {
                "CatalogPage.useEffect.fetchInitial": async ()=>{
                    setIsLoading(true);
                    const filteredParams = Object.fromEntries(Object.entries(filters).filter({
                        "CatalogPage.useEffect.fetchInitial.filteredParams": ([_, v])=>v !== ""
                    }["CatalogPage.useEffect.fetchInitial.filteredParams"]));
                    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCars"])(filteredParams, 1);
                    setCars(data.cars);
                    setPage(1);
                    setHasMore(data.totalPages > 1);
                    setIsLoading(false);
                }
            }["CatalogPage.useEffect.fetchInitial"];
            fetchInitial();
        }
    }["CatalogPage.useEffect"], [
        filters
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$app$2f$catalog$2f$CatalogPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$FiltersBar$2f$FiltersBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    filters: filters,
                    onSearch: handleSearch
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/RentalCar/app/catalog/page.tsx",
                    lineNumber: 85,
                    columnNumber: 7
                }, this),
                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$app$2f$catalog$2f$CatalogPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/RentalCar/app/catalog/page.tsx",
                    lineNumber: 86,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$components$2f$CarList$2f$CarList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    cars: cars
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/RentalCar/app/catalog/page.tsx",
                    lineNumber: 87,
                    columnNumber: 7
                }, this),
                hasMore && cars.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleLoadMore,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$app$2f$catalog$2f$CatalogPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonLoad,
                    children: "Load more"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/RentalCar/app/catalog/page.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projects/RentalCar/app/catalog/page.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/RentalCar/app/catalog/page.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_s(CatalogPage, "l1ADB1v00C6/XGauNKUNqjC4KuU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$RentalCar$2f$lib$2f$store$2f$filter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilterDraftStore"]
    ];
});
_c = CatalogPage;
var _c;
__turbopack_context__.k.register(_c, "CatalogPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Projects_RentalCar_beb82994._.js.map