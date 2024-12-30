var game = game;

if (!game) {
  game = new Object;
}

game.HAPPENING_COLOR = '#ff0000';
game.HAPPENING_COLOR_LIGHT = '#ff9999';
game.RUFFIAN_COLOR = '#0000ff';
game.RUFFIAN_COLOR_LIGHT = '#9999ff';
game.DIEHARD_COLOR = '#aaaa00';
game.DIEHARD_COLOR_LIGHT = '#ffff99';
game.AMMO_COLOR = '#00aa55';
game.AMMO_COLOR_LIGHT = '#99ffaa';
game.DECREE_COLOR = '#ff00ff';
game.DECREE_COLOR_LIGHT = '#ff99ff';
game.THING_COLOR = '#00ffff';
game.THING_COLOR_LIGHT = '#99ffff';
game.ANIMAL_COLOR = '#555555';
game.WEATHER_COLOR = '#000066';
game.WEATHER_COLOR_LIGHT = '#6666cc';

let carddata = [
  [
    {
      color: game.DIEHARD_COLOR,
      color2: game.DIEHARD_COLOR_LIGHT,
      cardName: "DOOMBRINGER",
      textSize: 50,
      textList: [
        "* Takes Counter Damage",
        "",
        "Doombringer can only be",
        "damaged by and can only",
        "leave the battlefield due",
        "to sheep."
      ],
      rightBox: true,
      leftBox: true,
      cost: 6, 
      attack: 8,
      defense: 2,
      saveName: "doombringer",
      type: "DIEHARD"
    },
    {
      color: game.DIEHARD_COLOR,
      color2: game.DIEHARD_COLOR_LIGHT,
      cardName: "BERSERKER",
      textSize: 50,
      textList: [
        
      ],
      rightBox: true,
      leftBox: true,
      cost: 6, 
      attack: 9,
      defense: 3,
      saveName: "berserker",
      type: "DIEHARD"
    },
    {
      color: game.DIEHARD_COLOR,
      color2: game.DIEHARD_COLOR_LIGHT,
      cardName: "JOE THE SPRINTER",
      textSize: 40,
      textList: [
        "* Speedy"
      ],
      rightBox: true,
      leftBox: true,
      cost: 3, 
      attack: 5,
      defense: 1,
      saveName: "joesprinter",
      type: "DIEHARD"
    },
    {
      color: game.DIEHARD_COLOR,
      color2: game.DIEHARD_COLOR_LIGHT,
      cardName: "SKELETAL MOE",
      textSize: 50,
      textList: [
        "* Speedy",
        "",
        "When you play this, play",
        "Skeletal Poe, Jo, and Bo as",
        "well."
      ],
      rightBox: true,
      leftBox: true,
      cost: 4, 
      attack: 3,
      defense: 1,
      saveName: "skeletalmoe",
      type: "DIEHARD"
    },
    {
      color: game.DIEHARD_COLOR,
      color2: game.DIEHARD_COLOR_LIGHT,
      cardName: "ACCELERATED DRAGON",
      textSize: 37,
      textList: [
        "* Speedy"
      ],
      rightBox: true,
      leftBox: true,
      cost: 4, 
      attack: 5,
      defense: 3,
      saveName: "accelerateddragon",
      type: "DIEHARD"
    },
    {
      color: game.DIEHARD_COLOR,
      color2: game.DIEHARD_COLOR_LIGHT,
      cardName: "PHOR, LIGHTNING GOD",
      textSize: 37,
      textList: [
        "At the beginning of each",
        "of your turns, choose a",
        "creature to deal 2 damage",
        "to.",
        "Zaps you play do 2 damage."
      ],
      rightBox: true,
      leftBox: true,
      cost: 5,
      attack: 4,
      defense: 2,
      saveName: "phorlightninggod",
      type: "DIEHARD"
    },
    {
      color: game.DIEHARD_COLOR,
      color2: game.DIEHARD_COLOR_LIGHT,
      cardName: "SHEEP KING",
      textSize: 50,
      textList: [
        "Sheep King gets +2/+2 per",
        "other sheep you control.",
        "Other sheep you control",
        "get +1/+1.",
        "Whenever you play a",
        "sheep, draw a card."
      ],
      rightBox: true,
      leftBox: true,
      cost: 3, 
      attack: 2,
      defense: 2,
      saveName: "sheepking",
      type: "DIEHARD"
    },
    {
      color: game.DIEHARD_COLOR,
      color2: game.DIEHARD_COLOR_LIGHT,
      cardName: "JERRY",
      textSize: 50,
      textList: [
        "* Elusive",
        "",
        "While you control Jerry,",
        "you may play the Jerrys",
        "from limbo."
      ],
      rightBox: true,
      leftBox: true,
      cost: 4, 
      attack: 1,
      defense: 3,
      saveName: "jerry",
      type: "DIEHARD"
    },
    {
      color: game.DIEHARD_COLOR,
      color2: game.DIEHARD_COLOR_LIGHT,
      cardName: "PROFFESOR REGINALD",
      textSize: 35,
      textList: [
        "Once per turn, you may",
        "pay 2 to draw 3 cards."
      ],
      rightBox: true,
      leftBox: true,
      cost: 3, 
      attack: 5,
      defense: 3,
      saveName: "proffesorreginald",
      type: "DIEHARD"
    },
    {
      color: game.DIEHARD_COLOR,
      color2: game.DIEHARD_COLOR_LIGHT,
      cardName: "SHEEP PRINCE",
      textSize: 42,
      textList: [
        "Sheep Prince gets +1/+1 if",
        "you control another sheep,",
        "and can only be removed",
        "from play if you don't."
      ],
      rightBox: true,
      leftBox: true,
      cost: 2,
      attack: 3,
      defense: 1,
      saveName: "sheepprince",
      type: "DIEHARD"
    }
  ],
  [
    {
      color: game.AMMO_COLOR,
      color2: game.AMMO_COLOR_LIGHT,
      cardName: "MULTIPLE STUFFS",
      textSize: 42,
      textList: [
        "This card counts as 2",
        "cards when discarding."
      ],
      rightBox: false,
      leftBox: false,
      saveName: "multiplestuffs",
      type: "Ammo"
    },
    {
      color: game.AMMO_COLOR,
      color2: game.AMMO_COLOR_LIGHT,
      cardName: "BRICKS",
      textSize: 50,
      textList: [
        "When you draw this, place",
        "it face up in front of you",
        "(it's still in your hand.)",
        "Then, draw another card."
      ],
      rightBox: false,
      leftBox: false,
      saveName: "bricks",
      type: "Ammo"
    },
    {
      color: game.AMMO_COLOR,
      color2: game.AMMO_COLOR_LIGHT,
      cardName: "THE FOURTH WALL",
      textSize: 37,
      textList: [
        "When you draw this, place",
        "it face up in front of you",
        "(it's still in your hand.)",
        "Then, draw another card.",
        "If you lose the game with",
        "this in front of you, you",
        "don't die in real life."
      ],
      rightBox: false,
      leftBox: false,
      saveName: "thefourthwall",
      type: "Ammo"
    },
    {
      color: game.AMMO_COLOR,
      color2: game.AMMO_COLOR_LIGHT,
      cardName: "LOTS OF STUFFS",
      textSize: 50,
      textList: [
        "This card counts as 3",
        "cards when discarding."
      ],
      rightBox: false,
      leftBox: false,
      saveName: "lotsofstuffs",
      type: "Ammo"
    },
    {
      color: game.AMMO_COLOR,
      color2: game.AMMO_COLOR_LIGHT,
      cardName: "DISAPPEARING STUFFS",
      textSize: 37,
      textList: [
        "This card counts as 4",
        "cards when discarding.",
        "Don't draw cards the",
        "turn after you use this."
      ],
      rightBox: false,
      leftBox: false,
      saveName: "disappearingstuffs",
      type: "Ammo"
    }
  ],
  [
    {
      color: game.HAPPENING_COLOR,
      color2: game.HAPPENING_COLOR_LIGHT,
      cardName: "ZAP!",
      textSize: 50,
      textList: [
        "Deal 1 damage to a",
        "creature. Draw a card."
      ],
      rightBox: false,
      leftBox: true,
      cost: 0,
      saveName: "zap",
      type: "Happening"
    },
    {
      color: game.HAPPENING_COLOR,
      color2: game.HAPPENING_COLOR_LIGHT,
      cardName: "NAH.",
      textSize: 50,
      textList: [
        "* Reaction",
        "",
        "Counter any play."
      ],
      rightBox: false,
      leftBox: true,
      cost: 3,
      saveName: "nah",
      type: "Happening"
    },
    {
      color: game.HAPPENING_COLOR,
      color2: game.HAPPENING_COLOR_LIGHT,
      cardName: "WHEELBARROW",
      textSize: 42,
      textList: [
        "Look through the discard",
        "pile. Take all bricks there",
        "and all bricks in front of",
        "your opponent and put them",
        "face up in front of you.",
        "(They are still in your hand)"
      ],
      rightBox: false,
      leftBox: true,
      cost: 0,
      saveName: "wheelbarrow",
      type: "Happening"
    },
    {
      color: game.HAPPENING_COLOR,
      color2: game.HAPPENING_COLOR_LIGHT,
      cardName: "MAGIC WALL",
      textSize: 50,
      textList: [
        "* Reaction",
        "",
        "You don't take damage",
        "this turn."
      ],
      rightBox: false,
      leftBox: true,
      cost: 3,
      saveName: "magicwall",
      type: "Happening"
    },
    {
      color: game.HAPPENING_COLOR,
      color2: game.HAPPENING_COLOR_LIGHT,
      cardName: "DEATH LASER",
      textSize: 50,
      textList: [
        "Discard a card from play."
      ],
      rightBox: false,
      leftBox: true,
      cost: 3,
      saveName: "deathlaser",
      type: "Happening"
    },
    {
      color: game.HAPPENING_COLOR,
      color2: game.HAPPENING_COLOR_LIGHT,
      cardName: "FLAME PACT",
      textSize: 50,
      textList: [
        "Your opponent discards X",
        "cards. Draw a card."
      ],
      rightBox: false,
      leftBox: true,
      cost: "X",
      saveName: "flamepact",
      type: "Happening"
    },
    {
      color: game.HAPPENING_COLOR,
      color2: game.HAPPENING_COLOR_LIGHT,
      cardName: "LAST DITCH EFFORT",
      textSize: 37,
      textList: [
        "* Reaction",
        "",
        "Play if you just lost. You",
        "have 10 HP. Your opponent",
        "has 3 HP. It is your",
        "opponent's turn. You lose",
        "after your next turn."
      ],
      rightBox: false,
      leftBox: true,
      cost: 0,
      saveName: "lastditcheffort",
      type: "Happening"
    },
    {
      color: game.HAPPENING_COLOR,
      color2: game.HAPPENING_COLOR_LIGHT,
      cardName: "REMOVE THREATS",
      textSize: 44,
      textList: [
        "Discard from play the 3",
        "creatures with highest",
        "total attack + defense."
      ],
      rightBox: false,
      leftBox: true,
      cost: 5,
      saveName: "removethreats",
      type: "Happening"
    },
    {
      color: game.HAPPENING_COLOR,
      color2: game.HAPPENING_COLOR_LIGHT,
      cardName: "FAKE PANCAKE",
      textSize: 50,
      textList: [
        "Put this card in your",
        "opponent's hand. They take",
        "3 damage and discard a",
        "card of your choice."
      ],
      rightBox: false,
      leftBox: true,
      cost: 2,
      saveName: "fakepancake",
      type: "Happening"
    },
    {
      color: game.HAPPENING_COLOR,
      color2: game.HAPPENING_COLOR_LIGHT,
      cardName: "SUMMONING",
      textSize: 50,
      textList: [
        "Play the top 2 cards of the",
        "animal deck."
      ],
      rightBox: false,
      leftBox: true,
      cost: 4,
      saveName: "summoning",
      type: "Happening"
    },
    {
      color: game.HAPPENING_COLOR,
      color2: game.HAPPENING_COLOR_LIGHT,
      cardName: "COMPARE LENGTHS",
      textSize: 37,
      textList: [
        "Both players reveal their",
        "hands. The player with the",
        "card with the longest title",
        "draws 2 cards (not",
        "including spaces.)"
      ],
      rightBox: false,
      leftBox: true,
      cost: 0,
      saveName: "comparelengths",
      type: "Happening"
    },
    {
      color: game.HAPPENING_COLOR,
      color2: game.HAPPENING_COLOR_LIGHT,
      cardName: "BLACK FLAG",
      textSize: 45,
      textList: [
        "You have 4 HP. It is your",
        "opponent's turn. You win",
        "after your opponent's next",
        "turn."
      ],
      rightBox: false,
      leftBox: true,
      cost: 8,
      saveName: "blackflag",
      type: "Happening"
    },
    {
      color: game.HAPPENING_COLOR,
      color2: game.HAPPENING_COLOR_LIGHT,
      cardName: "SOMETHING HAPPENS",
      textSize: 37,
      textList: [
        "Reveal the top 4 cards",
        "of the deck. Play one of",
        "them. Your opponenet plays",
        "another one. (both cards",
        "are played for free)"
      ],
      rightBox: false,
      leftBox: true,
      cost: 4,
      saveName: "somethinghappens",
      type: "Happening"
    },
    {
      color: game.HAPPENING_COLOR,
      color2: game.HAPPENING_COLOR_LIGHT,
      cardName: "SHEEP LASER",
      textSize: 37,
      textList: [
        "Deal 3 damage to any",
        "creature in play. This",
        "damage is dealt by sheep.",
        "",
        "Draw a card if no creatures",
        "died as a result of this.",
      ],
      rightBox: false,
      leftBox: true,
      cost: 2,
      saveName: "sheeplaser",
      type: "Happening"
    }
  ],
  [
    {
      color: game.THING_COLOR,
      color2: game.THING_COLOR_LIGHT,
      cardName: "SHAPESHIFTER'S AMULET",
      textSize: 27,
      textList: [
        "Equip this to a creature.",
        "",
        "When equipped creature",
        "dies, play the top card of",
        "the animal deck and equip ",
        "this to it."
      ],
      rightBox: false,
      leftBox: true,
      cost: 3,
      saveName: "curseoftheshapeshifter",
      type: "Thing"
    },
    {
      color: game.THING_COLOR,
      color2: game.THING_COLOR_LIGHT,
      cardName: "METAL SHIRT",
      textSize: 37,
      textList: [
        "Equip this to a creature.",
        "",
        "Equipped creature gets",
        "-1/+1."
      ],
      rightBox: false,
      leftBox: true,
      cost: 1,
      saveName: "metalshirt",
      type: "Thing"
    },
    {
      color: game.THING_COLOR,
      color2: game.THING_COLOR_LIGHT,
      cardName: "LIGHTNING ROD",
      textSize: 37,
      textList: [
        "Whenever your opponent",
        "plays a zap, cancel its",
        "effect and discard this from",
        "play.",
        "Phor, Lightning God's ability",
        "only does 1 damage."
      ],
      rightBox: false,
      leftBox: true,
      cost: 1,
      saveName: "lightningrod",
      type: "Thing"
    },
    {
      color: game.THING_COLOR,
      color2: game.THING_COLOR_LIGHT,
      cardName: "DIVINE GRACE",
      textSize: 37,
      textList: [
        "Equip this to a creature.",
        "",
        "When equipped creature",
        "dies, return it to your hand",
        "and draw a card."
      ],
      rightBox: false,
      leftBox: true,
      cost: 3,
      saveName: "divinegrace",
      type: "Thing"
    },
    {
      color: game.THING_COLOR,
      color2: game.THING_COLOR_LIGHT,
      cardName: "MORAL QUANDARY",
      textSize: 37,
      textList: [
        "Equip this to a creature.",
        "",
        "Whenever a creature dies",
        "because of equipped",
        "creature, discard equipped",
        "creature from play."
      ],
      rightBox: false,
      leftBox: true,
      cost: 3,
      saveName: "moralquandary",
      type: "Thing"
    },
    {
      color: game.THING_COLOR,
      color2: game.THING_COLOR_LIGHT,
      cardName: "SPIRIT RECYCLER",
      textSize: 37,
      textList: [
        "Whenever a creature you",
        "control dies, play a 1/1",
        "spirit for free."
      ],
      rightBox: false,
      leftBox: true,
      cost: 4,
      saveName: "spiritrecycler",
      type: "Thing"
    },
    {
      color: game.THING_COLOR,
      color2: game.THING_COLOR_LIGHT,
      cardName: "SPIKE",
      textSize: 50,
      textList: [
        "Equip this to a creature.",
        "",
        "Equipped creature deals",
        "counter damage."
      ],
      rightBox: false,
      leftBox: true,
      cost: 3,
      saveName: "spike",
      type: "Thing"
    },
    {
      color: game.THING_COLOR,
      color2: game.THING_COLOR_LIGHT,
      cardName: "RADIOACTIVE HAT",
      textSize: 37,
      textList: [
        "Equip this to a creature.",
        "",
        "Equipped creature gets",
        "+1/-1 and glows slightly.",
        "",
        "(glowing doesn't do",
        "anything)"
      ],
      rightBox: false,
      leftBox: true,
      cost: 0,
      saveName: "radioactivehat",
      type: "Thing"
    }
  ],
  [
    {
      color: game.RUFFIAN_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "BLOGUUM, THE INTROVERT",
      textSize: 30,
      textList: [
        "As long as Bloguum is the",
        "only creature you control,",
        "it gets +3/+3 and can block",
        "2 creatures."
      ],
      rightBox: true,
      leftBox: true,
      cost: 4,
      attack: 3,
      defense: 2,
      saveName: "bloguumtheintrovert",
      type: "Ruffian"
    },
    {
      color: game.RUFFIAN_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "IT THAT CAN'T DIE",
      textSize: 37,
      textList: [
        "This card can't be removed",
        "from play."
      ],
      rightBox: true,
      leftBox: true,
      cost: 4,
      attack: 3,
      defense: 1,
      saveName: "itthatcantdie",
      type: "Ruffian"
    },
    {
      color: game.RUFFIAN_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "ROWDY PHIL",
      textSize: 44,
      textList: [
        "Rowdy Phil gets +2/+2 if",
        "you control Rowdy Bill."
      ],
      rightBox: true,
      leftBox: true,
      cost: 2,
      attack: 2,
      defense: 1,
      saveName: "rowdyphil",
      type: "Ruffian"
    },
    {
      color: game.RUFFIAN_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "ROWDY BILL",
      textSize: 44,
      textList: [
        "Rowdy Bill gets +2/+2 if",
        "you control Rowdy Phil."
      ],
      rightBox: true,
      leftBox: true,
      cost: 2,
      attack: 1,
      defense: 2,
      saveName: "rowdybill",
      type: "Ruffian"
    },
    {
      color: game.RUFFIAN_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "ROCKY THE CAT",
      textSize: 42,
      textList: [
        "* Takes counter damage",
        "",
        "Whenever Rocky the Cat",
        "attacks, flip a coin. On",
        "heads, it is unblockable",
        "this turn."
      ],
      rightBox: true,
      leftBox: true,
      cost: 4,
      attack: 4,
      defense: 2,
      saveName: "rockythecat",
      type: "Ruffian"
    },
    {
      color: game.RUFFIAN_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "STONY THE CAT",
      textSize: 42,
      textList: [
        "* Speedy",
        "",
        "Whenever Stony the Cat",
        "tries to attack or block, flip",
        "a coin. On tails, it can do",
        "neither."
      ],
      rightBox: true,
      leftBox: true,
      cost: 1,
      attack: 3,
      defense: 3,
      saveName: "stonythecat",
      type: "Ruffian"
    },
    {
      color: game.RUFFIAN_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "DEFENSIVE ROCK",
      textSize: 42,
      textList: [
        "* Speedy, Reaction, Solid"
      ],
      rightBox: true,
      leftBox: true,
      cost: 0,
      attack: 0,
      defense: 1,
      saveName: "defensiverock",
      type: "Ruffian"
    },
    {
      color: game.RUFFIAN_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "SHRUBBERY",
      textSize: 42,
      textList: [
        "* Speedy, Reaction, Solid,",
        "Deals counter damage"
      ],
      rightBox: true,
      leftBox: true,
      cost: 2,
      attack: 2,
      defense: 2,
      saveName: "shrubbery",
      type: "Ruffian"
    },
    {
      color: game.RUFFIAN_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "ROWDY SUSAN",
      textSize: 42,
      textList: [
        ""
      ],
      rightBox: true,
      leftBox: true,
      cost: 3,
      attack: 3,
      defense: 3,
      saveName: "rowdysusan",
      type: "Ruffian"
    },
    {
      color: game.RUFFIAN_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "ROWDY NICO",
      textSize: 42,
      textList: [
        "* Speedy"
      ],
      rightBox: true,
      leftBox: true,
      cost: 4,
      attack: 4,
      defense: 2,
      saveName: "rowdynico",
      type: "Ruffian"
    },
    {
      color: game.RUFFIAN_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "ROWDY MIKE",
      textSize: 42,
      textList: [
        "Rowdy Mike gets +2/+2 per",
        "other rowdy you control."
      ],
      rightBox: true,
      leftBox: true,
      cost: 1,
      attack: 1,
      defense: 1,
      saveName: "rowdymike",
      type: "Ruffian"
    },
    {
      color: game.RUFFIAN_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "ROWDY JANE",
      textSize: 42,
      textList: [
        ""
      ],
      rightBox: true,
      leftBox: true,
      cost: 3,
      attack: 2,
      defense: 5,
      saveName: "rowdyjane",
      type: "Ruffian"
    },
    {
      color: game.RUFFIAN_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "ROWDY BARRY",
      textSize: 42,
      textList: [
        ""
      ],
      rightBox: true,
      leftBox: true,
      cost: 3,
      attack: 3,
      defense: 3,
      saveName: "rowdybarry",
      type: "Ruffian"
    },
    {
      color: game.RUFFIAN_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "ROWDY AMELIA",
      textSize: 42,
      textList: [
        ""
      ],
      rightBox: true,
      leftBox: true,
      cost: 2,
      attack: 3,
      defense: 1,
      saveName: "rowdyamelia",
      type: "Ruffian"
    },
    {
      color: game.RUFFIAN_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "SHEEP!",
      textSize: 42,
      textList: [
        ""
      ],
      rightBox: true,
      leftBox: true,
      cost: 0,
      attack: 1,
      defense: 1,
      saveName: "sheep",
      type: "Ruffian"
    },
    {
      color: game.RUFFIAN_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "TAMER",
      textSize: 50,
      textList: [
        "When you play this, play",
        "the top card of the animal",
        "deck as well."
      ],
      rightBox: true,
      leftBox: true,
      cost: 4,
      attack: 3,
      defense: 3,
      saveName: "tamer",
      type: "Ruffian"
    },
    {
      color: game.RUFFIAN_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "COMBAT WOMBAT",
      textSize: 42,
      textList: [
        "Combat Wombat can only",
        "be blocked by creatures",
        "with 3 or less defense, and",
        "deals 5 damage to players",
        "if unblocked."
      ],
      rightBox: true,
      leftBox: true,
      cost: 5,
      attack: 2,
      defense: 3,
      saveName: "combatwombat",
      type: "Ruffian"
    },
    {
      color: game.RUFFIAN_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "LORD OF THE GUYS",
      textSize: 42,
      textList: [
        "When you play this, reveal",
        "the top 3 cards of the",
        "animal deck and choose",
        "one to play. Discard the",
        "other 2."
      ],
      rightBox: true,
      leftBox: true,
      cost: 4,
      attack: 1,
      defense: 3,
      saveName: "lordoftheguys",
      type: "Ruffian"
    },
    {
      color: game.RUFFIAN_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "AVERAGE JOE",
      textSize: 42,
      textList: [
        "Average Joe's cost, attack",
        "and defense are each",
        "equal to the average in that",
        "statistic of other creatures",
        "you control (defaults to 1",
        "if you control no other",
        "creatures.)"
      ],
      rightBox: true,
      leftBox: true,
      cost: "*",
      attack: "*",
      defense: "*",
      saveName: "averagejoe",
      type: "Ruffian"
    }
  ],
  [
    {
      color: game.DECREE_COLOR,
      color2: game.DECREE_COLOR_LIGHT,
      cardName: "TOO MANY DIEHARDS",
      textSize: 37,
      textList: [
        "Players can have 1",
        "additional diehard in play."
      ],
      rightBox: false,
      leftBox: true,
      cost: 3,
      saveName: "toomanydiehards",
      type: "Decree"
    },
    {
      color: game.DECREE_COLOR,
      color2: game.DECREE_COLOR_LIGHT,
      cardName: "MORE STUFFS!",
      textSize: 37,
      textList: [
        "You draw 1 more card per",
        "turn. Your opponent may",
        "pay 2 at any time to",
        "discard this card from",
        "play."
      ],
      rightBox: false,
      leftBox: true,
      cost: 3,
      saveName: "morestuffs",
      type: "Decree"
    },
    {
      color: game.DECREE_COLOR,
      color2: game.DECREE_COLOR_LIGHT,
      cardName: "RECOVERY BOOST",
      textSize: 37,
      textList: [
        "Whenever you take 5 or",
        "more damage in 1 turn,",
        "draw a card."
      ],
      rightBox: false,
      leftBox: true,
      cost: 3,
      saveName: "recoveryboost",
      type: "Decree"
    },
    {
      color: game.DECREE_COLOR,
      color2: game.DECREE_COLOR_LIGHT,
      cardName: "GREAT SAVINGS",
      textSize: 37,
      textList: [
        "All cards cost 1 less (for",
        "both players) but not less",
        "than 0."
      ],
      rightBox: false,
      leftBox: true,
      cost: 3,
      saveName: "greatsavings",
      type: "Decree"
    },
    {
      color: game.DECREE_COLOR,
      color2: game.DECREE_COLOR_LIGHT,
      cardName: "SAFETY",
      textSize: 50,
      textList: [
        "Players can only lose if",
        "they started the turn with",
        "3 HP or less (otherwise",
        "they can only go down to",
        "1 HP.)"
      ],
      rightBox: false,
      leftBox: true,
      cost: 2,
      saveName: "safety",
      type: "Decree"
    }
  ],
  [
    {
      color: game.WEATHER_COLOR,
      color2: game.WEATHER_COLOR_LIGHT,
      cardName: "QUARANTINE",
      textSize: 40,
      textList: [
        "Players can only attack or",
        "block with up to 2 creatures",
        "each turn."
      ],
      rightBox: false,
      leftBox: false,
      saveName: "quarantine",
      type: "Weather"
    },
    {
      color: game.WEATHER_COLOR,
      color2: game.WEATHER_COLOR_LIGHT,
      cardName: "ACTUALLY GOOD WEATHER",
      textSize: 27,
      textList: [
        "Players draw 1 more card",
        "at the start of each turn."
      ],
      rightBox: false,
      leftBox: false,
      saveName: "actuallygoodweather",
      type: "Weather"
    },
    {
      color: game.WEATHER_COLOR,
      color2: game.WEATHER_COLOR_LIGHT,
      cardName: "RAIN",
      textSize: 50,
      textList: [
        "All creatures get -1/-1 and",
        "lose speedy."
      ],
      rightBox: false,
      leftBox: false,
      saveName: "rain",
      type: "Weather"
    },
    {
      color: game.WEATHER_COLOR,
      color2: game.WEATHER_COLOR_LIGHT,
      cardName: "BLIZZARD",
      textSize: 50,
      textList: [
        "Creatures with more attack",
        "than defense can't attack",
        "or block."
      ],
      rightBox: false,
      leftBox: false,
      saveName: "blizzard",
      type: "Weather"
    },
    {
      color: game.WEATHER_COLOR,
      color2: game.WEATHER_COLOR_LIGHT,
      cardName: "RUSH HOUR",
      textSize: 50,
      textList: [
        "Players must flip a coin",
        "whenever they attack, and",
        "only can on heads."
      ],
      rightBox: false,
      leftBox: false,
      saveName: "rushhour",
      type: "Weather"
    },
    {
      color: game.WEATHER_COLOR,
      color2: game.WEATHER_COLOR_LIGHT,
      cardName: "THUNDERSTORM",
      textSize: 45,
      textList: [
        "Zaps and Phor, Lightning",
        "God's ability both do 1",
        "additional damage. At the",
        "beginning of every turn,",
        "discard from play all",
        "creatures with 1 or less",
        "defense."
      ],
      rightBox: false,
      leftBox: false,
      saveName: "thunderstorm",
      type: "Weather"
    }
  ],
  [
    {
      color: game.ANIMAL_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "* SKELETAL BO *",
      textSize: 40,
      textList: [
        ""
      ],
      rightBox: true,
      leftBox: false,
      attack: 2,
      defense: 2,
      saveName: "skeletalbo",
      type: "Ruffian"
    },
    {
      color: game.ANIMAL_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "* SKELETAL POE *",
      textSize: 40,
      textList: [
        "* Speedy"
      ],
      rightBox: true,
      leftBox: false,
      attack: 1,
      defense: 2,
      saveName: "skeletalpoe",
      type: "Ruffian"
    },
    {
      color: game.ANIMAL_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "* SKELETAL JO *",
      textSize: 40,
      textList: [
        "* Speedy"
      ],
      rightBox: true,
      leftBox: false,
      attack: 1,
      defense: 1,
      saveName: "skeletaljo",
      type: "Ruffian"
    }
  ],
  [
    {
      color: game.ANIMAL_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "* EVIL CROW *",
      textSize: 40,
      textList: [
        "When you play this, your",
        "opponent takes control of",
        "it."
      ],
      rightBox: true,
      leftBox: false,
      attack: 3,
      defense: 2,
      saveName: "evilcrow",
      type: "Ruffian"
    },
    {
      color: game.ANIMAL_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "* ZOMBIE *",
      textSize: 50,
      textList: [
        "Zombie must be blocked if",
        "possible (when it attacks)"
      ],
      rightBox: true,
      leftBox: false,
      attack: 1,
      defense: 1,
      saveName: "zombie",
      type: "Ruffian"
    },
    {
      color: game.ANIMAL_COLOR,
      color2: game.HAPPENING_COLOR_LIGHT,
      cardName: "* PLAGUE *",
      textSize: 50,
      textList: [
        "Discard a creature from",
        "play."
      ],
      rightBox: false,
      leftBox: false,
      saveName: "plague",
      type: "Happening"
    },
    {
      color: game.ANIMAL_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "* LION *",
      textSize: 50,
      textList: [
        "* Speedy"
      ],
      rightBox: true,
      leftBox: false,
      attack: 5,
      defense: 2,
      saveName: "lion",
      type: "Ruffian"
    },
    {
      color: game.ANIMAL_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "* RABBIT *",
      textSize: 50,
      textList: [
        "* Speedy, Unblockable"
      ],
      rightBox: true,
      leftBox: false,
      attack: 2,
      defense: 1,
      saveName: "rabbit",
      type: "Ruffian"
    },
    {
      color: game.ANIMAL_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "* DOG *",
      textSize: 50,
      textList: [
        "* Speedy",
        "",
        "All coin flips are heads.",
        "All cats get +1/+0 and",
        "speedy."
      ],
      rightBox: true,
      leftBox: false,
      attack: 3,
      defense: 1,
      saveName: "dog",
      type: "Ruffian"
    },
    {
      color: game.ANIMAL_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "* CAT *",
      textSize: 50,
      textList: [
        "At the beginning of each of",
        "your turns, you may flip a",
        "coin. Draw a card on heads",
        "and discard one on tails."
      ],
      rightBox: true,
      leftBox: false,
      attack: 1,
      defense: 3,
      saveName: "cat",
      type: "Ruffian"
    },
    {
      color: game.ANIMAL_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "* MONKEY *",
      textSize: 50,
      textList: [
        "When this attacks, you may",
        "exchange it with another",
        "attacking creature (after",
        "opponent assigns",
        "blockers.)"
      ],
      rightBox: true,
      leftBox: false,
      attack: 1,
      defense: 1,
      saveName: "monkey",
      type: "Ruffian"
    },
    {
      color: game.ANIMAL_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "* GOOD CROW *",
      textSize: 40,
      textList: [
        ""
      ],
      rightBox: true,
      leftBox: false,
      attack: 3,
      defense: 2,
      saveName: "goodcrow",
      type: "Ruffian"
    },
    {
      color: game.ANIMAL_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "* PYTHON *",
      textSize: 50,
      textList: [
        "All other attacking",
        "creatures must be blocked",
        "before Python."
      ],
      rightBox: true,
      leftBox: false,
      attack: 3,
      defense: 2,
      saveName: "python",
      type: "Ruffian"
    },
    {
      color: game.ANIMAL_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "* ELEPHANT *",
      textSize: 50,
      textList: [
        ""
      ],
      rightBox: true,
      leftBox: false,
      attack: 5,
      defense: 6,
      saveName: "elephant",
      type: "Ruffian"
    },
    {
      color: game.ANIMAL_COLOR,
      color2: game.HAPPENING_COLOR_LIGHT,
      cardName: "* REPLICA *",
      textSize: 50,
      textList: [
        "You may play a Ruffian",
        "from your hand for free."
      ],
      rightBox: false,
      leftBox: false,
      saveName: "replica",
      type: "Happening"
    }
  ],
  [
    {
      color: game.ANIMAL_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "* FAIRY *",
      textSize: 50,
      textList: [
        "* Elusive, Unblockable"
      ],
      rightBox: true,
      leftBox: true,
      cost: 3,
      attack: 4,
      defense: 2,
      saveName: "fairy",
      type: "Ruffian"
    },
    {
      color: game.ANIMAL_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "* PERRY *",
      textSize: 50,
      textList: [
        ""
      ],
      rightBox: true,
      leftBox: true,
      cost: 0,
      attack: 1,
      defense: 1,
      saveName: "perry",
      type: "Ruffian"
    },
    {
      color: game.ANIMAL_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "* TERRY *",
      textSize: 50,
      textList: [
        ""
      ],
      rightBox: true,
      leftBox: true,
      cost: 1,
      attack: 2,
      defense: 2,
      saveName: "terry",
      type: "Ruffian"
    },
    {
      color: game.ANIMAL_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "* MARY *",
      textSize: 50,
      textList: [
        "* Speedy"
      ],
      rightBox: true,
      leftBox: true,
      cost: 2,
      attack: 3,
      defense: 2,
      saveName: "mary",
      type: "Ruffian"
    },
    {
      color: game.ANIMAL_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "* HARRY *",
      textSize: 50,
      textList: [
        "* Solid"
      ],
      rightBox: true,
      leftBox: true,
      cost: 3,
      attack: 1,
      defense: 5,
      saveName: "harry",
      type: "Ruffian"
    }
  ],
  [
    {
      color: game.ANIMAL_COLOR,
      color2: game.RUFFIAN_COLOR_LIGHT,
      cardName: "SPIRIT",
      textSize: 50,
      textList: [
        ""
      ],
      rightBox: true,
      leftBox: false,
      attack: 1,
      defense: 1,
      saveName: "spirit",
      type: "Ruffian"
    }
  ]
];

for (let i = 0; i < carddata.length; i++) {
  for (let j = 0; j < carddata[i].length; j++) {
    makeImage(carddata[i][j]);
  }
}