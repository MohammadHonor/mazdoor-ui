import { render, screen } from '@testing-library/react';

import CustomeButton from '@/components/common/customeButton/CustomeButton';

describe('CustomeButton', () => {
  it('renders correctly', () => {
    render(<CustomeButton name="click me" />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument;
  });

  it('which icon exist', () => {
    render(<CustomeButton name="click me" />);
    const button = screen.getByRole('button', { name: /click me/i });
    const workerIcon = button.querySelector('[data-testid="worker"]');
    const notWorkerIcon = button.querySelector('[data-testid="not_worker"]');
    expect(workerIcon).not.toBeInTheDocument();
    expect(notWorkerIcon).toBeInTheDocument();
  });

  it('renders workder icon when name is workers', () => {
    render(<CustomeButton name="Workers" />);

    const button = screen.getByRole('button', { name: /Workers/i });
    const workerIcon = button.querySelector('[data-testid="worker"]');
    expect(workerIcon).toBeInTheDocument();
  });
});
