"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Particle/ParticlesData.tsx":
/*!***********************************************!*\
  !*** ./components/Particle/ParticlesData.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ParticlesData\": function() { return /* binding */ ParticlesData; }\n/* harmony export */ });\n/* harmony import */ var _Users_bagas_Documents_GitHub_blackwolf_inc_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_bagas_Documents_GitHub_blackwolf_inc_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_bagas_Documents_GitHub_blackwolf_inc_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_particles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-particles */ \"./node_modules/react-particles/esm/index.js\");\n/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsparticles */ \"./node_modules/tsparticles/esm/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n // if you are going to use `loadFull`, install the \"tsparticles\" package too.\n// import styles from \"../styles/Page.module.css\";\nvar ParticlesData = function() {\n    var particlesInit = function() {\n        var _ref = _asyncToGenerator(_Users_bagas_Documents_GitHub_blackwolf_inc_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(main) {\n            return _Users_bagas_Documents_GitHub_blackwolf_inc_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,tsparticles__WEBPACK_IMPORTED_MODULE_3__.loadFull)(main);\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function particlesInit(main) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var particlesOptions = {\n        background: {\n            color: {\n                value: \"transparent\"\n            }\n        },\n        fpsLimit: 120,\n        interactivity: {\n            events: {\n                onClick: {\n                    enable: false,\n                    mode: \"push\"\n                },\n                onHover: {\n                    enable: false,\n                    mode: \"repulse\"\n                },\n                resize: true\n            },\n            modes: {\n                bubble: {\n                    distance: 400,\n                    duration: 2,\n                    opacity: 0.8,\n                    size: 400\n                },\n                push: {\n                    quantity: 0\n                },\n                repulse: {\n                    distance: 200,\n                    duration: 0.4\n                }\n            }\n        },\n        fullScreen: {\n            enable: false,\n            zIndex: 0\n        },\n        particles: {\n            color: {\n                value: \"#ffffff\"\n            },\n            links: {\n                color: \"#ffffff\",\n                distance: 170,\n                enable: true,\n                opacity: 0.2,\n                width: 1\n            },\n            collisions: {\n                enable: false\n            },\n            move: {\n                direction: \"bottom\",\n                enable: true,\n                outMode: \"out\",\n                random: false,\n                speed: 3,\n                straight: false\n            },\n            number: {\n                density: {\n                    enable: true,\n                    area: 800\n                },\n                value: 30\n            },\n            opacity: {\n                value: 1\n            },\n            shape: {\n                type: [\n                    \"image\"\n                ],\n                image: {\n                    src: \"https://www.pngall.com/wp-content/uploads/10/Binance-Coin-Crypto-Logo-PNG-Background.png\"\n                }\n            },\n            size: {\n                value: {\n                    min: 10,\n                    max: 25\n                }\n            }\n        },\n        detectRetina: true\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_particles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        className: \"absolute h-[94svh] w-full \",\n        init: particlesInit,\n        options: particlesOptions\n    }, void 0, false, {\n        fileName: \"/Users/bagas/Documents/GitHub/blackwolf-inc/components/Particle/ParticlesData.tsx\",\n        lineNumber: 105,\n        columnNumber: 7\n    }, _this);\n};\n_c = ParticlesData;\nvar _c;\n$RefreshReg$(_c, \"ParticlesData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhcnRpY2xlL1BhcnRpY2xlc0RhdGEudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDRCxDQUFDLDZFQUE2RTtBQUVySCxrREFBa0Q7QUFJM0MsSUFBTUUsYUFBYSxHQUFHLFdBQU07SUFFakMsSUFBTUMsYUFBYTttQkFBRywwTEFBT0MsSUFBWSxFQUFLOzs7OzsrQkFJdENILHFEQUFRLENBQUNHLElBQUksQ0FBQzs7Ozs7O1NBQ3ZCO3dCQUxPRCxhQUFhLENBQVVDLElBQVk7OztPQUsxQztJQUdELElBQU1DLGdCQUFnQixHQUFHO1FBQ3ZCQyxVQUFVLEVBQUU7WUFDVkMsS0FBSyxFQUFFO2dCQUNMQyxLQUFLLEVBQUUsYUFBYTthQUNyQjtTQUNGO1FBQ0RDLFFBQVEsRUFBRSxHQUFHO1FBQ2JDLGFBQWEsRUFBRTtZQUNiQyxNQUFNLEVBQUU7Z0JBQ05DLE9BQU8sRUFBRTtvQkFDUEMsTUFBTSxFQUFFLEtBQUs7b0JBQ2JDLElBQUksRUFBRSxNQUFNO2lCQUNiO2dCQUNEQyxPQUFPLEVBQUU7b0JBQ1BGLE1BQU0sRUFBRSxLQUFLO29CQUNiQyxJQUFJLEVBQUUsU0FBUztpQkFDaEI7Z0JBQ0RFLE1BQU0sRUFBRSxJQUFJO2FBQ2I7WUFDREMsS0FBSyxFQUFFO2dCQUNMQyxNQUFNLEVBQUU7b0JBQ05DLFFBQVEsRUFBRSxHQUFHO29CQUNiQyxRQUFRLEVBQUUsQ0FBQztvQkFDWEMsT0FBTyxFQUFFLEdBQUc7b0JBQ1pDLElBQUksRUFBRSxHQUFHO2lCQUNWO2dCQUNEQyxJQUFJLEVBQUU7b0JBQ0pDLFFBQVEsRUFBRSxDQUFDO2lCQUNaO2dCQUNEQyxPQUFPLEVBQUU7b0JBQ1BOLFFBQVEsRUFBRSxHQUFHO29CQUNiQyxRQUFRLEVBQUUsR0FBRztpQkFDZDthQUNGO1NBQ0Y7UUFDRE0sVUFBVSxFQUFFO1lBQ1ZiLE1BQU0sRUFBRSxLQUFLO1lBQ2JjLE1BQU0sRUFBRSxDQUFDO1NBQ1Y7UUFDREMsU0FBUyxFQUFFO1lBQ1RyQixLQUFLLEVBQUU7Z0JBQ0xDLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0RxQixLQUFLLEVBQUU7Z0JBQ0x0QixLQUFLLEVBQUUsU0FBUztnQkFDaEJZLFFBQVEsRUFBRSxHQUFHO2dCQUNiTixNQUFNLEVBQUUsSUFBSTtnQkFDWlEsT0FBTyxFQUFFLEdBQUc7Z0JBQ1pTLEtBQUssRUFBRSxDQUFDO2FBQ1Q7WUFDREMsVUFBVSxFQUFFO2dCQUNWbEIsTUFBTSxFQUFFLEtBQUs7YUFDZDtZQUNEbUIsSUFBSSxFQUFFO2dCQUNKQyxTQUFTLEVBQUUsUUFBUTtnQkFDbkJwQixNQUFNLEVBQUUsSUFBSTtnQkFDWnFCLE9BQU8sRUFBRSxLQUFLO2dCQUNkQyxNQUFNLEVBQUUsS0FBSztnQkFDYkMsS0FBSyxFQUFFLENBQUM7Z0JBQ1JDLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1lBQ0RDLE1BQU0sRUFBRTtnQkFDTkMsT0FBTyxFQUFFO29CQUNQMUIsTUFBTSxFQUFFLElBQUk7b0JBQ1oyQixJQUFJLEVBQUUsR0FBRztpQkFDVjtnQkFDRGhDLEtBQUssRUFBRSxFQUFFO2FBQ1Y7WUFDRGEsT0FBTyxFQUFFO2dCQUNQYixLQUFLLEVBQUUsQ0FBQzthQUNUO1lBQ0RpQyxLQUFLLEVBQUU7Z0JBQ0xDLElBQUksRUFBRTtvQkFBQyxPQUFPO2lCQUFDO2dCQUNmQyxLQUFLLEVBQUU7b0JBQ0hDLEdBQUcsRUFBRSwwRkFBMEY7aUJBRWhHO2FBQ0o7WUFFRHRCLElBQUksRUFBRTtnQkFDSmQsS0FBSyxFQUFFO29CQUFFcUMsR0FBRyxFQUFFLEVBQUU7b0JBQUVDLEdBQUcsRUFBRSxFQUFFO2lCQUFFO2FBQzVCO1NBQ0Y7UUFDSEMsWUFBWSxFQUFFLElBQUk7S0FDakI7SUFFRCxxQkFDTSw4REFBQy9DLHVEQUFTO1FBQUNnRCxTQUFTLEVBQUUsNEJBQTRCO1FBQUdDLElBQUksRUFBRTlDLGFBQWE7UUFBRytDLE9BQU8sRUFBRTdDLGdCQUFnQjs7Ozs7YUFBSSxDQUM1RztDQUVEO0FBcEdZSCxLQUFBQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGFydGljbGUvUGFydGljbGVzRGF0YS50c3g/ODUyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFydGljbGVzIGZyb20gXCJyZWFjdC1wYXJ0aWNsZXNcIjtcbmltcG9ydCB7IGxvYWRGdWxsIH0gZnJvbSBcInRzcGFydGljbGVzXCI7IC8vIGlmIHlvdSBhcmUgZ29pbmcgdG8gdXNlIGBsb2FkRnVsbGAsIGluc3RhbGwgdGhlIFwidHNwYXJ0aWNsZXNcIiBwYWNrYWdlIHRvby5cbmltcG9ydCB0eXBlIHsgRW5naW5lIH0gZnJvbSBcInRzcGFydGljbGVzLWVuZ2luZVwiO1xuLy8gaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1BhZ2UubW9kdWxlLmNzc1wiO1xuXG5cblxuZXhwb3J0IGNvbnN0IFBhcnRpY2xlc0RhdGEgPSAoKSA9PiB7XG5cbiAgY29uc3QgcGFydGljbGVzSW5pdCA9IGFzeW5jIChtYWluOiBFbmdpbmUpID0+IHtcbiAgICAvLyB5b3UgY2FuIGluaXRpYWxpemUgdGhlIHRzUGFydGljbGVzIGluc3RhbmNlIChtYWluKSBoZXJlLCBhZGRpbmcgY3VzdG9tIHNoYXBlcyBvciBwcmVzZXRzXG4gICAgLy8gdGhpcyBsb2FkcyB0aGUgdHNwYXJ0aWNsZXMgcGFja2FnZSBidW5kbGUsIGl0J3MgdGhlIGVhc2llc3QgbWV0aG9kIGZvciBnZXR0aW5nIGV2ZXJ5dGhpbmcgcmVhZHlcbiAgICAvLyBzdGFydGluZyBmcm9tIHYyIHlvdSBjYW4gYWRkIG9ubHkgdGhlIGZlYXR1cmVzIHlvdSBuZWVkIHJlZHVjaW5nIHRoZSBidW5kbGUgc2l6ZVxuICAgIGF3YWl0IGxvYWRGdWxsKG1haW4pXG59O1xuXG5cbmNvbnN0IHBhcnRpY2xlc09wdGlvbnMgPSB7XG4gIGJhY2tncm91bmQ6IHtcbiAgICBjb2xvcjoge1xuICAgICAgdmFsdWU6IFwidHJhbnNwYXJlbnRcIixcbiAgICB9LFxuICB9LFxuICBmcHNMaW1pdDogMTIwLFxuICBpbnRlcmFjdGl2aXR5OiB7XG4gICAgZXZlbnRzOiB7XG4gICAgICBvbkNsaWNrOiB7XG4gICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgIG1vZGU6IFwicHVzaFwiLFxuICAgICAgfSxcbiAgICAgIG9uSG92ZXI6IHtcbiAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgbW9kZTogXCJyZXB1bHNlXCIsXG4gICAgICB9LFxuICAgICAgcmVzaXplOiB0cnVlLFxuICAgIH0sXG4gICAgbW9kZXM6IHtcbiAgICAgIGJ1YmJsZToge1xuICAgICAgICBkaXN0YW5jZTogNDAwLFxuICAgICAgICBkdXJhdGlvbjogMixcbiAgICAgICAgb3BhY2l0eTogMC44LFxuICAgICAgICBzaXplOiA0MDAsXG4gICAgICB9LFxuICAgICAgcHVzaDoge1xuICAgICAgICBxdWFudGl0eTogMCxcbiAgICAgIH0sXG4gICAgICByZXB1bHNlOiB7XG4gICAgICAgIGRpc3RhbmNlOiAyMDAsXG4gICAgICAgIGR1cmF0aW9uOiAwLjQsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGZ1bGxTY3JlZW46IHtcbiAgICBlbmFibGU6IGZhbHNlLFxuICAgIHpJbmRleDogMFxuICB9LFxuICBwYXJ0aWNsZXM6IHtcbiAgICBjb2xvcjoge1xuICAgICAgdmFsdWU6IFwiI2ZmZmZmZlwiLFxuICAgIH0sXG4gICAgbGlua3M6IHtcbiAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgIGRpc3RhbmNlOiAxNzAsXG4gICAgICBlbmFibGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAwLjIsXG4gICAgICB3aWR0aDogMSxcbiAgICB9LFxuICAgIGNvbGxpc2lvbnM6IHtcbiAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgfSxcbiAgICBtb3ZlOiB7XG4gICAgICBkaXJlY3Rpb246IFwiYm90dG9tXCIsXG4gICAgICBlbmFibGU6IHRydWUsXG4gICAgICBvdXRNb2RlOiBcIm91dFwiLFxuICAgICAgcmFuZG9tOiBmYWxzZSxcbiAgICAgIHNwZWVkOiAzLFxuICAgICAgc3RyYWlnaHQ6IGZhbHNlLFxuICAgIH0sXG4gICAgbnVtYmVyOiB7XG4gICAgICBkZW5zaXR5OiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgYXJlYTogODAwLFxuICAgICAgfSxcbiAgICAgIHZhbHVlOiAzMCxcbiAgICB9LFxuICAgIG9wYWNpdHk6IHtcbiAgICAgIHZhbHVlOiAxLFxuICAgIH0sXG4gICAgc2hhcGU6IHtcbiAgICAgIHR5cGU6IFtcImltYWdlXCJdLFxuICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly93d3cucG5nYWxsLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMTAvQmluYW5jZS1Db2luLUNyeXB0by1Mb2dvLVBORy1CYWNrZ3JvdW5kLnBuZ1wiLFxuICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIHNpemU6IHtcbiAgICAgIHZhbHVlOiB7IG1pbjogMTAsIG1heDogMjUgfVxuICAgIH1cbiAgfSxcbmRldGVjdFJldGluYTogdHJ1ZSxcbn1cblxucmV0dXJuIChcbiAgICAgIDxQYXJ0aWNsZXMgY2xhc3NOYW1lPXtcImFic29sdXRlIGgtWzk0c3ZoXSB3LWZ1bGwgXCIgfSBpbml0PXtwYXJ0aWNsZXNJbml0fSAgb3B0aW9ucz17cGFydGljbGVzT3B0aW9uc30gLz5cbik7XG5cbn1cbiJdLCJuYW1lcyI6WyJQYXJ0aWNsZXMiLCJsb2FkRnVsbCIsIlBhcnRpY2xlc0RhdGEiLCJwYXJ0aWNsZXNJbml0IiwibWFpbiIsInBhcnRpY2xlc09wdGlvbnMiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJ2YWx1ZSIsImZwc0xpbWl0IiwiaW50ZXJhY3Rpdml0eSIsImV2ZW50cyIsIm9uQ2xpY2siLCJlbmFibGUiLCJtb2RlIiwib25Ib3ZlciIsInJlc2l6ZSIsIm1vZGVzIiwiYnViYmxlIiwiZGlzdGFuY2UiLCJkdXJhdGlvbiIsIm9wYWNpdHkiLCJzaXplIiwicHVzaCIsInF1YW50aXR5IiwicmVwdWxzZSIsImZ1bGxTY3JlZW4iLCJ6SW5kZXgiLCJwYXJ0aWNsZXMiLCJsaW5rcyIsIndpZHRoIiwiY29sbGlzaW9ucyIsIm1vdmUiLCJkaXJlY3Rpb24iLCJvdXRNb2RlIiwicmFuZG9tIiwic3BlZWQiLCJzdHJhaWdodCIsIm51bWJlciIsImRlbnNpdHkiLCJhcmVhIiwic2hhcGUiLCJ0eXBlIiwiaW1hZ2UiLCJzcmMiLCJtaW4iLCJtYXgiLCJkZXRlY3RSZXRpbmEiLCJjbGFzc05hbWUiLCJpbml0Iiwib3B0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Particle/ParticlesData.tsx\n");

/***/ })

});