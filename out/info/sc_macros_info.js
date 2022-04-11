"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.info = void 0;
const trigger = ":";
exports.info = {
    "replaceScMacro": {
        "class": "sc_macros",
        "name": "replace_sc_macro",
        "description": "replace a stream connector macro with its value",
        "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_macros.md#replace_sc_macro-method)",
        "trigger": trigger,
        "params": [
            {
                "name": "macro_string",
                "description": "the string with macros inside",
                "type": "string",
                "optional": false
            },
            {
                "name": "event",
                "description": "the event table",
                "type": "table",
                "optional": false
            }
        ],
        "return": [
            {
                "name": "converted_string",
                "description": "the string with converted macros",
                "type": "string",
                "optional": false
            }
        ]
    },
    "getCacheMacro": {
        "class": "sc_macros",
        "name": "get_cache_macro",
        "description": "retrieve a macro value in the cache",
        "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_macros.md#get_cache_macro-method)",
        "trigger": trigger,
        "params": [
            {
                "name": "macro_name",
                "description": "the name of the macro",
                "type": "string",
                "optional": false
            },
            {
                "name": "event",
                "description": "the event table",
                "type": "table",
                "optional": false
            }
        ],
        "return": [
            {
                "name": "false",
                "description": "Returns false if the macro can't be linked to cache data",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "macro_value",
                "description": "Returns the value of the macro if it has been linked to cache data",
                "type": "boolean|string|number",
                "optional": true
            }
        ]
    },
    "getEventMacro": {
        "class": "sc_macros",
        "name": "get_event_macro",
        "description": "retrieve a macro value in the event",
        "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_macros.md#get_event_macro-method)",
        "trigger": trigger,
        "params": [
            {
                "name": "macro_name",
                "description": "the name of the macro",
                "type": "string",
                "optional": false
            },
            {
                "name": "event",
                "description": "the event table",
                "type": "table",
                "optional": false
            }
        ],
        "return": [
            {
                "name": "false",
                "description": "Returns false if the macro can't be linked to event data",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "macro_value",
                "description": "Returns the value of the macro if it has been linked to event data",
                "type": "boolean|string|number",
                "optional": true
            }
        ]
    },
    "convertCentreonMacro": {
        "class": "sc_macros",
        "name": "convert_centreon_macro",
        "description": "replace a Centreon macro with its value",
        "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_macros.md#convert_centreon_macro-method)",
        "trigger": trigger,
        "params": [
            {
                "name": "macro_string",
                "description": "the string with macros inside",
                "type": "string",
                "optional": false
            },
            {
                "name": "event",
                "description": "the event table",
                "type": "table",
                "optional": false
            }
        ],
        "return": [
            {
                "name": "converted_string",
                "description": "the string with converted macros",
                "type": "string",
                "optional": false
            }
        ]
    },
    "getTransformFlag": {
        "class": "sc_macros",
        "name": "get_transform_flag",
        "description": "try to find a transformation flag in the macro name",
        "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_macros.md#get_transform_flag-method)",
        "trigger": trigger,
        "params": [
            {
                "name": "macro",
                "description": "a macro with or without a transformation flag",
                "type": "string",
                "optional": false
            }
        ],
        "return": [
            {
                "name": "macro_name",
                "description": "The name of the macro",
                "type": "string",
                "optional": false
            },
            {
                "name": "flag",
                "description": "The transformation flag if there is one",
                "type": "string|nil",
                "optional": true
            }
        ]
    },
    "transformDate": {
        "class": "sc_macros",
        "name": "transform_date",
        "description": "Transform a timestamp into a human readable format",
        "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_macros.md#transform_date-method)",
        "trigger": trigger,
        "params": [
            {
                "name": "timestamp",
                "description": "timestamp to convert",
                "type": "number",
                "optional": false
            }
        ],
        "return": [
            {
                "name": "date",
                "description": "The converted timestamp",
                "type": "string",
                "optional": true
            }
        ]
    },
    "transformShort": {
        "class": "sc_macros",
        "name": "transform_short",
        "description": "keep the first line of a string",
        "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_macros.md#transform_short-method)",
        "trigger": trigger,
        "params": [
            {
                "name": "text",
                "description": "a long text to shorten",
                "type": "string",
                "optional": false
            }
        ],
        "return": [
            {
                "name": "short_text",
                "description": "The first line of the text",
                "type": "string",
                "optional": true
            }
        ]
    },
    "transformType": {
        "class": "sc_macros",
        "name": "transform_type",
        "description": "convert 0 or 1 into SOFT or HARD",
        "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_macros.md#transform_type-method)",
        "trigger": trigger,
        "params": [
            {
                "name": "state_type",
                "description": "The state type to convert (0 or 1)",
                "type": "number",
                "optional": false
            }
        ],
        "return": [
            {
                "name": "converted_state_type",
                "description": "The state type converted (SOFT/HARD)",
                "type": "string",
                "optional": true
            }
        ]
    },
    "transformState": {
        "class": "sc_macros",
        "name": "transform_state",
        "description": "convert a status code into its matching human readable status (OK, WARNING...)",
        "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_macros.md#transform_state-method)",
        "trigger": trigger,
        "params": [
            {
                "name": "state",
                "description": "The state to convert (0, 1, 2, 3)",
                "type": "number",
                "optional": false
            }
        ],
        "return": [
            {
                "name": "converted_state",
                "description": "The state converted (OK, UP, WARNING....)",
                "type": "string",
                "optional": true
            }
        ]
    }
};
//# sourceMappingURL=sc_macros_info.js.map