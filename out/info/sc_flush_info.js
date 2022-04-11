"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.info = void 0;
const trigger = ":";
exports.info = {
    "flushAllQueues": {
        "class": "sc_flush",
        "name": "flush_all_queues",
        "description": "tries to flush all queues according to accepted elements",
        "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_flush.md)",
        "trigger": trigger,
        "params": [
            {
                "name": "build_payload_method",
                "description": "the function from the stream connector that will concatenate events in the payload",
                "type": "function",
                "optional": false
            },
            {
                "name": "send_method",
                "description": "the function from the stream connector that will send the data to the wanted tool",
                "type": "function",
                "optional": false
            }
        ],
        "return": [
            {
                "name": "boolean",
                "description": "if flush failed or not",
                "type": "boolean",
                "optional": false
            }
        ]
    },
    "resetAllQueues": {
        "class": "sc_flush",
        "name": "reset_all_queues",
        "description": "put all queues back to their initial state after flushing their events",
        "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_flush.md)",
        "trigger": trigger,
        "params": [],
        "return": []
    },
    "getQueuesSize": {
        "class": "sc_flush",
        "name": "get_queues_size",
        "description": "get the number of events stored in all the queues",
        "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_flush.md)",
        "trigger": trigger,
        "params": [],
        "return": [
            {
                "name": "queues_size",
                "description": "the number of events stored in all queues",
                "type": "number",
                "optional": false
            }
        ]
    },
    "flushMixedPayload": {
        "class": "sc_flush",
        "name": "flush_mixed_payload",
        "description": "flush a payload that contains various type of events (services mixed with hosts for example)",
        "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_flush.md)",
        "trigger": trigger,
        "params": [
            {
                "name": "build_payload_method",
                "description": "the function from the stream connector that will concatenate events in the payload",
                "type": "function",
                "optional": false
            },
            {
                "name": "send_method",
                "description": "the function from the stream connector that will send the data to the wanted tool",
                "type": "function",
                "optional": false
            }
        ],
        "return": [
            {
                "name": "boolean",
                "description": "true or false depending on the success of the operation",
                "type": "boolean",
                "optional": false
            }
        ]
    },
    "flushHomogeousPayload": {
        "class": "sc_flush",
        "name": "flush_homogeneous_payload",
        "description": "flush a payload that contains a single type of events (services with services only and hosts with hosts only for example)",
        "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_flush.md)",
        "trigger": trigger,
        "params": [
            {
                "name": "build_payload_method",
                "description": "the function from the stream connector that will concatenate events in the payload",
                "type": "function",
                "optional": false
            },
            {
                "name": "send_method",
                "description": "the function from the stream connector that will send the data to the wanted tool",
                "type": "function",
                "optional": false
            }
        ],
        "return": [
            {
                "name": "boolean",
                "description": "true or false depending on the success of the operation",
                "type": "boolean",
                "optional": false
            }
        ]
    },
    "flushPayload": {
        "class": "sc_flush",
        "name": "flush_payload",
        "description": "flush a payload that contains a single type of events (services with services only and hosts with hosts only for example)",
        "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_flush.md)",
        "trigger": trigger,
        "params": [
            {
                "name": "build_payload_method",
                "description": "the function from the stream connector that will concatenate events in the payload",
                "type": "function",
                "optional": false
            },
            {
                "name": "send_method",
                "description": "the function from the stream connector that will send the data to the wanted tool",
                "type": "function",
                "optional": false
            }
        ],
        "return": [
            {
                "name": "boolean",
                "description": "true or false depending on the success of the operation",
                "type": "boolean",
                "optional": false
            }
        ]
    }
};
//# sourceMappingURL=sc_flush_info.js.map