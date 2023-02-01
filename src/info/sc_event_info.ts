let trigger = ':';

export const info = {
  "isValidCategory": {
    "class": "sc_event",
    "name": "is_valid_category",
    "description": "check if the category of the event is accepted according to the stream connector params",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_category-method)",
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
  "isValidElement": {
    "class": "sc_event",
    "name": "is_valid_element",
    "description": "check if the element of the event is accepted according to the stream connector params",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_element-method)",
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
  "isValidEvent": {
    "class": "sc_event",
    "name": "is_valid_event",
    "description": "check if the event is valid according to the stream connector params",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_event-method)",
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
  "isValidNebEvent": {
    "class": "sc_event",
    "name": "is_valid_neb_event",
    "description": "check if the neb event is valid according to the stream connector params",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_neb_event-method)",
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
  "isValidHostStatusEvent": {
    "class": "sc_event",
    "name": "is_valid_host_status_event",
    "description": "check the 'host status' event is valid according to the stream connector params",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_host_status_event-method)",
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
  "isValidServiceStatusEvent": {
    "class": "sc_event",
    "name": "is_valid_service_status_event",
    "description": "check the 'servce status' event is valid according to the stream connector params",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_service_status_event-method)",
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
  "isValidHost": {
    "class": "sc_event",
    "name": "is_valid_host",
    "description": "check if the host name and/or ID are valid according to the stream connector params",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_host-method)",
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
  "isValidService": {
    "class": "sc_event",
    "name": "is_valid_service",
    "description": "check if the service description and/or ID are are valid according to the stream connector params",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_service-method)",
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
  "isValidEventStates": {
    "class": "sc_event",
    "name": "is_valid_event_states",
    "description": "check if the state (HARD/SOFT), acknowledgement state and downtime state are valid according to the stream connector params",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_event_states-method)",
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
  "isValidEventStatus": {
    "class": "sc_event",
    "name": "is_valid_event_status",
    "description": "check if the status (OK, DOWN...) of the event is valid according to the stream connector params",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_event_status-method)",
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
  "isValidEventStateType": {
    "class": "sc_event",
    "name": "is_valid_event_state_type",
    "description": "check if the state (HARD/SOFT) of the event is valid according to the stream connector params",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_event_state_type-method)",
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
  "isValidEventAcknowledgeState": {
    "class": "sc_event",
    "name": "is_valid_event_acknowledge_state",
    "description": "check if the acknowledgement state of the event is valid according to the stream connector params",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_event_acknowledge_state-method)",
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
  "isValidEventFlappingState": {
    "class": "sc_event",
    "name": "is_valid_event_flapping_state",
    "description": "check if the flapping state of the event is valid according to the stream connector params",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_event_flapping_state-method)",
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
  "isValidEventDowntimeState": {
    "class": "sc_event",
    "name": "is_valid_event_downtime_state",
    "description": "check if the downtime state of the event is valid according to the stream connector params",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_event_downtime_state-method)",
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
  "isValidHostgroup": {
    "class": "sc_event",
    "name": "is_valid_hostgroup",
    "description": "check if the host is in an accepted hostgroup according to the stream connector params",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_hostgroup-method)",
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
  "findHostgroupInList": {
    "class": "sc_event",
    "name": "find_hostgroup_in_list",
    "description": "check if one of the hostgroups of the event is in the list of accepted hostgroups provided in the stream connector configuration. Stops at first match",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#find_hostgroup_in_list-method)",
    "trigger": trigger,
    "params": [],
    "return": [
      {
        "name": "hostgroup",
        "description": "Return the first hostgroup that matched",
        "type": "string",
        "optional": true
      },
      {
        "name": "false",
        "description": "Return false if no hostgroup matched",
        "type": "boolean",
        "optional": true
      }
    ]
  },
  "isValidServicegroup": {
    "class": "sc_event",
    "name": "is_valid_servicegroup",
    "description": "check if the service is in an accepted servicegroup according to the stream connector params",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_servicegroup-method)",
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
  "findServicegroupInList": {
    "class": "sc_event",
    "name": "find_servicegroup_in_list",
    "description": "check if one of the servicegroups of the event is in the list of accepted servicegroups provided in the stream connector configuration. Stops at first match",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#find_servicegroup_in_list-method)",
    "trigger": trigger,
    "params": [],
    "return": [
      {
        "name": "servicegroup",
        "description": "Return the first servicegroup that matched",
        "type": "string",
        "optional": true
      },
      {
        "name": "false",
        "description": "Return false if no servicegroup matched",
        "type": "boolean",
        "optional": true
      }
    ]
  },
  "isValidBamEvent": {
    "class": "sc_event",
    "name": "is_valid_bam_event",
    "description": "check if the BAM event is valid according to the stream connector params",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_bam_event-method)",
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
  "isValidBa": {
    "class": "sc_event",
    "name": "is_valid_ba",
    "description": "check if the BA name and/or ID are are valid according to the stream connector params",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_ba-method)",
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
  "isValidBaStatusEvent": {
    "class": "sc_event",
    "name": "is_valid_ba_status_event",
    "description": "check if the 'ba status' (OK, WARNING, CRITICAL) event is valid according to the stream connector params",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_ba_status_event-method)",
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
  "isValidBaDowntimeState": {
    "class": "sc_event",
    "name": "is_valid_ba_downtime_state",
    "description": "check if the BA downtime state is valid according to the stream connector params",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_ba_downtime_state-method)",
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
  "isValidBaAcknowledgeState": {
    "class": "sc_event",
    "name": "is_valid_ba_acknowledge_state",
    "description": "DOES NOTHING",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_ba_acknowledge_state-method)",
    "trigger": trigger,
    "params": [],
    "return": [
      {
        "name": "boolean",
        "description": "return true beacause it does nothing",
        "type": "boolean",
        "optional": false
      }
    ]
  },
  "isValidBv": {
    "class": "sc_event",
    "name": "is_valid_bv",
    "description": "check if the BA is in an accepted BV according to the stream connector params",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_bv-method)",
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
  "findBvInList": {
    "class": "sc_event",
    "name": "find_bv_in_list",
    "description": "check if one of the BV of the event is in the list of accepted BV provided in the stream connector configuration. Stops at first match",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#find_bv_in_list-method)",
    "trigger": trigger,
    "params": [],
    "return": [
      {
        "name": "bv",
        "description": "Return the first bv that matched",
        "type": "string",
        "optional": true
      },
      {
        "name": "false",
        "description": "Return false if no bv matched",
        "type": "boolean",
        "optional": true
      }
    ]
  },
  "isValidPoller": {
    "class": "sc_event",
    "name": "is_valid_poller",
    "description": "check if the host is monitored from an accepted poller according to the stream connector params",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_poller-method)",
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
  "findPollerInList": {
    "class": "sc_event",
    "name": "find_poller_in_list",
    "description": "check if the poller that monitores the host is in the list of accepted pollers provided in the stream connector configuration. Stops at first match",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#find_poller_in_list-method)",
    "trigger": trigger,
    "params": [],
    "return": [
      {
        "name": "bv",
        "description": "Return the first poller that matched",
        "type": "string",
        "optional": true
      },
      {
        "name": "false",
        "description": "Return false if no poller matched",
        "type": "boolean",
        "optional": true
      }
    ]
  },
  "isValidHostSeverity": {
    "class": "sc_event",
    "name": "is_valid_host_severity",
    "description": "check if a host has a valid severity",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_host_severity-method)",
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
  "isValidServiceSeverity": {
    "class": "sc_event",
    "name": "is_valid_service_severity",
    "description": "check if a service has a valid severity",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_service_severity-method)",
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
  "isValidAcknowledgementEvent": {
    "class": "sc_event",
    "name": "is_valid_acknowledgement_event",
    "description": "check if the acknowledgement event is valid",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_acknowledgement_event-method)",
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
  "isValidAuthor": {
    "class": "sc_event",
    "name": "is_valid_author",
    "description": "check if the author of a comment is accepted",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_author-method)",
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
  "isValidDowntimeEvent": {
    "class": "sc_event",
    "name": "is_valid_downtime_event",
    "description": "check if the downtime event is valid",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_downtime_event-method)",
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
  "isHostStatusEventDuplicated": {
    "class": "sc_event",
    "name": "is_host_status_event_duplicated",
    "description": "check if the host_status event is duplicated",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_host_status_event_duplicated-method)",
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
  "isServiceStatusEventDuplicated": {
    "class": "sc_event",
    "name": "is_service_status_event_duplicated",
    "description": "check if the service_status event is duplicated",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_service_status_event_duplicated-method)",
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
  "isDowntimeEventUseless": {
    "class": "sc_event",
    "name": "is_downtime_event_useless",
    "description": "checks if the downtime event is a usefull one. Meaning that it carries valuable data regarding the actual end or start of the downtime",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_downtime_event_useless-method)",
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
  "isValidDowntimeEventStart": {
    "class": "sc_event",
    "name": "is_valid_downtime_event_start",
    "description": "checks that the downtime event is about the actual start of the downtime",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_downtime_event_start-method)",
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
  "isValidDowntimeEventEnd": {
    "class": "sc_event",
    "name": "is_valid_downtime_event_end",
    "description": "checks that the downtime event is about the actual end of the downtime",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_downtime_event_end-method)",
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
  "isValidStorageEvent": {
    "class": "sc_event",
    "name": "is_valid_storage_event",
    "description": "DO NOTHING (deprecated, you should use neb event to send metrics)",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_event.md#is_valid_storage_event-method)",
    "trigger": trigger,
    "params": [],
    "return": [
      {
        "name": "true",
        "description": "always return true",
        "type": "boolean",
        "optional": false
      }
    ]
  }
};

trigger = '.';

export const cacheCompletion = [
  {
    "prefix": "cache",
    "trigger": trigger,
    "name": "host",
    "type": "table"
  },
  {
    "prefix": "cache",
    "trigger": trigger,
    "name": "service",
    "type": "table"
  },
  {
    "prefix": "cache",
    "trigger": trigger,
    "name": "hostgroups",
    "type": "table"
  },
  {
    "prefix": "cache",
    "trigger": trigger,
    "name": "servicegroups",
    "type": "table"
  },
  {
    "prefix": "cache",
    "trigger": trigger,
    "name": "ba",
    "type": "table"
  },
  {
    "prefix": "cache",
    "trigger": trigger,
    "name": "bvs",
    "type": "table"
  },
  {
    "prefix": "cache",
    "trigger": trigger,
    "name": "poller",
    "type": "string"
  },
  {
    "prefix": "cache",
    "trigger": trigger,
    "name": "severity",
    "type": "table"
  },
  {
    "prefix": "severity",
    "trigger": trigger,
    "name": "host",
    "type": "number"
  },
  {
    "prefix": "severity",
    "trigger": trigger,
    "name": "service",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "service",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "notify_on_down",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "_type",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "retain_nonstatus_information",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "notify",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "state_type",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "obsess_over_host",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "stalk_on_unreachable",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "default_active_checks",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "default_notify",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "default_passive_checks",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "last_time_up",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "notes",
    "type": "string"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "address",
    "type": "string"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "check_interval",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "alias",
    "type": "string"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "last_check_value",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "flapping",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "flap_detection_on_up",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "acknowledged",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "check_command",
    "type": "string"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "max_check_attempts",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "statusmap_image",
    "type": "string"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "default_event_handler_enabled",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "output",
    "type": "string"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "checked",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "next_check",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "notify_on_flapping",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "low_flap_threshold",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "acknowledgement_type",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "notes_url",
    "type": "string"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "last_hard_state",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "default_flap_detection",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "stalk_on_down",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "icon_image_alt",
    "type": "string"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "flap_detection_on_down",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "flap_detection",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "execution_time",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "category",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "active_checks",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "display_name",
    "type": "string"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "timezone",
    "type": "string"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "passive_checks",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "should_be_scheduled",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "stalk_on_up",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "check_freshness",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "enabled",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "check_period",
    "type": "string"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "action_url",
    "type": "string"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "notify_on_recovery",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "retry_interval",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "retain_status_information",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "perfdata",
    "type": "string"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "high_flap_threshold",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "flap_detection_on_unreachable",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "notification_number",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "state",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "check_attempt",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "notify_on_unreachable",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "icon_image",
    "type": "string"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "element",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "notify_on_downtime",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "notification_period",
    "type": "string"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "name",
    "type": "string"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "notification_interval",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "no_more_notification",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "latency",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "event_handler_enabled",
    "type": "boolean"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "last_hard_state_change",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "last_update",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "last_time_down",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "host_id",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "instance_id",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "event_handler",
    "type": "string"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "check_type",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "percent_state_change",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "freshness_threshold",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "first_notification_delay",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "last_state_change",
    "type": "number"
  },
  {
    "prefix": "host",
    "trigger": trigger,
    "name": "scheduled_downtime_depth",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "flap_detection_on_unknown",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "checked",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "action_url",
    "type": "string"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "last_hard_state_change",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "notification_period",
    "type": "string"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "flap_detection_on_ok",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "stalk_on_ok",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "default_passive_checks",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "check_freshness",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "check_interval",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "_type",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "category",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "check_command",
    "type": "string"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "last_check",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "perfdata",
    "type": "string"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "active_checks",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "passive_checks",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "flap_detection_on_critical",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "stalk_on_unknown",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "first_notification_delay",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "flap_detection",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "obsess_over_service",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "notify_on_recovery",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "percent_state_change",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "default_flap_detection",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "default_notify",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "freshness_threshold",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "service_id",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "retry_interval",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "last_state_change",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "check_period",
    "type": "string"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "retain_status_information",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "next_check",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "low_flap_threshold",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "event_handler_enabled",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "notify_on_critical",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "flap_detection_on_warning",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "default_active_checks",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "enabled",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "check_attempt",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "notification_number",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "notify",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "host_id",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "notes",
    "type": "string"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "should_be_scheduled",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "latency",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "icon_image",
    "type": "string"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "notify_on_warning",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "notes_url",
    "type": "string"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "flapping",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "volatile",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "acknowledged",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "state",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "last_time_ok",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "event_handler",
    "type": "string"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "stalk_on_critical",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "state_type",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "default_event_handler_enabled",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "high_flap_threshold",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "output",
    "type": "string"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "last_time_critical",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "notify_on_unknown",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "notify_on_flapping",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "notify_on_downtime",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "notification_interval",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "no_more_notifications",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "max_check_attempts",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "stalk_on_warning",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "last_update",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "check_type",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "execution_time",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "last_hard_state",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "acknowledgement_type",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "icon_image_alt",
    "type": "string"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "retain_nonstatus_information",
    "type": "boolean"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "element",
    "type": "number"
  },
  {
    "prefix": "service",
    "trigger": trigger,
    "name": "scheduled_downtime_depth",
    "type": "number"
  },
  {
    "prefix": "ba",
    "trigger": trigger,
    "name": "ba_id",
    "type": "number"
  },
  {
    "prefix": "ba",
    "trigger": trigger,
    "name": "ba_name",
    "type": "string"
  },
  {
    "prefix": "ba",
    "trigger": trigger,
    "name": "ba_description",
    "type": "string"
  }
];


export const eventCompletion = [
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status,downtime,acknowledgement,ba_status",
    "name": "cache",
    "type": "table"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "last_hard_state_change",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "max_check_attempts",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "check_attempt",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status,acknowledgement,ba_status",
    "name": "state",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "enabled",
    "type": "boolean"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "event_handler_enabled",
    "type": "boolean"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "last_update",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "checked",
    "type": "boolean"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "passive_checks",
    "type": "boolean"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "notification_number",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "execution_time",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "flap_detection",
    "type": "boolean"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "event_handler",
    "type": "string"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "last_hard_state",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,\n\nservice_status,\n\ndowntime,\n\nacknowledgement,\n\nba_status",
    "name": "element",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "check_command",
    "type": "string"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "no_more_notifications",
    "type": "boolean"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "acknowledged",
    "type": "boolean"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "state_type",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status,ba_status",
    "name": "last_state_change",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,\n\nservice_status,\n\ndowntime,\n\nacknowledgement,\n\nba_status",
    "name": "category",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "should_be_scheduled",
    "type": "boolean"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "last_check",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "perfdata",
    "type": "string"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "retry_interval",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "notify",
    "type": "boolean"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "percent_state_change",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "output",
    "type": "string"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "scheduled_downtime_depth",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "check_period",
    "type": "string"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "next_check",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "latency",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "obsess_over_host",
    "type": "boolean"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "active_checks",
    "type": "boolean"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,\n\nservice_status,\n\ndowntime,\n\nacknowledgement",
    "name": "host_id",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "acknowledgement_type",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "check_type",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "check_interval",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "flapping",
    "type": "boolean"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "long_output",
    "type": "string"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status,service_status",
    "name": "short_output",
    "type": "string"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "host_status",
    "name": "last_time_up",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "service_status,\n\ndowntime,\n\nacknowledgement",
    "name": "service_id",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "service_status",
    "name": "last_time_ok",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "downtime",
    "name": "actual_start_time",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "downtime_end",
    "name": "actual_end_time",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "downtime_end,acknowledgement_end",
    "name": "deletion_time",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "downtime",
    "name": "cancelled",
    "type": "boolean"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "downtime",
    "name": "duration",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "downtime",
    "name": "end_time",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "downtime",
    "name": "fixed",
    "type": "boolean"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "downtime",
    "name": "internal_id",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "downtime",
    "name": "start_time",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "downtime",
    "name": "started",
    "type": "boolean"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "downtime,acknowledgement",
    "name": "author",
    "type": "string"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "downtime,acknowledgement",
    "name": "comment_data",
    "type": "string"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "downtime,acknowledgement",
    "name": "entry_time",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "acknowledgement",
    "name": "notify_contacts",
    "type": "boolean"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "acknowledgement",
    "name": "persistent_comment",
    "type": "boolean"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "acknowledgement",
    "name": "sticky",
    "type": "boolean"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "ba_status",
    "name": "ba_id",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "ba_status",
    "name": "in_downtime",
    "type": "boolean"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "ba_status",
    "name": "level_acknowledgement",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "ba_status",
    "name": "level_downtime",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "ba_status",
    "name": "level_nominal",
    "type": "number"
  },
  {
    "prefix": "event",
    "trigger": trigger,
    "scope": "ba_status",
    "name": "state_changed",
    "type": "boolean"
  }
];