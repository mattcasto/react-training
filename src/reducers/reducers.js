import { defaultHero, defaultHeroes } from '../config/default';

const initialState = {
  heroes: defaultHeroes(),
  hero: defaultHero()
}

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'INIT':
      return Object.assign(newState, { heroes: action.heroes });
    case 'UPDATE':
      return Object.assign(newState, { heroes: updateHero(state, action.hero) });
    case 'SELECT':
      return Object.assign(newState, { hero: action.hero });
    default:
      return state;
  }
}

function updateHero(state, hero) {
  let oldUsers = state.heroes;
  let returnValue = Object.assign([], oldUsers);

  const newHero = {
    name: hero.name,
    email: hero.email
  };

  if (isNaN(hero.id)) {
    returnValue.push(newHero);
  } else {
    returnValue[hero.id] = newHero;
  }

  return returnValue;
}