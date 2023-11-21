# Studio Agent Bridge
Studio Agent Bridge is a Typescript/JavaScript framework meant to ease the usage of Microsoft Copilot Studio on websites.

Easily add a Copilot with a custom canvas to your website with only 4 lines of code

## Features

- Automatic event wiring
- Custom events

## Usage

### Prerequisites 

This framework relies on the Token Endpoint URL from Copilot studio.  You can get this url by navigating to your Copilot in Microsoft Copilot Studio and going to Settings>Channels>Mobile app:

![Microsoft Copilot Studio Channels](/media/CopilotStudioChannels.png)

Then copy the url for the Token endpoint:

![Microsoft Copilot Studio Mobile app](/media/CopilotStudioMobileApp.png)

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

| Feature Name | Feature |
| ------------------ | :-------: |
|    Events   | X  |
|    Themes    |   |

