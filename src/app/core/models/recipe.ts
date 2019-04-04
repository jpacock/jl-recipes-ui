export class Recipe {
    title?: string;
    description?: string;
    ingredients?: Ingredient[];
}

interface Ingredient {
    quantity?: string;
    unit?: string;
    item?: string;
}