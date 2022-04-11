"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScCommonCompletion = void 0;
const vscode = require("vscode");
class ScCommonCompletion {
    constructor() {
        this.completion = [];
        this.language = 'lua';
        this.prefix = 'sc_common:';
    }
    genericSnippetCompletion(prefix, trigger, completion, snippet, doc) {
        return vscode.languages.registerCompletionItemProvider(this.language, {
            provideCompletionItems(document, position) {
                const linePrefix = document.lineAt(position).text.substr(0, position.character);
                if (!linePrefix.endsWith(prefix)) {
                    return undefined;
                }
                const snippetCompletion = new vscode.CompletionItem(completion);
                snippetCompletion.insertText = new vscode.SnippetString(snippet);
                const docs = new vscode.MarkdownString(doc);
                snippetCompletion.documentation = docs;
                return [
                    snippetCompletion
                ];
            }
        }, trigger);
    }
    ifNilOrEmpty() {
        // const completion: string = info.ifNilOrEmpty.name;
        // const snippet: string = buildSnippetArgs(info.ifNilOrEmpty);
        const doc = 'check if a variable is empty or nil and replace it with a default value if it is the case. [Doc](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_common.md#ifnil_or_empty-method)';
        const trigger = ':';
        // return this.genericSnippetCompletion(this.prefix, ':', completion, snippet, doc);
    }
    ifWrongType() {
        const completion = 'if_wrong_type';
        const snippet = 'if_wrong_type(${1:test value}, ${2:type}, ${3:default value})';
        const doc = 'check the type of a variable, if it is wrong, replace the variable with a default value. [Doc](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_common.md#if_wrong_type-method)';
        const trigger = ':';
        return this.genericSnippetCompletion(this.prefix, ':', completion, snippet, doc);
    }
    booleanToNumber() {
        const completion = 'boolean_to_number';
        const snippet = 'boolean_to_number(${1:boolean})';
        const doc = 'change a true/false boolean to a 1/0 value. [Doc](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_common.md#boolean_to_number-method)';
        const trigger = ':';
        return this.genericSnippetCompletion(this.prefix, ':', completion, snippet, doc);
    }
    numberToBoolean() {
        const completion = 'number_to_boolean';
        const snippet = 'number_to_boolean(${1:number})';
        const doc = 'change a 0/1 number to a false/true value. [Doc](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_common.md#number_to_boolean-method)';
        const trigger = ':';
        return this.genericSnippetCompletion(this.prefix, ':', completion, snippet, doc);
    }
    checkBooleanNumberOptionSyntax() {
        const completion = 'check_boolean_number_option_syntax';
        const snippet = 'check_boolean_number_option_syntax(${1:number}, ${2:default})';
        const doc = "make sure that a boolean is 0 or 1, if that's not the case, replace it with a default value. [Doc](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_common.md#check_boolean_number_option_syntax-method)";
        const trigger = ':';
        return this.genericSnippetCompletion(this.prefix, ':', completion, snippet, doc);
    }
    split() {
        const completion = 'split';
        const snippet = 'split(${1:string})';
        const doc = 'split a string using a separator (default is ",") and store each part in a table. [Doc](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_common.md#split-method)';
        const trigger = ':';
        return this.genericSnippetCompletion(this.prefix, ':', completion, snippet, doc);
    }
    compareNumbers() {
        const completion = 'compare_numbers';
        const snippet = 'compare_numbers(${1:first number}, ${2:second number}, ${3:math operator})';
        const doc = 'compare two numbers using the given mathematical operator and return true or false. [Doc](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_common.md#compare_numbers-method)';
        const trigger = ':';
        return this.genericSnippetCompletion(this.prefix, ':', completion, snippet, doc);
    }
    generatePostfieldParamString() {
        const completion = 'generate_postfield_param_string';
        const snippet = 'generate_postfield_param_string(${1:table})';
        const doc = 'convert a table of parameters into an url encoded parameters string. [Doc](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_common.md#generate_postfield_param_string-method)';
        const trigger = ':';
        return this.genericSnippetCompletion(this.prefix, ':', completion, snippet, doc);
    }
    loadJsonFile() {
        const completion = 'load_json_file';
        const snippet = 'load_json_file(${1:/json/file/path})';
        const doc = 'loads a json file and parse it. [Doc](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_common.md#load_json_file-method)';
        const trigger = ':';
        return this.genericSnippetCompletion(this.prefix, ':', completion, snippet, doc);
    }
    jsonEscape() {
        const completion = 'json_escape';
        const snippet = 'json_escape(${1:string})';
        const doc = 'escape json characters in a string. [Doc](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_common.md#json_escape-method)';
        const trigger = ':';
        return this.genericSnippetCompletion(this.prefix, ':', completion, snippet, doc);
    }
    xmlEscape() {
        const completion = 'xml_escape';
        const snippet = 'xml_escape(${1:string})';
        const doc = 'escape xml characters in a string. [Doc](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_common.md#xml_escape-method)';
        const trigger = ':';
        return this.genericSnippetCompletion(this.prefix, ':', completion, snippet, doc);
    }
    buildCompletion() {
        // this.completion.push(this.ifNilOrEmpty());
        this.completion.push(this.ifWrongType());
        this.completion.push(this.booleanToNumber());
        this.completion.push(this.numberToBoolean());
        this.completion.push(this.checkBooleanNumberOptionSyntax());
        this.completion.push(this.split());
        this.completion.push(this.compareNumbers());
        this.completion.push(this.generatePostfieldParamString());
        this.completion.push(this.loadJsonFile());
        this.completion.push(this.jsonEscape());
        this.completion.push(this.xmlEscape());
        return this.completion;
    }
}
exports.ScCommonCompletion = ScCommonCompletion;
//# sourceMappingURL=sc_common_completion.js.map