import { ChefHatIcon } from "lucide-react";

interface IngredientComponentProps {
  product: {
    ingredients: string[];
  }
}
const IngredientComponent = ({ product }: IngredientComponentProps) => {
  if (!product.ingredients.length) return null;
  return (
    <div className="mt-6 space-y-3">
      <div className="flex items-center gap-1.5">
        <ChefHatIcon size={18} />
        <h4 className="font-semibold">Ingredientes</h4>
      </div>
      <ul className="list-disc px-5 text-sm text-muted-foreground">
        {product.ingredients.map(ingredient => {
          return <li key={ingredient}>{ingredient}</li>
        })}
      </ul>
    </div>);
}

export default IngredientComponent;