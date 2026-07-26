(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2d$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoonStar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon-star.mjs [app-client] (ecmascript) <export default as MoonStar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2d$medium$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SunMedium$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun-medium.mjs [app-client] (ecmascript) <export default as SunMedium>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Nav({ language, onToggleLanguage, theme, onToggleTheme }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-40 border-b border-white/10 bg-bg/70 backdrop-blur-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/#top",
                        className: "flex items-center gap-2.5 font-[family-name:var(--font-display)] text-lg font-extrabold tracking-tight text-ink",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden items-center gap-9 md:flex",
                        children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden items-center rounded-full border border-[color:var(--line)] bg-bg-raised/80 p-1 shadow-sm md:inline-flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onToggleLanguage,
                                        className: `rounded-full px-3 py-1.5 text-sm font-medium ${language === "en" ? "bg-accent text-white" : "text-ink-dim hover:text-ink"}`,
                                        children: "EN"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Nav.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
                                onClick: onToggleTheme,
                                className: "hidden h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] bg-bg-raised/80 text-ink shadow-sm transition hover:bg-white/10 md:inline-flex",
                                children: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2d$medium$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SunMedium$3e$__["SunMedium"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/Nav.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2d$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoonStar$3e$__["MoonStar"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#contact",
                                className: "hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-ink transition hover:border-accent-bright/60 hover:bg-white/10 hover:text-accent-bright md:inline-flex",
                                children: [
                                    ctaLabel,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-label": open ? "Close menu" : "Open menu",
                        "aria-expanded": open,
                        onClick: ()=>setOpen((v)=>!v),
                        className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink shadow-sm transition hover:bg-white/10 md:hidden",
                        children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-4.5 w-4.5"
                        }, void 0, false, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
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
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-6 mb-6 flex flex-col gap-2 rounded-2xl border border-white/10 bg-bg-raised/95 p-3 backdrop-blur-xl md:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onToggleLanguage,
                                className: `flex-1 rounded-xl px-3 py-2 text-sm font-medium ${language === "en" ? "bg-accent text-white" : "bg-white/10 text-ink"}`,
                                children: "EN"
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onToggleLanguage,
                                className: `flex-1 rounded-xl px-3 py-2 text-sm font-medium ${language === "es" ? "bg-accent text-white" : "bg-white/10 text-ink"}`,
                                children: "ES"
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onToggleTheme,
                                className: "rounded-xl border border-[color:var(--line)] bg-white/10 p-2 text-ink",
                                children: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2d$medium$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SunMedium$3e$__["SunMedium"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/Nav.tsx",
                                    lineNumber: 172,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2d$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoonStar$3e$__["MoonStar"], {
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
                    links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: link.href,
                            onClick: ()=>setOpen(false),
                            className: "rounded-xl px-4 py-3 text-sm text-ink-dim transition hover:bg-white/5 hover:text-ink",
                            children: link.label
                        }, link.href, false, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(Nav, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Reveal({ children, className, delayMs = 0 }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reveal.useEffect": ()=>{
            const node = ref.current;
            if (!node) return;
            const observer = new IntersectionObserver({
                "Reveal.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.disconnect();
                    }
                }
            }["Reveal.useEffect"], {
                threshold: 0.15,
                rootMargin: "0px 0px -10% 0px"
            });
            observer.observe(node);
            return ({
                "Reveal.useEffect": ()=>observer.disconnect()
            })["Reveal.useEffect"];
        }
    }["Reveal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(Reveal, "F7BtIAxVh3vOWU1Jr24RYsj9CHc=");
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/site.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INSTAGRAM_URL",
    ()=>INSTAGRAM_URL,
    "SITE_NAME",
    ()=>SITE_NAME,
    "SITE_URL",
    ()=>SITE_URL
]);
const SITE_URL = "https://www.fenwebstudio.com";
const SITE_NAME = "Fen Web Studio";
const INSTAGRAM_URL = "https://www.instagram.com/fenwebstudio/";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/landingPages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-client] (ecmascript)");
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
            siteName: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_NAME"]
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
            name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_NAME"],
            url: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_URL"]
        },
        url: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_URL"]}/${page.slug}`
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.mjs [app-client] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$landingPages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/landingPages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-client] (ecmascript)");
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
                href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSTAGRAM_URL"]
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
                href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSTAGRAM_URL"]
            },
            {
                label: "Start a project",
                href: "/#contact"
            }
        ],
        backToTop: "Back to top",
        copyright: `© ${new Date().getFullYear()} Fen Web Studio. All rights reserved.`
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t border-white/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/#top",
                                        className: "flex items-center gap-2.5 font-[family-name:var(--font-display)] text-xl font-extrabold tracking-tight text-ink",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/icon.svg",
                                                alt: "",
                                                width: 32,
                                                height: 32,
                                                className: "rounded-[8px]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, this),
                                            "fenwebstudio"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 max-w-xs text-sm leading-6 text-ink-dim",
                                        children: content.tagline
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold uppercase tracking-[0.28em] text-ink-dim",
                                        children: content.sectionsLabel
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-5 flex flex-col gap-3",
                                        children: content.sections.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item.href,
                                                    className: "text-sm text-ink transition hover:text-accent",
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 21
                                                }, this)
                                            }, item.href, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 98,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold uppercase tracking-[0.28em] text-ink-dim",
                                        children: content.solutionsLabel
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-5 flex flex-col gap-3",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$landingPages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANDING_PAGES"].map((page)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/${page.slug}`,
                                                    className: "text-sm text-ink transition hover:text-accent",
                                                    children: language === "es" ? page.industryEs : page.industry
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 21
                                                }, this)
                                            }, page.slug, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 116,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold uppercase tracking-[0.28em] text-ink-dim",
                                        children: content.studioLabel
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-5 flex flex-col gap-3",
                                        children: content.studio.map((item)=>item.href.startsWith("mailto:") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: item.href,
                                                    className: "text-sm text-ink transition hover:text-accent",
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 23
                                                }, this)
                                            }, item.href, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 135,
                                                columnNumber: 21
                                            }, this) : item.href.startsWith("http") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: item.href,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "text-sm text-ink transition hover:text-accent",
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 23
                                                }, this)
                                            }, item.href, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 144,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item.href,
                                                    className: "text-sm text-ink transition hover:text-accent",
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 23
                                                }, this)
                                            }, item.href, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 155,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-ink-dim md:flex-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: content.copyright
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/#top",
                            className: "group inline-flex items-center gap-1.5 transition hover:text-ink",
                            children: [
                                content.backToTop,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                    className: "h-3.5 w-3.5 transition group-hover:-translate-y-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Footer.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Footer.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/useSiteChrome.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSiteChrome",
    ()=>useSiteChrome
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useSiteChrome() {
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useSiteChrome.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const savedLanguage = window.localStorage.getItem("language");
            return savedLanguage === "en" || savedLanguage === "es" ? savedLanguage : "es";
        }
    }["useSiteChrome.useState"]);
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useSiteChrome.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const savedTheme = window.localStorage.getItem("theme");
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            return savedTheme === "dark" || savedTheme === "light" ? savedTheme : prefersDark ? "dark" : "light";
        }
    }["useSiteChrome.useState"]);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSiteChrome.useEffect": ()=>{
            // Hydration-safe mount flag: no way to detect "mounted" other than an effect.
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setMounted(true);
        }
    }["useSiteChrome.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSiteChrome.useEffect": ()=>{
            document.documentElement.dataset.theme = theme;
            document.documentElement.style.colorScheme = theme;
            window.localStorage.setItem("theme", theme);
        }
    }["useSiteChrome.useEffect"], [
        theme
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSiteChrome.useEffect": ()=>{
            window.localStorage.setItem("language", language);
        }
    }["useSiteChrome.useEffect"], [
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
_s(useSiteChrome, "AiEqXkTiCfM58rH792BMHoALWEE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/BlogPost.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Nav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useSiteChrome$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useSiteChrome.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function formatDate(dateStr, language) {
    const date = new Date(`${dateStr}T00:00:00`);
    return date.toLocaleDateString(language === "es" ? "es-ES" : "en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
}
function BlogPost({ post }) {
    _s();
    const { language, theme, mounted, toggleLanguage, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useSiteChrome$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSiteChrome"])();
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-bg"
        }, void 0, false, {
            fileName: "[project]/components/BlogPost.tsx",
            lineNumber: 28,
            columnNumber: 12
        }, this);
    }
    const copy = language === "es" ? {
        back: "Notas del estudio",
        ctaTitle: "¿Tu sitio necesita este tipo de atención?",
        ctaText: "Cuéntanos qué tienes hoy y hacia dónde quieres llegar.",
        ctaButton: "Empezar un proyecto"
    } : {
        back: "Notes from the studio",
        ctaTitle: "Does your site need this kind of attention?",
        ctaText: "Tell us what you have today and where you want to end up.",
        ctaButton: "Start a project"
    };
    const title = language === "es" ? post.titleEs : post.title;
    const body = language === "es" ? post.bodyEs : post.body;
    const paragraphs = body.split("\n\n");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-bg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                language: language,
                onToggleLanguage: toggleLanguage,
                theme: theme,
                onToggleTheme: toggleTheme
            }, void 0, false, {
                fileName: "[project]/components/BlogPost.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative border-b border-white/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-3xl px-6 pt-16 pb-16 md:px-10 md:pt-24 md:pb-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/blog",
                                    className: "inline-flex items-center gap-2 text-sm font-medium text-ink-dim transition hover:text-ink",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BlogPost.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this),
                                        copy.back
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BlogPost.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-accent-bright",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: language === "es" ? post.tagEs : post.tag
                                        }, void 0, false, {
                                            fileName: "[project]/components/BlogPost.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-1 w-1 rounded-full bg-accent-bright/60"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BlogPost.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-ink-dim",
                                            children: formatDate(post.date, language)
                                        }, void 0, false, {
                                            fileName: "[project]/components/BlogPost.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BlogPost.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-balance mt-6 font-[family-name:var(--font-display)] text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-ink",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/components/BlogPost.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BlogPost.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/BlogPost.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "border-b border-white/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-6",
                                children: paragraphs.map((paragraph, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base leading-8 text-ink-dim",
                                        children: paragraph
                                    }, index, false, {
                                        fileName: "[project]/components/BlogPost.tsx",
                                        lineNumber: 87,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/BlogPost.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/BlogPost.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/BlogPost.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-3xl px-6 py-24 text-center md:px-10 md:py-32",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-balance font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-ink md:text-5xl",
                                    children: copy.ctaTitle
                                }, void 0, false, {
                                    fileName: "[project]/components/BlogPost.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mx-auto mt-4 max-w-xl text-base leading-8 text-ink-dim",
                                    children: copy.ctaText
                                }, void 0, false, {
                                    fileName: "[project]/components/BlogPost.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/#contact",
                                    className: "mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(111,140,255,0.24)] transition hover:bg-accent/90",
                                    children: copy.ctaButton
                                }, void 0, false, {
                                    fileName: "[project]/components/BlogPost.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BlogPost.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/BlogPost.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BlogPost.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                language: language
            }, void 0, false, {
                fileName: "[project]/components/BlogPost.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BlogPost.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(BlogPost, "90s2OwYraioM3dsLIucP6RpMzQw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useSiteChrome$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSiteChrome"]
    ];
});
_c = BlogPost;
var _c;
__turbopack_context__.k.register(_c, "BlogPost");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_18i92sd._.js.map