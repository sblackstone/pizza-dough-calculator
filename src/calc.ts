#!/usr/bin/env ts-node

import { ingredients, IIngredients } from './ingredients';


const scaleIngredients  = (scalar : number) => {
    const result : { [key:string] : number}= {};
    for (const [ingredient, qty] of Object.entries(ingredients)) {
      result[ingredient] = qty * scalar;
    }
    return result;
}

const outputRecipe = (recipe:IIngredients) => {
  for (const [ingredient, qty] of Object.entries(recipe)) {
    const roundedQty : number = Math.round(qty*1000) / 1000.0;
    console.log(`${ingredient}\t${roundedQty}`);
  }
}

const PIZZAS_PER_RECIPE = 3.0;
const PIZZAS_TO_MAKE = parseInt(process.argv[2]);
const scale =  (PIZZAS_TO_MAKE / PIZZAS_PER_RECIPE) + 0.03; 
console.log(`Making ${PIZZAS_TO_MAKE} pizzas by scaling the recipe by ${scale*100} %`)


outputRecipe(scaleIngredients(scale));
