"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamDoc = void 0;
const vscode = require("vscode");
class ParamDoc {
    constructor(info) {
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
    getDocMarkdown() {
        this.buildHeader();
        this.buildDescription();
        const markdown = new vscode.MarkdownString(this.result.docHeader);
        markdown.appendMarkdown(this.result.docDesc);
        markdown.appendMarkdown("**[Official Parameters Documentation](" + this.paramDocLink + ")**");
        return markdown;
    }
    buildHeader() {
        const docHeader = "```" + this.language + "\nparameter: " + this.info.name + " (type: " + this.info.type + ")\n```\n---\n\n";
        this.result.docHeader = docHeader;
    }
    buildDescription() {
        this.result.docDesc = "**Description:** " + this.info.description + "\n\n"
            + "**Default value:** " + this.info.default + "\n\n"
            + "**Scope:** " + this.info.scope + "\n\n";
        if (this.info.information) {
            this.result.docDesc += "**Additional information:** " + this.info.information + "\n\n";
        }
    }
}
exports.ParamDoc = ParamDoc;
//# sourceMappingURL=param_doc.js.map