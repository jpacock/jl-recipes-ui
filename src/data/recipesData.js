import { v4 as uuidv4 } from 'uuid';

const recipesData = [
    {
        id: uuidv4(),
        name: "Tuna Salad",
        chef: "Jordan",
        ingredients: [
            "Canned Tuna: 2.5 ounces",
            "Mayonnaise: 1/4th cup",
            "1 stalk (diced) Celery",
            "2 tablespoons (diced) Red Onion",
            "1-2 tablespoons (chopped) Parsley",
            "1/2 tablespoon Dijon Mustard",
            "1 tablespoon Capers",
            "Salt and Pepper to taste"
        ],
        instructions: [
            {
                step: 1,
                text: "Drain tuna, and place in a medium sized bowl."
            },
            {
                step: 2,
                text: "Add mayonnaise, celery, red onion, capers, parsley, and dijon mustart to the bowl and mix everything together."
            }
        ]
    },
    {
        id: uuidv4(),
        name: "Spicy Indian Rack of Lamb",
        chef: "",
        ingredients: [
            "2 racks of lamb",
            "1/2 cup greek yogurt ",
            "Juice of one lime",
            "1/4 cup (chopped) cilantro",
            "1 tablespoon salt",
            "1 teaspoon cayenne pepper",
            "1 teaspoon black pepper",
            "1 teaspoon cardamom powder",
            "1 teaspoon ground cumin",
            "1 teaspoon cinnamon",
            "1/2 teaspoon onion powder",
            "1/2 teaspoon garlic",
            "1/2 teaspoon nutmeg"
        ],
        instructions: [
            {
                step: 1,
                text: "Combine spices and mix with lime juice, chopped cilantro, yogurt until evenly blended."
            },
            {
                step: 2,
                text: "Trim loose fat or meat from the rack of lamb and rinse in cold water. Do not trim fat on back of the ribs."
            },
            {
                step: 3,
                text: "Place 1/2 of yogurt/spice mixture in each of two zip-top bags. Place one rack of lamb in each back, the bone ends up. Turn to evenly coat the meat of the rack of lamb. Close zip-top bags and refrigerate for 6 to 4 hours."
            },
            {
                step: 4,
                text: "Trim loose fat or meat from the rack of lamb and rinse in cold water. Do not trim fat on back of the ribs."
            },
            {
                step: 5,
                text: "Preheat grill to 450-500 degrees. When temperature reached, sear lab racks for 2 minutes on each side."
            },
            {
                step: 6,
                text: "Turn down grill to 350 and let lamb cook until reaching an internal temperature of 145 degrees."
            },
            {
                step: 7,
                text: "Take lamb off grill and let sit for 10 minutes before serving."
            }
        ]
    },
    {
        id: uuidv4(),
        name: "Buttermilk Biscuits",
        chef: "",
        ingredients: [
            "2 cups flour",
            "1/4  tsp baking soda",
            "4 tsp baking powder",
            "3/4  tsp salt",
            "4 tbsp butter, cold",
            "1 cup homemade buttermilk*",
            "1 tbsp apple cider vinegar",
            "1 cup milk"
        ],
        instructions: [
            {
                step: 1,
                text: "For buttermilk, combine apple cider vinegar and milk and let sit for a few min)"
            },
            {
                step: 2,
                text: "Combine flour, soda, baking powder, and salt."
            },
            {
                step: 3,
                text: "Cut cold butter into small cubes and use fingertips to combine into flour mixture, continuing to break into small pieces until small crumbles are formed."
            },
            {
                step: 4,
                text: "Form a well in the center of the flour mixture and pour buttermilk in the center."
            },
            {
                step: 5,
                text: "Using a spatula, combine all together. Add a tbsp more milk at a time if mixture is too dry. You want it to be somewhat sticky but not wet."
            },
            {
                step: 6,
                text: "Take batter out of bowl and knead a few times on a floured surface. Pat batter down to a rectangle shape 2 thickness. Using a knife, divide dough into about 8 squares/rectangles."
            },
            {
                step: 7,
                text: "Take each section and push sides in to form a circular shape. Place the biscuits onto a greased pan about 1 apart. Spray tops of biscuits with cooking spray."
            },
            {
                step: 8,
                text: "Bake in oven at 425 for about 15 min or until lightly golden."
            }
        ]
    },
    {
        id: uuidv4(),
        name: "Marks Famous Cinnamon Rolls",
        chef: "Mark",
        ingredients: [
            "3 c flour",
            "1/2 t salt",
            "1/2 c sugar",
            "2 Tbsp butter",
            "1 c water",
            "1 pkg dry yeast",
            "1/2 crisco",
            "1 egg",
            "2t butter",
            "1/2 t vanilla"
        ],
        instructions: [
            {
                step: 1,
                text: "Dissolve yeast in lukewarm water."
            },
            {
                step: 2,
                text: "Sift all dry ingredients together-cut in crisco- mix well-add egg, vanilla and yeast mixture."
            },
            {
                step: 3,
                text: "Place dough in greased bowl-cover-let rise to double in size. (overnight in refrigerator) prepare rolls, biscuits-etc. let rise. "
            },
            {
                step: 4,
                text: "Brush bread with melted butter. Bake at 375 for 30 min."
            },
            {
                step: 5,
                text: "Roll dough into rectangle 12x20 "
            },
            {
                step: 6,
                text: "Spread softened 1 1/2 sticks butter and 1 1/2 granulated sugar and 2 t."
            },
            {
                step: 7,
                text: "Sprinkle with chopped walnuts or pecans-white raisins. "
            },
            {
                step: 8,
                text: 'Roll into jelly roll-cut into 1/2" rolls. Place on baking sheet. Let rise in warm place. Bake. While still warm cover with powdered sugar. Glaze "" butter, milk, vanilla'

            }
        ]
    },
    {
        id: uuidv4(),
        name: "Breakfast Casserole",
        chef: "",
        ingredients: [
            "12 Eggs",
            "2 4oz cans green chilis",
            "16oz cottage cheese",
            "8oz Monterey Jack Cheese",
            "16oz breakfast sausage"
        ],
        instructions: [
            {
                step: 1,
                text: "Brown sausage."
            },
            {
                step: 2,
                text: "Whisk eggs."
            },
            {
                step: 3,
                text: "Combine all ingredients in a large casserole dish.  Bake a 375* for about 45 min or until the edge is browning and eggs are solid."
            }

        ]
    },
    {
        id: uuidv4(),
        name: "Easy Butter Crust",
        descriptions:"Heathers Pref for quiche",
        chef: "Heather",
        ingredients: [
            "1cup Flour",
            " tsp salt",
            "6 tbsp cold butter",
            "4 tbsp ice cold water"
        ],
        instructions: [
            {
                step: 1,
                text: "Mix together flour and salt."
            },
            {
                step: 2,
                text: "Cut butter with pastry cutter until mixture is in pebble sized crumbs."
            },
            {
                step: 3,
                text: "Add water and blend until pulls all together."
            },
            {
                step: 4,
                text: "Roll into a ball and place on a floured surface."
            },
            {
                step: 5,
                text: "Using a rolling pin roll into pie sized circle.  Bake according to the directions of pie or quiche."
            }
        ]
    }
]

export default recipesData;