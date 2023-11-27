# Studio Agent Bridge
Studio Agent Bridge is a TypeScript/JavaScript framework designed to make it simple to add a custom copilot to your website using Microsoft Copilot Studio.  

Easily add a custom canvas copilot to your website with only a few lines of code!

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
var options = new StudioAgent.BridgeOptions("{{Token Address}}");

var bridge = new StudioAgent.Bridge(options);
bridge.connect();
```

## Samples

Example javascript files are located in the [samples](./samples) folder

| Name | Features |
| ----- | -------- |
| [Basic](./samples/basic) | The very minimal example to get the copilot to show |
| [Events](./samples/events) | This sample shows the very basic of using events.  It attaches an onchange to an HTML select element and when the selection changes it fires and event to the bot and the bot responds |
| [Options](./samples/options) | This sample shows how to use the options class to change the behavior of the copilot |

### More samples coming soon

## Roadmap

- [X] Events
- [ ] Themes
- [ ] YAML samples
- [ ] Samples
