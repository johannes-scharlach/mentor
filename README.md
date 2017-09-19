# Mentor

Mentor helps you with any upgrading that your package requires. It creates branches for every sensible upgrade and pushes those branches to `origin`

## Configuration

Configuration can happen via the `mentor` node in the `package.json`, a `.mentorrc` file (in JSON or yaml) or a `mentor.config.js` file.

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

- [] Custom upgrade command
- [] Dependency upgrades
- [] Allow sending to remotes other than `origin`
