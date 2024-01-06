const round1 = 5;
const round2 = 10;
const round3 = 0;

const quiz = [
    {
        question: "Before the invention of the Golden Snitch, which magical creature was used in a game of Quidditch?",
        alternatives: ["The Golden Snuggery","The Golden Snidget ","The Snake Bird"],
        answer: 1,
    },
    {
        question: "Which potion is commonly known as ‘Liquid Luck’?",
        alternatives: ["Felix Felicis","The Alihosty Draught","The Pepper Potion"],
        answer: 0,
    },
    {
        question: "The tale of the Three Brothers involves which magical artefacts?",
        alternatives: ["The Founders’ relics","Horcruxes","The Deathly Hallows"],
        answer: 2,
    },
    {
        question: "Which ball in Quidditch is the largest?",
        alternatives: ["The Snitch","The Bludger","The Quaffle"],
        answer: 2,
    },
    {
        question: "True or False: Polyjuice Potion allows the drinker to change species?",
        alternatives: ["True","False"],
        answer: 1,
    },
    {
        question: "What governmental body directly preceded the Ministry of Magic?",
        alternatives: ["The Wizards’ Council","The International Confederation of Wizards","The Order of Merlin"],
        answer: 0,
    },
    {
        question: "Which dragon breed is the smallest?",
        alternatives: ["The Antipodean Opaleye","The Peruvian Vipertooth","The Ukrainian Ironbelly"],
        answer: 1,
    },
    {
        question: "Who founded the village of Hogsmeade?",
        alternatives: ["Hengist of Woodcroft ","Elfrida Clagg","Quincy Hog"],
        answer: 0,
    },
    {
        question: "The Hidebehind was accidentally recreated by cross-breeding a ghoul with what other Magical Creature?",
        alternatives: ["A Lethifold","A Runespoor","A Demiguise"],
        answer: 2,
    },
    {
        question: "What is the only spell known to repel a Lethifold?",
        alternatives: ["The Knockback Jinx","The Stunning Spell","The Patronus Charm"],
        answer: 2,
    },
    {
        question: "Who published the Law of Elemental Transfiguration?",
        alternatives: ["Gamp","Evangeline Orpington","Laverne de Montmorency"],
        answer: 0,
    },
    {
        question: "What does the Hogwarts motto translate to?",
        alternatives: ["Knowledge is the real magic","Never tickle a sleeping dragon ","Look before you leap"],
        answer: 1,
    },
    {
        question: "Which magical creature is the only one known to produce eggs through its mouth?",
        alternatives: ["The Basilisk","The Ashwinder","The Runespoor"],
        answer: 2,
    },
    {
        question: "Where is Ilvermony School of Witchcraft and Wizardry located?",
        alternatives: ["Mount Greylock","The Pyrenees","The Amazon Rainforest"],
        answer: 0,
    },
    {
        question: "What is the most powerful potion known to wizardkind?",
        alternatives: ["Elixir to Induce Euphoria","Verocitaserum","Amortentia"],
        answer: 2,
    },
    {
        question: "Emetic the Evil was killed in a duel against who?",
        alternatives: ["Egbert the Egregious","Sir Agravaine","Beatrix Bloxam"],
        answer: 0,
    },
    {
        question: "If a Chaser keeps their hand on the Quaffle as it goes through the goal, what foul are they committing?",
        alternatives: ["Blatching","Haversacking","Stooging"],
        answer: 1,
    },
    {
        question: "A bite from a Mackled Manaclaw has the unusual side effect of causing what?",
        alternatives: ["Hairy Ears","Bad Luck","Webbed Feet"],
        answer: 1,
    },
    {
        question: "What plant excretes Stinksap?",
        alternatives: ["Mimbulus mimbletonia","Fluxweed","Sopophorous Bean"],
        answer: 0,
    },
    {
        question: "The Pepper Potion evolved from a remedy created by which 12th century wizard?",
        alternatives: ["Bowman Wright","Basil Flack","Linfred of Stinchcombe"],
        answer: 2,
    },
    {
        question: "In the Wizard and the Hopping Pot, what does the elder wizard leave for his son in the Hopping Pot?",
        alternatives: ["A single slipper","His want","A smaller pot"],
        answer: 0,
    },
    {
        question: "The Snallygaster is native to which region of the world?",
        alternatives: ["The Scottish Highlands","The Amazon Rainforest","North America"],
        answer: 2,
    },
    {
        question: "Who is the Muggle knight featured in The Fountain of Fair Fortune?",
        alternatives: ["Sir Amset","Sir Luckless ","Sir Lancelot"],
        answer: 1,
    },
    {
        question: "The world’s largest Kelpie is also known by what other name?v",
        alternatives: ["Gallingatua","Fantagruel","The Loch Ness Monster"],
        answer: 2,
    },
    {
        question: "Who was the first Minister for Magic?",
        alternatives: ["Ulick Gamp","Cadmus Peverell","Ethelred the Ever-Ready"],
        answer: 0,
    },
]