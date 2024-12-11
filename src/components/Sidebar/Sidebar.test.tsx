import { BrowserRouter, useLocation } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';

const mocks = {
  pages: ['margarita', 'mojito', 'a1', 'kir'],
  location: { pathname: '/' },
  useLocation: useLocation as jest.Mock
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn()
}));

const renderComponent = () => {
  render(
    <BrowserRouter>
      <Sidebar pages={mocks.pages} />
    </BrowserRouter>
  );
};

describe('Sidebar', () => {
  it('should render links', () => {
    mocks.useLocation.mockReturnValueOnce(mocks.location);
    renderComponent();

    mocks.pages.forEach((page) => {
      expect(screen.getByText(page)).toBeVisible();
      expect(screen.getByText<HTMLLinkElement>(page).href).toBe(`http://localhost/${page}`);
      expect(screen.getByText(page)).not.toHaveClass('active');
    });
  });

  it('should render active link', () => {
    mocks.useLocation.mockReturnValueOnce({ pathname: `/${mocks.pages[0]}` });
    renderComponent();

    expect(screen.getByText(mocks.pages[0])).toHaveClass('active');

    mocks.pages.slice(1).forEach((page) => {
      expect(screen.getByText(page)).not.toHaveClass('active');
    });
  });
});
