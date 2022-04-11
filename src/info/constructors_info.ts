export const constructors = {
  "brokerConstructor": {
    "class": "sc_broker",
    "name": "new",
    "description": "Create an instance of the sc_broker module",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_broker.md#module-constructor)",
    "trigger": ".",
    "params": [
      {
        "name": "sc_logger",
        "description": "an instance of the sc_logger module",
        "type": "table",
        "optional": true
      }
    ],
    "return": []
  },
  "commonConstructor": {
    "class": "sc_common",
    "name": "new",
    "description": "Create an instance of the sc_common module",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_common.md#module-constructor)",
    "trigger": ".",
    "params": [
      {
        "name": "sc_logger",
        "description": "an instance of the sc_logger module",
        "type": "table",
        "optional": true
      }
    ],
    "return": []
  },
  "eventConstructor": {
    "class": "sc_event",
    "name": "new",
    "description": "Create an instance of the sc_event module",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#module-constructor)",
    "trigger": ".",
    "params": [
      {
        "name": "event",
        "description": "an event",
        "type": "table",
        "optional": false
      },
      {
        "name": "params",
        "description": "the list of parameters",
        "type": "table",
        "optional": false
      },
      {
        "name": "sc_logger",
        "description": "an instance of the sc_logger module",
        "type": "table",
        "optional": false
      },
      {
        "name": "sc_broker",
        "description": "an instance of the sc_broker module",
        "type": "table",
        "optional": false
      }
    ],
    "return": []
  },
  "flushConstructor": {
    "class": "sc_flush",
    "name": "new",
    "description": "Create an instance of the sc_flush module",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_flush.md#module-constructor)",
    "trigger": ".",
    "params": [
      {
        "name": "params",
        "description": "a list of parameters",
        "type": "table",
        "optional": false
      },
      {
        "name": "sc_logger",
        "description": "an instance of the sc_logger module",
        "type": "table",
        "optional": true
      }
    ],
    "return": []
  },
  "loggerConstructor": {
    "class": "sc_logger",
    "name": "new",
    "description": "Create an instance of the sc_logger module",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_logger.md#module-constructor)",
    "trigger": ".",
    "params": [
      {
        "name": "logfile",
        "description": "the log file (Default value: /var/log/centreon-broker/stream-connector.log)",
        "type": "string",
        "optional": true
      },
      {
        "name": "severity",
        "description": "the maximum accepted severity level. Going from 1 (only error and notice message) to 3 (all messages including debug). Default value: 1",
        "type": "number",
        "optional": true
      }
    ],
    "return": []
  },
  "macrosConstructor": {
    "class": "sc_macros",
    "name": "new",
    "description": "Create an instance of the sc_macros module",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_macros.md#module-constructor)",
    "trigger": ".",
    "params": [
      {
        "name": "params",
        "description": "a list of parameters",
        "type": "table",
        "optional": false
      },
      {
        "name": "sc_logger",
        "description": "an instance of the sc_logger module",
        "type": "table",
        "optional": true
      }
    ],
    "return": []
  },
  "metricsConstructor": {
    "class": "sc_metrics",
    "name": "new",
    "description": "Create an instance of the sc_metrics module",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_metrics.md#module-constructor)",
    "trigger": ".",
    "params": [
      {
        "name": "event",
        "description": "an event",
        "type": "table",
        "optional": false
      },
      {
        "name": "params",
        "description": "the list of parameters",
        "type": "table",
        "optional": false
      },
      {
        "name": "sc_common",
        "description": "an instance of the sc_common mmodule",
        "type": "table",
        "optional": false
      },
      {
        "name": "sc_broker",
        "description": "an instance of the sc_broker module",
        "type": "table",
        "optional": false
      },
      {
        "name": "sc_logger",
        "description": "an instance of the sc_logger module",
        "type": "table",
        "optional": true
      }
    ],
    "return": []
  },
  "paramConstructor": {
    "class": "sc_param",
    "name": "new",
    "description": "Create an instance of the sc_broker module",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_broker.md#module-constructor)",
    "trigger": ".",
    "params": [
      {
        "name": "sc_common",
        "description": "an instance of the sc_common module",
        "type": "table",
        "optional": false
      },
      {
        "name": "sc_logger",
        "description": "an instance of the sc_logger module",
        "type": "table",
        "optional": true
      }
    ],
    "return": []
  }
};