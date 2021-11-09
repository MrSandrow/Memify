# Testing

### Visual Testing

Targeted Devices : 

- iPhone SE + Portrait
- iPhone SE + Landscape
- iPhone 8 Plus + Portrait
- iPhone 8 Plus + Landscape
- iPhone 12 Pro Max + Portrait
- iPhone 12 Pro Max + Landscape

- iPad Mini + Portrait
- iPad Mini + Landscape
- iPad + Portrait
- iPad + Landscape
- iPad Pro + Portrait
- iPad Pro + Landscape

- 1360 x 760 + Landscape
- 1920 x 1080 + Landscape
- 2560 x 1440 + Landscape

### Integration Testing

- Ressource : https://academind.com/tutorials/testing-react-apps/
- Workflow : Test that each component can render its child components & Only test child components if they contain complex logic
- Golden Rules : Add tests immediately after adding a new feature & Always think about what could go wrong in the app (Validate user inputs & Handle errors)

1. Check that each component is being rendered without throwing an error - https://youtu.be/yjVhldDwiNE
2. Check that each component is behaving as expected when the user interacts with it - https://youtu.be/is83bEK3n5A

### End to End Testing

Targeted Devices : 

- Desktop + Landscape + Last Chrome Version
- iPhone 12 + Portrait + Last iOS Version
- Pixel 4 + Portrait + Last Android Version

Workflow - Editor (Repeat this workflow for both device orientations / window sizes) :

- Draw a line on the canvas
- Open PenMenu by clicking on PenButton
- Change pen color
- Rotate the device / Resize the window
- Change pen thickness
- Close PenMenu by clicking on PenButton
- Download the drawing
- Repeat this step in the 4 directions : While holding the pointer down, draw on the canvas, move the pointer outside the canvas, move the pointer inside the canvas again
- Undo six times & Redo six times & Undo twice
- Open & Close PenMenu by clicking on PenButton
- Rotate the device / Resize the window
- Open & Close PenMenu by clicking on PenButton
- Reset the canvas
- Draw a line on the canvas
- Redo once & Undo three times & Redo three times