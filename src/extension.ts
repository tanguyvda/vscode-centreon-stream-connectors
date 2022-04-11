import * as vscode from 'vscode';
import * as subscriptions from './lib/subscriptions';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.concat(subscriptions.newGenericSnippetCompletion());
  context.subscriptions.concat(subscriptions.constructorsGenericSnippetCompletion());
  context.subscriptions.concat(subscriptions.paramsGenericSnippetCompletion());
  context.subscriptions.concat(subscriptions.newGenericHoverDocumentation());
  context.subscriptions.concat(subscriptions.specialsGenericSnippetCompletion());
}

