# Basic Example

Demonstrates an example of handeling events

Add this yaml snippet to the end of your conversation start topic.  
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
