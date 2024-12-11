import { Cocktail } from '../../types';
import './CocktailDetails.scss';

export interface CocktailDetailsProps {
  cocktail: Cocktail;
}

const getIngredients = (cocktail: Cocktail, maxIngredientsNumber: number = 15): Record<string, string | null> => {
  const ingredientIds = Array.from({ length: maxIngredientsNumber }, (_, i) => i + 1);

  return ingredientIds.reduce(
    (ingredients, id) => ({
      ...ingredients,
      ...(cocktail[`strIngredient${id}`] && {
        [cocktail[`strIngredient${id}`]!]: cocktail[`strMeasure${id}`]
      })
    }),
    {}
  );
};

const CocktailDetails = ({ cocktail }: CocktailDetailsProps) => (
  <article key={cocktail.idDrink} className="cocktail">
    <section className="cocktail__section cocktail__info">
      <header>
        <h1>{cocktail.strDrink}</h1>
      </header>
      <section className="cocktail__short-description">
        <p>{cocktail.strCategory}</p>
        <p>{cocktail.strAlcoholic}</p>
        <p>{cocktail.strGlass}</p>
      </section>
    </section>
    <figure className="cocktail__image">
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} loading="lazy" />
    </figure>
    <section className="cocktail__section cocktail__instructions">
      <header className="cocktail__section-header">
        <h2>Instructions</h2>
      </header>
      <p>{cocktail.strInstructions}</p>
    </section>
    <section className="cocktail__section cocktail__ingredients">
      <header className="cocktail__section-header">
        <h2>List of ingredients</h2>
      </header>
      <ul className="cocktail__ingredients-list">
        {Object.entries(getIngredients(cocktail)).map(([ingredient, measure]) => (
          <li key={ingredient}>
            {ingredient}: {measure?.trim() ?? 'To taste'}
          </li>
        ))}
      </ul>
    </section>
  </article>
);

export { CocktailDetails };
