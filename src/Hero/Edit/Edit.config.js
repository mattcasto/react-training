import URI from '../Hero.config.js';

const EVENTS = {
    SELECT: 'SELECT_HERO'
  },
  _default = {
    'groups': [],
    'abilities': {
      'fightingSkills': 0,
      'strength': 0,
      'durability': 0,
      'energyProjection': 0,
      'speed': 0,
      'intelligence': 0
    },
    'realName': '',
    's3ImageUrl': '',
    'powers': '',
    'uuid': '',
    'heroName': '',
    'signedAccords': ''
  };;

function generator() { return Object.assign({}, _default); }

export { URI, EVENTS, generator };