const URI = 'https://ce3rt0e0yl.execute-api.us-east-1.amazonaws.com/prod/abbSkills',
  EVENTS = {
    LIST: 'LIST_GROUP',
    SELECT: 'SELECT_GROUP',
    MODIFY: 'MODIFY_GROUP'
  },
  _heroes = [],
  _hero = {
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
  };

function defaultHero() { return Object.assign({}, _hero); }
function defaultHeroes() { return Object.assign([], _heroes); }

export { URI, EVENTS, defaultHero, defaultHeroes };