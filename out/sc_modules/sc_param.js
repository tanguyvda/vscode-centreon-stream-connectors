"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCompletion = void 0;
const subscriptions = require("../lib/subscriptions");
function buildCompletion() {
    // const methods: Array<string> = [
    //   "constructor",
    //   "paramOverride",
    //   "checkParams",
    //   "isMandatoryConfigSet",
    //   "getKafkaParameters",
    //   "loadEventFormatFile",
    //   "buildAcceptedElementsInfo"
    // ];
    // const paramDisposable: Array<vscode.Disposable> = [];
    // paramCompletion.forEach(function(value) {
    //   paramDisposable.concat(paramDisposable, subscriptions.genericParamCompletion(value));
    // });
    return subscriptions.newGenericSnippetCompletion();
    // return paramDisposable.concat(paramDisposable, Doc.buildAllDocs(methods, info));
}
exports.buildCompletion = buildCompletion;
//# sourceMappingURL=sc_param.js.map