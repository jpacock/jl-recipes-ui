import { v4 as uuidv4 } from 'uuid';

const recipesData = [
    {
        id: uuidv4(),
        name: "Tuna Salad",
        chef: "Jordan",
        ingredients: [
            "2.5 ounces Canned Tuna",
            "1/4th cup Mayonnaise",
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
    }
]

export default recipesData;