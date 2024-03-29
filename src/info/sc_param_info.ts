let trigger = ":";

export const info = {
    "paramOverride": {
        "class": "sc_params",
        "name": "param_override",
        "description": "replace default values of params with the ones provided by users in the web configuration of the stream connector",
        "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_params.md#param_override-method)",
        "trigger": trigger,
        "params": [
            {
            "name": "params",
            "description": "The list of parameters with their value",
            "type": "table",
            "optional": false
            }
        ],
        "return": []
    },
    "checkParams": {
        "class": "sc_params",
        "name": "check_params",
        "description": "make sure that the default stream connectors params provided by the user from the web configuration are valid. If not, uses the default value",
        "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_params.md#check_params-method)",
        "trigger": trigger,
        "params": [],
        "return": []
    },
    "isMandatoryConfigSet": {
        "class": "sc_params",
        "name": "is_mandatory_config_set",
        "description": "check that all mandatory parameters for a stream connector are set",
        "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_params.md#is_mandatory_config_set-method)",
        "trigger": trigger,
        "params": [
        {
            "name": "mandatory_params",
            "description": "A table of all mandatory parameters",
            "type": "table",
            "optional": false
        },
        {
            "name": "params",
            "description": "The list of all parameters",
            "type": "table",
            "optional": false
        },
        ],
        "return": [
        {
            "name": "boolean",
            "description": "Returns true or false",
            "type": "boolean",
            "optional": false
        }
        ]
    },
    "getKafkaParameters": {
        "class": "sc_params",
        "name": "get_kafka_params",
        "description": "retrieve Kafka dedicated parameters from the parameter list and put them in the provided kafka_config object",
        "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_params.md#get_kafka_params-method)",
        "trigger": trigger,
        "params": [
        {
            "name": "kafka_config",
            "description": "An instance of the kafka config object",
            "type": "table",
            "optional": false
        },
        {
            "name": "params",
            "description": "The list of all parameters",
            "type": "table",
            "optional": false
        }
        ],
        "return": []
    },
    "loadEventFormatFile": {
        "class": "sc_params",
        "name": "load_event_format_file",
        "description": "load a file that serves as a template for formating events",
        "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_params.md#load_event_format_file-method)",
        "trigger": trigger,
        "params": [
        {
            "name": "json_string",
            "description": "use a json string if set to true or a decoded json (table) if set to false",
            "type": "boolean",
            "optional": true
        }
        ],
        "return": [
        {
            "name": "boolean",
            "description": "Returns true or false depending on the success of the json file decoding",
            "type": "boolean",
            "optional": false
        }
        ]
    },
    "buildAcceptedElementsInfo": {
        "class": "sc_params",
        "name": "build_accepted_elements_info",
        "description": "build a table that store information about accepted elements",
        "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_params.md#build_accepted_elements_info-method)",
        "trigger": trigger,
        "params": [],
        "return": []
    }
};

trigger = '.';

export const paramCompletion = [
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "accepted_categories",
        "type": "string",
        "default": "neb,bam",
        "description": "each event is linked to a broker category that we can use to filter events",
        "scope": "",
        "information": "it is a coma separated list, can use \"neb\", \"bam\", \"storage\". Storage is deprecated, use \"neb\" to get metrics data [more information](https://docs.centreon.com/current/en/developer/developer-broker-bbdo.html#event-categories)"
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "accepted_elements",
        "type": "string",
        "default": "host_status,service_status,ba_status",
        "information": "",
        "scope": "each event is linked to a broker element that we can use to filter events",
        "description": "it is a coma separated list, can use any type in the \"neb\", \"bam\" and \"storage\" tables [described here](https://docs.centreon.com/current/en/developer/developer-broker-bbdo.html#neb) (you must use lower case and replace blank space with underscore. \"Host status\" becomes \"host_status\")"
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "host_status",
        "type": "string",
        "default": "0,1,2",
        "description": "coma separated list of accepted host status (0 = UP, 1 = DOWN, 2 = UNREACHABLE)",
        "scope": "",
        "information": ""
        
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "service_status",
        "type": "string",
        "default": "0,1,2,3",
        "description": "coma separated list of accepted services status (0 = OK, 1 = WARNING, 2 = CRITICAL, 3 = UNKNOWN)",
        "scope": "",
        "information": ""
        
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "ba_status",
        "type": "string",
        "default": "0,1,2",
        "description": "coma separated list of accepted BA status (0 = OK, 1 = WARNING, 2 = CRITICAL)",
        "scope": "",
        "information": ""
        
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "hard_only",
        "type": "number",
        "default": "1",
        "description": "accept only events that are in a HARD state (use 0 to accept SOFT state too)",
        "scope": "host_status(neb), service_status(neb)",
        "information": ""
        
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "acknowledged",
        "type": "number",
        "default": "0",
        "description": "accept only events that aren't acknowledged (use 1 to accept acknowledged events too)",
        "scope": "host_status(neb), service_status(neb)",
        "information": ""
        
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "flapping",
        "type": "number",
        "default": "0",
        "description": "accept only events that aren't flapping (use 1 to accept flapping events too)",
        "scope": "host_status(neb), service_status(neb)",
        "information": ""
        
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "in_downtime",
        "type": "number",
        "default": "0",
        "description": "accept only events that aren't in downtime (use 1 to accept events that are in downtime too)",
        "scope": "host_status(neb), service_status(neb), ba_status(bam)",
        "information": ""
        
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "accepted_hostgroups",
        "type": "string",
        "default": "",
        "description": "coma separated list of hostgroups that are accepted (for example: my_hostgroup_1,my_hostgroup_2)",
        "scope": "host_status(neb), service_status(neb), acknowledgement(neb)",
        "information": ""
        
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "accepted_servicegroups",
        "type": "string",
        "default": "",
        "description": "coma separated list of servicegroups that are accepted (for example: my_servicegroup_1,my_servicegroup_2)",
        "scope": "service_status(neb), acknowledgement(neb)",
        "information": ""
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "accepted_bvs",
        "type": "string",
        "default": "",
        "description": "coma separated list of BVs that are accepted (for example: my_bv_1,my_bv_2)",
        "scope": "ba_status(bam)",
        "information": ""
        
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "accepted_pollers",
        "type": "string",
        "default": "",
        "description": "coma separated list of pollers that are accepted (for example: my_poller_1,my_poller_2)",
        "scope": "host_status(neb), service_status(neb),acknowledgement(neb)",
        "information": ""
        
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "skip_anon_events",
        "type": "number",
        "default": "1",
        "description": "filter out events if their name can't be found in the broker cache (use 0 to accept them)",
        "scope": "host_status(neb), service_status(neb), ba_status(bam), acknowledgement(neb)",
        "information": ""
        
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "skip_nil_id",
        "type": "number",
        "default": "1",
        "description": "filter out events if their ID is nil (use 0 to accept them. YOU SHOULDN'T DO THAT)",
        "scope": "host_status(neb), service_status(neb), ba_status(bam), acknowledgement(neb)",
        "information": ""
        
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "max_buffer_size",
        "type": "number",
        "default": "1",
        "description": "this is the number of events the stream connector is going to store before sending them. (bulk send is made using a value above 1).",
        "scope": "",
        "information": ""
        
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "max_buffer_age",
        "type": "number",
        "default": "5",
        "description": "if no new event has been stored in the buffer in the past 5 seconds, all stored events are going to be sent even if the max_buffer_size hasn't been reached",
        "scope": "",
        "information": ""
        
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "max_all_queues_age",
        "type": "number",
        "default": "300",
        "description": "if last global flush date was 300 seconds ago, it will force a flush of each queue",
        "scope": "",
        "information": ""
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "send_mixed_events",
        "type": "number",
        "default": "1",
        "description": "when sending data, it will mix all sorts of events in every payload. It means that you can have events about hosts mixed with events about services when set to 1. Performance wise, it is **better** to set it to **1**. **Only** set it to **0** if the tool that you are sending events to **doesn't handle a payload with mixed events**.",
        "scope": "",
        "information": ""
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "service_severity_threshold",
        "type": "number",
        "default": "nil",
        "description": "the threshold that will be used to filter severity for services. it must be used with service_severity_operator option",
        "scope": "service_status(neb), acknowledgement(neb)",
        "information": ""
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "service_severity_operator",
        "type": "string",
        "default": ">=",
        "description": "the mathematical operator used to compare the accepted service severity threshold and the service severity (operation order is: threshold >= service severity)",
        "scope": "service_status(neb), acknowledgement(neb)",
        "information": ""
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "host_severity_threshold",
        "type": "number",
        "default": "nil",
        "description": "the threshold that will be used to filter severity for hosts. it must be used with host_severity_operator option",
        "scope": "host_status(neb), service_status(neb) , acknowledgement(neb)",
        "information": ""
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "host_severity_operator",
        "type": "string",
        "default": ">=",
        "description": "the mathematical operator used to compare the accepted host severity threshold and the host severity (operation order is: threshold >= host severity)",
        "scope": "host_status(neb), service_status(neb), acknowledgement(neb)",
        "information": ""
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "ack_host_status",
        "type": "string",
        "default": "",
        "information": "",
        "scope": "acknowledgement(neb)",
        "description": "coma separated list of accepted host status for an acknowledgement event. It uses the host_status parameter by default (0 = UP, 1 = DOWN, 2 = UNREACHABLE)"
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "ack_service_status",
        "type": "string",
        "default": "",
        "information": "",
        "description": "coma separated list of accepted service status for an acknowledgement event. It uses the service_status parameter by default (0 = OK, 1 = WARNING, 2 = CRITICAL, 3 = UNKNOWN)",
        "scope": "acknowledgement(neb)"
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "dt_host_status",
        "type": "string",
        "default": "",
        "information": "",
        "description": "coma separated list of accepted host status for a downtime event. It uses the host_status parameter by default (0 = UP, 1 = DOWN, 2 = UNREACHABLE)",
        "scope": "downtime(neb)"
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "dt_service_status",
        "type": "string",
        "default": "",
        "information": "",
        "description": "coma separated list of accepted service status for a downtime event. It uses the service_status parameter by default (0 = OK, 1 = WARNING, 2 = CRITICAL, 3 = UNKNOWN)",
        "scope": "downtime(neb)"
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "enable_host_status_dedup",
        "type": "number",
        "default": "1",
        "information": "",
        "description": "enable the deduplication of host status event when set to 1",
        "scope": "host_status(neb)"
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "enable_service_status_dedup",
        "type": "number",
        "default": "1",
        "information": "",
        "description": "enable the deduplication of service status event when set to 1",
        "scope": "service_status(neb)"
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "accepted_authors",
        "type": "string",
        "default": "",
        "information": "",
        "description": "coma separated list of accepted authors for a comment. It uses the alias (login) of the Centreon contacts",
        "scope": "downtime(neb), acknowledgement(neb)"
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "local_time_diff_from_utc",
        "type": "number",
        "default": "default value is the time difference the centreon central server has from UTC",
        "information": "",
        "description": "the time difference from UTC in seconds",
        "scope": "all"
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "timestamp_conversion_format",
        "type": "string",
        "default": "%Y-%m-%d %X",
        "information": "[date format information](https://www.lua.org/pil/22.1.html)",
        "scope": "all",
        "description": "the date format used to convert timestamps. Default value will print dates like this: 2021-06-11 10:43:38"
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "send_data_test",
        "type": "number",
        "default": "0",
        "information": "",
        "description": "When set to 1, send data in the logfile of the stream connector instead of sending it where the stream connector was designed to",
        "scope": "all"
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "format_file",
        "type": "string",
        "default": "",
        "information": "",
        "description": "Path to a file that will be used as a template to format events instead of using default format",
        "scope": "only usable for events stream connectors (\\*-events-apiv2.lua) and not metrics stream connectors (\\*-metrics-apiv2.lua) you should put the file in /etc/centreon-broker to keep your broker configuration in a single place. [**See documentation for more information**](templating.md)"
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "proxy_address",
        "type": "string",
        "default": "",
        "information": "",
        "description": "address of the proxy",
        "scope": ""
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "proxy_port",
        "type": "number",
        "default": "",
        "information": "",
        "description": "port of the proxy",
        "scope": ""
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "proxy_username",
        "type": "string",
        "default": "",
        "information": "",
        "description": "user for the proxy",
        "scope": ""
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "proxy_password",
        "type": "string",
        "default": "",
        "information": "",
        "description": "pasword of the proxy user",
        "scope": ""
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "connection_timeout",
        "type": "number",
        "default": "60",
        "information": "",
        "description": "time to wait in second when opening connection",
        "scope": ""
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "allow_insecure_connection",
        "type": "number",
        "default": "0",
        "information": "",
        "description": "check the certificate validity of the peer host (0 = needs to be a valid certificate), use 1 if you are using self signed certificates",
        "scope": ""
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "use_long_output",
        "type": "number",
        "default": "1",
        "information": "",
        "description": "use the long output when sending an event (set to 0 to send the short output)",
        "scope": "service_status(neb), host_status(neb)"
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "remove_line_break_in_output",
        "type": "number",
        "default": "1",
        "information": "",
        "description": "replace all line breaks (\\n) in the output with the character set in the output_line_break_replacement_character parameter",
        "scope": "service_status(neb), host_status(neb)"
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "output_line_break_replacement_character",
        "type": "string",
        "default": "\" \"",
        "information": "",
        "description": "replace all line break with this parameter value in the output (default value is a blank space)",
        "scope": "service_status(neb), host_status(neb)"
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "metric_name_regex",
        "type": "string",
        "default": "",
        "information": "",
        "description": "the regex that will be used to transform the metric name to a compatible name for the software that will receive the data",
        "scope": "service_status(neb), host_status(neb)"
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "metric_replacement_character",
        "type": "string",
        "default": "_",
        "information": "",
        "description": "the character that will be used to replace invalid characters in the metric name",
        "scope": "service_status(neb), host_status(neb)"
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "logfile",
        "type": "string",
        "default": "check the stream connector documentation",
        "information": "",
        "description": "the logfile that will be used for the stream connector",
        "scope": "any"
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "log_level",
        "type": "number",
        "default": "1",
        "information": "",
        "description": "the verbosity level for the logs. 1 = error + notice, 2 = error + warning + notice, 3 = error + warning + notice + debug (you should avoir using level 3)",
        "scope": "any"
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "metric_name_regex",
        "type": "string",
        "default": "",
        "information": "",
        "description": "the regex that will be used to transform the metric name to a compatible name for the software that will receive the data",
        "scope": "service_status(neb), host_status(neb)"
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "metric_replacement_character",
        "type": "string",
        "default": "_",
        "information": "",
        "description": "the character that will be used to replace invalid characters in the metric name",
        "scope": "service_status(neb), host_status(neb)"
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "use_long_output",
        "type": "number",
        "default": "1",
        "information": "",
        "description": "use the long output when sending an event (set to 0 to send the short output)",
        "scope": "service_status(neb), host_status(neb)"
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "output_size_limit",
        "type": "number",
        "default": "",
        "information": "",
        "description": "put a character number limit for the output (no limit by default)",
        "scope": "service_status(neb), host_status(neb)"
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "custom_code_file",
        "type": "string",
        "default": "",
        "information": "",
        "description": "Path to a file that contains your custom lua code",
        "scope": "any"
    },
    {
        "prefix": "params",
        "trigger": trigger,
        "name": "log_curl_commands",
        "type": "number",
        "default": "0",
        "information": "",
        "description": "log ready to use curl commands when enabled (0 = disabled, 1 = enabled)",
        "scope": "any"
    }
];