"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCompletion = void 0;
const subscriptions = require("../lib/subscriptions");
const Doc = require("../documentation/doc");
const sc_logger_info_1 = require("../info/sc_logger_info");
function buildCompletion() {
    const methods = [
        "constructor",
        "error",
        "warning",
        "notice",
        "info",
        "debug"
    ];
    let result = [];
    methods.forEach(function (value) {
        const vsCodefuncName = value;
        const data = sc_logger_info_1.info[vsCodefuncName];
        const luaFuncName = data.name;
        // completion only params
        const snippet = Doc.buildLoggerSnippetArgs(data);
        const doc = data.description + " " + data.documentation;
        const prefix = data.class;
        result.concat(result, subscriptions.genericSnippetCompletion(prefix, data.trigger, luaFuncName, snippet, doc), subscriptions.genericHoverDocumentation(prefix, data.trigger, luaFuncName, data));
    });
    return result;
}
exports.buildCompletion = buildCompletion;
//# sourceMappingURL=sc_logger.js.map