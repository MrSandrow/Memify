## App

- Don't let the user interact with the app if it is currently open on another device/tab
- Display a modal on network operations success / error

## Authentication

- Sign up
- Sign in
- Reset password

## Dashboard

- Change screen using menu
- Sign out

## Drawings

- Create a new drawing from an image / blank background / sharing link (Modal)
- Rename & Share & Delete a drawing using the context menu (Modal)
- Sort drawings (by name / creation date / last opening date)
- Search for a drawing
- Edit a drawing

## Settings

- Change email
- Change password
- Delete account (Modal)

## Editor

- Go back to the dashboard
- Manually save the drawing (set name on first save -> Modal)
- Warn users if they quit the editor without having saved their changes (closing the tab / going back to the dashboard -> useState / compare old canvas to new canvas)

- Set canvas dimensions & background (avoid aliasing)
- Change pen color / thickness
- Download canvas
- Reset canvas

## Next Features

- Add animations (button loaders)
- Close modals / context menus when clicking outside of them / on esc key
- Navigate in the app using the keyboard where it is appropriate
- Undo / Redo in the canvas (avoid successive resets to be saved multiple times in undoArray -> don't save a blob if it is identical to the previous one)

## Tools

* Configure ESLint with TypeScript
* Configure Webpack & Babel with JSX & TypeScript
- Use Pull Requests
- Use Advanced React Features

* Use Styled Components
- Use Firebase
- Use React Router
- Use React Query / Apollo
- Use Formik / React Hooks Form
- Use React Spring / Framer Motion
- Use React Testing Library / Cypress
- Use GraphQL (Trigger requests dynamically : when submitting a form / when applying a filter)