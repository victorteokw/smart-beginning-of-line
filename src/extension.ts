import {
  commands, ExtensionContext, Position, Selection, TextEditor
} from 'vscode';

export function activate(context: ExtensionContext) {
  let disposable = commands.registerTextEditorCommand(
    'extension.smartBeginningOfLine',
    (editor: TextEditor) => {
      let allCursorsAtSBA = true;
      for (const sel of editor.selections) {
        const line = editor.document.lineAt(sel.active);
        if (sel.active.character !== line.firstNonWhitespaceCharacterIndex) {
          allCursorsAtSBA = false;
          break;
        }
      }
      editor.selections = editor.selections.map((sel) => {
        if (allCursorsAtSBA) {
          const position = new Position(sel.active.line, 0);
          return new Selection(position, position);
        } else {
          const line = editor.document.lineAt(sel.active);
          const position = new Position(
            sel.active.line,
            line.firstNonWhitespaceCharacterIndex
          );
          return new Selection(position, position);
        }
      });
    }
  );
  context.subscriptions.push(disposable);
}

export function deactivate() {}
