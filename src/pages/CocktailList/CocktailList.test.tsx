import { render, screen } from '@testing-library/react';
import { useGetCocktailsQuery } from '../../queries';
import CocktailList from './CocktailList';
import { Cocktail } from '../../types';

const cocktails: Cocktail[] = [
  { idDrink: '11000', strDrink: 'Mojito' } as Cocktail,
  { idDrink: '15841', strDrink: 'Mojito Extra' } as Cocktail
];

const mocks = {
  code: 'mojito',
  useGetCocktailsQuery: useGetCocktailsQuery as jest.Mock
};

jest.mock('../../queries', () => ({
  ...jest.requireActual('../../queries'),
  useGetCocktailsQuery: jest.fn()
}));

const renderComponent = () => render(<CocktailList code={mocks.code} />);

describe('CocktailList', () => {
  it('should render loader when query is loading', () => {
    mocks.useGetCocktailsQuery.mockReturnValueOnce({ isLoading: true });
    renderComponent();

    expect(screen.getByTestId('page-loader')).toBeInTheDocument();
  });

  it('should render cocktails list when query is loaded', () => {
    mocks.useGetCocktailsQuery.mockReturnValueOnce({ data: { drinks: cocktails } });
    renderComponent();

    expect(screen.queryByTestId('page-loader')).not.toBeInTheDocument();

    cocktails.forEach((cocktail) => {
      expect(screen.getByText(cocktail.strDrink)).toBeVisible();
    });
  });
});
