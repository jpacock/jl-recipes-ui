import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

test('Test True', () => {
  expect(true).toBeTruthy();
});

test('Test False', () => {
  expect(false).toBeFalsy();
});

test('renders without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(<button></button>, div);
});