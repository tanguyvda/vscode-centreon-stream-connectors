"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassDoc = void 0;
const vscode = require("vscode");
class ClassDoc {
    constructor(info) {
        this.info = info;
        this.language = 'lua';
        this.result = {
            "docHeader": "",
            "docParam": "",
            "docReturn": "",
            "docLink": "",
            "docDesc": ""
        };
    }
    getDocMarkdown() {
        this.buildArgs();
        this.buildReturn();
        this.buildDescription();
        this.builDocLink();
        const markdown = new vscode.MarkdownString(this.result.docHeader);
        markdown.appendMarkdown(this.result.docDesc);
        markdown.appendMarkdown(this.result.docParam);
        markdown.appendMarkdown(this.result.docReturn);
        markdown.appendMarkdown(this.result.docLink);
        return markdown;
    }
    buildArgs() {
        let docParam = "";
        let docHeader = "```" + this.language + "\nfunction " + this.info.name + "(";
        if (this.info.params.length !== 0) {
            // compute all args
            this.info.params.forEach(function (value, index) {
                // create snippet text for auto completation
                if (index !== 0) {
                    docHeader += (value.optional ? " [, " + value.name + "]" : ", " + value.name);
                }
                else {
                    docHeader += (value.optional ? "[" + value.name + "]" : value.name);
                }
                // create syntax for on hover documentation
                docParam += (value.optional ? "**[optional]** " : docParam);
                docParam += "*@param* `" + value.type + "`: " + value.description + "\n\n";
            });
            this.result.docParam = docParam;
        }
        docHeader += ")\n```\n---\n\n";
        this.result.docHeader = docHeader;
    }
    buildReturn() {
        if (this.info.return.length !== 0) {
            let docReturn = "";
            // compute all return
            this.info.return.forEach(function (value, index) {
                // create syntax for on hover documentation
                docReturn += (value.optional ? "**[optional]** " : docReturn);
                docReturn += "*@return* `" + value.type + "`: " + value.description + "\n\n";
            });
            this.result.docReturn = docReturn;
        }
    }
    builDocLink() {
        this.result.docLink = "---\n\n" + this.info.documentation + "\n\n";
    }
    buildDescription() {
        this.result.docDesc = this.info.description + "\n\n";
    }
}
exports.ClassDoc = ClassDoc;
//# sourceMappingURL=class_doc.js.map