(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/GercabApp.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Import statements
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$to$2d$print$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-to-print/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html2canvas/dist/html2canvas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const GercabGo = ()=>{
    _s();
    var _s1 = __turbopack_context__.k.signature();
    const refs = {
        jejak: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(),
        laporan: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(),
        galeri: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(),
        agenda: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])()
    };
    const data = {
        jejak: [
            {
                id: 1,
                nama: 'Aktivitas 1',
                deskripsi: 'Deskripsi aktivitas hijau 1'
            },
            {
                id: 2,
                nama: 'Aktivitas 2',
                deskripsi: 'Deskripsi aktivitas hijau 2'
            }
        ],
        laporan: [
            {
                id: 1,
                kegiatan: 'Laporan Kegiatan 1',
                detail: 'Detail laporan 1'
            },
            {
                id: 2,
                kegiatan: 'Laporan Kegiatan 2',
                detail: 'Detail laporan 2'
            }
        ],
        galeri: [
            {
                id: 1,
                foto: 'Foto Galeri 1',
                deskripsi: 'Deskripsi galeri 1'
            },
            {
                id: 2,
                foto: 'Foto Galeri 2',
                deskripsi: 'Deskripsi galeri 2'
            }
        ],
        agenda: [
            {
                id: 1,
                kegiatan: 'Agenda 1',
                waktu: 'Tanggal dan waktu agenda 1'
            },
            {
                id: 2,
                kegiatan: 'Agenda 2',
                waktu: 'Tanggal dan waktu agenda 2'
            }
        ]
    };
    const exportToExcel = (rows, filename)=>{
        const ws = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(rows);
        const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_new();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, ws, filename);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeFile"])(wb, `${filename}.xlsx`);
    };
    const exportToPDF = async (ref, filename)=>{
        const canvas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ref.current);
        const imgData = canvas.toDataURL('image/png');
        const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = imgProps.height * pdfWidth / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`${filename}.pdf`);
    };
    const handlePrint = (ref)=>{
        _s1();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$to$2d$print$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReactToPrint"])({
            content: {
                "GercabGo.handlePrint.useReactToPrint": ()=>ref.current
            }["GercabGo.handlePrint.useReactToPrint"]
        })();
    };
    _s1(handlePrint, "VKD3Egvmmk8Ui+fL14EWKYG6diQ=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$to$2d$print$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReactToPrint"]
        ];
    });
    const renderTable = (items, columns)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "min-w-full border text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    className: "bg-gray-100",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: columns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "border px-4 py-2 text-left font-medium",
                                children: col.header
                            }, col.key, false, {
                                fileName: "[project]/components/GercabApp.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/GercabApp.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/GercabApp.tsx",
                    lineNumber: 58,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "hover:bg-gray-50",
                            children: columns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "border px-4 py-2",
                                    children: item[col.key]
                                }, col.key, false, {
                                    fileName: "[project]/components/GercabApp.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this))
                        }, item.id, false, {
                            fileName: "[project]/components/GercabApp.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/GercabApp.tsx",
                    lineNumber: 67,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/GercabApp.tsx",
            lineNumber: 57,
            columnNumber: 5
        }, this);
    const sections = [
        {
            key: 'jejak',
            title: 'Jejak Hijau',
            columns: [
                {
                    key: 'id',
                    header: 'ID'
                },
                {
                    key: 'nama',
                    header: 'Nama Aktivitas'
                },
                {
                    key: 'deskripsi',
                    header: 'Deskripsi'
                }
            ]
        },
        {
            key: 'laporan',
            title: 'Lapor Lingkungan',
            columns: [
                {
                    key: 'id',
                    header: 'ID'
                },
                {
                    key: 'kegiatan',
                    header: 'Nama Kegiatan'
                },
                {
                    key: 'detail',
                    header: 'Detail'
                }
            ]
        },
        {
            key: 'galeri',
            title: 'Galeri Kearifan Lokal',
            columns: [
                {
                    key: 'id',
                    header: 'ID'
                },
                {
                    key: 'foto',
                    header: 'Foto'
                },
                {
                    key: 'deskripsi',
                    header: 'Deskripsi'
                }
            ]
        },
        {
            key: 'agenda',
            title: 'Agenda & Notifikasi Kegiatan',
            columns: [
                {
                    key: 'id',
                    header: 'ID'
                },
                {
                    key: 'kegiatan',
                    header: 'Kegiatan'
                },
                {
                    key: 'waktu',
                    header: 'Waktu'
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 space-y-8",
        children: sections.map(({ key, title, columns })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border p-4 rounded shadow bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: refs[key],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold mb-4",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/GercabApp.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this),
                            renderTable(data[key], columns)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/GercabApp.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-2 mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>exportToExcel(data[key], title.replace(/\s+/g, '_')),
                                className: "bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600",
                                children: "Export Excel"
                            }, void 0, false, {
                                fileName: "[project]/components/GercabApp.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>exportToPDF(refs[key], title.replace(/\s+/g, '_')),
                                className: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",
                                children: "Export PDF"
                            }, void 0, false, {
                                fileName: "[project]/components/GercabApp.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handlePrint(refs[key]),
                                className: "bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700",
                                children: "Cetak"
                            }, void 0, false, {
                                fileName: "[project]/components/GercabApp.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/GercabApp.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this)
                ]
            }, key, true, {
                fileName: "[project]/components/GercabApp.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/GercabApp.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
};
_s(GercabGo, "lMpx0MGaj6zlHbbg/dUVn445DPc=");
_c = GercabGo;
const __TURBOPACK__default__export__ = GercabGo;
var _c;
__turbopack_context__.k.register(_c, "GercabGo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_GercabApp_tsx_8afa7040._.js.map