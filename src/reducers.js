
const initialState = {
  users: [],
  user: { name: '', email: '' }
}

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'INIT':
      return Object.assign(newState, { users: action.users });
    case 'UPDATE_USER':
      return Object.assign(newState, { users: updateUsers(state, action.user) });
    case 'SELECT_USER':
      return Object.assign(newState, { user: action.user });
    default:
      return state;
  }
}

function updateUsers(state, user) {
  let oldUsers = state.users;
  let returnValue = Object.assign([], oldUsers);

  const newUser = {
    name: user.name,
    email: user.email
  };

  if (isNaN(user.id)) {
    returnValue.push(newUser);
  } else {
    returnValue[user.id] = newUser;
  }

  return returnValue;
}