module.exports = [
"[project]/components/Nav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2d$star$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoonStar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon-star.mjs [app-ssr] (ecmascript) <export default as MoonStar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2d$medium$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SunMedium$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun-medium.mjs [app-ssr] (ecmascript) <export default as SunMedium>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
"use client";
;
;
;
;
;
function Nav({ language, onToggleLanguage, theme, onToggleTheme }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const links = language === "es" ? [
        {
            label: "Trabajo",
            href: "/#work"
        },
        {
            label: "Servicios",
            href: "/#services"
        },
        {
            label: "Proceso",
            href: "/#process"
        },
        {
            label: "Notas",
            href: "/blog"
        },
        {
            label: "Contacto",
            href: "/#contact"
        }
    ] : [
        {
            label: "Work",
            href: "/#work"
        },
        {
            label: "Services",
            href: "/#services"
        },
        {
            label: "Process",
            href: "/#process"
        },
        {
            label: "Notes",
            href: "/blog"
        },
        {
            label: "Contact",
            href: "/#contact"
        }
    ];
    const ctaLabel = language === "es" ? "Empezar un proyecto" : "Start a project";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-40 border-b border-white/10 bg-bg/70 backdrop-blur-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/#top",
                        className: "flex items-center gap-2.5 font-[family-name:var(--font-display)] text-lg font-extrabold tracking-tight text-ink",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/icon.svg",
                                alt: "",
                                width: 28,
                                height: 28,
                                className: "rounded-[7px]"
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            "fenwebstudio"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden items-center gap-9 md:flex",
                        children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                className: "text-sm text-ink-dim transition hover:text-ink",
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden items-center rounded-full border border-[color:var(--line)] bg-bg-raised/80 p-1 shadow-sm md:inline-flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onToggleLanguage,
                                        className: `rounded-full px-3 py-1.5 text-sm font-medium ${language === "en" ? "bg-accent text-white" : "text-ink-dim hover:text-ink"}`,
                                        children: "EN"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Nav.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onToggleLanguage,
                                        className: `rounded-full px-3 py-1.5 text-sm font-medium ${language === "es" ? "bg-accent text-white" : "text-ink-dim hover:text-ink"}`,
                                        children: "ES"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Nav.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
                                onClick: onToggleTheme,
                                className: "hidden h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] bg-bg-raised/80 text-ink shadow-sm transition hover:bg-white/10 md:inline-flex",
                                children: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2d$medium$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SunMedium$3e$__["SunMedium"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/Nav.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2d$star$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoonStar$3e$__["MoonStar"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/Nav.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#contact",
                                className: "hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-ink transition hover:border-accent-bright/60 hover:bg-white/10 hover:text-accent-bright md:inline-flex",
                                children: [
                                    ctaLabel,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Nav.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-label": open ? "Close menu" : "Open menu",
                        "aria-expanded": open,
                        onClick: ()=>setOpen((v)=>!v),
                        className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink shadow-sm transition hover:bg-white/10 md:hidden",
                        children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-4.5 w-4.5"
                        }, void 0, false, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "h-4.5 w-4.5"
                        }, void 0, false, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 136,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Nav.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-6 mb-6 flex flex-col gap-2 rounded-2xl border border-white/10 bg-bg-raised/95 p-3 backdrop-blur-xl md:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onToggleLanguage,
                                className: `flex-1 rounded-xl px-3 py-2 text-sm font-medium ${language === "en" ? "bg-accent text-white" : "bg-white/10 text-ink"}`,
                                children: "EN"
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onToggleLanguage,
                                className: `flex-1 rounded-xl px-3 py-2 text-sm font-medium ${language === "es" ? "bg-accent text-white" : "bg-white/10 text-ink"}`,
                                children: "ES"
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onToggleTheme,
                                className: "rounded-xl border border-[color:var(--line)] bg-white/10 p-2 text-ink",
                                children: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2d$medium$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SunMedium$3e$__["SunMedium"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/Nav.tsx",
                                    lineNumber: 172,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2d$star$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoonStar$3e$__["MoonStar"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/Nav.tsx",
                                    lineNumber: 174,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this),
                    links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: link.href,
                            onClick: ()=>setOpen(false),
                            className: "rounded-xl px-4 py-3 text-sm text-ink-dim transition hover:bg-white/5 hover:text-ink",
                            children: link.label
                        }, link.href, false, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/#contact",
                        onClick: ()=>setOpen(false),
                        className: "mt-1 rounded-xl bg-accent px-4 py-3 text-center text-sm font-medium text-white",
                        children: ctaLabel
                    }, void 0, false, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 188,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Nav.tsx",
                lineNumber: 142,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Nav.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Reveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Reveal({ children, className, delayMs = 0 }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const node = ref.current;
        if (!node) return;
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                setVisible(true);
                observer.disconnect();
            }
        }, {
            threshold: 0.15,
            rootMargin: "0px 0px -10% 0px"
        });
        observer.observe(node);
        return ()=>observer.disconnect();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: className,
        style: {
            transitionProperty: "opacity, transform",
            transitionDuration: "700ms",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: `${delayMs}ms`,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Reveal.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/site.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FACEBOOK_URL",
    ()=>FACEBOOK_URL,
    "INSTAGRAM_URL",
    ()=>INSTAGRAM_URL,
    "LINKEDIN_URL",
    ()=>LINKEDIN_URL,
    "SITE_NAME",
    ()=>SITE_NAME,
    "SITE_URL",
    ()=>SITE_URL
]);
const SITE_URL = "https://www.fenwebstudio.com";
const SITE_NAME = "Fen Web Studio";
const INSTAGRAM_URL = "https://www.instagram.com/fenwebstudio/";
const FACEBOOK_URL = "https://www.facebook.com/Fenwebstudio/";
const LINKEDIN_URL = "https://www.linkedin.com/company/fen-web-studio/";
}),
"[project]/lib/landingPages.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LANDING_PAGES",
    ()=>LANDING_PAGES,
    "buildLandingJsonLd",
    ()=>buildLandingJsonLd,
    "buildLandingMetadata",
    ()=>buildLandingMetadata,
    "getLandingPage",
    ()=>getLandingPage,
    "getLandingPageByProject",
    ()=>getLandingPageByProject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-ssr] (ecmascript)");
;
const LANDING_PAGES = [
    {
        slug: "website-design-for-restaurants",
        projectSlug: "rosewood-table",
        image: "/arch-skyline-dusk.jpg",
        industry: "Restaurants",
        industryEs: "Restaurantes",
        metaTitle: "Website Design for Restaurants — Fen Web Studio",
        metaTitleEs: "Diseño de Sitios Web para Restaurantes — Fen Web Studio",
        metaDescription: "Menu-first restaurant websites that are easy to update and easy to book from — built once, cared for every month. See how we replaced a stale PDF menu with a real site.",
        metaDescriptionEs: "Sitios web para restaurantes centrados en el menú, fáciles de actualizar y reservar — construidos una vez, cuidados cada mes. Mira cómo reemplazamos un menú en PDF por un sitio real.",
        eyebrow: "For restaurants and cafés",
        eyebrowEs: "Para restaurantes y cafés",
        title: "A website that keeps up with your menu, not the other way around.",
        titleEs: "Un sitio web que se actualiza con tu menú, no al revés.",
        intro: "Most restaurant sites are a splash page linking to a PDF nobody bothers to open on a phone. We build the menu as an actual page — readable, current, and easy for you to update the same week a dish changes — with reservations one tap away instead of buried in a footer.",
        introEs: "La mayoría de los sitios de restaurantes son una página de bienvenida que enlaza a un PDF que nadie abre bien desde el teléfono. Construimos el menú como una página real — legible, actualizada, y fácil de modificar la misma semana que cambia un platillo — con reservas a un toque de distancia en vez de escondidas en el pie de página.",
        painPoints: [
            {
                title: "The menu is a PDF nobody can read on a phone",
                titleEs: "El menú es un PDF que nadie puede leer bien en el celular",
                body: "Tiny text, sideways scrolling, and a file that's months out of date because updating it means calling whoever built the site.",
                bodyEs: "Texto diminuto, scroll horizontal, y un archivo desactualizado por meses porque cambiarlo significa llamar a quien hizo el sitio."
            },
            {
                title: "Reservations happen by phone during service",
                titleEs: "Las reservas se hacen por teléfono durante el servicio",
                body: "Every call during a dinner rush is a distraction your staff doesn't need, and a guest who could've booked in ten seconds online.",
                bodyEs: "Cada llamada durante la hora pico es una distracción que tu equipo no necesita, y un cliente que pudo reservar en línea en diez segundos."
            },
            {
                title: "The photos don't match the room",
                titleEs: "Las fotos no reflejan el lugar",
                body: "A stock-photo hero image or a decade-old interior shot undersells a space that looks great in person.",
                bodyEs: "Una imagen genérica de stock o una foto del interior de hace diez años no le hace justicia a un lugar que se ve muy bien en persona."
            }
        ],
        approachPoints: [
            {
                title: "Menu as a real page, not a download",
                titleEs: "Menú como página real, no como descarga",
                body: "You edit it like a document — no developer required — and it renders cleanly on every phone.",
                bodyEs: "Lo editas como un documento — sin necesitar desarrollador — y se ve bien en cualquier celular."
            },
            {
                title: "Booking built into the design",
                titleEs: "Reservas integradas al diseño",
                body: "Reservations live inside your site's own look, not a mismatched third-party widget that breaks the mood.",
                bodyEs: "Las reservas viven dentro del diseño de tu propio sitio, no en un widget externo que no combina y rompe el ambiente."
            },
            {
                title: "A monthly care plan",
                titleEs: "Un plan de cuidado mensual",
                body: "Seasonal menu swaps, new photography, small copy edits — handled without another agency invoice.",
                bodyEs: "Cambios de menú por temporada, fotos nuevas, ajustes de texto — resueltos sin otra factura de agencia."
            }
        ],
        caseStudyLabel: "See how we did this for Rosewood Table",
        caseStudyLabelEs: "Mira cómo lo hicimos para Rosewood Table"
    },
    {
        slug: "website-design-for-wellness-studios",
        projectSlug: "halcyon-health",
        image: "/arch-skyline-silhouette.jpg",
        industry: "Wellness Studios",
        industryEs: "Estudios de Bienestar",
        metaTitle: "Website Design for Wellness Studios — Fen Web Studio",
        metaTitleEs: "Diseño de Sitios Web para Estudios de Bienestar — Fen Web Studio",
        metaDescription: "Calm, editorial websites for wellness studios with booking built in — so new clients stop calling to schedule and start booking online instead.",
        metaDescriptionEs: "Sitios web calmados y editoriales para estudios de bienestar con reservas integradas — para que los clientes nuevos dejen de llamar y reserven en línea.",
        eyebrow: "For studios, spas, and practitioners",
        eyebrowEs: "Para estudios, spas y profesionales",
        title: "A site as calm as the space it represents.",
        titleEs: "Un sitio tan tranquilo como el espacio que representa.",
        intro: "A wellness brand lives or dies on trust and tone before a client ever walks in. We build sites that read as an extension of the studio itself — with booking woven into the design instead of bolted on as a separate, brand-mismatched tool.",
        introEs: "Una marca de bienestar depende de la confianza y el tono antes de que un cliente cruce la puerta. Construimos sitios que se sienten como una extensión del estudio mismo — con reservas integradas al diseño en vez de una herramienta aparte que no combina con la marca.",
        painPoints: [
            {
                title: "Booking links out to a mismatched third-party tool",
                titleEs: "Las reservas enlazan a una herramienta externa que no combina",
                body: "The calm, considered feeling of the site breaks the moment someone clicks 'Book' and lands somewhere generic.",
                bodyEs: "La sensación calmada y cuidada del sitio se rompe en el momento en que alguien hace clic en 'Reservar' y llega a algo genérico."
            },
            {
                title: "New clients still call to ask basic questions",
                titleEs: "Los clientes nuevos siguen llamando para preguntas básicas",
                body: "Pricing, what to expect in a first session, how to prepare — if it's not clearly on the site, it becomes a phone call.",
                bodyEs: "Precios, qué esperar en la primera sesión, cómo prepararse — si no está claro en el sitio, se convierte en una llamada."
            },
            {
                title: "The design feels clinical instead of calming",
                titleEs: "El diseño se siente clínico en vez de calmado",
                body: "A generic template undersells a practice built around care, attention, and a specific feeling.",
                bodyEs: "Un template genérico no le hace justicia a una práctica construida sobre cuidado, atención y una sensación específica."
            }
        ],
        approachPoints: [
            {
                title: "Booking in the site's own visual language",
                titleEs: "Reservas en el propio lenguaje visual del sitio",
                body: "No jarring redirect to a third-party scheduler — the flow looks and feels like the rest of the brand.",
                bodyEs: "Sin redirección brusca a un sistema externo — el flujo se ve y se siente como el resto de la marca."
            },
            {
                title: "An editorial, unhurried homepage",
                titleEs: "Una página de inicio editorial y sin prisa",
                body: "Fewer, better sections that let the space and the practice speak for themselves.",
                bodyEs: "Menos secciones, pero mejores, que dejan que el espacio y la práctica hablen por sí mismos."
            },
            {
                title: "A monthly care plan",
                titleEs: "Un plan de cuidado mensual",
                body: "New offerings, updated bios, seasonal promotions — kept current without you touching any code.",
                bodyEs: "Nuevos servicios, biografías actualizadas, promociones de temporada — al día sin que toques ningún código."
            }
        ],
        caseStudyLabel: "See how we did this for Halcyon Health",
        caseStudyLabelEs: "Mira cómo lo hicimos para Halcyon Health"
    },
    {
        slug: "website-design-for-boutiques",
        projectSlug: "loom-and-co",
        image: "/arch-geometric-lines.jpg",
        industry: "Boutiques & Retail",
        industryEs: "Boutiques y Retail",
        metaTitle: "Website Design for Boutiques & Retail Shops — Fen Web Studio",
        metaTitleEs: "Diseño de Sitios Web para Boutiques y Tiendas — Fen Web Studio",
        metaDescription: "A lookbook-first website for your boutique — real product photography, a handful of collections, and a clear way to get in touch. No bloated e-commerce template required.",
        metaDescriptionEs: "Un sitio web centrado en el lookbook para tu boutique — fotografía real de producto, unas pocas colecciones, y una forma clara de contactar. Sin templates de e-commerce inflados.",
        eyebrow: "For boutiques and small shops",
        eyebrowEs: "Para boutiques y tiendas pequeñas",
        title: "A lookbook first, a store second.",
        titleEs: "Un lookbook primero, una tienda después.",
        intro: "Generic e-commerce templates bury a small shop's actual taste under navigation menus built for a thousand SKUs. We build a single, elegant scroll instead — a handful of collections, real photography, and one clear way to reach you — that reads as a brand, not a warehouse.",
        introEs: "Los templates genéricos de e-commerce esconden el gusto real de una tienda pequeña bajo menús de navegación pensados para mil productos. En su lugar, construimos un solo scroll elegante — unas pocas colecciones, fotografía real, y una forma clara de contactarte — que se lee como marca, no como bodega.",
        painPoints: [
            {
                title: "More navigation than products",
                titleEs: "Más navegación que productos",
                body: "A generic store template ships with menus, filters, and category pages built for a catalog ten times the size of yours.",
                bodyEs: "Un template genérico de tienda viene con menús, filtros y páginas de categoría pensados para un catálogo diez veces más grande que el tuyo."
            },
            {
                title: "Customers can't tell what you actually sell",
                titleEs: "Los clientes no saben qué vendes realmente",
                body: "The homepage leads with a slideshow and a newsletter popup instead of the products people came to see.",
                bodyEs: "La página de inicio empieza con un carrusel y un popup de newsletter en vez de los productos que la gente vino a ver."
            },
            {
                title: "Carts get abandoned mid-checkout",
                titleEs: "Los carritos se abandonan a medio pago",
                body: "A clunky, multi-step checkout built for a big-box retailer loses sales a boutique can't afford to lose.",
                bodyEs: "Un proceso de pago torpe y de varios pasos, pensado para una gran cadena, pierde ventas que una boutique no puede permitirse perder."
            }
        ],
        approachPoints: [
            {
                title: "One scroll, a handful of collections",
                titleEs: "Un solo scroll, unas pocas colecciones",
                body: "No account creation, no ten-item mega menu — just the pieces you actually want to sell, shown well.",
                bodyEs: "Sin crear cuenta, sin menús de diez niveles — solo las piezas que realmente quieres vender, bien presentadas."
            },
            {
                title: "Real product photography, front and center",
                titleEs: "Fotografía real de producto, al frente",
                body: "The site is built around your images, not a stock template that could belong to any shop.",
                bodyEs: "El sitio se construye alrededor de tus imágenes, no de un template genérico que podría ser de cualquier tienda."
            },
            {
                title: "A monthly care plan",
                titleEs: "Un plan de cuidado mensual",
                body: "New collections, seasonal refreshes, and small copy changes — handled for you, month to month.",
                bodyEs: "Nuevas colecciones, renovaciones de temporada y pequeños cambios de texto — resueltos por nosotros, mes a mes."
            }
        ],
        caseStudyLabel: "See how we did this for Loom & Co.",
        caseStudyLabelEs: "Mira cómo lo hicimos para Loom & Co."
    },
    {
        slug: "website-design-for-professional-services",
        projectSlug: "marlow-and-row",
        image: "/arch-geometric-bw.jpg",
        industry: "Professional Services",
        industryEs: "Servicios Profesionales",
        metaTitle: "Website Design for Professional Services Firms — Fen Web Studio",
        metaTitleEs: "Diseño de Sitios Web para Firmas de Servicios Profesionales — Fen Web Studio",
        metaDescription: "A quiet, credible website for consultants, advisors, and small firms — answers 'are these people legitimate' in the first five seconds, without needing a CMS to maintain.",
        metaDescriptionEs: "Un sitio web sobrio y creíble para consultores, asesores y firmas pequeñas — responde '¿es gente seria?' en los primeros cinco segundos, sin necesitar un CMS para mantenerlo.",
        eyebrow: "For consultants, advisors, and small firms",
        eyebrowEs: "Para consultores, asesores y firmas pequeñas",
        title: "The site that shows up before the first call.",
        titleEs: "El sitio que aparece antes de la primera llamada.",
        intro: "Prospective clients Google a firm before they ever pick up the phone. If what they find is a LinkedIn page or nothing at all, the call often doesn't happen. We build a small, credible site — what you do, who's behind it, how engagements work — with nothing that needs a CMS to keep current.",
        introEs: "Los clientes potenciales buscan una firma en Google antes de siquiera marcar. Si lo que encuentran es una página de LinkedIn o nada, la llamada muchas veces no sucede. Construimos un sitio pequeño y creíble — qué hacen, quién está detrás, cómo funcionan los proyectos — sin nada que requiera un CMS para mantenerse al día.",
        painPoints: [
            {
                title: "There's no site at all — just a LinkedIn page",
                titleEs: "No hay sitio — solo una página de LinkedIn",
                body: "A prospective client searches the firm's name and finds a profile, not a homepage, and quietly moves on.",
                bodyEs: "Un cliente potencial busca el nombre de la firma y encuentra un perfil, no una página de inicio, y sigue de largo sin decir nada."
            },
            {
                title: "The old site reads as generic and dated",
                titleEs: "El sitio anterior se ve genérico y desactualizado",
                body: "A template built for any small business undersells a practice built on specific expertise and trust.",
                bodyEs: "Un template pensado para cualquier negocio pequeño no le hace justicia a una práctica construida sobre experiencia y confianza específicas."
            },
            {
                title: "Nobody wants to maintain a CMS",
                titleEs: "Nadie quiere mantener un CMS",
                body: "A two-partner practice doesn't have time to fight with a page builder for a site that rarely needs to change.",
                bodyEs: "Una práctica de dos socios no tiene tiempo para pelear con un constructor de páginas para un sitio que rara vez necesita cambiar."
            }
        ],
        approachPoints: [
            {
                title: "Four sections, nothing more",
                titleEs: "Cuatro secciones, nada más",
                body: "What the firm does, who's behind it, how engagements work, and how to reach you — the entire brief.",
                bodyEs: "Qué hace la firma, quién está detrás, cómo funcionan los proyectos y cómo contactarlos — todo el encargo."
            },
            {
                title: "Built to answer 'are these people legitimate'",
                titleEs: "Construido para responder '¿es gente seria?'",
                body: "In the first five seconds, before a prospective client reads a single word of copy.",
                bodyEs: "En los primeros cinco segundos, antes de que un cliente potencial lea una sola palabra."
            },
            {
                title: "A monthly care plan",
                titleEs: "Un plan de cuidado mensual",
                body: "Small updates as the practice evolves, handled for you — no CMS login required on your end.",
                bodyEs: "Pequeñas actualizaciones conforme la práctica evoluciona, resueltas por nosotros — sin necesitar acceso a ningún CMS."
            }
        ],
        caseStudyLabel: "See how we did this for Marlow & Row",
        caseStudyLabelEs: "Mira cómo lo hicimos para Marlow & Row"
    },
    {
        slug: "website-design-for-b2b-distributors",
        projectSlug: "apaoil",
        image: "/apaoil/apaoil-2.png",
        industry: "B2B Distributors & Importers",
        industryEs: "Distribuidores e Importadores B2B",
        metaTitle: "Website Design for B2B Distributors & Importers — Fen Web Studio",
        metaTitleEs: "Diseño de Sitios Web para Distribuidores e Importadores B2B — Fen Web Studio",
        metaDescription: "A catalog-and-quote website for distributors and importers, built around how B2B buyers actually decide — so RFQs stop happening over email and spreadsheets. See how we did it for a multi-brand lubricant importer.",
        metaDescriptionEs: "Un sitio de catálogo y cotización para distribuidores e importadores, construido alrededor de cómo compran realmente los clientes B2B — para que las cotizaciones dejen de pasar por correo y hojas de cálculo. Mira cómo lo hicimos para un importador multimarca de lubricantes.",
        eyebrow: "For distributors, importers, and B2B suppliers",
        eyebrowEs: "Para distribuidores, importadores y proveedores B2B",
        title: "A catalog and a quote request, not a brochure.",
        titleEs: "Un catálogo y una cotización, no un folleto.",
        intro: "Most B2B buyers decide who to call before anyone picks up the phone — by checking whether a supplier's site actually shows what they carry, what the minimums are, and how to request pricing. We build sites around that decision, not a generic 'About Us' template.",
        introEs: "La mayoría de los compradores B2B deciden a quién llamar antes de que alguien conteste el teléfono — revisando si el sitio del proveedor realmente muestra qué manejan, cuáles son los mínimos, y cómo pedir precio. Construimos sitios alrededor de esa decisión, no de un template genérico de 'Quiénes somos'.",
        painPoints: [
            {
                title: "The catalog lives in a PDF or a rep's inbox",
                titleEs: "El catálogo vive en un PDF o en el correo de un vendedor",
                body: "A buyer comparing suppliers wants to see what you carry in two minutes, not request a PDF and wait for a reply.",
                bodyEs: "Un comprador que compara proveedores quiere ver qué manejas en dos minutos, no pedir un PDF y esperar respuesta."
            },
            {
                title: "Every quote starts from zero over email",
                titleEs: "Cada cotización empieza de cero por correo",
                body: "Without a structured request form, every deal starts with the same back-and-forth: what do you need, how much, by when.",
                bodyEs: "Sin un formulario estructurado, cada trato empieza con el mismo ida y vuelta: qué necesitas, cuánto, para cuándo."
            },
            {
                title: "The site doesn't explain minimums or lead times",
                titleEs: "El sitio no explica mínimos ni tiempos de entrega",
                body: "Buyers qualify themselves out silently when they can't tell if their order size or timeline even fits your model.",
                bodyEs: "Los compradores se autodescalifican en silencio cuando no pueden saber si su volumen o plazo encaja con tu modelo."
            }
        ],
        approachPoints: [
            {
                title: "A real portfolio, browsable by brand",
                titleEs: "Un portafolio real, navegable por marca",
                body: "Every brand or product line gets its own section instead of one long undifferentiated list.",
                bodyEs: "Cada marca o línea de producto tiene su propia sección en vez de una sola lista larga y sin diferenciar."
            },
            {
                title: "A quote flow built for consolidated orders",
                titleEs: "Un flujo de cotización pensado para pedidos consolidados",
                body: "One form captures what a buyer actually needs to specify — no generic 'contact us' box.",
                bodyEs: "Un formulario capta lo que un comprador realmente necesita especificar — no una caja genérica de 'contáctanos'."
            },
            {
                title: "A monthly care plan",
                titleEs: "Un plan de cuidado mensual",
                body: "New product lines, updated pricing pages, and catalog changes — handled without a redevelopment invoice.",
                bodyEs: "Nuevas líneas de producto, páginas de precios actualizadas y cambios al catálogo — resueltos sin una factura de rediseño."
            }
        ],
        caseStudyLabel: "See how we did this for ApaOil",
        caseStudyLabelEs: "Mira cómo lo hicimos para ApaOil"
    },
    {
        slug: "website-design-for-contractors",
        image: "/arch-geometric-bw.jpg",
        industry: "Contractors & Home Services",
        industryEs: "Contratistas y Servicios para el Hogar",
        metaTitle: "Website Design for Contractors & Home Services — Fen Web Studio",
        metaTitleEs: "Diseño de Sitios Web para Contratistas y Servicios para el Hogar — Fen Web Studio",
        metaDescription: "A website that gets a contractor found, trusted, and called — built once, kept current every month. No page builder, no plugins, no monthly login required on your end.",
        metaDescriptionEs: "Un sitio web que hace que te encuentren, confíen en ti y te llamen — construido una vez, mantenido al día cada mes. Sin constructor visual, sin plugins, sin necesidad de entrar a nada de tu lado.",
        eyebrow: "For contractors and home service businesses",
        eyebrowEs: "Para contratistas y negocios de servicios para el hogar",
        title: "The site that gets you the call, not just the visit.",
        titleEs: "El sitio que consigue la llamada, no solo la visita.",
        intro: "Most contractor sites exist because someone said they needed one — not because they actually bring in work. We build sites around the two things that matter: proof you do good work, and a way to reach you that doesn't require a phone tag.",
        introEs: "La mayoría de los sitios de contratistas existen porque alguien dijo que hacía falta uno — no porque realmente traigan trabajo. Construimos sitios alrededor de lo que importa: evidencia de que haces buen trabajo, y una forma de contactarte sin jugar al teléfono.",
        painPoints: [
            {
                title: "No proof of past work, just a service list",
                titleEs: "Sin evidencia del trabajo anterior, solo una lista de servicios",
                body: "A homeowner comparing three contractors picks the one who looks like they've actually done the job before.",
                bodyEs: "Un dueño de casa que compara tres contratistas elige al que se ve como que ya ha hecho el trabajo antes."
            },
            {
                title: "The only way to reach you is a phone call",
                titleEs: "La única forma de contactarte es una llamada",
                body: "Some leads won't call during work hours — a simple request form catches the ones a missed call loses.",
                bodyEs: "Algunos clientes no llaman en horario laboral — un formulario simple capta a los que una llamada perdida deja ir."
            },
            {
                title: "Nobody's updated it since it launched",
                titleEs: "Nadie lo ha actualizado desde que se lanzó",
                body: "Old project photos and an outdated service area quietly cost jobs to competitors with a current site.",
                bodyEs: "Fotos de proyectos viejos y una zona de servicio desactualizada pierden trabajos en silencio frente a competidores con un sitio al día."
            }
        ],
        approachPoints: [
            {
                title: "Real project photos, front and center",
                titleEs: "Fotos reales de proyectos, al frente",
                body: "The work speaks for itself instead of hiding behind a stock-photo hero image.",
                bodyEs: "El trabajo habla por sí mismo en vez de esconderse detrás de una imagen genérica de stock."
            },
            {
                title: "A request form that works outside business hours",
                titleEs: "Un formulario que funciona fuera de horario",
                body: "A lead left at 9pm on a Sunday is still a lead — the site should be able to take it.",
                bodyEs: "Un cliente que escribe un domingo a las 9pm sigue siendo un cliente — el sitio debe poder recibirlo."
            },
            {
                title: "A monthly care plan",
                titleEs: "Un plan de cuidado mensual",
                body: "New project photos, updated service areas, and small edits — handled without you touching any code.",
                bodyEs: "Fotos nuevas de proyectos, zonas de servicio actualizadas y pequeños cambios — resueltos sin que toques ningún código."
            }
        ]
    },
    {
        slug: "new-business-website-design",
        image: "/arch-skyline-dusk.jpg",
        industry: "New & Growing Businesses",
        industryEs: "Negocios Nuevos y en Crecimiento",
        metaTitle: "Website Design for New Businesses — Fen Web Studio",
        metaTitleEs: "Diseño de Sitios Web para Negocios Nuevos — Fen Web Studio",
        metaDescription: "Your first website, done right the first time — a small, credible site built around what your business actually needs, with a plan to keep it current as you grow.",
        metaDescriptionEs: "Tu primer sitio web, bien hecho desde el inicio — un sitio pequeño y creíble construido alrededor de lo que tu negocio realmente necesita, con un plan para mantenerlo al día conforme creces.",
        eyebrow: "For businesses building their first website",
        eyebrowEs: "Para negocios que construyen su primer sitio web",
        title: "Your first website, built to actually last.",
        titleEs: "Tu primer sitio web, hecho para durar de verdad.",
        intro: "A first website doesn't need fifteen pages and a blog nobody will write. It needs to say what you do, prove you're legitimate, and give people a clear way to reach you — built on something you won't have to rebuild from scratch in two years.",
        introEs: "Un primer sitio web no necesita quince páginas y un blog que nadie va a escribir. Necesita decir qué haces, demostrar que eres legítimo, y dar una forma clara de contactarte — construido sobre algo que no tendrás que rehacer desde cero en dos años.",
        painPoints: [
            {
                title: "A DIY builder that's slow and hard to trust",
                titleEs: "Un constructor DIY lento y poco confiable",
                body: "Free-tier site builders load slowly, look generic, and often come with someone else's ads or branding attached.",
                bodyEs: "Los constructores gratuitos cargan lento, se ven genéricos y a veces traen anuncios o marca ajena pegada."
            },
            {
                title: "Not knowing what actually needs to be on it",
                titleEs: "No saber qué necesita tener el sitio realmente",
                body: "Most new businesses either build too little — no way to contact them — or too much, chasing features nobody will use yet.",
                bodyEs: "La mayoría de los negocios nuevos construyen muy poco — sin forma de contactarlos — o demasiado, persiguiendo funciones que nadie va a usar todavía."
            },
            {
                title: "No plan for what happens after launch",
                titleEs: "Sin plan para después del lanzamiento",
                body: "A site that never gets updated after week one starts looking abandoned by month six.",
                bodyEs: "Un sitio que nunca se actualiza después de la primera semana empieza a verse abandonado a los seis meses."
            }
        ],
        approachPoints: [
            {
                title: "A small site, built around what you need today",
                titleEs: "Un sitio pequeño, construido alrededor de lo que necesitas hoy",
                body: "A handful of clear sections instead of a template with pages you'll never fill in.",
                bodyEs: "Unas pocas secciones claras en vez de un template con páginas que nunca vas a llenar."
            },
            {
                title: "Fast, credible, and built to grow with you",
                titleEs: "Rápido, creíble y hecho para crecer contigo",
                body: "A real Next.js build instead of a page-builder template — new pages get added as the business does, not rebuilt from zero.",
                bodyEs: "Una construcción real en Next.js en vez de un template de constructor visual — se agregan páginas nuevas conforme crece el negocio, sin rehacer todo desde cero."
            },
            {
                title: "A monthly care plan from day one",
                titleEs: "Un plan de cuidado mensual desde el primer día",
                body: "Small edits and updates handled as you grow, instead of a redesign invoice down the road.",
                bodyEs: "Pequeños cambios y actualizaciones resueltos conforme creces, en vez de una factura de rediseño más adelante."
            }
        ]
    },
    {
        slug: "website-redesign",
        image: "/arch-skyline-silhouette.jpg",
        industry: "Businesses Outgrowing Their Old Site",
        industryEs: "Negocios que Ya Superaron su Sitio Actual",
        metaTitle: "Website Redesign for Small Businesses — Fen Web Studio",
        metaTitleEs: "Rediseño de Sitios Web para Negocios Pequeños — Fen Web Studio",
        metaDescription: "A redesign for a website that no longer represents the business — same domain, same content you actually need, rebuilt to load fast and look current.",
        metaDescriptionEs: "Un rediseño para un sitio que ya no representa al negocio — mismo dominio, mismo contenido que realmente necesitas, reconstruido para cargar rápido y verse actual.",
        eyebrow: "For businesses whose site no longer fits",
        eyebrowEs: "Para negocios cuyo sitio ya no encaja",
        title: "The redesign that doesn't start from a blank page — or your old headaches.",
        titleEs: "El rediseño que no empieza de cero — ni con los mismos dolores de cabeza.",
        intro: "An old website usually isn't broken, it's just stopped representing the business it belongs to. We rebuild it on something faster and easier to maintain, keep what actually works, and cut what was only ever there because a template shipped with it.",
        introEs: "Un sitio viejo casi nunca está roto, solo dejó de representar al negocio al que pertenece. Lo reconstruimos sobre algo más rápido y fácil de mantener, conservamos lo que sí funciona, y quitamos lo que solo estaba ahí porque venía con el template.",
        painPoints: [
            {
                title: "It looks like it was built a decade ago",
                titleEs: "Se ve como si lo hubieran hecho hace una década",
                body: "Fonts, layout, and photography that quietly signal the business hasn't kept up — even if the work itself has.",
                bodyEs: "Tipografía, layout y fotos que sin querer dan a entender que el negocio no se ha actualizado — aunque el trabajo sí lo haya hecho."
            },
            {
                title: "It's slow, and half the plugins are outdated",
                titleEs: "Es lento, y la mitad de los plugins están desactualizados",
                body: "Years of add-ons on top of an old page builder add up to a site that takes seconds too long to load.",
                bodyEs: "Años de complementos sobre un constructor viejo se acumulan en un sitio que tarda segundos de más en cargar."
            },
            {
                title: "Nobody remembers how to update it",
                titleEs: "Ya nadie recuerda cómo actualizarlo",
                body: "The person who built it moved on, and every small change now means starting a search for someone new.",
                bodyEs: "La persona que lo construyó ya no está, y cada cambio pequeño ahora significa buscar a alguien nuevo."
            }
        ],
        approachPoints: [
            {
                title: "Keep the domain, rebuild what's under it",
                titleEs: "Se conserva el dominio, se reconstruye lo que hay debajo",
                body: "No lost SEO history, no confusing migration for returning customers — same address, better site.",
                bodyEs: "Sin perder historial de SEO, sin migración confusa para clientes que regresan — misma dirección, mejor sitio."
            },
            {
                title: "A fast, current design system",
                titleEs: "Un sistema de diseño actual y rápido",
                body: "Built on Next.js instead of a legacy page builder — no plugins to keep updated, no slow admin panel.",
                bodyEs: "Construido en Next.js en vez de un constructor visual heredado — sin plugins que mantener, sin panel lento."
            },
            {
                title: "A monthly care plan",
                titleEs: "Un plan de cuidado mensual",
                body: "So the new site doesn't quietly age the same way the old one did.",
                bodyEs: "Para que el sitio nuevo no envejezca en silencio de la misma forma que el anterior."
            }
        ]
    },
    {
        slug: "low-maintenance-website-design",
        image: "/arch-geometric-lines.jpg",
        industry: "Owners Who Don't Want to Touch a CMS",
        industryEs: "Dueños que No Quieren Tocar un CMS",
        metaTitle: "Low-Maintenance Website Design — Fen Web Studio",
        metaTitleEs: "Diseño de Sitios Web de Bajo Mantenimiento — Fen Web Studio",
        metaDescription: "A website you're not responsible for keeping alive — no CMS login, no plugin updates, no page-builder subscription. Small changes handled for you every month instead.",
        metaDescriptionEs: "Un sitio web del que no eres responsable de mantener vivo — sin entrar a ningún CMS, sin actualizar plugins, sin suscripción a un constructor visual. Los cambios pequeños se resuelven por ti cada mes.",
        eyebrow: "For owners who don't want another login to manage",
        eyebrowEs: "Para dueños que no quieren otro acceso más que administrar",
        title: "A website that's someone else's job to maintain — because it's ours.",
        titleEs: "Un sitio web que es trabajo de alguien más mantener — porque es nuestro.",
        intro: "Not every business owner wants to learn a CMS, and they shouldn't have to. We build the site, then handle the small stuff every month — text changes, new photos, a fixed typo — so it stays current without becoming one more account you have to log into.",
        introEs: "No todo dueño de negocio quiere aprender a usar un CMS, y no debería tener que hacerlo. Construimos el sitio, y luego nos encargamos de lo pequeño cada mes — cambios de texto, fotos nuevas, una errata corregida — para que se mantenga al día sin volverse una cuenta más en la que tienes que entrar.",
        painPoints: [
            {
                title: "A CMS login nobody has time to learn",
                titleEs: "Un acceso a CMS que nadie tiene tiempo de aprender",
                body: "Even a 'simple' page builder still means learning an interface, and re-learning it every time it changes.",
                bodyEs: "Incluso un constructor 'simple' significa aprender una interfaz, y volver a aprenderla cada vez que cambia."
            },
            {
                title: "Plugins and updates that quietly break things",
                titleEs: "Plugins y actualizaciones que rompen cosas en silencio",
                body: "A missed update can take a site down, or open a security hole, without anyone noticing for weeks.",
                bodyEs: "Una actualización que se pasa puede tumbar el sitio, o dejar un hueco de seguridad, sin que nadie se dé cuenta por semanas."
            },
            {
                title: "Small changes end up waiting for months",
                titleEs: "Los cambios pequeños terminan esperando meses",
                body: "A one-line text edit shouldn't require finding a freelancer or remembering an admin password from two years ago.",
                bodyEs: "Un cambio de una línea de texto no debería requerir buscar a un freelancer o recordar una contraseña de hace dos años."
            }
        ],
        approachPoints: [
            {
                title: "Built on Next.js, not a page builder",
                titleEs: "Construido en Next.js, no en un constructor visual",
                body: "No plugin ecosystem to maintain, no admin panel to secure — the site is just fast, static, and simple underneath.",
                bodyEs: "Sin ecosistema de plugins que mantener, sin panel de administración que asegurar — el sitio es rápido, estático y simple por dentro."
            },
            {
                title: "Small requests handled monthly, not invoiced one by one",
                titleEs: "Solicitudes pequeñas resueltas cada mes, sin cotizar una por una",
                body: "Text edits, new photos, small fixes — sent over, handled, done, as part of the standing care plan.",
                bodyEs: "Cambios de texto, fotos nuevas, ajustes pequeños — se envían, se resuelven, listo, como parte del plan de cuidado."
            },
            {
                title: "One point of contact, not a support ticket queue",
                titleEs: "Un solo punto de contacto, no una fila de tickets de soporte",
                body: "A direct line to the person who actually built the site, instead of a generic help desk.",
                bodyEs: "Una línea directa con quien realmente construyó el sitio, en vez de una mesa de ayuda genérica."
            }
        ]
    },
    {
        slug: "website-design-for-training-centers",
        projectSlug: "once-fc",
        image: "/once-fc/once-fc-1.png",
        industry: "Training Centers & Sports Clubs",
        industryEs: "Centros de Entrenamiento y Clubes Deportivos",
        metaTitle: "Website Design for Training Centers & Sports Clubs — Fen Web Studio",
        metaTitleEs: "Diseño de Sitios Web para Centros de Entrenamiento y Clubes Deportivos — Fen Web Studio",
        metaDescription: "A booking-first website for training centers, clubs, and coaches — turn levels, schedules, and locations into something people can book themselves. See how we did it for an adult soccer training club.",
        metaDescriptionEs: "Un sitio centrado en reservas para centros de entrenamiento, clubes y entrenadores — convierte niveles, horarios y sedes en algo que la gente pueda reservar sola. Mira cómo lo hicimos para un club de entrenamiento de fútbol para adultos.",
        eyebrow: "For training centers, sports clubs, and coaches",
        eyebrowEs: "Para centros de entrenamiento, clubes y entrenadores",
        title: "The site that turns 'which WhatsApp group do I join' into a booking.",
        titleEs: "El sitio que convierte '¿a qué grupo de WhatsApp le escribo?' en una reserva.",
        intro: "Most training centers run a real system — levels, schedules, locations — that nobody outside the group ever sees. A prospective member has to message around to figure out where they fit. We build sites that do that sorting up front, so the first message someone sends is 'I'm in,' not 'which one is for me?'",
        introEs: "La mayoría de los centros de entrenamiento manejan un sistema real — niveles, horarios, sedes — que nadie fuera del grupo llega a ver. Un posible integrante tiene que preguntar por su cuenta para saber dónde encaja. Construimos sitios que hacen esa clasificación desde el inicio, para que el primer mensaje que alguien mande sea 'me apunto', no '¿cuál es para mí?'",
        painPoints: [
            {
                title: "Sign-ups happen through DMs, not the site",
                titleEs: "Las inscripciones pasan por DM, no por el sitio",
                body: "Every new member starts with the same back-and-forth on WhatsApp or Instagram that the site should already be answering.",
                bodyEs: "Cada integrante nuevo empieza con el mismo ida y vuelta por WhatsApp o Instagram que el sitio ya debería estar respondiendo."
            },
            {
                title: "No clear way to show levels or locations",
                titleEs: "Sin una forma clara de mostrar niveles o sedes",
                body: "Running multiple groups, levels, or branches through one generic 'contact us' page leaves people guessing which one is actually theirs.",
                bodyEs: "Manejar varios grupos, niveles o sedes a través de una sola página genérica de 'contáctanos' deja a la gente adivinando cuál es la suya."
            },
            {
                title: "The site doesn't build trust before day one",
                titleEs: "El sitio no genera confianza antes del primer día",
                body: "Someone considering a new club or team wants to see real coaching and real sessions before showing up — not a stock photo of a ball.",
                bodyEs: "Alguien que considera un club o equipo nuevo quiere ver entrenamientos y coaches reales antes de presentarse — no una foto de stock de un balón."
            }
        ],
        approachPoints: [
            {
                title: "A structured, self-select system",
                titleEs: "Un sistema estructurado, de autoselección",
                body: "Levels, schedules, and locations laid out clearly enough that people place themselves without messaging first.",
                bodyEs: "Niveles, horarios y sedes presentados con la claridad suficiente para que la gente se ubique sola, sin escribir primero."
            },
            {
                title: "A real booking or trial-request flow",
                titleEs: "Un flujo real de reserva o sesión de prueba",
                body: "One clear path to convert interest into a first session — not a static contact box that goes into a queue.",
                bodyEs: "Un solo camino claro para convertir el interés en una primera sesión — no una caja de contacto estática que cae en una fila."
            },
            {
                title: "A monthly care plan",
                titleEs: "Un plan de cuidado mensual",
                body: "Schedules, levels, and locations shift season to season — updated for you instead of waiting on a redesign.",
                bodyEs: "Horarios, niveles y sedes cambian de temporada en temporada — se actualizan por ti en vez de esperar a un rediseño."
            }
        ],
        caseStudyLabel: "See how we did this for Once FC",
        caseStudyLabelEs: "Mira cómo lo hicimos para Once FC"
    }
];
function getLandingPage(slug) {
    return LANDING_PAGES.find((page)=>page.slug === slug);
}
function getLandingPageByProject(projectSlug) {
    return LANDING_PAGES.find((page)=>page.projectSlug === projectSlug);
}
function buildLandingMetadata(page) {
    return {
        title: page.metaTitle,
        description: page.metaDescription,
        alternates: {
            canonical: `/${page.slug}`
        },
        openGraph: {
            title: page.metaTitle,
            description: page.metaDescription,
            type: "website",
            url: `/${page.slug}`,
            siteName: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE_NAME"]
        },
        twitter: {
            card: "summary_large_image",
            title: page.metaTitle,
            description: page.metaDescription
        }
    };
}
function buildLandingJsonLd(page) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: `Website design for ${page.industry.toLowerCase()}`,
        name: page.metaTitle,
        description: page.metaDescription,
        provider: {
            "@type": "Organization",
            name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE_NAME"],
            url: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE_URL"]
        },
        url: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE_URL"]}/${page.slug}`
    };
}
}),
"[project]/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.mjs [app-ssr] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Reveal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$landingPages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/landingPages.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Footer({ language }) {
    const content = language === "es" ? {
        tagline: "Sitios elegantes para negocios pequeños y medianos, diseñados una vez y cuidados siempre.",
        sectionsLabel: "Secciones",
        solutionsLabel: "Soluciones",
        studioLabel: "Estudio",
        sections: [
            {
                label: "Trabajo",
                href: "/#work"
            },
            {
                label: "Servicios",
                href: "/#services"
            },
            {
                label: "Proceso",
                href: "/#process"
            },
            {
                label: "Notas",
                href: "/blog"
            },
            {
                label: "Contacto",
                href: "/#contact"
            }
        ],
        studio: [
            {
                label: "hello@fenwebstudio.com",
                href: "mailto:hello@fenwebstudio.com"
            },
            {
                label: "Instagram",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INSTAGRAM_URL"]
            },
            {
                label: "Facebook",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FACEBOOK_URL"]
            },
            {
                label: "LinkedIn",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LINKEDIN_URL"]
            },
            {
                label: "Empezar un proyecto",
                href: "/#contact"
            }
        ],
        backToTop: "Volver arriba",
        copyright: `© ${new Date().getFullYear()} Fen Web Studio. Todos los derechos reservados.`
    } : {
        tagline: "Elegant websites for small and medium businesses, designed once and cared for always.",
        sectionsLabel: "Sections",
        solutionsLabel: "Solutions",
        studioLabel: "Studio",
        sections: [
            {
                label: "Work",
                href: "/#work"
            },
            {
                label: "Services",
                href: "/#services"
            },
            {
                label: "Process",
                href: "/#process"
            },
            {
                label: "Notes",
                href: "/blog"
            },
            {
                label: "Contact",
                href: "/#contact"
            }
        ],
        studio: [
            {
                label: "hello@fenwebstudio.com",
                href: "mailto:hello@fenwebstudio.com"
            },
            {
                label: "Instagram",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INSTAGRAM_URL"]
            },
            {
                label: "Facebook",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FACEBOOK_URL"]
            },
            {
                label: "LinkedIn",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LINKEDIN_URL"]
            },
            {
                label: "Start a project",
                href: "/#contact"
            }
        ],
        backToTop: "Back to top",
        copyright: `© ${new Date().getFullYear()} Fen Web Studio. All rights reserved.`
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t border-white/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/#top",
                                        className: "flex items-center gap-2.5 font-[family-name:var(--font-display)] text-xl font-extrabold tracking-tight text-ink",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/icon.svg",
                                                alt: "",
                                                width: 32,
                                                height: 32,
                                                className: "rounded-[8px]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this),
                                            "fenwebstudio"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 max-w-xs text-sm leading-6 text-ink-dim",
                                        children: content.tagline
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold uppercase tracking-[0.28em] text-ink-dim",
                                        children: content.sectionsLabel
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-5 flex flex-col gap-3",
                                        children: content.sections.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item.href,
                                                    className: "text-sm text-ink transition hover:text-accent",
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 21
                                                }, this)
                                            }, item.href, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold uppercase tracking-[0.28em] text-ink-dim",
                                        children: content.solutionsLabel
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-5 flex flex-col gap-3",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$landingPages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANDING_PAGES"].map((page)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/${page.slug}`,
                                                    className: "text-sm text-ink transition hover:text-accent",
                                                    children: language === "es" ? page.industryEs : page.industry
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 21
                                                }, this)
                                            }, page.slug, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 120,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold uppercase tracking-[0.28em] text-ink-dim",
                                        children: content.studioLabel
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-5 flex flex-col gap-3",
                                        children: content.studio.map((item)=>item.href.startsWith("mailto:") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: item.href,
                                                    className: "text-sm text-ink transition hover:text-accent",
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 23
                                                }, this)
                                            }, item.href, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 139,
                                                columnNumber: 21
                                            }, this) : item.href.startsWith("http") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: item.href,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "text-sm text-ink transition hover:text-accent",
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 23
                                                }, this)
                                            }, item.href, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 148,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item.href,
                                                    className: "text-sm text-ink transition hover:text-accent",
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 23
                                                }, this)
                                            }, item.href, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 159,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-ink-dim md:flex-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: content.copyright
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/#top",
                            className: "group inline-flex items-center gap-1.5 transition hover:text-ink",
                            children: [
                                content.backToTop,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                    className: "h-3.5 w-3.5 transition group-hover:-translate-y-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Footer.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Footer.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/useSiteChrome.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSiteChrome",
    ()=>useSiteChrome
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useSiteChrome() {
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            return "es";
        }
        //TURBOPACK unreachable
        ;
        const savedLanguage = undefined;
    });
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            return "dark";
        }
        //TURBOPACK unreachable
        ;
        const savedTheme = undefined;
        const prefersDark = undefined;
    });
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Hydration-safe mount flag: no way to detect "mounted" other than an effect.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.documentElement.dataset.theme = theme;
        document.documentElement.style.colorScheme = theme;
        window.localStorage.setItem("theme", theme);
    }, [
        theme
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        window.localStorage.setItem("language", language);
    }, [
        language
    ]);
    const toggleTheme = ()=>{
        setTheme((current)=>current === "dark" ? "light" : "dark");
    };
    const toggleLanguage = ()=>{
        setLanguage((current)=>current === "en" ? "es" : "en");
    };
    return {
        language,
        theme,
        mounted,
        toggleLanguage,
        toggleTheme
    };
}
}),
"[project]/components/CaseStudy.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CaseStudy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Nav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Nav.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useSiteChrome$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useSiteChrome.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$landingPages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/landingPages.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function CaseStudy({ project }) {
    const { language, theme, mounted, toggleLanguage, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useSiteChrome$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSiteChrome"])();
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-bg"
        }, void 0, false, {
            fileName: "[project]/components/CaseStudy.tsx",
            lineNumber: 21,
            columnNumber: 12
        }, this);
    }
    const landingPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$landingPages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLandingPageByProject"])(project.slug);
    const copy = language === "es" ? {
        back: "Trabajo",
        exampleBadge: "Ejemplo de plantilla",
        visitSite: "Ver sitio en vivo",
        problem: "El problema",
        approach: "El enfoque",
        result: "El resultado",
        services: "Incluido",
        learnMore: "Ver más para",
        ctaTitle: "¿Tu negocio necesita algo así?",
        ctaText: "Cuéntanos qué tienes hoy y hacia dónde quieres llegar.",
        ctaButton: "Empezar un proyecto"
    } : {
        back: "Work",
        exampleBadge: "Template example",
        visitSite: "Visit live site",
        problem: "The problem",
        approach: "The approach",
        result: "The result",
        services: "Included",
        learnMore: "See more for",
        ctaTitle: "Need something like this?",
        ctaText: "Tell us what you have today and where you want to end up.",
        ctaButton: "Start a project"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-bg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Nav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                language: language,
                onToggleLanguage: toggleLanguage,
                theme: theme,
                onToggleTheme: toggleTheme
            }, void 0, false, {
                fileName: "[project]/components/CaseStudy.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative overflow-hidden border-b border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute inset-0 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-cover bg-center opacity-50",
                                        style: {
                                            backgroundImage: `url('${project.image}')`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/CaseStudy.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-bg"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CaseStudy.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CaseStudy.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mx-auto max-w-4xl px-6 pt-16 pb-20 md:px-10 md:pt-24 md:pb-28",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/#work",
                                        className: "inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CaseStudy.tsx",
                                                lineNumber: 78,
                                                columnNumber: 15
                                            }, this),
                                            copy.back
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CaseStudy.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this),
                                    project.isExample && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-white/80 backdrop-blur-sm",
                                        children: copy.exampleBadge
                                    }, void 0, false, {
                                        fileName: "[project]/components/CaseStudy.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "mt-6 font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.02] tracking-tight text-white",
                                        children: project.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/CaseStudy.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 text-base text-white/70 md:text-lg",
                                        children: [
                                            language === "es" ? project.kindEs : project.kind,
                                            " ·",
                                            " ",
                                            project.year
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CaseStudy.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    (project.url || project.instagramUrl) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 flex flex-wrap items-center gap-3",
                                        children: [
                                            project.url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: project.url,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20",
                                                children: [
                                                    copy.visitSite,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CaseStudy.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CaseStudy.tsx",
                                                lineNumber: 99,
                                                columnNumber: 19
                                            }, this),
                                            project.instagramUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: project.instagramUrl,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20",
                                                children: [
                                                    "Instagram",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CaseStudy.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CaseStudy.tsx",
                                                lineNumber: 110,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CaseStudy.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CaseStudy.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CaseStudy.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "border-b border-white/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto grid max-w-4xl gap-10 px-6 py-16 md:grid-cols-2 md:px-10 md:py-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-sm font-medium uppercase tracking-[0.28em] text-accent-bright",
                                            children: copy.problem
                                        }, void 0, false, {
                                            fileName: "[project]/components/CaseStudy.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 text-base leading-8 text-ink-dim",
                                            children: language === "es" ? project.problemEs : project.problem
                                        }, void 0, false, {
                                            fileName: "[project]/components/CaseStudy.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CaseStudy.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-sm font-medium uppercase tracking-[0.28em] text-accent-bright",
                                            children: copy.approach
                                        }, void 0, false, {
                                            fileName: "[project]/components/CaseStudy.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 text-base leading-8 text-ink-dim",
                                            children: language === "es" ? project.approachEs : project.approach
                                        }, void 0, false, {
                                            fileName: "[project]/components/CaseStudy.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CaseStudy.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CaseStudy.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/CaseStudy.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "border-b border-white/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-surface overflow-hidden rounded-[2rem]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative aspect-[16/9]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: project.image,
                                        alt: project.name,
                                        fill: true,
                                        sizes: "(max-width: 1024px) 100vw, 900px",
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CaseStudy.tsx",
                                        lineNumber: 150,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/CaseStudy.tsx",
                                    lineNumber: 149,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CaseStudy.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/CaseStudy.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/CaseStudy.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "border-b border-white/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto grid max-w-4xl gap-10 px-6 py-16 md:grid-cols-2 md:px-10 md:py-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-sm font-medium uppercase tracking-[0.28em] text-accent-bright",
                                            children: copy.result
                                        }, void 0, false, {
                                            fileName: "[project]/components/CaseStudy.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 text-base leading-8 text-ink-dim",
                                            children: language === "es" ? project.resultEs : project.result
                                        }, void 0, false, {
                                            fileName: "[project]/components/CaseStudy.tsx",
                                            lineNumber: 168,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CaseStudy.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-sm font-medium uppercase tracking-[0.28em] text-accent-bright",
                                            children: copy.services
                                        }, void 0, false, {
                                            fileName: "[project]/components/CaseStudy.tsx",
                                            lineNumber: 173,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "mt-4 flex flex-wrap gap-2",
                                            children: (language === "es" ? project.servicesEs : project.services).map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-ink-dim",
                                                    children: service
                                                }, service, false, {
                                                    fileName: "[project]/components/CaseStudy.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/CaseStudy.tsx",
                                            lineNumber: 176,
                                            columnNumber: 15
                                        }, this),
                                        landingPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/${landingPage.slug}`,
                                            className: "mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-bright transition hover:text-accent",
                                            children: [
                                                copy.learnMore,
                                                " ",
                                                language === "es" ? landingPage.industryEs : landingPage.industry,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CaseStudy.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CaseStudy.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CaseStudy.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CaseStudy.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/CaseStudy.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-3xl px-6 py-24 text-center md:px-10 md:py-32",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-balance font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-ink md:text-5xl",
                                    children: copy.ctaTitle
                                }, void 0, false, {
                                    fileName: "[project]/components/CaseStudy.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mx-auto mt-4 max-w-xl text-base leading-8 text-ink-dim",
                                    children: copy.ctaText
                                }, void 0, false, {
                                    fileName: "[project]/components/CaseStudy.tsx",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/#contact",
                                    className: "mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(111,140,255,0.24)] transition hover:bg-accent/90",
                                    children: [
                                        copy.ctaButton,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CaseStudy.tsx",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CaseStudy.tsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CaseStudy.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/CaseStudy.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CaseStudy.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                language: language
            }, void 0, false, {
                fileName: "[project]/components/CaseStudy.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CaseStudy.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_1y54ln_._.js.map