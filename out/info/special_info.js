"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specialCompletion = void 0;
const trigger = '.';
exports.specialCompletion = [
    {
        "prefix": "sc_params",
        "trigger": trigger,
        "scope": "any",
        "name": "params",
        "type": "table"
    },
    {
        "prefix": "sc_event",
        "trigger": trigger,
        "scope": "any",
        "name": "event",
        "type": "table"
    }
];
//# sourceMappingURL=special_info.js.map