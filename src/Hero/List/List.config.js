import URI from '../Hero.config.js';
const REDUCER_NAME = 'heroes',
  EVENTS = {
    LIST: 'LIST_HERO'
  },
  _default = [];

function generator() { return Object.assign([], _default); }

export { URI, EVENTS, REDUCER_NAME, generator };