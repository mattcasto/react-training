
const initialState = {
  heroes: [],
  hero: { name: '', email: '' }
}

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'INIT':
      return Object.assign(newState, { heroes: action.heroes });
    case 'UPDATE':
      return Object.assign(newState, { heroes: updateUsers(state, action.hero) });
    case 'SELECT':
      return Object.assign(newState, { hero: action.hero });
    default:
      return state;
  }
}

function updateUsers(state, hero) {
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