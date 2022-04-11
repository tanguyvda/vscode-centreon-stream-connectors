"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCompletion = void 0;
const Doc = require("../documentation/doc");
const sc_macros_info_1 = require("../info/sc_macros_info");
function buildCompletion() {
    const methods = [
        "constructor",
        "replaceScMacro",
        "getCacheMacro",
        "getEventMacro",
        "convertCentreonMacro",
        "getTransformFlag",
        "transformDate",
        "transformShort",
        "transformType",
        "transformState"
    ];
    return Doc.buildAllDocs(methods, sc_macros_info_1.info);
}
exports.buildCompletion = buildCompletion;
//# sourceMappingURL=sc_macros.js.map