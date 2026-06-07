import React from 'react';
import { render, screen } from '@testing-library/react';
import { renderToStaticMarkup } from 'react-dom/server';

import RootLayout from '@/app/layout';

jest.mock('@/app/AuthProvider', () => ({
  AuthProvider: ({ children }: { children: React.ReactNode }) => <div data-testid="auth-provider">{children}</div>,
}));

jest.mock('@/app/SessionLoader', () => ({
  SessionLoader: ({ children }: { children: React.ReactNode }) => <div data-testid="session-loader">{children}</div>,
}));

jest.mock('next/font/google', () => ({
  Geist: () => ({ variable: '--font-geist-sans' }),
  Geist_Mono: () => ({ variable: '--font-geist-mono' }),
}));

describe('RootLayout', () => {
  it('renders children inside the AuthProvider and SessionLoader', () => {
    render(
      <RootLayout>
        <div data-testid="child">Hello World</div>
      </RootLayout>,
    );

    const authWrapper = screen.getByTestId('auth-provider');
    expect(authWrapper).toBeInTheDocument();
    const sessionWrapper = screen.getByTestId('session-loader');
    expect(sessionWrapper).toBeInTheDocument();

    const child = screen.getByTestId('child');
    expect(child).toBeInTheDocument();
    expect(child).toHaveTextContent('Hello World');
  });

  it('applies font variables and antialiased class on body via SSR', () => {
    const markup = renderToStaticMarkup(
      <RootLayout>
        <div />
      </RootLayout>,
    );

    expect(markup).toMatch(/<body[^>]*class="--font-geist-sans --font-geist-mono antialiased"[^>]*>/);
  });
});
