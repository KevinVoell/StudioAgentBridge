# Studio Agent Bridge
Studio Agent Bridge is a Typescript/JavaScript framework meant to ease the usage of Microsoft Copilot Studio on websites.

Easily add a Copilot with a custom canvas to your website with only 4 lines of code

## Features

- Automatic event wiring
- Custom events

## Usage

### Compile
```cmd
tsc
```

### Basic

``` javascript
<script src="./dist/studioAgent.js"></script>
```

``` javascript
var options = new StudioAgentBridgeOptions("{{Token Address}}");

var bridge = new StudioAgentBridge(options);
bridge.connect();
```

## Roadmap

| Status | Feature |
| ------ | ------- |
|    X   | Events  |
|        | Themes  |

