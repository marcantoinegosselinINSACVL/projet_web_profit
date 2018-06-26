//----------------------------------------------------------------
// store (contains the products)
//
// score legend:
// 0: below 5% of daily value (DV)
// 1: 5-10% DV
// 2: 10-20% DV
// 3: 20-40% DV
// 4: above 40% DV
//
function store() {
    this.products = [
        new product("BBLIN", "Upstart Goblin", "Draw 1 card, then your opponent gains 1000 Life Points", 2, 90, 0, 2, 0, 1, 2),
        new product("BYWD", "Blue Eyes White Dragon", "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.", 20, 90, 0, 1, 1, 1, 2),
        new product("DMAG", "Dark Magician", "The ultimate wizard in terms of attack and defense.", 20, 120, 0, 2, 1, 2, 2),
        new product("CYL", "Magic Cylinder", "When an opponent's monster declares an attack: Target the attacking monster; negate the attack, and if you do, inflict damage to your opponent equal to its ATK.", 12, 50, 4, 4, 1, 2, 0),
        new product("DMAGG", "Dark Magician Girl", "Gains 300 ATK for every Dark Magician or Magician of Black Chaos in the GY.", 15, 100, 0, 0, 0, 1, 2),
        new product("EXOHEAD", "Exodia The Forbidden One", "If you have Right Leg of the Forbidden One, Left Leg of the Forbidden One, Right Arm of the Forbidden One and Left Arm of the Forbidden One in addition to this card in your hand, you win the Duel.", 42, 50, 4, 4, 1, 1, 1),
        new product("EXOLA", "Left Arm Of The Forbidden One", "A forbidden left arm sealed by magic. Whosoever breaks this seal will know infinite power.", 11, 100, 0, 3, 0, 1, 1),
        new product("EXOLL", "Left Leg Of The Forbidden One", "A forbidden left leg sealed by magic. Whosoever breaks this seal will know infinite power.", 11, 50, 4, 4, 0, 1, 2),
        new product("EXORA", "Right Arm Of The Forbidden One", "A forbidden right arm sealed by magic. Whosoever breaks this seal will know infinite power.", 11, 90, 1, 4, 0, 2, 2),
        new product("EXORL", "Right Left Of The Forbidden One", "A forbidden right leg sealed by magic. Whosoever breaks this seal will know infinite power.", 11, 125, 1, 4, 0, 2, 2),
        new product("DPAL", "Dark Paladin", "Must be Fusion Summoned. When a Spell Card is activated (Quick Effect): You can discard 1 card; negate the activation, and if you do, destroy it. This card must be face-up on the field to activate and to resolve this effect. Gains 500 ATK for each Dragon monster on the field and in the GY", 25, 70, 3, 4, 0, 1, 1),
        new product("GBLIN", "Goblin Attack Force", "If this card attacks, it is changed to Defense Position at the end of the Battle Phase, and its battle position cannot be changed until the End Phase of your next turn.", 11, 70, 1, 4, 2, 1, 2),
        new product("GOODGBL", "Good Goblin HouseKeeping", "Draw cards equal to the number of Good Goblin Housekeeping cards in your Graveyard +1, then select 1 card from your hand and return it to the bottom of your Deck.", 13, 60, 3, 4, 2, 2, 2),
        new product("KURI", "Kuriboh", "During your opponent's turn, at damage calculation: You can discard this card; you take no battle damage from that battle (this is a Quick Effect).", 1, 70, 1, 2, 0, 1, 2),
        new product("MRRFRC", "Mirror Force", "When an opponent's monster declares an attack: Destroy all your opponent's Attack Position monsters.", 10, 100, 0, 2, 0, 1, 2),
        new product("MSTREB", "Monster Reborn", "Target 1 monster in either player's Graveyard; Special Summon it.", 20, 110, 0, 2, 0, 2, 0),
        new product("OBLSK", "Obelisk The Tormentor", "Cannot be targeted by Spells, Traps, or card effects. Once per turn, during the End Phase, if this card was Special Summoned: Send it to the Graveyard. You can Tribute 2 monsters; destroy all monsters your opponent controls. This card cannot declare an attack the turn this effect is activated.", 35, 60, 0, 3, 0, 0, 1),
        new product("POLY", "Polymerization", "Fusion Summon 1 Fusion Monster from your Extra Deck, using monsters from your hand or field as Fusion Material.", 14, 120, 4, 3, 0, 1, 3),
        new product("RA", "The Winged Dragon Of Ra", "This card's Normal Summon cannot be negated. When Normal Summoned, other cards and effects cannot be activated. When this card is Normal Summoned: You can pay LP so that you only have 100 left; this card gains ATK and DEF equal to the amount of LP paid. You can pay 1000 LP, then target 1 monster on the field; destroy that target.", 35, 40, 0, 4, 1, 1, 2),
        new product("RYDD", "Red Eyes B.Dragon", "A ferocious dragon with a deadly attack.", 20, 50, 3, 4, 1, 1, 2),
        new product("SLIFER", "Slifer The Sky Dragon", "When Normal Summoned, cards and effects cannot be activated. Once per turn, during the End Phase, if this card was Special Summoned: Send it to the GY. Gains 1000 ATK and DEF for each card in your hand. If a monster(s) is Normal or Special Summoned to your opponent's field in Attack Position: That monster(s) loses 2000 ATK, then if its ATK has been reduced to 0 as a result, destroy it.", 20, 90, 4, 4, 0, 1, 1)
    ];
    this.dvaCaption = [
        "Negligible",
        "Low",
        "Average",
        "Good",
        "Great"
    ];
    this.dvaRange = [
        "below 5%",
        "between 5 and 10%",
        "between 10 and 20%",
        "between 20 and 40%",
        "above 40%"
    ];
}
store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}
