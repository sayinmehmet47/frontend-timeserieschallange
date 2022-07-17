const { render } = require('@testing-library/react');
import { screen, configure, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const { default: Home } = require('./pages');
const { default: TimeChart } = require('./pages/components/TimeChart');
const router = require('next/router');

describe('Assets', function () {
  it('renders without crashing', () => {
    render(<Home />);
    expect(screen.getByText('ASSETS')).toBeInTheDocument();
  });
  it('should have cards with selection asset', () => {
    const { container } = render(<Home />);
    expect(container.querySelectorAll('.card-group')).toHaveLength(1);
    expect(container.querySelectorAll('.card-group .card')).toHaveLength(3);
  });

  it('first card should have two buttons', () => {
    const { container } = render(<Home />);
    expect(
      container.querySelector('.card ').querySelectorAll('button')
    ).toHaveLength(2);
  });
  it('view on map button should take me to google map page', () => {
    render(<Home />);

    //find all buttons with text "View on Map"
    const buttons = screen.getAllByText('View on Map 🗺');
    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
    //click on button calls router.push
    buttons.forEach((button) => {
      router.push = jest.fn();
      fireEvent.click(button);
      expect(router.push).toHaveBeenCalled();
    });
  });
  it('card should have button with text View Signals', () => {
    render(<Home />);
    const buttons = screen.getAllByText('View Signals 📡');
    expect(buttons).toHaveLength(3);
    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
      router.push = jest.fn();
      fireEvent.click(button);
      expect(router.push).toHaveBeenCalledTimes(1);
    });
  });
});

describe('Signals', function () {
  const signals = [
    {
      SignalName: 'Signal 1',
      SignalMeasurement: [
        [[1636299582230, 114.1636]],
        [1636299690273, 114.3345],
        [1636299763970, 114.1636],
      ],
    },
  ];

  it('should graph render without crash', () => {
    render(<TimeChart signals={signals} />);
    expect(screen.getByText(/Chart with 3 data points./i));
  });
});
