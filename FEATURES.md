## Authentication

- Sign up
- Sign in
- Reset password
- Don't let the user sign in if the app is currently open on another device/tab

## Dashboard

- Change screen using menu
- Sign out

## Drafts

- Create a new drawing from an image / blank background / sharing link
- Rename & Share & Delete a drawing using the context menu (display a modal for renaming or sharing the drawing)
- Sort drawings (by name / creation date / last opening date)
- Search for a drawing
- Edit a drawing

## Trash

- Display deleted drawings
- Delete & Restore a drawing using the context menu
- Search for a drawing

## Settings

- Change email
- Change password
- Delete account (display a confirmation modal)

## Editor

- Go back to the dashboard
- Manually save the drawing (on first save, display a modal to set the drawing name)
- Warn users if they quit the editor without having saved their changes (closing the tab / going back to the dashboard - useState / compare old canvas to new canvas)

- Use drawing functions
- Set canvas dimensions & background
- Change pen color & thickness
- Undo / Redo
- Download
- Reset (avoid successive resets to be saved multiple times in undoArray -> don't save a blob if it is identical to the previous one)

## Next Features

- Add animations
- Add keyboard shortcuts inside Editor (Ctrl + Z & Ctrl + Y)
- Close modals / context menus when clicking outside of them / on esc key
- Navigate in context menus using arrow keys & enter key

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