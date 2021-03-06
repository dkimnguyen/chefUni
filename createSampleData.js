db = db.getDB('chefUniDB')
db.createCollection('recipes')
recipesCollection = db.getCollection("recipes")
recipesCollection.remove({})
recipesCollection.insert(
{
    name: "Grill Cheese Sandwich",
    recipeId: "3",
    chefName: "Alison Roman",
    ingredients: [
        "4 slices of white bread",
        "3 tablesppons butter, divided",
        "2 slices of cheddar cheese"
    ],
    prep : "1 hr",
    description: "Bread, butter and Cheddar cheese - here's a way to make this classic sandwich in a nonstick pan.",
    cooktime: "20 mins",
    servings:"2",
    image: "images/recipePics/recipe3.jpg",
    instructions: [
        "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
    ],
    sharedWith: ["Bianca", "Ishan", "Kim"],
    comments: [
    ]
}
)
recipesCollection.insert(
{
    name : "Breakfast Tacos",
    recipeId: "2",
    chefName : "Alison Roman",
    ingredients: [
        "1/3 cup sour cream",
        "2 tablespoons fresh lime juice",
        "2 tablespoons vegetable oil",
        "2 Mexican chorizo sausages, casing removed",
        "1 large sweet potato, peeled, cut into 1/4 pieces",
        "1/2 teaspoon chili powder",
        "1/4 teaspoon cayenne pepper",
        "Kosher salt, freshly ground pepper",
        "8 large eggs",
        "2 tablespoons unsalted butter",
         "8 6 inch flour tortillas, warmed"
    ],
    prep : "1 hr",
    description: "Super-flavorful (and super-easy) homemade fresh chorizo and crispy hash brown potatoes take these tasty breakfast tacos to the next level.",
    cooktime : "1 hr",
    servings:"6",
    image: "images/recipePics/recipe2.jpg",
    instructions: [
        "Heat oil in a large skillet over medium heat. Cook chorizo, breaking up meat and stirring occasionally, until browned and fat is rendered, 6–8 minutes. Using a slotted spoon, transfer chorizo to paper towels to drain (do not pour off fat from skillet).",
        "Add sweet potato to skillet and cook, stirring occasionally, until golden brown and tender, 8–10 minutes. Mix in chili powder and cayenne, season with black pepper, and cook, stirring, 30 seconds. Using a slotted spoon, transfer to a paper towels to drain; season with salt.",
        "Meanwhile, whisk eggs in a large bowl to blend; season with salt and pepper. Heat butter in a large nonstick skillet over medium heat. Cook eggs, stirring occasionally and scraping bottom of skillet with a heatproof spatula to form large curds, until just set, about 3 minutes. Remove from heat and mix in chorizo.",
        "Fill tortillas with egg mixture and sweet potatoes and top with lime crema, Tomatillo Salsa, Rice Vinegar–Pickled Red Onions, and cilantro."
    ],
    shareWith: ["Bianca", "Ishan", "Kim"],
    comments: [
    ]
}
)
recipesCollection.insert(
{
    name : "Shoyu Ramen",
    recipeId: "1",
    chefName : "Alison Roman",
    ingredients:[
        "Kombu dashi and tare:",
        "2 pieces dried kombu",
        "1/2 cup reduced-sodium soy sauce",
        "2 tablespoons dry sake",
        "1 tablespoon mirin",
        "Pork and stock:",
        "1 1/2 pounds boneless pork shoulder<br>Kosher salt",
        "freshly ground pepper",
        "2 tablespoons vegetable oil",
        "2 pounds chicken necks, backs, and/or wings",
        "1 pound pork spareribs",
        "2 bunches scallions chopped",
        "2 carrots, peeled, cut into pieces",
        "1 head of garlic, halved horizontally",
        "1 piece ginger, peeled, sliced",
        "1/4 cup bonito flakes",
        "Ramen and garnishes:",
        "3 large eggs",
        "6 5-ounce packages fresh thin and wavy ramen noodles (or six 3-ounce packages dried)",
        "1/2 cup menma (fermented bamboo shoots)",
        "6 scallions, thinly sliced",
        "3 toasted nori sheets, torn in half",
        "Chili oil",
        "toasted sesame oil",
        "shichimi togarashi (for serving)"
    ],
    prep : "3 days",
    description: "Lush pork, toothsome noodles, and a heady broth you can't stop slurping—it's no wonder ramen joints are drawing droves of diners, off-duty chefs, and seemingly everyone on your Instagram feed. Bringing shoyu ramen home takes a trip to an Asian market, three days of work, and your largest pot, but this low-stress (really!) labor of love might be the best soup you'll ever make.",
    cooktime : "1 hr",
    servings:"6",
    image: "images/recipePics/recipe1.jpg",
    instructions: [ 
        "Two days ahead MAKE KOMBU DASHI AND TARE The stock's complexity comes from two elements: kombu dashi (a broth) and tare (a soybased mixture).",
        "For the dashi, combine kombu and 4 quarts cold water in a large bowl. Cover and let sit at room temperature at least 8 hours and up to 12 hours.",
        "For the tare, combine soy sauce, sake, and mirin in a small bowl; cover and chill.",
        "One day ahead PREP PORK SHOULDER Season pork shoulder with salt and pepper. Roll up and tie with kitchen twine at 2 intervals. (This helps keep the meat intact while cooking and makes for round, compact slices.)",
        "COOK PORK SHOULDER AND MAKE STOCK Heat oil in a large heavy pot (at least 8 quarts) over medium-high heat. Cook pork shoulder, turning, until brown all over, 10-12 minutes.",
        "Add chicken, spareribs, scallions, carrots, garlic, ginger, and bonito flakes.",
        "Remove kombu from dashi; discard. Add as much kombu dashi as will fit in pot once liquid is boiling (reserve remaining dashi).",
        "Bring to a boil, reduce heat, and simmer, skimming the surface occasionally and adding remaining dashi as liquid reduces, until pork shoulder is tender and stock has reduced to about 2 quarts, 2 1/2-3 hours.",
        "CHILL PORK SHOULDER AND STOCK Remove pork shoulder from stock and let cool. Wrap tightly in plastic and chill until ready to use. (Chilling pork will make meat easier to slice.)",
        "Strain stock through a fine-mesh sieve into another large pot or a large bowl or container; discard solids (including ribs and chicken). Cover and chill.",
        "Day of COOK EGGS Bring a medium pot of water to a boil. Carefully add eggs one at a time and boil gently for 7 minutes. Egg yolks should be shiny yellow and almost jammy; egg white should be just set. Drain eggs and transfer to a bowl of ice water to stop cooking; let cool. Peel; set aside. (Eggs can be cooked 1 day ahead. Keep unpeeled eggs covered in cool water. Cover and chill.)",
        "SLICE PORK Remove string and thinly slice pork; cover and set aside.",
        "REHEAT STOCK AND COOK NOODLES When ready to serve, bring stock to a simmer; it should be very hot.",
        "At the same time, cook noodles in a large pot of boiling water according to package directions until al dente; drain (no need to salt the water, as ramen noodles contain more salt than pasta). Just before serving",
        "PUT IT ALL TOGETHER Divide noodles among 6 deep bowls. Top with sliced pork, placing it off to one side. Add tare to hot stock and ladle over pork to warm through (stock should come up just to the level of the noodles).",
        "Place a small pile of menma next to pork. Halve eggs and place next to menma. Place a small pile of sliced scallions next to egg. Tuck half a sheet of nori between side of bowl and noodles so it's just poking out.",
        "Serve ramen with chili oil, sesame oil, and shichimi togarashi.",
    ],
    shareWith: ["Bianca", "Ishan", "Kim"],
    comments: [
    ]
}
)
db.createCollection('chefs')
chefsCollection = db.getCollection("chefs")
chefsCollection.remove({})
chefsCollection.insert(
{
    chefId : "1",
    image : "images/chefPics/chef1.jpg",
    chefName : "Alison Roman",
    restraunt : "Mingbo",
    description : "Specializes in Pizza's"
}
)
chefsCollection.insert(
{
    chefId : "2",
    image : "images/chefPics/chef2.jpg",
    chefName : "Gordon Ramsey",
    restraunt : "Hell's Kitchen",
    description : "Specializes in criticism"
}
)
chefsColletion.insert(
{
    chefId : "3",
    image : "images/chefPics/chef3.jpg",
    chefName : "Bobbey Fillet",
    restraunt : "Le Epic Food",
    description : "This chef is known for the epicness of his food, the swesomeness of his restraunt."
}
)
chefsColletion.insert(
{
    chefId : "4",
    image : "images/chefPics/chef3.jpg",
    chefName : "NEW CHEF",
    restraunt : "someplace new",
    description : "This chef is known for the epicness of his food, the swesomeness of his restraunt."
}
)