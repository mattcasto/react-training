export default (state = { users: [], user: { name: '', email: '' } }, action) => {
  switch (action.type) {
    case 'INIT':
      return {users: action.users};
    case 'ADD_USER':
      let oldUsers = state.users;
      let newUsers = Object.assign([], oldUsers);
      newUsers.push(action.user);
      return {users: newUsers};
    default:
      return state;
  }
}