"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.info = void 0;
const trigger = ':';
exports.info = {
    "error": {
        "class": "sc_logger",
        "name": "error",
        "description": "write an error message in the log file",
        "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_logger.md#error-method)",
        "trigger": trigger,
        "params": [
            {
                "name": "message",
                "description": "the message you want to log",
                "type": "string",
                "optional": false
            }
        ],
        "return": []
    },
    "warning": {
        "class": "sc_logger",
        "name": "warning",
        "description": "write a warning message in the log file",
        "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_logger.md#warning-method)",
        "trigger": trigger,
        "params": [
            {
                "name": "message",
                "description": "the message you want to log",
                "type": "string",
                "optional": false
            }
        ],
        "return": []
    },
    "notice": {
        "class": "sc_logger",
        "name": "notice",
        "description": "write a notice message in the log file",
        "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_logger.md#notice-method)",
        "trigger": trigger,
        "params": [
            {
                "name": "message",
                "description": "the message you want to log",
                "type": "string",
                "optional": false
            }
        ],
        "return": []
    },
    "debug": {
        "class": "sc_logger",
        "name": "debug",
        "description": "write a debug message in the log file",
        "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_logger.md#debug-method)",
        "trigger": trigger,
        "params": [
            {
                "name": "message",
                "description": "the message you want to log",
                "type": "string",
                "optional": false
            }
        ],
        "return": []
    },
    "info": {
        "class": "sc_logger",
        "name": "info",
        "description": "write a info message in the log file",
        "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_logger.md#info-method)",
        "trigger": trigger,
        "params": [
            {
                "name": "message",
                "description": "the message you want to log",
                "type": "string",
                "optional": false
            }
        ],
        "return": []
    },
    "logCurlCommand": {
        "class": "sc_logger",
        "name": "log_curl_command",
        "description": "print a notice message containing a ready to use shell curl command in the logfile",
        "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_logger.md#log_curl_command-method)",
        "trigger": trigger,
        "params": [
            {
                "name": "url",
                "description": "the url for the curl command",
                "type": "string",
                "optional": false
            },
            {
                "name": "metadata",
                "description": "metadata containing headers information and http method for curl",
                "type": "table",
                "optional": false
            },
            {
                "name": "params",
                "description": "stream connector parameters",
                "type": "table",
                "optional": false
            },
            {
                "name": "data",
                "description": "data that must be sent",
                "type": "table",
                "optional": true
            }
        ],
        "return": []
    }
};
//# sourceMappingURL=sc_logger_info.js.map