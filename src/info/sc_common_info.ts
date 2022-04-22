const trigger = ':';

export const info = {
  "ifnilOrEmpty": {
    "class": "sc_common",
    "name": "ifnil_or_empty",
    "description": "check if a variable is empty or nil and replace it with a default value if it is the case",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_common.md#ifnil_or_empty-method)",
    "trigger": trigger,
    "params": [
      {
        "name": "test_value",
        "description": "the value you want to test",
        "type": "string|number",
        "optional": false
      },
      {
        "name": "default_value",
        "description": "the default value to return",
        "type": "any",
        "optional": false
      }
    ],
    "return": [
      {
        "name": "value",
        "description": "the value of first parameter if not nil or empty or the second parameter",
        "type": "any",
        "optional": false
      }
    ]
  },
  "ifWrongType": {
    "class": "sc_common",
    "name": "if_wrong_type",
    "description": "check the type of a variable, if it is wrong, replace the variable with a default value.",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_common.md#if_wrong_type-method)",
    "trigger": trigger,
    "params": [
      {
        "name": "test_value",
        "description": "the value you want to test",
        "type": "any",
        "optional": false
      },
      {
        "name": "type",
        "description": "the type you want to check",
        "type": "string",
        "optional": false
      },
      {
        "name": "default_value",
        "description": "the default value to return",
        "type": "string",
        "optional": false
      }
    ],
    "return": [
      {
        "name": "value",
        "description": "the value of first parameter type is goog or the second parameter",
        "type": "any",
        "optional": false
      }
    ]
  },
  "booleanToNumber": {
    "class": "sc_common",
    "name": "boolean_to_number",
    "description": "change a true/false boolean to a 1/0 value.",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_common.md#boolean_to_number-method)",
    "trigger": trigger,
    "params": [
      {
        "name": "boolean",
        "description": "the boolean you want to convert",
        "type": "boolean",
        "optional": false
      }
    ],
    "return": [
      {
        "name": "number",
        "description": "a number (0 or 1).",
        "type": "number",
        "optional": false
      }
    ]
  },
  "numberToBoolean": {
    "class": "sc_common",
    "name": "number_to_boolean",
    "description": "change a 0/1 number to a false/true value.",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_common.md#number_to_boolean-method)",
    "trigger": trigger,
    "params": [
      {
        "name": "number",
        "description": "the number you want to convert",
        "type": "number",
        "optional": false
      }
    ],
    "return": [
      {
        "name": "boolean",
        "description": "a boolean (true or false).",
        "type": "boolean",
        "optional": false
      }
    ]
  },
  "checkBooleanNumberOptionSyntax": {
    "class": "sc_common",
    "name": "check_boolean_number_option_syntax",
    "description": "make sure that a boolean is 0 or 1, if that's not the case, replace it with a default value.",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_common.md#check_boolean_number_option_syntax-method)",
    "trigger": trigger,
    "params": [
      {
        "name": "number",
        "description": "the number you want to check",
        "type": "any",
        "optional": false
      },
      {
        "name": "default_value",
        "description": "a default value to return if the first parameter is wrong",
        "type": "any",
        "optional": false
      }
    ],
    "return": [
      {
        "name": "number",
        "description": "Returned if the first parameter is a boolean number.",
        "type": "boolean",
        "optional": true
      },
      {
        "name": "default_value",
        "description": "returned if the first parameter is not a boolean number.",
        "type": "any",
        "optional": true
      }
    ]
  },
  "split": {
    "class": "sc_common",
    "name": "split",
    "description": "split a string using a separator (default is ',') and store each part in a table.",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_common.md#split-method)",
    "trigger": trigger,
    "params": [
      {
        "name": "string",
        "description": "the string you need to split",
        "type": "string",
        "optional": false
      },
      {
        "name": "separator",
        "description": "the separator you want to use",
        "type": "string",
        "optional": true
      }
    ],
    "return": [
      {
        "name": "table",
        "description": "Returns a table if string is splittable.",
        "type": "table",
        "optional": true
      },
      {
        "name": "false",
        "description": "Returns false if string to split is empty or nil.",
        "type": "boolean",
        "optional": true
      }
    ]
  },
  "compareNumbers": {
    "class": "sc_common",
    "name": "compare_numbers",
    "description": "compare two numbers using the given mathematical operator and return true or false.",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_common.md#compare_numbers-method)",
    "trigger": trigger,
    "params": [
      {
        "name": "first_number",
        "description": "the first number you need to compare",
        "type": "number",
        "optional": false
      },
      {
        "name": "second_number",
        "description": "the second number you need to compare",
        "type": "number",
        "optional": false
      },
      {
        "name": "math_operator",
        "description": "the mathematical operator you want to use. Accepted operators: <, >, >=, <=, ==, ~=",
        "type": "string",
        "optional": false
      }
    ],
    "return": [
      {
        "name": "boolean",
        "description": "Returns boolean if both numbers are numbers and the mathematical operator is a valid operator",
        "type": "table",
        "optional": true
      },
      {
        "name": "nil",
        "description": "Returns false if one of the number is not a number or the mathematical operator is not valid",
        "type": "nil",
        "optional": true
      }
    ]
  },
  "generatePostfieldParamString": {
    "class": "sc_common",
    "name": "generate_postfield_param_string",
    "description": "convert a table of parameters into an url encoded parameters string.",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_common.md#generate_postfield_param_string-method)",
    "trigger": trigger,
    "params": [
      {
        "name": "table",
        "description": "the table with all the parameters to convert in a parameters string",
        "type": "table",
        "optional": false
      }
    ],
    "return": [
      {
        "name": "false",
        "description": "Returns false if the parameter is not a table",
        "type": "boolean",
        "optional": true
      },
      {
        "name": "string_params",
        "description": "Returns an url encoded string of params if the method parameter is a table.",
        "type": "string",
        "optional": true
      }
    ]
  },
  "loadJsonFile": {
    "class": "sc_common",
    "name": "load_json_file",
    "description": "loads a json file and parse it.",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_common.md#load_json_file-method)",
    "trigger": trigger,
    "params": [
      {
        "name": "json_file_path",
        "description": "the path to the json file (must be readable by centreon-broker)",
        "type": "string",
        "optional": false
      }
    ],
    "return": [
      {
        "name": "boolean",
        "description": "Returns true or false if it can parse or not the json file",
        "type": "boolean",
        "optional": false
      },
      {
        "name": "json_table",
        "description": "Returns the decoded json as a table if parsing worked",
        "type": "table",
        "optional": true
      }
    ]
  },
  "jsonEscape": {
    "class": "sc_common",
    "name": "json_escape",
    "description": "escape json characters in a string.",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_common.md#json_escape-method)",
    "trigger": trigger,
    "params": [
      {
        "name": "string",
        "description": "a string that must be escaped",
        "type": "string",
        "optional": false
      }
    ],
    "return": [
      {
        "name": "escaped_string",
        "description": "Returns a string with escaped characters",
        "type": "string",
        "optional": false
      },
    ]
  },
  "xmlEscape": {
    "class": "sc_common",
    "name": "xml_escape",
    "description": "escape xml characters in a string.",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_common.md#xml_escape-method)",
    "trigger": trigger,
    "params": [
      {
        "name": "string",
        "description": "a string that must be escaped",
        "type": "string",
        "optional": false
      }
    ],
    "return": [
      {
        "name": "escaped_string",
        "description": "Returns a string with escaped characters",
        "type": "string",
        "optional": false
      },
    ]
  },
  "dumper": {
    "class": "sc_common",
    "name": "dumper",
    "description": "dump variables for debug purpose",
    "documentation": "[Documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_common.md#dumper-method)",
    "trigger": trigger,
    "params": [
      {
        "name": "variable",
        "description": "the variable that must be dumped",
        "type": "any",
        "optional": false
      },
      {
        "name": "result",
        "description": "the string that contains the dumped variable. ONLY USED INTERNALLY FOR RECURSIVE PURPOSE",
        "type": "string",
        "optional": true
      },
      {
        "name": "tab_char",
        "description": "the string that contains the tab character. ONLY USED INTERNALLY FOR RECURSIVE PURPOSE (and design)",
        "type": "string",
        "optional": true
      }
    ],
    "return": [
      {
        "name": "result",
        "description": "the dumped variable",
        "type": "string",
        "optional": false
      },
    ]
  }
};