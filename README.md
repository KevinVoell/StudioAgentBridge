# Studio Agent Bridge
Studio Agent Bridge is a TypeScript/JavaScript framework designed to make it simple to add a copilot to your website using Microsoft Copilot Studio.  

Easily add a custom canvas copilot to your website with only a fww lines of code!

You can try Microsoft Copilot Studio for free by visiting:

[Microsoft Copilot Studio](https://aka.ms/trycopilotstudio)

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

Include the studio agent javascript file in your html

``` javascript
<script src="./dist/studioAgent.js"></script>
```

Declare a div where the bot will be hosted

```html
<div id="webchat"></div>
```

Instantiate the options and connect the bot

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

