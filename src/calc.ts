import { ingredients, IIngredients } from './ingredients';


const scaleIngredients  = (scalar : number) => {
    const result : { [key:string] : number}= {};
    for (const [ingredient, qty] of Object.entries(ingredients)) {
      result[ingredient] = qty * scalar;
    }
    return result;
}

const outputRecipe = (recipe:IIngredients) => {
  for (const [ingredient, qty] of Object.entries(ingredients)) {
    const roundedQty : number = Math.round(qty*1000) / 1000.0;
    console.log(`${ingredient}\t${roundedQty}\n`);
  }
}

outputRecipe(scaleIngredients(0.6666666));
