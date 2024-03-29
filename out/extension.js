"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const subscriptions = require("./lib/subscriptions");
function activate(context) {
    context.subscriptions.concat(subscriptions.newGenericSnippetCompletion());
    context.subscriptions.concat(subscriptions.constructorsGenericSnippetCompletion());
    context.subscriptions.concat(subscriptions.paramsGenericSnippetCompletion());
    context.subscriptions.concat(subscriptions.newGenericHoverDocumentation());
    context.subscriptions.concat(subscriptions.newParamHoverDocumentation());
    context.subscriptions.concat(subscriptions.specialsGenericSnippetCompletion());
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map