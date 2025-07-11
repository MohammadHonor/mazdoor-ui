import { render, screen } from '@testing-library/react';

import RootLayout from '@/app/layout';

// jest.d.ts
import '@testing-library/jest-dom';

describe('RootLayout', () => {
  it('renders children inside the layout', () => {
    render(
      <RootLayout>
        <div data-testid="child">Hello World</div>
      </RootLayout>,
    );

    const child = screen.getByTestId('child');
    expect(child).toBeInTheDocument();
    expect(child).toHaveTextContent('Hello World');
  });

  // it('applies font variables on the <body>', () => {
  //   render(
  //     <RootLayout>
  //       <div />
  //     </RootLayout>,
  //   );

  //   const body = document.body;
  //   expect(body.className).toMatch(/--font-geist-sans/);
  //   expect(body.className).toMatch(/--font-geist-mono/);
  // });

  // it("sets <html lang='en'> and antialiasing", () => {
  //   const html = document.documentElement;
  //   expect(html.lang).toBe('en');
  //   expect(html.classList.contains('antialiased')).toBe(true);
  // });
});
