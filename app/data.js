/* ============================================================
   The Eight Week Kitchen — program data
   Avoids: almonds, melon, concentrated whey. Soy is fine.
   Equipment: treadmill (max 3% incline, 6.0 mph), 20 lb dumbbells.
   ============================================================ */

/* ---------- Recipe bank ---------- */
const RECIPES = {
  'oats': {
    n: 'Overnight oats', t: '3 min', k: 380, p: 22, tag: 'breakfast',
    i: ['½ cup rolled oats', '½ cup milk (not almond)', '¼ cup Greek yogurt', '1 tbsp chia seeds', 'pinch salt', 'Morning: berries or banana + 1 tbsp pumpkin seeds'],
    s: ['Everything but the fruit into a jar, stir hard, lid, fridge.', 'Good for four days. Fruit goes on in the morning — added Sunday it turns the jar to mush.', 'The yogurt takes this from 12g protein to 22g. Do not skip it.']
  },
  'yogurt-bowl': {
    n: 'Greek yogurt bowl', t: '2 min', k: 330, p: 25, tag: 'breakfast',
    i: ['1 cup plain Greek yogurt', 'Handful berries', '1 tbsp pumpkin seeds', '1 tsp honey', 'Cinnamon'],
    s: ['Yogurt in the bowl, everything on top.', 'Buy plain, not "high protein" — the high-protein versions are the ones that add whey back in.']
  },
  'scramble': {
    n: 'Veggie scramble', t: '6 min', k: 380, p: 24, tag: 'breakfast',
    i: ['2 eggs, beaten with a pinch of salt', 'Handful roasted vegetables from Sunday', '1 tsp olive oil or butter', '1 slice toast, or ½ avocado'],
    s: ['Warm the vegetables in the pan first, then pour the eggs over.', 'Low heat. Pull the eggs in from the edges every few seconds.', 'Off the heat while they still look slightly underdone — they keep cooking in the pan.']
  },
  'shakshuka': {
    n: 'Shakshuka', t: '15 min', k: 400, p: 26, tag: 'breakfast',
    i: ['2 eggs', '1 cup crushed tomatoes', '½ bell pepper, ½ onion, 2 cloves garlic', '1 tsp cumin, 1 tsp smoked paprika, pinch chili flakes', '2 tbsp feta', 'Toast for dipping'],
    s: ['Soften the onion and pepper in oil, 5 minutes. Garlic and spices, 30 seconds.', 'Tomatoes in, simmer 5 minutes until it thickens and stops looking watery.', 'Make two wells with a spoon, crack an egg into each, lid on, 5–6 minutes.', 'Whites set, yolks still loose. Feta over the top.', 'Doubles as dinner. Makes 2 servings — eat one, fridge the other.']
  },
  'greek-bowl': {
    n: 'Greek chicken bowl', t: '5 min', k: 520, p: 42, tag: 'lunch',
    i: ['¾ cup cooked rice', '5 oz sliced Greek chicken', 'Handful roasted vegetables', '½ cucumber diced, chopped tomato', '2 tbsp feta', '3 tbsp garlic-lemon yogurt sauce'],
    s: ['Rice and chicken in the bowl, microwave 90 seconds with a splash of water and a plate on top.', 'Cold things — cucumber, tomato, feta — on top of the warm. The contrast is the point.', 'Yogurt sauce at the last second, never before.']
  },
  'texmex-bowl': {
    n: 'Tex-Mex chicken bowl', t: '5 min', k: 540, p: 40, tag: 'lunch',
    i: ['¾ cup rice, squeeze of lime, chopped cilantro', '5 oz sliced Tex-Mex chicken', '½ cup black beans, rinsed', '3 tbsp salsa', '¼ avocado', 'Shredded cabbage'],
    s: ['Warm rice, chicken and beans together, 2 minutes.', 'Fork the lime and cilantro through the hot rice — it only takes the flavor while warm.', 'Salsa, avocado, cabbage on top.']
  },
  'harissa-bowl': {
    n: 'Harissa chicken bowl', t: '5 min', k: 530, p: 42, tag: 'lunch',
    i: ['¾ cup rice or couscous', '5 oz harissa chicken', 'Roasted vegetables', '½ cup chickpeas', '3 tbsp garlic-lemon yogurt', 'Chopped parsley, lemon'],
    s: ['Same build as the Greek bowl, entirely different meal.', 'The yogurt is not optional here — harissa is hot and the yogurt is what makes it comfortable.', 'Squeeze of lemon at the end wakes the whole bowl up.']
  },
  'jerk-bowl': {
    n: 'Jerk chicken bowl', t: '5 min', k: 540, p: 42, tag: 'lunch',
    i: ['¾ cup rice', '5 oz jerk chicken', '½ cup black beans', 'Shredded cabbage, scallion', 'Lime, hot sauce', '¼ avocado'],
    s: ['Warm the rice, chicken and beans. Everything else cold on top.', 'Jerk seasoning is heavy on allspice and thyme — the lime cuts it.']
  },
  'pork-bowl': {
    n: 'Pork &amp; apple rice bowl', t: '5 min', k: 510, p: 40, tag: 'lunch',
    i: ['¾ cup rice', '5 oz sliced roast pork tenderloin', 'Roasted vegetables', '½ apple, sliced thin', 'Shredded cabbage', '2 tbsp ginger-scallion soy sauce'],
    s: ['Warm rice and pork, 90 seconds.', 'Raw apple and cabbage on top — the crunch against soft pork is the whole idea.', 'Sauce last.']
  },
  'med-salad': {
    n: 'Chopped Mediterranean salad', t: '8 min', k: 480, p: 38, tag: 'lunch',
    i: ['3 handfuls romaine, chopped small', '5 oz chicken, diced', '½ cup chickpeas', 'Cucumber, tomato, red onion', '2 tbsp feta, 1 hard-boiled egg', 'Dressing: 1 tbsp olive oil, juice ½ lemon, ½ tsp Dijon, salt'],
    s: ['Chop everything to roughly chickpea size. A salad you can eat with a spoon beats whole leaves every time.', 'Shake the dressing in a jar, pour, toss hard. Egg quartered on top.', 'Variation: swap the dressing for 1 tsp white miso whisked with olive oil, rice vinegar and grated ginger.']
  },
  'fried-rice': {
    n: 'Ginger fried rice, egg &amp; edamame', t: '10 min', k: 500, p: 30, tag: 'lunch',
    i: ['1 cup cold cooked rice (day-old is better)', '2 eggs, beaten', '½ cup shelled edamame', 'Roasted vegetables, chopped', '1 tsp grated ginger, 1 clove garlic', '2 tbsp soy sauce, 1 scallion, 1 tsp sesame oil'],
    s: ['Hot pan, oil. Scramble the eggs 30 seconds until barely set, tip onto a plate.', 'Ginger and garlic 20 seconds, then the cold rice. Press it flat and leave it alone for a full minute to crisp.', 'Edamame, vegetables and soy sauce in, toss, return the egg, kill the heat.', 'Scallion and sesame oil off the heat.']
  },
  'tuna-chickpea': {
    n: 'Tuna &amp; chickpea salad', t: '5 min', k: 420, p: 35, tag: 'lunch',
    i: ['1 can tuna in water or olive oil, drained', '½ can chickpeas, rinsed', 'Chopped tomato, red onion, cilantro', '1 tbsp olive oil, lemon, salt, pepper', 'Greens, or one slice of toast'],
    s: ['Flake the tuna, keeping some chunks. Everything else in, toss gently so the chickpeas stay whole.', 'Let it sit five minutes — the onion softens and the chickpeas take on the lemon.']
  },
  'sheetpan-chicken': {
    n: 'Sheet-pan chicken &amp; vegetables', t: '25 min', k: 490, p: 42, tag: 'dinner',
    i: ['Chicken thighs from the prep tray', 'Roasted vegetables from the prep tray', 'Lemon or lime', 'Whatever sauce you made Sunday'],
    s: ['This is Sunday dinner, eaten straight off the prep pan while everything else cools.', 'The one meal of the week you do not have to think about.']
  },
  'shrimp-stirfry': {
    n: 'Ginger shrimp &amp; edamame stir-fry', t: '12 min', k: 500, p: 42, tag: 'dinner',
    i: ['6 oz frozen shrimp, thawed and patted VERY dry', '½ cup shelled edamame', '2 cups vegetables — pepper, broccoli, cabbage', '1 tbsp avocado oil', '3 tbsp ginger-scallion soy sauce', '¾ cup cooked rice'],
    s: ['Dry shrimp is non-negotiable — wet shrimp steams grey instead of searing.', 'Screaming hot pan, oil, shrimp in a single layer. 90 seconds a side, then out onto a plate.', 'Vegetables and edamame into the same pan, 3–4 minutes, still with bite.', 'Shrimp back in, sauce over, toss 30 seconds. Over rice.']
  },
  'miso-salmon': {
    n: 'Miso-glazed salmon &amp; broccoli', t: '15 min', k: 510, p: 40, tag: 'dinner',
    i: ['6 oz salmon fillet', '1 broccoli crown', '1 tbsp white miso', '1 tbsp soy sauce, 2 tsp honey', '1 tsp grated ginger, olive oil'],
    s: ['Oven 425°F. Broccoli on the pan with oil and salt, 8 minutes alone.', 'Whisk miso, soy sauce, honey and ginger into a thick glaze while it roasts.', 'Push the broccoli aside, salmon on the same pan, spoon half the glaze over. Back in 9–11 minutes.', 'Brush on the rest for the last 2 minutes. For caramelized edges flip to broil — but stand there and watch, honey goes from glazed to burnt in about forty seconds.', 'Done when a fork twists the thickest part apart easily.']
  },
  'salmon-rice': {
    n: 'Salmon rice bowl', t: '12 min', k: 520, p: 40, tag: 'dinner',
    i: ['6 oz salmon, cubed', '¾ cup rice', '½ cucumber, thin sliced', 'Shredded cabbage, scallion', '3 tbsp ginger-scallion soy sauce', 'Sesame seeds, sriracha'],
    s: ['Cube the salmon, toss in a little soy sauce and oil.', 'Hot pan, 2 minutes a side. It should still be slightly rare in the middle — it keeps cooking.', 'Over warm rice with everything cold piled around it.', 'The temperature contrast is what makes this better than it sounds.']
  },
  'street-tacos': {
    n: 'Street tacos', t: '8 min', k: 520, p: 38, tag: 'dinner',
    i: ['5 oz chicken or pork from Sunday, chopped', '3 corn tortillas', 'Shredded cabbage, lime, cilantro, red onion', 'Salsa, ¼ avocado'],
    s: ['Char the tortillas over a gas flame or in a dry pan, 20 seconds a side. This is the difference between a taco and a wrap.', 'Warm the meat in the same pan.', 'Build: meat, cabbage, salsa, avocado, cilantro, hard squeeze of lime.', 'Three small corn tortillas run about 150 calories total, against 300 for one big flour wrap.']
  },
  'pasta-meatballs': {
    n: 'Garlic-tomato pasta, turkey meatballs', t: '15 min', k: 580, p: 38, tag: 'dinner',
    i: ['2 oz dry pasta (chickpea pasta adds ~8g protein)', '5 oz ground turkey, rolled into 8 small balls with salt, pepper, oregano', '3 cloves garlic, sliced thin', '1 cup crushed tomatoes', '2 handfuls baby spinach', 'Olive oil, grated parmesan'],
    s: ['Pasta water on first. Everything else times off it.', 'Meatballs in an oiled pan, brown all over, 6 minutes. Out.', 'Garlic in the same pan on low until it smells sweet — 60 seconds, do not brown it. Tomatoes in, simmer.', 'Meatballs back, spinach on top, lid 2 minutes to wilt.', 'Drained pasta INTO the sauce, not sauce onto pasta. Splash of pasta water, parmesan, toss.']
  },
  'turkey-chili': {
    n: 'Turkey chili', t: 'Sunday batch', k: 450, p: 35, tag: 'batch',
    i: ['1 lb 93% ground turkey', '1 onion diced, 3 cloves garlic', '1 tbsp cumin, 1 tbsp chili powder, 2 tsp smoked paprika', '28 oz crushed tomatoes', '1 can black beans + 1 can kidney beans, rinsed', '1½ cups chicken broth', 'Serve with Greek yogurt, scallion, lime'],
    s: ['Brown the turkey hard — leave it undisturbed until it sticks, then scrape. Colour is flavour.', 'Onion and garlic 4 minutes. Spices 30 seconds until fragrant, which wakes them up.', 'Tomatoes, beans, broth. Simmer uncovered 25 minutes while you finish prep.', 'Greek yogurt instead of sour cream: twice the protein, a third of the fat, nobody notices.', 'Makes 5. Freeze two the day you make it.']
  },
  'white-chili': {
    n: 'White chicken chili', t: 'Sunday batch', k: 440, p: 38, tag: 'batch',
    i: ['1 lb chicken thighs, diced', '1 onion, 3 cloves garlic, 1 diced jalapeño', '1 tbsp cumin, 2 tsp oregano, 1 tsp coriander', '2 cans cannellini beans, rinsed', '1 can diced green chiles', '3 cups chicken broth', 'Lime, cilantro, Greek yogurt'],
    s: ['Brown the chicken, then onion, jalapeño and garlic, 5 minutes.', 'Spices 30 seconds. Beans, chiles and broth in.', 'Mash about a cup of the beans against the side of the pot — that is what makes it creamy without cream.', 'Simmer 25 minutes. Lime and cilantro at the end, never during.', 'Makes 5. Freeze two.']
  },
  'lentil-soup': {
    n: 'Lentil &amp; sausage soup', t: 'Sunday batch', k: 430, p: 30, tag: 'batch',
    i: ['2 chicken sausages, sliced', '1 cup dry brown lentils, rinsed', '1 onion, 2 carrots, 2 celery, 3 cloves garlic', '1 tsp smoked paprika, 1 tsp thyme, 1 bay leaf', '1 can diced tomatoes', '5 cups broth', '2 handfuls spinach'],
    s: ['Brown the sausage, remove. Vegetables in the same pot, 6 minutes.', 'Garlic and spices 30 seconds. Lentils, tomatoes, broth, bay leaf.', 'Simmer 30 minutes until the lentils are soft but not collapsing.', 'Sausage back in, spinach at the end. Salt properly — lentils need more than you think.', 'Makes 5. Gets better on day two.']
  },
  'korean-beef': {
    n: 'Soy-ginger beef bowl', t: '12 min', k: 540, p: 40, tag: 'dinner',
    i: ['5 oz 93% ground beef', '¾ cup rice', '2 cloves garlic, 1 tsp grated ginger', '2 tbsp soy sauce, 1 tsp honey, 1 tsp sesame oil', 'Shredded cabbage, cucumber, scallion', 'Fried egg on top (optional, +6g protein)'],
    s: ['Brown the beef hard in a dry pan — it has enough fat. Break it up small.', 'Garlic and ginger in for 30 seconds once the beef is browned, not before, or they burn.', 'Soy sauce and honey in, let it bubble down 60 seconds until it coats.', 'Over rice with raw cabbage, cucumber and scallion. Sesame oil off the heat.']
  },
  'chicken-curry': {
    n: 'Chicken curry in a hurry', t: '18 min', k: 550, p: 40, tag: 'dinner',
    i: ['5 oz chicken from Sunday, chopped', '½ onion, 2 cloves garlic, 1 tsp grated ginger', '1 tbsp curry powder, ½ tsp turmeric', '½ can coconut milk (light)', '1 cup crushed tomatoes', '2 handfuls spinach', '¾ cup rice'],
    s: ['Soften the onion 5 minutes. Garlic, ginger and spices 45 seconds — the spices must hit hot oil or the curry tastes dusty.', 'Tomatoes and coconut milk in, simmer 8 minutes until it thickens.', 'Chicken in just to warm through, spinach on top, lid 2 minutes.', 'Makes 2. The second portion is better tomorrow.']
  },
  'pork-sheetpan': {
    n: 'Pork tenderloin sheet pan', t: '30 min', k: 480, p: 44, tag: 'dinner',
    i: ['1 pork tenderloin (~1 lb)', '2 apples, thick wedges', '1 red onion, wedges', '1 tbsp Dijon, 1 tbsp olive oil, 1 tsp thyme', 'Salt, pepper'],
    s: ['Oven 425°F. Rub the pork with Dijon, oil, thyme, plenty of salt.', 'Apples and onion around it on the pan.', 'Roast 22–25 minutes to 145°F internal. Do not go past it — tenderloin turns to chalk at 160°F.', 'Rest 8 minutes before slicing. This is the step people skip and then wonder why it is dry.', 'Eat one portion, slice the rest for the week.']
  },
  'flex': {
    n: 'Flex night', t: '—', k: 600, p: 0, tag: 'dinner',
    i: ['Whatever you want'],
    s: ['Deliberately unplanned. A plan with no exit valve is a plan you abandon in week two.', 'Takeout, a restaurant, eggs on toast — your call, no accounting.', 'One genuinely free meal a week costs almost nothing across seven days.']
  }
};

/* ---------- Snacks ---------- */
const SNACKS = {
  'apple-sb':  { n: 'Apple + sunflower seed butter', k: 200 },
  'cottage':   { n: 'Cottage cheese + berries', k: 180 },
  'edamame':   { n: 'Steamed edamame, flaky salt', k: 120 },
  'yogurt-h':  { n: 'Greek yogurt + honey', k: 170 },
  'hummus':    { n: 'Hummus + cucumber and pepper', k: 180 },
  'popcorn':   { n: 'Popcorn, or 1 oz dark chocolate', k: 160 },
  'free':      { n: 'Your call', k: 0 }
};

/* ---------- Four two-week menu blocks ---------- */
const BLOCKS = [
  {
    id: 1, weeks: [1, 2], name: 'Foundation',
    idea: 'Learn the system. Same menu twice so the second week takes half the thinking.',
    prep: ['2½ lb chicken thighs — half Greek (lemon, garlic, oregano), half Tex-Mex (cumin, chili, paprika, lime)', 'Vegetable tray: 2 broccoli crowns, 2 bell peppers, 1 red onion', '2 cups rice', 'Turkey chili — 5 servings, freeze 2', '8 hard-boiled eggs', 'Garlic-lemon yogurt sauce + ginger-scallion soy sauce', '3 jars overnight oats'],
    days: [
      { d: 'Sun', b: 'yogurt-bowl', l: 'tuna-chickpea', dn: 'sheetpan-chicken', s: 'apple-sb' },
      { d: 'Mon', b: 'oats',        l: 'greek-bowl',    dn: 'shrimp-stirfry',   s: 'cottage'  },
      { d: 'Tue', b: 'scramble',    l: 'texmex-bowl',   dn: 'turkey-chili',     s: 'edamame'  },
      { d: 'Wed', b: 'oats',        l: 'turkey-chili',  dn: 'miso-salmon',      s: 'yogurt-h' },
      { d: 'Thu', b: 'scramble',    l: 'med-salad',     dn: 'street-tacos',     s: 'hummus'   },
      { d: 'Fri', b: 'oats',        l: 'fried-rice',    dn: 'pasta-meatballs',  s: 'popcorn'  },
      { d: 'Sat', b: 'yogurt-bowl', l: 'tuna-chickpea', dn: 'flex',             s: 'free'     }
    ],
    shop: [
      ['Produce &amp; frozen', [['Broccoli, 2 crowns',4],['Bell peppers ×3',4],['Onions ×3',2.5],['Cabbage, ½ head',2],['Romaine, 1 head',2.5],['Cucumbers ×2',2],['Roma tomatoes ×5',3.5],['Avocados ×2',3],['Lemons ×3, limes ×3',3],['Garlic, ginger',2],['Scallions, cilantro',3],['Baby spinach',3],['Apples ×4, bananas',5],['Frozen berries',3.5]]],
      ['Protein', [['Chicken thighs, 2½ lb',8],['Ground turkey 93%, 1½ lb',8],['Frozen shrimp, 1 lb',9],['Salmon fillet ×1',6],['Eggs, 18 ct',5],['Canned tuna ×1',2],['Frozen edamame, 1 lb',3]]],
      ['Dairy', [['Greek yogurt, plain, 40 oz',7],['Cottage cheese, 16 oz',4],['Feta, 6 oz',4],['Parmesan, small',3],['Milk, ½ gal (not almond)',3]]],
      ['Pantry &amp; canned', [['Jasmine rice, 2 lb',4],['Rolled oats, 18 oz',4],['Pasta',2],['Corn tortillas',3],['Black ×2, kidney ×1, chickpeas ×1',5],['Crushed tomatoes, 28 oz',2],['Chicken broth',3],['Salsa',3],['Hummus',3]]],
      ['One-time pantry', [['Soy sauce',3],['White miso, tub',4],['Rice vinegar',3],['Toasted sesame oil',4.5],['Chia seeds',5],['Pumpkin &amp; sunflower seeds',4.5],['Sunflower seed butter',6],['Dark chocolate 85%',3]]]
    ]
  },
  {
    id: 2, weeks: [3, 4], name: 'Rotation',
    idea: 'Same skeleton, new seasonings. Pork tenderloin and harissa arrive; white chili replaces the turkey chili.',
    prep: ['2 lb chicken thighs — half harissa, half Greek', '1 pork tenderloin, roasted Sunday (see recipe)', 'Vegetable tray: broccoli, peppers, red onion, carrots', '2 cups rice or couscous', 'White chicken chili — 5 servings, freeze 2', '8 hard-boiled eggs', 'Garlic-lemon yogurt + ginger-scallion soy', '3 jars overnight oats'],
    days: [
      { d: 'Sun', b: 'yogurt-bowl', l: 'tuna-chickpea', dn: 'pork-sheetpan',   s: 'apple-sb' },
      { d: 'Mon', b: 'oats',        l: 'harissa-bowl',  dn: 'shrimp-stirfry',  s: 'cottage'  },
      { d: 'Tue', b: 'scramble',    l: 'pork-bowl',     dn: 'white-chili',     s: 'edamame'  },
      { d: 'Wed', b: 'oats',        l: 'white-chili',   dn: 'miso-salmon',     s: 'yogurt-h' },
      { d: 'Thu', b: 'scramble',    l: 'med-salad',     dn: 'street-tacos',    s: 'hummus'   },
      { d: 'Fri', b: 'oats',        l: 'fried-rice',    dn: 'pasta-meatballs', s: 'popcorn'  },
      { d: 'Sat', b: 'yogurt-bowl', l: 'tuna-chickpea', dn: 'flex',            s: 'free'     }
    ],
    shop: [
      ['Produce &amp; frozen', [['Broccoli, 2 crowns',4],['Bell peppers ×3',4],['Onions ×3',2.5],['Carrots, 1 lb',2],['Cabbage, ½ head',2],['Romaine, 1 head',2.5],['Cucumbers ×2',2],['Roma tomatoes ×5',3.5],['Avocados ×2',3],['Lemons, limes',3],['Garlic, ginger, jalapeño',2.5],['Scallions, cilantro, parsley',3.5],['Baby spinach',3],['Apples ×6, bananas',6],['Frozen berries',3.5]]],
      ['Protein', [['Chicken thighs, 3 lb',10],['Pork tenderloin, ~1 lb',7],['Ground turkey 93%, ½ lb',3],['Frozen shrimp (from bag)',0],['Salmon fillet ×1',6],['Eggs, 18 ct',5],['Canned tuna ×1',2],['Frozen edamame',3]]],
      ['Dairy', [['Greek yogurt, 40 oz',7],['Cottage cheese',4],['Feta',4],['Parmesan',3],['Milk, ½ gal',3]]],
      ['Pantry &amp; canned', [['Rice or couscous',4],['Rolled oats',4],['Pasta',2],['Corn tortillas',3],['Cannellini ×2, chickpeas ×1',4],['Diced green chiles',1.5],['Crushed tomatoes',2],['Chicken broth ×2',5],['Salsa',3],['Hummus',3]]],
      ['New pantry', [['Harissa paste',4.5],['Ground coriander',2]]]
    ]
  },
  {
    id: 3, weeks: [5, 6], name: 'Build',
    idea: 'Two new techniques — shakshuka for breakfast and a proper lentil soup. Jerk seasoning on the chicken.',
    prep: ['2½ lb chicken thighs — half jerk, half Greek', 'Vegetable tray: broccoli, peppers, red onion, zucchini', '2 cups rice', 'Lentil &amp; sausage soup — 5 servings, freeze 2', '8 hard-boiled eggs', 'Shakshuka base (double batch, keeps 5 days)', 'Both sauces', '3 jars overnight oats'],
    days: [
      { d: 'Sun', b: 'shakshuka',   l: 'tuna-chickpea', dn: 'sheetpan-chicken', s: 'apple-sb' },
      { d: 'Mon', b: 'oats',        l: 'greek-bowl',    dn: 'korean-beef',      s: 'cottage'  },
      { d: 'Tue', b: 'scramble',    l: 'jerk-bowl',     dn: 'lentil-soup',      s: 'edamame'  },
      { d: 'Wed', b: 'oats',        l: 'lentil-soup',   dn: 'miso-salmon',      s: 'yogurt-h' },
      { d: 'Thu', b: 'scramble',    l: 'med-salad',     dn: 'street-tacos',     s: 'hummus'   },
      { d: 'Fri', b: 'oats',        l: 'fried-rice',    dn: 'pasta-meatballs',  s: 'popcorn'  },
      { d: 'Sat', b: 'shakshuka',   l: 'tuna-chickpea', dn: 'flex',             s: 'free'     }
    ],
    shop: [
      ['Produce &amp; frozen', [['Broccoli, 2 crowns',4],['Bell peppers ×4',5],['Onions ×4',3],['Carrots ×3, celery',3],['Zucchini',1.5],['Cabbage, ½ head',2],['Romaine',2.5],['Cucumbers ×2',2],['Roma tomatoes ×5',3.5],['Avocados ×2',3],['Lemons, limes',3],['Garlic, ginger',2],['Scallions, cilantro',3],['Baby spinach, large bag',4],['Apples ×4, bananas',5],['Frozen berries',3.5]]],
      ['Protein', [['Chicken thighs, 2½ lb',8],['Ground beef 93%, ½ lb',4],['Chicken sausage ×2',4],['Ground turkey, ½ lb',3],['Salmon fillet ×1',6],['Eggs, 18 ct',5],['Canned tuna ×1',2],['Frozen edamame',3]]],
      ['Dairy', [['Greek yogurt, 40 oz',7],['Cottage cheese',4],['Feta',4],['Parmesan',3],['Milk, ½ gal',3]]],
      ['Pantry &amp; canned', [['Rice',4],['Rolled oats',4],['Pasta',2],['Corn tortillas',3],['Brown lentils, 1 lb',3],['Chickpeas ×1, black beans ×1',2.5],['Crushed tomatoes ×2',4],['Diced tomatoes',2],['Broth ×2',5],['Salsa',3],['Hummus',3]]],
      ['New pantry', [['Jerk seasoning',4],['Dried thyme, bay leaves',3]]]
    ]
  },
  {
    id: 4, weeks: [7, 8], name: 'Lock in',
    idea: 'Best of the first six weeks plus a curry and a salmon rice bowl. By now you should be running this from memory.',
    prep: ['2½ lb chicken thighs — half Greek, half Tex-Mex', 'Vegetable tray, your choice of vegetables', '2 cups rice', 'Turkey chili — 5 servings, freeze 2', '8 hard-boiled eggs', 'Shakshuka base', 'Both sauces', '3 jars overnight oats'],
    days: [
      { d: 'Sun', b: 'shakshuka',   l: 'tuna-chickpea', dn: 'sheetpan-chicken', s: 'apple-sb' },
      { d: 'Mon', b: 'oats',        l: 'greek-bowl',    dn: 'chicken-curry',    s: 'cottage'  },
      { d: 'Tue', b: 'scramble',    l: 'texmex-bowl',   dn: 'turkey-chili',     s: 'edamame'  },
      { d: 'Wed', b: 'oats',        l: 'turkey-chili',  dn: 'salmon-rice',      s: 'yogurt-h' },
      { d: 'Thu', b: 'scramble',    l: 'med-salad',     dn: 'korean-beef',      s: 'hummus'   },
      { d: 'Fri', b: 'oats',        l: 'fried-rice',    dn: 'pasta-meatballs',  s: 'popcorn'  },
      { d: 'Sat', b: 'yogurt-bowl', l: 'tuna-chickpea', dn: 'flex',             s: 'free'     }
    ],
    shop: [
      ['Produce &amp; frozen', [['Broccoli, 2 crowns',4],['Bell peppers ×3',4],['Onions ×3',2.5],['Cabbage, ½ head',2],['Romaine',2.5],['Cucumbers ×3',3],['Roma tomatoes ×5',3.5],['Avocados ×2',3],['Lemons, limes',3],['Garlic, ginger',2],['Scallions, cilantro',3],['Baby spinach, large bag',4],['Apples ×4, bananas',5],['Frozen berries',3.5]]],
      ['Protein', [['Chicken thighs, 3 lb',10],['Ground turkey 93%, 1½ lb',8],['Ground beef 93%, ½ lb',4],['Salmon fillet ×1',6],['Eggs, 18 ct',5],['Canned tuna ×1',2],['Frozen edamame',3]]],
      ['Dairy', [['Greek yogurt, 40 oz',7],['Cottage cheese',4],['Feta',4],['Parmesan',3],['Milk, ½ gal',3]]],
      ['Pantry &amp; canned', [['Rice',4],['Rolled oats',4],['Pasta',2],['Corn tortillas',3],['Black ×2, kidney ×1, chickpeas ×1',5],['Crushed tomatoes ×2',4],['Light coconut milk',2],['Broth',3],['Salsa',3],['Hummus',3]]],
      ['New pantry', [['Curry powder',3],['Turmeric',2.5],['Sesame seeds',3]]]
    ]
  }
];

/* ---------- Strength sessions ---------- */
const LIFTS = {
  A: {
    name: 'Strength A',
    ex: [
      { n: 'Goblet squat',        c: 'One dumbbell held at your chest. Sit down between your knees, chest tall. Heels stay down.' },
      { n: 'Dumbbell floor press', c: 'On your back on the floor, knees bent. Elbows stop when they touch the ground — that is the depth.' },
      { n: 'Romanian deadlift',   c: 'Dumbbells in front of your thighs. Push your hips BACK, not down. Stop when you feel the hamstrings, not when you reach the floor.' },
      { n: 'Shoulder press',      c: 'Seated or standing. Ribs down, do not arch your lower back to get the weight up.' },
      { n: 'Plank',               c: 'Squeeze your glutes. Hips level with shoulders. Stop the set when the hips start to sag, not when the clock says so.' }
    ]
  },
  B: {
    name: 'Strength B',
    ex: [
      { n: 'Bent-over row',       c: 'Hinge to about 45°, back flat. Pull the dumbbells to your hips, not your chest. Pause for a beat at the top.' },
      { n: 'Split squat',         c: 'One foot forward, one back, long stance. Drop straight down. Do all reps one side, then the other.' },
      { n: 'Glute bridge',        c: 'Dumbbell across your hips. Drive through your heels, squeeze hard at the top for a full second.' },
      { n: 'Curl + overhead extension', c: 'Curl up, then press overhead and lower behind your head. One continuous movement, no rest between.' },
      { n: 'Dead bug',            c: 'On your back, arms up, knees at 90°. Lower opposite arm and leg slowly. Lower back stays glued to the floor.' }
    ]
  }
};

/* ---------- Eight weeks of training ----------
   ty: rest | walk | intervals | strength | prep
   Built for: treadmill max 3% incline / 6.0 mph, 20 lb dumbbells,
   starting from no current training.                                   */
const TRAINING = [
  { w: 1, focus: 'Show up. That is the entire goal this week.',
    load: '2 sets of 10. Use 10–15 lb, or no weight at all if the movement feels awkward. You should finish every set feeling like you had 4 more reps in you.',
    days: [
      { ty:'prep',     t:'Meal prep',        d:'Sunday session, about 1h50m' },
      { ty:'strength', t:'Strength A',       d:'2 sets × 10 reps · rest 90s', k:'A' },
      { ty:'walk',     t:'Walk 20 min',      d:'3.0 mph, 0% incline. Conversational — you should be able to talk in full sentences.' },
      { ty:'rest',     t:'Rest',             d:'Or a gentle 10 minute walk if you feel like moving.' },
      { ty:'strength', t:'Strength B',       d:'2 sets × 10 reps · rest 90s', k:'B' },
      { ty:'walk',     t:'Walk 20 min',      d:'3.0 mph, 1% incline.' },
      { ty:'walk',     t:'Walk 25 min',      d:'Outside if the weather allows. Pace does not matter.' }
    ] },
  { w: 2, focus: 'Same sessions, slightly longer. Do not add weight yet.',
    load: '2 sets of 12. Same dumbbells as week 1. Adding reps before weight is what protects your joints in the first month.',
    days: [
      { ty:'prep',     t:'Meal prep',   d:'Sunday session' },
      { ty:'strength', t:'Strength A',  d:'2 sets × 12 reps · rest 90s', k:'A' },
      { ty:'walk',     t:'Walk 25 min', d:'3.0 mph, 1% incline.' },
      { ty:'rest',     t:'Rest',        d:'Stretch your hips and hamstrings for five minutes if you can be bothered.' },
      { ty:'strength', t:'Strength B',  d:'2 sets × 12 reps · rest 90s', k:'B' },
      { ty:'walk',     t:'Walk 25 min', d:'3.2 mph, 1% incline.' },
      { ty:'walk',     t:'Walk 30 min', d:'Easy. This is the longest session of the week and it should still feel easy.' }
    ] },
  { w: 3, focus: 'Third set arrives. Walks get an incline.',
    load: '3 sets of 10. Go to 20 lb on squats, rows and RDLs. Keep presses lighter if 20 feels heavy — shoulders lag behind legs and that is normal.',
    days: [
      { ty:'prep',     t:'Meal prep',   d:'New menu block starts today' },
      { ty:'strength', t:'Strength A',  d:'3 sets × 10 reps · rest 90s', k:'A' },
      { ty:'walk',     t:'Walk 30 min', d:'3.2 mph, 2% incline. The incline is doing the work, not the speed.' },
      { ty:'rest',     t:'Rest',        d:'' },
      { ty:'strength', t:'Strength B',  d:'3 sets × 10 reps · rest 90s', k:'B' },
      { ty:'walk',     t:'Walk 30 min', d:'3.4 mph, 2% incline.' },
      { ty:'walk',     t:'Walk 30 min', d:'Easy, outside if you can.' }
    ] },
  { w: 4, focus: 'A third strength day. This is the biggest jump in the program — if it feels like too much, drop Friday and repeat week 3.',
    load: '3 sets of 12. 20 lb wherever you can hold form.',
    days: [
      { ty:'prep',     t:'Meal prep',   d:'Sunday session' },
      { ty:'strength', t:'Strength A',  d:'3 sets × 12 reps · rest 90s', k:'A' },
      { ty:'walk',     t:'Walk 30 min', d:'3.4 mph, 3% incline.' },
      { ty:'rest',     t:'Rest',        d:'' },
      { ty:'strength', t:'Strength B',  d:'3 sets × 12 reps · rest 90s', k:'B' },
      { ty:'strength', t:'Strength A',  d:'3 sets × 10 reps · lighter, move quickly', k:'A' },
      { ty:'walk',     t:'Walk 35 min', d:'3.5 mph, 1% incline. Halfway. Take a photo and weigh yourself.' }
    ] },
  { w: 5, focus: 'Intervals arrive. This is where the treadmill finally earns its keep.',
    load: '3 sets of 12, and start counting three seconds on the way DOWN of every rep. With 20 lb dumbbells, tempo is how you keep progressing.',
    days: [
      { ty:'prep',      t:'Meal prep',    d:'New menu block starts today' },
      { ty:'strength',  t:'Strength A',   d:'3 × 12, 3-second lowering · rest 90s', k:'A' },
      { ty:'intervals', t:'Intervals ×5', d:'5 min warm-up at 3.0. Then 5 rounds of: 3 min at 3.5 mph / 1 min at 5.0 mph. 5 min cool-down. 30 min total.' },
      { ty:'rest',      t:'Rest',         d:'' },
      { ty:'strength',  t:'Strength B',   d:'3 × 12, 3-second lowering · rest 90s', k:'B' },
      { ty:'walk',      t:'Walk 30 min',  d:'3.5 mph, 3% incline. Steady, no intervals.' },
      { ty:'walk',      t:'Walk 35 min',  d:'Easy.' }
    ] },
  { w: 6, focus: 'More intervals, and the strength sessions start to bite.',
    load: '3 sets of 12 with the 3-second lowering. Last set of each exercise: go until two reps before failure, however many that is.',
    days: [
      { ty:'prep',      t:'Meal prep',    d:'Sunday session' },
      { ty:'strength',  t:'Strength A',   d:'3 × 12 tempo, last set to near-failure', k:'A' },
      { ty:'intervals', t:'Intervals ×6', d:'5 min warm-up. 6 rounds of: 3 min at 3.5 / 1 min at 5.0. Cool-down. 34 min total.' },
      { ty:'rest',      t:'Rest',         d:'' },
      { ty:'strength',  t:'Strength B',   d:'3 × 12 tempo, last set to near-failure', k:'B' },
      { ty:'strength',  t:'Strength A',   d:'3 × 10, lighter and quicker', k:'A' },
      { ty:'walk',      t:'Walk 40 min',  d:'3.5 mph, 2% incline. Longest walk so far.' }
    ] },
  { w: 7, focus: 'Peak volume. If something hurts — actual pain, not muscle soreness — take the day off. That is not weakness, it is arithmetic.',
    load: '3 sets of 12, tempo, plus one drop set at the end of squats and rows: finish your last set, drop to a lighter weight, do 10 more immediately.',
    days: [
      { ty:'prep',      t:'Meal prep',    d:'Final menu block starts today' },
      { ty:'strength',  t:'Strength A',   d:'3 × 12 tempo + drop set on squats', k:'A' },
      { ty:'intervals', t:'Intervals ×7', d:'5 min warm-up. 7 rounds of: 3 min at 3.5 / 1 min at 5.5. Cool-down. 38 min total.' },
      { ty:'rest',      t:'Rest',         d:'' },
      { ty:'strength',  t:'Strength B',   d:'3 × 12 tempo + drop set on rows', k:'B' },
      { ty:'walk',      t:'Walk 35 min',  d:'3.5 mph, 3% incline.' },
      { ty:'walk',      t:'Walk 40 min',  d:'Easy, outside.' }
    ] },
  { w: 8, focus: 'Finish it. Then take four days completely off before you start anything else.',
    load: '3 sets of 12 tempo. On the last session of the week, do one all-out set of each exercise and write the number down — that is your new starting point.',
    days: [
      { ty:'prep',      t:'Meal prep',    d:'Last prep session of the program' },
      { ty:'strength',  t:'Strength A',   d:'3 × 12 tempo', k:'A' },
      { ty:'intervals', t:'Intervals ×7', d:'5 min warm-up. 7 rounds of: 3 min at 3.5 / 1.5 min at 5.5. Cool-down. 41 min total.' },
      { ty:'rest',      t:'Rest',         d:'' },
      { ty:'strength',  t:'Strength B',   d:'3 × 12 tempo', k:'B' },
      { ty:'strength',  t:'Test day',     d:'One all-out set of each Strength A exercise. Write down the reps.', k:'A' },
      { ty:'walk',      t:'Walk 45 min',  d:'Last session. Weigh in, take a photo, compare it to week 4.' }
    ] }
];

/* ---------- Default daily schedule (wake 6:30, bed 22:30) ---------- */
const SCHEDULE = {
  breakfast: '07:00',
  snack1:    '10:00',
  lunch:     '12:30',
  snack2:    '15:30',
  workout:   '17:15',
  dinner:    '18:30',
  close:     '20:30',
  prep:      '10:00',
  shop:      '09:30'
};
