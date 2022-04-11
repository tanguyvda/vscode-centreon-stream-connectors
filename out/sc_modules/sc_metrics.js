"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCompletion = void 0;
const Doc = require("../documentation/doc");
const sc_metrics_info_1 = require("../info/sc_metrics_info");
function buildCompletion() {
    const methods = [
        "constructor",
        "isValidBbdoElement",
        "isValidMetricEvent",
        "isValidHostMetricEvent",
        "isValidServiceMetricEvent",
        "isValidKpiMetricEvent",
        "isValidPerfdata"
    ];
    return Doc.buildAllDocs(methods, sc_metrics_info_1.info);
}
exports.buildCompletion = buildCompletion;
//# sourceMappingURL=sc_metrics.js.map