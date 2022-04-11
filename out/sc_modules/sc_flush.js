"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCompletion = void 0;
const Doc = require("../documentation/doc");
const sc_flush_info_1 = require("../info/sc_flush_info");
function buildCompletion() {
    const methods = [
        "constructor",
        "flushAllQueues",
        "resetAllQueues",
        "getQueuesSize",
        "flushMixedPayload",
        "flushHomogeousPayload",
        "flushPayload"
    ];
    return Doc.buildAllDocs(methods, sc_flush_info_1.info);
}
exports.buildCompletion = buildCompletion;
//# sourceMappingURL=sc_flush.js.map