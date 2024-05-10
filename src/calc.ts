#!/usr/bin/env ts-node

import { ingredients, IIngredients } from './ingredients';


const TARGET_WATER_PCT = 0.68;

const scaleIngredients  = (scalar : number) => {
    const result : { [key:string] : number}= {};
    result["total"] = 0;
    for (const [ingredient, qty] of Object.entries(ingredients)) {
      result[ingredient] = qty * scalar;
      result["total"] += qty * scalar;
    }
    result["water"] = result["total"] * TARGET_WATER_PCT;
    return result;
}

const outputRecipe = (recipe:IIngredients) => {
  let total = 0;

  for (const [ingredient, qty] of Object.entries(recipe)) {
    const roundedQty : number = Math.round(qty*1000) / 1000.0;
    console.log(`${ingredient}\t${roundedQty}`);
  }

  let waterPct  = recipe["water"] / recipe["total"];
  waterPct  = Math.round(waterPct*1000) / 1000.0;


  console.log(`Water percentage = ${waterPct*100}%`);

}

const PIZZAS_PER_RECIPE = 3.0;
const PIZZAS_TO_MAKE = parseInt(process.argv[2]);
const scale =  (PIZZAS_TO_MAKE / PIZZAS_PER_RECIPE) + 0.01; 
console.log(`Making ${PIZZAS_TO_MAKE} pizzas by scaling the recipe by ${scale*100} %`)


outputRecipe(scaleIngredients(scale));
