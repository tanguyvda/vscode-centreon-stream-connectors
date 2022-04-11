"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCompletion = void 0;
const Doc = require("../documentation/doc");
const sc_event_info_1 = require("../info/sc_event_info");
const subscriptions = require("../lib/subscriptions");
function buildCompletion() {
    const methods = [
        "constructor",
        "isValidCategory",
        "isValidElement",
        "isValidEvent",
        "isValidNebEvent",
        "isValidHostStatusEvent",
        "isValidServiceStatusEvent",
        "isValidHost",
        "isValidService",
        "isValidEventStates",
        "isValidEventStatus",
        "isValidEventStateType",
        "isValidEventAcknowledgeState",
        "isValidEventDowntimeState",
        "isValidHostgroup",
        "findHostgroupInList",
        "isValidServicegroup",
        "findServicegroupInList",
        "isValidBamEvent",
        "isValidBa",
        "isValidBaStatusEvent",
        "isValidBaDowntimeState",
        "isValidBaAcknowledgeState",
        "isValidBv",
        "findBvInList",
        "isValidPoller",
        "findPollerInList",
        "isValidHostSeverity",
        "isValidServiceSeverity",
        "isValidAcknowledgementEvent",
        "isValidAuthor",
        "isValidDowntimeEvent",
        "isHostStatusEventDuplicated",
        "isServiceStatusEventDuplicated",
        "isDowntimeEventUseless",
        "isValidDowntimeEventStart",
        "isValidDowntimeEventEnd",
        "isValidStorageEvent"
    ];
    const dataDisposable = [];
    sc_event_info_1.cacheCompletion.forEach(function (value) {
        dataDisposable.concat(dataDisposable, subscriptions.genericCacheCompletion(value));
    });
    sc_event_info_1.eventCompletion.forEach(function (value) {
        dataDisposable.concat(dataDisposable, subscriptions.genericEventCompletion(value));
    });
    return dataDisposable.concat(dataDisposable, Doc.buildAllDocs(methods, sc_event_info_1.info));
}
exports.buildCompletion = buildCompletion;
//# sourceMappingURL=sc_event.js.map