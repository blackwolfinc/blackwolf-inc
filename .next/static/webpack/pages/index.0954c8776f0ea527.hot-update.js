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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ParticlesData\": function() { return /* binding */ ParticlesData; }\n/* harmony export */ });\n/* harmony import */ var _Users_bagas_Documents_GitHub_blackwolf_inc_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_bagas_Documents_GitHub_blackwolf_inc_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_bagas_Documents_GitHub_blackwolf_inc_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsparticles */ \"./node_modules/tsparticles/esm/index.js\");\n/* harmony import */ var react_particle_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-particle-image */ \"./node_modules/react-particle-image/dist/index.es.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n // if you are going to use `loadFull`, install the \"tsparticles\" package too.\n\nvar ParticlesData = function() {\n    var particlesInit = function() {\n        var _ref = _asyncToGenerator(_Users_bagas_Documents_GitHub_blackwolf_inc_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(main) {\n            return _Users_bagas_Documents_GitHub_blackwolf_inc_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,tsparticles__WEBPACK_IMPORTED_MODULE_3__.loadFull)(main);\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function particlesInit(main) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var particleOptions = {\n        filter: function(param) {\n            var x = param.x, y = param.y, image = param.image;\n            // Get pixel\n            var pixel = image.get(x, y);\n            // Make a particle for this pixel if blue > 50 (range 0-255)\n            return pixel.b > 50;\n        },\n        color: function(param) {\n            var x = param.x, y = param.y, image = param.image;\n            return \"#333333\";\n        },\n        radius: function() {\n            return Math.random() * 1.5 + 0.5;\n        },\n        mass: function() {\n            return 50;\n        },\n        friction: function() {\n            return 0.15;\n        },\n        initialPosition: function(param) {\n            var canvasDimensions = param.canvasDimensions;\n            return new react_particle_image__WEBPACK_IMPORTED_MODULE_2__.Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);\n        }\n    };\n    var motionForce = function(x, y) {\n        return react_particle_image__WEBPACK_IMPORTED_MODULE_2__.forces.disturbance(x, y, 10);\n    };\n    // const particlesOptions = {\n    //   background: {\n    //     color: {\n    //       value: \"transparent\",\n    //     },\n    //   },\n    //   fpsLimit: 120,\n    //   interactivity: {\n    //     events: {\n    //       onClick: {\n    //         enable: false,\n    //         mode: \"push\",\n    //       },\n    //       onHover: {\n    //         enable: false,\n    //         mode: \"repulse\",\n    //       },\n    //       resize: true,\n    //     },\n    //     modes: {\n    //       bubble: {\n    //         distance: 400,\n    //         duration: 2,\n    //         opacity: 0.8,\n    //         size: 40,\n    //       },\n    //       push: {\n    //         quantity: 4,\n    //       },\n    //       repulse: {\n    //         distance: 200,\n    //         duration: 0.4,\n    //       },\n    //     },\n    //   },\n    //   fullScreen: {\n    //     enable: false,\n    //     zIndex: 0\n    //   },\n    //   particles: {\n    //     color: {\n    //       value: \"#ffffff\",\n    //     },\n    //     links: {\n    //       color: \"#ffffff\",\n    //       distance: 170,\n    //       enable: true,\n    //       opacity: 0.2,\n    //       width: 1,\n    //     },\n    //     collisions: {\n    //       enable: false,\n    //     },\n    //     move: {\n    //       direction: \"top\",\n    //       enable: true,\n    //       outMode: \"out\",\n    //       random: false,\n    //       speed: 3,\n    //       straight: false,\n    //     },\n    //     number: {\n    //       density: {\n    //         enable: true,\n    //         area: 800,\n    //       },\n    //       value: 20,\n    //     },\n    //     opacity: {\n    //       value: 0.3,\n    //     },\n    //     shape: {\n    //       \"type\" : \"image\",\n    //       image: [\n    //         {\n    //           src: {logo},\n    //           height: 20,\n    //           width: 23,\n    //         }\n    //       ]\n    //       },\n    //     size: {\n    //       random: true,\n    //       value: 3,\n    //     },\n    //   },\n    // detectRetina: true,\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_particle_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        src: \"../../public/assets/img/claw.png\",\n        scale: 0.75,\n        entropy: 20,\n        maxParticles: 3000,\n        className: \"absolute z-50\",\n        particleOptions: particleOptions,\n        mouseMoveForce: motionForce,\n        touchMoveForce: motionForce,\n        backgroundColor: \"transparent\"\n    }, void 0, false, {\n        fileName: \"/Users/bagas/Documents/GitHub/blackwolf-inc/components/Particle/ParticlesData.tsx\",\n        lineNumber: 134,\n        columnNumber: 3\n    }, _this);\n};\n_c = ParticlesData;\nvar _c;\n$RefreshReg$(_c, \"ParticlesData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhcnRpY2xlL1BhcnRpY2xlc0RhdGEudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDdUMsQ0FBQyw2RUFBNkU7QUFVdkY7QUFHdkIsSUFBTUksYUFBYSxHQUFHLFdBQU07SUFFakMsSUFBTUMsYUFBYTttQkFBRywwTEFBT0MsSUFBWSxFQUFLOzs7OzsrQkFJdENOLHFEQUFRLENBQUNNLElBQUksQ0FBQzs7Ozs7O1NBQ3ZCO3dCQUxPRCxhQUFhLENBQVVDLElBQVk7OztPQUsxQztJQUVELElBQU1DLGVBQWUsR0FBb0I7UUFDdkNDLE1BQU0sRUFBRSxnQkFBcUI7Z0JBQWxCQyxDQUFDLFNBQURBLENBQUMsRUFBRUMsQ0FBQyxTQUFEQSxDQUFDLEVBQUVDLEtBQUssU0FBTEEsS0FBSztZQUNwQixZQUFZO1lBQ1osSUFBTUMsS0FBSyxHQUFHRCxLQUFLLENBQUNFLEdBQUcsQ0FBQ0osQ0FBQyxFQUFFQyxDQUFDLENBQUM7WUFDN0IsNERBQTREO1lBQzVELE9BQU9FLEtBQUssQ0FBQ0UsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNyQjtRQUNEQyxLQUFLLEVBQUU7Z0JBQUdOLENBQUMsU0FBREEsQ0FBQyxFQUFFQyxDQUFDLFNBQURBLENBQUMsRUFBRUMsS0FBSyxTQUFMQSxLQUFLO21CQUFPLFNBQVM7U0FBQTtRQUNyQ0ssTUFBTSxFQUFFO21CQUFNQyxJQUFJLENBQUNDLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHO1NBQUE7UUFDdkNDLElBQUksRUFBRTttQkFBTSxFQUFFO1NBQUE7UUFDZEMsUUFBUSxFQUFFO21CQUFNLElBQUk7U0FBQTtRQUNwQkMsZUFBZSxFQUFFLGdCQUEwQjtnQkFBdkJDLGdCQUFnQixTQUFoQkEsZ0JBQWdCO1lBQ2xDLE9BQU8sSUFBSXBCLHdEQUFNLENBQUNvQixnQkFBZ0IsQ0FBQ0MsS0FBSyxHQUFHLENBQUMsRUFBRUQsZ0JBQWdCLENBQUNFLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM1RTtLQUNGO0lBRUQsSUFBTUMsV0FBVyxHQUFHLFNBQUNoQixDQUFTLEVBQUVDLENBQVMsRUFBb0I7UUFDM0QsT0FBT1Asb0VBQWtCLENBQUNNLENBQUMsRUFBRUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ3JDO0lBRUQsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsU0FBUztJQUNULGVBQWU7SUFDZixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsU0FBUztJQUNULE9BQU87SUFDUCxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsU0FBUztJQUNULGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFVBQVU7SUFDVixXQUFXO0lBQ1gsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsSUFBSTtJQUVKLHFCQUNFLDhEQUFDVCw0REFBYTtRQUNkMEIsR0FBRyxFQUFFLGtDQUFrQztRQUN2Q0MsS0FBSyxFQUFFLElBQUk7UUFDWEMsT0FBTyxFQUFFLEVBQUU7UUFDWEMsWUFBWSxFQUFFLElBQUk7UUFDbEJDLFNBQVMsRUFBQyxlQUFlO1FBQ3pCeEIsZUFBZSxFQUFFQSxlQUFlO1FBQ2hDeUIsY0FBYyxFQUFFUCxXQUFXO1FBQzNCUSxjQUFjLEVBQUVSLFdBQVc7UUFDM0JTLGVBQWUsRUFBQyxhQUFhOzs7OzthQUM3QixDQUNBO0NBRUQ7QUFwSVk5QixLQUFBQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGFydGljbGUvUGFydGljbGVzRGF0YS50c3g/ODUyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFydGljbGVzIGZyb20gXCJyZWFjdC1wYXJ0aWNsZXNcIjtcbmltcG9ydCB7IGxvYWRGdWxsIH0gZnJvbSBcInRzcGFydGljbGVzXCI7IC8vIGlmIHlvdSBhcmUgZ29pbmcgdG8gdXNlIGBsb2FkRnVsbGAsIGluc3RhbGwgdGhlIFwidHNwYXJ0aWNsZXNcIiBwYWNrYWdlIHRvby5cbmltcG9ydCB0eXBlIHsgRW5naW5lIH0gZnJvbSBcInRzcGFydGljbGVzLWVuZ2luZVwiO1xuLy8gaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1BhZ2UubW9kdWxlLmNzc1wiO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pbWcvY2xhdy5wbmcnO1xuXG5pbXBvcnQgUGFydGljbGVJbWFnZSwge1xuICBQYXJ0aWNsZU9wdGlvbnMsXG4gIFZlY3RvcixcbiAgZm9yY2VzLFxuICBQYXJ0aWNsZUZvcmNlXG59IGZyb20gXCJyZWFjdC1wYXJ0aWNsZS1pbWFnZVwiO1xuXG5cbmV4cG9ydCBjb25zdCBQYXJ0aWNsZXNEYXRhID0gKCkgPT4ge1xuXG4gIGNvbnN0IHBhcnRpY2xlc0luaXQgPSBhc3luYyAobWFpbjogRW5naW5lKSA9PiB7XG4gICAgLy8geW91IGNhbiBpbml0aWFsaXplIHRoZSB0c1BhcnRpY2xlcyBpbnN0YW5jZSAobWFpbikgaGVyZSwgYWRkaW5nIGN1c3RvbSBzaGFwZXMgb3IgcHJlc2V0c1xuICAgIC8vIHRoaXMgbG9hZHMgdGhlIHRzcGFydGljbGVzIHBhY2thZ2UgYnVuZGxlLCBpdCdzIHRoZSBlYXNpZXN0IG1ldGhvZCBmb3IgZ2V0dGluZyBldmVyeXRoaW5nIHJlYWR5XG4gICAgLy8gc3RhcnRpbmcgZnJvbSB2MiB5b3UgY2FuIGFkZCBvbmx5IHRoZSBmZWF0dXJlcyB5b3UgbmVlZCByZWR1Y2luZyB0aGUgYnVuZGxlIHNpemVcbiAgICBhd2FpdCBsb2FkRnVsbChtYWluKVxufTtcblxuY29uc3QgcGFydGljbGVPcHRpb25zOiBQYXJ0aWNsZU9wdGlvbnMgPSB7XG4gIGZpbHRlcjogKHsgeCwgeSwgaW1hZ2UgfSkgPT4ge1xuICAgIC8vIEdldCBwaXhlbFxuICAgIGNvbnN0IHBpeGVsID0gaW1hZ2UuZ2V0KHgsIHkpO1xuICAgIC8vIE1ha2UgYSBwYXJ0aWNsZSBmb3IgdGhpcyBwaXhlbCBpZiBibHVlID4gNTAgKHJhbmdlIDAtMjU1KVxuICAgIHJldHVybiBwaXhlbC5iID4gNTA7XG4gIH0sXG4gIGNvbG9yOiAoeyB4LCB5LCBpbWFnZSB9KSA9PiBcIiMzMzMzMzNcIixcbiAgcmFkaXVzOiAoKSA9PiBNYXRoLnJhbmRvbSgpICogMS41ICsgMC41LFxuICBtYXNzOiAoKSA9PiA1MCxcbiAgZnJpY3Rpb246ICgpID0+IDAuMTUsXG4gIGluaXRpYWxQb3NpdGlvbjogKHsgY2FudmFzRGltZW5zaW9ucyB9KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IoY2FudmFzRGltZW5zaW9ucy53aWR0aCAvIDIsIGNhbnZhc0RpbWVuc2lvbnMuaGVpZ2h0IC8gMik7XG4gIH1cbn07XG5cbmNvbnN0IG1vdGlvbkZvcmNlID0gKHg6IG51bWJlciwgeTogbnVtYmVyKTogUGFydGljbGVGb3JjZSA9PiB7XG4gIHJldHVybiBmb3JjZXMuZGlzdHVyYmFuY2UoeCwgeSwgMTApO1xufTtcblxuLy8gY29uc3QgcGFydGljbGVzT3B0aW9ucyA9IHtcbi8vICAgYmFja2dyb3VuZDoge1xuLy8gICAgIGNvbG9yOiB7XG4vLyAgICAgICB2YWx1ZTogXCJ0cmFuc3BhcmVudFwiLFxuLy8gICAgIH0sXG4vLyAgIH0sXG4vLyAgIGZwc0xpbWl0OiAxMjAsXG4vLyAgIGludGVyYWN0aXZpdHk6IHtcbi8vICAgICBldmVudHM6IHtcbi8vICAgICAgIG9uQ2xpY2s6IHtcbi8vICAgICAgICAgZW5hYmxlOiBmYWxzZSxcbi8vICAgICAgICAgbW9kZTogXCJwdXNoXCIsXG4vLyAgICAgICB9LFxuLy8gICAgICAgb25Ib3Zlcjoge1xuLy8gICAgICAgICBlbmFibGU6IGZhbHNlLFxuLy8gICAgICAgICBtb2RlOiBcInJlcHVsc2VcIixcbi8vICAgICAgIH0sXG4vLyAgICAgICByZXNpemU6IHRydWUsXG4vLyAgICAgfSxcbi8vICAgICBtb2Rlczoge1xuLy8gICAgICAgYnViYmxlOiB7XG4vLyAgICAgICAgIGRpc3RhbmNlOiA0MDAsXG4vLyAgICAgICAgIGR1cmF0aW9uOiAyLFxuLy8gICAgICAgICBvcGFjaXR5OiAwLjgsXG4vLyAgICAgICAgIHNpemU6IDQwLFxuLy8gICAgICAgfSxcbi8vICAgICAgIHB1c2g6IHtcbi8vICAgICAgICAgcXVhbnRpdHk6IDQsXG4vLyAgICAgICB9LFxuLy8gICAgICAgcmVwdWxzZToge1xuLy8gICAgICAgICBkaXN0YW5jZTogMjAwLFxuLy8gICAgICAgICBkdXJhdGlvbjogMC40LFxuLy8gICAgICAgfSxcbi8vICAgICB9LFxuLy8gICB9LFxuLy8gICBmdWxsU2NyZWVuOiB7XG4vLyAgICAgZW5hYmxlOiBmYWxzZSxcbi8vICAgICB6SW5kZXg6IDBcbi8vICAgfSxcbi8vICAgcGFydGljbGVzOiB7XG4vLyAgICAgY29sb3I6IHtcbi8vICAgICAgIHZhbHVlOiBcIiNmZmZmZmZcIixcbi8vICAgICB9LFxuLy8gICAgIGxpbmtzOiB7XG4vLyAgICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4vLyAgICAgICBkaXN0YW5jZTogMTcwLFxuLy8gICAgICAgZW5hYmxlOiB0cnVlLFxuLy8gICAgICAgb3BhY2l0eTogMC4yLFxuLy8gICAgICAgd2lkdGg6IDEsXG4vLyAgICAgfSxcbi8vICAgICBjb2xsaXNpb25zOiB7XG4vLyAgICAgICBlbmFibGU6IGZhbHNlLFxuLy8gICAgIH0sXG4vLyAgICAgbW92ZToge1xuLy8gICAgICAgZGlyZWN0aW9uOiBcInRvcFwiLFxuLy8gICAgICAgZW5hYmxlOiB0cnVlLFxuLy8gICAgICAgb3V0TW9kZTogXCJvdXRcIixcbi8vICAgICAgIHJhbmRvbTogZmFsc2UsXG4vLyAgICAgICBzcGVlZDogMyxcbi8vICAgICAgIHN0cmFpZ2h0OiBmYWxzZSxcbi8vICAgICB9LFxuLy8gICAgIG51bWJlcjoge1xuLy8gICAgICAgZGVuc2l0eToge1xuLy8gICAgICAgICBlbmFibGU6IHRydWUsXG4vLyAgICAgICAgIGFyZWE6IDgwMCxcbi8vICAgICAgIH0sXG4vLyAgICAgICB2YWx1ZTogMjAsXG4vLyAgICAgfSxcbi8vICAgICBvcGFjaXR5OiB7XG4vLyAgICAgICB2YWx1ZTogMC4zLFxuLy8gICAgIH0sXG4vLyAgICAgc2hhcGU6IHtcbi8vICAgICAgIFwidHlwZVwiIDogXCJpbWFnZVwiLFxuLy8gICAgICAgaW1hZ2U6IFtcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHNyYzoge2xvZ299LFxuLy8gICAgICAgICAgIGhlaWdodDogMjAsXG4vLyAgICAgICAgICAgd2lkdGg6IDIzLFxuLy8gICAgICAgICB9XG4vLyAgICAgICBdXG4vLyAgICAgICB9LFxuLy8gICAgIHNpemU6IHtcbi8vICAgICAgIHJhbmRvbTogdHJ1ZSxcbi8vICAgICAgIHZhbHVlOiAzLFxuLy8gICAgIH0sXG4vLyAgIH0sXG4vLyBkZXRlY3RSZXRpbmE6IHRydWUsXG4vLyB9XG5cbnJldHVybiAoXG4gIDxQYXJ0aWNsZUltYWdlXG4gIHNyYz17XCIuLi8uLi9wdWJsaWMvYXNzZXRzL2ltZy9jbGF3LnBuZ1wifVxuICBzY2FsZT17MC43NX1cbiAgZW50cm9weT17MjB9XG4gIG1heFBhcnRpY2xlcz17MzAwMH1cbiAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgei01MFwiXG4gIHBhcnRpY2xlT3B0aW9ucz17cGFydGljbGVPcHRpb25zfVxuICBtb3VzZU1vdmVGb3JjZT17bW90aW9uRm9yY2V9XG4gIHRvdWNoTW92ZUZvcmNlPXttb3Rpb25Gb3JjZX1cbiAgYmFja2dyb3VuZENvbG9yPVwidHJhbnNwYXJlbnRcIlxuLz5cbik7XG5cbn1cbiJdLCJuYW1lcyI6WyJsb2FkRnVsbCIsIlBhcnRpY2xlSW1hZ2UiLCJWZWN0b3IiLCJmb3JjZXMiLCJQYXJ0aWNsZXNEYXRhIiwicGFydGljbGVzSW5pdCIsIm1haW4iLCJwYXJ0aWNsZU9wdGlvbnMiLCJmaWx0ZXIiLCJ4IiwieSIsImltYWdlIiwicGl4ZWwiLCJnZXQiLCJiIiwiY29sb3IiLCJyYWRpdXMiLCJNYXRoIiwicmFuZG9tIiwibWFzcyIsImZyaWN0aW9uIiwiaW5pdGlhbFBvc2l0aW9uIiwiY2FudmFzRGltZW5zaW9ucyIsIndpZHRoIiwiaGVpZ2h0IiwibW90aW9uRm9yY2UiLCJkaXN0dXJiYW5jZSIsInNyYyIsInNjYWxlIiwiZW50cm9weSIsIm1heFBhcnRpY2xlcyIsImNsYXNzTmFtZSIsIm1vdXNlTW92ZUZvcmNlIiwidG91Y2hNb3ZlRm9yY2UiLCJiYWNrZ3JvdW5kQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Particle/ParticlesData.tsx\n");

/***/ })

});