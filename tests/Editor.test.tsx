import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
import ResizeObserver from 'resize-observer-polyfill';

import React from 'react';
import Editor from '../src/Editor/Editor';

beforeEach(() => {
  /* Allows the test to work by polyfilling the ResizeObserver */
  global.ResizeObserver = ResizeObserver;

  render(<Editor />);
});

describe('NavigationContainer', () => {
  test('Render child components', () => {
    expect(screen.getByTitle('Menu')).toBeInTheDocument();
    expect(screen.getByText('memify')).toBeInTheDocument();
    expect(screen.getByTitle('Save')).toBeInTheDocument();
  });
});

describe('DrawingContainer', () => {
  test('Render child components', () => {
    expect(screen.getByTestId('canvas')).toBeInTheDocument();
  });

  test('Toggle PenMenu when clicking on PenButton', () => {
    const penSettingsButton = screen.getByTitle('Pen Settings');
    fireEvent.click(penSettingsButton);

    const smallThicknessButton = screen.getByText('S');
    const mediumThicknessButton = screen.getByText('M');
    const largeThicknessButton = screen.getByText('L');

    expect(smallThicknessButton).toBeInTheDocument();
    expect(mediumThicknessButton).toBeInTheDocument();
    expect(largeThicknessButton).toBeInTheDocument();

    fireEvent.click(penSettingsButton);

    expect(smallThicknessButton).not.toBeInTheDocument();
    expect(mediumThicknessButton).not.toBeInTheDocument();
    expect(largeThicknessButton).not.toBeInTheDocument();
  });
});

describe('ToolbarContainer', () => {
  test('Render child components', () => {
    expect(screen.getByTitle('Undo')).toBeInTheDocument();
    expect(screen.getByTitle('Redo')).toBeInTheDocument();
    expect(screen.getByTitle('Pen Settings')).toBeInTheDocument();
    expect(screen.getByTitle('Reset')).toBeInTheDocument();
    expect(screen.getByTitle('Download')).toBeInTheDocument();
  });
});
