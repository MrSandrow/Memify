import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import React from 'react';
import Editor from '../src/Editor/Editor';

describe('Upload Files', () => {
  let inputButton: HTMLElement;
  const imageFile = new File(['(⌐□_□)'], 'meme.png', { type: 'image/png' });
  const videoFile = new File(['(⌐□_□)'], 'meme.mp4', { type: 'video/mp4' });

  beforeEach(() => {
    render(<Editor />);
    inputButton = screen.getByTestId('file-input');
  });

  test('Render component', () => {
    expect(inputButton).toBeInTheDocument();
  });

  test('Display the uploaded image', async () => {
    fireEvent.change(inputButton, { target: { files: [imageFile] } });

    const imageEditor = await screen.findByRole('img');

    expect(inputButton).not.toBeInTheDocument();
    expect(imageEditor).toBeInTheDocument();
  });

  test('Do nothing when the uploaded file is not an image', async () => {
    const uploadingFile = () => fireEvent.change(inputButton, { target: { files: [videoFile] } });
    await waitFor(uploadingFile);

    const imageEditor = screen.queryByRole('img');

    expect(inputButton).toBeInTheDocument();
    expect(imageEditor).not.toBeInTheDocument();
  });

  test('Do nothing when the user cancels the upload', async () => {
    const uploadingFile = () => fireEvent.change(inputButton, { target: { files: null } });
    await waitFor(uploadingFile);

    const imageEditor = screen.queryByRole('img');

    expect(inputButton).toBeInTheDocument();
    expect(imageEditor).not.toBeInTheDocument();
  });
});
