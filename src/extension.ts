import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    'extension.smartBeginningOfLine',
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;
      vscode.commands.executeCommand('cursorLineStart');
    }
  );
  context.subscriptions.push(disposable);
}

export function deactivate() {}
