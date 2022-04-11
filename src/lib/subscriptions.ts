import * as vscode from 'vscode';
import { Doc } from '../documentation/doc';
import * as paramInfo from '../info/sc_param_info';
import * as commonInfo from '../info/sc_common_info';
import * as eventInfo from '../info/sc_event_info';
import * as brokerInfo from '../info/sc_broker_info';
import * as metricsInfo from '../info/sc_metrics_info';
import * as flushInfo from '../info/sc_flush_info';
import * as macrosInfo from '../info/sc_macros_info';
import * as loggerInfo from '../info/sc_logger_info';
import * as constructors from '../info/constructors_info';

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

export function newGenericHoverDocumentation() {
  const hoverProvider: Array<vscode.Disposable> = [];
  constructorsAndMethods.forEach(function(object) {
    for (const [method, methodInfo] of Object.entries(object)) {
      hoverProvider.concat(hoverProvider, hoverGenericDocumentation(methodInfo));
    }
  });

  return hoverProvider;
}

function hoverGenericDocumentation(methodInfo: any) {
  return vscode.languages.registerHoverProvider(
    'lua',
    {
      provideHover(document:vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken) {
        let regexTrigger: string = (methodInfo.trigger === '.' ? '\\.' : methodInfo.trigger);
        const regex: RegExp = new RegExp(methodInfo.class + regexTrigger + methodInfo.name);
        const wordRange: any = document.getWordRangeAtPosition(position, regex);
        const keyWord: string = document.getText(wordRange);
        const desiredWord: string = methodInfo.class + methodInfo.trigger + methodInfo.name;

        if (keyWord === desiredWord) {
          const doc = new Doc(methodInfo);
          // Checks if object is tagged with the tag\\.\n\nReturns:\n\n  Returns true if object is tagged with tag\\.")
          return new vscode.Hover(doc.getDocMarkdown());
        }

        return undefined;
      }
    }
  );
}

export function newGenericSnippetCompletion() {
  return vscode.languages.registerCompletionItemProvider(
    'lua',
    {
      provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
        const linePrefix = document.lineAt(position).text.substr(0, position.character);
        
        const result: Array<vscode.CompletionItem> = [];
        allInfoA.forEach(function(object) {
          for (const [method, methodInfo] of Object.entries(object)) {
            
            if (linePrefix.endsWith(methodInfo.class + methodInfo.trigger)) {
              
              // build snippet
              let snippet: string = methodInfo.name + '(';

              if (methodInfo.params.length !== 0) {
                methodInfo.params.forEach(function(value, index) {
                  index++;
                  // create snippet text for auto completation
                  if (index !== 1) {
                    snippet += (value.optional ? "${" + index + ": [, " + value.name + "]}" : ", ${" + index + ":" + value.name + "}");
                  } else {
                    snippet += (value.optional ? "${" + index + ":[" + value.name + "]}" : "${" + index + ":" + value.name + "}");
                  }
                });
              }
              snippet += ")";
            
              // completion only params
              const doc: string = methodInfo.description + "\n\n---\n\n" + methodInfo.documentation;
              const snippetCompletion = new vscode.CompletionItem(methodInfo.name);
              snippetCompletion.insertText = new vscode.SnippetString(snippet);
              const docs : any = new vscode.MarkdownString(doc);
              snippetCompletion.documentation = docs;
              result.push(snippetCompletion);
            }
          } 
        });
        return result;
      }
    },
    ':'
  );
}


export function constructorsGenericSnippetCompletion() {
  return vscode.languages.registerCompletionItemProvider(
    'lua',
    {
      provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
        const linePrefix = document.lineAt(position).text.substr(0, position.character);
        const result: Array<vscode.CompletionItem> = [];
        allInfoB.forEach(function(object) {
          for (const [method, methodInfo] of Object.entries(object)) {          
            if (linePrefix.endsWith(methodInfo.class + methodInfo.trigger)) {
              // build snippet
              let snippet: string = methodInfo.name + '(';

              if (methodInfo.params.length !== 0) {
                methodInfo.params.forEach(function(value: any, index: any) {
                  index++;
                  // create snippet text for auto completation
                  if (index !== 1) {
                    snippet += (value.optional ? "${" + index + ": [, " + value.name + "]}" : ", ${" + index + ":" + value.name + "}");
                  } else {
                    snippet += (value.optional ? "${" + index + ":[" + value.name + "]}" : "${" + index + ":" + value.name + "}");
                  }
                });
                
              }

              if (methodInfo.class === 'sc_logger') {
                snippet += "[${1:class_name}:${2:function_name}]: ${3:message}";
              }

              snippet += ")";

              // completion only params
              const doc: string = methodInfo.description + "\n\n---\n\n" + methodInfo.documentation;
              const snippetCompletion = new vscode.CompletionItem(methodInfo.name);
              snippetCompletion.insertText = new vscode.SnippetString(snippet);
              const docs : any = new vscode.MarkdownString(doc);
              snippetCompletion.documentation = docs;
              result.push(snippetCompletion);
            }
          } 
        });
        return result;
      }
    },
    '.'
  );
}

export function paramsGenericSnippetCompletion() {
  return vscode.languages.registerCompletionItemProvider(
    'lua',
    {
      provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
        const linePrefix = document.lineAt(position).text.substr(0, position.character);
        const result: Array<vscode.CompletionItem> = [];

        allInfoC.forEach(function(list) {
          list.forEach(function(data) {        
            if (linePrefix.match(/(?<=\.| |^)(event|params|cache)/)) {
              if (data.prefix) {
                if (data.prefix === "params") {
                  result.push(buildParam(data));
                } else if (data.prefix === "cache" || data.prefix === "severity") {
                  result.push(buildCache(data));
                } else if (data.prefix === "event") {
                  result.push(buildEvent(data));
                }
              }
            }
          }); 
        });
        return result;
      }
    },
    '.'
  );
}

function buildParam(data: any) {
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


function buildCache(data: any) {
  const snippetCompletion = new vscode.CompletionItem(data.name);
  const mdDoc = new vscode.MarkdownString("```lua\ntype: " + data.type + "```");
  snippetCompletion.documentation = mdDoc;

  return snippetCompletion;
}

function buildEvent(data: any) {
  const snippetCompletion = new vscode.CompletionItem(data.name);
  const mdDoc = new vscode.MarkdownString("```lua\ntype: " + data.type + "\n```\n---\n\n`scope`: " + data.scope);
  snippetCompletion.documentation = mdDoc;

  return snippetCompletion;
}