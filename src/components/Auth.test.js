import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AuthProvider } from './AuthContext';
import Auth from './Auth';

test('should render authentication status and checkbox', () => {
  render(
    <AuthProvider>
      <Auth />
    </AuthProvider>
  );

  const authText = screen.getByText(/You are not authenticated/i);
  expect(authText).toBeInTheDocument();

  const checkbox = screen.getByLabelText(/I am not a robot/i);
  expect(checkbox).toBeInTheDocument();

  fireEvent.click(checkbox);
  expect(screen.getByText(/You are authenticated/i)).toBeInTheDocument();

  fireEvent.click(checkbox);
  expect(screen.getByText(/You are not authenticated/i)).toBeInTheDocument();
});
