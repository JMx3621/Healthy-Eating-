/* ============================================================
   The Eight Week Kitchen — program data (gut-settling revision)
   Avoids: almonds, melon, concentrated whey. Soy sauce is fine.
   Structure: 3 weeks low-FODMAP baseline, then 5 structured
   reintroduction challenges — one trigger group at a time.
   Equipment: treadmill (max 3% incline, 6.0 mph), 20 lb dumbbells.
   ============================================================ */

/* ---------- The two techniques the whole plan rests on ---------- */
const TECHNIQUES = [
  { n: 'Garlic-infused oil',
    d: 'The compounds in garlic that cause gas dissolve in water, not oil. So oil carries the flavour and leaves the trouble behind. Warm ½ cup olive oil with 4 smashed garlic cloves over LOW heat for 10 minutes — it should barely bubble. Cool, then fish the cloves out and throw them away. Keeps two weeks in the fridge. Use it anywhere the old recipes said garlic.',
    w: 'Never leave the cloves sitting in the oil at room temperature — that is a genuine botulism risk. Strain them out and refrigerate.' },
  { n: 'Scallion greens only',
    d: 'The white bulb of a scallion behaves like an onion. The green tops do not. Slice the greens, bin the whites, and you get most of the onion flavour with none of the load. Same trick works with leeks — greens yes, white no.',
    w: '' }
];

/* ---------- Recipe bank — all low-FODMAP by default ---------- */
const RECIPES = {
  'oats': {
    n: 'Overnight oats', t: '3 min', k: 370, p: 21, tag: 'breakfast',
    i: ['½ cup rolled oats — not more, oats climb at 1 cup', '½ cup lactose-free milk', '¼ cup lactose-free plain yogurt', '1 tbsp chia seeds, pinch salt', 'Morning: strawberries or blueberries, 1 tbsp pumpkin seeds'],
    s: ['Everything but the fruit into a jar, stir hard, lid, fridge.', 'Good four days. Fruit in the morning — added Sunday it turns to mush.', 'Half a cup of oats is the ceiling. A full cup is a common quiet cause of morning bloating.']
  },
  'yogurt-bowl': {
    n: 'Yogurt bowl', t: '2 min', k: 320, p: 24, tag: 'breakfast',
    i: ['1 cup lactose-free plain yogurt', 'Strawberries or blueberries', '1 tbsp pumpkin seeds', '1 tsp maple syrup', 'Cinnamon'],
    s: ['Everything on top of the yogurt.', 'Maple syrup, not honey — honey is nearly pure fructose and one of the most reliable bloaters there is.']
  },
  'scramble': {
    n: 'Veggie scramble', t: '6 min', k: 380, p: 24, tag: 'breakfast',
    i: ['2 eggs, beaten with salt', 'Roasted zucchini, red pepper and carrot from Sunday', '1 tsp garlic oil', 'Handful spinach', '1 slice sourdough toast, or rice cakes'],
    s: ['Warm the vegetables in the garlic oil first, then pour the eggs over.', 'Low heat, pull the eggs in from the edges every few seconds.', 'Off the heat while they still look underdone — they keep cooking in the pan.', 'Proper slow-fermented sourdough is much gentler than sandwich bread, because the long ferment eats the fructans before you do.']
  },
  'shakshuka': {
    n: 'Shakshuka', t: '15 min', k: 400, p: 26, tag: 'breakfast',
    i: ['2 eggs', '1 cup canned crushed tomatoes', '½ red pepper, greens of 2 scallions', '1 tbsp garlic oil', '1 tsp cumin, 1 tsp smoked paprika', '2 tbsp feta'],
    s: ['Soften the pepper in the garlic oil, 5 minutes. Spices 30 seconds.', 'Tomatoes in, simmer 5 minutes until it thickens and stops looking watery.', 'Two wells with a spoon, an egg in each, lid on, 5–6 minutes.', 'Whites set, yolks loose. Feta and scallion greens over the top.', 'Makes 2. Eat one, fridge the other.']
  },
  'greek-bowl': {
    n: 'Greek chicken bowl', t: '5 min', k: 510, p: 42, tag: 'lunch',
    i: ['¾ cup cooked rice', '5 oz sliced Greek chicken', 'Roasted zucchini, pepper, carrot', '½ cucumber diced, chopped tomato', '2 tbsp feta', '3 tbsp lemon-yogurt sauce'],
    s: ['Rice and chicken in the bowl, microwave 90 seconds with a splash of water and a plate on top.', 'Cold things on top of the warm — the contrast is the point.', 'Sauce at the last second, never before.']
  },
  'texmex-bowl': {
    n: 'Cumin-lime chicken bowl', t: '5 min', k: 520, p: 41, tag: 'lunch',
    i: ['¾ cup rice, lime, chopped cilantro', '5 oz cumin-lime chicken', 'Fresh tomato-scallion salsa', 'Cucumber, shredded carrot', '2 tbsp grated cheddar', 'Lime'],
    s: ['Warm rice and chicken, 2 minutes.', 'Fork the lime and cilantro through the hot rice — it only takes the flavour while warm.', 'Salsa and raw vegetables on top.', 'Jarred salsa is almost always built on onion and garlic. The fresh version takes three minutes and is better anyway.']
  },
  'med-salad': {
    n: 'Chopped salad', t: '8 min', k: 470, p: 38, tag: 'lunch',
    i: ['3 handfuls romaine, chopped small', '5 oz chicken, diced', 'Cucumber, tomato, shredded carrot, red pepper', '2 tbsp feta, 1 hard-boiled egg', 'Dressing: 1 tbsp garlic oil, juice ½ lemon, ½ tsp Dijon, salt'],
    s: ['Chop everything small enough to eat with a spoon. It genuinely tastes better than whole leaves.', 'Shake the dressing in a jar, pour, toss hard.', 'Egg quartered on top.']
  },
  'fried-rice': {
    n: 'Ginger fried rice, egg &amp; edamame', t: '10 min', k: 490, p: 29, tag: 'lunch',
    i: ['1 cup cold cooked rice (day-old is better)', '2 eggs, beaten', '½ cup shelled edamame — half a cup, not more', 'Diced carrot and red pepper', '1 tsp grated ginger, 1 tbsp garlic oil', '2 tbsp soy sauce, scallion greens, 1 tsp sesame oil'],
    s: ['Hot pan. Scramble the eggs 30 seconds until barely set, tip onto a plate.', 'Ginger in the garlic oil 20 seconds, then the cold rice. Press it flat and leave it for a full minute to crisp.', 'Edamame, vegetables and soy sauce in, toss, return the egg, kill the heat.', 'Scallion greens and sesame oil off the heat.', 'Soy sauce is fine — it is fermented and the trouble is gone.']
  },
  'tuna-rice': {
    n: 'Tuna rice bowl', t: '5 min', k: 430, p: 36, tag: 'lunch',
    i: ['1 can tuna in water or olive oil, drained', '¾ cup cooked rice', 'Cucumber, tomato, shredded carrot', 'Scallion greens, parsley', '1 tbsp garlic oil, lemon, salt, pepper'],
    s: ['Flake the tuna, keeping some chunks.', 'Everything into the bowl, garlic oil and lemon over, toss.', 'Sits happily for a couple of hours, so it travels.']
  },
  'chicken-soup': {
    n: 'Chicken &amp; rice soup', t: 'Sunday batch', k: 420, p: 34, tag: 'batch',
    i: ['1 lb chicken thighs, diced', '3 carrots, 2 zucchini, diced', '½ cup rice', '2 tbsp garlic oil, scallion greens', '6 cups water + 2 tsp salt, 1 tsp thyme, 1 bay leaf', 'Lemon at the end'],
    s: ['Brown the chicken in the garlic oil. Carrots and zucchini in, 5 minutes.', 'Water, salt, thyme, bay leaf. Simmer 20 minutes.', 'Rice in for the last 15 minutes.', 'Lemon and scallion greens at the end, off the heat.', 'Water, not boxed broth — nearly every carton is built on onion. This tastes better than it has any right to.', 'Makes 5. Freeze two.']
  },
  'turkey-chili': {
    n: 'Turkey chili, no beans', t: 'Sunday batch', k: 430, p: 36, tag: 'batch',
    i: ['1¼ lb 93% ground turkey', '2 red peppers, 2 carrots, diced small', '2 tbsp garlic oil, scallion greens', '1 tbsp cumin, 1 tbsp chili powder, 2 tsp smoked paprika, 1 tsp oregano', '28 oz crushed tomatoes', '1 cup water', 'Lactose-free yogurt, lime, cheddar to serve'],
    s: ['Brown the turkey hard in the garlic oil — leave it undisturbed until it sticks, then scrape. Colour is flavour.', 'Peppers and carrots in, 5 minutes. Spices 30 seconds until fragrant.', 'Tomatoes and water. Simmer uncovered 25 minutes.', 'The extra quarter pound of turkey and the diced carrot replace what the beans were doing — bulk and body. You will not miss them.', 'Makes 5. Freeze two.']
  },
  'sheetpan-chicken': {
    n: 'Sheet-pan chicken &amp; vegetables', t: '25 min', k: 480, p: 42, tag: 'dinner',
    i: ['Chicken thighs from the prep tray', 'Roasted zucchini, pepper, carrot', 'Lemon or lime', 'Lemon-yogurt sauce'],
    s: ['Sunday dinner, eaten straight off the prep pan while everything else cools.', 'The one meal of the week you do not have to think about.']
  },
  'shrimp-stirfry': {
    n: 'Ginger shrimp stir-fry', t: '12 min', k: 490, p: 42, tag: 'dinner',
    i: ['6 oz frozen shrimp, thawed and patted VERY dry', '½ cup shelled edamame', 'Red pepper, carrot, bok choy, green beans', '1 tbsp garlic oil', '3 tbsp ginger-scallion soy sauce', '¾ cup cooked rice'],
    s: ['Dry shrimp is non-negotiable — wet shrimp steams grey instead of searing.', 'Screaming hot pan, shrimp in a single layer. 90 seconds a side, then out.', 'Vegetables and edamame in, 3–4 minutes, still with bite.', 'Shrimp back, sauce over, toss 30 seconds. Over rice.']
  },
  'miso-salmon': {
    n: 'Miso-glazed salmon &amp; green beans', t: '15 min', k: 500, p: 40, tag: 'dinner',
    i: ['6 oz salmon fillet', '2 handfuls green beans', '1 tbsp white miso', '1 tbsp soy sauce, 2 tsp maple syrup', '1 tsp grated ginger, garlic oil'],
    s: ['Oven 425°F. Green beans on the pan with oil and salt, 8 minutes alone.', 'Whisk miso, soy sauce, maple and ginger into a thick glaze.', 'Push the beans aside, salmon on the same pan, half the glaze over. Back in 9–11 minutes.', 'Rest of the glaze for the last 2 minutes. Broil for caramelised edges if you like — but stand there, it burns in forty seconds.', 'Green beans instead of broccoli. Broccoli stalks in particular are a reliable bloater and this is a straight swap.']
  },
  'salmon-rice': {
    n: 'Salmon rice bowl', t: '12 min', k: 510, p: 40, tag: 'dinner',
    i: ['6 oz salmon, cubed', '¾ cup rice', '½ cucumber, thin sliced', 'Shredded carrot, scallion greens', '3 tbsp ginger-scallion soy sauce', 'Sesame seeds'],
    s: ['Cube the salmon, toss in a little soy sauce and oil.', 'Hot pan, 2 minutes a side. Slightly rare in the middle — it keeps cooking.', 'Over warm rice with everything cold piled around it.', 'The temperature contrast is what makes this better than it sounds.']
  },
  'street-tacos': {
    n: 'Street tacos', t: '8 min', k: 500, p: 38, tag: 'dinner',
    i: ['5 oz chicken or pork from Sunday, chopped', '3 corn tortillas', 'Shredded lettuce and carrot, lime, cilantro', 'Fresh tomato-scallion salsa'],
    s: ['Char the tortillas over a flame or in a dry pan, 20 seconds a side. This is the difference between a taco and a wrap.', 'Warm the meat in the same pan.', 'Build: meat, slaw, salsa, cilantro, hard squeeze of lime.', 'Corn tortillas, not flour — corn is gentle, wheat flour is not.']
  },
  'pasta': {
    n: 'Tomato pasta, turkey meatballs', t: '15 min', k: 560, p: 38, tag: 'dinner',
    i: ['2 oz dry rice pasta or gluten-free pasta', '5 oz ground turkey, rolled into 8 small balls with salt, pepper, oregano', '2 tbsp garlic oil', '1 cup crushed tomatoes', '2 handfuls baby spinach', 'Grated parmesan'],
    s: ['Pasta water on first. Everything else times off it.', 'Meatballs in the garlic oil, brown all over, 6 minutes. Out.', 'Tomatoes into the same pan, simmer.', 'Meatballs back, spinach on top, lid 2 minutes to wilt.', 'Drained pasta INTO the sauce, not sauce onto pasta. Splash of pasta water, parmesan, toss.', 'Rice pasta for now because of the wheat, not the gluten. Read the note in the Plan tab before you decide anything permanent about wheat.']
  },
  'korean-beef': {
    n: 'Soy-ginger beef bowl', t: '12 min', k: 530, p: 40, tag: 'dinner',
    i: ['5 oz 93% ground beef', '¾ cup rice', '1 tsp grated ginger, 1 tbsp garlic oil', '2 tbsp soy sauce, 1 tsp maple syrup, 1 tsp sesame oil', 'Shredded carrot, cucumber, scallion greens', 'Fried egg on top (optional, +6g protein)'],
    s: ['Brown the beef hard in a dry pan — it has enough fat. Break it up small.', 'Ginger in for 30 seconds once the beef is browned, not before, or it burns.', 'Soy sauce and maple in, bubble down 60 seconds until it coats.', 'Over rice with the raw vegetables. Sesame oil off the heat.']
  },
  'chicken-curry': {
    n: 'Chicken curry in a hurry', t: '18 min', k: 540, p: 40, tag: 'dinner',
    i: ['5 oz chicken from Sunday, chopped', '2 tbsp garlic oil, 1 tsp grated ginger, scallion greens', '1 tbsp curry powder, ½ tsp turmeric', '½ cup light coconut milk — half a cup, it climbs fast', '1 cup crushed tomatoes', '2 handfuls spinach', '¾ cup rice'],
    s: ['Ginger and spices into hot garlic oil, 45 seconds. Spices must hit hot fat or the curry tastes dusty.', 'Tomatoes and coconut milk in, simmer 8 minutes until it thickens.', 'Chicken in to warm through, spinach on top, lid 2 minutes.', 'Makes 2. The second portion is better tomorrow.']
  },
  'pork-sheetpan': {
    n: 'Pork tenderloin sheet pan', t: '30 min', k: 470, p: 44, tag: 'dinner',
    i: ['1 pork tenderloin (~1 lb)', '3 carrots, 2 potatoes, in chunks', '1 tbsp Dijon, 1 tbsp garlic oil, 1 tsp rosemary', 'Salt, pepper'],
    s: ['Oven 425°F. Rub the pork with Dijon, garlic oil, rosemary, plenty of salt.', 'Carrots and potatoes around it.', 'Roast 22–25 minutes to 145°F internal. Do not go past it — tenderloin turns to chalk at 160°F.', 'Rest 8 minutes before slicing. This is the step people skip and then wonder why it is dry.', 'Eat one portion, slice the rest for the week.']
  },
  'flex': {
    n: 'Flex meal', t: '—', k: 600, p: 0, tag: 'dinner',
    i: ['Whatever you want'],
    s: ['Deliberately unplanned. A plan with no exit valve is a plan you abandon in week two.', 'One note while the gut is settling: pick something you have eaten before without trouble. A brand-new restaurant dish on a Saturday makes the next day\'s symptom score meaningless.']
  },
  'lentil-soup': {
    n: 'Lentil soup — week 6 challenge', t: 'Batch', k: 420, p: 28, tag: 'batch',
    i: ['1 cup canned lentils, rinsed hard', '3 carrots, 2 celery, 2 zucchini', '2 tbsp garlic oil, scallion greens', '1 tsp smoked paprika, 1 tsp thyme, bay leaf', '1 can diced tomatoes, 5 cups water + salt', '2 handfuls spinach'],
    s: ['This one is a deliberate challenge for week 6, not a baseline meal. Do not cook it earlier.', 'Canned and well rinsed, not dried — the rinsing takes a meaningful amount of the trouble down the drain.', 'Vegetables in the garlic oil 6 minutes. Spices 30 seconds. Lentils, tomatoes, water, bay leaf.', 'Simmer 20 minutes. Spinach at the end. Salt properly.']
  }
};

const SNACKS = {
  'cottage':  { n: 'Lactose-free cottage cheese + strawberries', k: 180 },
  'edamame':  { n: 'Edamame, ½ cup, flaky salt', k: 120 },
  'egg':      { n: 'Two hard-boiled eggs', k: 155 },
  'citrus':   { n: 'Orange or kiwi + pumpkin seeds', k: 170 },
  'ricecake': { n: 'Rice cakes + sunflower seed butter', k: 190 },
  'popcorn':  { n: 'Popcorn, or 1 oz dark chocolate', k: 160 },
  'free':     { n: 'Your call', k: 0 }
};

/* ---------- Gut protocol: 8 weeks ---------- */
const PHASES = [
  { w:1, ph:'Baseline', ch:null, note:'Nothing but the gentle list. Most people notice a change in 5–10 days; some take the full three weeks. Log your symptoms every night even on good days — the pattern is the point, not any single score.' },
  { w:2, ph:'Baseline', ch:null, note:'Second week of the same food. Boring is the treatment here. If nothing at all has shifted by the end of next week, that is genuinely useful information to bring to a doctor.' },
  { w:3, ph:'Baseline', ch:null, note:'Last settling week. Look back at your scores — you want a run of quiet days before you start provoking anything.' },
  { w:4, ph:'Challenge', ch:'lactose', note:'First challenge. Everything else stays exactly as it was — one variable at a time or the whole exercise is wasted.' },
  { w:5, ph:'Challenge', ch:'fructans', note:'The big one. Garlic and onion are the most common trigger by a distance, and also the hardest to live without — worth knowing for certain.' },
  { w:6, ph:'Challenge', ch:'gos', note:'Beans and lentils. If this one passes, a lot of cheap protein comes back onto your shopping list.' },
  { w:7, ph:'Challenge', ch:'fructose', note:'Honey, apple, mango. Quick to test and easy to avoid if it fails.' },
  { w:8, ph:'Challenge', ch:'polyols', note:'Last one, plus wheat. Then you build your own list from what you have actually learned.' }
];

const REINTRO = {
  lactose: { n:'Lactose', f:'Milk, regular yogurt, ice cream, soft cheese',
    d:['Mon — ½ cup regular milk with breakfast','Tue — 1 cup regular milk','Wed — 1 cup milk + ¾ cup regular yogurt'],
    p:'Hard cheeses like cheddar and parmesan are already nearly lactose-free, which is why they stayed in from week 1.' },
  fructans:{ n:'Fructans — garlic &amp; onion', f:'Garlic, onion, wheat bread, pasta',
    d:['Mon — ½ clove real garlic in a meal','Tue — 1 clove garlic + ¼ cup diced onion','Wed — 2 cloves + ½ cup onion'],
    p:'Test the garlic and onion this week. Wheat waits until week 8 — it carries a different load and lumping them together tells you nothing.' },
  gos:     { n:'GOS — beans &amp; lentils', f:'Chickpeas, black beans, kidney beans, lentils',
    d:['Mon — ¼ cup canned chickpeas, rinsed','Tue — ½ cup chickpeas','Wed — ¾ cup chickpeas, or the lentil soup'],
    p:'Always canned and rinsed hard rather than dried. Rinsing genuinely washes a portion of the trouble away.' },
  fructose:{ n:'Fructose', f:'Honey, apple, mango, agave, high-fructose corn syrup',
    d:['Mon — 2 tsp honey','Tue — 1 tbsp honey or ½ mango','Wed — 1 whole apple'],
    p:'Fructose is better tolerated alongside glucose, which is why table sugar bothers people less than honey does.' },
  polyols: { n:'Polyols + wheat', f:'Mushroom, cauliflower, stone fruit, sugar-free gum, and separately wheat',
    d:['Mon — ½ cup mushrooms','Tue — 1 cup mushrooms or 2 apricots','Wed — 2 slices ordinary wheat bread'],
    p:'Sorbitol and xylitol in sugar-free gum and mints are a common hidden source. Worth checking whatever you chew.' }
};

const CHALLENGE_RULES = [
  'Challenge Monday, Tuesday, Wednesday. Back to baseline Thursday to Sunday.',
  'Change one thing only. Everything else on the plate stays exactly as it was the week before.',
  'Score bloating and gas every night, challenge week or not.',
  'If symptoms flare hard, stop that challenge immediately and go back to baseline. You have your answer — no need to finish the three days.',
  'A bad reaction does not mean the food is banned forever. It means note the dose you reacted at, and come back to it in a few months.',
  'Wait for a quiet run of days before starting the next challenge. Starting a new one on top of a flare tells you nothing.'
];

const GUT_HABITS = [
  { n:'Walk ten minutes after dinner', d:'The most effective thing on this list and the least glamorous. Movement after eating speeds up how fast the stomach empties, and it is the single best lever against evening bloating.' },
  { n:'Three meals, one snack, nothing else', d:'Between meals the gut runs a cleaning wave that sweeps everything downstream. Grazing switches it off. This is why the plan dropped from two snacks to one.' },
  { n:'Eat slower than feels natural', d:'Air swallowed while eating fast is gas that has to come out somewhere. Put the fork down between bites for one week and see.' },
  { n:'No straws, no gum, no fizzy drinks', d:'All three are pure swallowed air. Sugar-free gum is doubly bad — the sweeteners in it are themselves a trigger.' },
  { n:'Drink between meals, not during', d:'Large volumes with food distend an already unhappy stomach. Spread the water across the day instead.' },
  { n:'Fibre climbs slowly', d:'The first plan jumped you to 30g of fibre overnight, which causes gas all by itself even in a healthy gut. This one starts around 20g and climbs about 3g a week.' }
];

/* ---------- Four two-week menu blocks ---------- */
const BLOCKS = [
  {
    id:1, weeks:[1,2], name:'Settle',
    idea:'The gentle list, twice. Garlic oil instead of garlic, scallion greens instead of onion, no beans, no broccoli, no apples. Same food both weeks so the second one takes no thinking.',
    prep:['Garlic-infused oil — make this first, everything else uses it','2½ lb chicken thighs — half Greek (lemon, oregano, garlic oil), half cumin-lime','Vegetable tray: 2 zucchini, 3 red peppers, 4 carrots','2 cups rice','Turkey chili, no beans — 5 servings, freeze 2','8 hard-boiled eggs','Lemon-yogurt sauce + ginger-scallion soy sauce','Fresh tomato-scallion salsa','3 jars overnight oats'],
    days:[
      { d:'Sun', b:'yogurt-bowl', l:'tuna-rice',    dn:'sheetpan-chicken', s:'citrus'   },
      { d:'Mon', b:'oats',        l:'greek-bowl',   dn:'shrimp-stirfry',   s:'cottage'  },
      { d:'Tue', b:'scramble',    l:'texmex-bowl',  dn:'turkey-chili',     s:'edamame'  },
      { d:'Wed', b:'oats',        l:'turkey-chili', dn:'miso-salmon',      s:'citrus'   },
      { d:'Thu', b:'scramble',    l:'med-salad',    dn:'street-tacos',     s:'egg'      },
      { d:'Fri', b:'oats',        l:'fried-rice',   dn:'pasta',            s:'popcorn'  },
      { d:'Sat', b:'yogurt-bowl', l:'tuna-rice',    dn:'flex',             s:'free'     }
    ],
    shop:[
      ['Produce', [['Zucchini ×3',4],['Red peppers ×4',5],['Carrots, 2 lb',3],['Green beans, 1 lb',3.5],['Bok choy',2.5],['Romaine, 1 head',2.5],['Cucumbers ×3',3],['Roma tomatoes ×6',4],['Lemons ×3, limes ×3',3],['Ginger, 1 knob',1],['Scallions ×2 bunches',3],['Cilantro, parsley',3],['Baby spinach',3],['Oranges ×4, kiwi ×3',6],['Strawberries or blueberries',5],['Potatoes ×2',2]]],
      ['Protein', [['Chicken thighs, 2½ lb',8],['Ground turkey 93%, 1¾ lb',9],['Frozen shrimp, 1 lb',9],['Salmon fillet ×1',6],['Eggs, 18 ct',5],['Canned tuna ×2',4],['Frozen shelled edamame',3]]],
      ['Dairy', [['Lactose-free plain yogurt, 32 oz',7],['Lactose-free cottage cheese',4.5],['Feta, 6 oz',4],['Cheddar, block',4],['Parmesan, small',3],['Lactose-free milk, ½ gal',4]]],
      ['Pantry', [['Jasmine rice, 2 lb',4],['Rolled oats, 18 oz',4],['Rice or GF pasta',3.5],['Corn tortillas',3],['Rice cakes',3],['Crushed tomatoes ×2',4],['Sourdough loaf',4.5]]],
      ['One-time pantry', [['Olive oil, large — for the garlic oil',9],['Garlic, 1 head (for oil only)',1],['Soy sauce',3],['White miso, tub',4],['Toasted sesame oil',4.5],['Maple syrup',6],['Chia seeds',5],['Pumpkin seeds',4],['Sunflower seed butter',6],['Cumin, chili powder, smoked paprika, oregano, thyme, rosemary, curry powder',12],['Dark chocolate 85%',3]]]
    ]
  },
  {
    id:2, weeks:[3,4], name:'Settle + first challenge',
    idea:'Third quiet week, then lactose goes back on trial in week 4. Pork and the chicken soup arrive so the food does not get dull while the gut does its work.',
    prep:['Garlic-infused oil, fresh batch','2 lb chicken thighs — half Greek, half cumin-lime','1 pork tenderloin, roasted Sunday','Vegetable tray: zucchini, peppers, carrots, green beans','2 cups rice','Chicken &amp; rice soup — 5 servings, freeze 2','8 hard-boiled eggs','Both sauces + fresh salsa','3 jars overnight oats'],
    days:[
      { d:'Sun', b:'shakshuka',   l:'tuna-rice',     dn:'pork-sheetpan',  s:'citrus'   },
      { d:'Mon', b:'oats',        l:'greek-bowl',    dn:'shrimp-stirfry', s:'cottage'  },
      { d:'Tue', b:'scramble',    l:'texmex-bowl',   dn:'chicken-soup',   s:'edamame'  },
      { d:'Wed', b:'oats',        l:'chicken-soup',  dn:'miso-salmon',    s:'citrus'   },
      { d:'Thu', b:'scramble',    l:'med-salad',     dn:'street-tacos',   s:'egg'      },
      { d:'Fri', b:'oats',        l:'fried-rice',    dn:'korean-beef',    s:'popcorn'  },
      { d:'Sat', b:'yogurt-bowl', l:'tuna-rice',     dn:'flex',           s:'free'     }
    ],
    shop:[
      ['Produce', [['Zucchini ×3',4],['Red peppers ×4',5],['Carrots, 2 lb',3],['Green beans, 1 lb',3.5],['Celery',2],['Romaine',2.5],['Cucumbers ×3',3],['Roma tomatoes ×6',4],['Lemons, limes',3],['Ginger',1],['Scallions ×2',3],['Cilantro, parsley',3],['Baby spinach',3],['Oranges ×4, kiwi ×3',6],['Berries',5],['Potatoes ×3',3]]],
      ['Protein', [['Chicken thighs, 3 lb',10],['Pork tenderloin, ~1 lb',7],['Ground beef 93%, ½ lb',4],['Frozen shrimp (from bag)',0],['Salmon fillet ×1',6],['Eggs, 18 ct',5],['Canned tuna ×2',4],['Edamame',3]]],
      ['Dairy', [['Lactose-free yogurt, 32 oz',7],['Lactose-free cottage cheese',4.5],['Feta',4],['Cheddar',4],['Parmesan',3],['Lactose-free milk',4],['WEEK 4 ONLY — regular milk, ½ gal',3],['WEEK 4 ONLY — regular plain yogurt',5]]],
      ['Pantry', [['Rice',4],['Rolled oats',4],['Corn tortillas',3],['Rice cakes',3],['Crushed tomatoes ×2',4],['Diced tomatoes',2],['Sourdough loaf',4.5],['Garlic, 1 head — for the oil only',1]]]
    ]
  },
  {
    id:3, weeks:[5,6], name:'Garlic, onion, then beans',
    idea:'The two challenges that matter most. Week 5 puts real garlic and onion back on trial; week 6 does beans and lentils. Baseline food the rest of each week.',
    prep:['Garlic-infused oil (still your baseline fat outside the challenge days)','2½ lb chicken thighs — half Greek, half cumin-lime','Vegetable tray','2 cups rice','Turkey chili, no beans — 5 servings','WEEK 6 ONLY: lentil soup for the challenge days','8 hard-boiled eggs','Both sauces + fresh salsa','3 jars overnight oats'],
    days:[
      { d:'Sun', b:'shakshuka',   l:'tuna-rice',    dn:'sheetpan-chicken', s:'citrus'   },
      { d:'Mon', b:'oats',        l:'greek-bowl',   dn:'chicken-curry',    s:'cottage'  },
      { d:'Tue', b:'scramble',    l:'texmex-bowl',  dn:'turkey-chili',     s:'edamame'  },
      { d:'Wed', b:'oats',        l:'turkey-chili', dn:'miso-salmon',      s:'citrus'   },
      { d:'Thu', b:'scramble',    l:'med-salad',    dn:'street-tacos',     s:'egg'      },
      { d:'Fri', b:'oats',        l:'fried-rice',   dn:'salmon-rice',      s:'popcorn'  },
      { d:'Sat', b:'yogurt-bowl', l:'tuna-rice',    dn:'flex',             s:'free'     }
    ],
    shop:[
      ['Produce', [['Zucchini ×3',4],['Red peppers ×4',5],['Carrots, 2 lb',3],['Green beans',3.5],['Bok choy',2.5],['Romaine',2.5],['Cucumbers ×3',3],['Roma tomatoes ×6',4],['Lemons, limes',3],['Ginger',1],['Scallions ×2',3],['Cilantro, parsley',3],['Baby spinach',3],['Oranges, kiwi',6],['Berries',5]]],
      ['Protein', [['Chicken thighs, 2½ lb',8],['Ground turkey 93%, 1¾ lb',9],['Salmon fillets ×2',12],['Eggs, 18 ct',5],['Canned tuna ×2',4],['Edamame',3]]],
      ['Dairy', [['Lactose-free yogurt, 32 oz',7],['Cottage cheese',4.5],['Feta',4],['Cheddar',4],['Parmesan',3],['Milk, ½ gal',4]]],
      ['Pantry', [['Rice',4],['Rolled oats',4],['Corn tortillas',3],['Rice cakes',3],['Crushed tomatoes ×2',4],['Light coconut milk',2],['Sourdough loaf',4.5]]],
      ['Challenge items', [['WEEK 5 — garlic, 1 head',1],['WEEK 5 — yellow onions ×2',2],['WEEK 6 — canned chickpeas ×2',3],['WEEK 6 — canned lentils ×2',3]]]
    ]
  },
  {
    id:4, weeks:[7,8], name:'Fructose, polyols, and your own list',
    idea:'Last two challenges, then you stop following a plan and start following your results. By week 8 you should know which of the five groups actually bother you.',
    prep:['Garlic-infused oil, or real garlic if week 5 passed','2½ lb chicken thighs, seasoned your way','Vegetable tray, whatever you now know you tolerate','2 cups rice','A batch pot — chili, chicken soup or lentil soup depending on week 6','8 hard-boiled eggs','Sauces','3 jars overnight oats'],
    days:[
      { d:'Sun', b:'shakshuka',   l:'tuna-rice',    dn:'sheetpan-chicken', s:'citrus'   },
      { d:'Mon', b:'oats',        l:'greek-bowl',   dn:'chicken-curry',    s:'cottage'  },
      { d:'Tue', b:'scramble',    l:'texmex-bowl',  dn:'turkey-chili',     s:'edamame'  },
      { d:'Wed', b:'oats',        l:'turkey-chili', dn:'korean-beef',      s:'citrus'   },
      { d:'Thu', b:'scramble',    l:'med-salad',    dn:'street-tacos',     s:'egg'      },
      { d:'Fri', b:'oats',        l:'fried-rice',   dn:'pasta',            s:'popcorn'  },
      { d:'Sat', b:'yogurt-bowl', l:'tuna-rice',    dn:'flex',             s:'free'     }
    ],
    shop:[
      ['Produce', [['Zucchini ×3',4],['Red peppers ×4',5],['Carrots, 2 lb',3],['Green beans',3.5],['Romaine',2.5],['Cucumbers ×3',3],['Roma tomatoes ×6',4],['Lemons, limes',3],['Ginger',1],['Scallions ×2',3],['Cilantro, parsley',3],['Baby spinach',3],['Oranges, kiwi',6],['Berries',5]]],
      ['Protein', [['Chicken thighs, 3 lb',10],['Ground turkey 93%, 1¾ lb',9],['Ground beef 93%, ½ lb',4],['Eggs, 18 ct',5],['Canned tuna ×2',4],['Edamame',3]]],
      ['Dairy', [['Yogurt, 32 oz',7],['Cottage cheese',4.5],['Feta',4],['Cheddar',4],['Parmesan',3],['Milk, ½ gal',4]]],
      ['Pantry', [['Rice',4],['Rolled oats',4],['Pasta — rice or wheat, week 8 decides',3],['Corn tortillas',3],['Rice cakes',3],['Crushed tomatoes ×2',4],['Coconut milk',2],['Sourdough loaf',4.5]]],
      ['Challenge items', [['WEEK 7 — honey, small jar',5],['WEEK 7 — mango ×1, apples ×2',5],['WEEK 8 — mushrooms, 8 oz',3],['WEEK 8 — ordinary wheat bread',3.5]]]
    ]
  }
];

/* ---------- Strength sessions ---------- */
const LIFTS = {
  A: { name:'Strength A', ex:[
    { n:'Goblet squat',        c:'One dumbbell at your chest. Sit down between your knees, chest tall, heels down.' },
    { n:'Dumbbell floor press', c:'On your back, knees bent. Elbows stop when they touch the floor — that is the depth.' },
    { n:'Romanian deadlift',   c:'Push your hips BACK, not down. Stop when you feel the hamstrings, not when you reach the floor.' },
    { n:'Shoulder press',      c:'Ribs down. Do not arch your lower back to get the weight up.' },
    { n:'Plank',               c:'Squeeze your glutes, hips level with shoulders. The set ends when the hips sag, not when the clock says.' }
  ]},
  B: { name:'Strength B', ex:[
    { n:'Bent-over row',       c:'Hinge to about 45°, back flat. Pull to your hips, not your chest. Pause a beat at the top.' },
    { n:'Split squat',         c:'One foot forward, one back, long stance. Straight down. All reps one side, then the other.' },
    { n:'Glute bridge',        c:'Dumbbell across the hips. Drive through your heels, squeeze hard for a full second at the top.' },
    { n:'Curl + overhead extension', c:'Curl up, press overhead, lower behind your head. One continuous movement.' },
    { n:'Dead bug',            c:'On your back, arms up, knees at 90°. Lower opposite arm and leg slowly. Lower back stays glued down.' }
  ]}
};

/* ---------- Eight weeks of training ---------- */
const TRAINING = [
  { w:1, focus:'Show up. That is the whole goal. Every walk also doubles as gut work — movement is the best thing there is for bloating.',
    load:'2 sets of 10. Use 10–15 lb, or nothing at all if a movement feels awkward. Finish every set feeling like you had 4 more in you.',
    days:[
      { ty:'prep',     t:'Meal prep',   d:'Sunday session, about 2 hours. Make the garlic oil first.' },
      { ty:'strength', t:'Strength A',  d:'2 sets × 10 · rest 90s', k:'A' },
      { ty:'walk',     t:'Walk 20 min', d:'3.0 mph, 0% incline. You should be able to talk in full sentences.' },
      { ty:'rest',     t:'Rest',        d:'Still do the ten minutes after dinner.' },
      { ty:'strength', t:'Strength B',  d:'2 sets × 10 · rest 90s', k:'B' },
      { ty:'walk',     t:'Walk 20 min', d:'3.0 mph, 1% incline.' },
      { ty:'walk',     t:'Walk 25 min', d:'Outside if you can. Pace does not matter.' }
    ]},
  { w:2, focus:'Same sessions, slightly longer. No extra weight yet.',
    load:'2 sets of 12, same dumbbells. Adding reps before weight is what protects your joints in the first month.',
    days:[
      { ty:'prep',     t:'Meal prep',   d:'Sunday session' },
      { ty:'strength', t:'Strength A',  d:'2 sets × 12 · rest 90s', k:'A' },
      { ty:'walk',     t:'Walk 25 min', d:'3.0 mph, 1% incline.' },
      { ty:'rest',     t:'Rest',        d:'' },
      { ty:'strength', t:'Strength B',  d:'2 sets × 12 · rest 90s', k:'B' },
      { ty:'walk',     t:'Walk 25 min', d:'3.2 mph, 1% incline.' },
      { ty:'walk',     t:'Walk 30 min', d:'Easy. Longest of the week and it should still feel easy.' }
    ]},
  { w:3, focus:'Third set arrives, walks get an incline. Look back at three weeks of symptom scores before week 4.',
    load:'3 sets of 10. Go to 20 lb on squats, rows and RDLs. Keep presses lighter if 20 feels heavy — shoulders lag behind legs and that is normal.',
    days:[
      { ty:'prep',     t:'Meal prep',   d:'New block starts today' },
      { ty:'strength', t:'Strength A',  d:'3 sets × 10 · rest 90s', k:'A' },
      { ty:'walk',     t:'Walk 30 min', d:'3.2 mph, 2% incline. The incline does the work, not the speed.' },
      { ty:'rest',     t:'Rest',        d:'' },
      { ty:'strength', t:'Strength B',  d:'3 sets × 10 · rest 90s', k:'B' },
      { ty:'walk',     t:'Walk 30 min', d:'3.4 mph, 2% incline.' },
      { ty:'walk',     t:'Walk 30 min', d:'Easy, outside.' }
    ]},
  { w:4, focus:'A third strength day — the biggest jump in the program. If it is too much, drop Friday and repeat this week. Repeating is not failing.',
    load:'3 sets of 12, 20 lb wherever you can hold form.',
    days:[
      { ty:'prep',     t:'Meal prep',   d:'Lactose challenge starts Monday' },
      { ty:'strength', t:'Strength A',  d:'3 sets × 12 · rest 90s', k:'A' },
      { ty:'walk',     t:'Walk 30 min', d:'3.4 mph, 3% incline.' },
      { ty:'rest',     t:'Rest',        d:'' },
      { ty:'strength', t:'Strength B',  d:'3 sets × 12 · rest 90s', k:'B' },
      { ty:'strength', t:'Strength A',  d:'3 sets × 10, lighter, move quickly', k:'A' },
      { ty:'walk',     t:'Walk 35 min', d:'3.5 mph, 1%. Halfway — weigh in and take a photo.' }
    ]},
  { w:5, focus:'Intervals arrive. Note that hard intervals can stir up gut symptoms on their own — if Wednesday is rough, that is the running, not the garlic.',
    load:'3 sets of 12, and count three seconds on the way DOWN of every rep. With 20 lb dumbbells, tempo is how you keep progressing.',
    days:[
      { ty:'prep',      t:'Meal prep',    d:'Garlic and onion challenge starts Monday' },
      { ty:'strength',  t:'Strength A',   d:'3 × 12, 3-second lowering', k:'A' },
      { ty:'intervals', t:'Intervals ×5', d:'5 min warm-up at 3.0. Then 5 rounds of 3 min at 3.5 / 1 min at 5.0. 5 min cool-down. 30 min.' },
      { ty:'rest',      t:'Rest',         d:'' },
      { ty:'strength',  t:'Strength B',   d:'3 × 12, 3-second lowering', k:'B' },
      { ty:'walk',      t:'Walk 30 min',  d:'3.5 mph, 3% incline. Steady.' },
      { ty:'walk',      t:'Walk 35 min',  d:'Easy.' }
    ]},
  { w:6, focus:'More intervals, and the strength work starts to bite.',
    load:'3 sets of 12 with the 3-second lowering. Last set of each: go to two reps before failure, whatever that number is.',
    days:[
      { ty:'prep',      t:'Meal prep',    d:'Beans and lentils challenge starts Monday' },
      { ty:'strength',  t:'Strength A',   d:'3 × 12 tempo, last set near-failure', k:'A' },
      { ty:'intervals', t:'Intervals ×6', d:'5 min warm-up. 6 rounds of 3 min at 3.5 / 1 min at 5.0. Cool-down. 34 min.' },
      { ty:'rest',      t:'Rest',         d:'' },
      { ty:'strength',  t:'Strength B',   d:'3 × 12 tempo, last set near-failure', k:'B' },
      { ty:'strength',  t:'Strength A',   d:'3 × 10, lighter and quicker', k:'A' },
      { ty:'walk',      t:'Walk 40 min',  d:'3.5 mph, 2%. Longest walk so far.' }
    ]},
  { w:7, focus:'Peak volume. If something hurts — actual pain, not soreness — take the day. That is arithmetic, not weakness.',
    load:'3 sets of 12 tempo, plus a drop set on squats and rows: finish the last set, drop to a lighter weight, 10 more immediately.',
    days:[
      { ty:'prep',      t:'Meal prep',    d:'Fructose challenge starts Monday' },
      { ty:'strength',  t:'Strength A',   d:'3 × 12 tempo + drop set on squats', k:'A' },
      { ty:'intervals', t:'Intervals ×7', d:'5 min warm-up. 7 rounds of 3 min at 3.5 / 1 min at 5.5. Cool-down. 38 min.' },
      { ty:'rest',      t:'Rest',         d:'' },
      { ty:'strength',  t:'Strength B',   d:'3 × 12 tempo + drop set on rows', k:'B' },
      { ty:'walk',      t:'Walk 35 min',  d:'3.5 mph, 3% incline.' },
      { ty:'walk',      t:'Walk 40 min',  d:'Easy, outside.' }
    ]},
  { w:8, focus:'Finish it. Then four days completely off before you start anything else — and write out your own list of what you can and cannot eat.',
    load:'3 sets of 12 tempo. On Saturday do one all-out set of each and write the number down — that is your new starting point.',
    days:[
      { ty:'prep',      t:'Meal prep',    d:'Polyols and wheat challenge starts Monday. Last prep of the program.' },
      { ty:'strength',  t:'Strength A',   d:'3 × 12 tempo', k:'A' },
      { ty:'intervals', t:'Intervals ×7', d:'5 min warm-up. 7 rounds of 3 min at 3.5 / 1.5 min at 5.5. Cool-down. 41 min.' },
      { ty:'rest',      t:'Rest',         d:'' },
      { ty:'strength',  t:'Strength B',   d:'3 × 12 tempo', k:'B' },
      { ty:'strength',  t:'Test day',     d:'One all-out set of each Strength A exercise. Write down the reps.', k:'A' },
      { ty:'walk',      t:'Walk 45 min',  d:'Last session. Weigh in, take a photo, compare to week 4.' }
    ]}
];

/* ---------- Daily schedule (wake 6:30, bed 22:30) ---------- */
const SCHEDULE = {
  breakfast:'07:00', snack1:'15:30', lunch:'12:30', workout:'17:15',
  dinner:'18:30', postwalk:'19:30', close:'20:30', prep:'10:00', shop:'09:30'
};
