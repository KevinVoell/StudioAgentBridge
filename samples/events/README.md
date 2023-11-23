# Events Example

Demonstrates an example of handeling events from Microsoft Copilot Studio.  

This simple example attaches an onChange handler to the selectTest element in the HTML DOM.  When the onChange event fires, the framework will send an Echo message to the bot, which then responds with the selected text.

## Usage

### Conversation Start Topic

To use this sample you will need to modify the Conversation Start System topic of your bot, by adding this YAML snippit to the end of conversation flow:

```yaml
- kind: SendActivity
  id: sendActivity_Uqjwzx
  activity:
    kind: EventActivity
    value: |-
      ={bindings: [
              {
                  elementId: "selectTest",
                  value: "Echo"
              }
          ]}
    name: Initialize
```

The complete topic should look something like this:

(Copilot Conversation Start topic)[./media/conversationStartTopic.png]

### Echo Topic

Next you need to create a new topic called Echo, this is the topic the bot calls from the client side and echos the selected item.

```yaml

```
The complete topic should look something like this:

(Copilot Echo Topic)[./media/echoTopic.png]

### Add Token Endpoint URL

Make sure you modify the index.html to include your token endpoint URL

### Running

You can now launch the index.html in your browser and see the bot start up.  Now when you select an item from the dropdown list the bot will respond with a message contianing the selected item.
