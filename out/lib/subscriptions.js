"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paramsGenericSnippetCompletion = exports.constructorsGenericSnippetCompletion = exports.newGenericSnippetCompletion = exports.newGenericHoverDocumentation = void 0;
const vscode = require("vscode");
const doc_1 = require("../documentation/doc");
const paramInfo = require("../info/sc_param_info");
const commonInfo = require("../info/sc_common_info");
const eventInfo = require("../info/sc_event_info");
const brokerInfo = require("../info/sc_broker_info");
const metricsInfo = require("../info/sc_metrics_info");
const flushInfo = require("../info/sc_flush_info");
const macrosInfo = require("../info/sc_macros_info");
const loggerInfo = require("../info/sc_logger_info");
const constructors = require("../info/constructors_info");
const allInfoA = [
    paramInfo.info,
    commonInfo.info,
    eventInfo.info,
    brokerInfo.info,
    metricsInfo.info,
    flushInfo.info,
    macrosInfo.info,
    loggerInfo.info
];
const allInfoB = [
    constructors.constructors,
];
const allInfoC = [
    paramInfo.paramCompletion,
    eventInfo.cacheCompletion,
    eventInfo.eventCompletion
];
const constructorsAndMethods = [
    paramInfo.info,
    commonInfo.info,
    eventInfo.info,
    brokerInfo.info,
    metricsInfo.info,
    flushInfo.info,
    macrosInfo.info,
    loggerInfo.info,
    constructors.constructors
];
function newGenericHoverDocumentation() {
    const hoverProvider = [];
    constructorsAndMethods.forEach(function (object) {
        for (const [method, methodInfo] of Object.entries(object)) {
            hoverProvider.concat(hoverProvider, hoverGenericDocumentation(methodInfo));
        }
    });
    return hoverProvider;
}
exports.newGenericHoverDocumentation = newGenericHoverDocumentation;
function hoverGenericDocumentation(methodInfo) {
    return vscode.languages.registerHoverProvider('lua', {
        provideHover(document, position, token) {
            let regexTrigger = (methodInfo.trigger === '.' ? '\\.' : methodInfo.trigger);
            const regex = new RegExp(methodInfo.class + regexTrigger + methodInfo.name);
            const wordRange = document.getWordRangeAtPosition(position, regex);
            const keyWord = document.getText(wordRange);
            const desiredWord = methodInfo.class + methodInfo.trigger + methodInfo.name;
            if (keyWord === desiredWord) {
                const doc = new doc_1.Doc(methodInfo);
                // Checks if object is tagged with the tag\\.\n\nReturns:\n\n  Returns true if object is tagged with tag\\.")
                return new vscode.Hover(doc.getDocMarkdown());
            }
            return undefined;
        }
    });
}
function newGenericSnippetCompletion() {
    return vscode.languages.registerCompletionItemProvider('lua', {
        provideCompletionItems(document, position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            const result = [];
            allInfoA.forEach(function (object) {
                for (const [method, methodInfo] of Object.entries(object)) {
                    if (linePrefix.endsWith(methodInfo.class + methodInfo.trigger)) {
                        // build snippet
                        let snippet = methodInfo.name + '(';
                        if (methodInfo.params.length !== 0) {
                            if (methodInfo.class === 'sc_logger') {
                                snippet += '"[${1:class_name}:${2:function_name}]: ${3:message}"';
                            }
                            else {
                                methodInfo.params.forEach(function (value, index) {
                                    index++;
                                    // create snippet text for auto completation
                                    if (index !== 1) {
                                        snippet += (value.optional ? "${" + index + ": [, " + value.name + "]}" : ", ${" + index + ":" + value.name + "}");
                                    }
                                    else {
                                        snippet += (value.optional ? "${" + index + ":[" + value.name + "]}" : "${" + index + ":" + value.name + "}");
                                    }
                                });
                            }
                        }
                        snippet += ")";
                        // completion only params
                        const doc = methodInfo.description + "\n\n---\n\n" + methodInfo.documentation;
                        const snippetCompletion = new vscode.CompletionItem(methodInfo.name);
                        snippetCompletion.insertText = new vscode.SnippetString(snippet);
                        const docs = new vscode.MarkdownString(doc);
                        snippetCompletion.documentation = docs;
                        result.push(snippetCompletion);
                    }
                }
            });
            return result;
        }
    }, ':');
}
exports.newGenericSnippetCompletion = newGenericSnippetCompletion;
function constructorsGenericSnippetCompletion() {
    return vscode.languages.registerCompletionItemProvider('lua', {
        provideCompletionItems(document, position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            const result = [];
            allInfoB.forEach(function (object) {
                for (const [method, methodInfo] of Object.entries(object)) {
                    if (linePrefix.endsWith(methodInfo.class + methodInfo.trigger)) {
                        // build snippet
                        let snippet = methodInfo.name + '(';
                        if (methodInfo.params.length !== 0) {
                            methodInfo.params.forEach(function (value, index) {
                                index++;
                                // create snippet text for auto completation
                                if (index !== 1) {
                                    snippet += (value.optional ? "${" + index + ": [, " + value.name + "]}" : ", ${" + index + ":" + value.name + "}");
                                }
                                else {
                                    snippet += (value.optional ? "${" + index + ":[" + value.name + "]}" : "${" + index + ":" + value.name + "}");
                                }
                            });
                        }
                        snippet += ")";
                        // completion only params
                        const doc = methodInfo.description + "\n\n---\n\n" + methodInfo.documentation;
                        const snippetCompletion = new vscode.CompletionItem(methodInfo.name);
                        snippetCompletion.insertText = new vscode.SnippetString(snippet);
                        const docs = new vscode.MarkdownString(doc);
                        snippetCompletion.documentation = docs;
                        result.push(snippetCompletion);
                    }
                }
            });
            return result;
        }
    }, '.');
}
exports.constructorsGenericSnippetCompletion = constructorsGenericSnippetCompletion;
function paramsGenericSnippetCompletion() {
    return vscode.languages.registerCompletionItemProvider('lua', {
        provideCompletionItems(document, position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            const result = [];
            allInfoC.forEach(function (list) {
                list.forEach(function (data) {
                    if (linePrefix.match(/(?<=\.| |^)(event|params|cache)/)) {
                        if (data.prefix) {
                            if (data.prefix === "params") {
                                result.push(buildParam(data));
                            }
                            else if (data.prefix === "cache" || data.prefix === "severity") {
                                result.push(buildCache(data));
                            }
                            else if (data.prefix === "event") {
                                result.push(buildEvent(data));
                            }
                        }
                    }
                });
            });
            return result;
        }
    }, '.');
}
exports.paramsGenericSnippetCompletion = paramsGenericSnippetCompletion;
function buildParam(data) {
    const snippetCompletion = new vscode.CompletionItem(data.name);
    const mdDoc = new vscode.MarkdownString("```lua\ntype: " + data.type + "\n```\n\n---\n\n" + data.description);
    if (data.scope) {
        mdDoc.appendMarkdown("\n\n`scope`: " + data.scope);
    }
    if (data.default) {
        mdDoc.appendMarkdown("\n\n`default value`: " + data.default);
    }
    if (data.information) {
        mdDoc.appendMarkdown("\n\n---\n\n*Additional information: " + data.information + "*");
    }
    snippetCompletion.documentation = mdDoc;
    return snippetCompletion;
}
function buildCache(data) {
    const snippetCompletion = new vscode.CompletionItem(data.name);
    const mdDoc = new vscode.MarkdownString("```lua\ntype: " + data.type + "```");
    snippetCompletion.documentation = mdDoc;
    return snippetCompletion;
}
function buildEvent(data) {
    const snippetCompletion = new vscode.CompletionItem(data.name);
    const mdDoc = new vscode.MarkdownString("```lua\ntype: " + data.type + "\n```\n---\n\n`scope`: " + data.scope);
    snippetCompletion.documentation = mdDoc;
    return snippetCompletion;
}
//# sourceMappingURL=subscriptions.js.map