# Mentor

Mentor helps you with any upgrading that your package requires. It creates branches for every sensible upgrade and pushes those branches to `origin`

## Installing

It is recommended you install mentor globally via `yarn global add mentor` or `npm install -g mentor` if you prefer npm. For the time being yarn needs to be installed for mentor to do anything.

You will then be able to use the `mentor` command globally.

## Configuration

Currently mentor only works via command line args. Run `mentor --help` to see what you can do.

Configuration can happen via the `mentor-js` node in the `package.json`, a `.mentor-jsrc` file (in JSON or yaml) or a `mentor-js.config.js` file.

Example:

```json
{
  "npmCommands": [
    "migrate"
  ],
  "packageManager": "yarn"
}
```

## Roadmap

- [x] Custom upgrade command
- [ ] Dependency upgrades
- [ ] Allow sending to remotes other than `origin`
