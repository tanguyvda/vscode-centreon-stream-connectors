const trigger = ":";

export const info = {
  "getHostAllInfos": {
    "class": "sc_broker",
    "name": "get_host_all_infos",
    "description": "retrieve all informations about a host from the broker cachecheck if a variable is empty or nil and replace it with a default value if it is the case",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_broker.md#get_host_all_infos-method)",
    "trigger": trigger,
    "params": [
      {
        "name": "host_id",
        "description": "the ID of the host",
        "type": "number",
        "optional": false
      }
    ],
    "return": [
      {
        "name": "host_cache",
        "description": "Returns a table with all cache information from host if host id is found in cache",
        "type": "table",
        "optional": true
      },
      {
        "name": "false",
        "description": "Retuns false if host id was not found in cache",
        "type": "boolean",
        "optional": true
      }
    ]
  },
  "getServiceAllInfos": {
    "class": "sc_broker",
    "name": "get_service_all_infos",
    "description": "retrieve all informations about a service from the broker cache",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_broker.md#get_service_all_infos-method)",
    "trigger": trigger,
    "params": [
      {
        "name": "host_id",
        "description": "the ID of the host",
        "type": "number",
        "optional": false
      },
      {
        "name": "service_id",
        "description": "the ID of the service",
        "type": "number",
        "optional": false
      }
    ],
    "return": [
      {
        "name": "service_cache",
        "description": "Returns a table with all cache information from service if host id and service id are found in cache",
        "type": "table",
        "optional": true
      },
      {
        "name": "false",
        "description": "Retuns false if host id or service id was not found in cache",
        "type": "boolean",
        "optional": true
      }
    ]
  },
  "getHostInfos": {
    "class": "sc_broker",
    "name": "get_host_infos",
    "description": "retrieve one or more specific informations about a host from the broker cache",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_broker.md#get_host_infos-method)",
    "trigger": trigger,
    "params": [
      {
        "name": "host_id",
        "description": "the ID of the host",
        "type": "number",
        "optional": false
      },
      {
        "name": "host_info",
        "description": "a table of desired information or a string with one information",
        "type": "number",
        "optional": false
      },
    ],
    "return": [
      {
        "name": "host_cache",
        "description": "Returns a table with all desired cache information from host if host id is found in cache",
        "type": "table",
        "optional": true
      },
      {
        "name": "false",
        "description": "Retuns false if host id was not found in cache",
        "type": "boolean",
        "optional": true
      }
    ]
  },
  "getServiceInfos": {
    "class": "sc_broker",
    "name": "get_service_infos",
    "description": "retrieve one or more specific informations about a service from the broker cache",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_broker.md#get_service_infos-method)",
    "trigger": trigger,
    "params": [
      {
        "name": "host_id",
        "description": "the ID of the host",
        "type": "number",
        "optional": false
      },
      {
        "name": "service_id",
        "description": "the ID of the service",
        "type": "number",
        "optional": false
      },
      {
        "name": "service_info",
        "description": "a table of desired information or a string with one information",
        "type": "number",
        "optional": false
      },
    ],
    "return": [
      {
        "name": "service_cache",
        "description": "Returns a table with all cache information from service if host id and service id are found in cache",
        "type": "table",
        "optional": true
      },
      {
        "name": "false",
        "description": "Retuns false if host id or service id was not found in cache",
        "type": "boolean",
        "optional": true
      }
    ]
  },
  "getHostgroups": {
    "class": "sc_broker",
    "name": "get_hostgroups",
    "description": "retrieve the hostgroups linked to a host from the broker cache",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_broker.md#get_hostgroups-method)",
    "trigger": trigger,
    "params": [
      {
        "name": "host_id",
        "description": "the ID of the host",
        "type": "number",
        "optional": false
      }
    ],
    "return": [
      {
        "name": "hostgroups_cache",
        "description": "Returns a table with all hostgroup cache information for host if host id is found in cache",
        "type": "table",
        "optional": true
      },
      {
        "name": "false",
        "description": "Retuns false if host id was not found in cache",
        "type": "boolean",
        "optional": true
      }
    ]
  },
  "getServicegroups": {
    "class": "sc_broker",
    "name": "get_servicegroups",
    "description": "retrieve the servicegroups linked to a service from the broker cache",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_broker.md#get_servicegroups-method)",
    "trigger": trigger,
    "params": [
      {
        "name": "host_id",
        "description": "the ID of the host",
        "type": "number",
        "optional": false
      },
      {
        "name": "service_id",
        "description": "the ID of the service",
        "type": "number",
        "optional": false
      }
    ],
    "return": [
      {
        "name": "servicegroups_cache",
        "description": "Returns a table with alls servicegroups cache information for service if host id and service id are found in cache",
        "type": "table",
        "optional": true
      },
      {
        "name": "false",
        "description": "Retuns false if host id or service id was not found in cache",
        "type": "boolean",
        "optional": true
      }
    ]
  },
  "getSeverity": {
    "class": "sc_broker",
    "name": "get_severity",
    "description": "retrieve the severity of a host or a service from the broker cache",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_broker.md#get_severity-method)",
    "trigger": trigger,
    "params": [
      {
        "name": "host_id",
        "description": "the ID of the host",
        "type": "number",
        "optional": false
      },
      {
        "name": "service_id",
        "description": "the ID of the service",
        "type": "number",
        "optional": true
      }
    ],
    "return": [
      {
        "name": "severity_level",
        "description": "Returns the severity level of the host or service (if service id param is provided) if host id and service id are found in cache ",
        "type": "number",
        "optional": true
      },
      {
        "name": "false",
        "description": "Retuns false if host id or service id was not found in cache",
        "type": "boolean",
        "optional": true
      }
    ]
  },
  "getInstance": {
    "class": "sc_broker",
    "name": "get_instance",
    "description": "Retrieve the name of the poller using the instance id from the broker cache",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_broker.md#get_instance-method)",
    "trigger": trigger,
    "params": [
      {
        "name": "instance_id",
        "description": "the ID of the instance (=poller)",
        "type": "number",
        "optional": false
      }
    ],
    "return": [
      {
        "name": "poller_name",
        "description": "Returns the poller name if instance id is found in cache",
        "type": "string",
        "optional": true
      },
      {
        "name": "false",
        "description": "Retuns false if instance id was not found in cache",
        "type": "boolean",
        "optional": true
      }
    ]
  },
  "getBaInfos": {
    "class": "sc_broker",
    "name": "get_ba_infos",
    "description": "retrieve the name and description of a BA from the broker cache",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_broker.md#get_ba_infos-method)",
    "trigger": trigger,
    "params": [
      {
        "name": "ba_id",
        "description": "the ID of the BA",
        "type": "number",
        "optional": false
      }
    ],
    "return": [
      {
        "name": "ba_cache",
        "description": "Returns BA information if BA id is found in cache",
        "type": "table",
        "optional": true
      },
      {
        "name": "false",
        "description": "Retuns false if BA id was not found in cache",
        "type": "boolean",
        "optional": true
      }
    ]
  },
  "getBvsInfos": {
    "class": "sc_broker",
    "name": "get_bvs_infos",
    "description": "retrieve the name and description of all BV linked to a BA",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_broker.md#get_bvs_infos-method)",
    "trigger": trigger,
    "params": [
      {
        "name": "ba_id",
        "description": "the ID of the BA",
        "type": "number",
        "optional": false
      }
    ],
    "return": [
      {
        "name": "bv_cache",
        "description": "Returns BVs information if BA id is found in cache",
        "type": "table",
        "optional": true
      },
      {
        "name": "false",
        "description": "Retuns false if BA id was not found in cache",
        "type": "boolean",
        "optional": true
      }
    ]
  }
};