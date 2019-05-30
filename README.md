# Smart Beginning of Line

Jump to the first non-whitespace character first. If cursor is at first
non-whitespace character, jump to line start. Multiple cursors are supported.

By default, `Smart Beginning of Line` doesn't bind to any key bindings. It's
user's right to decide which command goes to which key binding. This is a very
handy editor command, you may not want to invoke it through command palette.

If you are an previously emacs user, you may want to add these to your
`keybindings.json`.

```json
{
  "key": "ctrl+a",
  "command": "smartBeginningOfLine",
  "when": "textInputFocus"
}
```


## Need Help?

Open an issue [here](https://github.com/zhangkaiyulw/smart-beginning-of-line/issues).

## License

[MIT](https://github.com/zhangkaiyulw/smart-beginning-of-line/blob/master/LICENSE) @ Victor Zhang
