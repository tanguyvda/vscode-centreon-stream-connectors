import * as vscode from 'vscode';
import { IfcParamCompletion, IfcResult } from './interface';

export class ParamDoc {
  info: IfcParamCompletion;
  result: IfcResult;
  language: string;
  paramDocLink: string;

  constructor(info: IfcParamCompletion) {
    this.info = info;
    this.language = 'lua';
    this.paramDocLink = 'https://github.com/centreon/centreon-stream-connector-scripts/blob/develop/modules/docs/sc_param.md#default-parameters';
    this.result = { 
      "docHeader": "",
      "docParam": "",
      "docReturn": "",
      "docLink": "",
      "docDesc": ""
    };
  }

  public getDocMarkdown() {
    this.buildHeader();
    this.buildDescription();

    const markdown = new vscode.MarkdownString(this.result.docHeader);
    markdown.appendMarkdown(this.result.docDesc);
    markdown.appendMarkdown("**[Official Parameters Documentation](" + this.paramDocLink + ")**");

    return markdown;
  }

  public buildHeader() {
    const docHeader: string = "```" + this.language + "\nparameter: " + this.info.name + " (type: " + this.info.type + ")\n```\n---\n\n";
    this.result.docHeader = docHeader;
  }

  public buildDescription() {
    this.result.docDesc = "**Description:** " + this.info.description + "\n\n" 
    + "**Default value:** " + this.info.default + "\n\n"
    + "**Scope:** " + this.info.scope + "\n\n";

    if (this.info.information) {
      this.result.docDesc += "**Additional information:** " + this.info.information +"\n\n";
    }
  }
}
