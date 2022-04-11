"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCompletion = void 0;
const Doc = require("../documentation/doc");
const sc_broker_info_1 = require("../info/sc_broker_info");
function buildCompletion() {
    const methods = [
        "constructor",
        "getHostAllInfos",
        "getServiceAllInfos",
        "getHostInfos",
        "getServiceInfos",
        "getHostgroups",
        "getServicegroups",
        "getSeverity",
        "getInstance",
        "getBaInfos",
        "getBvsInfos"
    ];
    return Doc.buildAllDocs(methods, sc_broker_info_1.info);
}
exports.buildCompletion = buildCompletion;
//# sourceMappingURL=sc_broker.js.map