"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCompletion = void 0;
const subscriptions = require("../lib/subscriptions");
function buildCompletion() {
    // const methods: Array<string> = [
    //   "constructor",
    //   "ifnilOrEmpty",
    //   "ifWrongType",
    //   "booleanToNumber",
    //   "numberToBoolean",
    //   "checkBooleanNumberOptionSyntax",
    //   "split",
    //   "compareNumbers",
    //   "generatePostfieldParamString",
    //   "loadJsonFile",
    //   "jsonEscape",
    //   "xmlEscape"
    // ];
    // return Doc.buildAllDocs(methods, info);
    return subscriptions.newGenericSnippetCompletion();
}
exports.buildCompletion = buildCompletion;
//# sourceMappingURL=sc_common.js.map