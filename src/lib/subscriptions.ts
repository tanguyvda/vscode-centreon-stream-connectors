import * as vscode from 'vscode';
import { ClassDoc } from '../documentation/class_doc';
import { ParamDoc } from '../documentation/param_doc';
import * as paramInfo from '../info/sc_param_info';
import * as commonInfo from '../info/sc_common_info';
import * as eventInfo from '../info/sc_event_info';
import * as brokerInfo from '../info/sc_broker_info';
import * as metricsInfo from '../info/sc_metrics_info';
import * as flushInfo from '../info/sc_flush_info';
import * as macrosInfo from '../info/sc_macros_info';
import * as loggerInfo from '../info/sc_logger_info';
import * as constructors from '../info/constructors_info';
import * as specials from '../info/special_info';

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

const specialCompletion = [
  specials.specialCompletion
]

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
        const regexTrigger: string = (methodInfo.trigger === '.' ? '\\.' : methodInfo.trigger);
        const regex = new RegExp(methodInfo.class + regexTrigger + methodInfo.name);
        const wordRange: any = document.getWordRangeAtPosition(position, regex);

        if (wordRange !== undefined) {
          const keyWord: string = document.getText(wordRange);
          const desiredWord: string = methodInfo.class + methodInfo.trigger + methodInfo.name;

          if (keyWord === desiredWord) {
            const doc = new ClassDoc(methodInfo);
            // Checks if object is tagged with the tag\\.\n\nReturns:\n\n  Returns true if object is tagged with tag\\.")
            return new vscode.Hover(doc.getDocMarkdown());
          }
        }

        return undefined;
      }
    }
  );
}

export function newParamHoverDocumentation() {
  const hoverProvider: Array<vscode.Disposable> = [];
  paramInfo.paramCompletion.forEach(function(info) {
    hoverProvider.concat(hoverProvider, hoverParamDocumentation(info));
  });

  return hoverProvider;
}

function hoverParamDocumentation(info: any) {
  return vscode.languages.registerHoverProvider(
    'lua',
    {
      provideHover(document:vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken) {
        const regexTrigger: string = (info.trigger === '.' ? '\\.' : info.trigger);
        const regex = new RegExp(info.prefix + regexTrigger + info.name);
        const wordRange: any = document.getWordRangeAtPosition(position, regex);

        if (wordRange !== undefined) {
          const keyWord: string = document.getText(wordRange);
          const desiredWord: string = info.prefix + info.trigger + info.name;

          if (keyWord === desiredWord) {
            const doc = new ParamDoc(info);
            // Checks if object is tagged with the tag\\.\n\nReturns:\n\n  Returns true if object is tagged with tag\\.")
            return new vscode.Hover(doc.getDocMarkdown());
          }
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
                if (methodInfo.class === 'sc_logger' && methodInfo.name.match(/info|debug|error|warning|notice/)) {
                  snippet += '"[${1:class_name}:${2:function_name}]: ${3:message}"';
                } else {
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
        const linePrefix = document.lineAt(position).text.substring(0, position.character);
        const result: Array<vscode.CompletionItem> = [];

        allInfoC.forEach(function(list) {
          list.forEach(function(data) {
            if (linePrefix.match(/(?<=\.| |^)(event|params|cache)/) && linePrefix.endsWith(data.prefix + data.trigger)) {
              if (data.prefix) {
                if (data.prefix === "params") {
                  result.push(buildParam(data));
                } else if (data.prefix === "event") {
                  result.push(buildEvent(data));
                } else if (data.prefix.match(/(cache|severity|host|service|ba)/)) {
                  result.push(buildCache(data));
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

export function specialsGenericSnippetCompletion() {
  return vscode.languages.registerCompletionItemProvider(
    'lua',
    {
      provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
        const linePrefix = document.lineAt(position).text.substring(0, position.character);
        const result: Array<vscode.CompletionItem> = [];

        specialCompletion.forEach(function(list) {
          list.forEach(function(data) {
            if (linePrefix.match(/(?<=\.| |^)(sc_event|sc_params)/) && linePrefix.endsWith(data.prefix + data.trigger)) {
              if (data.prefix) {
                if (data.prefix === "sc_params") {
                  result.push(buildParam(data));
                } else if (data.prefix === "sc_event") {
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