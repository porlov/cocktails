import { render, screen } from '@testing-library/react';
import { Cocktail } from '../../types';
import { CocktailDetails } from './CocktailDetails';

const cocktailMock: Cocktail = {
  idDrink: '11000',
  strDrink: 'Mojito',
  strCategory: 'Cocktail',
  strAlcoholic: 'Alcoholic',
  strGlass: 'Highball glass',
  strInstructions:
    'Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass ' +
    'with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.',
  strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg',
  strIngredient1: 'Light rum',
  strIngredient2: 'Lime',
  strIngredient3: 'Sugar',
  strIngredient4: 'Mint',
  strIngredient5: 'Soda water',
  strMeasure1: '2-3 oz',
  strMeasure2: 'Juice of 1',
  strMeasure3: '2 tsp',
  strMeasure4: '2-4',
  strMeasure5: null
};

const renderComponent = () => render(<CocktailDetails cocktail={cocktailMock} />);

describe('CocktailDetails', () => {
  it('should render header', () => {
    renderComponent();

    expect(screen.getByText(cocktailMock.strDrink)).toBeVisible();
  });

  it('should render description', () => {
    renderComponent();

    expect(screen.getByText(cocktailMock.strDrink)).toBeVisible();
    expect(screen.getByText(cocktailMock.strCategory)).toBeVisible();
    expect(screen.getByText(cocktailMock.strGlass)).toBeVisible();
  });

  it('should render image', () => {
    renderComponent();

    const displayedImage = screen.getByAltText<HTMLImageElement>(cocktailMock.strDrink);

    expect(displayedImage.src).toBe(cocktailMock.strDrinkThumb);
  });

  it('should render instructions', () => {
    renderComponent();

    expect(screen.getByText('Instructions')).toBeVisible();
    expect(screen.getByText(cocktailMock.strInstructions)).toBeVisible();
  });

  it('should render ingredients list', () => {
    const formatIngredient = (ingredient: string | null, measure: string | null) =>
      `${ingredient ?? ''}: ${measure ?? 'To taste'}`;

    const ingredientsList = [
      formatIngredient(cocktailMock.strIngredient1, cocktailMock.strMeasure1),
      formatIngredient(cocktailMock.strIngredient2, cocktailMock.strMeasure2),
      formatIngredient(cocktailMock.strIngredient3, cocktailMock.strMeasure3),
      formatIngredient(cocktailMock.strIngredient4, cocktailMock.strMeasure4),
      formatIngredient(cocktailMock.strIngredient5, cocktailMock.strMeasure5)
    ];

    renderComponent();

    expect(screen.getByText('List of ingredients')).toBeVisible();

    ingredientsList.forEach((ingredient) => {
      expect(screen.getByText(ingredient)).toBeVisible();
    });
  });
});
