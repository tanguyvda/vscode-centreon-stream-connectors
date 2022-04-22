const trigger = ":";

export const info = {
  "isValidBbdoElement": {
    "class": "sc_metrics",
    "name": "is_valid_bbdo_element",
    "description": "checks if the event is in an accepted category and is an appropriate element",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_metrics.md#is_valid_bbdo_element-method)",
    "trigger": trigger,
    "params": [],
    "return": [
      {
        "name": "boolean",
        "description": "true or false",
        "type": "boolean",
        "optional": false
      }
    ]
  },
  "isValidMetricEvent": {
    "class": "sc_metrics",
    "name": "is_valid_metric_event",
    "description": "makes sure that the metric event is valid if it is a host, service, service_status or kpi_event event",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_metrics.md#is_valid_metric_event-method)",
    "trigger": trigger,
    "params": [],
    "return": [
      {
        "name": "boolean",
        "description": "true or false",
        "type": "boolean",
        "optional": false
      }
    ]
  },
  "isValidHostMetricEvent": {
    "class": "sc_metrics",
    "name": "is_valid_host_metric_event",
    "description": "makes sure that the metric event is valid host metric event",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_metrics.md#is_valid_host_metric_event-method)",
    "trigger": trigger,
    "params": [],
    "return": [
      {
        "name": "boolean",
        "description": "true or false",
        "type": "boolean",
        "optional": false
      }
    ]
  },
  "isValidServiceMetricEvent": {
    "class": "sc_metrics",
    "name": "is_valid_service_metric_event",
    "description": "makes sure that the metric event is valid service metric event",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_metrics.md#is_valid_service_metric_event-method)",
    "trigger": trigger,
    "params": [],
    "return": [
      {
        "name": "boolean",
        "description": "true or false",
        "type": "boolean",
        "optional": false
      }
    ]
  },
  "isValidKpiMetricEvent": {
    "class": "sc_metrics",
    "name": "is_valid_kpi_metric_event",
    "description": "makes sure that the metric event is valid KPI metric event",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_metrics.md#is_valid_kpi_metric_event-method)",
    "trigger": trigger,
    "params": [],
    "return": [
      {
        "name": "boolean",
        "description": "true or false",
        "type": "boolean",
        "optional": false
      }
    ]
  },
  "isValidPerfdata": {
    "class": "sc_metrics",
    "name": "is_valid_perfdata",
    "description": "makes sure that the performance data is valid",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_metrics.md#is_valid_perfdata-method)",
    "trigger": trigger,
    "params": [
      {
        "name": "perfdata",
        "description": "a string that contains perfdata",
        "type": "string",
        "optional": false
      }
    ],
    "return": [
      {
        "name": "boolean",
        "description": "true or false",
        "type": "boolean",
        "optional": false
      }
    ]
  },
  "buildMetric": {
    "class": "sc_metrics",
    "name": "build_metric",
    "description": "use the stream connector format method to parse every metric in the event",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_metrics.md#build_metric-method)",
    "trigger": trigger,
    "params": [
      {
        "name": "format_metric",
        "description": "the format method from the stream connector",
        "type": "function",
        "optional": false
      }
    ],
    "return": []
  }
};