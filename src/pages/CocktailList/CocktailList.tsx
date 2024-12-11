import { CocktailDetails, Loading } from '../../components/';
import { useGetCocktailsQuery } from '../../queries';

export interface CocktailListProps {
  code: string;
}

const CocktailList = ({ code }: CocktailListProps) => {
  const { data, isLoading } = useGetCocktailsQuery(code);

  return isLoading ? (
    <Loading />
  ) : (
    data?.drinks.map((cocktail) => <CocktailDetails key={cocktail.idDrink} cocktail={cocktail} />)
  );
};

export default CocktailList;
