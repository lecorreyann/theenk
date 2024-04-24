import {
  useLoaderData
} from "/build/_shared/chunk-BYA6TKQO.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-FMBWYGCM.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/posts.$id.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/posts.$id.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/posts.$id.tsx"
  );
  import.meta.hot.lastModified = "1713569899195.49";
}
function Page() {
  _s();
  const {
    post
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    fontFamily: "system-ui, sans-serif",
    lineHeight: "1.8"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: post.title }, void 0, false, {
      fileName: "app/routes/posts.$id.tsx",
      lineNumber: 47,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/posts.$id.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: post.coverImage.url, alt: post.coverImage.fileName, width: "150", height: "150" }, void 0, false, {
      fileName: "app/routes/posts.$id.tsx",
      lineNumber: 49,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/posts.$id.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: post.content }, void 0, false, {
      fileName: "app/routes/posts.$id.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/posts.$id.tsx",
    lineNumber: 46,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/posts.$id.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_s(Page, "XKKHaSRpeA70aITHb2nxIAbZ33A=", false, function() {
  return [useLoaderData];
});
_c = Page;
var _c;
$RefreshReg$(_c, "Page");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Page as default
};
//# sourceMappingURL=/build/routes/posts.$id-P2KFH6WZ.js.map
