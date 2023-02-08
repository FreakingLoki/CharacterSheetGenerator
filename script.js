// define random number generator function
const getRandomInt = multiplier => {
    const randomInt = Math.floor(Math.random() * multiplier);
    return randomInt;
}

// define randomized number generator based on a parent stat and a luck stat
// stats using this function have a beginning value of 20
const getComplexInt = (luck, parentStat) => {
    const complexInt = 20 + Math.floor(((1.4 * parentStat) + luck));
    return complexInt;
}

// define function for determining value of a stat based only on luck
const getStat = luck => {
    const stat = getRandomInt(51) + luck
    return stat;
}



// define name generator function
const genName = () => {
    // array of possible first names
    const firstNames = [
        'Daryndel', 'Azura', 'Deliadorn', 'Hrothgar', 'Faelivrin', 'Lothlorien', 
        'Tathariel', 'Eilinel', 'Galathil', 'Arweniel', 'Eadwynn', 'Nessa', 'Rhudaur', 
        'Thrainor', 'Melwasul', 'Elara', 'Thorne', 'Kael', 'Niamh', 'Aelric', 
        'Seraphina', 'Evangeline', 'Orion', 'Isolde', 'Lorcan', 'Calla', 'Lysandra', 
        'Dante', 'Ariadne', 'Galen', 'Mei-Lai', 'Jesse', 'Freaking', 'Loki', 'Partyboy', 
        'Anti', 'Belle', 'Jasmine', 'Ron', 'John'
    ];

    // array of possible last names
    const lastNames = [
        'Fireheart', 'Starweaver', 'Snowfoot', 'Ironfist', 'Moonblade',
        'of the Wood', 'Stormchaser', 'Moonlit', 'Forestwhisper', 'Shadowblade', 
        'Oceanheart', 'Wildwood', 'Watersinger', 'Wanderer', 'Thundercaller',
        'Shadowhunter', 'Stormcaller', 'Nightingale', 'Bloodhound', 'Silverclaw',
        'Frostheart', 'Wildwood', 'Thunderstrike', 'Blackthorn', 'Moonblade', 
        'Starweaver', 'Ironfist', 'Fireheart', 'Riverstone', 'Windrider', 'of the Hills', 
        'of the Stars', 'of the Moon', 'of the Lambs', 'of the Elms', 'McCool Guy', 
        'Goodparty', 'Patience', 'Johnson', 'Smith'
    ];

    // randomize numbers to get ready to select name
    const numOne = getRandomInt(firstNames.length);
    const numTwo = getRandomInt(lastNames.length);

    // concat the results into a single string and return the name
    const charName = firstNames[numOne] + ' ' + lastNames[numTwo];
    return charName;

};

// define randomized alignment function
getAlignment =() => {
    // array of possible lawfulness or order
    const order = ['Lawful', 'Neutral', 'Chaotic'];

    // array of possible moralities
    const morals = ['Good', 'Neutral', 'Evil'];

    //get randomized index for each array
    const orderRoll = getRandomInt(order.length);
    const moralRoll = getRandomInt(morals.length);

    //declare alignment variable
    let randomAlignment = '';

    // avoid returning 'Neutral Neutral' by reassigning that result to 'True Neutral'
    // return all other results normally
    if (orderRoll === moralRoll) {
        randomAlignment = 'True Neutral';
    } else {
        randomAlignment = `${order[orderRoll]} ${morals[moralRoll]}`;
    };

    //output alignment
    return randomAlignment;

};

//define biography generator function
const genBio = () => {
    // array of possible biographies
    const bios = [
        "A dragonborn warrior who serves as the champion of their people. With a powerful voice and unmatched strength, they lead their tribe to victory in battle.",
        "A tiefling rogue who uses their charm and cunning to navigate the criminal underworld. They live by their own code and are always on the lookout for the next big score.",
        "A gnome wizard who devotes their life to the pursuit of knowledge. They have a vast array of spells and a thirst for adventure that takes them to the far corners of the world.",
        "A human paladin who wields a holy power in the name of justice. They are a force for good and will stop at nothing to protect the innocent and vanquish evil.",
        "A half-elf bard who uses their musical gifts to heal the wounded and lift the spirits of those in need. They travel from town to town, spreading hope and joy wherever they go.",
        "A dwarf cleric who serves as the spiritual leader of their people. With a deep connection to their deity, they offer guidance, protection, and comfort to all who seek it.",
        "An elven ranger who patrols the wilds, tracking and hunting dangerous beasts. They are masters of archery and stealth, and are at home in even the harshest environments.",
        "A halfling rogue who uses their quick wit and nimble fingers to get what they want. Whether it's thievery or diplomacy, they always come out on top.",
        "A human sorcerer who commands the power of the elements. With a flick of their wrist, they can summon lightning, fire, and ice to destroy their enemies.",
        "A gnome bard who uses their musical gifts to bring laughter and joy wherever they go. Whether they're performing on a stage or entertaining their friends, they always leave a smile on people's faces.",
        "A tiefling warlock who has made a pact with a powerful entity in exchange for dark power. They walk a dangerous path, but their magic is unmatched.",
        "A dragonborn paladin who serves as a defender of their people. With a powerful voice and unmatched strength, they lead their tribe to victory in battle and bring peace to the land.",
        "A human wizard who seeks out knowledge and arcane lore. They are a master of illusions and divination, and have a talent for solving puzzles and uncovering secrets.",
        "An elven ranger who has pledged their life to the protection of nature. They are guardians of the wild, and will stop at nothing to defend their woodland home.",
        "A dwarf cleric who serves as a healer, using their divine power to cure the sick and heal the wounded. They are a beacon of hope in times of darkness.",
        "A halfling rogue who is always on the lookout for the next big score. With their quick wit and nimble fingers, they are a force to be reckoned with in any heist.",
        "A human sorcerer who has the gift of second sight. They use their visions to guide their path, and their magic to protect those in need.",
        "A gnome bard who is always on the move. They travel from town to town, performing for anyone who will listen. With their wit and charm, they can talk their way out of any situation.",
        "A tiefling warlock who has made a dark pact in eXchange for power. They are feared and respected, and will stop at nothing to achieve their goals.",
        "A dragonborn warrior who has dedicated their life to the protection of their village. They are masterful with a sword and shield. They will spend hours patrolling their borders.",
        "A half-elf druid who uses their connection to nature to heal the land and its creatures. They have a deep reverence for all living things and will stop at nothing to protect them.",
        "A human fighter who is a master of weapons and combat. They have traveled the world, seeking out new challenges and opportunities for battle.",
        "An elven archer who is a master of the bow. They have an unwavering aim and a steady hand, and are feared by their enemies.",
        "A dwarf barbarian who is a force of nature in battle. With a roar and a swung axe, they crush their foes and protect their kin.",
        "A halfling thief who uses their small size and quick reflexs to their advantage. They are a master of stealth and deception, and always have a trick up their sleeve.",
        "A human wizard who specializes in necromancy. They have a fascination with death and the afterlife, and use their magic to raise the dead and command the spirits.",
        "A tiefling warlord who leads their army with cunning and charisma. They are a force to be reckoned with on the battlefield, and their followers would follow them to the ends of the earth.",
        "A dragonborn ranger who is a tracker and hunter of the greatest order. They are at home in the wilderness and can find their way through the darkest of forests.",
        "A gnome illusionist who uses their magic to create and manipulate reality. They are a master of deception and have a mischievous streak a mile wide.",
        "An elven bard who uses their voice and music to tell tales of adventure and romance. They are a traveling minstrel, and their performances are the stuff of legend.",
        "A human party animal. This good, good party boy uses his excellent social skills and some liquid courage to avoid or entice conflict as he sees fit.",
        "A dragonborn warrior. This warrior uses their krav maga mastery (learned from Tom McGraw) to dominate their foes."
    ];

    // get a random index to use with the array of biographies
    const num = Math.floor(Math.random() * (bios.length));

    // choose a biography based on the random index
    const randomBio = bios[num];

    //return the randomized biography
    return randomBio;
      
};

// define class selection function
const getClass = (STR, DEX, INT, CHA, LCK) => {

    let determinedClass = ''

    // strength based classes
    if (STR > DEX && STR > INT) {
        if (DEX > CHA && INT > CHA) {
            determinedClass = 'Barbarian'
        } else if (DEX > INT && DEX > CHA) {
            determinedClass = 'Warrior'
        } else if (INT > DEX && INT > CHA) {
            determinedClass = 'Paladin'
        } else if (CHA > INT && CHA > DEX) {
            determinedClass ='Warlord'
        } else {
            determinedClass = 'Fighter'
        }
    }

    // dexterity based classes
    if (DEX > STR && DEX > INT) {
        if (STR > INT && STR > CHA) {
            determinedClass = 'Archer'
        } else if (CHA < INT && CHA < STR) {
            determinedClass = 'Ranger'
        } else if (CHA > INT && CHA > STR) {
            determinedClass = 'Rogue'
        } else {
            determinedClass = 'Thief'
        }
    } if (INT > STR && INT > DEX) {
        if (STR < DEX && STR < CHA) {
            determinedClass = 'Wizard'
        } else if (STR > DEX && STR > CHA) {
            determinedClass = 'Warlock'
        } else if (DEX < STR && DEX < CHA) {
            determinedClass = 'Druid'
        } else if (DEX > STR && DEX > CHA) {
            determinedClass = 'Illusionist'
        } else {
            determinedClass = 'Sorcerer'
        }
    } if (CHA > STR && CHA > INT) {
        if (LCK >= 50) {
            determinedClass = 'Party Animal'
        } else if (INT > STR && INT > DEX) {
            determinedClass ='Cleric'
        } else {
            determinedClass = 'Bard'
        }

    };

    return determinedClass;
};

// luck has an effect on all other stat rolls and has to be rolled for first
const LCK = getRandomInt(51);

// roll for basic stats
const STR = getStat(LCK);
const DEX = getStat(LCK);
const INT = getStat(LCK);
const CHA = getStat(LCK);

// roll for stats based on a parent stat
const VIT = getComplexInt(LCK, STR);
const AGI = getComplexInt(LCK,DEX);
const WIS = getComplexInt(LCK, INT);

const charClass = getClass(STR, DEX, INT, CHA, LCK);


// generate a randomized name
const charName = genName();

// generate a randomized alignment
const charAlign = getAlignment();

// get a randomized biography
const charBio = genBio();

// output the character sheet
console.log(`Name: ${charName}`);
console.log(`Alignment: ${charAlign}`);
console.log(`Class: ${charClass}`);
console.log(`Bio: ${charBio}`);
console.log(`Luck: ${LCK}`);
console.log(`Strength: ${STR}`);
console.log(`Vitality: ${VIT}`);
console.log(`Dexterity: ${DEX}`);
console.log(`Agility: ${AGI}`);
console.log(`Intelligence: ${INT}`);
console.log(`Wisdom: ${WIS}`);
console.log(`Charisma: ${CHA}`);