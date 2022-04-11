const trigger = ':';

export const info = {
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
    "description": "write an warning message in the log file",
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
    "description": "write an notice message in the log file",
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
    "description": "write an debug message in the log file",
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
    "description": "write an info message in the log file",
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
  }
};