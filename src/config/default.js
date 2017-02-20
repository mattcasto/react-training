export { defaultHero, defaultHeroes };

const _heroes = [],
  _hero = {
    'abilities': {
      'fighting skills': 0,
      'strength': 0,
      'durability': 0,
      'energy projection': 0,
      'speed': 0,
      'intelligence': 0
    },
    'realName': '',
    's3ImageUrl': '',
    'powers': '',
    'uuid': '',
    'heroName': '',
    'signedAccords': ''
  };

/**
 * Generates a default hero
 */
function defaultHero() { return Object.assign({}, _hero); }
function defaultHeroes() { return Object.assign([], _heroes); }