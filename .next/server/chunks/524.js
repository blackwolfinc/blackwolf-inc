"use strict";
exports.id = 524;
exports.ids = [524];
exports.modules = {

/***/ 8524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/assets/img/Forest.png
/* harmony default export */ const Forest = ({"src":"/_next/static/media/Forest.1cfa8522.png","height":761,"width":2334,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAG1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUUeIgAAAACXRSTlMB+h3t3DxawYOX5DiAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHUlEQVR4nGNgYoACDjZWJgZWNiYGRkZGFnZmRhYAAoQAO6b9ZIMAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/assets/img/Forest2.png
/* harmony default export */ const Forest2 = ({"src":"/_next/static/media/Forest2.f5541a95.png","height":1016,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAKlBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABqfk8+AAAADnRSTlMA5/ZOgJEJFzYOoSrVvEPXITYAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAnSURBVHicBcGHAQAgCASxe4qAZf91TQBWDwuqTvQ4Hjtv+kMyM8k+CtEAkmdTFOgAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./components/Footer/Footer.tsx





const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "fixed z-[-1] w-full bottom-0",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                alt: "",
                className: "opacity-10 z-[0] animation-backgroundone",
                src: Forest2
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                alt: "",
                className: "opacity-10 z-[0] animation-backgroundtwo animation-background2",
                src: Forest
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                alt: "",
                className: "opacity-10 z-[-1] animation-background ",
                src: Forest
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./components/Header/Header.tsx





const Header = ()=>{
    const MediaQuery = dynamic_default()(null, {
        loadableGenerated: {
            modules: [
                "../components/Header/Header.tsx -> " + "react-responsive"
            ]
        },
        ssr: false
    });
    const { 0: Header1 , 1: setHeader  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MediaQuery, {
                maxWidth: 768,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "p-4 bg-transparent flex z-50 w-full fixed justify-between items-center text-stone-200 bg-gradient-to-br from-[#323232] via-[#4b4b4b7a] to-[#08070700] tracking-widest",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-2xl font-extrabold ",
                                children: "BWT.ID"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: ()=>{
                                    setHeader(!Header1);
                                },
                                className: " top-[3rem] p-2 border-2 border-[#8c8c8c] rounded-[50%] z-50 text-white shadow-md shadow-[#8c8c8c] bg-gradient-to-br from-[#3232322c] via-[#4b4b4bfb] to-[#0807073d]",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-6 w-6",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M4 6h16M4 12h8m-8 6h16"
                                    })
                                })
                            })
                        ]
                    }),
                    Header1 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: " border-[#cacaca] text-stone-200 bg-gradient-to-br from-[#323232] via-[#4b4b4bfb] to-[#0807079f] ",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col fixed mt-[4.6rem] justify-center text-center bg-gradient-to-br from-[#323232] via-[#4b4b4bfb] to-[#080707] w-full h-full z-50",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "my-3 hover:scale-125 hover:ml-4 duration-100 min-w-max font-bold text-2xl",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: "Homepage"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "my-3 hover:scale-125 hover:ml-4 duration-100 min-w-max font-bold text-2xl",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/colelction",
                                            children: "Colection"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "my-3 hover:scale-125 hover:ml-4 duration-100 min-w-max font-bold text-2xl",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/aboutus",
                                            children: "About Us"
                                        })
                                    ]
                                })
                            ]
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MediaQuery, {
                minWidth: 768,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    onClick: ()=>{
                        setHeader(!Header1);
                    },
                    className: "absolute left-[7rem] top-[3rem] p-5 border-2 border-[#8c8c8c] rounded-[50%] z-50 text-white shadow-md shadow-[#8c8c8c] ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-6 w-6",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: 2,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M4 6h16M4 12h8m-8 6h16"
                            })
                        }),
                        Header1 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "absolute mt-7 ml-[-0.5rem] flex-row h-max border-l-[1px] pl-3 border-dashed border-[#cacaca]",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col ",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "my-3 hover:scale-125 hover:ml-4 duration-100 min-w-max",
                                        children: [
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: "Homepage"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "my-3 hover:scale-125 hover:ml-4 duration-100 min-w-max",
                                        children: [
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/colelction",
                                                children: "Colection"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "my-3 hover:scale-125 hover:ml-4 duration-100 min-w-max",
                                        children: [
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/aboutus",
                                                children: "About Us"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/layout/Layout.tsx





const Layout = (props)=>{
    const { children , pageTitle  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-gradient-to-br from-[#1f1f1f50] via-[#000000bf] to-[#080707]",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: pageTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Black Wolf Tech Indonesia"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
};


/***/ })

};
;